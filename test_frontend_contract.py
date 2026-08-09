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
        self.assertIn("overflow-wrap: anywhere", (ROOT / "styles.css").read_text(encoding="utf-8"))
        ids = set(re.findall(r'\bid=["\']([^"\']+)["\']', self.html))
        required = {
            "projectSelect",
            "messageInput",
            "providerSelect",
            "openProviderDiagnostics",
            "copyProviderConfigKeys",
            "providerDiagnosticsDialog",
            "providerDiagnosticsStats",
            "providerDiagnosticsText",
            "copyProviderDiagnostics",
            "sourceEvidenceDialog",
            "sourceEvidenceStats",
            "sourceEvidenceList",
            "copySourceEvidence",
            "conversationContext",
            "contextDialog",
            "summaryPreviewDialog",
            "summaryPreviewStats",
            "currentSummaryPreview",
            "nextSummaryPreview",
            "applySummaryPreview",
            "sceneOutcomePreviewDialog",
            "sceneOutcomePreviewStats",
            "currentSceneOutcomePreview",
            "nextSceneOutcomePreview",
            "applySceneOutcomePreview",
            "advanceBeat",
            "beatOutcomeInput",
            "generateBeatOutcome",
            "beatProgressText",
            "beatProgressBar",
            "beatSearchInput",
            "beatStatusFilter",
            "focusCurrentBeat",
            "beatListCount",
            "checkpointDialog",
            "checkpointSearchInput",
            "checkpointCount",
            "quickSaveCheckpoint",
            "checkpointCompareDialog",
            "checkpointCompareStats",
            "checkpointCompareText",
            "copyCheckpointCompare",
            "characterDetailsInput",
            "summaryFreshness",
            "storageStatus",
            "templateDialog",
            "saveCurrentTemplate",
            "archiveDialog",
            "archiveSearchInput",
            "archiveList",
            "openArchiveHistory",
            "clearArchive",
            "characterLibraryDialog",
            "characterLibrarySearch",
            "characterLibraryCount",
            "openCharacterLibrary",
            "characterLibraryList",
            "openPromptLibrary",
            "promptLibraryDialog",
            "promptLibrarySearch",
            "promptLibraryCount",
            "promptLibraryList",
            "savePromptToLibrary",
            "searchArchivedMessages",
            "copyScenePlan",
            "copyProjectHandoff",
            "downloadProjectHandoff",
            "projectSearchCount",
            "projectLineage",
            "projectHealth",
            "projectStatusFilter",
            "projectHealthAction",
            "openCommandPalette",
            "commandPaletteDialog",
            "commandPaletteSearch",
            "commandPaletteList",
            "commandPaletteHint",
            "sourceStatus",
            "sourceChapterOptions",
            "sourceOutlineHint",
            "previewSource",
        }
        self.assertTrue(required.issubset(ids))
        self.assertIn("captureSceneOutcome", self.javascript)
        self.assertIn("function activateSceneBeat", self.javascript)
        self.assertIn('const statusFilter = beatStatusFilter?.value || "all"', self.javascript)
        self.assertIn("没有匹配的场景卡。试试清除搜索或切换状态。", self.javascript)
        self.assertIn('beatSearchInput.addEventListener("input", renderSceneBeats)', self.javascript)
        self.assertIn("function focusCurrentBeat", self.javascript)
        self.assertIn("card.scrollIntoView", self.javascript)
        self.assertIn('focusCurrentBeatButton.addEventListener("click", focusCurrentBeat)', self.javascript)
        self.assertIn("beat.status === \"active\" ? \"planned\"", self.javascript)
        self.assertIn("function scheduleProjectPersist", self.javascript)
        self.assertIn("persistActiveProject({ defer: true })", self.javascript)
        self.assertIn("记为结果", self.javascript)
        self.assertIn("sourceActiveProjectId", self.javascript)
        self.assertIn("selectedImported", self.javascript)
        self.assertIn("summarizeCurrentSceneOutcome", self.javascript)
        self.assertIn("getModelMessages({ fullHistory: true })", self.javascript)
        self.assertIn("continuityBridgeMessageCount", self.javascript)
        self.assertIn("conversationArchive.slice(-continuityBridgeMessageCount)", self.javascript)
        self.assertIn("归档消息作为连续性桥接", self.javascript)
        self.assertIn("if (getConversationMessageCount() < 2)", self.javascript)
        self.assertIn("if (getConversationMessageCount() < 1)", self.javascript)
        self.assertIn("const maxConversationMessages = 120", self.javascript)
        self.assertIn("const maxArchivedMessages = 360", self.javascript)
        self.assertIn("function archiveConversationOverflow", self.javascript)
        self.assertIn("function getConversationForDisplay", self.javascript)
        self.assertIn("conversationArchive", self.javascript)
        self.assertIn("const hasConversation = Array.isArray(conversation)", self.javascript)
        self.assertIn("const safeConversation = hasConversation", self.javascript)
        self.assertIn("const rawSourceProjects", self.javascript)
        self.assertIn("跳过 ${skippedProjects} 个无效项目", self.javascript)
        self.assertIn("const capacitySkippedProjects", self.javascript)
        self.assertIn("因项目上限跳过 ${capacitySkippedProjects} 个有效项目", self.javascript)
        self.assertIn("const source = fullHistory", self.javascript)
        self.assertIn("现有项目不会被覆盖", self.javascript)
        self.assertIn("provider_details", self.javascript)
        self.assertIn("characterDetailsInput", self.javascript)
        self.assertIn("dataset.details", self.javascript)
        self.assertIn("【当前角色卡】", self.javascript)
        self.assertIn("const characterChars", self.javascript)
        self.assertIn("创作倾向：${creativityLabels", self.javascript)
        self.assertIn("回复长度：${responseLengthLabels", self.javascript)
        self.assertIn("function renderSummaryFreshness", self.javascript)
        self.assertIn("摘要后新增", self.javascript)
        self.assertIn("function updateStorageStatus", self.javascript)
        self.assertIn("请立即导出 JSON 备份", self.javascript)
        self.assertIn("const customTemplatesStorageKey", self.javascript)
        self.assertIn("function normalizeTemplate", self.javascript)
        self.assertIn("function saveCurrentAsTemplate", self.javascript)
        self.assertIn("function deleteCustomTemplate", self.javascript)
        self.assertIn("customTemplates", self.javascript)
        self.assertIn('version: 4', self.javascript)
        self.assertIn("const sourceBackupVersion", self.javascript)
        self.assertIn("备份格式：v${sourceBackupVersion}", self.javascript)
        self.assertIn("function formatBackupProjectPreview", self.javascript)
        self.assertIn("将导入的项目预览", self.javascript)
        self.assertIn("${messageCount} 条消息", self.javascript)
        self.assertIn("function getMessageSourceLabel", self.javascript)
        self.assertIn("function formatSourceAttribution", self.javascript)
        self.assertIn("function normalizeMessageMode", self.javascript)
        self.assertIn("message-mode-badge", self.javascript)
        self.assertIn("mode: selectedMode", self.javascript)
        self.assertIn("const responseMode = normalizeMessageMode(previousReply.mode)", self.javascript)
        self.assertIn("sourceRefsByVersion", self.javascript)
        self.assertIn("sourceQueriesByVersion", self.javascript)
        self.assertIn("sourceQualitiesByVersion", self.javascript)
        self.assertIn("message.sourceRefs = references", self.javascript)
        self.assertIn("message.sourceQuery = query", self.javascript)
        self.assertIn("mode: modeOverride || selectedMode", self.javascript)
        self.assertIn("formatMessageMode(item)", self.javascript)
        self.assertIn("const evidenceMode = normalizeMessageMode", self.javascript)
        self.assertIn("body: JSON.stringify({ query, mode: evidenceMode })", self.javascript)
        self.assertIn("async function loadSourceOutline", self.javascript)
        self.assertIn("/api/source/outline?limit=3000", self.javascript)
        self.assertIn("sourceChapterOptions.replaceChildren", self.javascript)
        self.assertIn("function getEffectiveCreativityLabel", self.javascript)
        self.assertIn("function syncModeControls", self.javascript)
        self.assertIn('document.querySelectorAll(".mode-tab, .character-card")', self.javascript)
        self.assertIn("control.disabled = value", self.javascript)
        self.assertIn("[projectSelect, providerSelect, modelName, creativitySelect, responseLengthSelect]", self.javascript)
        self.assertIn("if (control) control.disabled = value", self.javascript)
        self.assertIn("creativitySelect.disabled = factualMode", self.javascript)
        self.assertIn('return selectedMode === "问答" ? "事实优先"', self.javascript)
        self.assertIn("conversationTitle.textContent = getConversationTitle()", self.javascript)
        self.assertIn("原作参考：${references.join", self.javascript)
        self.assertIn("依据查询：${query}", self.javascript)
        self.assertIn('const citationVerified = citationStatus === "verified"', self.javascript)
        self.assertIn("> 引用核验：已核对", self.javascript)
        self.assertIn("const sourceAttribution = formatSourceAttribution(item)", self.javascript)
        self.assertIn("演示回复 · 模型服务未返回，本地模板生成", self.javascript)
        self.assertIn("appendDemoSourceBadge", self.javascript)
        self.assertIn("message-source-badge", self.javascript)
        self.assertIn("appendCitationVerifiedBadge", self.javascript)
        self.assertIn("message-citation-verified-badge", self.javascript)
        self.assertIn('const source = assistantMessage.bubble.dataset.source === "demo"', self.javascript)
        self.assertIn("模型服务未返回，本地模板生成", self.javascript)
        self.assertIn('role.textContent = getMessageSourceLabel(item) ? "演示回复"', self.javascript)
        self.assertIn("sourceTemplates", self.javascript)
        self.assertIn("function renderArchiveHistory", self.javascript)
        self.assertIn("function openArchiveHistory", self.javascript)
        self.assertIn("openArchiveHistory(query)", self.javascript)
        self.assertIn("搜归档", self.html)
        self.assertIn("function quoteArchiveMessage", self.javascript)
        self.assertIn("function branchFromArchiveMessage", self.javascript)
        self.assertIn("archive-branch", self.javascript)
        self.assertIn("summary: \"\"", self.javascript)
        self.assertIn("function cloneBeatsForBranch", self.javascript)
        self.assertIn("outcomeThrough", self.javascript)
        self.assertIn('contextMode: "full"', self.javascript)
        self.assertIn("function resetCurrentConversation", self.javascript)
        self.assertIn("project.conversationArchive = []", self.javascript)
        self.assertIn("旧归档不会再进入上下文", self.javascript)
        self.assertIn("function flushDraft", self.javascript)
        self.assertIn("persistActiveProject();", self.javascript)
        self.assertIn('if (active.status === "active") active.status = "planned"', self.javascript)
        self.assertIn("const replacement = project.beats.find((item) => item.status === \"active\")", self.javascript)
        self.assertIn("function copyScenePlan", self.javascript)
        self.assertIn("场景计划已复制", self.javascript)
        self.assertIn("function formatProjectHandoff", self.javascript)
        self.assertIn("function copyProjectHandoff", self.javascript)
        self.assertIn("function downloadProjectHandoff", self.javascript)
        self.assertIn("项目交接摘要已下载", self.javascript)
        self.assertIn("项目交接摘要已复制", self.javascript)
        self.assertIn("不包含 API key、端点或其他敏感配置", self.javascript)
        self.assertIn('"## 参考片段"', self.javascript)
        self.assertIn('"## 当前草稿"', self.javascript)
        self.assertIn("参考片段已截取前 2000 字", self.javascript)
        self.assertIn("草稿已截取前 2000 字", self.javascript)
        self.assertIn("function exportSession", self.javascript)
        self.assertIn("flushDraft();", self.javascript)
        self.assertIn('const draft = messageInput.value.trim()', self.javascript)
        self.assertIn('draft ? `## 当前草稿', self.javascript)
        self.assertIn("function getScenePlanForContext", self.javascript)
        self.assertIn("当前场景优先", self.javascript)
        self.assertIn("完整计划仍保存在本地", self.javascript)
        self.assertIn("const scenePlan = getScenePlanForContext(project)", self.javascript)
        self.assertIn("function getContextUsageBreakdown", self.javascript)
        self.assertIn("function formatContextUsageBreakdown", self.javascript)
        self.assertIn("角色卡 ${breakdown.characterChars", self.javascript)
        self.assertIn("formatContextUsageBreakdown(breakdown)", self.javascript)
        self.assertIn("function openSummaryPreview", self.javascript)
        self.assertIn("function applySummaryPreview", self.javascript)
        self.assertIn("当前摘要 ${current.length} 字", self.javascript)
        self.assertIn("messageThrough", self.javascript)
        self.assertIn("currentMessageCount !== pending.messageCount", self.javascript)
        self.assertIn("currentMessageThrough !== pending.messageThrough", self.javascript)
        self.assertIn("预览生成后已有新剧情，摘要未写入", self.javascript)
        self.assertIn('applySummaryPreviewButton.addEventListener("click", applySummaryPreview)', self.javascript)
        self.assertIn('data-mode="问答"', self.html)
        self.assertIn("问答:", self.javascript)
        self.assertIn("蛊真人", self.html)
        self.assertIn("蛊真人", self.javascript)
        self.assertIn("function getSourceQuery", self.javascript)
        self.assertIn("function isLowInformationSourceQuery", self.javascript)
        self.assertIn("function getSourceUserQueries", self.javascript)
        self.assertIn("function composeSourceQuery", self.javascript)
        self.assertIn("lowInformationSourceQueries", self.javascript)
        self.assertIn("function getDraftSourceQuery", self.javascript)
        self.assertIn("previewSourceButton.addEventListener", self.javascript)
        self.assertIn("先检索原作依据", self.html)
        self.assertIn("source_query: getSourceQuery()", self.javascript)
        self.assertIn('if (["ollama", "openai", "compatible"].includes(provider)) refreshModels()', self.javascript)
        self.assertIn("function renderSourceStatus", self.javascript)
        self.assertIn("function normalizeSourceReferences", self.javascript)
        self.assertIn("function renderSourceReferences", self.javascript)
        self.assertIn("source_references", self.javascript)
        self.assertIn("function normalizeSourceQuality", self.javascript)
        self.assertIn("function sourceQualityLabel", self.javascript)
        self.assertIn("命中充分", self.javascript)
        self.assertIn("依据命中：${quality}", self.javascript)
        self.assertIn("source_quality", self.javascript)
        self.assertIn("assistantMessage.sourceQuality = effectiveSourceQuality", self.javascript)
        self.assertIn("sourceQuality: item.sourceQuality", self.javascript)
        self.assertIn("function normalizeCitationStatus", self.javascript)
        self.assertIn("function appendCitationWarningBadge", self.javascript)
        self.assertIn("source_citation_status", self.javascript)
        self.assertIn('textContent = "引用待核对"', self.javascript)
        self.assertIn("sourceCitationsUnverified", self.javascript)
        self.assertIn("sourceCitationStatuses", self.javascript)
        self.assertIn("sourceCitationsUnverifiedByVersion", self.javascript)
        self.assertIn("引用待核对：", self.javascript)
        self.assertIn("function appendTruncatedBadge", self.javascript)
        self.assertIn('textContent = "已截断"', self.javascript)
        self.assertIn('textContent = "展开重试"', self.javascript)
        self.assertIn("function appendExpandedRetryAction", self.javascript)
        self.assertIn("appendExpandedRetryAction(assistantMessage.actions", self.javascript)
        self.assertIn("actions,\n    historyIndex", self.javascript)
        self.assertIn('retryMessage(historyIndex, "expanded")', self.javascript)
        self.assertIn("responseLengthOverride || responseLengthSelect.value", self.javascript)
        self.assertIn("只对这次重试使用展开篇幅", self.javascript)
        self.assertIn('onDone = null', self.javascript)
        self.assertIn('if (typeof onDone === "function") onDone(payload)', self.javascript)
        self.assertIn("if (metadata?.truncated)", self.javascript)
        self.assertIn("回复达到篇幅上限", self.javascript)
        self.assertIn("truncations", self.javascript)
        self.assertIn("const effectiveSourceQuery = safeText(metadata?.source_query, sourceQuery, 600)", self.javascript)
        self.assertIn("assistantMessage.sourceQuery = effectiveSourceQuery", self.javascript)
        self.assertIn("source-reference-line", self.javascript)
        self.assertIn("function openSourceEvidence", self.javascript)
        self.assertIn("/api/source/search", self.javascript)
        self.assertIn("function renderSourceEvidence", self.javascript)
        self.assertIn("sourceQuality = \"\"", self.javascript)
        self.assertIn("payload.source_quality || \"\"", self.javascript)
        self.assertIn("检索强度：${quality || \"未标注\"}", self.javascript)
        self.assertIn("原作检索依据", self.html)
        self.assertIn("sourceQuery", self.javascript)
        self.assertIn("savedQuery", self.javascript)
        self.assertIn("source_query: sourceQuery", self.javascript)
        self.assertIn("原作参考未标注", self.javascript)
        self.assertIn("当前没有生成可靠的原作结论", self.javascript)
        self.assertIn('assistantMessage.renderSourceReferences([], sourceQuery, "none")', self.javascript)
        self.assertIn("function isLegacyDemoProject", self.javascript)
        self.assertIn("function createInkEchoDefaultProject", self.javascript)
        self.assertIn("function loadProjects", self.javascript)
        self.assertIn('names.includes("林黛玉")', self.javascript)
        self.assertIn('names.includes("贾宝玉")', self.javascript)
        self.assertIn("const modePromptSets", self.javascript)
        self.assertIn("function renderModePrompts", self.javascript)
        self.assertIn("function getConversationTitle", self.javascript)
        self.assertIn("《蛊真人》原作问答", self.javascript)
        self.assertIn("function getAssistantDisplayName", self.javascript)
        self.assertIn("const responseName = getAssistantDisplayName(character)", self.javascript)
        self.assertIn("avatar-inkecho", self.javascript)
        self.assertIn("春秋蝉在原作中的作用", self.javascript)
        self.assertIn("青茅山三大山寨之间是什么关系", self.javascript)
        self.assertIn("pendingSummaryPreview = null", self.javascript)
        self.assertIn("function openSceneOutcomePreview", self.javascript)
        self.assertIn("function applySceneOutcomePreview", self.javascript)
        self.assertIn("当前记录 ${current.length} 字", self.javascript)
        self.assertIn('applySceneOutcomePreviewButton.addEventListener("click", applySceneOutcomePreview)', self.javascript)
        self.assertIn("还没有记录本幕结果", self.javascript)
        self.assertIn("当前场景结果尚未覆盖最新剧情", self.javascript)
        self.assertIn("pendingSceneOutcomePreview = null", self.javascript)
        self.assertIn("currentMessageThrough !== pending.outcomeThrough", self.javascript)
        self.assertIn("预览生成后已有新剧情，本幕结果未写入", self.javascript)
        self.assertIn("function commitManualSummaryEdit", self.javascript)
        self.assertIn("摘要提炼完成后再发送", self.javascript)
        self.assertIn("let summaryEditPending = false", self.javascript)
        self.assertIn('summaryFreshness.textContent = workSummary.value.trim() ? "摘要编辑中 · 完成后记录覆盖范围"', self.javascript)
        self.assertIn('workSummary.addEventListener("blur", commitManualSummaryEdit)', self.javascript)
        self.assertIn("摘要之后新增了 ${newMessages} 条消息", self.javascript)
        self.assertIn("精简模式可能遗漏最新剧情", self.javascript)
        self.assertIn("function formatProviderDiagnostics", self.javascript)
        self.assertIn("function openProviderDiagnostics", self.javascript)
        self.assertIn("missing_keys", self.javascript)
        self.assertIn("const missingKeysText", self.javascript)
        self.assertIn("请补：${missingKeys.join", self.javascript)
        self.assertIn("async function copyProviderConfigKeys", self.javascript)
        self.assertIn("配置键名已复制", self.javascript)
        self.assertIn('copyProviderConfigKeysButton.addEventListener("click", copyProviderConfigKeys)', self.javascript)
        self.assertIn("当前缺少变量", self.javascript)
        self.assertIn("连接诊断已复制", self.javascript)
        self.assertIn("不包含 API key、端点或请求头值", self.javascript)
        self.assertIn("project.context?.chapter", self.javascript)
        self.assertIn("activeBeat?.goal", self.javascript)
        self.assertIn("const workspace = project?.id === activeProjectId", self.javascript)
        self.assertIn("projectSearchCount.textContent", self.javascript)
        self.assertIn("function normalizeBranchSource", self.javascript)
        self.assertIn("function formatBranchSource", self.javascript)
        self.assertIn("branchSource", self.javascript)
        self.assertIn("projectLineage.textContent", self.javascript)
        self.assertIn("支线来源 · ${source}", self.javascript)
        self.assertIn("项目谱系**", self.javascript)
        self.assertIn("function getProjectHealth", self.javascript)
        self.assertIn("function formatProjectHealth", self.javascript)
        self.assertIn("projectHealth.textContent", self.javascript)
        self.assertIn("项目状态**", self.javascript)
        self.assertIn("formatProjectHealth(project)", self.javascript)
        self.assertIn("或状态", self.html)
        self.assertIn("function matchesProjectStatus", self.javascript)
        self.assertIn("projectStatusFilter.addEventListener(\"change\", renderProjectSelect)", self.javascript)
        self.assertIn("需要处理", self.html)
        self.assertIn("当前项目未在筛选结果", self.javascript)
        self.assertIn("function focusProjectAttention", self.javascript)
        self.assertIn("已定位到待更新的剧情摘要", self.javascript)
        self.assertIn("已打开场景计划，请处理待更新的本幕结果", self.javascript)
        self.assertIn("projectHealthAction.addEventListener(\"click\", focusProjectAttention)", self.javascript)
        self.assertIn("function renderCommandPalette", self.javascript)
        self.assertIn("function executeCommandPaletteCommand", self.javascript)
        self.assertIn("function moveCommandPaletteSelection", self.javascript)
        self.assertIn("打开命令面板", self.html)
        self.assertIn("event.key.toLowerCase() === \"k\"", self.javascript)
        self.assertIn("快速保存检查点", self.javascript)
        self.assertIn("有 ${health.staleOutcomes} 个场景结果没有覆盖最新剧情", self.javascript)
        self.assertIn("仍会发送这些结果", self.javascript)
        self.assertIn("function getContextFreshnessNotices", self.javascript)
        self.assertIn("function formatContextFreshnessNotices", self.javascript)
        self.assertIn("新鲜度提醒：${formatContextFreshnessNotices(project)}", self.javascript)
        self.assertIn("${formatContextFreshnessNotices()}", self.javascript)
        self.assertIn("function getSceneOutcomeFreshness", self.javascript)
        self.assertIn("结果来源不在当前历史 · 建议重新提炼", self.javascript)
        self.assertIn("之后新增 ${newMessages} 条", self.javascript)
        self.assertIn("beat-provenance", self.javascript)
        self.assertIn("归档引用", self.javascript)
        self.assertIn("查看归档历史", self.javascript)
        self.assertIn("function clearArchivedHistory", self.javascript)
        self.assertIn("建议先导出 JSON 备份", self.javascript)
        self.assertIn("function getCheckpointMessageCount", self.javascript)
        self.assertIn("function saveCheckpoint({ quick = false } = {})", self.javascript)
        self.assertIn("已快速保存", self.javascript)
        self.assertIn('quickSaveCheckpointButton.addEventListener("click", () => saveCheckpoint({ quick: true }))', self.javascript)
        self.assertIn('event.key.toLowerCase() === "s"', self.javascript)
        self.assertIn("checkpoint-preview", self.javascript)
        self.assertIn("基础设定快照", self.javascript)
        self.assertIn("function branchFromCheckpoint", self.javascript)
        self.assertIn("checkpoint-branch", self.javascript)
        self.assertIn("function renameCheckpoint", self.javascript)
        self.assertIn("checkpoint-rename", self.javascript)
        self.assertIn("function compareCheckpoint", self.javascript)
        self.assertIn("checkpoint-compare", self.javascript)
        self.assertIn("检查点对比已复制", self.javascript)
        self.assertIn("摘要覆盖：当前", self.javascript)
        self.assertIn("上下文模式：当前", self.javascript)
        self.assertIn("目标变化：${current.title}", self.javascript)
        self.assertIn("结果来源变化：${current.title}", self.javascript)
        self.assertIn("const query = checkpointSearchInput", self.javascript)
        self.assertIn("没有匹配的检查点", self.javascript)
        self.assertIn('checkpointDialog.querySelector("form").addEventListener("submit"', self.javascript)
        self.assertIn("从这一刻创建一条安全的剧情支线", self.html)
        self.assertIn("const characterLibraryStorageKey", self.javascript)
        self.assertIn("function renderCharacterLibrary", self.javascript)
        self.assertIn("const query = characterLibrarySearch", self.javascript)
        self.assertIn("没有匹配的角色", self.javascript)
        self.assertIn('characterLibraryDialog.querySelector("form").addEventListener("submit"', self.javascript)
        self.assertIn("function saveSelectedCharacterToLibrary", self.javascript)
        self.assertIn("function addLibraryCharacter", self.javascript)
        self.assertIn("角色库中的「${character.name}」设定与当前项目不同", self.javascript)
        self.assertIn("characterLibrary", self.javascript)
        self.assertIn("const promptLibraryStorageKey", self.javascript)
        self.assertIn("function renderPromptLibrary", self.javascript)
        self.assertIn("const query = promptLibrarySearch", self.javascript)
        self.assertIn("没有匹配的灵感", self.javascript)
        self.assertIn('promptLibraryDialog.querySelector("form").addEventListener("submit"', self.javascript)
        self.assertIn('archiveDialog.querySelector("form").addEventListener("submit"', self.javascript)
        self.assertIn("function savePromptToLibrary", self.javascript)
        self.assertIn("previousText = \"\"", self.javascript)
        self.assertIn("savePromptToLibrary(title, text, previousText)", self.javascript)
        self.assertIn("function addLibraryPrompt", self.javascript)
        self.assertIn("promptLibrary", self.javascript)
        self.assertIn('version: 4', self.javascript)
        self.assertIn("function formatConversationForExport", self.javascript)
        self.assertIn("备选回复", self.javascript)


if __name__ == "__main__":
    unittest.main()
