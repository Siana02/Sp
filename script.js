// ===== POP-UP =====
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  // Show popup after a slight delay
  setTimeout(() => popup.classList.add('show'), 500);
});

// Optional: Close popup on click (uncomment if you want a close button)
// const popupClose = document.querySelector('.popup .close');
// popupClose.addEventListener('click', () => popup.classList.remove('show'));

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu on hamburger click
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove('show');
  }
});

// ===== TYPING ANIMATION =====
const codeTagline = document.querySelector('.code-tagline code');
const phrases = [
  'Websites',
  'Mobile Applications',
  'UI/UX Systems',
  'C++ CLI Apps',
  'AUTOSAR Modules'
];

let current = 0;
let index = 0;
let typing = true;
const typingDelay = 100; // Speed of typing
const deletingDelay = 50; // Speed of deleting
const pauseDelay = 800; // Pause at end of typing

function type() {
  const text = phrases[current];
  if (typing) {
    // Add characters
    codeTagline.innerHTML = `&lt;Code&gt; I Create <span>${text.substring(0, index)}</span> &lt;/Code&gt;`;
    index++;
    if (index > text.length) {
      typing = false;
      setTimeout(type, pauseDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    // Delete characters
    codeTagline.innerHTML = `&lt;Code&gt; I Create <span>${text.substring(0, index)}</span> &lt;/Code&gt;`;
    index--;
    if (index < 0) {
      typing = true;
      current = (current + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, deletingDelay);
    }
  }
}

// Start typing effect
type();
