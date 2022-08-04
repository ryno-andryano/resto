import onToggleMenuHandler from './handlers/onToggleMenuHandler';
import onLoadRestaurantHandler from './handlers/onLoadRestaurantHandler';

import DATA from '../DATA.json';
const {restaurants} = DATA;

$(() => {
  $('.header__menu-icon').on('click', onToggleMenuHandler);
  onLoadRestaurantHandler(restaurants);
});
