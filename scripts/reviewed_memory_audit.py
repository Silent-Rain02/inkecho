#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import sys
import time
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import server  # noqa: E402
from inkecho.ecphory_memory import PersistentEcphoryMemoryBackend  # noqa: E402
from inkecho.memory_extraction import (  # noqa: E402
    adjudication_messages,
    normalize_reviews,
    review_has_literal_entity_conflict,
    review_messages,
    review_schema_for_count,
    score_run,
)
from scripts.memory_extraction_harness import (  # noqa: E402
    atomic_write_json,
    completion_json,
    segment_metrics,
)


DEFAULT_WORKSPACE = ROOT / ".inkecho-data" / ".indexes" / "reviewed-memory"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="对当前 InkEcho pilot 的全部事实进行第二次独立审计。")
    parser.add_argument("--space-id", default=server.DEFAULT_SOURCE_ID)
    parser.add_argument("--workspace", default=str(DEFAULT_WORKSPACE))
    parser.add_argument("--provider", default=server.env("INK_ECHO_PROVIDER", "custom_azure"))
    parser.add_argument("--model", default="")
    parser.add_argument("--output", required=True)
    parser.add_argument("--resume", action="store_true")
    return parser.parse_args()


def flat_fact(claim: dict[str, Any]) -> dict[str, Any]:
    evidence = claim.get("evidence") if isinstance(claim.get("evidence"), dict) else {}
    return {
        "id": str(claim.get("id") or ""),
        "category": str(claim.get("category") or ""),
        "subject": str(claim.get("subject") or ""),
        "predicate": str(claim.get("predicate") or ""),
        "object": str(claim.get("object") or ""),
        "statement": str(claim.get("statement") or ""),
        "certainty": str(claim.get("certainty") or ""),
        "time_scope": str(claim.get("time_scope") or ""),
        "salience": str(claim.get("salience") or ""),
        "evidence_quote": str(evidence.get("quote") or ""),
        "evidence_start": int(evidence.get("start") or -1),
        "evidence_end": int(evidence.get("end") or -1),
        "chunk_index": int(evidence.get("chunk_index") or 0),
        "confidence": 1.0,
    }


def passing_indices(reviews: list[dict[str, Any]]) -> set[int]:
    return {
        int(review.get("fact_index", -1))
        for review in reviews
        if review.get("verdict") == "pass"
        and all(review.get(field) for field in (
            "grounded", "atomic", "entities_resolved", "category_correct", "time_correct", "useful",
        ))
    }


def main() -> int:
    args = parse_args()
    output = Path(args.output).expanduser()
    if not output.is_absolute():
        output = ROOT / output
    checkpoint = output.with_name(f"{output.name}.partial")
    backend = PersistentEcphoryMemoryBackend(Path(args.workspace))
    exported = backend.export_space(args.space_id)
    source_revision = str(exported.get("source_revision") or "")
    memory_revision = str(exported.get("memory_revision") or "")
    if not source_revision or not memory_revision or not exported.get("claims"):
        raise SystemExit("当前小说空间没有可审计的记忆 pilot")
    if server.source_revision(args.space_id) != source_revision:
        raise SystemExit("当前原文版本与记忆版本不一致，已停止审计")
    settings = server.provider_settings(args.provider, args.model or None)
    if not settings.configured:
        raise SystemExit("模型服务尚未配置完成")

    resumed: dict[str, dict[str, Any]] = {}
    resume_source = checkpoint if checkpoint.is_file() else output if output.is_file() else None
    if args.resume and resume_source:
        payload = json.loads(resume_source.read_text(encoding="utf-8"))
        expected = {
            "space_id": args.space_id,
            "source_revision": source_revision,
            "audited_memory_revision": memory_revision,
            "provider": settings.provider,
            "model": settings.model,
        }
        mismatched = [key for key, value in expected.items() if payload.get(key) != value]
        if mismatched:
            raise SystemExit("审计断点与当前记忆或模型不一致：" + "、".join(mismatched))
        resumed = {
            str(chapter.get("chapter") or ""): chapter
            for chapter in payload.get("runs", [{}])[-1].get("chapters", [])
            if isinstance(chapter, dict) and chapter.get("chapter") and not chapter.get("parse_error")
        }

    claims_by_chapter: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for claim in exported.get("claims", []):
        evidence = claim.get("evidence") if isinstance(claim.get("evidence"), dict) else {}
        claims_by_chapter[str(evidence.get("chapter") or "未知章节")].append(flat_fact(claim))
    ordered_titles = sorted(
        claims_by_chapter,
        key=lambda title: min(int(item.get("chunk_index") or 0) for item in claims_by_chapter[title]),
    )
    client = server.build_client(settings)
    chapters: list[dict[str, Any]] = []

    def save_partial() -> None:
        run = {
            "prompt_version": "second-pass-memory-audit-v1",
            "chapters": chapters,
            "score": score_run(chapters, require_reviews=True),
            "segments": segment_metrics(chapters),
        }
        atomic_write_json(checkpoint, {
            "schema_version": 1,
            "experiment": "reviewed-memory-second-pass-audit",
            "created_at": time.time(),
            "space_id": args.space_id,
            "source_revision": source_revision,
            "audited_memory_revision": memory_revision,
            "provider": settings.provider,
            "model": settings.model,
            "production_knowledge_modified": False,
            "partial": True,
            "runs": [run],
        })

    for title in ordered_titles:
        if title in resumed:
            chapters.append(resumed[title])
            print(f"[audit] {title}: resumed", flush=True)
            continue
        started = time.time()
        facts = claims_by_chapter[title]
        chapter: dict[str, Any] = {
            "chapter": title,
            "volume": title.split(" · ", 1)[0] if " · " in title else "未分卷",
            "tags": ["second_pass_audit"],
            "source_chunk_start": min(int(item.get("chunk_index") or 0) for item in facts),
            "raw_count": len(facts),
            "accepted_count": len(facts),
            "rejected_count": 0,
            "facts": facts,
            "rejections": [],
            "reviews": [],
            "review_adjudications": [],
            "promoted_facts": [],
            "promoted_count": 0,
        }
        try:
            preview = server.source_chapter_preview(title, space_id=args.space_id)
            chapter["source_sha256"] = hashlib.sha256(preview["text"].encode("utf-8")).hexdigest()
            review_raw, review_meta = completion_json(
                client,
                settings,
                review_messages(title, preview["text"], facts),
                "novel_memory_second_pass_audit",
                review_schema_for_count(len(facts)),
                9000,
            )
            reviews = normalize_reviews(review_raw, len(facts))
            chapter["review_response"] = review_meta
            reviews_by_index = {int(review["fact_index"]): review for review in reviews}
            for fact_index, fact in enumerate(facts):
                prior = reviews_by_index.get(fact_index)
                if not prior or not review_has_literal_entity_conflict(fact, prior):
                    continue
                adjudication_raw, adjudication_meta = completion_json(
                    client,
                    settings,
                    adjudication_messages(title, fact, prior),
                    "novel_memory_second_pass_adjudication",
                    review_schema_for_count(1),
                    3000,
                )
                adjudicated = normalize_reviews(adjudication_raw, 1)
                if adjudicated:
                    replacement = {**adjudicated[0], "fact_index": fact_index, "adjudicated": True}
                    reviews_by_index[fact_index] = replacement
                    chapter["review_adjudications"].append({
                        "fact_index": fact_index,
                        "prior_review": prior,
                        "review": replacement,
                        "response": adjudication_meta,
                    })
            chapter["reviews"] = [reviews_by_index[index] for index in sorted(reviews_by_index)]
            keep = passing_indices(chapter["reviews"])
            chapter["promoted_facts"] = [fact for index, fact in enumerate(facts) if index in keep]
            chapter["promoted_count"] = len(chapter["promoted_facts"])
        except Exception as exc:
            chapter["parse_error"] = server.public_error(exc)
            chapter["error_type"] = type(exc).__name__
        chapter["elapsed_seconds"] = round(time.time() - started, 3)
        chapters.append(chapter)
        save_partial()
        print(
            f"[audit] {title}: reviewed={len(chapter['reviews'])} promoted={chapter['promoted_count']}",
            flush=True,
        )

    run = {
        "prompt_version": "second-pass-memory-audit-v1",
        "chapters": chapters,
        "score": score_run(chapters, require_reviews=True),
        "segments": segment_metrics(chapters),
    }
    result = {
        "schema_version": 1,
        "experiment": "reviewed-memory-second-pass-audit",
        "created_at": time.time(),
        "space_id": args.space_id,
        "source_revision": source_revision,
        "audited_memory_revision": memory_revision,
        "provider": settings.provider,
        "model": settings.model,
        "production_knowledge_modified": False,
        "partial": False,
        "runs": [run],
    }
    atomic_write_json(output, result)
    checkpoint.unlink(missing_ok=True)
    print(json.dumps({
        "ok": True,
        "output": str(output),
        "production_knowledge_modified": False,
        "score": run["score"],
    }, ensure_ascii=False, indent=2))
    return 0 if run["score"].get("passed") else 1


if __name__ == "__main__":
    raise SystemExit(main())
