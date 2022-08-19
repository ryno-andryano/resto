class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <section class="hero-section">
        <h2 class="hero-section__caption">
          Find The Most Popular<br /><u>Restaurants</u> Near You
        </h2>
      </section>`;
  }
}

customElements.define('hero-image', HeroImage);
