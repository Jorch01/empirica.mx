// ==========================================
// Mobile Menu Toggle
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ==========================================
// Smooth Scroll Enhancement
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Header Scroll Effect
// ==========================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// Newsletter Form Handler with Web3Forms
// ==========================================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Cambiar estado del botón
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        const formData = new FormData(newsletterForm);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showNotification('¡Gracias por suscribirte! Revisa tu email.', 'success');
                newsletterForm.reset();
            } else {
                showNotification('Hubo un error. Por favor intenta de nuevo.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Error de conexión. Intenta nuevamente.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// ==========================================
// Contact Form Handler with Web3Forms
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Cambiar estado del botón
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                const name = contactForm.querySelector('input[type="text"]').value;
                showNotification(`¡Gracias ${name}! Hemos recibido tu mensaje y te contactaremos pronto.`, 'success');
                contactForm.reset();
            } else {
                showNotification('Hubo un error. Por favor intenta de nuevo.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Error de conexión. Intenta nuevamente.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// ==========================================
// Service Card Click to Contact
// ==========================================
document.querySelectorAll('.service-card .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        const serviceTitle = button.closest('.service-card').querySelector('.service-title').textContent;
        const servicePrice = button.closest('.service-card').querySelector('.service-price').textContent;

        // Pre-fill contact form with service info
        const contactSection = document.querySelector('#contacto');
        const serviceSelect = document.querySelector('#contactForm select');
        const messageTextarea = document.querySelector('#contactForm textarea');

        if (contactSection && serviceSelect && messageTextarea) {
            // Scroll to contact
            const headerOffset = 80;
            const elementPosition = contactSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Pre-fill form
            setTimeout(() => {
                // Try to match service in select
                const options = Array.from(serviceSelect.options);
                const matchingOption = options.find(option =>
                    option.text.toLowerCase().includes(serviceTitle.toLowerCase().substring(0, 10))
                );

                if (matchingOption) {
                    serviceSelect.value = matchingOption.value;
                }

                // Add service info to message
                messageTextarea.value = `Estoy interesado en: ${serviceTitle} (${servicePrice})\n\n`;
                messageTextarea.focus();
            }, 1000);
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
});

// ==========================================
// Dynamic Year in Footer
// ==========================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Empírica Legal Lab. Todos los derechos reservados.`;
}

// ==========================================
// Performance: Lazy Loading Images
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// Analytics Helper (Optional)
// ==========================================
function trackEvent(category, action, label) {
    // Integrar con Google Analytics, Plausible, etc.
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track service card clicks
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('.service-title').textContent;
        trackEvent('Services', 'Click', serviceName);
    });
});

// Track social link clicks
document.querySelectorAll('.social-link, .footer-social a').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.getAttribute('aria-label');
        trackEvent('Social', 'Click', platform);
    });
});

// ==========================================
// Notification System
// ==========================================
function showNotification(message, type = 'info') {
    // Crear el elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        font-family: var(--font-secondary);
        font-size: 0.95rem;
    `;

    // Agregar al body
    document.body.appendChild(notification);

    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Console Message
// ==========================================
console.log('%c Empírica Legal Lab ', 'background: #1a3a38; color: #b8936c; font-size: 20px; padding: 10px;');
console.log('%c Sitio desarrollado con ❤️ ', 'color: #666; font-size: 12px;');
