document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let intervalTime = 3000;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval);
      showSlide(index);
      startSlideshow();
    });
  });

  showSlide(currentIndex);
  startSlideshow();
});
