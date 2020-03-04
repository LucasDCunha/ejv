import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mais que um time...", "Uma Família!"],
    typeSpeed: 100,
    loop: true,
    startDelay: 0,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 700,
  });
}

export { loadDynamicBannerText };
