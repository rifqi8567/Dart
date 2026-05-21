// Slide Navigation
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
const progressEl = document.getElementById('progress');

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize
function init() {
    totalSlidesEl.textContent = totalSlides;
    updateSlide();
}

// Update slide display
function updateSlide() {
    // Remove all classes
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index < currentSlide) {
            slide.classList.add('prev');
        } else if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update counter
    currentSlideEl.textContent = currentSlide + 1;

    // Update progress bar
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressEl.style.width = `${progress}%`;

    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Go to next slide
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

// Go to previous slide
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

// Go to specific slide
function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        updateSlide();
    }
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides - 1);
            break;
    }
});

// Touch/swipe support for mobile
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

// Initialize on load
init();
