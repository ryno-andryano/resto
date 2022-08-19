class AddReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
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
      </form>`;
  }
}

customElements.define('add-review-form', AddReviewForm);
