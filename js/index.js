// Hero Image Slider
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Support for RTL languages
        function setRTL(isRTL) {
            document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
            document.documentElement.lang = isRTL ? 'ar' : 'en'; // Example: Arabic for RTL
        }

        // To enable RTL, uncomment the line below:
        // setRTL(true);