const MenuInitiator = {
  init({button, menuIcon, closeIcon, nav}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, menuIcon, closeIcon, nav);
    });
    nav.addEventListener('click', (event) => {
      this._closeDrawer(event, menuIcon, closeIcon, nav);
    });
  },

  _toggleDrawer(event, menuIcon, closeIcon, nav) {
    event.stopPropagation();
    nav.classList.toggle('open-nav');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  },
  _closeDrawer(event, menuIcon, closeIcon, nav) {
    event.stopPropagation();
    nav.classList.remove('open-nav');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  },
};

export default MenuInitiator;
