import CONFIG from '../../global/config';

const createRestaurantItemTemplate = ({
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
    <h3 class="restaurant-item__name">${name}</h3>
    <div class="restaurant-item__city">${city}</div>
    <p class="restaurant-item__description">${description}</p>
  </li>
`;

export default createRestaurantItemTemplate;
