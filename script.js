const images = ["./images/landing_third.jpg", "./images/landing_second.jpg"];

let currentIndex = 0;

function changeImage() {
  heroImage.style.opacity = "1";
  setTimeout(function () {
    heroImage.src = images[currentIndex];
    heroImage.style.opacity = ".85";
    currentIndex = (currentIndex + 1) % images.length;
  }, 2000);
}

setInterval(changeImage, 4000); // Change image every 4 seconds

function toggleClass() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("nav-show");
}
