// Dart Masterclass - Unified Presentation Navigation Script
let currentTopic = null;
let currentSlideIndex = 0;
let allSlides = [];

// Initialize the presentation on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initializeChapterSpecificLayout();
    initializeTopicCards();
    initializeKeyboardNavigation();
    initializeTouchSupport();
    initialize3DLogo();
    injectSlideDecorations();
    loadMermaid();
});

function initializeChapterSpecificLayout() {
    const path = decodeURIComponent(window.location.pathname);
    const chapterMatch = path.match(/Bab\s+(\d+)\s+dart/i);
    if (!chapterMatch) return;

    const chapterNumber = Number(chapterMatch[1]);
    document.body.classList.add(
        `chapter-${chapterNumber}`,
        `chapter-shape-${((chapterNumber - 1) % 4) + 1}`,
        `chapter-motion-${((chapterNumber - 1) % 5) + 1}`
    );

    if (chapterNumber >= 10) {
        document.body.classList.add('chapter-mermaid-compact');
    }
}

// Initialize topic card click events
function initializeTopicCards() {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.dataset.topic;
            navigateToTopic(topic);
        });
        
        // Auto-fill slide count badge if element exists
        const topic = card.dataset.topic;
        if (typeof slidesData !== 'undefined' && slidesData[topic]) {
            const slidesList = Array.isArray(slidesData[topic]) 
                ? slidesData[topic] 
                : (slidesData[topic].slides || []);
            const countEl = card.querySelector('.slide-count');
            if (countEl && slidesList.length > 0) {
                countEl.textContent = `${slidesList.length} slides`;
            }
        }
    });
}

// Keyboard arrow key navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const slidesContainer = document.getElementById('slides-container');
        if (!slidesContainer || !slidesContainer.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                nextSlide();
                break;
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'Escape':
                goToLanding();
                break;
        }
    });
}

// Touch swipe gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

function initializeTouchSupport() {
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 55;
    const diff = touchStartX - touchEndX;
    const slidesContainer = document.getElementById('slides-container');
    if (!slidesContainer || !slidesContainer.classList.contains('active')) return;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left -> Next
        } else {
            prevSlide(); // Swipe right -> Prev
        }
    }
}

// Start presentation: concatenate all topics sequentially
function startPresentation() {
    if (typeof slidesData === 'undefined') return;
    
    allSlides = [];
    for (const key in slidesData) {
        if (slidesData.hasOwnProperty(key)) {
            const topicContent = slidesData[key];
            const slidesList = Array.isArray(topicContent) 
                ? topicContent 
                : (topicContent.slides || []);
            allSlides.push(...slidesList);
        }
    }
    
    currentSlideIndex = 0;
    showSlidesSection();
    renderSlides();
}

// Navigate to a specific topic card
function navigateToTopic(topic) {
    if (typeof slidesData === 'undefined' || !slidesData[topic]) return;
    
    currentTopic = topic;
    const topicContent = slidesData[topic];
    allSlides = Array.isArray(topicContent) 
        ? topicContent 
        : (topicContent.slides || []);
        
    currentSlideIndex = 0;
    showSlidesSection();
    renderSlides();
}

// View toggle helper functions
function showSlidesSection() {
    const landing = document.getElementById('landing');
    const slidesContainer = document.getElementById('slides-container');
    if (landing) landing.classList.remove('active');
    if (slidesContainer) slidesContainer.classList.add('active');
}

function goToLanding() {
    const landing = document.getElementById('landing');
    const slidesContainer = document.getElementById('slides-container');
    if (landing) landing.classList.add('active');
    if (slidesContainer) slidesContainer.classList.remove('active');
    currentTopic = null;
    currentSlideIndex = 0;
}

// Dynamically render slides into DOM wrapper
function renderSlides() {
    const wrapper = document.getElementById('slidesWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    
    allSlides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = `slide ${index === currentSlideIndex ? 'active' : ''}`;
        
        const category = slide.category || '';
        const icon = slide.icon || 'fas fa-book-open';
        const title = slide.title || '';
        const content = slide.content || '';
        
        slideEl.innerHTML = `
            <div class="slide-content">
                <div class="slide-header-content">
                    <div class="slide-icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="slide-title-group">
                        <div class="slide-category">${category}</div>
                        <h2 class="slide-title">${title}</h2>
                    </div>
                </div>
                ${content}
            </div>
        `;
        wrapper.appendChild(slideEl);
    });
    
    updateSlideCounter();
    updateProgress();
    updateNavigationButtons();
    addCopyButtons();
    // Only render Mermaid for the first (visible) slide, not all hidden slides
    renderMermaidOnCurrentSlide();
}

// Slide focus helper
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            // Reset scroll inside the slide
            slide.scrollTop = 0;
        }
    });
    
    updateSlideCounter();
    updateProgress();
    updateNavigationButtons();

    // Render Mermaid only on the NOW-VISIBLE slide
    renderMermaidOnCurrentSlide();
}

// Navigation triggers
function nextSlide() {
    if (currentSlideIndex < allSlides.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    } else {
        goToLanding(); // Go back to topic list when presentation finishes
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
}

// Update DOM elements for UI status
function updateSlideCounter() {
    const currEl = document.getElementById('currentSlide');
    const totEl = document.getElementById('totalSlides');
    if (currEl) currEl.textContent = currentSlideIndex + 1;
    if (totEl) totEl.textContent = allSlides.length;
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar && allSlides.length > 0) {
        const progress = ((currentSlideIndex + 1) / allSlides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
    
    if (nextBtn) {
        if (currentSlideIndex === allSlides.length - 1) {
            nextBtn.innerHTML = '<span>Selesai</span><i class="fas fa-check"></i>';
        } else {
            nextBtn.innerHTML = '<span>Selanjutnya</span><i class="fas fa-chevron-right"></i>';
        }
    }
}

// Initialize 3D Rotating Logo on the slide landing page
function initialize3DLogo() {
    const mainIconContainer = document.querySelector('.main-icon-container');
    if (mainIconContainer) {
        const sceneHtml = `
            <div class="logo-3d-scene">
                <div class="logo-3d-card">
                    <div class="logo-3d-face face-front">
                        <img src="../Dart1.png" alt="Dart Logo" />
                    </div>
                    <div class="logo-3d-face face-back">
                        <img src="../Dart1.png" alt="Dart Logo" />
                    </div>
                </div>
                <div class="logo-3d-ring ring-horizontal"></div>
                <div class="logo-3d-ring ring-vertical"></div>
            </div>
        `;
        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-3d-container';
        logoContainer.innerHTML = sceneHtml;
        mainIconContainer.parentNode.replaceChild(logoContainer, mainIconContainer);
    }
}

// Inject floating animations, background blobs and particles into slides container
function injectSlideDecorations() {
    const slidesContainer = document.getElementById('slides-container');
    if (!slidesContainer) return;
    
    // Check if decorations container already exists
    if (slidesContainer.querySelector('.slides-bg-decorations')) return;
    
    const decorContainer = document.createElement('div');
    decorContainer.className = 'slides-bg-decorations';
    decorContainer.innerHTML = `
        <div class="decor-blob blob-1"></div>
        <div class="decor-blob blob-2"></div>
        <div class="decor-particle p-1"></div>
        <div class="decor-particle p-2"></div>
        <div class="decor-particle p-3"></div>
        <img src="../Dart1.png" class="decor-icon icon-1" alt="Dart Deco" />
        <img src="../Dart1.png" class="decor-icon icon-2" alt="Dart Deco" />
        <img src="../Dart1.png" class="decor-icon icon-3" alt="Dart Deco" />
    `;
    
    // Insert behind content
    slidesContainer.insertBefore(decorContainer, slidesContainer.firstChild);
}

// Add clipboard copy button to every code block
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('#slidesWrapper .code-block');
    codeBlocks.forEach(block => {
        const header = block.querySelector('.code-header');
        const pre = block.querySelector('pre');
        if (!header || !pre) return;
        
        // Prevent double injection
        if (header.querySelector('.copy-btn')) return;
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="far fa-copy"></i> <span>Salin</span>';
        
        copyBtn.addEventListener('click', () => {
            const codeText = pre.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> <span>Tersalin!</span>';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy"></i> <span>Salin</span>';
                    copyBtn.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
        
        header.appendChild(copyBtn);
    });
}

// Load Mermaid dynamically from CDN
function loadMermaid() {
    if (typeof mermaid !== 'undefined') return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = () => {
        const isCompact = document.body.classList.contains('chapter-mermaid-compact');
        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        const mermaidFontSize = isSmallScreen ? '10px' : (isCompact ? '11px' : '12px');

        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis',
                nodeSpacing: isCompact ? 32 : 40,
                rankSpacing: isCompact ? 42 : 50,
                padding: isCompact ? 12 : 15,
                wrappingWidth: isSmallScreen ? 130 : 160
            },
            themeVariables: {
                background: '#151821',
                primaryColor: '#0175c2',
                primaryTextColor: '#ffffff',
                primaryBorderColor: '#13b9fd',
                lineColor: '#1de9b6',
                secondaryColor: '#8338ec',
                tertiaryColor: '#ff006e',
                fontSize: mermaidFontSize
            }
        });
        renderMermaidOnCurrentSlide();
    };
    document.head.appendChild(script);
}

// Render Mermaid diagrams only inside the currently ACTIVE (visible) slide
// This is the primary function called on slide navigation
async function renderMermaidOnCurrentSlide() {
    if (typeof mermaid === 'undefined') return;

    // Find the active slide element
    const activeSlide = document.querySelector('#slidesWrapper .slide.active');
    if (!activeSlide) return;

    // Only target unprocessed diagrams inside the visible slide
    const elements = activeSlide.querySelectorAll('.mermaid:not([data-processed="true"])');
    if (elements.length === 0) return;

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        try {
            await mermaid.run({ nodes: [el] });
            optimizeMermaidLayout(el);
        } catch (err) {
            console.warn('Mermaid diagram error:', err.message || err);
            el.innerHTML = `<div style="
                padding: 1rem;
                border: 1px dashed #ff006e;
                border-radius: 8px;
                color: #ff006e;
                font-size: 0.8rem;
                text-align: center;
            ">⚠️ Diagram tidak dapat dirender<br><small>${(err.message || '').substring(0, 160)}</small></div>`;
            el.setAttribute('data-processed', 'true');
        }
    }
}

// Render any Mermaid diagrams in the slides wrapper (global fallback)
// Renders each diagram individually so one broken diagram won't block the others
async function renderMermaidDiagrams() {
    if (typeof mermaid === 'undefined') return;
    const elements = document.querySelectorAll('#slidesWrapper .mermaid:not([data-processed="true"])');
    if (elements.length === 0) return;

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        try {
            await mermaid.run({ nodes: [el] });
            optimizeMermaidLayout(el);
        } catch (err) {
            console.warn('Mermaid: diagram ke-' + (i + 1) + ' gagal dirender:', err.message || err);
            el.innerHTML = `<div style="
                padding: 1rem;
                border: 1px dashed #ff006e;
                border-radius: 8px;
                color: #ff006e;
                font-size: 0.8rem;
                text-align: center;
            ">⚠️ Diagram tidak dapat dirender<br><small>${(err.message || '').substring(0, 120)}</small></div>`;
            el.setAttribute('data-processed', 'true');
        }
    }
}

function optimizeMermaidLayout(container) {
    const svg = container.querySelector('svg');
    if (!svg) return;

    const rawViewBox = svg.getAttribute('viewBox');
    if (rawViewBox && !svg.dataset.viewBoxPadded) {
        const viewBox = rawViewBox.split(/\s+/).map(Number);
        if (viewBox.length === 4 && viewBox.every(Number.isFinite)) {
            const [x, y, width, height] = viewBox;
            const padding = 16;
            svg.setAttribute(
                'viewBox',
                `${x - padding} ${y - padding} ${width + padding * 2} ${height + padding * 2}`
            );
            svg.dataset.viewBoxPadded = 'true';
        }
    }

    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.style.width = 'auto';
    svg.style.maxWidth = '100%';
    svg.style.maxHeight = container.classList.contains('mermaid-compact') ? '62vh' : '58vh';
    svg.style.height = 'auto';
    svg.style.overflow = 'visible';
}
