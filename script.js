// Scroll Reveal Animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Typewriter Effect (Only runs if the element exists on the page)
const typewriterElement = document.getElementById("typewriter");
if (typewriterElement) {
    const words = ["Intelligent Automations.", "Agentic AI.", "Web3 Solutions.", "Vibe Coding."];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) charIndex--; else charIndex++;
        
        typewriterElement.textContent = currentWord.substring(0, charIndex);
        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    setTimeout(type, 1000);
}