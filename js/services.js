// Department Filter
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline-primary');
                });

                this.classList.add('active');
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');

                // Filter team members
                document.querySelectorAll('.team-member').forEach(member => {
                    if (filterValue === 'all' || member.getAttribute('data-category') === filterValue) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                });
            });
        });