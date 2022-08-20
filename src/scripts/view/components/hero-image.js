class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = ` 
      <section class="hero-section">
        <img
          class="hero-section__image"
          src="./images/hero-image.jpg"
          alt="Hero Image"
        />
        <h2 class="hero-section__caption">
          Find The Most Popular<br />Restaurants Near You
        </h2>
      </section>`;
  }
}

customElements.define('hero-image', HeroImage);
