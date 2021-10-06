'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });

gsap.registerPlugin(ScrollTrigger);

gsap.from('.web-dev', {
  scrollTrigger: {
    trigger: '.web-dev',
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  scrub: true,
})
gsap.from('.res-des', {
  scrollTrigger: {
    trigger: '.res-des',
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
})
gsap.from('.customer-service', {
  scrollTrigger: {
    trigger: '.customer-service',
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
})

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.skills-container',
//     scrub: true,
//   }
// });

// tl.from('.web-dev', {y: 100, opacity: 0, duration: 1.5})
//   .from('.res-des', {y: 100, opacity: 0, duration: 1.5}, "-=1.5")
//   .from('.customer-service', {y: 100, opacity: 0, duration: 1.5}, "-=1.5")