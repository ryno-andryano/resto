import onToggleMenuHandler from './handlers/onToggleMenuHandler';

window.onload = () => {
  const $menuIcon = document.querySelector('.header__menu-icon');
  $menuIcon.addEventListener('click', onToggleMenuHandler);
};
