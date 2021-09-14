'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });