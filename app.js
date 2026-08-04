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
const sendButton = document.querySelector(".send-button");

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
let conversationHistory = [
  { role: "assistant", content: "今日的风倒像有几分春意，只是花落得太早了些。你来找我，可是有什么话要说？" },
  { role: "user", content: "如果这一回不写离别，你想把故事带到哪里去？" },
  { role: "assistant", content: "那便去看一场没有结局的雨吧。雨停之前，谁也不必急着把心事说完。" },
];

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
  row.append(...(role === "user" ? [content, avatar] : [avatar, content]));
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  updateCount();
}

function getContext() {
  return {
    title: document.querySelector("#workTitle").value,
    era: document.querySelector("#workEra").value,
    world: document.querySelector("#workWorld").value,
  };
}

function setSending(value) {
  isSending = value;
  messageInput.disabled = value;
  sendButton.disabled = value;
  sendButton.textContent = value ? "…" : "↑";
  composer.classList.toggle("is-sending", value);
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
  showToast(`已切换至 ${selectedCharacter.name}`);
}

document.querySelectorAll(".character-card").forEach((card) => {
  card.addEventListener("click", () => selectCharacter(card));
});

document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedMode = tab.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    composerHint.textContent = modeHints[selectedMode];
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
  updateProviderUI();
  showToast(`已切换到 ${providerSelect.options[providerSelect.selectedIndex].text}`);
});

modelName.addEventListener("change", () => checkProviderHealth());

composer.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isSending) return;
  const text = messageInput.value.trim();
  if (!text) {
    messageInput.focus();
    showToast("先写下一句话吧");
    return;
  }

  addMessage({ role: "user", name: "我", text, avatarClass: "user-avatar" });
  conversationHistory.push({ role: "user", content: text });
  messageInput.value = "";
  setSending(true);

  let reply;
  try {
    reply = await requestModelReply();
  } catch {
    reply = fallbackReply();
    showToast("模型服务暂不可用，当前使用演示回复");
  } finally {
    setSending(false);
  }

  conversationHistory.push({ role: "assistant", content: reply });
  addMessage({
    role: "assistant",
    name: selectedCharacter.name,
    text: reply,
    avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
});

messageInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    composer.requestSubmit();
  }
});

document.querySelector("#resetSession").addEventListener("click", () => {
  messages.innerHTML = "";
  const greeting = `新的对话已经准备好。${selectedCharacter.name}正在等你写下第一句。`;
  conversationHistory = [{ role: "assistant", content: greeting }];
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
  const card = document.createElement("button");
  card.type = "button";
  card.className = "character-card";
  card.dataset.character = cleanName;
  card.dataset.tone = "性格与声音，等待你来定义。";

  const avatar = document.createElement("span");
  avatar.className = "character-avatar avatar-bao";
  avatar.textContent = cleanName.slice(0, 1);
  const description = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = cleanName;
  const subtitle = document.createElement("small");
  subtitle.textContent = "新角色 · 待设定";
  description.append(title, subtitle);
  const mark = document.createElement("span");
  mark.className = "selected-mark";
  mark.textContent = "✓";
  card.append(avatar, description, mark);
  card.addEventListener("click", () => selectCharacter(card));
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

updateProviderUI();
updateCount();
