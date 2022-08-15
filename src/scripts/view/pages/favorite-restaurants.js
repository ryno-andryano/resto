import FavoriteRestaurantIdb from '../../data/favorite';
import {createRestaurantItemTemplate} from '../templates/template';

const FavoriteRestaurants = {
  async render() {
    return `<favorite-component></favorite-component>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const root = $('.restaurant__list')[0];
    if (restaurants == '') {
      root.outerHTML =
        '<p style="text-align: center">No restaurants found.</p>';
    } else {
      restaurants.forEach((restaurant) => {
        root.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default FavoriteRestaurants;
