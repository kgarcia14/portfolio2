'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });


gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-animate', {
  scrollTrigger: {
    trigger: '.hero-animate',
  },
  y: 225,
  opacity: 0,
  duration: .6,
  stagger: 0.2,
})

gsap.from('.web-dev', {
  scrollTrigger: {
    trigger: '.web-dev',
  },
  y: 200,
  opacity: 0,
  duration: .8,
})
gsap.from('.res-des', {
  scrollTrigger: {
    trigger: '.res-des',
  },
  y: 200,
  opacity: 0,
  duration: .8,
})
gsap.from('.customer-service', {
  scrollTrigger: {
    trigger: '.customer-service',
  },
  y: 200,
  opacity: 0,
  duration: .8,
})

gsap.from('.icon-group1-animate', {
  scrollTrigger: {
    trigger: '.icon-group1-animate',
  },
  y: 150,
  opacity: 0,
  duration: .8,
})
gsap.from('.icon-group2-animate', {
  scrollTrigger: {
    trigger: '.icon-group2-animate',
  },
  y: 150,
  opacity: 0,
  duration: .8,
})

gsap.from('.project1-content-animate', {
  scrollTrigger: {
    trigger: '.project1-content-animate',
    start: 'center bottom',
  },
  x: 500,
  opacity: 0,
  duration: .9,
})
gsap.from('.project1-thumb-animate', {
  scrollTrigger: {
    trigger: '.project1-thumb-animate',
    start: 'center bottom',
  },
  x: 300,
  opacity: 0,
  duration: .9,
})
gsap.from('.project2-content-animate', {
  scrollTrigger: {
    trigger: '.project2-content-animate',
    start: 'center bottom',
  },
  x: 500,
  opacity: 0,
  duration: .9,
})
gsap.from('.project2-thumb-animate', {
  scrollTrigger: {
    trigger: '.project2-thumb-animate',
    start: 'center bottom',
  },
  x: 300,
  opacity: 0,
  duration: .9,
})
gsap.from('.project3-content-animate', {
  scrollTrigger: {
    trigger: '.project3-content-animate',
    start: 'center bottom',
  },
  x: 500,
  opacity: 0,
  duration: .9,
})
gsap.from('.project3-thumb-animate', {
  scrollTrigger: {
    trigger: '.project3-thumb-animate',
    start: 'center bottom',
  },
  x: 300,
  opacity: 0,
  duration: .9,
})
gsap.from('.project4-content-animate', {
  scrollTrigger: {
    trigger: '.project4-content-animate',
    start: 'center bottom',
  },
  x: 500,
  opacity: 0,
  duration: .9,
})
gsap.from('.project4-thumb-animate', {
  scrollTrigger: {
    trigger: '.project4-thumb-animate',
    start: 'center bottom',
  },
  x: 300,
  opacity: 0,
  duration: .9,
})
gsap.from('.project5-content-animate', {
  scrollTrigger: {
    trigger: '.project5-content-animate',
    start: 'center bottom',
  },
  x: 500,
  opacity: 0,
  duration: .9,
})
gsap.from('.project5-thumb-animate', {
  scrollTrigger: {
    trigger: '.project5-thumb-animate',
    start: 'center bottom',
  },
  x: 300,
  opacity: 0,
  duration: .9,
})