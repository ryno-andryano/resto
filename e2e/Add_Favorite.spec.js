/* eslint-disable new-cap */
const assert = require('assert');

Feature('Add Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__list--empty', 10);
});

Scenario('add one restaurant to favorite', async ({I}) => {
  I.see('No restaurants found.', '.restaurant__list--empty');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.favorite');
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);

  const favoritedRestaurantName = await I.grabTextFrom(
    '.restaurant-item__name',
  );

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
