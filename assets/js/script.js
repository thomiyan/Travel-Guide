// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  });
}

// Accordion Functionality for Tips Page
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');

    const content = header.nextElementSibling;
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});


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
}
// --- Destination Modal ---
let slideInterval;

function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.display = "flex";

  // Start slideshow
  const slides = modal.querySelectorAll(".modal-images img");
  let index = 0;
  slides.forEach((img, i) => img.classList.toggle("active", i === 0));

  slideInterval = setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

  // Close if clicking outside modal card
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      closeModal(id);
    }
  });
}
function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.display = "none";

  // Stop slideshow
  clearInterval(slideInterval);
}



// Leaflet Map (Destinations page)
const mapEl = document.getElementById("map");
if (mapEl) {
  const map = L.map("map").setView([20, 0], 2); // World view

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const destinations = [
  { name: "Sibebe Rock", coords: [-26.3906, 31.2097], desc: "Iconic granite mountain in Eswatini." },
  { name: "Mantenga Cultural Village", coords: [-26.4972, 31.1833], desc: "Experience Eswatini culture and traditions." },
  { name: "Mlilwane Wildlife Sanctuary", coords: [-26.4622, 31.1967], desc: "Peaceful nature reserve with wildlife and trails." },
  { name: "Malolotja Nature Reserve", coords: [-26.1550, 31.1800], desc: "Scenic reserve with hiking and waterfalls." },
  { name: "Mkhaya Game Reserve", coords: [-26.6500, 31.8000], desc: "Home to rhinos and other wildlife." },
  { name: "Hlane Royal National Park", coords: [-26.2500, 31.7500], desc: "Largest park in Eswatini, lions and elephants." },
  { name: "Ezulwini Valley", coords: [-26.4000, 31.1833], desc: "Tourism hub with hotels, crafts, and nature." }
  ];

  destinations.forEach(dest => {
    L.marker(dest.coords)
      .addTo(map)
      .bindPopup(`<b>${dest.name}</b><br>${dest.desc}`);
  });
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

// slide-in-left on scroll
// --- Hero text: slide in left on page load ---
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text.slide-in-left');
  if (heroText) {
    setTimeout(() => heroText.classList.add('show'), 300);
  }
});


// --- Hero animations on page load ---
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text.fade-in');
  const heroImg = document.querySelector('.hero-img');

  if (heroText) {
    setTimeout(() => heroText.classList.add('show'), 500);
  }

  if (heroImg) {
    setTimeout(() => heroImg.classList.add('show'), 100);
  }
});





// =================== Carousel Auto Slide ===================
const carousel = document.querySelector('.carousel-container');
let scrollAmount = 0;

setInterval(() => {
  if (carousel) {
    scrollAmount += 320; // card width + gap
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0; // reset
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}, 4000);

// =================== Handle Reviews with localStorage ===================
const reviewForm = document.getElementById('reviewForm');
const reviewCarousel = document.getElementById('reviewCarousel');

// Load saved reviews on page load
function loadReviews() {
  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  savedReviews.forEach(r => {
    createReviewCard(r.name, r.location, r.message, r.rating, false);
  });
}

// Create review card (helper function)
function createReviewCard(name, location, message, rating, highlight = true) {
  
  // Convert numeric rating → stars
  const stars = '⭐'.repeat(parseInt(rating));

  const newCard = document.createElement('div');
  newCard.classList.add('review-card');
  if (highlight) newCard.classList.add('new'); // highlight only new ones
  newCard.innerHTML = `
    <p>"${message}"</p>
    <h4>${location}</h4>
    <div class="review-footer">
      <span>- ${name}</span>
      <div class="stars">${stars}</div>
    </div>
  `;

  // Add to the start of the carousel
  reviewCarousel.prepend(newCard);
}

// Handle review submission
if (reviewForm && reviewCarousel) {
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value;

    alert(`Thank you ${name}! Your review for ${location} has been submitted with ${rating} stars.`);

    // Create and display new card
    createReviewCard(name, location, message, rating, true);

    // Save to localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.unshift({ name, location, message, rating });
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Reset form
    reviewForm.reset();

    // Scroll to show new card
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  });
}

// Load reviews when page loads
window.addEventListener('DOMContentLoaded', loadReviews);







// =================== Clear All Reviews (Admin) ===================
const clearBtn = document.getElementById('clearReviews');
const ADMIN_PASS = "opendev2025"; // change this password to your own secret

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    const inputPass = prompt("🔑 Enter admin password to clear reviews:");
    if (inputPass === ADMIN_PASS) {
      if (confirm("⚠️ Are you sure you want to clear ALL reviews?")) {
        localStorage.removeItem('reviews');
        reviewCarousel.innerHTML = ""; // remove all cards
        alert("✅ All reviews cleared successfully!");
      }
    } else if (inputPass !== null) {
      alert("❌ Incorrect password. Access denied.");
    }
  });
}

// Reveal admin button with Ctrl+Shift+C
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
    clearBtn.classList.toggle('hidden');
  }
});
