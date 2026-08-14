#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import sys
import time
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import server  # noqa: E402
from memory_extraction import (  # noqa: E402
    adjudication_messages,
    normalize_reviews,
    review_has_literal_entity_conflict,
    review_messages,
    review_schema_for_count,
    score_run,
    validate_extraction,
)
from scripts.memory_extraction_harness import (  # noqa: E402
    atomic_write_json,
    completion_json,
    segment_metrics,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="在本地校验规则升级后重验隔离候选，并重新执行独立审查。")
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    return parser.parse_args()


def revalidate_chapter(chapter: dict[str, Any], source_text: str) -> dict[str, Any]:
    raw_candidates: list[dict[str, Any]] = []
    seen: set[tuple[str, str]] = set()
    for raw in [
        *chapter.get("facts", []),
        *[
            rejection.get("fact")
            for rejection in chapter.get("rejections", [])
            if isinstance(rejection, dict)
        ],
    ]:
        if not isinstance(raw, dict):
            continue
        key = (str(raw.get("statement") or ""), str(raw.get("evidence_quote") or ""))
        if key in seen:
            continue
        seen.add(key)
        raw_candidates.append(raw)
    validation = validate_extraction(
        {"chapter": chapter.get("chapter", ""), "facts": raw_candidates},
        str(chapter.get("chapter") or ""),
        source_text,
        require_named_subject_in_evidence=True,
        require_named_subject_in_statement=True,
    )
    return {
        **chapter,
        **validation,
        "reviews": [],
        "promoted_facts": [],
        "promoted_count": 0,
        "revalidated": True,
    }


def main() -> int:
    args = parse_args()
    input_path = Path(args.input).expanduser().resolve()
    output_path = Path(args.output).expanduser().resolve()
    report = json.loads(input_path.read_text(encoding="utf-8"))
    runs = report.get("runs", [])
    if not runs:
        raise SystemExit("输入报告没有运行结果")
    space_id = str(report.get("space_id") or "").strip()
    source_revision = str(report.get("source_revision") or "").strip()
    if not space_id or server.source_revision(space_id) != source_revision:
        raise SystemExit("当前原文版本与输入报告不一致，不能重验")
    settings = server.provider_settings(str(report.get("provider") or ""), str(report.get("model") or "") or None)
    if not settings.configured:
        raise SystemExit("原报告使用的模型服务当前未配置")
    client = server.build_client(settings)
    chapters: list[dict[str, Any]] = []
    for original in runs[-1].get("chapters", []):
        started = time.time()
        preview = server.source_chapter_preview(str(original.get("chapter") or ""), space_id=space_id)
        if hashlib.sha256(preview["text"].encode("utf-8")).hexdigest() != original.get("source_sha256"):
            raise SystemExit(f"章节原文已变化，不能重验：{original.get('chapter')}")
        chapter = revalidate_chapter(original, preview["text"])
        if chapter["facts"]:
            review_raw, review_meta = completion_json(
                client,
                settings,
                review_messages(chapter["chapter"], preview["text"], chapter["facts"]),
                "novel_memory_revalidation_review",
                review_schema_for_count(len(chapter["facts"])),
                5000,
            )
            chapter["reviews"] = normalize_reviews(review_raw, len(chapter["facts"]))
            chapter["review_response"] = review_meta
            chapter["review_adjudications"] = []
            for index, prior_review in enumerate(list(chapter["reviews"])):
                fact = chapter["facts"][index]
                if not review_has_literal_entity_conflict(fact, prior_review):
                    continue
                adjudication_raw, adjudication_meta = completion_json(
                    client,
                    settings,
                    adjudication_messages(chapter["chapter"], fact, prior_review),
                    "novel_memory_review_adjudication",
                    review_schema_for_count(1),
                    3000,
                )
                adjudicated = normalize_reviews(adjudication_raw, 1)
                if not adjudicated:
                    continue
                replacement = {**adjudicated[0], "fact_index": index, "adjudicated": True}
                chapter["reviews"][index] = replacement
                chapter["review_adjudications"].append({
                    "fact_index": index,
                    "prior_review": prior_review,
                    "review": replacement,
                    "response": adjudication_meta,
                })
            passing = {
                review["fact_index"]
                for review in chapter["reviews"]
                if review.get("verdict") == "pass"
                and all(review.get(field) for field in (
                    "grounded", "atomic", "entities_resolved", "category_correct", "time_correct", "useful",
                ))
            }
            chapter["promoted_facts"] = [
                fact for index, fact in enumerate(chapter["facts"]) if index in passing
            ]
            chapter["promoted_count"] = len(chapter["promoted_facts"])
        chapter["elapsed_seconds"] = round(time.time() - started, 3)
        chapters.append(chapter)
    run = {
        "prompt_version": runs[-1].get("prompt_version", ""),
        "focus": report.get("focus") or runs[-1].get("focus") or [],
        "chapters": chapters,
        "score": score_run(chapters, require_reviews=True),
        "segments": segment_metrics(chapters),
    }
    result = {
        **report,
        "experiment": "memory-extraction-revalidation",
        "created_at": time.time(),
        "revalidated_from": str(input_path),
        "partial": False,
        "production_knowledge_modified": False,
        "runs": [run],
    }
    atomic_write_json(output_path, result)
    print(json.dumps({
        "ok": True,
        "output": str(output_path),
        "production_knowledge_modified": False,
        "score": run["score"],
    }, ensure_ascii=False, indent=2))
    return 0 if run["score"].get("passed") else 1


if __name__ == "__main__":
    raise SystemExit(main())
