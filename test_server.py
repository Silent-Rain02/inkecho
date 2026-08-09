import io
import json
import os
import tempfile
import unittest
from types import SimpleNamespace
from urllib.parse import urlencode
from unittest.mock import patch

from server import (
    build_messages,
    build_source_chunks,
    complete_chat,
    error_status,
    InkEchoHandler,
    list_provider_models,
    provider_health_snapshot,
    provider_settings,
    probe_provider,
    stream_chat,
    summarize_chat,
    public_error,
    request_timeout_seconds,
    response_length_settings,
    SECURITY_HEADERS,
    STATIC_FILES,
    history_budget_chars,
    source_references,
    source_search,
    source_status,
    static_asset_path,
)


class ServerConfigTests(unittest.TestCase):
    def test_supported_provider_can_be_selected_without_network(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            settings = provider_settings("ollama", "qwen3:8b")
        self.assertEqual(settings.provider, "ollama")
        self.assertEqual(settings.model, "qwen3:8b")
        self.assertTrue(settings.configured)

    def test_placeholder_credentials_are_not_reported_as_configured(self) -> None:
        environment = {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "office-key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://your-resource.openai.azure.com/",
        }
        with patch.dict(os.environ, environment, clear=True):
            settings = provider_settings("custom_azure", "office-model")
        self.assertFalse(settings.configured)
        with patch.dict(os.environ, {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "replace_with_your_key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://example.test/v1",
        }, clear=True):
            self.assertFalse(provider_settings("custom_azure", "office-model").configured)

    def test_health_snapshot_uses_model_selected_in_ui(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            snapshot = provider_health_snapshot("ollama", "qwen3:8b")
        self.assertTrue(snapshot["providers"]["ollama"])
        self.assertEqual(snapshot["provider"], "ollama")
        self.assertEqual(snapshot["provider_details"]["ollama"]["missing"], [])
        self.assertIn("模型名", snapshot["provider_details"]["custom_azure"]["missing"])
        self.assertIn("source", snapshot)

    def test_health_snapshot_exposes_missing_env_keys_without_values(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            snapshot = provider_health_snapshot("custom_azure", "office-model")
        details = snapshot["provider_details"]["custom_azure"]
        self.assertEqual(
            details["missing_keys"],
            ["INK_ECHO_CUSTOM_AZURE_API_KEY", "INK_ECHO_CUSTOM_AZURE_ENDPOINT"],
        )
        self.assertNotIn("replace_with_your_key", json.dumps(snapshot, ensure_ascii=False))

    def test_unknown_provider_is_rejected(self) -> None:
        with self.assertRaises(ValueError):
            provider_settings("not-a-provider", "demo")

    def test_unconfigured_provider_is_reported_as_client_configuration_error(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            with self.assertRaises(ValueError) as context:
                complete_chat({"provider": "custom_azure", "model": "office-model", "messages": []})
        self.assertIn("尚未完成环境变量配置", str(context.exception))
        self.assertEqual(error_status(context.exception).value, 400)

    def test_prompt_contains_creation_context_and_history(self) -> None:
        messages = build_messages(
            {
                "mode": "续写",
                "creativity": "imaginative",
                "context": {
                    "title": "春日札记",
                    "chapter": "第三回 · 潇湘馆夜话",
                    "sceneGoal": "让两人在雨停之前说出真正的约定。",
                    "scenePlan": "1. [进行中] 潇湘馆夜话：让两人在雨停之前说出真正的约定。\n2. [待写] 次日清晨：留下一个新的悬念。",
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
        self.assertIn("让两人在雨停之前说出真正的约定。", messages[0]["content"])
        self.assertIn("次日清晨：留下一个新的悬念。", messages[0]["content"])
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

    def test_prompt_contains_character_details_with_a_safe_length_cap(self) -> None:
        details = "叙" * 800
        system_prompt = build_messages({"character": {"name": "沈砚", "details": details}})[0]["content"]
        self.assertIn("叙" * 500, system_prompt)
        self.assertNotIn("叙" * 501, system_prompt)

    def test_modes_have_distinct_writing_guidance(self) -> None:
        rewrite_prompt = build_messages({"mode": "改写"})[0]["content"]
        monologue_prompt = build_messages({"mode": "独白"})[0]["content"]
        qa_prompt = build_messages({"mode": "问答"})[0]["content"]
        self.assertIn("不只给建议", rewrite_prompt)
        self.assertIn("第一人称内心独白", monologue_prompt)
        self.assertIn("原作知识库", qa_prompt)
        self.assertIn("原作依据", qa_prompt)

    def test_source_references_only_expose_unique_section_titles(self) -> None:
        with patch(
            "server.source_search",
            return_value=[
                {"title": "第一节：青茅山", "text": "片段一"},
                {"title": "第一节：青茅山", "text": "片段二"},
                {"title": "第二节：重生", "text": "片段三"},
            ],
        ):
            references = source_references("方源")
        self.assertEqual(references, ["第一节：青茅山", "第二节：重生"])

    def test_source_chunks_keep_section_titles_and_bound_length(self) -> None:
        chunks = build_source_chunks("第一卷\n" + "甲" * 2100 + "\n第二节：重生\n" + "乙" * 3)
        self.assertGreaterEqual(len(chunks), 2)
        self.assertEqual(chunks[0]["title"], "第一卷")
        self.assertLessEqual(len(chunks[0]["text"]), 1800)
        self.assertIn("第二节：重生", {chunk["title"] for chunk in chunks})

    def test_source_search_reads_only_configured_local_file(self) -> None:
        with tempfile.NamedTemporaryFile("w", suffix=".txt", encoding="utf-8", delete=False) as handle:
            handle.write("第一节：青茅山\n方源回到青茅山，重新审视开窍大典。\n")
            source_path = handle.name
        try:
            with patch.dict(
                os.environ,
                {"INK_ECHO_SOURCE_FILE": source_path, "INK_ECHO_SOURCE_NAME": "蛊真人"},
                clear=True,
            ):
                status = source_status()
                results = source_search("方源 青茅山")
            self.assertTrue(status["available"])
            self.assertEqual(status["name"], "蛊真人")
            self.assertTrue(results)
            self.assertEqual(results[0]["title"], "第一节：青茅山")
        finally:
            os.unlink(source_path)

    def test_prompt_includes_retrieved_source_context(self) -> None:
        with patch(
            "server.source_search",
            return_value=[{"title": "第一节：青茅山", "text": "方源重新审视眼前局势。"}],
        ):
            prompt = build_messages(
                {
                    "mode": "问答",
                    "messages": [{"role": "user", "content": "方源重生后做了什么？"}],
                }
            )[0]["content"]
        self.assertIn("原作知识库检索片段", prompt)
        self.assertIn("方源重新审视眼前局势", prompt)

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

    def test_stream_chat_yields_incremental_content_with_selected_model(self) -> None:
        class FakeCompletions:
            def __init__(self) -> None:
                self.kwargs = {}

            def create(self, **kwargs):
                self.kwargs = kwargs
                return iter([
                    SimpleNamespace(choices=[SimpleNamespace(delta=SimpleNamespace(content="第一段"))]),
                    SimpleNamespace(choices=[SimpleNamespace(delta=SimpleNamespace(content="第二段"))]),
                    SimpleNamespace(choices=[]),
                ])

        completions = FakeCompletions()
        fake_client = SimpleNamespace(chat=SimpleNamespace(completions=completions))
        environment = {
            "INK_ECHO_CUSTOM_AZURE_API_KEY": "test-key",
            "INK_ECHO_CUSTOM_AZURE_ENDPOINT": "https://example.test/v1",
        }
        with patch.dict(os.environ, environment, clear=True), patch("server.build_client", return_value=fake_client):
            settings, deltas = stream_chat({
                "provider": "custom_azure",
                "model": "office-model",
                "response_length": "expanded",
                "messages": [{"role": "user", "content": "继续"}],
            })

        self.assertEqual(settings.model, "office-model")
        self.assertEqual(list(deltas), ["第一段", "第二段"])
        self.assertEqual(completions.kwargs["model"], "office-model")
        self.assertEqual(completions.kwargs["max_tokens"], 1200)
        self.assertTrue(completions.kwargs["stream"])

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
                "messages": [{"role": "user", "content": f"第 {index} 个事件"} for index in range(25)],
            })
        self.assertEqual(summary, "两人重逢，新的悬念仍未揭开。")
        self.assertEqual(settings.model, "office-model")
        self.assertEqual(completions.kwargs["max_tokens"], 500)
        self.assertIn("整理剧情摘要", completions.kwargs["messages"][0]["content"])
        self.assertIn("第 0 个事件", "\n".join(item["content"] for item in completions.kwargs["messages"][1:]))

    def test_summary_context_can_reach_history_older_than_normal_chat_window(self) -> None:
        history = [
            {"role": "user", "content": f"第 {index} 个事件"}
            for index in range(25)
        ]
        normal_messages = build_messages({"messages": history})
        summary_messages = build_messages({"summary_target": "story", "messages": history})
        normal_text = "\n".join(item["content"] for item in normal_messages[1:])
        summary_text = "\n".join(item["content"] for item in summary_messages[1:])
        self.assertNotIn("第 0 个事件", normal_text)
        self.assertIn("第 0 个事件", summary_text)
        self.assertIn("第 24 个事件", summary_text)

    def test_summarize_chat_can_target_the_current_scene(self) -> None:
        class FakeCompletions:
            def __init__(self) -> None:
                self.kwargs = {}

            def create(self, **kwargs):
                self.kwargs = kwargs
                return SimpleNamespace(
                    choices=[SimpleNamespace(message=SimpleNamespace(content="本幕揭示了车票上的名字，留下了下一幕的线索。"))]
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
                "summary_target": "scene",
                "context": {"chapter": "站台上的最后一分钟", "sceneGoal": "揭示车票秘密"},
                "messages": [{"role": "user", "content": "继续这一幕。"}],
            })
        self.assertEqual(summary, "本幕揭示了车票上的名字，留下了下一幕的线索。")
        self.assertEqual(settings.model, "office-model")
        self.assertEqual(completions.kwargs["max_tokens"], 240)
        self.assertIn("整理当前场景的结果", completions.kwargs["messages"][0]["content"])

    def test_azure_model_listing_uses_configured_deployment_without_network(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_CUSTOM_AZURE_MODEL": "office-model"}, clear=False):
            self.assertEqual(list_provider_models("custom_azure"), ["office-model"])

    def test_azure_model_listing_ignores_placeholder_deployment(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_CUSTOM_AZURE_MODEL": "your-deployment-name"}, clear=False):
            self.assertEqual(list_provider_models("custom_azure"), [])

    def test_reference_is_capped_before_prompt_construction(self) -> None:
        reference = "雨" * 5000
        system_prompt = build_messages({"context": {"reference": reference}})[0]["content"]
        self.assertEqual(system_prompt.count("雨"), 4000)

    def test_context_fields_are_capped_before_prompt_construction(self) -> None:
        system_prompt = build_messages({
            "context": {
                "title": "题" * 200,
                "era": "时" * 200,
                "sceneGoal": "目" * 400,
                "scenePlan": "计" * 2400,
                "world": "世" * 1000,
            }
        })[0]["content"]
        self.assertNotIn("题" * 121, system_prompt)
        self.assertNotIn("时" * 121, system_prompt)
        self.assertNotIn("目" * 281, system_prompt)
        self.assertNotIn("计" * 2001, system_prompt)
        self.assertNotIn("世" * 801, system_prompt)

    def test_history_budget_keeps_the_most_recent_messages(self) -> None:
        history = [
            {"role": "user", "content": f"消息{i}-" + "字" * 3990}
            for i in range(20)
        ]
        messages = build_messages({"messages": history})
        selected = messages[1:]
        self.assertLessEqual(sum(len(item["content"]) for item in selected), 48000)
        self.assertIn("消息19-", selected[-1]["content"])
        self.assertNotIn("消息0-", "\n".join(item["content"] for item in selected))

    def test_configured_history_budget_is_applied_to_prompt(self) -> None:
        history = [
            {"role": "user", "content": f"消息{i}-" + "字" * 3990}
            for i in range(3)
        ]
        with patch.dict(os.environ, {"INK_ECHO_HISTORY_BUDGET": "8000"}, clear=True):
            messages = build_messages({"messages": history})
        selected = messages[1:]
        self.assertEqual(len(selected), 2)
        self.assertIn("消息2-", selected[-1]["content"])
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

    def test_known_provider_errors_get_actionable_safe_messages(self) -> None:
        class AuthenticationError(Exception):
            pass

        class APITimeoutError(Exception):
            pass

        self.assertEqual(public_error(AuthenticationError("secret-key")), "模型服务认证失败，请检查 API 密钥")
        self.assertEqual(public_error(APITimeoutError("private endpoint")), "模型服务请求超时，请检查服务状态或调大请求超时")
        self.assertNotIn("secret-key", public_error(AuthenticationError("secret-key")))

    def test_known_provider_errors_use_meaningful_http_statuses(self) -> None:
        class AuthenticationError(Exception):
            pass

        class RateLimitError(Exception):
            pass

        class APITimeoutError(Exception):
            pass

        class NotFoundError(Exception):
            pass

        class InternalServerError(Exception):
            pass

        self.assertEqual(error_status(AuthenticationError()).value, 401)
        self.assertEqual(error_status(RateLimitError()).value, 429)
        self.assertEqual(error_status(APITimeoutError()).value, 504)
        self.assertEqual(error_status(NotFoundError()).value, 404)
        self.assertEqual(error_status(InternalServerError()).value, 502)

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

    def test_history_budget_is_bounded_and_configurable(self) -> None:
        with patch.dict(os.environ, {"INK_ECHO_HISTORY_BUDGET": "64000"}, clear=True):
            self.assertEqual(history_budget_chars(), 64000)
        with patch.dict(os.environ, {"INK_ECHO_HISTORY_BUDGET": "1000"}, clear=True):
            self.assertEqual(history_budget_chars(), 8000)
        with patch.dict(os.environ, {"INK_ECHO_HISTORY_BUDGET": "not-a-number"}, clear=True):
            self.assertEqual(history_budget_chars(), 48000)

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
        self.assertEqual(payload["history_budget"], 48000)
        self.assertEqual(payload["request_timeout"], 120.0)

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

    def test_model_route_reports_missing_provider_configuration_as_bad_request(self) -> None:
        query = urlencode({"provider": "openai"})
        handler = CaptureHandler(f"/api/models?{query}")
        with patch.dict(os.environ, {}, clear=True):
            handler.do_GET()
        status, payload = handler.responses[0]
        self.assertEqual(status, 400)
        self.assertIn("尚未完成环境变量配置", payload["error"])

    def test_malformed_chat_body_returns_bad_request(self) -> None:
        handler = CaptureHandler("/api/chat", b"not-json")
        handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 400)
        self.assertFalse(payload["ok"])

    def test_chat_route_reports_missing_provider_configuration_as_bad_request(self) -> None:
        body = json.dumps({"provider": "custom_azure", "model": "office-model", "messages": []}).encode("utf-8")
        handler = CaptureHandler("/api/chat", body)
        with patch.dict(os.environ, {}, clear=True):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 400)
        self.assertIn("尚未完成环境变量配置", payload["error"])

    def test_chat_route_returns_safe_source_references(self) -> None:
        body = json.dumps({"provider": "ollama", "model": "qwen3:8b", "messages": []}).encode("utf-8")
        handler = CaptureHandler("/api/chat", body)
        settings = SimpleNamespace(provider="ollama", model="qwen3:8b")
        with patch("server.complete_chat", return_value=("回答", settings)), patch(
            "server.source_references", return_value=["第一节：青茅山"]
        ):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 200)
        self.assertEqual(payload["text"], "回答")
        self.assertEqual(payload["source_references"], ["第一节：青茅山"])

    def test_probe_route_returns_selected_provider_and_model(self) -> None:
        body = json.dumps({"provider": "ollama", "model": "qwen3:8b"}).encode("utf-8")
        handler = CaptureHandler("/api/probe", body)
        settings = SimpleNamespace(provider="ollama", model="qwen3:8b")
        with patch("server.probe_provider", return_value=settings):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 200)
        self.assertEqual(payload, {"ok": True, "provider": "ollama", "model": "qwen3:8b"})

    def test_probe_route_returns_safe_authentication_diagnostic(self) -> None:
        class AuthenticationError(Exception):
            pass

        body = json.dumps({"provider": "openai", "model": "gpt-5-mini"}).encode("utf-8")
        handler = CaptureHandler("/api/probe", body)
        with patch("server.probe_provider", side_effect=AuthenticationError("secret-key")):
            handler.do_POST()
        status, payload = handler.responses[0]
        self.assertEqual(status, 401)
        self.assertEqual(payload, {"ok": False, "error": "模型服务认证失败，请检查 API 密钥"})

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
