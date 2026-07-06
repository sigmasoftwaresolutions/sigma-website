// ==============================
// SIGMA CONSULTANTS MAIN JS
// ==============================

// Sticky Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

// Dropdown Handling (Mobile)
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
  drop.addEventListener("click", e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const submenu = drop.querySelector(".submenu");
      submenu.classList.toggle("show");
    }
  });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll(
  ".service-card, .product-card, .about-grid img, .page-header, .blog-post"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) el.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Page Load Fade-In
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");

  // Adjust top padding based on navbar height
  const navbar = document.querySelector(".navbar");
  const navHeight = navbar.offsetHeight;
  document.body.style.paddingTop = `${navHeight}px`;
});