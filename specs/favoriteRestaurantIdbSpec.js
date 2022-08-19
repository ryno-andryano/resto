/* eslint-disable max-len */
import {itActsAsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      },
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
