import CONFIG from '../../global/config';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    const restaurant = JSON.parse(this.attributes.restaurant.value);
    this.render(restaurant);
  }

  render({id, pictureId, name, city, rating, description}) {
    this.outerHTML = `
      <li class="restaurant-item">
        <img
          src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}"
          alt="${name}'s Ambiance"
          class="restaurant-item__picture"
        />
        <div class="restaurant-item__rating">
          <i class="material-icons restaurant-item__rating-icon">star_rate</i>
          <span>${rating}</span>
        </div>
        <h3 class="restaurant-item__name">
          <a href="#/detail/${id}">${name}</a>
        </h3>
        <div class="restaurant-item__city">${city}</div>
        <p class="restaurant-item__description">${description}</p>
      </li>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
