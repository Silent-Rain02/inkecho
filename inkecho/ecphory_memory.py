from __future__ import annotations

import hashlib
import json
import math
import os
import re
import shutil
from collections import Counter, defaultdict, deque
from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Iterable, Protocol


ECPHORY_SCHEMA_VERSION = 1
DEFAULT_RECALL_DEPTH = 2
MAX_RECALL_DEPTH = 3
TOKEN_RE = re.compile(r"[A-Za-z0-9_]+|[\u4e00-\u9fff]{2,}")


@dataclass(frozen=True)
class EvidenceRef:
    chapter: str
    quote: str
    start: int = -1
    end: int = -1
    chunk_index: int = 0


@dataclass(frozen=True)
class MemoryClaim:
    id: str
    space_id: str
    source_revision: str
    category: str
    subject: str
    predicate: str
    object: str
    statement: str
    certainty: str
    time_scope: str
    salience: str
    evidence: EvidenceRef
    entities: tuple[str, ...]
    # These fields are intentionally additive. Older immutable revisions can
    # still be loaded because normalize_claim supplies safe defaults.
    memory_kind: str = "event"
    answerability: str = "context_required"
    lifecycle_status: str = "active"
    canonical_key: str = ""
    cluster_id: str = ""
    duplicate_of: str = ""
    conflict_key: str = ""
    status_reason: str = ""


@dataclass
class Engram:
    id: str
    space_id: str
    source_revision: str
    entity: str
    aliases: set[str] = field(default_factory=set)
    claim_ids: set[str] = field(default_factory=set)
    neighbors: dict[str, int] = field(default_factory=dict)
    chapters: set[str] = field(default_factory=set)
    time_scopes: set[str] = field(default_factory=set)


class EcphoryMemoryBackend(Protocol):
    def replace_space(
        self,
        space_id: str,
        source_revision: str,
        claims: Iterable[dict[str, Any] | MemoryClaim],
    ) -> dict[str, Any]: ...

    def recall(
        self,
        space_id: str,
        query: str,
        limit: int = 8,
        depth: int = DEFAULT_RECALL_DEPTH,
        chapter_cutoff: int | None = None,
    ) -> dict[str, Any]: ...

    def export_space(self, space_id: str) -> dict[str, Any]: ...

    def delete_space(self, space_id: str) -> bool: ...


def normalize_entity(value: Any) -> str:
    entity = re.sub(r"\s+", " ", str(value or "")).strip(" ，。！？；：、\t\n")
    entity = re.sub(r"^(?:这个|那个|这些|那些|这份|那份|该)", "", entity).strip()
    return entity[:120]


def query_terms(value: str) -> list[str]:
    normalized = str(value or "").lower()
    tokens: list[str] = []
    for match in TOKEN_RE.finditer(normalized):
        token = match.group(0)
        if "\u4e00" <= token[0] <= "\u9fff" and len(token) > 4:
            tokens.extend(token[index:index + 2] for index in range(len(token) - 1))
        tokens.append(token)
    return list(dict.fromkeys(token for token in tokens if len(token) >= 2))[:80]


def _claim_entities(raw: dict[str, Any]) -> tuple[str, ...]:
    explicit = [normalize_entity(item) for item in raw.get("entities", []) if normalize_entity(item)]
    if explicit:
        return tuple(dict.fromkeys(explicit))
    subject = normalize_entity(raw.get("subject"))
    obj = normalize_entity(raw.get("object"))
    entities = [subject] if subject else []
    if raw.get("category") == "relation" and obj:
        entities.append(obj)
    elif obj and len(obj) <= 32 and not re.search(r"(?:自己|某人|此人|这人|那人)$", obj):
        entities.append(obj)
    return tuple(dict.fromkeys(entities))


def normalize_claim(raw: dict[str, Any] | MemoryClaim, space_id: str, source_revision: str) -> MemoryClaim:
    if isinstance(raw, MemoryClaim):
        if raw.space_id != space_id or raw.source_revision != source_revision:
            raise ValueError("claim 与目标小说空间或原文版本不一致")
        return raw
    evidence = raw.get("evidence") if isinstance(raw.get("evidence"), dict) else {}
    statement = re.sub(r"\s+", " ", str(raw.get("statement") or "")).strip()[:320]
    chapter = re.sub(
        r"\s+", " ", str(raw.get("chapter") or evidence.get("chapter") or "未知章节")
    ).strip()[:160]
    evidence_quote = str(raw.get("evidence_quote") or evidence.get("quote") or "").strip()[:320]
    if not statement or not evidence_quote:
        raise ValueError("claim 缺少 statement 或逐字证据")
    entities = _claim_entities(raw)
    if not entities:
        raise ValueError("claim 缺少可建立 engram 的明确实体")
    identity = "|".join((space_id, source_revision, chapter, statement, evidence_quote))
    claim_id = str(raw.get("id") or "").strip() or "claim-" + hashlib.sha256(identity.encode("utf-8")).hexdigest()[:20]
    return MemoryClaim(
        id=claim_id[:80],
        space_id=space_id,
        source_revision=source_revision,
        category=str(raw.get("category") or "event")[:30],
        subject=normalize_entity(raw.get("subject")),
        predicate=re.sub(r"\s+", " ", str(raw.get("predicate") or "")).strip()[:80],
        object=normalize_entity(raw.get("object")),
        statement=statement,
        certainty=str(raw.get("certainty") or "uncertain")[:30],
        time_scope=str(raw.get("time_scope") or "uncertain")[:30],
        salience=str(raw.get("salience") or "supporting")[:30],
        evidence=EvidenceRef(
            chapter=chapter,
            quote=evidence_quote,
            start=int(raw.get("evidence_start") or evidence.get("start") or -1),
            end=int(raw.get("evidence_end") or evidence.get("end") or -1),
            chunk_index=max(0, int(raw.get("chunk_index") or evidence.get("chunk_index") or 0)),
        ),
        entities=entities,
        memory_kind=str(raw.get("memory_kind") or "event")[:40],
        # Empty means "let the deterministic normalizer classify it". Older
        # raw claims do not carry this field yet.
        answerability=str(raw.get("answerability") or "")[:40],
        lifecycle_status=str(raw.get("lifecycle_status") or "active")[:40],
        canonical_key=str(raw.get("canonical_key") or "")[:240],
        cluster_id=str(raw.get("cluster_id") or "")[:100],
        duplicate_of=str(raw.get("duplicate_of") or "")[:80],
        conflict_key=str(raw.get("conflict_key") or "")[:240],
        status_reason=str(raw.get("status_reason") or "")[:160],
    )


class LocalEcphoryMemoryBackend:
    """Deterministic local reference backend for the Ecphory-compatible contract."""

    def __init__(self, semantic_scorer: Callable[[str, list[MemoryClaim]], list[float]] | None = None) -> None:
        self._claims: dict[str, dict[str, MemoryClaim]] = {}
        self._engrams: dict[str, dict[str, Engram]] = {}
        self._revisions: dict[str, str] = {}
        self._normalization_summaries: dict[str, dict[str, Any]] = {}
        self._semantic_scorer = semantic_scorer

    def replace_space(
        self,
        space_id: str,
        source_revision: str,
        claims: Iterable[dict[str, Any] | MemoryClaim],
    ) -> dict[str, Any]:
        normalized_space = str(space_id or "").strip()
        normalized_revision = str(source_revision or "").strip()
        if not normalized_space or not normalized_revision:
            raise ValueError("space_id 与 source_revision 不能为空")
        materialized = list(claims)
        # Import lazily to keep the normalization module independent from the
        # core claim dataclasses and avoid an import cycle.
        from .memory_normalization import normalize_claim_set, normalization_summary

        normalized_materialized = normalize_claim_set(materialized, normalized_space, normalized_revision)
        normalized_claims: dict[str, MemoryClaim] = {}
        engrams: dict[str, Engram] = {}
        for claim in normalized_materialized:
            normalized_claims[claim.id] = claim
            if claim.lifecycle_status in {"duplicate", "deprecated", "superseded"}:
                continue
            for entity in claim.entities:
                key = entity.casefold()
                engram = engrams.setdefault(key, Engram(
                    id="engram-" + hashlib.sha256(f"{normalized_space}:{key}".encode("utf-8")).hexdigest()[:20],
                    space_id=normalized_space,
                    source_revision=normalized_revision,
                    entity=entity,
                ))
                engram.aliases.add(entity)
                engram.claim_ids.add(claim.id)
                engram.chapters.add(claim.evidence.chapter)
                engram.time_scopes.add(claim.time_scope)
            for left in claim.entities:
                for right in claim.entities:
                    if left == right:
                        continue
                    target = engrams[left.casefold()]
                    target.neighbors[right.casefold()] = target.neighbors.get(right.casefold(), 0) + 1
        self._claims[normalized_space] = normalized_claims
        self._engrams[normalized_space] = engrams
        self._revisions[normalized_space] = normalized_revision
        self._normalization_summaries[normalized_space] = normalization_summary(normalized_materialized)
        return {
            "schema_version": ECPHORY_SCHEMA_VERSION,
            "space_id": normalized_space,
            "source_revision": normalized_revision,
            "claim_count": len(normalized_claims),
            "engram_count": len(engrams),
            "normalization": self._normalization_summaries[normalized_space],
        }

    def delete_space(self, space_id: str) -> bool:
        """Forget one space without affecting any other novel."""
        normalized_space = str(space_id or "").strip()
        existed = any(normalized_space in store for store in (self._claims, self._engrams, self._revisions))
        self._claims.pop(normalized_space, None)
        self._engrams.pop(normalized_space, None)
        self._revisions.pop(normalized_space, None)
        self._normalization_summaries.pop(normalized_space, None)
        return existed

    def _cue_entities(self, space_id: str, query: str) -> list[str]:
        normalized_query = str(query or "").casefold()
        engrams = self._engrams.get(space_id, {})
        direct = [key for key, engram in engrams.items() if any(alias.casefold() in normalized_query for alias in engram.aliases)]
        if direct:
            expanded = set(direct)
            direct_entities = [engrams[key].entity.casefold() for key in direct]
            for key, engram in engrams.items():
                candidate = engram.entity.casefold()
                if any(len(entity) >= 2 and (entity in candidate or candidate in entity) for entity in direct_entities):
                    expanded.add(key)
            return sorted(expanded, key=lambda key: (key not in direct, -len(engrams[key].entity)))[:12]
        terms = set(query_terms(normalized_query))
        return [
            key for key, engram in engrams.items()
            if terms.intersection(query_terms(engram.entity))
        ][:12]

    def recall(
        self,
        space_id: str,
        query: str,
        limit: int = 8,
        depth: int = DEFAULT_RECALL_DEPTH,
        chapter_cutoff: int | None = None,
    ) -> dict[str, Any]:
        normalized_space = str(space_id or "").strip()
        claims = self._claims.get(normalized_space, {})
        engrams = self._engrams.get(normalized_space, {})
        bounded_limit = max(1, min(int(limit), 40))
        bounded_depth = max(0, min(int(depth), MAX_RECALL_DEPTH))
        cues = self._cue_entities(normalized_space, query)
        entity_scores: dict[str, float] = {}
        paths: dict[str, list[str]] = {}
        queue: deque[tuple[str, int, list[str]]] = deque((cue, 0, [engrams[cue].entity]) for cue in cues)
        visited_depth: dict[str, int] = {}
        while queue:
            key, hop, path = queue.popleft()
            if key in visited_depth and visited_depth[key] <= hop:
                continue
            visited_depth[key] = hop
            entity_scores[key] = max(entity_scores.get(key, 0.0), 12.0 * (0.55 ** hop))
            paths[key] = path
            if hop >= bounded_depth:
                continue
            for neighbor, weight in sorted(engrams[key].neighbors.items(), key=lambda item: item[1], reverse=True):
                if neighbor in engrams:
                    queue.append((neighbor, hop + 1, [*path, engrams[neighbor].entity]))

        query_token_counts = Counter(query_terms(query))
        normalized_query = re.sub(r"\s+", "", str(query or "").casefold())
        compositional_relation_query = any(
            marker in normalized_query
            for marker in (
                "的师父", "的徒弟", "的盟友", "的敌人", "的父亲", "的母亲", "的哥哥",
                "的弟弟", "的姐姐", "的妹妹", "的上级", "的下属", "的首领", "的族长",
            )
        )
        compositional_prefix = normalized_query
        if compositional_relation_query:
            marker_positions = [
                normalized_query.find(marker)
                for marker in (
                    "的师父", "的徒弟", "的盟友", "的敌人", "的父亲", "的母亲", "的哥哥",
                    "的弟弟", "的姐姐", "的妹妹", "的上级", "的下属", "的首领", "的族长",
                )
                if marker in normalized_query
            ]
            compositional_prefix = normalized_query[:min(marker_positions)] if marker_positions else normalized_query
        explicit_relation_question = any(
            marker in normalized_query
            for marker in ("什么关系", "关系是什么", "关系如何", "之间有何关系")
        )
        explicit_location_question = any(
            marker in normalized_query
            for marker in ("在哪里", "在哪", "何处", "什么地方", "哪儿")
        )
        requested_possession_types = [
            term for term in ("仙道杀招", "杀招", "仙蛊", "蛊虫", "道具", "武器")
            if term in normalized_query
        ]
        acquisition_question = any(
            marker in normalized_query
            for marker in (
                "得到什么", "得到了什么", "获得什么", "获得了什么", "拿到什么", "拿到了什么",
                "收获什么", "收获了什么", "取得什么", "取得了什么",
            )
        )
        literal_cues = {
            key for key in cues
            if any(alias.casefold() in normalized_query for alias in engrams[key].aliases)
        }
        compositional_source_entities = {
            engrams[key].entity.casefold()
            for key in literal_cues
            if compositional_relation_query
            and any(alias.casefold() in compositional_prefix for alias in engrams[key].aliases)
        }
        candidate_claims = [
            claim for claim in claims.values()
            if claim.lifecycle_status not in {"duplicate", "deprecated", "superseded"}
        ]
        semantic_scores = (
            self._semantic_scorer(query, candidate_claims)
            if self._semantic_scorer and candidate_claims
            else [0.0] * len(candidate_claims)
        )
        if len(semantic_scores) != len(candidate_claims):
            raise ValueError("semantic_scorer 返回数量与 claims 不一致")
        has_possession_answer = not requested_possession_types or any(
            (chapter_cutoff is None or not claim.evidence.chunk_index or claim.evidence.chunk_index <= chapter_cutoff)
            and any(
                term in f"{claim.predicate}{claim.object}{claim.statement}"
                for term in requested_possession_types
            )
            for claim in candidate_claims
        )
        scored: list[tuple[float, MemoryClaim, list[str], dict[str, float]]] = []
        document_frequency: Counter[str] = Counter()
        claim_terms: dict[str, Counter[str]] = {}
        for claim in candidate_claims:
            terms = Counter(query_terms(" ".join((claim.statement, claim.subject, claim.object, claim.evidence.chapter))))
            claim_terms[claim.id] = terms
            document_frequency.update(terms.keys())
        total_documents = max(1, len(candidate_claims))
        for index, claim in enumerate(candidate_claims):
            if chapter_cutoff is not None and claim.evidence.chunk_index and claim.evidence.chunk_index > chapter_cutoff:
                continue
            if requested_possession_types and not has_possession_answer:
                continue
            if explicit_relation_question and claim.category != "relation":
                continue
            if explicit_relation_question and len(literal_cues) >= 2 and len(
                literal_cues.intersection(entity.casefold() for entity in claim.entities)
            ) < 2:
                continue
            if explicit_location_question and not any(
                marker in f"{claim.predicate}{claim.statement}"
                for marker in ("位于", "坐落", "身处", "处于", "来到", "到达", "回到", "返回", "住在", "出生于", "所在地")
            ):
                continue
            if explicit_location_question and re.fullmatch(
                r"(?:约|大约)?(?:\d+|[一二三四五六七八九十百千万两]+)(?:年|月|日|天|时辰)(?:前|后|以前|以后)?",
                claim.object,
            ):
                continue
            if requested_possession_types and claim.category != "relation" and not any(
                term in f"{claim.predicate}{claim.object}{claim.statement}"
                for term in requested_possession_types
            ):
                continue
            if requested_possession_types and claim.category == "relation" and not compositional_relation_query:
                continue
            if acquisition_question and not any(
                marker in f"{claim.predicate}{claim.statement}"
                for marker in (
                    "得到", "获得", "拿到", "收获", "取得", "持有", "拥有", "取走", "捡到", "收入", "交给",
                )
            ):
                continue
            if compositional_source_entities and not any(
                paths.get(entity.casefold())
                and paths[entity.casefold()][0].casefold() in compositional_source_entities
                for entity in claim.entities
            ):
                continue
            lexical = 0.0
            for term, query_count in query_token_counts.items():
                frequency = claim_terms[claim.id].get(term, 0)
                if not frequency:
                    continue
                inverse_document_frequency = math.log(1 + (total_documents + 1) / (document_frequency[term] + 1))
                lexical += min(frequency, 3) * query_count * inverse_document_frequency
            claim_entity_keys = [entity.casefold() for entity in claim.entities]
            graph = max((entity_scores.get(key, 0.0) for key in claim_entity_keys), default=0.0)
            direct_entity = 8.0 if any(key in cues for key in claim_entity_keys) else 0.0
            semantic = max(0.0, min(float(semantic_scores[index]), 1.0)) * 8.0
            salience = 1.5 if claim.salience == "core" else 0.5
            if lexical <= 0 and graph <= 0 and direct_entity <= 0 and semantic <= 0:
                continue
            if cues and graph <= 0 and direct_entity <= 0 and semantic < 3.2:
                continue
            score = lexical * 2.2 + graph + direct_entity + semantic + salience
            best_key = max(claim_entity_keys, key=lambda key: entity_scores.get(key, 0.0), default="")
            scored.append((score, claim, paths.get(best_key, []), {
                "lexical": round(lexical * 2.2, 3),
                "entity": round(graph + direct_entity, 3),
                "semantic": round(semantic, 3),
                "salience": salience,
            }))
        scored.sort(key=lambda item: (item[0], -item[1].evidence.chunk_index), reverse=True)
        results = []
        for score, claim, path, signals in scored[:bounded_limit]:
            candidate_paths = []
            for entity in claim.entities:
                candidate_path = paths.get(entity.casefold(), [])
                if candidate_path and candidate_path not in candidate_paths:
                    candidate_paths.append(candidate_path)
            if compositional_relation_query:
                explanatory = [
                    candidate_path
                    for candidate_path in candidate_paths
                    if len(candidate_path) > 1
                    and (
                        not compositional_source_entities
                        or candidate_path[0].casefold() in compositional_source_entities
                    )
                ]
                if explanatory:
                    path = max(explanatory, key=len)
            results.append({
                "claim": {
                    **asdict(claim),
                    "evidence": asdict(claim.evidence),
                },
                "score": round(score, 3),
                "signals": signals,
                "association_path": path,
                "association_paths": candidate_paths,
            })
        return {
            "schema_version": ECPHORY_SCHEMA_VERSION,
            "space_id": normalized_space,
            "source_revision": self._revisions.get(normalized_space, ""),
            "query": str(query or "")[:240],
            "depth": bounded_depth,
            "intent": (
                "relation" if explicit_relation_question
                else "location" if explicit_location_question
                else "possession" if requested_possession_types
                else "acquisition" if acquisition_question
                else "general"
            ),
            "cues": [engrams[key].entity for key in cues],
            "results": results,
        }

    def export_space(self, space_id: str) -> dict[str, Any]:
        normalized_space = str(space_id or "").strip()
        claims = self._claims.get(normalized_space, {})
        engrams = self._engrams.get(normalized_space, {})
        return {
            "schema_version": ECPHORY_SCHEMA_VERSION,
            "space_id": normalized_space,
            "source_revision": self._revisions.get(normalized_space, ""),
            "claims": [
                {**asdict(claim), "evidence": asdict(claim.evidence)}
                for claim in claims.values()
            ],
            "normalization": self._normalization_summaries.get(normalized_space, {}),
            "engrams": [
                {
                    **asdict(engram),
                    "aliases": sorted(engram.aliases),
                    "claim_ids": sorted(engram.claim_ids),
                    "chapters": sorted(engram.chapters),
                    "time_scopes": sorted(engram.time_scopes),
                }
                for engram in engrams.values()
            ],
        }


class PersistentEcphoryMemoryBackend(LocalEcphoryMemoryBackend):
    """Repository-native novel memory with immutable revisions and JSON persistence."""

    ACTIVE_FILE = "active.json"

    def __init__(
        self,
        workspace_root: str | Path,
        semantic_scorer: Callable[[str, list[MemoryClaim]], list[float]] | None = None,
    ) -> None:
        super().__init__(semantic_scorer=semantic_scorer)
        self.workspace_root = Path(workspace_root).expanduser().resolve()
        self.workspace_root.mkdir(parents=True, exist_ok=True)
        self._statuses: dict[str, str] = {}

    @staticmethod
    def _key(value: str, prefix: str) -> str:
        return f"{prefix}-{hashlib.sha256(value.encode('utf-8')).hexdigest()[:20]}"

    def _space_root(self, space_id: str) -> Path:
        return self.workspace_root / self._key(space_id, "space")

    @staticmethod
    def _write_json_atomic(path: Path, payload: dict[str, Any]) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        temporary = path.with_name(f".{path.name}.{os.getpid()}.tmp")
        try:
            temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
            os.replace(temporary, path)
        finally:
            temporary.unlink(missing_ok=True)

    @staticmethod
    def _memory_revision(payload: dict[str, Any]) -> str:
        canonical = json.dumps(payload.get("claims", []), ensure_ascii=False, sort_keys=True, separators=(",", ":"))
        return hashlib.sha256(canonical.encode("utf-8")).hexdigest()[:24]

    def replace_space(
        self,
        space_id: str,
        source_revision: str,
        claims: Iterable[dict[str, Any] | MemoryClaim],
    ) -> dict[str, Any]:
        materialized = list(claims)
        result = super().replace_space(space_id, source_revision, materialized)
        payload = super().export_space(space_id)
        memory_revision = self._memory_revision(payload)
        payload.update({
            "backend": "inkecho_ecphory",
            "memory_revision": memory_revision,
            "built_at": datetime.now(timezone.utc).isoformat(),
        })
        space_root = self._space_root(space_id)
        revision_name = self._key(f"{source_revision}:{memory_revision}", "memory") + ".json"
        revision_path = space_root / "revisions" / revision_name
        if revision_path.is_file():
            try:
                existing_payload = json.loads(revision_path.read_text(encoding="utf-8"))
            except (OSError, TypeError, ValueError) as error:
                raise RuntimeError("已有不可变记忆版本损坏，已停止覆盖") from error
            if self._memory_revision(existing_payload) != memory_revision:
                raise RuntimeError("已有不可变记忆版本校验失败，已停止覆盖")
            payload = existing_payload
        else:
            self._write_json_atomic(revision_path, payload)
        status = "pilot"
        active_path = space_root / self.ACTIVE_FILE
        if active_path.is_file():
            try:
                previous_active = json.loads(active_path.read_text(encoding="utf-8"))
                if previous_active.get("memory_revision") == memory_revision:
                    status = str(previous_active.get("status") or "pilot")
            except (OSError, TypeError, ValueError):
                status = "pilot"
        self._write_json_atomic(active_path, {
            "schema_version": ECPHORY_SCHEMA_VERSION,
            "space_id": str(space_id),
            "source_revision": str(source_revision),
            "memory_revision": memory_revision,
            "status": status,
            "revision_file": str(revision_path.relative_to(space_root)),
            "updated_at": payload["built_at"],
        })
        self._statuses[str(space_id)] = status
        return {
            **result,
            "backend": "inkecho_ecphory",
            "memory_revision": memory_revision,
            "status": status,
        }

    def _load_active(self, space_id: str) -> bool:
        normalized_space = str(space_id or "").strip()
        active_path = self._space_root(normalized_space) / self.ACTIVE_FILE
        if not active_path.is_file():
            return False
        try:
            active = json.loads(active_path.read_text(encoding="utf-8"))
            revision_path = (self._space_root(normalized_space) / str(active.get("revision_file") or "")).resolve()
            if self._space_root(normalized_space) not in revision_path.parents:
                return False
            payload = json.loads(revision_path.read_text(encoding="utf-8"))
        except (OSError, TypeError, ValueError):
            return False
        source_revision = str(payload.get("source_revision") or "")
        if payload.get("space_id") != normalized_space or not source_revision or not isinstance(payload.get("claims"), list):
            return False
        super().replace_space(normalized_space, source_revision, payload["claims"])
        self._statuses[normalized_space] = str(active.get("status") or "pilot")
        return True

    def has_space(self, space_id: str, source_revision: str = "") -> bool:
        normalized_space = str(space_id or "").strip()
        if normalized_space not in self._claims and not self._load_active(normalized_space):
            return False
        return not source_revision or self._revisions.get(normalized_space) == str(source_revision)

    def is_product_ready(self, space_id: str, source_revision: str = "") -> bool:
        normalized_space = str(space_id or "").strip()
        return self.has_space(normalized_space, source_revision) and self._statuses.get(normalized_space) == "production"

    def promote_space(self, space_id: str, expected_memory_revision: str) -> dict[str, Any]:
        normalized_space = str(space_id or "").strip()
        if not self.has_space(normalized_space):
            raise KeyError(f"小说空间尚未构建已审核记忆：{normalized_space}")
        active_path = self._space_root(normalized_space) / self.ACTIVE_FILE
        active = json.loads(active_path.read_text(encoding="utf-8"))
        actual_revision = str(active.get("memory_revision") or "")
        if not expected_memory_revision or expected_memory_revision != actual_revision:
            raise ValueError("记忆版本已变化，请重新审查后再推广")
        active["status"] = "production"
        active["promoted_at"] = datetime.now(timezone.utc).isoformat()
        self._write_json_atomic(active_path, active)
        self._statuses[normalized_space] = "production"
        return {
            "space_id": normalized_space,
            "source_revision": self._revisions[normalized_space],
            "memory_revision": actual_revision,
            "status": "production",
        }

    def recall(
        self,
        space_id: str,
        query: str,
        limit: int = 8,
        depth: int = DEFAULT_RECALL_DEPTH,
        chapter_cutoff: int | None = None,
    ) -> dict[str, Any]:
        if not self.has_space(space_id):
            raise KeyError(f"小说空间尚未构建已审核记忆：{space_id}")
        result = super().recall(space_id, query, limit, depth, chapter_cutoff)
        result["backend"] = "inkecho_ecphory"
        return result

    def export_space(self, space_id: str) -> dict[str, Any]:
        if not self.has_space(space_id):
            raise KeyError(f"小说空间尚未构建已审核记忆：{space_id}")
        payload = super().export_space(space_id)
        payload["backend"] = "inkecho_ecphory"
        payload["memory_revision"] = self._memory_revision(payload)
        payload["status"] = self._statuses.get(str(space_id or "").strip(), "pilot")
        return payload

    def delete_space(self, space_id: str) -> bool:
        """Delete active and immutable memory revisions for one explicit space."""
        normalized_space = str(space_id or "").strip()
        if not normalized_space:
            return False
        existed = super().delete_space(normalized_space)
        self._statuses.pop(normalized_space, None)
        space_root = self._space_root(normalized_space)
        if space_root.is_dir():
            shutil.rmtree(space_root)
            existed = True
        return existed


def promoted_claims_from_report(report: dict[str, Any]) -> list[dict[str, Any]]:
    """Read only already-promoted facts from an isolated extraction report."""
    claims: list[dict[str, Any]] = []
    source_revision = str(report.get("source_revision") or "")
    space_id = str(report.get("space_id") or "")
    for run in report.get("runs", []):
        if not isinstance(run, dict):
            continue
        for chapter in run.get("chapters", []):
            if not isinstance(chapter, dict):
                continue
            for fact in chapter.get("promoted_facts", []):
                if not isinstance(fact, dict):
                    continue
                claims.append({
                    **fact,
                    "space_id": space_id,
                    "source_revision": source_revision,
                    "chapter": chapter.get("chapter", "未知章节"),
                    "chunk_index": chapter.get("source_chunk_start", chapter.get("chunk_index", 0)),
                })
    return claims
