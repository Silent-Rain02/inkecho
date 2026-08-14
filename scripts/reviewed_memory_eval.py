#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from inkecho.ecphory_memory import PersistentEcphoryMemoryBackend  # noqa: E402


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="评估 InkEcho 已审核原作记忆的真实召回质量。")
    parser.add_argument("--dataset", default=str(ROOT / "evals" / "reviewed_memory_retrieval.json"))
    parser.add_argument("--workspace", default=str(ROOT / ".inkecho-data" / ".indexes" / "reviewed-memory"))
    parser.add_argument("--output", default="")
    return parser.parse_args()


def result_text(item: dict[str, Any]) -> str:
    claim = item.get("claim") if isinstance(item.get("claim"), dict) else {}
    evidence = claim.get("evidence") if isinstance(claim.get("evidence"), dict) else {}
    return "\n".join((
        str(claim.get("statement") or ""),
        str(claim.get("subject") or ""),
        str(claim.get("predicate") or ""),
        str(claim.get("object") or ""),
        " ".join(str(entity) for entity in claim.get("entities", [])),
        str(evidence.get("chapter") or ""),
        str(evidence.get("quote") or ""),
    )).casefold()


def answer_text(item: dict[str, Any]) -> str:
    """Return the surfaced answer claim without its broader evidence window."""
    claim = item.get("claim") if isinstance(item.get("claim"), dict) else {}
    return "\n".join((
        str(claim.get("statement") or ""),
        str(claim.get("subject") or ""),
        str(claim.get("predicate") or ""),
        str(claim.get("object") or ""),
        " ".join(str(entity) for entity in claim.get("entities", [])),
    )).casefold()


def evaluate_case(backend: PersistentEcphoryMemoryBackend, space_id: str, case: dict[str, Any]) -> dict[str, Any]:
    result = backend.recall(
        space_id,
        str(case.get("query") or ""),
        limit=max(1, int(case.get("max_results") or 8)),
        depth=max(0, int(case.get("depth") or 2)),
        chapter_cutoff=case.get("chapter_cutoff"),
    )
    results = result.get("results", [])
    texts = [result_text(item) for item in results]
    answer_texts = [answer_text(item) for item in results]
    checks: dict[str, bool] = {}
    if case.get("expect_empty"):
        checks["empty"] = not results
    expected_groups = case.get("expected_groups", [])
    matched_indices: set[int] = set()
    for group_index, raw_group in enumerate(expected_groups):
        terms = [str(term).casefold() for term in raw_group if str(term).strip()]
        matches = [index for index, text in enumerate(answer_texts) if all(term in text for term in terms)]
        checks[f"expected_group_{group_index + 1}"] = bool(matches)
        matched_indices.update(matches)
    expected_any_groups = case.get("expected_any_groups", [])
    if expected_any_groups:
        alternative_matches: set[int] = set()
        for raw_group in expected_any_groups:
            terms = [str(term).casefold() for term in raw_group if str(term).strip()]
            alternative_matches.update(
                index for index, text in enumerate(answer_texts) if all(term in text for term in terms)
            )
        checks["expected_any_group"] = bool(alternative_matches)
        matched_indices.update(alternative_matches)
    expected_answer_groups = case.get("expected_answer_groups", [])
    for group_index, raw_group in enumerate(expected_answer_groups):
        terms = [str(term).casefold() for term in raw_group if str(term).strip()]
        matches = [
            index for index, text in enumerate(answer_texts)
            if all(term in text for term in terms)
        ]
        checks[f"expected_answer_group_{group_index + 1}"] = bool(matches)
        matched_indices.update(matches)
    forbidden = [str(term).casefold() for term in case.get("forbidden_terms", []) if str(term).strip()]
    if forbidden:
        checks["forbidden_absent"] = not any(term in text for term in forbidden for text in texts)
    expected_category = str(case.get("expected_category") or "")
    if expected_category:
        candidate_indices = matched_indices or set(range(len(results)))
        checks["category"] = any(
            str(results[index].get("claim", {}).get("category") or "") == expected_category
            for index in candidate_indices
        )
    expected_categories = {
        str(value) for value in case.get("expected_category_any", []) if str(value).strip()
    }
    if expected_categories:
        candidate_indices = matched_indices or set(range(len(results)))
        checks["category_any"] = any(
            str(results[index].get("claim", {}).get("category") or "") in expected_categories
            for index in candidate_indices
        )
    expected_path_terms = {
        str(value).casefold()
        for value in case.get("expected_path_terms", [])
        if str(value).strip()
    }
    if expected_path_terms:
        checks["association_path"] = any(
            expected_path_terms.issubset({
                str(entity).casefold()
                for path in (
                    item.get("association_paths", [])
                    or [item.get("association_path", [])]
                )
                for entity in path
            })
            for item in results
        )
    expected_chapter = str(case.get("expected_chapter_contains") or "")
    if expected_chapter:
        candidate_indices = matched_indices or set(range(len(results)))
        checks["chapter"] = any(
            expected_chapter in str(results[index].get("claim", {}).get("evidence", {}).get("chapter") or "")
            for index in candidate_indices
        )
    expected_chapter_any = [
        str(value) for value in case.get("expected_chapter_any", []) if str(value).strip()
    ]
    if expected_chapter_any:
        candidate_indices = matched_indices or set(range(len(results)))
        checks["chapter_any"] = any(
            any(
                expected in str(results[index].get("claim", {}).get("evidence", {}).get("chapter") or "")
                for expected in expected_chapter_any
            )
            for index in candidate_indices
        )
    checks["evidence_complete"] = all(
        bool(item.get("claim", {}).get("evidence", {}).get("chapter"))
        and bool(item.get("claim", {}).get("evidence", {}).get("quote"))
        for item in results
    )
    if case.get("chapter_cutoff") is not None:
        cutoff = int(case["chapter_cutoff"])
        checks["cutoff"] = all(
            int(item.get("claim", {}).get("evidence", {}).get("chunk_index") or 0) <= cutoff
            for item in results
        )
    return {
        "id": str(case.get("id") or ""),
        "query": str(case.get("query") or ""),
        "passed": bool(checks) and all(checks.values()),
        "checks": checks,
        "intent": result.get("intent", "general"),
        "result_count": len(results),
        "top_results": [
            {
                "id": item.get("claim", {}).get("id", ""),
                "statement": item.get("claim", {}).get("statement", ""),
                "chapter": item.get("claim", {}).get("evidence", {}).get("chapter", ""),
                "chunk_index": item.get("claim", {}).get("evidence", {}).get("chunk_index", 0),
                "score": item.get("score", 0),
            }
            for item in results
        ],
    }


def main() -> int:
    args = parse_args()
    dataset_path = Path(args.dataset).expanduser().resolve()
    dataset = json.loads(dataset_path.read_text(encoding="utf-8"))
    space_id = str(dataset.get("space_id") or "").strip()
    cases = dataset.get("cases")
    if not space_id or not isinstance(cases, list) or not cases:
        raise SystemExit("评测集缺少 space_id 或 cases")
    backend = PersistentEcphoryMemoryBackend(Path(args.workspace))
    exported = backend.export_space(space_id)
    case_results = [evaluate_case(backend, space_id, case) for case in cases if isinstance(case, dict)]
    passed = sum(item["passed"] for item in case_results)
    report = {
        "schema_version": 1,
        "dataset": dataset.get("name", dataset_path.stem),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "space_id": space_id,
        "source_revision": exported.get("source_revision", ""),
        "memory_revision": exported.get("memory_revision", ""),
        "memory_status": exported.get("status", "pilot"),
        "summary": {
            "passed": passed,
            "failed": len(case_results) - passed,
            "total": len(case_results),
            "pass_rate": round(passed / len(case_results), 3) if case_results else 0.0,
        },
        "cases": case_results,
    }
    if args.output:
        output = Path(args.output).expanduser().resolve()
        output.parent.mkdir(parents=True, exist_ok=True)
        temporary = output.with_name(f".{output.name}.tmp")
        temporary.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
        temporary.replace(output)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if passed == len(case_results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
