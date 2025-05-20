// Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show loading state
            submitText.textContent = 'Sending...';
            submitSpinner.classList.remove('d-none');

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Hide loading state
                submitText.textContent = 'Send Message';
                submitSpinner.classList.add('d-none');

                // Show success message (in a real scenario, check for successful response)
                formSuccess.style.display = 'block';
                formError.style.display = 'none';

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get the email input
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            // In a real scenario, you would send this to your API
            console.log('Newsletter subscription: ' + email);

            // Reset form and show a simple alert 
            newsletterForm.reset();
            alert('Thank you for subscribing to our newsletter!');
        });
    }