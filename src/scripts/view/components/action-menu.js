class ActionMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <div class="action-menu">
        <a href="javascript:history.back()" class="back">
          <span class="back__wrapper">
            <i
              id="back-icon"
              title="Back"
              aria-label="Back"
              class="material-icons"
            >
              arrow_back_ios
            </i>
            Back
          </span>
        </a>
        <button class="favorite"></button>
      </div>`;
  }
}

customElements.define('action-menu', ActionMenu);
