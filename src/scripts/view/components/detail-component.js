class DetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <main id="main" class="main" tabindex="0">
        <div class="action-menu">
          <a href="javascript:history.back()" class="back">
            <span class="back__wrapper">
              <i
                id="back-icon"
                title="Back"
                aria-label="Back Icon"
                class="material-icons"
              >
                arrow_back_ios
              </i>
              Back
            </span>
          </a>
          <button class="favorite">
            <span class="favorite__wrapper">
              Favorite
              <i
                id="favorite-icon"
                aria-label="Favorite Icon"
                title="Favorite"
                class="material-icons"
              >
                favorite
              </i>
            </span>
          </button>
        </div>

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
            <form class="detail__review-form" action="">
              <label for="reviewer-name">Name</label>
              <input
                type="text"
                name="reviewer-name"
                id="reviewer-name"
                placeholder="Enter your name"
                required
              />
              <label for="review">Review</label>
              <textarea
                id="review"
                name="review"
                rows="2"
                placeholder="Share your experience"
                required
              ></textarea>
              <button class="detail__submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>`;
  }
}

customElements.define('detail-component', DetailComponent);
