// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// WhatsApp functionality
function openWhatsApp(message = "") {
  const phoneNumber = "393200522632";
  const defaultMessage =
    message || "Ciao! Vorrei informazioni sui vostri servizi di toelettatura mobile.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  window.open(whatsappUrl, "_blank");
}

// Add click handlers for WhatsApp buttons
document.addEventListener("DOMContentLoaded", () => {
  const whatsappButtons = document.querySelectorAll(".btn-whatsapp");
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Add a small delay to show the click effect
      setTimeout(() => {
        const message = button.getAttribute("data-message") || "";
        openWhatsApp(message);
      }, 100);
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(139, 95, 191, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(139, 95, 191, 0.1)";
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".service-card, .feature, .contact-item");
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for hero section (DISABLED)
// window.addEventListener("scroll", () => {});

// Auto-hide mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar") && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
