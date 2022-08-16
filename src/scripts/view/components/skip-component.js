class SkipComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button id="skip-button" class="skip-button">Skip to Content</button>`;
  }
}

customElements.define('skip-component', SkipComponent);
