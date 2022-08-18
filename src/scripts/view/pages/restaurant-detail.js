import DicodingRestaurantSource from '../../data/source';
import FavoriteRestaurantIdb from '../../data/favorite';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createReviewListTemplate,
  restaurantDetailPlaceholder,
} from '../templates/template';

const RestaurantDetail = {
  async render() {
    return `
      <detail-component></detail-component>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const $detailInner = document.querySelector('.detail__inner');
    $detailInner.innerHTML = restaurantDetailPlaceholder();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    $detailInner.innerHTML = createRestaurantDetailTemplate(restaurant);
    document.querySelector('.detail__review-list').innerHTML =
      createReviewListTemplate(restaurant);

    let isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);
    const $favoriteIcon = document.querySelector('#favorite-icon');
    if (isFavorite) {
      $favoriteIcon.classList.add('active');
    }

    document.querySelector('.favorite').addEventListener('click', () => {
      if (isFavorite) {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      } else {
        FavoriteRestaurantIdb.putRestaurant(restaurant);
      }
      $favoriteIcon.classList.toggle('active');
      isFavorite = !isFavorite;
    });

    const $reviewForm = document.querySelector('.detail__review-form');
    $reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();
      addReviewHandler();
      $reviewForm.reset();
    });

    const addReviewHandler = async () => {
      const formValue = {
        id: restaurant.id,
        name: document.querySelector('#reviewer-name').value,
        review: document.querySelector('#review').value,
      };
      await DicodingRestaurantSource.addReview(formValue);
    };
  },
};

export default RestaurantDetail;
