class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = ` 
      <section class="hero-section">
        <picture>
          <source
            media="(max-width: 440px)"
            type="image/jpeg"
            srcset="./images/responsive/hero-image-small.jpg"
          />
          <source
            media="(max-width: 720px)"
            type="image/jpeg"
            srcset="./images/responsive/hero-image-medium.jpg"
          />
          <source type="image/webp" srcset="./images/hero-image.webp" />
          <source type="image/jpeg" srcset="./images/hero-image.jpg" />
          <img
            class="hero-section__image"
            src="./images/hero-image.jpg"
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
