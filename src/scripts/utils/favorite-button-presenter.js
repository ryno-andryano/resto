import FavoriteRestaurantIdb from '../data/favorite';

const FavoriteButtonPresenter = {
  async init({favoriteButton, restaurant}) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;

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
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    this._favoriteButton.innerHTML = `<add-favorite-button>
      </add-favorite-button>`;

    const $favoriteButton = document.querySelector('.favorite');
    $favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderRemoveFavorite() {
    this._favoriteButton.innerHTML = `<remove-favorite-button>
    </remove-favorite-button>`;

    const $favoriteButton = document.querySelector('.favorite');
    $favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
