// ===== State Management =====
let currentTopic = null;
let currentSlideIndex = 0;
let currentSlides = [];

// ===== DOM Elements =====
const landing = document.getElementById("landing");
const slideContainer = document.getElementById("slideContainer");
const slideContent = document.getElementById("slideContent");
const topicTitle = document.getElementById("topicTitle");
const currentSlideEl = document.getElementById("currentSlide");
const totalSlidesEl = document.getElementById("totalSlides");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ===== Topic Titles =====
const topicTitles = {
  list: "List",
  set: "Set",
  map: "Map",
  symbol: "Symbol",
  ifelse: "If & Else",
  switch: "Switch Case",
  breakContinue: "Break & Continue",
  miniProjects: "Mini Projects",
  tugasRumah: "Tugas Rumah",
};

// ===== Navigation Functions =====
function showLanding() {
  landing.classList.remove("hidden");
  slideContainer.classList.add("hidden");
  currentTopic = null;
  currentSlideIndex = 0;
  currentSlides = [];
}

function showTopic(topicId) {
  if (!slidesData[topicId]) {
    console.error(`Topic "${topicId}" not found`);
    return;
  }

  currentTopic = topicId;
  currentSlides = slidesData[topicId];
  currentSlideIndex = 0;

  landing.classList.add("hidden");
  slideContainer.classList.remove("hidden");

  topicTitle.textContent = topicTitles[topicId] || topicId;
  totalSlidesEl.textContent = currentSlides.length;

  renderSlide();
}

function renderSlide() {
  if (!currentSlides.length) return;

  const slide = currentSlides[currentSlideIndex];
  slideContent.innerHTML = `<div class="slide">${slide.content}</div>`;

  // Highlight code blocks
  if (window.Prism) {
    Prism.highlightAllUnder(slideContent);
  }

  updateProgress();
  updateNavigationButtons();

  // Scroll to top of slide content
  slideContent.scrollTop = 0;
}

function updateProgress() {
  currentSlideEl.textContent = currentSlideIndex + 1;
  const progress = ((currentSlideIndex + 1) / currentSlides.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function updateNavigationButtons() {
  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === currentSlides.length - 1;
}

function nextSlide() {
  if (currentSlideIndex < currentSlides.length - 1) {
    currentSlideIndex++;
    renderSlide();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide();
  }
}

// ===== Keyboard Navigation =====
document.addEventListener("keydown", (e) => {
  // Only handle keys when in slide view
  if (slideContainer.classList.contains("hidden")) return;

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
    case " ":
      e.preventDefault();
      nextSlide();
      break;
    case "ArrowLeft":
    case "ArrowUp":
      e.preventDefault();
      prevSlide();
      break;
    case "Escape":
      showLanding();
      break;
    case "Home":
      e.preventDefault();
      currentSlideIndex = 0;
      renderSlide();
      break;
    case "End":
      e.preventDefault();
      currentSlideIndex = currentSlides.length - 1;
      renderSlide();
      break;
  }
});

// ===== Touch/Swipe Support =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  if (slideContainer.classList.contains("hidden")) return;

  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  showLanding();
});
