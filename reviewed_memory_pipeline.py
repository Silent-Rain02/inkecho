from __future__ import annotations

import json
import time
from typing import Any, Callable

from memory_extraction import (
    SPAN_ANCHORED_VERSIONS,
    adjudication_messages,
    extraction_messages,
    extraction_schema_for_version,
    normalize_reviews,
    parse_json_object,
    review_has_literal_entity_conflict,
    review_messages,
    review_schema_for_count,
    resolve_span_evidence,
    score_run,
    source_spans_for_version,
    structured_response_format,
    validate_extraction,
)


PIPELINE_PROMPT_VERSION = "v9-strict-boundaries"
MIN_SAMPLE_CHAPTERS = 3
DEFAULT_SAMPLE_CHAPTERS = 6
MAX_SAMPLE_CHAPTERS = 12


class ReviewedMemoryCancelled(Exception):
    """Raised between model calls when a user cancels a memory build."""


def representative_titles(titles: list[str], limit: int = DEFAULT_SAMPLE_CHAPTERS) -> list[str]:
    """Select a deterministic, evenly distributed sample including both ends."""
    unique = list(dict.fromkeys(str(title or "").strip() for title in titles if str(title or "").strip()))
    if not unique:
        return []
    bounded = max(1, min(int(limit), MAX_SAMPLE_CHAPTERS))
    if len(unique) <= bounded:
        return unique
    if bounded == 1:
        return [unique[0]]
    indices = [round(index * (len(unique) - 1) / (bounded - 1)) for index in range(bounded)]
    selected = [unique[index] for index in dict.fromkeys(indices)]
    if len(selected) < bounded:
        selected_set = set(selected)
        selected.extend(title for title in unique if title not in selected_set)
    return selected[:bounded]


def completion_json(
    client: Any,
    model: str,
    messages: list[dict[str, str]],
    schema_name: str,
    schema: dict[str, Any],
    max_tokens: int,
    token_budget: Callable[[int], int],
    extract_text: Callable[[Any], str],
) -> dict[str, Any]:
    common = {
        "model": model,
        "messages": messages,
        "max_tokens": token_budget(max_tokens),
        "stream": False,
    }
    transient_names = {
        "APIConnectionError", "APITimeoutError", "RateLimitError", "InternalServerError",
        "ServiceUnavailableError",
    }
    last_error: Exception | None = None
    for attempt in range(2):
        try:
            try:
                response = client.chat.completions.create(
                    **common,
                    response_format=structured_response_format(schema_name, schema),
                )
            except Exception as exc:
                if type(exc).__name__ not in {"BadRequestError", "UnprocessableEntityError"}:
                    raise
                fallback = [dict(item) for item in messages]
                fallback[0]["content"] += "\n当前接口不保证 schema，请仍只返回一个可解析 JSON 对象。"
                response = client.chat.completions.create(**{**common, "messages": fallback})
            choice = response.choices[0] if response.choices else None
            content = extract_text(choice.message.content if choice else "")
            if not content.strip():
                raise RuntimeError("模型没有返回可解析的记忆结果")
            return parse_json_object(content)
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            retryable = type(exc).__name__ in transient_names or isinstance(exc, RuntimeError)
            if attempt or not retryable:
                raise
            time.sleep(1.0)
    raise last_error or RuntimeError("模型记忆请求失败")


def _review_chapter(
    preview: dict[str, Any],
    client: Any,
    model: str,
    token_budget: Callable[[int], int],
    extract_text: Callable[[Any], str],
    cancelled: Callable[[], bool],
) -> dict[str, Any]:
    if cancelled():
        raise ReviewedMemoryCancelled()
    title = str(preview["title"])
    text = str(preview["text"])
    spans = source_spans_for_version(text, PIPELINE_PROMPT_VERSION)
    raw = completion_json(
        client, model, extraction_messages(title, text, PIPELINE_PROMPT_VERSION),
        "novel_memory_extraction", extraction_schema_for_version(PIPELINE_PROMPT_VERSION),
        10000, token_budget, extract_text,
    )
    if PIPELINE_PROMPT_VERSION in SPAN_ANCHORED_VERSIONS:
        raw = resolve_span_evidence(raw, spans)
    validation = validate_extraction(
        raw,
        title,
        text,
        require_named_subject_in_evidence=True,
        require_named_subject_in_statement=True,
    )
    result = {
        "chapter": title,
        "source_chunk_start": int(preview.get("source_chunk_start") or 0),
        "source_chunk_end": int(preview.get("source_chunk_end") or 0),
        **validation,
        "reviews": [],
        "promoted_facts": [],
        "promoted_count": 0,
    }
    facts = result["facts"]
    if not facts:
        return result
    if cancelled():
        raise ReviewedMemoryCancelled()
    review_raw = completion_json(
        client, model, review_messages(title, text, facts),
        "novel_memory_review", review_schema_for_count(len(facts)),
        8000, token_budget, extract_text,
    )
    reviews = normalize_reviews(review_raw, len(facts))
    reviews_by_index = {int(review["fact_index"]): review for review in reviews}
    for fact_index, fact in enumerate(facts):
        prior = reviews_by_index.get(fact_index)
        if not prior or not review_has_literal_entity_conflict(fact, prior):
            continue
        if cancelled():
            raise ReviewedMemoryCancelled()
        adjudicated_raw = completion_json(
            client, model, adjudication_messages(title, fact, prior),
            "novel_memory_review_adjudication", review_schema_for_count(1),
            3000, token_budget, extract_text,
        )
        adjudicated = normalize_reviews(adjudicated_raw, 1)
        if adjudicated:
            reviews_by_index[fact_index] = {
                **adjudicated[0],
                "fact_index": fact_index,
                "adjudicated": True,
            }
    result["reviews"] = [reviews_by_index[index] for index in sorted(reviews_by_index)]
    promoted_indices = {
        int(review["fact_index"])
        for review in result["reviews"]
        if review.get("verdict") == "pass"
        and all(review.get(field) for field in (
            "grounded", "atomic", "entities_resolved", "category_correct", "time_correct", "useful",
        ))
    }
    result["promoted_facts"] = [fact for index, fact in enumerate(facts) if index in promoted_indices]
    result["promoted_count"] = len(result["promoted_facts"])
    return result


def run_reviewed_memory_pipeline(
    previews: list[dict[str, Any]],
    client: Any,
    model: str,
    token_budget: Callable[[int], int],
    extract_text: Callable[[Any], str],
    progress: Callable[[int, str, list[dict[str, Any]]], None],
    cancelled: Callable[[], bool],
    existing_chapters: list[dict[str, Any]] | None = None,
) -> dict[str, Any]:
    """Extract, independently review, and gate a bounded representative sample."""
    completed = {
        str(item.get("chapter") or ""): item
        for item in (existing_chapters or [])
        if isinstance(item, dict) and item.get("chapter") and not item.get("parse_error")
    }
    total = len(previews)
    for index, preview in enumerate(previews):
        title = str(preview["title"])
        if title not in completed:
            completed[title] = _review_chapter(
                preview, client, model, token_budget, extract_text, cancelled,
            )
        ordered = [completed[str(item["title"])] for item in previews if str(item["title"]) in completed]
        progress(
            round(len(ordered) / max(1, total) * 88),
            f"正在审查代表章节（{len(ordered)}/{total}）",
            ordered,
        )
    chapters = [completed[str(item["title"])] for item in previews]
    score = score_run(chapters, require_reviews=True)
    claims = [
        {
            **fact,
            "chapter": chapter["chapter"],
            "chunk_index": int(chapter.get("source_chunk_start") or 0),
        }
        for chapter in chapters
        for fact in chapter.get("promoted_facts", [])
    ]
    return {
        "schema_version": 1,
        "prompt_version": PIPELINE_PROMPT_VERSION,
        "chapters": chapters,
        "score": score,
        "claims": claims,
    }


def checkpoint_payload(
    space_id: str,
    source_revision: str,
    provider: str,
    model: str,
    selected_titles: list[str],
    chapters: list[dict[str, Any]],
) -> dict[str, Any]:
    return {
        "schema_version": 1,
        "space_id": space_id,
        "source_revision": source_revision,
        "provider": provider,
        "model": model,
        "prompt_version": PIPELINE_PROMPT_VERSION,
        "selected_titles": selected_titles,
        "chapters": chapters,
    }


def read_checkpoint(path: Any, space_id: str, source_revision: str, selected_titles: list[str]) -> list[dict[str, Any]]:
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, TypeError, ValueError):
        return []
    if (
        payload.get("space_id") != space_id
        or payload.get("source_revision") != source_revision
        or payload.get("prompt_version") != PIPELINE_PROMPT_VERSION
        or payload.get("selected_titles") != selected_titles
    ):
        return []
    return payload.get("chapters", []) if isinstance(payload.get("chapters"), list) else []
