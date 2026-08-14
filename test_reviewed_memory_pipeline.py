import json
import unittest
from types import SimpleNamespace

from reviewed_memory_pipeline import representative_titles, run_reviewed_memory_pipeline


class FakeCompletions:
    def __init__(self, payloads):
        self.payloads = list(payloads)

    def create(self, **_kwargs):
        content = json.dumps(self.payloads.pop(0), ensure_ascii=False)
        return SimpleNamespace(choices=[SimpleNamespace(message=SimpleNamespace(content=content))])


class ReviewedMemoryPipelineTests(unittest.TestCase):
    def test_representative_titles_are_deterministic_and_cover_both_ends(self):
        titles = [f"第{index}章" for index in range(1, 101)]
        selected = representative_titles(titles, 6)
        self.assertEqual(selected, ["第1章", "第21章", "第41章", "第60章", "第80章", "第100章"])
        self.assertEqual(selected, representative_titles(titles, 6))

    def test_pipeline_only_promotes_facts_that_pass_every_review_dimension(self):
        extraction = {
            "chapter": "第一章",
            "facts": [{
                "category": "event",
                "subject": "方源",
                "predicate": "获得",
                "object": "羊皮地图",
                "statement": "方源获得了一张羊皮地图。",
                "certainty": "explicit_fact",
                "time_scope": "chapter_event",
                "salience": "core",
                "evidence_id": "C001",
                "confidence": 0.98,
            }],
        }
        review = {"reviews": [{
            "fact_index": 0,
            "verdict": "pass",
            "grounded": True,
            "atomic": True,
            "entities_resolved": True,
            "category_correct": True,
            "time_correct": True,
            "useful": True,
            "reason": "原文直接支持。",
        }]}
        client = SimpleNamespace(chat=SimpleNamespace(completions=FakeCompletions([extraction, review])))
        progress = []
        result = run_reviewed_memory_pipeline(
            [{
                "title": "第一章",
                "text": "方源获得了一张羊皮地图。",
                "source_chunk_start": 1,
                "source_chunk_end": 1,
            }],
            client,
            "test-model",
            lambda value: value,
            lambda content: content,
            lambda percent, stage, chapters: progress.append((percent, stage, len(chapters))),
            lambda: False,
        )
        self.assertTrue(result["score"]["passed"])
        self.assertEqual(len(result["claims"]), 1)
        self.assertEqual(result["claims"][0]["chunk_index"], 1)
        self.assertEqual(progress[-1][2], 1)


if __name__ == "__main__":
    unittest.main()
