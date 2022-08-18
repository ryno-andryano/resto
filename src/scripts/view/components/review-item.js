class ReviewItem extends HTMLElement {
  connectedCallback() {
    const customerReviews = JSON.parse(this.attributes.customerReviews.value);
    this.render(customerReviews);
  }

  render({name, review, date}) {
    this.outerHTML = `
      <li class="detail__review-item">
        <div class="detail__review-wrapper">
          <div class="detail__review-name">${name}</div>
          <p class="detail__review-text">
            <q>${review}</q>
          </p>
          <time class="detail__review-time"">${date}</time>
        </div>
      </li>`;
  }
}

customElements.define('review-item', ReviewItem);
