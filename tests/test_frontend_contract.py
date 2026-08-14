from __future__ import annotations

import re
import unittest
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
FRONTEND_ROOT = ROOT / "frontend"


class FrontendContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.html = (FRONTEND_ROOT / "index.html").read_text(encoding="utf-8")
        cls.javascript = (FRONTEND_ROOT / "app.js").read_text(encoding="utf-8")
        cls.styles = (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8")

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

    def test_morning_ui_alignment_controls_and_layout_are_preserved(self) -> None:
        self.assertIn('id="toggleTheme"', self.html)
        self.assertIn('id="saveModelConfig"', self.html)
        self.assertIn("function setTheme(theme, persist = true)", self.javascript)
        self.assertIn("function restoreTheme()", self.javascript)
        self.assertIn('localStorage.setItem(themeStorageKey, activeTheme)', self.javascript)
        self.assertIn("模型配置已保存", self.javascript)
        self.assertIn("grid-template-columns: minmax(0, 1380px)", self.styles)
        self.assertIn("height: clamp(640px, calc(100dvh - 112px), 840px)", self.styles)
        self.assertIn('html[data-theme="light"]', self.styles)
        self.assertIn("@keyframes composer-progress", self.styles)
        self.assertIn("top: 82px", self.styles)
        self.assertIn("right: 28px", self.styles)

    def test_runtime_assets_are_present_and_expected_controls_are_wired(self) -> None:
        self.assertIn('<link rel="stylesheet" href="styles.css?v=27"', self.html)
        self.assertIn('<script src="app.js?v=41"></script>', self.html)
        self.assertIn("overflow-wrap: anywhere", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        ids = set(re.findall(r'\bid=["\']([^"\']+)["\']', self.html))
        required = {
            "projectSelect",
            "messageInput",
            "providerSelect",
            "providerDataBoundary",
            "providerDataConsentDialog",
            "providerDataConsentDescription",
            "providerDataConsentService",
            "providerDataConsentDetail",
            "cancelProviderDataConsent",
            "confirmProviderDataConsent",
            "openProviderDiagnostics",
            "copyProviderConfigKeys",
            "providerDiagnosticsDialog",
            "providerDiagnosticsStats",
            "providerDiagnosticsText",
            "copyProviderDiagnostics",
            "sourceEvidenceDialog",
            "sourceEvidenceStats",
            "sourceEvidenceRecovery",
            "sourceEvidenceList",
            "copySourceEvidence",
            "sourceChapterReaderDialog",
            "sourceChapterReaderStats",
            "sourceChapterReaderText",
            "sourceChapterPrevious",
            "sourceChapterNext",
            "sourceChapterAsk",
            "copySourceChapter",
            "sourceChapterDigest",
            "sourceChapterDigestStatus",
            "sourceChapterDigestText",
            "generateSourceChapterDigest",
            "saveSourceChapterDigest",
            "conversationContext",
            "contextDialog",
            "summaryPreviewDialog",
            "summaryPreviewStats",
            "currentSummaryPreview",
            "nextSummaryPreview",
            "applySummaryPreview",
            "saveSummaryToMemory",
            "sceneOutcomePreviewDialog",
            "sceneOutcomePreviewStats",
            "currentSceneOutcomePreview",
            "nextSceneOutcomePreview",
            "applySceneOutcomePreview",
            "saveSceneOutcomeToMemory",
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
            "toggleContextPanel",
            "sourceReadinessButton",
            "sourceReadinessText",
            "modelReadinessButton",
            "modelReadinessText",
            "commandPaletteDialog",
            "commandPaletteSearch",
            "commandPaletteList",
            "commandPaletteHint",
            "sourceStatus",
            "sourceChapterOptions",
            "sourceOutlineHint",
            "sourceOutlineSearch",
            "sourceOutlineBrowserStatus",
            "sourceOutlineClear",
            "sourceOutlineList",
            "previewSource",
            "workspaceGuide",
            "workspaceNovelSelect",
            "workspaceGuideKicker",
            "workspaceGuideTitle",
            "workspaceGuideDescription",
            "workspaceGuideAction",
            "contextMore",
            "modelSettings",
            "modeGuide",
            "modeGuideIcon",
            "modeGuideKicker",
            "modeGuideTitle",
            "modeGuideDescription",
            "modeGuideAction",
            "workspacePages",
            "libraryPageTitle",
            "novelUploadInput",
            "novelLibraryCount",
            "novelLibraryStatusSummary",
            "refreshNovelLibrary",
            "novelLibrarySearch",
            "novelLibraryStatus",
            "clearNovelLibraryFilters",
            "exportNovelSpaceConfig",
            "novelSpaceConfigInput",
            "novelSpaceList",
            "novelLibraryNoResults",
            "novelLibraryEmpty",
            "novelMemoryTitle",
            "novelMemoryContent",
            "previewNovelMemory",
            "refreshNovelMemory",
            "removeStaleNovelMemory",
            "novelMemoryPreview",
            "novelMemoryPreviewTitle",
            "novelMemoryPreviewStatus",
            "novelMemoryPreviewList",
            "saveNovelMemory",
            "novelMemoryCount",
            "novelMemorySearch",
            "novelMemoryKindFilter",
            "novelMemoryList",
           "novelUploadFeedback",
           "novelUploadFeedbackText",
            "novelUploadCancel",
           "novelUploadRetry",
            "sourcePageTitle",
            "sourcePageStatus",
            "sourcePageDiagnostics",
            "sourcePageChapter",
            "sourceChapterSelection",
            "sourceEvidenceQuery",
            "retrievalStrategy",
            "sourcePagePreview",
            "sourcePageRead",
            "sourcePageAsk",
            "storyPageTitle",
            "storyPageBeatCount",
            "storyPageBeats",
            "storyPageCharacters",
            "storyPageSummary",
            "storyPageCheckpoints",
            "storyContextSlot",
            "characterSectionHeading",
            "settingsPageTitle",
            "settingsPageSlot",
        }
        self.assertTrue(required.issubset(ids))
        self.assertIn("命中的有限原作片段和必要上下文会发送到你配置的自定义 Azure-compatible 节点", self.javascript)
        self.assertIn("Ollama 默认在本机处理", self.javascript)
        self.assertIn("function ensureProviderDataConsent", self.javascript)
        self.assertIn('if (!await ensureProviderDataConsent(selectedMode === "问答" ? "生成内容问答" : "生成创作回复")) return;', self.javascript)
        self.assertIn('if (!await ensureProviderDataConsent("生成章节摘要")) return;', self.javascript)
        self.assertIn('`原作依据 · ${answerCoverage}`', self.javascript)
        self.assertIn('`查看全部 ${safeReferences.length} 个`', self.javascript)
        consent_function = self.javascript.split("async function ensureProviderDataConsent", 1)[1].split("const providerConfigTemplates", 1)[0]
        self.assertNotIn("window.confirm", consent_function)
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

    def test_remote_provider_consent_precedes_local_message_mutation(self) -> None:
        submit_handler = self.javascript.split(
            'composer.addEventListener("submit", async (event) => {', 1
        )[1].split('characterForm.addEventListener("submit", saveCharacter);', 1)[0]
        readiness_index = submit_handler.index("await ensureProviderReadyForRequest")
        consent_index = submit_handler.index("await ensureProviderDataConsent")
        rendered_message_index = submit_handler.index('addMessage({ role: "user"')
        stored_message_index = submit_handler.index('conversationHistory.push({ role: "user"')
        generation_index = submit_handler.index("await generateAssistantReply")
        self.assertLess(readiness_index, consent_index)
        self.assertLess(consent_index, rendered_message_index)
        self.assertLess(consent_index, stored_message_index)
        self.assertLess(consent_index, generation_index)

    def test_all_generation_paths_preflight_provider_before_remote_consent(self) -> None:
        self.assertIn("async function ensureProviderReadyForRequest", self.javascript)
        for purpose in ("生成章节摘要", "提炼剧情摘要", "提炼本幕结果", "重试模型回复"):
            readiness = f'ensureProviderReadyForRequest("{purpose}")'
            consent = f'ensureProviderDataConsent("{purpose}")'
            self.assertIn(readiness, self.javascript)
            self.assertIn(consent, self.javascript)
            self.assertLess(self.javascript.index(readiness), self.javascript.index(consent))

    def test_failed_generation_is_explicit_and_excluded_from_future_context(self) -> None:
        self.assertNotIn("她把目光投向窗外", self.javascript)
        self.assertIn("本次${task}未生成", self.javascript)
        self.assertIn("showFailedGenerationActions(assistantMessage.actions", self.javascript)
        model_messages = self.javascript.split("function getModelMessages", 1)[1].split(
            "function getPreviewModelMessages", 1
        )[0]
        preview_messages = self.javascript.split("function getPreviewModelMessages", 1)[1].split(
            "function updateContextModeUI", 1
        )[0]
        self.assertIn('item.source === "demo"', model_messages)
        self.assertIn('item.source === "demo"', preview_messages)

    def test_retry_failure_preserves_generated_reply_and_drops_failed_versions(self) -> None:
        retry_handler = self.javascript.split("async function retryMessage", 1)[1].split(
            "function selectCharacter", 1
        )[0]
        self.assertIn('currentSource === "demo" && previousSources.some', retry_handler)
        self.assertIn('showToast("重试未成功，已保留原回复")', retry_handler)
        self.assertIn('.filter((index) => previousSources[index] !== "demo")', retry_handler)
        self.assertIn("retainPreviousMetadata(rawPreviousVersions)", retry_handler)

    def test_targeted_retry_comparison_is_version_scoped_and_persisted(self) -> None:
        retry_handler = self.javascript.split("async function retryMessage", 1)[1].split(
            "function selectCharacter", 1
        )[0]
        self.assertIn("const normalizedRetryCodes = normalizeQualityRetryCodes(qualityRetryCodes)", retry_handler)
        self.assertIn("versionQualityRetryCodesByVersion", retry_handler)
        self.assertIn("qualityRetryCodesByVersion", retry_handler)
        self.assertIn("if (version === reply) return normalizedRetryCodes", retry_handler)
        self.assertIn("function qualityOptimizationStatus", self.javascript)
        self.assertIn('label: "质检已通过"', self.javascript)
        self.assertIn('label: "风险已减少"', self.javascript)
        self.assertIn('label: "仍需复核"', self.javascript)
        version_controls = self.javascript.split('versionControls.className = "version-controls"', 1)[1].split(
            "actions.appendChild(versionControls)", 1
        )[0]
        self.assertIn("qualityOptimizationStatus(qualityRetryCodes, qualityReview)", version_controls)
        self.assertIn("quality-optimization-status", version_controls)
        switch_handler = self.javascript.split("function switchMessageVersion", 1)[1].split(
            "function setConversationSearchOpen", 1
        )[0]
        self.assertIn("message.qualityRetryCodesByVersion", switch_handler)
        self.assertIn("delete message.qualityRetryCodes", switch_handler)
        self.assertIn("qualityOptimizationStatus(normalizedRetryCodes, assistantMessage.qualityReview)", retry_handler)
        self.assertIn("按建议优化完成 · ${completedOptimization.label}", retry_handler)

    def test_completed_send_refreshes_message_count_after_assistant_persist(self) -> None:
        submit_handler = self.javascript.split(
            'composer.addEventListener("submit", async (event) => {', 1
        )[1].split('characterForm.addEventListener("submit", saveCharacter);', 1)[0]
        assistant_persist = submit_handler.rindex('conversationHistory.push({\n    role: "assistant"')
        save_index = submit_handler.index("saveConversation();", assistant_persist)
        count_index = submit_handler.index("updateCount();", save_index)
        filter_index = submit_handler.index("filterConversationMessages();", save_index)
        self.assertLess(save_index, count_index)
        self.assertLess(count_index, filter_index)

    def test_first_task_starters_are_visible_only_before_a_mode_has_user_work(self) -> None:
        self.assertIn('id="taskStarters"', self.html)
        self.assertIn('id="taskStarterList"', self.html)
        self.assertLess(self.html.index('id="modeGuide"'), self.html.index('id="taskStarters"'))
        self.assertLess(self.html.index('id="taskStarters"'), self.html.index('id="messages"'))
        starter_renderer = self.javascript.split("function renderTaskStarters", 1)[1].split(
            "function getNovelCharacters", 1
        )[0]
        self.assertIn('["续写", "问答"].includes(selectedMode)', starter_renderer)
        self.assertIn('item?.role !== "user"', starter_renderer)
        self.assertIn('normalizeMessageMode(item.mode) || "续写"', starter_renderer)
        self.assertIn('!hasDraft && !hasTaskInMode', starter_renderer)
        self.assertIn('fillPrompt(prompt.prompt)', starter_renderer)
        fill_prompt = self.javascript.split("function fillPrompt", 1)[1].split(
            "function createCustomPromptCard", 1
        )[0]
        self.assertIn('dispatchEvent(new Event("input", { bubbles: true }))', fill_prompt)

    def test_primary_page_navigation_resets_document_scroll(self) -> None:
        set_view = self.javascript.split("function setWorkspaceView", 1)[1].split(
            "function syncWorkspaceViewFromUrl", 1
        )[0]
        self.assertIn("const previousView = activeWorkspaceView", set_view)
        self.assertIn(
            'if (nextView !== previousView) window.scrollTo({ top: 0, left: 0, behavior: "auto" });',
            set_view,
        )

    def test_successful_novel_upload_returns_to_task_first_home(self) -> None:
        upload_result = self.javascript.split("function applyNovelUploadResult", 1)[1].split(
            "function isRecoverableNovelUploadStatusError", 1
        )[0]
        self.assertIn("selectNovelSpace(uploaded.id, false, true)", upload_result)
        self.assertIn('setWorkspaceView(empty ? "source" : "home"', upload_result)
        self.assertLess(
            upload_result.index('const empty = uploaded.source?.parse_status === "empty"'),
            upload_result.index('setWorkspaceView(empty ? "source" : "home"'),
        )
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
        self.assertIn("novel_space_id: getCurrentNovelSpaceId()", self.javascript)
        self.assertIn("function loadRetrievalStrategy", self.javascript)
        self.assertIn("function persistRetrievalStrategy", self.javascript)
        self.assertIn("function getRetrievalStrategy", self.javascript)
        self.assertIn("retrievalStrategyBySpaceStorageKey", self.javascript)
        self.assertIn("retrievalStrategySpaceId", self.javascript)
        self.assertIn("检索策略：${strategyLabel}", self.javascript)
        self.assertIn("retrieval_strategy: getRetrievalStrategy()", self.javascript)
        self.assertIn("优先按章节", self.html)
        self.assertIn("async function loadSourceOutline", self.javascript)
        self.assertIn("function renderSourceOutlineBrowser", self.javascript)
        self.assertIn("function queueSourceOutlineSearch", self.javascript)
        self.assertIn("function resetSourceOutlineRemoteSearch", self.javascript)
        self.assertIn("sourceOutlineRemoteTitles", self.javascript)
        self.assertIn("sourceOutlineSearchPending", self.javascript)
        self.assertIn("sourceOutlineSearchError", self.javascript)
        self.assertIn("完整章节索引暂不可用，可以直接输入章节 / 场景定位", self.javascript)
        self.assertIn("query.length < 2", self.javascript)
        self.assertIn("正在查找章节", self.javascript)
        self.assertIn("async function previewNovelMemory", self.javascript)
        self.assertIn("/api/novels/memory/preview", self.javascript)
        self.assertIn("selection_reason", self.javascript)
        self.assertIn("function renderWorkspaceNovelSelect", self.javascript)
        self.assertIn("function setComposerMode", self.javascript)
        self.assertIn("function openNovelSpaceFlow", self.javascript)
        self.assertIn("decodeURIComponent(window.location.hash", self.javascript)
        self.assertIn("function readWorkspaceHashState", self.javascript)
        self.assertIn("function workspaceHashForView", self.javascript)
        self.assertIn("function syncNovelSpaceFromUrl", self.javascript)
        self.assertIn("encodeURIComponent(normalizedSpaceId)", self.javascript)
        self.assertIn("window.history?.pushState", self.javascript)
        self.assertIn("link.href = nextHash", self.javascript)
        self.assertIn("link.click()", self.javascript)
        self.assertIn("function syncWorkspaceViewFromUrl", self.javascript)
        self.assertIn('window.addEventListener("popstate", syncWorkspaceViewFromUrl)', self.javascript)
        self.assertIn("spaceRecoveryTargetSelect", self.javascript)
        self.assertIn("selectedRecoveryName", self.javascript)
        self.assertIn("pendingRecoveryNames.length === 1", self.javascript)
        self.assertIn("选择待恢复的小说空间", self.javascript)
        self.assertIn("activeNovelSpaceId = nextSpaceId", self.javascript)
        self.assertIn("retrievalStrategy = loadRetrievalStrategy(nextSpaceId)", self.javascript)
        self.assertIn("loadNovelSpaceMemory(nextSpaceId)", self.javascript)
        self.assertIn("syncWorkspacePage()", self.javascript)
        self.assertIn('openNovelSpaceFlow(space.id, "续写")', self.javascript)
        self.assertIn('openNovelSpaceFlow(space.id, "问答")', self.javascript)
        self.assertIn("askQuestion.disabled = !readiness.canQuery", self.javascript)
        self.assertIn('id="workspaceGuideAskAction"', self.html)
        self.assertIn('id="workspaceGuideWriteAction"', self.html)
        self.assertIn('id="workspaceGuideSourceAction"', self.html)
        self.assertIn('id="libraryManagement"', self.html)
        self.assertIn('id="workspaceGuideStatus"', self.html)
        self.assertIn('id="workspaceGuideStatusSummary"', self.html)
        self.assertIn('id="workspaceGuideProgress"', self.html)
        self.assertIn('class="workspace-progress-action"', self.html)
        self.assertIn('data-progress-key="source"', self.html)
        self.assertIn('data-progress-key="parse"', self.html)
        self.assertIn('data-progress-key="memory"', self.html)
        self.assertIn('data-progress-key="create"', self.html)
        self.assertIn('id="workspaceNavMore"', self.html)
        self.assertIn('class="workspace-nav-primary"', self.html)
        self.assertIn('class="workspace-nav-secondary"', self.html)
        self.assertIn('id="advancedModeDisclosure"', self.html)
        self.assertIn('class="mode-more-options mode-inline-options"', self.html)
        self.assertIn('id="conversationHistoryPanel"', self.html)
        self.assertIn('id="conversationHistoryList"', self.html)
        self.assertIn('id="openArchiveFromHistory"', self.html)
        self.assertIn("function getNovelSpaceProgress", self.javascript)
        self.assertIn("function syncWorkspaceGuideProgress", self.javascript)
        self.assertIn("async function refreshNovelSpaceMemory", self.javascript)
        self.assertIn('loadNovelSpaceMemory(spaceId, { force: true })', self.javascript)
        self.assertIn('refreshNovelMemoryButton?.addEventListener("click", refreshNovelSpaceMemory)', self.javascript)
        self.assertIn("async function removeStaleNovelMemory", self.javascript)
        self.assertIn("清理待核对原文记忆", self.javascript)
        self.assertIn('removeStaleNovelMemoryButton?.addEventListener("click", removeStaleNovelMemory)', self.javascript)
        self.assertIn("function openWorkspaceProgressStep", self.javascript)
        self.assertIn("workspaceGuideProgress?.addEventListener(\"click\"", self.javascript)
        self.assertIn('openWorkspaceProgressStep(action.dataset.progressKey)', self.javascript)
        self.assertIn("const workspaceNavMore", self.javascript)
        self.assertIn("function openWorkspaceTask", self.javascript)
        self.assertIn('openWorkspaceTask("问答")', self.javascript)
        self.assertIn('openWorkspaceTask("续写")', self.javascript)
        self.assertIn('workspaceGuideAskAction?.addEventListener("click"', self.javascript)
        self.assertIn('workspaceGuideWriteAction?.addEventListener("click"', self.javascript)
        self.assertIn('workspaceGuideSourceAction?.addEventListener("click"', self.javascript)
        self.assertIn('advancedModeDisclosure?.classList.toggle("has-active-mode", ["改写", "独白"].includes(selectedMode))', self.javascript)
        self.assertIn("function renderConversationHistory", self.javascript)
        self.assertIn("focusConversationHistoryEntry", self.javascript)
        self.assertIn("function beginConversationForMode", self.javascript)
        self.assertIn("function switchConversationSession", self.javascript)
        self.assertIn("function storeCurrentConversationSession", self.javascript)
        self.assertIn("conversationSessions: safeConversationSessions", self.javascript)
        self.assertIn('workspaceNavMore.open = !["library", "workbench"].includes(nextView)', self.javascript)
        self.assertIn("parseNeedsAttention", self.javascript)
        self.assertIn('"attention"', self.javascript)
        self.assertIn("linkedProjects.length", self.javascript)
        self.assertIn("preserveWorkspaceView", self.javascript)
        self.assertIn("/api/source/outline?${params.toString()}", self.javascript)
        self.assertIn("/api/source/chapter?${params.toString()}", self.javascript)
        self.assertIn("/api/source/sample", self.javascript)
        self.assertIn('openSourceChapterReader("", { sample: true })', self.javascript)
        self.assertIn("const isSample = options?.sample === true", self.javascript)
        self.assertIn("检查原文内容", self.javascript)
        self.assertIn("function openSourceChapterReader", self.javascript)
        self.assertIn("sourcePageReadButton", self.javascript)
        self.assertIn('sourcePageReadButton?.addEventListener("click", () => openSourceChapterReader())', self.javascript)
        self.assertNotIn('sourcePageReadButton?.addEventListener("click", openSourceChapterReader)', self.javascript)
        self.assertIn("previous_title", self.javascript)
        self.assertIn("next_title", self.javascript)
        self.assertIn("sourceChapterPreviousButton", self.javascript)
        self.assertIn("sourceChapterNextButton", self.javascript)
        self.assertIn("sourceChapterAskButton", self.javascript)
        self.assertIn(">围绕本章提问<", self.html)
        self.assertIn("let sourceChapterReaderIsSample = false", self.javascript)
        self.assertIn('sourceChapterAskButton.textContent = sourceChapterReaderIsSample ? "围绕解析样本提问" : "围绕本章提问"', self.javascript)
        self.assertIn("beginSourceQuestion(\"\", title)", self.javascript)
        self.assertIn("/api/source/summarize", self.javascript)
        self.assertIn('"source_summary"', self.javascript)
        self.assertIn('value="source_summary"', self.html)
        self.assertIn('value="stale">待核对原文', self.html)
        self.assertIn("sourceRevision", self.javascript)
        self.assertIn("sourceStale", self.javascript)
        self.assertIn("sourceStaleReason", self.javascript)
        self.assertIn("原文已更新，请重新核对", self.javascript)
        self.assertIn("原文未就绪，请重新核对", self.javascript)
        self.assertIn("请先恢复当前小说原文，再重新核对这条记忆", self.javascript)
        self.assertIn("source_revision", self.javascript)
        self.assertIn('recheck.textContent = note.sourceStale ? "重新核对" : "查看原文"', self.javascript)
        self.assertIn('if (note.sourceChapter === "作品开篇") openSourceChapterReader("", { sample: true });', self.javascript)
        self.assertIn("openSourceChapterReader(note.sourceChapter)", self.javascript)
        self.assertIn("generatedNoteIndex", self.javascript)
        self.assertIn("source_chapter", self.javascript)
        self.assertIn("source_chunk_index", self.javascript)
        self.assertIn("原文分片", self.javascript)
        self.assertIn("staleCount", self.javascript)
        self.assertIn("novelMemorySpaceSummary", self.javascript)
        self.assertIn("staleCount: Math.max(0, Number(memory.stale_count || memory.staleCount) || 0)", self.javascript)
        self.assertIn("target.memory = novelMemorySpaceSummary(activeNovelMemory)", self.javascript)
        self.assertIn("const novelMemorySourceRevisions = {};", self.javascript)
        self.assertIn("sourceRevisionChanged", self.javascript)
        self.assertIn("cachedSourceRevision !== currentSourceRevision", self.javascript)
        self.assertIn("delete novelMemorySourceRevisions[normalized.id]", self.javascript)
        self.assertIn('revision: safeText(sourceStatus.revision, "", 80)', self.javascript)
        self.assertIn("条记忆待核对", self.javascript)
        self.assertIn('kind === "stale"', self.javascript)
        self.assertIn("staleCount", self.javascript)
        self.assertIn("需要重新核对，核对前不会用于续写", self.javascript)
        self.assertIn("sourceChapterOptions.replaceChildren", self.javascript)
        self.assertIn("sourceOutlineTitles", self.javascript)
        self.assertIn("function getEffectiveCreativityLabel", self.javascript)
        self.assertIn("function syncModeControls", self.javascript)
        self.assertIn('if (mode === "问答") return itemMode === "问答"', self.javascript)
        self.assertIn('if (selectedMode === "问答" && itemMode !== "问答") continue', self.javascript)
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
        self.assertIn('const citationMissing = citationStatus === "none" && normalizeMessageMode(item?.mode) === "问答"', self.javascript)
        self.assertIn("> 引用核验：未标注章节，建议打开依据", self.javascript)
        self.assertIn("> 引用核验：已核对", self.javascript)
        self.assertIn("const sourceAttribution = formatSourceAttribution(item)", self.javascript)
        self.assertIn("未生成 · 模型服务没有返回可用内容", self.javascript)
        self.assertIn("appendDemoSourceBadge", self.javascript)
        self.assertIn("message-source-badge", self.javascript)
        self.assertIn("appendCitationVerifiedBadge", self.javascript)
        self.assertIn("appendCitationMissingBadge", self.javascript)
        self.assertIn("message-citation-verified-badge", self.javascript)
        self.assertIn('id="continuationQualityDialog"', self.html)
        self.assertIn("function normalizeQualityReview", self.javascript)
        self.assertIn("function appendQualityReviewBadge", self.javascript)
        self.assertIn('badge.textContent = "续写需复核"', self.javascript)
        self.assertIn("metadata?.quality_review", self.javascript)
        self.assertIn("qualityReviewsByVersion", self.javascript)
        self.assertIn('id="continuationQualityRetry"', self.html)
        self.assertIn("function qualityReviewCodes", self.javascript)
        self.assertIn("quality_retry_codes", self.javascript)
        self.assertIn('async function retryMessage(historyIndex, responseLengthOverride = "", qualityRetryCodes = [])', self.javascript)
        self.assertIn("await retryMessage(retryRequest.historyIndex", self.javascript)
        self.assertIn('const source = assistantMessage.bubble.dataset.source === "demo"', self.javascript)
        self.assertIn("这不是故事正文或原作答案", self.javascript)
        self.assertIn('role.textContent = getMessageSourceLabel(item) ? "未生成"', self.javascript)
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
        self.assertIn("小说知识空间**", self.javascript)
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
        self.assertIn("function getModelPreviewContext", self.javascript)
        self.assertIn("function getModelPreviewCharacter", self.javascript)
        self.assertIn("function getPreviewModelMessages", self.javascript)
        self.assertIn("const sourceQuery = getSourceQuery()", self.javascript)
        self.assertIn("原作检索查询：${sourceQuery || \"暂无查询\"}", self.javascript)
        self.assertIn("服务端会按上方查询动态检索有限片段", self.javascript)
        self.assertIn("function getModelMessageSource", self.javascript)
        self.assertIn("historyChars + content.length > serverHistoryBudget", self.javascript)
        self.assertIn("问答历史：仅保留问答消息；旧项目未标记的创作历史也会排除", self.javascript)
        self.assertIn("原作问答参考，不是剧情对话", self.javascript)
        self.assertIn("问答隔离：只发送作品 / 章节定位和原作检索依据；创作笔记未发送", self.javascript)
        self.assertIn("问答模式已排除场景计划、参考片段、剧情摘要和创作要求", self.javascript)
        self.assertIn("角色卡 ${breakdown.characterChars", self.javascript)
        self.assertIn("formatContextUsageBreakdown(breakdown)", self.javascript)
        self.assertIn("function openSummaryPreview", self.javascript)
        self.assertIn("function applySummaryPreview", self.javascript)
        self.assertIn("async function saveSummaryPreviewToMemory", self.javascript)
        self.assertIn("async function saveGeneratedMemoryNote", self.javascript)
        self.assertIn("generatedNoteIndex", self.javascript)
        self.assertIn("existingNotes.map((item, index) => index === generatedNoteIndex", self.javascript)
        self.assertIn('const novelMemoryContextHint = document.querySelector("#novelMemoryContextHint")', self.javascript)
        self.assertIn("续写会优先参考置顶记忆", self.javascript)
        self.assertIn("内容问答只依据原作", self.javascript)
        self.assertIn('id="novelMemoryContextHint"', self.html)
        self.assertIn("空间记忆写入", self.javascript)
        self.assertIn("当前摘要 ${current.length} 字", self.javascript)
        self.assertIn("messageThrough", self.javascript)
        self.assertIn("currentMessageCount !== pending.messageCount", self.javascript)
        self.assertIn("currentMessageThrough !== pending.messageThrough", self.javascript)
        self.assertIn("预览生成后已有新剧情，摘要未写入", self.javascript)
        self.assertIn('applySummaryPreviewButton.addEventListener("click", applySummaryPreview)', self.javascript)
        self.assertIn('data-workspace-view="workbench"', self.html)
        self.assertIn('data-workspace-view="home"', self.html)
        self.assertIn('data-workspace-view="library"', self.html)
        self.assertIn('id="workspacePageHome" role="tabpanel" data-workspace-page="home"', self.html)
        self.assertIn('data-workspace-page="library" aria-labelledby="libraryPageTitle">', self.html)
        self.assertIn('id="workspacePageWorkbench" role="tabpanel" aria-label="InkEcho 创作台" hidden>', self.html)
        self.assertIn('aria-selected="true" data-workspace-view="home"', self.html)
        self.assertIn('id="atlasMotionToggle"', self.html)
        self.assertNotIn('card.style.setProperty("--atlas-x"', self.javascript)
        self.assertNotIn('document.documentElement.style.setProperty("--pointer-x"', self.javascript)
        self.assertIn("function setContextPanelOpen", self.javascript)
        self.assertIn("原作依据已就绪", self.javascript)
        self.assertIn("模型服务已连接", self.javascript)
        self.assertIn("模型配置已完成", self.javascript)
        self.assertIn('const navigationKeys = new Set(["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"])', self.javascript)
        self.assertIn("nextItem.focus()", self.javascript)
        self.assertIn(".html,.htm,.docx,.epub,.pdf,.fb2", self.html)
        self.assertIn("application/x-fictionbook+xml", self.html)
        self.assertIn("text/html", self.html)
        self.assertIn("application/vnd.openxmlformats-officedocument.wordprocessingml.document", self.html)
        self.assertIn('data-workspace-view="source"', self.html)
        self.assertIn('data-workspace-view="memory"', self.html)
        self.assertIn('data-workspace-view="story"', self.html)
        self.assertIn('data-workspace-view="settings"', self.html)
        self.assertIn("const workspaceGuides", self.javascript)
        self.assertIn("function setWorkspaceView", self.javascript)
        self.assertIn("function getWorkspaceGuideState", self.javascript)
        self.assertIn("function getNovelSpaceReadiness", self.javascript)
        self.assertIn("const providerSetupHints =", self.javascript)
        self.assertIn("const providerConfigTemplates =", self.javascript)
        self.assertIn('id="providerSetupHint"', self.html)
        self.assertIn('id="copyProviderConfigTemplate"', self.html)
        self.assertIn("async function copyProviderConfigTemplate", self.javascript)
        self.assertIn("providerSetupHint.textContent = providerSetupHints[provider]", self.javascript)
        self.assertIn("const localById = new Map(novelSpaces.map", self.javascript)
        self.assertIn("internalFilename", self.javascript)
        self.assertIn("local.filename", self.javascript)
        self.assertIn("sourceFiles: Array.isArray(sourceStatus.source_files)", self.javascript)
        self.assertIn("原始文件：${sourceFiles.join(\"、\")}", self.javascript)
        self.assertIn("const sourceFileNames = Array.isArray(source.sourceFiles)", self.javascript)
        self.assertIn('sourceFileDetails.className = "novel-file-details"', self.javascript)
        self.assertIn("查看全部 ${sourceFiles.length} 个分卷", self.javascript)
        self.assertIn("const staleSourceMemory = note.sourceStale", self.javascript)
        self.assertIn("原文来源已失效，重新核对后才能置顶并用于续写", self.javascript)
        self.assertIn('data-novel-dropzone="true"', self.html)
        self.assertIn('id="novelUploadInput" type="file" multiple', self.html)
        self.assertIn("多卷合并", self.html)
        self.assertIn('document.querySelectorAll("[data-novel-dropzone]")', self.javascript)
        self.assertIn("uploadNovelFile(event.dataTransfer.files)", self.javascript)
        self.assertIn("uploadNovelFile(novelUploadInput.files)", self.javascript)
        self.assertIn("function uploadNovelFile(fileSelection)", self.javascript)
        self.assertIn("const filePayloads = []", self.javascript)
        self.assertIn("files: filePayloads", self.javascript)
        self.assertIn("localeCompare(String(right.name || \"\")", self.javascript)
        self.assertIn("is-dragging", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        self.assertIn("function renderSourcePageDiagnostics", self.javascript)
        self.assertIn("sourcePageDiagnostics.replaceChildren()", self.javascript)
        self.assertIn("function syncSourceChapterSelection", self.javascript)
        self.assertIn("尚未选择章节", self.javascript)
        self.assertNotIn("const averageChunkCharacters", self.javascript)
        self.assertNotIn("const sourceFileCount", self.javascript)
        self.assertIn("source-diagnostics-action", self.javascript)
        self.assertIn("let sourceOutlineVisibleLimit = sourceOutlineDisplayLimit", self.javascript)
        self.assertIn("source-outline-more", self.javascript)
        self.assertIn("显示更多章节", self.javascript)
        self.assertIn("sourceOutlineRemoteQuery === query && remoteTitles.includes(title)", self.javascript)
        self.assertIn('id="sourceOutlineVolumeFilter"', self.html)
        self.assertIn("function sourceOutlineVolumeTitle", self.javascript)
        self.assertIn("function populateSourceOutlineVolumeFilter", self.javascript)
        self.assertIn("按卷筛选原作章节", self.html)
        self.assertIn("sourceOutlineVolumeFilter?.addEventListener", self.javascript)
        self.assertIn('sourceOutlineList.querySelector(".source-outline-more")?.focus()', self.javascript)
        self.assertIn("选择修正版原文并重新解析", self.javascript)
        self.assertIn("去小说库恢复原文", self.javascript)
        self.assertIn("没有可检索正文", self.javascript)
        self.assertIn("续写可继续 · 内容问答暂不可用", self.javascript)
        self.assertIn("续写与内容问答均可用", self.javascript)
        self.assertIn("function prepareNovelSpaceReparse", self.javascript)
        self.assertIn("重新解析", self.javascript)
        self.assertIn("novelUploadTargetSpaceId", self.javascript)
        self.assertIn("novelUploadRetrySpaceId", self.javascript)
        self.assertIn("const replacementSpaceId = novelUploadTargetSpaceId || novelUploadRetrySpaceId", self.javascript)
        self.assertIn("if (replacementSpaceId) novelUploadRetrySpaceId = replacementSpaceId", self.javascript)
        self.assertIn("replace_existing: Boolean(targetSpace)", self.javascript)
        self.assertIn("将使用「${displayName}」重新解析并替换", self.javascript)
        self.assertIn("已取消重新解析，当前小说空间没有变化", self.javascript)
        self.assertIn("function syncWorkspaceGuide", self.javascript)
        self.assertIn("const activeWorkspaceViewStorageKey", self.javascript)
        self.assertIn("function loadWorkspaceView", self.javascript)
        self.assertIn("function persistWorkspaceView", self.javascript)
        self.assertIn("setWorkspaceView(loadWorkspaceView())", self.javascript)
        self.assertIn("先让当前小说可检索", self.javascript)
        self.assertIn("原作已加载，先确认解析状态", self.javascript)
        self.assertIn("actionView: \"library\"", self.javascript)
        self.assertIn("actionView: \"source\"", self.javascript)
        self.assertIn("function updateModeGuide", self.javascript)
        self.assertIn("contextMore.open = true", self.javascript)
        self.assertIn("modelSettings.open = true", self.javascript)
        self.assertIn("function syncWorkspacePage", self.javascript)
        self.assertIn("function syncSourcePageActions", self.javascript)
        self.assertIn("请先在小说库恢复或重新解析原文", self.javascript)
        self.assertIn("sourcePageReadButton.dataset.reading", self.javascript)
        self.assertIn("data-workspace-page=\"source\"", self.html)
        self.assertIn("data-workspace-page=\"memory\"", self.html)
        self.assertIn("data-workspace-page=\"story\"", self.html)
        self.assertIn("data-workspace-page=\"settings\"", self.html)
        self.assertIn('aria-controls="workspacePageLibrary"', self.html)
        self.assertIn('aria-controls="workspacePageMemory"', self.html)
        self.assertIn('id="workspacePageWorkbench" role="tabpanel"', self.html)
        self.assertIn('const memoryGuideSourceButton = document.querySelector("#memoryGuideSource")', self.javascript)
        self.assertIn('setWorkspaceView("memory", { announce: true, focus: true })', self.javascript)
        self.assertIn('if (activeWorkspaceView === "memory")', self.javascript)
        self.assertIn('novelMemoryComposer.scrollIntoView({ behavior: "smooth", block: "nearest" })', self.javascript)
        self.assertIn("交接边界", self.html)
        self.assertIn("sourcePagePreviewButton?.addEventListener", self.javascript)
        self.assertIn("sourcePageAskButton?.addEventListener", self.javascript)
        self.assertIn("function beginSourceQuestion", self.javascript)
        self.assertIn("围绕此处提问", self.javascript)
        self.assertIn("beginSourceQuestion(query, resultTitle)", self.javascript)
        self.assertIn("if (sourceEvidenceDialog?.open) sourceEvidenceDialog.close();", self.javascript)
        self.assertIn('beginConversationForMode("问答", { announce: false })', self.javascript)
        self.assertIn("sourcePageChapter?.value.trim()", self.javascript)
        self.assertIn("storyPageBeatsButton?.addEventListener", self.javascript)
        self.assertIn("storyContextSlot.appendChild(contextMore)", self.javascript)
        self.assertIn("characterSectionHeading.parentElement.insertBefore", self.javascript)
        self.assertIn("function loadNovelSpacesFromServer", self.javascript)
        self.assertIn("function markNovelSpaceUnavailable", self.javascript)
        self.assertIn("memory: { count: 0, updated_at: 0 }", self.javascript)
        self.assertIn("原文文件不可用，请重新上传恢复", self.javascript)
        self.assertIn("local.kind === \"uploaded\" ? markNovelSpaceUnavailable(local) : local", self.javascript)
        self.assertIn('["empty", "partial", "unavailable"].includes(readiness.filter)', self.javascript)
        self.assertIn('const recoveryIsPrimary = readiness.filter === "unavailable"', self.javascript)
        self.assertIn('recoveryButton.textContent = recoveryIsPrimary ? "恢复原文" : "重新解析"', self.javascript)
        self.assertIn('setAttribute("aria-label", `${recoveryButton.textContent}「${space.name}」`)', self.javascript)
        self.assertIn("const projectSpaceId = getActiveProject()?.novelSpaceId", self.javascript)
        self.assertIn("novelSpaces.some((space) => space.id === projectSpaceId)", self.javascript)
        self.assertIn("return defaultNovelSpaceId", self.javascript)
        self.assertIn("function uploadNovelFile", self.javascript)
        self.assertIn('preventWorkspaceMutation("上传或重新解析原文")', self.javascript)
        self.assertIn("supportedNovelFileExtensions", self.javascript)
        self.assertIn("暂不支持该文件格式，请上传 TXT、Markdown、HTML、DOCX、EPUB、FB2 或 PDF", self.javascript)
        self.assertIn('"fb2"', self.javascript)
        self.assertIn("function loadNovelUploadJob", self.javascript)
        self.assertIn("function persistNovelUploadJob", self.javascript)
        self.assertIn("function clearNovelUploadJob", self.javascript)
        self.assertIn('id="novelUploadName"', self.html)
        self.assertIn("novelUploadNameInput", self.javascript)
        self.assertIn("默认使用文件名", self.html)
        self.assertIn("safeText(novelUploadNameInput?.value, \"\", 80)", self.javascript)
        self.assertIn("function isRecoverableNovelUploadStatusError", self.javascript)
        self.assertIn("已有后台解析任务尚未确认结束", self.javascript)
        self.assertIn("不要重复上传", self.javascript)
        self.assertIn("async function resumeNovelUploadJob", self.javascript)
        self.assertIn("loadNovelSpacesFromServer().finally(() => resumeNovelUploadJob())", self.javascript)
        self.assertIn("async function readNovelFileText", self.javascript)
        self.assertIn("replace_space_id", self.javascript)
        self.assertIn("html|htm|docx|epub|fb2|pdf", self.javascript)
        self.assertIn("recoverableSpace", self.javascript)
        self.assertIn("async function readNovelFilePayload", self.javascript)
        self.assertIn("byte-preserving path", self.javascript)
        self.assertIn("typeof file?.arrayBuffer !== \"function\"", self.javascript)
        self.assertIn("return { content_base64: btoa(binary), encoding: \"binary\" };", self.javascript)
        self.assertNotIn("if (!['docx', 'epub', 'pdf'].includes(suffix)) return readNovelFileText(file);", self.javascript)
        self.assertIn("async function waitForNovelUpload", self.javascript)
        self.assertIn("payload.progress", self.javascript)
        self.assertIn("payload.stage", self.javascript)
        self.assertIn("正在解析「${fileName}」", self.javascript)
        self.assertIn("async function cancelNovelUpload", self.javascript)
        self.assertIn("async function waitForNovelCancellation", self.javascript)
        self.assertIn("UploadPollingTimeout", self.javascript)
        self.assertIn("/api/novels/upload-cancel", self.javascript)
        self.assertIn("UploadCancelled", self.javascript)
        self.assertIn("function setNovelUploadFeedback", self.javascript)
        self.assertIn('partial || empty ? "warning" : "success"', self.javascript)
        self.assertIn("章节识别有限，当前以段落片段为主", self.javascript)
        self.assertIn("可以开始阅读、问答或续写。", self.javascript)
        self.assertNotIn("个资料片段", self.javascript)
        self.assertIn("pendingNovelUploadFile", self.javascript)
        self.assertIn("上一份小说仍在解析中", self.javascript)
        self.assertIn("/api/novels/upload-status?", self.javascript)
        self.assertIn("async: true", self.javascript)
        self.assertIn("content_base64", self.javascript)
        self.assertIn("async function loadNovelSpaceMemory", self.javascript)
        self.assertIn("async function saveNovelMemory", self.javascript)
        self.assertIn("function memoryWritePayload", self.javascript)
        self.assertIn("expected_updated_at", self.javascript)
        self.assertIn("async function readMemoryWriteResponse", self.javascript)
        self.assertIn("response.status === 409", self.javascript)
        self.assertIn("空间记忆已在其他页面更新，请刷新后再保存", self.javascript)
        self.assertIn("function renderNovelMemory", self.javascript)
        self.assertIn('id="novelMemorySummary"', self.html)
        self.assertIn('id="clearNovelMemoryFilters"', self.html)
        self.assertIn('data-memory-summary-kind="source"', self.html)
        self.assertIn('data-memory-summary-kind="continuity"', self.html)
        self.assertIn("sourceMemoryCount", self.javascript)
        self.assertIn("continuityMemoryCount", self.javascript)
        self.assertIn("novelMemorySummary?.addEventListener", self.javascript)
        self.assertIn("clearNovelMemoryFiltersButton?.addEventListener", self.javascript)
        self.assertIn("清除筛选", self.html)
        self.assertIn('value="source">已核对原作', self.html)
        self.assertIn("const cachedMemory = novelMemoryCache[normalized.id]", self.javascript)
        self.assertIn("serverMemoryUpdatedAt > (Number(cachedMemory.updated_at) || 0)", self.javascript)
        self.assertIn("delete novelMemoryCache[normalized.id]", self.javascript)
        self.assertIn("novelMemorySpaceName", self.javascript)
        self.assertIn("novelMemorySpaceName.textContent = getCurrentNovelDisplayName()", self.javascript)
        self.assertIn('id="novelMemorySpaceName"', self.html)
        self.assertIn('id="sourceKnowledgePanel"', self.html)
        self.assertIn('id="modelMemoryList"', self.html)
        self.assertIn('id="modelMemoryCategory"', self.html)
        self.assertIn('id="modelMemoryChapter"', self.html)
        self.assertIn('id="clearModelMemoryFilters"', self.html)
        self.assertIn('id="sourceKnowledgeDisclosure"', self.html)
        self.assertIn('id="creativeMemoryPanel"', self.html)
        self.assertIn('data-memory-layer="source"', self.html)
        self.assertIn('data-memory-layer="creative"', self.html)
        self.assertIn('id="sourceKnowledgeSearch"', self.html)
        self.assertIn('id="reviewedMemoryBuild"', self.html)
        self.assertIn('id="reviewedMemoryMetrics"', self.html)
        self.assertIn('id="memoryEstimatedTokens"', self.html)
        self.assertIn('id="memoryTokensPerMinute"', self.html)
        self.assertIn('id="startReviewedMemoryBuild"', self.html)
        self.assertIn('id="promoteReviewedMemoryBuild"', self.html)
        self.assertIn('id="cancelReviewedMemoryBuild"', self.html)
        self.assertIn("async function loadSourceKnowledge", self.javascript)
        self.assertIn("function renderSourceKnowledge", self.javascript)
        self.assertIn("async function loadReviewedMemoryStatus", self.javascript)
        self.assertIn("async function loadReviewedMemoryPreview", self.javascript)
        self.assertIn("async function startReviewedMemoryBuild", self.javascript)
        self.assertIn("async function promoteReviewedMemoryBuild", self.javascript)
        self.assertIn("/api/novels/reviewed-memory/status?", self.javascript)
        self.assertIn("/api/novels/reviewed-memory/preview?", self.javascript)
        self.assertIn("activeModelMemoryCategory", self.javascript)
        self.assertIn("activeModelMemoryChapter", self.javascript)
        self.assertIn("filtered_count", self.javascript)
        self.assertIn("available_chapters", self.javascript)
        self.assertIn("已参与原作问答", self.javascript)
        self.assertIn("pinned: item?.pinned === true", self.javascript)
        self.assertIn("toggleNovelMemoryPinned", self.javascript)
        self.assertIn("function startNovelMemoryEdit", self.javascript)
        self.assertIn("function resetNovelMemoryEditor", self.javascript)
        self.assertIn("function hasNovelMemoryDraft", self.javascript)
        self.assertIn("function confirmNovelMemorySpaceSwitch", self.javascript)
        self.assertIn("当前空间笔记还有未保存的编辑内容", self.javascript)
        self.assertIn("if (!confirmNovelMemorySpaceSwitch(space.id)", self.javascript)
        self.assertIn("const nextSpaceId = nextProject.novelSpaceId || defaultNovelSpaceId", self.javascript)
        self.assertIn("if (!confirmNovelMemorySpaceSwitch(nextSpaceId))", self.javascript)
        self.assertIn("resetNovelMemoryEditor();\n    showToast(`已恢复", self.javascript)
        self.assertIn("confirmNovelMemorySpaceSwitch(defaultNovelSpaceId)", self.javascript)
        self.assertIn("renderNovelSpaceLibrary();", self.javascript)
        self.assertIn("更新空间笔记", self.javascript)
        self.assertIn("function closeNovelMemoryComposer", self.javascript)
        self.assertIn('id="novelMemoryComposer"', self.html)
        self.assertIn('id="openNovelMemoryComposer"', self.html)
        self.assertIn('id="startFullReviewedMemoryBuild"', self.html)
        self.assertIn('scope: fullBuild ? "full" : "pilot"', self.javascript)
        self.assertIn("正在构建全文记忆", self.javascript)
        self.assertIn('id="cancelNovelMemoryEdit"', self.html)
        self.assertIn("置顶", self.javascript)
        self.assertIn("已置顶", self.javascript)
        self.assertIn("novelMemoryKindLabels", self.javascript)
        self.assertIn('source_evidence: "原作依据"', self.javascript)
        self.assertIn('value="source_evidence"', self.html)
        self.assertIn("novelMemoryQuickTemplates", self.javascript)
        self.assertIn("function updateNovelMemoryContentCount", self.javascript)
        self.assertIn("function applyNovelMemoryTemplate", self.javascript)
        self.assertIn('data-memory-template-title="人物关系"', self.html)
        self.assertIn('id="novelMemoryContentCount"', self.html)
        self.assertIn("memory-content-count.is-near-limit", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        self.assertIn("source-evidence-save", self.javascript)
        self.assertIn("saveGeneratedMemoryNote", self.javascript)
        self.assertIn("已将原作依据保存到空间记忆", self.javascript)
        self.assertIn("maxNovelMemoryNotes", self.javascript)
        self.assertIn("空间记忆已达到 ${maxNovelMemoryNotes} 条上限", self.javascript)
        self.assertIn("空间配置包含 ${rawNotes.length} 条记忆", self.javascript)
        self.assertIn("没有符合当前搜索或来源筛选的记忆", self.javascript)
        self.assertIn("novelMemorySearchInput?.addEventListener", self.javascript)
        self.assertIn("async function deleteNovelMemory", self.javascript)
        self.assertIn("async function removeNovelSpace", self.javascript)
        self.assertIn('preventWorkspaceMutation("移除小说空间")', self.javascript)
        self.assertIn('preventWorkspaceMutation("切换小说空间")', self.javascript)
        self.assertIn('preventWorkspaceMutation("重新解析原文")', self.javascript)
        self.assertIn("function invalidateSourceRequestsForSpaceChange", self.javascript)
        self.assertIn("function workspaceRequestStillCurrent", self.javascript)
        self.assertIn("当前项目或小说空间已切换，回复未写入", self.javascript)
        self.assertIn("const requestSpaceId = getCurrentNovelSpaceId()", self.javascript)
        self.assertIn("sourceEvidenceDialog?.close()", self.javascript)
        self.assertIn("getCurrentNovelSpaceId() !== requestSpaceId", self.javascript)
        self.assertIn("async function renameNovelSpace", self.javascript)
        self.assertIn("/api/novels/rename", self.javascript)
        self.assertIn("重命名空间", self.javascript)
        self.assertIn("/api/novels/remove", self.javascript)
        self.assertIn("关联的 ${linkedProjects.length} 个创作项目会保留", self.javascript)
        self.assertIn("移除这个空间", self.javascript)
        self.assertIn("async function exportNovelSpaceConfig", self.javascript)
        self.assertIn("async function importNovelSpaceConfig", self.javascript)
        self.assertIn("function novelSpaceConfigSourceWarnings", self.javascript)
        self.assertIn("source_files", self.javascript)
        self.assertIn("原文可能不匹配", self.javascript)
        self.assertIn("inkecho-novel-space", self.javascript)
        self.assertIn("novelSpaceConfigVersion", self.javascript)
        self.assertIn("高于当前版本", self.javascript)
        self.assertIn("长期记忆格式不正确", self.javascript)
        self.assertIn("不会上传、覆盖或修改当前小说原文", self.javascript)
        self.assertIn('new TextDecoder(encoding, { fatal: true })', self.javascript)
        self.assertIn("章节单元", self.javascript)
        self.assertIn("章节识别有限", self.javascript)
        self.assertIn("source-evidence-disclosure", self.javascript)
        self.assertIn("source-evidence-summary", self.javascript)
        self.assertIn("优先核对", self.javascript)
        self.assertIn("/api/novels/upload", self.javascript)
        self.assertIn("novelSpaceId: normalizedNovelSpaceId", self.javascript)
        self.assertIn("const normalizedNovelSpaceId = safeText(novelSpaceId", self.javascript)
        self.assertIn("const isDefaultNovelSpace = normalizedNovelSpaceId === defaultNovelSpaceId", self.javascript)
        self.assertIn("genericFallbackCharacters", self.javascript)
        self.assertIn("genericFallbackConversation", self.javascript)
        self.assertIn("getCurrentNovelSpaceId() === defaultNovelSpaceId", self.javascript)
        self.assertIn("setWorkspaceView(loadWorkspaceView())", self.javascript)
        self.assertIn('data-mode="问答"', self.html)
        self.assertIn("问答:", self.javascript)
        self.assertIn("蛊真人", self.html)
        self.assertIn("蛊真人", self.javascript)
        self.assertIn("方源为什么能够重生？", self.html)
        self.assertIn('openSourceEvidence(null, query, "", "问答")', self.javascript)
        self.assertNotIn("第一卷 · 青茅山", self.html)
        self.assertIn("encoding: safeText(sourceStatus.encoding", self.javascript)
        self.assertIn("function getSourceQuery", self.javascript)
        self.assertIn("function isLowInformationSourceQuery", self.javascript)
        self.assertIn("function sourceQueryAllowsMessage", self.javascript)
        self.assertIn("function getSourceUserQueries", self.javascript)
        self.assertIn("function composeSourceQuery", self.javascript)
        self.assertIn("function getSourceQuery(mode = selectedMode)", self.javascript)
        self.assertIn("const effectiveMode = normalizeMessageMode(modeOverride)", self.javascript)
        self.assertIn("reply = fallbackReply(effectiveMode)", self.javascript)
        self.assertIn('const contextParts = mode === "问答"', self.javascript)
        self.assertIn("sourceQueryAllowsMessage(item, evidenceMode)", self.javascript)
        self.assertIn("lowInformationSourceQueries", self.javascript)
        self.assertIn("function getDraftSourceQuery", self.javascript)
        self.assertIn("previewSourceButton.addEventListener", self.javascript)
        self.assertIn("先检索原作依据", self.html)
        self.assertIn("source_query: getSourceQuery()", self.javascript)
        self.assertGreaterEqual(self.javascript.count("novel_space_id: getCurrentNovelSpaceId()"), 6)
        self.assertIn("function summarizeConversation", self.javascript)
        self.assertIn("function summarizeCurrentSceneOutcome", self.javascript)
        self.assertIn('providerSelect.addEventListener("change", async () => {', self.javascript)
        self.assertIn('readiness?.configured', self.javascript)
        self.assertIn('refreshModels({ skipReadiness: true })', self.javascript)
        self.assertIn("function renderSourceStatus", self.javascript)
        self.assertIn('const sourceKey = `${getCurrentNovelSpaceId()}:', self.javascript)
        self.assertIn("parseDiagnostics", self.javascript)
        self.assertIn("const query = novelLibrarySearchInput?.value.trim().toLocaleLowerCase()", self.javascript)
        self.assertIn("const statusFilter = novelLibraryStatusFilter?.value || \"all\"", self.javascript)
        self.assertIn("const statusCounts = spaces.reduce", self.javascript)
        self.assertIn("可检索 ${statusCounts.ready || 0}", self.javascript)
        self.assertIn("lastAccessedAt", self.javascript)
        self.assertIn("space.lastAccessedAt = Date.now()", self.javascript)
        self.assertIn("const lastAccessedDifference", self.javascript)
        self.assertGreaterEqual(self.javascript.count("const lastAccessedDifference ="), 2)
        self.assertIn("function findResumeProjectForNovelSpace", self.javascript)
        self.assertIn("点击续写将恢复最近项目", self.javascript)
        self.assertIn('continueWriting.textContent = spaceProjects.length ? "继续最近项目" : "开始续写"', self.javascript)
        self.assertIn("novel-space-projects", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        self.assertIn("let novelSpacesLoaded = false", self.javascript)
        self.assertIn("let novelSpacesLoadError = false", self.javascript)
        self.assertIn('novelSpaceList.setAttribute("aria-busy", String(!novelSpacesLoaded))', self.javascript)
        self.assertIn('novelLibraryStatusSummary.textContent = "正在读取小说知识空间……"', self.javascript)
        self.assertIn("空间服务暂不可用 · 当前显示 ${spaces.length} 个本地缓存空间", self.javascript)
        self.assertIn("暂时无法读取小说空间 · 请点击“刷新状态”重试", self.javascript)
        self.assertIn("暂时无法读取小说知识空间", self.javascript)
        self.assertIn("novelSpacesLoaded = true", self.javascript)
        self.assertIn("显示 ${filteredSpaces.length} / ${spaces.length} 个空间", self.javascript)
        self.assertIn("没有符合条件的小说空间", self.html)
        self.assertIn('for="novelUploadInput" data-novel-dropzone="true">上传新小说 · 或拖入文件', self.html)
        self.assertIn('novelLibrarySearchInput?.addEventListener("input", renderNovelSpaceLibrary)', self.javascript)
        self.assertIn('novelLibraryStatusFilter?.addEventListener("change", renderNovelSpaceLibrary)', self.javascript)
        self.assertIn('clearNovelLibraryFiltersButton?.addEventListener("click"', self.javascript)
        self.assertIn("clearNovelLibraryFiltersButton.hidden = !query && statusFilter === \"all\"", self.javascript)
        self.assertIn('refreshNovelLibraryButton?.addEventListener("click", () => loadNovelSpacesFromServer({ announce: true }).finally(() => resumeNovelUploadJob()))', self.javascript)
        self.assertIn("novel-space-parse-detail", self.javascript)
        self.assertIn("可浏览章节", self.javascript)
        self.assertIn("原作已就绪", self.javascript)
        self.assertIn("章节识别有限", self.javascript)
        self.assertIn("function normalizeSourceReferences", self.javascript)
        self.assertIn("function renderSourceReferences", self.javascript)
        self.assertIn("source_references", self.javascript)
        self.assertIn("function normalizeSourceQuality", self.javascript)
        self.assertIn("function sourceQualityLabel", self.javascript)
        self.assertIn("命中充分", self.javascript)
        self.assertIn("答案依据：${answerCoverage}", self.javascript)
        self.assertIn("检索相关性：${quality}", self.javascript)
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
        self.assertIn("function fetchSourceMetadataForFallback", self.javascript)
        self.assertIn("/api/source/search", self.javascript)
        self.assertIn("function renderSourceEvidence", self.javascript)
        self.assertIn("sourceEvidenceRecovery", self.javascript)
        self.assertIn("source-evidence-retry", self.javascript)
        self.assertIn("async function openSourceEvidence(historyIndex, savedQuery = \"\", strategyOverride = \"\", modeOverride = \"\")", self.javascript)
        self.assertIn("if (!sourceEvidenceDialog.open) sourceEvidenceDialog.showModal()", self.javascript)
        self.assertIn('const workspacePageWorkbench = document.querySelector("#workspacePageWorkbench");', self.javascript)
        self.assertIn('if (workspacePageWorkbench) workspacePageWorkbench.hidden = nextView !== "workbench";', self.javascript)
        self.assertIn('if (nextView !== "workbench" && document.body.classList.contains("focus-mode")) setFocusMode(false);', self.javascript)
        self.assertIn(".studio-grid[hidden] { display: none !important; }", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        self.assertIn("function sourceReferenceChapterTitle", self.javascript)
        self.assertIn("source-reference-chapter-button", self.javascript)
        self.assertIn("source-reference-chapter-button", (FRONTEND_ROOT / "styles.css").read_text(encoding="utf-8"))
        self.assertIn("阅读原作章节", self.javascript)
        self.assertIn('read.textContent = "阅读整章"', self.javascript)
        self.assertIn("result.chapter_title", self.javascript)
        self.assertIn("openSourceChapterReader(chapterTitle)", self.javascript)
        self.assertIn("sourceQuality = \"\"", self.javascript)
        self.assertIn("payload.source_quality || \"\"", self.javascript)
        self.assertIn("检索相关性：${quality || \"未标注\"}", self.javascript)
        self.assertIn("查看原文依据", self.html)
        self.assertIn("sourceQuery", self.javascript)
        self.assertIn("savedQuery", self.javascript)
        self.assertIn("source_query: sourceQuery", self.javascript)
        self.assertIn("原作检索未标注", self.javascript)
        self.assertIn('mode === "问答" ? "原作回答"', self.javascript)
        self.assertIn("const fallbackSource = await fetchSourceMetadataForFallback", self.javascript)
        self.assertIn("assistantMessage.renderSourceReferences(fallbackSource.references, sourceQuery, fallbackSource.quality, fallbackSource.answerCoverage)", self.javascript)
        self.assertIn("function isLegacyDemoProject", self.javascript)
        self.assertIn("function createInkEchoDefaultProject", self.javascript)
        self.assertIn("function loadProjects", self.javascript)
        self.assertIn('names.includes("林黛玉")', self.javascript)
        self.assertIn('names.includes("贾宝玉")', self.javascript)
        self.assertIn("const modePromptSets", self.javascript)
        self.assertIn("const genericModePromptSets", self.javascript)
        self.assertIn("workspaceNovelName", self.javascript)
        self.assertIn("当前小说：${getCurrentNovelDisplayName()}", self.javascript)
        self.assertIn("原文待恢复", self.javascript)
        self.assertIn('id="workspaceNovelName"', self.html)
        self.assertIn("function getCurrentNovelDisplayName", self.javascript)
        self.assertIn("const needsAttention = readiness.filter !== \"ready\"", self.javascript)
        self.assertIn("当前知识空间可用于续写与内容问答", self.javascript)
        self.assertIn("function getModeHint", self.javascript)
        self.assertIn("function getCurrentNovelAssistantName", self.javascript)
        self.assertIn("function getModePromptSet", self.javascript)
        self.assertIn("function getNovelOpeningConversation", self.javascript)
        self.assertIn("function getNovelCharacters", self.javascript)
        self.assertIn("function ensureSourceReadyForMode", self.javascript)
        self.assertIn("const readiness = getNovelSpaceReadiness(space)", self.javascript)
        self.assertIn("if (readiness.canQuery) return true", self.javascript)
        self.assertIn('readiness.filter === "empty"', self.javascript)
        self.assertIn("原文暂不可用，请先在小说库恢复原文", self.javascript)
        self.assertIn("当前小说知识空间", self.javascript)
        self.assertIn("function renderModePrompts", self.javascript)
        self.assertIn("function getConversationTitle", self.javascript)
        self.assertIn("${getCurrentNovelAssistantName()}原作问答", self.javascript)
        self.assertIn("function getAssistantDisplayName", self.javascript)
        self.assertIn("const responseName = getAssistantDisplayName(character)", self.javascript)
        self.assertIn("avatar-inkecho", self.javascript)
        self.assertIn("春秋蝉在原作中的作用", self.javascript)
        self.assertIn("青茅山三大山寨之间是什么关系", self.javascript)
        self.assertIn("pendingSummaryPreview = null", self.javascript)
        self.assertIn("function openSceneOutcomePreview", self.javascript)
        self.assertIn("function applySceneOutcomePreview", self.javascript)
        self.assertIn("async function saveSceneOutcomePreviewToMemory", self.javascript)
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
        self.assertIn("const missingHint = missingFieldsText", self.javascript)
        self.assertIn("请按下方三步修复指引完成设置", self.javascript)
        self.assertIn("async function copyProviderConfigKeys", self.javascript)
        self.assertIn("缺少项已复制", self.javascript)
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
        self.assertIn("novelSpaceId: safeText(source.novelSpaceId", self.javascript)
        self.assertIn("function normalizeCheckpoint(item, fallbackNovelSpaceId", self.javascript)
        self.assertIn("resolveImportedNovelSpaceId", self.javascript)
        self.assertIn("novelSpaceBindings", self.javascript)
        self.assertIn("novelSpaceBinding", self.javascript)
        self.assertIn("spaceConfigReminder", self.javascript)
        self.assertIn("sourceSpaceBindings", self.javascript)
        self.assertIn("findLocalNovelSpaceByBinding", self.javascript)
        self.assertIn("matchedByNameCount", self.javascript)
        self.assertIn("按小说空间名称重新关联", self.javascript)
        self.assertIn("当前设备未找到可用原文：", self.javascript)
        self.assertIn("spaceRecoveryNotice", self.javascript)
        self.assertIn("spaceRecoveryStorageKey", self.javascript)
        self.assertIn("loadSpaceRecovery", self.javascript)
        self.assertIn("resolveSpaceRecoveryUpload", self.javascript)
        self.assertIn("上传完成后，这里的待恢复列表会自动更新", self.javascript)
        self.assertIn("spaceRecoveryNotice", self.html)
        self.assertIn("上传原文", self.html)
        self.assertIn("novelMemoryLoadErrors", self.javascript)
        self.assertIn("novelMemoryLoadInFlight", self.javascript)
        self.assertIn("novelMemoryRequestIds", self.javascript)
        self.assertIn("novelMemoryRequestIds[normalizedSpaceId] !== requestId", self.javascript)
        self.assertIn("当前小说空间记忆正在读取，请稍候再保存", self.javascript)
        self.assertIn("空间记忆正在读取，请稍候再编辑。", self.javascript)
        self.assertIn("blockNovelMemoryWrite", self.javascript)
        self.assertIn("空间记忆读取失败，请先刷新小说库后再编辑", self.javascript)
        self.assertIn("空间记忆读取失败 · 请刷新小说库后重试", self.javascript)
        self.assertIn("projectBindings", self.javascript)
        self.assertIn("recoveryProjectBindings", self.javascript)
        self.assertIn("已重新关联到「${uploadedName}」空间", self.javascript)
        self.assertIn("上传后自动恢复", self.javascript)
        self.assertIn("reboundProjectCount", self.javascript)
        self.assertIn("已重绑定当前空间", self.javascript)
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
        self.assertIn("打开功能菜单", self.html)
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

    def test_model_recovery_preflight_prevents_false_connection_failures(self) -> None:
        self.assertIn("修复步骤：①", self.javascript)
        self.assertIn("②", self.javascript)
        self.assertIn("③", self.javascript)
        self.assertIn("function providerRecoveryMessage", self.javascript)
        self.assertIn("请按下方三步修复指引完成设置", self.javascript)
        self.assertIn("async function refreshModels(options = {})", self.javascript)
        self.assertIn("const skipReadiness = options?.skipReadiness === true", self.javascript)
        self.assertIsNotNone(re.search(
            r"async function refreshModels\(options = \{\}\).*?await checkProviderHealth\(provider\).*?"
            r"if \(!readiness\?\.configured\) \{.*?return;.*?/api/models",
            self.javascript,
            re.S,
        ))
        self.assertIsNotNone(re.search(
            r"async function testProviderConnection\(\).*?await checkProviderHealth\(provider\).*?"
            r"if \(!readiness\?\.configured\) \{.*?return;.*?/api/probe",
            self.javascript,
            re.S,
        ))
        self.assertIsNotNone(re.search(
            r'providerSelect\.addEventListener\("change", async \(\) => \{.*?'
            r"const readiness = await updateProviderUI\(\).*?readiness\?\.configured.*?"
            r"refreshModels\(\{ skipReadiness: true \}\)",
            self.javascript,
            re.S,
        ))
        self.assertNotIn("离线演示", self.javascript)

    def test_answer_coverage_is_persisted_separately_from_retrieval_quality(self) -> None:
        self.assertIn("function normalizeSourceAnswerCoverage", self.javascript)
        self.assertIn("function sourceAnswerCoverageLabel", self.javascript)
        self.assertIn('answer: "找到答案陈述"', self.javascript)
        self.assertIn('related: "仅主题相关"', self.javascript)
        self.assertIn("metadata?.source_answer_coverage", self.javascript)
        self.assertIn("assistantMessage.sourceAnswerCoverage = effectiveSourceAnswerCoverage", self.javascript)
        self.assertIn("sourceAnswerCoveragesByVersion", self.javascript)
        self.assertIn("versionSourceAnswerCoveragesByVersion", self.javascript)
        self.assertIn("sourceAnswerCoverage: item.sourceAnswerCoverage", self.javascript)
        self.assertIn("答案依据：${answerCoverage}", self.javascript)
        self.assertIn("检索相关性：${quality}", self.javascript)
        self.assertIn("找到了相关片段，但还没有明确答案句", self.javascript)

    def test_qa_evidence_query_is_not_silently_scoped_to_writing_chapter(self) -> None:
        self.assertIsNotNone(re.search(
            r'function sourceQueryForHistoryIndex\(.*?'
            r'const contextParts = evidenceMode === "问答"\s*\? \[\]\s*'
            r': \[project\?\.context\?\.chapter, activeBeat\?\.title, activeBeat\?\.goal\]',
            self.javascript,
            re.S,
        ))
        self.assertIsNotNone(re.search(
            r'function composeSourceQuery\(.*?'
            r'const contextParts = mode === "问答"\s*\? \[\]\s*'
            r': \[project\?\.context\?\.chapter, activeBeat\?\.title, activeBeat\?\.goal\]',
            self.javascript,
            re.S,
        ))


if __name__ == "__main__":
    unittest.main()
