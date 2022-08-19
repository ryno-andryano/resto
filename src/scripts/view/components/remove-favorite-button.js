class RemoveFavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <span class="favorite__wrapper">
        Favorite
        <i
          id="favorite-icon"
          aria-label="Remove from Favorite"
          title="Remove from Favorite"
          class="material-icons"
        >
          favorite 
        </i>
      </span>`;
  }
}

customElements.define('remove-favorite-button', RemoveFavoriteButton);
