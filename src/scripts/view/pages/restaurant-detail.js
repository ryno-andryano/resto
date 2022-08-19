import DicodingRestaurantSource from '../../data/source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import UrlParser from '../../routes/url-parser';

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
    const {customerReviews} = restaurant;

    document.querySelector('.detail__wrapper').outerHTML = `
      <detail-content
        restaurant='${JSON.stringify(restaurant)}'
      ></detail-content>`;

    const $reviewList = document.querySelector('.detail__review-list');
    $reviewList.innerHTML = '';
    customerReviews.forEach((review) => {
      $reviewList.innerHTML += `
        <review-item
          customerReviews='${JSON.stringify(review)}'
        ></review-item>`;
    });

    FavoriteButtonInitiator.init({
      favoriteButton: document.querySelector('.favorite'),
      restaurant,
    });

    const $reviewForm = document.querySelector('.detail__review-form');
    $reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formValue = {
        id: restaurant.id,
        name: document.querySelector('#reviewer-name').value,
        review: document.querySelector('#review').value,
      };
      await DicodingRestaurantSource.addReview(formValue);
      $reviewForm.reset();
    });
  },
};

export default RestaurantDetail;
