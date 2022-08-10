class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <div class="header__inner">
          <h1 class="header__logo">
            <a href="/">
              <img src="./images/logo-long.png" alt="Resto Logo" />
            </a>
          </h1>

          <button class="header__menu-button">
            <i
              id="menu-button"
              class="material-icons"
              title="Open Menu"
              aria-label="Open Menu"
              >menu</i
            >
            <i
              id="close-button"
              class="material-icons hidden"
              title="Close Menu"
              aria-label="Close Menu"
              >close</i
            >
          </button>

          <nav class="header__nav">
            <a href="#/home">Home</a>
            <a href="#/favorite">Favorite</a>
            <a href="https://github.com/ryno-andryano" target="_blank"
              >About Us</a
            >
          </nav>
        </div>
      </header>`;
  }
}

customElements.define('header-component', HeaderComponent);
