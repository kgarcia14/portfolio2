'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });


  // $enable-smooth-scroll	true (default) or false	Applies scroll-behavior: smooth globally, except for users asking for reduced motion through prefers-reduced-motion media query