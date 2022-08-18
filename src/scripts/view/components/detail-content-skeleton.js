class DetailContentSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <div class="placeholder-detail__image loading"></div>
      <div class="placeholder-detail__text loading">
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
        <div class="placeholder-detail__mask"></div>
      </div>`;
  }
}

customElements.define('detail-content-skeleton', DetailContentSkeleton);
