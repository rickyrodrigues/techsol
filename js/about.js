
 // This part requires jQuery, so you'll need to ensure jQuery is loaded before this done in html file
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.counterUp !== 'undefined') {
            $('.counter').counterUp({
                delay: 10,
                time: 1200
            });
        }
    });