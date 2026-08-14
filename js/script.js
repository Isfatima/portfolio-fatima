/* ============================================================
   Fatima Ismail — Portfolio
   Project data + interactions
   ============================================================ */

const PROJECTS = [
  {
    id: "smart-glasses",
    index: "01",
    group: "Hardware",
    disciplines: ["hardware", "intelligence", "interaction"],
    category: "Embedded Vision / Assistive Technology",
    title: "Smart glasses for the visually impaired",
    shortDesc: "A wearable perception system that turns a camera feed into useful, real-time cues.",
    fullDesc: "Design of connected glasses based on an ESP32-S3 AI CAM (camera, Wi-Fi/Bluetooth) with a custom 3D-designed frame and an optimized PCB integrating battery, charging and sensors, communicating with a Raspberry Pi running a YOLO model for real-time object detection. The work lives at the seam between model latency, physical constraints and a person moving through the world.",
    tags: ["ESP32-S3", "YOLO", "Raspberry Pi", "PCB", "3D design"],
    images: ["glasses-cad-1.jpg", "glasses-cad-2.jpg", "glasses-electronics.jpg"],
    signoff: "Built at the seam between model latency and a person moving through the world."
  },
  {
    id: "fresco-classifier",
    index: "02",
    group: "Intelligence",
    disciplines: ["intelligence"],
    category: "Machine Learning / Visual Heritage",
    title: "Fresco fragment classifier",
    shortDesc: "Teaching a model to recognize the hand behind damaged fragments of a fresco.",
    fullDesc: "Development of an automatic image classification system to identify the artist of fresco fragments, via feature extraction and training of SVM, Random Forest, Neural Network and Voting Classifier models for robust prediction. The project treats preprocessing and representation as first-class design decisions, not just steps before a leaderboard.",
    tags: ["Feature extraction", "SVM", "Random Forest", "Neural Network", "Voting Classifier"],
    images: ["fresco-fragments.jpg", "fresco-features.jpg"],
    signoff: "Built as an exercise in making the invisible measurable."
  },
  {
    id: "world-time",
    index: "03",
    group: "Systems",
    disciplines: ["hardware", "systems"],
    category: "Bare Metal / Distributed Systems",
    title: "Real time, in three dialects",
    shortDesc: "World time and temperature, split across FPGA, ESP32 and STM32.",
    fullDesc: "Development of a real-time multi-board system using FreeRTOS (FPGA, NiosII, ESP32) and bare metal (STM32) to select a city, read the temperature via I2C, communicate between boards via SPI and CAN, display the data on a screen and transmit it over Wi-Fi.",
    tags: ["FPGA / NiosII", "FreeRTOS", "STM32", "I2C", "SPI", "CAN"],
    images: ["realtime-setup.jpg", "realtime-board.jpg"],
    signoff: "Three toolchains, one clock that had to agree with itself."
  },
  {
    id: "hri",
    index: "04",
    group: "Hardware",
    disciplines: ["hardware", "interaction"],
    category: "Research Internship / Tangible Interaction",
    title: "Human-robot interaction",
    shortDesc: "A modular haptic device for robots that can sense and respond to force.",
    fullDesc: "Built a real-time tactile perception system using force sensors and ROS2/Micro-ROS. Designed touch-driven robot behaviors through an embedded signal processing pipeline. Prototyped a modular HRI device with an M5Stack Core2, haptic actuators and 3D printing.",
    tags: ["ROS2 / Micro-ROS", "M5Stack Core2", "Haptics", "3D printing"],
    images: ["hri-red.jpg", "hri-blue.jpg"],
    signoff: "Research internship - closing the loop between touch and response."
  },
  {
    id: "imu-learning",
    index: "05",
    group: "Intelligence",
    disciplines: ["intelligence"],
    category: "Research Internship / Deep Learning",
    title: "Learning from movement",
    shortDesc: "Reconstructing handwriting trajectories from the quiet signal of an IMU.",
    fullDesc: "Developing self-supervised deep learning models on IMU time series using PyTorch. Designing and evaluating pretext tasks for handwriting trajectory reconstruction without labeled data. Benchmarking SSL architectures (contrastive learning, masked autoencoders) on multi-context handwriting datasets.",
    tags: ["PyTorch", "IMU time series", "Self-supervised learning", "Contrastive learning"],
    images: ["imu-handwriting-data.jpg", "imu-tablet.jpg"],
    signoff: "Research internship - teaching a model to write without ever seeing ink."
  },
  {
    id: "ble-battery",
    index: "06",
    group: "Systems",
    disciplines: ["systems"],
    category: "Bluetooth Low Energy / Mobile IoT",
    title: "Battery over the air",
    shortDesc: "A small protocol problem, solved with a careful queue.",
    fullDesc: "Development of an Android application using the GATT Battery Service, with sequential management of GATT operations via a queue, and a real-time interface for IoT device monitoring.",
    tags: ["Android", "BLE", "GATT"],
    images: ["ble-app-1.jpg", "ble-app-2.jpg"],
    signoff: "Built to make one honest number - battery level - always arrive on time."
  },
  {
    id: "ihm-tcpip",
    index: "07",
    group: "Systems",
    disciplines: ["systems"],
    category: "C++ / Networked Interfaces",
    title: "IHM / TCP-IP application",
    shortDesc: "One IoT stream, two desktop interfaces, zero black boxes.",
    fullDesc: "Development in C++ of a client-server TCP/IP application for the transmission and visualization of IoT data, with two versions of the graphical interface: Qt (cross-platform) and MFC (Windows).",
    tags: ["C++", "TCP/IP", "Qt", "MFC"],
    images: [],
    abstract: { color: "#c98a2e", icon: "network" },
    signoff: "Same socket, two interfaces - built to compare, not to pick a favorite."
  },
  {
    id: "zumo",
    index: "08",
    group: "Hardware",
    disciplines: ["hardware", "systems"],
    category: "Robotics / Closed-loop Control",
    title: "Zumo robot control",
    shortDesc: "A compact robot that makes every millisecond and millimeter count.",
    fullDesc: "Programming in C/C++ to drive a Zumo robot (PID motor control, line following, obstacle avoidance). Configuration and use of sensors (proximity, infrared) for autonomous behaviors. Optimization of the algorithms to improve navigation and responsiveness.",
    tags: ["C / C++", "PID", "Proximity sensing"],
    images: ["zumo-robot.jpg"],
    signoff: "Built to make every millisecond and millimeter count."
  },
  {
    id: "social-sim",
    index: "09",
    group: "Systems",
    disciplines: ["systems"],
    category: "Object-oriented Systems / Modeling",
    title: "Social media simulation",
    shortDesc: "A C# model of the small mechanics that make a network feel alive.",
    fullDesc: "This project features a social media simulation built in C# using collections. It employs classes to represent users, posts, comments and friendships, facilitating the modeling and simulation of user interactions within a social network. Functionalities include posting, liking and commenting on posts.",
    tags: ["C#", "Collections", "Data modeling"],
    images: [],
    abstract: { color: "#242c52", icon: "people" },
    signoff: "Small classes, simulating a very human kind of noise."
  },
  {
    id: "smart-parking",
    index: "10",
    group: "Hardware",
    disciplines: ["hardware", "systems"],
    category: "Automation / Sensor Fusion",
    title: "Smart parking",
    shortDesc: "Counting movement in a car park with sensors that can see it.",
    fullDesc: "This project aims to optimize parking space management using flame, ultrasonic and infrared (IR) sensors for full automation. By detecting vehicle movements, the system efficiently tracks available spots, reducing congestion and improving organization, all without manual intervention.",
    tags: ["C++", "Ultrasonic", "Infrared", "Flame sensor"],
    images: ["parking-1.jpg", "parking-2.jpg"],
    signoff: "Built so a parking lot can answer one question: is this spot free?"
  }
];

const IMG_BASE = "assets/img/";

/* fine-tuned crop focus for images whose subject isn't centered */
const IMG_FOCUS = {
  "ble-app-1.jpg": "center top",
  "ble-app-2.jpg": "center top",
  "zumo-robot.jpg": "center 78%"
};
function focusFor(img){ return IMG_FOCUS[img] || "center"; }

const ABSTRACT_ICONS = {
  network: `<svg viewBox="0 0 64 64" fill="none" stroke="#f4f2ea" stroke-width="1.6"><circle cx="32" cy="14" r="6"/><circle cx="14" cy="48" r="6"/><circle cx="50" cy="48" r="6"/><path d="M32 20v10M32 30l-14 12M32 30l14 12"/></svg>`,
  people: `<svg viewBox="0 0 64 64" fill="none" stroke="#f4f2ea" stroke-width="1.6"><circle cx="24" cy="22" r="8"/><circle cx="44" cy="28" r="6"/><path d="M10 52c0-9 6-15 14-15s14 6 14 15M38 52c0-6 4-11 12-11s12 4 12 11"/></svg>`
};

/* ---------------- render grid ---------------- */
const grid = document.getElementById("projectGrid");

function cardMediaHTML(p){
  if (p.images && p.images.length){
    return `
      <div class="card-media">
        <img src="${IMG_BASE}${p.images[0]}" alt="${p.title}" loading="lazy" style="object-position:${focusFor(p.images[0])}">
        <div class="card-media-meta"><span class="cross">✛</span><span>${p.images.length} FRAME${p.images.length > 1 ? "S" : ""}</span></div>
        <div class="card-media-tag">${p.index} </div>
      </div>`;
  }
  const a = p.abstract;
  return `
    <div class="card-media">
      <div class="card-media-abstract" style="background:${a.color}">
        ${ABSTRACT_ICONS[a.icon]}
      </div>
      <div class="card-media-meta"><span class="cross">✛</span><span>${p.index}</span></div>
      <div class="card-media-tag">${p.index} // SIGNAL LOGGED</div>
    </div>`;
}

function renderGrid(filter = "all"){
  grid.innerHTML = "";
  PROJECTS.forEach((p, i) => {
    const visible = filter === "all" || p.disciplines.includes(filter);
    const card = document.createElement("article");
    card.className = "project-card reveal" + (i === 0 ? " card-feature" : "") + (visible ? "" : " hidden");
    card.dataset.id = p.id;
    card.innerHTML = `
      ${cardMediaHTML(p)}
      <div class="card-body">
        <div class="card-index">${p.index}</div>
        <div class="card-category">${p.category}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.shortDesc}</p>
        <div class="card-tags">${p.tags.slice(0,3).map(t => `<span>${t}</span>`).join("")}</div>
        <div class="card-focus">FOCUS PROJECT <span>↗</span></div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p.id));
    grid.appendChild(card);
  });
  observeReveals();
}

/* ---------------- filters ---------------- */
const filterButtons = document.querySelectorAll(".filter");
function updateCounts(){
  document.getElementById("count-all").textContent = PROJECTS.length;
  ["hardware","intelligence","systems","interaction"].forEach(d => {
    const n = PROJECTS.filter(p => p.disciplines.includes(d)).length;
    document.getElementById(`count-${d}`).textContent = n;
  });
}
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.filter);
  });
});

/* ---------------- modal ---------------- */
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modalMedia");
const modalIndex = document.getElementById("modalIndex");
const modalCategoryGroup = document.getElementById("modalCategoryGroup");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalThumbs = document.getElementById("modalThumbs");
const modalSignoff = document.getElementById("modalSignoff");

let currentProjectIndex = 0;
let currentImageIndex = 0;

function buildModalMedia(p){
  modalMedia.innerHTML = "";
  if (p.images && p.images.length){
    p.images.forEach((img, i) => {
      const el = document.createElement("img");
      el.src = IMG_BASE + img;
      el.alt = p.title;
      el.style.objectPosition = focusFor(img);
      el.className = "modal-media-img" + (i === 0 ? " active" : "");
      modalMedia.appendChild(el);
    });
  } else {
    const div = document.createElement("div");
    div.className = "modal-media-abstract";
    div.style.background = p.abstract.color;
    div.innerHTML = ABSTRACT_ICONS[p.abstract.icon];
    modalMedia.appendChild(div);
  }
  const grid = document.createElement("div");
  grid.className = "modal-media-grid";
  modalMedia.appendChild(grid);
  const tl = document.createElement("div");
  tl.className = "modal-media-corner tl";
  const br = document.createElement("div");
  br.className = "modal-media-corner br";
  modalMedia.appendChild(tl);
  modalMedia.appendChild(br);
}

function setModalImage(i){
  const imgs = modalMedia.querySelectorAll(".modal-media-img");
  imgs.forEach((im, idx) => im.classList.toggle("active", idx === i));
  const thumbs = modalThumbs.querySelectorAll("img");
  thumbs.forEach((t, idx) => t.classList.toggle("active", idx === i));
  currentImageIndex = i;
}

function fillModal(p){
  modalIndex.textContent = p.index;
  modalCategoryGroup.textContent = p.group;
  modalCategory.textContent = p.category;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.fullDesc;
  modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join("");
  modalSignoff.innerHTML = `&gt;_ ${p.signoff}`;

  buildModalMedia(p);

  modalThumbs.innerHTML = "";
  if (p.images && p.images.length > 1){
    p.images.forEach((img, i) => {
      const el = document.createElement("img");
      el.src = IMG_BASE + img;
      el.alt = "";
      if (i === 0) el.classList.add("active");
      el.addEventListener("click", () => setModalImage(i));
      modalThumbs.appendChild(el);
    });
  }
  currentImageIndex = 0;
}

function openModal(id){
  const idx = PROJECTS.findIndex(p => p.id === id);
  if (idx === -1) return;
  currentProjectIndex = idx;
  fillModal(PROJECTS[idx]);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");
}

function stepModal(dir){
  currentProjectIndex = (currentProjectIndex + dir + PROJECTS.length) % PROJECTS.length;
  fillModal(PROJECTS[currentProjectIndex]);
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.getElementById("modalPrev").addEventListener("click", () => stepModal(-1));
document.getElementById("modalNext").addEventListener("click", () => stepModal(1));

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") stepModal(1);
  if (e.key === "ArrowLeft") stepModal(-1);
});

/* ---------------- nav ---------------- */
const siteNav = document.querySelector(".site-nav");
window.addEventListener("scroll", () => {
  siteNav.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

const burger = document.getElementById("navBurger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

/* ---------------- reveal on scroll ---------------- */
function observeReveals(){
  const els = document.querySelectorAll(".reveal:not(.in)");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ---------------- init ---------------- */
updateCounts();
renderGrid("all");
