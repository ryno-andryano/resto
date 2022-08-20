class ExploreComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <hero-image></hero-image>

      <main id="main" class="main" tabindex="0">
        <section class="restaurant">
          <h2>Explore Restaurants</h2>
          <ul class="restaurant__list">
            <restaurant-item-skeleton></restaurant-item-skeleton>
            <restaurant-item-skeleton></restaurant-item-skeleton>
            <restaurant-item-skeleton></restaurant-item-skeleton>
          </ul>
        </section>

        <food-facts></food-facts>
      </main>`;
  }
}

customElements.define('explore-component', ExploreComponent);
