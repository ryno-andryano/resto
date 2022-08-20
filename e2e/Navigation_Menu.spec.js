/* eslint-disable new-cap */
Feature('Navigation Menu');

Before(({I}) => {
  I.amOnPage('/');
});

Scenario('open menu, then close it by clicking close button', async ({I}) => {
  I.seeElement('.header__menu-button');
  I.dontSeeElement('.open-nav');

  I.click('.header__menu-button');
  I.seeElement('.open-nav');

  I.click('.header__menu-button');
  I.dontSeeElement('.open-nav');
});

Scenario(
  'open menu, then close it by clicking favorite navigation',
  async ({I}) => {
    I.seeElement('.header__menu-button');
    I.dontSeeElement('.open-nav');

    I.click('.header__menu-button');
    I.seeElement('.open-nav');

    I.click('#nav-favorite');
    I.dontSeeElement('.open-nav');
    I.see('Favorite Restaurants', 'h2');
  },
);
