"""Deterministic memory lifecycle normalization.

This layer is deliberately independent from the extraction model.  It borrows
the useful part of Mem0's write path -- normalize, look up related memories,
deduplicate, and keep update history -- while treating the novel source as
immutable evidence instead of overwriting it.
"""

from __future__ import annotations

import hashlib
import re
from collections import Counter, defaultdict
from dataclasses import replace
from typing import Any, Iterable

from .ecphory_memory import MemoryClaim, normalize_claim


NORMALIZATION_VERSION = "v1-conservative-lifecycle"
ACTIVE_STATUSES = {"active", "disputed"}
HIDDEN_STATUSES = {"duplicate", "deprecated", "superseded"}
ANSWERABILITY_VALUES = {"self_contained", "context_required", "retrieval_only"}

STABLE_CATEGORIES = {"character", "relation", "setting"}
STATE_PREDICATE_MARKERS = (
    "身份", "名字", "姓名", "称为", "是", "属于", "位于", "处于", "境界", "修为",
    "主修", "师父", "师傅", "首领", "族长", "父亲", "母亲", "丈夫", "妻子",
)
TRANSIENT_MARKERS = (
    "今天", "此时", "此刻", "刚刚", "片刻", "一会", "随后", "顿时", "连忙", "正在",
    "来到", "走到", "回到", "站在", "坐在", "看着", "听见", "听到", "没有来上课",
    "没来上课", "上课", "窗边", "地板", "阁楼", "脸色", "目光", "视线",
)
CONTEXT_MARKERS = (
    "他", "她", "它", "他们", "她们", "自己", "此人", "那人", "前者", "后者",
    "第二只蛊", "第一只蛊", "这只蛊", "那只蛊", "该蛊",
)


def _compact(value: Any) -> str:
    value = re.sub(r"\s+", "", str(value or "")).strip("，。！？；：、,.!?;:()（）[]【】\"“”'")
    value = value.replace("…", "").replace("……", "")
    return value.casefold()


def _stable_key(*parts: str) -> str:
    return "|".join(_compact(part) for part in parts if _compact(part))


def _cluster_id(space_id: str, source_revision: str, canonical_key: str) -> str:
    raw = f"{space_id}|{source_revision}|{canonical_key}".encode("utf-8")
    return "cluster-" + hashlib.sha256(raw).hexdigest()[:20]


def _contains_marker(value: str, markers: tuple[str, ...]) -> bool:
    return any(marker in value for marker in markers)


def classify_claim(claim: MemoryClaim) -> tuple[str, str, str]:
    """Return memory kind, answerability, and a short classification reason."""
    statement = _compact(claim.statement)
    subject = _compact(claim.subject)
    obj = _compact(claim.object)
    predicate = _compact(claim.predicate)
    category = _compact(claim.category)

    if category in {"setting", "relation"}:
        memory_kind = "canonical_fact"
    elif category == "character":
        memory_kind = "state_snapshot" if claim.time_scope != "timeless_rule" else "canonical_fact"
    else:
        memory_kind = "event"

    # A claim with unresolved narrative pronouns or clearly transient wording
    # remains valuable as a source locator, but should not be fed to the model
    # as a durable answer-ready memory.
    if _contains_marker(statement, TRANSIENT_MARKERS):
        return memory_kind, "retrieval_only", "transient_or_scene_local"
    if (
        _contains_marker(subject, CONTEXT_MARKERS)
        or _contains_marker(obj, CONTEXT_MARKERS)
        or _contains_marker(statement, CONTEXT_MARKERS)
        or not subject
        or not obj
    ):
        return memory_kind, "context_required", "narrative_context_dependency"
    if category == "event" and claim.time_scope == "chapter_event":
        return memory_kind, "context_required", "chapter_event"
    return memory_kind, "self_contained", "named_and_reusable"


def _quality_rank(claim: MemoryClaim) -> tuple[int, int, int, int]:
    answerability = {"self_contained": 3, "context_required": 2, "retrieval_only": 1}.get(claim.answerability, 0)
    salience = {"core": 2, "supporting": 1}.get(claim.salience, 0)
    certainty = {"explicit_fact": 3, "character_belief": 2, "rumor": 1, "prediction": 1}.get(claim.certainty, 0)
    # Earlier evidence is the stable representative when content quality ties.
    chapter_position = max(0, int(claim.evidence.chunk_index or 0))
    return answerability, salience, certainty, -chapter_position


def _canonical_key(claim: MemoryClaim) -> str:
    category = _compact(claim.category)
    subject = _compact(claim.subject)
    predicate = _compact(claim.predicate)
    obj = _compact(claim.object)
    if category == "event":
        # Events are allowed to recur. Only exact same-source duplicates are
        # safely mergeable; repeated wording in another chapter is preserved.
        return _stable_key(category, subject, predicate, obj, claim.statement)
    return _stable_key(category, subject, predicate, obj)


def _conflict_key(claim: MemoryClaim) -> str:
    predicate = _compact(claim.predicate)
    if not any(marker in predicate for marker in STATE_PREDICATE_MARKERS):
        return ""
    return _stable_key(claim.category, claim.subject, claim.predicate)


def normalize_claim_set(
    claims: Iterable[dict[str, Any] | MemoryClaim],
    space_id: str,
    source_revision: str,
    *,
    skip_invalid: bool = False,
) -> list[MemoryClaim]:
    """Normalize a claim collection without deleting evidence.

    Duplicate claims remain in the exported revision with ``duplicate`` and
    ``duplicate_of`` metadata, while recall can exclude them. This makes the
    operation deterministic, inspectable, and safe to rerun after improving
    the classifier.
    """
    normalized: list[MemoryClaim] = []
    for raw in claims:
        try:
            normalized.append(normalize_claim(raw, space_id, source_revision))
        except ValueError:
            if not skip_invalid:
                raise
    enriched: list[MemoryClaim] = []
    for claim in normalized:
        kind, answerability, reason = classify_claim(claim)
        canonical_key = claim.canonical_key or _canonical_key(claim)
        cluster_id = claim.cluster_id or _cluster_id(space_id, source_revision, canonical_key)
        conflict_key = claim.conflict_key or _conflict_key(claim)
        explicit_answerability = ""
        if isinstance(claim, MemoryClaim):
            explicit_answerability = claim.answerability if claim.answerability in ANSWERABILITY_VALUES else ""
        enriched.append(replace(
            claim,
            memory_kind=kind,
            answerability=explicit_answerability or answerability,
            canonical_key=canonical_key,
            cluster_id=cluster_id,
            conflict_key=conflict_key,
            status_reason=claim.status_reason or reason,
        ))

    by_key: dict[str, list[MemoryClaim]] = defaultdict(list)
    for claim in enriched:
        by_key[claim.canonical_key].append(claim)
    result: list[MemoryClaim] = []
    for claim in enriched:
        siblings = by_key[claim.canonical_key]
        if len(siblings) > 1:
            representative = max(siblings, key=_quality_rank)
            # For event claims, keep repetitions from different source quotes;
            # only an identical quote is an extraction duplicate.
            same_evidence = [
                item for item in siblings
                if _compact(item.evidence.quote) == _compact(claim.evidence.quote)
            ]
            can_dedupe = claim.category != "event" or len(same_evidence) > 1
            if can_dedupe and claim.id != representative.id:
                claim = replace(
                    claim,
                    lifecycle_status="duplicate",
                    duplicate_of=representative.id,
                    status_reason="same_canonical_fact",
                )
        result.append(claim)

    # Detect potentially competing singleton-state claims without silently
    # choosing a winner. Time-scoped fiction often changes state legitimately,
    # so these remain active and are annotated as temporal variants. A future
    # adjudication pass can promote a genuinely contradictory group to
    # ``disputed`` without re-extracting the source.
    conflicts: dict[str, list[MemoryClaim]] = defaultdict(list)
    for claim in result:
        if claim.conflict_key and claim.lifecycle_status == "active":
            conflicts[claim.conflict_key].append(claim)
    variant_ids: set[str] = set()
    for members in conflicts.values():
        objects = {_compact(member.object) for member in members}
        if len(objects) > 1:
            variant_ids.update(member.id for member in members)
    result = [
        replace(
            claim,
            status_reason="temporal_state_variant" if claim.id in variant_ids and claim.lifecycle_status == "active" else claim.status_reason,
        )
        for claim in result
    ]
    return result


def normalization_summary(claims: Iterable[MemoryClaim]) -> dict[str, Any]:
    materialized = list(claims)
    status_counts = Counter(claim.lifecycle_status for claim in materialized)
    answerability_counts = Counter(claim.answerability for claim in materialized)
    kind_counts = Counter(claim.memory_kind for claim in materialized)
    clusters = {claim.cluster_id for claim in materialized if claim.cluster_id}
    variant_groups = {
        claim.conflict_key
        for claim in materialized
        if claim.conflict_key and claim.status_reason == "temporal_state_variant"
    }
    return {
        "normalization_version": NORMALIZATION_VERSION,
        "input_count": len(materialized),
        "cluster_count": len(clusters),
        "duplicate_count": status_counts.get("duplicate", 0),
        "disputed_count": status_counts.get("disputed", 0),
        "temporal_variant_group_count": len(variant_groups),
        "status_counts": dict(status_counts),
        "answerability_counts": dict(answerability_counts),
        "memory_kind_counts": dict(kind_counts),
        "answer_ready_count": answerability_counts.get("self_contained", 0),
        "retrieval_only_count": answerability_counts.get("retrieval_only", 0),
    }
