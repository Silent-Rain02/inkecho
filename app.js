const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const messageInput = document.querySelector("#messageInput");
const messageCount = document.querySelector("#messageCount");
const conversationTitle = document.querySelector("#conversationTitle");
const composerHint = document.querySelector("#composerHint");
const toast = document.querySelector("#toast");
const characterList = document.querySelector("#characterList");

const modeHints = {
  续写: "续写这一段故事……",
  改写: "告诉我想改写的情节……",
  独白: "让角色说出心里话……",
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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateCount() {
  const count = messages.querySelectorAll(".message-row").length;
  messageCount.textContent = `${String(count).padStart(2, "0")} 条消息`;
}

function addMessage({ role, name, text, avatarClass }) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;
  const time = role === "user" ? "刚刚" : "现在";
  const avatar = `<span class="message-avatar ${avatarClass}">${role === "user" ? "I" : name.slice(0, 1)}</span>`;
  const content = `
    <div class="message-content">
      <div class="message-meta"><strong>${name}</strong><time>${time}</time></div>
      <div class="bubble"></div>
    </div>`;
  row.innerHTML = role === "user" ? `${content}${avatar}` : `${avatar}${content}`;
  row.querySelector(".bubble").textContent = text;
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
  updateCount();
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

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) {
    messageInput.focus();
    showToast("先写下一句话吧");
    return;
  }

  addMessage({ role: "user", name: "我", text, avatarClass: "user-avatar" });
  messageInput.value = "";
  const replyList = replyTemplates[selectedMode];
  const reply = replyList[Math.floor(Math.random() * replyList.length)];
  window.setTimeout(() => {
    addMessage({
      role: "assistant",
      name: selectedCharacter.name,
      text: reply,
      avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
    });
  }, 500);
});

messageInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    composer.requestSubmit();
  }
});

document.querySelector("#resetSession").addEventListener("click", () => {
  messages.innerHTML = "";
  addMessage({
    role: "assistant",
    name: selectedCharacter.name,
    text: `新的对话已经准备好。${selectedCharacter.name}正在等你写下第一句。`,
    avatarClass: selectedCharacter.name === "贾宝玉" ? "avatar-bao" : "avatar-dai",
  });
  showToast("对话已重置");
});

document.querySelector("#addCharacter").addEventListener("click", () => {
  const name = window.prompt("给新角色取一个名字：");
  if (!name || !name.trim()) return;
  const card = document.createElement("button");
  card.type = "button";
  card.className = "character-card";
  card.dataset.character = name.trim();
  card.dataset.tone = "性格与声音，等待你来定义。";
  card.innerHTML = `
    <span class="character-avatar avatar-bao">${name.trim().slice(0, 1)}</span>
    <span><strong>${name.trim()}</strong><small>新角色 · 待设定</small></span>
    <span class="selected-mark">✓</span>`;
  card.addEventListener("click", () => selectCharacter(card));
  characterList.appendChild(card);
  selectCharacter(card);
  showToast(`已添加角色 ${name.trim()}`);
});

updateCount();
