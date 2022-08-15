import DicodingRestaurantSource from '../../data/source';
import {
  createRestaurantItemTemplate,
  restaurantItemPlaceholder,
} from '../templates/template';
import facts from '../../data/facts';

const ExploreRestaurants = {
  async render() {
    return `<explore-component></explore-component>`;
  },

  async afterRender() {
    const root = $('.restaurant__list')[0];
    root.innerHTML = restaurantItemPlaceholder(3);

    const restaurants = await DicodingRestaurantSource.exploreRestaurants();
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
