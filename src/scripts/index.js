import 'regenerator-runtime';
import 'material-icons/iconfont/filled.css';
import '../styles/main.scss';
import '../styles/placeholder.scss';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.header__menu-button'),
  menuIcon: document.querySelector('#menu-icon'),
  closeIcon: document.querySelector('#close-icon'),
  nav: document.querySelector('.header__nav'),
  content: document.querySelector('#root'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
