document.addEventListener('DOMContentLoaded', () => {
  // ===== POP-UP =====
  const popup = document.getElementById('popup');
  setTimeout(() => popup.classList.add('show'), 500);

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('ul li');

  function animateMenuItems(show) {
    mobileMenuLinks.forEach((link, i) => {
      link.style.transition = `all 0.3s ease ${i * 0.1}s`;
      link.style.opacity = show ? '1' : '0';
      link.style.transform = show ? 'translateX(0)' : 'translateX(-20px)';
    });
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('show');
    animateMenuItems(mobileMenu.classList.contains('show'));
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('show');
      animateMenuItems(false);
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
  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseDelay = 800;

  function type() {
    if (!codeTagline) return; // Safety check

    const text = phrases[current];
    if (typing) {
      codeTagline.innerHTML = `&lt;Code&gt; I Create <span>${text.substring(0, index)}</span> &lt;/Code&gt;`;
      index++;
      if (index > text.length) {
        typing = false;
        setTimeout(type, pauseDelay);
      } else {
        setTimeout(type, typingDelay);
      }
    } else {
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
});
