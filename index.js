'use strict';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  speedAsDuration: true,
  header: '[data-scroll-header]',
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    const navHome = document.querySelector('.nav-home');
    const navSkills = document.querySelector('.nav-skills');
    const navProjects = document.querySelector('.nav-projects');
    const navContact = document.querySelector('.nav-contact');
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

          navHome.addEventListener('click', () => {
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          })
          navSkills.addEventListener('click', () => {
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          })
          navProjects.addEventListener('click', () => {
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          })
          navContact.addEventListener('click', () => {
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          })
        });
      });
    }
  });
