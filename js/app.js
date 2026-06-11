const lessons = [
  {
    id: 1,
    title: "ภาพรวมร้านข้าวออนไลน์ + AI",
    duration: "12 นาที",
    videoId: "",
    overview:
      "เริ่มจากภาพรวมธุรกิจข้าวกล่องเดลิเวอรี สิ่งที่ต้องเตรียมก่อนเปิดร้าน และวิธีใช้ AI เป็นผู้ช่วยคิดงานประจำวัน ตั้งแต่เมนู ราคา ไปจนถึงคำขาย",
    prompts: [
      {
        title: "วิเคราะห์จุดตั้งต้นของร้าน",
        text:
          "ฉันอยากเปิดร้านข้าวกล่องเดลิเวอรีจากครัวที่บ้าน กลุ่มลูกค้าหลักคือพนักงานออฟฟิศและนักศึกษาในรัศมี 5 กิโลเมตร ช่วยวิเคราะห์จุดแข็ง จุดอ่อน โอกาส อุปสรรค และแนะนำตำแหน่งทางการตลาดที่เหมาะกับร้านนี้"
      }
    ],
    resources: ["Checklist สิ่งที่ต้องเตรียมก่อนเปิดร้าน", "โครงสร้างข้อมูลร้านสำหรับส่งให้ AI"]
  },
  {
    id: 2,
    title: "ออกแบบเมนูให้ขายง่าย",
    duration: "16 นาที",
    videoId: "",
    overview:
      "ใช้ AI ช่วยจัดกลุ่มเมนูหลัก เมนูพ่วง และเซ็ตสุดคุ้ม โดยเน้นวัตถุดิบร่วมเพื่อลดของเสียและทำงานในครัวได้เร็วขึ้น",
    prompts: [
      {
        title: "ออกแบบเมนูจากวัตถุดิบร่วม",
        text:
          "ช่วยออกแบบเมนูข้าวกล่อง 12 เมนูโดยใช้วัตถุดิบร่วมให้มากที่สุด วัตถุดิบหลักคือหมูสับ ไก่ชิ้น ไข่ ผักกะหล่ำ และใบกะเพรา ขอแบ่งเป็นเมนูขายดี เมนูประหยัด และเมนูพรีเมียม พร้อมจุดขายของแต่ละเมนู"
      }
    ],
    resources: ["Template ตารางเมนู", "ตัวอย่างชื่อเมนูที่อ่านแล้วน่ากดสั่ง"]
  },
  {
    id: 3,
    title: "คำนวณต้นทุน GP และราคาขาย",
    duration: "18 นาที",
    videoId: "",
    overview:
      "วางราคาขายโดยคิดต้นทุนวัตถุดิบ แพ็กเกจ ค่าเสียเวลา และค่าธรรมเนียมของแพลตฟอร์ม เพื่อไม่ให้ยอดขายดีแต่กำไรหาย",
    prompts: [
      {
        title: "คำนวณราคาหลังหัก GP",
        text:
          "เมนูข้าวกะเพราหมูสับมีต้นทุนรวมกล่องละ 28 บาท แพลตฟอร์มหัก GP 30% ฉันต้องการกำไรสุทธิหลังหัก GP และต้นทุนอย่างน้อย 35% ของราคาขาย ช่วยคำนวณราคาขายที่เหมาะสมและอธิบายสูตรแบบทีละขั้น"
      }
    ],
    resources: ["สูตรคำนวณ GP", "ตารางเช็กกำไรต่อกล่อง"]
  },
  {
    id: 4,
    title: "ทำภาพเมนูและคำขาย",
    duration: "15 นาที",
    videoId: "",
    overview:
      "ใช้ AI ช่วยวาง brief ภาพอาหาร ชื่อเมนู คำอธิบายเมนู และโปรโมชันให้สื่อสารชัดบนหน้าแอปเดลิเวอรี",
    prompts: [
      {
        title: "เขียนคำขายเมนู",
        text:
          "ช่วยเขียนชื่อเมนูและคำอธิบายสำหรับเมนูข้าวไก่ย่างซอสแจ่วให้เหมาะกับแอปเดลิเวอรี ความยาวกระชับ น่ากิน และเน้นจุดขายว่าอิ่มคุ้ม ทำสดใหม่ทุกกล่อง ขอ 10 ตัวเลือก"
      }
    ],
    resources: ["สูตรเขียนคำอธิบายเมนู", "Checklist ภาพปกเมนู"]
  },
  {
    id: 5,
    title: "สมัครและจัดหน้าร้านบนแพลตฟอร์ม",
    duration: "20 นาที",
    videoId: "",
    overview:
      "เตรียมข้อมูลร้าน เมนู เวลาเปิดปิด รูปภาพ และเอกสารที่ต้องใช้สำหรับนำร้านขึ้น LineMan, GrabFood, ShopeeFood, Foodpanda และ Robinhood",
    prompts: [
      {
        title: "จัดข้อมูลร้านก่อนสมัคร",
        text:
          "ช่วยทำ checklist ข้อมูลที่ต้องเตรียมก่อนสมัครร้านอาหารบนแอปเดลิเวอรี เช่น ชื่อร้าน ประเภทร้าน เวลาเปิดปิด เมนู รูปภาพ เอกสาร และข้อมูลบัญชี พร้อมแนะนำลำดับการเตรียมงาน"
      }
    ],
    resources: ["Checklist ข้อมูลร้าน", "Template คำอธิบายร้าน"]
  },
  {
    id: 6,
    title: "ทำคอนเทนต์และโปรโมชันรายสัปดาห์",
    duration: "14 นาที",
    videoId: "",
    overview:
      "สร้างแผนโพสต์ โปรโมชัน และข้อความตอบลูกค้า ให้ร้านมีความเคลื่อนไหวโดยไม่ต้องคิดใหม่ทุกวัน",
    prompts: [
      {
        title: "วางแผนคอนเทนต์ 7 วัน",
        text:
          "ช่วยทำแผนคอนเทนต์ 7 วันสำหรับร้านข้าวกล่องออนไลน์ เน้นเมนูขายดี โปรเปิดร้าน รีวิวลูกค้า และโพสต์ช่วงเที่ยง ขอหัวข้อโพสต์ แคปชันสั้น และไอเดียภาพประกอบ"
      }
    ],
    resources: ["Calendar คอนเทนต์", "ชุดข้อความตอบลูกค้า"]
  },
  {
    id: 7,
    title: "อ่านยอดขายแล้วปรับร้านด้วย AI",
    duration: "17 นาที",
    videoId: "",
    overview:
      "สรุปข้อมูลยอดขาย รีวิว และเมนูขายดีให้ AI ช่วยหาโอกาสปรับราคา เพิ่มเมนู และลดขั้นตอนที่เสียเวลาในครัว",
    prompts: [
      {
        title: "สรุปรายงานประจำสัปดาห์",
        text:
          "นี่คือข้อมูลยอดขาย 7 วันของร้านข้าวกล่องของฉัน [วางข้อมูลยอดขาย/เมนู/รีวิว] ช่วยสรุปเมนูที่ควรดันต่อ เมนูที่ควรปรับ ราคาใดที่ควรทดลอง และสิ่งที่ควรทำในสัปดาห์หน้า 5 ข้อ"
      }
    ],
    resources: ["Template สรุปยอดรายสัปดาห์", "Checklist ปรับเมนูจากรีวิว"]
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
          <p>นำ Video ID จาก YouTube แบบ Unlisted มาใส่ใน <code>js/app.js</code> ตรง <code>videoId</code> ของบทเรียนนี้ แล้วตัวเล่นจะเปลี่ยนเป็นวิดีโอทันที</p>
        </div>
      </div>
    `;
    return;
  }

  videoFrame.innerHTML = `
    <iframe
      src="${embedUrl(lesson.videoId)}"
      title="${lesson.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

function extractYouTubeId(url) {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/
  ];
  const match = patterns.map((pattern) => url.match(pattern)).find(Boolean);
  return match ? match[1] : "";
}

document.querySelector("#embedHelper").addEventListener("submit", (event) => {
  event.preventDefault();
  const url = document.querySelector("#youtubeUrl").value.trim();
  const id = extractYouTubeId(url);
  const output = document.querySelector("#embedOutput");

  if (!id) {
    output.textContent = "ยังอ่าน Video ID ไม่ได้ ลองใช้ลิงก์รูปแบบ https://www.youtube.com/watch?v=VIDEO_ID";
    return;
  }

  output.innerHTML = `Video ID คือ <code>${id}</code><br>นำไปวางในบทเรียน เช่น <code>videoId: "${id}"</code>`;
});

renderApp();
