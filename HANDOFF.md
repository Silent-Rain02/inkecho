# InkEcho 接手说明

InkEcho 是一个中文文学作品对话与二次创作工作台。项目当前是无构建步骤的原生前端 + Python 标准库服务端，适合直接在本地继续迭代。

## 本地运行

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 server.py
```

打开 `http://localhost:5173`。模型密钥只放在本地 `.env`，参考 `.env.example`，不要提交真实密钥。

## 主要文件

- `index.html`：页面结构、对话菜单、角色卡、场景计划、检查点和模型服务操作入口
- `styles.css`：整体视觉、响应式布局、模板卡片和场景计划交互状态
- `app.js`：项目状态、场景计划、浏览器本地保存、流式对话和全部前端交互
- `server.py`：模型服务适配、请求超时、安全静态资源和 HTTP 路由
- `test_server.py`：服务端配置、路由、安全和模型请求回归测试
- `README.md`：用户向项目说明

## 服务端接口

- `GET /api/health`：读取当前服务配置、历史预算和请求超时状态，不发起模型请求
- `GET /api/models`：读取模型列表；Azure 类型端点只返回配置中的部署名，并标记为非实际探测
- `POST /api/probe`：用最小请求验证当前服务的密钥、端点和模型部署
- `POST /api/summarize`：用当前模型把最近对话整理为可复用的剧情摘要

项目菜单支持全量项目 JSON 备份，也支持从对话菜单导出当前单个项目 JSON；导入时两种格式都会被识别。
- `POST /api/chat`：非流式回复
- `POST /api/chat/stream`：SSE 流式回复

支持 `custom_azure`、`ollama`、`openai`、`azure` 和 `compatible`。每个项目会按服务分别记住模型名，办公网端点与本地 Ollama 的配置示例都在 `.env.example`。

## 当前功能

作品设定、当前章节 / 场景、场景计划、参考片段导入、剧情摘要提炼、角色卡、四套创作模板、续写/改写/独白、项目切换与分支、灵感摘录、命名检查点、Markdown 导出、JSON 备份、模型流式生成、停止/重试、多回复版本、对话搜索、模型连接测试和上下文用量提示均已实现。

## 验证

```bash
node --check app.js
python3 -m unittest -q test_server.py
python3 -m py_compile server.py test_server.py
```

当前服务端回归测试共 30 项。GitHub Actions 还会启动本地服务进行首页、健康检查和静态资源白名单烟测。服务端会在最近 20 条消息中执行历史预算，默认 48000 字，可通过 `INK_ECHO_HISTORY_BUDGET` 调整并优先保留最新内容。发布前检查本地 `.env` 没有被加入版本控制，并确认 GitHub Actions CI 通过。

## 后续可选方向

- 为作品提供更多可复用的创作模板和示例
- 增加更细的上下文压缩与长篇项目管理
- 补充浏览器端自动化测试和视觉回归检查
- 评估是否需要账号同步或云端存储
