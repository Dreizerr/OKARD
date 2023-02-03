const carsSlider = new Swiper(".cars__slider", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    clickable: true,
    el: ".cars__pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1150: {
      slidesPerView: 2.7,
    },

    1441: {
      slidesPerView: 3,
    },
  },
});

const membershipSlider = new Swiper(".membership__slider", {
  // simulateTouch: false,
  grabCursor: true,

  spaceBetween: 50,

  pagination: {
    clickable: true,
    el: ".membership__pagination",
  },

  loop: true,

  breakpoints: {
    400: {
      slidesPerView: 1,
      autoHeight: true,
    },

    768: {
      slidesPerView: 2,
      autoHeight: false,
    },

    1150: {
      loop: false,
      slidesPerView: 3,
    },
  },
});



const stampsSlider = new Swiper(".stamps__slider", {
  slidesPerGroup: 7,
  loop: true,
  freeMode: true,
  speed: 10000,
  spaceBetween: 30,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    200: {
      slidesPerView: 3,
    },

    700: {
      slidesPerView: 4,
    },

    1000: {
      simulateTouch: false,

      slidesPerView: 7,
    },
  },
});

// ------------------------------------ spollers

let spollers = [...document.querySelectorAll(".spoller")];

spollers.forEach((spoller) => {
  spoller.addEventListener("click", () => {
    spoller.classList.toggle("active");
  });
});
