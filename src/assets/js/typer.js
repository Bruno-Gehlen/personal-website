import Typed from './typed.js/dist/typed.module.js';

var typed = new Typed('#typed-text', {
  strings: ["Particle Physics", "Mathematical Physics", "Front-end Dev."],
  typeSpeed: 20,
  backSpeed: 20,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});
