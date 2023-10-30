const audio = document.getElementById("audio");
const button = document.querySelectorAll("button");
const section = document.querySelectorAll("section");

// * AUDIO CONTROL
audio.addEventListener("load", function () {
  audio.play();
  audio.volume = 0.25;
});

// * BUTTON ANIMATION
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    button[i].style.transform = "scale(98.5%)";
    function resetButton() {
      button[i].style.transform = "scale(100%)";
    }
    setTimeout(resetButton, 250);
  });
}

// * SWIPPER JS
const swiper = new Swiper(".swiper", {
  speed: 500,
  loop: true,
  spaceBetween: 120,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// * OBSERVER
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("appear");
  });
  console.log(entries);
});
observer.observe(section[1]);
