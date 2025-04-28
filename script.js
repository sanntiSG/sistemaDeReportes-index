const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.video-section, .feature-card').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(el);
});

// Floating Button
window.addEventListener('scroll', () => {
    const button = document.querySelector('.floating-button');
    button.classList.toggle('visible', window.scrollY > 500);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('header').style.backgroundPositionY = `${scrolled * 0.5}px`;
});