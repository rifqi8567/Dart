// Dart PPT - Navigation & Interaction Script
// Higher Order Function, Anonymous Function, Scope

document.addEventListener('DOMContentLoaded', () => {
  // ==================== STATE ====================
  let currentTopic = null;
  let currentSlide = 0;
  let slides = [];

  // ==================== DOM ELEMENTS ====================
  const landingPage = document.querySelector('.landing-page');
  const slideViewer = document.querySelector('.slide-viewer');
  const topicCards = document.querySelectorAll('.topic-card');
  const backBtn = document.querySelector('.back-btn');
  const prevBtn = document.querySelector('.nav-btn.prev');
  const nextBtn = document.querySelector('.nav-btn.next');
  const slideContent = document.querySelector('.slide-content');
  const slideCounter = document.querySelector('.slide-counter');
  const progressFill = document.querySelector('.progress-bar .fill');
  const topicTitleEl = document.querySelector('.topic-title h2');

  // ==================== TOPIC DESCRIPTIONS ====================
  const topicDescriptions = {
    higherOrderFunction: 'Fungsi yang dapat menerima atau mengembalikan fungsi lain',
    anonymousFunction: 'Fungsi tanpa nama untuk operasi sekali pakai',
    scope: 'Cakupan variabel dalam program Dart',
    tugasRumah: '4 project untuk latihan mandiri',
    kesimpulan: 'Ringkasan materi yang telah dipelajari'
  };

  // ==================== INITIALIZE ====================
  function init() {
    // Add click handlers to topic cards
    topicCards.forEach(card => {
      card.addEventListener('click', () => {
        const topic = card.dataset.topic;
        openTopic(topic);
      });
      
      // Add slide count
      const topic = card.dataset.topic;
      if (slidesData[topic]) {
        const count = slidesData[topic].slides.length;
        const countEl = card.querySelector('.slide-count');
        if (countEl) {
          countEl.textContent = `${count} slides`;
        }
      }
    });

    // Navigation handlers
    backBtn.addEventListener('click', goBack);
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
  }

  // ==================== NAVIGATION ====================
  function openTopic(topicKey) {
    if (!slidesData[topicKey]) return;

    currentTopic = topicKey;
    currentSlide = 0;
    slides = slidesData[topicKey].slides;

    // Update header
    topicTitleEl.textContent = slidesData[topicKey].title;

    // Show slide viewer
    landingPage.style.display = 'none';
    slideViewer.classList.add('active');

    // Render first slide
    renderSlide();
    updateNavigation();
  }

  function goBack() {
    currentTopic = null;
    currentSlide = 0;
    slides = [];

    slideViewer.classList.remove('active');
    landingPage.style.display = 'flex';
  }

  function prevSlide() {
    if (currentSlide > 0) {
      slideContent.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => {
        currentSlide--;
        renderSlide();
        updateNavigation();
        slideContent.style.animation = 'slideIn 0.4s ease';
      }, 300);
    }
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      slideContent.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => {
        currentSlide++;
        renderSlide();
        updateNavigation();
        slideContent.style.animation = 'slideIn 0.4s ease';
      }, 300);
    }
  }

  function handleKeyboard(e) {
    if (!slideViewer.classList.contains('active')) return;

    switch (e.key) {
      case 'ArrowLeft':
        prevSlide();
        break;
      case 'ArrowRight':
        nextSlide();
        break;
      case 'Escape':
        goBack();
        break;
    }
  }

  // ==================== RENDERING ====================
  function renderSlide() {
    const slide = slides[currentSlide];
    if (!slide) return;

    let html = `
      <div class="slide-title">
        <h1>${slide.title}</h1>
        ${slide.subtitle ? `<p>${slide.subtitle}</p>` : ''}
      </div>
      <div class="slide-body">
        ${slide.content}
      </div>
    `;

    slideContent.innerHTML = html;

    // Apply syntax highlighting
    highlightCode();
  }

  function updateNavigation() {
    // Update counter
    slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;

    // Update progress bar
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Update buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Update next button text
    if (currentSlide === slides.length - 1) {
      nextBtn.innerHTML = 'Selesai ✓';
    } else {
      nextBtn.innerHTML = 'Selanjutnya →';
    }
  }

  // ==================== SYNTAX HIGHLIGHTING ====================
  function highlightCode() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
      let code = block.innerHTML;
      
      // Keywords
      const keywords = ['void', 'int', 'double', 'String', 'bool', 'var', 'final', 'const', 
                       'class', 'extends', 'implements', 'return', 'if', 'else', 'for', 
                       'while', 'switch', 'case', 'default', 'break', 'continue', 'new',
                       'this', 'super', 'null', 'true', 'false', 'Function', 'List', 'Map',
                       'dynamic', 'get', 'set', 'async', 'await', 'typedef', 'DateTime'];
      
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b`, 'g');
        code = code.replace(regex, '<span class="keyword">$1</span>');
      });
      
      // Strings
      code = code.replace(/(&#39;[^&#39;]*&#39;|'[^']*')/g, '<span class="string">$1</span>');
      
      // Numbers
      code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
      
      // Comments
      code = code.replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
      
      // Function calls
      code = code.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="function">$1</span>(');
      
      block.innerHTML = code;
    });
  }

  // ==================== START ====================
  init();
});
