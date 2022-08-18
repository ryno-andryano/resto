import DicodingRestaurantSource from '../../data/source';
import facts from '../../data/facts';

const ExploreRestaurants = {
  async render() {
    return `<explore-component></explore-component>`;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.exploreRestaurants();
    const $restaurantList = document.querySelector('.restaurant__list');

    if (restaurants == '') {
      $restaurantList.outerHTML =
        '<p style="text-align: center">No restaurants found.</p>';
    } else {
      $restaurantList.innerHTML = '';
      restaurants.forEach((restaurant) => {
        $restaurantList.innerHTML += `
          <restaurant-item
            restaurant='${JSON.stringify(restaurant)}'
          ></restaurant-item>`;
      });
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
