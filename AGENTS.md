# ChatGPT project context

This directory is a local mirror of the ChatGPT project “用于文学作品对话、二创的项目”.

- Treat every file under `sources/` as read-only reference material.
- Do not edit, rename, move, or delete synced project files.
- These files may be replaced the next time a task is created from this ChatGPT project.


## Project instructions

InkEcho 是一个本地优先的小说知识空间、原作问答和续写工作台。开发时以“原文证据可追溯、空间之间不串线、模型失败不伪造答案”为基本边界。

### 文件与数据边界

- `sources/` 是项目同步的参考资料，保持只读，不要编辑、重命名、移动或删除其中的文件。
- `.inkecho-data/` 保存本机小说原文、章节索引、记忆 checkpoint 和后台任务状态，已被 `.gitignore` 排除；不要强行加入 Git。
- `.env`、API key、办公网 endpoint、logid 和本地小说路径只允许存在于本机配置，不得写入源码、README、测试或提交记录。
- README 可以描述配置变量名和数据边界，但不要写入真实密钥或完整原文。

### 本地开发与验证

- 默认服务端口是 `5174`：`python3 server.py`，浏览器访问 `http://127.0.0.1:5174`。
- 修改后至少运行：
  - `node --check app.js`
  - `python3 -m py_compile server.py reviewed_memory_pipeline.py`
  - `python3 -m unittest test_frontend_contract.py test_ecphory_memory.py test_reviewed_memory_pipeline.py test_server.py`
  - `git diff --check`
- 全文记忆任务应通过 `reviewed_memory_pipeline.py` 的 checkpoint 恢复；不要为了测试删除 `.inkecho-data/` 或正在运行的后台任务。
- 记忆抽取结果必须保留章节来源和原文证据边界；规则索引、模型记忆和用户手动笔记要保持可区分。

### 提交规范

- 使用 `apply_patch` 修改文本文件，提交前检查 `git status -sb` 和 `git diff --stat`。
- 只提交与当前任务相关的源码、测试和文档；本机小说、运行日志、缓存和密钥不上传。
- GitHub 发布前应先运行上面的验证命令，再使用有意义的提交信息推送当前功能分支。
