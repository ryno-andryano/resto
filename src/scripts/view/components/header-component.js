class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <header class="header">
        <div class="header__inner">
          <h1 class="header__logo">
            <a href="/">
              <img src="./images/logo-long.png" alt="RESTO" />
            </a>
          </h1>

          <button class="header__menu-button">
            <i
              id="menu-icon"
              class="material-icons"
              title="Open Menu"
              aria-label="Open Menu"
              >menu</i
            >
            <i
              id="close-icon"
              class="material-icons hidden"
              title="Close Menu"
              aria-label="Close Menu"
              >close</i
            >
          </button>

          <nav class="header__nav">
            <a id="nav-home" href="#/home">Home</a>
            <a id="nav-favorite" href="#/favorite">Favorite</a>
            <a id="nav-about" href="https://github.com/ryno-andryano" target="_blank"
              >About Us</a
            >
          </nav>
        </div>
      </header>`;
  }
}

customElements.define('header-component', HeaderComponent);
