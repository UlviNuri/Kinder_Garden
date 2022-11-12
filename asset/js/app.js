"use strict";
// preloader
var loader = document.getElementById("loader");
if (loader) {
  window.addEventListener("load", function () {
    loader.style.display = "none";
    this.setTimeout(function () {
      // $('#load').delay(150).fadeout("slow");
    }, 30000);
  });
}

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

// scrool

try{
  window.addEventListener("scroll", () => {
    var header = document.querySelector("nav");
    if (window.scrollY >= 250) {
      header.classList.add("stiky");
    } else {
      header.classList.remove("stiky");
    }
  });
}catch (error){
  console.log("Javascript version updated...");
}


// sviper

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
} catch (error) {
  console.log("Javascript version updated...");
}

// toast
const toastBtn = document.getElementById("js_tag");
if (toastBtn) {
  toastBtn.addEventListener("click", () => {
    Toastify({
      text: "Sorgunuz Ugurla Qəbul Olundu!!!",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, 
    }).showToast();
  });
}

// scrool Top
try{
  const CalcScrollValue = () => {
    let scrollProgress = document.getElementById("proqres");
    let progressValue = document.getElementById("progress_item");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    scrollProgress.style.background = ` gold
    `;
  };
  window.onscroll = CalcScrollValue;
window.onload = CalcScrollValue;

}catch(error){
  console.log("Javascript version updated...");
}

// aos
try {
  AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease",
  });
} catch (err) {
  console.log("Javascript version updated...");
}

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
toggle.addEventListener("click", function () {
 
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundImage = "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    var element = "p,h2,span,h1,h3,h6,a,h4,h5";
    const p_tag = body.querySelectorAll(element);
  if(p_tag){
    for (let index = 0; index < p_tag.length; index++) {
      p_tag[index].classList.add("dark_active");
    }
  }

    body.style.transition = "2s";
  }
});



const payment =document.getElementById("odenis")
if(payment){
  payment.addEventListener("click",()=>{
    alert("Ödənişiniz Uğurla Nəticələndi!!! ")
  })
}