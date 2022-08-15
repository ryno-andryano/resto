import DicodingRestaurantSource from '../../data/source';
import FavoriteRestaurantIdb from '../../data/favorite';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createReviewListTemplate,
} from '../templates/template';

const RestaurantDetail = {
  async render() {
    return `
      <detail-component></detail-component>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    $('.detail').prepend(createRestaurantDetailTemplate(restaurant));
    $('.detail__review-list').html(createReviewListTemplate(restaurant));

    let isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);
    if (isFavorite) {
      $('#favorite-icon').addClass('active');
    }

    $('.favorite').on('click', () => {
      if (isFavorite) {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      } else {
        FavoriteRestaurantIdb.putRestaurant(restaurant);
      }
      $('#favorite-icon').toggleClass('active');
      isFavorite = !isFavorite;
    });

    $('.detail__review-form').on('submit', (event) => {
      event.preventDefault();
      addReviewHandler();
      $('.detail__review-form')[0].reset();
    });

    const addReviewHandler = async () => {
      const formValue = {
        id: restaurant.id,
        name: $('#reviewer-name')[0].value,
        review: $('#review')[0].value,
      };
      await DicodingRestaurantSource.addReview(formValue);
    };
  },
};

export default RestaurantDetail;
