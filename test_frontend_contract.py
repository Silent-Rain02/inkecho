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
        self.assertIn('applySummaryPreviewButton.addEventListener("click", applySummaryPreview)', self.javascript)
        self.assertIn("pendingSummaryPreview = null", self.javascript)
        self.assertIn("function openSceneOutcomePreview", self.javascript)
        self.assertIn("function applySceneOutcomePreview", self.javascript)
        self.assertIn("当前记录 ${current.length} 字", self.javascript)
        self.assertIn('applySceneOutcomePreviewButton.addEventListener("click", applySceneOutcomePreview)', self.javascript)
        self.assertIn("pendingSceneOutcomePreview = null", self.javascript)
        self.assertIn("function commitManualSummaryEdit", self.javascript)
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
