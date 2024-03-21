// Function to fade in elements when scrolled into view
function fadeInElements() {
    var elements = document.querySelectorAll('header, section, footer');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('fadeIn');
        } else {
            element.classList.remove('fadeIn');
        }
    });
}

// Call fadeInElements function when scrolling
window.addEventListener('scroll', fadeInElements);
window.addEventListener('load', fadeInElements);
