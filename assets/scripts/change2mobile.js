const nav = document.getElementById('myNav');
const div = document.getElementById('myDiv');
const left = document.getElementById('leftNav');
const right = document.getElementById('rightNav');

        function checkScreenSize() {
            if (window.innerWidth <= 650) { // Adjust the screen width threshold as needed
                nav.classList.add('hidden-nav');
                div.classList.replace('content', 'hidden-div');
                left.classList.replace('sidebar-top', 'left-div')
                right.classList.replace('sidebar-links', 'right-div')
            } else {
                nav.classList.remove('hidden-nav');
                div.classList.replace('hidden-div', 'content');
                left.classList.replace('left-div', 'sidebar-top')
                right.classList.replace('right-div', 'sidebar-links')
            }
        }

        // Check screen size when the page loads and on resize
        window.addEventListener('load', checkScreenSize);
        window.addEventListener('resize', checkScreenSize);

