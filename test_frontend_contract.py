from __future__ import annotations

import re
import unittest
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent


class FrontendContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.javascript = (ROOT / "app.js").read_text(encoding="utf-8")

    def test_html_ids_are_unique(self) -> None:
        ids = re.findall(r'\bid=["\']([^"\']+)["\']', self.html)
        duplicates = sorted(identifier for identifier, count in Counter(ids).items() if count > 1)
        self.assertEqual(duplicates, [], f"duplicate HTML ids: {duplicates}")

    def test_literal_javascript_id_selectors_exist_in_html(self) -> None:
        ids = set(re.findall(r'\bid=["\']([^"\']+)["\']', self.html))
        references = set(
            re.findall(
                r'document\.querySelector(?:All)?\(\s*["\']#([^"\']+)["\']',
                self.javascript,
            )
        )
        self.assertEqual(sorted(references - ids), [])

    def test_runtime_assets_are_present_and_expected_controls_are_wired(self) -> None:
        self.assertIn('<link rel="stylesheet" href="styles.css"', self.html)
        self.assertIn('<script src="app.js"></script>', self.html)
        ids = set(re.findall(r'\bid=["\']([^"\']+)["\']', self.html))
        required = {
            "projectSelect",
            "messageInput",
            "providerSelect",
            "conversationContext",
            "contextDialog",
            "advanceBeat",
            "beatOutcomeInput",
            "generateBeatOutcome",
            "beatProgressText",
            "beatProgressBar",
            "checkpointDialog",
        }
        self.assertTrue(required.issubset(ids))
        self.assertIn("captureSceneOutcome", self.javascript)
        self.assertIn("记为结果", self.javascript)
        self.assertIn("sourceActiveProjectId", self.javascript)
        self.assertIn("selectedImported", self.javascript)
        self.assertIn("summarizeCurrentSceneOutcome", self.javascript)
        self.assertIn("getModelMessages({ fullHistory: true })", self.javascript)
        self.assertIn("const maxConversationMessages = 120", self.javascript)
        self.assertIn("const source = fullHistory", self.javascript)
        self.assertIn("现有项目不会被覆盖", self.javascript)
        self.assertIn("provider_details", self.javascript)


if __name__ == "__main__":
    unittest.main()
