const onShowMenuHandler = () => {
  $('.header__nav').toggleClass('open-nav');
  $('#menu-button').toggleClass('hidden');
  $('#close-button').toggleClass('hidden');
};

export default onShowMenuHandler;
