class SkipButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <button id="skip-button" class="skip-button">Skip to Content</button>`;
  }
}

customElements.define('skip-button', SkipButton);
