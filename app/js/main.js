import {header} from './header.js';
import {footer} from './footer.js';

const swiper = document.querySelector('.home-cases__slider');
if (swiper) {
  new Swiper('.home-cases__slider', {
    navigation: {
      prevEl: '.home-cases__nav-btn--prev',
      nextEl: '.home-cases__nav-btn--next',
    },
    breakpoints: {
      1200: {
        spaceBetween: 72,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 52,
        slidesPerView: 2,
      },
      610: {
        spaceBetween: 22,
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      }
    }
  })
}

header();
footer();