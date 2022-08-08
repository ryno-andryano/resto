import onToggleMenuHandler from './handlers/onToggleMenuHandler';
import onRenderRestaurantHandler from './handlers/onRenderRestaurantHandler';
import onRenderFactHandler from './handlers/onRenderFactHandler';

import DATA from '../DATA.json';
const {restaurants, facts} = DATA;

$(() => {
  $('.header__menu-button').on('click', onToggleMenuHandler);
  onRenderRestaurantHandler(restaurants);
  onRenderFactHandler(facts);
  $('.food-facts__shuffle-button').on('click', () => {
    onRenderFactHandler(facts);
  });
});
