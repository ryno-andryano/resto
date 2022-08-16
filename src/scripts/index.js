import 'regenerator-runtime';
import 'jquery';
import 'material-icons/iconfont/filled.css';
import '../styles/main.scss';
import '../styles/placeholder.scss';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: $('.header__menu-button')[0],
  menuIcon: $('#menu-icon')[0],
  closeIcon: $('#close-icon')[0],
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
