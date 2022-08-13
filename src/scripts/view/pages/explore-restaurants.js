import DicodingRestaurantSource from '../../data/source';
import {createRestaurantItemTemplate} from '../templates/template';
import facts from '../../data/facts';

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

    const randomizeFactHandler = (facts) => {
      const randomFact = () => {
        return facts[Math.floor(Math.random() * facts.length)];
      };
      $('.food-facts__shuffle-button i').toggleClass('spin');
      $('.food-facts__fact').text(randomFact);
    };
    randomizeFactHandler(facts);
    $('.food-facts__shuffle-button').on('click', () => {
      randomizeFactHandler(facts);
    });
  },
};

export default ExploreRestaurants;
