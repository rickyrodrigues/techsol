$(document).ready(function() {

        // --- Portfolio Filtering and Layout with Isotope ---

        // Get the container where your portfolio items live
        let $container = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-wrapper', // What elements are the items?
            layoutMode: 'fitRows' // Start with the standard grid layout
        });

        // When a filter button is clicked...
        $('.filter-btn').on('click', function() {
            // Update which filter button looks active
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');

            // Get the category we want to show (like "web", "mobile", etc.)
            let filterValue = $(this).attr('data-filter');

            // Tell Isotope which items to show based on the data-category attribute
            let filterSelector;
            if (filterValue === 'all') {
                filterSelector = '*'; // '*' means show everything
            } else {
                // Find items where data-category matches the filter value
                filterSelector = '[data-category="' + filterValue + '"]';
            }

            // Apply the filter magic
            $container.isotope({ filter: filterSelector });

            // Give AOS a little nudge after filtering, just in case
            setTimeout(function(){
                AOS.refresh();
            }, 500);
        });

        // When a layout button is clicked...
        $('.layout-btn').on('click', function() {
            // Update which layout button looks active
            $('.layout-btn').removeClass('active');
            $(this).addClass('active');

            // Get the layout style we want (like "grid", "masonry", etc.)
            let layoutMode = $(this).attr('data-layout');

            // Clean up previous layout styles on the container
            $('.portfolio-container').removeClass('grid-layout masonry-layout full-width-layout');

            // Apply the new layout and class
            if (layoutMode === 'grid') {
                $container.isotope({ layoutMode: 'fitRows' });
                $('.portfolio-container').addClass('grid-layout');
            } else if (layoutMode === 'masonry') {
                $container.isotope({ layoutMode: 'masonry' });
                $('.portfolio-container').addClass('masonry-layout');
            } else if (layoutMode === 'full-width') {
                $container.isotope({ layoutMode: 'vertical' }); // A simple stacking layout
                $('.portfolio-container').addClass('full-width-layout');
            }

            // Make Isotope redraw the layout
            $container.isotope('layout');

            // Nudge AOS again after changing layout
            setTimeout(function(){
                AOS.refresh();
            }, 500);
        });

        // Lightbox setup (for clicking on images)
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true
        });

        // Load More Functionality (simple example - you might load from an API in reality)
        let itemsPerLoad = 3; // How many to show each time
        let itemsShown = 9; // How many are visible initially

        // On start, hide any items beyond the first 9 (assuming they exist in HTML but are hidden)
        const $portfolioWrappers = $('.portfolio-wrapper');
        $portfolioWrappers.slice(itemsShown).addClass('d-none');

        // Reload items in Isotope and make sure they are in the original order
        $container.isotope('reloadItems').isotope({ sortBy: 'original-order' });

        // Check if the load more button should be hidden initially
        if ($('.portfolio-wrapper.d-none').length === 0) {
            $('#loadMore').hide();
        }


        // When the "Load More" button is clicked...
        $('#loadMore').on('click', function() {
            // Find the next batch of hidden items
            let $hiddenItems = $('.portfolio-wrapper.d-none');
            let $nextItems = $hiddenItems.slice(0, itemsPerLoad);

            // Make them visible
            $nextItems.removeClass('d-none');

            // Add the new items to Isotope and arrange them
            $container.isotope('insert', $nextItems);

            // Update the count
            itemsShown += $nextItems.length;

            // Hide the button if there are no more items left
            if ($('.portfolio-wrapper.d-none').length === 0) {
                $('#loadMore').fadeOut();
            }

            // Nudge AOS after loading more items
            setTimeout(function(){
                AOS.refresh();
            }, 500);
        });


    }); // End of document ready

    // Just making sure AOS knows about everything once the whole page (including images) is loaded
    $(window).on('load', function() {
        setTimeout(function(){
            AOS.refresh();
        }, 500);
    });