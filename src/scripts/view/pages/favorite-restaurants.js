import FavoriteRestaurantIdb from '../../data/favorite';
import {
  createRestaurantItemTemplate,
  restaurantItemPlaceholder,
} from '../templates/template';

const FavoriteRestaurants = {
  async render() {
    return `<favorite-component></favorite-component>`;
  },

  async afterRender() {
    const $restaurantList = document.querySelector('.restaurant__list');
    $restaurantList.innerHTML = restaurantItemPlaceholder(3);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants == '') {
      $restaurantList.outerHTML =
        '<p style="text-align: center">No restaurants found.</p>';
    } else {
      let restaurantItem = '';
      restaurants.forEach((restaurant) => {
        restaurantItem += createRestaurantItemTemplate(restaurant);
      });
      $restaurantList.innerHTML = restaurantItem;
    }
  },
};

export default FavoriteRestaurants;
