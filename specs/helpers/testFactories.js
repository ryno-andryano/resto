/* eslint-disable max-len */
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data//favorite';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButton: document.querySelector('.favorite'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export {createFavoriteButtonPresenterWithRestaurant};
