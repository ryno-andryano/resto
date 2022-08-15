import DicodingRestaurantSource from '../../data/source';
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    window.scrollTo(0, 0);

    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    $('.detail').prepend(createRestaurantDetailTemplate(restaurant));
    $('.detail__review-list').html(createReviewListTemplate(restaurant));

    $('.detail__review-form').on('submit', (event) => {
      event.preventDefault();
      addReviewHandler();
      $('.detail__review-form')[0].reset();
    });

    $('.favorite').on('click', () => {
      $('#favorite-icon').toggleClass('active');
    });

    const addReviewHandler = async () => {
      const formValue = {
        id: url.id,
        name: $('#reviewer-name')[0].value,
        review: $('#review')[0].value,
      };
      await DicodingRestaurantSource.addReview(formValue);
    };
  },
};

export default RestaurantDetail;
