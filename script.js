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

// Language Toggle Function
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
    langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage === 'en' ? 'en' : 'ar'}`);
        element.textContent = key;
    });
    
    // Update body class for font adjustments if needed
    document.body.className = currentLanguage === 'ar' ? 'rtl-mode' : 'ltr-mode';
}

// Form Handling
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Let Netlify handle the form submission naturally
            console.log('Form submitted to Netlify');
        });
    }
}

// Notification System
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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
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
        let startTime = Date.now();
        
        function animate() {
            const elapsed = Date.now() - startTime;
            const wave = Math.sin(elapsed * 0.001) * 10;
            element.style.transform = `translateY(${wave}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// Portfolio Hover Effects
function setupPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        const mockup = item.querySelector('.portfolio-mockup');
        
        item.addEventListener('mouseenter', function() {
            overlay.style.transform = 'translateY(0)';
            if (mockup) {
                mockup.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.transform = 'translateY(100%)';
            if (mockup) {
                mockup.style.transform = 'scale(1)';
            }
        });
    });
}

// Form Label Animation
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
            
            input.addEventListener('focus', function() {
                label.classList.add('active');
            });
            
            input.addEventListener('blur', function() {
                if (!input.value) {
                    label.classList.remove('active');
                }
            });
            
            input.addEventListener('input', function() {
                if (input.value) {
                    label.classList.add('active');
                } else {
                    label.classList.remove('active');
                }
            });
        }
    });
}

// Mobile Menu Toggle (if needed)
function setupMobileMenu() {
    // Add mobile menu button if screen is small
    if (window.innerWidth <= 768) {
        const header = document.querySelector('.header .container');
        const nav = document.querySelector('.nav');
        
        // Create mobile menu button
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-toggle';
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        menuButton.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-navy);
            cursor: pointer;
        `;
        
        // Insert menu button
        header.insertBefore(menuButton, nav);
        
        // Handle menu toggle
        menuButton.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                `;
            }
        });
    }
}

// Testimonials Rotation
function setupTestimonialsRotation() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    // Add automatic rotation every 5 seconds
    setInterval(() => {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = '0.7';
            testimonial.style.transform = 'scale(0.95)';
        });
        
        if (testimonials[currentTestimonial]) {
            testimonials[currentTestimonial].style.opacity = '1';
            testimonials[currentTestimonial].style.transform = 'scale(1)';
        }
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 5000);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    updateLanguage();
    
    // Setup all interactive features
    handleFormSubmission();
    setupSmoothScrolling();
    setupHeaderScrollEffect();
    setupScrollAnimations();
    setupFloatingAnimation();
    setupPortfolioEffects();
    setupFormAnimations();
    setupMobileMenu();
    setupTestimonialsRotation();
    
    // Add loading complete class
    document.body.classList.add('loaded');
    
    console.log('Mawqi3 Pro website initialized successfully!');
});

// Handle window resize
window.addEventListener('resize', function() {
    setupMobileMenu();
});

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