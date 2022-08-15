import CONFIG from '../../global/config';

const createRestaurantItemTemplate = ({
  id,
  pictureId,
  name,
  city,
  rating,
  description,
}) => `
      <li class="restaurant-item">
        <img
          src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}"
          alt="${name}'s Ambiance"
          class="restaurant-item__picture"
        />
        <div class="restaurant-item__rating">
          <i class="material-icons restaurant-item__rating-icon">star</i>
          <span>${rating}</span>
        </div>
        <h3 class="restaurant-item__name">
          <a href="#/detail/${id}">${name}</a>
        </h3>
        <div class="restaurant-item__city">${city}</div>
        <p class="restaurant-item__description">${description}</p>
      </li>
`;

const restaurantItemPlaceholder = (loop) => {
  let restaurantItemHtml = '';
  for (let i = 0; i < loop; i++) {
    restaurantItemHtml += `
    <div class="placeholder-restaurant">
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
      <div class="placeholder-restaurant__inner"></div>
    </div>`;
  }
  return restaurantItemHtml;
};

const currentDate = new Date().toLocaleDateString(
  ('id-ID', {year: 'numeric', month: 'long', day: 'numeric'}),
);
const createNewReviewTemplate = ({name, review, date = currentDate}) => {
  return `
    <li class="detail__review-item">
      <div class="detail__review-wrapper">
        <div class="detail__review-name">${name}</div>
        <p class="detail__review-text">
          <q>${review}</q>
        </p>
        <time class="detail__review-time"">${date}</time>
      </div>
    </li>`;
};

const createReviewListTemplate = ({customerReviews}) => {
  let reviewList = '';
  customerReviews.forEach((customerReview) => {
    reviewList += createNewReviewTemplate(customerReview);
  });

  return reviewList;
};

const createRestaurantDetailTemplate = ({
  name,
  description,
  city,
  address,
  pictureId,
  menus,
}) => {
  const foods = menus.foods.map((menu) => {
    return menu.name;
  });

  const drinks = menus.drinks.map((menu) => {
    return menu.name;
  });

  return `
    <div class="detail__wrapper">
      <img
        class="detail__image"
        src="${CONFIG.BASE_IMAGE_URL}large/${pictureId}"
        alt="${name}' Ambiance"
      />
      <div>
        <h2 class="detail__name">${name}</h2>
        <address class="detail__address">${address}, ${city}</address>
        <p class="detail__description">${description}</p>
        <p class="detail__foods"><b>Foods:</b> ${foods.join(', ')}.</p>
        <p class="detail__drinks"><b>Drinks:</b> ${drinks.join(', ')}.</p>
      </div>
    </div>

    <div class="detail__review">
      <h3>Customer Reviews</h3>
      <ul class="detail__review-list">
      </ul>
    </div>`;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createNewReviewTemplate,
  createReviewListTemplate,
  restaurantItemPlaceholder,
};
