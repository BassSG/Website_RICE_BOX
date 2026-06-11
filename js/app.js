const lessons = [
  {
    id: 1,
    title: "EP 1 เตรียมตัวเปิดร้าน BOX Online",
    duration: "EP 1",
    videoId: "HnvG_SYuatM",
    overview:
      "เตรียมภาพรวมก่อนเปิดร้าน BOX Online ว่าต้องคิดเรื่องอะไรบ้างก่อนเริ่มขายจริง ตั้งแต่แนวคิดร้าน เมนู ระบบทำงาน และการใช้ AI เป็นผู้ช่วยวางแผน",
    prompts: [
      {
        title: "Prompt เตรียมตัวเปิดร้าน",
        text:
          "ฉันกำลังเตรียมเปิดร้าน BOX Online ช่วยทำ checklist สิ่งที่ต้องเตรียมก่อนเปิดร้าน ตั้งแต่เมนู วัตถุดิบ ราคา ระบบรับออเดอร์ ช่องทางขาย และสิ่งที่ควรใช้ AI ช่วยในแต่ละขั้นตอน"
      }
    ],
    resources: ["Checklist เตรียมตัวเปิดร้าน BOX Online", "รายการข้อมูลร้านที่ควรเตรียมไว้ก่อนทำระบบ"]
  },
  {
    id: 2,
    title: "EP 2 สร้าง POS สำเร็จรูป",
    duration: "EP 2",
    videoId: "qJfNpTLNixA",
    overview:
      "เริ่มสร้างระบบ POS สำเร็จรูปสำหรับร้าน BOX Online เพื่อช่วยจัดการเมนู ราคา ออเดอร์ และข้อมูลพื้นฐานของร้านให้เป็นระบบมากขึ้น",
    prompts: [
      {
        title: "Prompt วางโครงระบบ POS",
        text:
          "ช่วยออกแบบโครงสร้าง POS สำหรับร้าน BOX Online โดยมีเมนู ราคา หมวดหมู่สินค้า รายการออเดอร์ สถานะออเดอร์ ยอดขาย และรายงานพื้นฐาน พร้อมแนะนำหน้าจอที่ควรมีสำหรับเจ้าของร้าน"
      }
    ],
    resources: ["โครงสร้างหน้าจอ POS", "Checklist ฟีเจอร์ POS สำหรับร้านอาหารออนไลน์"]
  },
  {
    id: 3,
    title: "EP 3 สร้าง POS เสร็จสิ้น",
    duration: "EP 3",
    videoId: "RUyyL3L_gCc",
    overview:
      "ต่อยอดระบบ POS ให้เสร็จสมบูรณ์ขึ้น พร้อมจัดระเบียบ flow การใช้งานให้เหมาะกับร้าน BOX Online ที่ต้องรับออเดอร์และดูข้อมูลได้รวดเร็ว",
    prompts: [
      {
        title: "Prompt ตรวจระบบ POS ก่อนใช้งาน",
        text:
          "ช่วยตรวจ checklist ระบบ POS สำหรับร้าน BOX Online ก่อนนำไปใช้งานจริง ว่าควรทดสอบอะไรบ้าง เช่น เพิ่มเมนู แก้ราคา รับออเดอร์ เปลี่ยนสถานะ ดูยอดขาย และสรุปรายงาน"
      }
    ],
    resources: ["Checklist ทดสอบระบบ POS", "รายการสิ่งที่ควรเพิ่มใน EP ถัดไป"]
  }
];

const state = {
  activeLessonId: 1,
  activeTab: "overview",
  completed: new Set(JSON.parse(localStorage.getItem("ricebox-completed") || "[]"))
};

const lessonList = document.querySelector("#lessonList");
const videoFrame = document.querySelector("#videoFrame");
const lessonKicker = document.querySelector("#lessonKicker");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonDetail = document.querySelector("#lessonDetail");
const completeLessonBtn = document.querySelector("#completeLessonBtn");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

function getActiveLesson() {
  return lessons.find((lesson) => lesson.id === state.activeLessonId) || lessons[0];
}

function embedUrl(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
}

function renderVideo(lesson) {
  if (!lesson.videoId) {
    videoFrame.innerHTML = `
      <div class="video-placeholder">
        <div>
          <h3>พร้อมฝังวิดีโอของบทนี้</h3>
          <p>บทเรียนนี้กำลังเตรียมวิดีโอเพิ่มเติม เมื่อพร้อมแล้วตัวเล่นจะแสดงในพื้นที่นี้ทันที</p>
        </div>
      </div>
    `;
    return;
  }

  videoFrame.innerHTML = `
    <iframe
      src="${embedUrl(lesson.videoId)}"
      title="${lesson.title}"
      allow="accelerometer; autoplay; clipboard-write; compute-pressure; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
}

function renderLessons() {
  lessonList.innerHTML = lessons
    .map((lesson) => {
      const active = lesson.id === state.activeLessonId ? "active" : "";
      const done = state.completed.has(lesson.id) ? "done" : "";
      return `
        <button class="lesson-button ${active} ${done}" type="button" data-lesson-id="${lesson.id}">
          <span class="lesson-number">${lesson.id}</span>
          <span>
            <strong>${lesson.title}</strong>
            <small>${lesson.duration}</small>
          </span>
          <span class="done-dot" aria-label="${done ? "เรียนแล้ว" : "ยังไม่ได้เรียน"}"></span>
        </button>
      `;
    })
    .join("");
}

function renderDetail(lesson) {
  if (state.activeTab === "overview") {
    lessonDetail.innerHTML = `<h4>${lesson.title}</h4><p>${lesson.overview}</p>`;
    return;
  }

  if (state.activeTab === "prompts") {
    lessonDetail.innerHTML = lesson.prompts
      .map(
        (prompt, index) => `
          <div class="prompt-card">
            <strong>${prompt.title}</strong>
            <pre>${prompt.text}</pre>
            <button class="copy-prompt" type="button" data-prompt-index="${index}">คัดลอก Prompt</button>
          </div>
        `
      )
      .join("");
    return;
  }

  lessonDetail.innerHTML = lesson.resources
    .map((resource) => `<div class="resource-card"><strong>${resource}</strong><p>เตรียมไว้เป็นรายการประกอบบทเรียนนี้</p></div>`)
    .join("");
}

function updateProgress() {
  const percent = Math.round((state.completed.size / lessons.length) * 100);
  progressText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function renderApp() {
  const lesson = getActiveLesson();
  lessonKicker.textContent = `บทเรียนที่ ${lesson.id} • ${lesson.duration}`;
  lessonTitle.textContent = lesson.title;
  completeLessonBtn.classList.toggle("completed", state.completed.has(lesson.id));
  completeLessonBtn.textContent = state.completed.has(lesson.id) ? "เรียนบทนี้แล้ว" : "ทำเครื่องหมายว่าเรียนแล้ว";
  renderLessons();
  renderVideo(lesson);
  renderDetail(lesson);
  updateProgress();
}

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-id]");
  if (!button) return;
  state.activeLessonId = Number(button.dataset.lessonId);
  state.activeTab = "overview";
  document.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === "overview"));
  renderApp();
});

document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = button.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderDetail(getActiveLesson());
  });
});

completeLessonBtn.addEventListener("click", () => {
  const lesson = getActiveLesson();
  if (state.completed.has(lesson.id)) {
    state.completed.delete(lesson.id);
  } else {
    state.completed.add(lesson.id);
  }
  localStorage.setItem("ricebox-completed", JSON.stringify([...state.completed]));
  renderApp();
});

lessonDetail.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-prompt-index]");
  if (!button) return;
  const prompt = getActiveLesson().prompts[Number(button.dataset.promptIndex)];
  await navigator.clipboard.writeText(prompt.text);
  button.textContent = "คัดลอกแล้ว";
  setTimeout(() => {
    button.textContent = "คัดลอก Prompt";
  }, 1400);
});

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  });
});

let deferredInstallPrompt = null;
const installAppBtn = document.querySelector("#installAppBtn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installAppBtn) {
    installAppBtn.hidden = false;
  }
});

installAppBtn?.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installAppBtn.hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installAppBtn) {
    installAppBtn.hidden = true;
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

renderApp();
