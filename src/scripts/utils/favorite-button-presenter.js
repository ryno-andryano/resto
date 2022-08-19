const FavoriteButtonPresenter = {
  async init({favoriteButton, restaurant, favoriteRestaurants}) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isFavorited(id)) {
      this._renderRemoveFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _isFavorited(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    this._favoriteButton.innerHTML = `<add-favorite-button>
      </add-favorite-button>`;

    const $favoriteButton = document.querySelector('.favorite');
    $favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderRemoveFavorite() {
    this._favoriteButton.innerHTML = `<remove-favorite-button>
    </remove-favorite-button>`;

    const $favoriteButton = document.querySelector('.favorite');
    $favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
