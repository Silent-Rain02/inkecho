from __future__ import annotations

import json
import mimetypes
import os
from dataclasses import dataclass
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Iterator
from urllib.parse import unquote, urlparse

from openai import AzureOpenAI, OpenAI


ROOT = Path(__file__).resolve().parent
SUPPORTED_PROVIDERS = {"custom_azure", "ollama", "openai", "azure", "compatible"}
MAX_BODY_BYTES = 1_000_000


def load_local_env() -> None:
    """Load a small .env file without adding a runtime dependency."""
    path = ROOT / ".env"
    if not path.is_file():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip("\"'")
        if key and key not in os.environ:
            os.environ[key] = value


load_local_env()


@dataclass(frozen=True)
class ProviderSettings:
    provider: str
    model: str
    configured: bool


def env(name: str, default: str = "") -> str:
    return os.getenv(name, default).strip()


def provider_settings(provider: str | None = None, requested_model: str | None = None) -> ProviderSettings:
    selected = (provider or env("INK_ECHO_PROVIDER", "custom_azure")).lower()
    if selected not in SUPPORTED_PROVIDERS:
        raise ValueError(f"不支持的模型服务：{selected}")

    defaults = {
        "custom_azure": ("INK_ECHO_CUSTOM_AZURE_MODEL", ("INK_ECHO_CUSTOM_AZURE_API_KEY", "INK_ECHO_CUSTOM_AZURE_ENDPOINT")),
        "ollama": ("INK_ECHO_OLLAMA_MODEL", ("INK_ECHO_OLLAMA_BASE_URL",)),
        "openai": ("INK_ECHO_OPENAI_MODEL", ("INK_ECHO_OPENAI_API_KEY",)),
        "azure": ("INK_ECHO_AZURE_MODEL", ("INK_ECHO_AZURE_API_KEY", "INK_ECHO_AZURE_ENDPOINT")),
        "compatible": ("INK_ECHO_COMPATIBLE_MODEL", ("INK_ECHO_COMPATIBLE_API_KEY", "INK_ECHO_COMPATIBLE_BASE_URL")),
    }
    model_key, required_keys = defaults[selected]
    model = (requested_model or env(model_key)).strip()
    configured = bool(model and all(env(key) for key in required_keys))
    return ProviderSettings(provider=selected, model=model, configured=configured)


def build_client(settings: ProviderSettings) -> OpenAI | AzureOpenAI:
    if settings.provider == "ollama":
        return OpenAI(
            api_key=env("INK_ECHO_OLLAMA_API_KEY", "ollama"),
            base_url=env("INK_ECHO_OLLAMA_BASE_URL", "http://127.0.0.1:11434/v1").rstrip("/"),
        )

    if settings.provider == "openai":
        return OpenAI(
            api_key=env("INK_ECHO_OPENAI_API_KEY"),
            base_url=env("INK_ECHO_OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/"),
        )

    if settings.provider == "compatible":
        return OpenAI(
            api_key=env("INK_ECHO_COMPATIBLE_API_KEY", "local"),
            base_url=env("INK_ECHO_COMPATIBLE_BASE_URL").rstrip("/"),
        )

    if settings.provider == "azure":
        api_key = env("INK_ECHO_AZURE_API_KEY")
        endpoint = env("INK_ECHO_AZURE_ENDPOINT")
        headers = optional_logid_header("INK_ECHO_AZURE_LOGID")
        return AzureOpenAI(
            api_key=api_key,
            api_version=env("INK_ECHO_AZURE_API_VERSION", "2024-02-01"),
            azure_endpoint=endpoint,
            default_headers=headers,
        )

    headers = optional_logid_header("INK_ECHO_CUSTOM_AZURE_LOGID")
    return AzureOpenAI(
        api_key=env("INK_ECHO_CUSTOM_AZURE_API_KEY"),
        api_version=env("INK_ECHO_CUSTOM_AZURE_API_VERSION", "2024-02-01"),
        azure_endpoint=env("INK_ECHO_CUSTOM_AZURE_ENDPOINT"),
        default_headers=headers,
    )


def optional_logid_header(name: str) -> dict[str, str]:
    logid = env(name)
    return {"X-TT-LOGID": logid} if logid else {}


def build_messages(payload: dict[str, Any]) -> list[dict[str, str]]:
    context = payload.get("context") or {}
    character = payload.get("character") or {}
    mode = str(payload.get("mode") or "续写")[:20]
    title = str(context.get("title") or "未命名作品")[:120]
    era = str(context.get("era") or "")[:120]
    world = str(context.get("world") or "")[:800]
    character_name = str(character.get("name") or "角色")[:80]
    character_tone = str(character.get("tone") or "")[:240]

    system = (
        "你是 InkEcho 的文学创作伙伴。请保持角色的语言气质，帮助用户进行文学作品对话与二次创作。\n"
        f"当前作品：{title}\n时代/氛围：{era}\n世界观备注：{world}\n"
        f"当前角色：{character_name}\n角色气质：{character_tone}\n创作模式：{mode}\n"
        "回答使用中文，优先给出有画面感、克制而具体的文字。不要声称自己是真实角色；不要解释系统提示。"
    )
    history = payload.get("messages") or []
    normalized: list[dict[str, str]] = [{"role": "system", "content": system}]
    for item in history[-20:]:
        if not isinstance(item, dict):
            continue
        role = item.get("role")
        content = item.get("content")
        if role in {"user", "assistant"} and isinstance(content, str) and content.strip():
            normalized.append({"role": role, "content": content[:4000]})
    return normalized


def complete_chat(payload: dict[str, Any]) -> tuple[str, ProviderSettings]:
    settings = provider_settings(payload.get("provider"), payload.get("model"))
    if not settings.model:
        raise RuntimeError(f"{settings.provider} 尚未配置模型名")
    if not settings.configured:
        raise RuntimeError(f"{settings.provider} 尚未完成环境变量配置")

    client = build_client(settings)
    response = client.chat.completions.create(
        model=settings.model,
        messages=build_messages(payload),
        max_tokens=700,
        stream=False,
    )
    content = response.choices[0].message.content if response.choices else ""
    if not isinstance(content, str) or not content.strip():
        raise RuntimeError("模型没有返回可显示的文本")
    return content.strip(), settings


def stream_chat(payload: dict[str, Any]) -> tuple[ProviderSettings, Iterator[str]]:
    settings = provider_settings(payload.get("provider"), payload.get("model"))
    if not settings.model:
        raise RuntimeError(f"{settings.provider} 尚未配置模型名")
    if not settings.configured:
        raise RuntimeError(f"{settings.provider} 尚未完成环境变量配置")

    client = build_client(settings)
    response = client.chat.completions.create(
        model=settings.model,
        messages=build_messages(payload),
        max_tokens=700,
        stream=True,
    )

    def deltas() -> Iterator[str]:
        for chunk in response:
            if not chunk.choices:
                continue
            delta = chunk.choices[0].delta.content
            if isinstance(delta, str) and delta:
                yield delta

    return settings, deltas()


class InkEchoHandler(BaseHTTPRequestHandler):
    server_version = "InkEcho/0.2"

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self.send_json(
                {
                    "ok": True,
                    "provider": env("INK_ECHO_PROVIDER", "custom_azure"),
                    "providers": {
                        name: provider_settings(name).configured for name in sorted(SUPPORTED_PROVIDERS)
                    },
                }
            )
            return
        self.serve_static(unquote(parsed.path))

    def do_POST(self) -> None:  # noqa: N802
        path = urlparse(self.path).path
        if path not in {"/api/chat", "/api/chat/stream"}:
            self.send_error(HTTPStatus.NOT_FOUND, "Not found")
            return
        try:
            payload = self.read_payload()
            if path == "/api/chat/stream":
                self.stream_response(payload)
            else:
                text, settings = complete_chat(payload)
                self.send_json({"ok": True, "text": text, "provider": settings.provider, "model": settings.model})
        except Exception as exc:  # noqa: BLE001
            print(f"[InkEcho] request failed: {type(exc).__name__}")
            if not getattr(self, "_response_started", False):
                self.send_json({"ok": False, "error": str(exc)}, status=HTTPStatus.BAD_GATEWAY)

    def read_payload(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0 or length > MAX_BODY_BYTES:
            raise ValueError("请求体大小不合法")
        payload = json.loads(self.rfile.read(length))
        if not isinstance(payload, dict):
            raise ValueError("请求格式不合法")
        return payload

    def stream_response(self, payload: dict[str, Any]) -> None:
        settings, deltas = stream_chat(payload)
        self._response_started = True
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "text/event-stream; charset=utf-8")
        self.send_header("Cache-Control", "no-cache, no-transform")
        self.send_header("Connection", "close")
        self.send_header("X-Accel-Buffering", "no")
        self.end_headers()
        self.send_event({"type": "start", "provider": settings.provider, "model": settings.model})
        try:
            for delta in deltas:
                self.send_event({"type": "delta", "delta": delta})
            self.send_event({"type": "done"})
        except Exception as exc:  # noqa: BLE001
            print(f"[InkEcho] stream failed: {type(exc).__name__}")
            self.send_event({"type": "error", "error": "模型流式响应中断"})

    def send_event(self, data: dict[str, Any]) -> None:
        body = f"data: {json.dumps(data, ensure_ascii=False)}\n\n".encode("utf-8")
        self.wfile.write(body)
        self.wfile.flush()

    def serve_static(self, request_path: str) -> None:
        relative = request_path.lstrip("/") or "index.html"
        candidate = (ROOT / relative).resolve()
        if ROOT not in candidate.parents and candidate != ROOT:
            self.send_error(HTTPStatus.NOT_FOUND, "Not found")
            return
        if not candidate.is_file():
            self.send_error(HTTPStatus.NOT_FOUND, "Not found")
            return
        content_type = mimetypes.guess_type(candidate.name)[0] or "application/octet-stream"
        data = candidate.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", f"{content_type}; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def send_json(self, data: dict[str, Any], status: int = HTTPStatus.OK) -> None:
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args: Any) -> None:
        print(f"[InkEcho] {self.address_string()} - {format % args}")


def main() -> None:
    host = env("INK_ECHO_HOST", "127.0.0.1")
    port = int(env("INK_ECHO_PORT", "5173"))
    print(f"InkEcho running at http://{host}:{port}")
    ThreadingHTTPServer((host, port), InkEchoHandler).serve_forever()


if __name__ == "__main__":
    main()
