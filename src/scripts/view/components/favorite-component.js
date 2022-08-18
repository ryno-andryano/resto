class FavoriteComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <main id="main" class="main" tabindex="0">
        <section class="restaurant">
          <h2>Favorite Restaurants</h2>
          <ul class="restaurant__list">
            <restaurant-item-skeleton></restaurant-item-skeleton>  
            <restaurant-item-skeleton></restaurant-item-skeleton>  
            <restaurant-item-skeleton></restaurant-item-skeleton>  
          </ul>
        </section>
      </main>`;
  }
}

customElements.define('favorite-component', FavoriteComponent);
