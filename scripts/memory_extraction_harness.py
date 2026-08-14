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
from inkecho.memory_extraction import (  # noqa: E402
    PROMPT_VERSIONS,
    EXTRACTION_FOCUS_TYPES,
    REPAIRABLE_PROMPT_VERSIONS,
    SPAN_ANCHORED_VERSIONS,
    adjudication_messages,
    chapter_source_spans,
    extraction_schema_for_version,
    extraction_messages,
    normalize_reviews,
    parse_json_object,
    repair_messages,
    repair_schema_for_count,
    review_has_literal_entity_conflict,
    review_messages,
    review_schema_for_count,
    resolve_span_evidence,
    score_run,
    source_spans_for_version,
    structured_response_format,
    validate_extraction,
)


DEFAULT_CHAPTERS = [
    "第一卷 · 第一节：纵身亡魔心仍不悔",
    "第一卷 · 第二节：逆光阴五百年觉悟",
    "第一卷 · 第七节：蛊师有九转，花酒留遗藏",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="在少量章节上评估模型式原作记忆抽取，不写入产品知识库。")
    parser.add_argument("--space-id", default=server.DEFAULT_SOURCE_ID)
    parser.add_argument("--chapters", nargs="+", default=None)
    parser.add_argument("--manifest", default="", help="从 JSON 清单读取章节、卷别和风险标签。")
    parser.add_argument("--shadow-pilot", action="store_true", help="显式允许最多 20 章的隔离影子评测。")
    parser.add_argument("--versions", nargs="+", default=["v9-strict-boundaries"])
    parser.add_argument("--provider", default=server.env("INK_ECHO_PROVIDER", "custom_azure"))
    parser.add_argument("--model", default="")
    parser.add_argument("--skip-review", action="store_true", help="只运行本地证据校验，不调用模型审查。")
    parser.add_argument("--dry-run", action="store_true", help="只检查章节和配置，不调用模型。")
    parser.add_argument("--output", default="", help="可选输出路径；默认写入被忽略的本地实验目录。")
    parser.add_argument("--resume", action="store_true", help="从 --output 对应的逐章检查点继续。")
    parser.add_argument("--focus", nargs="+", choices=sorted(EXTRACTION_FOCUS_TYPES), default=[])
    return parser.parse_args()


def atomic_write_json(path: Path, value: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding="utf-8")
    temporary.replace(path)


def load_manifest(path_value: str) -> tuple[str, list[dict[str, Any]]]:
    path = Path(path_value).expanduser()
    if not path.is_absolute():
        path = ROOT / path
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise SystemExit("无法读取影子评测清单") from exc
    raw_cases = payload.get("cases") if isinstance(payload, dict) else None
    if not isinstance(raw_cases, list):
        raise SystemExit("影子评测清单缺少 cases 数组")
    cases: list[dict[str, Any]] = []
    seen: set[str] = set()
    for raw in raw_cases:
        if not isinstance(raw, dict):
            continue
        title = str(raw.get("title") or "").strip()[:160]
        if not title or title in seen:
            continue
        seen.add(title)
        cases.append({
            "title": title,
            "volume": str(raw.get("volume") or "未分卷").strip()[:40] or "未分卷",
            "tags": list(dict.fromkeys(
                str(tag).strip()[:40]
                for tag in raw.get("tags", [])
                if str(tag).strip()
            ))[:12],
        })
    if not cases:
        raise SystemExit("影子评测清单没有有效章节")
    return str(payload.get("name") or path.stem)[:100], cases


def segment_metrics(chapters: list[dict[str, Any]]) -> dict[str, Any]:
    groups: dict[str, dict[str, list[dict[str, Any]]]] = {"volumes": {}, "tags": {}}
    for chapter in chapters:
        volume = str(chapter.get("volume") or "未分卷")
        groups["volumes"].setdefault(volume, []).append(chapter)
        for tag in chapter.get("tags", []):
            groups["tags"].setdefault(str(tag), []).append(chapter)

    def summarize(items: list[dict[str, Any]]) -> dict[str, Any]:
        candidate_count = sum(int(item.get("accepted_count") or 0) for item in items)
        promoted_count = sum(int(item.get("promoted_count") or 0) for item in items)
        reviews = [review for item in items for review in item.get("reviews", [])]
        return {
            "chapters": len(items),
            "candidates": candidate_count,
            "promoted": promoted_count,
            "promotion_rate": round(promoted_count / candidate_count, 3) if candidate_count else 0.0,
            "grounding_failures": sum(not review.get("grounded") for review in reviews),
            "category_failures": sum(not review.get("category_correct") for review in reviews),
            "parse_errors": sum(bool(item.get("parse_error")) for item in items),
        }

    return {
        group_name: {key: summarize(items) for key, items in sorted(values.items())}
        for group_name, values in groups.items()
    }


def completion_json(
    client: Any,
    settings: server.ProviderSettings,
    messages: list[dict[str, str]],
    schema_name: str,
    schema: dict[str, Any],
    max_tokens: int,
) -> tuple[dict[str, Any], dict[str, Any]]:
    common = {
        "model": settings.model,
        "messages": messages,
        "max_tokens": server.generation_budget(settings, max_tokens),
        "stream": False,
    }
    response_mode = "json_schema"
    transient_names = {
        "APIConnectionError", "APITimeoutError", "RateLimitError", "InternalServerError",
        "ServiceUnavailableError",
    }
    last_error: Exception | None = None
    for attempt in range(1, 3):
        try:
            try:
                response = client.chat.completions.create(
                    **common,
                    response_format=structured_response_format(schema_name, schema),
                )
                response_mode = "json_schema"
            except Exception as exc:
                if type(exc).__name__ not in {"BadRequestError", "UnprocessableEntityError"}:
                    raise
                fallback_messages = [dict(item) for item in messages]
                fallback_messages[0]["content"] += "\n当前接口不保证 schema，请仍只返回一个可解析 JSON 对象。"
                response = client.chat.completions.create(**{**common, "messages": fallback_messages})
                response_mode = "prompt_json_fallback"
            choice = response.choices[0] if response.choices else None
            content = server.extract_text_content(choice.message.content if choice else "")
            finish_reason = str(getattr(choice, "finish_reason", "") or "")
            if not content.strip():
                raise RuntimeError(f"模型返回空内容（finish_reason={finish_reason or 'unknown'}）")
            return parse_json_object(content), {
                "mode": response_mode,
                "attempts": attempt,
                "finish_reason": finish_reason,
            }
        except Exception as exc:
            last_error = exc
            retryable = type(exc).__name__ in transient_names or (
                isinstance(exc, RuntimeError) and "模型返回空内容" in str(exc)
            )
            if attempt >= 2 or not retryable:
                raise
            time.sleep(1.5 * attempt)
    raise last_error or RuntimeError("模型请求失败")


def run_version(
    version: str,
    previews: list[dict[str, Any]],
    client: Any,
    settings: server.ProviderSettings,
    with_review: bool,
    existing_chapters: list[dict[str, Any]] | None = None,
    progress_callback: Any = None,
    focus_types: list[str] | None = None,
) -> dict[str, Any]:
    chapter_by_title = {
        str(item.get("chapter") or ""): item
        for item in (existing_chapters or [])
        if (
            isinstance(item, dict)
            and item.get("chapter")
            and not item.get("parse_error")
            and (
                not with_review
                or len(item.get("reviews", [])) == int(item.get("accepted_count") or 0)
            )
        )
    }
    started = time.time()
    for preview in previews:
        if preview["title"] in chapter_by_title:
            print(f"[{version}] {preview['title']}: resumed", flush=True)
            continue
        chapter_started = time.time()
        chapter_result: dict[str, Any] = {
            "chapter": preview["title"],
            "volume": preview.get("volume", "未分卷"),
            "tags": preview.get("tags", []),
            "source_chunk_start": int(preview.get("source_chunk_start") or 0),
            "source_chunk_end": int(preview.get("source_chunk_end") or 0),
            "source_characters": len(preview["text"]),
            "source_sha256": hashlib.sha256(preview["text"].encode("utf-8")).hexdigest(),
            "raw_count": 0,
            "accepted_count": 0,
            "rejected_count": 0,
            "facts": [],
            "rejections": [],
            "reviews": [],
            "repair_attempts": [],
        }
        try:
            spans = source_spans_for_version(preview["text"], version) if version in SPAN_ANCHORED_VERSIONS else []
            raw, response_meta = completion_json(
                client,
                settings,
                extraction_messages(preview["title"], preview["text"], version, focus_types=focus_types),
                "novel_memory_extraction",
                extraction_schema_for_version(version),
                10000,
            )
            if spans:
                raw = resolve_span_evidence(raw, spans)
            chapter_result.update(validate_extraction(
                raw,
                preview["title"],
                preview["text"],
                require_named_subject_in_evidence=version == "v5-evidence-contained",
                require_named_subject_in_statement=version == "v5-evidence-contained",
            ))
            chapter_result["response"] = response_meta
            if with_review and chapter_result["facts"]:
                review_raw, review_meta = completion_json(
                    client,
                    settings,
                    review_messages(preview["title"], preview["text"], chapter_result["facts"]),
                    "novel_memory_review",
                    review_schema_for_count(len(chapter_result["facts"])),
                    8000,
                )
                chapter_result["reviews"] = normalize_reviews(review_raw, len(chapter_result["facts"]))
                chapter_result["review_response"] = review_meta
                chapter_result["review_adjudications"] = []
                reviews_by_index = {
                    int(review.get("fact_index", -1)): review
                    for review in chapter_result["reviews"]
                }
                for fact_index, fact in enumerate(chapter_result["facts"]):
                    prior_review = reviews_by_index.get(fact_index)
                    if not prior_review or not review_has_literal_entity_conflict(fact, prior_review):
                        continue
                    try:
                        adjudication_raw, adjudication_meta = completion_json(
                            client,
                            settings,
                            adjudication_messages(preview["title"], fact, prior_review),
                            "novel_memory_review_adjudication",
                            review_schema_for_count(1),
                            3000,
                        )
                        adjudicated = normalize_reviews(adjudication_raw, 1)
                        if not adjudicated:
                            continue
                        replacement = {
                            **adjudicated[0],
                            "fact_index": fact_index,
                            "adjudicated": True,
                        }
                        reviews_by_index[fact_index] = replacement
                        chapter_result["review_adjudications"].append({
                            "fact_index": fact_index,
                            "prior_review": prior_review,
                            "review": replacement,
                            "response": adjudication_meta,
                        })
                    except Exception as adjudication_exc:
                        chapter_result["review_adjudications"].append({
                            "fact_index": fact_index,
                            "prior_review": prior_review,
                            "error": server.public_error(adjudication_exc),
                            "error_type": type(adjudication_exc).__name__,
                        })
                chapter_result["reviews"] = [
                    reviews_by_index[index] for index in sorted(reviews_by_index)
                ]
                repairable_indices = {
                    int(review["fact_index"])
                    for review in chapter_result["reviews"]
                    if review.get("verdict") != "pass" and review.get("useful")
                }
                if version in REPAIRABLE_PROMPT_VERSIONS and repairable_indices:
                    try:
                        repair_raw, repair_meta = completion_json(
                            client,
                            settings,
                            repair_messages(
                                preview["title"],
                                chapter_result["facts"],
                                chapter_result["reviews"],
                            ),
                            "novel_memory_repair",
                            repair_schema_for_count(len(chapter_result["facts"])),
                            6000,
                        )
                        chapter_result["repair_response"] = repair_meta
                        repair_candidates: list[dict[str, Any]] = []
                        repair_index_map: list[int] = []
                        seen_repairs: set[int] = set()
                        for raw_repair in repair_raw.get("repairs", []):
                            if not isinstance(raw_repair, dict):
                                continue
                            try:
                                original_index = int(raw_repair.get("fact_index"))
                            except (TypeError, ValueError):
                                continue
                            if original_index not in repairable_indices or original_index in seen_repairs:
                                continue
                            seen_repairs.add(original_index)
                            repaired_fact = {
                                key: value for key, value in raw_repair.items()
                                if key != "fact_index"
                            }
                            repaired_fact["evidence_quote"] = chapter_result["facts"][original_index]["evidence_quote"]
                            validation = validate_extraction(
                                {"chapter": preview["title"], "facts": [repaired_fact]},
                                preview["title"],
                                preview["text"],
                                require_named_subject_in_evidence=True,
                                require_named_subject_in_statement=True,
                            )
                            attempt = {
                                "fact_index": original_index,
                                "original_fact": chapter_result["facts"][original_index],
                                "original_review": next(
                                    review for review in chapter_result["reviews"]
                                    if review["fact_index"] == original_index
                                ),
                                "validation": validation,
                            }
                            chapter_result["repair_attempts"].append(attempt)
                            if validation["accepted_count"] == 1:
                                repair_candidates.append(validation["facts"][0])
                                repair_index_map.append(original_index)
                        if repair_candidates:
                            repaired_review_raw, repaired_review_meta = completion_json(
                                client,
                                settings,
                                review_messages(preview["title"], preview["text"], repair_candidates),
                                "novel_memory_repair_review",
                                review_schema_for_count(len(repair_candidates)),
                                5000,
                            )
                            chapter_result["repair_review_response"] = repaired_review_meta
                            repaired_reviews = normalize_reviews(repaired_review_raw, len(repair_candidates))
                            reviews_by_original = {
                                review["fact_index"]: review for review in chapter_result["reviews"]
                            }
                            for repaired_review in repaired_reviews:
                                relative_index = int(repaired_review["fact_index"])
                                if relative_index < 0 or relative_index >= len(repair_index_map):
                                    continue
                                original_index = repair_index_map[relative_index]
                                mapped_review = {**repaired_review, "fact_index": original_index, "repaired": True}
                                attempt = next(
                                    item for item in chapter_result["repair_attempts"]
                                    if item["fact_index"] == original_index
                                )
                                attempt["review"] = mapped_review
                                if mapped_review["verdict"] == "pass":
                                    chapter_result["facts"][original_index] = repair_candidates[relative_index]
                                    reviews_by_original[original_index] = mapped_review
                            chapter_result["reviews"] = [
                                reviews_by_original[index]
                                for index in sorted(reviews_by_original)
                            ]
                    except Exception as repair_exc:
                        chapter_result["repair_error"] = server.public_error(repair_exc)
                        chapter_result["repair_error_type"] = type(repair_exc).__name__
                promoted_indices = {
                    review["fact_index"]
                    for review in chapter_result["reviews"]
                    if review["verdict"] == "pass"
                    and all(review.get(field) for field in (
                        "grounded", "atomic", "entities_resolved", "category_correct", "time_correct", "useful",
                    ))
                }
                chapter_result["promoted_facts"] = [
                    fact for index, fact in enumerate(chapter_result["facts"])
                    if index in promoted_indices
                ]
                chapter_result["promoted_count"] = len(chapter_result["promoted_facts"])
        except Exception as exc:
            chapter_result["parse_error"] = server.public_error(exc)
            chapter_result["error_type"] = type(exc).__name__
        chapter_result["elapsed_seconds"] = round(time.time() - chapter_started, 3)
        chapter_by_title[preview["title"]] = chapter_result
        ordered_chapters = [
            chapter_by_title[item["title"]]
            for item in previews
            if item["title"] in chapter_by_title
        ]
        if callable(progress_callback):
            progress_callback(version, ordered_chapters)
        print(
            f"[{version}] {preview['title']}: "
            f"accepted={chapter_result['accepted_count']} rejected={chapter_result['rejected_count']} "
            f"reviews={len(chapter_result['reviews'])}",
            flush=True,
        )
    chapters = [chapter_by_title[item["title"]] for item in previews if item["title"] in chapter_by_title]
    return {
        "prompt_version": version,
        "focus": list(focus_types or []),
        "chapters": chapters,
        "score": score_run(chapters, require_reviews=with_review),
        "segments": segment_metrics(chapters),
        "elapsed_seconds": round(time.time() - started, 3),
    }


def main() -> int:
    args = parse_args()
    unknown_versions = [version for version in args.versions if version not in PROMPT_VERSIONS]
    if unknown_versions:
        raise SystemExit("未知提示词版本：" + "、".join(unknown_versions))
    if args.manifest and args.chapters:
        raise SystemExit("--manifest 与 --chapters 不能同时使用")
    if args.resume and not args.output:
        raise SystemExit("断点续跑必须通过 --output 指定稳定的报告路径")
    manifest_name = ""
    if args.manifest:
        manifest_name, cases = load_manifest(args.manifest)
    else:
        cases = [{"title": title, "volume": "未分卷", "tags": []} for title in (args.chapters or DEFAULT_CHAPTERS)]
    hard_limit = 20 if args.shadow_pilot else 5
    if len(cases) > hard_limit:
        hint = "；20 章影子评测必须显式添加 --shadow-pilot" if not args.shadow_pilot else ""
        raise SystemExit(f"本次最多允许 {hard_limit} 个章节{hint}")
    if len(cases) > 20:
        raise SystemExit("影子 harness 硬限制为 20 章，不能用于全书解析")
    previews: list[dict[str, Any]] = []
    for case in cases:
        preview = server.source_chapter_preview(
            case["title"],
            space_id=args.space_id,
            limit=server.MAX_SOURCE_CHAPTER_PREVIEW_CHARS,
        )
        preview["volume"] = case.get("volume", "未分卷")
        preview["tags"] = case.get("tags", [])
        previews.append(preview)
    truncated = [preview["title"] for preview in previews if preview.get("truncated")]
    if truncated:
        raise SystemExit("章节超过本轮安全长度，请先缩小样本：" + "、".join(truncated))
    settings = server.provider_settings(args.provider, args.model or None)
    if not settings.configured:
        raise SystemExit(f"模型服务 {settings.provider} 尚未配置完成")
    if args.dry_run:
        print(json.dumps({
            "ok": True,
            "provider": settings.provider,
            "model": settings.model,
            "versions": args.versions,
            "focus": list(args.focus),
            "manifest": manifest_name,
            "shadow_pilot": bool(args.shadow_pilot),
            "chapters": [
                {
                    "title": item["title"],
                    "volume": item.get("volume", "未分卷"),
                    "tags": item.get("tags", []),
                    "characters": len(item["text"]),
                }
                for item in previews
            ],
        }, ensure_ascii=False, indent=2))
        return 0

    created_at = time.time()
    default_dir = server.novel_space_root() / "evals" / "memory-extraction"
    output = Path(args.output).expanduser() if args.output else default_dir / f"run-{int(created_at)}.json"
    if not output.is_absolute():
        output = ROOT / output
    checkpoint_path = output.with_name(f"{output.name}.partial")
    checkpoint_runs: dict[str, dict[str, Any]] = {}
    resume_source = checkpoint_path if checkpoint_path.is_file() else output if output.is_file() else None
    if args.resume and resume_source:
        try:
            checkpoint_payload = json.loads(resume_source.read_text(encoding="utf-8"))
            expected_resume = {
                "space_id": args.space_id,
                "source_revision": previews[0].get("source_revision", "") if previews else "",
                "provider": settings.provider,
                "model": settings.model,
                "manifest": manifest_name,
                "focus": list(args.focus),
            }
            mismatched = [
                key for key, value in expected_resume.items()
                if checkpoint_payload.get(key) != value
            ]
            if mismatched:
                raise SystemExit("断点与当前原文或模型配置不一致，不能混合续跑：" + "、".join(mismatched))
            checkpoint_runs = {
                str(run.get("prompt_version")): run
                for run in checkpoint_payload.get("runs", [])
                if isinstance(run, dict) and run.get("prompt_version")
            }
            created_at = float(checkpoint_payload.get("created_at") or created_at)
        except (OSError, TypeError, ValueError):
            raise SystemExit("断点文件损坏，无法安全续跑")

    report_base = {
        "schema_version": 1,
        "experiment": "memory-extraction-shadow-pilot" if args.shadow_pilot else "memory-extraction-small-sample",
        "created_at": created_at,
        "space_id": args.space_id,
        "source_revision": previews[0].get("source_revision", "") if previews else "",
        "provider": settings.provider,
        "model": settings.model,
        "manifest": manifest_name,
        "focus": list(args.focus),
        "shadow_pilot": bool(args.shadow_pilot),
        "production_knowledge_modified": False,
        "review_enabled": not args.skip_review,
        "repair_enabled": not args.skip_review and bool(REPAIRABLE_PROMPT_VERSIONS.intersection(args.versions)),
    }

    def save_checkpoint(version: str, chapters: list[dict[str, Any]]) -> None:
        checkpoint_runs[version] = {
            "prompt_version": version,
            "chapters": chapters,
            "score": score_run(chapters, require_reviews=not args.skip_review),
            "segments": segment_metrics(chapters),
        }
        atomic_write_json(checkpoint_path, {**report_base, "partial": True, "runs": list(checkpoint_runs.values())})

    client = server.build_client(settings)
    runs: list[dict[str, Any]] = []
    for version in args.versions:
        existing = (checkpoint_runs.get(version) or {}).get("chapters", [])
        run = run_version(
            version,
            previews,
            client,
            settings,
            not args.skip_review,
            existing_chapters=existing,
            progress_callback=save_checkpoint,
            focus_types=list(args.focus),
        )
        runs.append(run)
        checkpoint_runs[version] = run
    report = {**report_base, "partial": False, "runs": runs}
    atomic_write_json(output, report)
    if all(run.get("score", {}).get("passed") for run in runs):
        checkpoint_path.unlink(missing_ok=True)
    else:
        atomic_write_json(checkpoint_path, {**report, "partial": True})
    print(json.dumps({
        "ok": True,
        "output": str(output),
        "production_knowledge_modified": False,
        "scores": {run["prompt_version"]: run["score"] for run in report["runs"]},
    }, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
