import onToggleMenuHandler from './handlers/onToggleMenuHandler';

$(() => {
  $('.header__menu-icon').on('click', onToggleMenuHandler);
});
