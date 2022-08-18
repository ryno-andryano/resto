class ReviewItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <div class="placeholder-review loading"></div>
      <div class="placeholder-review loading"></div>
      <div class="placeholder-review loading"></div>
      <div class="placeholder-review loading"></div>
      <div class="placeholder-review loading"></div>
      <div class="placeholder-review loading"></div>`;
  }
}

customElements.define('review-item-skeleton', ReviewItemSkeleton);
