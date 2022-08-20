class FoodFacts extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <section class="food-facts">
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="./images/pattern-small.jpg"
          />
          <img
            class="food-facts__background"
            src="./images/pattern-large.jpg"
            alt="background"
          />
        </picture>
        <button
          class="food-facts__shuffle-button"
          title="Shuffle Fact"
          aria-label="Shuffle Fact"
        >
          <i class="material-icons">change_circle</i>
        </button>
        <div class="food-facts__wrapper">
          <h2>Random Food Facts</h2>
          <p class="food-facts__fact"></p>
        </div>
      </section>`;
  }
}

customElements.define('food-facts', FoodFacts);
