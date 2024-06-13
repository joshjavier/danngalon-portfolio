/* eslint-disable import/no-unresolved */
/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import Swiper from 'swiper/bundle';
import animateOnScroll from './_elements/animate-on-scroll.js';
import ScrollSentinel from './_elements/scroll-sentinel.js';
import SmallDetails from './_elements/small-details.js';
import MediaReel from './_elements/media-reel.js';

const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  // grabCursor: true,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 40,
});
