class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = ` 
      <section class="hero-section">
        <picture>
          <source
            media="(max-width: 640px)"
            srcset="./images/hero-image-small.jpg"
          />
          <img
            class="hero-section__image"
            src="./images/hero-image-large.jpg"
            alt="Hero Image"
          />
        </picture>

        <h2 class="hero-section__caption">
          Find The Most Popular<br />Restaurants Near You
        </h2>
      </section>`;
  }
}

customElements.define('hero-image', HeroImage);
