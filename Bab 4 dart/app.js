// ===== APP CONTROLLER =====
let currentTopic = null;
let currentSlideIndex = 0;
let slides = [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initMenuCards();
  initKeyboardNavigation();
});

function initMenuCards() {
  document.querySelectorAll(".menu-card").forEach((card) => {
    card.addEventListener("click", () => {
      const topic = card.dataset.topic;
      openTopic(topic);
    });
  });
}

function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("presentation").classList.contains("active"))
      return;

    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Escape") {
      goToLanding();
    }
  });
}

function openTopic(topicKey) {
  currentTopic = topicKey;
  currentSlideIndex = 0;

  const topicData = slidesData[topicKey];
  if (!topicData) return;

  slides = topicData.slides;

  document.getElementById("landing").classList.remove("active");
  document.getElementById("presentation").classList.add("active");
  document.getElementById("currentTopic").textContent = topicData.title;
  document.getElementById("totalSlides").textContent = slides.length;

  renderSlides();
  showSlide(0);
}

function renderSlides() {
  const wrapper = document.getElementById("slidesWrapper");
  wrapper.innerHTML = slides
    .map(
      (slide, index) => `
        <div class="slide" data-index="${index}">
            <div class="slide-header">
                <h2>${slide.title}</h2>
                ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ""}
            </div>
            <div class="slide-content">
                ${slide.content}
            </div>
        </div>
    `,
    )
    .join("");
}

function showSlide(index) {
  if (index < 0 || index >= slides.length) return;

  currentSlideIndex = index;

  document.querySelectorAll(".slide").forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  document.getElementById("currentSlide").textContent = index + 1;

  const progress = ((index + 1) / slides.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    showSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    showSlide(currentSlideIndex - 1);
  }
}

function goToLanding() {
  document.getElementById("presentation").classList.remove("active");
  document.getElementById("landing").classList.add("active");
  currentTopic = null;
  currentSlideIndex = 0;
}
