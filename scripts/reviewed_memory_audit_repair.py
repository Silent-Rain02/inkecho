#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import server  # noqa: E402
from inkecho.memory_extraction import (  # noqa: E402
    normalize_reviews,
    repair_messages,
    repair_schema_for_count,
    review_messages,
    review_schema_for_count,
    score_run,
    validate_extraction,
)
from scripts.memory_extraction_harness import atomic_write_json, completion_json, segment_metrics  # noqa: E402
from scripts.reviewed_memory_audit import passing_indices  # noqa: E402


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="修复整库二审中的可修复事实，并用独立复核确认。")
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    input_path = Path(args.input).expanduser().resolve()
    output_path = Path(args.output).expanduser().resolve()
    report = json.loads(input_path.read_text(encoding="utf-8"))
    runs = report.get("runs", [])
    if not runs:
        raise SystemExit("输入报告没有二审结果")
    space_id = str(report.get("space_id") or "")
    source_revision = str(report.get("source_revision") or "")
    if not space_id or server.source_revision(space_id) != source_revision:
        raise SystemExit("当前原文版本与二审报告不一致")
    settings = server.provider_settings(
        str(report.get("provider") or ""),
        str(report.get("model") or "") or None,
    )
    if not settings.configured:
        raise SystemExit("二审所用模型服务当前未配置")
    client = server.build_client(settings)
    chapters: list[dict[str, Any]] = []

    for original in runs[-1].get("chapters", []):
        chapter = json.loads(json.dumps(original, ensure_ascii=False))
        facts = chapter.get("facts", [])
        reviews = chapter.get("reviews", [])
        repairable = [
            review
            for review in reviews
            if review.get("verdict") != "pass"
            and review.get("grounded")
            and review.get("entities_resolved")
            and review.get("useful")
        ]
        chapter["audit_repairs"] = []
        if repairable:
            preview = server.source_chapter_preview(chapter["chapter"], space_id=space_id)
            repair_raw, repair_meta = completion_json(
                client,
                settings,
                repair_messages(chapter["chapter"], facts, reviews),
                "novel_memory_audit_repair",
                repair_schema_for_count(len(facts)),
                5000,
            )
            valid_repairs: list[dict[str, Any]] = []
            original_indices: list[int] = []
            for raw in repair_raw.get("repairs", []):
                if not isinstance(raw, dict):
                    continue
                try:
                    original_index = int(raw.get("fact_index"))
                except (TypeError, ValueError):
                    continue
                if not any(int(review.get("fact_index", -1)) == original_index for review in repairable):
                    continue
                candidate = {key: value for key, value in raw.items() if key != "fact_index"}
                candidate["id"] = facts[original_index].get("id", "")
                candidate["evidence_quote"] = facts[original_index].get("evidence_quote", "")
                candidate["chunk_index"] = facts[original_index].get("chunk_index", 0)
                validation = validate_extraction(
                    {"chapter": chapter["chapter"], "facts": [candidate]},
                    chapter["chapter"],
                    preview["text"],
                    require_named_subject_in_evidence=True,
                    require_named_subject_in_statement=True,
                )
                attempt = {
                    "fact_index": original_index,
                    "original_fact": facts[original_index],
                    "validation": validation,
                    "repair_response": repair_meta,
                }
                chapter["audit_repairs"].append(attempt)
                if validation.get("accepted_count") == 1:
                    repaired = validation["facts"][0]
                    repaired["id"] = facts[original_index].get("id", "")
                    repaired["chunk_index"] = facts[original_index].get("chunk_index", 0)
                    valid_repairs.append(repaired)
                    original_indices.append(original_index)
            if valid_repairs:
                review_raw, review_meta = completion_json(
                    client,
                    settings,
                    review_messages(chapter["chapter"], preview["text"], valid_repairs),
                    "novel_memory_audit_repair_review",
                    review_schema_for_count(len(valid_repairs)),
                    4000,
                )
                repaired_reviews = normalize_reviews(review_raw, len(valid_repairs))
                reviews_by_index = {int(review["fact_index"]): review for review in reviews}
                for relative_index, repaired_review in enumerate(repaired_reviews):
                    if relative_index >= len(original_indices):
                        continue
                    original_index = original_indices[relative_index]
                    mapped = {**repaired_review, "fact_index": original_index, "repaired": True}
                    attempt = next(
                        item for item in chapter["audit_repairs"]
                        if item["fact_index"] == original_index
                    )
                    attempt["review"] = mapped
                    attempt["review_response"] = review_meta
                    if mapped.get("verdict") == "pass" and all(mapped.get(field) for field in (
                        "grounded", "atomic", "entities_resolved", "category_correct", "time_correct", "useful",
                    )):
                        facts[original_index] = valid_repairs[relative_index]
                        reviews_by_index[original_index] = mapped
                chapter["reviews"] = [reviews_by_index[index] for index in sorted(reviews_by_index)]
        keep = passing_indices(chapter.get("reviews", []))
        chapter["promoted_facts"] = [fact for index, fact in enumerate(facts) if index in keep]
        chapter["promoted_count"] = len(chapter["promoted_facts"])
        chapter["facts"] = facts
        chapters.append(chapter)

    run = {
        "prompt_version": "second-pass-memory-audit-v1-repaired",
        "chapters": chapters,
        "score": score_run(chapters, require_reviews=True),
        "segments": segment_metrics(chapters),
    }
    result = {
        **report,
        "experiment": "reviewed-memory-second-pass-audit-repair",
        "created_at": time.time(),
        "repaired_from": str(input_path),
        "production_knowledge_modified": False,
        "partial": False,
        "runs": [run],
    }
    atomic_write_json(output_path, result)
    print(json.dumps({
        "ok": True,
        "output": str(output_path),
        "production_knowledge_modified": False,
        "score": run["score"],
        "repair_attempts": sum(len(chapter.get("audit_repairs", [])) for chapter in chapters),
    }, ensure_ascii=False, indent=2))
    return 0 if run["score"].get("passed") else 1


if __name__ == "__main__":
    raise SystemExit(main())
