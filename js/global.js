// Initialize AOS Animation (if not already initialized elsewhere with different settings)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out', // Added easing for consistency
        mirror: false // Added mirror for consistency
    });
}

// Make navbar sticky on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Using classList.toggle for a more concise way to add/remove the sticky class
        navbar.classList.toggle('sticky', window.scrollY > 50);
    }
});

// Back to Top Button functionality
const backToTopButton = document.querySelector('.back-to-top');
const backToTopButtonById = document.getElementById('backToTop'); // For the ID-based selector

const handleBackToTopVisibility = (element) => {
    if (element) {
        if (window.scrollY > 300) {
            if (element.classList) {
                element.classList.add('show'); // Using 'show' class as seen in one of your snippets
            } else {
                element.style.display = 'block'; // Fallback for older browsers or if no class is used
            }
        } else {
            if (element.classList) {
                element.classList.remove('show');
            } else {
                element.style.display = 'none';
            }
        }
    }
};

// Event listener for showing/hiding back to top button (for class-based selector)
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        handleBackToTopVisibility(backToTopButton);
    });

    // Smooth scroll to top when button is clicked (for class-based selector)
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Event listener for showing/hiding back to top button (for ID-based selector)
if (backToTopButtonById) {
    window.addEventListener('scroll', () => {
        handleBackToTopVisibility(backToTopButtonById);
    });

    // Smooth scroll to top when button is clicked (for ID-based selector)
    backToTopButtonById.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Dark Mode Toggle functionality
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';

if (modeToggle) {
    // Check for saved mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        modeToggle.innerHTML = sunIcon;
    }

    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Update icon
        if (body.classList.contains('dark-mode')) {
            modeToggle.innerHTML = sunIcon;
            localStorage.setItem('darkMode', 'enabled');
        } else {
            modeToggle.innerHTML = moonIcon;
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}