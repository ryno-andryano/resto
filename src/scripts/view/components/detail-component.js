class DetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <main id="main" class="main" tabindex="0">
        <action-menu></action-menu>

        <section class="detail">
          <div class="detail__inner">
            <div class="detail__wrapper">
              <detail-content-skeleton></detail-content-skeleton>
            </div>

            <div class="detail__review">
              <h3>Customer Reviews</h3>
              <ul class="detail__review-list">
                <review-item-skeleton></review-item-skeleton>
              </ul>
            </div>
          </div>
          <div class="detail__add-review">
            <h3>Add Review</h3>
            <add-review-form></add-review-form>
          </div>
        </section>
      </main>`;
  }
}

customElements.define('detail-component', DetailComponent);
