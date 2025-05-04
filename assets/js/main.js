document.addEventListener('DOMContentLoaded', function() {
    // Skills Data
    const skills = [
        {
            name: "HTML",
            icon: "fab fa-html5 text-danger",
            description: "Proficient in creating semantic HTML5 markup for modern web applications.",
            proficiency: 95
        },
        {
            name: "CSS",
            icon: "fab fa-css3-alt text-info",
            description: "Expertise in CSS3, including Flexbox, Grid, and responsive design principles.",
            proficiency: 90
        },
        {
            name: "JavaScript",
            icon: "fab fa-js square text-warning",
            description: "Strong understanding of vanilla JavaScript, ES6+ features, and modern JS patterns.",
            proficiency: 85
        },
        {
            name: "ReactJS",
            icon: "fab fa-react text-primary",
            description: "Experience building dynamic single-page applications with React and its ecosystem.",
            proficiency: 80
        },
        {
            name: "Bootstrap",
            icon: "fab fa-bootstrap text-primary",
            description: "Skilled in using Bootstrap 5 to create responsive, mobile-first websites.",
            proficiency: 90
        },
        {
            name: "Java",
            icon: "fab fa-java text-danger",
            description: "Proficient in Java programming language and object-oriented design principles.",
            proficiency: 75
        },
        {
            name: "Spring Boot",
            icon: "fas fa-leaf text-success",
            description: "Experience developing RESTful APIs and microservices with Spring Boot.",
            proficiency: 70
        },
        {
            name: "Spring",
            icon: "fas fa-server text-success",
            description: "Knowledge of Spring Framework including Spring MVC, Security, and Data.",
            proficiency: 65
        },
        {
            name: "MySQL",
            icon: "fas fa-database text-primary",
            description: "Skilled in database design, SQL queries, and MySQL administration.",
            proficiency: 80
        },
        {
            name: "Git & GitHub",
            icon: "fab fa-github text-dark",
            description: "Proficient in version control using Git and collaborative workflows with GitHub.",
            proficiency: 85
        },
        {
            name: "Postman",
            icon: "fas fa-cloud text-warning",
            description: "Experience testing and documenting APIs using Postman.",
            proficiency: 75
        },
        {
            name: "Eclipse",
            icon: "fas fa-code text-dark", // Dark color for Eclipse
            description: "Experienced in Java development and debugging with Eclipse.",
            proficiency: 70
        }
        
        
    ];

    // Projects Data
    const projects = [
        {
            title: "FLAMES",
            description: "A fun and interactive FLAMES Calculator that predicts the relationship between two people based on their names.",
            images: [
                "assets/images/skills/project/ss1.png",
                "assets/images/skills/project/ss2.png"
            ],
            liveLink: "https://akshxy17.github.io/FLAMES/",
            githubLink: "https://github.com/akshxy17/FLAMES",
            category: "frontend"
        },
        {
            title: "Student Data Management System",
            description: "A scalable web application for managing student identities, roll numbers, and academic records with secure CRUD operations.",
            images: [
                "assets/images/skills/project/student1.png",
                "assets/images/skills/project/student2.png"
            ],
            liveLink: "https://student-crud-frontend.vercel.app/",
            githubLink: "https://github.com/akshxy17/StudentCRUD-frontend",
            category: "fullstack"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that displays current conditions and forecasts using data from a weather API.",
            images: [
                "assets/images/projects/weather-1.jpg",
                "assets/images/projects/weather-2.jpg"
            ],
            liveLink: "https://example-weather.com",
            githubLink: "https://github.com/yourusername/weather-dashboard",
            category: "frontend"
        },
        {
            title: "RESTful API Service",
            description: "A backend service with secure authentication, data validation, and database integration.",
            images: [
                "assets/images/projects/api-1.jpg",
                "assets/images/projects/api-2.jpg"
            ],
            liveLink: "https://example-api.com",
            githubLink: "https://github.com/akshxy17/StudentCRUD-Backend",
            category: "backend"
        }
    ];

    // Render Skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach((skill, index) => {
        const skillHTML = `
            <div class="col-md-4 col-sm-6">
                <div class="skill-card fade-in-up delay-${index % 5}">
                    <i class="${skill.icon} skill-icon"></i>
                    <h4>${skill.name}</h4>
                    <p>${skill.description}</p>
                    <div class="progress mt-3">
                        <div class="progress-bar" role="progressbar" style="width: 0%" 
                             aria-valuenow="${skill.proficiency}" aria-valuemin="0" aria-valuemax="100"
                             data-progress="${skill.proficiency}">
                            ${skill.proficiency}%
                        </div>
                    </div>
                </div>
            </div>
        `;
        skillsContainer.innerHTML += skillHTML;
    });

    // Animate progress bars when in view
    const animateProgressBars = function() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    // Render Projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach((project, index) => {
        const projectHTML = `
            <div class="col-lg-4 col-md-6" data-category="${project.category}">
                <div class="project-card fade-in-up delay-${index % 5}">
                    <div id="carousel-${index}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${project.images.map((img, imgIndex) => `
                                <div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
                                    <img src="${img}" class="d-block w-100 project-img" alt="${project.title} screenshot ${imgIndex + 1}" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="project-body">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <a href="${project.liveLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                            <a href="${project.githubLink}" target="_blank" class="btn btn-outline-secondary">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // Project Filtering
    document.querySelectorAll('.project-filters button').forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            document.querySelector('.project-filters .active').classList.remove('active');
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const projectItems = document.querySelectorAll('[data-category]');
            
            projectItems.forEach(item => {
                const projectCategory = item.getAttribute('data-category');
                if (filter === 'all' || projectCategory === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }
            
            // Simulate form submission
            const feedback = document.getElementById('formFeedback');
            feedback.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you!</strong> Your message has been sent successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            
            // Reset form
            this.reset();
            this.classList.remove('was-validated');
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
                
                // Animate progress bars when skills section is in view
                if (element.closest('#skills')) {
                    animateProgressBars();
                }
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});