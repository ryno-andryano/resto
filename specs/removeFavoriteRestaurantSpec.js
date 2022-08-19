/* eslint-disable max-len */
import '../src/scripts/view/components/remove-favorite-button';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite';
import * as TestFactories from './helpers/testFactories';

describe('Remove restaurant from favorite', () => {
  const addAddFavoriteButton = () => {
    document.body.innerHTML = '<button class="favorite"></button>';
  };

  beforeEach(async () => {
    addAddFavoriteButton();
    await FavoriteRestaurantIdb.putRestaurant({id: 1});
  });

  afterEach(async () => {
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display remove favorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    expect(
      document.querySelector('[aria-label="Remove from Favorite"]'),
    ).toBeTruthy();
  });

  it('should not display add favorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    expect(
      document.querySelector('[aria-label="Add to Favorite"]'),
    ).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    document.querySelector('.favorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('.favorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
