import './components/header-component';
import './components/hero-component';
import './components/footer-component';
import MenuInitiator from '../utils/menu-initiator';

class App {
  constructor({button, menuIcon, closeIcon, nav, content}) {
    this._button = button;
    this._menuIcon = menuIcon;
    this._closeIcon = closeIcon;
    this._nav = nav;
    this._content = content;
    console.log(this._button);

    this._initialAppShell();
  }

  _initialAppShell() {
    console.log(this._button);
    MenuInitiator.init({
      button: this._button,
      menuIcon: this._menuIcon,
      closeIcon: this._closeIcon,
      nav: this._nav,
    });
  }
}

export default App;
