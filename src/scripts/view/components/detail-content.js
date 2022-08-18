import CONFIG from '../../global/config';

class DetailContent extends HTMLElement {
  connectedCallback() {
    const restaurant = JSON.parse(this.attributes.restaurant.value);
    this.render(restaurant);
  }

  render({name, description, city, address, pictureId, menus}) {
    const foods = menus.foods.map((menu) => {
      return menu.name;
    });
    const drinks = menus.drinks.map((menu) => {
      return menu.name;
    });

    this.outerHTML = `
      <div class="detail__wrapper">
        <img
          class="detail__image"
          src="${CONFIG.BASE_IMAGE_URL}large/${pictureId}"
          alt="${name}' Ambiance"
        />
        <div>
          <h2 class="detail__name">${name}</h2>
          <address class="detail__address">${address}, ${city}</address>
          <p class="detail__description">${description}</p>
          <p class="detail__foods"><b>Foods:</b> ${foods.join(', ')}.</p>
          <p class="detail__drinks"><b>Drinks:</b> ${drinks.join(', ')}.</p>
        </div>
      </div>

      <div class="detail__review">
        <h3>Customer Reviews</h3>
        <ul class="detail__review-list">
        </ul>
      </div>`;
  }
}

customElements.define('detail-content', DetailContent);
