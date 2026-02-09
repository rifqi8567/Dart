// Slide navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  const progressBar = document.getElementById('progressBar');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Initialize
  totalSlidesEl.textContent = totalSlides;
  updateSlide();
  
  // Navigation functions
  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev');
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index < currentSlide) {
        slide.classList.add('prev');
      }
    });
    
    currentSlideEl.textContent = currentSlide + 1;
    
    // Update progress bar
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = progress + '%';
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }
  
  function goToNext() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlide();
    }
  }
  
  function goToPrev() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  }
  
  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      updateSlide();
    }
  }
  
  // Event listeners
  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        goToNext();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        goToPrev();
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
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext(); // Swipe left = next
      } else {
        goToPrev(); // Swipe right = prev
      }
    }
  }
  
  // Click on sides to navigate (optional)
  document.addEventListener('click', function(e) {
    const clickX = e.clientX;
    const windowWidth = window.innerWidth;
    
    // Ignore clicks on navigation controls
    if (e.target.closest('.nav-controls')) return;
    
    // Left 20% of screen = prev, Right 20% = next
    if (clickX < windowWidth * 0.15) {
      goToPrev();
    } else if (clickX > windowWidth * 0.85) {
      goToNext();
    }
  });
});
