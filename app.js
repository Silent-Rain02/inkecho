const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const messageInput = document.querySelector("#messageInput");
const messageCount = document.querySelector("#messageCount");
const conversationTitle = document.querySelector("#conversationTitle");
const conversationMenuButton = document.querySelector("#conversationMenuButton");
const conversationMenu = document.querySelector("#conversationMenu");
const copyConversationButton = document.querySelector("#copyConversation");
const exportFromMenuButton = document.querySelector("#exportFromMenu");
const resetFromMenuButton = document.querySelector("#resetFromMenu");
const saveCheckpointFromMenuButton = document.querySelector("#saveCheckpointFromMenu");
const openCheckpointsButton = document.querySelector("#openCheckpoints");
const searchConversationButton = document.querySelector("#searchConversationButton");
const conversationSearch = document.querySelector("#conversationSearch");
const conversationSearchInput = document.querySelector("#conversationSearchInput");
const conversationSearchCount = document.querySelector("#conversationSearchCount");
const clearConversationSearchButton = document.querySelector("#clearConversationSearch");
const composerHint = document.querySelector("#composerHint");
const toast = document.querySelector("#toast");
const characterList = document.querySelector("#characterList");
const manageCharacterButton = document.querySelector("#manageCharacter");
const characterDialog = document.querySelector("#characterDialog");
const characterForm = document.querySelector("#characterForm");
const characterNameInput = document.querySelector("#characterNameInput");
const characterToneInput = document.querySelector("#characterToneInput");
const deleteCharacterButton = document.querySelector("#deleteCharacter");
const cancelCharacterButton = document.querySelector("#cancelCharacter");
const providerSelect = document.querySelector("#providerSelect");
const modelName = document.querySelector("#modelName");
const providerBadge = document.querySelector("#providerBadge");
const providerDescription = document.querySelector("#providerDescription");
const refreshModelsButton = document.querySelector("#refreshModels");
const modelOptions = document.querySelector("#modelOptions");
const creativitySelect = document.querySelector("#creativitySelect");
const creativityValue = document.querySelector("#creativityValue");
const responseLengthSelect = document.querySelector("#responseLengthSelect");
const responseLengthValue = document.querySelector("#responseLengthValue");
const sendButton = document.querySelector(".send-button");
const draftStatus = document.querySelector("#draftStatus");
const projectSelect = document.querySelector("#projectSelect");
const projectSearchInput = document.querySelector("#projectSearch");
const newProjectButton = document.querySelector("#newProject");
const duplicateProjectButton = document.querySelector("#duplicateProject");
const exportProjectsButton = document.querySelector("#exportProjects");
const importProjectsButton = document.querySelector("#importProjects");
const projectBackupFile = document.querySelector("#projectBackupFile");
const deleteProjectButton = document.querySelector("#deleteProject");
const workReference = document.querySelector("#workReference");
const workSummary = document.querySelector("#workSummary");
const workInstructions = document.querySelector("#workInstructions");
const referenceCount = document.querySelector("#referenceCount");
const importReferenceButton = document.querySelector("#importReference");
const referenceFile = document.querySelector("#referenceFile");
const promptList = document.querySelector("#promptList");
const highlightList = document.querySelector("#highlightList");
const highlightCount = document.querySelector("#highlightCount");
const appendHighlightsButton = document.querySelector("#appendHighlightsToSummary");
const copyHighlightsButton = document.querySelector("#copyHighlights");
const addPromptButton = document.querySelector("#addPrompt");
const promptDialog = document.querySelector("#promptDialog");
const promptForm = document.querySelector("#promptForm");
const promptDialogTitle = document.querySelector("#promptDialogTitle");
const promptTitleInput = document.querySelector("#promptTitleInput");
const promptTextInput = document.querySelector("#promptTextInput");
const cancelPromptButton = document.querySelector("#cancelPrompt");
const checkpointDialog = document.querySelector("#checkpointDialog");
const checkpointList = document.querySelector("#checkpointList");
const closeCheckpointButton = document.querySelector("#closeCheckpoint");
const conversationStorageKey = "inkecho.conversation.v1";
const workspaceStorageKey = "inkecho.workspace.v1";
const serviceStorageKey = "inkecho.service.v1";
const projectsStorageKey = "inkecho.projects.v1";
const activeProjectStorageKey = "inkecho.active-project.v1";
const defaultCharacters = [
  { name: "林黛玉", tone: "清冷、敏锐，却藏着很深的真心。" },
  { name: "贾宝玉", tone: "真挚、叛逆，对世俗规矩总有自己的看法。" },
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
const maxPrompts = 12;
const maxHighlights = 30;
const maxCheckpoints = 12;
const providerRequestTimeout = 12000;
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
};
let selectedMode = "续写";
let toastTimer;
let draftTimer;
let isSending = false;
let streamController = null;
let providerHealthRequestId = 0;
let editingCharacterName = null;
let editingPromptIndex = null;
let storageWarningShown = false;
const defaultConversationHistory = [
  { role: "assistant", name: "林黛玉", content: "今日的风倒像有几分春意，只是花落得太早了些。你来找我，可是有什么话要说？" },
  { role: "user", name: "我", content: "如果这一回不写离别，你想把故事带到哪里去？" },
  { role: "assistant", name: "林黛玉", content: "那便去看一场没有结局的雨吧。雨停之前，谁也不必急着把心事说完。" },
];
let projects = loadProjects();
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

function createProject({ id, name, context, conversation, service, characters, selectedCharacterName, mode, draft, updatedAt, prompts, highlights, checkpoints }) {
  const safeContext = context && typeof context === "object" ? context : {};
  const safeService = service && typeof service === "object" ? service : {};
  const selectedProvider = Object.prototype.hasOwnProperty.call(providerDefaults, safeService.provider)
    ? safeService.provider
    : "custom_azure";
  const safeCharacters = Array.isArray(characters) && characters.length
    ? characters.map((item) => {
      const source = item && typeof item === "object" ? item : {};
      return {
        name: safeText(source.name, "角色", 40),
        tone: safeText(source.tone, "待设定", 240),
      };
    }).filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
    : defaultCharacters.map((item) => ({ ...item }));
  const selected = safeCharacters.find((item) => item.name === selectedCharacterName) || safeCharacters[0];
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
  const safeCheckpoints = Array.isArray(checkpoints)
    ? checkpoints.slice(-maxCheckpoints).map((item) => normalizeCheckpoint(item))
    : [];
  const safeConversation = Array.isArray(conversation) && conversation.length
    ? conversation.slice(-40).map((item) => {
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
        name: safeText(source.name, source.role === "user" ? "我" : selected.name || "角色", 40),
        content: versions[versionIndex] || content,
      };
      if (normalized.role === "assistant" && versions.length > 1) {
        normalized.versions = versions;
        normalized.versionIndex = versionIndex;
      }
      return {
        ...normalized,
      };
    }).filter((item) => item.content)
    : defaultConversationHistory.map((item) => ({ ...item }));
  return {
    id: safeText(id, `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    name: safeName,
    context: {
      title: safeTitle,
      era: safeText(safeContext.era, "", 120),
      world: safeText(safeContext.world, "", 800),
      reference: safeText(safeContext.reference, "", 4000),
      summary: safeText(safeContext.summary, "", 2000),
      instructions: safeText(safeContext.instructions, "", 1200),
    },
    conversation: safeConversation,
    service: {
      provider: selectedProvider,
      model: safeText(safeService.model, providerDefaults[selectedProvider], 160),
      creativity: creativityLabels[safeService.creativity] ? safeService.creativity : "balanced",
      responseLength: responseLengthLabels[safeService.responseLength] ? safeService.responseLength : "standard",
    },
    draft: safeText(draft, "", 10000),
    prompts: safePrompts,
    highlights: safeHighlights,
    checkpoints: safeCheckpoints,
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
    service: source.service,
    characters: source.characters,
    selectedCharacterName: source.selectedCharacterName,
    mode: source.mode,
    draft: source.draft,
    prompts: source.prompts,
    highlights: source.highlights,
  });
  return {
    id: safeText(source.id, `checkpoint-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, 100),
    name: safeText(source.name, "未命名检查点", 60),
    createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
    context: normalized.context,
    conversation: normalized.conversation,
    service: normalized.service,
    characters: normalized.characters,
    selectedCharacterName: normalized.selectedCharacterName,
    mode: normalized.mode,
    draft: normalized.draft,
    prompts: normalized.prompts,
    highlights: normalized.highlights,
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
        .slice(-40)
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

function notifyStorageIssue() {
  if (storageWarningShown) return;
  storageWarningShown = true;
  showToast("本地保存不可用或空间不足，请先导出项目 JSON 备份");
}

function persistProjects() {
  try {
    localStorage.setItem(projectsStorageKey, JSON.stringify(projects));
    localStorage.setItem(activeProjectStorageKey, activeProjectId);
    storageWarningShown = false;
  } catch {
    notifyStorageIssue();
  }
}

function persistActiveProject() {
  const project = getActiveProject();
  if (!project) return;
  const context = getContext();
  project.name = context.title || project.name || "未命名作品";
  project.context = context;
  project.conversation = conversationHistory.slice(-40);
  project.draft = messageInput.value.slice(0, 10000);
  project.service = { provider: providerSelect.value, model: modelName.value.trim() };
  project.service.creativity = creativitySelect.value;
  project.service.responseLength = responseLengthSelect.value;
  project.characters = Array.from(document.querySelectorAll(".character-card")).map((card) => ({
    name: card.dataset.character || "角色",
    tone: card.dataset.tone || "待设定",
  }));
  project.selectedCharacterName = selectedCharacter.name;
  project.mode = selectedMode;
  project.updatedAt = Date.now();
  persistProjects();
  renderProjectSelect();
}

function hydrateActiveProject() {
  const project = getActiveProject();
  if (!project) return;
  document.querySelector("#workTitle").value = project.context.title;
  document.querySelector("#workEra").value = project.context.era;
  document.querySelector("#workWorld").value = project.context.world;
  workReference.value = project.context.reference || "";
  workSummary.value = project.context.summary || "";
  workInstructions.value = project.context.instructions || "";
  renderCustomPrompts();
  renderHighlights();
  renderCheckpoints();
  updateReferenceCount();
  messageInput.value = project.draft || "";
  draftStatus.textContent = messageInput.value ? "草稿已恢复" : "草稿自动保存";
  conversationHistory = project.conversation.map((item) => ({ ...item }));
  selectedMode = project.mode || "续写";
  selectedCharacter = project.characters.find((item) => item.name === project.selectedCharacterName) || project.characters[0];
  providerSelect.value = project.service.provider;
  modelName.value = project.service.model;
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
}

function renderProjectSelect() {
  const active = getActiveProject();
  const query = projectSearchInput?.value.trim().toLocaleLowerCase() || "";
  const visibleProjects = projects
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .filter((project) => !query || (project.name || "未命名作品").toLocaleLowerCase().includes(query));
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
    option.textContent = project.name || "未命名作品";
    projectSelect.appendChild(option);
  });
  if (active && visibleProjects.some((project) => project.id === active.id)) projectSelect.value = active.id;
}

function saveConversation() {
  try {
    localStorage.setItem(conversationStorageKey, JSON.stringify(conversationHistory.slice(-40)));
  } catch {
    notifyStorageIssue();
  }
  persistActiveProject();
}

function restoreWorkspace() {
  try {
    const saved = JSON.parse(localStorage.getItem(workspaceStorageKey) || "null");
    if (!saved) return;
    if (typeof saved.title === "string") document.querySelector("#workTitle").value = saved.title;
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
  persistActiveProject();
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
  const project = getActiveProject();
  if (!project) return;
  project.draft = messageInput.value.slice(0, 10000);
  persistProjects();
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

function updateCount() {
  const count = messages.querySelectorAll(".message-row").length;
  messageCount.textContent = `${String(count).padStart(2, "0")} 条消息`;
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
  bubble.textContent = text;
  content.append(meta, bubble);
  if (role === "assistant") {
    const actions = document.createElement("div");
    actions.className = "message-actions";
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "message-action";
    copyButton.textContent = "复制";
    copyButton.setAttribute("aria-label", "复制这条回复");
    copyButton.addEventListener("click", () => copyMessage(bubble.textContent));
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
    conversationSearchCount.textContent = `${conversationHistory.length} 条消息`;
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
  conversationSearchCount.textContent = `${matched} / ${rows.length} 条`;
}

function switchMessageVersion(historyIndex, nextVersion) {
  if (isSending) {
    showToast("请先停止当前生成");
    return;
  }
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
  const transcript = conversationHistory.map((item) => {
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    return `${speaker}：${item.content}`;
  }).join("\n\n");
  await copyText(transcript, "对话已复制", "当前还没有对话内容");
}

function highlightKey(item) {
  if (!item || !item.content) return "";
  return [item.role || "assistant", item.name || "角色", item.content].join("\u0000");
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
    service: { ...(source.service || {}) },
    characters: (source.characters || []).map((item) => ({ ...item })),
    selectedCharacterName: source.selectedCharacterName,
    mode: source.mode,
    draft: source.draft || "",
    prompts: (source.prompts || []).map((item) => ({ ...item })),
    highlights: (source.highlights || []).map((item) => ({ ...item })),
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

function renderCheckpoints() {
  if (!checkpointList) return;
  const checkpoints = getActiveProject()?.checkpoints || [];
  checkpointList.innerHTML = "";
  if (!checkpoints.length) {
    const empty = document.createElement("p");
    empty.className = "checkpoint-empty";
    empty.textContent = "保存一个检查点，随时回到这一刻。";
    checkpointList.appendChild(empty);
    return;
  }
  checkpoints.slice().reverse().forEach((checkpoint) => {
    const card = document.createElement("div");
    card.className = "checkpoint-card";
    const main = document.createElement("div");
    main.className = "checkpoint-main";
    const title = document.createElement("strong");
    title.textContent = checkpoint.name;
    const meta = document.createElement("small");
    meta.className = "checkpoint-meta";
    meta.textContent = `${formatCheckpointDate(checkpoint.createdAt)} · ${checkpoint.conversation.length} 条消息`;
    main.append(title, meta);
    const actions = document.createElement("div");
    actions.className = "checkpoint-actions";
    const restore = document.createElement("button");
    restore.type = "button";
    restore.className = "checkpoint-restore";
    restore.textContent = "恢复";
    restore.addEventListener("click", () => restoreCheckpoint(checkpoint.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "checkpoint-remove";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `删除检查点 ${checkpoint.name}`);
    remove.addEventListener("click", () => deleteCheckpoint(checkpoint.id));
    actions.append(restore, remove);
    card.append(main, actions);
    checkpointList.appendChild(card);
  });
}

function saveCheckpoint() {
  if (isSending) {
    showToast("模型回复完成后再保存检查点");
    return;
  }
  persistActiveProject();
  const project = getActiveProject();
  if (project.checkpoints.length >= maxCheckpoints) {
    showToast(`每个项目最多保存 ${maxCheckpoints} 个检查点`);
    return;
  }
  const name = window.prompt("给当前检查点取一个名字：", `检查点 ${project.checkpoints.length + 1}`);
  if (!name || !name.trim()) return;
  project.checkpoints.push({
    id: `checkpoint-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: name.trim().slice(0, 60),
    createdAt: Date.now(),
    ...cloneProjectState(project),
  });
  persistProjects();
  renderCheckpoints();
  showToast(`已保存检查点「${name.trim()}」`);
}

function openCheckpointDialog() {
  renderCheckpoints();
  checkpointDialog.showModal();
}

function closeCheckpointDialog() {
  checkpointDialog.close();
}

function restoreCheckpoint(checkpointId) {
  if (isSending) {
    showToast("模型回复完成后再恢复检查点");
    return;
  }
  const project = getActiveProject();
  const checkpoint = project.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) return;
  if (!window.confirm(`恢复「${checkpoint.name}」？当前未保存的对话状态会被替换。`)) return;
  Object.assign(project, cloneProjectState(checkpoint));
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
  if (isSending) {
    showToast("请先停止当前生成");
    return;
  }
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

function getContext() {
  return {
    title: document.querySelector("#workTitle").value,
    era: document.querySelector("#workEra").value,
    world: document.querySelector("#workWorld").value,
    reference: workReference.value,
    summary: workSummary.value,
    instructions: workInstructions.value,
  };
}

function exportSession() {
  const context = getContext();
  const highlights = getActiveProject()?.highlights || [];
  const characters = Array.from(document.querySelectorAll(".character-card")).map((card) => {
    const name = card.dataset.character || "未命名角色";
    const tone = card.dataset.tone || "";
    return `- **${name}**：${tone}`;
  });
  const transcript = conversationHistory.map((item) => {
    const speaker = item.name || (item.role === "assistant" ? selectedCharacter.name : "我");
    return `### ${speaker}\n\n${item.content}`;
  });
  const markdown = [
    `# ${context.title || "未命名作品"} · InkEcho`,
    "",
    `> 导出时间：${new Date().toLocaleString("zh-CN")}`,
    "",
    "## 作品设定",
    "",
    `- **时代 / 氛围**：${context.era || "未填写"}`,
    `- **世界观备注**：${context.world || "未填写"}`,
    context.reference ? `- **参考片段**：\n\n${context.reference}` : "",
    context.summary ? `- **剧情摘要**：\n\n${context.summary}` : "",
    context.instructions ? `- **本次创作要求**：\n\n${context.instructions}` : "",
    "",
    "## 角色卡",
    "",
    characters.length ? characters.join("\n") : "- 暂无角色卡",
    "",
    "## 对话记录",
    "",
    transcript.join("\n\n---\n\n"),
    "",
    "## 灵感摘录",
    "",
    highlights.length
      ? highlights.map((highlight) => `- **${highlight.name}**：${highlight.content}`).join("\n")
      : "暂无摘录",
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
    version: 1,
    exportedAt: new Date().toISOString(),
    activeProjectId,
    projects,
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

async function importProjectsBackup() {
  const file = projectBackupFile.files?.[0];
  if (!file) return;
  if (file.size > 5_000_000) {
    showToast("备份文件超过 5MB，无法导入");
    projectBackupFile.value = "";
    return;
  }
  try {
    const backup = JSON.parse(await file.text());
    if (backup?.format !== "inkecho-projects" || !Array.isArray(backup.projects)) {
      throw new Error("invalid backup");
    }
    const slots = Math.max(0, maxProjects - projects.length);
    if (!slots) {
      showToast(`项目数量已达到上限（${maxProjects} 个）`);
      return;
    }
    const imported = backup.projects.slice(0, slots).map((project, index) => {
      const source = project && typeof project === "object" ? project : {};
      return createProject({
        ...source,
        id: `project-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
        name: `${safeText(source.name, "未命名作品", 80)} · 导入`,
      });
    });
    if (!imported.length) throw new Error("empty backup");
    projects.push(...imported);
    activeProjectId = imported[0].id;
    persistProjects();
    hydrateActiveProject();
    renderProjectSelect();
    renderCharacters();
    renderConversation();
    updateProviderUI();
    showToast(`已导入 ${imported.length} 个项目`);
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

async function checkProviderHealth(provider = providerSelect.value) {
  const requestId = ++providerHealthRequestId;
  try {
    const params = new URLSearchParams({ provider, model: modelName.value.trim() });
    const response = await fetchWithTimeout(`/api/health?${params.toString()}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("健康检查失败");
    if (requestId !== providerHealthRequestId) return;
    const configured = Boolean(payload.providers && payload.providers[provider]);
    setProviderBadge(configured ? "已配置" : "待配置", configured ? "#6f8b6a" : "#a26b46");
  } catch (error) {
    if (requestId !== providerHealthRequestId) return;
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
    setProviderBadge("已连接", "#6f8b6a");
    showToast(payload.models.length ? `已找到 ${payload.models.length} 个模型` : "当前服务未返回模型列表");
  } catch (error) {
    if (providerSelect.value !== provider) return;
    setProviderBadge(error?.name === "AbortError" ? "连接超时" : "连接失败", "#a26b46");
    showToast(error?.name === "AbortError" ? "读取模型列表超时，请检查服务是否启动" : "无法读取模型列表，请检查服务配置");
  } finally {
    refreshModelsButton.disabled = false;
    refreshModelsButton.textContent = "刷新模型";
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
      messages: conversationHistory,
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
      messages: conversationHistory,
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
      assistantMessage.bubble.textContent += delta;
      messages.scrollTop = messages.scrollHeight;
    }, character);
  } catch (error) {
    const timedOut = error?.name === "StreamTimeoutError";
    const stopped = error?.name === "AbortError" && !timedOut;
    reply = assistantMessage.bubble.textContent.trim();
    if (!stopped) setProviderBadge("连接失败", "#a26b46");
    if (!reply && !stopped) {
      reply = fallbackReply();
      assistantMessage.bubble.textContent = reply;
      showToast(`${error?.userMessage || "模型服务暂不可用"}，当前使用演示回复`);
    } else if (!stopped && reply) {
      showToast(`${error?.userMessage || "模型流式响应中断"}，已保留当前内容`);
    } else if (stopped && !reply) {
      reply = "（生成已停止）";
      assistantMessage.bubble.textContent = reply;
      }
  } finally {
    streamController = null;
    setSending(false);
  }
  return reply;
}

async function retryMessage(historyIndex) {
  if (isSending) {
    showToast("请先停止当前生成");
    return;
  }
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
    || { name: speaker, tone: selectedCharacter.tone };
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
  }));
}

function openCharacterEditor(character = null) {
  editingCharacterName = character?.name || null;
  characterDialog.querySelector("#characterDialogTitle").textContent = character ? "编辑角色" : "添加角色";
  characterNameInput.value = character?.name || "";
  characterToneInput.value = character?.tone || "性格与声音，等待你来定义。";
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
    if (selectedCharacter.name === editingCharacterName) {
      selectedCharacter = { name, tone };
    }
  } else {
    characters.push({ name, tone });
    selectedCharacter = { name, tone };
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
  promptDialog.showModal();
  promptTitleInput.focus();
}

function closePromptEditor() {
  editingPromptIndex = null;
  promptDialog.close();
}

function savePrompt(event) {
  event.preventDefault();
  const title = safeText(promptTitleInput.value, "", 32);
  const text = safeText(promptTextInput.value, "", 500);
  if (!title || !text) return;
  const project = getActiveProject();
  if (editingPromptIndex !== null) {
    const prompt = project.prompts[editingPromptIndex];
    if (!prompt) return;
    prompt.title = title;
    prompt.text = text;
    persistActiveProject();
    renderCustomPrompts();
    closePromptEditor();
    showToast(`已更新灵感「${title}」`);
    return;
  }
  if (project.prompts.length >= maxPrompts) {
    closePromptEditor();
    showToast(`自定义灵感最多保存 ${maxPrompts} 条`);
    return;
  }
  project.prompts.push({
    id: `prompt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    text,
  });
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

["#workTitle", "#workEra", "#workWorld"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", saveWorkspace);
});

workReference.addEventListener("input", () => {
  if (workReference.value.length > 4000) workReference.value = workReference.value.slice(0, 4000);
  updateReferenceCount();
  saveWorkspace();
});
workSummary.addEventListener("input", () => {
  if (workSummary.value.length > 2000) workSummary.value = workSummary.value.slice(0, 2000);
  saveWorkspace();
});
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

document.querySelector("#resetSession").addEventListener("click", () => {
  if (isSending) {
    showToast("模型回复完成后再重新开始");
    return;
  }
  const hasUnsavedConversation = conversationHistory.length > 1 || messageInput.value.trim();
  if (hasUnsavedConversation && !window.confirm("重新开始会清空当前对话和草稿，但会保留作品设定、摘录和检查点。确定继续吗？")) return;
  messages.innerHTML = "";
  messageInput.value = "";
  saveDraft();
  const greeting = `新的对话已经准备好。${selectedCharacter.name}正在等你写下第一句。`;
  conversationHistory = [{ role: "assistant", name: selectedCharacter.name, content: greeting }];
  saveConversation();
  addMessage({
    role: "assistant",
    name: selectedCharacter.name,
    text: greeting,
    historyIndex: conversationHistory.length - 1,
    avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  showToast("对话已重置");
});

manageCharacterButton.addEventListener("click", () => openCharacterEditor(selectedCharacter));
document.querySelector("#addCharacter").addEventListener("click", () => openCharacterEditor());
characterForm.addEventListener("submit", saveCharacter);
deleteCharacterButton.addEventListener("click", deleteCharacter);
cancelCharacterButton.addEventListener("click", closeCharacterEditor);
characterDialog.addEventListener("click", (event) => {
  if (event.target === characterDialog) closeCharacterEditor();
});
addPromptButton.addEventListener("click", openPromptEditor);
appendHighlightsButton.addEventListener("click", appendHighlightsToSummary);
copyHighlightsButton.addEventListener("click", copyHighlights);
promptForm.addEventListener("submit", savePrompt);
cancelPromptButton.addEventListener("click", closePromptEditor);
promptDialog.addEventListener("click", (event) => {
  if (event.target === promptDialog) closePromptEditor();
});
closeCheckpointButton.addEventListener("click", closeCheckpointDialog);
checkpointDialog.addEventListener("click", (event) => {
  if (event.target === checkpointDialog) closeCheckpointDialog();
});

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

document.querySelector("#exportSession").addEventListener("click", exportSession);

function closeConversationMenu() {
  conversationMenu.hidden = true;
  conversationMenuButton.setAttribute("aria-expanded", "false");
}

searchConversationButton.addEventListener("click", () => {
  setConversationSearchOpen(conversationSearch.hidden);
});
conversationSearchInput.addEventListener("input", filterConversationMessages);
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
exportFromMenuButton.addEventListener("click", () => {
  closeConversationMenu();
  exportSession();
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
  if (event.key === "Escape" && !conversationSearch.hidden) {
    setConversationSearchOpen(false);
  }
});

function switchProject(projectId) {
  if (projectId === activeProjectId) return;
  if (isSending) {
    projectSelect.value = activeProjectId;
    showToast("模型回复完成后再切换项目");
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

function createNewProject() {
  if (projects.length >= maxProjects) {
    showToast(`项目数量已达到上限（${maxProjects} 个）`);
    return;
  }
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
  if (isSending) {
    showToast("模型回复完成后再复制项目");
    return;
  }
  persistActiveProject();
  const current = getActiveProject();
  const name = window.prompt("给这条创作支线取一个名字：", `${current.name} · 分支`);
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: cleanName,
    context: { ...current.context },
    conversation: current.conversation.map((item) => ({ ...item })),
    service: { ...current.service },
    characters: current.characters.map((item) => ({ ...item })),
    selectedCharacterName: current.selectedCharacterName,
    mode: current.mode,
    draft: current.draft,
    prompts: current.prompts.map((item) => ({ ...item })),
    highlights: current.highlights.map((item) => ({ ...item })),
    checkpoints: current.checkpoints.map(cloneCheckpoint),
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
  if (isSending) {
    showToast("模型回复完成后再创建支线");
    return;
  }
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
  const branchKeys = new Set(branchConversation.map((item) => highlightKey(item)).filter(Boolean));
  const branchCheckpoints = current.checkpoints
    .filter((checkpoint) => checkpoint.conversation.every((item) => branchKeys.has(highlightKey(item))))
    .map(cloneCheckpoint);
  const cleanName = name.trim();
  const project = createProject({
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: cleanName,
    context: { ...current.context },
    conversation: branchConversation,
    service: { ...current.service },
    characters: current.characters.map((item) => ({ ...item })),
    selectedCharacterName: current.selectedCharacterName,
    mode: current.mode,
    draft: messageInput.value,
    prompts: current.prompts.map((item) => ({ ...item })),
    highlights: current.highlights
      .filter((highlight) => branchKeys.has(highlightKey(highlight)))
      .map((item) => ({ ...item })),
    checkpoints: branchCheckpoints,
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
