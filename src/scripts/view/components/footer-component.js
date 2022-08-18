class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <footer class="footer">
        <div class="footer__inner">Copyright © 2022 - RESTO</div>
      </footer>`;
  }
}

customElements.define('footer-component', FooterComponent);
