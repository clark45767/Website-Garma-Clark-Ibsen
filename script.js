// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Random Fun Facts
const facts = [
    "Sea lions can swim up to 25 miles per hour!",
    "They have whiskers that help them detect vibrations in the water.",
    "A group of sea lions is called a colony or a raft.",
    "Male sea lions can weigh up to 800 pounds (360 kg).",
    "Sea lions can hold their breath for nearly 10 minutes underwater.",
    "They are very vocal and communicate with loud barks and roars.",
    "California Sea Lions are the most common species seen in zoos and shows."
];

const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('random-fact');

factButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = "★ " + facts[randomIndex];
});

// Back to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});