// ===== POP-UP =====
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  setTimeout(() => popup.classList.add('show'), 500);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = mobileMenu.querySelectorAll('ul li');

function openMobileMenu() {
  mobileMenu.classList.add('show');
  mobileMenuLinks.forEach((link, i) => {
    link.style.transition = `all 0.3s ease ${i * 0.1}s`;
    link.style.opacity = '1';
    link.style.transform = 'translateX(0)';
  });
}

function closeMobileMenu() {
  mobileMenuLinks.forEach((link, i) => {
    link.style.transition = `all 0.3s ease`;
    link.style.opacity = '0';
    link.style.transform = 'translateX(-20px)';
  });
  setTimeout(() => mobileMenu.classList.remove('show'), 300);
}

// Toggle mobile menu
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (mobileMenu.classList.contains('show')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close menu if clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    if (mobileMenu.classList.contains('show')) closeMobileMenu();
  }
});

// ===== TYPING ANIMATION =====
const codeTagline = document.querySelector('.code-tagline span');
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
const typingDelay = 100;
const deletingDelay = 50;
const pauseDelay = 800;

function type() {
  const text = phrases[current];
  if (typing) {
    codeTagline.textContent = text.substring(0, index);
    index++;
    if (index > text.length) {
      typing = false;
      setTimeout(type, pauseDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    codeTagline.textContent = text.substring(0, index);
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

type();
