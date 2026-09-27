// Mobile navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// Smooth scrolling for internal navigation links
function smoothScroll(target) {
    if (!target || !target.startsWith('#')) return;

    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const target = link.getAttribute('href');

        if (target && target !== '#') {
            event.preventDefault();
            smoothScroll(target);
        }

        if (navbar && menuIcon) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});

// Keep the navigation bar visible with a background after scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const modeSwitch = document.getElementById('mode-switch');

if (themeToggle && modeSwitch) {
    themeToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('light-theme');

        const isLight = document.body.classList.contains('light-theme');
        modeSwitch.classList.toggle('bx-sun', isLight);
        modeSwitch.classList.toggle('bx-moon', !isLight);
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    });
}

// Typed text effect
if (typeof Typed !== 'undefined' && document.querySelector('#element')) {
    new Typed('#element', {
        strings: ['Web Developer', 'Machine Learning Enthusiast', 'Competitive Coder'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1200,
        loop: true
    });
}

// ScrollReveal animations
if (typeof ScrollReveal !== 'undefined') {
    const reveal = ScrollReveal({
        distance: '80px',
        duration: 1200,
        delay: 100,
        reset: false
    });

    reveal.reveal('.home-content, .heading', { origin: 'top' });
    reveal.reveal('.home-img, .education-box, .skill-box, .project-box, .contact form', { origin: 'bottom' });
    reveal.reveal('.home-content h1, .about-img', { origin: 'left' });
    reveal.reveal('.home-content p, .about-content', { origin: 'right' });
}
