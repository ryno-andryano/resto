/* eslint-disable max-len */
import '../src/scripts/view/components/add-favorite-button';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite';
import * as TestFactories from './helpers/testFactories';

describe('Add restaurant to favorite', () => {
  const addAddFavoriteButton = () => {
    document.body.innerHTML = '<button class="favorite"></button>';
  };

  beforeEach(() => {
    addAddFavoriteButton();
  });

  it('should show the add favorite button when the restaurant has not been favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    expect(
      document.querySelector('[aria-label="Add to Favorite"]'),
    ).toBeTruthy();
  });

  it('should not show the remove favorite button when the restaurant has not been favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    expect(
      document.querySelector('[aria-label="Remove from Favorite"]'),
    ).toBeFalsy();
  });

  it('should be able to add restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    document.querySelector('.favorite').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

    await FavoriteRestaurantIdb.putRestaurant({id: 1});

    document.querySelector('.favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{id: 1}]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('.favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
