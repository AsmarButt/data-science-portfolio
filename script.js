// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeAOS();
    initializeTyping();
    initializeParticles();
    initializeCustomCursor();
    initializeProjectCards();
    initializeSmoothScrolling();
    initializeMobileMenu();
    initializeSkillBars();
    initializeContactForm();
    initializePreloader();
    initializeEnhancements();
});

// AOS Initialization
function initializeAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Typing Animation
function initializeTyping() {
    new Typed('.typing-text', {
        strings: [
            'Transforming Data into Insights',
            'Machine Learning Engineer',
            'Data Scientist',
            'AI Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// Particles Background
function initializeParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#4F46E5' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: false,
                animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4F46E5',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Custom Cursor
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// Project Cards
function initializeProjectCards() {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2
    });

    // Make project cards clickable
    document.querySelectorAll('.project-card').forEach(card => {
        const link = card.querySelector('.project-link');
        if (link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.project-link')) {
                    link.click();
                }
            });
        }
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)';
        menuButton.classList.toggle('active');
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = `${width}%`;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const btnText = button.querySelector('.btn-text');
        const originalText = btnText.textContent;

        try {
            button.disabled = true;
            btnText.textContent = 'Sending...';
            await new Promise(resolve => setTimeout(resolve, 2000));
            btnText.textContent = 'Sent Successfully!';
            contactForm.reset();
            setTimeout(() => {
                btnText.textContent = originalText;
                button.disabled = false;
            }, 3000);
        } catch (error) {
            btnText.textContent = 'Error!';
            setTimeout(() => {
                btnText.textContent = originalText;
                button.disabled = false;
            }, 3000);
        }
    });
}

// Preloader
function initializePreloader() {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.remove('loading');
            }, 500);
        }, 1000);
    });
}

// Enhanced Features
function initializeEnhancements() {
    initialize3DMouseEffect();
    createFloatingElements();
    addThemeSwitcher();
}

function initialize3DMouseEffect() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.project-card');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            const angleX = (mouseY - cardY) / 30;
            const angleY = (mouseX - cardX) / -30;
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
    });
}

function createFloatingElements() {
    const container = document.createElement('div');
    container.className = 'interactive-bg';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
    }
}

function addThemeSwitcher() {
    const themes = [
        { primary: '#4F46E5', secondary: '#06B6D4' },
        { primary: '#EC4899', secondary: '#8B5CF6' },
        { primary: '#10B981', secondary: '#3B82F6' }
    ];

    let currentTheme = 0;
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.innerHTML = `
        <div class="theme-btn">
            <i class="fas fa-palette"></i>
        </div>
    `;

    document.body.appendChild(switcher);

    switcher.addEventListener('click', () => {
        currentTheme = (currentTheme + 1) % themes.length;
        document.documentElement.style.setProperty('--primary', themes[currentTheme].primary);
        document.documentElement.style.setProperty('--secondary', themes[currentTheme].secondary);
    });
}
