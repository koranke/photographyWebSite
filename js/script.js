// Create a function that changes the opacity of the slides
let currentSlide = 0;

function changeSlide() {
  let slides = document.getElementsByClassName("slide");

  slides[currentSlide].style.opacity = "1";
  if (currentSlide > 0) {
    slides[currentSlide - 1].style.opacity = "0";
  } else {
    slides[slides.length - 1].style.opacity = "0";
  }

  if (currentSlide < slides.length - 1) {
    currentSlide += 1;
  } else {
    currentSlide = 0;
  }
  setTimeout(changeSlide, 8000);
}
  
// Call this function when the window loads
window.onload = changeSlide;
 