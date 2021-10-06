'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });

  
AOS.init();