import onToggleMenuHandler from './handlers/onToggleMenuHandler';
import onRenderRestaurantHandler from './handlers/onRenderRestaurantHandler';
import onRenderFactHandler from './handlers/onRenderFactHandler';

import DATA from '../DATA.json';
const {restaurants, fact} = DATA;

$(() => {
  $('.header__menu-icon').on('click', onToggleMenuHandler);
  onRenderRestaurantHandler(restaurants);
  onRenderFactHandler(fact);
});
