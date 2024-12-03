let currentSlide = 0;
let interval;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.style.display = "none";  
    if (i === index) {
      slide.style.display = "block";  
    }
  });
}

function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  slides.forEach(slide => slide.style.display = "block");

  showSlide(currentSlide);

  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
}