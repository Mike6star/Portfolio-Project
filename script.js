        // ======================== MOBILE MENU ========================
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active')
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="fas fa-bars"></i>';
            });
        }
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // ======================== SMOOTH SCROLL (offset for fixed header) ========================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === "#" || targetId === "") return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const offset = 80;
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ======================== WHATSAPP FORM SUBMISSION ========================
        // WhatsApp number in international format (without '+' or spaces)
        const whatsappNumber = "2349153124694";  // 09153124694 -> 2349153124694

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Get form values
                const name = document.getElementById('contactName')?.value.trim();
                const email = document.getElementById('contactEmail')?.value.trim();
                const subject = document.getElementById('contactSubject')?.value.trim();
                const message = document.getElementById('contactMsg')?.value.trim();

                // Validation
                if (!name || !email || !subject || !message) {
                    alert('⚠️ Please fill in all fields before sending.');
                    return;
                }
                if (!email.includes('@') || !email.includes('.')) {
                    alert('📧 Please enter a valid email address.');
                    return;
                }

                // Format ordered message exactly as inputs appear
                const waMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;
                // Open WhatsApp (works on mobile & desktop)
                window.open(`https://wa.me/${whatsappNumber}?text=${waMessage}`, '_blank');

                // Optional user feedback
                alert(`✅ Thank you ${name}! You will be redirected to WhatsApp.`);

                // Reset form after a short delay (optional)
                contactForm.reset();
            });
        }

                // My real projects
                // Each project needs and contains: title, description, tech (array), repoUrl, demoUrl
            const myProjects = [
            {
                title: "Salvation Ministries Digital Clock",
                description: "A clean, responsive digital clock showing both the logo, timer in seconds too and time automatically set by the local time of the user.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                repoUrl: "https://github.com/Mike6star/NEW-CLOCK-ADVANCED",
                demoUrl: "https://new-clock-advanced.vercel.app",
            },
            {
                title: "JavaScript Interactive Quiz app",
                description: "This is a beautiful, dynamic and responsive quiz app for students learning JavaScript programming language. It tests their capabilities in the language by asking simple but tricky question.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                repoUrl: "https://github.com/Mike6star/Interactive-Quiz-App",
                demoUrl: "https://interactive-quiz-app-snowy.vercel.app",
            },
            {
                title: "Bistro Elegance",
                description: "A captivating restaurant website showcasing the wonderful delicacies in the restaurant. It's built with a touch of excellence",
                tech: ["HTML5", "CSS3", "JavaScript"],
                repoUrl: "https://github.com/Mike6star/RESTAURANT-WEBSITE",
                demoUrl: "https://restaurant-website-nine-orpin.vercel.app",
            },
            {
                title: "WebFix Web Solutions",
                description: "This is a website that specializes in diagnosing and fixing website issues, optimizing performance, and creating stunning web experiences that converts visitors into customers.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                repoUrl: "htps://github.com/Mike6star/WebFix-Web-Solutions",
                demoUrl: "https://web-fix-web-solutions.vercel.app",
            }
            // I will add more projects here immediately I push them to my GitHub account
        ];

        function renderProjects() {
            const container = document.getElementById('projectsGrid');
            if (!container) return;
            container.innerHTML = ''; // clear any placeholders
            myProjects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';

            // Build the tech spans
            const techSpans = proj.tech.map(t => `<span>${escapeHtml(t)}</span>`).join('');
            // demo button includedbecause I have demo links for all my projects
                card.innerHTML = `
                    <div class="project-img">
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="project-info">
                        <h3>${escapeHtml(proj.title)}</h3>
                        <p>${escapeHtml(proj.description)}</p>
                        <div class="project-tech">${techSpans}</div>
                        <a href="${proj.repoUrl}" target="_blank" class="btn">View on GitHub</a>
                        <a href="${proj.demoUrl}" target="_blank" class="btn">Live Demo</a>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Simple helper to prevent XSS
        function escapeHtml(str) {
                return str.replace(/[&<>]/g, function(m) {
                    if (m === '&') return '&amp;';
                    if (m === '<') return '&lt;';
                    if (m === '>') return '&gt;';
                    return m;
                })
            }
        // call after DOM ready
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects();
            // Also trigger scroll animations for new cards (observer already set up)
            observeDynamicCards();
        });

        // ---------- SCROLL ANIMATIONS (Intersection Observer) ----------
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // specific group animations
                    if (entry.target.classList.contains('skills-container')) {
                        entry.target.querySelectorAll('.skill-item').forEach((item, idx) => setTimeout(() => item.classList.add('visible'), idx * 100));
                    }
                    if (entry.target.classList.contains('certificate-gallery')) {
                        entry.target.querySelectorAll('.certificate-item').forEach((item, idx) => setTimeout(() => item.classList.add('visible'), idx * 100));
                    }
                    if (entry.target.classList.contains('projects-grid')) {
                        entry.target.querySelectorAll('.project-card').forEach((item, idx) => setTimeout(() => item.classList.add('visible'), idx * 100));
                    }
                    if (entry.target.classList.contains('testimonials-container')) {
                        entry.target.querySelectorAll('.testimonial-card').forEach((item, idx) => setTimeout(() => item.classList.add('visible'), idx * 100));
                    }
                }
            });
        }, observerOptions);

        // Observe static sections and containers
        document.querySelectorAll('section').forEach(section => observer.observe(section));
        const containers = ['.skills-container', '.certificate-gallery', '.projects-grid', '.testimonials-container'];
        containers.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) observer.observe(el);
        });
        // Manually trigger hero visibility
        document.querySelector('.hero')?.classList.add('visible');

         // helper to observe dynamically added project cards
        function observeDynamicCards() {
            const grid = document.getElementById('projectsGrid');
            if (grid) {
                observer.observe(grid);
                grid.querySelectorAll('.project-card').forEach(card => observer.observe(card));
            }   
        }