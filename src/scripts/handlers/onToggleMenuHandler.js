const onShowMenuHandler = (event) => {
  const $nav = document.querySelector('.header__nav');
  $nav.classList.toggle('open-nav');
  const $menuButton = document.querySelector('#menu-button');
  $menuButton.classList.toggle('hidden');
  const $closeButton = document.querySelector('#close-button');
  $closeButton.classList.toggle('hidden');
  event.stopPropagation();
};

export default onShowMenuHandler;
