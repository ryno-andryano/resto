/* eslint-disable max-len */
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButton: document.querySelector('.favorite'),
    restaurant,
  });
};

export {createFavoriteButtonPresenterWithRestaurant};
