class ExploreComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <hero-component></hero-component>

      <main id="main" class="main">
        <section class="restaurant">
          <h2>Explore Restaurants</h2>
          <ul class="restaurant__list"></ul>
        </section>

        <section class="food-facts">
          <div class="food-facts__wrapper">
            <button
              class="food-facts__shuffle-button"
              title="Shuffle Fact"
              aria-label="Shuffle Fact"
            >
              <i class="material-icons">change_circle</i>
            </button>
            <h2>Random Food Facts</h2>
            <p class="food-facts__fact"></p>
          </div>
        </section>
      </main>`;
  }
}

customElements.define('explore-component', ExploreComponent);
