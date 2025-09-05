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

// ===== Orb Effect =====
const heroImage = document.querySelector(".hero-image");

// Create orb element dynamically
const orbElement = document.createElement("div");
orbElement.classList.add("orb");
heroImage.appendChild(orbElement);

// React to mouse movement (orb shifts slightly)
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 20;
  let y = (e.clientY / window.innerHeight - 0.5) * 20;
  orbElement.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== TYPING ANIMATION =====
const codeTagline = document.querySelector('.code-tagline .dynamic');
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

// ===== COUNTER ANIMATION =====
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "+";
    const duration = 2000; // total time (ms)
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);

      // Ease-out (cubic)
      progress = 1 - Math.pow(1 - progress, 3);

      const value = Math.floor(progress * target);
      counter.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Trigger only when the belt section is visible
  const beltSection = document.querySelector(".belt");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCounter(counter));
        observer.unobserve(beltSection); // run only once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(beltSection);
});
