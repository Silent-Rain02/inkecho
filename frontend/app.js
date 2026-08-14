const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const messageInput = document.querySelector("#messageInput");
const messageCount = document.querySelector("#messageCount");
const conversationTitle = document.querySelector("#conversationTitle");
const conversationContext = document.querySelector("#conversationContext");
const toggleContextPanelButton = document.querySelector("#toggleContextPanel");
const sourceReadinessButton = document.querySelector("#sourceReadinessButton");
const sourceReadinessText = document.querySelector("#sourceReadinessText");
const modelReadinessButton = document.querySelector("#modelReadinessButton");
const modelReadinessText = document.querySelector("#modelReadinessText");
const conversationMenuButton = document.querySelector("#conversationMenuButton");
const conversationMenu = document.querySelector("#conversationMenu");
const toggleConversationHistoryButton = document.querySelector("#toggleConversationHistory");
const conversationHistoryPanel = document.querySelector("#conversationHistoryPanel");
const conversationHistoryCount = document.querySelector("#conversationHistoryCount");
const conversationHistoryList = document.querySelector("#conversationHistoryList");
const openArchiveFromHistoryButton = document.querySelector("#openArchiveFromHistory");
const copyConversationButton = document.querySelector("#copyConversation");
const exportFromMenuButton = document.querySelector("#exportFromMenu");
const exportProjectJsonButton = document.querySelector("#exportProjectJson");
const copyProjectHandoffButton = document.querySelector("#copyProjectHandoff");
const downloadProjectHandoffButton = document.querySelector("#downloadProjectHandoff");
const openCommandPaletteButton = document.querySelector("#openCommandPalette");
const commandPaletteDialog = document.querySelector("#commandPaletteDialog");
const commandPaletteSearch = document.querySelector("#commandPaletteSearch");
const commandPaletteList = document.querySelector("#commandPaletteList");
const commandPaletteHint = document.querySelector("#commandPaletteHint");
const resetFromMenuButton = document.querySelector("#resetFromMenu");
const saveCheckpointFromMenuButton = document.querySelector("#saveCheckpointFromMenu");
const openCheckpointsButton = document.querySelector("#openCheckpoints");
const searchConversationButton = document.querySelector("#searchConversationButton");
const conversationSearch = document.querySelector("#conversationSearch");
const conversationSearchInput = document.querySelector("#conversationSearchInput");
const conversationSearchCount = document.querySelector("#conversationSearchCount");
const searchArchivedMessagesButton = document.querySelector("#searchArchivedMessages");
const clearConversationSearchButton = document.querySelector("#clearConversationSearch");
const taskStarters = document.querySelector("#taskStarters");
const taskStarterList = document.querySelector("#taskStarterList");
const composerHint = document.querySelector("#composerHint");
const toast = document.querySelector("#toast");
const contextUsage = document.querySelector("#contextUsage");
const contextDialog = document.querySelector("#contextDialog");
const contextPreviewStats = document.querySelector("#contextPreviewStats");
const contextPreviewText = document.querySelector("#contextPreviewText");
const copyContextPreviewButton = document.querySelector("#copyContextPreview");
const sceneOutcomePreviewDialog = document.querySelector("#sceneOutcomePreviewDialog");
const sceneOutcomePreviewStats = document.querySelector("#sceneOutcomePreviewStats");
const currentSceneOutcomePreview = document.querySelector("#currentSceneOutcomePreview");
const nextSceneOutcomePreview = document.querySelector("#nextSceneOutcomePreview");
const saveSceneOutcomeToMemoryButton = document.querySelector("#saveSceneOutcomeToMemory");
const applySceneOutcomePreviewButton = document.querySelector("#applySceneOutcomePreview");
const summaryPreviewDialog = document.querySelector("#summaryPreviewDialog");
const summaryPreviewStats = document.querySelector("#summaryPreviewStats");
const currentSummaryPreview = document.querySelector("#currentSummaryPreview");
const nextSummaryPreview = document.querySelector("#nextSummaryPreview");
const saveSummaryToMemoryButton = document.querySelector("#saveSummaryToMemory");
const applySummaryPreviewButton = document.querySelector("#applySummaryPreview");
const characterList = document.querySelector("#characterList");
const manageCharacterButton = document.querySelector("#manageCharacter");
const characterDialog = document.querySelector("#characterDialog");
const characterForm = document.querySelector("#characterForm");
const characterNameInput = document.querySelector("#characterNameInput");
const characterToneInput = document.querySelector("#characterToneInput");
const characterDetailsInput = document.querySelector("#characterDetailsInput");
const deleteCharacterButton = document.querySelector("#deleteCharacter");
const cancelCharacterButton = document.querySelector("#cancelCharacter");
const openCharacterLibraryButton = document.querySelector("#openCharacterLibrary");
const characterLibraryDialog = document.querySelector("#characterLibraryDialog");
const characterLibrarySearch = document.querySelector("#characterLibrarySearch");
const characterLibraryCount = document.querySelector("#characterLibraryCount");
const characterLibraryList = document.querySelector("#characterLibraryList");
const saveSelectedCharacterButton = document.querySelector("#saveSelectedCharacter");
const closeCharacterLibraryButton = document.querySelector("#closeCharacterLibrary");
const providerSelect = document.querySelector("#providerSelect");
const modelName = document.querySelector("#modelName");
const providerBadge = document.querySelector("#providerBadge");
const providerDescription = document.querySelector("#providerDescription");
const providerSetupHint = document.querySelector("#providerSetupHint");
const providerDataBoundary = document.querySelector("#providerDataBoundary");
const refreshModelsButton = document.querySelector("#refreshModels");
const testProviderButton = document.querySelector("#testProvider");
const modelOptions = document.querySelector("#modelOptions");
const openProviderDiagnosticsButton = document.querySelector("#openProviderDiagnostics");
const copyProviderConfigKeysButton = document.querySelector("#copyProviderConfigKeys");
const copyProviderConfigTemplateButton = document.querySelector("#copyProviderConfigTemplate");
const saveModelConfigButton = document.querySelector("#saveModelConfig");
const providerDiagnosticsDialog = document.querySelector("#providerDiagnosticsDialog");
const providerDiagnosticsStats = document.querySelector("#providerDiagnosticsStats");
const providerDiagnosticsText = document.querySelector("#providerDiagnosticsText");
const copyProviderDiagnosticsButton = document.querySelector("#copyProviderDiagnostics");
const providerDataConsentDialog = document.querySelector("#providerDataConsentDialog");
const providerDataConsentDescription = document.querySelector("#providerDataConsentDescription");
const providerDataConsentService = document.querySelector("#providerDataConsentService");
const providerDataConsentDetail = document.querySelector("#providerDataConsentDetail");
const cancelProviderDataConsentButton = document.querySelector("#cancelProviderDataConsent");
const confirmProviderDataConsentButton = document.querySelector("#confirmProviderDataConsent");
const sourceEvidenceDialog = document.querySelector("#sourceEvidenceDialog");
const sourceEvidenceStats = document.querySelector("#sourceEvidenceStats");
const sourceEvidenceRecovery = document.querySelector("#sourceEvidenceRecovery");
const sourceEvidenceList = document.querySelector("#sourceEvidenceList");
const copySourceEvidenceButton = document.querySelector("#copySourceEvidence");
const continuationQualityDialog = document.querySelector("#continuationQualityDialog");
const continuationQualitySummary = document.querySelector("#continuationQualitySummary");
const continuationQualityList = document.querySelector("#continuationQualityList");
const continuationQualityRetryButton = document.querySelector("#continuationQualityRetry");
const sourceChapterReaderDialog = document.querySelector("#sourceChapterReaderDialog");
const sourceChapterReaderTitle = document.querySelector("#sourceChapterReaderTitle");
const sourceChapterReaderStats = document.querySelector("#sourceChapterReaderStats");
const sourceChapterReaderText = document.querySelector("#sourceChapterReaderText");
const sourceChapterPreviousButton = document.querySelector("#sourceChapterPrevious");
const sourceChapterNextButton = document.querySelector("#sourceChapterNext");
const sourceChapterAskButton = document.querySelector("#sourceChapterAsk");
const copySourceChapterButton = document.querySelector("#copySourceChapter");
const sourceChapterDigest = document.querySelector("#sourceChapterDigest");
const sourceChapterDigestStatus = document.querySelector("#sourceChapterDigestStatus");
const sourceChapterDigestText = document.querySelector("#sourceChapterDigestText");
const generateSourceChapterDigestButton = document.querySelector("#generateSourceChapterDigest");
const saveSourceChapterDigestButton = document.querySelector("#saveSourceChapterDigest");
const creativitySelect = document.querySelector("#creativitySelect");
const creativityValue = document.querySelector("#creativityValue");
const responseLengthSelect = document.querySelector("#responseLengthSelect");
const responseLengthValue = document.querySelector("#responseLengthValue");
const previewSourceButton = document.querySelector("#previewSource");
const sendButton = document.querySelector(".send-button");
const draftStatus = document.querySelector("#draftStatus");
const toggleFocusModeButton = document.querySelector("#toggleFocusMode");
const toggleThemeButton = document.querySelector("#toggleTheme");
const projectSelect = document.querySelector("#projectSelect");
const projectSearchInput = document.querySelector("#projectSearch");
const projectStatusFilter = document.querySelector("#projectStatusFilter");
const projectSearchCount = document.querySelector("#projectSearchCount");
const projectLineage = document.querySelector("#projectLineage");
const projectHealth = document.querySelector("#projectHealth");
const projectHealthAction = document.querySelector("#projectHealthAction");
const newProjectButton = document.querySelector("#newProject");
const duplicateProjectButton = document.querySelector("#duplicateProject");
const exportProjectsButton = document.querySelector("#exportProjects");
const importProjectsButton = document.querySelector("#importProjects");
const projectBackupFile = document.querySelector("#projectBackupFile");
const storageStatus = document.querySelector("#storageStatus");
const deleteProjectButton = document.querySelector("#deleteProject");
const sourceStatus = document.querySelector("#sourceStatus");
const sourceChapterOptions = document.querySelector("#sourceChapterOptions");
const sourceOutlineHint = document.querySelector("#sourceOutlineHint");
const workChapter = document.querySelector("#workChapter");
const contextMore = document.querySelector("#contextMore");
const modelSettings = document.querySelector("#modelSettings");
const workReference = document.querySelector("#workReference");
const workSummary = document.querySelector("#workSummary");
const summaryFreshness = document.querySelector("#summaryFreshness");
const workInstructions = document.querySelector("#workInstructions");
const generateSummaryButton = document.querySelector("#generateSummary");
const toggleContextModeButton = document.querySelector("#toggleContextMode");
const referenceCount = document.querySelector("#referenceCount");
const importReferenceButton = document.querySelector("#importReference");
const referenceFile = document.querySelector("#referenceFile");
const promptList = document.querySelector("#promptList");
const highlightList = document.querySelector("#highlightList");
const highlightCount = document.querySelector("#highlightCount");
const appendHighlightsButton = document.querySelector("#appendHighlightsToSummary");
const copyHighlightsButton = document.querySelector("#copyHighlights");
const addPromptButton = document.querySelector("#addPrompt");
const openPromptLibraryButton = document.querySelector("#openPromptLibrary");
const promptDialog = document.querySelector("#promptDialog");
const promptForm = document.querySelector("#promptForm");
const promptDialogTitle = document.querySelector("#promptDialogTitle");
const promptTitleInput = document.querySelector("#promptTitleInput");
const promptTextInput = document.querySelector("#promptTextInput");
const savePromptToLibraryCheckbox = document.querySelector("#savePromptToLibrary");
const cancelPromptButton = document.querySelector("#cancelPrompt");
const promptLibraryDialog = document.querySelector("#promptLibraryDialog");
const promptLibrarySearch = document.querySelector("#promptLibrarySearch");
const promptLibraryCount = document.querySelector("#promptLibraryCount");
const promptLibraryList = document.querySelector("#promptLibraryList");
const closePromptLibraryButton = document.querySelector("#closePromptLibrary");
const openTemplatesButton = document.querySelector("#openTemplates");
const templateDialog = document.querySelector("#templateDialog");
const templateList = document.querySelector("#templateList");
const cancelTemplateButton = document.querySelector("#cancelTemplate");
const saveCurrentTemplateButton = document.querySelector("#saveCurrentTemplate");
const manageBeatsButton = document.querySelector("#manageBeats");
const activeBeatHint = document.querySelector("#activeBeatHint");
const beatCount = document.querySelector("#beatCount");
const copyScenePlanButton = document.querySelector("#copyScenePlan");
const advanceBeatButton = document.querySelector("#advanceBeat");
const beatDialog = document.querySelector("#beatDialog");
const beatForm = document.querySelector("#beatForm");
const beatDialogTitle = document.querySelector("#beatDialogTitle");
const beatTitleInput = document.querySelector("#beatTitleInput");
const beatGoalInput = document.querySelector("#beatGoalInput");
const beatOutcomeInput = document.querySelector("#beatOutcomeInput");
const beatSearchInput = document.querySelector("#beatSearchInput");
const beatStatusFilter = document.querySelector("#beatStatusFilter");
const focusCurrentBeatButton = document.querySelector("#focusCurrentBeat");
const beatListCount = document.querySelector("#beatListCount");
const generateBeatOutcomeButton = document.querySelector("#generateBeatOutcome");
const beatStatusInput = document.querySelector("#beatStatusInput");
const beatList = document.querySelector("#beatList");
const beatProgressText = document.querySelector("#beatProgressText");
const beatProgressPercent = document.querySelector("#beatProgressPercent");
const beatProgressBar = document.querySelector("#beatProgressBar");
const cancelBeatButton = document.querySelector("#cancelBeat");
const checkpointDialog = document.querySelector("#checkpointDialog");
const checkpointList = document.querySelector("#checkpointList");
const checkpointSearchInput = document.querySelector("#checkpointSearchInput");
const checkpointCount = document.querySelector("#checkpointCount");
const quickSaveCheckpointButton = document.querySelector("#quickSaveCheckpoint");
const checkpointCompareDialog = document.querySelector("#checkpointCompareDialog");
const checkpointCompareStats = document.querySelector("#checkpointCompareStats");
const checkpointCompareText = document.querySelector("#checkpointCompareText");
const copyCheckpointCompareButton = document.querySelector("#copyCheckpointCompare");
const closeCheckpointButton = document.querySelector("#closeCheckpoint");
const openArchiveHistoryButton = document.querySelector("#openArchiveHistory");
const archiveDialog = document.querySelector("#archiveDialog");
const archiveSearchInput = document.querySelector("#archiveSearchInput");
const archiveCount = document.querySelector("#archiveCount");
const archiveList = document.querySelector("#archiveList");
const closeArchiveButton = document.querySelector("#closeArchive");
const clearArchiveButton = document.querySelector("#clearArchive");
const workspaceNavItems = Array.from(document.querySelectorAll(".workspace-nav-item"));
const workspaceNavMore = document.querySelector("#workspaceNavMore");
const workspacePageWorkbench = document.querySelector("#workspacePageWorkbench");
const workspaceGuideKicker = document.querySelector("#workspaceGuideKicker");
const workspaceNovelName = document.querySelector("#workspaceNovelName");
const workspaceGuideTitle = document.querySelector("#workspaceGuideTitle");
const workspaceGuideDescription = document.querySelector("#workspaceGuideDescription");
const workspaceGuideAction = document.querySelector("#workspaceGuideAction");
const workspaceGuideStatusSummary = document.querySelector("#workspaceGuideStatusSummary");
const workspaceGuideProgress = document.querySelector("#workspaceGuideProgress");
const workspaceGuideAskAction = document.querySelector("#workspaceGuideAskAction");
const workspaceGuideWriteAction = document.querySelector("#workspaceGuideWriteAction");
const workspaceGuideSourceAction = document.querySelector("#workspaceGuideSourceAction");
const atlasHomeNovelName = document.querySelector("#atlasHomeNovelName");
const atlasHomeSourceStatus = document.querySelector("#atlasHomeSourceStatus");
const atlasHomeSourceStats = document.querySelector("#atlasHomeSourceStats");
const atlasMotionToggle = document.querySelector("#atlasMotionToggle");
const modeGuideIcon = document.querySelector("#modeGuideIcon");
const modeGuideKicker = document.querySelector("#modeGuideKicker");
const modeGuideTitle = document.querySelector("#modeGuideTitle");
const modeGuideDescription = document.querySelector("#modeGuideDescription");
const modeGuideAction = document.querySelector("#modeGuideAction");
const advancedModeDisclosure = document.querySelector("#advancedModeDisclosure");
const sourcePageStatus = document.querySelector("#sourcePageStatus");
const sourcePageDiagnostics = document.querySelector("#sourcePageDiagnostics");
const sourcePageChapter = document.querySelector("#sourcePageChapter");
const sourceChapterSelection = document.querySelector("#sourceChapterSelection");
const sourceEvidenceQueryInput = document.querySelector("#sourceEvidenceQuery");
const workspaceNovelSelect = document.querySelector("#workspaceNovelSelect");
const sourceOutlineSearchInput = document.querySelector("#sourceOutlineSearch");
const sourceOutlineVolumeFilter = document.querySelector("#sourceOutlineVolumeFilter");
const sourceOutlineBrowserStatus = document.querySelector("#sourceOutlineBrowserStatus");
const sourceOutlineClearButton = document.querySelector("#sourceOutlineClear");
const sourceOutlineList = document.querySelector("#sourceOutlineList");
const retrievalStrategySelect = document.querySelector("#retrievalStrategy");
const sourcePagePreviewButton = document.querySelector("#sourcePagePreview");
const sourcePageReadButton = document.querySelector("#sourcePageRead");
const sourcePageAskButton = document.querySelector("#sourcePageAsk");
const memoryGuideSourceButton = document.querySelector("#memoryGuideSource");
const storyPageBeatCount = document.querySelector("#storyPageBeatCount");
const storyPageBeatsButton = document.querySelector("#storyPageBeats");
const storyPageCharactersButton = document.querySelector("#storyPageCharacters");
const storyPageSummaryButton = document.querySelector("#storyPageSummary");
const storyPageCheckpointsButton = document.querySelector("#storyPageCheckpoints");
const storyContextSlot = document.querySelector("#storyContextSlot");
const characterSectionHeading = document.querySelector("#characterSectionHeading");
const settingsPageSlot = document.querySelector("#settingsPageSlot");
const sidebarFooter = document.querySelector(".sidebar-footer");
const novelSpaceList = document.querySelector("#novelSpaceList");
const novelLibraryCount = document.querySelector("#novelLibraryCount");
const novelLibraryStatusSummary = document.querySelector("#novelLibraryStatusSummary");
const novelLibraryEmpty = document.querySelector("#novelLibraryEmpty");
const novelLibraryNoResults = document.querySelector("#novelLibraryNoResults");
const novelLibrarySearchInput = document.querySelector("#novelLibrarySearch");
const novelLibraryStatusFilter = document.querySelector("#novelLibraryStatus");
const clearNovelLibraryFiltersButton = document.querySelector("#clearNovelLibraryFilters");
const spaceRecoveryNotice = document.querySelector("#spaceRecoveryNotice");
const spaceRecoveryTitle = document.querySelector("#spaceRecoveryTitle");
const spaceRecoveryDescription = document.querySelector("#spaceRecoveryDescription");
const spaceRecoveryTargetField = document.querySelector("#spaceRecoveryTargetField");
const spaceRecoveryTargetSelect = document.querySelector("#spaceRecoveryTarget");
const dismissSpaceRecoveryButton = document.querySelector("#dismissSpaceRecovery");
const novelUploadInput = document.querySelector("#novelUploadInput");
const novelUploadNameInput = document.querySelector("#novelUploadName");
const refreshNovelLibraryButton = document.querySelector("#refreshNovelLibrary");
const exportNovelSpaceConfigButton = document.querySelector("#exportNovelSpaceConfig");
const novelSpaceConfigInput = document.querySelector("#novelSpaceConfigInput");
const novelUploadFeedback = document.querySelector("#novelUploadFeedback");
const novelUploadFeedbackText = document.querySelector("#novelUploadFeedbackText");
const novelUploadCancelButton = document.querySelector("#novelUploadCancel");
const novelUploadRetryButton = document.querySelector("#novelUploadRetry");
const novelMemoryTitleInput = document.querySelector("#novelMemoryTitle");
const novelMemoryContentInput = document.querySelector("#novelMemoryContent");
const novelMemoryContentCount = document.querySelector("#novelMemoryContentCount");
const novelMemoryComposer = document.querySelector("#novelMemoryComposer");
const novelMemoryComposerTitle = document.querySelector("#novelMemoryComposerTitle");
const openNovelMemoryComposerButton = document.querySelector("#openNovelMemoryComposer");
const closeNovelMemoryComposerButton = document.querySelector("#closeNovelMemoryComposer");
const saveNovelMemoryButton = document.querySelector("#saveNovelMemory");
const cancelNovelMemoryEditButton = document.querySelector("#cancelNovelMemoryEdit");
const novelMemorySpaceName = document.querySelector("#novelMemorySpaceName");
const novelMemoryCount = document.querySelector("#novelMemoryCount");
const refreshNovelMemoryButton = document.querySelector("#refreshNovelMemory");
const removeStaleNovelMemoryButton = document.querySelector("#removeStaleNovelMemory");
const novelMemorySearchInput = document.querySelector("#novelMemorySearch");
const novelMemoryKindFilter = document.querySelector("#novelMemoryKindFilter");
const clearNovelMemoryFiltersButton = document.querySelector("#clearNovelMemoryFilters");
const novelMemorySummary = document.querySelector("#novelMemorySummary");
const novelMemoryContextHint = document.querySelector("#novelMemoryContextHint");
const novelMemoryList = document.querySelector("#novelMemoryList");
const previewNovelMemoryButton = document.querySelector("#previewNovelMemory");
const novelMemoryPreview = document.querySelector("#novelMemoryPreview");
const novelMemoryPreviewTitle = document.querySelector("#novelMemoryPreviewTitle");
const novelMemoryPreviewStatus = document.querySelector("#novelMemoryPreviewStatus");
const novelMemoryPreviewList = document.querySelector("#novelMemoryPreviewList");
const memoryLayerTabs = Array.from(document.querySelectorAll("[data-memory-layer]"));
const sourceKnowledgePanel = document.querySelector("#sourceKnowledgePanel");
const creativeMemoryPanel = document.querySelector("#creativeMemoryPanel");
const sourceKnowledgeSearchInput = document.querySelector("#sourceKnowledgeSearch");
const sourceKnowledgeCount = document.querySelector("#sourceKnowledgeCount");
const sourceKnowledgeSummary = document.querySelector("#sourceKnowledgeSummary");
const sourceKnowledgeHint = document.querySelector("#sourceKnowledgeHint");
const sourceKnowledgeList = document.querySelector("#sourceKnowledgeList");
const modelMemoryCount = document.querySelector("#modelMemoryCount");
const modelMemoryLive = document.querySelector("#modelMemoryLive");
const modelMemoryHint = document.querySelector("#modelMemoryHint");
const modelMemoryCategory = document.querySelector("#modelMemoryCategory");
const modelMemoryChapter = document.querySelector("#modelMemoryChapter");
const modelMemoryChapterOptions = document.querySelector("#modelMemoryChapterOptions");
const clearModelMemoryFiltersButton = document.querySelector("#clearModelMemoryFilters");
const modelMemoryList = document.querySelector("#modelMemoryList");
const sourceKnowledgeDisclosure = document.querySelector("#sourceKnowledgeDisclosure");
const reviewedMemoryBuild = document.querySelector("#reviewedMemoryBuild");
const reviewedMemoryBuildTitle = document.querySelector("#reviewedMemoryBuildTitle");
const reviewedMemoryBuildDescription = document.querySelector("#reviewedMemoryBuildDescription");
const reviewedMemoryProgress = document.querySelector("#reviewedMemoryProgress");
const reviewedMemoryProgressBar = document.querySelector("#reviewedMemoryProgressBar");
const reviewedMemoryMetrics = document.querySelector("#reviewedMemoryMetrics");
const memoryTokensSpent = document.querySelector("#memoryTokensSpent");
const memoryTokensSpentLabel = document.querySelector("#memoryTokensSpentLabel");
const memoryElapsedTime = document.querySelector("#memoryElapsedTime");
const memoryEstimatedTokens = document.querySelector("#memoryEstimatedTokens");
const memoryTokensPerMinute = document.querySelector("#memoryTokensPerMinute");
const memoryEstimatedFinish = document.querySelector("#memoryEstimatedFinish");
const startReviewedMemoryBuildButton = document.querySelector("#startReviewedMemoryBuild");
const startFullReviewedMemoryBuildButton = document.querySelector("#startFullReviewedMemoryBuild");
const promoteReviewedMemoryBuildButton = document.querySelector("#promoteReviewedMemoryBuild");
const cancelReviewedMemoryBuildButton = document.querySelector("#cancelReviewedMemoryBuild");

const novelMemoryQuickTemplates = {
  人物关系: "人物 / 势力：\n关系变化：\n已确认依据：\n创作时需要保持：",
  世界规则: "规则名称：\n作用与限制：\n代价 / 例外：\n创作时需要保持：",
  二创约定: "本项目约定：\n必须保留：\n禁止改变：\n允许探索：",
};
const conversationStorageKey = "inkecho.conversation.v1";
const workspaceStorageKey = "inkecho.workspace.v1";
const serviceStorageKey = "inkecho.service.v1";
const projectsStorageKey = "inkecho.projects.v1";
const customTemplatesStorageKey = "inkecho.templates.v1";
const characterLibraryStorageKey = "inkecho.character-library.v1";
const promptLibraryStorageKey = "inkecho.prompt-library.v1";
const activeProjectStorageKey = "inkecho.active-project.v1";
const focusModeStorageKey = "inkecho.focus-mode.v1";
const themeStorageKey = "inkecho.theme.v1";
const novelSpacesStorageKey = "inkecho.novel-spaces.v1";
const activeNovelSpaceStorageKey = "inkecho.active-novel-space.v1";
const spaceRecoveryStorageKey = "inkecho.space-recovery.v1";
const novelUploadJobStorageKey = "inkecho.novel-upload-job.v1";
const retrievalStrategyStorageKey = "inkecho.retrieval-strategy.v1";
const retrievalStrategyBySpaceStorageKey = "inkecho.retrieval-strategy-by-space.v1";
const activeWorkspaceViewStorageKey = "inkecho.active-workspace-view.v2";
const contextPanelOpenStorageKey = "inkecho.context-panel-open.v1";
const providerDataConsentStorageKey = "inkecho.provider-data-consent.v1";
const novelSpaceConfigVersion = 1;
const defaultNovelSpaceId = "default-source";
const defaultCharacters = [
  { name: "方源", tone: "冷静、决绝、善于权衡利弊，不被表面道德束缚。", details: "拥有漫长人生经验和明确目标，擅长在资源、风险与人心之间做取舍；不轻易被情绪改变判断。" },
  { name: "白凝冰", tone: "锋利、骄傲、追求极致，常以强硬掩饰真实情绪。", details: "天资出众、意志强烈，习惯以竞争和行动证明自己；对力量与自由有近乎极端的追求。" },
];

const modeHints = {
  续写: "续写《蛊真人》的这一段故事……",
  问答: "询问《蛊真人》的角色、蛊虫、势力或剧情……",
  改写: "告诉我想改写的情节……",
  独白: "让角色说出心里话……",
};

const retrievalStrategyLabels = {
  balanced: "综合查找",
  chapter_first: "优先按章节",
  entity_first: "优先按人物与设定",
  broad: "扩大查找范围",
};
const supportedNovelFileExtensions = new Set(["", "txt", "md", "markdown", "html", "htm", "docx", "epub", "fb2", "pdf"]);

function normalizeRetrievalStrategy(value) {
  const strategy = String(value || "balanced").trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(retrievalStrategyLabels, strategy) ? strategy : "balanced";
}

function normalizeChapterLocator(value) {
  const text = typeof value === "string" ? value.trim() : "";
  return /^\[object\s+(?:Mouse|Pointer)?Event\]$/i.test(text) ? "" : text;
}

function retrievalStrategySpaceId(spaceId = "") {
  if (spaceId) return String(spaceId);
  try {
    return localStorage.getItem(activeNovelSpaceStorageKey) || activeNovelSpaceId || defaultNovelSpaceId;
  } catch {
    return activeNovelSpaceId || defaultNovelSpaceId;
  }
}

function loadRetrievalStrategy(spaceId = "") {
  try {
    const savedBySpace = JSON.parse(localStorage.getItem(retrievalStrategyBySpaceStorageKey) || "null");
    const scoped = savedBySpace && typeof savedBySpace === "object"
      ? savedBySpace[retrievalStrategySpaceId(spaceId)]
      : "";
    if (scoped) return normalizeRetrievalStrategy(scoped);
    // Migrate the early global preference into the currently selected space.
    return normalizeRetrievalStrategy(localStorage.getItem(retrievalStrategyStorageKey));
  } catch {
    notifyStorageIssue();
    return "balanced";
  }
}

function persistRetrievalStrategy() {
  try {
    const saved = JSON.parse(localStorage.getItem(retrievalStrategyBySpaceStorageKey) || "{}");
    const next = saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    next[retrievalStrategySpaceId()] = getRetrievalStrategy();
    localStorage.setItem(retrievalStrategyBySpaceStorageKey, JSON.stringify(next));
    updateStorageStatus();
  } catch {
    notifyStorageIssue();
  }
}

function getRetrievalStrategy() {
  return normalizeRetrievalStrategy(retrievalStrategy);
}

function syncRetrievalStrategy() {
  if (retrievalStrategySelect) retrievalStrategySelect.value = getRetrievalStrategy();
}

const modeGuides = {
  续写: {
    icon: "↗",
    kicker: "续写流程 · 01",
    title: "先确定承接位置，再写下一幕",
    description: "选择章节或场景，补充你希望故事如何继续；角色卡和场景计划会帮助保持连续。",
    action: "设置承接位置",
  },
  问答: {
    icon: "?",
    kicker: "问答流程 · 01",
    title: "先提问，再核对原作依据",
    description: "问题会优先检索本地《蛊真人》资料库，回答会区分原作事实、合理推断与无法确认。",
    action: "查看原作依据",
  },
  改写: {
    icon: "↗",
    kicker: "改写流程 · 01",
    title: "保留人物心性，明确想改变的部分",
    description: "可以直接粘贴片段，或说明想调整的语气、节奏和剧情结果。",
    action: "添加参考片段",
  },
  独白: {
    icon: "✦",
    kicker: "独白流程 · 01",
    title: "选择角色，让他面对一个问题",
    description: "角色卡会决定说话方式；输入一个秘密、困境或无法承认的选择即可开始。",
    action: "选择角色",
  },
};

const workspaceGuides = {
  home: {
    kicker: "当前工作区 · STORY ATLAS",
    title: "从此刻最想完成的任务开始",
    description: "续写、问答、原作与记忆共享同一个小说知识空间。",
    action: "返回故事星图",
  },
  library: {
    kicker: "当前工作区 · NOVEL LIBRARY",
    title: "先选择一本小说，再开始创作",
    description: "每本小说都有独立的知识空间、原作记忆和创作项目。",
    action: "查看当前小说 →",
  },
  workbench: {
    kicker: "当前工作区 · WORKBENCH",
    title: "从一个问题或下一幕开始",
    description: "续写与内容问答是 InkEcho 的两条主线，其他设置会在需要时出现。",
    action: "进入创作 →",
  },
  source: {
    kicker: "当前工作区 · SOURCE LIBRARY",
    title: "先查清原作，再决定如何继续",
    description: "章节定位、原文检索和引用依据集中在这里，结果不会写入项目记录。",
    action: "定位原作资料",
  },
  memory: {
    kicker: "当前工作区 · KNOWLEDGE MEMORY",
    title: "把小说整理成可持续使用的知识",
    description: "维护当前小说的长期备忘；原作依据、连续性笔记和二创约定会分开管理。",
    action: "维护空间记忆",
  },
  story: {
    kicker: "当前工作区 · STORY MANAGER",
    title: "把灵感变成可推进的场景",
    description: "用场景卡、角色和摘要管理二创内容，让长篇创作保持连续。",
    action: "打开场景计划",
  },
  settings: {
    kicker: "当前工作区 · MODEL & DATA",
    title: "模型与本地资料只需设置一次",
    description: "配置 Ollama、OpenAI、Azure 或兼容服务；原作文件始终留在本机。",
    action: "打开模型设置",
  },
};

function readWorkspaceHashState() {
  try {
    const parts = decodeURIComponent(window.location.hash.replace(/^#/, "")).trim().split("/");
    return {
      view: String(parts.shift() || "").toLocaleLowerCase(),
      spaceId: parts.join("/").trim(),
    };
  } catch {
    return { view: "", spaceId: "" };
  }
}

function workspaceHashForView(view, spaceId = getCurrentNovelSpaceId()) {
  const normalizedSpaceId = String(spaceId || "").trim();
  return normalizedSpaceId && normalizedSpaceId !== defaultNovelSpaceId
    ? `#${view}/${encodeURIComponent(normalizedSpaceId)}`
    : `#${view}`;
}

function loadWorkspaceView() {
  const hashView = readWorkspaceHashState().view;
  if (hashView && workspaceGuides[hashView]) return hashView;
  try {
    const saved = sessionStorage.getItem(activeWorkspaceViewStorageKey);
    return saved && workspaceGuides[saved] ? saved : "home";
  } catch {
    return "home";
  }
}

function persistWorkspaceView(view) {
  try {
    sessionStorage.setItem(activeWorkspaceViewStorageKey, view);
  } catch {
    // 页面导航不应因浏览器禁用会话存储而中断。
  }
  try {
    const nextHash = workspaceHashForView(view);
    if (window.location.hash !== nextHash) {
      if (window.history?.pushState) window.history.pushState({ inkechoView: view }, "", nextHash);
      else {
        const link = document.createElement("a");
        link.href = nextHash;
        link.hidden = true;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    }
  } catch {
    // URL 同步失败时仍保留页面内导航和会话恢复。
  }
}

function loadContextPanelOpen() {
  try {
    return sessionStorage.getItem(contextPanelOpenStorageKey) === "true";
  } catch {
    return false;
  }
}

function setContextPanelOpen(open, { focus = false } = {}) {
  const nextOpen = Boolean(open);
  document.body.classList.toggle("context-panel-open", nextOpen);
  if (toggleContextPanelButton) {
    toggleContextPanelButton.setAttribute("aria-expanded", String(nextOpen));
    toggleContextPanelButton.textContent = nextOpen ? "收起上下文" : "上下文";
  }
  try {
    sessionStorage.setItem(contextPanelOpenStorageKey, String(nextOpen));
  } catch {
    // 上下文面板仍可在当前页面使用。
  }
  if (focus && nextOpen) workChapter?.focus();
}

function getNovelSpaceReadiness(space) {
  const source = space?.source || {};
  if (!source.available) {
    return {
      filter: "unavailable",
      label: source.configured ? "原文待恢复" : "等待原文文件",
      capability: "续写可继续 · 内容问答需要恢复原文",
      canQuery: false,
    };
  }
  if (source.parseStatus === "empty" || Number(source.chunks || 0) <= 0 || Number(source.characters || 0) <= 0) {
    return {
      filter: "empty",
      label: "没有可检索正文",
      capability: "续写可继续 · 内容问答暂不可用",
      canQuery: false,
    };
  }
  if (source.parseStatus === "partial" || source.parseDiagnostics?.warnings?.length) {
    return {
      filter: "partial",
      label: "知识空间可用 · 解析提醒",
      capability: "续写与内容问答可用 · 建议先查看依据",
      canQuery: true,
    };
  }
  return {
    filter: "ready",
    label: "知识空间可用",
    capability: "续写与内容问答均可用",
    canQuery: true,
  };
}

function getWorkspaceGuideState(view = activeWorkspaceView) {
  const guide = workspaceGuides[view] || workspaceGuides.workbench;
  if (view === "library") {
    const space = novelSpaceForProject();
    const readiness = getNovelSpaceReadiness(space);
    if (space && readiness.canQuery) {
      return {
        ...guide,
        kicker: "当前小说已就绪 · READY TO CREATE",
        title: `继续「${getCurrentNovelDisplayName()}」`,
        description: "原文已经可检索。现在只需要选择一个任务：用内容问答核对原作，或用续写进入下一幕。",
        action: "查看当前小说 →",
      };
    }
    if (space && readiness.filter !== "empty") {
      return {
        ...guide,
        kicker: "当前小说待恢复 · KNOWLEDGE SPACE",
        title: `先恢复「${getCurrentNovelDisplayName()}」的原文`,
        description: "空间仍然保留，续写可以继续；恢复原文后，内容问答和章节依据也会重新可用。",
        action: "查看恢复状态 →",
      };
    }
  }
  if (view !== "workbench") return guide;
  const space = novelSpaceForProject();
  const readiness = getNovelSpaceReadiness(space);
  if (!readiness.canQuery && readiness.filter === "empty") {
    return {
      ...guide,
      kicker: "原文内容为空 · SOURCE CHECK",
      title: "当前原文没有可检索正文",
      description: "文件已找到，但没有提取到正文内容。续写仍可继续；内容问答需要重新上传可读取的文本文件。",
      action: "查看解析状态 →",
      actionView: "source",
    };
  }
  if (!readiness.canQuery) {
    return {
      ...guide,
      kicker: "知识空间待恢复 · KNOWLEDGE SPACE",
      title: "先让当前小说可检索",
      description: "当前原文暂不可用。续写仍可继续；内容问答需要先回到小说库恢复这部小说。",
      action: "去小说库恢复 →",
      actionView: "library",
    };
  }
  if (space.source.parseStatus === "partial" || space.source.parseDiagnostics?.warnings?.length) {
    return {
      ...guide,
      kicker: "解析提醒 · SOURCE CHECK",
      title: "原作已加载，先确认解析状态",
      description: "当前空间可以继续使用，但章节识别存在提醒；建议先在原作资料页确认检索范围，再进行内容问答。",
      action: "查看解析状态 →",
      actionView: "source",
    };
  }
  return guide;
}

function syncWorkspaceGuide() {
  const guide = getWorkspaceGuideState(activeWorkspaceView);
  if (workspaceGuideKicker) workspaceGuideKicker.textContent = guide.kicker;
  if (workspaceGuideTitle) workspaceGuideTitle.textContent = guide.title;
  if (workspaceGuideDescription) workspaceGuideDescription.textContent = guide.description;
  if (workspaceGuideAction) workspaceGuideAction.textContent = guide.action;
  const space = novelSpaceForProject();
  const readiness = getNovelSpaceReadiness(space);
  const showTaskActions = Boolean(space && activeWorkspaceView === "library");
  if (workspaceGuideAction) workspaceGuideAction.hidden = showTaskActions && readiness.canQuery;
  if (workspaceGuideAskAction) {
    workspaceGuideAskAction.hidden = !showTaskActions;
    workspaceGuideAskAction.disabled = !readiness.canQuery;
    workspaceGuideAskAction.title = readiness.canQuery ? "使用当前小说知识空间回答原作问题" : "原文尚未就绪，先恢复当前小说原文";
  }
  if (workspaceGuideWriteAction) {
    workspaceGuideWriteAction.hidden = !showTaskActions;
    workspaceGuideWriteAction.title = "进入当前小说的续写工作台";
  }
  if (workspaceGuideSourceAction) {
    workspaceGuideSourceAction.hidden = !showTaskActions;
    workspaceGuideSourceAction.title = "定位章节、阅读原文和查看检索依据";
  }
  if (workspaceGuideStatusSummary) {
    const source = space?.source || {};
    const sectionCount = Number(source.sections || 0).toLocaleString("zh-CN");
    workspaceGuideStatusSummary.textContent = !space
      ? "尚未选择小说"
      : readiness.canQuery
        ? `原文可检索 · ${sectionCount} 个章节单元`
        : readiness.label;
  }
  syncWorkspaceGuideProgress();
}

function getNovelSpaceProgress(space = novelSpaceForProject()) {
  const source = space?.source || {};
  const sourceReady = Boolean(source.available);
  const sourceHasText = sourceReady && source.parseStatus !== "empty"
    && Number(source.chunks || 0) > 0 && Number(source.characters || 0) > 0;
  const parseNeedsAttention = sourceHasText
    && (source.parseStatus === "partial" || source.parseDiagnostics?.warnings?.length);
  const spaceMemoryCount = Number(space?.memory?.count) || 0;
  const linkedProjects = projects.filter((project) => project.novelSpaceId === space?.id);
  return [
    {
      key: "source",
      status: sourceReady ? "done" : "current",
      detail: sourceReady ? "已就绪" : "待上传",
    },
    {
      key: "parse",
      status: !sourceReady ? "locked" : parseNeedsAttention ? "attention" : sourceHasText ? "done" : "current",
      detail: !sourceReady ? "等待原文" : parseNeedsAttention ? "需确认" : sourceHasText ? "可检索" : "待检查",
    },
    {
      key: "memory",
      status: !sourceReady ? "locked" : spaceMemoryCount ? "done" : "next",
      detail: !sourceReady ? "等待解析" : spaceMemoryCount ? `${spaceMemoryCount} 条` : "可选",
    },
    {
      key: "create",
      status: linkedProjects.length ? "done" : sourceReady ? "next" : "locked",
      detail: linkedProjects.length ? `${linkedProjects.length} 个项目` : sourceReady ? "准备开始" : "等待原文",
    },
  ];
}

function syncWorkspaceGuideProgress() {
  if (!workspaceGuideProgress) return;
  const progress = getNovelSpaceProgress();
  progress.forEach((item) => {
    const node = workspaceGuideProgress.querySelector(`[data-progress-key="${item.key}"]`);
    if (!node) return;
    node.dataset.status = item.status;
    const detail = node.querySelector("small");
    if (detail) detail.textContent = item.detail;
    node.setAttribute("aria-label", `${node.querySelector("strong")?.textContent || item.key}：${item.detail}`);
    node.title = `打开${node.querySelector("strong")?.textContent || item.key}处理页`;
  });
}

function openWorkspaceProgressStep(key) {
  const sourceReady = Boolean(novelSpaceForProject()?.source?.available);
  if (key === "source" || key === "parse") {
    setWorkspaceView(sourceReady ? "source" : "library", { announce: true, focus: true });
    return;
  }
  if (key === "memory") {
    setWorkspaceView("memory", { announce: true, focus: true });
    return;
  }
  setWorkspaceView("workbench", { announce: true, focus: true });
}

const modePromptSets = {
  续写: [
    { title: "一封未寄出的信", subtitle: "换一个角度，重新理解角色。", prompt: "写一封没有寄出的信，告诉我你最想改变原作里的哪一刻。" },
    { title: "让天气开口", subtitle: "为场景增加一层隐秘的情绪。", prompt: "如果今天的雨会替人说话，它会对你说些什么？请用一段诗意的文字回答。" },
    { title: "不存在的下午", subtitle: "从日常细节里长出新故事。", prompt: "写一个原作没有发生过的下午，让人物在一个小动作里改变后续选择。" },
  ],
  问答: [
    { title: "人物处境", subtitle: "梳理方源在青茅山的关键目标。", prompt: "方源重生回到青茅山后，最优先要确认哪些事情？请区分原作依据与推断。" },
    { title: "蛊虫辨析", subtitle: "了解蛊虫的作用、代价与限制。", prompt: "春秋蝉在原作中的作用、风险和关键转折是什么？请标注原作依据。" },
    { title: "势力关系", subtitle: "看清古月、白家与熊家的格局。", prompt: "青茅山三大山寨之间是什么关系？请按原作事实、推断和不确定内容回答。" },
  ],
  改写: [
    { title: "换一种选择", subtitle: "保留人物心性，改变后果。", prompt: "保留人物核心性格，改写这一幕中最关键的一个选择。" },
    { title: "收紧对白", subtitle: "让潜台词比解释更有力量。", prompt: "把这段对白改得更克制，让人物用动作和停顿表达真实意图。" },
    { title: "另一种结局", subtitle: "从一个细节分岔出新线索。", prompt: "如果这一幕的结果相反，后续剧情最合理的变化是什么？" },
  ],
  独白: [
    { title: "不肯承认的事", subtitle: "让角色面对最隐秘的动机。", prompt: "让当前角色说出一件他最不愿承认、却一直影响选择的事情。" },
    { title: "力量与代价", subtitle: "把取舍写成一段内心拉扯。", prompt: "让角色独白：为了力量，他愿意付出什么，又绝不愿失去什么？" },
    { title: "回望重生", subtitle: "从记忆深处重新审视一条路。", prompt: "让角色回望一次改变命运的决定，用第一人称写出当时没有说出口的话。" },
  ],
};

const genericModePromptSets = {
  续写: [
    { title: "承接下一幕", subtitle: "从当前章节留下的线索继续。", prompt: "请基于当前小说知识空间、章节位置和场景计划，续写下一幕；保持人物动机连续，并留下一个可继续发展的线索。" },
    { title: "一个小动作", subtitle: "让细节推动人物做出选择。", prompt: "请在当前小说的世界规则内，写一个看似微小却会改变后续走向的动作，并自然推进剧情。" },
    { title: "新的悬念", subtitle: "让这一幕结束时仍有问题。", prompt: "请续写当前场景，在完成一个具体事件的同时留下一个来自原作设定或当前剧情的新悬念。" },
  ],
  问答: [
    { title: "人物处境", subtitle: "梳理角色当前的目标与限制。", prompt: "请根据当前小说知识空间，说明这个人物当前最重要的目标、限制和可用资源，并区分原作依据、合理推断与不确定内容。" },
    { title: "设定辨析", subtitle: "核对世界规则与关键概念。", prompt: "请解释当前小说中的一个关键设定：它的作用、限制、代价和已知依据分别是什么？" },
    { title: "关系脉络", subtitle: "看清人物、组织或势力之间的关系。", prompt: "请梳理当前小说中两个重要实体之间的关系、变化和关键节点，并明确区分原作依据与推断。" },
  ],
  改写: [
    { title: "换一种选择", subtitle: "保留人物核心，改变一个后果。", prompt: "保留人物的核心动机和当前小说世界规则，只改写这一幕中最关键的一个选择，并说明它带来的后果。" },
    { title: "收紧对白", subtitle: "让潜台词比解释更有力量。", prompt: "把当前片段改得更克制，让人物通过动作、停顿和潜台词表达真实意图。" },
    { title: "另一种结果", subtitle: "从一个细节分岔出新线索。", prompt: "如果当前场景的结果相反，基于小说已有设定，后续最合理的变化会是什么？请写出关键转折。" },
  ],
  独白: [
    { title: "不肯承认的事", subtitle: "让角色面对最隐秘的动机。", prompt: "让当前角色说出一件最不愿承认、却一直影响自己选择的事情。" },
    { title: "力量与代价", subtitle: "把取舍写成一段内心拉扯。", prompt: "让当前角色独白：为了目标愿意付出什么，又绝不愿失去什么？" },
    { title: "回望选择", subtitle: "从记忆深处重新审视一条路。", prompt: "让当前角色回望一次改变命运的决定，用第一人称写出当时没有说出口的话。" },
  ],
};

const projectStatusLabels = {
  all: "全部项目",
  attention: "需要处理",
  summary: "摘要待更新",
  outcome: "结果待更新",
  draft: "有草稿",
};

const commandPaletteCommands = [
  { id: "task-write", label: "开始续写", hint: "接着当前小说写下一幕", keywords: "续写 创作 下一幕 故事", run: () => openWorkspaceTask("续写") },
  { id: "task-ask", label: "内容问答", hint: "查人物、设定和剧情依据", keywords: "问答 原作 人物 设定 剧情", run: () => openWorkspaceTask("问答") },
  { id: "task-source", label: "查找原作", hint: "定位章节并阅读原文", keywords: "原作 资料 章节 阅读 检索", run: () => setWorkspaceView("source", { announce: true, focus: true }) },
  { id: "manage-memory", label: "维护空间记忆", hint: "记录人物关系、规则和二创约定", keywords: "记忆 笔记 设定 规则", run: () => setWorkspaceView("memory", { announce: true, focus: true }) },
  { id: "manage-story", label: "管理场景与角色", hint: "推进场景卡、角色和剧情摘要", keywords: "故事 场景 角色 摘要", run: () => setWorkspaceView("story", { announce: true, focus: true }) },
  { id: "configure-model", label: "配置模型服务", hint: "设置 Ollama、Azure 或兼容接口", keywords: "模型 服务 Ollama Azure 设置", run: () => setWorkspaceView("settings", { announce: true, focus: true }) },
  { id: "new-project", label: "新建创作项目", hint: "开始一条新的叙事线", keywords: "项目 新建 创作", run: () => createNewProject() },
  { id: "save-checkpoint", label: "快速保存检查点", hint: "保存当前对话、设定和草稿", keywords: "检查点 保存 快照", run: () => saveCheckpoint({ quick: true }) },
  { id: "open-scene-plan", label: "打开场景计划", hint: "查看、编辑和推进场景卡", keywords: "场景 计划 幕", run: () => openScenePlanner() },
  { id: "open-archive", label: "查看归档历史", hint: "搜索较早消息并创建支线", keywords: "归档 历史 搜索 支线", run: () => openArchiveHistory() },
  { id: "open-context", label: "预览模型上下文", hint: "核对本次实际发送的设定和对话", keywords: "上下文 预览 模型", run: () => openContextPreview() },
  { id: "open-diagnostics", label: "打开连接诊断", hint: "查看模型服务配置和缺少字段", keywords: "模型 服务 连接 诊断", run: () => openProviderDiagnostics() },
  { id: "focus-attention", label: "处理当前项目状态", hint: "定位摘要、场景结果或草稿", keywords: "状态 待处理 摘要 草稿", run: () => focusProjectAttention() },
  { id: "export-markdown", label: "导出当前创作", hint: "下载 Markdown 对话和设定", keywords: "导出 markdown 下载", run: () => exportSession() },
  { id: "clear-project-filters", label: "清除项目搜索和筛选", hint: "恢复显示全部项目", keywords: "项目 搜索 筛选 清除 全部", run: () => clearProjectFilters() },
  { id: "focus-mode", label: "切换专注模式", hint: "隐藏两侧面板，放大对话区", keywords: "专注 模式 focus", run: () => {
    setFocusMode(!document.body.classList.contains("focus-mode"));
    showToast(document.body.classList.contains("focus-mode") ? "已进入专注模式" : "已退出专注模式");
  } },
];

const providerDefaults = {
  custom_azure: "gpt-5-mini-2025-08-07",
  ollama: "qwen3:8b",
  openai: "gpt-5-mini",
  azure: "your-deployment-name",
  compatible: "qwen3-8b",
};

const providerDescriptions = {
  custom_azure: "读取 .env 中的自定义节点地址和密钥。",
  ollama: "连接本机 Ollama，可运行 Qwen3、Llama、Gemma 等模型。",
  openai: "使用 OpenAI 官方 Chat Completions 接口。",
  azure: "使用标准 Azure OpenAI 部署名和端点。",
  compatible: "适用于 vLLM、LM Studio、LocalAI 等兼容服务；本地服务通常只需填写地址。",
};
const providerSetupHints = {
  custom_azure: "修复步骤：① 点击“复制配置模板” ② 把自定义节点地址、密钥和日志标识填入项目配置文件 .env ③ 重启 InkEcho，再点击“测试连接”。密钥只保存在本机。",
  ollama: "修复步骤：① 启动本机 Ollama ② 准备一个模型（例如 qwen3:8b）③ 点击“刷新模型”或“测试连接”。默认连接本机 11434 端口。",
  openai: "修复步骤：① 准备 OpenAI API 密钥 ② 点击“复制配置模板”，把密钥填入项目配置文件 .env ③ 重启 InkEcho，再点击“测试连接”。",
  azure: "修复步骤：① 准备 Azure 端点、密钥、API 版本和部署名 ② 点击“复制配置模板”并填入项目配置文件 .env ③ 重启 InkEcho，再点击“测试连接”。",
  compatible: "修复步骤：① 确认兼容服务已经启动 ② 点击“复制配置模板”，填写服务地址和模型名 ③ 重启 InkEcho，再点击“测试连接”。",
};
const providerDataBoundaries = {
  custom_azure: "数据去向：生成时，命中的有限原作片段和必要上下文会发送到你配置的自定义 Azure-compatible 节点；原始小说文件不会发送。",
  ollama: "数据去向：Ollama 默认在本机处理命中的有限原作片段和必要上下文；如果你把 Base URL 改为远程地址，则以该地址的数据策略为准。",
  openai: "数据去向：生成时，命中的有限原作片段和必要上下文会发送到 OpenAI；原始小说文件不会发送。",
  azure: "数据去向：生成时，命中的有限原作片段和必要上下文会发送到 Azure OpenAI；原始小说文件不会发送。",
  compatible: "数据去向：命中的有限原作片段和必要上下文会发送到你配置的兼容服务；它是否留在本机取决于 Base URL。",
};

function hasProviderDataConsent(provider) {
  try {
    const acknowledged = JSON.parse(sessionStorage.getItem(providerDataConsentStorageKey) || "[]");
    return Array.isArray(acknowledged) && acknowledged.includes(provider);
  } catch {
    return false;
  }
}

function rememberProviderDataConsent(provider) {
  try {
    const acknowledged = JSON.parse(sessionStorage.getItem(providerDataConsentStorageKey) || "[]");
    const next = Array.from(new Set([...(Array.isArray(acknowledged) ? acknowledged : []), provider]));
    sessionStorage.setItem(providerDataConsentStorageKey, JSON.stringify(next));
  } catch {
    // A blocked session store should not hide the disclosure; the next remote
    // request will simply ask again.
  }
}

let providerDataConsentPending = null;

function settleProviderDataConsent(confirmed) {
  const pending = providerDataConsentPending;
  if (!pending) return;
  providerDataConsentPending = null;
  if (confirmed) rememberProviderDataConsent(pending.provider);
  if (providerDataConsentDialog?.open) providerDataConsentDialog.close();
  pending.resolve(confirmed);
  if (!confirmed) showToast("已取消发送，原作片段仍留在本机");
}

async function ensureProviderDataConsent(purpose = "生成内容", dataDescription = "") {
  const provider = providerSelect.value;
  if (provider === "ollama" || hasProviderDataConsent(provider)) return true;
  if (!providerDataConsentDialog || providerDataConsentPending) return false;
  const providerName = providerDisplayName(provider);
  const novelName = getCurrentNovelDisplayName();
  providerDataConsentService.textContent = providerName;
  providerDataConsentDescription.textContent = dataDescription
    || `${purpose}将把「${novelName}」命中的有限原作片段（章节摘要时为当前章节有限预览）和必要上下文发送给当前模型服务。原始小说文件和完整索引不会发送。`;
  providerDataConsentDetail.textContent = providerDataBoundaries[provider] || "命中的有限原作片段和必要上下文会发送到当前模型服务。";
  const decision = new Promise((resolve) => {
    providerDataConsentPending = { provider, resolve };
  });
  providerDataConsentDialog.showModal();
  cancelProviderDataConsentButton?.focus();
  return decision;
}
const providerConfigTemplates = {
  custom_azure: "# InkEcho · 自定义 Azure-compatible 节点\nINK_ECHO_PROVIDER=custom_azure\nINK_ECHO_CUSTOM_AZURE_API_KEY=replace_with_your_key\nINK_ECHO_CUSTOM_AZURE_ENDPOINT=https://your-endpoint.example/v1\nINK_ECHO_CUSTOM_AZURE_API_VERSION=2024-02-01\nINK_ECHO_CUSTOM_AZURE_MODEL=gpt-5-mini-2025-08-07\nINK_ECHO_CUSTOM_AZURE_LOGID=replace_with_your_logid",
  ollama: "# InkEcho · Ollama\nINK_ECHO_PROVIDER=ollama\nINK_ECHO_OLLAMA_BASE_URL=http://127.0.0.1:11434/v1\nINK_ECHO_OLLAMA_MODEL=qwen3:8b",
  openai: "# InkEcho · OpenAI\nINK_ECHO_PROVIDER=openai\nINK_ECHO_OPENAI_API_KEY=replace_with_your_key\nINK_ECHO_OPENAI_MODEL=gpt-5-mini",
  azure: "# InkEcho · Azure OpenAI\nINK_ECHO_PROVIDER=azure\nINK_ECHO_AZURE_API_KEY=replace_with_your_key\nINK_ECHO_AZURE_ENDPOINT=https://your-resource.openai.azure.com/\nINK_ECHO_AZURE_API_VERSION=2024-02-01\nINK_ECHO_AZURE_MODEL=your-deployment-name\nINK_ECHO_AZURE_LOGID=",
  compatible: "# InkEcho · OpenAI-compatible\nINK_ECHO_PROVIDER=compatible\nINK_ECHO_COMPATIBLE_API_KEY=local\nINK_ECHO_COMPATIBLE_BASE_URL=http://127.0.0.1:8000/v1\nINK_ECHO_COMPATIBLE_MODEL=qwen3-8b",
};

const creativityLabels = {
  restrained: "克制叙事",
  balanced: "平衡",
  imaginative: "大胆想象",
};
const responseLengthLabels = {
  concise: "精简",
  standard: "标准",
  expanded: "展开",
};
const maxProjects = 50;
const maxCustomTemplates = 12;
const maxLibraryCharacters = 24;
const maxLibraryPrompts = 36;
const maxConversationMessages = 120;
const maxArchivedMessages = 360;
const maxStoredConversationMessages = maxConversationMessages + maxArchivedMessages;
const maxConversationSessions = 24;
const maxConversationSessionMessages = 80;
const continuityBridgeMessageCount = 4;
const maxPrompts = 12;
const maxHighlights = 30;
const maxCheckpoints = 12;
const maxSceneBeats = 24;
const scenePlanContextLimit = 2000;
const sceneBeatStatusLabels = {
  planned: "待写",
  active: "进行中",
  done: "已完成",
};
const templatePresets = [
  {
    id: "classical-afterglow",
    title: "古典余韵",
    label: "原作续写",
    description: "沿着熟悉的人物关系，写一场原作没有发生过的相逢。",
    context: {
      title: "古典余韵",
      chapter: "一场迟到的春雨",
      era: "古典园林 · 黄昏",
      world: "礼法、家族与真心彼此牵扯，人物习惯把最重要的话藏在日常细节里。",
      summary: "故事从一场未曾发生的告别前开始，人物仍有机会把心事说完。",
      instructions: "保持含蓄、典雅的语感，用细节和留白推进关系，不急于解释人物的心意。",
    },
    characters: [
      { name: "寄春人", tone: "敏锐、克制，善于从风物里听见未说出口的话。" },
      { name: "迟归客", tone: "温柔而迟疑，习惯用玩笑掩饰真正的在意。" },
    ],
    selectedCharacterName: "寄春人",
    mode: "续写",
    prompts: [
      { title: "一封未寄的信", text: "写一封没有寄出的信，告诉对方这场迟到的相逢意味着什么。" },
      { title: "让雨替人说话", text: "让窗外的雨成为旁观者，用一段含蓄的文字写出两人的沉默。" },
    ],
  },
  {
    id: "original-world",
    title: "原创长篇",
    label: "从零搭建",
    description: "先定下世界的规则与人物的愿望，再让第一幕自己长出来。",
    context: {
      title: "未命名长篇",
      chapter: "第一幕 · 雾中的车站",
      era: "架空世界",
      world: "这是一个记忆可以被寄存和交换的城市。每个人都拥有一段不愿被取回的往事。",
      summary: "主角在一座停运多年的车站醒来，手里握着一张写有陌生人名字的车票。",
      instructions: "优先建立可感知的场景和人物欲望，每次推进留下一个具体问题，避免一次性解释世界观。",
    },
    characters: [
      { name: "拾忆者", tone: "谨慎、好奇，擅长观察却不轻易相信别人。" },
      { name: "无名旅客", tone: "从容而神秘，知道一些不该被知道的城市秘密。" },
    ],
    selectedCharacterName: "拾忆者",
    mode: "续写",
    prompts: [
      { title: "车票背面", text: "车票背面出现了一行刚刚写上的字，请让这句话改变主角对车站的理解。" },
      { title: "交换一段记忆", text: "让两个角色交换一段记忆，但其中一人发现那段记忆并不属于自己。" },
    ],
  },
  {
    id: "unsent-letter",
    title: "一封未寄出的信",
    label: "角色独白",
    description: "把复杂的关系折进一封信里，让角色终于说出平时不敢说的话。",
    context: {
      title: "一封未寄出的信",
      chapter: "落款之前",
      era: "当代 · 深夜",
      world: "两个人曾经非常亲近，如今只剩一封写了很多次却始终没有寄出的信。",
      summary: "写信人准备在天亮前完成最后一版，却不断删去真正想说的那一句。",
      instructions: "使用第一人称，语气像真实的私人信件；允许犹豫、改口和重复，让情绪慢慢浮现。",
    },
    characters: [
      { name: "写信人", tone: "清醒、嘴硬，越想说得体面越暴露自己的舍不得。" },
      { name: "收信人", tone: "沉默而具体，始终以缺席的方式参与这封信。" },
    ],
    selectedCharacterName: "写信人",
    mode: "独白",
    prompts: [
      { title: "真正的第一句", text: "不要从问候开始，直接写出写信人最想逃避的那件事。" },
      { title: "删掉的段落", text: "写出一段被划掉的文字，再解释为什么这段话始终无法寄出。" },
    ],
  },
  {
    id: "parallel-choice",
    title: "如果那天没有告别",
    label: "平行改写",
    description: "从一个关键分岔点重写故事，让人物在另一条路上重新遇见彼此。",
    context: {
      title: "如果那天没有告别",
      chapter: "分岔点 · 站台",
      era: "当代 · 雨夜",
      world: "原本应该发生的告别被一个微小的意外打断，两个人因此进入一条未被写下的时间线。",
      summary: "列车即将开走，主角还不知道留下来会改变什么，也不知道谁正在等一句挽留。",
      instructions: "保留人物原有的性格核心，只改变选择和后果；让每个转折都能追溯到一个具体动作。",
    },
    characters: [
      { name: "留下的人", tone: "理智、可靠，已经习惯把自己的愿望放到最后。" },
      { name: "未上车的人", tone: "直接、倔强，害怕承认自己其实一直在等挽留。" },
    ],
    selectedCharacterName: "留下的人",
    mode: "改写",
    prompts: [
      { title: "只晚了一分钟", text: "把改变命运的原因写成一个很小的、几乎不会被注意到的动作。" },
      { title: "另一种后果", text: "写出这次没有告别之后，两人第一次意识到世界已经变了的瞬间。" },
    ],
  },
];
const providerRequestTimeout = 12000;
const summaryRequestTimeout = 45000;
const streamIdleTimeout = 90000;

let selectedCharacter = {
  name: "方源",
  tone: "冷静、决绝、善于权衡利弊，不被表面道德束缚。",
  details: "拥有漫长人生经验和明确目标，擅长在资源、风险与人心之间做取舍；不轻易被情绪改变判断。",
};
let selectedMode = "续写";
let activeWorkspaceView = "workbench";
let toastTimer;
let draftTimer;
let projectPersistTimer;
let isSending = false;
let isSummarizing = false;
let pendingSceneOutcomePreview = null;
let pendingSummaryPreview = null;
let pendingQualityRetry = null;
let summaryEditPending = false;
let streamController = null;
let providerHealthRequestId = 0;
let providerMissingKeys = [];
let sourceOutlineRequestId = 0;
let sourceOutlineLoadedKey = "";
let sourceOutlineTitles = [];
let sourceOutlineRemoteQuery = "";
let sourceOutlineRemoteTitles = [];
let sourceOutlineSearchRequestId = 0;
let sourceOutlineSearchTimer = null;
let sourceOutlineSearchPending = false;
let sourceOutlineSearchError = false;
const sourceOutlineDisplayLimit = 40;
let sourceOutlineVisibleLimit = sourceOutlineDisplayLimit;
let serverHistoryBudget = 48000;
let serverRequestTimeout = 120000;
let editingCharacterName = null;
let editingPromptIndex = null;
let editingBeatId = null;
let storageWarningShown = false;
const defaultConversationHistory = [
  { role: "assistant", name: "方源", content: "《蛊真人》原作知识库已经准备好。你可以指定章节或场景让我续写，也可以直接提问原作内容。" },
  { role: "user", name: "我", content: "方源重生回到青茅山后，最先需要确认哪些事情？" },
  { role: "assistant", name: "方源", content: "先确认重生的时间与自身处境，再梳理青茅山的势力、开窍大典和能够利用的资源。先掌握局面，才谈得上下一步取舍。" },
];
let projects = loadProjects();
let customTemplates = loadCustomTemplates();
let characterLibrary = loadCharacterLibrary();
let promptLibrary = loadPromptLibrary();
let activeProjectId = projects[0].id;
let novelSpaces = loadNovelSpaces();
let novelSpacesLoaded = false;
let novelSpacesLoadError = false;
let activeNovelSpaceId = defaultNovelSpaceId;
let activeNovelMemory = { spaceId: defaultNovelSpaceId, notes: [], count: 0 };
let editingNovelMemoryId = null;
let activeMemoryLayer = "source";
let activeSourceKnowledgeCategory = "all";
let activeSourceKnowledge = { spaceId: "", count: 0, counts: {}, items: [], knowledgeLayer: "source_index", isReviewed: false, isTemporary: true };
let activeModelMemory = { spaceId: "", count: 0, items: [], knowledgeLayer: "model_memory_preview", isReviewed: false, isTemporary: true, streaming: false, memoryBuild: {} };
let activeModelMemoryCategory = "all";
let activeModelMemoryChapter = "";
let sourceKnowledgeRequestId = 0;
let sourceKnowledgeSearchTimer = null;
let modelMemoryRequestId = 0;
let modelMemoryFilterTimer = null;
let reviewedMemoryBuildState = { spaceId: "", status: "idle", progress: 0, memoryRevision: "" };
let reviewedMemoryStatusTimer = null;
function normalizeSpaceRecovery(value) {
  const source = value && typeof value === "object" ? value : {};
  const normalizeNames = (items) => [...new Set((Array.isArray(items) ? items : [])
    .map((item) => safeText(item, "", 80).trim())
    .filter(Boolean))];
  return {
    sourceNames: normalizeNames(source.sourceNames),
    uploadNames: normalizeNames(source.uploadNames),
    projectBindings: (Array.isArray(source.projectBindings) ? source.projectBindings : [])
      .map((item) => ({
        projectId: safeText(item?.projectId, "", 100),
        name: safeText(item?.name, "", 80).trim(),
      }))
      .filter((item) => item.projectId && item.name),
  };
}

function loadSpaceRecovery() {
  try {
    return normalizeSpaceRecovery(JSON.parse(localStorage.getItem(spaceRecoveryStorageKey) || "null"));
  } catch {
    notifyStorageIssue();
    return { sourceNames: [], uploadNames: [] };
  }
}

function persistSpaceRecovery() {
  try {
    if (!pendingSpaceRecovery.sourceNames.length && !pendingSpaceRecovery.uploadNames.length) {
      localStorage.removeItem(spaceRecoveryStorageKey);
    } else {
      localStorage.setItem(spaceRecoveryStorageKey, JSON.stringify(pendingSpaceRecovery));
    }
  } catch {
    notifyStorageIssue();
  }
}

function renderSpaceRecoveryNotice() {
  if (!spaceRecoveryNotice) return;
  const { sourceNames, uploadNames } = pendingSpaceRecovery;
  const visible = sourceNames.length || uploadNames.length;
  spaceRecoveryNotice.hidden = !visible;
  if (spaceRecoveryTargetField) spaceRecoveryTargetField.hidden = !uploadNames.length;
  if (spaceRecoveryTargetSelect) {
    const previousTarget = spaceRecoveryTargetSelect.value;
    spaceRecoveryTargetSelect.replaceChildren(...uploadNames.map((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      return option;
    }));
    if (uploadNames.includes(previousTarget)) spaceRecoveryTargetSelect.value = previousTarget;
    else if (uploadNames[0]) spaceRecoveryTargetSelect.value = uploadNames[0];
  }
  if (!visible) return;
  if (spaceRecoveryTitle) {
    spaceRecoveryTitle.textContent = uploadNames.length
      ? "项目已导入，但还有小说原文待恢复"
      : "项目已导入，空间配置可以继续恢复";
  }
  const uploadHint = uploadNames.length
    ? `请先上传：${uploadNames.join("、")}。上传完成后，这里的待恢复列表会自动更新。`
    : "当前设备已找到对应原文。";
  const configHint = sourceNames.length
    ? `如需恢复空间记忆和检索策略，请进入对应小说卡片，单独导入空间配置。`
    : "";
  if (spaceRecoveryDescription) spaceRecoveryDescription.textContent = [uploadHint, configHint].filter(Boolean).join(" ");
}

function setSpaceRecovery(sourceNames = [], uploadNames = [], projectBindings = []) {
  pendingSpaceRecovery = normalizeSpaceRecovery({ sourceNames, uploadNames, projectBindings });
  persistSpaceRecovery();
  renderSpaceRecoveryNotice();
}

function resolveSpaceRecoveryUpload(uploadedName) {
  const normalizedName = safeText(uploadedName, "", 80).trim().toLocaleLowerCase();
  if (!normalizedName || !pendingSpaceRecovery.uploadNames.length) return;
  const remaining = pendingSpaceRecovery.uploadNames.filter((name) => name.toLocaleLowerCase() !== normalizedName);
  const matchedBindings = pendingSpaceRecovery.projectBindings.filter((binding) => binding.name.toLocaleLowerCase() === normalizedName);
  if (remaining.length === pendingSpaceRecovery.uploadNames.length && !matchedBindings.length) return;
  let reboundCount = 0;
  matchedBindings.forEach((binding) => {
    const project = projects.find((item) => item.id === binding.projectId);
    if (!project) return;
    project.novelSpaceId = novelSpaces.find((space) => space.name.trim().toLocaleLowerCase() === normalizedName)?.id || project.novelSpaceId;
    project.checkpoints = (project.checkpoints || []).map((checkpoint) => ({
      ...checkpoint,
      novelSpaceId: project.novelSpaceId,
    }));
    reboundCount += 1;
  });
  if (reboundCount) {
    persistProjects();
    showToast(`${reboundCount} 个项目已重新关联到「${uploadedName}」空间`);
  }
  const remainingBindings = pendingSpaceRecovery.projectBindings.filter((binding) => binding.name.toLocaleLowerCase() !== normalizedName);
  setSpaceRecovery(pendingSpaceRecovery.sourceNames, remaining, remainingBindings);
}

let pendingSpaceRecovery = loadSpaceRecovery();
const novelMemoryCache = {};
const novelMemorySourceRevisions = {};
const novelMemoryLoadErrors = {};
const novelMemoryLoadInFlight = {};
const novelMemoryRequestIds = {};
let pendingNovelUploadFile = null;
let novelUploadInFlight = false;
let activeNovelUploadJobId = "";
let novelUploadTargetSpaceId = "";
let novelUploadRetrySpaceId = "";
let novelUploadCancelInFlight = false;
let novelUploadPollingTimedOut = false;
let novelUploadResumeInFlight = false;
let retrievalStrategy = loadRetrievalStrategy();
try {
  activeNovelSpaceId = localStorage.getItem(activeNovelSpaceStorageKey) || defaultNovelSpaceId;
} catch {
  notifyStorageIssue();
}
try {
  activeProjectId = localStorage.getItem(activeProjectStorageKey) || projects[0].id;
} catch {
  notifyStorageIssue();
}
if (!projects.some((project) => project.id === activeProjectId)) activeProjectId = projects[0].id;
let conversationHistory = loadConversation();

function getCurrentNovelDisplayName() {
  const project = getActiveProject();
  const fallback = project?.novelSpaceId === defaultNovelSpaceId ? "蛊真人" : project?.context?.title || "当前小说";
  return safeText(novelSpaceForProject()?.name, fallback, 80);
}

function getModeHint(mode = selectedMode) {
  const novelName = getCurrentNovelDisplayName();
  if (getCurrentNovelSpaceId() === defaultNovelSpaceId) {
    return mode === "续写"
      ? "续写《蛊真人》的这一段故事……"
      : mode === "问答"
        ? "询问《蛊真人》的角色、蛊虫、势力或剧情……"
        : modeHints[mode] || "写下你想继续探索的内容……";
  }
  return mode === "续写"
    ? `续写「${novelName}」的这一段故事……`
    : mode === "问答"
      ? `询问「${novelName}」的角色、设定、势力或剧情……`
      : modeHints[mode] || "写下你想继续探索的内容……";
}

function getCurrentNovelAssistantName() {
  const name = getCurrentNovelDisplayName();
  return getCurrentNovelSpaceId() === defaultNovelSpaceId ? "《蛊真人》" : name;
}

function getModePromptSet(mode = selectedMode) {
  const spaceId = novelSpaceForProject()?.id || getActiveProject()?.novelSpaceId;
  return spaceId === defaultNovelSpaceId
    ? (modePromptSets[mode] || modePromptSets.续写)
    : (genericModePromptSets[mode] || genericModePromptSets.续写);
}

function renderTaskStarters() {
  if (!taskStarters || !taskStarterList) return;
  const starterMode = ["续写", "问答"].includes(selectedMode);
  const hasDraft = Boolean(messageInput?.value.trim());
  const hasTaskInMode = conversationHistory.some((item) => {
    if (item?.role !== "user" || !String(item.content || "").trim()) return false;
    const itemMode = normalizeMessageMode(item.mode) || "续写";
    return itemMode === selectedMode;
  });
  const visible = starterMode && !hasDraft && !hasTaskInMode;
  taskStarters.hidden = !visible;
  if (!visible) {
    taskStarterList.replaceChildren();
    return;
  }
  const buttons = getModePromptSet(selectedMode).slice(0, 3).map((prompt) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "task-starter";
    button.setAttribute("aria-label", `${prompt.title}：${prompt.subtitle}`);
    const title = document.createElement("strong");
    title.textContent = prompt.title;
    const subtitle = document.createElement("small");
    subtitle.textContent = prompt.subtitle;
    button.append(title, subtitle);
    button.addEventListener("click", () => fillPrompt(prompt.prompt));
    return button;
  });
  taskStarterList.replaceChildren(...buttons);
}

function getNovelCharacters(space = novelSpaceForProject()) {
  const spaceId = space?.id || getActiveProject()?.novelSpaceId;
  if (!spaceId || spaceId === defaultNovelSpaceId) return defaultCharacters.map((item) => ({ ...item }));
  return [
    { name: "主角", tone: "根据当前小说设定行动，保留人物已经建立的目标与性格。", details: "这是当前作品的主要叙事角色，可以在角色管理中替换为原作人物。" },
    { name: "叙事助手", tone: "克制、清晰，帮助核对设定并推动故事向前。", details: "负责整理原作依据、当前场景和待解决的线索，不代替角色做决定。" },
  ];
}

function getNovelOpeningConversation(space = novelSpaceForProject()) {
  const spaceId = space?.id || getActiveProject()?.novelSpaceId;
  if (!spaceId || spaceId === defaultNovelSpaceId) return defaultConversationHistory.map((item) => ({ ...item }));
  return [{
    role: "assistant",
    name: "主角",
    content: `「${space?.name || "当前小说"}」知识空间已经准备好。你可以指定章节或场景让我续写，也可以先提问原作内容。`,
  }];
}

function getConversationTitle() {
  return selectedMode === "问答"
    ? `${getCurrentNovelAssistantName()}原作问答`
    : `与${selectedCharacter.name}对话`;
}

function getAssistantDisplayName(character = selectedCharacter) {
  return selectedMode === "问答" ? "InkEcho" : character.name;
}

function getAssistantAvatarClass(name) {
  if (name === "InkEcho") return "avatar-inkecho";
  return name === "白凝冰" ? "avatar-bao" : "avatar-dai";
}

function safeText(value, fallback = "", maxLength = 240) {
  const text = typeof value === "string" ? value : value == null ? "" : String(value);
  return text.trim().slice(0, maxLength) || fallback;
}

function normalizeBranchSource(source) {
  if (!source || typeof source !== "object") return null;
  const allowedTypes = new Set(["project", "checkpoint", "message", "archive"]);
  const type = allowedTypes.has(source.type) ? source.type : "";
  const label = safeText(source.label, "", 80);
  const detail = safeText(source.detail, "", 160);
  if (!type || !label) return null;
  return { type, label, detail };
}

function normalizeSourceReferences(value) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(
    value
      .map((item) => safeText(item, "", 120))
      .filter(Boolean),
  )).slice(0, 4);
}

function normalizeSourceReferencesByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((references) => normalizeSourceReferences(references));
}

function normalizeSourceQueriesByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((query) => safeText(query, "", 600));
}

function normalizeSourceQualitiesByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((quality) => normalizeSourceQuality(quality));
}

function normalizeSourceAnswerCoveragesByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((coverage) => normalizeSourceAnswerCoverage(coverage));
}

function normalizeSourceQuality(value) {
  return ["strong", "partial", "limited", "none"].includes(value) ? value : "";
}

function normalizeSourceAnswerCoverage(value) {
  return ["answer", "direct", "related", "none"].includes(value) ? value : "";
}

function normalizeMessageMode(value) {
  return Object.prototype.hasOwnProperty.call(modeHints, value) ? value : "";
}

function sourceQualityLabel(value) {
  return {
    strong: "命中充分",
    partial: "命中有限",
    limited: "单一命中",
    none: "未命中",
  }[normalizeSourceQuality(value)] || "";
}

function sourceAnswerCoverageLabel(value) {
  return {
    answer: "找到答案陈述",
    direct: "找到直接相关片段",
    related: "仅主题相关",
    none: "未找到依据",
  }[normalizeSourceAnswerCoverage(value)] || "";
}

function normalizeCitationStatus(value) {
  return ["verified", "unverified", "none"].includes(value) ? value : "";
}

const continuationQualityWarningCopy = {
  outline_like: ["像提纲，不像正文", "检测到连续分点结构；续写通常应直接呈现场景、动作与人物反应。"],
  meta_explanation: ["包含写作说明", "开头在解释如何续写，而不是直接进入小说正文。"],
  scene_thin: ["场景感偏弱", "篇幅较长，但动作与对话很少、分析性表达较多。"],
  future_possession: ["可能提前获得后续事物", "可能把后续章节信息写成当前已持有或可使用。"],
};

function normalizeQualityReview(value) {
  if (!value || typeof value !== "object") return null;
  const warnings = Array.isArray(value.warnings)
    ? value.warnings.map((warning) => {
      const code = safeText(warning?.code, "", 40);
      if (!Object.prototype.hasOwnProperty.call(continuationQualityWarningCopy, code)) return null;
      const fallback = continuationQualityWarningCopy[code];
      return {
        code,
        label: safeText(warning?.label, fallback[0], 80),
        detail: safeText(warning?.detail, fallback[1], 240),
      };
    }).filter(Boolean).slice(0, 4)
    : [];
  const status = value.status === "review" && warnings.length ? "review" : "pass";
  return { status, warnings };
}

function normalizeQualityReviewsByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((review) => normalizeQualityReview(review));
}

function normalizeQualityRetryCodes(value) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value
    .map((code) => safeText(code, "", 40))
    .filter((code) => Object.prototype.hasOwnProperty.call(continuationQualityWarningCopy, code))))
    .slice(0, 4);
}

function normalizeQualityRetryCodesByVersion(value) {
  if (!Array.isArray(value)) return [];
  return value.map((codes) => normalizeQualityRetryCodes(codes));
}

function qualityOptimizationStatus(retryCodes, review) {
  const targetedCodes = normalizeQualityRetryCodes(retryCodes);
  if (!targetedCodes.length) return null;
  const remainingCodes = qualityReviewCodes(review);
  const resolvedCount = targetedCodes.filter((code) => !remainingCodes.includes(code)).length;
  if (!remainingCodes.length) {
    return { status: "passed", label: "质检已通过", detail: "定向优化后，本次检查未再发现风险。" };
  }
  if (resolvedCount > 0) {
    return {
      status: "improved",
      label: "风险已减少",
      detail: `已改善 ${resolvedCount} 项，仍有 ${remainingCodes.length} 项需要复核。`,
    };
  }
  return { status: "review", label: "仍需复核", detail: `定向优化后仍有 ${remainingCodes.length} 项风险。` };
}

function formatBranchSource(project) {
  const source = normalizeBranchSource(project?.branchSource);
  if (!source) return "";
  return `「${source.label}」${source.detail ? ` · ${source.detail}` : ""}`;
}

function normalizeConversationItem(item, fallbackAssistantName = "角色") {
  const source = item && typeof item === "object" ? item : {};
  const content = safeText(source.content, "", 4000);
  const savedVersions = Array.isArray(source.versions)
    ? source.versions.map((version) => safeText(version, "", 4000)).filter(Boolean)
    : [];
  const versions = Array.from(new Set([...savedVersions, content])).filter(Boolean);
  const contentIndex = versions.indexOf(content);
  const requestedIndex = Number.isInteger(source.versionIndex) ? source.versionIndex : contentIndex;
  const versionIndex = versions.length
    ? Math.max(0, Math.min(requestedIndex < 0 ? 0 : requestedIndex, versions.length - 1))
    : 0;
  const savedSources = Array.isArray(source.sources)
    ? source.sources.map((value) => value === "demo" ? "demo" : "")
    : [];
  const currentSource = source.source === "demo" || savedSources[versionIndex] === "demo" ? "demo" : "";
  const sourceRefs = normalizeSourceReferences(source.sourceRefs);
  const sourceQuery = safeText(source.sourceQuery, "", 600);
  const sourceQuality = normalizeSourceQuality(source.sourceQuality);
  const sourceAnswerCoverage = normalizeSourceAnswerCoverage(source.sourceAnswerCoverage);
  const sourceRefsByVersion = normalizeSourceReferencesByVersion(source.sourceRefsByVersion);
  const sourceQueriesByVersion = normalizeSourceQueriesByVersion(source.sourceQueriesByVersion);
  const sourceQualitiesByVersion = normalizeSourceQualitiesByVersion(source.sourceQualitiesByVersion);
  const sourceAnswerCoveragesByVersion = normalizeSourceAnswerCoveragesByVersion(source.sourceAnswerCoveragesByVersion);
  const currentSourceRefs = sourceRefsByVersion.length
    ? (sourceRefsByVersion[versionIndex] || [])
    : sourceRefs;
  const currentSourceQuery = sourceQueriesByVersion.length
    ? (sourceQueriesByVersion[versionIndex] || "")
    : sourceQuery;
  const currentSourceQuality = sourceQualitiesByVersion.length
    ? (sourceQualitiesByVersion[versionIndex] || "")
    : sourceQuality;
  const currentSourceAnswerCoverage = sourceAnswerCoveragesByVersion.length
    ? (sourceAnswerCoveragesByVersion[versionIndex] || "")
    : sourceAnswerCoverage;
  const citationStatus = normalizeCitationStatus(source.sourceCitationStatus);
  const citationUnverified = Array.isArray(source.sourceCitationsUnverified)
    ? source.sourceCitationsUnverified.map((value) => safeText(value, "", 120)).filter(Boolean).slice(0, 8)
    : [];
  const citationStatuses = Array.isArray(source.sourceCitationStatuses)
    ? source.sourceCitationStatuses.map((value) => normalizeCitationStatus(value))
    : [];
  const citationUnverifiedByVersion = Array.isArray(source.sourceCitationsUnverifiedByVersion)
    ? source.sourceCitationsUnverifiedByVersion.map((values) => Array.isArray(values)
      ? values.map((value) => safeText(value, "", 120)).filter(Boolean).slice(0, 8)
      : [])
    : [];
  const currentCitationStatus = citationStatuses.length ? citationStatuses[versionIndex] || "" : citationStatus;
  const currentCitationUnverified = citationUnverifiedByVersion.length
    ? (citationUnverifiedByVersion[versionIndex] || [])
    : citationUnverified;
  const qualityReview = normalizeQualityReview(source.qualityReview);
  const qualityReviewsByVersion = normalizeQualityReviewsByVersion(source.qualityReviewsByVersion);
  const currentQualityReview = qualityReviewsByVersion.length
    ? (qualityReviewsByVersion[versionIndex] || null)
    : qualityReview;
  const qualityRetryCodes = normalizeQualityRetryCodes(source.qualityRetryCodes);
  const qualityRetryCodesByVersion = normalizeQualityRetryCodesByVersion(source.qualityRetryCodesByVersion);
  const currentQualityRetryCodes = qualityRetryCodesByVersion.length
    ? (qualityRetryCodesByVersion[versionIndex] || [])
    : qualityRetryCodes;
  const messageMode = normalizeMessageMode(source.mode);
  const normalized = {
    role: source.role === "user" ? "user" : "assistant",
    name: safeText(source.name, source.role === "user" ? "我" : fallbackAssistantName, 40),
    content: versions[versionIndex] || content,
  };
  if (messageMode) normalized.mode = messageMode;
  if (normalized.role === "assistant" && currentSource) normalized.source = currentSource;
  if (normalized.role === "assistant" && currentSourceRefs.length) normalized.sourceRefs = currentSourceRefs;
  if (normalized.role === "assistant" && currentSourceQuery) normalized.sourceQuery = currentSourceQuery;
  if (normalized.role === "assistant" && currentSourceQuality) normalized.sourceQuality = currentSourceQuality;
  if (normalized.role === "assistant" && currentSourceAnswerCoverage) normalized.sourceAnswerCoverage = currentSourceAnswerCoverage;
  if (normalized.role === "assistant" && currentCitationStatus) normalized.sourceCitationStatus = currentCitationStatus;
  if (normalized.role === "assistant" && currentCitationUnverified.length) normalized.sourceCitationsUnverified = currentCitationUnverified;
  if (normalized.role === "assistant" && currentQualityReview) normalized.qualityReview = currentQualityReview;
  if (normalized.role === "assistant" && currentQualityRetryCodes.length) normalized.qualityRetryCodes = currentQualityRetryCodes;
  if (normalized.role === "assistant" && versions.length > 1) {
    normalized.versions = versions;
    normalized.versionIndex = versionIndex;
    const normalizedSources = versions.map((version, index) => (
      savedSources[index] === "demo" || (version === content && source.source === "demo") ? "demo" : ""
    ));
    if (normalizedSources.some(Boolean)) normalized.sources = normalizedSources;
    if (sourceRefsByVersion.length || currentSourceRefs.length) {
      normalized.sourceRefsByVersion = versions.map((_, index) => sourceRefsByVersion[index] || (index === versionIndex ? currentSourceRefs : []));
    }
    if (sourceQueriesByVersion.length || currentSourceQuery) {
      normalized.sourceQueriesByVersion = versions.map((_, index) => sourceQueriesByVersion[index] || (index === versionIndex ? currentSourceQuery : ""));
    }
    if (sourceQualitiesByVersion.length || currentSourceQuality) {
      normalized.sourceQualitiesByVersion = versions.map((_, index) => sourceQualitiesByVersion[index] || (index === versionIndex ? currentSourceQuality : ""));
    }
    if (sourceAnswerCoveragesByVersion.length || currentSourceAnswerCoverage) {
      normalized.sourceAnswerCoveragesByVersion = versions.map((_, index) => sourceAnswerCoveragesByVersion[index] || (index === versionIndex ? currentSourceAnswerCoverage : ""));
    }
    if (citationStatuses.some(Boolean)) normalized.sourceCitationStatuses = citationStatuses;
    if (citationUnverifiedByVersion.some((values) => values.length)) {
      normalized.sourceCitationsUnverifiedByVersion = citationUnverifiedByVersion;
    }
    if (qualityReviewsByVersion.some(Boolean)) normalized.qualityReviewsByVersion = qualityReviewsByVersion;
    if (qualityRetryCodesByVersion.some((codes) => codes.length)) {
      normalized.qualityRetryCodesByVersion = qualityRetryCodesByVersion;
    }
  }
  return normalized;
}

function normalizeTemplate(item, fallbackTitle = "我的模板") {
  const source = item && typeof item === "object" ? item : {};
  const rawContext = source.context && typeof source.context === "object" ? source.context : {};
  const title = safeText(source.title || rawContext.title, fallbackTitle, 80);
  const rawCharacters = Array.isArray(source.characters) ? source.characters : [];
  const characters = (rawCharacters.length ? rawCharacters : defaultCharacters)
    .map((character) => {
      const value = character && typeof character === "object" ? character : {};
      return {
        name: safeText(value.name, "角色", 40),
        tone: safeText(value.tone, "待设定", 240),
        details: safeText(value.details, "", 500),
      };
    })
    .filter((character, index, list) => list.findIndex((item) => item.name === character.name) === index);
  const prompts = (Array.isArray(source.prompts) ? source.prompts : [])
    .slice(0, maxPrompts)
    .map((prompt) => {
      const value = prompt && typeof prompt === "object" ? prompt : {};
      return {
        id: safeText(value.id, `prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
        title: safeText(value.title, "自定义灵感", 32),
        text: safeText(value.text, "", 500),
      };
    })
    .filter((prompt) => prompt.text);
  const beats = (Array.isArray(source.beats) ? source.beats : [])
    .slice(0, maxSceneBeats)
    .map((beat) => {
      const value = beat && typeof beat === "object" ? beat : {};
      return {
        title: safeText(value.title, "未命名场景", 80),
        goal: safeText(value.goal, "", 280),
      };
    })
    .filter((beat) => beat.title);
  const selectedCharacterName = characters.some((character) => character.name === source.selectedCharacterName)
    ? source.selectedCharacterName
    : characters[0].name;
  return {
    id: safeText(source.id, `template-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    title,
    label: safeText(source.label, "我的模板", 24),
    description: safeText(source.description, `从「${title}」保存的创作底稿，可继续修改后开始新作。`, 160),
    context: {
      title,
      chapter: safeText(rawContext.chapter, "", 120),
      era: safeText(rawContext.era, "", 120),
      world: safeText(rawContext.world, "", 800),
      reference: safeText(rawContext.reference, "", 4000),
      summary: safeText(rawContext.summary, "", 2000),
      instructions: safeText(rawContext.instructions, "", 1200),
    },
    characters,
    selectedCharacterName,
    mode: modeHints[source.mode] ? source.mode : "续写",
    prompts,
    beats,
  };
}

function loadCustomTemplates() {
  try {
    const saved = JSON.parse(localStorage.getItem(customTemplatesStorageKey) || "null");
    if (Array.isArray(saved)) {
      return saved.slice(0, maxCustomTemplates).map((item) => normalizeTemplate(item)).filter(Boolean);
    }
  } catch {
    // Use the built-in starters when custom templates are unavailable.
  }
  return [];
}

function normalizeLibraryCharacter(item, fallbackName = "角色") {
  const source = item && typeof item === "object" ? item : {};
  return {
    id: safeText(source.id, `library-character-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    name: safeText(source.name, fallbackName, 40),
    tone: safeText(source.tone, "待设定", 240),
    details: safeText(source.details, "", 500),
  };
}

function loadCharacterLibrary() {
  try {
    const saved = JSON.parse(localStorage.getItem(characterLibraryStorageKey) || "null");
    if (Array.isArray(saved)) {
      return saved.slice(0, maxLibraryCharacters)
        .map((item) => normalizeLibraryCharacter(item))
        .filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index);
    }
  } catch {
    // Keep the library empty when local storage is unavailable.
  }
  return [];
}

function persistCharacterLibrary() {
  try {
    localStorage.setItem(characterLibraryStorageKey, JSON.stringify(characterLibrary));
    updateStorageStatus();
  } catch {
    notifyStorageIssue();
  }
}

function normalizeLibraryPrompt(item, fallbackTitle = "灵感") {
  const source = item && typeof item === "object" ? item : {};
  return {
    id: safeText(source.id, `library-prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    title: safeText(source.title, fallbackTitle, 32),
    text: safeText(source.text, "", 500),
  };
}

function loadPromptLibrary() {
  try {
    const saved = JSON.parse(localStorage.getItem(promptLibraryStorageKey) || "null");
    if (Array.isArray(saved)) {
      return saved.slice(0, maxLibraryPrompts)
        .map((item) => normalizeLibraryPrompt(item))
        .filter((item) => item.text)
        .filter((item, index, list) => list.findIndex((candidate) => candidate.text === item.text) === index);
    }
  } catch {
    // Keep the library empty when local storage is unavailable.
  }
  return [];
}

function persistPromptLibrary() {
  try {
    localStorage.setItem(promptLibraryStorageKey, JSON.stringify(promptLibrary));
    updateStorageStatus();
  } catch {
    notifyStorageIssue();
  }
}

function normalizeNovelSpace(item) {
  const source = item && typeof item === "object" ? item : {};
  const sourceStatus = source.source && typeof source.source === "object" ? source.source : {};
  const memory = source.memory && typeof source.memory === "object" ? source.memory : {};
  return {
    id: safeText(source.id, defaultNovelSpaceId, 100),
    name: safeText(source.name || sourceStatus.name, "未命名小说", 80),
    filename: safeText(source.filename, "本地配置文件", 180),
    kind: source.kind === "uploaded" ? "uploaded" : "configured",
    source: {
      ...sourceStatus,
      id: safeText(sourceStatus.id || source.id, defaultNovelSpaceId, 100),
      name: safeText(sourceStatus.name || source.name, "未命名小说", 80),
      chunks: Number.isFinite(Number(sourceStatus.chunks)) ? Number(sourceStatus.chunks) : 0,
      format: safeText(sourceStatus.format, "txt", 20),
      parseStatus: safeText(sourceStatus.parse_status, "ready", 20),
      parseMessage: safeText(sourceStatus.parse_message, "", 160),
      sourceFiles: Array.isArray(sourceStatus.source_files)
        ? sourceStatus.source_files.map((item) => safeText(item, "", 180)).filter(Boolean).slice(0, 32)
        : [],
      parseDiagnostics: {
        quality: safeText(sourceStatus.parse_diagnostics?.quality || sourceStatus.parse_status, "ready", 20),
        recognizedSections: Number(sourceStatus.parse_diagnostics?.recognized_sections) || 0,
        averageChunkCharacters: Number(sourceStatus.parse_diagnostics?.average_chunk_characters) || 0,
        headingCoverage: Number(sourceStatus.parse_diagnostics?.heading_coverage) || 0,
        warnings: Array.isArray(sourceStatus.parse_diagnostics?.warnings)
          ? sourceStatus.parse_diagnostics.warnings.map((item) => safeText(item, "", 180)).filter(Boolean).slice(0, 4)
          : [],
      },
      available: Boolean(sourceStatus.available),
      configured: Boolean(sourceStatus.configured),
      encoding: safeText(sourceStatus.encoding, "", 30),
      revision: safeText(sourceStatus.revision, "", 80),
    },
    memory: {
      count: Number.isFinite(Number(memory.count)) ? Number(memory.count) : 0,
      updated_at: Number(memory.updated_at) || 0,
      staleCount: Math.max(0, Number(memory.stale_count || memory.staleCount) || 0),
    },
    created_at: Number(source.created_at) || 0,
    updated_at: Number(source.updated_at) || 0,
    lastAccessedAt: Number(source.last_accessed_at || source.lastAccessedAt) || 0,
  };
}

function loadNovelSpaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(novelSpacesStorageKey) || "null");
    if (Array.isArray(saved)) {
      return saved.map((item) => normalizeNovelSpace(item))
        .filter((item, index, list) => list.findIndex((candidate) => candidate.id === item.id) === index);
    }
  } catch {
    // Server metadata remains the source of truth when browser storage is unavailable.
  }
  return [];
}

function persistNovelSpaces() {
  try {
    localStorage.setItem(novelSpacesStorageKey, JSON.stringify(novelSpaces));
    localStorage.setItem(activeNovelSpaceStorageKey, activeNovelSpaceId);
  } catch {
    notifyStorageIssue();
  }
}

function getActiveNovelSpace() {
  return novelSpaces.find((space) => space.id === activeNovelSpaceId)
    || novelSpaces.find((space) => space.id === defaultNovelSpaceId)
    || novelSpaces[0]
    || null;
}

function novelSpaceForProject(project = getActiveProject()) {
  return novelSpaces.find((space) => space.id === project?.novelSpaceId) || getActiveNovelSpace();
}

function getCurrentNovelSpaceId() {
  const projectSpaceId = getActiveProject()?.novelSpaceId;
  if (projectSpaceId && novelSpaces.some((space) => space.id === projectSpaceId)) return projectSpaceId;
  if (activeNovelSpaceId && novelSpaces.some((space) => space.id === activeNovelSpaceId)) return activeNovelSpaceId;
  return defaultNovelSpaceId;
}

const novelMemoryKindLabels = {
  manual: "手动记录",
  summary: "剧情摘要",
  scene_outcome: "本幕结果",
  source_evidence: "原作依据",
  source_summary: "原作章节摘要",
};
const maxNovelMemoryNotes = 100;

function normalizeNovelMemory(memory, fallbackSpaceId = defaultNovelSpaceId) {
  const source = memory && typeof memory === "object" ? memory : {};
  const notes = Array.isArray(source.notes) ? source.notes : [];
  return {
    spaceId: safeText(source.space_id || source.spaceId, fallbackSpaceId, 100),
    notes: notes.map((item) => ({
      id: safeText(item?.id, `note-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 80),
      title: safeText(item?.title, "空间笔记", 80),
      content: safeText(item?.content, "", 4000),
      kind: Object.prototype.hasOwnProperty.call(novelMemoryKindLabels, item?.kind) ? item.kind : "manual",
      origin: safeText(item?.origin, "", 120),
      sourceRevision: safeText(item?.source_revision || item?.sourceRevision, "", 80),
      sourceChapter: safeText(item?.source_chapter || item?.sourceChapter, "", 160),
      sourceChunkIndex: Math.max(0, Number(item?.source_chunk_index || item?.sourceChunkIndex) || 0),
      sourceChunkCount: Math.max(0, Number(item?.source_chunk_count || item?.sourceChunkCount) || 0),
      sourceStale: item?.source_stale === true || item?.sourceStale === true,
      sourceStaleReason: safeText(item?.source_stale_reason || item?.sourceStaleReason, "", 20),
      pinned: item?.pinned === true,
      created_at: Number(item?.created_at) || 0,
      updated_at: Number(item?.updated_at) || 0,
    })).filter((item) => item.content).slice(0, maxNovelMemoryNotes),
    count: Number.isFinite(Number(source.count)) ? Number(source.count) : notes.length,
    updated_at: Number(source.updated_at) || 0,
    staleCount: Math.max(0, Number(source.stale_count || source.staleCount) || 0),
  };
}

function novelMemorySpaceSummary(memory) {
  const notes = Array.isArray(memory?.notes) ? memory.notes : [];
  return {
    count: notes.length,
    updated_at: Number(memory?.updated_at) || 0,
    stale_count: notes.filter((note) => note.sourceStale).length,
  };
}

function setMemoryLayer(layer, { focus = false } = {}) {
  activeMemoryLayer = layer === "creative" ? "creative" : "source";
  const sourceActive = activeMemoryLayer === "source";
  if (sourceKnowledgePanel) sourceKnowledgePanel.hidden = !sourceActive;
  if (modelMemoryList) modelMemoryList.hidden = !sourceActive;
  if (creativeMemoryPanel) creativeMemoryPanel.hidden = sourceActive;
  if (openNovelMemoryComposerButton) openNovelMemoryComposerButton.hidden = sourceActive;
  memoryLayerTabs.forEach((button) => {
    const active = button.dataset.memoryLayer === activeMemoryLayer;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
  if (sourceActive) {
    loadSourceKnowledge(getCurrentNovelSpaceId());
    loadReviewedMemoryStatus(getCurrentNovelSpaceId());
    loadReviewedMemoryPreview(getCurrentNovelSpaceId());
    if (focus) sourceKnowledgeSearchInput?.focus();
  } else if (focus) {
    novelMemorySearchInput?.focus();
  }
}

function normalizeModelMemory(payload, spaceId) {
  const source = payload && typeof payload === "object" ? payload : {};
  const knowledgeLayer = safeText(source.knowledge_layer, "model_memory_preview", 40);
  return {
    spaceId,
    count: Math.max(0, Number(source.count) || 0),
    filteredCount: Math.max(0, Number(source.filtered_count ?? source.count) || 0),
    knowledgeLayer,
    isReviewed: source.is_reviewed === true || knowledgeLayer === "reviewed_graph",
    isTemporary: source.is_temporary !== false && knowledgeLayer !== "reviewed_graph",
    streaming: source.streaming === true,
    memoryBuild: source.memory_build && typeof source.memory_build === "object" ? source.memory_build : {},
    categoryCounts: source.category_counts && typeof source.category_counts === "object" ? source.category_counts : {},
    chapters: (Array.isArray(source.available_chapters) ? source.available_chapters : [])
      .map((item) => ({ title: safeText(item?.title, "", 160), count: Math.max(0, Number(item?.count) || 0) }))
      .filter((item) => item.title),
    filters: source.filters && typeof source.filters === "object" ? source.filters : {},
    items: (Array.isArray(source.items) ? source.items : []).map((item) => ({
      id: safeText(item?.id, "", 80),
      category: safeText(item?.category, "event", 20),
      categoryLabel: safeText(item?.category_label, "原作记忆", 20),
      title: safeText(item?.title, "原作记忆", 80),
      content: safeText(item?.content, "", 420),
      evidenceQuote: safeText(item?.evidence_quote, "", 420),
      chapter: safeText(item?.chapter, "未知章节", 160),
    })).filter((item) => item.content),
  };
}

function renderModelMemoryChapterOptions(current) {
  if (!modelMemoryChapterOptions) return;
  modelMemoryChapterOptions.replaceChildren();
  (Array.isArray(current?.chapters) ? current.chapters : []).forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter.title;
    option.label = `${chapter.title} · ${chapter.count} 条`;
    modelMemoryChapterOptions.appendChild(option);
  });
}

function renderModelMemory() {
  if (!modelMemoryList) return;
  const currentSpaceId = getCurrentNovelSpaceId();
  const current = activeModelMemory.spaceId === currentSpaceId
    ? activeModelMemory
    : { count: 0, items: [], knowledgeLayer: "model_memory_preview", isReviewed: false, isTemporary: true, streaming: false, memoryBuild: {} };
  const reviewed = current.knowledgeLayer === "reviewed_graph" || current.isReviewed === true;
  const build = current.memoryBuild || {};
  const completed = Math.max(0, Number(build.completed_chapters) || 0);
  const total = Math.max(0, Number(build.total_chapters) || 0);
  const filteredCount = Math.max(0, Number(current.filteredCount ?? current.count) || 0);
  const hasFilters = activeModelMemoryCategory !== "all" || Boolean(activeModelMemoryChapter.trim());
  if (modelMemoryCount) {
    modelMemoryCount.textContent = current.count
      ? hasFilters
        ? `显示 ${filteredCount.toLocaleString("zh-CN")} / ${current.count.toLocaleString("zh-CN")} 条${reviewed ? "已审核记忆" : "模型记忆"}`
        : `${current.count.toLocaleString("zh-CN")} 条${reviewed ? "已审核记忆" : "模型记忆"}`
      : reviewed ? "尚未形成记忆" : "模型记忆正在生成";
  }
  if (modelMemoryLive) {
    modelMemoryLive.textContent = current.streaming ? "● 实时更新" : reviewed ? "✓ 已完成" : "○ 等待构建";
    modelMemoryLive.classList.toggle("is-live", current.streaming);
  }
  if (modelMemoryHint) {
    modelMemoryHint.textContent = current.streaming
      ? `后台每完成一章就会刷新一次；当前已处理 ${completed.toLocaleString("zh-CN")} / ${total.toLocaleString("zh-CN")} 章。以下是阶段性提取结果。`
      : reviewed
        ? "这些记忆已通过原文证据审查，并保留可回查的章节出处。"
        : "全文记忆尚未产出可展示的模型结果；下方原文线索已收起，仅用于手动核对。";
  }
  if (modelMemoryCategory && modelMemoryCategory.value !== activeModelMemoryCategory) modelMemoryCategory.value = activeModelMemoryCategory;
  if (modelMemoryChapter && modelMemoryChapter.value !== activeModelMemoryChapter) modelMemoryChapter.value = activeModelMemoryChapter;
  if (clearModelMemoryFiltersButton) clearModelMemoryFiltersButton.hidden = !hasFilters;
  renderModelMemoryChapterOptions(current);
  modelMemoryList.replaceChildren();
  if (!current.items.length) {
    const empty = document.createElement("p");
    empty.className = "memory-empty model-memory-empty";
    empty.textContent = hasFilters
      ? "没有符合当前筛选条件的模型记忆。"
      : current.streaming ? "模型正在提取第一批记忆……" : "暂时没有可展示的模型记忆。";
    modelMemoryList.appendChild(empty);
    return;
  }
  const categoryLabels = { character: "人物", relation: "关系", setting: "设定", event: "事件" };
  current.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `model-memory-card${reviewed ? " is-reviewed-memory" : " is-streaming-memory"}`;
    const badge = document.createElement("span");
    badge.className = `source-knowledge-badge is-${item.category}`;
    badge.textContent = `${reviewed ? "已审核" : "模型提取"} · ${categoryLabels[item.category] || item.categoryLabel}`;
    const content = document.createElement("p");
    content.textContent = item.content;
    const source = document.createElement("button");
    source.type = "button";
    source.className = "source-knowledge-source";
    source.textContent = item.chapter;
    source.title = "打开对应原文章节";
    source.addEventListener("click", () => {
      setWorkspaceView("source", { announce: true, focus: false });
      openSourceChapterReader(item.chapter);
    });
    card.append(badge, content, source);
    modelMemoryList.appendChild(card);
  });
}

async function loadReviewedMemoryPreview(spaceId = getCurrentNovelSpaceId()) {
  if (!modelMemoryList) return;
  const normalizedSpaceId = safeText(spaceId, defaultNovelSpaceId, 100);
  if (activeModelMemory.spaceId !== normalizedSpaceId) activeModelMemoryChapter = "";
  const requestId = ++modelMemoryRequestId;
  try {
    const query = new URLSearchParams({
      novel_space_id: normalizedSpaceId,
      category: activeModelMemoryCategory,
      chapter: activeModelMemoryChapter,
      limit: "80",
    });
    const response = await fetchWithTimeout(`/api/novels/reviewed-memory/preview?${query}`, {}, 15000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory_preview) throw new Error(payload.error || "模型记忆读取失败");
    if (requestId !== modelMemoryRequestId || getCurrentNovelSpaceId() !== normalizedSpaceId) return;
    activeModelMemory = normalizeModelMemory(payload.memory_preview, normalizedSpaceId);
    renderModelMemory();
  } catch (error) {
    if (requestId !== modelMemoryRequestId) return;
    activeModelMemory = { spaceId: normalizedSpaceId, count: 0, items: [], knowledgeLayer: "model_memory_preview", isReviewed: false, isTemporary: true, streaming: false, memoryBuild: {} };
    if (modelMemoryHint) modelMemoryHint.textContent = error?.message || "模型记忆暂时无法读取";
    renderModelMemory();
  }
}

function normalizeSourceKnowledge(payload, spaceId) {
  const source = payload && typeof payload === "object" ? payload : {};
  const counts = source.counts && typeof source.counts === "object" ? source.counts : {};
  const knowledgeLayer = safeText(source.knowledge_layer, "source_index", 30);
  return {
    spaceId,
    count: Math.max(0, Number(source.count) || 0),
    knowledgeLayer,
    isReviewed: source.is_reviewed === true || knowledgeLayer === "reviewed_graph",
    isTemporary: source.is_temporary !== false && knowledgeLayer !== "reviewed_graph",
    counts: {
      character: Math.max(0, Number(counts.character) || 0),
      relation: Math.max(0, Number(counts.relation) || 0),
      setting: Math.max(0, Number(counts.setting) || 0),
      event: Math.max(0, Number(counts.event) || 0),
    },
    items: (Array.isArray(source.items) ? source.items : []).map((item) => ({
      id: safeText(item?.id, "", 80),
      category: safeText(item?.category, "setting", 20),
      categoryLabel: safeText(item?.category_label, "原作知识", 20),
      title: safeText(item?.title, "原作知识", 80),
      content: safeText(item?.content, "", 320),
      chapter: safeText(item?.chapter, "作品开篇", 160),
    })).filter((item) => item.content),
  };
}

function renderSourceKnowledge() {
  if (!sourceKnowledgeList) return;
  const currentSpaceId = getCurrentNovelSpaceId();
  const current = activeSourceKnowledge.spaceId === currentSpaceId
    ? activeSourceKnowledge
    : { count: 0, counts: {}, items: [], knowledgeLayer: "source_index", isReviewed: false, isTemporary: true };
  const reviewedLayer = current.knowledgeLayer === "reviewed_graph" || current.isReviewed === true;
  const categoryLabels = reviewedLayer
    ? { character: "人物信息", relation: "人物关系", setting: "世界设定", event: "关键事件" }
    : { character: "人物线索", relation: "关系线索", setting: "设定线索", event: "事件线索" };
  sourceKnowledgeSummary?.querySelectorAll("[data-source-knowledge-count]").forEach((counter) => {
    const category = counter.dataset.sourceKnowledgeCount || "all";
    counter.textContent = String(category === "all" ? current.count : Number(current.counts?.[category]) || 0);
  });
  sourceKnowledgeSummary?.querySelectorAll("[data-source-knowledge-category]").forEach((button) => {
    const category = button.dataset.sourceKnowledgeCategory;
    const label = button.querySelector("span");
    if (label && category && category !== "all") label.textContent = categoryLabels[category] || "原作依据";
  });
  sourceKnowledgeSummary?.querySelectorAll("[data-source-knowledge-category]").forEach((button) => {
    const active = button.dataset.sourceKnowledgeCategory === activeSourceKnowledgeCategory;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const fullBuildActive = reviewedMemoryBuildState.scope === "full"
    && ["queued", "extracting", "reviewing", "building", "cancelling"].includes(reviewedMemoryBuildState.status);
  if (sourceKnowledgeCount) {
    sourceKnowledgeCount.textContent = current.count
      ? `${current.count.toLocaleString("zh-CN")} 条${reviewedLayer ? "已审核记忆" : "原文线索"}`
      : reviewedLayer ? "尚未形成记忆" : "尚未整理原文线索";
  }
  if (sourceKnowledgeHint?.dataset.state === "ready") {
    sourceKnowledgeHint.textContent = reviewedLayer
      ? "这些条目已通过原文证据审查，并保留章节出处；已参与原作问答，可作为结构化记忆使用。"
      : fullBuildActive
        ? "当前展示的是可回查的原文线索；全文记忆正在构建，审核通过后会自动切换。"
        : "这些内容直接来自原文，是用于定位依据的线索，不等于结构化记忆。";
  }
  sourceKnowledgeList.replaceChildren();
  if (!current.items.length) {
    const empty = document.createElement("p");
    empty.className = "memory-empty source-knowledge-empty";
    empty.textContent = sourceKnowledgeHint?.dataset.state === "loading"
      ? "正在从原文中整理人物、关系和世界设定……"
      : sourceKnowledgeSearchInput?.value.trim() || activeSourceKnowledgeCategory !== "all"
        ? "没有找到符合当前条件的原作知识。"
        : "当前原文还没有可展示的线索。";
    sourceKnowledgeList.appendChild(empty);
    return;
  }
  current.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `source-knowledge-card${reviewedLayer ? " is-reviewed-memory" : " is-source-index"}`;
    const badge = document.createElement("span");
    badge.className = `source-knowledge-badge is-${item.category}`;
    badge.textContent = reviewedLayer ? item.categoryLabel : `${categoryLabels[item.category] || "原文线索"}`;
    const content = document.createElement("p");
    content.textContent = item.content;
    const source = document.createElement("button");
    source.type = "button";
    source.className = "source-knowledge-source";
    source.textContent = item.chapter;
    source.title = "打开对应原文章节";
    source.addEventListener("click", () => {
      setWorkspaceView("source", { announce: true, focus: false });
      openSourceChapterReader(item.chapter);
    });
    card.append(badge, content, source);
    sourceKnowledgeList.appendChild(card);
  });
}

async function loadSourceKnowledge(spaceId = getCurrentNovelSpaceId(), { force = false } = {}) {
  if (!sourceKnowledgeList) return;
  const normalizedSpaceId = safeText(spaceId, defaultNovelSpaceId, 100);
  const requestId = ++sourceKnowledgeRequestId;
  if (sourceKnowledgeHint) {
    sourceKnowledgeHint.dataset.state = "loading";
    sourceKnowledgeHint.textContent = force ? "正在重新整理原作知识……" : "正在读取原作知识……";
  }
  renderSourceKnowledge();
  const query = sourceKnowledgeSearchInput?.value.trim() || "";
  const body = {
    novel_space_id: normalizedSpaceId,
    query,
    category: activeSourceKnowledgeCategory,
    limit: 16,
  };
  try {
    const url = force
      ? "/api/novels/knowledge"
      : `/api/novels/knowledge?${new URLSearchParams({
        novel_space_id: normalizedSpaceId,
        query,
        category: activeSourceKnowledgeCategory,
        limit: "16",
      }).toString()}`;
    const response = await fetchWithTimeout(url, force ? {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    } : {}, 30000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.knowledge) throw new Error(payload.error || "原作知识读取失败");
    if (requestId !== sourceKnowledgeRequestId || getCurrentNovelSpaceId() !== normalizedSpaceId) return;
    activeSourceKnowledge = normalizeSourceKnowledge(payload.knowledge, normalizedSpaceId);
    if (sourceKnowledgeHint) {
      sourceKnowledgeHint.dataset.state = "ready";
    }
    renderSourceKnowledge();
  } catch (error) {
    if (requestId !== sourceKnowledgeRequestId) return;
    activeSourceKnowledge = { spaceId: normalizedSpaceId, count: 0, counts: {}, items: [], knowledgeLayer: "source_index", isReviewed: false, isTemporary: true };
    if (sourceKnowledgeHint) {
      sourceKnowledgeHint.dataset.state = "error";
      sourceKnowledgeHint.textContent = error?.message || "原作知识暂时无法读取";
    }
    renderSourceKnowledge();
  }
}

function normalizeReviewedMemoryBuild(payload, spaceId) {
  const source = payload && typeof payload === "object" ? payload : {};
  const rawMetrics = source.token_metrics && typeof source.token_metrics === "object" ? source.token_metrics : {};
  return {
    spaceId,
    status: safeText(source.status, "idle", 30),
    stage: safeText(source.stage, "", 180),
    progress: Math.max(0, Math.min(100, Number(source.progress) || 0)),
    completedChapters: Math.max(0, Number(source.completed_chapters) || 0),
    totalChapters: Math.max(0, Number(source.total_chapters) || 0),
    tokenMetrics: {
      inputTokens: Math.max(0, Number(rawMetrics.input_tokens) || 0),
      outputTokens: Math.max(0, Number(rawMetrics.output_tokens) || 0),
      totalTokens: Math.max(0, Number(rawMetrics.total_tokens) || 0),
      estimatedTotalTokens: Math.max(0, Number(rawMetrics.estimated_total_tokens) || 0),
      remainingTokens: Math.max(0, Number(rawMetrics.remaining_tokens) || 0),
      elapsedSeconds: Math.max(0, Number(rawMetrics.elapsed_seconds) || 0),
      tokensPerMinute: Math.max(0, Number(rawMetrics.tokens_per_minute) || 0),
      estimatedFinishAt: Math.max(0, Number(rawMetrics.estimated_finish_at) || 0),
      calls: Math.max(0, Number(rawMetrics.calls) || 0),
      usageSource: safeText(rawMetrics.usage_source, "estimated", 20),
    },
    memoryRevision: safeText(source.memory_revision, "", 80),
    error: safeText(source.error, "", 180),
    canStart: source.can_start === true,
    canCancel: source.can_cancel === true,
    canPromote: source.can_promote === true,
    productReady: source.product_ready === true,
    scope: source.scope === "full" ? "full" : "pilot",
  };
}

function formatTokenMetric(value) {
  const amount = Math.max(0, Number(value) || 0);
  if (amount >= 1000000) return `${(amount / 1000000).toFixed(amount >= 10000000 ? 1 : 2)}M`;
  if (amount >= 1000) return `${(amount / 1000).toFixed(amount >= 100000 ? 0 : 1)}k`;
  return Math.round(amount).toLocaleString("zh-CN");
}

function formatMemoryElapsed(seconds) {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remaining = total % 60;
  if (hours) return `${hours}h ${minutes}m`;
  if (minutes) return `${minutes}m ${remaining}s`;
  return `${remaining}s`;
}

function formatMemoryFinish(epochSeconds) {
  const epoch = Number(epochSeconds) || 0;
  if (!epoch) return "计算中";
  const date = new Date(epoch * 1000);
  if (Number.isNaN(date.getTime())) return "计算中";
  const now = new Date();
  const sameDay = date.toDateString() === now.toDateString();
  const time = date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  return sameDay ? time : `${date.getMonth() + 1}月${date.getDate()}日 ${time}`;
}

function renderReviewedMemoryBuild() {
  if (!reviewedMemoryBuild) return;
  const state = reviewedMemoryBuildState.spaceId === getCurrentNovelSpaceId()
    ? reviewedMemoryBuildState
    : { status: "loading", progress: 0 };
  const active = ["queued", "extracting", "reviewing", "building", "cancelling"].includes(state.status);
  let content = {
    loading: ["正在读取记忆状态", "请稍候。"],
    idle: ["增强人物与设定理解", "原文问答已经可用。构建后，复杂关系与世界规则会更准确。"],
    queued: ["深度记忆正在准备", state.stage || "正在选择代表章节。"],
    extracting: ["正在理解原作", state.stage || "正在提取人物、关系与世界规则。"],
    reviewing: ["正在核对每条记忆", state.stage || "每条知识都要通过原文证据审查。"],
    building: ["正在建立知识关联", state.stage || "正在连接人物、地点和关键事件。"],
    cancelling: ["正在暂停", "当前请求结束后会保留已完成的进度。"],
    cancelled: ["构建已暂停", "已完成的章节会保留，下次可以继续。"],
    interrupted: ["上次构建被中断", "已完成的章节仍在，可以继续构建。"],
    error: ["构建没有完成", state.error || "可以检查模型服务后重试。"],
    needs_review: ["本次结果未通过审查", "有些事实的证据不够可靠，本次不会用于问答。可以重新构建。"],
    pilot_ready: ["深度记忆已审查", "启用后，问答会优先使用这些有原文依据的人物关系与世界设定。"],
    production: ["深度记忆已启用", "复杂关系与世界规则会优先使用已审查的原作知识。"],
    stale: ["原文已经更新", "旧记忆不会继续使用，请基于新版本重新构建。"],
  }[state.status] || ["增强人物与设定理解", state.stage || "可以开始构建。"];
  if (state.scope === "full" && active) {
    const chapterProgress = state.totalChapters
      ? `已处理 ${state.completedChapters.toLocaleString("zh-CN")} / ${state.totalChapters.toLocaleString("zh-CN")} 章。`
      : "进度会自动保存。";
    content = ["正在构建全文记忆", `${state.stage || "正在逐章提取并核对原作事实。"} ${chapterProgress} 下方暂时只展示原文线索。`];
  }
  reviewedMemoryBuild.dataset.state = state.status;
  if (reviewedMemoryBuildTitle) reviewedMemoryBuildTitle.textContent = content[0];
  if (reviewedMemoryBuildDescription) reviewedMemoryBuildDescription.textContent = content[1];
  if (reviewedMemoryProgress) {
    reviewedMemoryProgress.hidden = !active;
    reviewedMemoryProgress.setAttribute("aria-valuenow", String(Math.round(state.progress || 0)));
  }
  if (reviewedMemoryProgressBar) reviewedMemoryProgressBar.style.width = `${state.progress || 0}%`;
  const metrics = state.tokenMetrics || {};
  const metricsVisible = active || metrics.totalTokens > 0 || metrics.estimatedTotalTokens > 0;
  if (reviewedMemoryMetrics) reviewedMemoryMetrics.hidden = !metricsVisible;
  const tokenCountApproximate = metrics.usageSource !== "provider";
  if (memoryTokensSpent) memoryTokensSpent.textContent = `${tokenCountApproximate && metrics.totalTokens ? "≈" : ""}${formatTokenMetric(metrics.totalTokens)}`;
  if (memoryTokensSpentLabel) memoryTokensSpentLabel.textContent = tokenCountApproximate ? "已用 token（含估算）" : "已用 token";
  if (memoryElapsedTime) memoryElapsedTime.textContent = formatMemoryElapsed(metrics.elapsedSeconds);
  if (memoryEstimatedTokens) memoryEstimatedTokens.textContent = formatTokenMetric(metrics.estimatedTotalTokens);
  if (memoryTokensPerMinute) memoryTokensPerMinute.textContent = metrics.tokensPerMinute ? formatTokenMetric(metrics.tokensPerMinute) : "收集中";
  if (memoryEstimatedFinish) memoryEstimatedFinish.textContent = formatMemoryFinish(metrics.estimatedFinishAt);
  if (startReviewedMemoryBuildButton) {
    startReviewedMemoryBuildButton.hidden = !state.canStart && !["idle", "cancelled", "interrupted", "error", "needs_review", "stale"].includes(state.status);
    startReviewedMemoryBuildButton.disabled = active || state.status === "loading";
    startReviewedMemoryBuildButton.textContent = ["cancelled", "interrupted"].includes(state.status) ? "继续构建" : ["error", "needs_review", "stale"].includes(state.status) ? "重新构建" : "开始构建";
  }
  if (startFullReviewedMemoryBuildButton) {
    startFullReviewedMemoryBuildButton.hidden = state.status !== "pilot_ready";
    startFullReviewedMemoryBuildButton.disabled = active;
  }
  if (promoteReviewedMemoryBuildButton) promoteReviewedMemoryBuildButton.hidden = !state.canPromote;
  if (cancelReviewedMemoryBuildButton) cancelReviewedMemoryBuildButton.hidden = !state.canCancel;
  renderModelMemory();
  if (sourceKnowledgeList) renderSourceKnowledge();
}

function scheduleReviewedMemoryStatus(spaceId) {
  window.clearTimeout(reviewedMemoryStatusTimer);
  if (!["queued", "extracting", "reviewing", "building", "cancelling"].includes(reviewedMemoryBuildState.status)) return;
  reviewedMemoryStatusTimer = window.setTimeout(() => loadReviewedMemoryStatus(spaceId), 1500);
}

async function loadReviewedMemoryStatus(spaceId = getCurrentNovelSpaceId()) {
  const normalizedSpaceId = safeText(spaceId, defaultNovelSpaceId, 100);
  window.clearTimeout(reviewedMemoryStatusTimer);
  if (reviewedMemoryBuildState.spaceId !== normalizedSpaceId) {
    reviewedMemoryBuildState = { spaceId: normalizedSpaceId, status: "loading", progress: 0, memoryRevision: "" };
    renderReviewedMemoryBuild();
  }
  try {
    const query = new URLSearchParams({ novel_space_id: normalizedSpaceId });
    const response = await fetchWithTimeout(`/api/novels/reviewed-memory/status?${query}`, {}, 15000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory_build) throw new Error(payload.error || "深度记忆状态读取失败");
    if (getCurrentNovelSpaceId() !== normalizedSpaceId) return;
    const wasProductReady = reviewedMemoryBuildState.productReady === true;
    reviewedMemoryBuildState = normalizeReviewedMemoryBuild(payload.memory_build, normalizedSpaceId);
    renderReviewedMemoryBuild();
    await loadReviewedMemoryPreview(normalizedSpaceId);
    if (!wasProductReady && reviewedMemoryBuildState.productReady) {
      await loadSourceKnowledge(normalizedSpaceId);
    }
    scheduleReviewedMemoryStatus(normalizedSpaceId);
  } catch (error) {
    if (getCurrentNovelSpaceId() !== normalizedSpaceId) return;
    reviewedMemoryBuildState = {
      spaceId: normalizedSpaceId,
      status: "error",
      progress: 0,
      memoryRevision: "",
      error: error?.message || "深度记忆状态读取失败",
      canStart: true,
    };
    renderReviewedMemoryBuild();
  }
}

async function startReviewedMemoryBuild(scope = "pilot") {
  const spaceId = getCurrentNovelSpaceId();
  const novelName = getCurrentNovelDisplayName();
  const fullBuild = scope === "full";
  if (!await ensureProviderDataConsent(
    fullBuild ? "构建全文记忆" : "构建深度记忆",
    fullBuild
      ? `全文构建会把「${novelName}」按章节逐次发送有限预览给当前模型服务，每次只处理一章；任务可暂停并从断点继续，不会一次发送完整小说或本地索引。`
      : `构建深度记忆会把「${novelName}」中最多 6 个代表章节的有限预览发送给当前模型服务，用于提取并核对人物、关系与设定。不会发送完整小说或本地索引。`,
  )) return;
  if (startReviewedMemoryBuildButton) startReviewedMemoryBuildButton.disabled = true;
  try {
    const response = await fetchWithTimeout("/api/novels/reviewed-memory/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        novel_space_id: spaceId,
        provider: providerSelect.value,
        model: modelName.value.trim(),
        chapter_limit: 6,
        scope: fullBuild ? "full" : "pilot",
      }),
    }, 30000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory_build) throw new Error(payload.error || "无法开始构建深度记忆");
    reviewedMemoryBuildState = normalizeReviewedMemoryBuild(payload.memory_build, spaceId);
    renderReviewedMemoryBuild();
    scheduleReviewedMemoryStatus(spaceId);
  } catch (error) {
    showToast(error?.message || "无法开始构建深度记忆");
    await loadReviewedMemoryStatus(spaceId);
  }
}

async function cancelReviewedMemoryBuild() {
  const spaceId = getCurrentNovelSpaceId();
  try {
    const response = await fetchWithTimeout("/api/novels/reviewed-memory/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ novel_space_id: spaceId }),
    }, 15000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory_build) throw new Error(payload.error || "无法暂停构建");
    reviewedMemoryBuildState = normalizeReviewedMemoryBuild(payload.memory_build, spaceId);
    renderReviewedMemoryBuild();
    scheduleReviewedMemoryStatus(spaceId);
  } catch (error) {
    showToast(error?.message || "无法暂停构建");
  }
}

async function promoteReviewedMemoryBuild() {
  const spaceId = getCurrentNovelSpaceId();
  if (!reviewedMemoryBuildState.memoryRevision) return;
  if (promoteReviewedMemoryBuildButton) promoteReviewedMemoryBuildButton.disabled = true;
  try {
    const response = await fetchWithTimeout("/api/novels/reviewed-memory/promote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        novel_space_id: spaceId,
        memory_revision: reviewedMemoryBuildState.memoryRevision,
      }),
    }, 15000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory_build) throw new Error(payload.error || "无法启用深度记忆");
    reviewedMemoryBuildState = normalizeReviewedMemoryBuild(payload.memory_build, spaceId);
    renderReviewedMemoryBuild();
    await loadSourceKnowledge(spaceId);
    showToast("深度记忆已启用");
  } catch (error) {
    showToast(error?.message || "无法启用深度记忆");
  } finally {
    if (promoteReviewedMemoryBuildButton) promoteReviewedMemoryBuildButton.disabled = false;
  }
}

function renderNovelMemory() {
  if (!novelMemoryList) return;
  if (novelMemorySpaceName) novelMemorySpaceName.textContent = getCurrentNovelDisplayName();
  const allNotes = activeNovelMemory.notes || [];
  const query = novelMemorySearchInput?.value.trim().toLocaleLowerCase() || "";
  const kind = novelMemoryKindFilter?.value || "all";
  if (clearNovelMemoryFiltersButton) clearNovelMemoryFiltersButton.hidden = !query && kind === "all";
  const staleCount = allNotes.filter((note) => note.sourceStale).length;
  const sourceMemoryCount = allNotes.filter((note) => ["source_evidence", "source_summary"].includes(note.kind)).length;
  const continuityMemoryCount = allNotes.filter((note) => ["manual", "summary", "scene_outcome"].includes(note.kind)).length;
  novelMemorySummary?.querySelectorAll("[data-memory-summary-count]").forEach((counter) => {
    const summaryKind = counter.dataset.memorySummaryCount || "all";
    const count = summaryKind === "source"
      ? sourceMemoryCount
      : summaryKind === "continuity"
        ? continuityMemoryCount
        : summaryKind === "stale" ? staleCount : allNotes.length;
    counter.textContent = Number(count).toLocaleString("zh-CN");
  });
  novelMemorySummary?.querySelectorAll("[data-memory-summary-kind]").forEach((button) => {
    const active = button.dataset.memorySummaryKind === kind;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const notes = allNotes.filter((note) => {
    if (kind === "stale" && !note.sourceStale) return false;
    if (kind === "source" && !["source_evidence", "source_summary"].includes(note.kind)) return false;
    if (kind === "continuity" && !["manual", "summary", "scene_outcome"].includes(note.kind)) return false;
    if (!["all", "stale", "source", "continuity"].includes(kind) && note.kind !== kind) return false;
    if (!query) return true;
    return [note.title, note.content, note.origin].some((value) => String(value || "").toLocaleLowerCase().includes(query));
  }).sort((left, right) => {
    if (left.pinned !== right.pinned) return left.pinned ? -1 : 1;
    return Number(right.updated_at || 0) - Number(left.updated_at || 0);
  });
  novelMemoryList.replaceChildren();
  const pinnedCount = allNotes.filter((note) => note.pinned).length;
  if (novelMemoryCount) novelMemoryCount.textContent = notes.length === allNotes.length
    ? novelMemoryLoadInFlight[activeNovelMemory.spaceId]
      ? "正在读取……"
      : `${allNotes.length} 条记忆`
    : `${notes.length} / ${allNotes.length} 条记忆`;
  if (previewNovelMemoryButton) {
    previewNovelMemoryButton.disabled = !allNotes.length || Boolean(novelMemoryLoadInFlight[activeNovelMemory.spaceId]);
    previewNovelMemoryButton.title = allNotes.length ? "查看当前续写任务会带入哪些记忆" : "还没有可用于续写的记忆";
  }
  if (novelMemoryContextHint) {
    novelMemoryContextHint.textContent = staleCount
      ? `${staleCount} 条记忆需要重新核对，核对前不会用于续写。`
      : pinnedCount
        ? "续写会优先参考置顶记忆，并自动匹配其他相关内容。"
        : "续写会自动选取相关记忆；内容问答只依据原作。";
  }
  if (removeStaleNovelMemoryButton) {
    removeStaleNovelMemoryButton.hidden = !staleCount || Boolean(novelMemoryLoadErrors[activeNovelMemory.spaceId]);
    removeStaleNovelMemoryButton.textContent = staleCount ? `清理 ${staleCount} 条待核对` : "清理待核对";
    removeStaleNovelMemoryButton.title = staleCount
      ? "删除当前小说空间中所有已失效的原作依据 / 章节摘要记忆"
      : "当前没有待核对的原文记忆";
  }
  if (!notes.length) {
    const empty = document.createElement("p");
    empty.className = "memory-empty";
    empty.textContent = novelMemoryLoadInFlight[activeNovelMemory.spaceId]
      ? "空间记忆正在读取，请稍候再编辑。"
      : allNotes.length
        ? "没有符合当前搜索或来源筛选的记忆。"
        : novelMemoryLoadErrors[activeNovelMemory.spaceId]
          ? "空间记忆暂时读取失败，请刷新小说库后再编辑，避免覆盖已有内容。"
          : "还没有记忆。新增一条人物关系、世界规则或二创约定吧。";
    novelMemoryList.appendChild(empty);
    syncWorkspaceGuideProgress();
    return;
  }
  notes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "novel-memory-card";
    const heading = document.createElement("div");
    heading.className = "novel-memory-heading";
    const title = document.createElement("strong");
    title.textContent = note.title;
    const actions = [];
    if (note.sourceChapter) {
      const recheck = document.createElement("button");
      const sourceUnavailable = !novelSpaces.find((space) => space.id === activeNovelMemory.spaceId)?.source?.available;
      const needsSourceRecovery = note.sourceStale && note.sourceStaleReason === "missing" && sourceUnavailable;
      recheck.type = "button";
      recheck.className = "text-button memory-recheck-button";
      recheck.textContent = note.sourceStale ? "重新核对" : "查看原文";
      recheck.title = note.sourceStale
        ? needsSourceRecovery
          ? "原文尚未恢复，先回到小说库上传或恢复原文"
          : "打开这条记忆对应的当前原文章节，并重新生成摘要或核对依据"
        : "打开这条记忆对应的当前原文，核对记忆来源";
      recheck.addEventListener("click", () => {
        if (needsSourceRecovery) {
          setWorkspaceView("library", { announce: true, focus: true });
          showToast("请先恢复当前小说原文，再重新核对这条记忆");
          return;
        }
        setWorkspaceView("source", { announce: true, focus: false });
        if (sourcePageChapter) {
          sourcePageChapter.value = note.sourceChapter;
          sourcePageChapter.dispatchEvent(new Event("input", { bubbles: true }));
        }
        if (note.sourceChapter === "作品开篇") openSourceChapterReader("", { sample: true });
        else openSourceChapterReader(note.sourceChapter);
      });
      actions.push(recheck);
    }
    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "text-button memory-edit-button";
    edit.textContent = "编辑";
    edit.addEventListener("click", () => startNovelMemoryEdit(note.id));
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "text-button memory-pin-button";
    pin.classList.toggle("is-pinned", note.pinned);
    pin.textContent = note.pinned ? "已置顶" : "置顶";
    const staleSourceMemory = note.sourceStale && ["source_evidence", "source_summary"].includes(note.kind);
    pin.disabled = staleSourceMemory;
    pin.title = staleSourceMemory
      ? "原文来源已失效，重新核对后才能置顶并用于续写"
      : note.pinned ? "取消置顶这条记忆" : "优先带入续写上下文";
    pin.addEventListener("click", () => toggleNovelMemoryPinned(note.id, pin));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "text-button";
    remove.textContent = "删除";
    remove.addEventListener("click", () => deleteNovelMemory(note.id));
    heading.append(title);
    const origin = document.createElement("small");
    origin.className = "novel-memory-origin";
    origin.classList.toggle("is-stale", note.sourceStale);
    origin.textContent = [
      novelMemoryKindLabels[note.kind] || "手动记录",
      note.origin || "",
      note.sourceChapter ? `依据：${note.sourceChapter}` : "",
      note.sourceStale
        ? note.sourceStaleReason === "missing" ? "原文未就绪，请重新核对" : "原文已更新，请重新核对"
        : "",
    ].filter(Boolean).join(" · ");
    const content = document.createElement("p");
    content.textContent = note.content;
    const actionBar = document.createElement("div");
    actionBar.className = "memory-card-actions";
    actionBar.append(...actions, edit, pin, remove);
    card.append(heading, origin, content, actionBar);
    novelMemoryList.appendChild(card);
  });
  syncWorkspaceGuideProgress();
}

function resetNovelMemoryEditor() {
  editingNovelMemoryId = null;
  if (novelMemoryTitleInput) novelMemoryTitleInput.value = "";
  if (novelMemoryContentInput) novelMemoryContentInput.value = "";
  updateNovelMemoryContentCount();
  if (saveNovelMemoryButton) saveNovelMemoryButton.textContent = "保存记忆";
  if (novelMemoryComposerTitle) novelMemoryComposerTitle.textContent = "记住一条创作设定";
}

function setNovelMemoryComposerOpen(open, { focus = false } = {}) {
  if (!novelMemoryComposer) return;
  novelMemoryComposer.hidden = !open;
  openNovelMemoryComposerButton?.setAttribute("aria-expanded", String(open));
  openNovelMemoryComposerButton?.classList.toggle("is-active", open);
  if (open && focus) {
    window.setTimeout(() => {
      novelMemoryTitleInput?.focus();
      novelMemoryComposer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 0);
  }
}

function closeNovelMemoryComposer({ discard = false } = {}) {
  if (!discard && hasNovelMemoryDraft() && !window.confirm("这条记忆还没有保存，确定放弃吗？")) return false;
  resetNovelMemoryEditor();
  setNovelMemoryComposerOpen(false);
  openNovelMemoryComposerButton?.focus();
  return true;
}

function updateNovelMemoryContentCount() {
  if (!novelMemoryContentCount) return;
  const length = novelMemoryContentInput?.value.length || 0;
  novelMemoryContentCount.textContent = `${length} / 4000 字`;
  novelMemoryContentCount.classList.toggle("is-near-limit", length >= 3600);
}

function applyNovelMemoryTemplate(title, content) {
  if (!novelMemoryTitleInput || !novelMemoryContentInput) return;
  if (hasNovelMemoryDraft() && !window.confirm("当前空间笔记编辑器已有内容，使用模板会替换未保存内容。继续吗？")) return;
  resetNovelMemoryEditor();
  novelMemoryTitleInput.value = title;
  novelMemoryContentInput.value = String(content || "").replace(/\\n/g, "\n");
  updateNovelMemoryContentCount();
  setNovelMemoryComposerOpen(true);
  novelMemoryContentInput.focus();
  showToast(`已套用「${title}」记忆模板，可继续补充内容`);
}

function hasNovelMemoryDraft() {
  return Boolean(
    editingNovelMemoryId
    || novelMemoryTitleInput?.value.trim()
    || novelMemoryContentInput?.value.trim()
  );
}

function confirmNovelMemorySpaceSwitch(nextSpaceId) {
  const currentSpaceId = getCurrentNovelSpaceId();
  if (String(nextSpaceId) === String(currentSpaceId)) return true;
  if (!hasNovelMemoryDraft()) {
    resetNovelMemoryEditor();
    setNovelMemoryComposerOpen(false);
    return true;
  }
  if (!window.confirm("当前空间笔记还有未保存的编辑内容，切换小说会放弃这些修改。确定切换吗？")) return false;
  resetNovelMemoryEditor();
  setNovelMemoryComposerOpen(false);
  return true;
}

function startNovelMemoryEdit(noteId) {
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return;
  const note = activeNovelMemory.notes.find((item) => item.id === noteId);
  if (!note || activeNovelMemory.spaceId !== spaceId) return;
  editingNovelMemoryId = note.id;
  novelMemoryTitleInput.value = note.title;
  novelMemoryContentInput.value = note.content;
  updateNovelMemoryContentCount();
  saveNovelMemoryButton.textContent = "更新空间笔记";
  if (novelMemoryComposerTitle) novelMemoryComposerTitle.textContent = "编辑空间记忆";
  setNovelMemoryComposerOpen(true);
  novelMemoryContentInput.focus();
  showToast(`正在编辑「${note.title}」`);
}

function resetNovelMemoryFilters() {
  if (novelMemorySearchInput) novelMemorySearchInput.value = "";
  if (novelMemoryKindFilter) novelMemoryKindFilter.value = "all";
  hideNovelMemoryPreview();
}

function hideNovelMemoryPreview() {
  if (novelMemoryPreview) novelMemoryPreview.hidden = true;
  novelMemoryPreviewList?.replaceChildren();
}

function getNovelMemoryPreviewQuery() {
  return messageInput?.value.trim() ? getDraftSourceQuery() : getSourceQuery(selectedMode);
}

function renderNovelMemoryPreview(preview) {
  if (!novelMemoryPreview || !novelMemoryPreviewList) return;
  novelMemoryPreview.hidden = false;
  novelMemoryPreviewList.replaceChildren();
  const notes = Array.isArray(preview?.notes) ? preview.notes : [];
  const used = preview?.used === true;
  if (novelMemoryPreviewTitle) novelMemoryPreviewTitle.textContent = used ? "本次续写会带入的空间记忆" : "本次问答的空间记忆边界";
  if (novelMemoryPreviewStatus) {
    const query = safeText(preview?.query, "", 120);
    novelMemoryPreviewStatus.textContent = used
      ? `${notes.length} 条 · 查询：${query || "当前章节 / 最近对话"}`
      : "内容问答不会使用空间记忆";
  }
  if (!used || !notes.length) {
    const empty = document.createElement("p");
    empty.className = "novel-memory-preview-empty";
    empty.textContent = used ? "本次没有匹配到空间笔记；模型仍会使用原作检索和当前创作上下文。" : "空间记忆只作为续写连续性辅助，不会作为原作事实依据。";
    novelMemoryPreviewList.appendChild(empty);
    return;
  }
  notes.forEach((note) => {
    const item = document.createElement("article");
    item.className = "novel-memory-preview-item";
    const title = document.createElement("strong");
    title.textContent = note.title || "空间笔记";
    const meta = document.createElement("small");
    meta.textContent = [
      note.selection_reason || "相关命中",
      novelMemoryKindLabels[note.kind] || "手动记录",
      note.pinned ? "已置顶" : "",
      note.origin || "",
      (note.source_chapter || note.sourceChapter) ? `依据：${note.source_chapter || note.sourceChapter}` : "",
      Number(note.source_chunk_count || note.sourceChunkCount) > 1
        ? `分片 ${Number(note.source_chunk_index || note.sourceChunkIndex) || 1}/${Number(note.source_chunk_count || note.sourceChunkCount)}`
        : "",
      note.source_stale ? "原文已更新，未带入" : "",
    ].filter(Boolean).join(" · ");
    const content = document.createElement("p");
    content.textContent = note.content || "暂无笔记内容";
    item.append(title, meta, content);
    novelMemoryPreviewList.appendChild(item);
  });
}

async function previewNovelMemory() {
  if (!novelMemoryPreview || !previewNovelMemoryButton) return;
  const spaceId = getCurrentNovelSpaceId();
  previewNovelMemoryButton.disabled = true;
  previewNovelMemoryButton.textContent = "读取中……";
  try {
    const response = await fetchWithTimeout("/api/novels/memory/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        novel_space_id: spaceId,
        query: getNovelMemoryPreviewQuery(),
        mode: selectedMode,
      }),
    }, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.preview) throw new Error(payload.error || "空间记忆预览失败");
    renderNovelMemoryPreview(payload.preview);
  } catch (error) {
    renderNovelMemoryPreview({ used: selectedMode !== "问答", notes: [] });
    if (novelMemoryPreviewStatus) novelMemoryPreviewStatus.textContent = error?.message || "空间记忆预览失败";
  } finally {
    previewNovelMemoryButton.disabled = false;
    previewNovelMemoryButton.textContent = "刷新记忆预览";
  }
}

async function loadNovelSpaceMemory(spaceId = getCurrentNovelSpaceId(), { force = false } = {}) {
  const normalizedSpaceId = safeText(spaceId, defaultNovelSpaceId, 100);
  const isCurrentSpace = () => getCurrentNovelSpaceId() === normalizedSpaceId;
  if (!force && novelMemoryCache[normalizedSpaceId] && !novelMemoryLoadErrors[normalizedSpaceId]) {
    if (isCurrentSpace()) {
      activeNovelMemory = novelMemoryCache[normalizedSpaceId];
      renderNovelMemory();
    }
    return novelMemoryCache[normalizedSpaceId];
  }
  const requestId = (novelMemoryRequestIds[normalizedSpaceId] || 0) + 1;
  novelMemoryRequestIds[normalizedSpaceId] = requestId;
  if (isCurrentSpace()) {
    activeNovelMemory = novelMemoryCache[normalizedSpaceId] || { spaceId: normalizedSpaceId, notes: [], count: 0, updated_at: 0 };
    renderNovelMemory();
  }
  novelMemoryLoadInFlight[normalizedSpaceId] = (novelMemoryLoadInFlight[normalizedSpaceId] || 0) + 1;
  if (isCurrentSpace()) renderNovelMemory();
  try {
    const params = new URLSearchParams({ novel_space_id: normalizedSpaceId });
    const response = await fetchWithTimeout(`/api/novels/memory?${params.toString()}`, {}, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.memory) throw new Error("空间记忆读取失败");
    const memory = normalizeNovelMemory(payload.memory, normalizedSpaceId);
    if (novelMemoryRequestIds[normalizedSpaceId] !== requestId) {
      return novelMemoryCache[normalizedSpaceId] || memory;
    }
    novelMemoryCache[normalizedSpaceId] = memory;
    novelMemorySourceRevisions[normalizedSpaceId] = novelSpaces.find((item) => item.id === normalizedSpaceId)?.source?.revision || "";
    delete novelMemoryLoadErrors[normalizedSpaceId];
    const space = novelSpaces.find((item) => item.id === normalizedSpaceId);
    if (space) space.memory = novelMemorySpaceSummary(memory);
    if (isCurrentSpace()) {
      activeNovelMemory = memory;
      renderNovelMemory();
    }
    renderNovelSpaceLibrary();
    return memory;
  } catch {
    if (novelMemoryRequestIds[normalizedSpaceId] !== requestId) {
      return novelMemoryCache[normalizedSpaceId] || { spaceId: normalizedSpaceId, notes: [], count: 0, updated_at: 0 };
    }
    const memory = novelMemoryCache[normalizedSpaceId] || { spaceId: normalizedSpaceId, notes: [], count: 0, updated_at: 0 };
    novelMemoryLoadErrors[normalizedSpaceId] = "空间记忆读取失败";
    if (isCurrentSpace()) {
      activeNovelMemory = memory;
      renderNovelMemory();
    }
    renderNovelSpaceLibrary();
    return memory;
  } finally {
    const remaining = (novelMemoryLoadInFlight[normalizedSpaceId] || 1) - 1;
    if (remaining > 0) novelMemoryLoadInFlight[normalizedSpaceId] = remaining;
    else delete novelMemoryLoadInFlight[normalizedSpaceId];
    if (isCurrentSpace()) renderNovelMemory();
  }
}

async function refreshNovelSpaceMemory() {
  const spaceId = getCurrentNovelSpaceId();
  if (hasNovelMemoryDraft() && !window.confirm("当前空间笔记编辑器有未保存内容。刷新只会更新记忆列表，不会保存或覆盖这段编辑内容。继续吗？")) return;
  if (refreshNovelMemoryButton) {
    refreshNovelMemoryButton.disabled = true;
    refreshNovelMemoryButton.textContent = "刷新中……";
  }
  try {
    await loadNovelSpaceMemory(spaceId, { force: true });
    if (novelMemoryLoadErrors[spaceId]) {
      showToast("空间记忆刷新失败，请检查本地服务后重试");
    } else {
      showToast(`已刷新「${getCurrentNovelDisplayName()}」的空间记忆`);
    }
  } finally {
    if (refreshNovelMemoryButton) {
      refreshNovelMemoryButton.disabled = false;
      refreshNovelMemoryButton.textContent = "刷新记忆";
    }
  }
}

async function removeStaleNovelMemory() {
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return;
  const staleNotes = activeNovelMemory.notes.filter((note) => note.sourceStale);
  if (!staleNotes.length) {
    showToast("当前没有待核对的原文记忆");
    return;
  }
  const draftHint = hasNovelMemoryDraft() ? "未保存的编辑内容不会被删除。" : "";
  const confirmed = window.confirm(
    `确认清理待核对原文记忆吗？当前空间共有 ${staleNotes.length} 条，这会删除已失效的原作依据 / 章节摘要，之后如有需要可以重新生成。${draftHint}`,
  );
  if (!confirmed) return;
  try {
    removeStaleNovelMemoryButton.disabled = true;
    removeStaleNovelMemoryButton.textContent = "清理中……";
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(spaceId, activeNovelMemory.notes.filter((note) => !note.sourceStale))),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "待核对记忆清理失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, spaceId);
    novelMemoryCache[spaceId] = activeNovelMemory;
    novelMemorySourceRevisions[spaceId] = novelSpaces.find((item) => item.id === spaceId)?.source?.revision || "";
    const space = novelSpaces.find((item) => item.id === spaceId);
    if (space) space.memory = novelMemorySpaceSummary(activeNovelMemory);
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    showToast(`已清理 ${staleNotes.length} 条待核对原文记忆`);
  } catch (error) {
    await showMemoryWriteError(error, spaceId, "待核对记忆清理失败");
  } finally {
    if (removeStaleNovelMemoryButton) removeStaleNovelMemoryButton.disabled = false;
    renderNovelMemory();
  }
}

function blockNovelMemoryWrite(spaceId) {
  if (novelMemoryLoadInFlight[spaceId]) {
    showToast("当前小说空间记忆正在读取，请稍候再保存");
    return true;
  }
  if (!novelMemoryLoadErrors[spaceId]) return false;
  showToast("空间记忆读取失败，请先刷新小说库后再编辑，避免覆盖已有内容");
  return true;
}

function memoryWritePayload(spaceId, notes) {
  const payload = { novel_space_id: spaceId, notes };
  if (activeNovelMemory.spaceId !== spaceId) return payload;
  const version = Number(activeNovelMemory.updated_at);
  return { ...payload, expected_updated_at: Number.isFinite(version) ? version : 0 };
}

async function readMemoryWriteResponse(response, fallbackMessage) {
  const payload = await response.json();
  if (!response.ok || !payload.ok || !payload.memory) {
    const error = new Error(payload.error || fallbackMessage);
    error.memoryConflict = response.status === 409;
    throw error;
  }
  return payload;
}

async function showMemoryWriteError(error, spaceId, fallbackMessage) {
  if (error?.memoryConflict) {
    await loadNovelSpaceMemory(spaceId);
    showToast("空间记忆已在其他页面更新，请刷新后再保存");
    return;
  }
  showToast(error?.message || fallbackMessage);
}

async function saveNovelMemory() {
  const content = novelMemoryContentInput?.value.trim() || "";
  if (!content) {
    showToast("先写一点要长期记住的内容");
    novelMemoryContentInput?.focus();
    return;
  }
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return;
  const existingNotes = activeNovelMemory.spaceId === spaceId ? activeNovelMemory.notes : [];
  const editingNote = editingNovelMemoryId
    ? existingNotes.find((item) => item.id === editingNovelMemoryId)
    : null;
  if (editingNovelMemoryId && !editingNote) {
    resetNovelMemoryEditor();
    showToast("这条空间笔记已不存在，请重新选择要编辑的笔记");
    return;
  }
  if (!editingNote && existingNotes.length >= maxNovelMemoryNotes) {
    showToast(`空间记忆已达到 ${maxNovelMemoryNotes} 条上限，请编辑或删除旧笔记后再新增`);
    return;
  }
  const note = editingNote
    ? {
      ...editingNote,
      title: novelMemoryTitleInput?.value.trim() || "空间笔记",
      content,
      updated_at: Date.now(),
    }
    : {
      id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      title: novelMemoryTitleInput?.value.trim() || "空间笔记",
      content,
      kind: "manual",
      pinned: false,
      updated_at: Date.now(),
    };
  const notes = editingNote
    ? existingNotes.map((item) => item.id === editingNote.id ? note : item)
    : [...existingNotes, note];
  const wasEditing = Boolean(editingNote);
  try {
    saveNovelMemoryButton.disabled = true;
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(spaceId, notes)),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "空间笔记保存失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, spaceId);
    novelMemoryCache[spaceId] = activeNovelMemory;
    novelMemorySourceRevisions[spaceId] = novelSpaces.find((item) => item.id === spaceId)?.source?.revision || "";
    const space = novelSpaces.find((item) => item.id === spaceId);
    if (space) space.memory = novelMemorySpaceSummary(activeNovelMemory);
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    resetNovelMemoryEditor();
    setNovelMemoryComposerOpen(false);
    showToast(wasEditing ? "记忆已更新" : "记忆已保存");
  } catch (error) {
    await showMemoryWriteError(error, spaceId, "空间笔记保存失败");
  } finally {
    saveNovelMemoryButton.disabled = false;
  }
}

async function saveGeneratedMemoryNote(title, content, button, successMessage, kind = "manual", origin = "", sourceRevision = "", sourceMeta = {}) {
  const cleanContent = String(content || "").trim();
  if (!cleanContent) {
    showToast("没有可写入的记忆内容");
    return false;
  }
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return false;
  const existingNotes = activeNovelMemory.spaceId === spaceId ? activeNovelMemory.notes : [];
  const normalizedKind = Object.prototype.hasOwnProperty.call(novelMemoryKindLabels, kind) ? kind : "manual";
  const normalizedTitle = String(title || "创作记忆").trim().slice(0, 80) || "创作记忆";
  const normalizedOrigin = String(origin || "").trim().slice(0, 120);
  const normalizedSourceRevision = String(sourceRevision || "").trim().slice(0, 80);
  const normalizedSourceChapter = String(sourceMeta?.chapterTitle || "").trim().slice(0, 160);
  const normalizedSourceChunkIndex = Math.max(0, Number(sourceMeta?.chunkIndex) || 0);
  const normalizedSourceChunkCount = Math.max(0, Number(sourceMeta?.chunkCount) || 0);
  const generatedNoteIndex = normalizedKind === "manual"
    ? -1
    : existingNotes.findIndex((item) => item.kind === normalizedKind
      && item.title === normalizedTitle
      && item.origin === normalizedOrigin);
  if (generatedNoteIndex < 0 && existingNotes.length >= maxNovelMemoryNotes) {
    showToast(`空间记忆已达到 ${maxNovelMemoryNotes} 条上限，请编辑或删除旧笔记后再写入`);
    return false;
  }
  const previousNote = generatedNoteIndex >= 0 ? existingNotes[generatedNoteIndex] : null;
  const note = {
    id: previousNote?.id || `note-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: normalizedTitle,
    content: cleanContent.slice(0, 4000),
    kind: normalizedKind,
    origin: normalizedOrigin,
    source_revision: normalizedSourceRevision || previousNote?.sourceRevision || "",
    source_chapter: normalizedSourceChapter || previousNote?.sourceChapter || "",
    source_chunk_index: normalizedSourceChunkIndex || previousNote?.sourceChunkIndex || 0,
    source_chunk_count: normalizedSourceChunkCount || previousNote?.sourceChunkCount || 0,
    pinned: previousNote?.pinned === true,
    created_at: previousNote?.created_at || Date.now(),
    updated_at: Date.now(),
  };
  const notes = generatedNoteIndex >= 0
    ? existingNotes.map((item, index) => index === generatedNoteIndex ? note : item)
    : [...existingNotes, note];
  try {
    if (button) button.disabled = true;
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(spaceId, notes)),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "空间记忆写入失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, spaceId);
    novelMemoryCache[spaceId] = activeNovelMemory;
    novelMemorySourceRevisions[spaceId] = novelSpaces.find((item) => item.id === spaceId)?.source?.revision || "";
    const space = novelSpaces.find((item) => item.id === spaceId);
    if (space) space.memory = novelMemorySpaceSummary(activeNovelMemory);
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    showToast(successMessage || "已写入小说空间记忆");
    return true;
  } catch (error) {
    await showMemoryWriteError(error, spaceId, "空间记忆写入失败");
    return false;
  } finally {
    if (button) button.disabled = false;
  }
}

async function deleteNovelMemory(noteId) {
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return;
  const note = activeNovelMemory.notes.find((item) => item.id === noteId);
  if (!note || !window.confirm(`删除空间笔记「${note.title}」吗？`)) return;
  try {
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(spaceId, activeNovelMemory.notes.filter((item) => item.id !== noteId))),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "空间笔记删除失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, spaceId);
    novelMemoryCache[spaceId] = activeNovelMemory;
    novelMemorySourceRevisions[spaceId] = novelSpaces.find((item) => item.id === spaceId)?.source?.revision || "";
    const space = novelSpaces.find((item) => item.id === spaceId);
    if (space) space.memory = novelMemorySpaceSummary(activeNovelMemory);
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    showToast("空间笔记已删除");
  } catch (error) {
    await showMemoryWriteError(error, spaceId, "空间笔记删除失败");
  }
}

async function toggleNovelMemoryPinned(noteId, button) {
  const spaceId = getCurrentNovelSpaceId();
  if (blockNovelMemoryWrite(spaceId)) return;
  const note = activeNovelMemory.notes.find((item) => item.id === noteId);
  if (!note || activeNovelMemory.spaceId !== spaceId) return;
  const nextPinned = !note.pinned;
  try {
    if (button) button.disabled = true;
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(spaceId, activeNovelMemory.notes.map((item) => item.id === noteId ? { ...item, pinned: nextPinned } : item))),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "空间记忆置顶失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, spaceId);
    novelMemoryCache[spaceId] = activeNovelMemory;
    novelMemorySourceRevisions[spaceId] = novelSpaces.find((item) => item.id === spaceId)?.source?.revision || "";
    const space = novelSpaces.find((item) => item.id === spaceId);
    if (space) space.memory = novelMemorySpaceSummary(activeNovelMemory);
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    showToast(nextPinned ? "记忆已置顶，会优先带入续写上下文" : "已取消记忆置顶");
  } catch (error) {
    await showMemoryWriteError(error, spaceId, "空间记忆置顶失败");
  } finally {
    if (button) button.disabled = false;
  }
}

async function loadNovelSpacesFromServer({ announce = false } = {}) {
  try {
    const response = await fetchWithTimeout("/api/novels", {}, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !Array.isArray(payload.novels)) throw new Error("小说空间读取失败");
    const localById = new Map(novelSpaces.map((space) => [space.id, space]));
    const serverSpaces = payload.novels.map((item) => {
      const normalized = normalizeNovelSpace(item);
      const local = localById.get(normalized.id);
      const internalFilename = /^novel-[a-f0-9]{16}\.txt$/i.test(normalized.filename);
      if (local?.kind === "uploaded" && normalized.kind === "uploaded" && internalFilename
        && local.filename && !/^novel-[a-f0-9]{16}\.txt$/i.test(local.filename)) {
        normalized.filename = local.filename;
      }
      if (local?.lastAccessedAt) normalized.lastAccessedAt = local.lastAccessedAt;
      const cachedMemory = novelMemoryCache[normalized.id];
      const cachedSourceRevision = novelMemorySourceRevisions[normalized.id];
      const currentSourceRevision = normalized.source?.revision || "";
      const serverMemoryCount = Number(normalized.memory?.count) || 0;
      const serverMemoryUpdatedAt = Number(normalized.memory?.updated_at) || 0;
      const sourceRevisionChanged = cachedMemory
        && Object.prototype.hasOwnProperty.call(novelMemorySourceRevisions, normalized.id)
        && cachedSourceRevision !== currentSourceRevision;
      if (cachedMemory && (
        serverMemoryCount !== (Array.isArray(cachedMemory.notes) ? cachedMemory.notes.length : 0)
        || serverMemoryUpdatedAt > (Number(cachedMemory.updated_at) || 0)
        || sourceRevisionChanged
      )) {
        delete novelMemoryCache[normalized.id];
        delete novelMemorySourceRevisions[normalized.id];
      }
      return normalized;
    });
    const localOnly = novelSpaces
      .filter((local) => !serverSpaces.some((server) => server.id === local.id))
      .map((local) => local.kind === "uploaded" ? markNovelSpaceUnavailable(local) : local);
    novelSpaces = [...serverSpaces, ...localOnly];
    const projectSpaceId = getActiveProject()?.novelSpaceId;
    const requestedSpaceId = readWorkspaceHashState().spaceId;
    if (requestedSpaceId && novelSpaces.some((space) => space.id === requestedSpaceId)) {
      syncNovelSpaceFromUrl(requestedSpaceId);
    } else if (projectSpaceId && novelSpaces.some((space) => space.id === projectSpaceId)) {
      activeNovelSpaceId = projectSpaceId;
    } else if (!novelSpaces.some((space) => space.id === activeNovelSpaceId)) {
      activeNovelSpaceId = defaultNovelSpaceId;
    }
    novelSpacesLoaded = true;
    novelSpacesLoadError = false;
    persistNovelSpaces();
    renderNovelSpaceLibrary();
    syncModeControls();
    renderModePrompts();
    conversationTitle.textContent = getConversationTitle();
    syncWorkspacePage();
    loadNovelSpaceMemory(getCurrentNovelSpaceId());
    if (announce) showToast(`已读取 ${serverSpaces.length} 个小说知识空间`);
  } catch {
    novelSpacesLoaded = true;
    novelSpacesLoadError = true;
    renderNovelSpaceLibrary();
  }
}

function downloadJsonFile(payload, filename) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function novelSpaceConfigSourceWarnings(configSpace, targetSpace) {
  const exported = configSpace && typeof configSpace === "object" ? configSpace : {};
  const targetSource = targetSpace?.source && typeof targetSpace.source === "object" ? targetSpace.source : {};
  const warnings = [];
  const exportedFiles = Array.isArray(exported.source_files)
    ? exported.source_files.map((item) => safeText(item, "", 180).trim()).filter(Boolean)
    : [];
  const targetFiles = Array.isArray(targetSource.sourceFiles)
    ? targetSource.sourceFiles.map((item) => safeText(item, "", 180).trim()).filter(Boolean)
    : [];
  if (exportedFiles.length && targetFiles.length) {
    const normalizeFiles = (files) => files.map((item) => item.toLocaleLowerCase()).join("\u0001");
    if (normalizeFiles(exportedFiles) !== normalizeFiles(targetFiles)) warnings.push("原始文件名不同");
  }
  const exportedFormat = safeText(exported.format, "", 20).toLocaleLowerCase();
  const targetFormat = safeText(targetSource.format, "", 20).toLocaleLowerCase();
  if (exportedFormat && targetFormat && exportedFormat !== targetFormat) warnings.push("文件格式不同");
  const exportedCharacters = Number(exported.characters) || 0;
  const targetCharacters = Number(targetSource.characters) || 0;
  if (exportedCharacters > 0 && targetCharacters > 0) {
    const difference = Math.abs(exportedCharacters - targetCharacters);
    const tolerance = Math.max(200, Math.round(Math.max(exportedCharacters, targetCharacters) * 0.05));
    if (difference > tolerance) warnings.push("正文规模差异较大");
  }
  return warnings;
}

async function exportNovelSpaceConfig() {
  const space = getActiveNovelSpace();
  if (!space) {
    showToast("还没有可导出的小说知识空间");
    return;
  }
  try {
    const memory = await loadNovelSpaceMemory(space.id);
    const config = {
      format: "inkecho-novel-space",
      version: novelSpaceConfigVersion,
      exportedAt: new Date().toISOString(),
      space: {
        name: space.name,
        kind: space.kind,
        format: space.source?.format || "txt",
        encoding: space.source?.encoding || "",
        source_files: Array.isArray(space.source?.sourceFiles) ? space.source.sourceFiles.slice(0, 32) : [],
        characters: Number(space.source?.characters) || 0,
        sections: Number(space.source?.sections) || 0,
      },
      retrieval_strategy: loadRetrievalStrategy(space.id),
      memory: {
        notes: (memory?.notes || []).slice(0, 100),
      },
    };
    const safeName = (space.name || "novel-space").replace(/[\\/:*?"<>|\s]+/g, "-").slice(0, 60);
    downloadJsonFile(config, `${safeName || "novel-space"}-inkecho-space.json`);
    showToast(`已导出「${space.name}」空间配置`);
  } catch (error) {
    showToast(error?.message || "空间配置导出失败");
  }
}

async function importNovelSpaceConfig() {
  const file = novelSpaceConfigInput?.files?.[0];
  if (!file) return;
  novelSpaceConfigInput.value = "";
  if (file.size > 2_000_000) {
    showToast("空间配置超过 2MB，无法导入");
    return;
  }
  const target = getActiveNovelSpace();
  if (!target) {
    showToast("请先选择一本小说，再导入空间配置");
    return;
  }
  try {
    const config = JSON.parse(await file.text());
    const configVersion = Number(config?.version);
    if (config?.format !== "inkecho-novel-space" || !Number.isInteger(configVersion) || configVersion < 1) {
      throw new Error("这不是 InkEcho 小说空间配置文件");
    }
    if (configVersion > novelSpaceConfigVersion) {
      throw new Error(`空间配置版本 v${configVersion} 高于当前版本 v${novelSpaceConfigVersion}，请升级 InkEcho 后再导入`);
    }
    if (config.space != null && (typeof config.space !== "object" || Array.isArray(config.space))) {
      throw new Error("空间配置中的小说信息格式不正确");
    }
    const exportedName = safeText(config.space?.name, "未命名小说", 80);
    const rawNotes = Array.isArray(config.memory) ? config.memory : config.memory?.notes;
    if (config.memory != null && !Array.isArray(rawNotes)) {
      throw new Error("空间配置中的长期记忆格式不正确");
    }
    if (Array.isArray(rawNotes) && rawNotes.length > maxNovelMemoryNotes) {
      throw new Error(`空间配置包含 ${rawNotes.length} 条记忆，超过当前上限 ${maxNovelMemoryNotes} 条；请先在原设备整理后再导入`);
    }
    const importedMemory = normalizeNovelMemory({ space_id: target.id, notes: rawNotes }, target.id);
    const strategy = normalizeRetrievalStrategy(config.retrieval_strategy);
    const nameHint = exportedName === target.name ? "" : `\n配置来自「${exportedName}」，当前目标是「${target.name}」。`;
    const sourceWarnings = novelSpaceConfigSourceWarnings(config.space, target);
    const sourceHint = sourceWarnings.length
      ? `\n⚠️ 原文可能不匹配：${sourceWarnings.join("、")}。建议先选择配置对应的小说空间。`
      : "";
    if (!window.confirm(`将空间配置导入当前小说「${target.name}」，并覆盖当前空间记忆（${importedMemory.notes.length} 条），同时设置检索策略为“${retrievalStrategyLabels[strategy]}”。${nameHint}${sourceHint}\n不会上传、覆盖或修改当前小说原文。确定继续吗？`)) return;
    const response = await fetchWithTimeout("/api/novels/memory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memoryWritePayload(target.id, importedMemory.notes)),
    }, 15000);
    const payload = await readMemoryWriteResponse(response, "空间记忆导入失败");
    activeNovelMemory = normalizeNovelMemory(payload.memory, target.id);
    novelMemoryCache[target.id] = activeNovelMemory;
    novelMemorySourceRevisions[target.id] = target.source?.revision || "";
    delete novelMemoryLoadErrors[target.id];
    target.memory = novelMemorySpaceSummary(activeNovelMemory);
    activeNovelSpaceId = target.id;
    retrievalStrategy = strategy;
    persistRetrievalStrategy();
    persistNovelSpaces();
    renderNovelMemory();
    renderNovelSpaceLibrary();
    syncRetrievalStrategy();
    resetNovelMemoryEditor();
    showToast(`已恢复「${target.name}」空间配置`);
  } catch (error) {
    await showMemoryWriteError(error, target?.id || getCurrentNovelSpaceId(), "空间配置导入失败");
  }
}

async function removeNovelSpace(spaceId) {
  if (preventWorkspaceMutation("移除小说空间")) return;
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space || space.kind !== "uploaded") return;
  const linkedProjects = projects.filter((project) => project.novelSpaceId === space.id);
  const linkedMessage = linkedProjects.length
    ? `\n关联的 ${linkedProjects.length} 个创作项目会保留，并改为关联默认小说空间。`
    : "";
  if (!window.confirm(`移除小说知识空间「${space.name}」吗？\n原始文件、章节索引和空间记忆都会从本机移除。${linkedMessage}`)) return;
  if (space.id === getCurrentNovelSpaceId() && !confirmNovelMemorySpaceSwitch(defaultNovelSpaceId)) return;
  try {
    const response = await fetchWithTimeout("/api/novels/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ novel_space_id: space.id }),
    }, 15000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "小说空间移除失败");
    linkedProjects.forEach((project) => {
      project.novelSpaceId = defaultNovelSpaceId;
      project.checkpoints = (project.checkpoints || []).map((checkpoint) => ({
        ...checkpoint,
        novelSpaceId: defaultNovelSpaceId,
      }));
    });
    novelSpaces = novelSpaces.filter((item) => item.id !== space.id);
    delete novelMemoryCache[space.id];
    delete novelMemorySourceRevisions[space.id];
    if (activeNovelSpaceId === space.id) activeNovelSpaceId = defaultNovelSpaceId;
    let fallbackProject = projects.find((project) => project.novelSpaceId === activeNovelSpaceId);
    if (!fallbackProject) fallbackProject = createProjectForNovelSpace(getActiveNovelSpace());
    activeProjectId = fallbackProject.id;
    persistNovelSpaces();
    persistProjects();
    hydrateActiveProject();
    renderProjectSelect();
    renderCharacters();
    renderConversation();
    updateProviderUI();
    renderNovelSpaceLibrary();
    loadNovelSpaceMemory(activeNovelSpaceId);
    showToast(`已移除「${space.name}」知识空间`);
  } catch (error) {
    showToast(error?.message || "小说空间移除失败");
  }
}

async function renameNovelSpace(spaceId) {
  if (preventWorkspaceMutation("重命名小说空间")) return;
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space || space.kind !== "uploaded") return;
  const previousName = space.name;
  const nextName = window.prompt("给这本小说空间取一个便于识别的名称：", previousName);
  if (nextName == null) return;
  const cleanName = nextName.replace(/\s+/g, " ").trim().slice(0, 80);
  if (!cleanName) {
    showToast("小说空间名称不能为空");
    return;
  }
  if (cleanName === previousName) return;
  try {
    const response = await fetchWithTimeout("/api/novels/rename", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ novel_space_id: space.id, name: cleanName }),
    }, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.novel) throw new Error(payload.error || "小说空间重命名失败");
    space.name = cleanName;
    space.source = { ...(space.source || {}), name: cleanName };
    space.updated_at = Number(payload.novel.updated_at) || Date.now() / 1000;
    projects.forEach((project) => {
      if (project.novelSpaceId !== space.id) return;
      const wasDefaultProject = project.name === `${previousName} · 新创作`;
      if (!wasDefaultProject) return;
      project.name = `${cleanName} · 新创作`;
      if (project.context?.title === previousName) project.context.title = cleanName;
      if (project.context?.world === `基于「${previousName}」原作知识空间进行内容问答与续写。`) {
        project.context.world = `基于「${cleanName}」原作知识空间进行内容问答与续写。`;
      }
    });
    persistNovelSpaces();
    persistProjects();
    renderNovelSpaceLibrary();
    renderNovelMemory();
    renderProjectSelect();
    syncModeControls();
    syncWorkspacePage();
    showToast(`已将小说空间重命名为「${cleanName}」`);
  } catch (error) {
    showToast(error?.message || "小说空间重命名失败");
  }
}

function renderNovelSpaceLibrary() {
  if (!novelSpaceList) return;
  novelSpaceList.setAttribute("aria-busy", String(!novelSpacesLoaded));
  if (!novelSpacesLoaded) {
    novelSpaceList.replaceChildren();
    if (novelLibraryCount) novelLibraryCount.textContent = "正在读取……";
    if (novelLibraryStatusSummary) novelLibraryStatusSummary.textContent = "正在读取小说知识空间……";
    if (novelLibraryEmpty) novelLibraryEmpty.hidden = true;
    if (novelLibraryNoResults) novelLibraryNoResults.hidden = true;
    return;
  }
  const spaces = novelSpaces.slice().sort((a, b) => {
    if (a.id === activeNovelSpaceId) return -1;
    if (b.id === activeNovelSpaceId) return 1;
    const lastAccessedDifference = (Number(b.lastAccessedAt) || 0) - (Number(a.lastAccessedAt) || 0);
    if (lastAccessedDifference) return lastAccessedDifference;
    return (Number(b.updated_at) || 0) - (Number(a.updated_at) || 0);
  });
  const query = novelLibrarySearchInput?.value.trim().toLocaleLowerCase() || "";
  const statusFilter = novelLibraryStatusFilter?.value || "all";
  if (clearNovelLibraryFiltersButton) clearNovelLibraryFiltersButton.hidden = !query && statusFilter === "all";
  const filteredSpaces = spaces.filter((space) => {
    const source = space.source || {};
    const sourceFileNames = Array.isArray(source.sourceFiles) ? source.sourceFiles : [];
    const searchText = [space.name, space.filename, ...sourceFileNames, source.parseMessage, source.error]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase();
    const matchesQuery = !query || searchText.includes(query);
    const readiness = getNovelSpaceReadiness(space);
    return matchesQuery && (statusFilter === "all" || readiness.filter === statusFilter);
  });
  const statusCounts = spaces.reduce((counts, space) => {
    const key = getNovelSpaceReadiness(space).filter;
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  novelSpaceList.replaceChildren();
  if (novelLibraryCount) {
    novelLibraryCount.textContent = filteredSpaces.length === spaces.length
      ? `${spaces.length} 个空间`
      : `显示 ${filteredSpaces.length} / ${spaces.length} 个空间`;
  }
  if (novelLibraryStatusSummary) {
    novelLibraryStatusSummary.textContent = novelSpacesLoadError
      ? spaces.length
        ? `空间服务暂不可用 · 当前显示 ${spaces.length} 个本地缓存空间`
        : "暂时无法读取小说空间 · 请点击“刷新状态”重试"
      : spaces.length
        ? `可检索 ${statusCounts.ready || 0} · 解析提醒 ${statusCounts.partial || 0} · 正文为空 ${statusCounts.empty || 0} · 待恢复 ${statusCounts.unavailable || 0}`
        : "上传小说后，这里会显示空间健康度";
  }
  if (novelLibraryEmpty) novelLibraryEmpty.hidden = spaces.length > 0;
  if (novelLibraryEmpty) {
    const emptyTitle = novelLibraryEmpty.querySelector("strong");
    const emptyDescription = novelLibraryEmpty.querySelector("p");
    if (novelSpacesLoadError) {
      if (emptyTitle) emptyTitle.textContent = "暂时无法读取小说知识空间";
      if (emptyDescription) emptyDescription.textContent = "本地服务没有返回空间列表；可以点击上方“刷新状态”重试，已有本地缓存会在恢复后自动同步。";
    } else {
      if (emptyTitle) emptyTitle.textContent = "还没有小说知识空间";
      if (emptyDescription) emptyDescription.textContent = "上传 TXT、Markdown、HTML、DOCX、EPUB、FB2 或 PDF 小说，InkEcho 会为它建立章节索引和原作检索空间。";
    }
  }
  if (novelLibraryNoResults) novelLibraryNoResults.hidden = !spaces.length || filteredSpaces.length > 0;
  filteredSpaces.forEach((space) => {
    const source = space.source || {};
    const card = document.createElement("article");
    card.className = "novel-space-card";
    card.classList.toggle("is-active", space.id === activeNovelSpaceId);
    const label = document.createElement("div");
    label.className = "page-card-label";
    label.textContent = space.kind === "uploaded" ? "UPLOADED NOVEL" : "LOCAL CONFIGURATION";
    const title = document.createElement("h3");
    title.textContent = space.name;
    const filename = document.createElement("span");
    filename.className = "novel-file";
    const sourceFiles = Array.isArray(source.sourceFiles) && source.sourceFiles.length
      ? source.sourceFiles
      : [space.filename || "本地配置文件"];
    filename.textContent = sourceFiles.length > 1
      ? `${sourceFiles[0]} 等 ${sourceFiles.length} 个文件`
      : sourceFiles[0];
    filename.title = sourceFiles.join("\n");
    filename.setAttribute("aria-label", `原始文件：${sourceFiles.join("、")}`);
    let sourceFileDetails = null;
    if (sourceFiles.length > 1) {
      sourceFileDetails = document.createElement("details");
      sourceFileDetails.className = "novel-file-details";
      const sourceFileSummary = document.createElement("summary");
      sourceFileSummary.textContent = `查看全部 ${sourceFiles.length} 个分卷`;
      const sourceFileList = document.createElement("span");
      sourceFileList.textContent = sourceFiles.join("、");
      sourceFileDetails.append(sourceFileSummary, sourceFileList);
    }
    const spaceProjects = projects
      .filter((project) => project.novelSpaceId === space.id)
      .sort((left, right) => (Number(right.updatedAt) || 0) - (Number(left.updatedAt) || 0));
    const projectHint = document.createElement("small");
    projectHint.className = "novel-space-projects";
    projectHint.textContent = spaceProjects.length > 1
      ? `${spaceProjects.length} 个创作项目 · 点击续写将恢复最近项目`
      : spaceProjects.length === 1
        ? `已有创作项目 · ${spaceProjects[0].name}`
        : "尚未建立创作项目 · 点击开始续写将自动创建";
    const meta = document.createElement("div");
    meta.className = "novel-space-meta";
    const sections = document.createElement("div");
    sections.innerHTML = `<span>可浏览章节</span><strong>${source.available ? Number(source.sections || 0).toLocaleString("zh-CN") : "待恢复"}</strong>`;
    const memory = document.createElement("div");
    const staleMemoryCount = Math.max(0, Number(space.memory?.staleCount || space.memory?.stale_count) || 0);
    memory.innerHTML = `<span>空间笔记</span><strong>${novelMemoryLoadErrors[space.id] ? "读取失败" : Number(space.memory?.count || 0).toLocaleString("zh-CN")}</strong>`;
    memory.title = staleMemoryCount ? `${staleMemoryCount} 条原文来源记忆待重新核对` : "空间记忆状态";
    meta.append(sections, memory);
    const readiness = getNovelSpaceReadiness(space);
    const status = document.createElement("div");
    status.className = "novel-space-status";
    status.classList.toggle("is-warning", !readiness.canQuery || Boolean(novelMemoryLoadErrors[space.id]) || staleMemoryCount > 0);
    status.textContent = novelMemoryLoadErrors[space.id]
      ? "空间记忆读取失败 · 请刷新小说库后重试"
      : `${readiness.canQuery ? "原作已就绪" : readiness.label}${staleMemoryCount ? ` · ${staleMemoryCount} 条记忆待核对` : ""}`;
    status.title = source.parseMessage || "";
    const parseWarnings = Array.isArray(source.parseDiagnostics?.warnings)
      ? source.parseDiagnostics.warnings.filter(Boolean).slice(0, 3)
      : [];
    const parseDetail = document.createElement("small");
    parseDetail.className = "novel-space-parse-detail";
    parseDetail.textContent = parseWarnings.length
      ? parseWarnings.join("；")
      : (!readiness.canQuery ? (source.parseMessage || source.error || readiness.capability) : "");
    const actions = document.createElement("div");
    actions.className = "novel-space-actions";
    const needsRecovery = space.kind === "uploaded" && ["empty", "partial", "unavailable"].includes(readiness.filter);
    const recoveryIsPrimary = readiness.filter === "unavailable";
    let recoveryButton = null;
    if (needsRecovery) {
      recoveryButton = document.createElement("button");
      recoveryButton.type = "button";
      recoveryButton.className = recoveryIsPrimary ? "page-primary-button" : "page-secondary-button";
      recoveryButton.textContent = recoveryIsPrimary ? "恢复原文" : "重新解析";
      recoveryButton.title = recoveryIsPrimary
        ? "重新上传原文，保留当前空间 ID、项目绑定和空间记忆"
        : "选择修正版原文，保留当前空间 ID、项目绑定和空间记忆";
      recoveryButton.setAttribute("aria-label", `${recoveryButton.textContent}「${space.name}」`);
      recoveryButton.addEventListener("click", () => prepareNovelSpaceReparse(space.id));
    }
    const continueWriting = document.createElement("button");
    continueWriting.type = "button";
    continueWriting.className = recoveryIsPrimary ? "page-secondary-button" : "page-primary-button";
    continueWriting.textContent = spaceProjects.length ? "继续最近项目" : "开始续写";
    continueWriting.addEventListener("click", () => openNovelSpaceFlow(space.id, "续写"));
    const askQuestion = document.createElement("button");
    askQuestion.type = "button";
    askQuestion.className = "page-secondary-button";
    askQuestion.textContent = readiness.canQuery ? "内容问答" : "内容问答 · 待原文";
    askQuestion.disabled = !readiness.canQuery;
    askQuestion.title = readiness.canQuery ? "进入内容问答模式" : readiness.capability;
    askQuestion.setAttribute("aria-label", `${askQuestion.textContent}「${space.name}」`);
    askQuestion.addEventListener("click", () => openNovelSpaceFlow(space.id, "问答"));
    const details = document.createElement("button");
    details.type = "button";
    details.className = "page-secondary-button";
    details.textContent = "查看资料";
    details.setAttribute("aria-label", `查看资料「${space.name}」`);
    details.addEventListener("click", () => selectNovelSpace(space.id, false));
    if (recoveryIsPrimary && recoveryButton) actions.appendChild(recoveryButton);
    actions.append(continueWriting, askQuestion, details);
    if (!recoveryIsPrimary && recoveryButton) actions.appendChild(recoveryButton);
    card.append(label, title, filename, ...(sourceFileDetails ? [sourceFileDetails] : []), projectHint, meta, status);
    if (parseDetail.textContent) card.appendChild(parseDetail);
    card.appendChild(actions);
    if (space.kind === "uploaded") {
      const rename = document.createElement("button");
      rename.type = "button";
      rename.className = "text-button novel-space-rename";
      rename.textContent = "重命名空间";
      rename.addEventListener("click", () => renameNovelSpace(space.id));
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "text-button novel-space-remove";
      remove.textContent = "移除这个空间";
      remove.addEventListener("click", () => removeNovelSpace(space.id));
      card.append(rename, remove);
    }
    novelSpaceList.appendChild(card);
  });
  renderSpaceRecoveryNotice();
}

function prepareNovelSpaceReparse(spaceId) {
  if (preventWorkspaceMutation("重新解析原文")) return;
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space || space.kind !== "uploaded") return;
  if (novelUploadInFlight) {
    showToast("上一份小说仍在解析中");
    return;
  }
  novelUploadTargetSpaceId = space.id;
  if (novelUploadInput) {
    novelUploadInput.value = "";
    novelUploadInput.click();
    window.setTimeout(() => {
      if (!novelUploadInput.files?.length && !novelUploadInFlight) novelUploadTargetSpaceId = "";
    }, 1000);
  }
}

function invalidateSourceRequestsForSpaceChange() {
  sourceOutlineRequestId += 1;
  sourceOutlineSearchRequestId += 1;
  sourceChapterReaderRequestId += 1;
  sourceEvidenceRequestId += 1;
  sourceEvidenceDialog?.close();
  sourceChapterReaderDialog?.close();
}

function loadNovelUploadJob() {
  try {
    const saved = JSON.parse(localStorage.getItem(novelUploadJobStorageKey) || "null");
    if (!saved || typeof saved !== "object") return null;
    const jobId = safeText(saved.jobId, "", 100).trim();
    if (!jobId) return null;
    return {
      jobId,
      fileName: safeText(saved.fileName, "小说文件", 180),
      startedAt: Number(saved.startedAt) || 0,
    };
  } catch {
    notifyStorageIssue();
    return null;
  }
}

function persistNovelUploadJob(jobId, fileName) {
  try {
    localStorage.setItem(novelUploadJobStorageKey, JSON.stringify({
      jobId: safeText(jobId, "", 100),
      fileName: safeText(fileName, "小说文件", 180),
      startedAt: Date.now(),
    }));
  } catch {
    notifyStorageIssue();
  }
}

function clearNovelUploadJob() {
  try {
    localStorage.removeItem(novelUploadJobStorageKey);
  } catch {
    notifyStorageIssue();
  }
}

function applyNovelUploadResult(payload, fileName = "小说文件") {
  if (!payload?.novel) throw new Error(payload?.error || "小说解析失败");
  const uploaded = normalizeNovelSpace(payload.novel);
  novelSpacesLoaded = true;
  novelSpacesLoadError = false;
  novelSpaces = [uploaded, ...novelSpaces.filter((item) => item.id !== uploaded.id)];
  persistNovelSpaces();
  resolveSpaceRecoveryUpload(uploaded.name);
  renderNovelSpaceLibrary();
  selectNovelSpace(uploaded.id, false, true);
  pendingNovelUploadFile = null;
  const partial = uploaded.source?.parse_status === "partial";
  const empty = uploaded.source?.parse_status === "empty"
    || Number(uploaded.source?.chunks || 0) <= 0
    || Number(uploaded.source?.characters || 0) <= 0;
  setWorkspaceView(empty ? "source" : "home", { announce: false, focus: !empty });
  const parseMessage = uploaded.source?.parse_message || (partial ? "章节识别有限，当前以段落片段为主" : "已建立章节索引");
  const warning = Array.isArray(uploaded.source?.parse_diagnostics?.warnings)
    ? uploaded.source.parse_diagnostics.warnings[0]
    : "";
  setNovelUploadFeedback(
    partial || empty ? "warning" : "success",
    partial || empty
      ? `「${uploaded.name}」需要检查：${warning || parseMessage}`
      : `「${uploaded.name}」已建立知识空间，可以开始阅读、问答或续写。`,
    false,
  );
  showToast(`「${uploaded.name}」已建立知识空间`);
  return uploaded;
}

function isRecoverableNovelUploadStatusError(error) {
  return ["AbortError", "TypeError", "UploadPollingTimeout", "UploadPollingUnavailable"].includes(error?.name);
}

function markNovelSpaceUnavailable(space) {
  const source = space?.source && typeof space.source === "object" ? space.source : {};
  return {
    ...space,
    memory: { count: 0, updated_at: 0 },
    source: {
      ...source,
      available: false,
      configured: true,
      chunks: 0,
      sections: 0,
      characters: 0,
      parse_status: "empty",
      parse_message: "原文文件不可用，请重新上传恢复",
      parse_diagnostics: {
        ...(source.parse_diagnostics || {}),
        quality: "empty",
        recognized_sections: 0,
        structured_chunks: 0,
        average_chunk_characters: 0,
        heading_coverage: 0,
        warnings: ["原文文件不可用，请重新上传恢复"],
      },
      error: "原文文件不存在或无法读取",
    },
  };
}

function createProjectForNovelSpace(space) {
  const service = getActiveProject()?.service || { provider: "custom_azure", model: providerDefaults.custom_azure };
  const characters = getNovelCharacters(space);
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: space.id,
    name: `${space.name} · 新创作`,
    context: {
      title: space.name,
      world: `基于「${space.name}」原作知识空间进行内容问答与续写。`,
    },
    conversation: getNovelOpeningConversation(space),
    service,
    characters,
    selectedCharacterName: characters[0]?.name || "主角",
    mode: "续写",
  });
  projects.push(project);
  return project;
}

function findResumeProjectForNovelSpace(spaceId) {
  const candidates = projects.filter((project) => project.novelSpaceId === spaceId);
  return candidates.find((project) => project.id === activeProjectId)
    || candidates.slice().sort((left, right) => (Number(right.updatedAt) || 0) - (Number(left.updatedAt) || 0))[0]
    || null;
}

function selectNovelSpace(spaceId, enterWorkbench = false, preserveWorkspaceView = false, { syncUrl = true } = {}) {
  if (preventWorkspaceMutation("切换小说空间")) return false;
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space) return false;
  if (!confirmNovelMemorySpaceSwitch(space.id)) {
    renderWorkspaceNovelSelect();
    return false;
  }
  if (space.id !== getCurrentNovelSpaceId()) invalidateSourceRequestsForSpaceChange();
  activeNovelSpaceId = space.id;
  space.lastAccessedAt = Date.now();
  retrievalStrategy = loadRetrievalStrategy(space.id);
  syncRetrievalStrategy();
  resetNovelMemoryFilters();
  persistNovelSpaces();
  let project = findResumeProjectForNovelSpace(space.id);
  if (!project) project = createProjectForNovelSpace(space);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  renderNovelSpaceLibrary();
  loadNovelSpaceMemory(space.id);
  if (activeWorkspaceView === "memory") {
    loadSourceKnowledge(space.id);
    loadReviewedMemoryStatus(space.id);
  }
  showToast(`已选择「${space.name}」知识空间`);
  if (preserveWorkspaceView) {
    syncWorkspacePage();
    if (syncUrl) persistWorkspaceView(activeWorkspaceView);
  }
  else if (enterWorkbench) setWorkspaceView("workbench", { announce: false, focus: true });
  else setWorkspaceView("source", { announce: false, focus: false });
  return true;
}

function syncNovelSpaceFromUrl(spaceId) {
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space || space.id === getCurrentNovelSpaceId()) return true;
  return selectNovelSpace(space.id, false, true, { syncUrl: false });
}

function setComposerMode(mode, { announce = false } = {}) {
  const supportedModes = new Set(["续写", "问答", "改写", "独白"]);
  selectedMode = supportedModes.has(mode) ? mode : "续写";
  document.querySelectorAll(".mode-tab").forEach((item) => {
    const active = item.dataset.mode === selectedMode;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  advancedModeDisclosure?.classList.toggle("has-active-mode", ["改写", "独白"].includes(selectedMode));
  composerHint.textContent = getModeHint(selectedMode);
  syncModeControls();
  renderModePrompts();
  renderTaskStarters();
  persistActiveProject();
  if (announce) showToast(`已切换到「${selectedMode}」模式`);
}

function openNovelSpaceFlow(spaceId, mode) {
  const space = novelSpaces.find((item) => item.id === spaceId);
  if (!space) return;
  const readiness = getNovelSpaceReadiness(space);
  if (mode === "问答" && !readiness.canQuery) {
    showToast(`${space.name}的原文尚未就绪，内容问答暂不可用`);
    return;
  }
  if (!selectNovelSpace(spaceId, true)) return;
  beginConversationForMode(mode, { announce: false });
  messageInput?.focus();
}

function openWorkspaceTask(mode) {
  const space = novelSpaceForProject();
  if (!space) {
    setWorkspaceView("library", { announce: true, focus: true });
    return;
  }
  const readiness = getNovelSpaceReadiness(space);
  if (mode === "问答" && !readiness.canQuery) {
    setWorkspaceView("source", { announce: true, focus: true });
    showToast("当前原文尚未就绪，请先恢复或检查解析状态");
    return;
  }
  if (!selectNovelSpace(space.id, true)) return;
  beginConversationForMode(mode, { announce: true });
  messageInput?.focus();
}

async function uploadNovelFile(fileSelection) {
  if (preventWorkspaceMutation("上传或重新解析原文")) return;
  const files = Array.from(fileSelection?.length !== undefined ? fileSelection : [fileSelection]).filter(Boolean)
    .sort((left, right) => String(left.name || "").localeCompare(String(right.name || ""), undefined, { numeric: true, sensitivity: "base" }));
  if (!files.length) return;
  const file = files[0];
  const displayName = files.length > 1 ? `${file.name} 等 ${files.length} 个文件` : file.name;
  if (novelUploadInFlight) {
    showToast("上一份小说仍在解析中");
    return;
  }
  if (novelUploadPollingTimedOut || activeNovelUploadJobId || loadNovelUploadJob()) {
    setNovelUploadFeedback("warning", "已有后台解析任务尚未确认结束，请先刷新状态或取消任务，不要重复上传。", false);
    showToast("请先处理仍在后台运行的上传任务");
    return;
  }
  const pendingRecoveryNames = pendingSpaceRecovery.uploadNames;
  const selectedRecoveryName = pendingRecoveryNames.length
    ? safeText(spaceRecoveryTargetSelect?.value, "", 80).trim()
    : "";
  if (pendingRecoveryNames.length > 1 && !selectedRecoveryName) {
    setNovelUploadFeedback("warning", "请先选择要恢复的小说空间，再上传原文。", false);
    showToast("请先选择待恢复的小说空间");
    return;
  }
  const unsupportedFile = files.find((item) => {
    const extension = item.name.toLowerCase().split(".").pop() || "";
    return !supportedNovelFileExtensions.has(extension);
  });
  if (unsupportedFile) {
    pendingNovelUploadFile = null;
    novelUploadTargetSpaceId = "";
    novelUploadRetrySpaceId = "";
    setNovelUploadFeedback("error", "暂不支持该文件格式，请上传 TXT、Markdown、HTML、DOCX、EPUB、FB2 或 PDF", false);
    showToast("暂不支持该文件格式，请更换小说文件");
    return;
  }
  const replacementSpaceId = novelUploadTargetSpaceId || novelUploadRetrySpaceId;
  const targetSpace = novelSpaces.find((space) => space.id === replacementSpaceId);
  novelUploadTargetSpaceId = "";
  novelUploadRetrySpaceId = "";
  pendingNovelUploadFile = files;
  novelUploadPollingTimedOut = false;
  const name = targetSpace?.name
    || selectedRecoveryName
    || (pendingRecoveryNames.length === 1 ? pendingRecoveryNames[0] : "")
    || safeText(novelUploadNameInput?.value, "", 80).trim()
    || file.name.replace(/\.(txt|md|markdown|html|htm|docx|epub|fb2|pdf)$/i, "").trim()
    || "未命名小说";
  const totalBytes = files.reduce((total, item) => total + (Number(item.size) || 0), 0);
  if (files.some((item) => Number(item.size) > 40_000_000) || totalBytes > 40_000_000) {
    setNovelUploadFeedback("error", "单个文件或合并后的总大小不能超过 40 MB，请压缩或拆分后再上传", false);
    showToast("上传文件合计不能超过 40 MB");
    return;
  }
  if (targetSpace && !window.confirm(`将使用「${displayName}」重新解析并替换「${targetSpace.name}」的原文。空间 ID、项目绑定和空间记忆会保留，确定继续吗？`)) {
    pendingNovelUploadFile = null;
    setNovelUploadFeedback("warning", "已取消重新解析，当前小说空间没有变化", false);
    showToast("已取消重新解析");
    return;
  }
  novelUploadInFlight = true;
  setNovelUploadFeedback("processing", `正在上传并解析「${displayName}」……`, false);
  if (novelUploadRetryButton) novelUploadRetryButton.disabled = true;
  showToast("正在上传并建立小说知识空间……");
  try {
    const filePayloads = [];
    for (const currentFile of files) {
      filePayloads.push({ filename: currentFile.name, ...(await readNovelFilePayload(currentFile)) });
    }
    const filePayload = files.length === 1 ? filePayloads[0] : { files: filePayloads };
    const recoverableSpace = novelSpaces.find((space) => (
      space.kind === "uploaded"
      && !space.source?.available
      && space.name.trim().toLocaleLowerCase() === name.toLocaleLowerCase()
    ));
    const response = await fetchWithTimeout("/api/novels/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        filename: displayName,
        async: true,
        replace_space_id: targetSpace?.id || recoverableSpace?.id || "",
        replace_existing: Boolean(targetSpace),
        ...(files.length === 1
          ? filePayload
          : { files: filePayload.files }),
      }),
    }, 60000);
    let payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "小说上传失败");
   if (payload.job_id) {
     activeNovelUploadJobId = payload.job_id;
     persistNovelUploadJob(payload.job_id, displayName);
     showToast("文件已上传，正在后台解析章节……");
     payload = await waitForNovelUpload(payload.job_id, displayName);
   }
    applyNovelUploadResult(payload, displayName);
    clearNovelUploadJob();
    if (novelUploadNameInput) novelUploadNameInput.value = "";
 } catch (error) {
    if (replacementSpaceId) novelUploadRetrySpaceId = replacementSpaceId;
    const cancelled = error?.name === "UploadCancelled";
    const pollingTimedOut = error?.name === "UploadPollingTimeout";
    const pollingStatusLost = Boolean(activeNovelUploadJobId) && isRecoverableNovelUploadStatusError(error);
    if (pollingTimedOut || pollingStatusLost) novelUploadPollingTimedOut = true;
    const message = cancelled
      ? "上传已取消，可点击重试解析"
      : (pollingTimedOut || pollingStatusLost
        ? "后台任务仍可能继续，状态暂时无法确认，请先取消任务或刷新小说库，不要重复上传"
        : (error?.name === "AbortError" ? "上传或解析超时，请检查本地服务后重试" : (error?.message || "小说上传失败")));
    setNovelUploadFeedback(
      cancelled || pollingTimedOut || pollingStatusLost ? "warning" : "error",
      `${displayName}：${message}`,
      !pollingTimedOut && !pollingStatusLost,
    );
    showToast(message);
 } finally {
   novelUploadInFlight = false;
   if (!novelUploadPollingTimedOut) {
     activeNovelUploadJobId = "";
     clearNovelUploadJob();
   }
   novelUploadCancelInFlight = false;
   if (novelUploadRetryButton) novelUploadRetryButton.disabled = false;
   if (novelUploadInput) novelUploadInput.value = "";
 }
}

function setNovelUploadFeedback(kind, message, canRetry) {
  if (!novelUploadFeedback || !novelUploadFeedbackText) return;
  novelUploadFeedback.hidden = false;
  novelUploadFeedback.classList.remove("is-error", "is-success", "is-warning", "is-processing");
  if (kind) novelUploadFeedback.classList.add(`is-${kind}`);
  novelUploadFeedbackText.textContent = message;
  if (novelUploadCancelButton) {
    novelUploadCancelButton.hidden = !activeNovelUploadJobId
      || (kind !== "processing" && !(kind === "warning" && novelUploadPollingTimedOut));
    novelUploadCancelButton.disabled = novelUploadCancelInFlight;
  }
  if (novelUploadRetryButton) {
    novelUploadRetryButton.hidden = !canRetry || !pendingNovelUploadFile;
    novelUploadRetryButton.disabled = novelUploadInFlight;
  }
}

async function cancelNovelUpload() {
  if (!activeNovelUploadJobId || novelUploadCancelInFlight) return;
  const jobId = activeNovelUploadJobId;
  novelUploadCancelInFlight = true;
  setNovelUploadFeedback("processing", "正在取消解析任务……", false);
  try {
    const response = await fetchWithTimeout("/api/novels/upload-cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ job_id: jobId }),
    }, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "取消解析失败");
    if (novelUploadPollingTimedOut) {
      const terminal = await waitForNovelCancellation(jobId);
      activeNovelUploadJobId = "";
      novelUploadPollingTimedOut = false;
      clearNovelUploadJob();
      if (terminal.status === "cancelled") {
        novelUploadCancelInFlight = false;
        const canRetry = Boolean(pendingNovelUploadFile);
        setNovelUploadFeedback("warning", canRetry ? "上传任务已取消，可点击重试解析" : "上传任务已取消，请重新选择原文件", canRetry);
        showToast("上传任务已取消");
        return;
      }
      if (terminal.status === "ready") {
        novelUploadCancelInFlight = false;
        pendingNovelUploadFile = null;
        setNovelUploadFeedback("success", "后台解析已完成，请刷新小说库查看新空间", false);
        await loadNovelSpacesFromServer({ announce: true });
        return;
      }
      throw new Error(terminal.error || "上传任务结束状态异常");
    }
    showToast("已请求取消解析，正在收尾");
  } catch (error) {
    novelUploadCancelInFlight = false;
    setNovelUploadFeedback("processing", error?.message || "取消解析失败，任务仍在继续", false);
    showToast(error?.message || "取消解析失败，任务仍在继续");
  }
}

async function waitForNovelUpload(jobId, fileName = "小说文件") {
 for (let attempt = 0; attempt < 240; attempt += 1) {
    const params = new URLSearchParams({ job_id: jobId });
    const response = await fetchWithTimeout(`/api/novels/upload-status?${params.toString()}`, {}, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "上传任务读取失败");
    if (payload.status === "ready") return payload;
    if (payload.status === "error") throw new Error(payload.error || "小说解析失败");
    if (payload.status === "cancelled") {
      const error = new Error(payload.error || "上传已取消");
      error.name = "UploadCancelled";
      throw error;
    }
    const progress = Number.isFinite(Number(payload.progress)) ? Math.max(0, Math.min(100, Number(payload.progress))) : 0;
    const stage = payload.stage || "正在处理";
    setNovelUploadFeedback("processing", `正在解析「${fileName}」 · ${stage} · ${progress}%`, false);
   await new Promise((resolve) => window.setTimeout(resolve, 500));
  }
  const error = new Error("小说解析超时，请稍后刷新小说库查看状态");
  error.name = "UploadPollingTimeout";
  throw error;
}

async function waitForNovelCancellation(jobId) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    const params = new URLSearchParams({ job_id: jobId });
    const response = await fetchWithTimeout(`/api/novels/upload-status?${params.toString()}`, {}, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "上传任务读取失败");
    if (!["processing", "cancelling"].includes(payload.status)) return payload;
    await new Promise((resolve) => window.setTimeout(resolve, 500));
  }
  throw new Error("取消解析超时，请刷新小说库确认任务状态");
}

async function resumeNovelUploadJob() {
  if (novelUploadResumeInFlight || novelUploadInFlight) return;
  const savedJob = loadNovelUploadJob();
  if (!savedJob) return;
  novelUploadResumeInFlight = true;
  novelUploadInFlight = true;
  activeNovelUploadJobId = savedJob.jobId;
  novelUploadPollingTimedOut = false;
  setNovelUploadFeedback("processing", `正在恢复「${savedJob.fileName}」的后台解析任务……`, false);
  try {
    const params = new URLSearchParams({ job_id: savedJob.jobId });
    const response = await fetchWithTimeout(`/api/novels/upload-status?${params.toString()}`, {}, 12000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "上传任务读取失败");
    if (payload.status === "ready") {
      applyNovelUploadResult(payload, savedJob.fileName);
      clearNovelUploadJob();
      return;
    }
    if (payload.status === "error" || payload.status === "cancelled") {
      clearNovelUploadJob();
      setNovelUploadFeedback(
        "warning",
        `「${savedJob.fileName}」的后台任务${payload.status === "cancelled" ? "已取消" : "失败"}：${payload.error || "请重新选择文件"}。可重新上传原文件。`,
        false,
      );
      return;
    }
    const completed = await waitForNovelUpload(savedJob.jobId, savedJob.fileName);
    applyNovelUploadResult(completed, savedJob.fileName);
    clearNovelUploadJob();
  } catch (error) {
    const pollingStatusLost = isRecoverableNovelUploadStatusError(error);
    if (pollingStatusLost) novelUploadPollingTimedOut = true;
    const message = error?.name === "UploadPollingTimeout"
      ? "后台解析仍在进行，可稍后刷新小说库或取消任务。"
      : pollingStatusLost
        ? "后台任务状态暂时无法读取，可稍后刷新小说库或取消任务。"
      : (error?.name === "AbortError" ? "恢复上传任务超时，请稍后刷新小说库。" : (error?.message || "恢复上传任务失败，请重新选择文件。"));
    setNovelUploadFeedback("warning", `「${savedJob.fileName}」：${message}`, false);
  } finally {
    novelUploadResumeInFlight = false;
    novelUploadInFlight = false;
    if (!novelUploadPollingTimedOut) {
      activeNovelUploadJobId = "";
      clearNovelUploadJob();
    }
    novelUploadCancelInFlight = false;
    if (novelUploadRetryButton) novelUploadRetryButton.disabled = false;
  }
}

async function readNovelFileText(file) {
  if (typeof file?.arrayBuffer !== "function" || typeof TextDecoder === "undefined") {
    return { text: await file.text(), encoding: "utf-8" };
  }
  const bytes = new Uint8Array(await file.arrayBuffer());
  for (const encoding of ["utf-8", "gb18030"]) {
    try {
      return { text: new TextDecoder(encoding, { fatal: true }).decode(bytes), encoding };
    } catch {
      // Try the next common novel encoding before falling back with replacement characters.
    }
  }
  return { text: new TextDecoder("utf-8").decode(bytes), encoding: "utf-8-replacement" };
}

async function readNovelFilePayload(file) {
  // Keep every upload in the same byte-preserving path. Sending text directly
  // through JSON can expand GBK/Unicode novels near the request-size boundary.
  if (typeof file?.arrayBuffer !== "function" || typeof btoa !== "function") {
    return readNovelFileText(file);
  }
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  const blockSize = 0x8000;
  for (let index = 0; index < bytes.length; index += blockSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + blockSize));
  }
  return { content_base64: btoa(binary), encoding: "binary" };
}

function persistCustomTemplates() {
  try {
    localStorage.setItem(customTemplatesStorageKey, JSON.stringify(customTemplates));
    updateStorageStatus();
  } catch {
    notifyStorageIssue();
  }
}

function normalizeConversationSession(item, fallbackAssistantName = "角色") {
  const source = item && typeof item === "object" ? item : {};
  const rawMessages = Array.isArray(source.messages)
    ? source.messages
    : [
      ...(Array.isArray(source.conversationArchive) ? source.conversationArchive : []),
      ...(Array.isArray(source.conversation) ? source.conversation : []),
    ];
  const messages = rawMessages
    .slice(-maxConversationSessionMessages)
    .map((message) => normalizeConversationItem(message, fallbackAssistantName))
    .filter((message) => message.content);
  const sessionMode = modeHints[source.mode] ? source.mode : "续写";
  const firstUserMessage = messages.find((message) => message.role === "user")?.content || "";
  return {
    id: safeText(source.id, `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    mode: sessionMode,
    title: safeText(source.title || firstUserMessage, `${sessionMode}会话`, 80),
    messages,
    draft: safeText(source.draft, "", 10000),
    createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
    updatedAt: Number.isFinite(Number(source.updatedAt)) ? Number(source.updatedAt) : Date.now(),
  };
}

function createProject({ id, name, context, conversation, conversationArchive, conversationSessions, activeConversationSessionId, activeConversationSessionStartedAt, service, characters, selectedCharacterName, mode, draft, updatedAt, prompts, highlights, checkpoints, beats, activeBeatId, contextMode, summaryMessageCount, summaryUpdatedAt, branchSource, novelSpaceId }) {
  const safeContext = context && typeof context === "object" ? context : {};
  const normalizedNovelSpaceId = safeText(novelSpaceId, defaultNovelSpaceId, 100);
  const isDefaultNovelSpace = normalizedNovelSpaceId === defaultNovelSpaceId;
  const safeService = service && typeof service === "object" ? service : {};
  const selectedProvider = Object.prototype.hasOwnProperty.call(providerDefaults, safeService.provider)
    ? safeService.provider
    : "custom_azure";
  const storedModels = safeService.models && typeof safeService.models === "object" ? safeService.models : {};
  const safeModels = Object.fromEntries(Object.keys(providerDefaults)
    .map((provider) => [provider, safeText(storedModels[provider], "", 160)])
    .filter(([, model]) => model));
  const selectedModel = safeText(
    safeModels[selectedProvider] || safeService.model,
    providerDefaults[selectedProvider],
    160,
  );
  safeModels[selectedProvider] = selectedModel;
  const safeName = safeText(name || safeContext.title, "未命名作品", 80);
  const safeTitle = safeText(safeContext.title || safeName, safeName, 120);
  const genericFallbackCharacters = [
    { name: "主角", tone: "根据当前小说设定行动，保留人物已经建立的目标与性格。", details: "这是当前作品的主要叙事角色，可以在角色管理中替换为原作人物。" },
    { name: "叙事助手", tone: "克制、清晰，帮助核对设定并推动故事向前。", details: "负责整理原作依据、当前场景和待解决的线索，不代替角色做决定。" },
  ];
  const safeCharacters = Array.isArray(characters) && characters.length
    ? characters.map((item) => {
      const source = item && typeof item === "object" ? item : {};
      return {
        name: safeText(source.name, "角色", 40),
        tone: safeText(source.tone, "待设定", 240),
        details: safeText(source.details, "", 500),
      };
    }).filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
    : (isDefaultNovelSpace ? defaultCharacters : genericFallbackCharacters).map((item) => ({ ...item }));
  const selected = safeCharacters.find((item) => item.name === selectedCharacterName) || safeCharacters[0];
  const safeConversationArchive = Array.isArray(conversationArchive)
    ? conversationArchive.slice(-maxArchivedMessages)
      .map((item) => normalizeConversationItem(item, selected.name))
      .filter((item) => item.content)
    : [];
  const safePrompts = Array.isArray(prompts)
    ? prompts.slice(0, maxPrompts).map((item) => {
      const source = item && typeof item === "object" ? item : {};
      return {
        id: safeText(source.id, `prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
        title: safeText(source.title, "自定义灵感", 32),
        text: safeText(source.text, "", 500),
      };
    }).filter((item) => item.text)
    : [];
  const safeHighlights = Array.isArray(highlights)
    ? highlights.slice(-maxHighlights).map((item) => {
      const source = item && typeof item === "object" ? item : {};
      return {
        id: safeText(source.id, `highlight-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
        role: source.role === "user" ? "user" : "assistant",
        name: safeText(source.name, source.role === "user" ? "我" : "角色", 40),
        content: safeText(source.content, "", 4000),
        createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
      };
    }).filter((item) => item.content)
    : [];
  const safeBeats = Array.isArray(beats)
    ? beats.slice(0, maxSceneBeats).map((item) => {
      const source = item && typeof item === "object" ? item : {};
      const status = Object.prototype.hasOwnProperty.call(sceneBeatStatusLabels, source.status)
        ? source.status
        : "planned";
      return {
        id: safeText(source.id, `beat-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
        title: safeText(source.title, "未命名场景", 80),
        goal: safeText(source.goal, "", 280),
        outcome: safeText(source.outcome, "", 600),
        outcomeThrough: safeText(source.outcomeThrough, "", 8000),
        status,
      };
    }).filter((item, index, list) => item.title && list.findIndex((candidate) => candidate.id === item.id) === index)
    : [];
  const safeActiveBeatId = safeBeats.some((beat) => beat.id === activeBeatId)
    ? activeBeatId
    : safeBeats.find((beat) => beat.status === "active")?.id || "";
  safeBeats.forEach((beat) => {
    if (beat.id === safeActiveBeatId) beat.status = "active";
    else if (beat.status === "active") beat.status = "planned";
  });
  const safeCheckpoints = Array.isArray(checkpoints)
    ? checkpoints.slice(-maxCheckpoints).map((item) => normalizeCheckpoint(item, novelSpaceId))
    : [];
  const hasConversation = Array.isArray(conversation);
  const genericFallbackConversation = [{
    role: "assistant",
    name: "主角",
    content: `「${safeTitle}」知识空间已经准备好。你可以指定章节或场景让我续写，也可以先提问原作内容。`,
  }];
  const safeConversation = hasConversation
    ? conversation.slice(-maxConversationMessages)
      .map((item) => normalizeConversationItem(item, selected.name))
      .filter((item) => item.content)
    : (isDefaultNovelSpace ? defaultConversationHistory : genericFallbackConversation).map((item) => ({ ...item }));
  const safeConversationSessions = Array.isArray(conversationSessions)
    ? conversationSessions
      .slice(-maxConversationSessions)
      .map((item) => normalizeConversationSession(item, selected.name))
      .filter((item, index, list) => item.messages.length && list.findIndex((candidate) => candidate.id === item.id) === index)
    : [];
  const safeActiveConversationSessionId = safeText(
    activeConversationSessionId,
    `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    100,
  );
  return {
    id: safeText(id, `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    novelSpaceId: normalizedNovelSpaceId,
    name: safeName,
    branchSource: normalizeBranchSource(branchSource),
    context: {
      title: safeTitle,
      chapter: safeText(safeContext.chapter, "", 120),
      era: safeText(safeContext.era, "", 120),
      world: safeText(safeContext.world, "", 800),
      reference: safeText(safeContext.reference, "", 4000),
      summary: safeText(safeContext.summary, "", 2000),
      instructions: safeText(safeContext.instructions, "", 1200),
    },
    conversation: safeConversation,
    conversationArchive: safeConversationArchive,
    conversationSessions: safeConversationSessions,
    activeConversationSessionId: safeActiveConversationSessionId,
    activeConversationSessionStartedAt: Number.isFinite(Number(activeConversationSessionStartedAt))
      ? Number(activeConversationSessionStartedAt)
      : Date.now(),
    service: {
      provider: selectedProvider,
      model: selectedModel,
      models: safeModels,
      creativity: creativityLabels[safeService.creativity] ? safeService.creativity : "balanced",
      responseLength: responseLengthLabels[safeService.responseLength] ? safeService.responseLength : "standard",
    },
    draft: safeText(draft, "", 10000),
    prompts: safePrompts,
    highlights: safeHighlights,
    checkpoints: safeCheckpoints,
    beats: safeBeats,
    activeBeatId: safeActiveBeatId,
    contextMode: contextMode === "summary" ? "summary" : "full",
    summaryMessageCount: Number.isFinite(Number(summaryMessageCount)) ? Math.max(0, Math.min(Number(summaryMessageCount), maxStoredConversationMessages)) : 0,
    summaryUpdatedAt: Number.isFinite(Number(summaryUpdatedAt)) ? Number(summaryUpdatedAt) : 0,
    characters: safeCharacters,
    selectedCharacterName: selected.name,
    mode: modeHints[mode] ? mode : "续写",
    updatedAt: Number.isFinite(Number(updatedAt)) ? Number(updatedAt) : Date.now(),
  };
}

function normalizeCheckpoint(item, fallbackNovelSpaceId = defaultNovelSpaceId) {
  const source = item && typeof item === "object" ? item : {};
  const checkpointNovelSpaceId = safeText(source.novelSpaceId, fallbackNovelSpaceId, 100);
  const normalized = createProject({
    id: source.id,
    novelSpaceId: checkpointNovelSpaceId,
    name: source.name || "检查点",
    context: source.context,
    conversation: source.conversation,
    conversationArchive: source.conversationArchive,
    conversationSessions: source.conversationSessions,
    activeConversationSessionId: source.activeConversationSessionId,
    activeConversationSessionStartedAt: source.activeConversationSessionStartedAt,
    service: source.service,
    characters: source.characters,
    selectedCharacterName: source.selectedCharacterName,
    mode: source.mode,
    draft: source.draft,
    prompts: source.prompts,
    highlights: source.highlights,
    beats: source.beats,
    activeBeatId: source.activeBeatId,
    contextMode: source.contextMode,
    summaryMessageCount: source.summaryMessageCount,
    summaryUpdatedAt: source.summaryUpdatedAt,
  });
  return {
    id: safeText(source.id, `checkpoint-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    novelSpaceId: normalized.novelSpaceId,
    name: safeText(source.name, "未命名检查点", 60),
    createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
    context: normalized.context,
    conversation: normalized.conversation,
    conversationArchive: normalized.conversationArchive,
    conversationSessions: normalized.conversationSessions,
    activeConversationSessionId: normalized.activeConversationSessionId,
    activeConversationSessionStartedAt: normalized.activeConversationSessionStartedAt,
    service: normalized.service,
    characters: normalized.characters,
    selectedCharacterName: normalized.selectedCharacterName,
    mode: normalized.mode,
    draft: normalized.draft,
    prompts: normalized.prompts,
    highlights: normalized.highlights,
    beats: normalized.beats,
    activeBeatId: normalized.activeBeatId,
    contextMode: normalized.contextMode,
    summaryMessageCount: normalized.summaryMessageCount,
    summaryUpdatedAt: normalized.summaryUpdatedAt,
  };
}

function isLegacyDemoProject(project) {
  const context = project?.context && typeof project.context === "object" ? project.context : {};
  const characters = Array.isArray(project?.characters) ? project.characters : [];
  const names = characters.map((item) => safeText(item?.name, "", 40));
  return (context.title === "红楼梦" || project?.name === "红楼梦")
    && names.includes("林黛玉")
    && names.includes("贾宝玉");
}

function createInkEchoDefaultProject() {
  return createProject({
    id: `project-${Date.now()}-inkecho`,
    novelSpaceId: defaultNovelSpaceId,
    name: "蛊真人",
    context: {
      title: "蛊真人",
      era: "蛊界 · 青茅山",
      world: "以《蛊真人》原作为本地知识库，围绕方源、蛊道体系和原作剧情进行续写与内容问答。",
    },
    service: { provider: "custom_azure", model: providerDefaults.custom_azure },
    characters: defaultCharacters,
    selectedCharacterName: "方源",
    mode: "续写",
  });
}

function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectsStorageKey) || "null");
    if (Array.isArray(saved) && saved.length) {
      const normalized = saved.slice(0, maxProjects).map((project) => createProject(
        project && typeof project === "object" ? project : {},
      ));
      const hasInkEchoProject = normalized.some((project) => project.context?.title === "蛊真人");
      if (!hasInkEchoProject && normalized.some(isLegacyDemoProject)) {
        const defaultProject = createInkEchoDefaultProject();
        try {
          localStorage.setItem(activeProjectStorageKey, defaultProject.id);
        } catch {
          notifyStorageIssue();
        }
        return [defaultProject, ...normalized].slice(0, maxProjects);
      }
      return normalized;
    }
  } catch {
    // Fall through to the legacy single-project migration.
  }

  let context = { title: "蛊真人", era: "蛊界 · 青茅山", world: "以《蛊真人》原作为本地知识库，围绕方源、蛊道体系和原作剧情进行续写与内容问答。" };
  let service = { provider: "custom_azure", model: providerDefaults.custom_azure };
  try {
    const savedContext = JSON.parse(localStorage.getItem(workspaceStorageKey) || "null");
    if (savedContext) context = { ...context, ...savedContext };
    const savedService = JSON.parse(localStorage.getItem(serviceStorageKey) || "null");
    if (savedService) service = { ...service, ...savedService };
  } catch {
    // Use the default project when legacy storage is unavailable.
  }
  return [createProject({
    id: `project-${Date.now()}`,
    novelSpaceId: defaultNovelSpaceId,
    name: context.title,
    context,
    conversation: loadConversation(),
    service,
    characters: defaultCharacters,
    selectedCharacterName: "方源",
    mode: "续写",
  })];
}

function loadConversation() {
  try {
    const saved = JSON.parse(localStorage.getItem(conversationStorageKey) || "null");
    if (Array.isArray(saved) && saved.length > 0) {
      return saved
        .filter((item) => item && ["user", "assistant"].includes(item.role) && typeof item.content === "string")
        .slice(-maxConversationMessages)
        .map((item) => ({ ...item, name: item.name || (item.role === "user" ? "我" : "方源") }));
    }
  } catch {
    // Ignore malformed or unavailable local storage.
  }
  return defaultConversationHistory.map((item) => ({ ...item }));
}

function getActiveProject() {
  return projects.find((project) => project.id === activeProjectId) || projects[0];
}

function getConversationForDisplay(project = getActiveProject()) {
  const workspace = project?.id === activeProjectId ? conversationHistory : project?.conversation;
  return [
    ...(Array.isArray(project?.conversationArchive) ? project.conversationArchive : []),
    ...(Array.isArray(workspace) ? workspace : []),
  ];
}

function getConversationMessageCount(project = getActiveProject()) {
  return getConversationForDisplay(project).length;
}

function getProjectHealth(project = getActiveProject()) {
  const beats = Array.isArray(project?.beats) ? project.beats : [];
  const doneBeats = beats.filter((beat) => beat.status === "done").length;
  const staleOutcomes = beats.filter((beat) => {
    const freshness = getSceneOutcomeFreshness(beat, project);
    return freshness.includes("待重新") || freshness.includes("新增") || freshness.includes("不在当前") || freshness.includes("未记录");
  }).length;
  const messageCount = getConversationMessageCount(project);
  const hasSummary = Boolean(project?.context?.summary?.trim());
  const summaryMessageCount = Number.isFinite(Number(project?.summaryMessageCount))
    ? Math.max(0, Number(project.summaryMessageCount))
    : 0;
  return {
    messageCount,
    beatCount: beats.length,
    doneBeats,
    staleOutcomes,
    hasSummary,
    summaryNewMessages: hasSummary ? Math.max(0, messageCount - summaryMessageCount) : 0,
    hasDraft: Boolean(project?.draft?.trim()),
  };
}

function formatProjectHealth(project = getActiveProject()) {
  const health = getProjectHealth(project);
  const parts = [
    health.beatCount ? `场景 ${health.doneBeats}/${health.beatCount} 完成` : "暂无场景计划",
    health.hasSummary
      ? health.summaryNewMessages > 0 ? `摘要待更新 · ${health.summaryNewMessages} 条新增` : "摘要已覆盖"
      : "尚未建立摘要",
  ];
  if (health.staleOutcomes) parts.push(`${health.staleOutcomes} 个结果待更新`);
  if (health.hasDraft) parts.push("有草稿");
  return parts.join(" · ");
}

function getContextFreshnessNotices(project = getActiveProject()) {
  const health = getProjectHealth(project);
  const notices = [];
  if (!health.hasSummary) notices.push("剧情摘要尚未建立");
  else if (health.summaryNewMessages > 0) notices.push(`摘要后新增 ${health.summaryNewMessages} 条消息`);
  if (health.staleOutcomes > 0) notices.push(`${health.staleOutcomes} 个场景结果待更新`);
  return notices;
}

function formatContextFreshnessNotices(project = getActiveProject()) {
  const notices = getContextFreshnessNotices(project);
  return notices.length ? notices.join(" · ") : "摘要和场景结果均已覆盖当前历史";
}

function matchesProjectStatus(project, filter = "all") {
  if (filter === "all") return true;
  const health = getProjectHealth(project);
  if (filter === "attention") return !health.hasSummary || health.summaryNewMessages > 0 || health.staleOutcomes > 0 || health.hasDraft;
  if (filter === "summary") return !health.hasSummary || health.summaryNewMessages > 0;
  if (filter === "outcome") return health.staleOutcomes > 0;
  if (filter === "draft") return health.hasDraft;
  return true;
}

function archiveConversationOverflow(project = getActiveProject()) {
  if (!project || conversationHistory.length <= maxConversationMessages) return false;
  const overflowCount = conversationHistory.length - maxConversationMessages;
  const overflow = conversationHistory.splice(0, overflowCount);
  const existing = Array.isArray(project.conversationArchive) ? project.conversationArchive : [];
  project.conversationArchive = [...existing, ...overflow].slice(-maxArchivedMessages);
  return true;
}

function notifyStorageIssue() {
  if (storageWarningShown) return;
  storageWarningShown = true;
  showToast("本地保存不可用或空间不足，请先导出项目 JSON 备份");
}

function updateStorageStatus(failed = false) {
  if (!storageStatus) return;
  storageStatus.classList.remove("is-warning", "is-error");
  if (failed) {
    storageStatus.textContent = "本地保存失败 · 请立即导出 JSON 备份";
    storageStatus.classList.add("is-error");
    return;
  }
  try {
    const bytes = new Blob([JSON.stringify({ projects, customTemplates, characterLibrary, promptLibrary })]).size;
    const size = bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1000))} KB`;
    storageStatus.textContent = `本地数据约 ${size}`;
    if (bytes >= 3_500_000) {
      storageStatus.textContent += " · 建议导出备份";
      storageStatus.classList.add("is-warning");
    }
  } catch {
    storageStatus.textContent = "本地数据用量暂不可读";
  }
}

function persistProjects() {
  try {
    localStorage.setItem(projectsStorageKey, JSON.stringify(projects));
    localStorage.setItem(activeProjectStorageKey, activeProjectId);
    storageWarningShown = false;
    updateStorageStatus();
  } catch {
    updateStorageStatus(true);
    notifyStorageIssue();
  }
}

function scheduleProjectPersist() {
  clearTimeout(projectPersistTimer);
  projectPersistTimer = setTimeout(() => {
    projectPersistTimer = null;
    persistProjects();
  }, 220);
}

function persistActiveProject({ defer = false } = {}) {
  const project = getActiveProject();
  if (!project) return;
  archiveConversationOverflow(project);
  const context = getContext();
  project.name = context.title || project.name || "未命名作品";
  project.context = context;
  project.conversation = conversationHistory.slice(-maxConversationMessages);
  project.draft = messageInput.value.slice(0, 10000);
  const provider = providerSelect.value;
  const model = modelName.value.trim() || providerDefaults[provider];
  const savedModels = project.service?.models && typeof project.service.models === "object"
    ? { ...project.service.models }
    : {};
  savedModels[provider] = model;
  project.service = { provider, model, models: savedModels };
  project.service.creativity = creativitySelect.value;
  project.service.responseLength = responseLengthSelect.value;
  project.characters = Array.from(document.querySelectorAll(".character-card")).map((card) => ({
    name: card.dataset.character || "角色",
    tone: card.dataset.tone || "待设定",
    details: card.dataset.details || "",
  }));
  project.selectedCharacterName = selectedCharacter.name;
  project.mode = selectedMode;
  project.updatedAt = Date.now();
  if (defer) {
    scheduleProjectPersist();
  } else {
    clearTimeout(projectPersistTimer);
    projectPersistTimer = null;
    persistProjects();
  }
  renderProjectSelect();
}

function getActiveSceneBeat(project = getActiveProject()) {
  return project?.beats?.find((beat) => beat.id === project.activeBeatId) || null;
}

function getSceneOutcomeFreshness(beat, project = getActiveProject()) {
  if (!beat?.outcome?.trim()) return "";
  if (!beat.outcomeThrough) return "结果来源未记录（旧数据）";
  const messages = getConversationForDisplay(project);
  let sourceIndex = -1;
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (highlightKey(messages[index]) === beat.outcomeThrough) {
      sourceIndex = index;
      break;
    }
  }
  if (sourceIndex < 0) return "结果来源不在当前历史 · 建议重新提炼";
  const newMessages = messages.length - sourceIndex - 1;
  return newMessages > 0
    ? `结果截至第 ${sourceIndex + 1} 条消息 · 之后新增 ${newMessages} 条`
    : `结果覆盖到第 ${sourceIndex + 1} 条消息`;
}

function activateSceneBeat(project, beatId) {
  const selected = project?.beats?.find((beat) => beat.id === beatId);
  if (!selected) return null;
  project.beats.forEach((beat) => {
    beat.status = beat.id === beatId ? "active" : beat.status === "active" ? "planned" : beat.status;
  });
  project.activeBeatId = selected.id;
  return selected;
}

function renderActiveBeat() {
  const project = getActiveProject();
  const beats = project?.beats || [];
  const active = getActiveSceneBeat(project);
  beatCount.textContent = `${String(beats.length).padStart(2, "0")} / ${maxSceneBeats}`;
  copyScenePlanButton.disabled = !beats.length;
  copyScenePlanButton.title = beats.length ? "复制完整场景计划" : "先添加场景卡";
  if (!active) {
    activeBeatHint.textContent = "未选择场景卡";
    activeBeatHint.title = "打开场景计划，添加并设为当前";
    conversationContext.textContent = "未选择场景";
    conversationContext.title = "打开场景计划，设定当前场景";
    advanceBeatButton.disabled = true;
    advanceBeatButton.textContent = "推进下一幕 →";
    advanceBeatButton.title = "先在场景计划中设定当前场景";
    return;
  }
  activeBeatHint.textContent = active.goal ? `当前：${active.goal}` : `当前：${active.title}`;
  activeBeatHint.title = [active.title, sceneBeatStatusLabels[active.status], getSceneOutcomeFreshness(active, project)]
    .filter(Boolean).join(" · ");
  conversationContext.textContent = `场景 · ${active.title}`;
  conversationContext.title = active.goal || `${active.title} · ${sceneBeatStatusLabels[active.status]}`;
  const index = beats.findIndex((beat) => beat.id === active.id);
  const next = index >= 0 ? beats[index + 1] : null;
  advanceBeatButton.disabled = !next;
  advanceBeatButton.textContent = next ? "完成并推进 →" : "已到最后一幕";
  advanceBeatButton.title = next ? `完成「${active.title}」，进入「${next.title}」` : "添加下一张场景卡后即可继续推进";
}

async function copyScenePlan() {
  const project = getActiveProject();
  const beats = project?.beats || [];
  if (!beats.length) {
    showToast("先在场景计划中添加场景卡");
    return;
  }
  const text = [
    "InkEcho · 场景计划",
    `作品：${project.context.title || "未命名作品"}`,
    `当前场景：${getActiveSceneBeat(project)?.title || project.context.chapter || "未选择"}`,
    "",
    ...beats.map((beat, index) => [
      `${index + 1}. [${sceneBeatStatusLabels[beat.status]}] ${beat.title}`,
      beat.goal ? `目标：${beat.goal}` : "",
      beat.outcome ? `已发生 / 线索：${beat.outcome}` : "",
    ].filter(Boolean).join("\n")),
  ].join("\n\n");
  await copyText(text, "场景计划已复制");
}

function hydrateActiveProject() {
  const project = getActiveProject();
  if (!project) return;
  activeNovelSpaceId = project.novelSpaceId || defaultNovelSpaceId;
  retrievalStrategy = loadRetrievalStrategy(activeNovelSpaceId);
  syncRetrievalStrategy();
  resetNovelMemoryFilters();
  loadNovelSpaceMemory(activeNovelSpaceId);
  persistNovelSpaces();
  summaryEditPending = false;
  document.querySelector("#workTitle").value = project.context.title;
  const restoredChapter = normalizeChapterLocator(project.context.chapter);
  if (restoredChapter !== String(project.context.chapter || "").trim()) {
    project.context.chapter = restoredChapter;
    persistProjects();
  }
  workChapter.value = restoredChapter;
  document.querySelector("#workEra").value = project.context.era;
  document.querySelector("#workWorld").value = project.context.world;
  workReference.value = project.context.reference || "";
  workSummary.value = project.context.summary || "";
  workInstructions.value = project.context.instructions || "";
  renderActiveBeat();
  renderCustomPrompts();
  renderHighlights();
  renderCheckpoints();
  updateReferenceCount();
  messageInput.value = project.draft || "";
  draftStatus.textContent = messageInput.value ? "草稿已恢复" : "草稿自动保存";
  conversationHistory = project.conversation.map((item) => ({ ...item }));
  renderSummaryFreshness();
  selectedMode = project.mode || "续写";
  selectedCharacter = project.characters.find((item) => item.name === project.selectedCharacterName) || project.characters[0];
  providerSelect.value = project.service.provider;
  modelName.value = project.service.models?.[project.service.provider] || project.service.model;
  creativitySelect.value = creativityLabels[project.service.creativity] ? project.service.creativity : "balanced";
  responseLengthSelect.value = responseLengthLabels[project.service.responseLength] ? project.service.responseLength : "standard";
  responseLengthValue.textContent = responseLengthLabels[responseLengthSelect.value];
  syncModeControls();
  conversationTitle.textContent = getConversationTitle();
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === selectedMode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  composerHint.textContent = getModeHint(selectedMode);
  renderModePrompts();
  updateContextModeUI();
}

function renderProjectSelect() {
  const active = getActiveProject();
  const query = projectSearchInput?.value.trim().toLocaleLowerCase() || "";
  const statusFilter = projectStatusFilter?.value || "all";
  const visibleProjects = projects
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .filter((project) => {
      if (!matchesProjectStatus(project, statusFilter)) return false;
      if (!query) return true;
      const activeBeat = project.beats?.find((beat) => beat.id === project.activeBeatId);
      return [
        project.name,
        project.context?.title,
        project.context?.chapter,
        activeBeat?.title,
        activeBeat?.goal,
        project.selectedCharacterName,
        formatBranchSource(project),
        formatProjectHealth(project),
      ].filter(Boolean).join(" ").toLocaleLowerCase().includes(query);
    });
  if (projectSearchCount) {
    const activeMeta = active
      ? ` · 当前 ${getConversationMessageCount(active)} 条消息 · ${active.beats?.length || 0} 张场景卡`
      : "";
    const isFiltered = query || statusFilter !== "all";
    const filterLabel = statusFilter !== "all" ? ` · ${projectStatusLabels[statusFilter]}` : "";
    projectSearchCount.textContent = `${isFiltered ? `${visibleProjects.length} / ` : ""}${projects.length} 个项目${filterLabel}${activeMeta}`;
  }
  if (projectLineage) {
    const source = formatBranchSource(active);
    projectLineage.textContent = source ? `支线来源 · ${source}` : "独立项目 · 可从检查点或角色回复创建支线";
    projectLineage.title = source ? `当前项目从${source}派生` : "当前项目没有记录的支线来源";
    projectLineage.classList.toggle("is-branch", Boolean(source));
  }
  if (projectHealth) {
    const health = formatProjectHealth(active);
    const healthState = getProjectHealth(active);
    const needsAttention = !healthState.hasSummary || healthState.summaryNewMessages > 0 || healthState.staleOutcomes > 0 || healthState.hasDraft;
    projectHealth.textContent = health;
    projectHealth.title = `当前项目状态：${health}`;
    projectHealth.classList.toggle("is-warning", health.includes("待更新") || health.includes("有草稿"));
    if (projectHealthAction) {
      projectHealthAction.hidden = !needsAttention;
      projectHealthAction.textContent = needsAttention ? "去处理 →" : "";
      projectHealthAction.title = needsAttention ? "定位当前项目最需要处理的内容" : "当前项目暂无待处理状态";
    }
  }
  projectSelect.innerHTML = "";
  if (!visibleProjects.length) {
    const empty = document.createElement("option");
    empty.disabled = true;
    empty.textContent = "没有匹配的项目";
    projectSelect.appendChild(empty);
    return;
  }
  const activeVisible = Boolean(active && visibleProjects.some((project) => project.id === active.id));
  if (active && !activeVisible) {
    const hiddenActive = document.createElement("option");
    hiddenActive.value = "";
    hiddenActive.disabled = true;
    hiddenActive.textContent = `当前项目未在筛选结果：${active.name || "未命名作品"}`;
    projectSelect.appendChild(hiddenActive);
  }
  visibleProjects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = `${project.name || "未命名作品"}${project.branchSource ? " · 支线" : ""}`;
    option.title = [
      formatBranchSource(project) ? `支线来源：${formatBranchSource(project)}` : "独立项目",
      `项目状态：${formatProjectHealth(project)}`,
    ].join("\n");
    projectSelect.appendChild(option);
  });
  projectSelect.value = activeVisible ? active.id : "";
}

function focusProjectAttention() {
  const project = getActiveProject();
  const health = getProjectHealth(project);
  if (!health.hasSummary || health.summaryNewMessages > 0) {
    workSummary.scrollIntoView({ behavior: "smooth", block: "center" });
    workSummary.focus();
    showToast(health.hasSummary ? "已定位到待更新的剧情摘要" : "已定位到剧情摘要，请先建立摘要");
    return;
  }
  if (health.staleOutcomes > 0) {
    openScenePlanner();
    showToast("已打开场景计划，请处理待更新的本幕结果");
    return;
  }
  if (health.hasDraft) {
    messageInput.focus();
    showToast("已定位到未发送草稿");
    return;
  }
  showToast("当前项目暂无待处理状态");
}

function clearProjectFilters() {
  projectSearchInput.value = "";
  projectStatusFilter.value = "all";
  renderProjectSelect();
  showToast("已显示全部项目");
}

function saveConversation() {
  const archived = archiveConversationOverflow();
  try {
    localStorage.setItem(conversationStorageKey, JSON.stringify(conversationHistory.slice(-maxConversationMessages)));
  } catch {
    notifyStorageIssue();
  }
  persistActiveProject();
  renderSummaryFreshness();
  if (archived) renderConversation();
}

function renderSummaryFreshness() {
  if (!summaryFreshness) return;
  const project = getActiveProject();
  const hasSummary = Boolean(workSummary.value.trim());
  summaryFreshness.classList.toggle("is-stale", false);
  if (!hasSummary) {
    summaryFreshness.textContent = "暂无摘要";
    return;
  }
  const summarizedAt = Number.isFinite(Number(project?.summaryMessageCount))
    ? Number(project.summaryMessageCount)
    : 0;
  const newMessages = Math.max(0, getConversationMessageCount() - summarizedAt);
  if (newMessages > 0) {
    summaryFreshness.textContent = `摘要后新增 ${newMessages} 条消息 · 建议重新提炼`;
    summaryFreshness.classList.toggle("is-stale", true);
    return;
  }
  summaryFreshness.textContent = project?.summaryUpdatedAt
    ? `摘要已更新 · ${formatCheckpointDate(project.summaryUpdatedAt)}`
    : "已有摘要 · 尚未记录更新时间";
}

function commitManualSummaryEdit() {
  if (!summaryEditPending) return;
  const project = getActiveProject();
  if (!project) return;
  const value = workSummary.value.trim();
  if (value) {
    project.summaryMessageCount = getConversationMessageCount(project);
    project.summaryUpdatedAt = Date.now();
  } else {
    project.summaryMessageCount = 0;
    project.summaryUpdatedAt = 0;
  }
  summaryEditPending = false;
  renderSummaryFreshness();
  saveWorkspace();
}

function restoreWorkspace() {
  try {
    const saved = JSON.parse(localStorage.getItem(workspaceStorageKey) || "null");
    if (!saved) return;
    if (typeof saved.title === "string") document.querySelector("#workTitle").value = saved.title;
    if (typeof saved.chapter === "string") workChapter.value = saved.chapter;
    if (typeof saved.era === "string") document.querySelector("#workEra").value = saved.era;
    if (typeof saved.world === "string") document.querySelector("#workWorld").value = saved.world;
    if (typeof saved.reference === "string") workReference.value = saved.reference;
    if (typeof saved.summary === "string") workSummary.value = saved.summary;
    if (typeof saved.instructions === "string") workInstructions.value = saved.instructions;
    updateReferenceCount();
  } catch {
    // Ignore malformed or unavailable local storage.
  }
  persistActiveProject();
}

function saveWorkspace() {
  try {
    localStorage.setItem(workspaceStorageKey, JSON.stringify(getContext()));
  } catch {
    notifyStorageIssue();
  }
  persistActiveProject({ defer: true });
  updateContextUsage();
}

function saveDraft() {
  const project = getActiveProject();
  if (!project) return;
  project.draft = messageInput.value.slice(0, 10000);
  draftStatus.textContent = "正在保存草稿";
  clearTimeout(draftTimer);
  draftTimer = setTimeout(() => {
    persistProjects();
    draftStatus.textContent = project.draft ? "草稿已保存" : "草稿自动保存";
  }, 180);
}

function flushDraft() {
  clearTimeout(draftTimer);
  clearTimeout(projectPersistTimer);
  projectPersistTimer = null;
  const project = getActiveProject();
  if (!project) return;
  commitManualSummaryEdit();
  project.draft = messageInput.value.slice(0, 10000);
  // Persist the live form fields too; pagehide can fire before the deferred
  // project save scheduled by saveWorkspace().
  persistActiveProject();
}

function updateReferenceCount() {
  referenceCount.textContent = `${workReference.value.length} / 4000 字`;
}

async function importReferenceFile() {
  const file = referenceFile.files?.[0];
  if (!file) return;
  if (file.size > 2_000_000) {
    showToast("文件超过 2MB，请先整理后再导入");
    referenceFile.value = "";
    return;
  }
  try {
    const content = await file.text();
    const truncated = content.length > 4000;
    workReference.value = content.slice(0, 4000);
    updateReferenceCount();
    saveWorkspace();
    showToast(truncated ? "文件已导入前 4000 字" : `已导入 ${file.name}`);
  } catch {
    showToast("文件读取失败，请改用复制粘贴");
  } finally {
    referenceFile.value = "";
  }
}

function restoreServiceSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(serviceStorageKey) || "null");
    if (saved && providerDefaults[saved.provider]) providerSelect.value = saved.provider;
    if (saved && typeof saved.model === "string" && saved.model.trim()) modelName.value = saved.model;
    if (saved && creativityLabels[saved.creativity]) creativitySelect.value = saved.creativity;
    if (saved && responseLengthLabels[saved.responseLength]) responseLengthSelect.value = saved.responseLength;
    creativityValue.textContent = creativityLabels[creativitySelect.value];
    responseLengthValue.textContent = responseLengthLabels[responseLengthSelect.value];
  } catch {
    // Ignore malformed or unavailable local storage.
  }
}

function saveServiceSettings() {
  try {
    localStorage.setItem(serviceStorageKey, JSON.stringify({
      provider: providerSelect.value,
      model: modelName.value.trim(),
      creativity: creativitySelect.value,
      responseLength: responseLengthSelect.value,
    }));
  } catch {
    notifyStorageIssue();
  }
  persistActiveProject();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function setTheme(theme, persist = true) {
  const activeTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = activeTheme;
  document.body.dataset.theme = activeTheme;
  if (toggleThemeButton) {
    const isDark = activeTheme === "dark";
    toggleThemeButton.textContent = isDark ? "☼" : "☾";
    toggleThemeButton.setAttribute("aria-pressed", String(isDark));
    toggleThemeButton.setAttribute("aria-label", isDark ? "切换到浅色主题" : "切换到深色主题");
    toggleThemeButton.title = isDark ? "切换到浅色主题" : "切换到深色主题";
  }
  if (!persist) return;
  try {
    localStorage.setItem(themeStorageKey, activeTheme);
  } catch {
    // Theme preference is optional; keep the current page usable.
  }
}

function restoreTheme() {
  try {
    setTheme(localStorage.getItem(themeStorageKey) === "light" ? "light" : "dark", false);
  } catch {
    setTheme("dark", false);
  }
}

function getCommandPaletteMatches() {
  const query = commandPaletteSearch?.value.trim().toLocaleLowerCase() || "";
  return commandPaletteCommands.filter((command) => !query || `${command.label} ${command.hint} ${command.keywords}`.toLocaleLowerCase().includes(query));
}

function renderCommandPalette() {
  if (!commandPaletteList) return;
  const matches = getCommandPaletteMatches();
  commandPaletteActiveIndex = Math.max(0, Math.min(commandPaletteActiveIndex, matches.length - 1));
  commandPaletteList.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "command-palette-empty";
    empty.textContent = "没有匹配的功能。试试搜索“续写”“章节”或“记忆”。";
    commandPaletteList.appendChild(empty);
    if (commandPaletteHint) commandPaletteHint.textContent = "按 Esc 关闭";
    return;
  }
  matches.forEach((command, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "command-palette-item";
    item.classList.toggle("is-active", index === commandPaletteActiveIndex);
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(index === commandPaletteActiveIndex));
    const title = document.createElement("strong");
    title.textContent = command.label;
    const hint = document.createElement("small");
    hint.textContent = command.hint;
    item.append(title, hint);
    item.addEventListener("click", () => executeCommandPaletteCommand(command.id));
    commandPaletteList.appendChild(item);
  });
  if (commandPaletteHint) commandPaletteHint.textContent = `${matches.length} 个操作 · ↑↓ 选择 · Enter 执行 · Esc 关闭`;
}

function openCommandPalette() {
  if (!commandPaletteDialog) return;
  commandPaletteActiveIndex = 0;
  commandPaletteSearch.value = "";
  renderCommandPalette();
  commandPaletteDialog.showModal();
  commandPaletteSearch.focus();
}

function executeCommandPaletteCommand(commandId) {
  const command = commandPaletteCommands.find((item) => item.id === commandId);
  if (!command) return;
  commandPaletteDialog.close();
  command.run();
}

function moveCommandPaletteSelection(delta) {
  const matches = getCommandPaletteMatches();
  if (!matches.length) return;
  commandPaletteActiveIndex = (commandPaletteActiveIndex + delta + matches.length) % matches.length;
  renderCommandPalette();
}

function setFocusMode(enabled, persist = true) {
  const active = Boolean(enabled);
  document.body.classList.toggle("focus-mode", active);
  toggleFocusModeButton.classList.toggle("is-active", active);
  toggleFocusModeButton.setAttribute("aria-pressed", String(active));
  toggleFocusModeButton.setAttribute("aria-label", active ? "退出专注模式" : "进入专注模式");
  toggleFocusModeButton.title = active ? "退出专注模式" : "进入专注模式";
  if (!persist) return;
  try {
    localStorage.setItem(focusModeStorageKey, String(active));
  } catch {
    // Focus mode is a visual preference; keep it available for the current page.
  }
}

function restoreFocusMode() {
  try {
    setFocusMode(localStorage.getItem(focusModeStorageKey) === "true", false);
  } catch {
    setFocusMode(false, false);
  }
}

function preventWorkspaceMutation(action) {
  if (isSending) {
    showToast(`模型回复完成后再${action}`);
    return true;
  }
  if (isSummarizing) {
    showToast(`摘要提炼完成后再${action}`);
    return true;
  }
  return false;
}

function workspaceRequestStillCurrent(projectId, spaceId) {
  return activeProjectId === projectId && getCurrentNovelSpaceId() === spaceId;
}

function updateCount() {
  const count = messages.querySelectorAll(".message-row").length;
  const archivedCount = getActiveProject()?.conversationArchive?.length || 0;
  messageCount.textContent = archivedCount
    ? `${getConversationMessageCount()} 条消息 · ${archivedCount} 条已归档`
    : `${String(count).padStart(2, "0")} 条消息`;
  updateContextUsage();
}

function isSummaryContextMode() {
  return getActiveProject()?.contextMode === "summary";
}

function getModelMessageSource({ fullHistory = false } = {}) {
  const project = getActiveProject();
  const continuityBridge = !fullHistory && !isSummaryContextMode() && Array.isArray(project?.conversationArchive)
    ? project.conversationArchive.slice(-continuityBridgeMessageCount)
    : [];
  const source = fullHistory
    ? getConversationForDisplay()
    : isSummaryContextMode()
      ? conversationHistory.slice(-4)
      : [...continuityBridge, ...conversationHistory.slice(-(20 - continuityBridge.length))];
  return source;
}

function getModelMessages({ fullHistory = false } = {}) {
  const source = getModelMessageSource({ fullHistory });
  const selected = [];
  let historyChars = 0;
  for (const item of [...source].reverse()) {
    if (!item || item.source === "demo" || !["user", "assistant"].includes(item.role) || typeof item.content !== "string" || !item.content.trim()) continue;
    const content = item.content.slice(0, 4000);
    if (historyChars + content.length > serverHistoryBudget) break;
    selected.push({ ...item, content });
    historyChars += content.length;
  }
  return selected.reverse();
}

function getPreviewModelMessages() {
  const selected = [];
  let historyChars = 0;
  for (const item of [...getModelMessageSource()].reverse()) {
    if (!item || item.source === "demo" || !["user", "assistant"].includes(item.role) || typeof item.content !== "string" || !item.content.trim()) continue;
    const itemMode = normalizeMessageMode(item.mode);
    if (selectedMode === "问答" && itemMode !== "问答") continue;
    const content = selectedMode !== "问答" && itemMode === "问答"
      ? `【原作问答参考，不是剧情对话】\n${item.content.slice(0, 4000)}`
      : item.content.slice(0, 4000);
    if (historyChars + content.length > serverHistoryBudget) break;
    selected.push({ ...item, content });
    historyChars += content.length;
  }
  return selected.reverse();
}

function updateContextModeUI() {
  if (!toggleContextModeButton) return;
  const compact = isSummaryContextMode();
  const health = getProjectHealth();
  toggleContextModeButton.textContent = compact ? "恢复完整上下文" : "只发摘要 + 最近两轮";
  toggleContextModeButton.classList.toggle("is-active", compact);
  toggleContextModeButton.setAttribute("aria-pressed", String(compact));
  toggleContextModeButton.title = [
    compact ? "模型请求只带剧情摘要和最近两轮对话，完整历史仍保存在本地" : "模型请求会带上当前保留的完整对话",
    !compact && getActiveProject()?.conversationArchive?.length
      ? `其中保留最近 ${continuityBridgeMessageCount} 条归档消息作为连续性桥接`
      : "",
    health.staleOutcomes ? `有 ${health.staleOutcomes} 个场景结果待更新` : "",
  ].filter(Boolean).join(" · ");
}

function toggleContextMode() {
  if (preventWorkspaceMutation("切换上下文模式")) return;
  const project = getActiveProject();
  if (!isSummaryContextMode() && !workSummary.value.trim()) {
    showToast("先提炼剧情摘要，再启用精简上下文");
    return;
  }
  if (!isSummaryContextMode()) {
    const summarizedAt = Number.isFinite(Number(project.summaryMessageCount))
      ? Number(project.summaryMessageCount)
      : 0;
    const newMessages = Math.max(0, getConversationMessageCount(project) - summarizedAt);
    if (newMessages > 0 && !window.confirm(`当前摘要之后新增了 ${newMessages} 条消息，精简模式可能遗漏最新剧情。仍要启用吗？`)) return;
    const health = getProjectHealth(project);
    if (health.staleOutcomes > 0 && !window.confirm(`当前有 ${health.staleOutcomes} 个场景结果没有覆盖最新剧情，精简模式仍会发送这些结果。建议先重新提炼，仍要启用吗？`)) return;
  }
  project.contextMode = isSummaryContextMode() ? "full" : "summary";
  persistActiveProject();
  updateContextModeUI();
  updateContextUsage();
  showToast(project.contextMode === "summary" ? "已启用精简上下文，完整对话仍会保留" : "已恢复发送完整上下文");
}

function getContextUsageBreakdown() {
  const context = getModelPreviewContext();
  const contextChars = Object.values(context).reduce((total, value) => total + value.length, 0);
  const previewCharacter = getModelPreviewCharacter();
  const characterChars = [previewCharacter.name, previewCharacter.tone, previewCharacter.details]
    .filter(Boolean)
    .join("").length;
  const historyChars = getPreviewModelMessages().reduce((total, message) => total + (message.content || "").length, 0);
  return {
    contextChars,
    characterChars,
    historyChars,
    total: contextChars + characterChars + historyChars,
  };
}

function formatContextUsageBreakdown(breakdown) {
  return `设定 ${breakdown.contextChars.toLocaleString("zh-CN")} 字 · 角色卡 ${breakdown.characterChars.toLocaleString("zh-CN")} 字 · 对话 ${breakdown.historyChars.toLocaleString("zh-CN")} 字 · 合计 ${breakdown.total.toLocaleString("zh-CN")} 字`;
}

function updateContextUsage() {
  if (!contextUsage) return;
  const breakdown = getContextUsageBreakdown();
  contextUsage.textContent = `${isSummaryContextMode() ? "发送上下文" : "上下文"}约 ${breakdown.total.toLocaleString("zh-CN")} 字`;
  const warningThreshold = serverHistoryBudget + 12000;
  contextUsage.classList.toggle("is-heavy", breakdown.total > warningThreshold);
  contextUsage.title = isSummaryContextMode()
    ? `已启用精简上下文：剧情摘要 + 最近两轮对话；${formatContextUsageBreakdown(breakdown)}；完整历史仍保存在本地`
    : `服务端历史预算约 ${serverHistoryBudget.toLocaleString("zh-CN")} 字；${formatContextUsageBreakdown(breakdown)}`;
  if (selectedMode === "问答") {
    contextUsage.title += "；问答模式已排除场景计划、参考片段、剧情摘要和创作要求";
  }
}

function getContextPreviewText() {
  const project = getActiveProject();
  const context = getModelPreviewContext();
  const modelMessages = getPreviewModelMessages();
  const sourceQuery = getSourceQuery();
  const conversation = modelMessages.length
    ? modelMessages.map((message) => {
      const speaker = message.role === "assistant" ? (message.name || selectedCharacter.name) : "我";
      const sourceNote = getMessageSourceLabel(message);
      return `${speaker}${sourceNote ? `（${sourceNote}）` : ""}：${message.content}`;
    }).join("\n\n")
    : "暂无对话消息";
  return [
    "InkEcho · 模型上下文预览",
    `模型：${modelName.value.trim() || "未填写"}`,
    `模式：${selectedMode}`,
    `创作倾向：${getEffectiveCreativityLabel()}`,
    `回复长度：${responseLengthLabels[responseLengthSelect.value] || "标准"}`,
    `上下文策略：${isSummaryContextMode() ? "剧情摘要 + 最近两轮对话" : `最近对话 + 最近 ${continuityBridgeMessageCount} 条归档桥接`}`,
    `数据去向：${providerDataBoundaries[providerSelect.value] || "命中的有限原作片段和必要上下文会发送到当前模型服务；原始小说文件不会发送。"}`,
    `原作检索查询：${sourceQuery || "暂无查询"}`,
    selectedMode === "问答" ? "原作依据：服务端会按上方查询动态检索有限片段，片段不会持久化" : "续写依据：服务端会按上方查询检索设定片段，命中明确章节时补充接续桥",
    selectedMode === "问答" ? "问答隔离：只发送作品 / 章节定位和原作检索依据；创作笔记未发送" : "",
    selectedMode === "问答" ? "问答历史：仅保留问答消息；旧项目未标记的创作历史也会排除" : "",
    `项目状态：${formatProjectHealth(project)}`,
    `新鲜度提醒：${formatContextFreshnessNotices(project)}`,
    "",
    "【作品设定】",
    `作品：${context.title || "未填写"}`,
    `章节 / 场景：${context.chapter || "未填写"}`,
    `本幕目标：${context.sceneGoal || "未填写"}`,
    `时代 / 氛围：${context.era || "未填写"}`,
    `世界观：${context.world || "未填写"}`,
    `剧情摘要：${context.summary || "未填写"}`,
    `创作要求：${context.instructions || "未填写"}`,
    context.scenePlan ? `场景计划：\n${context.scenePlan}` : "场景计划：未填写",
    context.reference ? `参考片段：\n${context.reference}` : "参考片段：未填写",
    "",
    "【当前角色卡】",
    `角色：${getModelPreviewCharacter().name || "未填写"}`,
    `性格与说话方式：${getModelPreviewCharacter().tone || "未填写"}`,
    `人物设定：${getModelPreviewCharacter().details || "未填写"}`,
    "",
    `【本次对话 · ${modelMessages.length} 条】`,
    conversation,
  ].join("\n");
}

function openContextPreview() {
  updateContextUsage();
  const modelMessages = getPreviewModelMessages();
  const breakdown = getContextUsageBreakdown();
  contextPreviewStats.textContent = `${modelMessages.length} 条对话 · ${formatContextUsageBreakdown(breakdown)} · ${isSummaryContextMode() ? "完整历史仍保留" : "按服务端历史预算发送"} · ${formatContextFreshnessNotices()}`;
  contextPreviewText.textContent = getContextPreviewText();
  contextDialog.showModal();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[character]));
}

function formatInlineMarkdown(value) {
  const codeSpans = [];
  let formatted = value.replace(/`([^`\n]+)`/g, (_, code) => {
    const index = codeSpans.push(`<code>${code}</code>`) - 1;
    return `\u0000${index}\u0000`;
  });
  formatted = formatted
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>")
    .replace(/(^|[^_])_([^_\n]+)_(?!_)/g, "$1<em>$2</em>");
  return formatted.replace(/\u0000(\d+)\u0000/g, (_, index) => codeSpans[Number(index)] || "");
}

function renderAssistantMarkdown(text) {
  return escapeHtml(text)
    .split(/\r?\n/)
    .map((line) => {
      if (!line.trim()) return "";
      const heading = line.match(/^#{1,3}\s+(.+)$/);
      if (heading) return `<span class="message-heading">${formatInlineMarkdown(heading[1])}</span>`;
      const quote = line.match(/^&gt;\s?(.*)$/);
      if (quote) return `<span class="message-quote">${formatInlineMarkdown(quote[1])}</span>`;
      const bullet = line.match(/^[-*]\s+(.+)$/);
      if (bullet) return `<span class="message-list-item">• ${formatInlineMarkdown(bullet[1])}</span>`;
      const numbered = line.match(/^\d+\.\s+(.+)$/);
      if (numbered) return `<span class="message-list-item">${line.match(/^\d+/)[0]}. ${formatInlineMarkdown(numbered[1])}</span>`;
      return formatInlineMarkdown(line);
    })
    .join("<br>");
}

function getMessageSourceLabel(item) {
  return item?.source === "demo" ? "未生成 · 模型服务没有返回可用内容" : "";
}

function formatSourceAttribution(item) {
  const references = normalizeSourceReferences(item?.sourceRefs);
  const query = safeText(item?.sourceQuery, "", 600).replace(/\s+/g, " ");
  const quality = sourceQualityLabel(item?.sourceQuality);
  const answerCoverage = sourceAnswerCoverageLabel(item?.sourceAnswerCoverage);
  const citationStatus = normalizeCitationStatus(item?.sourceCitationStatus);
  const citationWarning = citationStatus === "unverified"
    ? `> ⚠️ 引用待核对：${(Array.isArray(item?.sourceCitationsUnverified) ? item.sourceCitationsUnverified : []).join("、") || "模型引用不在本次检索结果中"}`
    : "";
  const citationVerified = citationStatus === "verified" ? "> 引用核验：已核对" : "";
  const citationMissing = citationStatus === "none" && normalizeMessageMode(item?.mode) === "问答"
    ? "> 引用核验：未标注章节，建议打开依据"
    : "";
  if (!references.length && !query && !quality && !answerCoverage && !citationWarning && !citationVerified && !citationMissing) return "";
  return [
    references.length ? `> 原作参考：${references.join(" · ")}` : "",
    answerCoverage ? `> 答案依据：${answerCoverage}` : "",
    quality ? `> 检索相关性：${quality}` : "",
    query ? `> 依据查询：${query}` : "",
    citationVerified,
    citationWarning,
    citationMissing,
  ].filter(Boolean).join("\n");
}

function formatMessageMode(item) {
  const mode = normalizeMessageMode(item?.mode);
  return mode ? `> 生成模式：${mode}` : "";
}

function appendDemoSourceBadge(meta) {
  if (!meta || meta.querySelector(".message-source-badge")) return;
  const sourceBadge = document.createElement("span");
  sourceBadge.className = "message-source-badge";
  sourceBadge.textContent = "未生成";
  sourceBadge.title = "模型服务没有返回可用内容；这不是故事正文或原作答案";
  meta.appendChild(sourceBadge);
}

function showFailedGenerationActions(actions, historyIndex) {
  if (!actions || !Number.isInteger(historyIndex)) return;
  actions.replaceChildren();
  const retryButton = document.createElement("button");
  retryButton.type = "button";
  retryButton.className = "message-action";
  retryButton.textContent = "重试";
  retryButton.setAttribute("aria-label", "重新尝试生成这条回复");
  retryButton.addEventListener("click", () => retryMessage(historyIndex));
  const settingsButton = document.createElement("button");
  settingsButton.type = "button";
  settingsButton.className = "message-action";
  settingsButton.textContent = "模型设置";
  settingsButton.addEventListener("click", () => setWorkspaceView("settings", { announce: true, focus: true }));
  actions.append(retryButton, settingsButton);
}

function appendTruncatedBadge(meta) {
  if (!meta || meta.querySelector(".message-truncated-badge")) return;
  const badge = document.createElement("span");
  badge.className = "message-truncated-badge";
  badge.textContent = "已截断";
  badge.title = "模型输出达到当前篇幅上限，内容可能尚未完整收束；可以切换为展开后重试。";
  meta.appendChild(badge);
}

function appendCitationWarningBadge(meta, citations = []) {
  if (!meta || meta.querySelector(".message-citation-warning-badge")) return;
  const badge = document.createElement("span");
  badge.className = "message-citation-warning-badge";
  badge.textContent = "引用待核对";
  const safeCitations = Array.isArray(citations) ? citations.filter(Boolean).slice(0, 4) : [];
  badge.title = safeCitations.length
    ? `模型引用的章节不在本次检索结果中：${safeCitations.join("、")}`
    : "模型引用的章节不在本次检索结果中，请打开“查看依据”核对。";
  meta.appendChild(badge);
}

function appendCitationVerifiedBadge(meta) {
  if (!meta || meta.querySelector(".message-citation-verified-badge")) return;
  const badge = document.createElement("span");
  badge.className = "message-citation-verified-badge";
  badge.textContent = "引用已核对";
  badge.title = "模型标注的章节与本次原作检索结果相符";
  meta.appendChild(badge);
}

function appendCitationMissingBadge(meta) {
  if (!meta || meta.querySelector(".message-citation-missing-badge")) return;
  const badge = document.createElement("span");
  badge.className = "message-citation-missing-badge";
  badge.textContent = "引用未标注";
  badge.title = "这条内容问答没有明确标注章节，建议打开“查看依据”核对。";
  meta.appendChild(badge);
}

function qualityReviewCodes(review) {
  const normalized = normalizeQualityReview(review);
  return normalized?.warnings.map((warning) => warning.code).filter(Boolean).slice(0, 4) || [];
}

function openContinuationQualityReview(review, historyIndex = null) {
  const normalized = normalizeQualityReview(review);
  if (!normalized || normalized.status !== "review" || !normalized.warnings.length) return;
  continuationQualitySummary.textContent = `发现 ${normalized.warnings.length} 项需要人工确认的续写风险。这不是事实判定，原文仍可保留或重试。`;
  continuationQualityList.replaceChildren(...normalized.warnings.map((warning) => {
    const item = document.createElement("article");
    item.className = "quality-review-item";
    const title = document.createElement("strong");
    title.textContent = warning.label;
    const detail = document.createElement("p");
    detail.textContent = warning.detail;
    item.append(title, detail);
    return item;
  }));
  const canRetry = Number.isInteger(historyIndex)
    && historyIndex === conversationHistory.length - 1
    && conversationHistory[historyIndex]?.role === "assistant";
  pendingQualityRetry = canRetry
    ? { historyIndex, codes: qualityReviewCodes(normalized) }
    : null;
  continuationQualityRetryButton.hidden = !pendingQualityRetry;
  continuationQualityDialog.showModal();
}

function appendQualityReviewBadge(meta, review, historyIndex = null) {
  const normalized = normalizeQualityReview(review);
  if (!meta || !normalized || normalized.status !== "review" || !normalized.warnings.length) return;
  const existing = meta.querySelector(".message-quality-review-badge");
  if (existing) existing.remove();
  const badge = document.createElement("button");
  badge.type = "button";
  badge.className = "message-quality-review-badge";
  badge.textContent = "续写需复核";
  badge.title = normalized.warnings.map((warning) => warning.label).join("、");
  badge.setAttribute("aria-label", "查看续写质量检查详情");
  badge.addEventListener("click", () => openContinuationQualityReview(normalized, historyIndex));
  meta.appendChild(badge);
}

function appendExpandedRetryAction(actions, historyIndex) {
  if (!actions || !Number.isInteger(historyIndex) || actions.querySelector(".message-expand-retry")) return;
  const expandRetryButton = document.createElement("button");
  expandRetryButton.type = "button";
  expandRetryButton.className = "message-action message-expand-retry";
  expandRetryButton.textContent = "展开重试";
  expandRetryButton.setAttribute("aria-label", "用展开篇幅重新生成这条回复");
  expandRetryButton.title = "只对这次重试使用展开篇幅，不改变项目默认回复长度";
  expandRetryButton.addEventListener("click", () => retryMessage(historyIndex, "expanded"));
  actions.appendChild(expandRetryButton);
}

function sourceReferenceChapterTitle(reference) {
  return String(reference || "")
    .trim()
    .replace(/\s*·\s*片段\s*\d+\s*$/, "")
    .trim();
}

function renderSourceReferences(line, references, historyIndex = null, sourceQuery = "", sourceQuality = "", sourceAnswerCoverage = "", mode = "") {
  const safeReferences = normalizeSourceReferences(references);
  const visibleReferences = safeReferences.slice(0, 2);
  const quality = sourceQualityLabel(sourceQuality);
  const answerCoverage = sourceAnswerCoverageLabel(sourceAnswerCoverage);
  const questionMode = normalizeMessageMode(mode) === "问答";
  line.replaceChildren();
  line.hidden = !safeReferences.length && !sourceQuery;
  if (!safeReferences.length && !sourceQuery) return;
  const label = document.createElement("span");
  if (!safeReferences.length) {
    label.className = "source-reference-missing";
    label.textContent = quality === "未命中" ? "原作检索未命中" : "原作检索未标注";
  } else {
    // Retrieved chapters are candidates supplied to the model, not proof that
    // every chapter supports every sentence in the answer. Keep the wording
    // distinct from the model's verified inline chapter citations.
    label.textContent = questionMode && answerCoverage
      ? `原作依据 · ${answerCoverage}`
      : (quality ? `检索候选 · ${quality}` : "检索候选");
    if (questionMode && answerCoverage && quality) label.title = `检索相关性：${quality}`;
  }
  line.appendChild(label);
  visibleReferences.forEach((reference, index) => {
    line.appendChild(document.createTextNode(index ? " · " : "："));
    const item = document.createElement("button");
    item.type = "button";
    item.className = "source-reference-item source-reference-chapter-button";
    item.textContent = reference;
    item.title = "打开这条原作参考所属章节的本机预览";
    item.setAttribute("aria-label", `阅读原作章节 ${reference}`);
    item.addEventListener("click", () => openSourceChapterReader(sourceReferenceChapterTitle(reference)));
    line.appendChild(item);
  });
  const evidenceButton = document.createElement("button");
  evidenceButton.type = "button";
  evidenceButton.className = "source-reference-button";
  evidenceButton.textContent = safeReferences.length > visibleReferences.length
    ? `查看全部 ${safeReferences.length} 个`
    : "查看检索依据";
  evidenceButton.setAttribute("aria-label", "查看这条回复的全部原作检索候选");
  evidenceButton.addEventListener("click", () => openSourceEvidence(historyIndex, sourceQuery));
  line.appendChild(evidenceButton);
}

function setAssistantBubbleText(bubble, text) {
  const rawText = String(text ?? "");
  bubble.dataset.rawText = rawText;
  bubble.innerHTML = renderAssistantMarkdown(rawText);
}

function addMessage({ role, name, text, avatarClass, historyIndex, mode, versions, sources, source, sourceRefs, sourceQuery, sourceQuality, sourceAnswerCoverage, sourceCitationStatus, sourceCitationsUnverified, qualityReview, qualityRetryCodes, truncated = false, truncations, versionIndex = 0, syncHistory = true }) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;
  if (Number.isInteger(historyIndex)) row.dataset.historyIndex = String(historyIndex);

  const avatar = document.createElement("span");
  avatar.className = `message-avatar ${avatarClass}`;
  avatar.textContent = role === "user" ? "I" : avatarClass === "avatar-inkecho" ? "IE" : name.slice(0, 1);

  const content = document.createElement("div");
  content.className = "message-content";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  const nameElement = document.createElement("strong");
  nameElement.textContent = name;
  const time = document.createElement("time");
  time.textContent = role === "user" ? "刚刚" : "现在";
  meta.append(nameElement, time);
  const messageMode = normalizeMessageMode(mode);
  if (role === "assistant" && messageMode) {
    const modeBadge = document.createElement("span");
    modeBadge.className = "message-mode-badge";
    modeBadge.textContent = messageMode;
    modeBadge.title = `这条回复生成于「${messageMode}」模式`;
    meta.appendChild(modeBadge);
  }
  const currentSource = source === "demo" || sources?.[versionIndex] === "demo" ? "demo" : "";
  if (role === "assistant" && currentSource) appendDemoSourceBadge(meta);
  const currentTruncated = Boolean(truncated || truncations?.[versionIndex]);
  if (role === "assistant" && currentTruncated) appendTruncatedBadge(meta);
  if (role === "assistant" && sourceCitationStatus === "unverified") {
    appendCitationWarningBadge(meta, sourceCitationsUnverified);
  }
  if (role === "assistant" && sourceCitationStatus === "verified") {
    appendCitationVerifiedBadge(meta);
  }
  if (role === "assistant" && sourceCitationStatus === "none" && messageMode === "问答") {
    appendCitationMissingBadge(meta);
  }
  if (role === "assistant") appendQualityReviewBadge(meta, qualityReview, historyIndex);
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  if (role === "assistant") setAssistantBubbleText(bubble, text);
  else bubble.textContent = text;
  const sourceReferenceLine = document.createElement("div");
  sourceReferenceLine.className = "source-reference-line";
  renderSourceReferences(sourceReferenceLine, sourceRefs, historyIndex, sourceQuery, sourceQuality, sourceAnswerCoverage, messageMode);
  content.append(meta, bubble, sourceReferenceLine);
  let actions = null;
  if (role === "assistant") {
    actions = document.createElement("div");
    actions.className = "message-actions";
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "message-action";
    copyButton.textContent = "复制";
    copyButton.setAttribute("aria-label", "复制这条回复");
    copyButton.addEventListener("click", () => copyMessage(bubble.dataset.rawText || ""));
    actions.appendChild(copyButton);
    if (Number.isInteger(historyIndex)) {
      const highlightButton = document.createElement("button");
      highlightButton.type = "button";
      highlightButton.className = "message-action";
      const highlighted = isHighlighted(conversationHistory[historyIndex]);
      highlightButton.textContent = highlighted ? "已摘录" : "摘录";
      highlightButton.classList.toggle("is-active", highlighted);
      highlightButton.setAttribute("aria-label", highlighted ? "取消摘录这条回复" : "摘录这条回复");
      highlightButton.addEventListener("click", () => toggleHighlight(historyIndex));
      actions.appendChild(highlightButton);
      const outcomeButton = document.createElement("button");
      outcomeButton.type = "button";
      outcomeButton.className = "message-action";
      outcomeButton.textContent = "记为结果";
      outcomeButton.setAttribute("aria-label", "把这条回复记录到当前场景结果");
      outcomeButton.title = "追加到当前场景的结果 / 线索";
      outcomeButton.addEventListener("click", () => captureSceneOutcome(historyIndex));
      actions.appendChild(outcomeButton);
      const retryButton = document.createElement("button");
      retryButton.type = "button";
      retryButton.className = "message-action";
      retryButton.textContent = "重试";
      retryButton.setAttribute("aria-label", "重新生成这条回复");
      retryButton.addEventListener("click", () => retryMessage(historyIndex));
      actions.appendChild(retryButton);
      if (currentTruncated && historyIndex === conversationHistory.length - 1) appendExpandedRetryAction(actions, historyIndex);
      const branchButton = document.createElement("button");
      branchButton.type = "button";
      branchButton.className = "message-action";
      branchButton.textContent = "分支";
      branchButton.setAttribute("aria-label", "从这条回复创建支线");
      branchButton.addEventListener("click", () => branchFromMessage(historyIndex));
      actions.appendChild(branchButton);
    }
    const safeVersions = Array.isArray(versions) ? versions.filter((version) => typeof version === "string" && version.trim()) : [];
    if (safeVersions.length > 1 && Number.isInteger(historyIndex)) {
      const currentVersion = Math.max(0, Math.min(Number(versionIndex) || 0, safeVersions.length - 1));
      const versionControls = document.createElement("span");
      versionControls.className = "version-controls";
      const previousButton = document.createElement("button");
      previousButton.type = "button";
      previousButton.className = "version-button";
      previousButton.textContent = "‹";
      previousButton.disabled = currentVersion === 0;
      previousButton.setAttribute("aria-label", "查看上一版回复");
      previousButton.addEventListener("click", () => switchMessageVersion(historyIndex, currentVersion - 1));
      const versionLabel = document.createElement("span");
      versionLabel.className = "version-label";
      versionLabel.textContent = `${currentVersion + 1}/${safeVersions.length}`;
      const nextButton = document.createElement("button");
      nextButton.type = "button";
      nextButton.className = "version-button";
      nextButton.textContent = "›";
      nextButton.disabled = currentVersion === safeVersions.length - 1;
      nextButton.setAttribute("aria-label", "查看下一版回复");
      nextButton.addEventListener("click", () => switchMessageVersion(historyIndex, currentVersion + 1));
      versionControls.append(previousButton, versionLabel, nextButton);
      const optimizationStatus = qualityOptimizationStatus(qualityRetryCodes, qualityReview);
      if (optimizationStatus) {
        const optimizationLabel = document.createElement("span");
        optimizationLabel.className = `quality-optimization-status is-${optimizationStatus.status}`;
        optimizationLabel.textContent = optimizationStatus.label;
        optimizationLabel.title = optimizationStatus.detail;
        versionControls.appendChild(optimizationLabel);
      }
      actions.appendChild(versionControls);
    }
    if (currentSource && safeVersions.length <= 1) showFailedGenerationActions(actions, historyIndex);
    content.appendChild(actions);
  } else if (Number.isInteger(historyIndex)) {
    const actions = document.createElement("div");
    actions.className = "message-actions";
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "message-action";
    editButton.textContent = "编辑";
    editButton.setAttribute("aria-label", "编辑这条提问");
    editButton.addEventListener("click", () => editMessage(historyIndex));
    actions.appendChild(editButton);
    content.appendChild(actions);
  }
  row.append(...(role === "user" ? [content, avatar] : [avatar, content]));
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  updateCount();
  filterConversationMessages();
  if (syncHistory) renderConversationHistory();
  return {
    row,
    bubble,
    meta,
    truncated: currentTruncated,
    sourceReferenceLine,
    renderSourceReferences: (references, query = sourceQuery, quality = sourceQuality, answerCoverage = sourceAnswerCoverage) => renderSourceReferences(sourceReferenceLine, references, historyIndex, query, quality, answerCoverage, messageMode),
    sourceQuality,
    sourceAnswerCoverage: normalizeSourceAnswerCoverage(sourceAnswerCoverage),
    qualityReview: normalizeQualityReview(qualityReview),
    qualityRetryCodes: normalizeQualityRetryCodes(qualityRetryCodes),
    actions,
    historyIndex,
  };
}

function filterConversationMessages() {
  if (!conversationSearchInput || !conversationSearchCount) return;
  const query = conversationSearchInput.value.trim().toLocaleLowerCase();
  const rows = Array.from(messages.querySelectorAll(".message-row"));
  if (!query) {
    rows.forEach((row) => { row.hidden = false; });
    conversationSearchCount.textContent = `${conversationHistory.length} 条工作区消息`;
    return;
  }
  let matched = 0;
  rows.forEach((row) => {
    const speaker = row.querySelector(".message-meta strong")?.textContent || "";
    const content = row.querySelector(".bubble")?.textContent || "";
    const isMatch = `${speaker} ${content}`.toLocaleLowerCase().includes(query);
    row.hidden = !isMatch;
    if (isMatch) matched += 1;
  });
  conversationSearchCount.textContent = `${matched} / ${rows.length} 条工作区消息`;
}

function getConversationHistoryEntries() {
  const project = getActiveProject();
  if (!project) return [];
  const currentTitle = conversationHistory.find((item) => item.role === "user")?.content
    || messageInput?.value.trim()
    || `${selectedMode} · 新会话`;
  const current = {
    id: project.activeConversationSessionId,
    title: currentTitle,
    mode: selectedMode,
    updatedAt: project.updatedAt || Date.now(),
    current: true,
  };
  const previous = (project.conversationSessions || [])
    .slice()
    .sort((left, right) => (right.updatedAt || 0) - (left.updatedAt || 0))
    .map((session) => ({ ...session, current: false }));
  return [current, ...previous];
}

function closeConversationHistoryPanel() {
  conversationHistoryPanel?.classList.remove("is-open");
  toggleConversationHistoryButton?.setAttribute("aria-expanded", "false");
}

function getCurrentConversationSessionMessages(project = getActiveProject()) {
  return [
    ...(Array.isArray(project?.conversationArchive) ? project.conversationArchive : []),
    ...conversationHistory,
  ].slice(-maxConversationSessionMessages);
}

function hasMeaningfulConversationSession(messages = getCurrentConversationSessionMessages(), draft = messageInput?.value || "") {
  return messages.some((item) => item.role === "user" && String(item.content || "").trim()) || Boolean(String(draft).trim());
}

function storeCurrentConversationSession(project = getActiveProject()) {
  if (!project) return false;
  const sessionMessages = getCurrentConversationSessionMessages(project);
  const draft = messageInput?.value || project.draft || "";
  if (!hasMeaningfulConversationSession(sessionMessages, draft)) return false;
  const firstUserMessage = sessionMessages.find((item) => item.role === "user")?.content || draft;
  const session = normalizeConversationSession({
    id: project.activeConversationSessionId,
    mode: selectedMode,
    title: firstUserMessage,
    messages: sessionMessages,
    draft,
    createdAt: project.activeConversationSessionStartedAt,
    updatedAt: Date.now(),
  }, selectedCharacter.name);
  const existing = Array.isArray(project.conversationSessions) ? project.conversationSessions : [];
  project.conversationSessions = [
    ...existing.filter((item) => item.id !== session.id),
    session,
  ].slice(-maxConversationSessions);
  return true;
}

function beginConversationForMode(mode, { announce = true } = {}) {
  const supportedModes = new Set(["续写", "问答", "改写", "独白"]);
  const nextMode = supportedModes.has(mode) ? mode : "续写";
  if (nextMode === selectedMode) {
    setComposerMode(nextMode, { announce: false });
    return false;
  }
  if (preventWorkspaceMutation("切换创作功能")) return false;
  const project = getActiveProject();
  if (!project) return false;
  const saved = storeCurrentConversationSession(project);
  project.conversation = [];
  project.conversationArchive = [];
  project.activeConversationSessionId = `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  project.activeConversationSessionStartedAt = Date.now();
  project.draft = "";
  conversationHistory = [];
  messageInput.value = "";
  draftStatus.textContent = "草稿自动保存";
  if (conversationSearchInput) conversationSearchInput.value = "";
  setConversationSearchOpen(false);
  setComposerMode(nextMode, { announce: false });
  renderConversation();
  messages.scrollTop = 0;
  if (announce) showToast(saved ? `已保存原会话，并新建「${nextMode}」会话` : `已新建「${nextMode}」会话`);
  messageInput.focus();
  return true;
}

function switchConversationSession(sessionId) {
  const project = getActiveProject();
  if (!project || sessionId === project.activeConversationSessionId) {
    messages.scrollTop = messages.scrollHeight;
    closeConversationHistoryPanel();
    return;
  }
  if (preventWorkspaceMutation("切换历史会话")) return;
  const target = (project.conversationSessions || []).find((session) => session.id === sessionId);
  if (!target) return;
  storeCurrentConversationSession(project);
  project.conversationSessions = project.conversationSessions.filter((session) => session.id !== sessionId);
  project.activeConversationSessionId = target.id;
  project.activeConversationSessionStartedAt = target.createdAt || Date.now();
  project.conversationArchive = [];
  project.conversation = target.messages.map((item) => ({ ...item }));
  project.draft = target.draft || "";
  conversationHistory = project.conversation.map((item) => ({ ...item }));
  messageInput.value = project.draft;
  draftStatus.textContent = project.draft ? "草稿已恢复" : "草稿自动保存";
  setComposerMode(target.mode, { announce: false });
  renderConversation();
  messages.scrollTop = messages.scrollHeight;
  closeConversationHistoryPanel();
  showToast(`已切换到「${target.title}」`);
}

function focusConversationHistoryEntry(sessionId, button) {
  if (conversationSearchInput?.value) {
    conversationSearchInput.value = "";
    filterConversationMessages();
  }
  conversationHistoryList?.querySelectorAll(".conversation-history-item").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  switchConversationSession(sessionId);
}

function renderConversationHistory() {
  if (!conversationHistoryList || !conversationHistoryCount) return;
  const entries = getConversationHistoryEntries();
  conversationHistoryList.innerHTML = "";
  conversationHistoryCount.textContent = String(entries.length);
  entries.forEach((entry, entryIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `conversation-history-item${entry.current ? " is-active" : ""}`;
    button.setAttribute("aria-label", entry.current ? `当前${entry.mode}会话` : `打开${entry.mode}会话：${entry.title}`);
    const meta = document.createElement("span");
    meta.className = "conversation-history-item-meta";
    const number = document.createElement("span");
    number.textContent = entry.current ? "当前" : String(entryIndex).padStart(2, "0");
    const mode = document.createElement("strong");
    mode.textContent = entry.mode === "问答" ? "内容问答" : entry.mode;
    meta.append(number, mode);
    const preview = document.createElement("span");
    preview.className = "conversation-history-item-preview";
    preview.textContent = String(entry.title || "未命名会话").replace(/\s+/g, " ").trim();
    button.append(meta, preview);
    button.addEventListener("click", () => focusConversationHistoryEntry(entry.id, button));
    conversationHistoryList.appendChild(button);
  });
  const archivedCount = getActiveProject()?.conversationArchive?.length || 0;
  if (openArchiveFromHistoryButton) {
    openArchiveFromHistoryButton.hidden = !archivedCount;
    openArchiveFromHistoryButton.textContent = `更早记录 · ${archivedCount} 条`;
  }
}

function switchMessageVersion(historyIndex, nextVersion) {
  if (preventWorkspaceMutation("切换回复版本")) return;
  const message = conversationHistory[historyIndex];
  if (!message || !Array.isArray(message.versions) || !message.versions[nextVersion]) return;
  message.versionIndex = nextVersion;
  message.content = message.versions[nextVersion];
  if (Array.isArray(message.sourceRefsByVersion)) {
    const references = message.sourceRefsByVersion[nextVersion] || [];
    if (references.length) message.sourceRefs = references;
    else delete message.sourceRefs;
  }
  if (Array.isArray(message.sourceQueriesByVersion)) {
    const query = message.sourceQueriesByVersion[nextVersion] || "";
    if (query) message.sourceQuery = query;
    else delete message.sourceQuery;
  }
  if (Array.isArray(message.sourceQualitiesByVersion)) {
    const quality = normalizeSourceQuality(message.sourceQualitiesByVersion[nextVersion]);
    if (quality) message.sourceQuality = quality;
    else delete message.sourceQuality;
  }
  if (Array.isArray(message.sourceAnswerCoveragesByVersion)) {
    const coverage = normalizeSourceAnswerCoverage(message.sourceAnswerCoveragesByVersion[nextVersion]);
    if (coverage) message.sourceAnswerCoverage = coverage;
    else delete message.sourceAnswerCoverage;
  }
  if (message.sources?.[nextVersion] === "demo") message.source = "demo";
  else delete message.source;
  if (Array.isArray(message.truncations)) message.truncated = Boolean(message.truncations[nextVersion]);
  if (Array.isArray(message.sourceCitationStatuses)) {
    message.sourceCitationStatus = normalizeCitationStatus(message.sourceCitationStatuses[nextVersion]);
    if (Array.isArray(message.sourceCitationsUnverifiedByVersion)) {
      const citations = message.sourceCitationsUnverifiedByVersion[nextVersion] || [];
      if (citations.length) message.sourceCitationsUnverified = citations;
      else delete message.sourceCitationsUnverified;
    }
  }
  if (Array.isArray(message.qualityReviewsByVersion)) {
    const review = normalizeQualityReview(message.qualityReviewsByVersion[nextVersion]);
    if (review) message.qualityReview = review;
    else delete message.qualityReview;
  }
  if (Array.isArray(message.qualityRetryCodesByVersion)) {
    const codes = normalizeQualityRetryCodes(message.qualityRetryCodesByVersion[nextVersion]);
    if (codes.length) message.qualityRetryCodes = codes;
    else delete message.qualityRetryCodes;
  }
  saveConversation();
  renderConversation();
  showToast(`已切换到第 ${nextVersion + 1} 版回复`);
}

function setConversationSearchOpen(open) {
  conversationSearch.hidden = !open;
  searchConversationButton.setAttribute("aria-expanded", String(open));
  if (open) {
    conversationSearchInput.focus();
    filterConversationMessages();
  } else {
    conversationSearchInput.value = "";
    filterConversationMessages();
  }
}

async function copyText(text, successMessage, emptyMessage = "没有可复制的内容") {
  if (!text.trim()) {
    showToast(emptyMessage);
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    showToast(successMessage);
  } catch {
    showToast("复制失败，请手动选择文字");
  }
}

async function copyMessage(text) {
  await copyText(text, "回复已复制", "这条回复还没有内容");
}

async function copyConversation() {
  const transcript = getConversationForDisplay().map((item) => {
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    const sourceAttribution = formatSourceAttribution(item);
    return [`${speaker}：${item.content}`, formatMessageMode(item), sourceAttribution].filter(Boolean).join("\n");
  }).join("\n\n");
  await copyText(transcript, "对话已复制", "当前还没有对话内容");
}

function formatProjectHandoff() {
  const project = getActiveProject();
  const novelSpace = novelSpaceForProject(project);
  const context = getContext();
  const activeBeat = getActiveSceneBeat(project);
  const reference = context.reference || "";
  const draft = String(project.draft || "");
  const referenceText = reference
    ? `${reference.slice(0, 2000)}${reference.length > 2000 ? "\n（参考片段已截取前 2000 字）" : ""}`
    : "暂无参考片段";
  const draftText = draft
    ? `${draft.slice(0, 2000)}${draft.length > 2000 ? "\n（草稿已截取前 2000 字）" : ""}`
    : "暂无当前草稿";
  const recentMessages = getConversationForDisplay(project).slice(-8);
  const characters = (project.characters || []).map((character) => {
    const details = character.details ? `；人物设定：${character.details}` : "";
    return `- **${character.name}**：${character.tone || "待设定"}${details}`;
  });
  const sceneBeats = (project.beats || []).map((beat, index) => {
    const marker = beat.id === project.activeBeatId ? " · 当前" : "";
    const goal = beat.goal ? `：${beat.goal}` : "";
    const outcome = beat.outcome ? ` · 结果：${beat.outcome}` : "";
    return `${index + 1}. [${sceneBeatStatusLabels[beat.status] || "待写"}] ${beat.title}${marker}${goal}${outcome}`;
  });
  const transcript = recentMessages.map((item) => {
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    const rawContent = String(item.content || "");
    const content = rawContent.slice(0, 1200);
    const suffix = rawContent.length > 1200 ? "\n（本段已截取前 1200 字）" : "";
    const sourceNote = getMessageSourceLabel(item);
    const messageMode = formatMessageMode(item);
    const sourceAttribution = formatSourceAttribution(item);
    return [`### ${speaker}`, sourceNote ? `> ⚠️ ${sourceNote}` : "", messageMode, sourceAttribution, `${content}${suffix}`]
      .filter(Boolean)
      .join("\n");
  });
  const highlights = (project.highlights || []).slice(-8).map((item) => `- **${item.name || "摘录"}**：${item.content}`);
  const checkpoints = (project.checkpoints || []).slice().reverse().slice(0, 6).map(
    (checkpoint) => `- **${checkpoint.name}**：${formatCheckpointDate(checkpoint.createdAt)} · ${getCheckpointMessageCount(checkpoint)} 条消息`,
  );
  return [
    `# InkEcho 项目交接摘要 · ${context.title || project.name || "未命名作品"}`,
    "",
    `> 生成时间：${new Date().toLocaleString("zh-CN")}`,
    "> 本摘要不包含 API key、端点或其他敏感配置。",
    "",
    "## 当前定位",
    "",
    `- **章节 / 场景**：${context.chapter || "未填写"}`,
    `- **小说知识空间**：${novelSpace?.name || "未关联"}${novelSpace?.source?.available ? " · 可用" : " · 当前不可用"}`,
    `- **当前场景卡**：${activeBeat?.title || "未选择"}`,
    `- **本幕目标**：${activeBeat?.goal || "未填写"}`,
    `- **当前角色**：${project.selectedCharacterName || "未选择"}`,
    `- **创作模式**：${project.mode || "续写"}`,
    `- **模型服务**：${project.service?.provider || "未选择"} / ${project.service?.model || "未填写"}`,
    `- **上下文模式**：${project.contextMode === "summary" ? "剧情摘要 + 最近两轮" : "完整对话"}`,
    `- **项目谱系**：${formatBranchSource(project) || "独立项目"}`,
    `- **项目状态**：${formatProjectHealth(project)}`,
    "",
    "## 作品设定",
    "",
    `- **时代 / 氛围**：${context.era || "未填写"}`,
    `- **世界观备注**：${context.world || "未填写"}`,
    context.summary ? `- **剧情摘要**：${context.summary}` : "- **剧情摘要**：暂无",
    context.instructions ? `- **本次创作要求**：${context.instructions}` : "- **本次创作要求**：暂无",
    "",
    "## 参考片段",
    "",
    referenceText,
    "",
    "## 当前草稿",
    "",
    draftText,
    "",
    "## 角色卡",
    "",
    characters.length ? characters.join("\n") : "- 暂无角色卡",
    "",
    "## 场景计划",
    "",
    sceneBeats.length ? sceneBeats.join("\n") : "- 暂无场景卡",
    "",
    "## 最近对话",
    "",
    transcript.length ? transcript.join("\n\n---\n\n") : "暂无对话",
    "",
    "## 灵感摘录",
    "",
    highlights.length ? highlights.join("\n") : "- 暂无摘录",
    "",
    "## 最近检查点",
    "",
    checkpoints.length ? checkpoints.join("\n") : "- 暂无检查点",
    "",
    "---",
    "由 InkEcho 生成，可直接交给下一位 agent 继续工作。",
  ].join("\n");
}

async function copyProjectHandoff() {
  if (preventWorkspaceMutation("复制项目交接摘要")) return;
  persistActiveProject();
  await copyText(formatProjectHandoff(), "项目交接摘要已复制");
}

function downloadProjectHandoff() {
  if (preventWorkspaceMutation("下载项目交接摘要")) return;
  flushDraft();
  persistActiveProject();
  const project = getActiveProject();
  const title = String(project?.name || document.querySelector("#workTitle")?.value || "inkecho-project");
  const safeTitle = title.replace(/[\\/:*?"<>|\s]+/g, "-").slice(0, 60);
  const blob = new Blob([formatProjectHandoff()], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeTitle || "inkecho-project"}-handoff.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("项目交接摘要已下载");
}

function formatConversationForExport() {
  return getConversationForDisplay().map((item) => {
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    const versions = Array.isArray(item.versions)
      ? item.versions.filter((version) => typeof version === "string" && version.trim())
      : [];
    const alternatives = versions.filter((version) => version !== item.content);
    const alternativeBlock = alternatives.length
      ? [
        "> **备选回复**",
        ...alternatives.map((version, index) => `> ${index + 1}. ${version.replace(/\r?\n/g, "\n> ")}`),
      ].join("\n")
      : "";
    const sourceNote = getMessageSourceLabel(item);
    const messageMode = formatMessageMode(item);
    const sourceAttribution = formatSourceAttribution(item);
    return [`### ${speaker}`, sourceNote ? `> ⚠️ ${sourceNote}` : "", messageMode, sourceAttribution, item.content, alternativeBlock]
      .filter(Boolean)
      .join("\n\n");
  }).join("\n\n---\n\n");
}

function highlightKey(item) {
  if (!item || !item.content) return "";
  return [item.role || "assistant", item.name || "角色", item.content].join("\u0000");
}

function cloneBeatsForBranch(beats, branchKeys) {
  return (beats || []).map((beat) => {
    const clone = { ...beat };
    if (clone.outcome && (!clone.outcomeThrough || !branchKeys.has(clone.outcomeThrough))) {
      clone.outcome = "";
      if (clone.status === "done") clone.status = "planned";
    }
    return clone;
  });
}

function isHighlighted(item) {
  const key = highlightKey(item);
  return Boolean(key && getActiveProject()?.highlights.some((highlight) => highlightKey(highlight) === key));
}

function renderHighlights() {
  if (!highlightList) return;
  const highlights = getActiveProject()?.highlights || [];
  highlightCount.textContent = String(highlights.length).padStart(2, "0");
  highlightList.innerHTML = "";
  if (!highlights.length) {
    const empty = document.createElement("p");
    empty.className = "highlight-empty";
    empty.textContent = "在角色回复下点击「摘录」，把喜欢的句子留下来。";
    highlightList.appendChild(empty);
    return;
  }

  highlights.slice().reverse().forEach((highlight) => {
    const card = document.createElement("div");
    card.className = "highlight-card";
    const main = document.createElement("button");
    main.type = "button";
    main.className = "highlight-main";
    main.setAttribute("aria-label", `复制${highlight.name}的摘录`);
    const speaker = document.createElement("span");
    speaker.className = "highlight-speaker";
    speaker.textContent = highlight.name;
    const excerpt = document.createElement("span");
    excerpt.className = "highlight-excerpt";
    excerpt.textContent = highlight.content;
    main.append(speaker, excerpt);
    main.addEventListener("click", () => copyText(highlight.content, "摘录已复制"));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "highlight-remove";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `删除${highlight.name}的摘录`);
    remove.addEventListener("click", () => removeHighlight(highlight.id));
    card.append(main, remove);
    highlightList.appendChild(card);
  });
}

function appendHighlightsToSummary() {
  const highlights = getActiveProject()?.highlights || [];
  if (!highlights.length) {
    showToast("先保存几条灵感摘录");
    return;
  }
  const current = workSummary.value.trim();
  const currentLines = new Set(current.split("\n").map((line) => line.trim()).filter(Boolean));
  const freshLines = highlights
    .map((highlight) => `【${highlight.name}】${highlight.content}`)
    .filter((line) => !currentLines.has(line));
  if (!freshLines.length) {
    showToast("这些摘录已经在剧情摘要中");
    return;
  }
  const addition = freshLines.join("\n");
  const next = current ? `${current}\n${addition}` : addition;
  const truncated = next.slice(0, 2000);
  workSummary.value = truncated;
  saveWorkspace();
  showToast(truncated.length < next.length ? "摘录已加入摘要（已达到 2000 字上限）" : "摘录已加入剧情摘要");
}

async function copyHighlights() {
  const highlights = getActiveProject()?.highlights || [];
  const text = highlights
    .map((highlight) => `【${highlight.name}】${highlight.content}`)
    .join("\n\n");
  await copyText(text, "全部摘录已复制", "先保存几条灵感摘录");
}

function captureSceneOutcome(historyIndex) {
  if (preventWorkspaceMutation("记录场景结果")) return;
  const project = getActiveProject();
  const beat = getActiveSceneBeat(project);
  if (!beat) {
    showToast("先在场景计划中设定当前场景");
    return;
  }
  const message = conversationHistory[historyIndex];
  if (!message?.content?.trim()) {
    showToast("这条回复还没有可记录的内容");
    return;
  }
  const speaker = message.name || selectedCharacter.name;
  const rawRecord = `${speaker}：${message.content.trim()}`;
  const record = rawRecord.slice(0, 600);
  if (beat.outcome && beat.outcome.includes(record)) {
    showToast("这条回复已经记录在当前场景中");
    return;
  }
  const combined = beat.outcome ? `${beat.outcome}\n${record}` : record;
  const clipped = rawRecord.length > record.length || combined.length > 600;
  if (combined.length <= 600) {
    beat.outcome = combined;
  } else {
    const previousCapacity = Math.max(0, 599 - record.length);
    beat.outcome = previousCapacity ? `${beat.outcome.slice(0, previousCapacity)}\n${record}` : record;
  }
  beat.outcomeThrough = highlightKey(message);
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  showToast(clipped ? "已记录场景结果（已按 600 字上限整理）" : "已记录到当前场景结果");
}

function toggleHighlight(historyIndex) {
  const message = conversationHistory[historyIndex];
  if (!message?.content?.trim()) {
    showToast("这条回复还没有内容");
    return;
  }
  const project = getActiveProject();
  const key = highlightKey(message);
  const existingIndex = project.highlights.findIndex((highlight) => highlightKey(highlight) === key);
  if (existingIndex >= 0) {
    project.highlights.splice(existingIndex, 1);
    persistActiveProject();
    renderHighlights();
    renderConversation();
    showToast("已取消摘录");
    return;
  }
  if (project.highlights.length >= maxHighlights) {
    showToast(`每个项目最多保存 ${maxHighlights} 条摘录`);
    return;
  }
  project.highlights.push({
    id: `highlight-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role: message.role,
    name: message.name || (message.role === "user" ? "我" : selectedCharacter.name),
    content: message.content.slice(0, 4000),
    createdAt: Date.now(),
  });
  persistActiveProject();
  renderHighlights();
  renderConversation();
  showToast("已保存到灵感摘录");
}

function removeHighlight(highlightId) {
  const project = getActiveProject();
  const index = project.highlights.findIndex((highlight) => highlight.id === highlightId);
  if (index < 0) return;
  project.highlights.splice(index, 1);
  persistActiveProject();
  renderHighlights();
  renderConversation();
  showToast("摘录已删除");
}

function cloneProjectState(source) {
  return {
    novelSpaceId: safeText(source.novelSpaceId, defaultNovelSpaceId, 100),
    context: { ...(source.context || {}) },
    conversation: (source.conversation || []).map((item) => ({
      ...item,
      ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
      ...(Array.isArray(item.sourceRefsByVersion) ? { sourceRefsByVersion: item.sourceRefsByVersion.map((references) => [...references]) } : {}),
      ...(Array.isArray(item.sourceQueriesByVersion) ? { sourceQueriesByVersion: [...item.sourceQueriesByVersion] } : {}),
      ...(Array.isArray(item.sourceQualitiesByVersion) ? { sourceQualitiesByVersion: [...item.sourceQualitiesByVersion] } : {}),
    })),
    conversationArchive: (source.conversationArchive || []).map((item) => ({
      ...item,
      ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
      ...(Array.isArray(item.sourceRefsByVersion) ? { sourceRefsByVersion: item.sourceRefsByVersion.map((references) => [...references]) } : {}),
      ...(Array.isArray(item.sourceQueriesByVersion) ? { sourceQueriesByVersion: [...item.sourceQueriesByVersion] } : {}),
      ...(Array.isArray(item.sourceQualitiesByVersion) ? { sourceQualitiesByVersion: [...item.sourceQualitiesByVersion] } : {}),
    })),
    conversationSessions: (source.conversationSessions || []).map((session) => ({
      ...session,
      messages: (session.messages || []).map((item) => ({
        ...item,
        ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
        ...(Array.isArray(item.sourceRefsByVersion) ? { sourceRefsByVersion: item.sourceRefsByVersion.map((references) => [...references]) } : {}),
      })),
    })),
    activeConversationSessionId: source.activeConversationSessionId,
    activeConversationSessionStartedAt: source.activeConversationSessionStartedAt,
    service: {
      ...(source.service || {}),
      ...(source.service?.models && typeof source.service.models === "object"
        ? { models: { ...source.service.models } }
        : {}),
    },
    characters: (source.characters || []).map((item) => ({ ...item })),
    selectedCharacterName: source.selectedCharacterName,
    mode: source.mode,
    draft: source.draft || "",
    prompts: (source.prompts || []).map((item) => ({ ...item })),
    highlights: (source.highlights || []).map((item) => ({ ...item })),
    beats: (source.beats || []).map((item) => ({ ...item })),
    activeBeatId: source.activeBeatId || "",
    contextMode: source.contextMode === "summary" ? "summary" : "full",
    summaryMessageCount: source.summaryMessageCount || 0,
    summaryUpdatedAt: source.summaryUpdatedAt || 0,
  };
}

function cloneCheckpoint(checkpoint) {
  return {
    id: checkpoint.id,
    name: checkpoint.name,
    createdAt: checkpoint.createdAt,
    ...cloneProjectState(checkpoint),
  };
}

function formatCheckpointDate(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "时间未知";
  return date.toLocaleString("zh-CN", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function getCheckpointMessageCount(checkpoint) {
  return (checkpoint?.conversationArchive?.length || 0) + (checkpoint?.conversation?.length || 0);
}

function renderCheckpoints() {
  if (!checkpointList) return;
  const checkpoints = getActiveProject()?.checkpoints || [];
  const query = checkpointSearchInput?.value.trim().toLocaleLowerCase() || "";
  const matches = checkpoints.filter((checkpoint) => {
    if (!query) return true;
    const activeBeat = checkpoint.beats?.find((beat) => beat.id === checkpoint.activeBeatId);
    return [
      checkpoint.name,
      checkpoint.context?.chapter,
      activeBeat?.title,
      activeBeat?.goal,
      checkpoint.selectedCharacterName,
    ].filter(Boolean).join(" ").toLocaleLowerCase().includes(query);
  });
  checkpointCount.textContent = query
    ? `${matches.length} / ${checkpoints.length} 个`
    : `${checkpoints.length} / ${maxCheckpoints} 个`;
  checkpointList.innerHTML = "";
  if (!checkpoints.length) {
    const empty = document.createElement("p");
    empty.className = "checkpoint-empty";
    empty.textContent = "保存一个检查点，随时回到这一刻。";
    checkpointList.appendChild(empty);
    return;
  }
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "checkpoint-empty";
    empty.textContent = "没有匹配的检查点。试试搜索场景名称或角色。";
    checkpointList.appendChild(empty);
    return;
  }
  matches.slice().reverse().forEach((checkpoint) => {
    const card = document.createElement("div");
    card.className = "checkpoint-card";
    const main = document.createElement("div");
    main.className = "checkpoint-main";
    const title = document.createElement("strong");
    title.textContent = checkpoint.name;
    const meta = document.createElement("small");
    meta.className = "checkpoint-meta";
    meta.textContent = `${formatCheckpointDate(checkpoint.createdAt)} · ${getCheckpointMessageCount(checkpoint)} 条消息`;
    const activeBeat = checkpoint.beats?.find((beat) => beat.id === checkpoint.activeBeatId);
    const preview = document.createElement("p");
    preview.className = "checkpoint-preview";
    preview.textContent = [
      checkpoint.context?.chapter ? `场景：${checkpoint.context.chapter}` : activeBeat?.title ? `场景：${activeBeat.title}` : "",
      activeBeat?.goal ? `目标：${activeBeat.goal}` : "",
      checkpoint.selectedCharacterName ? `角色：${checkpoint.selectedCharacterName}` : "",
      checkpoint.draft?.trim() ? "含草稿" : "",
    ].filter(Boolean).join(" · ") || "基础设定快照";
    main.append(title, meta, preview);
    const actions = document.createElement("div");
    actions.className = "checkpoint-actions";
    const restore = document.createElement("button");
    restore.type = "button";
    restore.className = "checkpoint-restore";
    restore.textContent = "恢复";
    restore.addEventListener("click", () => restoreCheckpoint(checkpoint.id));
    const branch = document.createElement("button");
    branch.type = "button";
    branch.className = "checkpoint-branch";
    branch.textContent = "支线";
    branch.setAttribute("aria-label", `从检查点 ${checkpoint.name} 创建支线`);
    branch.addEventListener("click", () => branchFromCheckpoint(checkpoint.id));
    const compare = document.createElement("button");
    compare.type = "button";
    compare.className = "checkpoint-compare";
    compare.textContent = "对比";
    compare.setAttribute("aria-label", `对比检查点 ${checkpoint.name} 与当前进度`);
    compare.addEventListener("click", () => compareCheckpoint(checkpoint.id));
    const rename = document.createElement("button");
    rename.type = "button";
    rename.className = "checkpoint-rename";
    rename.textContent = "改名";
    rename.setAttribute("aria-label", `重命名检查点 ${checkpoint.name}`);
    rename.addEventListener("click", () => renameCheckpoint(checkpoint.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "checkpoint-remove";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `删除检查点 ${checkpoint.name}`);
    remove.addEventListener("click", () => deleteCheckpoint(checkpoint.id));
    actions.append(restore, branch, compare, rename, remove);
    card.append(main, actions);
    checkpointList.appendChild(card);
  });
}

function saveCheckpoint({ quick = false } = {}) {
  if (preventWorkspaceMutation("保存检查点")) return;
  persistActiveProject();
  const project = getActiveProject();
  if (project.checkpoints.length >= maxCheckpoints) {
    showToast(`每个项目最多保存 ${maxCheckpoints} 个检查点`);
    return;
  }
  const activeBeat = getActiveSceneBeat(project);
  const defaultName = activeBeat?.title || project.context.chapter || `检查点 ${project.checkpoints.length + 1}`;
  const name = quick
    ? `${defaultName} · ${new Date().toLocaleString("zh-CN", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" })}`
    : window.prompt("给当前检查点取一个名字：", defaultName);
  if (!name || !name.trim()) return;
  project.checkpoints.push({
    id: `checkpoint-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: name.trim().slice(0, 60),
    createdAt: Date.now(),
    ...cloneProjectState(project),
  });
  persistProjects();
  renderCheckpoints();
  showToast(quick ? `已快速保存「${name.trim()}」` : `已保存检查点「${name.trim()}」`);
}

function renameCheckpoint(checkpointId) {
  if (preventWorkspaceMutation("重命名检查点")) return;
  const project = getActiveProject();
  const checkpoint = project.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) return;
  const name = window.prompt("给检查点换一个名字：", checkpoint.name);
  if (!name || !name.trim()) return;
  checkpoint.name = name.trim().slice(0, 60);
  persistProjects();
  renderCheckpoints();
  showToast(`检查点已改名为「${checkpoint.name}」`);
}

function compareCheckpoint(checkpointId) {
  if (preventWorkspaceMutation("查看检查点对比")) return;
  persistActiveProject();
  const project = getActiveProject();
  const checkpoint = project.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) return;
  const currentBeat = getActiveSceneBeat(project);
  const checkpointBeat = checkpoint.beats?.find((beat) => beat.id === checkpoint.activeBeatId);
  const currentMessages = getConversationMessageCount(project);
  const checkpointMessages = getCheckpointMessageCount(checkpoint);
  const messageDelta = currentMessages - checkpointMessages;
  const currentScene = currentBeat?.title || project.context.chapter || "未选择";
  const checkpointScene = checkpointBeat?.title || checkpoint.context?.chapter || "未选择";
  const currentBeats = new Map((project.beats || []).map((beat) => [beat.id, beat]));
  const checkpointBeats = new Map((checkpoint.beats || []).map((beat) => [beat.id, beat]));
  const beatDiffs = [];
  new Set([...currentBeats.keys(), ...checkpointBeats.keys()]).forEach((beatId) => {
    const current = currentBeats.get(beatId);
    const saved = checkpointBeats.get(beatId);
    if (!current || !saved) {
      const beat = current || saved;
      beatDiffs.push(`${current ? "当前新增" : "检查点独有"}：${beat.title}（${sceneBeatStatusLabels[beat.status] || "未知"}）`);
      return;
    }
    if (current.status !== saved.status) {
      beatDiffs.push(`状态变化：${current.title}（${sceneBeatStatusLabels[saved.status] || "未知"} → ${sceneBeatStatusLabels[current.status] || "未知"}）`);
    }
    if (current.title !== saved.title) {
      beatDiffs.push(`场景名称变化：${saved.title} → ${current.title}`);
    }
    if ((current.goal || "") !== (saved.goal || "")) {
      beatDiffs.push(`目标变化：${current.title}（检查点：${saved.goal || "未设定"}；当前：${current.goal || "未设定"}）`);
    }
    if ((current.outcome || "") !== (saved.outcome || "")) {
      beatDiffs.push(`结果变化：${current.title}（检查点：${saved.outcome || "未记录"}；当前：${current.outcome || "未记录"}）`);
    }
    if ((current.outcomeThrough || "") !== (saved.outcomeThrough || "")) {
      beatDiffs.push(`结果来源变化：${current.title}（当前结果对应的消息节点已变化）`);
    }
  });
  const signedDelta = messageDelta > 0 ? `+${messageDelta}` : String(messageDelta);
  const lines = [
    `检查点：${checkpoint.name}`,
    `保存时间：${formatCheckpointDate(checkpoint.createdAt)}`,
    "",
    "基础状态",
    `消息：当前 ${currentMessages} 条 · 检查点 ${checkpointMessages} 条 · 差值 ${signedDelta}`,
    `场景：当前 ${currentScene} · 检查点 ${checkpointScene}`,
    `角色：当前 ${project.selectedCharacterName || "未选择"} · 检查点 ${checkpoint.selectedCharacterName || "未选择"}`,
    `摘要：当前${project.context.summary ? "有" : "无"} · 检查点${checkpoint.context?.summary ? "有" : "无"}`,
    `摘要覆盖：当前 ${project.summaryMessageCount || 0} 条消息 · 检查点 ${checkpoint.summaryMessageCount || 0} 条消息`,
    `上下文模式：当前${project.contextMode === "summary" ? "精简" : "完整"} · 检查点${checkpoint.contextMode === "summary" ? "精简" : "完整"}`,
    `草稿：当前${project.draft ? "有" : "无"} · 检查点${checkpoint.draft ? "有" : "无"}`,
    "",
    "场景计划变化",
    ...(beatDiffs.length ? beatDiffs : ["没有检测到场景状态或结果变化"]),
  ];
  checkpointCompareStats.textContent = `当前 ${currentMessages} 条 · 检查点 ${checkpointMessages} 条 · 当前 ${currentBeats.size} 张场景卡 · 检查点 ${checkpointBeats.size} 张场景卡`;
  checkpointCompareText.textContent = lines.join("\n");
  closeCheckpointDialog();
  checkpointCompareDialog.showModal();
}

function openCheckpointDialog() {
  checkpointSearchInput.value = "";
  renderCheckpoints();
  checkpointDialog.showModal();
  checkpointSearchInput.focus();
}

function closeCheckpointDialog() {
  checkpointDialog.close();
}

function branchFromCheckpoint(checkpointId) {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("创建支线")) return;
  persistActiveProject();
  const current = getActiveProject();
  const checkpoint = current.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) return;
  const name = window.prompt("给这条检查点支线取一个名字：", `${current.name} · ${checkpoint.name}支线`);
  if (!name || !name.trim()) return;
  const cleanName = name.trim().slice(0, 80);
  const state = cloneProjectState(checkpoint);
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: current.novelSpaceId,
    name: cleanName,
    branchSource: {
      type: "checkpoint",
      label: current.name,
      detail: `检查点「${checkpoint.name}」`,
    },
    context: { ...state.context, title: cleanName },
    conversation: state.conversation,
    conversationArchive: state.conversationArchive,
    service: state.service,
    characters: state.characters,
    selectedCharacterName: state.selectedCharacterName,
    mode: state.mode,
    draft: state.draft,
    prompts: state.prompts,
    highlights: state.highlights,
    checkpoints: current.checkpoints
      .filter((item) => Number(item.createdAt) <= Number(checkpoint.createdAt))
      .map(cloneCheckpoint),
    beats: state.beats,
    activeBeatId: state.activeBeatId,
    contextMode: state.contextMode,
    summaryMessageCount: state.summaryMessageCount,
    summaryUpdatedAt: state.summaryUpdatedAt,
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  closeCheckpointDialog();
  showToast(`已从「${checkpoint.name}」创建支线「${cleanName}」`);
}

function quoteArchiveMessage(item) {
  if (preventWorkspaceMutation("引用归档消息")) return;
  const content = typeof item?.content === "string" ? item.content.trim() : "";
  if (!content) return;
  const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
  const quote = `【归档引用 · ${speaker}】\n${content}`;
  const current = messageInput.value.trim();
  const next = current ? `${current}\n\n${quote}` : quote;
  const clipped = next.length > 10000;
  messageInput.value = next.slice(0, 10000);
  saveDraft();
  closeArchiveHistory();
  messageInput.focus();
  showToast(clipped ? "已引用归档消息（已按输入上限截取）" : "已引用归档消息");
}

function renderArchiveHistory() {
  if (!archiveList || !archiveCount) return;
  const archive = getActiveProject()?.conversationArchive || [];
  const query = archiveSearchInput.value.trim().toLocaleLowerCase();
  const matches = archive.filter((item) => {
    if (!query) return true;
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    return `${speaker} ${item.content}`.toLocaleLowerCase().includes(query);
  });
  archiveCount.textContent = query ? `${matches.length} / ${archive.length} 条归档` : `${archive.length} 条归档`;
  clearArchiveButton.disabled = !archive.length;
  archiveList.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "archive-empty";
    empty.textContent = archive.length ? "没有匹配的归档消息" : "还没有归档消息";
    archiveList.appendChild(empty);
    return;
  }
  matches.slice().reverse().forEach((item) => {
    const card = document.createElement("article");
    card.className = "archive-card";
    const meta = document.createElement("div");
    meta.className = "archive-card-meta";
    const speaker = document.createElement("strong");
    speaker.textContent = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    const role = document.createElement("span");
    role.textContent = getMessageSourceLabel(item) ? "未生成" : item.role === "assistant" ? "角色回复" : "我的提问";
    role.title = getMessageSourceLabel(item);
    meta.append(speaker, role);
    const content = document.createElement("p");
    content.textContent = item.content;
    const actions = document.createElement("div");
    actions.className = "archive-actions";
    if (item.role === "assistant") {
      const branch = document.createElement("button");
      branch.type = "button";
      branch.className = "message-action archive-branch";
      branch.textContent = "支线";
      branch.setAttribute("aria-label", `从${speaker.textContent}的归档消息创建支线`);
      branch.addEventListener("click", () => branchFromArchiveMessage(item));
      actions.appendChild(branch);
    }
    const quote = document.createElement("button");
    quote.type = "button";
    quote.className = "message-action archive-quote";
    quote.textContent = "引用";
    quote.setAttribute("aria-label", `引用${speaker.textContent}的归档消息到输入框`);
    quote.addEventListener("click", () => quoteArchiveMessage(item));
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "message-action archive-copy";
    copy.textContent = "复制";
    copy.setAttribute("aria-label", `复制${speaker.textContent}的归档消息`);
    copy.addEventListener("click", () => copyText(item.content, "归档消息已复制"));
    actions.append(quote, copy);
    card.append(meta, content, actions);
    archiveList.appendChild(card);
  });
}

function openArchiveHistory(initialQuery = "") {
  if (preventWorkspaceMutation("查看归档历史")) return;
  const archive = getActiveProject()?.conversationArchive || [];
  if (!archive.length) {
    showToast("当前项目还没有归档消息");
    return;
  }
  archiveSearchInput.value = initialQuery.trim();
  renderArchiveHistory();
  archiveDialog.showModal();
  archiveSearchInput.focus();
}

function closeArchiveHistory() {
  archiveDialog.close();
}

function branchFromArchiveMessage(item) {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("创建支线")) return;
  if (!item || item.role !== "assistant") {
    showToast("只能从角色回复创建支线");
    return;
  }
  persistActiveProject();
  const current = getActiveProject();
  const archive = current.conversationArchive || [];
  const sourceIndex = archive.findIndex((candidate) => candidate === item || highlightKey(candidate) === highlightKey(item));
  if (sourceIndex < 0) return;
  const branchMessages = archive.slice(0, sourceIndex + 1).map((message) => ({
    ...message,
    ...(Array.isArray(message.versions) ? { versions: [...message.versions] } : {}),
  }));
  const branchArchive = branchMessages.slice(0, -maxConversationMessages);
  const branchConversation = branchMessages.slice(-maxConversationMessages);
  const branchKeys = new Set(branchMessages.map((message) => highlightKey(message)).filter(Boolean));
  const branchCheckpoints = current.checkpoints
    .filter((checkpoint) => [
      ...(checkpoint.conversationArchive || []),
      ...(checkpoint.conversation || []),
    ].every((message) => branchKeys.has(highlightKey(message))))
    .map(cloneCheckpoint);
  const speaker = item.name || selectedCharacter.name;
  const name = window.prompt("给这条归档支线取一个名字：", `${current.name} · ${speaker}处分支`);
  if (!name || !name.trim()) return;
  const cleanName = name.trim().slice(0, 80);
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: current.novelSpaceId,
    name: cleanName,
    branchSource: {
      type: "archive",
      label: current.name,
      detail: `归档第 ${sourceIndex + 1} 条 · ${speaker}`,
    },
    context: { ...current.context, title: cleanName, summary: "" },
    conversation: branchConversation,
    conversationArchive: branchArchive,
    service: { ...current.service },
    characters: current.characters.map((character) => ({ ...character })),
    selectedCharacterName: current.selectedCharacterName,
    mode: current.mode,
    draft: "",
    prompts: current.prompts.map((prompt) => ({ ...prompt })),
    highlights: current.highlights
      .filter((highlight) => branchKeys.has(highlightKey(highlight)))
      .map((highlight) => ({ ...highlight })),
    checkpoints: branchCheckpoints,
    beats: cloneBeatsForBranch(current.beats, branchKeys),
    activeBeatId: current.activeBeatId,
    contextMode: "full",
    summaryMessageCount: 0,
    summaryUpdatedAt: 0,
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  closeArchiveHistory();
  showToast(`已从归档回复创建支线「${cleanName}」`);
}

function clearArchivedHistory() {
  if (preventWorkspaceMutation("清理归档")) return;
  const project = getActiveProject();
  const count = project?.conversationArchive?.length || 0;
  if (!count) {
    showToast("当前项目没有可清理的归档");
    return;
  }
  if (!window.confirm(`将清理 ${count} 条归档消息，当前工作区消息和剧情摘要会保留。建议先导出 JSON 备份，确定继续吗？`)) return;
  project.conversationArchive = [];
  persistActiveProject();
  archiveSearchInput.value = "";
  renderArchiveHistory();
  updateCount();
  updateStorageStatus();
  showToast(`已清理 ${count} 条归档消息`);
}

function restoreCheckpoint(checkpointId) {
  if (preventWorkspaceMutation("恢复检查点")) return;
  const project = getActiveProject();
  const checkpoint = project.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) return;
  if (!window.confirm(`恢复「${checkpoint.name}」？当前未保存的对话状态会被替换。`)) return;
  Object.assign(project, cloneProjectState(checkpoint));
  project.name = project.context.title || project.name || "未命名作品";
  project.updatedAt = Date.now();
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  closeCheckpointDialog();
  showToast(`已恢复「${checkpoint.name}」`);
}

function deleteCheckpoint(checkpointId) {
  const project = getActiveProject();
  const index = project.checkpoints.findIndex((item) => item.id === checkpointId);
  if (index < 0) return;
  const checkpoint = project.checkpoints[index];
  if (!window.confirm(`删除检查点「${checkpoint.name}」吗？`)) return;
  project.checkpoints.splice(index, 1);
  persistProjects();
  renderCheckpoints();
  showToast("检查点已删除");
}

function editMessage(historyIndex) {
  if (preventWorkspaceMutation("编辑提问")) return;
  const isLatestQuestion = historyIndex === conversationHistory.length - 2
    && conversationHistory[historyIndex]?.role === "user"
    && conversationHistory.at(-1)?.role === "assistant";
  if (!isLatestQuestion) {
    showToast("请编辑最后一轮提问");
    return;
  }
  messageInput.value = conversationHistory[historyIndex].content;
  conversationHistory = conversationHistory.slice(0, historyIndex);
  saveDraft();
  saveConversation();
  renderConversation();
  messageInput.focus();
  showToast("已将提问放回输入框，修改后重新发送");
}

function renderConversation() {
  messages.innerHTML = "";
  conversationHistory.forEach((item, index) => {
    const assistant = item.role === "assistant";
    addMessage({
      role: item.role,
      name: item.name || (assistant ? selectedCharacter.name : "我"),
      text: item.content,
      historyIndex: index,
      mode: item.mode,
      avatarClass: assistant
        ? getAssistantAvatarClass(item.name || selectedCharacter.name)
        : "user-avatar",
      versions: item.versions,
      sources: item.sources,
      source: item.source,
      sourceRefs: item.sourceRefs,
      sourceQuery: item.sourceQuery,
      sourceQuality: item.sourceQuality,
      sourceAnswerCoverage: item.sourceAnswerCoverage,
      sourceCitationStatus: item.sourceCitationStatus,
      sourceCitationsUnverified: item.sourceCitationsUnverified,
      qualityReview: item.qualityReview,
      qualityRetryCodes: item.qualityRetryCodes,
      truncated: item.truncated,
      truncations: item.truncations,
      versionIndex: item.versionIndex,
      syncHistory: false,
    });
  });
  filterConversationMessages();
  renderConversationHistory();
  renderTaskStarters();
}

function resetCurrentConversation() {
  if (preventWorkspaceMutation("重新开始")) return;
  const project = getActiveProject();
  const hasConversation = getConversationMessageCount(project) > 1;
  const hasSessions = Boolean(project.conversationSessions?.length);
  const hasDraft = Boolean(messageInput.value.trim());
  const hasSummary = Boolean(workSummary.value.trim());
  if ((hasConversation || hasSessions || hasDraft || hasSummary) && !window.confirm("重新开始会清空当前会话、会话历史、归档消息、剧情摘要和草稿，但会保留作品设定、角色、场景计划、摘录与检查点。确定继续吗？")) return;

  project.conversationArchive = [];
  project.conversationSessions = [];
  project.activeConversationSessionId = `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  project.activeConversationSessionStartedAt = Date.now();
  project.context.summary = "";
  project.summaryMessageCount = 0;
  project.summaryUpdatedAt = 0;
  project.contextMode = "full";
  workSummary.value = "";
  messageInput.value = "";
  const greeting = `新的对话已经准备好。${selectedCharacter.name}正在等你写下第一句。`;
  conversationHistory = [{ role: "assistant", name: selectedCharacter.name, content: greeting }];
  saveDraft();
  saveConversation();
  renderConversation();
  renderSummaryFreshness();
  updateContextModeUI();
  updateCount();
  updateContextUsage();
  showToast("已开始新对话，旧归档不会再进入上下文");
}

function formatSceneBeatForContext(beat, index, activeBeatId) {
  return `${index + 1}. [${sceneBeatStatusLabels[beat.status] || "待写"}] ${beat.title}${beat.id === activeBeatId ? " · 当前" : ""}${beat.goal ? `：${beat.goal}` : ""}${beat.outcome ? ` · 已发生 / 线索：${beat.outcome}` : ""}`;
}

function getScenePlanForContext(project = getActiveProject()) {
  const beats = project?.beats || [];
  if (!beats.length) return "";
  const fullPlan = beats.map((beat, index) => formatSceneBeatForContext(beat, index, project.activeBeatId)).join("\n");
  if (fullPlan.length <= scenePlanContextLimit) return fullPlan;

  const activeIndex = beats.findIndex((beat) => beat.id === project.activeBeatId);
  const selectedIndexes = new Set([0, 1, beats.length - 2, beats.length - 1]);
  if (activeIndex >= 0) {
    for (let index = Math.max(0, activeIndex - 2); index <= Math.min(beats.length - 1, activeIndex + 2); index += 1) {
      selectedIndexes.add(index);
    }
  }
  const orderedIndexes = [...selectedIndexes].filter((index) => index >= 0 && index < beats.length).sort((a, b) => a - b);
  const activeLine = activeIndex >= 0 ? formatSceneBeatForContext(beats[activeIndex], activeIndex, project.activeBeatId) : "";
  const otherLines = orderedIndexes
    .filter((index) => index !== activeIndex)
    .map((index) => formatSceneBeatForContext(beats[index], index, project.activeBeatId));
  const omitted = beats.length - orderedIndexes.length;
  return [
    activeLine ? `当前场景优先：${activeLine}` : "当前场景优先：尚未选择",
    "附近与计划锚点：",
    ...otherLines,
    omitted > 0 ? `（中间省略 ${omitted} 张场景卡；完整计划仍保存在本地）` : "",
  ].filter(Boolean).join("\n").slice(0, scenePlanContextLimit);
}

function getContext() {
  const project = getActiveProject();
  const chapter = safeText(workChapter.value, "", 120);
  const activeBeat = getActiveSceneBeat(project);
  const scenePlan = getScenePlanForContext(project);
  return {
    title: safeText(document.querySelector("#workTitle").value, "", 120),
    chapter,
    sceneGoal: activeBeat && chapter === activeBeat.title ? safeText(activeBeat.goal, "", 280) : "",
    scenePlan,
    era: safeText(document.querySelector("#workEra").value, "", 120),
    world: safeText(document.querySelector("#workWorld").value, "", 800),
    reference: safeText(workReference.value, "", 4000),
    summary: safeText(workSummary.value, "", 2000),
    instructions: safeText(workInstructions.value, "", 1200),
  };
}

function getModelPreviewContext(context = getContext()) {
  if (selectedMode !== "问答") return context;
  return {
    ...context,
    sceneGoal: "",
    scenePlan: "",
    era: "",
    world: "",
    reference: "",
    summary: "",
    instructions: "",
  };
}

function getModelPreviewCharacter() {
  if (selectedMode === "问答") {
    return {
      name: "InkEcho",
      tone: "清晰、克制、以证据为先，不进行角色扮演。",
      details: `${getCurrentNovelAssistantName()}原作资料助手：区分原作事实、合理推断与目前不确定内容；没有依据时明确说明。`,
    };
  }
  return selectedCharacter;
}

function exportSession() {
  flushDraft();
  const project = getActiveProject();
  const context = getContext();
  const highlights = project?.highlights || [];
  const checkpoints = project?.checkpoints || [];
  const sceneBeats = project?.beats || [];
  const draft = messageInput.value.trim();
  const characters = Array.from(document.querySelectorAll(".character-card")).map((card) => {
    const name = card.dataset.character || "未命名角色";
    const tone = card.dataset.tone || "";
    const details = card.dataset.details || "";
    return `- **${name}**：${tone}${details ? `\n  - 人物设定：${details}` : ""}`;
  });
  const transcript = formatConversationForExport();
  const markdown = [
    `# ${context.title || "未命名作品"} · InkEcho`,
    "",
    `> 导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 作品设定",
    "",
    `- **时代 / 氛围**：${context.era || "未填写"}`,
    `- **当前章节 / 场景**：${context.chapter || "未填写"}`,
    `- **本幕目标**：${context.sceneGoal || "未填写"}`,
    `- **项目谱系**：${formatBranchSource(project) || "独立项目"}`,
    `- **项目状态**：${formatProjectHealth(project)}`,
    `- **模型上下文**：${isSummaryContextMode() ? "剧情摘要 + 最近两轮对话" : "完整对话"}`,
    `- **世界观备注**：${context.world || "未填写"}`,
    context.reference ? `- **参考片段**：\n\n${context.reference}` : "",
    context.summary ? `- **剧情摘要**：\n\n${context.summary}` : "",
    context.instructions ? `- **本次创作要求**：\n\n${context.instructions}` : "",
    draft ? `## 当前草稿\n\n${draft}` : "",
    "",
    "## 角色卡",
    "",
    characters.length ? characters.join("\n") : "- 暂无角色卡",
    "",
    "## 场景计划",
    "",
    sceneBeats.length
      ? sceneBeats.map((beat) => `- **${beat.title}**（${sceneBeatStatusLabels[beat.status]}）${beat.id === getActiveProject()?.activeBeatId ? " · 当前" : ""}${beat.goal ? `：${beat.goal}` : ""}${beat.outcome ? ` · 已发生 / 线索：${beat.outcome}` : ""}`).join("\n")
      : "暂无场景卡",
    "",
    "## 对话记录",
    "",
    transcript,
    "",
    "## 灵感摘录",
    "",
    highlights.length
      ? highlights.map((highlight) => `- **${highlight.name}**：${highlight.content}`).join("\n")
      : "暂无摘录",
    "",
    "## 对话检查点",
    "",
    checkpoints.length
      ? checkpoints.map((checkpoint) => `- **${checkpoint.name}**：${formatCheckpointDate(checkpoint.createdAt)} · ${getCheckpointMessageCount(checkpoint)} 条消息`).join("\n")
      : "暂无检查点",
    "",
    "---",
    "由 InkEcho 导出",
    "",
  ].join("\n");
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeTitle = (context.title || "inkecho-creation").replace(/[\\/:*?\"<>|\s]+/g, "-").slice(0, 60);
  link.href = url;
  link.download = `${safeTitle || "inkecho-creation"}.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("创作已导出为 Markdown");
}

function exportProjectsBackup() {
  if (isSending) {
    showToast("模型回复完成后再备份项目");
    return;
  }
  flushDraft();
  persistActiveProject();
  const novelSpaceBindings = Array.from(new Set(projects.map((project) => safeText(project?.novelSpaceId, "", 100)).filter(Boolean)))
    .map((spaceId) => {
      const space = novelSpaces.find((item) => item.id === spaceId);
      const source = space?.source || {};
      return {
        id: spaceId,
        name: safeText(space?.name, "未命名小说", 80),
        kind: safeText(space?.kind, "unknown", 30),
        available: Boolean(source.available),
        format: safeText(source.format, "", 20),
      };
    });
  const backup = {
    format: "inkecho-projects",
    version: 4,
    exportedAt: new Date().toISOString(),
    activeProjectId,
    projects,
    customTemplates,
    characterLibrary,
    promptLibrary,
    novelSpaceBindings,
    spaceConfigReminder: "小说原文、章节索引和空间记忆不包含在项目备份中",
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `inkecho-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`已备份 ${projects.length} 个项目`);
}

function exportCurrentProjectBackup() {
  if (isSending) {
    showToast("模型回复完成后再备份项目");
    return;
  }
  flushDraft();
  persistActiveProject();
  const project = getActiveProject();
  const backup = {
    format: "inkecho-project",
    version: 1,
    exportedAt: new Date().toISOString(),
    project,
    novelSpaceBinding: {
      id: safeText(project?.novelSpaceId, "", 100),
      name: safeText(getNovelSpaceForProject(project)?.name, "未命名小说", 80),
      kind: safeText(getNovelSpaceForProject(project)?.kind, "unknown", 30),
      available: Boolean(getNovelSpaceForProject(project)?.source?.available),
      format: safeText(getNovelSpaceForProject(project)?.source?.format, "", 20),
    },
    spaceConfigReminder: "小说原文、章节索引和空间记忆不包含在项目备份中",
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeTitle = (project.context.title || project.name || "inkecho-project").replace(/[\\/:*?"<>|\s]+/g, "-").slice(0, 60);
  link.href = url;
  link.download = `${safeTitle || "inkecho-project"}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("当前项目已导出为 JSON");
}

function formatBackupProjectPreview(sourceProjects, sourceActiveProjectId, importCount) {
  const activeSourceId = sourceActiveProjectId || String(sourceProjects[0]?.id || "");
  const previewProjects = sourceProjects.slice(0, Math.min(importCount, 4));
  if (!previewProjects.length) return "";
  const lines = previewProjects.map((source) => {
    const name = safeText(source?.name || source?.context?.title, "未命名作品", 50);
    const messageCount = [
      ...(Array.isArray(source?.conversationArchive) ? source.conversationArchive : []),
      ...(Array.isArray(source?.conversation) ? source.conversation : []),
    ].length;
    const beats = Array.isArray(source?.beats) ? source.beats : [];
    const doneBeats = beats.filter((beat) => beat?.status === "done").length;
    const details = [
      `${messageCount} 条消息`,
      beats.length ? `场景 ${doneBeats}/${beats.length} 完成` : "暂无场景计划",
      source?.draft?.trim() ? "有草稿" : "无草稿",
    ];
    const activeMark = String(source?.id || "") === activeSourceId ? "★ " : "";
    return `  ${activeMark}${name}（${details.join(" · ")}）`;
  });
  const hiddenCount = Math.max(0, importCount - previewProjects.length);
  if (hiddenCount) lines.push(`  ……另有 ${hiddenCount} 个项目未展开`);
  return `\n将导入的项目预览：\n${lines.join("\n")}`;
}

async function importProjectsBackup() {
  const file = projectBackupFile.files?.[0];
  if (!file) return;
  if (preventWorkspaceMutation("导入项目")) {
    projectBackupFile.value = "";
    return;
  }
  if (file.size > 5_000_000) {
    showToast("备份文件超过 5MB，无法导入");
    projectBackupFile.value = "";
    return;
  }
  try {
    const backup = JSON.parse(await file.text());
    const sourceBackupVersion = Number.isFinite(Number(backup?.version)) ? Number(backup.version) : 1;
    const rawSourceProjects = backup?.format === "inkecho-project"
      ? [backup.project]
      : backup?.format === "inkecho-projects" && Array.isArray(backup.projects)
        ? backup.projects
        : null;
    const sourceProjects = Array.isArray(rawSourceProjects)
      ? rawSourceProjects.filter((project) => project && typeof project === "object" && !Array.isArray(project))
      : null;
    const sourceActiveProjectId = backup?.format === "inkecho-projects" ? String(backup.activeProjectId || "") : "";
    const sourceSpaceBindings = backup?.format === "inkecho-projects" && Array.isArray(backup.novelSpaceBindings)
      ? backup.novelSpaceBindings.filter((binding) => binding && typeof binding === "object" && !Array.isArray(binding))
      : backup?.format === "inkecho-project" && backup.novelSpaceBinding && typeof backup.novelSpaceBinding === "object"
        ? [backup.novelSpaceBinding]
        : [];
    const sourceTemplates = backup?.format === "inkecho-projects" && Array.isArray(backup.customTemplates)
      ? backup.customTemplates
      : [];
    const sourceLibrary = backup?.format === "inkecho-projects" && Array.isArray(backup.characterLibrary)
      ? backup.characterLibrary
      : [];
    const sourcePromptLibrary = backup?.format === "inkecho-projects" && Array.isArray(backup.promptLibrary)
      ? backup.promptLibrary
      : [];
    if (!sourceProjects?.length || !sourceProjects[0] || typeof sourceProjects[0] !== "object") {
      throw new Error("invalid backup");
    }
    const slots = Math.max(0, maxProjects - projects.length);
    const importCount = Math.min(sourceProjects.length, slots);
    const fallbackNovelSpaceId = getActiveNovelSpace()?.id || defaultNovelSpaceId;
    const importedSourceProjects = sourceProjects.slice(0, slots);
    const normalizeSpaceBindingName = (value) => safeText(value, "", 80).trim().toLocaleLowerCase();
    const findLocalNovelSpaceByBinding = (binding) => {
      const sourceSpaceId = safeText(binding?.id, "", 100);
      if (sourceSpaceId) {
        const byId = novelSpaces.find((space) => space.id === sourceSpaceId);
        if (byId) return byId;
      }
      const sourceName = normalizeSpaceBindingName(binding?.name);
      if (!sourceName) return null;
      return novelSpaces.find((space) => normalizeSpaceBindingName(space.name) === sourceName) || null;
    };
    const resolveImportedNovelSpaceId = (source) => {
      const sourceSpaceId = safeText(source?.novelSpaceId, "", 100);
      const matchedBinding = sourceSpaceBindings.find((binding) => safeText(binding?.id, "", 100) === sourceSpaceId);
      const localSpace = findLocalNovelSpaceByBinding(matchedBinding || { id: sourceSpaceId });
      return localSpace?.source?.available ? localSpace.id : fallbackNovelSpaceId;
    };
    const matchedByNameCount = importedSourceProjects.filter((source) => {
      const sourceSpaceId = safeText(source?.novelSpaceId, "", 100);
      if (!sourceSpaceId || novelSpaces.some((space) => space.id === sourceSpaceId)) return false;
      const binding = sourceSpaceBindings.find((item) => safeText(item?.id, "", 100) === sourceSpaceId);
      return Boolean(binding?.name && findLocalNovelSpaceByBinding(binding)?.source?.available);
    }).length;
    const reboundProjectCount = importedSourceProjects.filter((source) => {
      const sourceSpaceId = safeText(source?.novelSpaceId, "", 100);
      return sourceSpaceId && resolveImportedNovelSpaceId(source) === fallbackNovelSpaceId && sourceSpaceId !== fallbackNovelSpaceId;
    }).length;
    const importedTemplates = sourceTemplates.slice(0, maxCustomTemplates).map((template, index) => normalizeTemplate({
      ...template,
      id: `template-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      title: `${safeText(template?.title, "我的模板", 80)} · 导入`,
    }));
    const importedLibraryCharacters = sourceLibrary.slice(0, maxLibraryCharacters).map((character, index) => normalizeLibraryCharacter({
      ...character,
      id: `library-character-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    }));
    const importedLibraryPrompts = sourcePromptLibrary.slice(0, maxLibraryPrompts).map((prompt, index) => normalizeLibraryPrompt({
      ...prompt,
      id: `library-prompt-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    })).filter((item) => item.text);
    if (!slots && !importedTemplates.length && !importedLibraryCharacters.length && !importedLibraryPrompts.length) {
      showToast(`项目数量已达到上限（${maxProjects} 个）`);
      return;
    }
    const sourceActiveProject = backup?.format === "inkecho-projects"
      ? sourceProjects.find((project) => String(project?.id || "") === sourceActiveProjectId)
      : sourceProjects[0];
    const activeLabel = sourceActiveProject?.name ? `\n备份中的当前项目：${sourceActiveProject.name}` : "";
    const projectPreviewLabel = formatBackupProjectPreview(sourceProjects, sourceActiveProjectId, importCount);
    const skippedProjects = Array.isArray(rawSourceProjects)
      ? rawSourceProjects.length - sourceProjects.length
      : 0;
    const capacitySkippedProjects = Math.max(0, sourceProjects.length - slots);
    const skippedLabel = skippedProjects ? `\n另有 ${skippedProjects} 个无效项目条目，将跳过。` : "";
    const capacitySkippedLabel = capacitySkippedProjects ? `\n另有 ${capacitySkippedProjects} 个有效项目因本地项目上限，将跳过。` : "";
    const sourceBindingNames = [...new Set(sourceSpaceBindings.map((binding) => safeText(binding?.name, "", 80).trim()).filter(Boolean))];
    const unresolvedBindingNames = sourceSpaceBindings
      .filter((binding) => {
        const localSpace = findLocalNovelSpaceByBinding(binding);
        return !localSpace || !localSpace.source?.available;
      })
      .map((binding) => safeText(binding?.name, "未命名小说", 80).trim())
      .filter((name, index, list) => name && list.indexOf(name) === index);
    const bindingLabel = sourceBindingNames.length
      ? `\n备份引用小说空间：${sourceBindingNames.join("、")}。项目备份不包含小说原文、章节索引或空间记忆，请按需重新上传原文并导入空间配置。`
      : "";
    const unresolvedBindingLabel = unresolvedBindingNames.length
      ? `\n当前设备未找到可用原文：${unresolvedBindingNames.join("、")}；相关项目会先绑定当前选中的小说空间，上传后自动恢复。`
      : "";
    const reboundLabel = reboundProjectCount
      ? `\n其中 ${reboundProjectCount} 个项目引用的原小说空间在本机不存在，将重新关联到当前空间「${getActiveNovelSpace()?.name || "未命名小说"}」。`
      : "";
    const matchedByNameLabel = matchedByNameCount
      ? `\n其中 ${matchedByNameCount} 个项目会按小说空间名称重新关联。`
      : "";
    const versionLabel = backup?.format === "inkecho-projects"
      ? `\n备份格式：v${sourceBackupVersion}，会按当前版本可识别字段导入。`
      : "";
    const templateLabel = importedTemplates.length ? `\n另含 ${importedTemplates.length} 个自定义模板。` : "";
    const libraryLabel = importedLibraryCharacters.length ? `\n另含 ${importedLibraryCharacters.length} 个角色库条目。` : "";
    const promptLabel = importedLibraryPrompts.length ? `\n另含 ${importedLibraryPrompts.length} 个灵感库条目。` : "";
    if (!window.confirm(`将导入 ${importCount} 个项目，现有项目不会被覆盖。${versionLabel}${activeLabel}${projectPreviewLabel}${skippedLabel}${capacitySkippedLabel}${bindingLabel}${unresolvedBindingLabel}${matchedByNameLabel}${reboundLabel}${templateLabel}${libraryLabel}${promptLabel}\n确定继续吗？`)) return;
    const importedEntries = importedSourceProjects.map((project, index) => {
      const source = project && typeof project === "object" ? project : {};
      const sourceSpaceId = safeText(source.novelSpaceId, "", 100);
      const sourceSpaceName = safeText(
        sourceSpaceBindings.find((binding) => safeText(binding?.id, "", 100) === sourceSpaceId)?.name,
        "",
        80,
      ).trim();
      return {
        sourceId: String(source.id || ""),
        sourceSpaceName,
        project: createProject({
          ...source,
          id: `project-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
          name: `${safeText(source.name, "未命名作品", 80)} · 导入`,
          novelSpaceId: resolveImportedNovelSpaceId(source),
        }),
      };
    });
    const imported = importedEntries.map((entry) => entry.project);
    if (!imported.length && !importedTemplates.length && !importedLibraryCharacters.length && !importedLibraryPrompts.length) {
      throw new Error("empty backup");
    }
    persistActiveProject();
    projects.push(...imported);
    customTemplates = [...importedTemplates, ...customTemplates].slice(0, maxCustomTemplates);
    characterLibrary = [...importedLibraryCharacters, ...characterLibrary]
      .filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
      .slice(0, maxLibraryCharacters);
    promptLibrary = [...importedLibraryPrompts, ...promptLibrary]
      .filter((item, index, list) => list.findIndex((candidate) => candidate.text === item.text) === index)
      .slice(0, maxLibraryPrompts);
    const selectedImported = importedEntries.find((entry) => entry.sourceId === sourceActiveProjectId);
    if (selectedImported?.project) activeProjectId = selectedImported.project.id;
    else if (imported[0]) activeProjectId = imported[0].id;
    const recoveryProjectBindings = importedEntries
      .filter((entry) => entry.sourceSpaceName && unresolvedBindingNames.some((name) => normalizeSpaceBindingName(name) === normalizeSpaceBindingName(entry.sourceSpaceName)))
      .map((entry) => ({ projectId: entry.project.id, name: entry.sourceSpaceName }));
    persistProjects();
    persistCustomTemplates();
    persistCharacterLibrary();
    persistPromptLibrary();
    hydrateActiveProject();
    renderProjectSelect();
    renderCharacters();
    renderConversation();
    updateProviderUI();
    setSpaceRecovery(sourceBindingNames, unresolvedBindingNames, recoveryProjectBindings);
    const skippedToast = skippedProjects ? `，跳过 ${skippedProjects} 个无效项目` : "";
    const capacityToast = capacitySkippedProjects ? `，因项目上限跳过 ${capacitySkippedProjects} 个有效项目` : "";
    const reboundToast = reboundProjectCount ? `，${reboundProjectCount} 个项目已重绑定当前空间` : "";
    const matchedByNameToast = matchedByNameCount ? `，${matchedByNameCount} 个项目按空间名称关联` : "";
    showToast(`已导入 ${imported.length} 个项目${skippedToast}${capacityToast}${matchedByNameToast}${reboundToast}${importedTemplates.length ? `、${importedTemplates.length} 个模板` : ""}${importedLibraryCharacters.length ? `、${importedLibraryCharacters.length} 个角色` : ""}${importedLibraryPrompts.length ? `、${importedLibraryPrompts.length} 个灵感` : ""}`);
  } catch {
    showToast("备份文件无效，请选择 InkEcho 导出的 JSON");
  } finally {
    projectBackupFile.value = "";
  }
}

function setSending(value) {
  isSending = value;
  messageInput.disabled = value;
  document.querySelectorAll(".mode-tab, .character-card").forEach((control) => {
    control.disabled = value;
  });
  [projectSelect, providerSelect, modelName, creativitySelect, responseLengthSelect].forEach((control) => {
    if (control) control.disabled = value;
  });
  sendButton.disabled = false;
  sendButton.textContent = value ? "■" : "↑";
  sendButton.setAttribute("aria-label", value ? "停止生成" : "发送消息");
  sendButton.classList.toggle("stop-mode", value);
  composer.classList.toggle("is-sending", value);
}

function stopGeneration() {
  if (!streamController) return;
  streamController.abort();
  showToast("已停止生成，当前内容已保留");
}

function updateProviderUI() {
  const provider = providerSelect.value;
  providerMissingKeys = [];
  copyProviderConfigKeysButton.hidden = true;
  providerDescription.textContent = providerDescriptions[provider];
  if (providerSetupHint) providerSetupHint.textContent = providerSetupHints[provider] || "";
  if (providerDataBoundary) providerDataBoundary.textContent = providerDataBoundaries[provider] || "";
  if (!modelName.value.trim() || Object.values(providerDefaults).includes(modelName.value.trim())) {
    modelName.value = providerDefaults[provider];
  }
  setProviderBadge("检查中", "#a26b46");
  return checkProviderHealth(provider);
}

function getEffectiveCreativityLabel() {
  return selectedMode === "问答" ? "事实优先" : (creativityLabels[creativitySelect.value] || "平衡");
}

function updateModeGuide() {
  const guide = modeGuides[selectedMode] || modeGuides.续写;
  const description = guide.description.replaceAll("《蛊真人》", `「${getCurrentNovelDisplayName()}」`);
  if (modeGuideIcon) modeGuideIcon.textContent = guide.icon;
  if (modeGuideKicker) modeGuideKicker.textContent = guide.kicker;
  if (modeGuideTitle) modeGuideTitle.textContent = guide.title;
  if (modeGuideDescription) modeGuideDescription.textContent = description;
  if (modeGuideAction) modeGuideAction.textContent = guide.action;
}

function syncWorkspacePage() {
  renderWorkspaceNovelSelect();
  const activeSpace = novelSpaceForProject();
  const activeReadiness = getNovelSpaceReadiness(activeSpace);
  if (atlasHomeNovelName) atlasHomeNovelName.textContent = getCurrentNovelDisplayName();
  if (atlasHomeSourceStatus) {
    atlasHomeSourceStatus.textContent = activeSpace
      ? `${getCurrentNovelDisplayName()} · ${activeReadiness.capability}`
      : "还没有小说知识空间，先上传一本小说";
  }
  if (atlasHomeSourceStats) {
    atlasHomeSourceStats.textContent = activeReadiness.canQuery
      ? "浏览章节并引用原文"
      : activeReadiness.capability;
  }
  if (sourceReadinessText) {
    sourceReadinessText.textContent = activeReadiness.canQuery ? "原作依据已就绪" : activeReadiness.label;
  }
  if (sourceReadinessButton) {
    sourceReadinessButton.classList.toggle("is-warning", !activeReadiness.canQuery);
    sourceReadinessButton.title = activeReadiness.canQuery
      ? "查看当前小说的原作章节与检索依据"
      : `${activeReadiness.capability}，点击前往原作资料处理`;
  }
  if (workspaceNovelName) {
    const space = novelSpaceForProject();
    const readiness = getNovelSpaceReadiness(space);
    const needsAttention = readiness.filter !== "ready";
    workspaceNovelName.textContent = `当前小说：${getCurrentNovelDisplayName()}${needsAttention ? ` · ${readiness.label}` : ""}`;
    workspaceNovelName.classList.toggle("is-warning", needsAttention);
    workspaceNovelName.title = needsAttention ? readiness.capability : "当前知识空间可用于续写与内容问答";
  }
  if (sourcePageStatus && sourceStatus) sourcePageStatus.textContent = sourceStatus.textContent;
  if (sourcePageChapter) {
    const workspaceChapter = normalizeChapterLocator(workChapter?.value);
    sourcePageChapter.value = sourceOutlineTitles.includes(workspaceChapter) ? workspaceChapter : "";
  }
  renderSourcePageDiagnostics();
  syncSourcePageActions();
  const project = getActiveProject();
  if (storyPageBeatCount) {
    const beats = project?.beats || [];
    const active = getActiveSceneBeat(project);
    storyPageBeatCount.textContent = `${beats.length} 张场景卡 · ${active ? `当前进行中：${active.title}` : "尚未选择当前场景"}`;
  }
  syncWorkspaceGuide();
}

function renderWorkspaceNovelSelect() {
  if (!workspaceNovelSelect) return;
  const currentSpaceId = getCurrentNovelSpaceId();
  workspaceNovelSelect.replaceChildren();
  if (!novelSpaces.length) {
    const loading = document.createElement("option");
    loading.value = "";
    loading.textContent = "正在读取小说空间……";
    workspaceNovelSelect.appendChild(loading);
    workspaceNovelSelect.disabled = true;
    return;
  }
  const spaces = novelSpaces.slice().sort((left, right) => {
    if (left.id === currentSpaceId) return -1;
    if (right.id === currentSpaceId) return 1;
    const lastAccessedDifference = (Number(right.lastAccessedAt) || 0) - (Number(left.lastAccessedAt) || 0);
    if (lastAccessedDifference) return lastAccessedDifference;
    return (Number(right.updated_at) || 0) - (Number(left.updated_at) || 0);
  });
  spaces.forEach((space) => {
    const option = document.createElement("option");
    const readiness = getNovelSpaceReadiness(space);
    option.value = space.id;
    option.textContent = `${space.name}${readiness.filter !== "ready" ? ` · ${readiness.label}` : ""}`;
    workspaceNovelSelect.appendChild(option);
  });
  workspaceNovelSelect.value = spaces.some((space) => space.id === currentSpaceId)
    ? currentSpaceId
    : spaces[0].id;
  workspaceNovelSelect.disabled = false;
  workspaceNovelSelect.title = spaces.length > 1 ? "快速切换当前小说知识空间" : "如需切换，请先在小说库上传或选择其他小说";
}

function renderSourcePageDiagnostics() {
  if (!sourcePageDiagnostics) return;
  const space = novelSpaceForProject();
  const source = space?.source || {};
  const readiness = getNovelSpaceReadiness(space);
  sourcePageDiagnostics.replaceChildren();
  const warnings = Array.isArray(source.parseDiagnostics?.warnings)
    ? source.parseDiagnostics.warnings.filter(Boolean).slice(0, 3)
    : [];
  if (warnings.length) {
    const warning = document.createElement("small");
    warning.textContent = `解析提醒：${warnings.join("；")}`;
    sourcePageDiagnostics.appendChild(warning);
  } else if (source.parseStatus === "partial" && source.parseMessage) {
    const message = document.createElement("small");
    message.textContent = source.parseMessage;
    sourcePageDiagnostics.appendChild(message);
  }
  if (readiness.filter === "empty" || readiness.filter === "partial") {
    const action = document.createElement("button");
    action.type = "button";
    action.className = "text-button source-diagnostics-action";
    if (space?.kind === "uploaded") {
      action.textContent = "选择修正版原文并重新解析";
      action.addEventListener("click", () => prepareNovelSpaceReparse(space.id));
    } else {
      action.textContent = "去小说库上传可读取原文";
      action.addEventListener("click", () => setWorkspaceView("library", { announce: true, focus: true }));
    }
    sourcePageDiagnostics.appendChild(action);
  } else if (readiness.filter === "unavailable") {
    const action = document.createElement("button");
    action.type = "button";
    action.className = "text-button source-diagnostics-action";
    action.textContent = "去小说库恢复原文";
    action.addEventListener("click", () => setWorkspaceView("library", { announce: true, focus: true }));
    sourcePageDiagnostics.appendChild(action);
  }
}

function syncSourceChapterSelection() {
  if (!sourceChapterSelection) return;
  const chapter = normalizeChapterLocator(sourcePageChapter?.value);
  const label = sourceChapterSelection.querySelector("span");
  if (label) label.textContent = chapter || "尚未选择章节";
  sourceChapterSelection.classList.toggle("has-selection", Boolean(chapter));
}

function syncSourcePageActions() {
  const readiness = getNovelSpaceReadiness(novelSpaceForProject());
  const hasChapter = Boolean(normalizeChapterLocator(sourcePageChapter?.value));
  const hasEvidenceQuery = Boolean(sourceEvidenceQueryInput?.value.trim());
  const blockedTitle = readiness.canQuery
    ? ""
    : `${readiness.capability}，请先在小说库恢复或重新解析原文。`;
  [
    [sourcePageReadButton, "阅读所选章节"],
    [sourcePageAskButton, "围绕所选章节提问"],
  ].forEach(([button, label]) => {
    if (!button) return;
    const reading = button === sourcePageReadButton && button.dataset.reading === "true";
    button.disabled = reading || !readiness.canQuery || !hasChapter;
    button.title = !readiness.canQuery ? blockedTitle : hasChapter ? label : "先从章节列表选择一章";
  });
  if (sourcePagePreviewButton) {
    sourcePagePreviewButton.disabled = !readiness.canQuery || !hasEvidenceQuery;
    sourcePagePreviewButton.title = !readiness.canQuery
      ? blockedTitle
      : hasEvidenceQuery ? "查找可以核对的原文" : "先输入一个要查证的问题";
  }
  syncSourceChapterSelection();
}

function setWorkspaceView(view, { announce = false, focus = false } = {}) {
  const nextView = workspaceGuides[view] ? view : "workbench";
  const previousView = activeWorkspaceView;
  if (nextView !== "workbench" && document.body.classList.contains("focus-mode")) setFocusMode(false);
  activeWorkspaceView = nextView;
  if (workspaceNavMore) workspaceNavMore.open = !["library", "workbench"].includes(nextView);
  persistWorkspaceView(nextView);
  document.body.dataset.workspaceView = nextView;
  document.querySelectorAll(".workspace-page").forEach((page) => {
    page.hidden = page.dataset.workspacePage !== nextView;
  });
  if (workspacePageWorkbench) workspacePageWorkbench.hidden = nextView !== "workbench";
  if (nextView === "settings") {
    if (settingsPageSlot && modelSettings && !settingsPageSlot.contains(modelSettings)) {
      settingsPageSlot.appendChild(modelSettings);
    }
  } else {
    if (settingsPageSlot?.contains(modelSettings) && sidebarFooter?.parentElement) {
      sidebarFooter.parentElement.insertBefore(modelSettings, sidebarFooter);
    }
    if (nextView === "story") {
      if (storyContextSlot && contextMore && !storyContextSlot.contains(contextMore)) {
        storyContextSlot.appendChild(contextMore);
      }
      if (contextMore) contextMore.open = true;
    } else if (storyContextSlot?.contains(contextMore) && characterSectionHeading?.parentElement) {
      characterSectionHeading.parentElement.insertBefore(contextMore, characterSectionHeading);
    }
  }
  syncWorkspacePage();
  workspaceNavItems.forEach((item) => {
    const active = item.dataset.workspaceView === nextView;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  syncWorkspaceGuide();

  if (nextView !== previousView) window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  if (nextView === "home") {
    if (announce) showToast("已返回故事星图");
    if (focus) document.querySelector("[data-atlas-task]")?.focus();
  } else if (nextView === "library") {
    if (announce) showToast("小说库是进入知识空间和工作台的主入口");
    if (focus) novelSpaceList?.querySelector(".novel-space-card.is-active .page-primary-button")?.focus();
  } else if (nextView === "source") {
    if (announce) showToast("已定位到原作资料区：章节、参考片段和知识库状态");
    if (focus) sourceOutlineSearchInput?.focus();
  } else if (nextView === "settings") {
    if (modelSettings) modelSettings.open = true;
    if (announce) showToast("已打开模型与数据设置");
    if (focus) providerSelect?.focus();
  } else if (nextView === "memory") {
    setMemoryLayer(activeMemoryLayer, { focus });
    if (announce) showToast("已打开空间记忆：原作知识用于问答，创作记忆用于续写");
  } else if (nextView === "story") {
    if (announce) showToast("故事管理集中在场景计划、角色卡和摘要");
    if (focus) storyPageBeatsButton?.focus();
  } else if (focus) {
    messageInput?.focus();
    messageInput?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function syncWorkspaceViewFromUrl() {
  try {
    const { view, spaceId } = readWorkspaceHashState();
    if (spaceId) syncNovelSpaceFromUrl(spaceId);
    if (workspaceGuides[view] && view !== activeWorkspaceView) {
      setWorkspaceView(view, { announce: false, focus: true });
    }
  } catch {
    // Ignore malformed URL fragments.
  }
}

function syncModeControls() {
  const factualMode = selectedMode === "问答";
  creativitySelect.disabled = factualMode;
  creativitySelect.title = factualMode ? "问答模式固定为事实优先" : "";
  creativityValue.textContent = getEffectiveCreativityLabel();
  conversationTitle.textContent = getConversationTitle();
  updateModeGuide();
}

function setProviderBadge(label, color) {
  providerBadge.textContent = label;
  providerBadge.style.color = color;
  const connected = label === "已连接";
  const configured = ["配置完整", "配置完成"].includes(label);
  if (modelReadinessText) {
    modelReadinessText.textContent = connected
      ? "模型服务已连接"
      : configured
        ? "模型配置已完成"
        : `模型服务：${label}`;
  }
  if (modelReadinessButton) {
    modelReadinessButton.classList.toggle("is-pending", configured);
    modelReadinessButton.classList.toggle("is-warning", !connected && !configured);
    modelReadinessButton.title = connected
      ? "模型连接已经验证，点击查看当前配置"
      : configured
        ? "配置字段完整，但连接尚未验证；点击前往设置测试连接"
        : `模型服务${label}，点击前往设置处理`;
  }
}

function renderSourceStatus(status) {
  if (!sourceStatus) return;
  if (!status) {
    sourceStatus.textContent = "原作暂不可用";
    sourceStatus.classList.add("is-warning");
    syncWorkspacePage();
    return;
  }
  if (status.available) {
    if (status.parse_status === "empty" || Number(status.chunks || 0) <= 0 || Number(status.characters || 0) <= 0) {
      sourceStatus.textContent = `${status.name || "当前小说"} · 没有可读取的正文`;
      sourceStatus.classList.add("is-warning");
      sourceStatus.classList.remove("is-error");
      syncWorkspacePage();
      return;
    }
    const parseHint = status.parse_status === "partial" ? " · 部分章节需要检查" : "";
    sourceStatus.textContent = `${status.name || "蛊真人"} · 原作已就绪${parseHint}`;
    sourceStatus.classList.toggle("is-warning", status.parse_status === "partial");
    sourceStatus.classList.remove("is-error");
  } else if (status.configured) {
    sourceStatus.textContent = status.error || "原文文件不可用";
    sourceStatus.classList.remove("is-error");
    sourceStatus.classList.add("is-warning");
  } else {
    sourceStatus.textContent = "尚未添加原文";
    sourceStatus.classList.remove("is-error");
    sourceStatus.classList.add("is-warning");
  }
  syncWorkspacePage();
}

async function loadSourceOutline(status) {
  if (!sourceChapterOptions || !sourceOutlineHint) return;
  if (!status?.available) {
    sourceOutlineLoadedKey = "";
    sourceOutlineTitles = [];
    resetSourceOutlineRemoteSearch();
    if (sourceOutlineVolumeFilter) {
      sourceOutlineVolumeFilter.value = "";
      populateSourceOutlineVolumeFilter([]);
    }
    sourceChapterOptions.replaceChildren();
    sourceOutlineHint.textContent = status?.configured
      ? "原作章节建议暂不可用，可以手动填写当前章节。"
      : "配置原作知识库后，可在当前章节输入框选择卷 / 节。";
    renderSourceOutlineBrowser();
    return;
  }
  const sourceKey = `${getCurrentNovelSpaceId()}:${status.name || "蛊真人"}:${Number(status.chunks || 0)}`;
  if (sourceOutlineLoadedKey === sourceKey && sourceChapterOptions.options.length) return;
  const requestId = ++sourceOutlineRequestId;
  const requestSpaceId = getCurrentNovelSpaceId();
  sourceOutlineTitles = [];
  resetSourceOutlineRemoteSearch();
  if (sourceOutlineVolumeFilter) sourceOutlineVolumeFilter.value = "";
  sourceChapterOptions.replaceChildren();
  renderSourceOutlineBrowser();
  sourceOutlineHint.textContent = "原作章节建议读取中……";
  try {
    const params = new URLSearchParams({ limit: "3000", novel_space_id: requestSpaceId });
    const response = await fetchWithTimeout(`/api/source/outline?${params.toString()}`, {}, 15000);
    const payload = await response.json();
    if (requestId !== sourceOutlineRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    if (!response.ok || !payload.ok) throw new Error(payload.error || "章节建议读取失败");
    const titles = Array.isArray(payload.titles) ? payload.titles.filter(Boolean) : [];
    sourceOutlineTitles = titles;
    if (sourcePageChapter && !titles.includes(normalizeChapterLocator(sourcePageChapter.value))) {
      sourcePageChapter.value = "";
    }
    populateSourceChapterOptions(sourceOutlineTitles);
    populateSourceOutlineVolumeFilter(sourceOutlineTitles);
    sourceOutlineLoadedKey = sourceKey;
    sourceOutlineHint.textContent = titles.length
      ? `原作章节建议已加载 · ${titles.length.toLocaleString("zh-CN")} 个卷 / 节，可输入关键词筛选`
      : "没有读取到章节标题，可以手动填写当前章节。";
    renderSourceOutlineBrowser();
    syncSourcePageActions();
  } catch {
    if (requestId !== sourceOutlineRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    sourceOutlineHint.textContent = "原作章节建议暂不可用，可以手动填写当前章节。";
  }
}

function populateSourceChapterOptions(titles) {
  if (!sourceChapterOptions) return;
  const uniqueTitles = [...new Set((Array.isArray(titles) ? titles : []).filter(Boolean))];
  sourceChapterOptions.replaceChildren(...uniqueTitles.map((title) => {
    const option = document.createElement("option");
    option.value = title;
    return option;
  }));
}

function sourceOutlineVolumeTitle(title) {
  const firstSegment = String(title || "").split(" · ")[0].trim();
  return /^第[一二三四五六七八九十百千万零〇两0-9]+(?:卷|部)(?:[：:].*)?$/.test(firstSegment)
    ? firstSegment
    : "";
}

function populateSourceOutlineVolumeFilter(titles) {
  if (!sourceOutlineVolumeFilter) return;
  const current = sourceOutlineVolumeFilter.value;
  const volumes = [...new Set(
    (Array.isArray(titles) ? titles : []).map(sourceOutlineVolumeTitle).filter(Boolean),
  )];
  sourceOutlineVolumeFilter.replaceChildren();
  const all = document.createElement("option");
  all.value = "";
  all.textContent = "全部卷 / 分卷";
  sourceOutlineVolumeFilter.appendChild(all);
  volumes.forEach((volume) => {
    const option = document.createElement("option");
    option.value = volume;
    option.textContent = volume;
    sourceOutlineVolumeFilter.appendChild(option);
  });
  sourceOutlineVolumeFilter.hidden = volumes.length < 2;
  sourceOutlineVolumeFilter.value = volumes.includes(current) ? current : "";
}

function resetSourceOutlineRemoteSearch() {
  sourceOutlineSearchRequestId += 1;
  if (sourceOutlineSearchTimer) {
    clearTimeout(sourceOutlineSearchTimer);
    sourceOutlineSearchTimer = null;
  }
  sourceOutlineRemoteQuery = "";
  sourceOutlineRemoteTitles = [];
  sourceOutlineSearchPending = false;
  sourceOutlineSearchError = false;
  sourceOutlineVisibleLimit = sourceOutlineDisplayLimit;
}

function queueSourceOutlineSearch() {
  const query = sourceOutlineSearchInput?.value.trim() || "";
  resetSourceOutlineRemoteSearch();
  populateSourceChapterOptions(sourceOutlineTitles);
  if (query.length < 2) {
    renderSourceOutlineBrowser();
    return;
  }
  sourceOutlineSearchPending = true;
  renderSourceOutlineBrowser();
  const requestId = sourceOutlineSearchRequestId;
  const requestSpaceId = getCurrentNovelSpaceId();
  const normalizedQuery = query.toLocaleLowerCase();
  sourceOutlineSearchTimer = window.setTimeout(async () => {
    sourceOutlineSearchTimer = null;
    try {
      const params = new URLSearchParams({
        query,
        limit: "3000",
        novel_space_id: requestSpaceId,
      });
      const response = await fetchWithTimeout(`/api/source/outline?${params.toString()}`, {}, 15000);
      const payload = await response.json();
      if (requestId !== sourceOutlineSearchRequestId || getCurrentNovelSpaceId() !== requestSpaceId || sourceOutlineSearchInput?.value.trim().toLocaleLowerCase() !== normalizedQuery) return;
      if (!response.ok || !payload.ok) throw new Error(payload.error || "章节检索失败");
      sourceOutlineRemoteQuery = normalizedQuery;
      sourceOutlineRemoteTitles = Array.isArray(payload.titles) ? payload.titles.filter(Boolean) : [];
      sourceOutlineSearchPending = false;
      sourceOutlineSearchError = false;
      populateSourceChapterOptions([...sourceOutlineTitles, ...sourceOutlineRemoteTitles]);
      populateSourceOutlineVolumeFilter([...sourceOutlineTitles, ...sourceOutlineRemoteTitles]);
      renderSourceOutlineBrowser();
    } catch {
      if (requestId !== sourceOutlineSearchRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
      sourceOutlineRemoteQuery = normalizedQuery;
      sourceOutlineRemoteTitles = [];
      sourceOutlineSearchPending = false;
      sourceOutlineSearchError = true;
      renderSourceOutlineBrowser();
    }
  }, 240);
}

function renderSourceOutlineBrowser() {
  if (!sourceOutlineList) return;
  const query = sourceOutlineSearchInput?.value.trim().toLocaleLowerCase() || "";
  const selectedVolume = sourceOutlineVolumeFilter?.value || "";
  const remoteTitles = query && sourceOutlineRemoteQuery === query ? sourceOutlineRemoteTitles : [];
  const candidates = [...new Set([...sourceOutlineTitles, ...remoteTitles])];
  const filtered = candidates.filter((title) => (
    (!selectedVolume || sourceOutlineVolumeTitle(title) === selectedVolume)
    && (
      !query
      || title.toLocaleLowerCase().includes(query)
      || (sourceOutlineRemoteQuery === query && remoteTitles.includes(title))
    )
  ));
  if (sourceOutlineClearButton) sourceOutlineClearButton.hidden = !query && !selectedVolume;
  const filterHint = selectedVolume ? ` · ${selectedVolume}` : "";
  if (sourceOutlineBrowserStatus) {
    if (query && sourceOutlineSearchPending) {
      sourceOutlineBrowserStatus.textContent = "正在查找章节……";
    } else if (query && sourceOutlineSearchError) {
      sourceOutlineBrowserStatus.textContent = "章节查找暂不可用，可以直接输入标题";
    } else if (!candidates.length) {
      sourceOutlineBrowserStatus.textContent = "暂无可浏览章节，可以手动输入标题";
    } else if (query) {
      sourceOutlineBrowserStatus.textContent = filtered.length
        ? `找到 ${filtered.length.toLocaleString("zh-CN")} 个匹配章节${filterHint}`
        : sourceOutlineRemoteQuery === query ? "没有找到匹配章节" : "正在查找章节……";
    } else {
      sourceOutlineBrowserStatus.textContent = selectedVolume
        ? `正在浏览${filterHint}`
        : "选择一个章节开始阅读";
    }
  }
  sourceOutlineList.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "source-outline-empty";
    empty.textContent = sourceOutlineSearchError
      ? "完整章节索引暂不可用，可以直接输入章节 / 场景定位。"
      : sourceOutlineTitles.length ? "换一个关键词，或直接输入章节 / 场景定位。" : "章节导航暂不可用，可以直接输入章节 / 场景定位。";
    sourceOutlineList.appendChild(empty);
    return;
  }
  const current = sourcePageChapter?.value.trim() || "";
  filtered.slice(0, sourceOutlineVisibleLimit).forEach((title) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "source-outline-item";
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(title === current));
    button.textContent = title;
    button.addEventListener("click", () => {
      if (sourcePageChapter) sourcePageChapter.value = title;
      workChapter.value = title;
      workChapter.dispatchEvent(new Event("input", { bubbles: true }));
      renderSourceOutlineBrowser();
      syncSourcePageActions();
      showToast(`已定位到「${title}」`);
    });
    sourceOutlineList.appendChild(button);
  });
  if (filtered.length > sourceOutlineVisibleLimit) {
    const more = document.createElement("button");
    more.type = "button";
    more.className = "source-outline-more";
    more.textContent = "显示更多章节";
    more.addEventListener("click", () => {
      sourceOutlineVisibleLimit = Math.min(sourceOutlineVisibleLimit + sourceOutlineDisplayLimit, filtered.length);
      renderSourceOutlineBrowser();
      window.setTimeout(() => sourceOutlineList.querySelector(".source-outline-more")?.focus(), 0);
    });
    sourceOutlineList.appendChild(more);
  }
}

let sourceChapterReaderRequestId = 0;
let sourceChapterReaderPreview = null;
let sourceChapterReaderIsSample = false;
let pendingSourceChapterDigest = null;

function syncSourceChapterReaderActions() {
  if (!sourceChapterAskButton) return;
  sourceChapterAskButton.textContent = sourceChapterReaderIsSample ? "围绕解析样本提问" : "围绕本章提问";
  sourceChapterAskButton.title = sourceChapterReaderIsSample
    ? "携带当前解析样本的定位进入内容问答"
    : "携带当前章节的定位进入内容问答";
}

async function openSourceChapterReader(titleOverride = "", options = {}) {
  const isSample = options?.sample === true;
  const title = normalizeChapterLocator(titleOverride) || normalizeChapterLocator(sourcePageChapter?.value) || "";
  if (!title && !isSample) {
    showToast("先从章节列表选择一章");
    sourceOutlineSearchInput?.focus();
    return;
  }
  if (titleOverride && sourcePageChapter && sourcePageChapter.value.trim() !== title) {
    sourcePageChapter.value = title;
    sourcePageChapter.dispatchEvent(new Event("input", { bubbles: true }));
  }
  const requestId = ++sourceChapterReaderRequestId;
  const requestSpaceId = getCurrentNovelSpaceId();
  if (sourcePageReadButton) {
    sourcePageReadButton.disabled = true;
    sourcePageReadButton.dataset.reading = "true";
    sourcePageReadButton.textContent = "读取中……";
  }
  if (sourceChapterReaderStats) sourceChapterReaderStats.textContent = isSample
    ? "正在读取原文开篇……"
    : "正在读取章节……";
  if (sourceChapterReaderTitle) sourceChapterReaderTitle.textContent = isSample ? "检查原文内容" : "阅读原作";
  if (sourceChapterReaderText) sourceChapterReaderText.textContent = "";
  sourceChapterReaderPreview = null;
  sourceChapterReaderIsSample = isSample;
  syncSourceChapterReaderActions();
  pendingSourceChapterDigest = null;
  if (sourceChapterDigest) sourceChapterDigest.hidden = true;
  if (sourceChapterDigestText) sourceChapterDigestText.textContent = "";
  if (sourceChapterDigestStatus) sourceChapterDigestStatus.textContent = "先生成一份摘要，再决定是否写入空间记忆。";
  if (saveSourceChapterDigestButton) saveSourceChapterDigestButton.hidden = true;
  if (sourceChapterPreviousButton) {
    sourceChapterPreviousButton.hidden = true;
    sourceChapterPreviousButton.disabled = true;
  }
  if (sourceChapterNextButton) {
    sourceChapterNextButton.hidden = true;
    sourceChapterNextButton.disabled = true;
  }
  sourceChapterReaderDialog?.showModal();
  try {
    const params = new URLSearchParams({ limit: "12000", novel_space_id: requestSpaceId });
    if (!isSample) params.set("title", title);
    const endpoint = isSample
      ? `/api/source/sample?${params.toString()}`
      : `/api/source/chapter?${params.toString()}`;
    const response = await fetchWithTimeout(endpoint, {}, 15000);
    const payload = await response.json();
    if (requestId !== sourceChapterReaderRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    if (!response.ok || !payload.ok || !payload.preview) throw new Error(payload.error || "章节读取失败");
    const preview = payload.preview;
    if (sourceChapterReaderTitle) sourceChapterReaderTitle.textContent = preview.title || title || "阅读原作";
    if (sourceChapterReaderStats) {
      sourceChapterReaderStats.textContent = isSample
        ? "原文开篇预览"
        : (preview.truncated ? "章节节选" : "本章完整内容");
    }
    if (sourceChapterReaderText) sourceChapterReaderText.textContent = preview.text || "当前章节没有可显示的正文。";
    sourceChapterReaderPreview = { ...preview, spaceId: requestSpaceId };
    sourceChapterReaderIsSample = isSample || preview.sample === true;
    syncSourceChapterReaderActions();
    if (sourceChapterPreviousButton) {
      sourceChapterPreviousButton.hidden = !preview.previous_title;
      sourceChapterPreviousButton.disabled = !preview.previous_title;
    }
    if (sourceChapterNextButton) {
      sourceChapterNextButton.hidden = !preview.next_title;
      sourceChapterNextButton.disabled = !preview.next_title;
    }
  } catch (error) {
    if (requestId !== sourceChapterReaderRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    if (sourceChapterReaderTitle) sourceChapterReaderTitle.textContent = "暂时无法阅读本章";
    if (sourceChapterReaderStats) sourceChapterReaderStats.textContent = "请重新选择章节后再试";
    if (sourceChapterReaderText) sourceChapterReaderText.textContent = error?.name === "AbortError"
      ? "读取超时，请检查本地 InkEcho 服务。"
      : (error?.message || (isSample ? "解析样本读取失败，请检查当前小说文件。" : "找不到当前章节，请从章节导航重新选择。"));
  } finally {
    if (sourcePageReadButton) {
      sourcePageReadButton.dataset.reading = "";
      sourcePageReadButton.textContent = "阅读所选章节";
      syncSourcePageActions();
    }
  }
}

async function generateSourceChapterDigest() {
  const preview = sourceChapterReaderPreview;
  if (!preview?.title) {
    showToast("先读取一个章节，再生成摘要");
    return;
  }
  if (!await ensureProviderReadyForRequest("生成章节摘要")) return;
  if (!await ensureProviderDataConsent("生成章节摘要")) return;
  const spaceId = getCurrentNovelSpaceId();
  if (sourceChapterDigest) sourceChapterDigest.hidden = false;
  if (sourceChapterDigestStatus) sourceChapterDigestStatus.textContent = "正在调用当前模型整理章节摘要……";
  if (sourceChapterDigestText) sourceChapterDigestText.textContent = "";
  if (saveSourceChapterDigestButton) saveSourceChapterDigestButton.hidden = true;
  if (generateSourceChapterDigestButton) {
    generateSourceChapterDigestButton.disabled = true;
    generateSourceChapterDigestButton.textContent = "生成中……";
  }
  try {
    const response = await fetchWithTimeout("/api/source/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: preview.title,
        novel_space_id: spaceId,
        provider: providerSelect.value,
        model: modelName.value.trim(),
      }),
    }, clientModelRequestTimeout());
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.summary?.summary) throw new Error(payload.error || "章节摘要生成失败");
    if (spaceId !== getCurrentNovelSpaceId()) {
      pendingSourceChapterDigest = null;
      showToast("当前小说空间已切换，这份摘要没有写入");
      return;
    }
    const summary = String(payload.summary.summary).trim();
    pendingSourceChapterDigest = {
      title: preview.title,
      summary,
      spaceId,
      sourceRevision: String(preview.source_revision || "").trim(),
    };
    if (sourceChapterDigestText) sourceChapterDigestText.textContent = summary;
    if (sourceChapterDigestStatus) sourceChapterDigestStatus.textContent = "请先核对这份草稿；它是模型整理结果，写入后仍会标记为需以原文为准。";
    if (saveSourceChapterDigestButton) saveSourceChapterDigestButton.hidden = false;
  } catch (error) {
    pendingSourceChapterDigest = null;
    if (sourceChapterDigestStatus) sourceChapterDigestStatus.textContent = error?.name === "AbortError"
      ? "模型请求超时，请检查当前模型服务。"
      : (error?.message || "章节摘要生成失败，请检查模型服务配置。");
  } finally {
    if (generateSourceChapterDigestButton) {
      generateSourceChapterDigestButton.disabled = false;
      generateSourceChapterDigestButton.textContent = "生成章节摘要";
    }
  }
}

async function saveSourceChapterDigest() {
  const pending = pendingSourceChapterDigest;
  if (!pending) return;
  if (pending.spaceId !== getCurrentNovelSpaceId()) {
    pendingSourceChapterDigest = null;
    showToast("当前小说空间已切换，这份摘要没有写入");
    return;
  }
  const saved = await saveGeneratedMemoryNote(
    `原作章节摘要 · ${pending.title}`,
    pending.summary,
    saveSourceChapterDigestButton,
    "原作章节摘要已写入空间记忆",
    "source_summary",
    pending.title,
    pending.sourceRevision,
    { chapterTitle: pending.title, chunkCount: Number(sourceChapterReaderPreview?.chunks || 0) },
  );
  if (saved) {
    if (sourceChapterDigestStatus) sourceChapterDigestStatus.textContent = "已写入空间记忆 · 模型整理结果仍以章节原文为准。";
    if (saveSourceChapterDigestButton) saveSourceChapterDigestButton.hidden = true;
    pendingSourceChapterDigest = null;
  }
}

let sourceEvidenceText = "";
let sourceEvidenceRequestId = 0;

function sourceQueryForHistoryIndex(historyIndex, modeOverride = "") {
  const project = getActiveProject();
  const activeBeat = getActiveSceneBeat(project);
  const boundary = Number.isInteger(historyIndex) ? historyIndex : conversationHistory.length;
  const evidenceMode = normalizeMessageMode(modeOverride)
    || (Number.isInteger(historyIndex) ? normalizeMessageMode(conversationHistory[historyIndex]?.mode) : "")
    || selectedMode;
  const latestUser = [...conversationHistory.slice(0, boundary)]
    .reverse()
    .find((item) => sourceQueryAllowsMessage(item, evidenceMode) && item.role === "user")?.content || "";
  // A knowledge question should search the whole novel from the user's words.
  // Injecting the writing project's current chapter silently turns an open QA
  // query into a chapter-scoped query and can hide the actual answer elsewhere.
  const contextParts = evidenceMode === "问答"
    ? []
    : [project?.context?.chapter, activeBeat?.title, activeBeat?.goal];
  return [latestUser, ...contextParts]
    .filter(Boolean)
    .join(" ")
    .slice(0, 600);
}

function renderSourceEvidence(results, sourceName = "蛊真人", query = "", sourceQuality = "", sourceAnswerCoverage = "", strategy = "balanced", historyIndex = null, mode = "") {
  sourceEvidenceList.replaceChildren();
  sourceEvidenceText = "";
  const quality = sourceQualityLabel(sourceQuality);
  const answerCoverage = sourceAnswerCoverageLabel(sourceAnswerCoverage);
  const questionMode = normalizeMessageMode(mode) === "问答";
  const normalizedStrategy = normalizeRetrievalStrategy(strategy);
  const strategyLabel = retrievalStrategyLabels[normalizedStrategy];
  if (sourceEvidenceRecovery) {
    sourceEvidenceRecovery.replaceChildren();
    const answerNeedsRecovery = questionMode && ["related", "none"].includes(normalizeSourceAnswerCoverage(sourceAnswerCoverage));
    const shouldSuggest = answerNeedsRecovery || ["partial", "limited", "none"].includes(normalizeSourceQuality(sourceQuality));
    sourceEvidenceRecovery.hidden = !shouldSuggest;
    if (shouldSuggest) {
      const recoveryText = document.createElement("span");
      recoveryText.textContent = results.length
        ? (answerNeedsRecovery
          ? "找到了相关片段，但还没有明确答案句；可以换一种策略继续核对："
          : "命中较少，可以换一种检索策略复核同一个问题：")
        : "暂时没有直接命中，可以尝试换一种检索策略：";
      sourceEvidenceRecovery.appendChild(recoveryText);
      Object.entries(retrievalStrategyLabels)
        .filter(([key]) => key !== normalizedStrategy)
        .forEach(([key, label]) => {
          const retry = document.createElement("button");
          retry.type = "button";
          retry.className = "text-button source-evidence-retry";
          retry.textContent = label;
          retry.title = `使用“${label}”重新检索当前问题`;
          retry.addEventListener("click", () => openSourceEvidence(historyIndex, query, key, mode));
          sourceEvidenceRecovery.appendChild(retry);
        });
    }
  }
  if (!results.length) {
    sourceEvidenceStats.textContent = `暂时没有找到「${String(query || "当前问题").trim().slice(0, 80)}」的明确原文`;
    const empty = document.createElement("p");
    empty.className = "source-evidence-empty";
    empty.textContent = "可以换一种问法，或在左侧补充当前章节 / 场景。";
    sourceEvidenceList.appendChild(empty);
    copySourceEvidenceButton.disabled = true;
    return;
  }
  const displayQuery = String(query || "当前问题").trim().slice(0, 80);
  sourceEvidenceStats.textContent = questionMode
    ? `正在核对「${displayQuery}」 · ${answerCoverage || "找到相关原文"}`
    : `正在核对「${displayQuery}」`;
  const lines = [
    `${sourceName}原作检索依据`,
    `检索策略：${strategyLabel}`,
    questionMode ? `答案依据：${answerCoverage || "未标注"}` : "",
    `检索相关性：${quality || "未标注"}（只说明召回相关度）`,
    `查询：${query}`,
    "",
  ].filter(Boolean);
  results.forEach((result, index) => {
    const card = document.createElement("article");
    card.className = "source-evidence-card";
    card.style.setProperty("--evidence-index", index);
    const disclosure = document.createElement("details");
    disclosure.className = "source-evidence-disclosure";
    disclosure.open = index === 0;
    const heading = document.createElement("summary");
    heading.className = "source-evidence-card-heading source-evidence-summary";
    const rank = document.createElement("span");
    rank.className = "source-evidence-rank";
    rank.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("strong");
    title.textContent = result.title || `片段 ${index + 1}`;
    heading.append(rank, title);
    const explanation = document.createElement("div");
    explanation.className = "source-evidence-explanation";
    explanation.textContent = index === 0 && questionMode && ["answer", "direct"].includes(normalizeSourceAnswerCoverage(sourceAnswerCoverage))
      ? "优先核对"
      : "相关原文";
    const text = document.createElement("pre");
    text.className = "source-evidence-text";
    text.textContent = result.text || "暂无片段内容";
    const actions = document.createElement("div");
    actions.className = "source-evidence-card-actions";
    const save = document.createElement("button");
    save.type = "button";
    save.className = "text-button source-evidence-save";
    save.textContent = "保存到记忆";
    save.title = "把已核对的原作片段保存到当前小说空间";
    save.addEventListener("click", async () => {
      const resultTitle = String(result.title || `片段 ${index + 1}`).trim();
      const sourceChapterTitle = String(result.chapter_title || resultTitle).trim();
      const resultText = String(result.text || "").trim();
      const chunkCount = Math.max(0, Number(result.chapter_chunk_count) || 0);
      const chunkIndex = Math.max(0, Number(result.chapter_chunk_index) || 0);
      const chunkLabel = chunkCount > 1 ? ` · 分片 ${chunkIndex || 1}/${chunkCount}` : "";
      const memoryTitle = `原作依据 · ${sourceChapterTitle}${chunkLabel}`.slice(0, 80);
      const memoryContent = [
        `来源小说：${sourceName}`,
        `依据章节：${sourceChapterTitle}`,
        resultTitle !== sourceChapterTitle ? `展示片段：${resultTitle}` : "",
        chunkCount > 1 ? `原文分片：${chunkIndex || 1} / ${chunkCount}` : "",
        `核对问题：${query}`,
        "",
        resultText,
      ].filter(Boolean).join("\\n").slice(0, 4000);
      const origin = `${sourceName} · ${resultTitle} · ${query}`.slice(0, 120);
      const saved = await saveGeneratedMemoryNote(
        memoryTitle,
        memoryContent,
        save,
        "已将原作依据保存到空间记忆",
        "source_evidence",
        origin,
        result.source_revision || "",
        { chapterTitle: sourceChapterTitle, chunkIndex, chunkCount },
      );
      if (saved) {
        save.textContent = "已保存";
        save.disabled = true;
      }
    });
    const ask = document.createElement("button");
    ask.type = "button";
    ask.className = "text-button source-evidence-ask";
    ask.textContent = "围绕此处提问";
    ask.title = "携带当前问题和这条原作定位进入内容问答";
    ask.addEventListener("click", () => {
      const resultTitle = String(result.title || "").trim();
      beginSourceQuestion(query, resultTitle);
    });
    const read = document.createElement("button");
    read.type = "button";
    read.className = "text-button source-evidence-read";
    read.textContent = "阅读整章";
    read.title = "打开这条依据所属章节的本机原文预览";
    read.addEventListener("click", () => {
      const chapterTitle = String(result.chapter_title || result.title || "").trim();
      if (sourceEvidenceDialog?.open) sourceEvidenceDialog.close();
      openSourceChapterReader(chapterTitle);
    });
    actions.append(ask, read, save);
    disclosure.append(heading, explanation, text, actions);
    card.appendChild(disclosure);
    sourceEvidenceList.appendChild(card);
    lines.push(
      `【${result.title || `片段 ${index + 1}`}】`,
      result.text || "",
      "",
    );
  });
  sourceEvidenceText = lines.join("\n").trim();
  copySourceEvidenceButton.disabled = false;
}

function beginSourceQuestion(question = "", chapter = "") {
  const space = novelSpaceForProject();
  const readiness = getNovelSpaceReadiness(space);
  if (!readiness.canQuery) {
    showToast(`${getCurrentNovelDisplayName()}的原文尚未就绪，内容问答暂不可用`);
    return;
  }
  if (sourceEvidenceDialog?.open) sourceEvidenceDialog.close();
  const normalizedChapter = String(chapter || "").trim();
  if (normalizedChapter) {
    workChapter.value = normalizedChapter;
    workChapter.dispatchEvent(new Event("input", { bubbles: true }));
  }
  const normalizedQuestion = String(question || "").trim();
  beginConversationForMode("问答", { announce: false });
  if (normalizedQuestion) {
    messageInput.value = normalizedQuestion.slice(0, 10000);
    messageInput.dispatchEvent(new Event("input", { bubbles: true }));
  }
  setWorkspaceView("workbench", { announce: true, focus: true });
  messageInput?.focus();
  if (normalizedQuestion) messageInput?.select();
}

async function openSourceEvidence(historyIndex, savedQuery = "", strategyOverride = "", modeOverride = "") {
  const evidenceMode = normalizeMessageMode(modeOverride)
    || normalizeMessageMode(conversationHistory[historyIndex]?.mode)
    || selectedMode;
  const query = savedQuery || sourceQueryForHistoryIndex(historyIndex, evidenceMode);
  const requestStrategy = normalizeRetrievalStrategy(strategyOverride || getRetrievalStrategy());
  const requestId = ++sourceEvidenceRequestId;
  const requestSpaceId = getCurrentNovelSpaceId();
  sourceEvidenceStats.textContent = "正在读取本机知识库……";
  if (sourceEvidenceRecovery) {
    sourceEvidenceRecovery.hidden = true;
    sourceEvidenceRecovery.replaceChildren();
  }
  sourceEvidenceList.replaceChildren();
  sourceEvidenceText = "";
  copySourceEvidenceButton.disabled = true;
  if (!sourceEvidenceDialog.open) sourceEvidenceDialog.showModal();
  try {
    const response = await fetchWithTimeout("/api/source/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        mode: evidenceMode,
        novel_space_id: requestSpaceId,
        retrieval_strategy: requestStrategy,
      }),
    }, 15000);
    const payload = await response.json();
    if (requestId !== sourceEvidenceRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    if (!response.ok || !payload.ok) throw new Error(payload.error || "原作依据读取失败");
    renderSourceEvidence(
      Array.isArray(payload.results) ? payload.results : [],
      payload.source?.name || "蛊真人",
      payload.query || query,
      payload.source_quality || "",
      payload.source_answer_coverage || "",
      payload.retrieval_strategy || requestStrategy,
      historyIndex,
      evidenceMode,
    );
  } catch (error) {
    if (requestId !== sourceEvidenceRequestId || getCurrentNovelSpaceId() !== requestSpaceId) return;
    sourceEvidenceStats.textContent = "原作知识库暂时不可用";
    const failure = document.createElement("p");
    failure.className = "source-evidence-empty is-error";
    failure.textContent = error?.name === "AbortError"
      ? "读取超时，请检查本地 InkEcho 服务。"
      : (error?.message || "读取检索依据失败，请检查本地服务状态。");
    sourceEvidenceList.appendChild(failure);
  }
}

async function fetchSourceMetadataForFallback(query, mode) {
  if (!String(query || "").trim()) return { references: [], quality: "none", answerCoverage: "none" };
  try {
    const response = await fetchWithTimeout("/api/source/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        mode,
        novel_space_id: getCurrentNovelSpaceId(),
        retrieval_strategy: getRetrievalStrategy(),
      }),
    }, 5000);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || "原作依据读取失败");
    const references = normalizeSourceReferences(
      (Array.isArray(payload.results) ? payload.results : []).map((item) => item?.title),
    );
    return {
      references,
      quality: normalizeSourceQuality(payload.source_quality) || (references.length ? "limited" : "none"),
      answerCoverage: normalizeSourceAnswerCoverage(payload.source_answer_coverage) || (references.length ? "related" : "none"),
    };
  } catch {
    return { references: [], quality: "none", answerCoverage: "none" };
  }
}

async function fetchWithTimeout(url, options = {}, timeout = providerRequestTimeout) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function providerDisplayName(provider) {
  return providerSelect.querySelector(`option[value="${provider}"]`)?.textContent || provider;
}

async function copyProviderConfigKeys() {
  if (!providerMissingKeys.length) {
    showToast("当前服务没有缺少的配置键名");
    return;
  }
  const text = [
    `InkEcho · ${providerDisplayName(providerSelect.value)} 配置键名`,
    "",
    ...providerMissingKeys.map((key) => `- ${key}`),
    "",
    "仅包含环境变量名称，不包含任何密钥、端点或请求头值。",
  ].join("\n");
  await copyText(text, "缺少项已复制");
}

async function copyProviderConfigTemplate() {
  const provider = providerSelect.value;
  const template = providerConfigTemplates[provider];
  if (!template) {
    showToast("当前服务没有可用的配置模板");
    return;
  }
  await copyText(`${template}\n\n# 请替换占位符；不要把真实密钥提交到 GitHub。`, "配置模板已复制");
}

function formatProviderDiagnostics(payload, provider, model) {
  const details = payload.provider_details?.[provider] || {};
  const missing = Array.isArray(details.missing) && details.missing.length ? details.missing.join("、") : "无";
  const missingKeys = Array.isArray(details.missing_keys) && details.missing_keys.length
    ? details.missing_keys.join("、")
    : "无";
  const providers = Object.keys(providerDefaults).map((name) => {
    const providerDetails = payload.provider_details?.[name] || {};
    const configured = Boolean(payload.providers?.[name]);
    const missingFields = Array.isArray(providerDetails.missing) && providerDetails.missing.length
      ? `（缺少：${providerDetails.missing.join("、")}）`
      : "";
    const missingKeys = Array.isArray(providerDetails.missing_keys) && providerDetails.missing_keys.length
      ? `；变量：${providerDetails.missing_keys.join("、")}`
      : "";
    return `- ${providerDisplayName(name)}：${configured ? "配置完整" : "待配置"}${missingFields}${missingKeys}`;
  });
  return [
    `当前服务：${providerDisplayName(provider)}`,
    `当前模型：${model || "未填写"}`,
    `当前状态：${details.configured ? "配置完整" : "待配置"}`,
    `当前缺少：${missing}`,
    `当前缺少变量：${missingKeys}`,
    "",
    "服务配置概览：",
    ...providers,
    "",
    `上游请求超时：${Number(payload.request_timeout || 0).toLocaleString("zh-CN")} 秒`,
    `历史消息预算：${Number(payload.history_budget || 0).toLocaleString("zh-CN")} 字`,
    "",
    "安全说明：诊断内容不包含 API key、端点或请求头值。",
  ].join("\n");
}

async function openProviderDiagnostics() {
  const provider = providerSelect.value;
  const model = modelName.value.trim();
  providerDiagnosticsStats.textContent = `${providerDisplayName(provider)} · ${model || "未填写模型"}`;
  providerDiagnosticsText.textContent = "正在读取服务诊断……";
  providerDiagnosticsDialog.showModal();
  try {
    const params = new URLSearchParams({ provider, model, novel_space_id: getCurrentNovelSpaceId() });
    const response = await fetchWithTimeout(`/api/health?${params.toString()}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("诊断不可用");
    providerDiagnosticsText.textContent = formatProviderDiagnostics(payload, provider, model);
  } catch (error) {
    providerDiagnosticsText.textContent = error?.name === "AbortError"
      ? "读取诊断超时，请检查 InkEcho 服务是否启动。"
      : "暂时无法读取诊断，请检查本地服务状态。\n\n安全说明：未读取或显示任何密钥、端点或请求头值。";
  }
}

function withAbortTimeout(promise, controller, timeout, message) {
  let timer;
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      const error = new Error(message);
      error.name = "StreamTimeoutError";
      error.userMessage = message;
      reject(error);
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
}

function clientModelRequestTimeout(minimum = 30000) {
  return Math.max(minimum, Math.min(serverRequestTimeout, 120000));
}

async function checkProviderHealth(provider = providerSelect.value) {
  const requestId = ++providerHealthRequestId;
  try {
    const params = new URLSearchParams({ provider, model: modelName.value.trim(), novel_space_id: getCurrentNovelSpaceId() });
    const response = await fetchWithTimeout(`/api/health?${params.toString()}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("健康检查失败");
    if (requestId !== providerHealthRequestId) return { stale: true };
    if (Number.isFinite(Number(payload.history_budget))) {
      serverHistoryBudget = Math.max(8000, Math.min(Number(payload.history_budget), 120000));
      updateContextUsage();
    }
    if (Number.isFinite(Number(payload.request_timeout))) {
      serverRequestTimeout = Math.max(5000, Math.min(Number(payload.request_timeout) * 1000, 120000));
    }
    const currentSpace = novelSpaces.find((space) => space.id === getCurrentNovelSpaceId());
    if (currentSpace && payload.source) {
      currentSpace.source = { ...currentSpace.source, ...payload.source };
      renderNovelSpaceLibrary();
    }
    renderSourceStatus(payload.source);
    loadSourceOutline(payload.source);
    const configured = Boolean(payload.providers && payload.providers[provider]);
    const missing = payload.provider_details?.[provider]?.missing;
    const missingKeys = payload.provider_details?.[provider]?.missing_keys;
    providerMissingKeys = Array.isArray(missingKeys) ? missingKeys : [];
    copyProviderConfigKeysButton.hidden = !providerMissingKeys.length;
    const missingFieldsText = Array.isArray(missing) && missing.length ? `缺少：${missing.join("、")}` : "";
    const missingHint = missingFieldsText;
    providerDescription.textContent = !configured && missingHint
      ? `${providerDescriptions[provider]} ${missingHint}`
      : providerDescriptions[provider];
    if (providerSetupHint) {
      providerSetupHint.textContent = configured
        ? "配置已经准备好；点击“测试连接”验证当前模型是否可用。"
        : providerSetupHints[provider] || "";
    }
    setProviderBadge(configured ? "配置完整" : "待配置", configured ? "#6f8b6a" : "#a26b46");
    return {
      configured,
      provider,
      missing: Array.isArray(missing) ? missing : [],
      missingKeys: Array.isArray(missingKeys) ? missingKeys : [],
    };
  } catch (error) {
    if (requestId !== providerHealthRequestId) return { stale: true };
    renderSourceStatus(null);
    loadSourceOutline(null);
    providerDescription.textContent = providerDescriptions[provider];
    if (providerSetupHint) providerSetupHint.textContent = providerSetupHints[provider] || "";
    setProviderBadge(error?.name === "AbortError" ? "连接超时" : "状态不可用", "#a26b46");
    return { configured: false, provider, unavailable: true, missing: [], missingKeys: [] };
  }
}

function providerRecoveryMessage(readiness, action = "继续") {
  const provider = readiness?.provider || providerSelect.value;
  if (readiness?.unavailable) return `${action}前无法确认模型服务状态，请确认 InkEcho 本地服务已启动。`;
  const missing = Array.isArray(readiness?.missing) ? readiness.missing.filter(Boolean) : [];
  return `${providerDisplayName(provider)}还没有准备好${missing.length ? `：缺少${missing.join("、")}` : ""}。请按下方三步修复指引完成设置。`;
}

async function ensureProviderReadyForRequest(purpose = "生成内容") {
  const provider = providerSelect.value;
  let readiness = await checkProviderHealth(provider);
  if (readiness?.stale) readiness = await checkProviderHealth(provider);
  if (readiness?.configured) return true;
  const missing = Array.isArray(readiness?.missing) ? readiness.missing.filter(Boolean) : [];
  const message = readiness?.unavailable
    ? `${purpose}前无法确认模型服务状态，草稿已保留，请先检查本地服务。`
    : `${purpose}前请先完成${providerDisplayName(provider)}配置${missing.length ? `：缺少${missing.join("、")}` : ""}。草稿已保留。`;
  showToast(message);
  setWorkspaceView("settings", { announce: false, focus: true });
  return false;
}

async function refreshModels(options = {}) {
  const skipReadiness = options?.skipReadiness === true;
  const provider = providerSelect.value;
  if (!skipReadiness) {
    let readiness = await checkProviderHealth(provider);
    if (readiness?.stale) readiness = await checkProviderHealth(provider);
    if (providerSelect.value !== provider) return;
    if (!readiness?.configured) {
      showToast(providerRecoveryMessage(readiness, "刷新模型"));
      return;
    }
  }
  refreshModelsButton.disabled = true;
  refreshModelsButton.textContent = "读取中";
  setProviderBadge("检查中", "#a26b46");
  try {
    const response = await fetchWithTimeout(`/api/models?provider=${encodeURIComponent(provider)}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("模型列表不可用");
    if (providerSelect.value !== provider) return;
    modelOptions.innerHTML = "";
    payload.models.forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      modelOptions.appendChild(option);
    });
    if (!modelName.value.trim() && payload.models[0]) {
      modelName.value = payload.models[0];
      saveServiceSettings();
    }
    const verified = payload.verified !== false;
    setProviderBadge(verified ? "已连接" : "配置完成", "#6f8b6a");
    if (payload.models.length) {
      showToast(verified ? `已连接并找到 ${payload.models.length} 个模型` : "已读取节点配置（该节点不提供模型列表）");
    } else {
      showToast(verified ? "当前服务未返回模型列表" : "配置已读取，当前端点不提供模型列表");
    }
  } catch (error) {
    if (providerSelect.value !== provider) return;
    setProviderBadge(error?.name === "AbortError" ? "连接超时" : "连接失败", "#a26b46");
    showToast(error?.name === "AbortError" ? "读取模型列表超时，请检查服务是否启动" : "无法读取模型列表，请检查服务配置");
  } finally {
    refreshModelsButton.disabled = false;
    refreshModelsButton.textContent = "刷新模型";
  }
}

async function testProviderConnection() {
  const provider = providerSelect.value;
  const model = modelName.value.trim();
  if (!model) {
    showToast("请先填写模型名称");
    modelName.focus();
    return;
  }
  let readiness = await checkProviderHealth(provider);
  if (readiness?.stale) readiness = await checkProviderHealth(provider);
  if (providerSelect.value !== provider || modelName.value.trim() !== model) return;
  if (!readiness?.configured) {
    showToast(providerRecoveryMessage(readiness, "测试连接"));
    return;
  }
  saveServiceSettings();
  testProviderButton.disabled = true;
  testProviderButton.textContent = "测试中";
  setProviderBadge("测试中", "#a26b46");
  try {
    const response = await fetchWithTimeout("/api/probe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider, model }),
    }, clientModelRequestTimeout());
    const payload = await response.json();
    if (!response.ok || !payload.ok) {
      const error = new Error(payload.error || "模型服务测试失败");
      error.userMessage = payload.error || "模型服务测试失败";
      throw error;
    }
    if (providerSelect.value === provider && modelName.value.trim() === model) {
      setProviderBadge("已连接", "#6f8b6a");
    }
    showToast(`连接成功：${payload.model || model}`);
  } catch (error) {
    if (providerSelect.value === provider && modelName.value.trim() === model) {
      setProviderBadge(error?.name === "AbortError" ? "连接超时" : "连接失败", "#a26b46");
    }
    showToast(error?.name === "AbortError" ? "连接测试超时，请检查服务状态" : (error?.userMessage || "模型服务测试失败"));
  } finally {
    testProviderButton.disabled = false;
    testProviderButton.textContent = "测试连接";
  }
}

function openSummaryPreview(summary, projectId, messageCount, messageThrough = "") {
  const current = workSummary.value.trim();
  pendingSummaryPreview = { summary, projectId, messageCount, messageThrough };
  summaryPreviewStats.textContent = `当前摘要 ${current.length} 字 · 新摘要 ${summary.length} 字 · 覆盖 ${messageCount} 条消息`;
  currentSummaryPreview.textContent = current || "暂无摘要";
  nextSummaryPreview.textContent = summary || "暂无摘要";
  summaryPreviewDialog.showModal();
}

function applySummaryPreview() {
  const pending = pendingSummaryPreview;
  if (!pending) {
    summaryPreviewDialog.close();
    return;
  }
  const project = getActiveProject();
  const currentMessageCount = getConversationMessageCount(project);
  const currentMessageThrough = highlightKey(getConversationForDisplay(project).at(-1));
  if (activeProjectId !== pending.projectId || currentMessageCount !== pending.messageCount || currentMessageThrough !== pending.messageThrough) {
    pendingSummaryPreview = null;
    summaryPreviewDialog.close();
    showToast(activeProjectId !== pending.projectId ? "当前项目已切换，摘要未写入" : "预览生成后已有新剧情，摘要未写入；请重新提炼");
    return;
  }
  workSummary.value = pending.summary;
  project.summaryMessageCount = pending.messageCount;
  project.summaryUpdatedAt = Date.now();
  renderSummaryFreshness();
  setProviderBadge("已连接", "#6f8b6a");
  saveWorkspace();
  pendingSummaryPreview = null;
  summaryPreviewDialog.close();
  showToast("剧情摘要已更新");
}

async function saveSummaryPreviewToMemory() {
  const pending = pendingSummaryPreview;
  if (!pending) {
    summaryPreviewDialog.close();
    return;
  }
  const project = getActiveProject();
  const currentMessageCount = getConversationMessageCount(project);
  const currentMessageThrough = highlightKey(getConversationForDisplay(project).at(-1));
  if (activeProjectId !== pending.projectId || currentMessageCount !== pending.messageCount || currentMessageThrough !== pending.messageThrough) {
    pendingSummaryPreview = null;
    summaryPreviewDialog.close();
    showToast(activeProjectId !== pending.projectId ? "当前项目已切换，记忆未写入" : "预览生成后已有新剧情，记忆未写入；请重新提炼");
    return;
  }
  const saved = await saveGeneratedMemoryNote(
    `剧情摘要 · ${project.context.title || "当前项目"}`,
   pending.summary,
   saveSummaryToMemoryButton,
   "剧情摘要已写入小说空间记忆",
    "summary",
    project.context.title || "当前项目",
 );
  if (saved) {
    pendingSummaryPreview = null;
    summaryPreviewDialog.close();
  }
}

function openSceneOutcomePreview(outcome, projectId, beatId, outcomeThrough) {
  const project = getActiveProject();
  const beat = project?.beats.find((item) => item.id === beatId);
  if (!beat) return;
  const current = beat.outcome?.trim() || "";
  pendingSceneOutcomePreview = { outcome, projectId, beatId, outcomeThrough };
  sceneOutcomePreviewStats.textContent = `当前记录 ${current.length} 字 · 新结果 ${outcome.length} 字 · 场景「${beat.title}」`;
  currentSceneOutcomePreview.textContent = current || "暂无本幕结果";
  nextSceneOutcomePreview.textContent = outcome || "暂无本幕结果";
  sceneOutcomePreviewDialog.showModal();
}

function applySceneOutcomePreview() {
  const pending = pendingSceneOutcomePreview;
  if (!pending) {
    sceneOutcomePreviewDialog.close();
    return;
  }
  const currentProject = getActiveProject();
  const currentMessageThrough = highlightKey(getConversationForDisplay(currentProject).at(-1));
  if (activeProjectId !== pending.projectId || currentMessageThrough !== pending.outcomeThrough) {
    pendingSceneOutcomePreview = null;
    sceneOutcomePreviewDialog.close();
    showToast(activeProjectId !== pending.projectId ? "当前项目已切换，本幕结果未写入" : "预览生成后已有新剧情，本幕结果未写入；请重新提炼");
    return;
  }
  const project = currentProject;
  const beat = project?.beats.find((item) => item.id === pending.beatId);
  if (!beat) {
    pendingSceneOutcomePreview = null;
    sceneOutcomePreviewDialog.close();
    showToast("当前场景已不存在，本幕结果未写入");
    return;
  }
  beat.outcome = pending.outcome;
  beat.outcomeThrough = pending.outcomeThrough;
  beatOutcomeInput.value = beat.outcome;
  setProviderBadge("已连接", "#6f8b6a");
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  pendingSceneOutcomePreview = null;
  sceneOutcomePreviewDialog.close();
  showToast("本幕结果已更新");
}

async function saveSceneOutcomePreviewToMemory() {
  const pending = pendingSceneOutcomePreview;
  if (!pending) {
    sceneOutcomePreviewDialog.close();
    return;
  }
  const project = getActiveProject();
  const beat = project?.beats.find((item) => item.id === pending.beatId);
  const currentMessageThrough = highlightKey(getConversationForDisplay(project).at(-1));
  if (activeProjectId !== pending.projectId || !beat || currentMessageThrough !== pending.outcomeThrough) {
    pendingSceneOutcomePreview = null;
    sceneOutcomePreviewDialog.close();
    showToast(activeProjectId !== pending.projectId ? "当前项目或场景已切换，记忆未写入" : "预览生成后已有新剧情，记忆未写入；请重新提炼");
    return;
  }
  const saved = await saveGeneratedMemoryNote(
    `本幕结果 · ${beat.title}`,
   pending.outcome,
   saveSceneOutcomeToMemoryButton,
   "本幕结果已写入小说空间记忆",
    "scene_outcome",
    beat.title,
 );
  if (saved) {
    pendingSceneOutcomePreview = null;
    sceneOutcomePreviewDialog.close();
  }
}

async function summarizeConversation() {
  if (isSummarizing) {
    showToast("摘要正在提炼中，请稍候");
    return;
  }
  if (preventWorkspaceMutation("提炼摘要")) return;
  if (getConversationMessageCount() < 2) {
    showToast("先完成一轮对话，再提炼剧情摘要");
    return;
  }
  if (!await ensureProviderReadyForRequest("提炼剧情摘要")) return;
  if (!await ensureProviderDataConsent("提炼剧情摘要")) return;
  saveServiceSettings();
  const provider = providerSelect.value;
  const model = modelName.value.trim();
  const projectId = activeProjectId;
  const spaceId = getCurrentNovelSpaceId();
  isSummarizing = true;
  generateSummaryButton.disabled = true;
  generateSummaryButton.textContent = "提炼中";
  try {
    const response = await fetchWithTimeout("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider,
        model,
        retrieval_strategy: getRetrievalStrategy(),
        context: getContext(),
        messages: getModelMessages({ fullHistory: true }),
        novel_space_id: getCurrentNovelSpaceId(),
      }),
    }, clientModelRequestTimeout(summaryRequestTimeout));
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.summary) {
      const error = new Error(payload.error || "剧情摘要生成失败");
      error.userMessage = payload.error || "剧情摘要生成失败";
      throw error;
    }
    if (!workspaceRequestStillCurrent(projectId, spaceId)) {
      showToast("当前项目已切换，摘要未写入");
      return;
    }
    const project = getActiveProject();
    setProviderBadge("已连接", "#6f8b6a");
    openSummaryPreview(
      payload.summary.slice(0, 2000),
      projectId,
      getConversationMessageCount(project),
      highlightKey(getConversationForDisplay(project).at(-1)),
    );
  } catch (error) {
    showToast(error?.name === "AbortError" ? "摘要生成超时，请检查服务状态" : (error?.userMessage || "剧情摘要生成失败"));
  } finally {
    isSummarizing = false;
    generateSummaryButton.disabled = false;
    generateSummaryButton.textContent = "提炼摘要";
  }
}

async function summarizeCurrentSceneOutcome() {
  if (isSummarizing) {
    showToast("摘要正在提炼中，请稍候");
    return;
  }
  if (preventWorkspaceMutation("提炼本幕结果")) return;
  const project = getActiveProject();
  const beat = getActiveSceneBeat(project);
  if (!beat) {
    showToast("先在场景计划中设定当前场景");
    return;
  }
  if (getConversationMessageCount() < 1) {
    showToast("先完成一轮对话，再提炼本幕结果");
    return;
  }
  if (!await ensureProviderReadyForRequest("提炼本幕结果")) return;
  if (!await ensureProviderDataConsent("提炼本幕结果")) return;
  saveServiceSettings();
  const projectId = activeProjectId;
  const spaceId = getCurrentNovelSpaceId();
  const beatId = beat.id;
  const provider = providerSelect.value;
  const model = modelName.value.trim();
  isSummarizing = true;
  generateBeatOutcomeButton.disabled = true;
  generateBeatOutcomeButton.textContent = "提炼中";
  try {
    const response = await fetchWithTimeout("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider,
        model,
        summary_target: "scene",
        retrieval_strategy: getRetrievalStrategy(),
        context: getContext(),
        messages: getModelMessages({ fullHistory: true }),
        novel_space_id: getCurrentNovelSpaceId(),
      }),
    }, clientModelRequestTimeout(summaryRequestTimeout));
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.summary) {
      const error = new Error(payload.error || "本幕结果生成失败");
      error.userMessage = payload.error || "本幕结果生成失败";
      throw error;
    }
    const currentProject = getActiveProject();
    const currentBeat = currentProject?.beats.find((item) => item.id === beatId);
    if (!workspaceRequestStillCurrent(projectId, spaceId) || !currentBeat) {
      showToast("当前项目或场景已切换，结果未写入");
      return;
    }
    const nextOutcome = payload.summary.slice(0, 600);
    const outcomeThrough = highlightKey(getConversationForDisplay(currentProject).at(-1));
    setProviderBadge("已连接", "#6f8b6a");
    openSceneOutcomePreview(nextOutcome, projectId, beatId, outcomeThrough);
  } catch (error) {
    showToast(error?.name === "AbortError" ? "本幕结果提炼超时，请检查服务状态" : (error?.userMessage || "本幕结果提炼失败"));
  } finally {
    isSummarizing = false;
    generateBeatOutcomeButton.disabled = false;
    generateBeatOutcomeButton.textContent = "提炼本幕";
  }
}

async function requestModelReply() {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      provider: providerSelect.value,
      model: modelName.value.trim(),
      mode: selectedMode,
      creativity: creativitySelect.value,
      response_length: responseLengthSelect.value,
      character: selectedCharacter,
      context: getContext(),
      messages: getModelMessages(),
      source_query: getSourceQuery(),
      novel_space_id: getCurrentNovelSpaceId(),
      retrieval_strategy: getRetrievalStrategy(),
    }),
  });
  const payload = await response.json();
  if (!response.ok || !payload.ok || !payload.text) {
    const error = new Error(payload.error || "模型服务请求失败");
    error.userMessage = payload.error || "模型服务请求失败";
    throw error;
  }
  setProviderBadge("已连接", "#6f8b6a");
  return payload.text;
}

async function requestStreamReply(onDelta, character = selectedCharacter, onStart = null, sourceQuery = getSourceQuery(), onDone = null, responseLengthOverride = "", modeOverride = "", qualityRetryCodes = []) {
  const controller = new AbortController();
  streamController = controller;
  const response = await withAbortTimeout(fetch("/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: controller.signal,
    body: JSON.stringify({
      provider: providerSelect.value,
      model: modelName.value.trim(),
      mode: modeOverride || selectedMode,
      creativity: creativitySelect.value,
      response_length: responseLengthOverride || responseLengthSelect.value,
      character,
      context: getContext(),
      messages: getModelMessages(),
      source_query: sourceQuery,
      novel_space_id: getCurrentNovelSpaceId(),
      retrieval_strategy: getRetrievalStrategy(),
      quality_retry_codes: Array.isArray(qualityRetryCodes) ? qualityRetryCodes.slice(0, 4) : [],
    }),
  }), controller, streamIdleTimeout, "模型长时间没有响应，请检查服务状态");
  if (!response.ok || !response.body) {
    let message = "流式服务不可用";
    try {
      const payload = await response.json();
      message = payload.error || message;
    } catch {
      // Keep the generic message when the server does not return JSON.
    }
    const error = new Error(message);
    error.userMessage = message;
    throw error;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let answer = "";
  let finished = false;

  while (!finished) {
    const { value, done } = await withAbortTimeout(
      reader.read(),
      controller,
      streamIdleTimeout,
      "模型输出长时间没有更新，请检查服务状态",
    );
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    const events = buffer.split("\n\n");
    buffer = events.pop() || "";

    for (const event of events) {
      const line = event.split("\n").find((item) => item.startsWith("data: "));
      if (!line) continue;
      const payload = JSON.parse(line.slice(6));
      if (payload.type === "start") {
        setProviderBadge("已连接", "#6f8b6a");
        if (typeof onStart === "function") onStart(payload);
      } else if (payload.type === "delta") {
        answer += payload.delta || "";
        onDelta(payload.delta || "");
      } else if (payload.type === "error") {
        const error = new Error(payload.error || "模型流式响应中断");
        error.userMessage = payload.error || "模型流式响应中断";
        throw error;
      } else if (payload.type === "done") {
        finished = true;
        if (typeof onDone === "function") onDone(payload);
      }
    }
    if (done) finished = true;
  }

  if (!answer.trim()) throw new Error("模型没有返回文本");
  streamController = null;
  return answer.trim();
}

function fallbackReply(mode = selectedMode) {
  const task = mode === "问答" ? "原作回答" : mode === "改写" ? "改写内容" : mode === "独白" ? "角色独白" : "续写内容";
  return `模型服务暂时不可用，本次${task}未生成。你的提问和本机原作检索依据已保留；请检查模型设置后点击“重试”。`;
}

const lowInformationSourceQueries = new Set([
  "继续", "继续写", "继续写下去", "接着写", "往下写", "下一段", "然后呢", "具体呢",
  "为什么", "还有吗", "展开说说", "再说说", "再来一点",
]);

function isLowInformationSourceQuery(value) {
  const normalized = String(value || "").trim().toLowerCase().replace(/[^\w\u4e00-\u9fff]/g, "");
  return !normalized || lowInformationSourceQueries.has(normalized);
}

function sourceQueryAllowsMessage(item, mode = selectedMode) {
  const itemMode = normalizeMessageMode(item?.mode);
  if (mode === "问答") return itemMode === "问答";
  return itemMode !== "问答";
}

function getSourceUserQueries(primaryQuery = "", mode = selectedMode) {
  const latest = String(primaryQuery || "").trim();
  if (!latest || !isLowInformationSourceQuery(latest)) return latest ? [latest] : [];
  const previous = [...conversationHistory]
    .reverse()
    .find((item) => sourceQueryAllowsMessage(item, mode) && item.role === "user" && String(item.content || "").trim() && !isLowInformationSourceQuery(item.content))
    ?.content || "";
  return [latest, previous.trim()].filter(Boolean);
}

function composeSourceQuery(primaryQuery = "", mode = selectedMode) {
  const project = getActiveProject();
  const activeBeat = getActiveSceneBeat(project);
  const contextParts = mode === "问答"
    ? []
    : [project?.context?.chapter, activeBeat?.title, activeBeat?.goal];
  return [
    ...getSourceUserQueries(primaryQuery, mode),
    ...contextParts,
  ].filter(Boolean).join(" ").slice(0, 600);
}

function getSourceQuery(mode = selectedMode) {
  const latestUser = [...conversationHistory]
    .reverse()
    .find((item) => sourceQueryAllowsMessage(item, mode) && item.role === "user")?.content || "";
  return composeSourceQuery(latestUser, mode);
}

function getDraftSourceQuery() {
  const draft = messageInput.value.trim();
  if (draft) return composeSourceQuery(draft);
  return sourceQueryForHistoryIndex(null);
}

function ensureSourceReadyForMode(mode = selectedMode) {
  if (mode !== "问答") return true;
  const space = novelSpaceForProject();
  const readiness = getNovelSpaceReadiness(space);
  if (readiness.canQuery) return true;
  const novelName = getCurrentNovelDisplayName();
  const message = readiness.filter === "empty"
    ? `「${novelName}」还没有提取出可检索正文，请先检查原文件或重新上传。`
    : `「${novelName}」原文暂不可用，请先在小说库恢复原文。`;
  showToast(message);
  setWorkspaceView("library", { announce: false, focus: true });
  return false;
}

async function generateAssistantReply(assistantMessage, character = selectedCharacter, responseLengthOverride = "", modeOverride = "", qualityRetryCodes = []) {
  setSending(true);
  delete assistantMessage.bubble.dataset.source;
  const effectiveMode = normalizeMessageMode(modeOverride) || selectedMode;
  const sourceQuery = getSourceQuery(effectiveMode);
  assistantMessage.sourceQuery = sourceQuery;
  let reply = "";
  try {
    reply = await requestStreamReply((delta) => {
      const currentText = assistantMessage.bubble.dataset.rawText || "";
      setAssistantBubbleText(assistantMessage.bubble, `${currentText}${delta}`);
      messages.scrollTop = messages.scrollHeight;
    }, character, (metadata) => {
      const references = normalizeSourceReferences(metadata?.source_references);
      const effectiveSourceQuery = safeText(metadata?.source_query, sourceQuery, 600);
      const effectiveSourceQuality = normalizeSourceQuality(metadata?.source_quality);
      const effectiveSourceAnswerCoverage = normalizeSourceAnswerCoverage(metadata?.source_answer_coverage);
      assistantMessage.sourceQuery = effectiveSourceQuery;
      assistantMessage.sourceQuality = effectiveSourceQuality;
      assistantMessage.sourceAnswerCoverage = effectiveSourceAnswerCoverage;
      assistantMessage.sourceRefs = references;
      assistantMessage.renderSourceReferences(references, effectiveSourceQuery, effectiveSourceQuality, effectiveSourceAnswerCoverage);
    }, sourceQuery, (metadata) => {
      if (metadata?.truncated) {
        assistantMessage.truncated = true;
        appendTruncatedBadge(assistantMessage.meta);
        appendExpandedRetryAction(assistantMessage.actions, assistantMessage.historyIndex);
      }
      if (metadata?.source_citation_status) {
        assistantMessage.sourceCitationStatus = normalizeCitationStatus(metadata.source_citation_status);
        assistantMessage.sourceCitationsUnverified = Array.isArray(metadata.source_citations_unverified)
          ? metadata.source_citations_unverified.map((value) => safeText(value, "", 120)).filter(Boolean)
          : [];
        if (assistantMessage.sourceCitationStatus === "unverified") {
          appendCitationWarningBadge(assistantMessage.meta, assistantMessage.sourceCitationsUnverified);
        }
        if (assistantMessage.sourceCitationStatus === "verified") {
          appendCitationVerifiedBadge(assistantMessage.meta);
        }
        if (assistantMessage.sourceCitationStatus === "none" && effectiveMode === "问答") {
          appendCitationMissingBadge(assistantMessage.meta);
        }
      }
      const qualityReview = normalizeQualityReview(metadata?.quality_review);
      if (qualityReview) {
        assistantMessage.qualityReview = qualityReview;
        appendQualityReviewBadge(assistantMessage.meta, qualityReview, assistantMessage.historyIndex);
      }
    }, responseLengthOverride, modeOverride, qualityRetryCodes);
  } catch (error) {
    const timedOut = error?.name === "StreamTimeoutError";
    const stopped = error?.name === "AbortError" && !timedOut;
    reply = (assistantMessage.bubble.dataset.rawText || "").trim();
    if (!stopped) setProviderBadge("连接失败", "#a26b46");
    if (!reply && !stopped) {
      reply = fallbackReply(effectiveMode);
      assistantMessage.bubble.dataset.source = "demo";
      appendDemoSourceBadge(assistantMessage.meta);
      setAssistantBubbleText(assistantMessage.bubble, reply);
      const fallbackSource = await fetchSourceMetadataForFallback(sourceQuery, effectiveMode);
      assistantMessage.sourceQuality = fallbackSource.quality;
      assistantMessage.sourceAnswerCoverage = fallbackSource.answerCoverage;
      assistantMessage.sourceRefs = fallbackSource.references;
      assistantMessage.renderSourceReferences(fallbackSource.references, sourceQuery, fallbackSource.quality, fallbackSource.answerCoverage);
      showFailedGenerationActions(assistantMessage.actions, assistantMessage.historyIndex);
      showToast(`${error?.userMessage || "模型服务暂不可用"}，本次内容未生成`);
    } else if (!stopped && reply) {
      showToast(`${error?.userMessage || "模型流式响应中断"}，已保留当前内容`);
    } else if (stopped && !reply) {
      reply = "（生成已停止）";
      setAssistantBubbleText(assistantMessage.bubble, reply);
      }
  } finally {
    if (assistantMessage.truncated && reply) showToast("回复达到篇幅上限，可能尚未完整收束；可切换“展开”后重试");
    streamController = null;
    setSending(false);
  }
  return reply;
}

async function retryMessage(historyIndex, responseLengthOverride = "", qualityRetryCodes = []) {
  if (preventWorkspaceMutation("重试回复")) return;
  if (!await ensureProviderReadyForRequest("重试模型回复")) return;
  if (!await ensureProviderDataConsent("重试模型回复")) return;
  if (historyIndex !== conversationHistory.length - 1 || conversationHistory.at(-1)?.role !== "assistant") {
    showToast("请先重试最后一条回复");
    return;
  }

  const previousReply = conversationHistory.at(-1);
  const requestProjectId = activeProjectId;
  const requestSpaceId = getCurrentNovelSpaceId();
  const responseMode = normalizeMessageMode(previousReply.mode) || selectedMode;
  const speaker = previousReply.name || selectedCharacter.name;
  const rawPreviousVersions = Array.isArray(previousReply.versions)
    ? previousReply.versions.filter((version) => typeof version === "string" && version.trim())
    : [previousReply.content].filter(Boolean);
  const character = getActiveProject().characters.find((item) => item.name === speaker)
    || { name: speaker, tone: selectedCharacter.tone, details: selectedCharacter.details };
  conversationHistory = conversationHistory.slice(0, -1);
  saveConversation();
  renderConversation();

  const assistantMessage = addMessage({
    role: "assistant",
    name: speaker,
    text: "",
    historyIndex: conversationHistory.length,
    mode: responseMode,
    avatarClass: getAssistantAvatarClass(speaker),
  });
  const reply = await generateAssistantReply(assistantMessage, character, responseLengthOverride, responseMode, qualityRetryCodes);
  if (!workspaceRequestStillCurrent(requestProjectId, requestSpaceId)) {
    showToast("当前项目或小说空间已切换，重试结果未写入");
    return;
  }
  const currentSource = assistantMessage.bubble.dataset.source === "demo" ? "demo" : "";
  let previousSources = Array.isArray(previousReply.sources)
    ? previousReply.sources
    : rawPreviousVersions.map(() => previousReply.source === "demo" ? "demo" : "");
  if (currentSource === "demo" && previousSources.some((source) => source !== "demo")) {
    conversationHistory.push(previousReply);
    saveConversation();
    renderConversation();
    showToast("重试未成功，已保留原回复");
    return;
  }
  const retainedPreviousIndexes = rawPreviousVersions
    .map((_, index) => index)
    .filter((index) => previousSources[index] !== "demo");
  const retainPreviousMetadata = (values) => retainedPreviousIndexes.map((index) => values[index]);
  const previousVersions = retainPreviousMetadata(rawPreviousVersions);
  previousSources = retainPreviousMetadata(previousSources);
  const rawPreviousTruncations = Array.isArray(previousReply.truncations)
    ? previousReply.truncations.map(Boolean)
    : rawPreviousVersions.map(() => Boolean(previousReply.truncated));
  const previousTruncations = retainPreviousMetadata(rawPreviousTruncations);
  const rawPreviousCitationStatuses = Array.isArray(previousReply.sourceCitationStatuses)
    ? previousReply.sourceCitationStatuses.map((value) => normalizeCitationStatus(value))
    : rawPreviousVersions.map(() => normalizeCitationStatus(previousReply.sourceCitationStatus));
  const previousCitationStatuses = retainPreviousMetadata(rawPreviousCitationStatuses);
  const rawPreviousCitationUnverifiedByVersion = Array.isArray(previousReply.sourceCitationsUnverifiedByVersion)
    ? previousReply.sourceCitationsUnverifiedByVersion
    : rawPreviousVersions.map(() => Array.isArray(previousReply.sourceCitationsUnverified)
      ? previousReply.sourceCitationsUnverified
      : []);
  const previousCitationUnverifiedByVersion = retainPreviousMetadata(rawPreviousCitationUnverifiedByVersion);
  const rawPreviousQualityReviewsByVersion = Array.isArray(previousReply.qualityReviewsByVersion)
    ? previousReply.qualityReviewsByVersion.map((value) => normalizeQualityReview(value))
    : rawPreviousVersions.map(() => normalizeQualityReview(previousReply.qualityReview));
  const previousQualityReviewsByVersion = retainPreviousMetadata(rawPreviousQualityReviewsByVersion);
  const rawPreviousQualityRetryCodesByVersion = Array.isArray(previousReply.qualityRetryCodesByVersion)
    ? previousReply.qualityRetryCodesByVersion.map((value) => normalizeQualityRetryCodes(value))
    : rawPreviousVersions.map((_, index) => index === (previousReply.versionIndex ?? rawPreviousVersions.length - 1)
      ? normalizeQualityRetryCodes(previousReply.qualityRetryCodes)
      : []);
  const previousQualityRetryCodesByVersion = retainPreviousMetadata(rawPreviousQualityRetryCodesByVersion);
  const rawPreviousSourceRefsByVersion = Array.isArray(previousReply.sourceRefsByVersion)
    ? previousReply.sourceRefsByVersion
    : rawPreviousVersions.map((_, index) => index === (previousReply.versionIndex ?? rawPreviousVersions.length - 1)
      ? (previousReply.sourceRefs || [])
      : []);
  const previousSourceRefsByVersion = retainPreviousMetadata(rawPreviousSourceRefsByVersion);
  const rawPreviousSourceQueriesByVersion = Array.isArray(previousReply.sourceQueriesByVersion)
    ? previousReply.sourceQueriesByVersion
    : rawPreviousVersions.map((_, index) => index === (previousReply.versionIndex ?? rawPreviousVersions.length - 1)
      ? (previousReply.sourceQuery || "")
      : "");
  const previousSourceQueriesByVersion = retainPreviousMetadata(rawPreviousSourceQueriesByVersion);
  const rawPreviousSourceQualitiesByVersion = Array.isArray(previousReply.sourceQualitiesByVersion)
    ? previousReply.sourceQualitiesByVersion
    : rawPreviousVersions.map((_, index) => index === (previousReply.versionIndex ?? rawPreviousVersions.length - 1)
      ? (previousReply.sourceQuality || "")
      : "");
  const previousSourceQualitiesByVersion = retainPreviousMetadata(rawPreviousSourceQualitiesByVersion);
  const rawPreviousSourceAnswerCoveragesByVersion = Array.isArray(previousReply.sourceAnswerCoveragesByVersion)
    ? previousReply.sourceAnswerCoveragesByVersion
    : rawPreviousVersions.map((_, index) => index === (previousReply.versionIndex ?? rawPreviousVersions.length - 1)
      ? (previousReply.sourceAnswerCoverage || "")
      : "");
  const previousSourceAnswerCoveragesByVersion = retainPreviousMetadata(rawPreviousSourceAnswerCoveragesByVersion);
  const versions = Array.from(new Set([...previousVersions, reply].filter(Boolean)));
  const versionSources = versions.map((version) => {
    if (version === reply) return currentSource;
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 && previousSources[previousIndex] === "demo" ? "demo" : "";
  });
  const versionTruncations = versions.map((version) => {
    if (version === reply) return Boolean(assistantMessage.truncated);
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 && previousTruncations[previousIndex] === true;
  });
  const versionCitationStatuses = versions.map((version) => {
    if (version === reply) return normalizeCitationStatus(assistantMessage.sourceCitationStatus);
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousCitationStatuses[previousIndex] || "" : "";
  });
  const versionCitationUnverifiedByVersion = versions.map((version) => {
    if (version === reply) return assistantMessage.sourceCitationsUnverified || [];
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousCitationUnverifiedByVersion[previousIndex] || [] : [];
  });
  const versionQualityReviewsByVersion = versions.map((version) => {
    if (version === reply) return normalizeQualityReview(assistantMessage.qualityReview);
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousQualityReviewsByVersion[previousIndex] || null : null;
  });
  const normalizedRetryCodes = normalizeQualityRetryCodes(qualityRetryCodes);
  const versionQualityRetryCodesByVersion = versions.map((version) => {
    if (version === reply) return normalizedRetryCodes;
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousQualityRetryCodesByVersion[previousIndex] || [] : [];
  });
  const versionSourceRefsByVersion = versions.map((version) => {
    if (version === reply) return assistantMessage.sourceRefs || [];
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousSourceRefsByVersion[previousIndex] || [] : [];
  });
  const versionSourceQueriesByVersion = versions.map((version) => {
    if (version === reply) return assistantMessage.sourceQuery || "";
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousSourceQueriesByVersion[previousIndex] || "" : "";
  });
  const versionSourceQualitiesByVersion = versions.map((version) => {
    if (version === reply) return normalizeSourceQuality(assistantMessage.sourceQuality);
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousSourceQualitiesByVersion[previousIndex] || "" : "";
  });
  const versionSourceAnswerCoveragesByVersion = versions.map((version) => {
    if (version === reply) return normalizeSourceAnswerCoverage(assistantMessage.sourceAnswerCoverage);
    const previousIndex = previousVersions.indexOf(version);
    return previousIndex >= 0 ? previousSourceAnswerCoveragesByVersion[previousIndex] || "" : "";
  });
  conversationHistory.push({
    role: "assistant",
    name: speaker,
    content: reply,
    ...(responseMode ? { mode: responseMode } : {}),
    ...(currentSource ? { source: currentSource } : {}),
    ...(assistantMessage.sourceRefs?.length ? { sourceRefs: assistantMessage.sourceRefs } : {}),
    ...(assistantMessage.sourceQuery ? { sourceQuery: assistantMessage.sourceQuery } : {}),
    ...(assistantMessage.sourceQuality ? { sourceQuality: assistantMessage.sourceQuality } : {}),
    ...(assistantMessage.sourceAnswerCoverage ? { sourceAnswerCoverage: assistantMessage.sourceAnswerCoverage } : {}),
    ...(assistantMessage.sourceCitationStatus ? { sourceCitationStatus: assistantMessage.sourceCitationStatus } : {}),
    ...(assistantMessage.sourceCitationsUnverified?.length ? { sourceCitationsUnverified: assistantMessage.sourceCitationsUnverified } : {}),
    ...(assistantMessage.qualityReview ? { qualityReview: assistantMessage.qualityReview } : {}),
    ...(normalizedRetryCodes.length ? { qualityRetryCodes: normalizedRetryCodes } : {}),
    ...(versionCitationStatuses.some(Boolean) ? { sourceCitationStatuses: versionCitationStatuses } : {}),
    ...(versionCitationUnverifiedByVersion.some((values) => values.length) ? { sourceCitationsUnverifiedByVersion: versionCitationUnverifiedByVersion } : {}),
    ...(versionQualityReviewsByVersion.some(Boolean) ? { qualityReviewsByVersion: versionQualityReviewsByVersion } : {}),
    ...(versionQualityRetryCodesByVersion.some((codes) => codes.length) ? { qualityRetryCodesByVersion: versionQualityRetryCodesByVersion } : {}),
    ...(versionSourceRefsByVersion.some((references) => references.length) ? { sourceRefsByVersion: versionSourceRefsByVersion } : {}),
    ...(versionSourceQueriesByVersion.some(Boolean) ? { sourceQueriesByVersion: versionSourceQueriesByVersion } : {}),
    ...(versionSourceQualitiesByVersion.some(Boolean) ? { sourceQualitiesByVersion: versionSourceQualitiesByVersion } : {}),
    ...(versionSourceAnswerCoveragesByVersion.some(Boolean) ? { sourceAnswerCoveragesByVersion: versionSourceAnswerCoveragesByVersion } : {}),
    ...(versionTruncations.some(Boolean) ? { truncations: versionTruncations, truncated: Boolean(assistantMessage.truncated) } : {}),
    ...(versions.length > 1 ? { versions, sources: versionSources, versionIndex: versions.indexOf(reply) } : {}),
  });
  saveConversation();
  renderConversation();
  const completedOptimization = qualityOptimizationStatus(normalizedRetryCodes, assistantMessage.qualityReview);
  if (completedOptimization) showToast(`按建议优化完成 · ${completedOptimization.label}`);
}

function selectCharacter(card) {
  document.querySelectorAll(".character-card").forEach((item) => item.classList.remove("active"));
  card.classList.add("active");
  selectedCharacter = {
    name: card.dataset.character,
    tone: card.dataset.tone,
    details: card.dataset.details || "",
  };
  conversationTitle.textContent = getConversationTitle();
  persistActiveProject();
  showToast(`已切换至 ${selectedCharacter.name}`);
}

function createCharacterCard(character) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "character-card";
  card.dataset.character = character.name;
  card.dataset.tone = character.tone;
  card.dataset.details = character.details || "";
  const avatar = document.createElement("span");
  avatar.className = `character-avatar ${character.name === "方源" ? "avatar-dai" : "avatar-bao"}`;
  avatar.textContent = character.name.slice(0, 1);
  const description = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = character.name;
  const subtitle = document.createElement("small");
  subtitle.textContent = character.name === "方源" ? "冷静 · 果断 · 深谋" : (character.tone || "新角色 · 待设定").slice(0, 18);
  description.append(title, subtitle);
  const mark = document.createElement("span");
  mark.className = "selected-mark";
  mark.textContent = "✓";
  card.append(avatar, description, mark);
  card.classList.toggle("active", character.name === selectedCharacter.name);
  card.addEventListener("click", () => selectCharacter(card));
  return card;
}

function renderCharacters() {
  characterList.innerHTML = "";
  getActiveProject().characters.forEach((character) => {
    characterList.appendChild(createCharacterCard(character));
  });
}

function getDisplayedCharacters() {
  return Array.from(characterList.querySelectorAll(".character-card")).map((card) => ({
    name: card.dataset.character || "角色",
    tone: card.dataset.tone || "待设定",
    details: card.dataset.details || "",
  }));
}

function openCharacterEditor(character = null) {
  editingCharacterName = character?.name || null;
  characterDialog.querySelector("#characterDialogTitle").textContent = character ? "编辑角色" : "添加角色";
  characterNameInput.value = character?.name || "";
  characterToneInput.value = character?.tone || "性格与声音，等待你来定义。";
  characterDetailsInput.value = character?.details || "";
  deleteCharacterButton.hidden = !character;
  characterDialog.showModal();
  characterNameInput.focus();
}

function closeCharacterEditor() {
  editingCharacterName = null;
  characterDialog.close();
}

function saveCharacter(event) {
  event.preventDefault();
  const name = characterNameInput.value.trim();
  const tone = characterToneInput.value.trim() || "性格与声音，等待你来定义。";
  const details = characterDetailsInput.value.trim().slice(0, 500);
  if (!name) return;
  const wasEditing = Boolean(editingCharacterName);
  const characters = getDisplayedCharacters();
  const duplicate = characters.some((character) => character.name === name && character.name !== editingCharacterName);
  if (duplicate) {
    showToast("已经有同名角色了");
    return;
  }

  if (editingCharacterName) {
    const target = characters.find((character) => character.name === editingCharacterName);
    if (!target) return;
    target.name = name;
    target.tone = tone;
    target.details = details;
    if (selectedCharacter.name === editingCharacterName) {
      selectedCharacter = { name, tone, details };
    }
  } else {
    characters.push({ name, tone, details });
    selectedCharacter = { name, tone, details };
  }
  getActiveProject().characters = characters;
  renderCharacters();
  conversationTitle.textContent = getConversationTitle();
  persistActiveProject();
  closeCharacterEditor();
  showToast(wasEditing ? `已更新角色 ${name}` : `已添加角色 ${name}`);
}

function deleteCharacter() {
  if (!editingCharacterName) return;
  const characters = getDisplayedCharacters();
  if (characters.length <= 1) {
    showToast("至少保留一个角色");
    return;
  }
  if (!window.confirm(`确定删除「${editingCharacterName}」吗？`)) return;
  const remaining = characters.filter((character) => character.name !== editingCharacterName);
  if (selectedCharacter.name === editingCharacterName) selectedCharacter = { ...remaining[0] };
  getActiveProject().characters = remaining;
  renderCharacters();
  conversationTitle.textContent = getConversationTitle();
  persistActiveProject();
  closeCharacterEditor();
  showToast("角色已删除");
}

function renderCharacterLibrary() {
  if (!characterLibraryList) return;
  const query = characterLibrarySearch?.value.trim().toLocaleLowerCase() || "";
  const matches = characterLibrary.filter((character) => !query || `${character.name} ${character.tone} ${character.details}`.toLocaleLowerCase().includes(query));
  if (characterLibraryCount) {
    characterLibraryCount.textContent = query
      ? `${matches.length} / ${characterLibrary.length} 个`
      : `${characterLibrary.length} / ${maxLibraryCharacters} 个`;
  }
  characterLibraryList.innerHTML = "";
  if (!characterLibrary.length) {
    const empty = document.createElement("p");
    empty.className = "character-library-empty";
    empty.textContent = "角色库还是空的。先保存当前角色，再在其他作品里复用。";
    characterLibraryList.appendChild(empty);
    return;
  }
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "character-library-empty";
    empty.textContent = "没有匹配的角色。试试搜索另一个关键词。";
    characterLibraryList.appendChild(empty);
    return;
  }
  matches.forEach((character) => {
    const card = document.createElement("article");
    card.className = "library-character-card";
    const info = document.createElement("div");
    info.className = "library-character-info";
    const title = document.createElement("strong");
    title.textContent = character.name;
    const tone = document.createElement("small");
    tone.textContent = character.tone;
    const details = document.createElement("p");
    details.textContent = character.details || "暂无人物设定";
    info.append(title, tone, details);
    const actions = document.createElement("div");
    actions.className = "library-character-actions";
    const add = document.createElement("button");
    add.type = "button";
    add.className = "message-action";
    add.textContent = "加入当前项目";
    add.addEventListener("click", () => addLibraryCharacter(character.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "message-action library-character-remove";
    remove.textContent = "删除";
    remove.addEventListener("click", () => deleteLibraryCharacter(character.id));
    actions.append(add, remove);
    card.append(info, actions);
    characterLibraryList.appendChild(card);
  });
}

function openCharacterLibrary() {
  if (preventWorkspaceMutation("查看角色库")) return;
  characterLibrarySearch.value = "";
  renderCharacterLibrary();
  characterLibraryDialog.showModal();
  characterLibrarySearch.focus();
}

function closeCharacterLibrary() {
  characterLibraryDialog.close();
}

function saveSelectedCharacterToLibrary() {
  if (preventWorkspaceMutation("保存角色")) return;
  const character = normalizeLibraryCharacter(selectedCharacter);
  const existingIndex = characterLibrary.findIndex((item) => item.name === character.name);
  if (existingIndex < 0 && characterLibrary.length >= maxLibraryCharacters) {
    showToast(`角色库最多保存 ${maxLibraryCharacters} 个角色`);
    return;
  }
  if (existingIndex >= 0 && !window.confirm(`角色库已有「${character.name}」，要覆盖设定吗？`)) return;
  if (existingIndex >= 0) character.id = characterLibrary[existingIndex].id;
  characterLibrary = [character, ...characterLibrary.filter((item) => item.name !== character.name)].slice(0, maxLibraryCharacters);
  persistCharacterLibrary();
  renderCharacterLibrary();
  showToast(`已保存角色「${character.name}」`);
}

function addLibraryCharacter(characterId) {
  if (preventWorkspaceMutation("加入角色")) return;
  const character = characterLibrary.find((item) => item.id === characterId);
  if (!character) return;
  const project = getActiveProject();
  const characters = getDisplayedCharacters();
  const existing = characters.find((item) => item.name === character.name);
  if (existing) {
    const hasDifferentSetup = existing.tone !== character.tone || (existing.details || "") !== (character.details || "");
    if (hasDifferentSetup) {
      if (!window.confirm(`角色库中的「${character.name}」设定与当前项目不同，要覆盖当前项目角色卡吗？`)) return;
      existing.tone = character.tone;
      existing.details = character.details;
      project.characters = characters;
      selectedCharacter = { ...existing };
      renderCharacters();
      conversationTitle.textContent = getConversationTitle();
      persistActiveProject();
      showToast(`已用角色库设定更新「${character.name}」`);
      return;
    }
    selectedCharacter = { ...existing };
    renderCharacters();
    conversationTitle.textContent = getConversationTitle();
    persistActiveProject();
    showToast(`已切换到角色「${character.name}」`);
    return;
  }
  characters.push({ name: character.name, tone: character.tone, details: character.details });
  project.characters = characters;
  selectedCharacter = { ...character };
  renderCharacters();
  conversationTitle.textContent = getConversationTitle();
  persistActiveProject();
  showToast(`已加入角色「${character.name}」`);
}

function deleteLibraryCharacter(characterId) {
  const character = characterLibrary.find((item) => item.id === characterId);
  if (!character || !window.confirm(`删除角色库中的「${character.name}」吗？不会影响已有项目。`)) return;
  characterLibrary = characterLibrary.filter((item) => item.id !== characterId);
  persistCharacterLibrary();
  renderCharacterLibrary();
  showToast("角色库条目已删除");
}

function fillPrompt(text) {
  messageInput.value = text;
  messageInput.dispatchEvent(new Event("input", { bubbles: true }));
  messageInput.focus();
  showToast("灵感已放入输入框");
}

function createCustomPromptCard(prompt, index) {
  const card = document.createElement("div");
  card.className = "prompt-card custom-prompt-card";
  const main = document.createElement("button");
  main.type = "button";
  main.className = "prompt-card-main";
  const number = document.createElement("span");
  number.className = "prompt-number";
  number.textContent = "✦";
  const copy = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = prompt.title;
  const description = document.createElement("small");
  description.textContent = prompt.text.length > 28 ? `${prompt.text.slice(0, 28)}…` : prompt.text;
  copy.append(title, description);
  const arrow = document.createElement("span");
  arrow.className = "prompt-arrow";
  arrow.textContent = "↗";
  main.append(number, copy, arrow);
  main.addEventListener("click", () => fillPrompt(prompt.text));
  const actions = document.createElement("span");
  actions.className = "prompt-card-actions";
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "prompt-edit";
  edit.textContent = "✎";
  edit.setAttribute("aria-label", `编辑灵感 ${prompt.title}`);
  edit.addEventListener("click", () => openPromptEditor(index));
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "prompt-remove";
  remove.textContent = "×";
  remove.setAttribute("aria-label", `删除灵感 ${prompt.title}`);
  remove.addEventListener("click", () => deleteCustomPrompt(index));
  actions.append(edit, remove);
  card.append(main, actions);
  return card;
}

function renderCustomPrompts() {
  if (!promptList) return;
  promptList.querySelectorAll(".custom-prompt-card").forEach((card) => card.remove());
  getActiveProject().prompts.forEach((prompt, index) => {
    promptList.appendChild(createCustomPromptCard(prompt, index));
  });
}

function renderModePrompts() {
  if (!promptList) return;
  const prompts = getModePromptSet(selectedMode);
  const cards = Array.from(promptList.querySelectorAll(".prompt-card:not(.custom-prompt-card)"));
  cards.slice(0, prompts.length).forEach((card, index) => {
    const prompt = prompts[index];
    card.dataset.prompt = prompt.prompt;
    const number = card.querySelector(".prompt-number");
    const title = card.querySelector("strong");
    const subtitle = card.querySelector("small");
    if (number) number.textContent = String(index + 1).padStart(2, "0");
    if (title) title.textContent = prompt.title;
    if (subtitle) subtitle.textContent = prompt.subtitle;
  });
}

function openPromptEditor(index = null) {
  editingPromptIndex = Number.isInteger(index) ? index : null;
  const prompt = editingPromptIndex === null ? null : getActiveProject().prompts[editingPromptIndex];
  promptDialogTitle.textContent = prompt ? "编辑灵感" : "添加灵感";
  promptTitleInput.value = prompt?.title || "";
  promptTextInput.value = prompt?.text || "";
  savePromptToLibraryCheckbox.checked = false;
  promptDialog.showModal();
  promptTitleInput.focus();
}

function closePromptEditor() {
  editingPromptIndex = null;
  savePromptToLibraryCheckbox.checked = false;
  promptDialog.close();
}

function savePromptToLibrary(title, text, previousText = "") {
  const normalized = normalizeLibraryPrompt({ title, text });
  if (!normalized.text) return false;
  const existingIndex = promptLibrary.findIndex((item) => item.text === normalized.text);
  const previousIndex = previousText
    ? promptLibrary.findIndex((item) => item.text === previousText)
    : -1;
  if (existingIndex >= 0) normalized.id = promptLibrary[existingIndex].id;
  else if (previousIndex >= 0) normalized.id = promptLibrary[previousIndex].id;
  if (existingIndex < 0 && previousIndex < 0 && promptLibrary.length >= maxLibraryPrompts) {
    showToast(`灵感库最多保存 ${maxLibraryPrompts} 条`);
    return false;
  }
  promptLibrary = [normalized, ...promptLibrary.filter((item) => item.text !== normalized.text && item.text !== previousText)].slice(0, maxLibraryPrompts);
  persistPromptLibrary();
  return true;
}

function savePrompt(event) {
  event.preventDefault();
  const title = safeText(promptTitleInput.value, "", 32);
  const text = safeText(promptTextInput.value, "", 500);
  if (!title || !text) return;
  const project = getActiveProject();
  const saveToLibrary = savePromptToLibraryCheckbox.checked;
  if (editingPromptIndex !== null) {
    const prompt = project.prompts[editingPromptIndex];
    if (!prompt) return;
    const previousText = prompt.text;
    prompt.title = title;
    prompt.text = text;
    if (saveToLibrary) savePromptToLibrary(title, text, previousText);
    persistActiveProject();
    renderCustomPrompts();
    closePromptEditor();
    showToast(`已更新灵感「${title}」`);
    return;
  }
  if (project.prompts.length >= maxPrompts) {
    if (saveToLibrary) savePromptToLibrary(title, text);
    closePromptEditor();
    showToast(`自定义灵感最多保存 ${maxPrompts} 条`);
    return;
  }
  project.prompts.push({
    id: `prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    text,
  });
  if (saveToLibrary) savePromptToLibrary(title, text);
  persistActiveProject();
  renderCustomPrompts();
  closePromptEditor();
  showToast(`已保存灵感「${title}」`);
}

function deleteCustomPrompt(index) {
  const project = getActiveProject();
  const prompt = project.prompts[index];
  if (!prompt || !window.confirm(`确定删除「${prompt.title}」吗？`)) return;
  project.prompts.splice(index, 1);
  persistActiveProject();
  renderCustomPrompts();
  showToast("灵感已删除");
}

function renderPromptLibrary() {
  if (!promptLibraryList) return;
  const query = promptLibrarySearch?.value.trim().toLocaleLowerCase() || "";
  const matches = promptLibrary.filter((prompt) => !query || `${prompt.title} ${prompt.text}`.toLocaleLowerCase().includes(query));
  if (promptLibraryCount) {
    promptLibraryCount.textContent = query
      ? `${matches.length} / ${promptLibrary.length} 条`
      : `${promptLibrary.length} / ${maxLibraryPrompts} 条`;
  }
  promptLibraryList.innerHTML = "";
  if (!promptLibrary.length) {
    const empty = document.createElement("p");
    empty.className = "prompt-library-empty";
    empty.textContent = "灵感库还是空的。添加灵感时勾选“同时保存到跨项目灵感库”。";
    promptLibraryList.appendChild(empty);
    return;
  }
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "prompt-library-empty";
    empty.textContent = "没有匹配的灵感。试试搜索另一个关键词。";
    promptLibraryList.appendChild(empty);
    return;
  }
  matches.forEach((prompt) => {
    const card = document.createElement("article");
    card.className = "library-prompt-card";
    const main = document.createElement("div");
    main.className = "library-prompt-main";
    const title = document.createElement("strong");
    title.textContent = prompt.title;
    const text = document.createElement("p");
    text.textContent = prompt.text;
    main.append(title, text);
    const actions = document.createElement("div");
    actions.className = "library-prompt-actions";
    const add = document.createElement("button");
    add.type = "button";
    add.className = "message-action";
    add.textContent = "加入当前项目";
    add.addEventListener("click", () => addLibraryPrompt(prompt.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "message-action library-prompt-remove";
    remove.textContent = "删除";
    remove.addEventListener("click", () => deleteLibraryPrompt(prompt.id));
    actions.append(add, remove);
    card.append(main, actions);
    promptLibraryList.appendChild(card);
  });
}

function openPromptLibrary() {
  if (preventWorkspaceMutation("查看灵感库")) return;
  promptLibrarySearch.value = "";
  renderPromptLibrary();
  promptLibraryDialog.showModal();
  promptLibrarySearch.focus();
}

function closePromptLibrary() {
  promptLibraryDialog.close();
}

function addLibraryPrompt(promptId) {
  if (preventWorkspaceMutation("加入灵感")) return;
  const prompt = promptLibrary.find((item) => item.id === promptId);
  const project = getActiveProject();
  if (!prompt || !project) return;
  if (project.prompts.length >= maxPrompts) {
    showToast(`当前项目自定义灵感最多保存 ${maxPrompts} 条`);
    return;
  }
  if (project.prompts.some((item) => item.text === prompt.text)) {
    showToast("当前项目已经有这条灵感");
    return;
  }
  project.prompts.push({
    id: `prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: prompt.title,
    text: prompt.text,
  });
  persistActiveProject();
  renderCustomPrompts();
  showToast(`已加入灵感「${prompt.title}」`);
}

function deleteLibraryPrompt(promptId) {
  const prompt = promptLibrary.find((item) => item.id === promptId);
  if (!prompt || !window.confirm(`删除灵感库中的「${prompt.title}」吗？不会影响已有项目。`)) return;
  promptLibrary = promptLibrary.filter((item) => item.id !== promptId);
  persistPromptLibrary();
  renderPromptLibrary();
  showToast("灵感库条目已删除");
}

workspaceNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    setWorkspaceView(item.dataset.workspaceView, { announce: true, focus: true });
  });
  item.addEventListener("keydown", (event) => {
    const navigationKeys = new Set(["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"]);
    if (!navigationKeys.has(event.key)) return;
    event.preventDefault();
    const currentIndex = workspaceNavItems.indexOf(item);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? workspaceNavItems.length - 1
        : (currentIndex + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) + workspaceNavItems.length) % workspaceNavItems.length;
    const nextItem = workspaceNavItems[nextIndex];
    if (!nextItem) return;
    setWorkspaceView(nextItem.dataset.workspaceView, { announce: true, focus: false });
    nextItem.focus();
  });
});

document.querySelectorAll("[data-atlas-task]").forEach((button) => {
  button.addEventListener("click", () => openWorkspaceTask(button.dataset.atlasTask));
});

document.querySelectorAll("[data-atlas-view]").forEach((button) => {
  button.addEventListener("click", () => setWorkspaceView(button.dataset.atlasView, { announce: true, focus: true }));
});

atlasMotionToggle?.addEventListener("click", () => {
  const paused = document.body.classList.toggle("atlas-motion-paused");
  atlasMotionToggle.textContent = paused ? "●" : "◌";
  atlasMotionToggle.title = paused ? "恢复背景动效" : "暂停背景动效";
  atlasMotionToggle.setAttribute("aria-label", atlasMotionToggle.title);
  atlasMotionToggle.setAttribute("aria-pressed", String(paused));
});

workspaceGuideProgress?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-progress-key]");
  if (!action || !workspaceGuideProgress.contains(action)) return;
  openWorkspaceProgressStep(action.dataset.progressKey);
});

window.addEventListener("hashchange", syncWorkspaceViewFromUrl);
window.addEventListener("popstate", syncWorkspaceViewFromUrl);

document.querySelectorAll("[data-return-workbench]").forEach((button) => {
  button.addEventListener("click", () => setWorkspaceView("workbench", { announce: true, focus: true }));
});

novelUploadInput?.addEventListener("change", () => {
  novelUploadRetrySpaceId = "";
  uploadNovelFile(novelUploadInput.files);
});
document.querySelectorAll("[data-novel-dropzone]").forEach((dropzone) => {
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    dropzone.classList.add("is-dragging");
  });
  dropzone.addEventListener("dragleave", (event) => {
    if (!dropzone.contains(event.relatedTarget)) dropzone.classList.remove("is-dragging");
  });
  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("is-dragging");
    novelUploadRetrySpaceId = "";
    uploadNovelFile(event.dataTransfer.files);
  });
});
refreshNovelLibraryButton?.addEventListener("click", () => loadNovelSpacesFromServer({ announce: true }).finally(() => resumeNovelUploadJob()));
novelLibrarySearchInput?.addEventListener("input", renderNovelSpaceLibrary);
novelLibraryStatusFilter?.addEventListener("change", renderNovelSpaceLibrary);
clearNovelLibraryFiltersButton?.addEventListener("click", () => {
  if (novelLibrarySearchInput) novelLibrarySearchInput.value = "";
  if (novelLibraryStatusFilter) novelLibraryStatusFilter.value = "all";
  renderNovelSpaceLibrary();
});
exportNovelSpaceConfigButton?.addEventListener("click", exportNovelSpaceConfig);
novelSpaceConfigInput?.addEventListener("change", importNovelSpaceConfig);
saveNovelMemoryButton?.addEventListener("click", saveNovelMemory);
previewNovelMemoryButton?.addEventListener("click", previewNovelMemory);
memoryLayerTabs.forEach((button) => {
  button.addEventListener("click", () => setMemoryLayer(button.dataset.memoryLayer, { focus: true }));
});
sourceKnowledgeSearchInput?.addEventListener("input", () => {
  window.clearTimeout(sourceKnowledgeSearchTimer);
  sourceKnowledgeSearchTimer = window.setTimeout(() => loadSourceKnowledge(getCurrentNovelSpaceId()), 260);
});
modelMemoryCategory?.addEventListener("change", () => {
  activeModelMemoryCategory = modelMemoryCategory.value || "all";
  loadReviewedMemoryPreview(getCurrentNovelSpaceId());
});
modelMemoryChapter?.addEventListener("input", () => {
  activeModelMemoryChapter = modelMemoryChapter.value.trim().slice(0, 160);
  window.clearTimeout(modelMemoryFilterTimer);
  modelMemoryFilterTimer = window.setTimeout(() => loadReviewedMemoryPreview(getCurrentNovelSpaceId()), 260);
});
clearModelMemoryFiltersButton?.addEventListener("click", () => {
  activeModelMemoryCategory = "all";
  activeModelMemoryChapter = "";
  if (modelMemoryCategory) modelMemoryCategory.value = "all";
  if (modelMemoryChapter) modelMemoryChapter.value = "";
  loadReviewedMemoryPreview(getCurrentNovelSpaceId());
});
sourceKnowledgeSummary?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-source-knowledge-category]");
  if (!button || !sourceKnowledgeSummary.contains(button)) return;
  activeSourceKnowledgeCategory = button.dataset.sourceKnowledgeCategory || "all";
  loadSourceKnowledge(getCurrentNovelSpaceId());
});
startReviewedMemoryBuildButton?.addEventListener("click", () => startReviewedMemoryBuild("pilot"));
startFullReviewedMemoryBuildButton?.addEventListener("click", () => startReviewedMemoryBuild("full"));
cancelReviewedMemoryBuildButton?.addEventListener("click", cancelReviewedMemoryBuild);
promoteReviewedMemoryBuildButton?.addEventListener("click", promoteReviewedMemoryBuild);
openNovelMemoryComposerButton?.addEventListener("click", () => {
  if (novelMemoryComposer?.hidden) {
    if (!hasNovelMemoryDraft()) resetNovelMemoryEditor();
    setNovelMemoryComposerOpen(true, { focus: true });
    return;
  }
  closeNovelMemoryComposer();
});
closeNovelMemoryComposerButton?.addEventListener("click", () => closeNovelMemoryComposer());
cancelNovelMemoryEditButton?.addEventListener("click", () => closeNovelMemoryComposer());
novelMemorySearchInput?.addEventListener("input", renderNovelMemory);
novelMemoryKindFilter?.addEventListener("change", renderNovelMemory);
clearNovelMemoryFiltersButton?.addEventListener("click", () => {
  if (novelMemorySearchInput) novelMemorySearchInput.value = "";
  if (novelMemoryKindFilter) novelMemoryKindFilter.value = "all";
  renderNovelMemory();
  novelMemorySearchInput?.focus();
});
novelMemorySummary?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-memory-summary-kind]");
  if (!button || !novelMemorySummary.contains(button) || !novelMemoryKindFilter) return;
  novelMemoryKindFilter.value = button.dataset.memorySummaryKind || "all";
  renderNovelMemory();
});
novelMemoryContentInput?.addEventListener("input", updateNovelMemoryContentCount);
refreshNovelMemoryButton?.addEventListener("click", refreshNovelSpaceMemory);
removeStaleNovelMemoryButton?.addEventListener("click", removeStaleNovelMemory);
document.querySelectorAll("[data-memory-template-title]").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.memoryTemplateTitle || "空间笔记";
    const content = button.dataset.memoryTemplateContent || novelMemoryQuickTemplates[title] || "";
    applyNovelMemoryTemplate(title, content);
  });
});
novelUploadCancelButton?.addEventListener("click", cancelNovelUpload);
novelUploadRetryButton?.addEventListener("click", () => {
  if (pendingNovelUploadFile) uploadNovelFile(pendingNovelUploadFile);
});

sourcePageChapter?.addEventListener("input", () => {
  workChapter.value = sourcePageChapter.value;
  workChapter.dispatchEvent(new Event("input", { bubbles: true }));
  renderSourceOutlineBrowser();
  syncSourcePageActions();
});
sourceEvidenceQueryInput?.addEventListener("input", syncSourcePageActions);
sourceEvidenceQueryInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  if (!sourcePagePreviewButton?.disabled) sourcePagePreviewButton.click();
});
workspaceNovelSelect?.addEventListener("change", () => {
  const nextSpaceId = workspaceNovelSelect.value;
  if (nextSpaceId && !selectNovelSpace(nextSpaceId, false, true)) renderWorkspaceNovelSelect();
});
sourceOutlineSearchInput?.addEventListener("input", queueSourceOutlineSearch);
sourceOutlineClearButton?.addEventListener("click", () => {
  if (sourceOutlineSearchInput) sourceOutlineSearchInput.value = "";
  if (sourceOutlineVolumeFilter) sourceOutlineVolumeFilter.value = "";
  resetSourceOutlineRemoteSearch();
  populateSourceChapterOptions(sourceOutlineTitles);
  renderSourceOutlineBrowser();
  sourceOutlineSearchInput?.focus();
});
sourceOutlineVolumeFilter?.addEventListener("change", () => {
  sourceOutlineVisibleLimit = sourceOutlineDisplayLimit;
  renderSourceOutlineBrowser();
});
retrievalStrategySelect?.addEventListener("change", () => {
  retrievalStrategy = normalizeRetrievalStrategy(retrievalStrategySelect.value);
  persistRetrievalStrategy();
  showToast(`原作检索策略：${retrievalStrategyLabels[retrievalStrategy]}`);
});
sourcePagePreviewButton?.addEventListener("click", () => {
  const query = sourceEvidenceQueryInput?.value.trim() || "";
  if (!query) {
    showToast("先输入一个要查证的问题");
    sourceEvidenceQueryInput?.focus();
    return;
  }
  openSourceEvidence(null, query, "", "问答");
});
sourcePageReadButton?.addEventListener("click", () => openSourceChapterReader());
sourcePageAskButton?.addEventListener("click", () => {
  const chapter = sourcePageChapter?.value.trim() || "";
  beginSourceQuestion("", chapter);
});
memoryGuideSourceButton?.addEventListener("click", () => setWorkspaceView("source", { announce: true, focus: true }));
storyPageBeatsButton?.addEventListener("click", openScenePlanner);
storyPageCharactersButton?.addEventListener("click", () => openCharacterEditor(selectedCharacter));
storyPageSummaryButton?.addEventListener("click", () => {
  setWorkspaceView("story", { announce: false, focus: false });
  contextMore.open = true;
  workSummary.focus();
});
storyPageCheckpointsButton?.addEventListener("click", openCheckpointDialog);

workspaceGuideAction?.addEventListener("click", () => {
  const guide = getWorkspaceGuideState(activeWorkspaceView);
  if (guide.actionView) {
    setWorkspaceView(guide.actionView, { announce: true, focus: true });
    return;
  }
  if (activeWorkspaceView === "library") {
    const space = getActiveNovelSpace();
    if (space) selectNovelSpace(space.id, true);
    return;
  }
  if (activeWorkspaceView === "source") {
    const query = getDraftSourceQuery();
    if (query) previewSourceButton.click();
    else {
      showToast("先输入一个问题，或补充当前章节后查看原作依据");
      messageInput.focus();
    }
    return;
  }
  if (activeWorkspaceView === "memory") {
    setMemoryLayer("creative");
    setNovelMemoryComposerOpen(true, { focus: true });
    return;
  }
  if (activeWorkspaceView === "story") {
    openScenePlanner();
    return;
  }
  if (activeWorkspaceView === "settings") {
    modelSettings.open = true;
    modelSettings.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  messageInput.focus();
  messageInput.scrollIntoView({ behavior: "smooth", block: "center" });
});

workspaceGuideAskAction?.addEventListener("click", () => openWorkspaceTask("问答"));
workspaceGuideWriteAction?.addEventListener("click", () => openWorkspaceTask("续写"));
workspaceGuideSourceAction?.addEventListener("click", () => setWorkspaceView("source", { announce: true, focus: true }));
toggleContextPanelButton?.addEventListener("click", () => {
  setContextPanelOpen(!document.body.classList.contains("context-panel-open"));
});
sourceReadinessButton?.addEventListener("click", () => setWorkspaceView("source", { announce: true, focus: true }));
modelReadinessButton?.addEventListener("click", () => setWorkspaceView("settings", { announce: true, focus: true }));

modeGuideAction?.addEventListener("click", () => {
  if (selectedMode === "续写") {
    setContextPanelOpen(true);
    workChapter.focus();
    workChapter.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (selectedMode === "问答") {
    const query = getDraftSourceQuery();
    if (query) previewSourceButton.click();
    else {
      showToast("先输入问题，再查看原作依据");
      messageInput.focus();
    }
  } else if (selectedMode === "改写") {
    setContextPanelOpen(true);
    contextMore.open = true;
    workReference.focus();
    workReference.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    setContextPanelOpen(true);
    const activeCharacter = characterList?.querySelector(".character-card.active") || characterList?.querySelector(".character-card");
    activeCharacter?.focus();
    activeCharacter?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    beginConversationForMode(tab.dataset.mode, { announce: true });
  });
});

document.querySelectorAll(".prompt-card").forEach((card) => {
  card.addEventListener("click", () => {
    fillPrompt(card.dataset.prompt);
  });
});

document.querySelector(".composer-tools button").addEventListener("click", () => {
  referenceFile.click();
});
previewSourceButton.addEventListener("click", () => {
  const query = getDraftSourceQuery();
  if (!query) {
    showToast("先输入问题或补充当前章节 / 场景");
    messageInput.focus();
    return;
  }
  openSourceEvidence(null, query);
});

providerSelect.addEventListener("change", async () => {
  const project = getActiveProject();
  const provider = providerSelect.value;
  modelName.value = project.service?.models?.[provider] || providerDefaults[provider];
  saveServiceSettings();
  const readiness = await updateProviderUI();
  if (providerSelect.value !== provider) return;
  if (["ollama", "openai", "compatible"].includes(provider) && readiness?.configured) {
    refreshModels({ skipReadiness: true });
  }
  showToast(`已切换到 ${providerSelect.options[providerSelect.selectedIndex].text}`);
});

modelName.addEventListener("change", () => {
  saveServiceSettings();
  checkProviderHealth();
});

saveModelConfigButton?.addEventListener("click", () => {
  saveServiceSettings();
  updateProviderUI();
  showToast("模型配置已保存");
});

creativitySelect.addEventListener("change", () => {
  syncModeControls();
  saveServiceSettings();
  showToast(`创作倾向：${creativityLabels[creativitySelect.value]}`);
});

responseLengthSelect.addEventListener("change", () => {
  responseLengthValue.textContent = responseLengthLabels[responseLengthSelect.value];
  saveServiceSettings();
  showToast(`回复长度：${responseLengthLabels[responseLengthSelect.value]}`);
});

refreshModelsButton.addEventListener("click", refreshModels);
testProviderButton.addEventListener("click", testProviderConnection);
openProviderDiagnosticsButton.addEventListener("click", openProviderDiagnostics);
copyProviderConfigKeysButton.addEventListener("click", copyProviderConfigKeys);
copyProviderConfigTemplateButton.addEventListener("click", copyProviderConfigTemplate);
copyProviderDiagnosticsButton.addEventListener("click", () => copyText(providerDiagnosticsText.textContent, "连接诊断已复制"));
cancelProviderDataConsentButton?.addEventListener("click", () => settleProviderDataConsent(false));
confirmProviderDataConsentButton?.addEventListener("click", () => settleProviderDataConsent(true));
providerDataConsentDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  settleProviderDataConsent(false);
});
providerDataConsentDialog?.addEventListener("close", () => {
  if (providerDataConsentPending) settleProviderDataConsent(false);
});
providerDiagnosticsDialog.addEventListener("click", (event) => {
  if (event.target === providerDiagnosticsDialog) providerDiagnosticsDialog.close();
});
copySourceEvidenceButton.addEventListener("click", () => copyText(sourceEvidenceText, "检索依据已复制"));
sourceEvidenceDialog.addEventListener("click", (event) => {
  if (event.target === sourceEvidenceDialog) sourceEvidenceDialog.close();
});
copySourceChapterButton?.addEventListener("click", () => copyText(sourceChapterReaderText?.textContent || "", "章节预览已复制"));
sourceChapterPreviousButton?.addEventListener("click", () => {
  const title = sourceChapterReaderPreview?.previous_title || "";
  if (title) openSourceChapterReader(title);
});
sourceChapterNextButton?.addEventListener("click", () => {
  const title = sourceChapterReaderPreview?.next_title || "";
  if (title) openSourceChapterReader(title);
});
sourceChapterAskButton?.addEventListener("click", () => {
  const title = sourceChapterReaderPreview?.title || sourcePageChapter?.value.trim() || "";
  if (!title) return;
  sourceChapterReaderDialog?.close();
  beginSourceQuestion("", title);
});
generateSourceChapterDigestButton?.addEventListener("click", generateSourceChapterDigest);
saveSourceChapterDigestButton?.addEventListener("click", saveSourceChapterDigest);
sourceChapterReaderDialog?.addEventListener("click", (event) => {
  if (event.target === sourceChapterReaderDialog) sourceChapterReaderDialog.close();
});
generateSummaryButton.addEventListener("click", summarizeConversation);
toggleContextModeButton.addEventListener("click", toggleContextMode);
contextUsage.addEventListener("click", openContextPreview);
copyContextPreviewButton.addEventListener("click", () => copyText(contextPreviewText.textContent, "上下文预览已复制"));
contextDialog.addEventListener("click", (event) => {
  if (event.target === contextDialog) contextDialog.close();
});
applySummaryPreviewButton.addEventListener("click", applySummaryPreview);
saveSummaryToMemoryButton?.addEventListener("click", saveSummaryPreviewToMemory);
summaryPreviewDialog.addEventListener("click", (event) => {
  if (event.target === summaryPreviewDialog) summaryPreviewDialog.close();
});
summaryPreviewDialog.addEventListener("close", () => {
  pendingSummaryPreview = null;
});
applySceneOutcomePreviewButton.addEventListener("click", applySceneOutcomePreview);
saveSceneOutcomeToMemoryButton?.addEventListener("click", saveSceneOutcomePreviewToMemory);
sceneOutcomePreviewDialog.addEventListener("click", (event) => {
  if (event.target === sceneOutcomePreviewDialog) sceneOutcomePreviewDialog.close();
});
sceneOutcomePreviewDialog.addEventListener("close", () => {
  pendingSceneOutcomePreview = null;
});

["#workTitle", "#workEra", "#workWorld"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", saveWorkspace);
});

workChapter.addEventListener("input", () => {
  const active = getActiveSceneBeat();
  if (active && workChapter.value.trim() !== active.title) {
    if (active.status === "active") active.status = "planned";
    getActiveProject().activeBeatId = "";
  }
  saveWorkspace();
  renderActiveBeat();
});

workReference.addEventListener("input", () => {
  if (workReference.value.length > 4000) workReference.value = workReference.value.slice(0, 4000);
  updateReferenceCount();
  saveWorkspace();
});
workSummary.addEventListener("input", () => {
  if (workSummary.value.length > 2000) workSummary.value = workSummary.value.slice(0, 2000);
  summaryEditPending = true;
  summaryFreshness.classList.add("is-stale");
  summaryFreshness.textContent = workSummary.value.trim() ? "摘要编辑中 · 完成后记录覆盖范围" : "暂无摘要";
  saveWorkspace();
});
workSummary.addEventListener("blur", commitManualSummaryEdit);
workInstructions.addEventListener("input", () => {
  if (workInstructions.value.length > 1200) workInstructions.value = workInstructions.value.slice(0, 1200);
  saveWorkspace();
});
importReferenceButton.addEventListener("click", () => referenceFile.click());
referenceFile.addEventListener("change", importReferenceFile);
messageInput.addEventListener("input", saveDraft);
messageInput.addEventListener("input", renderTaskStarters);

composer.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isSending) {
    stopGeneration();
    return;
  }
  if (isSummarizing) {
    showToast("摘要提炼完成后再发送");
    return;
  }
  const text = messageInput.value.trim();
  if (!text) {
    messageInput.focus();
    showToast("先写下一句话吧");
    return;
  }
  if (!ensureSourceReadyForMode(selectedMode)) return;
  if (!await ensureProviderReadyForRequest(selectedMode === "问答" ? "生成内容问答" : "生成创作回复")) return;
  if (!await ensureProviderDataConsent(selectedMode === "问答" ? "生成内容问答" : "生成创作回复")) return;

  addMessage({ role: "user", name: "我", text, historyIndex: conversationHistory.length, mode: selectedMode, avatarClass: "user-avatar" });
  conversationHistory.push({ role: "user", name: "我", content: text, mode: selectedMode });
  messageInput.value = "";
  saveDraft();
  saveConversation();
  const character = { ...selectedCharacter };
  const requestProjectId = activeProjectId;
  const requestSpaceId = getCurrentNovelSpaceId();
  const requestMode = selectedMode;
  const responseName = getAssistantDisplayName(character);

  const assistantMessage = addMessage({
    role: "assistant",
    name: responseName,
    text: "",
    historyIndex: conversationHistory.length,
    mode: requestMode,
    avatarClass: getAssistantAvatarClass(responseName),
  });
  const reply = await generateAssistantReply(assistantMessage, character, "", requestMode);
  if (!workspaceRequestStillCurrent(requestProjectId, requestSpaceId)) {
    showToast("当前项目或小说空间已切换，回复未写入");
    return;
  }

  const source = assistantMessage.bubble.dataset.source === "demo" ? "demo" : "";
  conversationHistory.push({
    role: "assistant",
    name: responseName,
    content: reply,
    ...(requestMode ? { mode: requestMode } : {}),
    ...(source ? { source } : {}),
    ...(assistantMessage.sourceRefs?.length ? { sourceRefs: assistantMessage.sourceRefs } : {}),
    ...(assistantMessage.sourceQuery ? { sourceQuery: assistantMessage.sourceQuery } : {}),
    ...(assistantMessage.sourceQuality ? { sourceQuality: assistantMessage.sourceQuality } : {}),
    ...(assistantMessage.sourceAnswerCoverage ? { sourceAnswerCoverage: assistantMessage.sourceAnswerCoverage } : {}),
    ...(assistantMessage.sourceCitationStatus ? { sourceCitationStatus: assistantMessage.sourceCitationStatus } : {}),
    ...(assistantMessage.sourceCitationsUnverified?.length ? { sourceCitationsUnverified: assistantMessage.sourceCitationsUnverified } : {}),
    ...(assistantMessage.qualityReview ? { qualityReview: assistantMessage.qualityReview } : {}),
    ...(assistantMessage.truncated ? { truncated: true } : {}),
  });
  saveConversation();
  updateCount();
  filterConversationMessages();
});

messageInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    composer.requestSubmit();
  }
});

window.addEventListener("pagehide", flushDraft);

document.querySelector("#resetSession").addEventListener("click", resetCurrentConversation);

manageCharacterButton.addEventListener("click", () => openCharacterEditor(selectedCharacter));
document.querySelector("#addCharacter").addEventListener("click", () => openCharacterEditor());
openCharacterLibraryButton.addEventListener("click", openCharacterLibrary);
characterForm.addEventListener("submit", saveCharacter);
deleteCharacterButton.addEventListener("click", deleteCharacter);
cancelCharacterButton.addEventListener("click", closeCharacterEditor);
characterDialog.addEventListener("click", (event) => {
  if (event.target === characterDialog) closeCharacterEditor();
});
saveSelectedCharacterButton.addEventListener("click", saveSelectedCharacterToLibrary);
closeCharacterLibraryButton.addEventListener("click", closeCharacterLibrary);
characterLibraryDialog.addEventListener("click", (event) => {
  if (event.target === characterLibraryDialog) closeCharacterLibrary();
});
characterLibrarySearch.addEventListener("input", renderCharacterLibrary);
characterLibraryDialog.querySelector("form").addEventListener("submit", (event) => event.preventDefault());
addPromptButton.addEventListener("click", openPromptEditor);
appendHighlightsButton.addEventListener("click", appendHighlightsToSummary);
copyHighlightsButton.addEventListener("click", copyHighlights);
promptForm.addEventListener("submit", savePrompt);
cancelPromptButton.addEventListener("click", closePromptEditor);
promptDialog.addEventListener("click", (event) => {
  if (event.target === promptDialog) closePromptEditor();
});
openPromptLibraryButton.addEventListener("click", openPromptLibrary);
promptLibrarySearch.addEventListener("input", renderPromptLibrary);
closePromptLibraryButton.addEventListener("click", closePromptLibrary);
promptLibraryDialog.addEventListener("click", (event) => {
  if (event.target === promptLibraryDialog) closePromptLibrary();
});
promptLibraryDialog.querySelector("form").addEventListener("submit", (event) => event.preventDefault());
openTemplatesButton.addEventListener("click", openTemplateDialog);
cancelTemplateButton.addEventListener("click", closeTemplateDialog);
saveCurrentTemplateButton.addEventListener("click", saveCurrentAsTemplate);
templateDialog.addEventListener("click", (event) => {
  if (event.target === templateDialog) closeTemplateDialog();
});
manageBeatsButton.addEventListener("click", openScenePlanner);
beatForm.addEventListener("submit", saveSceneBeat);
beatSearchInput.addEventListener("input", renderSceneBeats);
beatStatusFilter.addEventListener("change", renderSceneBeats);
focusCurrentBeatButton.addEventListener("click", focusCurrentBeat);
beatSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") event.preventDefault();
});
generateBeatOutcomeButton.addEventListener("click", summarizeCurrentSceneOutcome);
cancelBeatButton.addEventListener("click", closeScenePlanner);
beatDialog.addEventListener("click", (event) => {
  if (event.target === beatDialog) closeScenePlanner();
});
advanceBeatButton.addEventListener("click", advanceCurrentBeat);
copyScenePlanButton.addEventListener("click", copyScenePlan);
closeCheckpointButton.addEventListener("click", closeCheckpointDialog);
checkpointDialog.addEventListener("click", (event) => {
  if (event.target === checkpointDialog) closeCheckpointDialog();
});
checkpointSearchInput.addEventListener("input", renderCheckpoints);
checkpointDialog.querySelector("form").addEventListener("submit", (event) => event.preventDefault());
quickSaveCheckpointButton.addEventListener("click", () => saveCheckpoint({ quick: true }));
copyCheckpointCompareButton.addEventListener("click", () => copyText(checkpointCompareText.textContent, "检查点对比已复制"));
checkpointCompareDialog.addEventListener("click", (event) => {
  if (event.target === checkpointCompareDialog) checkpointCompareDialog.close();
});
openArchiveHistoryButton.addEventListener("click", () => {
  closeConversationMenu();
  openArchiveHistory();
});
openArchiveFromHistoryButton?.addEventListener("click", () => openArchiveHistory());
archiveSearchInput.addEventListener("input", renderArchiveHistory);
closeArchiveButton.addEventListener("click", closeArchiveHistory);
clearArchiveButton.addEventListener("click", clearArchivedHistory);
archiveDialog.addEventListener("click", (event) => {
  if (event.target === archiveDialog) closeArchiveHistory();
});
archiveDialog.querySelector("form").addEventListener("submit", (event) => event.preventDefault());

document.querySelector("#focusComposer").addEventListener("click", () => {
  setWorkspaceView("workbench", { announce: false, focus: false });
  messageInput.focus();
});

openCommandPaletteButton.addEventListener("click", openCommandPalette);
commandPaletteSearch.addEventListener("input", () => {
  commandPaletteActiveIndex = 0;
  renderCommandPalette();
});
commandPaletteDialog.addEventListener("click", (event) => {
  if (event.target === commandPaletteDialog) commandPaletteDialog.close();
});

toggleFocusModeButton.addEventListener("click", () => {
  setFocusMode(!document.body.classList.contains("focus-mode"));
  showToast(document.body.classList.contains("focus-mode") ? "已进入专注模式" : "已退出专注模式");
});

toggleThemeButton?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  showToast(nextTheme === "dark" ? "已切换到深色主题" : "已切换到浅色主题");
});

document.querySelector("#exportSession").addEventListener("click", exportSession);

function closeConversationMenu() {
  conversationMenu.hidden = true;
  conversationMenuButton.setAttribute("aria-expanded", "false");
}

searchConversationButton.addEventListener("click", () => {
  setConversationSearchOpen(conversationSearch.hidden);
});
toggleConversationHistoryButton?.addEventListener("click", () => {
  const open = !conversationHistoryPanel?.classList.contains("is-open");
  conversationHistoryPanel?.classList.toggle("is-open", open);
  toggleConversationHistoryButton.setAttribute("aria-expanded", String(open));
});
conversationSearchInput.addEventListener("input", filterConversationMessages);
searchArchivedMessagesButton.addEventListener("click", () => {
  const query = conversationSearchInput.value.trim();
  setConversationSearchOpen(false);
  openArchiveHistory(query);
});
clearConversationSearchButton.addEventListener("click", () => {
  conversationSearchInput.value = "";
  filterConversationMessages();
  conversationSearchInput.focus();
});

conversationMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = conversationMenu.hidden;
  conversationMenu.hidden = !open;
  conversationMenuButton.setAttribute("aria-expanded", String(open));
});
copyConversationButton.addEventListener("click", async () => {
  await copyConversation();
  closeConversationMenu();
});
copyProjectHandoffButton.addEventListener("click", async () => {
  await copyProjectHandoff();
  closeConversationMenu();
});
downloadProjectHandoffButton.addEventListener("click", () => {
  downloadProjectHandoff();
  closeConversationMenu();
});
exportFromMenuButton.addEventListener("click", () => {
  closeConversationMenu();
  exportSession();
});
exportProjectJsonButton.addEventListener("click", () => {
  closeConversationMenu();
  exportCurrentProjectBackup();
});
resetFromMenuButton.addEventListener("click", () => {
  closeConversationMenu();
  document.querySelector("#resetSession").click();
});
saveCheckpointFromMenuButton.addEventListener("click", () => {
  closeConversationMenu();
  saveCheckpoint();
});
openCheckpointsButton.addEventListener("click", () => {
  closeConversationMenu();
  openCheckpointDialog();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".conversation-tools")) closeConversationMenu();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (commandPaletteDialog.open) commandPaletteDialog.close();
    else openCommandPalette();
    return;
  }
  if (commandPaletteDialog.open) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveCommandPaletteSelection(1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveCommandPaletteSelection(-1);
      return;
    }
    if (event.key === "Enter") {
      const matches = getCommandPaletteMatches();
      if (matches[commandPaletteActiveIndex]) {
        event.preventDefault();
        executeCommandPaletteCommand(matches[commandPaletteActiveIndex].id);
      }
      return;
    }
  }
  if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveCheckpoint({ quick: true });
    return;
  }
  if (event.key === "Escape" && !conversationSearch.hidden) {
    setConversationSearchOpen(false);
  }
});

function switchProject(projectId) {
  if (projectId === activeProjectId) return;
  if (preventWorkspaceMutation("切换项目")) {
    projectSelect.value = activeProjectId;
    return;
  }
  const nextProject = projects.find((project) => project.id === projectId);
  if (!nextProject) {
    projectSelect.value = activeProjectId;
    return;
  }
  const nextSpaceId = nextProject.novelSpaceId || defaultNovelSpaceId;
  if (!confirmNovelMemorySpaceSwitch(nextSpaceId)) {
    projectSelect.value = activeProjectId;
    return;
  }
  const currentSpaceId = getCurrentNovelSpaceId();
  persistActiveProject();
  activeProjectId = projectId;
  activeNovelSpaceId = nextSpaceId;
  if (currentSpaceId !== nextSpaceId) {
    retrievalStrategy = loadRetrievalStrategy(nextSpaceId);
    syncRetrievalStrategy();
    resetNovelMemoryFilters();
  }
  persistNovelSpaces();
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  loadNovelSpaceMemory(nextSpaceId);
  if (activeWorkspaceView === "memory") {
    loadSourceKnowledge(nextSpaceId);
    loadReviewedMemoryStatus(nextSpaceId);
  }
  renderNovelSpaceLibrary();
  syncWorkspacePage();
  persistWorkspaceView(activeWorkspaceView);
  showToast(`已切换到「${getActiveProject().name}」`);
}

function renderTemplateList() {
  if (!templateList) return;
  templateList.innerHTML = "";
  const templates = [...customTemplates, ...templatePresets];
  templates.forEach((template) => {
    const custom = customTemplates.some((item) => item.id === template.id);
    const presetIndex = templatePresets.findIndex((item) => item.id === template.id);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `template-card ${custom ? "template-card-custom" : `template-card-${presetIndex + 1}`}`;
    const eyebrow = document.createElement("span");
    eyebrow.className = "template-card-label";
    eyebrow.textContent = template.label;
    const title = document.createElement("strong");
    title.textContent = template.title;
    const description = document.createElement("small");
    description.textContent = template.description;
    const meta = document.createElement("span");
    meta.className = "template-card-meta";
    meta.textContent = `${template.characters.length} 位角色 · ${template.prompts.length} 个灵感${custom ? " · 我的模板" : ""}`;
    const arrow = document.createElement("span");
    arrow.className = "template-card-arrow";
    arrow.textContent = "↗";
    card.append(eyebrow, title, description, meta, arrow);
    card.addEventListener("click", () => applyTemplate(template.id));
    if (custom) {
      const remove = document.createElement("span");
      remove.className = "template-card-remove";
      remove.textContent = "×";
      remove.title = "删除我的模板";
      remove.setAttribute("role", "button");
      remove.setAttribute("tabindex", "0");
      remove.setAttribute("aria-label", `删除模板 ${template.title}`);
      const removeTemplate = (event) => {
        event.stopPropagation();
        deleteCustomTemplate(template.id);
      };
      remove.addEventListener("click", removeTemplate);
      remove.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") removeTemplate(event);
      });
      card.appendChild(remove);
    }
    templateList.appendChild(card);
  });
}

function openTemplateDialog() {
  if (preventWorkspaceMutation("使用模板")) return;
  renderTemplateList();
  templateDialog.showModal();
}

function closeTemplateDialog() {
  templateDialog.close();
}

function saveCurrentAsTemplate() {
  if (preventWorkspaceMutation("保存模板")) return;
  if (customTemplates.length >= maxCustomTemplates) {
    showToast(`自定义模板最多保存 ${maxCustomTemplates} 个`);
    return;
  }
  persistActiveProject();
  const project = getActiveProject();
  const name = window.prompt("给这个模板取一个名字：", `${project.name} · 模板`);
  if (!name || !name.trim()) return;
  const cleanName = safeText(name, "我的模板", 80);
  const template = normalizeTemplate({
    id: `template-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title: cleanName,
    label: "我的模板",
    description: `从「${project.name}」保存的创作底稿，可继续修改后开始新作。`,
    context: { ...project.context },
    characters: project.characters.map((character) => ({ ...character })),
    selectedCharacterName: project.selectedCharacterName,
    mode: project.mode,
    prompts: project.prompts.map((prompt) => ({ ...prompt })),
    beats: project.beats.map((beat) => ({ title: beat.title, goal: beat.goal })),
  }, cleanName);
  customTemplates = [template, ...customTemplates].slice(0, maxCustomTemplates);
  persistCustomTemplates();
  renderTemplateList();
  showToast(`已保存模板「${cleanName}」`);
}

function deleteCustomTemplate(templateId) {
  const template = customTemplates.find((item) => item.id === templateId);
  if (!template || !window.confirm(`删除模板「${template.title}」吗？`)) return;
  customTemplates = customTemplates.filter((item) => item.id !== templateId);
  persistCustomTemplates();
  renderTemplateList();
  showToast("模板已删除");
}

function applyTemplate(templateId) {
  if (projects.length >= maxProjects) {
    closeTemplateDialog();
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("使用模板")) return;
  const template = [...customTemplates, ...templatePresets].find((item) => item.id === templateId);
  if (!template) return;
  persistActiveProject();
  const name = window.prompt("给模板项目取一个名字：", template.context.title || template.title);
  if (!name || !name.trim()) return;
  const cleanName = safeText(name, template.title, 80);
  const current = getActiveProject();
  const sourceBeats = Array.isArray(template.beats) && template.beats.length
    ? template.beats
    : [{ title: template.context.chapter || "第一幕", goal: template.context.summary || "" }];
  const beats = sourceBeats.slice(0, maxSceneBeats).map((beat, index) => ({
    id: `beat-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    title: safeText(beat.title, `第 ${index + 1} 幕`, 80),
    goal: safeText(beat.goal, "", 280),
    outcome: "",
    status: index === 0 ? "active" : "planned",
  }));
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: activeNovelSpaceId,
    name: cleanName,
    context: { ...template.context, title: cleanName },
    conversation: [{
      role: "assistant",
      name: template.selectedCharacterName,
      content: `「${cleanName}」已经准备好。${template.description}先写下第一句，让故事找到自己的方向。`,
    }],
    service: {
      provider: providerSelect.value,
      model: modelName.value.trim(),
      models: { ...(current.service?.models || {}) },
      creativity: creativitySelect.value,
      responseLength: responseLengthSelect.value,
    },
    characters: template.characters.map((character) => ({ ...character })),
    selectedCharacterName: template.selectedCharacterName,
    mode: template.mode,
    prompts: template.prompts.map((prompt) => ({ ...prompt })),
    beats,
    activeBeatId: beats[0]?.id || "",
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  closeTemplateDialog();
  showToast(`已用「${template.title}」创建「${cleanName}」`);
}

function resetBeatEditor() {
  editingBeatId = null;
  beatDialogTitle.textContent = "添加场景卡";
  beatTitleInput.value = "";
  beatGoalInput.value = "";
  beatOutcomeInput.value = "";
  beatStatusInput.value = "planned";
}

function renderSceneBeats() {
  const project = getActiveProject();
  const beats = project?.beats || [];
  const currentBeat = getActiveSceneBeat(project);
  const query = beatSearchInput?.value.trim().toLocaleLowerCase() || "";
  const statusFilter = beatStatusFilter?.value || "all";
  const done = beats.filter((beat) => beat.status === "done").length;
  const active = beats.filter((beat) => beat.status === "active").length;
  const planned = beats.filter((beat) => beat.status === "planned").length;
  const percent = beats.length ? Math.round((done / beats.length) * 100) : 0;
  beatProgressText.textContent = beats.length
    ? `${done}/${beats.length} 已完成 · ${active} 进行中 · ${planned} 待写`
    : "还没有场景卡";
  beatProgressPercent.textContent = `${percent}%`;
  beatProgressBar.style.width = `${percent}%`;
  focusCurrentBeatButton.disabled = !currentBeat;
  focusCurrentBeatButton.title = currentBeat ? `定位到「${currentBeat.title}」` : "先选择一个当前场景";
  const matches = beats
    .map((beat, index) => ({ beat, index }))
    .filter(({ beat }) => {
      const searchable = [beat.title, beat.goal, beat.outcome].filter(Boolean).join(" ").toLocaleLowerCase();
      return (!query || searchable.includes(query)) && (statusFilter === "all" || beat.status === statusFilter);
    });
  beatListCount.textContent = query || statusFilter !== "all"
    ? `${matches.length} / ${beats.length} 张`
    : `${beats.length} / ${maxSceneBeats} 张`;
  beatList.innerHTML = "";
  if (!beats.length) {
    const empty = document.createElement("p");
    empty.className = "beat-empty";
    empty.textContent = "还没有场景卡。先把下一幕想发生的事写下来。";
    beatList.appendChild(empty);
    return;
  }
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "beat-empty";
    empty.textContent = "没有匹配的场景卡。试试清除搜索或切换状态。";
    beatList.appendChild(empty);
    return;
  }
  matches.forEach(({ beat, index }) => {
    const card = document.createElement("div");
    card.className = "beat-card";
    card.dataset.beatId = beat.id;
    card.classList.toggle("is-current", beat.id === project.activeBeatId);
    const head = document.createElement("div");
    head.className = "beat-card-head";
    const title = document.createElement("strong");
    title.textContent = `${String(index + 1).padStart(2, "0")} · ${beat.title}`;
    const status = document.createElement("span");
    status.className = `beat-status beat-status-${beat.status}`;
    status.textContent = sceneBeatStatusLabels[beat.status];
    head.append(title, status);
    const goal = document.createElement("p");
    goal.textContent = [
      beat.goal,
      beat.outcome ? `已发生 / 线索：${beat.outcome}` : "",
    ].filter(Boolean).join("\n") || "这一幕暂未写下明确目标。";
    const provenance = getSceneOutcomeFreshness(beat, project);
    const provenanceNote = document.createElement("small");
    provenanceNote.className = "beat-provenance";
    provenanceNote.classList.toggle("is-stale", provenance.includes("新增") || provenance.includes("不在当前"));
    provenanceNote.textContent = provenance;
    const actions = document.createElement("div");
    actions.className = "beat-card-actions";
    const moveUp = document.createElement("button");
    moveUp.type = "button";
    moveUp.className = "beat-action beat-move";
    moveUp.textContent = "↑";
    moveUp.title = "上移场景";
    moveUp.setAttribute("aria-label", `上移场景 ${beat.title}`);
    moveUp.disabled = index === 0;
    moveUp.addEventListener("click", () => moveBeat(beat.id, -1));
    const moveDown = document.createElement("button");
    moveDown.type = "button";
    moveDown.className = "beat-action beat-move";
    moveDown.textContent = "↓";
    moveDown.title = "下移场景";
    moveDown.setAttribute("aria-label", `下移场景 ${beat.title}`);
    moveDown.disabled = index === beats.length - 1;
    moveDown.addEventListener("click", () => moveBeat(beat.id, 1));
    const use = document.createElement("button");
    use.type = "button";
    use.className = "beat-action beat-use";
    use.textContent = beat.id === project.activeBeatId ? "当前场景" : "设为当前";
    use.disabled = beat.id === project.activeBeatId;
    use.addEventListener("click", () => setCurrentBeat(beat.id));
    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "beat-action";
    edit.textContent = "编辑";
    edit.addEventListener("click", () => openBeatEditor(beat.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "beat-action beat-remove";
    remove.textContent = "删除";
    remove.addEventListener("click", () => deleteBeat(beat.id));
    actions.append(moveUp, moveDown, use, edit, remove);
    card.append(head, goal);
    if (provenance) card.appendChild(provenanceNote);
    card.appendChild(actions);
    beatList.appendChild(card);
  });
}

function focusCurrentBeat() {
  const project = getActiveProject();
  const currentBeat = getActiveSceneBeat(project);
  if (!currentBeat) {
    showToast("还没有当前场景，请先选择一张场景卡");
    return;
  }
  beatSearchInput.value = "";
  beatStatusFilter.value = "all";
  renderSceneBeats();
  const card = Array.from(beatList.querySelectorAll(".beat-card")).find((item) => item.dataset.beatId === currentBeat.id);
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  card.classList.add("is-focus");
  window.setTimeout(() => card.classList.remove("is-focus"), 900);
}

function openScenePlanner() {
  if (preventWorkspaceMutation("编辑场景计划")) return;
  beatSearchInput.value = "";
  beatStatusFilter.value = "all";
  resetBeatEditor();
  renderSceneBeats();
  beatDialog.showModal();
  beatTitleInput.focus();
}

function openBeatEditor(beatId) {
  const beat = getActiveProject()?.beats.find((item) => item.id === beatId);
  if (!beat) return;
  editingBeatId = beatId;
  beatDialogTitle.textContent = "编辑场景卡";
  beatTitleInput.value = beat.title;
  beatGoalInput.value = beat.goal;
  beatOutcomeInput.value = beat.outcome || "";
  beatStatusInput.value = beat.status;
  beatTitleInput.focus();
}

function closeScenePlanner() {
  resetBeatEditor();
  beatDialog.close();
}

function saveSceneBeat(event) {
  event.preventDefault();
  if (preventWorkspaceMutation("保存场景")) return;
  const title = safeText(beatTitleInput.value, "", 80);
  const goal = safeText(beatGoalInput.value, "", 280);
  const outcome = safeText(beatOutcomeInput.value, "", 600);
  if (!title) return;
  const project = getActiveProject();
  const status = Object.prototype.hasOwnProperty.call(sceneBeatStatusLabels, beatStatusInput.value)
    ? beatStatusInput.value
    : "planned";
  const wasEditing = Boolean(editingBeatId);
  let beat;
  if (editingBeatId) {
    beat = project.beats.find((item) => item.id === editingBeatId);
    if (!beat) return;
    const outcomeChanged = beat.outcome !== outcome;
    beat.title = title;
    beat.goal = goal;
    beat.outcome = outcome;
    if (outcomeChanged) {
      beat.outcomeThrough = outcome ? highlightKey(getConversationForDisplay(project).at(-1)) : "";
    }
    beat.status = status;
    if (project.activeBeatId === beat.id) workChapter.value = title;
  } else {
    if (project.beats.length >= maxSceneBeats) {
      showToast(`每个项目最多保存 ${maxSceneBeats} 个场景卡`);
      return;
    }
    beat = {
      id: `beat-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      title,
      goal,
      outcome,
      outcomeThrough: outcome ? highlightKey(getConversationForDisplay(project).at(-1)) : "",
      status,
    };
    project.beats.push(beat);
  }
  if (status === "active") {
    activateSceneBeat(project, beat.id);
    workChapter.value = beat.title;
  } else if (project.activeBeatId === beat.id) {
    const replacement = project.beats.find((item) => item.status === "active");
    project.activeBeatId = replacement?.id || "";
    workChapter.value = replacement?.title || "";
  }
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  resetBeatEditor();
  showToast(wasEditing ? `已更新场景「${title}」` : `已添加场景「${title}」`);
}

function setCurrentBeat(beatId) {
  if (preventWorkspaceMutation("切换当前场景")) return;
  const project = getActiveProject();
  const beat = project.beats.find((item) => item.id === beatId);
  if (!beat) return;
  activateSceneBeat(project, beat.id);
  workChapter.value = beat.title;
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  showToast(`当前场景：${beat.title}`);
}

function advanceCurrentBeat() {
  if (preventWorkspaceMutation("推进场景")) return;
  const project = getActiveProject();
  const currentIndex = project.beats.findIndex((beat) => beat.id === project.activeBeatId);
  const current = currentIndex >= 0 ? project.beats[currentIndex] : null;
  const next = current ? project.beats[currentIndex + 1] : null;
  if (!current || !next) return;
  const freshness = getSceneOutcomeFreshness(current, project);
  if (!current.outcome?.trim()) {
    if (!window.confirm(`当前场景「${current.title}」还没有记录本幕结果，仍然推进到「${next.title}」吗？`)) return;
  } else if (freshness.includes("新增") || freshness.includes("不在当前") || freshness.includes("旧数据")) {
    if (!window.confirm(`当前场景结果尚未覆盖最新剧情（${freshness}），仍然推进到「${next.title}」吗？`)) return;
  }
  current.status = "done";
  next.status = "active";
  project.activeBeatId = next.id;
  workChapter.value = next.title;
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  showToast(`已完成「${current.title}」，进入「${next.title}」`);
}

function moveBeat(beatId, direction) {
  if (preventWorkspaceMutation("调整场景顺序")) return;
  const project = getActiveProject();
  const index = project.beats.findIndex((item) => item.id === beatId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= project.beats.length) return;
  [project.beats[index], project.beats[nextIndex]] = [project.beats[nextIndex], project.beats[index]];
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  showToast("场景顺序已调整");
}

function deleteBeat(beatId) {
  if (preventWorkspaceMutation("删除场景")) return;
  const project = getActiveProject();
  const index = project.beats.findIndex((item) => item.id === beatId);
  if (index < 0) return;
  const beat = project.beats[index];
  if (!window.confirm(`删除场景「${beat.title}」吗？`)) return;
  project.beats.splice(index, 1);
  if (project.activeBeatId === beatId) project.activeBeatId = "";
  if (project.activeBeatId === "") {
    const replacement = project.beats[index] || project.beats[index - 1];
    if (replacement) {
      activateSceneBeat(project, replacement.id);
      workChapter.value = replacement.title;
    } else {
      workChapter.value = "";
    }
  }
  persistActiveProject();
  renderActiveBeat();
  renderSceneBeats();
  showToast("场景卡已删除");
}

function createNewProject() {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("创建项目")) return;
  const name = window.prompt("给新的创作项目取一个名字：", "未命名新章");
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  const space = novelSpaceForProject();
  const characters = getNovelCharacters(space);
  const project = createProject({
    id: `project-${Date.now()}`,
    novelSpaceId: activeNovelSpaceId,
    name: cleanName,
    context: { title: cleanName, era: "", world: space ? `基于「${space.name}」原作知识空间进行内容问答与续写。` : "" },
    conversation: getNovelOpeningConversation(space),
    service: {
      provider: providerSelect.value,
      model: modelName.value.trim(),
      creativity: creativitySelect.value,
      responseLength: responseLengthSelect.value,
    },
    characters,
    selectedCharacterName: characters[0]?.name || "主角",
    mode: "续写",
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  showToast(`已创建「${cleanName}」`);
}

function duplicateCurrentProject() {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("复制项目")) return;
  persistActiveProject();
  const current = getActiveProject();
  const name = window.prompt("给这条创作支线取一个名字：", `${current.name} · 分支`);
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: current.novelSpaceId,
    name: cleanName,
    branchSource: {
      type: "project",
      label: current.name,
      detail: "完整复制",
    },
    context: { ...current.context, title: cleanName },
    conversation: current.conversation.map((item) => ({ ...item })),
    conversationArchive: current.conversationArchive.map((item) => ({ ...item })),
    conversationSessions: current.conversationSessions.map((session) => ({
      ...session,
      messages: session.messages.map((item) => ({ ...item })),
    })),
    activeConversationSessionId: current.activeConversationSessionId,
    activeConversationSessionStartedAt: current.activeConversationSessionStartedAt,
    service: { ...current.service },
    characters: current.characters.map((item) => ({ ...item })),
    selectedCharacterName: current.selectedCharacterName,
    mode: current.mode,
    draft: current.draft,
    prompts: current.prompts.map((item) => ({ ...item })),
    highlights: current.highlights.map((item) => ({ ...item })),
    checkpoints: current.checkpoints.map(cloneCheckpoint),
    beats: current.beats.map((item) => ({ ...item })),
    activeBeatId: current.activeBeatId,
    contextMode: current.contextMode,
    summaryMessageCount: current.summaryMessageCount,
    summaryUpdatedAt: current.summaryUpdatedAt,
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  showToast(`已复制为「${cleanName}」`);
}

function branchFromMessage(historyIndex) {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
  if (preventWorkspaceMutation("创建支线")) return;
  const sourceMessage = conversationHistory[historyIndex];
  if (!sourceMessage || sourceMessage.role !== "assistant") {
    showToast("只能从角色回复创建支线");
    return;
  }

  persistActiveProject();
  const current = getActiveProject();
  const name = window.prompt("给这条剧情支线取一个名字：", `${current.name} · 从此处分支`);
  if (!name || !name.trim()) return;
  const branchConversation = conversationHistory.slice(0, historyIndex + 1).map((item) => ({
    ...item,
    ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
  }));
  const branchArchive = current.conversationArchive.map((item) => ({
    ...item,
    ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
  }));
  const branchMessages = [...branchArchive, ...branchConversation];
  const branchKeys = new Set(branchMessages.map((item) => highlightKey(item)).filter(Boolean));
  const branchCheckpoints = current.checkpoints
    .filter((checkpoint) => [
      ...(checkpoint.conversationArchive || []),
      ...(checkpoint.conversation || []),
    ].every((item) => branchKeys.has(highlightKey(item))))
    .map(cloneCheckpoint);
  const cleanName = name.trim();
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    novelSpaceId: current.novelSpaceId,
    name: cleanName,
    branchSource: {
      type: "message",
      label: current.name,
      detail: `工作区第 ${historyIndex + 1} 条角色回复`,
    },
    context: { ...current.context, title: cleanName, summary: "" },
    conversation: branchConversation,
    conversationArchive: branchArchive,
    service: { ...current.service },
    characters: current.characters.map((item) => ({ ...item })),
    selectedCharacterName: current.selectedCharacterName,
    mode: current.mode,
    draft: "",
    prompts: current.prompts.map((item) => ({ ...item })),
    highlights: current.highlights
      .filter((highlight) => branchKeys.has(highlightKey(highlight)))
      .map((item) => ({ ...item })),
    checkpoints: branchCheckpoints,
    beats: cloneBeatsForBranch(current.beats, branchKeys),
    activeBeatId: current.activeBeatId,
    contextMode: "full",
    summaryMessageCount: 0,
    summaryUpdatedAt: 0,
  });
  projects.push(project);
  activeProjectId = project.id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  showToast(`已从这条回复创建「${cleanName}」`);
}

function deleteCurrentProject() {
  if (preventWorkspaceMutation("删除项目")) return;
  if (projects.length <= 1) {
    showToast("至少保留一个创作项目");
    return;
  }
  const current = getActiveProject();
  if (!window.confirm(`确定删除「${current.name}」吗？其中的对话和设定会一并删除。`)) return;
  projects = projects.filter((project) => project.id !== activeProjectId);
  activeProjectId = projects[0].id;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
  showToast("项目已删除");
}

projectSelect.addEventListener("change", () => switchProject(projectSelect.value));
projectSearchInput.addEventListener("input", renderProjectSelect);
projectStatusFilter.addEventListener("change", renderProjectSelect);
projectHealthAction.addEventListener("click", focusProjectAttention);
newProjectButton.addEventListener("click", createNewProject);
duplicateProjectButton.addEventListener("click", duplicateCurrentProject);
exportProjectsButton.addEventListener("click", exportProjectsBackup);
importProjectsButton.addEventListener("click", () => projectBackupFile.click());
projectBackupFile.addEventListener("change", importProjectsBackup);
deleteProjectButton.addEventListener("click", deleteCurrentProject);
dismissSpaceRecoveryButton?.addEventListener("click", () => setSpaceRecovery());
continuationQualityRetryButton?.addEventListener("click", async () => {
  const retryRequest = pendingQualityRetry;
  pendingQualityRetry = null;
  continuationQualityDialog.close();
  if (!retryRequest?.codes?.length) return;
  await retryMessage(retryRequest.historyIndex, "", retryRequest.codes);
});
continuationQualityDialog?.addEventListener("close", () => {
  pendingQualityRetry = null;
});

hydrateActiveProject();
renderProjectSelect();
renderCharacters();
renderConversation();
updateProviderUI();
updateCount();
updateStorageStatus();
restoreTheme();
restoreFocusMode();
syncRetrievalStrategy();
renderNovelSpaceLibrary();
renderSpaceRecoveryNotice();
setContextPanelOpen(loadContextPanelOpen());
setWorkspaceView(loadWorkspaceView());
loadNovelSpacesFromServer().finally(() => resumeNovelUploadJob());
