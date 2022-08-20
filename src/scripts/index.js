import 'regenerator-runtime';
import 'material-icons/iconfont/filled.css';
import '../styles/main.scss';
import '../styles/placeholder.scss';
import './view/components/header-component';
import './view/components/skip-button';
import './view/components/hero-image';
import './view/components/footer-component';
import './view/components/restaurant-item-skeleton';
import './view/components/restaurant-item';
import './view/components/food-facts';
import './view/components/review-item-skeleton';
import './view/components/review-item';
import './view/components/detail-content-skeleton';
import './view/components/detail-content';
import './view/components/add-favorite-button';
import './view/components/remove-favorite-button';
import './view/components/action-menu';
import './view/components/add-review-form';
import './view/components/explore-component';
import './view/components/favorite-component';
import './view/components/detail-component';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
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
