import 'regenerator-runtime';
import 'jquery';
import '../styles/main.scss';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: $('.header__menu-button')[0],
  menuIcon: $('#menu-button')[0],
  closeIcon: $('#close-button')[0],
  nav: $('.header__nav')[0],
  content: $('#root')[0],
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
