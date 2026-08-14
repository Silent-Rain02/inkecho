# InkEcho

![InkEcho cover](assets/inkecho-cover.png)

InkEcho 是一个本地优先的文学创作工作台：上传任意小说，建立可追溯的知识空间，再进行原作问答、续写和二创管理。

[![CI](https://github.com/Silent-Rain02/inkecho/actions/workflows/ci.yml/badge.svg)](https://github.com/Silent-Rain02/inkecho/actions/workflows/ci.yml)

## 为什么是 InkEcho

小说问答和续写真正困难的地方，不是生成一段文字，而是让模型知道：

- 这句话来自哪一章原文；
- 某个设定在剧情推进后是否发生变化；
- 当前创作不能误用未来剧情；
- 用户上传的原文和模型服务之间应该如何隔离。

InkEcho 围绕这些边界构建了“小说空间 → 原文索引 → 审查记忆 → 创作会话”的工作流。

## 核心能力

- **小说空间**：上传 TXT、Markdown、HTML、DOCX、EPUB、FB2 或 PDF，每部小说拥有独立的原文、索引、记忆和创作项目。
- **原作问答**：按章节、人物、事件和设定检索有限原文片段，回答保留章节引用和依据核验状态。
- **非照抄式续写**：以当前章节、场景目标、角色设定和已核对依据组织上下文，自动隔离未来剧情。
- **结构化记忆**：模型提取人物、关系、世界规则、物品和剧情事实；每条记忆都保留章节来源，并允许同一知识随时间演化。
- **后台构建**：全文记忆构建支持 checkpoint、断点续跑、流式预览和实时 token / 时间 / 完成度指标。
- **多模型服务**：支持 Ollama、OpenAI、Azure OpenAI 和自定义 OpenAI-compatible / Azure-compatible 节点。
- **本地优先**：小说原文、章节索引、记忆和项目数据默认保存在 `.inkecho-data/`，不会被 Git 跟踪。

## 运行

需要 Python 3.11+。

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 server.py
```

打开 <http://127.0.0.1:5174>。

纯前端结构位于 `frontend/`，但需要模型服务和小说解析时，应通过 `server.py` 启动完整应用。

## 配置模型

复制配置模板：

```bash
cp .env.example .env
```

### 本地 Ollama

```dotenv
INK_ECHO_PROVIDER=ollama
INK_ECHO_OLLAMA_BASE_URL=http://127.0.0.1:11434/v1
INK_ECHO_OLLAMA_MODEL=qwen3:8b
```

### 自定义兼容节点

自定义节点使用 Azure OpenAI SDK 兼容协议。`custom_azure` 是当前配置的内部兼容标识，界面统一将它展示为“自定义节点”。

```dotenv
INK_ECHO_PROVIDER=custom_azure
INK_ECHO_CUSTOM_AZURE_API_KEY=your_key
INK_ECHO_CUSTOM_AZURE_ENDPOINT=https://your-endpoint.example/v1
INK_ECHO_CUSTOM_AZURE_MODEL=your-model
INK_ECHO_CUSTOM_AZURE_LOGID=your_logid
```

也可以选择 `openai`、`azure` 或 `compatible`。真实密钥、endpoint、logid 和本地小说路径只放在 `.env`，不要提交到 GitHub。

## 小说知识空间

你可以在界面中直接上传小说，也可以通过 `.env` 指定默认原文：

```dotenv
INK_ECHO_SOURCE_NAME=蛊真人
INK_ECHO_SOURCE_FILE=/absolute/path/to/novel.txt
```

解析完成后，建议按以下顺序使用：

1. 在“原作资料”确认章节识别和原文片段；
2. 在“空间记忆”先运行小样本审查；
3. 通过审查后，再启动全文记忆构建；
4. 回到“工作台”进行内容问答或续写。

## 记忆构建逻辑

InkEcho 的记忆层参考 EcphoryRAG / Mem0 的增量记忆思路，但实现直接维护在本仓库：

1. 将章节拆成带编号的原文证据片段；
2. 模型只生成原子事实并选择证据编号；
3. 本地校验实体、类别、时间边界和逐字证据；
4. 通过独立审查后写入章节 checkpoint；
5. 以实体、关系、时间和多信号召回支持问答与续写。

记忆不会把变化中的知识压成单一最终值。例如某项排名前后不同，系统会保留不同章节的事实，并在续写时按当前章节截止点过滤未来信息。记忆构建页面默认显示模型 memory，规则索引默认收起；每次模型调用都会更新输入 / 输出 / 总 token、token per minute、已用时间、预计总 token、剩余 token 和预计完成时间。

小样本 harness：

```bash
python3 scripts/memory_extraction_harness.py --dry-run
python3 scripts/memory_extraction_harness.py
```

评估报告和架构说明位于 [`docs/`](docs/)。中间产物只写入 `.inkecho-data/`。

## 代码结构

```text
.
├── server.py                 # HTTP API、上传解析、模型适配和静态资源入口
├── inkecho/                  # 后端领域模块
│   ├── memory_extraction.py  # 提示词、证据校验和审查规则
│   ├── reviewed_memory_pipeline.py
│   └── ecphory_memory.py     # 持久化记忆和多信号召回
├── frontend/                 # index.html / app.js / styles.css
├── tests/                    # 后端、前端契约和记忆算法测试
├── scripts/                  # 小样本 harness、评估和审计工具
├── docs/                     # 架构、评估和交接文档
├── evals/                    # 可复现的评估数据集
└── assets/                   # README 和产品使用的静态素材
```

## 验证

```bash
node --check frontend/app.js
python3 -m py_compile server.py inkecho/*.py tests/*.py
python3 -m unittest discover -s tests -p 'test_*.py'
git diff --check
```

GitHub Actions 会运行同一套测试、HTTP smoke test 和前端语法检查。

## 数据边界

- `.env`、`.inkecho-data/`、本地小说原文和运行日志不会提交。
- 远程模型只接收完成当前任务所需的有限原文片段和上下文，不接收完整小说文件。
- 原作依据、模型 memory、规则索引和用户手动笔记在产品中保持可区分。

## License

License 待项目稳定后确定。
