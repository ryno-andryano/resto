class FavoriteComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main id="main" class="main" tabindex="0">
        <section class="restaurant">
          <h2>Favorite Restaurants</h2>
          <ul class="restaurant__list"></ul>
        </section>
      </main>`;
  }
}

customElements.define('favorite-component', FavoriteComponent);
