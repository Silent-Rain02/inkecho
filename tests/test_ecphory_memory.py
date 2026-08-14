import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from inkecho.ecphory_memory import (
    LocalEcphoryMemoryBackend,
    PersistentEcphoryMemoryBackend,
    promoted_claims_from_report,
)


def claim(
    claim_id: str,
    category: str,
    subject: str,
    predicate: str,
    obj: str,
    statement: str,
    chapter: str,
    chunk_index: int,
) -> dict:
    return {
        "id": claim_id,
        "category": category,
        "subject": subject,
        "predicate": predicate,
        "object": obj,
        "statement": statement,
        "certainty": "explicit_fact",
        "time_scope": "chapter_event",
        "salience": "core",
        "evidence_quote": statement,
        "chapter": chapter,
        "chunk_index": chunk_index,
        "confidence": 0.95,
    }


class EcphoryMemoryTests(unittest.TestCase):
    def setUp(self) -> None:
        self.backend = LocalEcphoryMemoryBackend()
        self.backend.replace_space("novel", "rev-1", [
            claim("c1", "relation", "方源", "与…结盟", "黑楼兰", "方源与黑楼兰结盟。", "第三卷", 100),
            claim("c2", "character", "黑楼兰", "持有", "力道仙蛊", "黑楼兰持有力道仙蛊。", "第三卷", 110),
            claim("c3", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一卷", 10),
        ])

    def test_builds_entity_engrams_with_provenance(self) -> None:
        exported = self.backend.export_space("novel")
        self.assertEqual(exported["source_revision"], "rev-1")
        self.assertEqual(len(exported["claims"]), 3)
        entity_names = {item["entity"] for item in exported["engrams"]}
        self.assertIn("方源", entity_names)
        self.assertIn("黑楼兰", entity_names)
        self.assertEqual(exported["claims"][0]["evidence"]["chapter"], "第三卷")

    def test_two_hop_recall_expands_from_entity_cue(self) -> None:
        recalled = self.backend.recall("novel", "方源的盟友拥有什么仙蛊？", depth=2, limit=5)
        statements = [item["claim"]["statement"] for item in recalled["results"]]
        self.assertIn("方源与黑楼兰结盟。", statements)
        self.assertIn("黑楼兰持有力道仙蛊。", statements)
        second = next(item for item in recalled["results"] if item["claim"]["id"] == "c2")
        self.assertEqual(second["association_path"], ["方源", "黑楼兰", "力道仙蛊"])
        self.assertIn(["方源", "黑楼兰"], second["association_paths"])

    def test_compositional_relation_query_prefers_explanatory_path(self) -> None:
        backend = LocalEcphoryMemoryBackend()
        backend.replace_space("novel", "rev-1", [
            claim("relation", "relation", "郑山川", "是徒弟", "岐山老人", "郑山川是岐山老人的徒弟。", "第四卷", 100),
            claim("gift", "event", "岐山老人", "交给", "方源", "岐山老人将舌尖血交给方源。", "第四卷", 101),
        ])
        recalled = backend.recall("novel", "郑山川的师父交给方源什么？", depth=2)
        gift = next(item for item in recalled["results"] if item["claim"]["id"] == "gift")
        self.assertEqual(gift["association_path"], ["郑山川", "岐山老人"])
        self.assertEqual(
            {item["claim"]["id"] for item in recalled["results"]},
            {"relation", "gift"},
        )

    def test_relation_question_does_not_return_graph_neighbor_relationships(self) -> None:
        recalled = self.backend.recall("novel", "方源和黑楼兰是什么关系？", depth=2)
        self.assertEqual({item["claim"]["id"] for item in recalled["results"]}, {"c1"})

    def test_acquisition_question_filters_surrounding_item_details(self) -> None:
        backend = LocalEcphoryMemoryBackend()
        backend.replace_space("novel", "rev-1", [
            claim("got", "character", "少年盗天", "持有", "羊皮地图", "少年盗天持有羊皮地图。", "第五卷", 500),
            claim("read", "event", "少年盗天", "读出", "地图文字", "少年盗天读出了地图文字。", "第五卷", 500),
            claim("mark", "setting", "羊皮地图", "标注", "绿洲", "羊皮地图标注了一处绿洲。", "第五卷", 500),
        ])
        recalled = backend.recall("novel", "少年盗天搜尸后得到了什么？")
        self.assertEqual(recalled["intent"], "acquisition")
        self.assertEqual({item["claim"]["id"] for item in recalled["results"]}, {"got"})

    def test_chapter_cutoff_blocks_future_claims(self) -> None:
        recalled = self.backend.recall("novel", "黑楼兰有什么仙蛊？", chapter_cutoff=105)
        ids = {item["claim"]["id"] for item in recalled["results"]}
        self.assertNotIn("c2", ids)
        self.assertEqual(ids, set())

    def test_unrelated_salient_claim_is_not_returned_without_a_signal(self) -> None:
        recalled = self.backend.recall("novel", "完全无关的陌生问题")
        self.assertEqual(recalled["results"], [])

    def test_explicit_relationship_question_only_returns_relationship_claims(self) -> None:
        recalled = self.backend.recall("novel", "方源和黑楼兰是什么关系？")
        self.assertEqual(
            {item["claim"]["category"] for item in recalled["results"]},
            {"relation"},
        )

    def test_location_question_does_not_return_non_location_facts(self) -> None:
        recalled = self.backend.recall("novel", "方源现在在什么地方？")
        self.assertEqual(recalled["intent"], "location")
        self.assertEqual(recalled["results"], [])

    def test_location_question_rejects_temporal_return_claim(self) -> None:
        backend = LocalEcphoryMemoryBackend()
        backend.replace_space("novel", "rev-1", [
            claim(
                "temporal",
                "character",
                "方源",
                "认为自己回到了",
                "五百年前",
                "方源认为自己回到了五百年前。",
                "第一卷",
                5,
            ),
        ])
        recalled = backend.recall("novel", "方源醒来时身处什么地方？")
        self.assertEqual(recalled["intent"], "location")
        self.assertEqual(recalled["results"], [])

    def test_nested_entity_name_is_activated_by_canonical_entity(self) -> None:
        backend = LocalEcphoryMemoryBackend()
        backend.replace_space("novel", "rev-1", [{
            **claim("cost", "setting", "每一次使用春秋蝉", "必须付出", "生命", "每一次使用春秋蝉都必须付出生命。", "第一卷", 10),
            "entities": ["每一次使用春秋蝉", "生命"],
        }, claim("effect", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一卷", 10)])
        recalled = backend.recall("novel", "使用春秋蝉需要付出什么代价？")
        self.assertIn("cost", {item["claim"]["id"] for item in recalled["results"]})

    def test_possession_question_filters_unrelated_entity_facts_after_cutoff(self) -> None:
        backend = LocalEcphoryMemoryBackend()
        backend.replace_space("novel", "rev-1", [
            claim("early", "event", "方源", "重生", "过去", "方源重生了。", "第一卷", 10),
            claim("future", "character", "方源", "拥有仙道杀招", "鬼不觉", "方源拥有仙道杀招鬼不觉。", "第五卷", 500),
        ])
        recalled = backend.recall("novel", "方源身上有什么仙道杀招？", chapter_cutoff=10)
        self.assertEqual(recalled["intent"], "possession")
        self.assertEqual(recalled["results"], [])

    def test_promoted_report_mapping_excludes_quarantined_facts(self) -> None:
        report = {
            "space_id": "novel",
            "source_revision": "rev-1",
            "runs": [{
                "chapters": [{
                    "chapter": "第一章",
                    "promoted_facts": [claim("good", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一章", 1)],
                    "facts": [
                        claim("good", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一章", 1),
                        claim("bad", "event", "方源", "飞出", "光河", "方源飞出光河。", "第一章", 1),
                    ],
                }],
            }],
        }
        promoted = promoted_claims_from_report(report)
        self.assertEqual([item["id"] for item in promoted], ["good"])

    def test_persistent_backend_restores_active_revision(self) -> None:
        with TemporaryDirectory() as temporary:
            first = PersistentEcphoryMemoryBackend(Path(temporary))
            built = first.replace_space("novel", "rev-1", [
                claim("c1", "relation", "方源", "与…结盟", "黑楼兰", "方源与黑楼兰结盟。", "第三卷", 100),
                claim("c2", "character", "黑楼兰", "持有", "力道仙蛊", "黑楼兰持有力道仙蛊。", "第三卷", 110),
            ])
            self.assertEqual(built["backend"], "inkecho_ecphory")
            self.assertTrue(built["memory_revision"])
            self.assertEqual(built["status"], "pilot")
            self.assertFalse(first.is_product_ready("novel", "rev-1"))
            first.promote_space("novel", built["memory_revision"])
            self.assertTrue(first.is_product_ready("novel", "rev-1"))
            rebuilt = first.replace_space("novel", "rev-1", [
                claim("c1", "relation", "方源", "与…结盟", "黑楼兰", "方源与黑楼兰结盟。", "第三卷", 100),
                claim("c2", "character", "黑楼兰", "持有", "力道仙蛊", "黑楼兰持有力道仙蛊。", "第三卷", 110),
            ])
            self.assertEqual(rebuilt["memory_revision"], built["memory_revision"])
            self.assertEqual(rebuilt["status"], "production")

            restored = PersistentEcphoryMemoryBackend(Path(temporary))
            self.assertTrue(restored.has_space("novel", "rev-1"))
            self.assertTrue(restored.is_product_ready("novel", "rev-1"))
            recalled = restored.recall("novel", "方源的盟友拥有什么仙蛊？", depth=2)
            self.assertEqual(recalled["backend"], "inkecho_ecphory")
            self.assertIn("c2", {item["claim"]["id"] for item in recalled["results"]})

    def test_persistent_backend_rejects_stale_source_revision(self) -> None:
        with TemporaryDirectory() as temporary:
            backend = PersistentEcphoryMemoryBackend(Path(temporary))
            backend.replace_space("novel", "rev-1", [
                claim("c1", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一卷", 10),
            ])
            self.assertFalse(backend.has_space("novel", "rev-2"))

    def test_delete_space_removes_memory_from_disk_and_process(self) -> None:
        with TemporaryDirectory() as temporary:
            backend = PersistentEcphoryMemoryBackend(Path(temporary))
            backend.replace_space("novel", "rev-1", [
                claim("c1", "setting", "春秋蝉", "能够", "逆转时光", "春秋蝉能够逆转时光。", "第一卷", 10),
            ])
            self.assertTrue(backend.has_space("novel", "rev-1"))
            self.assertTrue(backend.delete_space("novel"))
            self.assertFalse(backend.has_space("novel"))
            self.assertFalse(backend._space_root("novel").exists())
            self.assertFalse(backend.delete_space("novel"))


if __name__ == "__main__":
    unittest.main()
