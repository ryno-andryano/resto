import DicodingRestaurantSource from '../../data/source';
import FavoriteRestaurantIdb from '../../data/favorite';
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
    let isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);
    const {customerReviews} = restaurant;
    const $reviewList = document.querySelector('.detail__review-list');
    const $favoriteIcon = document.querySelector('#favorite-icon');
    const $favorite = document.querySelector('.favorite');
    const $reviewForm = document.querySelector('.detail__review-form');

    document.querySelector('.detail__wrapper').outerHTML = `
      <detail-content
        restaurant='${JSON.stringify(restaurant)}'
      ></detail-content>`;

    $reviewList.innerHTML = '';
    customerReviews.forEach((review) => {
      $reviewList.innerHTML += `
        <review-item
          customerReviews='${JSON.stringify(review)}'
        ></review-item>`;
    });

    if (isFavorite) {
      $favoriteIcon.classList.add('active');
    }

    $favorite.addEventListener('click', () => {
      if (isFavorite) {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      } else {
        FavoriteRestaurantIdb.putRestaurant(restaurant);
      }
      $favoriteIcon.classList.toggle('active');
      isFavorite = !isFavorite;
    });

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
