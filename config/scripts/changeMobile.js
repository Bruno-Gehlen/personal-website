const body = document.getElementById('MyBody');
const nav = document.getElementById('myNav');
const div = document.getElementById('myDiv');
const left = document.getElementById('leftNav');
const right = document.getElementById('rightNav');
const card = document.querySelectorAll('.card');

function checkScreenSize() {
if (window.innerWidth <= 650) { 
    nav.classList.add('hidden-nav');
    div.classList.replace('content', 'hidden-div');
    left.classList.replace('sidebar-top', 'left-div')
    right.classList.replace('sidebar-links', 'right-div')
    body.classList.add('hidden-body')
    } 
else {
    nav.classList.remove('hidden-nav');
    div.classList.replace('hidden-div', 'content');
    left.classList.replace('left-div', 'sidebar-top')
    right.classList.replace('right-div', 'sidebar-links')
    body.classList.remove('hidden-body')
    }

card.forEach(function(card) {
    if (window.innerWidth <= 650) {
        card.classList.remove('card'); 
        card.classList.add('hidden-card');
    } 
    else {
        card.classList.remove('hidden-card');
        card.classList.add('card'); 
    }
});
}

// Check screen size when the page loads and on resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
