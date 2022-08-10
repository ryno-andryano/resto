const MenuInitiator = {
  init({button, menuIcon, closeIcon, nav}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, menuIcon, closeIcon, nav);
    });
  },

  _toggleDrawer(event, menuIcon, closeIcon, nav) {
    event.stopPropagation();
    nav.classList.toggle('open-nav');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  },
};

export default MenuInitiator;
