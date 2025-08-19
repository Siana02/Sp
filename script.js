// ===== POP-UP =====
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  // Show popup after a slight delay
  setTimeout(() => popup.classList.add('show'), 500);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu on hamburger click
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent document click from immediately closing menu
  mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove('show');
  }
});

// Slide-in animation for mobile menu items
const mobileMenuLinks = mobileMenu.querySelectorAll('ul li');
function animateMenuItems(show) {
  mobileMenuLinks.forEach((link, i) => {
    link.style.transition = `all 0.3s ease ${i * 0.1}s`;
    link.style.opacity = show ? '1' : '0';
    link.style.transform = show ? 'translateX(0)' : 'translateX(-20px)';
  });
}

// Observe mobile menu toggle to animate links
const observer = new MutationObserver(() => {
  if (mobileMenu.classList.contains('show')) {
    animateMenuItems(true);
  } else {
    animateMenuItems(false);
  }
});

observer.observe(mobileMenu, { attributes: true, attributeFilter: ['class'] });

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
