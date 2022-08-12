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

const createRestaurantDetailTemplate = ({
  name,
  description,
  city,
  address,
  pictureId,
  menus,
  customerReviews,
}) => {
  const foods = menus.foods.map((menu) => {
    return menu.name;
  });

  const drinks = menus.drinks.map((menu) => {
    return menu.name;
  });

  const reviewList = customerReviews.map(({name, review, date}) => {
    const formatedDate = new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    return `
      <li class="detail__review-item">
        <div class="detail__review-wrapper">
          <div class="detail__review-name">${name}</div>
          <p class="detail__review-text">
            <q>${review}</q>
          </p>
          <time class="detail__review-time" datetime="${formatedDate}">
            ${date}
          </time>
        </div>
      </li>`;
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
        <address class="detail__address">
          ${address}, ${city}
        </address>
        <p class="detail__description">${description}</p>
        <p class="detail__foods">
          <b>Foods:</b> ${foods.join(', ')}.
        </p>
        <p class="detail__drinks">
          <b>Drinks:</b> ${drinks.join(', ')}.
        </p>
      </div>
    </div>

    <div class="detail__review">
      <h3>Customer Reviews</h3>
      <ul class="detail__review-list">
        ${reviewList.join('')}
      </ul>
    </div>

    <div class="detail__add-review">
      <h3>Add Review</h3>
      <form class="detail__review-form" action="">
        <label for="reviewer-name">Name</label>
        <input type="text" name="reviewer-name" id="reviewer-name" />
        <label for="review">Review</label>
        <textarea id="review" name="review" rows="2"></textarea>
        <button class="detail__submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>`;
};

export {createRestaurantItemTemplate, createRestaurantDetailTemplate};
