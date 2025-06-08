// Simple and reliable mobile-first JavaScript
// Language Management
let currentLanguage = 'ar';

// Simple mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

// Language Toggle Function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('langBtn');
    const langText = document.getElementById('langText');
    
    html.setAttribute('lang', currentLanguage);
    html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
    
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage}`);
        element.textContent = key;
    });
    
    document.body.className = currentLanguage === 'ar' ? 'rtl-mode' : 'ltr-mode';
}

// Simple notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        z-index: 10000;
        font-size: 14px;
        max-width: 90vw;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Simple smooth scroll function
function smoothScrollTo(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // --- Start Mobile Debugging ---
    const debugLog = document.createElement('div');
    const isDebug = new URLSearchParams(window.location.search).has('debug');
    if (isDebug) {
        debugLog.style.cssText = `
            position: fixed; bottom: 80px; left: 0; right: 0;
            background: rgba(0,0,0,0.8); color: #0f0;
            font-size: 10px; z-index: 99999; padding: 5px;
            height: 100px; overflow-y: scroll;
            font-family: monospace; opacity: 0.9;
            pointer-events: none;
        `;
        document.body.appendChild(debugLog);
    }
    const log = (message) => {
        if (isDebug) {
            console.log(message);
            debugLog.innerHTML = `[${new Date().toLocaleTimeString()}] ${message}<br/>` + debugLog.innerHTML;
        }
    };
    log('Script initialized (v4)');
    // --- End Mobile Debugging ---

    // --- Language ---
    let currentLanguage = 'ar';
    const updateLanguage = () => {
        const html = document.documentElement;
        html.setAttribute('lang', currentLanguage);
        html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
        document.querySelectorAll('[data-en][data-ar]').forEach(el => {
            const text = el.getAttribute(`data-${currentLanguage}`);
            if(text) el.textContent = text;
        });
        document.body.className = currentLanguage === 'ar' ? 'rtl-mode' : 'ltr-mode';
        log(`Language updated to ${currentLanguage}`);
    };
    const toggleLanguage = () => {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        updateLanguage();
    };
    updateLanguage();

    // --- Smooth Scroll ---
    const smoothScrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            log(`Scrolling to ${selector}`);
            const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
            const targetPosition = element.offsetTop - headerHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        } else {
            log(`Element not found for scroll: ${selector}`);
        }
    };

    // --- Mobile Menu Setup ---
    const nav = document.querySelector('.nav');
    const headerContainer = document.querySelector('.header .container');
    let menuBtn = null;
    const setupMobileMenu = () => {
        if (window.innerWidth <= 768) {
            if (nav && headerContainer && !document.querySelector('.mobile-menu-toggle')) {
                menuBtn = document.createElement('button');
                menuBtn.className = 'mobile-menu-toggle';
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                headerContainer.insertBefore(menuBtn, nav);
                log('Mobile menu created.');
            }
        } else if (document.querySelector('.mobile-menu-toggle')) {
            document.querySelector('.mobile-menu-toggle').remove();
            if (nav) nav.style.display = '';
            log('Mobile menu removed for desktop.');
        }
    };
    setupMobileMenu();
    window.addEventListener('resize', setupMobileMenu);

    // --- Universal Tap Handler (Event Delegation) ---
    const handleTap = (e) => {
        const target = e.target;
        log(`Tap on: ${target.tagName}.${target.className}`);

        // Prioritize the closest button or link
        const link = target.closest('a');
        const button = target.closest('button');

        // 1. Mobile Menu Toggle
        if (button && button.classList.contains('mobile-menu-toggle')) {
            e.preventDefault();
            log('Handler: Mobile Menu Toggle');
            if (nav) {
                const isVisible = nav.style.display === 'flex';
                nav.style.display = isVisible ? 'none' : 'flex';
                button.innerHTML = isVisible ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
            }
            return;
        }

        // 2. Language Toggle
        if (button && button.id === 'langBtn') {
            e.preventDefault();
            log('Handler: Language Toggle');
            toggleLanguage();
            return;
        }

        // 3. Form Submit Button
        if (button && button.type === 'submit' && target.closest('form')) {
            log('Handler: Form Submit');
            // Allow default form submission
            return;
        }

        // Handle all links <a>
        if (link) {
            const href = link.getAttribute('href');
            log(`Link tapped: ${href}`);

            // A. External links (portfolio, etc)
            if (link.target === '_blank' || (href && href.includes('portfolio-examples'))) {
                e.preventDefault();
                log('Handler: External Link');
                window.open(href, '_blank');
                return;
            }

            // B. WhatsApp links
            if (href && href.includes('wa.me')) {
                e.preventDefault();
                log('Handler: WhatsApp Link');
                window.open(href, '_blank');
                return;
            }

            // C. Anchor links (smooth scroll)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                log('Handler: Anchor Link');
                smoothScrollTo(href);
                // Close mobile menu if open
                if (nav && nav.style.display === 'flex' && document.querySelector('.mobile-menu-toggle')) {
                   nav.style.display = 'none';
                   document.querySelector('.mobile-menu-toggle').innerHTML = '<i class="fas fa-bars"></i>';
                }
                return;
            }
        }
    };

    document.body.addEventListener('click', handleTap);
    log('Click event listener attached to body.');

    // --- Form Label Animations ---
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        const label = input.closest('.form-group').querySelector('label');
        if (label) {
            const onFocus = () => label.classList.add('active');
            const onBlur = () => !input.value && label.classList.remove('active');
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);
            if (input.value) onFocus();
        }
    });
    log('Form animations attached.');

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    }, { passive: true });
    log('Header scroll effect attached.');

    log('Script finished initialization.');
});

// Handle window resize
window.onresize = function() {
    // Reinitialize mobile menu if needed
    setTimeout(() => {
        if (window.innerWidth > 768) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
            if (mobileMenuBtn) {
                mobileMenuBtn.remove();
            }
            const nav = document.querySelector('.nav');
            if (nav) {
                nav.style.display = '';
                nav.style.cssText = '';
            }
        }
    }, 100);
};