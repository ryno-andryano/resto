import CONFIG from '../../global/config';

class DetailContent extends HTMLElement {
  connectedCallback() {
    const restaurant = JSON.parse(this.attributes.restaurant.value);
    restaurant.menus.foods = restaurant.menus.foods.map((food) => {
      return food.name;
    });
    restaurant.menus.drinks = restaurant.menus.drinks.map((drink) => {
      return drink.name;
    });
    this.render(restaurant);
  }

  render({name, description, city, address, pictureId, menus}) {
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
          <p class="detail__foods">
            <b>Foods:</b> ${menus.foods.join(', ')}.
          </p>
          <p class="detail__drinks">
            <b>Drinks:</b> ${menus.drinks.join(', ')}.
          </p>
        </div>
      </div>`;
  }
}

customElements.define('detail-content', DetailContent);
