const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// const content = document.getElementsByTagName("body")[0];
// const darkmode = document.getElementById("dark_change");
// if(darkmode){
//   darkmode.addEventListener("click", () => {
//     darkmode.classList.toggle("active");
//     content.classList.toggle("night");
//   });
// }
try {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      1400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
} catch (eror) {
  console.log("Javascript version updated...");
}
