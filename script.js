// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year for copyright
document.addEventListener('DOMContentLoaded', (event) => {
    const year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${year} Shreya Asoba. All rights reserved.`;
});

// Skills animation
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillItems = document.querySelectorAll('.skill-category li');

    if (isInViewport(skillsSection)) {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
});

// Helper function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Project filter functionality (if needed)
// You can add code here to filter projects based on categories

// Form submission for contact (if you decide to add a contact form)
// You can add code here to handle form submission via AJAX
