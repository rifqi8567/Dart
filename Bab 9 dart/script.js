// Smart Calculator Presentation - Main Script

let currentTopic = null;
let currentSlideIndex = 0;
let allSlides = [];

// Initialize the presentation
document.addEventListener('DOMContentLoaded', () => {
    initializeTopicCards();
    initializeKeyboardNavigation();
});

// Initialize topic card clicks
function initializeTopicCards() {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.dataset.topic;
            navigateToTopic(topic);
        });
    });
}

// Initialize keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('slides-container').classList.contains('active')) return;
        
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

// Start presentation from the beginning
function startPresentation() {
    // Combine all topics into one presentation
    allSlides = [
        ...slidesData.closure,
        ...slidesData.recursive,
        ...slidesData.testing,
        ...slidesData.implementation,
        ...slidesData.rangkuman,
        ...slidesData.miniproject,
        ...slidesData.tugasrumah
    ];
    currentSlideIndex = 0;
    showSlidesSection();
    renderSlides();
}

// Navigate to a specific topic
function navigateToTopic(topic) {
    currentTopic = topic;
    allSlides = slidesData[topic];
    currentSlideIndex = 0;
    showSlidesSection();
    renderSlides();
}

// Show slides section, hide landing
function showSlidesSection() {
    document.getElementById('landing').classList.remove('active');
    document.getElementById('slides-container').classList.add('active');
}

// Go back to landing page
function goToLanding() {
    document.getElementById('slides-container').classList.remove('active');
    document.getElementById('landing').classList.add('active');
    currentTopic = null;
    currentSlideIndex = 0;
}

// Render all slides
function renderSlides() {
    const wrapper = document.getElementById('slidesWrapper');
    wrapper.innerHTML = '';
    
    allSlides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = `slide ${index === currentSlideIndex ? 'active' : ''}`;
        slideEl.innerHTML = `
            <div class="slide-content">
                <div class="slide-header-content">
                    <div class="slide-icon">
                        <i class="${slide.icon}"></i>
                    </div>
                    <div class="slide-title-group">
                        <div class="slide-category">${slide.category}</div>
                        <h2 class="slide-title">${slide.title}</h2>
                    </div>
                </div>
                ${slide.content}
            </div>
        `;
        wrapper.appendChild(slideEl);
    });
    
    updateSlideCounter();
    updateProgress();
    updateNavigationButtons();
}

// Show specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    updateSlideCounter();
    updateProgress();
    updateNavigationButtons();
}

// Next slide
function nextSlide() {
    if (currentSlideIndex < allSlides.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
}

// Previous slide
function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
}

// Update slide counter display
function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
    document.getElementById('totalSlides').textContent = allSlides.length;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentSlideIndex + 1) / allSlides.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Update navigation button states
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === allSlides.length - 1;
    
    // Update button text for last slide
    if (currentSlideIndex === allSlides.length - 1) {
        nextBtn.innerHTML = '<span>Selesai</span><i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = '<span>Selanjutnya</span><i class="fas fa-chevron-right"></i>';
    }
}

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}
