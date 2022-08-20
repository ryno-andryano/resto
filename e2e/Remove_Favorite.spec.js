/* eslint-disable new-cap */
Feature('Remove Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__list--empty', 10);
  I.see('No restaurants found.', '.restaurant__list--empty');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item', 10);
  I.click(locate('.restaurant-item__name a').first());
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);
});

Scenario('remove one restaurant from favorite', ({I}) => {
  I.seeElement('.restaurant-item');

  I.click(locate('.restaurant-item__name a').first());
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__list--empty', 10);

  I.see('No restaurants found.', '.restaurant__list--empty');
});
