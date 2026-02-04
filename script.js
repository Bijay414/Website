document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your Public Key - Make sure this key is allowed on your domain
    (function() {
        // Initialize the EmailJS SDK with your public key
        emailjs.init("4TJOdLXZP4lGSrj_h");
    })();
    
    // EmailJS configuration
    const serviceID = "service_ovgas19";
    const templateID = "template_bmsgu4h";

    // Hamburger Menu
    const hamburger = document.querySelector('.nav-hamburger');
    const menu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Smooth Scroll with improved performance
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const target = document.querySelector(targetId);
            
            // Add highlight effect to the section being scrolled to
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.classList.remove('highlight-section'));
            target.classList.add('highlight-section');
            
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });

    // Dynamic Content
    const skills = [
        { icon: 'fas fa-code', title: 'C', desc: 'High-performance system coding.', level: 90 },
        { icon: 'fas fa-file-code', title: 'C++', desc: 'Advanced OOP applications.', level: 85 },
        { icon: 'fab fa-python', title: 'Python', desc: 'Scalable backend solutions.', level: 80 },
        { icon: 'fas fa-database', title: 'MySQL', desc: 'Optimized data handling.', level: 75 },
        { icon: 'fab fa-git-alt', title: 'Git', desc: 'Version control expertise.', level: 70 },
        { icon: 'fas fa-microchip', title: 'Electronics', desc: 'Circuit design skills.', level: 65 }
    ];

    const projects = [
        { 
            icon: 'fas fa-book-open', 
            title: 'C-Project', 
            desc: 'Efficient book tracking system built with C programming.', 
            link: 'https://github.com/Bijay414/C-Programming_Project.git',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#667eea'
        },
        { 
            icon: 'fas fa-graduation-cap', 
            title: 'OOP-Project', 
            desc: 'Interactive educational quiz platform using C++ OOP principles.', 
            link: 'https://github.com/Bijay414/OOP-Project_using-CPP.git',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: '#f093fb'
        },

    ];

    const contactInfo = [
        { icon: 'fas fa-phone', value: '+977 9802696465' },
        { icon: 'fas fa-envelope', value: 'kurmibijay4484@gmail.com', link: 'mailto:kurmibijay4484@gmail.com' },
        { icon: 'fas fa-map-marker-alt', value: 'Balkumari, Lalitpur, Nepal' }
    ];

    const socials = [
        { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/share/1A3g' },
        { icon: 'fab fa-github', link: 'https://github.com/Bijay414' },
        { icon: 'fab fa-instagram', link: 'https://www.instagram.com/bijaykurmi20/profilecard/?igsh=eDUxaXk1ZmptMHR5' },
        { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit' }
    ];

    // Populate Skills with Progress Bars and Animation
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <h3>${skill.title}</h3>
                <p>${skill.desc}</p>
                <div class="progress"><div class="progress-bar" style="width: 0%"></div></div>
            </div>
        `;
    });

    // Animate progress bars when scrolled into view
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
                setTimeout(() => {
                    progressBars[index].style.width = `${skills[index].level}%`;
                }, 200 * index); // Stagger animation
            }
        });
    };

    // Detect if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Check for elements in viewport on scroll and initial load
    window.addEventListener('scroll', animateProgressBars);
    window.addEventListener('load', animateProgressBars);

    // Populate Projects with enhanced styling
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="project-card">
                <div class="project-preview" style="background: ${project.gradient}">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <a href="${project.link}" target="_blank" class="project-link">
                        <span>View Project</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    });

    // Add fade-in animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    const animateProjects = () => {
        projectCards.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('fade-in')) {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, 150 * index); // Stagger animation
            }
        });
    };

    window.addEventListener('scroll', animateProjects);
    window.addEventListener('load', animateProjects);

    // Populate Contact Info
    const contactInfoContainer = document.querySelector('.contact-info');
    contactInfo.forEach(info => {
        contactInfoContainer.innerHTML += `
            <div class="info-entry">
                <i class="${info.icon}"></i>
                ${info.link ? `<a href="${info.link}">${info.value}</a>` : `<p>${info.value}</p>`}
            </div>
        `;
    });

    // Populate Footer Links
    const footerLinks = document.querySelector('.footer-links');
    socials.forEach(social => {
        footerLinks.innerHTML += `
            <a href="${social.link}" target="_blank" class="social-icon">
                <i class="${social.icon}"></i>
            </a>
        `;
    });

    // IMPROVED: Contact Form Submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.innerHTML = `<span>Sending</span><span class="loading-spinner"></span>`;
        submitBtn.disabled = true;

        // Clear previous messages
        formStatus.innerHTML = '';
        formStatus.className = '';

        // Validate form fields
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const subject = contactForm.querySelector('[name="subject"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            return;
        }
        
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            return;
        }

        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Bijay Kurmi'
        };

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                showFormMessage('Failed to send message. Please try again or contact me directly.', 'error');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });

    function showFormMessage(text, type) {
        formStatus.className = `message ${type}-message`;
        formStatus.innerHTML = `<i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}"></i> ${text}`;
        
        // Remove success message after delay
        if (type === 'success') {
            setTimeout(() => {
                formStatus.classList.add('fade-out');
                setTimeout(() => {
                    formStatus.innerHTML = '';
                    formStatus.className = '';
                }, 500);
            }, 5000);
        }
    }

    // ENHANCED: Professional Scrolling Indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-progress';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollTotal) * 100;
        scrollIndicator.style.width = `${scrollProgress}%`;
    });

    // ENHANCED: Dynamic Particles with better performance
    const particleCount = Math.min(30, window.innerWidth / 40); // Responsive particle count
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize particle size and color
        const size = Math.random() * 8 + 3;
        const colorRand = Math.random();
        let color;
        
        if (colorRand < 0.33) {
            color = 'rgba(255, 215, 0, 0.5)'; // Gold
        } else if (colorRand < 0.66) {
            color = 'rgba(59, 130, 246, 0.5)'; // Blue
        } else {
            color = 'rgba(255, 255, 255, 0.5)'; // White
        }
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        
        document.body.appendChild(particle);
        
        // Remove and recreate particles to improve performance
        setTimeout(() => {
            particle.remove();
            createParticle(); // Respawn particle
        }, (Math.random() * 8 + 4) * 1000);
    }

    // OPTIMIZED: Interactive Cursor Effect with better performance
    let isTrailActive = true;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    const throttleDelay = 50; // ms between trail spawns
    
    document.addEventListener('mousemove', (e) => {
        if (isTrailActive) {
            const currentTime = Date.now();
            
            // Throttle trail creation for better performance
            if (currentTime - lastTime > throttleDelay) {
                createGlowTrail(e.clientX, e.clientY);
                lastX = e.clientX;
                lastY = e.clientY;
                lastTime = currentTime;
            }
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isTrailActive && e.touches.length > 0) {
            const currentTime = Date.now();
            
            if (currentTime - lastTime > throttleDelay) {
                const touch = e.touches[0];
                createGlowTrail(touch.clientX, touch.clientY);
                lastTime = currentTime;
            }
        }
    });

    function createGlowTrail(x, y) {
        const glow = document.createElement('div');
        glow.classList.add('glow-trail');
        
        // Randomize glow size and color
        const size = Math.random() * 15 + 15;
        const opacity = Math.random() * 0.3 + 0.3;
        
        // Professional color palette
        const colors = [
            `rgba(255, 215, 0, ${opacity})`, // Gold
            `rgba(59, 130, 246, ${opacity})`, // Blue
            `rgba(255, 255, 255, ${opacity})` // White
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        glow.style.width = `${size}px`;
        glow.style.height = `${size}px`;
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.background = `radial-gradient(circle, ${color} 20%, transparent 70%)`;
        
        document.body.appendChild(glow);
        
        // Remove after animation completes
        setTimeout(() => glow.remove(), 800);
    }
    
    // Toggle cursor trail with keyboard shortcut (T key)
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 't') {
            isTrailActive = !isTrailActive;
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `<i class="${isTrailActive ? 'fas fa-magic' : 'fas fa-ban'}"></i> ${isTrailActive ? 'Cursor effects activated!' : 'Cursor effects deactivated'}`;
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 2000);
        }
    });

    // ENHANCED: Section Title Animations
    const sectionTitles = document.querySelectorAll('.section-title');
    const animateTitles = () => {
        sectionTitles.forEach(title => {
            if (isElementInViewport(title) && !title.classList.contains('animated')) {
                title.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateTitles);
    window.addEventListener('load', animateTitles);

    // ADDED: Professional Typing Effect for Landing Subtitle
    const landingSubtitle = document.querySelector('.landing-subtitle');
    if (landingSubtitle) {
        const originalText = landingSubtitle.textContent;
        landingSubtitle.textContent = '';
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < originalText.length) {
                landingSubtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            } else {
                // Add blinking cursor at the end
                landingSubtitle.innerHTML = landingSubtitle.textContent + '<span class="cursor-blink">|</span>';
            }
        }
        
        setTimeout(typeText, 500);
    }

    // ADDED: Project link hover effect listeners
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('.fa-arrow-right').classList.add('arrow-animate');
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('.fa-arrow-right').classList.remove('arrow-animate');
        });
    });

    // ADDED: Professional form field animation
    document.querySelectorAll('.input-field').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.classList.add('field-focus');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.classList.remove('field-focus');
            }
        });
        
        // Check initial state (for browser autofill)
        if (field.value) {
            field.parentNode.classList.add('field-focus');
        }
    });
});
