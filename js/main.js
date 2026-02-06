// ============================================
// Navigation and Smooth Scrolling
// ============================================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMobileMenu();
            }
        }
    });
});

// ============================================
// Mobile Menu Toggle
// ============================================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
        closeMobileMenu();
    }
});

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
const navbarThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > navbarThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    updateActiveSection();
});

// ============================================
// Active Section Highlighting
// ============================================

function updateActiveSection() {
    const sections = document.querySelectorAll('main > section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-teal-600', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-teal-600', 'font-semibold');
        }
    });
}

// ============================================
// Email Copy to Clipboard
// ============================================

const emailBtn = document.getElementById('email-copy');
const copyToast = document.getElementById('copy-toast');

emailBtn.addEventListener('click', () => {
    const email = 'ovlae6252@gmail.com';

    // Use modern Clipboard API
    navigator.clipboard.writeText(email).then(() => {
        showCopyToast();
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyToast();
    });
});

function showCopyToast() {
    copyToast.classList.remove('hidden');

    // Hide toast after 2 seconds
    setTimeout(() => {
        copyToast.classList.add('hidden');
    }, 2000);
}

// ============================================
// Scroll Reveal Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll');
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'hero') {
        section.classList.add('fade-in-on-scroll');
        observer.observe(section);
    }
});

// ============================================
// Back to Top Button
// ============================================

function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Create back to top button when DOM is ready
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// ============================================
// Performance Optimization - Debounce Scroll Events
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Initial Setup
// ============================================

// Set initial navbar state
if (window.scrollY > navbarThreshold) {
    navbar.classList.add('scrolled');
}

// Initialize active section on page load
updateActiveSection();

// ============================================
// Additional Interactive Features
// ============================================

// Add click sound effect to buttons (optional)
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add link preview on hover (optional)
const projectLinks = document.querySelectorAll('.project-card');
projectLinks.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Accessibility Features
// ============================================

// Add skip to main content link functionality
const skipLink = document.querySelector('.skip-to-main');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main').focus();
    });
}

// ============================================
// Console Message
// ============================================

console.log('%c오블레(Ovlae)에 오신 것을 환영합니다! 🚀',
    'font-size: 16px; color: #14b8a6; font-weight: bold;');
console.log('%cAI 직원들과 함께하는 1인 기업 대표 - Making the future, one AI at a time',
    'font-size: 14px; color: #06b6d4;');
