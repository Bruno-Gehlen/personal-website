const nav = document.getElementById('myNav');
const div = document.getElementById('myDiv');

        function checkScreenSize() {
            if (window.innerWidth <= 650) { // Adjust the screen width threshold as needed
                nav.classList.add('hidden-nav');
                div.classList.replace('content', 'hidden-div');
            } else {
                nav.classList.remove('hidden-nav');
                div.classList.replace('hidden-div', 'content');
            }
        }

        // Check screen size when the page loads and on resize
        window.addEventListener('load', checkScreenSize);
        window.addEventListener('resize', checkScreenSize);

