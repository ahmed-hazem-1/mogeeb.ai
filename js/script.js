// Mogeeb.ai Website JavaScript
// Based on Mogeeb_Website_Design_Guide.md

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize form handling
    initForms();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
});

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, .section-title, .hero h1, .hero .tagline');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Mobile Navigation Toggle
function toggleNav() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.toggle('active');
    
    // Change hamburger to X icon
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Initialize mobile menu
function initMobileMenu() {
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            const icon = navToggle.querySelector('i');
            
            navMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        const navbar = document.querySelector('.navbar');
        
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            const icon = navToggle.querySelector('i');
            navMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form handling
function initForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const company = formData.get('company');
    const message = formData.get('message');
    
    // Validate form
    if (!name || !email || !whatsapp || !message) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(name, email, whatsapp, company, message);
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
        
        // Optional: Open WhatsApp with pre-filled message
        // window.open(`https://wa.me/+201275012177?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        
    }, 2000);
}

// Create WhatsApp message from form data
function createWhatsAppMessage(name, email, whatsapp, company, message) {
    let whatsappText = `مرحباً، أنا ${name}\n\n`;
    whatsappText += `البريد الإلكتروني: ${email}\n`;
    whatsappText += `الواتساب: ${whatsapp}\n`;
    
    if (company) {
        whatsappText += `اسم الشركة: ${company}\n`;
    }
    
    whatsappText += `\nالرسالة:\n${message}\n\n`;
    whatsappText += `مهتم بخدمات مجيب.ai`;
    
    return whatsappText;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-orange)' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = scrollToTop;
    
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-orange), var(--deep-red));
        color: white;
        border: none;
        border-radius: var(--radius-round);
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: var(--shadow-md);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTopButton);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.background = 'linear-gradient(135deg, var(--primary-orange), var(--deep-red))';
        header.style.boxShadow = 'var(--shadow-lg)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-orange), var(--deep-red))';
        header.style.boxShadow = 'var(--shadow-md)';
    }
});

// Pricing card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = 'var(--shadow-lg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'var(--shadow-md)';
            }
        });
    });
});

// WhatsApp floating button
function addWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/+201275012177?text=مرحباً، أريد معرفة المزيد عن خدمات مجيب.ai';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 30px;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: var(--radius-round);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
    `;
    
    // Add pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
    `;
    document.head.appendChild(style);
    
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(whatsappBtn);
}

// Initialize WhatsApp button
document.addEventListener('DOMContentLoaded', addWhatsAppButton);

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return re.test(phone);
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#dc3545';
                showFieldError(this, 'يرجى إدخال بريد إلكتروني صحيح');
            } else {
                this.style.borderColor = '#e0e0e0';
                removeFieldError(this);
            }
        });
    }
    
    if (whatsappInput) {
        whatsappInput.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#dc3545';
                showFieldError(this, 'يرجى إدخال رقم هاتف صحيح');
            } else {
                this.style.borderColor = '#e0e0e0';
                removeFieldError(this);
            }
        });
    }
});

function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 5px;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Loading states for buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.classList.add('loading');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
    } else {
        button.disabled = false;
        button.classList.remove('loading');
    }
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics or other tracking service integration
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.closest('section')?.id || 'unknown'
            });
        });
    });
    
    // Track form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_type: 'contact'
            });
        });
    }
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            trackEvent('scroll_depth', {
                scroll_percent: scrollPercent
            });
        }
    });
});

// Make functions globally available
window.toggleNav = toggleNav;
window.trackEvent = trackEvent;