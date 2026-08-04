import os
import unittest
from unittest.mock import patch

from server import build_messages, list_provider_models, provider_settings


class ServerConfigTests(unittest.TestCase):
    def test_supported_provider_can_be_selected_without_network(self) -> None:
        settings = provider_settings("ollama", "qwen3:8b")
        self.assertEqual(settings.provider, "ollama")
        self.assertEqual(settings.model, "qwen3:8b")

    def test_unknown_provider_is_rejected(self) -> None:
        with self.assertRaises(ValueError):
            provider_settings("not-a-provider", "demo")

    def test_prompt_contains_creation_context_and_history(self) -> None:
        messages = build_messages(
            {
                "mode": "续写",
                "context": {
                    "title": "春日札记",
                    "era": "江南",
                    "world": "雨巷",
                    "reference": "她把伞留在了门边。",
                },
                "character": {"name": "沈砚", "tone": "沉静"},
                "messages": [{"role": "user", "content": "继续写下去"}],
            }
        )
        self.assertEqual(messages[0]["role"], "system")
        self.assertIn("春日札记", messages[0]["content"])
        self.assertIn("沈砚", messages[0]["content"])
        self.assertIn("她把伞留在了门边。", messages[0]["content"])
        self.assertEqual(messages[-1], {"role": "user", "content": "继续写下去"})

    def test_azure_model_listing_uses_configured_deployment_without_network(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_CUSTOM_AZURE_MODEL": "office-model"}, clear=False):
            self.assertEqual(list_provider_models("custom_azure"), ["office-model"])


if __name__ == "__main__":
    unittest.main()
