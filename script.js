// ===== POP-UP =====
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  setTimeout(() => popup.classList.add('show'), 500);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// ===== TYPING ANIMATION =====
const codeTagline = document.querySelector('.code-tagline code');
const phrases = [
  'UI/UX Systems',
  'C++ CLI Apps',
  'AUTOSAR Modules'
];
let current = 0;
let index = 0;
let typing = true;
let delay = 100;

function type() {
  let text = phrases[current];
  if (typing) {
    codeTagline.innerHTML = `&lt;Code&gt; I Build <span>${text.substring(0, index)}</span> &lt;/Code&gt;`;
    index++;
    if (index > text.length) {
      typing = false;
      setTimeout(type, 800);
    } else {
      setTimeout(type, delay);
    }
  } else {
    codeTagline.innerHTML = `&lt;Code&gt; I Build <span>${text.substring(0, index)}</span> &lt;/Code&gt;`;
    index--;
    if (index < 0) {
      typing = true;
      current = (current + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, delay / 2);
    }
  }
}

type();
