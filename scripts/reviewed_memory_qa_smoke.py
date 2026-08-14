#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import server  # noqa: E402


CASES = [
    {
        "id": "brothers",
        "question": "方源和方正是什么关系？",
        "required": ["方源", "方正", "兄"],
    },
    {
        "id": "two-hop-gift",
        "question": "郑山川的师父交给方源什么？",
        "required": ["岐山老人", "舌尖血", "方源"],
    },
    {
        "id": "map-acquisition",
        "question": "少年盗天搜尸后得到了什么？",
        "required": ["少年盗天", "羊皮地图"],
        "forbidden": ["地下水源", "水源", "喝了好几大口"],
    },
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="用真实模型验收已推广原作记忆的端到端问答。")
    parser.add_argument("--space-id", default=server.DEFAULT_SOURCE_ID)
    parser.add_argument("--provider", default=server.env("INK_ECHO_PROVIDER", "custom_azure"))
    parser.add_argument("--model", default="")
    parser.add_argument("--output", default="")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    results = []
    for case in CASES:
        payload = {
            "mode": "问答",
            "novel_space_id": args.space_id,
            "provider": args.provider,
            "model": args.model,
            "response_length": "concise",
            "retrieval_strategy": "balanced",
            "context": {"title": server.source_name(args.space_id), "chapter": ""},
            "messages": [{"role": "user", "content": case["question"], "mode": "问答"}],
        }
        answer, settings, truncated = server.complete_chat(payload)
        query = server.source_query_from_payload(payload)
        evidence = server.source_evidence_metadata(
            query,
            space_id=args.space_id,
            strategy="balanced",
        )
        citation = server.source_citation_metadata(answer, evidence["source_references"])
        required_ok = all(term in answer for term in case.get("required", []))
        forbidden_ok = not any(term in answer for term in case.get("forbidden", []))
        citation_ok = citation.get("source_citation_status") == "verified"
        results.append({
            "id": case["id"],
            "question": case["question"],
            "passed": required_ok and forbidden_ok and citation_ok and not truncated,
            "checks": {
                "required_terms": required_ok,
                "forbidden_terms": forbidden_ok,
                "citations_verified": citation_ok,
                "not_truncated": not truncated,
            },
            "answer": answer,
            "source_references": evidence["source_references"],
            "provider": settings.provider,
            "model": settings.model,
        })
    passed = sum(item["passed"] for item in results)
    report = {
        "schema_version": 1,
        "space_id": args.space_id,
        "summary": {"passed": passed, "failed": len(results) - passed, "total": len(results)},
        "cases": results,
    }
    if args.output:
        output = Path(args.output).expanduser()
        if not output.is_absolute():
            output = ROOT / output
        output.parent.mkdir(parents=True, exist_ok=True)
        temporary = output.with_name(f".{output.name}.tmp")
        temporary.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
        temporary.replace(output)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
