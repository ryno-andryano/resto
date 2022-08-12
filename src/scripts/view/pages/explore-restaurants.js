import DicodingRestaurantSource from '../../data/source';
import {createRestaurantItemTemplate} from '../templates/template';

const ExploreRestaurants = {
  async render() {
    return `<explore-component></explore-component>`;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.exploreRestaurants();
    const root = $('.restaurant__list')[0];
    restaurants.forEach((restaurant) => {
      root.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ExploreRestaurants;
