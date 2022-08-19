class AddFavoriteButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <span class="favorite__wrapper">
        Favorite
        <i
          id="favorite-icon"
          aria-label="Add to Favorite"
          title="Add to Favorite"
          class="material-icons"
        >
          favorite_border 
        </i>
      </span>`;
  }
}

customElements.define('add-favorite-button', AddFavoriteButton);
