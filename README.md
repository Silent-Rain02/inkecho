# InkEcho

InkEcho 是一个用于文学作品对话、续写和二次创作的项目。

## 项目简介

项目围绕文学作品内容，提供便于阅读、讨论、角色对话和创意改写的创作空间。

## 当前状态

当前已完成一个可切换模型服务的单页 MVP 原型。

## 已实现

- 作品名称、时代氛围和世界观备注
- 角色卡切换与自定义角色添加
- 续写、改写、角色独白三种创作模式
- 对话消息发送、快捷键发送和会话重置
- 创作灵感卡片，可一键填入写作提示
- 模型服务切换：办公网自定义 Azure、Ollama、OpenAI、Azure OpenAI、OpenAI-compatible
- Ollama 本地模型支持，可配置 `qwen3:8b` 等模型
- 模型流式输出，回复会逐字出现在对话框中
- 浏览器本地自动保存对话、作品设定和模型选择

模型服务不可用时，页面会自动回退到演示回复。

## 配置模型服务

复制 `.env.example` 为 `.env`，按需填写配置。真实密钥只放在本地环境变量中，不要提交到 GitHub。

办公网自定义服务使用以下配置：

```bash
INK_ECHO_PROVIDER=custom_azure
INK_ECHO_CUSTOM_AZURE_API_KEY=你的密钥
INK_ECHO_CUSTOM_AZURE_ENDPOINT=https://aidp-i18ntt-sg.tiktok-row.net/api/modelhub/online/v2/crawl
INK_ECHO_CUSTOM_AZURE_MODEL=gpt-5-mini-2025-08-07
INK_ECHO_CUSTOM_AZURE_LOGID=你的logid
```

如果使用 Ollama：

```bash
INK_ECHO_PROVIDER=ollama
INK_ECHO_OLLAMA_BASE_URL=http://127.0.0.1:11434/v1
INK_ECHO_OLLAMA_MODEL=qwen3:8b
```

## 本地运行

纯前端演示可以直接双击 `index.html` 打开；要连接模型服务，请启动 Python 服务：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 server.py
```

然后访问 <http://localhost:5173>。

## 开发计划

- 整理文学作品与相关资料
- 设计作品对话和角色交互方式
- 支持续写、改写等二次创作场景
- 接入模型服务与流式回复
- 保存作品、角色卡和创作历史
- 补充示例与开发文档

## 许可

项目许可协议将在后续开发阶段确定。
