// Animación de elementos al hacer scroll - Versión simplificada
function animateOnScroll() {
    const elements = document.querySelectorAll('.video-section, .feature-card');
    
    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8);
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    // Configuración inicial
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });

    // Detección de scroll sin IntersectionObserver
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
}

// Botón flotante - Versión explícita
function setupFloatingButton() {
    const button = document.querySelector('.floating-button');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// Efecto parallax - Versión con compatibilidad
function setupParallax() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            header.style.backgroundPositionY = (scrolled * 0.5) + 'px';
        });
    }
}

// Inicialización segura
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    setupFloatingButton();
    setupParallax();
});
