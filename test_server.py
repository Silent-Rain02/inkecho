import os
import unittest
from types import SimpleNamespace
from unittest.mock import patch

from server import (
    build_messages,
    complete_chat,
    list_provider_models,
    provider_health_snapshot,
    provider_settings,
    public_error,
    response_length_settings,
)


class ServerConfigTests(unittest.TestCase):
    def test_supported_provider_can_be_selected_without_network(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            settings = provider_settings("ollama", "qwen3:8b")
        self.assertEqual(settings.provider, "ollama")
        self.assertEqual(settings.model, "qwen3:8b")
        self.assertTrue(settings.configured)

    def test_health_snapshot_uses_model_selected_in_ui(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            snapshot = provider_health_snapshot("ollama", "qwen3:8b")
        self.assertTrue(snapshot["providers"]["ollama"])
        self.assertEqual(snapshot["provider"], "ollama")

    def test_unknown_provider_is_rejected(self) -> None:
        with self.assertRaises(ValueError):
            provider_settings("not-a-provider", "demo")

    def test_prompt_contains_creation_context_and_history(self) -> None:
        messages = build_messages(
            {
                "mode": "续写",
                "creativity": "imaginative",
                "context": {
                    "title": "春日札记",
                    "era": "江南",
                    "world": "雨巷",
                    "reference": "她把伞留在了门边。",
                    "summary": "沈砚正在寻找失散的妹妹。",
                },
                "character": {"name": "沈砚", "tone": "沉静"},
                "messages": [{"role": "user", "content": "继续写下去"}],
            }
        )
        self.assertEqual(messages[0]["role"], "system")
        self.assertIn("春日札记", messages[0]["content"])
        self.assertIn("沈砚", messages[0]["content"])
        self.assertIn("她把伞留在了门边。", messages[0]["content"])
        self.assertIn("沈砚正在寻找失散的妹妹。", messages[0]["content"])
        self.assertIn("大胆想象", messages[0]["content"])
        self.assertEqual(messages[-1], {"role": "user", "content": "继续写下去"})

    def test_response_length_maps_to_safe_generation_budget(self) -> None:
        self.assertEqual(response_length_settings({"response_length": "concise"})[0], 420)
        self.assertEqual(response_length_settings({"response_length": "expanded"})[0], 1200)
        self.assertEqual(response_length_settings({"response_length": "unknown"})[0], 700)

    def test_prompt_describes_requested_response_length(self) -> None:
        system_prompt = build_messages({"response_length": "expanded"})[0]["content"]
        self.assertIn("充分铺陈场景", system_prompt)

    def test_complete_chat_passes_selected_length_to_provider(self) -> None:
        class FakeCompletions:
            def __init__(self) -> None:
                self.kwargs = {}

            def create(self, **kwargs):
                self.kwargs = kwargs
                return SimpleNamespace(
                    choices=[SimpleNamespace(message=SimpleNamespace(content="一段展开的回复。"))]
                )

        fake_completions = FakeCompletions()
        fake_client = SimpleNamespace(chat=SimpleNamespace(completions=fake_completions))
        environment = {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "test-key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://example.test/v1",
        }
        with patch.dict(os.environ, environment, clear=True), patch("server.build_client", return_value=fake_client):
            text, _ = complete_chat({
                "provider": "custom_azure",
                "model": "demo-model",
                "response_length": "expanded",
                "messages": [{"role": "user", "content": "继续"}],
            })
        self.assertEqual(text, "一段展开的回复。")
        self.assertEqual(fake_completions.kwargs["max_tokens"], 1200)

    def test_azure_model_listing_uses_configured_deployment_without_network(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_CUSTOM_AZURE_MODEL": "office-model"}, clear=False):
            self.assertEqual(list_provider_models("custom_azure"), ["office-model"])

    def test_reference_is_capped_before_prompt_construction(self) -> None:
        reference = "雨" * 5000
        system_prompt = build_messages({"context": {"reference": reference}})[0]["content"]
        self.assertEqual(system_prompt.count("雨"), 4000)

    def test_provider_exception_is_not_returned_to_client(self) -> None:
        error = public_error(RuntimeError("upstream key=secret-value response body"))
        self.assertNotIn("secret-value", error)
        self.assertEqual(error, "模型服务请求失败，请检查服务配置或连接")


if __name__ == "__main__":
    unittest.main()
