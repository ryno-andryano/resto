class DetailComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main id="main" class="main">
        <a href="/" class="back">
          <span class="back__wrapper">
            <i 
              id="back-icon" 
              class="material-icons" 
              title="Back" 
              aria-label="Back"
              >arrow_back_ios</i
            >Back to Explore</span
          ></a
        >
        <section class="detail">
          <div class="detail__add-review">
            <h3>Add Review</h3>
            <form class="detail__review-form" action="">
              <label for="reviewer-name">Name</label>
              <input
                type="text"
                name="reviewer-name"
                id="reviewer-name"
                required
              />
              <label for="review">Review</label>
              <textarea id="review" name="review" rows="2" required></textarea>
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
