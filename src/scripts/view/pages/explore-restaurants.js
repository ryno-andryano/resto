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
    const $restaurantList = document.querySelector('.restaurant__list');
    $restaurantList.innerHTML = restaurantItemPlaceholder(3);

    const restaurants = await DicodingRestaurantSource.exploreRestaurants();
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

    const randomizeFactHandler = (facts) => {
      const randomFact = () => {
        return facts[Math.floor(Math.random() * facts.length)];
      };
      document
        .querySelector('.food-facts__shuffle-button i')
        .classList.toggle('spin');
      document.querySelector('.food-facts__fact').innerHTML = randomFact(facts);
    };
    randomizeFactHandler(facts);
    document
      .querySelector('.food-facts__shuffle-button')
      .addEventListener('click', () => {
        randomizeFactHandler(facts);
      });
  },
};

export default ExploreRestaurants;
