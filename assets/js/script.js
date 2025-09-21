// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  });
}

// Accordion
const accordions = document.querySelectorAll(".accordion-btn");
accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});

// Review Form
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your review!");
    reviewForm.reset();
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
  });
}

// Search Filter on Destinations
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".dest-card");
    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });
  });



// Leaflet Map (Destinations page)
const mapEl = document.getElementById("map");
if (mapEl) {
  const map = L.map("map").setView([20, 0], 2); // World view

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const destinations = [
    { name: "Paris", coords: [48.8566, 2.3522], desc: "City of lights and romance." },
    { name: "Tokyo", coords: [35.6895, 139.6917], desc: "Tradition meets modern." },
    { name: "Cape Town", coords: [-33.9249, 18.4241], desc: "Nature and culture await." }
  ];

  destinations.forEach(dest => {
    L.marker(dest.coords)
      .addTo(map)
      .bindPopup(`<b>${dest.name}</b><br>${dest.desc}`);
  });
}

// Carousel (Reviews page)
const carousel = document.getElementById("carousel");
if (carousel) {
  const reviews = carousel.querySelectorAll(".review");
  let currentIndex = 0;

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showSlide(currentIndex);
  });

  document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showSlide(currentIndex);
  });

  // Auto-slide every 5s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showSlide(currentIndex);
  }, 5000);
}
}


// Theme Switcher
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}


// Scroll animations
const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
