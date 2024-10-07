// Typing Animation
const typingElement = document.getElementById('typing');
const typingText = "Python Full Stack Developer";
let typingIndex = 0;
let typingSpeed = 150; // milliseconds

function type() {
    if (typingIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(type, typingSpeed);
    } else {
        // Optionally, you can add a blinking cursor or loop the typing
    }
}

document.addEventListener('DOMContentLoaded', type);

// Scroll Animations
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Skills Progress Animation
window.addEventListener('load', () => {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 500);
    });
});
// Get the button
const topBtn = document.getElementById("topBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() { toggleTopButton() };

function toggleTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
topBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});
