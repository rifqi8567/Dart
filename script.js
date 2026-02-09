document.addEventListener('DOMContentLoaded', () => {
    // ====== PARALLAX BACKGROUND ======
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.8;
            blob.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });

        // Parallax on particles
        const particles = document.querySelector('.particles');
        if (particles) {
            particles.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
        }
    });

    // ====== CARD 3D TILT EFFECT ======
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // ====== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ======
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // ====== DYNAMIC GLOW ON CURSOR ======
    const backgroundWrapper = document.querySelector('.background-wrapper');
    if (backgroundWrapper) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            backgroundWrapper.style.background = `
                radial-gradient(ellipse at ${x}% ${y}%, rgba(0, 180, 219, 0.12) 0%, transparent 40%),
                radial-gradient(ellipse at 20% 0%, rgba(0, 180, 219, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 100%, rgba(131, 56, 236, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(255, 0, 110, 0.05) 0%, transparent 60%)
            `;
        });
    }

    // ====== SMOOTH SCROLL FOR INTERNAL LINKS ======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ====== TYPING EFFECT ON TITLE (Optional Enhancement) ======
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';
        
        let charIndex = 0;
        const typingSpeed = 40;
        
        function typeText() {
            if (charIndex < originalText.length) {
                subtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
        
        // Delay typing effect for dramatic entrance
        setTimeout(typeText, 800);
    }
});
