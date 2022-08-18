import './components/header-component';
import './components/skip-component';
import './components/hero-component';
import './components/footer-component';
import './components/explore-component';
import './components/detail-component';
import './components/favorite-component';
import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({button, menuIcon, closeIcon, nav, content}) {
    this._button = button;
    this._menuIcon = menuIcon;
    this._closeIcon = closeIcon;
    this._nav = nav;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    MenuInitiator.init({
      button: this._button,
      menuIcon: this._menuIcon,
      closeIcon: this._closeIcon,
      nav: this._nav,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    document.querySelector('#skip-button').addEventListener('click', () => {
      document.querySelector('#main').focus();
    });
    await page.afterRender();
  }
}

export default App;
