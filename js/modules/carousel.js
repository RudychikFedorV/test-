export function initializeCarousel() {
  let currentSlide = 0;
  let isTransitioning = false;
  const slides = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  const totalSlides = slides.length - 1;
  const carousel = document.querySelector(".carousel");

  function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (index >= totalSlides) {
      currentSlide = 0;
      moveSlide(index, true);
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out";
          isTransitioning = false;
        }, 20);
      }, 500);
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
      moveSlide(index, true);
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out";
          isTransitioning = false;
        }, 20);
      }, 500);
    } else {
      currentSlide = index;
      moveSlide(index, false);
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }

    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[currentSlide].classList.add("active");
  }

  function moveSlide(index, isCloning) {
    if (isCloning) {
      carousel.style.transform = `translateX(${-index * 100}%)`;
    } else {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
    }
  }

  function moveToSlide(index) {
    showSlide(index);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
    // setInterval(nextSlide, 6000);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    });

    let startX;
    let isDragging = false;

    carousel.addEventListener("mousedown", (event) => {
      startX = event.pageX;
      isDragging = true;
      carousel.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      carousel.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (event) => {
      if (!isDragging) return;
      const diff = event.pageX - startX;
      if (diff > 50) {
        prevSlide();
        isDragging = false;
      } else if (diff < -50) {
        nextSlide();
        isDragging = false;
      }
    });

    carousel.style.cursor = "grab";
  });
}
