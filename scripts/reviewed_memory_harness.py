#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from ecphory_memory import PersistentEcphoryMemoryBackend, promoted_claims_from_report  # noqa: E402
from memory_extraction import validate_extraction  # noqa: E402
import server  # noqa: E402


DEFAULT_WORKSPACE = ROOT / ".inkecho-data" / ".indexes" / "reviewed-memory"


def preflight_promoted_claims(
    space_id: str,
    source_revision: str,
    claims: list[dict],
) -> tuple[list[dict], list[dict]]:
    """Replay current deterministic rules so stale reports cannot bypass new safety checks."""
    if server.source_revision(space_id) != source_revision:
        raise ValueError("当前原文版本与候选事实不一致")
    previews: dict[str, dict] = {}
    accepted: list[dict] = []
    rejected: list[dict] = []
    for claim in claims:
        chapter = str(claim.get("chapter") or "")
        if chapter not in previews:
            previews[chapter] = server.source_chapter_preview(chapter, space_id=space_id)
        result = validate_extraction(
            {"chapter": chapter, "facts": [claim]},
            chapter,
            str(previews[chapter].get("text") or ""),
            require_named_subject_in_evidence=True,
            require_named_subject_in_statement=True,
        )
        if result.get("accepted_count") == 1:
            accepted.append(claim)
            continue
        reasons = [
            reason
            for item in result.get("rejections", [])
            for reason in item.get("reasons", [])
        ]
        rejected.append({
            "id": str(claim.get("id") or ""),
            "chapter": chapter,
            "statement": str(claim.get("statement") or "")[:160],
            "reasons": list(dict.fromkeys(reasons)),
        })
    return accepted, rejected


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="构建和审查 InkEcho 的原作记忆索引。")
    parser.add_argument("--workspace", default=str(DEFAULT_WORKSPACE))
    subparsers = parser.add_subparsers(dest="command", required=True)

    build = subparsers.add_parser("build", help="从抽取报告构建隔离的 pilot 索引。")
    build.add_argument(
        "--report",
        action="append",
        required=True,
        help="可重复传入；后面的报告会替换相同章节的旧结果。",
    )

    recall = subparsers.add_parser("recall", help="检查某个 pilot/production 索引的召回结果。")
    recall.add_argument("--space-id", required=True)
    recall.add_argument("--query", required=True)
    recall.add_argument("--limit", type=int, default=8)
    recall.add_argument("--depth", type=int, default=2)
    recall.add_argument("--chapter-cutoff", type=int, default=None)

    promote = subparsers.add_parser("promote", help="审查通过后，将指定不可变版本启用到产品问答。")
    promote.add_argument("--space-id", required=True)
    promote.add_argument("--memory-revision", required=True)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    backend = PersistentEcphoryMemoryBackend(Path(args.workspace))
    if args.command == "build":
        space_id = ""
        source_revision = ""
        claims_by_chapter: dict[str, list[dict]] = {}
        for report_value in args.report:
            report_path = Path(report_value).expanduser().resolve()
            report = json.loads(report_path.read_text(encoding="utf-8"))
            report_space = str(report.get("space_id") or "").strip()
            report_revision = str(report.get("source_revision") or "").strip()
            if not report_space or not report_revision:
                raise SystemExit(f"报告缺少 space_id 或 source_revision：{report_path.name}")
            if space_id and (report_space != space_id or report_revision != source_revision):
                raise SystemExit("多个报告不属于同一小说空间和原文版本")
            space_id, source_revision = report_space, report_revision
            runs = report.get("runs", [])
            if not runs:
                raise SystemExit(f"报告没有可用运行结果：{report_path.name}")
            selected_report = {**report, "runs": [runs[-1]]}
            selected_claims = promoted_claims_from_report(selected_report)
            additive = bool(report.get("focus") or runs[-1].get("focus"))
            selected_chapters = [
                str(chapter.get("chapter") or "")
                for chapter in runs[-1].get("chapters", [])
                if isinstance(chapter, dict) and chapter.get("chapter")
            ]
            for chapter in selected_chapters:
                chapter_claims = [
                    claim for claim in selected_claims if claim.get("chapter") == chapter
                ]
                if additive:
                    merged = {claim.get("id"): claim for claim in claims_by_chapter.get(chapter, [])}
                    merged.update({claim.get("id"): claim for claim in chapter_claims})
                    claims_by_chapter[chapter] = list(merged.values())
                else:
                    claims_by_chapter[chapter] = chapter_claims
        claims = [claim for chapter_claims in claims_by_chapter.values() for claim in chapter_claims]
        if not claims:
            raise SystemExit("报告组合没有通过审查的 promoted_facts")
        if any(not int(claim.get("chunk_index") or 0) for claim in claims):
            if server.source_revision(space_id) != source_revision:
                raise SystemExit("旧报告缺少章节位置，且当前原文版本已变化，不能安全补全时序")
            positions: dict[str, int] = {}
            for claim in claims:
                chapter = str(claim.get("chapter") or "")
                if chapter and chapter not in positions:
                    preview = server.source_chapter_preview(chapter, space_id=space_id)
                    positions[chapter] = int(preview.get("source_chunk_start") or 0)
                claim["chunk_index"] = positions.get(chapter, 0)
            if any(not int(claim.get("chunk_index") or 0) for claim in claims):
                raise SystemExit("无法为全部事实补全章节位置，已停止构建")
        preflight_input_count = len(claims)
        try:
            claims, preflight_rejections = preflight_promoted_claims(
                space_id,
                source_revision,
                claims,
            )
        except ValueError as exc:
            raise SystemExit(str(exc)) from exc
        if not claims:
            raise SystemExit("当前确定性规则拒绝了全部候选事实，已停止构建")
        result = backend.replace_space(space_id, source_revision, claims)
        result.update({
            "preflight_input_count": preflight_input_count,
            "preflight_rejected_count": len(preflight_rejections),
            "preflight_rejections": preflight_rejections,
        })
    elif args.command == "recall":
        result = backend.recall(
            args.space_id,
            args.query,
            limit=args.limit,
            depth=args.depth,
            chapter_cutoff=args.chapter_cutoff,
        )
    else:
        result = backend.promote_space(args.space_id, args.memory_revision)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
