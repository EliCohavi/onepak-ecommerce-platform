// Scroll to Contact Form on Hero Button Click
document.getElementById('getStartedBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Simple form submission handler (demo)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    contactForm.reset();
});