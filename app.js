const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const messageInput = document.querySelector("#messageInput");
const messageCount = document.querySelector("#messageCount");
const conversationTitle = document.querySelector("#conversationTitle");
const conversationContext = document.querySelector("#conversationContext");
const conversationMenuButton = document.querySelector("#conversationMenuButton");
const conversationMenu = document.querySelector("#conversationMenu");
const copyConversationButton = document.querySelector("#copyConversation");
const exportFromMenuButton = document.querySelector("#exportFromMenu");
const exportProjectJsonButton = document.querySelector("#exportProjectJson");
const copyProjectHandoffButton = document.querySelector("#copyProjectHandoff");
const downloadProjectHandoffButton = document.querySelector("#downloadProjectHandoff");
const resetFromMenuButton = document.querySelector("#resetFromMenu");
const saveCheckpointFromMenuButton = document.querySelector("#saveCheckpointFromMenu");
const openCheckpointsButton = document.querySelector("#openCheckpoints");
const searchConversationButton = document.querySelector("#searchConversationButton");
const conversationSearch = document.querySelector("#conversationSearch");
const conversationSearchInput = document.querySelector("#conversationSearchInput");
const conversationSearchCount = document.querySelector("#conversationSearchCount");
const searchArchivedMessagesButton = document.querySelector("#searchArchivedMessages");
const clearConversationSearchButton = document.querySelector("#clearConversationSearch");
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
const applySceneOutcomePreviewButton = document.querySelector("#applySceneOutcomePreview");
const summaryPreviewDialog = document.querySelector("#summaryPreviewDialog");
const summaryPreviewStats = document.querySelector("#summaryPreviewStats");
const currentSummaryPreview = document.querySelector("#currentSummaryPreview");
const nextSummaryPreview = document.querySelector("#nextSummaryPreview");
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
const refreshModelsButton = document.querySelector("#refreshModels");
const testProviderButton = document.querySelector("#testProvider");
const modelOptions = document.querySelector("#modelOptions");
const openProviderDiagnosticsButton = document.querySelector("#openProviderDiagnostics");
const copyProviderConfigKeysButton = document.querySelector("#copyProviderConfigKeys");
const providerDiagnosticsDialog = document.querySelector("#providerDiagnosticsDialog");
const providerDiagnosticsStats = document.querySelector("#providerDiagnosticsStats");
const providerDiagnosticsText = document.querySelector("#providerDiagnosticsText");
const copyProviderDiagnosticsButton = document.querySelector("#copyProviderDiagnostics");
const creativitySelect = document.querySelector("#creativitySelect");
const creativityValue = document.querySelector("#creativityValue");
const responseLengthSelect = document.querySelector("#responseLengthSelect");
const responseLengthValue = document.querySelector("#responseLengthValue");
const sendButton = document.querySelector(".send-button");
const draftStatus = document.querySelector("#draftStatus");
const toggleFocusModeButton = document.querySelector("#toggleFocusMode");
const projectSelect = document.querySelector("#projectSelect");
const projectSearchInput = document.querySelector("#projectSearch");
const projectSearchCount = document.querySelector("#projectSearchCount");
const projectLineage = document.querySelector("#projectLineage");
const projectHealth = document.querySelector("#projectHealth");
const newProjectButton = document.querySelector("#newProject");
const duplicateProjectButton = document.querySelector("#duplicateProject");
const exportProjectsButton = document.querySelector("#exportProjects");
const importProjectsButton = document.querySelector("#importProjects");
const projectBackupFile = document.querySelector("#projectBackupFile");
const storageStatus = document.querySelector("#storageStatus");
const deleteProjectButton = document.querySelector("#deleteProject");
const workChapter = document.querySelector("#workChapter");
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
const conversationStorageKey = "inkecho.conversation.v1";
const workspaceStorageKey = "inkecho.workspace.v1";
const serviceStorageKey = "inkecho.service.v1";
const projectsStorageKey = "inkecho.projects.v1";
const customTemplatesStorageKey = "inkecho.templates.v1";
const characterLibraryStorageKey = "inkecho.character-library.v1";
const promptLibraryStorageKey = "inkecho.prompt-library.v1";
const activeProjectStorageKey = "inkecho.active-project.v1";
const focusModeStorageKey = "inkecho.focus-mode.v1";
const defaultCharacters = [
  { name: "林黛玉", tone: "清冷、敏锐，却藏着很深的真心。", details: "寄居贾府，敏感于礼法与人情的细微变化；愿望是被真诚地理解，却不肯轻易示弱。" },
  { name: "贾宝玉", tone: "真挚、叛逆，对世俗规矩总有自己的看法。", details: "出身富贵家族，却厌倦被安排的人生；珍视真心和自由，常用玩笑掩饰无法改变现实的失落。" },
];

const modeHints = {
  续写: "续写这一段故事……",
  改写: "告诉我想改写的情节……",
  独白: "让角色说出心里话……",
};

const providerDefaults = {
  custom_azure: "gpt-5-mini-2025-08-07",
  ollama: "qwen3:8b",
  openai: "gpt-5-mini",
  azure: "your-deployment-name",
  compatible: "qwen3-8b",
};

const providerDescriptions = {
  custom_azure: "读取 .env 中的办公网自定义端点和密钥。",
  ollama: "连接本机 Ollama，可运行 Qwen3、Llama、Gemma 等模型。",
  openai: "使用 OpenAI 官方 Chat Completions 接口。",
  azure: "使用标准 Azure OpenAI 部署名和端点。",
  compatible: "适用于 vLLM、LM Studio、LocalAI 等兼容服务。",
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

const replyTemplates = {
  续写: [
    "她把目光投向窗外，像是在等一场迟到的回答。既然故事还没有落幕，那就让我们从这一刻继续写下去。",
    "风从廊下穿过，吹动了案上的纸页。也许真正重要的，并不是结局，而是此刻仍有人愿意把下一句写出来。",
  ],
  改写: [
    "若把这一幕重新写过，我想保留人物的心性，却给他们一条更坦诚的路。很多遗憾不是不能改变，只是还没有被好好说出。",
    "这一处可以换一种呼吸：不急着解释，也不急着告别，让人物先在沉默里看清自己真正想要的东西。",
  ],
  独白: [
    "我并不是不想说，只是有些话一旦说出口，就再也不能假装没有发生。若你愿意听，我便从最不敢面对的那一刻讲起。",
    "人总以为自己在等待一个答案，其实等到最后，才发现想要的不过是有人理解这份沉默。",
  ],
};

let selectedCharacter = {
  name: "林黛玉",
  tone: "清冷、敏锐，却藏着很深的真心。",
  details: "寄居贾府，敏感于礼法与人情的细微变化；愿望是被真诚地理解，却不肯轻易示弱。",
};
let selectedMode = "续写";
let toastTimer;
let draftTimer;
let projectPersistTimer;
let isSending = false;
let isSummarizing = false;
let pendingSceneOutcomePreview = null;
let pendingSummaryPreview = null;
let summaryEditPending = false;
let streamController = null;
let providerHealthRequestId = 0;
let providerMissingKeys = [];
let serverHistoryBudget = 48000;
let serverRequestTimeout = 120000;
let editingCharacterName = null;
let editingPromptIndex = null;
let editingBeatId = null;
let storageWarningShown = false;
const defaultConversationHistory = [
  { role: "assistant", name: "林黛玉", content: "今日的风倒像有几分春意，只是花落得太早了些。你来找我，可是有什么话要说？" },
  { role: "user", name: "我", content: "如果这一回不写离别，你想把故事带到哪里去？" },
  { role: "assistant", name: "林黛玉", content: "那便去看一场没有结局的雨吧。雨停之前，谁也不必急着把心事说完。" },
];
let projects = loadProjects();
let customTemplates = loadCustomTemplates();
let characterLibrary = loadCharacterLibrary();
let promptLibrary = loadPromptLibrary();
let activeProjectId = projects[0].id;
try {
  activeProjectId = localStorage.getItem(activeProjectStorageKey) || projects[0].id;
} catch {
  notifyStorageIssue();
}
if (!projects.some((project) => project.id === activeProjectId)) activeProjectId = projects[0].id;
let conversationHistory = loadConversation();

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
  const normalized = {
    role: source.role === "user" ? "user" : "assistant",
    name: safeText(source.name, source.role === "user" ? "我" : fallbackAssistantName, 40),
    content: versions[versionIndex] || content,
  };
  if (normalized.role === "assistant" && versions.length > 1) {
    normalized.versions = versions;
    normalized.versionIndex = versionIndex;
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

function persistCustomTemplates() {
  try {
    localStorage.setItem(customTemplatesStorageKey, JSON.stringify(customTemplates));
    updateStorageStatus();
  } catch {
    notifyStorageIssue();
  }
}

function createProject({ id, name, context, conversation, conversationArchive, service, characters, selectedCharacterName, mode, draft, updatedAt, prompts, highlights, checkpoints, beats, activeBeatId, contextMode, summaryMessageCount, summaryUpdatedAt, branchSource }) {
  const safeContext = context && typeof context === "object" ? context : {};
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
  const safeCharacters = Array.isArray(characters) && characters.length
    ? characters.map((item) => {
      const source = item && typeof item === "object" ? item : {};
      return {
        name: safeText(source.name, "角色", 40),
        tone: safeText(source.tone, "待设定", 240),
        details: safeText(source.details, "", 500),
      };
    }).filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
    : defaultCharacters.map((item) => ({ ...item }));
  const selected = safeCharacters.find((item) => item.name === selectedCharacterName) || safeCharacters[0];
  const safeConversationArchive = Array.isArray(conversationArchive)
    ? conversationArchive.slice(-maxArchivedMessages)
      .map((item) => normalizeConversationItem(item, selected.name))
      .filter((item) => item.content)
    : [];
  const safeName = safeText(name || safeContext.title, "未命名作品", 80);
  const safeTitle = safeText(safeContext.title || safeName, safeName, 120);
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
    ? checkpoints.slice(-maxCheckpoints).map((item) => normalizeCheckpoint(item))
    : [];
  const hasConversation = Array.isArray(conversation);
  const safeConversation = hasConversation
    ? conversation.slice(-maxConversationMessages)
      .map((item) => normalizeConversationItem(item, selected.name))
      .filter((item) => item.content)
    : defaultConversationHistory.map((item) => ({ ...item }));
  return {
    id: safeText(id, `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
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

function normalizeCheckpoint(item) {
  const source = item && typeof item === "object" ? item : {};
  const normalized = createProject({
    id: source.id,
    name: source.name || "检查点",
    context: source.context,
    conversation: source.conversation,
    conversationArchive: source.conversationArchive,
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
    name: safeText(source.name, "未命名检查点", 60),
    createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
    context: normalized.context,
    conversation: normalized.conversation,
    conversationArchive: normalized.conversationArchive,
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

function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectsStorageKey) || "null");
    if (Array.isArray(saved) && saved.length) {
      return saved.slice(0, maxProjects).map((project) => createProject(
        project && typeof project === "object" ? project : {},
      ));
    }
  } catch {
    // Fall through to the legacy single-project migration.
  }

  let context = { title: "红楼梦", era: "清代 · 金陵", world: "大观园里的春日将尽，人物在礼法与真心之间周旋。" };
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
    name: context.title,
    context,
    conversation: loadConversation(),
    service,
    characters: defaultCharacters,
    selectedCharacterName: "林黛玉",
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
        .map((item) => ({ ...item, name: item.name || (item.role === "user" ? "我" : "林黛玉") }));
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
  summaryEditPending = false;
  document.querySelector("#workTitle").value = project.context.title;
  workChapter.value = project.context.chapter || "";
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
  creativityValue.textContent = creativityLabels[creativitySelect.value];
  responseLengthSelect.value = responseLengthLabels[project.service.responseLength] ? project.service.responseLength : "standard";
  responseLengthValue.textContent = responseLengthLabels[responseLengthSelect.value];
  conversationTitle.textContent = `与${selectedCharacter.name}对话`;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === selectedMode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  composerHint.textContent = modeHints[selectedMode];
  updateContextModeUI();
}

function renderProjectSelect() {
  const active = getActiveProject();
  const query = projectSearchInput?.value.trim().toLocaleLowerCase() || "";
  const visibleProjects = projects
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .filter((project) => {
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
    projectSearchCount.textContent = `${query ? `${visibleProjects.length} / ` : ""}${projects.length} 个项目${activeMeta}`;
  }
  if (projectLineage) {
    const source = formatBranchSource(active);
    projectLineage.textContent = source ? `支线来源 · ${source}` : "独立项目 · 可从检查点或角色回复创建支线";
    projectLineage.title = source ? `当前项目从${source}派生` : "当前项目没有记录的支线来源";
    projectLineage.classList.toggle("is-branch", Boolean(source));
  }
  if (projectHealth) {
    const health = formatProjectHealth(active);
    projectHealth.textContent = health;
    projectHealth.title = `当前项目状态：${health}`;
    projectHealth.classList.toggle("is-warning", health.includes("待更新") || health.includes("有草稿"));
  }
  projectSelect.innerHTML = "";
  if (!visibleProjects.length) {
    const empty = document.createElement("option");
    empty.disabled = true;
    empty.textContent = "没有匹配的项目";
    projectSelect.appendChild(empty);
    return;
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
  if (active && visibleProjects.some((project) => project.id === active.id)) projectSelect.value = active.id;
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

function getModelMessages({ fullHistory = false } = {}) {
  const source = fullHistory
    ? getConversationForDisplay()
    : isSummaryContextMode()
      ? conversationHistory.slice(-4)
      : conversationHistory.slice(-20);
  const selected = [];
  let historyChars = 0;
  for (const item of [...source].reverse()) {
    if (!item || !["user", "assistant"].includes(item.role) || typeof item.content !== "string" || !item.content.trim()) continue;
    const content = item.content.slice(0, 4000);
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
  const context = getContext();
  const contextChars = Object.values(context).reduce((total, value) => total + value.length, 0);
  const characterChars = [selectedCharacter.name, selectedCharacter.tone, selectedCharacter.details]
    .filter(Boolean)
    .join("").length;
  const historyChars = getModelMessages().reduce((total, message) => total + (message.content || "").length, 0);
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
}

function getContextPreviewText() {
  const context = getContext();
  const modelMessages = getModelMessages();
  const conversation = modelMessages.length
    ? modelMessages.map((message) => `${message.role === "assistant" ? (message.name || selectedCharacter.name) : "我"}：${message.content}`).join("\n\n")
    : "暂无对话消息";
  return [
    "InkEcho · 模型上下文预览",
    `模型：${modelName.value.trim() || "未填写"}`,
    `模式：${selectedMode}`,
    `创作倾向：${creativityLabels[creativitySelect.value] || "平衡"}`,
    `回复长度：${responseLengthLabels[responseLengthSelect.value] || "标准"}`,
    `上下文策略：${isSummaryContextMode() ? "剧情摘要 + 最近两轮对话" : "完整对话"}`,
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
    `角色：${selectedCharacter.name || "未填写"}`,
    `性格与说话方式：${selectedCharacter.tone || "未填写"}`,
    `人物设定：${selectedCharacter.details || "未填写"}`,
    "",
    `【本次对话 · ${modelMessages.length} 条】`,
    conversation,
  ].join("\n");
}

function openContextPreview() {
  updateContextUsage();
  const modelMessages = getModelMessages();
  const breakdown = getContextUsageBreakdown();
  contextPreviewStats.textContent = `${modelMessages.length} 条对话 · ${formatContextUsageBreakdown(breakdown)} · ${isSummaryContextMode() ? "完整历史仍保留" : "按服务端历史预算发送"}`;
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

function setAssistantBubbleText(bubble, text) {
  const rawText = String(text ?? "");
  bubble.dataset.rawText = rawText;
  bubble.innerHTML = renderAssistantMarkdown(rawText);
}

function addMessage({ role, name, text, avatarClass, historyIndex, versions, versionIndex = 0 }) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;
  if (Number.isInteger(historyIndex)) row.dataset.historyIndex = String(historyIndex);

  const avatar = document.createElement("span");
  avatar.className = `message-avatar ${avatarClass}`;
  avatar.textContent = role === "user" ? "I" : name.slice(0, 1);

  const content = document.createElement("div");
  content.className = "message-content";
  const meta = document.createElement("div");
  meta.className = "message-meta";
  const nameElement = document.createElement("strong");
  nameElement.textContent = name;
  const time = document.createElement("time");
  time.textContent = role === "user" ? "刚刚" : "现在";
  meta.append(nameElement, time);
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  if (role === "assistant") setAssistantBubbleText(bubble, text);
  else bubble.textContent = text;
  content.append(meta, bubble);
  if (role === "assistant") {
    const actions = document.createElement("div");
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
      actions.appendChild(versionControls);
    }
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
  return { row, bubble };
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

function switchMessageVersion(historyIndex, nextVersion) {
  if (preventWorkspaceMutation("切换回复版本")) return;
  const message = conversationHistory[historyIndex];
  if (!message || !Array.isArray(message.versions) || !message.versions[nextVersion]) return;
  message.versionIndex = nextVersion;
  message.content = message.versions[nextVersion];
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
    return `${speaker}：${item.content}`;
  }).join("\n\n");
  await copyText(transcript, "对话已复制", "当前还没有对话内容");
}

function formatProjectHandoff() {
  const project = getActiveProject();
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
    return `### ${speaker}\n${content}${suffix}`;
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
    return [`### ${speaker}`, item.content, alternativeBlock].filter(Boolean).join("\n\n");
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
    context: { ...(source.context || {}) },
    conversation: (source.conversation || []).map((item) => ({
      ...item,
      ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
    })),
    conversationArchive: (source.conversationArchive || []).map((item) => ({
      ...item,
      ...(Array.isArray(item.versions) ? { versions: [...item.versions] } : {}),
    })),
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
    role.textContent = item.role === "assistant" ? "角色回复" : "我的提问";
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
      avatarClass: assistant
        ? item.name === "贾宝玉" ? "avatar-bao" : "avatar-dai"
        : "user-avatar",
      versions: item.versions,
      versionIndex: item.versionIndex,
    });
  });
  filterConversationMessages();
}

function resetCurrentConversation() {
  if (preventWorkspaceMutation("重新开始")) return;
  const project = getActiveProject();
  const hasConversation = getConversationMessageCount(project) > 1;
  const hasDraft = Boolean(messageInput.value.trim());
  const hasSummary = Boolean(workSummary.value.trim());
  if ((hasConversation || hasDraft || hasSummary) && !window.confirm("重新开始会清空当前工作区、归档历史、剧情摘要和草稿，但会保留作品设定、角色、场景计划、摘录与检查点。确定继续吗？")) return;

  project.conversationArchive = [];
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
  const backup = {
    format: "inkecho-projects",
    version: 4,
    exportedAt: new Date().toISOString(),
    activeProjectId,
    projects,
    customTemplates,
    characterLibrary,
    promptLibrary,
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
    const skippedProjects = Array.isArray(rawSourceProjects)
      ? rawSourceProjects.length - sourceProjects.length
      : 0;
    const capacitySkippedProjects = Math.max(0, sourceProjects.length - slots);
    const skippedLabel = skippedProjects ? `\n另有 ${skippedProjects} 个无效项目条目，将跳过。` : "";
    const capacitySkippedLabel = capacitySkippedProjects ? `\n另有 ${capacitySkippedProjects} 个有效项目因本地项目上限，将跳过。` : "";
    const versionLabel = backup?.format === "inkecho-projects"
      ? `\n备份格式：v${sourceBackupVersion}，会按当前版本可识别字段导入。`
      : "";
    const templateLabel = importedTemplates.length ? `\n另含 ${importedTemplates.length} 个自定义模板。` : "";
    const libraryLabel = importedLibraryCharacters.length ? `\n另含 ${importedLibraryCharacters.length} 个角色库条目。` : "";
    const promptLabel = importedLibraryPrompts.length ? `\n另含 ${importedLibraryPrompts.length} 个灵感库条目。` : "";
    if (!window.confirm(`将导入 ${importCount} 个项目，现有项目不会被覆盖。${versionLabel}${activeLabel}${skippedLabel}${capacitySkippedLabel}${templateLabel}${libraryLabel}${promptLabel}\n确定继续吗？`)) return;
    const importedEntries = sourceProjects.slice(0, slots).map((project, index) => {
      const source = project && typeof project === "object" ? project : {};
      return {
        sourceId: String(source.id || ""),
        project: createProject({
          ...source,
          id: `project-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
          name: `${safeText(source.name, "未命名作品", 80)} · 导入`,
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
    persistProjects();
    persistCustomTemplates();
    persistCharacterLibrary();
    persistPromptLibrary();
    hydrateActiveProject();
    renderProjectSelect();
    renderCharacters();
    renderConversation();
    updateProviderUI();
    const skippedToast = skippedProjects ? `，跳过 ${skippedProjects} 个无效项目` : "";
    const capacityToast = capacitySkippedProjects ? `，因项目上限跳过 ${capacitySkippedProjects} 个有效项目` : "";
    showToast(`已导入 ${imported.length} 个项目${skippedToast}${capacityToast}${importedTemplates.length ? `、${importedTemplates.length} 个模板` : ""}${importedLibraryCharacters.length ? `、${importedLibraryCharacters.length} 个角色` : ""}${importedLibraryPrompts.length ? `、${importedLibraryPrompts.length} 个灵感` : ""}`);
  } catch {
    showToast("备份文件无效，请选择 InkEcho 导出的 JSON");
  } finally {
    projectBackupFile.value = "";
  }
}

function setSending(value) {
  isSending = value;
  messageInput.disabled = value;
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
  if (!modelName.value.trim() || Object.values(providerDefaults).includes(modelName.value.trim())) {
    modelName.value = providerDefaults[provider];
  }
  setProviderBadge("检查中", "#a26b46");
  checkProviderHealth(provider);
}

function setProviderBadge(label, color) {
  providerBadge.textContent = label;
  providerBadge.style.color = color;
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
  await copyText(text, "配置键名已复制");
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
    const params = new URLSearchParams({ provider, model });
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
    const params = new URLSearchParams({ provider, model: modelName.value.trim() });
    const response = await fetchWithTimeout(`/api/health?${params.toString()}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("健康检查失败");
    if (requestId !== providerHealthRequestId) return;
    if (Number.isFinite(Number(payload.history_budget))) {
      serverHistoryBudget = Math.max(8000, Math.min(Number(payload.history_budget), 120000));
      updateContextUsage();
    }
    if (Number.isFinite(Number(payload.request_timeout))) {
      serverRequestTimeout = Math.max(5000, Math.min(Number(payload.request_timeout) * 1000, 120000));
    }
    const configured = Boolean(payload.providers && payload.providers[provider]);
    const missing = payload.provider_details?.[provider]?.missing;
    const missingKeys = payload.provider_details?.[provider]?.missing_keys;
    providerMissingKeys = Array.isArray(missingKeys) ? missingKeys : [];
    copyProviderConfigKeysButton.hidden = !providerMissingKeys.length;
    const missingFieldsText = Array.isArray(missing) && missing.length ? `缺少：${missing.join("、")}` : "";
    const missingKeysText = Array.isArray(missingKeys) && missingKeys.length ? `请补：${missingKeys.join("、")}` : "";
    const missingHint = [missingFieldsText, missingKeysText].filter(Boolean).join("；");
    providerDescription.textContent = !configured && missingHint
      ? `${providerDescriptions[provider]} ${missingHint}`
      : providerDescriptions[provider];
    setProviderBadge(configured ? "配置完整" : "待配置", configured ? "#6f8b6a" : "#a26b46");
  } catch (error) {
    if (requestId !== providerHealthRequestId) return;
    providerDescription.textContent = providerDescriptions[provider];
    setProviderBadge(error?.name === "AbortError" ? "连接超时" : "离线演示", "#a26b46");
  }
}

async function refreshModels() {
  const provider = providerSelect.value;
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
      showToast(verified ? `已连接并找到 ${payload.models.length} 个模型` : "已读取部署配置（办公网端点不提供模型列表）");
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

function openSummaryPreview(summary, projectId, messageCount) {
  const current = workSummary.value.trim();
  pendingSummaryPreview = { summary, projectId, messageCount };
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
  if (activeProjectId !== pending.projectId) {
    pendingSummaryPreview = null;
    summaryPreviewDialog.close();
    showToast("当前项目已切换，摘要未写入");
    return;
  }
  workSummary.value = pending.summary;
  const project = getActiveProject();
  project.summaryMessageCount = pending.messageCount;
  project.summaryUpdatedAt = Date.now();
  renderSummaryFreshness();
  setProviderBadge("已连接", "#6f8b6a");
  saveWorkspace();
  pendingSummaryPreview = null;
  summaryPreviewDialog.close();
  showToast("剧情摘要已更新");
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
  if (activeProjectId !== pending.projectId) {
    pendingSceneOutcomePreview = null;
    sceneOutcomePreviewDialog.close();
    showToast("当前项目已切换，本幕结果未写入");
    return;
  }
  const project = getActiveProject();
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
  saveServiceSettings();
  const provider = providerSelect.value;
  const model = modelName.value.trim();
  const projectId = activeProjectId;
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
        context: getContext(),
        messages: getModelMessages({ fullHistory: true }),
      }),
    }, clientModelRequestTimeout(summaryRequestTimeout));
    const payload = await response.json();
    if (!response.ok || !payload.ok || !payload.summary) {
      const error = new Error(payload.error || "剧情摘要生成失败");
      error.userMessage = payload.error || "剧情摘要生成失败";
      throw error;
    }
    if (activeProjectId !== projectId) {
      showToast("当前项目已切换，摘要未写入");
      return;
    }
    const project = getActiveProject();
    setProviderBadge("已连接", "#6f8b6a");
    openSummaryPreview(payload.summary.slice(0, 2000), projectId, getConversationMessageCount(project));
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
  saveServiceSettings();
  const projectId = activeProjectId;
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
        context: getContext(),
        messages: getModelMessages({ fullHistory: true }),
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
    if (activeProjectId !== projectId || !currentBeat) {
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

async function requestStreamReply(onDelta, character = selectedCharacter) {
  const controller = new AbortController();
  streamController = controller;
  const response = await withAbortTimeout(fetch("/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: controller.signal,
    body: JSON.stringify({
      provider: providerSelect.value,
      model: modelName.value.trim(),
      mode: selectedMode,
      creativity: creativitySelect.value,
      response_length: responseLengthSelect.value,
      character,
      context: getContext(),
      messages: getModelMessages(),
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
      } else if (payload.type === "delta") {
        answer += payload.delta || "";
        onDelta(payload.delta || "");
      } else if (payload.type === "error") {
        const error = new Error(payload.error || "模型流式响应中断");
        error.userMessage = payload.error || "模型流式响应中断";
        throw error;
      } else if (payload.type === "done") {
        finished = true;
      }
    }
    if (done) finished = true;
  }

  if (!answer.trim()) throw new Error("模型没有返回文本");
  streamController = null;
  return answer.trim();
}

function fallbackReply() {
  const list = replyTemplates[selectedMode];
  return list[Math.floor(Math.random() * list.length)];
}

async function generateAssistantReply(assistantMessage, character = selectedCharacter) {
  setSending(true);
  let reply = "";
  try {
    reply = await requestStreamReply((delta) => {
      const currentText = assistantMessage.bubble.dataset.rawText || "";
      setAssistantBubbleText(assistantMessage.bubble, `${currentText}${delta}`);
      messages.scrollTop = messages.scrollHeight;
    }, character);
  } catch (error) {
    const timedOut = error?.name === "StreamTimeoutError";
    const stopped = error?.name === "AbortError" && !timedOut;
    reply = (assistantMessage.bubble.dataset.rawText || "").trim();
    if (!stopped) setProviderBadge("连接失败", "#a26b46");
    if (!reply && !stopped) {
      reply = fallbackReply();
      setAssistantBubbleText(assistantMessage.bubble, reply);
      showToast(`${error?.userMessage || "模型服务暂不可用"}，当前使用演示回复`);
    } else if (!stopped && reply) {
      showToast(`${error?.userMessage || "模型流式响应中断"}，已保留当前内容`);
    } else if (stopped && !reply) {
      reply = "（生成已停止）";
      setAssistantBubbleText(assistantMessage.bubble, reply);
      }
  } finally {
    streamController = null;
    setSending(false);
  }
  return reply;
}

async function retryMessage(historyIndex) {
  if (preventWorkspaceMutation("重试回复")) return;
  if (historyIndex !== conversationHistory.length - 1 || conversationHistory.at(-1)?.role !== "assistant") {
    showToast("请先重试最后一条回复");
    return;
  }

  const previousReply = conversationHistory.at(-1);
  const speaker = previousReply.name || selectedCharacter.name;
  const previousVersions = Array.isArray(previousReply.versions)
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
    avatarClass: speaker === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  const reply = await generateAssistantReply(assistantMessage, character);
  const versions = Array.from(new Set([...previousVersions, reply].filter(Boolean)));
  conversationHistory.push({
    role: "assistant",
    name: speaker,
    content: reply,
    ...(versions.length > 1 ? { versions, versionIndex: versions.indexOf(reply) } : {}),
  });
  saveConversation();
  renderConversation();
}

function selectCharacter(card) {
  document.querySelectorAll(".character-card").forEach((item) => item.classList.remove("active"));
  card.classList.add("active");
  selectedCharacter = {
    name: card.dataset.character,
    tone: card.dataset.tone,
    details: card.dataset.details || "",
  };
  conversationTitle.textContent = `与${selectedCharacter.name}对话`;
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
  avatar.className = `character-avatar ${character.name === "林黛玉" ? "avatar-dai" : "avatar-bao"}`;
  avatar.textContent = character.name.slice(0, 1);
  const description = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = character.name;
  const subtitle = document.createElement("small");
  subtitle.textContent = character.name === "林黛玉" ? "清冷 · 诗意 · 敏锐" : (character.tone || "新角色 · 待设定").slice(0, 18);
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
  conversationTitle.textContent = `与${selectedCharacter.name}对话`;
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
  conversationTitle.textContent = `与${selectedCharacter.name}对话`;
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
      conversationTitle.textContent = `与${selectedCharacter.name}对话`;
      persistActiveProject();
      showToast(`已用角色库设定更新「${character.name}」`);
      return;
    }
    selectedCharacter = { ...existing };
    renderCharacters();
    conversationTitle.textContent = `与${selectedCharacter.name}对话`;
    persistActiveProject();
    showToast(`已切换到角色「${character.name}」`);
    return;
  }
  characters.push({ name: character.name, tone: character.tone, details: character.details });
  project.characters = characters;
  selectedCharacter = { ...character };
  renderCharacters();
  conversationTitle.textContent = `与${selectedCharacter.name}对话`;
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

document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedMode = tab.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    composerHint.textContent = modeHints[selectedMode];
    persistActiveProject();
    showToast(`已切换到「${selectedMode}」模式`);
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

providerSelect.addEventListener("change", () => {
  const project = getActiveProject();
  const provider = providerSelect.value;
  modelName.value = project.service?.models?.[provider] || providerDefaults[provider];
  saveServiceSettings();
  updateProviderUI();
  showToast(`已切换到 ${providerSelect.options[providerSelect.selectedIndex].text}`);
});

modelName.addEventListener("change", () => {
  saveServiceSettings();
  checkProviderHealth();
});

creativitySelect.addEventListener("change", () => {
  creativityValue.textContent = creativityLabels[creativitySelect.value];
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
copyProviderDiagnosticsButton.addEventListener("click", () => copyText(providerDiagnosticsText.textContent, "连接诊断已复制"));
providerDiagnosticsDialog.addEventListener("click", (event) => {
  if (event.target === providerDiagnosticsDialog) providerDiagnosticsDialog.close();
});
generateSummaryButton.addEventListener("click", summarizeConversation);
toggleContextModeButton.addEventListener("click", toggleContextMode);
contextUsage.addEventListener("click", openContextPreview);
copyContextPreviewButton.addEventListener("click", () => copyText(contextPreviewText.textContent, "上下文预览已复制"));
contextDialog.addEventListener("click", (event) => {
  if (event.target === contextDialog) contextDialog.close();
});
applySummaryPreviewButton.addEventListener("click", applySummaryPreview);
summaryPreviewDialog.addEventListener("click", (event) => {
  if (event.target === summaryPreviewDialog) summaryPreviewDialog.close();
});
summaryPreviewDialog.addEventListener("close", () => {
  pendingSummaryPreview = null;
});
applySceneOutcomePreviewButton.addEventListener("click", applySceneOutcomePreview);
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

composer.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isSending) {
    stopGeneration();
    return;
  }
  const text = messageInput.value.trim();
  if (!text) {
    messageInput.focus();
    showToast("先写下一句话吧");
    return;
  }

  addMessage({ role: "user", name: "我", text, historyIndex: conversationHistory.length, avatarClass: "user-avatar" });
  conversationHistory.push({ role: "user", name: "我", content: text });
  messageInput.value = "";
  saveDraft();
  saveConversation();
  const character = { ...selectedCharacter };

  const assistantMessage = addMessage({
    role: "assistant",
    name: character.name,
    text: "",
    historyIndex: conversationHistory.length,
    avatarClass: character.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  const reply = await generateAssistantReply(assistantMessage, character);

  conversationHistory.push({ role: "assistant", name: character.name, content: reply });
  saveConversation();
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
archiveSearchInput.addEventListener("input", renderArchiveHistory);
closeArchiveButton.addEventListener("click", closeArchiveHistory);
clearArchiveButton.addEventListener("click", clearArchivedHistory);
archiveDialog.addEventListener("click", (event) => {
  if (event.target === archiveDialog) closeArchiveHistory();
});
archiveDialog.querySelector("form").addEventListener("submit", (event) => event.preventDefault());

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
});

document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    element.style.transform = `translate(${x}px, ${y}px)`;
  });
  element.addEventListener("pointerleave", () => {
    element.style.transform = "translate(0, 0)";
  });
});

document.querySelector("#focusComposer").addEventListener("click", () => {
  messageInput.focus();
  document.querySelector(".conversation").scrollIntoView({ behavior: "smooth", block: "center" });
});

toggleFocusModeButton.addEventListener("click", () => {
  setFocusMode(!document.body.classList.contains("focus-mode"));
  showToast(document.body.classList.contains("focus-mode") ? "已进入专注模式" : "已退出专注模式");
});

document.querySelector("#exportSession").addEventListener("click", exportSession);

function closeConversationMenu() {
  conversationMenu.hidden = true;
  conversationMenuButton.setAttribute("aria-expanded", "false");
}

searchConversationButton.addEventListener("click", () => {
  setConversationSearchOpen(conversationSearch.hidden);
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
  persistActiveProject();
  activeProjectId = projectId;
  persistProjects();
  hydrateActiveProject();
  renderProjectSelect();
  renderCharacters();
  renderConversation();
  updateProviderUI();
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
  const project = createProject({
    id: `project-${Date.now()}`,
    name: cleanName,
    context: { title: cleanName, era: "", world: "" },
    conversation: [{ role: "assistant", name: "林黛玉", content: `「${cleanName}」已经准备好。先写下第一句，让故事找到自己的方向。` }],
    service: {
      provider: providerSelect.value,
      model: modelName.value.trim(),
      creativity: creativitySelect.value,
      responseLength: responseLengthSelect.value,
    },
    characters: defaultCharacters,
    selectedCharacterName: "林黛玉",
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
    name: cleanName,
    branchSource: {
      type: "project",
      label: current.name,
      detail: "完整复制",
    },
    context: { ...current.context, title: cleanName },
    conversation: current.conversation.map((item) => ({ ...item })),
    conversationArchive: current.conversationArchive.map((item) => ({ ...item })),
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
newProjectButton.addEventListener("click", createNewProject);
duplicateProjectButton.addEventListener("click", duplicateCurrentProject);
exportProjectsButton.addEventListener("click", exportProjectsBackup);
importProjectsButton.addEventListener("click", () => projectBackupFile.click());
projectBackupFile.addEventListener("change", importProjectsBackup);
deleteProjectButton.addEventListener("click", deleteCurrentProject);

hydrateActiveProject();
renderProjectSelect();
renderCharacters();
renderConversation();
updateProviderUI();
updateCount();
updateStorageStatus();
restoreFocusMode();
