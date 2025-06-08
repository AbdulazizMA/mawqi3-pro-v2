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
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing mobile-friendly website...');
    
    // Set initial language
    updateLanguage();
    
    // 1. Fix Language Toggle Button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.onclick = function(e) {
            e.preventDefault();
            toggleLanguage();
            showNotification(currentLanguage === 'ar' ? 'تم تغيير اللغة' : 'Language changed', 'success');
        };
        
        // Add touch support
        langBtn.ontouchend = function(e) {
            e.preventDefault();
            toggleLanguage();
            showNotification(currentLanguage === 'ar' ? 'تم تغيير اللغة' : 'Language changed', 'success');
        };
    }
    
    // 2. Fix All Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
            showNotification(currentLanguage === 'ar' ? 'تم الانتقال للقسم' : 'Navigated to section', 'info');
        };
        
        link.ontouchend = function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
            showNotification(currentLanguage === 'ar' ? 'تم الانتقال للقسم' : 'Navigated to section', 'info');
        };
    });
    
    // 3. Fix All CTA Buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.onclick = function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
                showNotification(currentLanguage === 'ar' ? 'تم الانتقال للقسم' : 'Navigated to section', 'info');
            }
        };
        
        button.ontouchend = function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
                showNotification(currentLanguage === 'ar' ? 'تم الانتقال للقسم' : 'Navigated to section', 'info');
            }
        };
    });
    
    // 4. Fix WhatsApp Buttons
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], .contact-method.whatsapp, .mobile-action.whatsapp');
    whatsappButtons.forEach(button => {
        button.onclick = function(e) {
            showNotification(currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...', 'success');
            // Let default behavior handle the link
        };
        
        button.ontouchend = function(e) {
            showNotification(currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...', 'success');
            // For mobile, we need to manually open the link
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 100);
        };
    });
    
    // 5. Fix Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            showNotification(currentLanguage === 'ar' ? 'تم إرسال الطلب!' : 'Request sent!', 'success');
        };
    }
    
    // 6. Fix Mobile Bottom Bar Actions
    const mobileActions = document.querySelectorAll('.mobile-action');
    mobileActions.forEach(action => {
        action.onclick = function(e) {
            const href = this.getAttribute('href');
            if (href) {
                if (href.includes('wa.me')) {
                    showNotification(currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...', 'success');
                } else if (href.startsWith('#')) {
                    e.preventDefault();
                    smoothScrollTo(href);
                    showNotification(currentLanguage === 'ar' ? 'انتقال للقسم' : 'Navigating to section', 'info');
                }
            }
        };
        
        action.ontouchend = function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                if (href.includes('wa.me')) {
                    showNotification(currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...', 'success');
                    setTimeout(() => {
                        window.open(href, '_blank');
                    }, 100);
                } else if (href.startsWith('#')) {
                    smoothScrollTo(href);
                    showNotification(currentLanguage === 'ar' ? 'انتقال للقسم' : 'Navigating to section', 'info');
                }
            }
        };
    });
    
    // 7. Fix Portfolio Links
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.onclick = function(e) {
            showNotification(currentLanguage === 'ar' ? 'فتح العرض التوضيحي...' : 'Opening demo...', 'info');
        };
        
        link.ontouchend = function(e) {
            e.preventDefault();
            showNotification(currentLanguage === 'ar' ? 'فتح العرض التوضيحي...' : 'Opening demo...', 'info');
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 100);
        };
    });
    
    // 8. Fix Other Contact Methods
    const contactMethods = document.querySelectorAll('.contact-method:not(.whatsapp)');
    contactMethods.forEach(method => {
        method.onclick = function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
                showNotification(currentLanguage === 'ar' ? 'انتقال لنموذج التواصل' : 'Navigating to contact form', 'info');
            }
        };
        
        method.ontouchend = function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
                showNotification(currentLanguage === 'ar' ? 'انتقال لنموذج التواصل' : 'Navigating to contact form', 'info');
            }
        };
    });
    
    // 9. Setup Mobile Menu
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        const headerContainer = document.querySelector('.header .container');
        
        if (nav && headerContainer && !document.querySelector('.mobile-menu-toggle')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-toggle';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #1e293b;
                cursor: pointer;
                padding: 8px;
            `;
            
            headerContainer.insertBefore(menuBtn, nav);
            
            menuBtn.onclick = function() {
                const isVisible = nav.style.display === 'flex';
                if (isVisible) {
                    nav.style.display = 'none';
                    this.innerHTML = '<i class="fas fa-bars"></i>';
                } else {
                    nav.style.display = 'flex';
                    nav.style.cssText = `
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        z-index: 1000;
                    `;
                    this.innerHTML = '<i class="fas fa-times"></i>';
                }
            };
            
            menuBtn.ontouchend = function() {
                this.onclick();
            };
            
            // Close menu when clicking nav links
            const navLinks = nav.querySelectorAll('a');
            navLinks.forEach(link => {
                const originalClick = link.onclick;
                link.onclick = function(e) {
                    nav.style.display = 'none';
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    if (originalClick) originalClick.call(this, e);
                };
            });
        }
    }
    
    // 10. Form Label Animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            if (input.value) {
                label.classList.add('active');
            }
            
            input.onfocus = function() {
                label.classList.add('active');
            };
            
            input.onblur = function() {
                if (!input.value) {
                    label.classList.remove('active');
                }
            };
            
            input.oninput = function() {
                if (input.value) {
                    label.classList.add('active');
                } else {
                    label.classList.remove('active');
                }
            };
        }
    });
    
    // 11. Header Scroll Effect
    let lastScrollTop = 0;
    window.onscroll = function() {
        const header = document.querySelector('.header');
        if (header) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            lastScrollTop = scrollTop;
        }
    };
    
    // Add mobile optimizations
    if (isMobile) {
        document.body.classList.add('mobile-device');
        document.body.style.touchAction = 'manipulation';
        
        // Prevent zoom on form inputs
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.fontSize = '16px';
        });
    }
    
    console.log('Mobile website initialized successfully!');
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