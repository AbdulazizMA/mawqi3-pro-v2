// Language Management
let currentLanguage = 'ar';

const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'Services': 'Services',
        'Portfolio': 'Portfolio',
        'Testimonials': 'Testimonials',
        'Contact': 'Contact',
        'Book a Free Call': 'Book a Free Call',
        
        // Hero Section
        'We Build Stunning Websites for Every Kind of Business': 'We Build Stunning Websites for Every Kind of Business',
        'Custom, mobile-friendly, and designed to convert.': 'Custom, mobile-friendly, and designed to convert.',
        "Let's Talk About Your Website": "Let's Talk About Your Website",
        
        // Why Choose Us
        'Why Choose Us': 'Why Choose Us',
        'Fast Performance': 'Fast Performance',
        'Lightning-fast loading speeds that keep your visitors engaged and improve SEO rankings.': 'Lightning-fast loading speeds that keep your visitors engaged and improve SEO rankings.',
        'Mobile Optimized': 'Mobile Optimized',
        'Perfect display on all devices - from smartphones to desktops, ensuring maximum reach.': 'Perfect display on all devices - from smartphones to desktops, ensuring maximum reach.',
        'Custom Designs': 'Custom Designs',
        'Unique, tailored designs that reflect your brand identity and stand out from competitors.': 'Unique, tailored designs that reflect your brand identity and stand out from competitors.',
        'Secure & Reliable': 'Secure & Reliable',
        'Advanced security measures and reliable hosting to protect your business and customers.': 'Advanced security measures and reliable hosting to protect your business and customers.',
        
        // Portfolio
        'Our Work': 'Our Work',
        'E-Commerce Platform': 'E-Commerce Platform',
        'Retail Industry': 'Retail Industry',
        'Restaurant Website': 'Restaurant Website',
        'Food & Beverage': 'Food & Beverage',
        'Corporate Portal': 'Corporate Portal',
        'Professional Services': 'Professional Services',
        'Healthcare System': 'Healthcare System',
        'Medical Industry': 'Medical Industry',
        'Educational Platform': 'Educational Platform',
        'Education Sector': 'Education Sector',
        'Real Estate Portal': 'Real Estate Portal',
        'Real Estate': 'Real Estate',
        'View Live Demo': 'View Live Demo',
        
        // Testimonials
        'What Our Clients Say': 'What Our Clients Say',
        'Mawqi3 Pro exceeded our expectations! They delivered a beautiful, fast website that doubled our online sales.': '"Mawqi3 Pro exceeded our expectations! They delivered a beautiful, fast website that doubled our online sales."',
        'CEO, Fashion Boutique': 'CEO, Fashion Boutique',
        'Professional, reliable, and creative. Our new website perfectly represents our brand and attracts more customers.': '"Professional, reliable, and creative. Our new website perfectly represents our brand and attracts more customers."',
        'Owner, Tech Solutions': 'Owner, Tech Solutions',
        'Amazing team! They understood our vision and created exactly what we needed. Highly recommended!': '"Amazing team! They understood our vision and created exactly what we needed. Highly recommended!"',
        'Director, Healthcare Clinic': 'Director, Healthcare Clinic',
        
        // How It Works
        'How It Works': 'How It Works',
        'Contact Us': 'Contact Us',
        'Reach out via call, WhatsApp, or our contact form to start the conversation.': 'Reach out via call, WhatsApp, or our contact form to start the conversation.',
        'We Discuss Your Vision': 'We Discuss Your Vision',
        'We listen to your needs, goals, and preferences to create the perfect plan.': 'We listen to your needs, goals, and preferences to create the perfect plan.',
        'You Approve the Design': 'You Approve the Design',
        'Review and approve the design mockups before we proceed with development.': 'Review and approve the design mockups before we proceed with development.',
        'We Build Your Website': 'We Build Your Website',
        'Our expert developers bring your vision to life with clean, efficient code.': 'Our expert developers bring your vision to life with clean, efficient code.',
        'You Launch & Grow!': 'You Launch & Grow!',
        'Launch your new website and watch your business grow with ongoing support.': 'Launch your new website and watch your business grow with ongoing support.',
        
        // Contact
        'Ready for a Stunning Website?': 'Ready for a Stunning Website?',
        "Let's discuss your project and create something amazing together. Get a free consultation today!": "Let's discuss your project and create something amazing together. Get a free consultation today!",
        'WhatsApp Us': 'WhatsApp Us',
        'Call Now': 'Call Now',
        'Your Name': 'Your Name',
        'Business Type': 'Business Type',
        'WhatsApp Number': 'WhatsApp Number',
        'Email Address': 'Email Address',
        'Project Details (Optional)': 'Project Details (Optional)',
        'Request a Call or WhatsApp Message': 'Request a Call or WhatsApp Message',
        
        // Footer
        'Creating stunning websites that help businesses grow and succeed online.': 'Creating stunning websites that help businesses grow and succeed online.',
        'Services': 'Services',
        'Website Design': 'Website Design',
        'E-Commerce': 'E-Commerce',
        'Mobile Apps': 'Mobile Apps',
        'SEO Optimization': 'SEO Optimization',
        'All rights reserved.': 'All rights reserved.',
        
        // Mobile Bar
        'Call': 'Call',
        'WhatsApp': 'WhatsApp'
    },
    ar: {
        // Navigation
        'Home': 'الرئيسية',
        'Services': 'خدماتنا',
        'Portfolio': 'نماذج من أعمالنا',
        'Testimonials': 'آراء عملائنا',
        'Contact': 'تواصل معنا',
        'Book a Free Call': 'احجز مكالمة مجانية',
        
        // Hero Section
        'We Build Stunning Websites for Every Kind of Business': 'نصمم مواقع إلكترونية رائعة تناسب جميع أنواع الأعمال',
        'Custom, mobile-friendly, and designed to convert.': 'مواقع مخصصة، متجاوبة مع جميع الأجهزة، وتركز على تحقيق النتائج',
        "Let's Talk About Your Website": 'تواصل معنا لبدء مشروعك الرقمي',
        
        // Why Choose Us
        'Why Choose Us': 'لماذا نحن خيارك الأفضل؟',
        'Fast Performance': 'سرعة فائقة',
        'Lightning-fast loading speeds that keep your visitors engaged and improve SEO rankings.': 'تحميل سريع يحافظ على تفاعل الزوار ويعزز ظهورك في محركات البحث',
        'Mobile Optimized': 'متوافق مع جميع الأجهزة',
        'Perfect display on all devices - from smartphones to desktops, ensuring maximum reach.': 'تجربة مثالية على الجوال والكمبيوتر لضمان وصول أكبر لعملائك',
        'Custom Designs': 'تصاميم مبتكرة حسب الطلب',
        'Unique, tailored designs that reflect your brand identity and stand out from competitors.': 'تصاميم تعكس هوية علامتك التجارية وتجعلك مميزًا عن المنافسين',
        'Secure & Reliable': 'حماية وموثوقية',
        'Advanced security measures and reliable hosting to protect your business and customers.': 'أمان متقدم واستضافة موثوقة لحماية بياناتك وراحة عملائك',
        
        // Portfolio
        'Our Work': 'نماذج من أعمالنا',
        'E-Commerce Platform': 'منصة تجارة إلكترونية احترافية',
        'Retail Industry': 'قطاع التجزئة',
        'Restaurant Website': 'موقع إلكتروني لمطعم',
        'Food & Beverage': 'قطاع الأغذية والمشروبات',
        'Corporate Portal': 'بوابة إلكترونية للشركات',
        'Professional Services': 'الخدمات الاحترافية',
        'Healthcare System': 'نظام الرعاية الصحية',
        'Medical Industry': 'الصناعة الطبية',
        'Educational Platform': 'منصة تعليم إلكتروني',
        'Education Sector': 'مجال التعليم',
        'Real Estate Portal': 'بوابة إلكترونية للعقارات',
        'Real Estate': 'قطاع العقارات',
        'View Live Demo': 'شاهد العرض التوضيحي',
        
        // Testimonials
        'What Our Clients Say': 'آراء عملائنا',
        'Mawqi3 Pro exceeded our expectations! They delivered a beautiful, fast website that doubled our online sales.': 'فريق موقع برو فاق توقعاتنا! أنشأوا لنا موقعًا رائعًا وسريعًا ضاعف مبيعاتنا أونلاين',
        'Professional, reliable, and creative. Our new website perfectly represents our brand and attracts more customers.': 'فريق محترف وموثوق ومبدع. الموقع الجديد يعكس علامتنا ويجذب عملاء أكثر',
        'Amazing team! They understood our vision and created exactly what we needed. Highly recommended!': 'فريق مميز فهم رؤيتنا ونفذ كل ما نحتاجه بدقة. أنصح بالتعامل معهم!',
        'CEO, Fashion Boutique': 'المدير التنفيذي - متجر أزياء',
        'Owner, Tech Solutions': 'مالك - حلول تقنية',
        'Director, Healthcare Clinic': 'مدير - عيادة رعاية صحية',
        
        // How It Works
        'How It Works': 'خطوات العمل معنا',
        'Contact Us': 'ابدأ بالتواصل',
        'Reach out via WhatsApp or our contact form to start the conversation.': 'تواصل عبر الواتساب أو النموذج لبدء مشروعك',
        'We Discuss Your Vision': 'نستمع لرؤيتك',
        'We listen to your needs, goals, and preferences to create the perfect plan.': 'نناقش احتياجاتك وأهدافك لنضع خطة مناسبة لك',
        'You Approve the Design': 'اعتماد التصميم',
        'Review and approve the design mockups before we proceed with development.': 'راجع التصميم ووافق عليه قبل بدء التنفيذ',
        'We Build Your Website': 'نبدأ في بناء موقعك',
        'Our expert developers bring your vision to life with clean, efficient code.': 'يعمل فريقنا على تنفيذ موقعك بأعلى جودة واحترافية',
        'You Launch & Grow!': 'انطلق وحقق النجاح!',
        'Launch your new website and watch your business grow with ongoing support.': 'أطلق موقعك وراقب نمو أعمالك مع دعمنا المستمر',
        
        // Contact
        'Ready for a Stunning Website?': 'جاهز لموقع إلكتروني يحقق طموحاتك؟',
        "Let's discuss your project and create something amazing together. Get a free consultation today!": 'احصل على استشارة مجانية وابدأ مشروعك الرقمي معنا اليوم',
        'Message on WhatsApp': 'راسلنا عبر واتساب',
        'Your Name': 'الاسم الكامل',
        'Business Type': 'مجال العمل',
        'WhatsApp Number': 'رقم واتساب',
        'Project Details (Optional)': 'تفاصيل المشروع (اختياري)',
        'Submit Request': 'إرسال الطلب',
        
        // Footer
        'Creating stunning websites that help businesses grow and succeed online.': 'نصمم مواقع احترافية تساعدك على النمو والتميز في عالم الإنترنت',
        'Services': 'خدماتنا',
        'Website Design': 'تصميم مواقع إلكترونية',
        'E-Commerce': 'حلول التجارة الإلكترونية',
        'Mobile Apps': 'تطوير تطبيقات الجوال',
        'SEO Optimization': 'تحسين الظهور في محركات البحث',
        'All rights reserved.': 'جميع الحقوق محفوظة',
        
        // Mobile Bar
        'WhatsApp': 'واتساب',
        'Contact Form': 'نموذج التواصل'
    }
};

// Mobile Detection
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
};

// Enhanced Event Handler for Mobile and Desktop
function addMultiEventListener(element, events, handler, options = {}) {
    if (!element) return;
    
    events.forEach(event => {
        element.addEventListener(event, handler, options);
    });
}

// Language Toggle Function with Mobile Support
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('langBtn');
    const langText = document.getElementById('langText');
    
    // Update HTML direction and language
    html.setAttribute('lang', currentLanguage);
    html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Update language button text
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage === 'en' ? 'en' : 'ar'}`);
        element.textContent = key;
    });
    
    // Update body class for font adjustments if needed
    document.body.className = currentLanguage === 'ar' ? 'rtl-mode' : 'ltr-mode';
}

// Enhanced Form Handling with Mobile Support
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        // Handle form submission with both click and touch events
        addMultiEventListener(form, ['submit'], function(e) {
            // Add visual feedback for mobile
            const submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) {
                submitBtn.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    submitBtn.style.transform = 'scale(1)';
                }, 150);
            }
            
            console.log('Form submitted to Netlify');
            
            // Show success message
            showNotification(
                currentLanguage === 'ar' ? 'تم إرسال الطلب بنجاح!' : 'Request sent successfully!',
                'success'
            );
        });
        
        // Enhanced submit button interaction
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
            addMultiEventListener(submitBtn, ['touchstart', 'mousedown'], function(e) {
                this.style.transform = 'scale(0.95)';
            });
            
            addMultiEventListener(submitBtn, ['touchend', 'mouseup'], function(e) {
                this.style.transform = 'scale(1)';
            });
        }
    }
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (currentLanguage === 'ar') {
        notification.style.right = 'auto';
        notification.style.left = '20px';
        notification.style.transform = 'translateX(-400px)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = currentLanguage === 'ar' ? 'translateX(-400px)' : 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Enhanced Smooth Scrolling with Mobile Support
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        addMultiEventListener(link, ['click', 'touchend'], function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Show feedback for mobile
                if (isMobile()) {
                    showNotification(
                        currentLanguage === 'ar' ? 'تم الانتقال للقسم' : 'Navigated to section',
                        'info'
                    );
                }
            }
        }, { passive: false });
    });
}

// Enhanced CTA Button Handling
function setupCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    ctaButtons.forEach(button => {
        // Add touch feedback
        addMultiEventListener(button, ['touchstart', 'mousedown'], function(e) {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        addMultiEventListener(button, ['touchend', 'mouseup', 'mouseleave'], function() {
            this.style.transform = 'scale(1)';
        });
        
        // Handle click/touch
        addMultiEventListener(button, ['click', 'touchend'], function(e) {
            // Prevent double events on mobile
            if (e.type === 'touchend') {
                e.preventDefault();
            }
            
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, { passive: false });
    });
}

// Enhanced WhatsApp and Contact Methods
function setupContactMethods() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], .contact-method.whatsapp, .mobile-action.whatsapp');
    
    whatsappButtons.forEach(button => {
        addMultiEventListener(button, ['touchstart', 'mousedown'], function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        addMultiEventListener(button, ['touchend', 'mouseup'], function() {
            this.style.transform = 'scale(1)';
        });
        
        addMultiEventListener(button, ['click', 'touchend'], function(e) {
            // Prevent double events
            if (e.type === 'touchend' && e.cancelable) {
                e.preventDefault();
            }
            
            // Show feedback
            showNotification(
                currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...',
                'success'
            );
            
            // Open WhatsApp (let the default behavior handle the URL)
            if (e.type === 'touchend') {
                setTimeout(() => {
                    window.open(this.href, '_blank');
                }, 100);
            }
        }, { passive: false });
    });
    
    // Handle other contact methods
    const contactMethods = document.querySelectorAll('.contact-method:not(.whatsapp), .mobile-action:not(.whatsapp)');
    
    contactMethods.forEach(method => {
        addMultiEventListener(method, ['touchstart', 'mousedown'], function() {
            this.style.transform = 'scale(0.95)';
        });
        
        addMultiEventListener(method, ['touchend', 'mouseup'], function() {
            this.style.transform = 'scale(1)';
        });
        
        addMultiEventListener(method, ['click', 'touchend'], function(e) {
            if (e.type === 'touchend') {
                e.preventDefault();
            }
            
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    showNotification(
                        currentLanguage === 'ar' ? 'انتقال لنموذج التواصل' : 'Navigating to contact form',
                        'info'
                    );
                }
            }
        }, { passive: false });
    });
}

// Enhanced Header Scroll Effect
function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestHeaderUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
}

// Enhanced Portfolio Effects with Mobile Support
function setupPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        const portfolioLink = item.querySelector('.portfolio-link');
        
        // Desktop hover effects
        if (!isMobile()) {
            item.addEventListener('mouseenter', function() {
                if (overlay) {
                    overlay.style.transform = 'translateY(0)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                if (overlay) {
                    overlay.style.transform = 'translateY(100%)';
                }
            });
        } else {
            // Mobile touch effects
            addMultiEventListener(item, ['touchstart'], function() {
                if (overlay) {
                    overlay.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Portfolio link handling
        if (portfolioLink) {
            addMultiEventListener(portfolioLink, ['touchstart', 'mousedown'], function() {
                this.style.transform = 'scale(0.95)';
            });
            
            addMultiEventListener(portfolioLink, ['touchend', 'mouseup'], function() {
                this.style.transform = 'scale(1)';
            });
            
            addMultiEventListener(portfolioLink, ['click', 'touchend'], function(e) {
                if (e.type === 'touchend') {
                    e.preventDefault();
                    setTimeout(() => {
                        window.open(this.href, '_blank');
                    }, 100);
                }
                
                showNotification(
                    currentLanguage === 'ar' ? 'فتح العرض التوضيحي...' : 'Opening demo...',
                    'info'
                );
            }, { passive: false });
        }
    });
}

// Enhanced Form Animations with Mobile Support
function setupFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Check if input has value on page load
            if (input.value) {
                label.classList.add('active');
            }
            
            // Enhanced mobile input handling
            addMultiEventListener(input, ['focus', 'touchstart'], function() {
                label.classList.add('active');
            });
            
            addMultiEventListener(input, ['blur'], function() {
                if (!input.value) {
                    label.classList.remove('active');
                }
            });
            
            addMultiEventListener(input, ['input', 'change'], function() {
                if (input.value) {
                    label.classList.add('active');
                } else {
                    label.classList.remove('active');
                }
            });
            
            // Mobile-specific improvements
            if (isMobile()) {
                input.addEventListener('touchend', function() {
                    this.focus();
                });
            }
        }
    });
}

// Enhanced Mobile Menu with Proper Touch Support
function setupMobileMenu() {
    const nav = document.querySelector('.nav');
    const headerContainer = document.querySelector('.header .container');
    
    if (window.innerWidth <= 768 && nav && headerContainer) {
        let mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
        
        if (!mobileMenuBtn) {
            // Create mobile menu button
            mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-toggle';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-navy, #1e293b);
                cursor: pointer;
                padding: 8px;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            `;
            
            // Insert menu button
            headerContainer.insertBefore(mobileMenuBtn, nav);
            
            // Handle menu toggle with enhanced mobile support
            addMultiEventListener(mobileMenuBtn, ['click', 'touchend'], function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Visual feedback
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
                
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
                        border-radius: 0 0 8px 8px;
                    `;
                    this.innerHTML = '<i class="fas fa-times"></i>';
                }
            }, { passive: false });
        }
        
        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            addMultiEventListener(link, ['click', 'touchend'], function() {
                nav.style.display = 'none';
                if (mobileMenuBtn) {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.style.display = 'none';
                if (mobileMenuBtn) {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    }
}

// Enhanced Language Toggle with Mobile Support
function setupLanguageToggle() {
    const langBtn = document.getElementById('langBtn');
    
    if (langBtn) {
        addMultiEventListener(langBtn, ['touchstart', 'mousedown'], function() {
            this.style.transform = 'scale(0.95)';
        });
        
        addMultiEventListener(langBtn, ['touchend', 'mouseup'], function() {
            this.style.transform = 'scale(1)';
        });
        
        addMultiEventListener(langBtn, ['click', 'touchend'], function(e) {
            if (e.type === 'touchend') {
                e.preventDefault();
            }
            
            toggleLanguage();
            
            showNotification(
                currentLanguage === 'ar' ? 'تم تغيير اللغة' : 'Language changed',
                'success'
            );
        }, { passive: false });
    }
}

// Intersection Observer for Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .portfolio-item, .testimonial-card, .step');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Floating Elements Animation
function setupFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.browser-mockup');
    
    floatingElements.forEach(element => {
        if (!isMobile()) { // Disable on mobile for performance
            let startTime = Date.now();
            
            function animate() {
                const elapsed = Date.now() - startTime;
                const wave = Math.sin(elapsed * 0.001) * 10;
                element.style.transform = `translateY(${wave}px)`;
                requestAnimationFrame(animate);
            }
            
            animate();
        }
    });
}

// Enhanced Mobile Bottom Bar
function setupMobileBottomBar() {
    const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
    
    if (mobileBottomBar && isMobile()) {
        const mobileActions = mobileBottomBar.querySelectorAll('.mobile-action');
        
        mobileActions.forEach(action => {
            addMultiEventListener(action, ['touchstart'], function() {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
            });
            
            addMultiEventListener(action, ['touchend'], function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1)';
                
                const href = this.getAttribute('href');
                if (href) {
                    if (href.includes('wa.me')) {
                        showNotification(
                            currentLanguage === 'ar' ? 'فتح واتساب...' : 'Opening WhatsApp...',
                            'success'
                        );
                        setTimeout(() => {
                            window.open(href, '_blank');
                        }, 100);
                    } else if (href.startsWith('#')) {
                        const target = document.querySelector(href);
                        if (target) {
                            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                            const targetPosition = target.offsetTop - headerHeight - 20;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                            
                            showNotification(
                                currentLanguage === 'ar' ? 'انتقال للقسم' : 'Navigating to section',
                                'info'
                            );
                        }
                    }
                }
            }, { passive: false });
        });
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    updateLanguage();
    
    // Setup all interactive features with mobile support
    handleFormSubmission();
    setupSmoothScrolling();
    setupCTAButtons();
    setupContactMethods();
    setupHeaderScrollEffect();
    setupScrollAnimations();
    setupFloatingAnimation();
    setupPortfolioEffects();
    setupFormAnimations();
    setupMobileMenu();
    setupLanguageToggle();
    setupMobileBottomBar();
    
    // Add loading complete class
    document.body.classList.add('loaded');
    
    // Add mobile-specific optimizations
    if (isMobile()) {
        // Disable hover effects on mobile
        document.body.style.setProperty('--hover-enabled', '0');
        
        // Add mobile class for specific styling
        document.body.classList.add('mobile-device');
        
        // Improve touch scrolling
        document.body.style.touchAction = 'manipulation';
        document.body.style.webkitOverflowScrolling = 'touch';
    }
    
    console.log('Mawqi3 Pro website initialized successfully with enhanced mobile support!');
});

// Handle window resize with debouncing
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        setupMobileMenu();
        setupMobileBottomBar();
    }, 250);
});

// Prevent zoom on mobile inputs
if (isMobile()) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        });
        
        input.addEventListener('blur', function() {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            }
        });
    });
}

// Add CSS for active form labels
const style = document.createElement('style');
style.textContent = `
    .form-group label.active {
        top: -10px !important;
        left: var(--space-2) !important;
        font-size: var(--font-size-sm) !important;
        color: var(--accent-blue) !important;
        background: white !important;
        padding: 0 var(--space-2) !important;
    }
    
    html[dir="rtl"] .form-group label.active {
        left: auto !important;
        right: var(--space-2) !important;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);