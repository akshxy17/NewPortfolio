// Additional animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for hero section
    const heroText = document.querySelector('.hero-section h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Skill progress bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.carousel').carousel('next');
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Add dark mode styles dynamically
    const style = document.createElement('style');
    style.id = 'dark-mode-styles';
    style.textContent = `
        body.dark-mode {
            background-color: #121212;
            color: #f5f5f5;
        }
        
        body.dark-mode .hero-section {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
        }
        
        body.dark-mode .skill-card,
        body.dark-mode .project-card,
        body.dark-mode .experience-box,
        body.dark-mode .contact-info,
        body.dark-mode .contact-form {
            background-color: #1e1e1e;
            color: #f5f5f5;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        body.dark-mode .navbar {
            background-color: #1a1a1a !important;
        }
        
        body.dark-mode .btn-outline-light {
            color: #f5f5f5;
            border-color: #f5f5f5;
        }
        
        body.dark-mode .btn-outline-light:hover {
            background-color: #f5f5f5;
            color: #121212;
        }
    `;
    document.head.appendChild(style);
});