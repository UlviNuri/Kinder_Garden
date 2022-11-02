const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("click", (e) => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
// const content = document.getElementsByTagName("body")[0];
// const darkmode = document.getElementById("dark_change");
// if (darkmode) {
//   darkmode.addEventListener("click", () => {
//     console.log(darkmode);
//     darkmode.classList.toggle("active");
//     content.classList.toggle("night");
//   });
// }
window.addEventListener("scroll", () => {
  var header = document.querySelector("nav");
  if (window.scrollY >= 250) {
    header.classList.add("stiky");
  } else {
    header.classList.remove("stiky");
  }
});

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

// const toastBtn = document.getElementById("js_tag");
// toastBtn.addEventListener("click", () => {
//   Toastify({
//     text: "Sorgunuz Ugurla Qebul Olundu!!!",
//     duration: 3000,
//     destination: "",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },
//     onClick: function () {}, // Callback after click
//   }).showToast();
// });

AOS.init({
  delay: 1000, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease",
});
