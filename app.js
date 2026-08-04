const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const messageInput = document.querySelector("#messageInput");
const messageCount = document.querySelector("#messageCount");
const conversationTitle = document.querySelector("#conversationTitle");
const composerHint = document.querySelector("#composerHint");
const toast = document.querySelector("#toast");
const characterList = document.querySelector("#characterList");
const providerSelect = document.querySelector("#providerSelect");
const modelName = document.querySelector("#modelName");
const providerBadge = document.querySelector("#providerBadge");
const providerDescription = document.querySelector("#providerDescription");
const refreshModelsButton = document.querySelector("#refreshModels");
const modelOptions = document.querySelector("#modelOptions");
const sendButton = document.querySelector(".send-button");
const projectSelect = document.querySelector("#projectSelect");
const newProjectButton = document.querySelector("#newProject");
const deleteProjectButton = document.querySelector("#deleteProject");
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
let isSending = false;
let streamController = null;
const defaultConversationHistory = [
  { role: "assistant", name: "林黛玉", content: "今日的风倒像有几分春意，只是花落得太早了些。你来找我，可是有什么话要说？" },
  { role: "user", name: "我", content: "如果这一回不写离别，你想把故事带到哪里去？" },
  { role: "assistant", name: "林黛玉", content: "那便去看一场没有结局的雨吧。雨停之前，谁也不必急着把心事说完。" },
];
let projects = loadProjects();
let activeProjectId = localStorage.getItem(activeProjectStorageKey) || projects[0].id;
if (!projects.some((project) => project.id === activeProjectId)) activeProjectId = projects[0].id;
let conversationHistory = loadConversation();

function createProject({ id, name, context, conversation, service, characters, selectedCharacterName, mode }) {
  const safeCharacters = Array.isArray(characters) && characters.length
    ? characters.map((item) => ({ name: String(item.name || "角色"), tone: String(item.tone || "待设定") }))
    : defaultCharacters.map((item) => ({ ...item }));
  const selected = safeCharacters.find((item) => item.name === selectedCharacterName) || safeCharacters[0];
  return {
    id,
    name: name || context?.title || "未命名作品",
    context: {
      title: context?.title || name || "未命名作品",
      era: context?.era || "",
      world: context?.world || "",
    },
    conversation: Array.isArray(conversation) && conversation.length
      ? conversation.slice(-40).map((item) => ({
        role: item.role === "user" ? "user" : "assistant",
        name: String(item.name || (item.role === "user" ? "我" : selectedCharacterName || "角色")),
        content: String(item.content || ""),
      })).filter((item) => item.content.trim())
      : defaultConversationHistory.map((item) => ({ ...item })),
    service: {
      provider: service?.provider || "custom_azure",
      model: service?.model || providerDefaults.custom_azure,
    },
    characters: safeCharacters,
    selectedCharacterName: selected.name,
    mode: mode || "续写",
    updatedAt: Date.now(),
  };
}

function loadProjects() {
  try {
    const saved = JSON.parse(localStorage.getItem(projectsStorageKey) || "null");
    if (Array.isArray(saved) && saved.length) {
      return saved.map((project) => createProject(project));
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

function persistProjects() {
  try {
    localStorage.setItem(projectsStorageKey, JSON.stringify(projects));
    localStorage.setItem(activeProjectStorageKey, activeProjectId);
  } catch {
    // Local storage is an enhancement; the project still works in memory.
  }
}

function persistActiveProject() {
  const project = getActiveProject();
  if (!project) return;
  const context = getContext();
  project.name = context.title || project.name || "未命名作品";
  project.context = context;
  project.conversation = conversationHistory.slice(-40);
  project.service = { provider: providerSelect.value, model: modelName.value.trim() };
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
  conversationHistory = project.conversation.map((item) => ({ ...item }));
  selectedMode = project.mode || "续写";
  selectedCharacter = project.characters.find((item) => item.name === project.selectedCharacterName) || project.characters[0];
  providerSelect.value = project.service.provider;
  modelName.value = project.service.model;
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
  projectSelect.innerHTML = "";
  projects
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .forEach((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.textContent = project.name || "未命名作品";
      projectSelect.appendChild(option);
    });
  if (active) projectSelect.value = active.id;
}

function saveConversation() {
  try {
    localStorage.setItem(conversationStorageKey, JSON.stringify(conversationHistory.slice(-40)));
  } catch {
    // Local storage is an enhancement; the conversation still works without it.
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
  } catch {
    // Ignore malformed or unavailable local storage.
  }
  persistActiveProject();
}

function saveWorkspace() {
  try {
    localStorage.setItem(workspaceStorageKey, JSON.stringify(getContext()));
  } catch {
    // Local storage is an enhancement; the workspace still works without it.
  }
  persistActiveProject();
}

function restoreServiceSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(serviceStorageKey) || "null");
    if (saved && providerDefaults[saved.provider]) providerSelect.value = saved.provider;
    if (saved && typeof saved.model === "string" && saved.model.trim()) modelName.value = saved.model;
  } catch {
    // Ignore malformed or unavailable local storage.
  }
}

function saveServiceSettings() {
  try {
    localStorage.setItem(serviceStorageKey, JSON.stringify({ provider: providerSelect.value, model: modelName.value.trim() }));
  } catch {
    // Local storage is an enhancement; the selector still works without it.
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

function addMessage({ role, name, text, avatarClass }) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;

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
    content.appendChild(actions);
  }
  row.append(...(role === "user" ? [content, avatar] : [avatar, content]));
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  updateCount();
  return { row, bubble };
}

async function copyMessage(text) {
  if (!text.trim()) {
    showToast("这条回复还没有内容");
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
    showToast("回复已复制");
  } catch {
    showToast("复制失败，请手动选择文字");
  }
}

function renderConversation() {
  messages.innerHTML = "";
  conversationHistory.forEach((item) => {
    const assistant = item.role === "assistant";
    addMessage({
      role: item.role,
      name: item.name || (assistant ? selectedCharacter.name : "我"),
      text: item.content,
      avatarClass: assistant
        ? item.name === "贾宝玉" ? "avatar-bao" : "avatar-dai"
        : "user-avatar",
    });
  });
}

function getContext() {
  return {
    title: document.querySelector("#workTitle").value,
    era: document.querySelector("#workEra").value,
    world: document.querySelector("#workWorld").value,
  };
}

function exportSession() {
  const context = getContext();
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
    "",
    "## 角色卡",
    "",
    characters.length ? characters.join("\n") : "- 暂无角色卡",
    "",
    "## 对话记录",
    "",
    transcript.join("\n\n---\n\n"),
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
  providerBadge.textContent = "检查中";
  checkProviderHealth(provider);
}

async function checkProviderHealth(provider = providerSelect.value) {
  try {
    const response = await fetch("/api/health");
    const payload = await response.json();
    const configured = Boolean(payload.providers && payload.providers[provider]);
    providerBadge.textContent = configured ? "已配置" : "待配置";
    providerBadge.style.color = configured ? "#6f8b6a" : "#a26b46";
  } catch {
    providerBadge.textContent = "离线演示";
    providerBadge.style.color = "#a26b46";
  }
}

async function refreshModels() {
  refreshModelsButton.disabled = true;
  refreshModelsButton.textContent = "读取中";
  try {
    const response = await fetch(`/api/models?provider=${encodeURIComponent(providerSelect.value)}`);
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error("模型列表不可用");
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
    showToast(payload.models.length ? `已找到 ${payload.models.length} 个模型` : "当前服务未返回模型列表");
  } catch {
    showToast("无法读取模型列表，请检查服务配置");
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
      character: selectedCharacter,
      context: getContext(),
      messages: conversationHistory,
    }),
  });
  const payload = await response.json();
  if (!response.ok || !payload.ok || !payload.text) {
    throw new Error("模型服务请求失败");
  }
  providerBadge.textContent = "已连接";
  providerBadge.style.color = "#6f8b6a";
  return payload.text;
}

async function requestStreamReply(onDelta) {
  streamController = new AbortController();
  const response = await fetch("/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: streamController.signal,
    body: JSON.stringify({
      provider: providerSelect.value,
      model: modelName.value.trim(),
      mode: selectedMode,
      character: selectedCharacter,
      context: getContext(),
      messages: conversationHistory,
    }),
  });
  if (!response.ok || !response.body) throw new Error("流式服务不可用");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let answer = "";
  let finished = false;

  while (!finished) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    const events = buffer.split("\n\n");
    buffer = events.pop() || "";

    for (const event of events) {
      const line = event.split("\n").find((item) => item.startsWith("data: "));
      if (!line) continue;
      const payload = JSON.parse(line.slice(6));
      if (payload.type === "start") {
        providerBadge.textContent = "已连接";
        providerBadge.style.color = "#6f8b6a";
      } else if (payload.type === "delta") {
        answer += payload.delta || "";
        onDelta(payload.delta || "");
      } else if (payload.type === "error") {
        throw new Error("模型流式响应中断");
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
    messageInput.value = card.dataset.prompt;
    messageInput.focus();
    showToast("灵感已放入输入框");
  });
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

refreshModelsButton.addEventListener("click", refreshModels);

["#workTitle", "#workEra", "#workWorld"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", saveWorkspace);
});

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

  addMessage({ role: "user", name: "我", text, avatarClass: "user-avatar" });
  conversationHistory.push({ role: "user", name: "我", content: text });
  saveConversation();
  messageInput.value = "";
  setSending(true);

  const assistantMessage = addMessage({
    role: "assistant",
    name: selectedCharacter.name,
    text: "",
    avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  let reply = "";
  try {
    reply = await requestStreamReply((delta) => {
      assistantMessage.bubble.textContent += delta;
      messages.scrollTop = messages.scrollHeight;
    });
  } catch (error) {
    const stopped = error?.name === "AbortError";
    reply = assistantMessage.bubble.textContent.trim();
    if (!reply && !stopped) {
      reply = fallbackReply();
      assistantMessage.bubble.textContent = reply;
      showToast("模型服务暂不可用，当前使用演示回复");
    } else if (stopped && !reply) {
      reply = "（生成已停止）";
      assistantMessage.bubble.textContent = reply;
    }
  } finally {
    streamController = null;
    setSending(false);
  }

  conversationHistory.push({ role: "assistant", name: selectedCharacter.name, content: reply });
  saveConversation();
});

messageInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    composer.requestSubmit();
  }
});

document.querySelector("#resetSession").addEventListener("click", () => {
  messages.innerHTML = "";
  const greeting = `新的对话已经准备好。${selectedCharacter.name}正在等你写下第一句。`;
  conversationHistory = [{ role: "assistant", name: selectedCharacter.name, content: greeting }];
  saveConversation();
  addMessage({
    role: "assistant",
    name: selectedCharacter.name,
    text: greeting,
    avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  showToast("对话已重置");
});

document.querySelector("#addCharacter").addEventListener("click", () => {
  const name = window.prompt("给新角色取一个名字：");
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  const tone = window.prompt("用一句话描述这个角色的性格或说话方式：", "性格与声音，等待你来定义。") || "性格与声音，等待你来定义。";
  const card = createCharacterCard({ name: cleanName, tone: tone.trim() || "性格与声音，等待你来定义。" });
  characterList.appendChild(card);
  selectCharacter(card);
  showToast(`已添加角色 ${cleanName}`);
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
  const name = window.prompt("给新的创作项目取一个名字：", "未命名新章");
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  const project = createProject({
    id: `project-${Date.now()}`,
    name: cleanName,
    context: { title: cleanName, era: "", world: "" },
    conversation: [{ role: "assistant", name: "林黛玉", content: `「${cleanName}」已经准备好。先写下第一句，让故事找到自己的方向。` }],
    service: { provider: providerSelect.value, model: modelName.value.trim() },
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
newProjectButton.addEventListener("click", createNewProject);
deleteProjectButton.addEventListener("click", deleteCurrentProject);

hydrateActiveProject();
renderProjectSelect();
renderCharacters();
renderConversation();
updateProviderUI();
updateCount();
