let currentIndex = 0;

function slideShow() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      (index - currentIndex) * (100 / 7) + index * (10 / slide.clientWidth)
    }%)`;
  });

  currentIndex = (currentIndex + 1) % totalSlides;
}

setInterval(slideShow, 1000);
