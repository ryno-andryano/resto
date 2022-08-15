class SkipComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#main" id="skip-link" class="skip-link">Skip to Content</a>`;
  }
}

customElements.define('skip-component', SkipComponent);
