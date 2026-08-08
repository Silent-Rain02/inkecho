import io
import json
import os
import unittest
from types import SimpleNamespace
from urllib.parse import urlencode
from unittest.mock import patch

from server import (
    build_messages,
    complete_chat,
    error_status,
    InkEchoHandler,
    list_provider_models,
    provider_health_snapshot,
    provider_settings,
    probe_provider,
    summarize_chat,
    public_error,
    request_timeout_seconds,
    response_length_settings,
    SECURITY_HEADERS,
    STATIC_FILES,
    MAX_HISTORY_CHARS,
    static_asset_path,
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
                    "chapter": "第三回 · 潇湘馆夜话",
                    "era": "江南",
                    "world": "雨巷",
                    "reference": "她把伞留在了门边。",
                    "summary": "沈砚正在寻找失散的妹妹。",
                    "instructions": "保持古典语感，不改变人物结局。",
                },
                "character": {"name": "沈砚", "tone": "沉静"},
                "messages": [{"role": "user", "content": "继续写下去"}],
            }
        )
        self.assertEqual(messages[0]["role"], "system")
        self.assertIn("春日札记", messages[0]["content"])
        self.assertIn("第三回 · 潇湘馆夜话", messages[0]["content"])
        self.assertIn("沈砚", messages[0]["content"])
        self.assertIn("她把伞留在了门边。", messages[0]["content"])
        self.assertIn("沈砚正在寻找失散的妹妹。", messages[0]["content"])
        self.assertIn("保持古典语感，不改变人物结局。", messages[0]["content"])
        self.assertIn("大胆想象", messages[0]["content"])
        self.assertEqual(messages[-1], {"role": "user", "content": "继续写下去"})

    def test_response_length_maps_to_safe_generation_budget(self) -> None:
        self.assertEqual(response_length_settings({"response_length": "concise"})[0], 420)
        self.assertEqual(response_length_settings({"response_length": "expanded"})[0], 1200)
        self.assertEqual(response_length_settings({"response_length": "unknown"})[0], 700)

    def test_prompt_describes_requested_response_length(self) -> None:
        system_prompt = build_messages({"response_length": "expanded"})[0]["content"]
        self.assertIn("充分铺陈场景", system_prompt)

    def test_modes_have_distinct_writing_guidance(self) -> None:
        rewrite_prompt = build_messages({"mode": "改写"})[0]["content"]
        monologue_prompt = build_messages({"mode": "独白"})[0]["content"]
        self.assertIn("不只给建议", rewrite_prompt)
        self.assertIn("第一人称内心独白", monologue_prompt)

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

    def test_probe_provider_makes_a_minimal_request_with_selected_model(self) -> None:
        class FakeCompletions:
            def __init__(self) -> None:
                self.kwargs = {}

            def create(self, **kwargs):
                self.kwargs = kwargs
                return SimpleNamespace(choices=[])

        completions = FakeCompletions()
        fake_client = SimpleNamespace(chat=SimpleNamespace(completions=completions))
        environment = {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "test-key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://example.test/v1",
        }
        with patch.dict(os.environ, environment, clear=True), patch("server.build_client", return_value=fake_client):
            settings = probe_provider({"provider": "custom_azure", "model": "office-model"})
        self.assertEqual(settings.model, "office-model")
        self.assertEqual(completions.kwargs["model"], "office-model")
        self.assertEqual(completions.kwargs["max_tokens"], 2)
        self.assertEqual(completions.kwargs["messages"], [{"role": "user", "content": "请只回复：好"}])

    def test_summarize_chat_requests_a_compact_story_summary(self) -> None:
        class FakeCompletions:
            def __init__(self) -> None:
                self.kwargs = {}

            def create(self, **kwargs):
                self.kwargs = kwargs
                return SimpleNamespace(
                    choices=[SimpleNamespace(message=SimpleNamespace(content="两人重逢，新的悬念仍未揭开。"))]
                )

        completions = FakeCompletions()
        fake_client = SimpleNamespace(chat=SimpleNamespace(completions=completions))
        environment = {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "test-key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://example.test/v1",
        }
        with patch.dict(os.environ, environment, clear=True), patch("server.build_client", return_value=fake_client):
            summary, settings = summarize_chat({
                "provider": "custom_azure",
                "model": "office-model",
                "messages": [{"role": "user", "content": "他们终于重逢了。"}],
            })
        self.assertEqual(summary, "两人重逢，新的悬念仍未揭开。")
        self.assertEqual(settings.model, "office-model")
        self.assertEqual(completions.kwargs["max_tokens"], 500)
        self.assertIn("整理剧情摘要", completions.kwargs["messages"][0]["content"])

    def test_azure_model_listing_uses_configured_deployment_without_network(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_CUSTOM_AZURE_MODEL": "office-model"}, clear=False):
            self.assertEqual(list_provider_models("custom_azure"), ["office-model"])

    def test_reference_is_capped_before_prompt_construction(self) -> None:
        reference = "雨" * 5000
        system_prompt = build_messages({"context": {"reference": reference}})[0]["content"]
        self.assertEqual(system_prompt.count("雨"), 4000)

    def test_context_fields_are_capped_before_prompt_construction(self) -> None:
        system_prompt = build_messages({
            "context": {
                "title": "题" * 200,
                "era": "时" * 200,
                "world": "世" * 1000,
            }
        })[0]["content"]
        self.assertNotIn("题" * 121, system_prompt)
        self.assertNotIn("时" * 121, system_prompt)
        self.assertNotIn("世" * 801, system_prompt)

    def test_history_budget_keeps_the_most_recent_messages(self) -> None:
        history = [
            {"role": "user", "content": f"消息{i}-" + "字" * 3990}
            for i in range(20)
        ]
        messages = build_messages({"messages": history})
        selected = messages[1:]
        self.assertLessEqual(sum(len(item["content"]) for item in selected), MAX_HISTORY_CHARS)
        self.assertIn("消息19-", selected[-1]["content"])
        self.assertNotIn("消息0-", "\n".join(item["content"] for item in selected))

    def test_instructions_are_capped_before_prompt_construction(self) -> None:
        instructions = "要求" * 800
        system_prompt = build_messages({"context": {"instructions": instructions}})[0]["content"]
        self.assertIn("要求" * 600, system_prompt)
        self.assertNotIn("要求" * 601, system_prompt)

    def test_provider_exception_is_not_returned_to_client(self) -> None:
        error = public_error(RuntimeError("upstream key=secret-value response body"))
        self.assertNotIn("secret-value", error)
        self.assertEqual(error, "模型服务请求失败，请检查服务配置或连接")

    def test_client_input_errors_use_bad_request_status(self) -> None:
        self.assertEqual(error_status(ValueError("bad json")).value, 400)
        self.assertEqual(error_status(RuntimeError("upstream")).value, 502)

    def test_request_timeout_is_bounded_and_configurable(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_REQUEST_TIMEOUT": "45"}, clear=True):
            self.assertEqual(request_timeout_seconds(), 45.0)
        with patch.dict(os.environ, {"INK_ECHO_REQUEST_TIMEOUT": "1"}, clear=True):
            self.assertEqual(request_timeout_seconds(), 5.0)
        with patch.dict(os.environ, {"INK_ECHO_REQUEST_TIMEOUT": "not-a-number"}, clear=True):
            self.assertEqual(request_timeout_seconds(), 120.0)

    def test_security_headers_keep_browser_surface_restricted(self) -> None:
        self.assertEqual(SECURITY_HEADERS["X-Content-Type-Options"], "nosniff")
        self.assertEqual(SECURITY_HEADERS["X-Frame-Options"], "DENY")
        self.assertIn("connect-src 'self'", SECURITY_HEADERS["Content-Security-Policy"])
        self.assertIn("https://fonts.googleapis.com", SECURITY_HEADERS["Content-Security-Policy"])


class CaptureHandler(InkEchoHandler):
    """Exercise handler routing without binding a socket in restricted CI."""

    def __init__(self, path: str, body: bytes = b"") -> None:
        self.path = path
        self.headers = {"Content-Length": str(len(body))}
        self.rfile = io.BytesIO(body)
        self.responses = []
        self.static_path = None

    def send_json(self, data, status=200):
        self.responses.append((status, data))

    def serve_static(self, request_path: str) -> None:
        self.static_path = request_path


class HttpRouteTests(unittest.TestCase):
    def test_static_index_route_is_served(self) -> None:
        handler = CaptureHandler("/index.html")
        handler.do_GET()
        self.assertEqual(handler.static_path, "/index.html")

    def test_static_route_does_not_expose_environment_file(self) -> None:
        self.assertNotIn(".env", STATIC_FILES)
        self.assertNotIn("README.md", STATIC_FILES)

    def test_static_file_allowlist_contains_only_runtime_assets(self) -> None:
        self.assertEqual(STATIC_FILES, {"index.html", "styles.css", "app.js"})
        self.assertTrue(static_asset_path("/index.html").is_file())
        self.assertIsNone(static_asset_path("/.env"))
        self.assertIsNone(static_asset_path("/../.env"))
        self.assertIsNone(static_asset_path("/README.md"))

    def test_health_route_uses_selected_ollama_model(self) -> None:
        query = urlencode({"provider": "ollama", "model": "qwen3:8b"})
        handler = CaptureHandler(f"/api/health?{query}")
        with patch.dict(os.environ, {}, clear=True):
            handler.do_GET()
        _, payload = handler.responses[0]
        self.assertTrue(payload["ok"])
        self.assertTrue(payload["providers"]["ollama"])

    def test_model_route_marks_azure_deployment_as_configuration_only(self) -> None:
        query = urlencode({"provider": "custom_azure"})
        handler = CaptureHandler(f"/api/models?{query}")
        environment = {"INK_ECHO_CUSTOM_AZURE_MODEL": "office-model"}
        with patch.dict(os.environ, environment, clear=False):
            handler.do_GET()
        _, payload = handler.responses[0]
        self.assertTrue(payload["ok"])
        self.assertFalse(payload["verified"])
        self.assertEqual(payload["models"], ["office-model"])

    def test_model_route_marks_ollama_listing_as_verified(self) -> None:
        query = urlencode({"provider": "ollama"})
        handler = CaptureHandler(f"/api/models?{query}")
        fake_response = SimpleNamespace(data=[SimpleNamespace(id="qwen3:8b")])
        fake_client = SimpleNamespace(models=SimpleNamespace(list=lambda: fake_response))
        with patch.dict(os.environ, {"INK_ECHO_OLLAMA_MODEL": "qwen3:8b"}, clear=False), patch("server.build_client", return_value=fake_client):
            handler.do_GET()
        _, payload = handler.responses[0]
        self.assertTrue(payload["ok"])
        self.assertTrue(payload["verified"])
        self.assertEqual(payload["models"], ["qwen3:8b"])

    def test_malformed_chat_body_returns_bad_request(self) -> None:
        handler = CaptureHandler("/api/chat", b"not-json")
        handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 400)
        self.assertFalse(payload["ok"])

    def test_probe_route_returns_selected_provider_and_model(self) -> None:
        body = json.dumps({"provider": "ollama", "model": "qwen3:8b"}).encode("utf-8")
        handler = CaptureHandler("/api/probe", body)
        settings = SimpleNamespace(provider="ollama", model="qwen3:8b")
        with patch("server.probe_provider", return_value=settings):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 200)
        self.assertEqual(payload, {"ok": True, "provider": "ollama", "model": "qwen3:8b"})

    def test_summarize_route_returns_summary_payload(self) -> None:
        body = json.dumps({"provider": "ollama", "model": "qwen3:8b", "messages": []}).encode("utf-8")
        handler = CaptureHandler("/api/summarize", body)
        settings = SimpleNamespace(provider="ollama", model="qwen3:8b")
        with patch("server.summarize_chat", return_value=("一段摘要。", settings)):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 200)
        self.assertEqual(payload, {"ok": True, "summary": "一段摘要。", "provider": "ollama", "model": "qwen3:8b"})


if __name__ == "__main__":
    unittest.main()
