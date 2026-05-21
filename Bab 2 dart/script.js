// Slide Navigation Logic
let currentSlide = 1;
let totalSlides = 0;

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    updateSlide();

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(1);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides);
        }
    });
});

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
    }
}

function goToSlide(n) {
    currentSlide = Math.max(1, Math.min(n, totalSlides));
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide - 1) {
            slide.classList.add('active');
        }
    });

    // Update counter
    document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;

    // Update progress bar
    const progress = (currentSlide / totalSlides) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Update button states
    document.getElementById('prevBtn').disabled = currentSlide === 1;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
}
