import FavoriteRestaurantIdb from '../../data/favorite';

const FavoriteRestaurants = {
  async render() {
    return `<favorite-component></favorite-component>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
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
  },
};

export default FavoriteRestaurants;
