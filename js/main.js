document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        });
    }

    // Particles System
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = '#2563eb'; // Primary Blue
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                        ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = 'rgba(37, 99, 235,' + opacityValue * 0.2 + ')'; // Blue connector
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connect();
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate hamburger lines
            if (navLinks.classList.contains('active')) {
                hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburger.children[1].style.opacity = '0';
                hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                hamburger.children[0].style.transform = 'none';
                hamburger.children[1].style.opacity = '1';
                hamburger.children[2].style.transform = 'none';
            }
        });
    }

    // Close menu when link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        });
    });

    // Navbar Scroll Effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 1. Typewriter Effect
    const textElement = document.querySelector('.typing-text');
    const words = ["Website", "Toko Online", "Aplikasi Bisnis"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (textElement) type();

    // 2. Animated Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (counter.parentElement.innerText.includes('%') ? '' : '+');
                }
            };
            updateCount();
        });
    }

    // Trigger counters when in view
    let counterPlayed = false;
    const statsSection = document.querySelector('.hero-stats');

    if (statsSection) {
        window.addEventListener('scroll', () => {
            if (!counterPlayed && window.scrollY + window.innerHeight > statsSection.offsetTop) {
                animateCounters();
                counterPlayed = true;
            }
        });
    }

    // 3. 3D Tilt Effect
    const cards = document.querySelectorAll('.service-card, .pricing-card, .portfolio-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Smooth Reveal Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .section-title');

    hiddenElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // --- NEW FEATURES LOGIC ---

    // 1. Dark Mode Toggle
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // 2. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Close other open FAQs
            const activeQuestion = document.querySelector('.faq-question.active');
            if (activeQuestion && activeQuestion !== question) {
                activeQuestion.classList.remove('active');
                activeQuestion.nextElementSibling.style.maxHeight = null;
            }

            // Toggle current FAQ
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // 3. Pricing Estimator Calculator
    const calcCheckboxes = document.querySelectorAll('.calc-checkbox input');
    const totalDisplay = document.getElementById('calc-total');
    const waBtn = document.getElementById('calc-wa-btn');

    function calculateTotal() {
        let total = 0;
        let selectedFeatures = [];

        calcCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
                const label = checkbox.nextElementSibling.nextElementSibling.textContent;
                selectedFeatures.push(label.replace(' (Base)', ''));
            }
        });

        // Format to IDR
        const formattedTotal = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(total);

        if (totalDisplay) {
            totalDisplay.textContent = formattedTotal;
        }

        // Update WhatsApp Button Link
        if (waBtn) {
            let message = `Halo, saya tertarik membuat website dengan estimasi total *${formattedTotal}*.\n\nFitur yang saya butuhkan:\n`;
            if (selectedFeatures.length === 0) {
                message += "- (Belum ada fitur yang dipilih)";
            } else {
                selectedFeatures.forEach(feature => {
                    message += `- ${feature}\n`;
                });
            }
            message += `\nMohon informasi lebih lanjut. Terima kasih!`;
            
            const encodedMessage = encodeURIComponent(message);
            waBtn.href = `https://wa.me/6285241476413?text=${encodedMessage}`;
        }
    }

    if (calcCheckboxes.length > 0) {
        calcCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', calculateTotal);
        });
        // Initial calculation
        calculateTotal();
    }
});
