class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-section" title="Hero Image">
        <h2 class="hero-section__caption">
          Find The Most Popular<br /><u>Restaurants</u> Near You
        </h2>
      </section>`;
  }
}

customElements.define('hero-component', HeroComponent);
