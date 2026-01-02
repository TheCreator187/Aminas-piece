// Parallax Scrolling Effect - Enhanced & Optimized
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with data-speed attribute
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    // Performance optimization with RequestAnimationFrame
    let ticking = false;
    let lastScrollY = 0;
    
    // Smooth parallax function with easing
    function smoothParallax(scrolled) {
        const scrollFactor = 0.6; // Dampening factor for smoother effect
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Only apply parallax when element is near viewport
            const isNearViewport = (
                elementTop < scrolled + windowHeight + 300 &&
                elementTop + elementHeight > scrolled - 300
            );
            
            if (!isNearViewport && !element.classList.contains('parallax-bg') && 
                !element.classList.contains('hero-title') && 
                !element.classList.contains('hero-subtitle')) {
                return;
            }
            
            // Different parallax calculations for different element types
            if (element.classList.contains('parallax-bg')) {
                // Background parallax - smooth and subtle
                const yPos = -(scrolled * speed * 0.5);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            } 
            else if (element.classList.contains('hero-title') || 
                     element.classList.contains('hero-subtitle')) {
                // Hero text - smooth fade and movement
                const yPos = scrolled * speed * 0.8;
                const opacity = Math.max(0, 1 - (scrolled / (windowHeight * 0.7)));
                
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                element.style.opacity = opacity;
            }
            else if (element.classList.contains('custom-bg')) {
                // Custom section background
                const yPos = -(scrolled * speed * 0.3);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
            else {
                // Content elements - smooth reveal and parallax
                const elementMiddle = elementTop + (elementHeight / 2);
                const viewportMiddle = scrolled + (windowHeight / 2);
                const distanceFromCenter = elementMiddle - viewportMiddle;
                
                // Smooth parallax based on distance from viewport center
                const yPos = distanceFromCenter * speed * scrollFactor * 0.15;
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                
                // Smooth fade-in effect
                const fadeStart = scrolled + windowHeight * 0.85;
                const fadeEnd = scrolled + windowHeight * 0.3;
                let opacity = 1;
                
                if (elementTop > fadeStart) {
                    opacity = 0;
                } else if (elementTop > fadeEnd) {
                    opacity = 1 - ((elementTop - fadeEnd) / (fadeStart - fadeEnd));
                }
                
                element.style.opacity = Math.max(0, Math.min(1, opacity));
            }
        });
    }
    
    // Optimized scroll handler with RequestAnimationFrame
    function onScroll() {
        lastScrollY = window.pageYOffset;
        
        // Update navbar
        if (lastScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                smoothParallax(lastScrollY);
                revealOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Enhanced reveal animation for elements
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.gallery-item, .process-step, .feature');
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrolled;
            const revealPoint = scrolled + windowHeight * 0.8;
            
            if (elementTop < revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize reveal elements with smooth transitions
    function initRevealElements() {
        const reveals = document.querySelectorAll('.gallery-item, .process-step, .feature');
        reveals.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
    
    // Smooth floating animation for decorative elements
    function floatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating-yarn, .floating-element');
        
        floatingElements.forEach((element, index) => {
            const duration = 4000 + (index * 800);
            const delay = index * 400;
            
            // Use CSS animations instead of JS intervals for better performance
            element.style.animation = `gentleFloat ${duration}ms ease-in-out ${delay}ms infinite`;
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                
                // Smooth scroll with custom easing
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA Button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Custom order form would open here! This is a demo.');
        });
    }
    
    // Enhanced mouse move parallax effect on hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        let mouseX = 0.5;
        let mouseY = 0.5;
        let currentX = 0.5;
        let currentY = 0.5;
        
        heroSection.addEventListener('mousemove', function(e) {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
        });
        
        // Smooth mouse parallax animation
        function animateMouseParallax() {
            // Smooth interpolation
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;
            
            const yarns = document.querySelectorAll('.floating-yarn');
            yarns.forEach((yarn, index) => {
                const speed = (index + 1) * 8;
                const x = (currentX - 0.5) * speed;
                const y = (currentY - 0.5) * speed;
                
                yarn.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            requestAnimationFrame(animateMouseParallax);
        }
        
        animateMouseParallax();
    }
    
    // Enhanced 3D tilt effect for images
    const mockImages = document.querySelectorAll('.mock-image');
    mockImages.forEach(image => {
        let currentRotateX = 0;
        let currentRotateY = 0;
        let targetRotateX = 0;
        let targetRotateY = 0;
        let isHovering = false;
        
        image.addEventListener('mouseenter', function() {
            isHovering = true;
        });
        
        image.addEventListener('mousemove', function(e) {
            if (!isHovering) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            targetRotateX = (y - centerY) / 15;
            targetRotateY = (centerX - x) / 15;
        });
        
        image.addEventListener('mouseleave', function() {
            isHovering = false;
            targetRotateX = 0;
            targetRotateY = 0;
        });
        
        // Smooth tilt animation
        function animateTilt() {
            currentRotateX += (targetRotateX - currentRotateX) * 0.1;
            currentRotateY += (targetRotateY - currentRotateY) * 0.1;
            
            const scale = isHovering ? 1.05 : 1;
            image.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${scale})`;
            
            requestAnimationFrame(animateTilt);
        }
        
        animateTilt();
    });
    
    // Initialize everything
    initRevealElements();
    floatingAnimation();
    
    // Scroll event with optimized handling
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial calls
    smoothParallax(window.pageYOffset);
    revealOnScroll();
    
    // Page loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Enhanced Intersection Observer for efficient animations
    const observerOptions = {
        threshold: [0, 0.1, 0.5],
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.text-content, .image-parallax, .mock-image').forEach(el => {
        observer.observe(el);
    });
});

// CSS Keyframes for smooth floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes gentleFloat {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(10px, -10px) rotate(2deg);
        }
        50% {
            transform: translate(-5px, -20px) rotate(-2deg);
        }
        75% {
            transform: translate(-10px, -10px) rotate(1deg);
        }
    }
    
    .text-content, .image-parallax, .mock-image {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Smooth scrolling for all browsers */
    * {
        scroll-behavior: smooth;
    }
    
    /* GPU acceleration for smooth animations */
    [data-speed],
    .mock-image,
    .floating-yarn,
    .floating-element {
        will-change: transform;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
`;
document.head.appendChild(style);
