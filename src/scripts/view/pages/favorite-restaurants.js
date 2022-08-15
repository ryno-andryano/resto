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
    const root = $('.restaurant__list')[0];
    root.innerHTML = restaurantItemPlaceholder(3);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants == '') {
      root.outerHTML =
        '<p style="text-align: center">No restaurants found.</p>';
    } else {
      let restaurantList = '';
      restaurants.forEach((restaurant) => {
        restaurantList += createRestaurantItemTemplate(restaurant);
      });
      root.innerHTML = restaurantList;
    }
  },
};

export default FavoriteRestaurants;
