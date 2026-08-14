import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from scripts.memory_extraction_harness import load_manifest, run_version, segment_metrics
from scripts.memory_revalidation_harness import revalidate_chapter
from scripts.reviewed_memory_eval import answer_text, result_text
from scripts.reviewed_memory_harness import preflight_promoted_claims
from scripts.reviewed_memory_audit import flat_fact, passing_indices
from inkecho.memory_extraction import extraction_messages, is_meta_narrative_chapter, validate_extraction


class MemoryExtractionHarnessTests(unittest.TestCase):
    def test_v10_excludes_author_and_publication_meta_narrative(self) -> None:
        source = "于是，我决定写一本新书。这本书就叫做《蛊真人》。本书会杀美女。"
        payload = {
            "chapter": "序：不是走向成功，",
            "facts": [{
                "category": "event",
                "subject": "这本书",
                "predicate": "叫做",
                "object": "《蛊真人》",
                "statement": "这本书叫做《蛊真人》。",
                "certainty": "explicit_fact",
                "time_scope": "chapter_event",
                "salience": "core",
                "evidence_quote": "这本书就叫做《蛊真人》。",
                "confidence": 0.99,
            }],
        }
        result = validate_extraction(payload, payload["chapter"], source)
        self.assertEqual(result["accepted_count"], 0)
        self.assertIn("元叙事", result["rejections"][0]["reasons"][0])
        self.assertTrue(is_meta_narrative_chapter(payload["chapter"], source))
        self.assertIn("故事世界边界", extraction_messages(payload["chapter"], source, "v10-diegetic-only")[0]["content"])

    def test_second_pass_audit_flattens_evidence_and_only_keeps_clean_passes(self) -> None:
        fact = flat_fact({
            "id": "claim-1",
            "category": "setting",
            "subject": "春秋蝉",
            "predicate": "能够",
            "object": "逆转时光",
            "statement": "春秋蝉能够逆转时光。",
            "certainty": "explicit_fact",
            "time_scope": "timeless_rule",
            "salience": "core",
            "evidence": {"quote": "春秋蝉能够逆转时光。", "start": 1, "end": 12, "chunk_index": 5},
        })
        self.assertEqual(fact["evidence_quote"], "春秋蝉能够逆转时光。")
        reviews = [{
            "fact_index": 0, "verdict": "pass", "grounded": True, "atomic": True,
            "entities_resolved": True, "category_correct": True, "time_correct": True, "useful": True,
        }, {
            "fact_index": 1, "verdict": "minor", "grounded": True, "atomic": True,
            "entities_resolved": True, "category_correct": False, "time_correct": True, "useful": True,
        }]
        self.assertEqual(passing_indices(reviews), {0})

    def test_retrieval_eval_keeps_answer_claim_separate_from_evidence(self) -> None:
        item = {
            "claim": {
                "statement": "方源回到了五百年前。",
                "subject": "方源",
                "predicate": "回到",
                "object": "五百年前",
                "entities": ["方源", "五百年前"],
                "evidence": {
                    "chapter": "第一章",
                    "quote": "古月山寨，这是五百年前？！方源站在窗边。",
                },
            },
        }
        self.assertNotIn("古月山寨", answer_text(item))
        self.assertIn("古月山寨", result_text(item))

    def test_builder_preflight_replays_current_rules_on_old_promoted_claims(self) -> None:
        source = "铁若男是铁血冷的亲生女儿。"
        claims = [{
            "id": "wrong-direction",
            "chapter": "第一章",
            "category": "relation",
            "subject": "铁若男",
            "predicate": "是亲生父亲",
            "object": "铁血冷",
            "statement": source,
            "certainty": "explicit_fact",
            "time_scope": "past_backstory",
            "salience": "core",
            "evidence_quote": source,
            "confidence": 0.95,
        }]
        with patch("scripts.reviewed_memory_harness.server.source_revision", return_value="rev-1"), patch(
            "scripts.reviewed_memory_harness.server.source_chapter_preview",
            return_value={"text": source},
        ):
            accepted, rejected = preflight_promoted_claims("novel", "rev-1", claims)
        self.assertEqual(accepted, [])
        self.assertEqual(rejected[0]["id"], "wrong-direction")
        self.assertIn("亲属方向不一致", rejected[0]["reasons"][0])

    def test_load_manifest_normalizes_and_deduplicates_cases(self) -> None:
        payload = {
            "name": "cross-volume",
            "cases": [
                {"title": " 第一章 ", "volume": "第一卷", "tags": ["battle", "battle", ""]},
                {"title": "第一章", "volume": "第二卷", "tags": ["duplicate"]},
                {"title": "第二章", "volume": "", "tags": ["setting"]},
            ],
        }
        with tempfile.TemporaryDirectory() as temporary_dir:
            path = Path(temporary_dir) / "manifest.json"
            path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
            name, cases = load_manifest(str(path))

        self.assertEqual(name, "cross-volume")
        self.assertEqual([case["title"] for case in cases], ["第一章", "第二章"])
        self.assertEqual(cases[0]["tags"], ["battle"])
        self.assertEqual(cases[1]["volume"], "未分卷")

    def test_segment_metrics_reports_volume_and_risk_failures(self) -> None:
        chapters = [
            {
                "volume": "第一卷",
                "tags": ["battle"],
                "accepted_count": 2,
                "promoted_count": 1,
                "reviews": [
                    {"grounded": True, "category_correct": True},
                    {"grounded": False, "category_correct": True},
                ],
            },
            {
                "volume": "第二卷",
                "tags": ["battle", "relation"],
                "accepted_count": 1,
                "promoted_count": 1,
                "reviews": [{"grounded": True, "category_correct": False}],
                "parse_error": "bad json",
            },
        ]

        metrics = segment_metrics(chapters)

        self.assertEqual(metrics["tags"]["battle"]["candidates"], 3)
        self.assertEqual(metrics["tags"]["battle"]["promoted"], 2)
        self.assertEqual(metrics["tags"]["battle"]["grounding_failures"], 1)
        self.assertEqual(metrics["tags"]["battle"]["category_failures"], 1)
        self.assertEqual(metrics["volumes"]["第二卷"]["parse_errors"], 1)

    def test_resume_only_skips_fully_reviewed_successful_chapter(self) -> None:
        previews = [
            {"title": "成功章", "text": "原文。", "volume": "第一卷", "tags": []},
            {"title": "失败章", "text": "原文。", "volume": "第一卷", "tags": []},
        ]
        existing = [
            {
                "chapter": "成功章",
                "accepted_count": 1,
                "reviews": [{"verdict": "pass"}],
                "facts": [],
                "rejections": [],
                "promoted_count": 1,
            },
            {
                "chapter": "失败章",
                "accepted_count": 0,
                "reviews": [],
                "parse_error": "temporary failure",
            },
        ]

        class FailingClient:
            class Chat:
                class Completions:
                    @staticmethod
                    def create(**kwargs):
                        raise RuntimeError("rerun attempted")

                completions = Completions()

            chat = Chat()

        settings = type("Settings", (), {"model": "test-model"})()
        run = run_version(
            "v4-span-anchored",
            previews,
            FailingClient(),
            settings,
            True,
            existing_chapters=existing,
        )

        by_title = {chapter["chapter"]: chapter for chapter in run["chapters"]}
        self.assertNotIn("parse_error", by_title["成功章"])
        self.assertEqual(by_title["失败章"]["error_type"], "RuntimeError")
        self.assertIn("模型服务", by_title["失败章"]["parse_error"])

    def test_revalidation_replays_locally_rejected_candidate_under_new_rules(self) -> None:
        source = "方源回头看着这个弟弟。方正觉得哥哥的目光似乎十分锐利。"
        chapter = revalidate_chapter({
            "chapter": "第一章",
            "facts": [],
            "rejections": [{
                "fact": {
                    "category": "relation",
                    "subject": "方源",
                    "predicate": "是哥哥",
                    "object": "方正",
                    "statement": "方源是方正的哥哥。",
                    "certainty": "explicit_fact",
                    "time_scope": "chapter_event",
                    "salience": "core",
                    "evidence_quote": source,
                    "confidence": 0.9,
                },
            }],
        }, source)
        self.assertTrue(chapter["revalidated"])
        self.assertEqual(chapter["accepted_count"], 1)
        self.assertEqual(chapter["facts"][0]["category"], "relation")


if __name__ == "__main__":
    unittest.main()
