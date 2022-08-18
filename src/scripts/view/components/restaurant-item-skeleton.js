class RestaurantItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <div class="placeholder-restaurant loading">
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
        <div class="placeholder-restaurant__mask"></div>
      </div>`;
  }
}

customElements.define('restaurant-item-skeleton', RestaurantItemSkeleton);
