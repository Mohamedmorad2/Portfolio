 // Animate the stats numbers counting up
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(statNumber => {
        const targetValue = parseInt(statNumber.textContent);
        let currentValue = 0;
        const duration = 2000; // 2 seconds
        const interval = 20; // update every 20ms
        const steps = duration / interval;
        const increment = targetValue / steps;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                statNumber.textContent = targetValue;
                clearInterval(counter);
            } else {
                statNumber.textContent = Math.floor(currentValue);
            }
        }, interval);
    });
    
    // Add active class to nav links when clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#0CFF9F';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#222';
        });
    });
    
    // Add active class to nav links when clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tabs
    const resumeTabs = document.querySelectorAll('#resumeTabs button');
    resumeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            resumeTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add active class to nav links when clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            
            const category = this.getAttribute("data-filter");
            projects.forEach(project => {
                if (category === "All" || project.getAttribute("data-category") === category) {
                    project.classList.remove("hidden");
                } else {
                    project.classList.add("hidden");
                }
            });
        });
    });
});



emailjs.init('xEGayhpAMYesu0U4x');

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            from_name: `${this.from_first_name.value} ${this.from_last_name.value}`,
            from_email: this.from_email.value,
            phone: this.phone.value,
            message: this.message.value,
            to_name: this.to_name.value,
            reply_to: this.reply_to.value
        };

        emailjs.send(
            'service_ymsv1ad', 
            'template_f58qcam', 
            formData
        )
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch((error) => {
            console.error('Error details:', error);
            alert(`Failed to send: ${error.text}`);
        });
    });



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.5, 
        rootMargin: "0px 0px -30% 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                console.log('Activated Section:', activeId);
                
                navLinks.forEach(link => {
                    const linkId = link.href.split('#')[1];
                    link.classList.toggle('active', linkId === activeId);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.getAttribute('id')) {
            observer.observe(section);
        }
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.querySelector(".scroll-up");


    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
        scrollUpButton.style.display = "block";
        } else {
        scrollUpButton.style.display = "none";
        }
    });


    scrollUpButton.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectSection = document.getElementById('project');
    projectSection.classList.add('visible');
});


document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        const color = window.getComputedStyle(this).backgroundColor;
        this.style.boxShadow = `0 8px 15px ${color}80`;
    });
    
    item.addEventListener('mouseout', function() {
        this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
    });
});


//  TYPING EFFECT
const texts = ["Machine learning Engineer ", "Data Science" , "Data Analysis"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 150;
const delayBetweenTexts = 350;
const blankSpace = " "; 
const minVisibleChars = 1; 

const dynamicTextElement = document.getElementById("dynamicText");

function typeText() {
    const currentText = texts[currentTextIndex];
    let displayedText;

    if (isDeleting) {
        currentCharIndex--;
        displayedText = currentText.substring(0, Math.max(currentCharIndex, minVisibleChars)) + blankSpace.repeat(currentText.length - Math.max(currentCharIndex, minVisibleChars));
    } else {
        currentCharIndex++;
        displayedText = currentText.substring(0, currentCharIndex);
    }

    dynamicTextElement.textContent = displayedText;

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => {
            isDeleting = true;
        }, delayBetweenTexts);
    } else if (isDeleting && currentCharIndex === minVisibleChars) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; 
    }

    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}


typeText();


