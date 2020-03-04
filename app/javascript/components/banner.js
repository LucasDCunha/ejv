import Typed from 'typed.js';
const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mais que um time...", "Uma família!"],
    typeSpeed: 70,
    loop: true
  });
}
export { loadDynamicBannerText };
