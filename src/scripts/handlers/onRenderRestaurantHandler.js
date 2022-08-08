const onRenderRestaurantHandler = (restaurants) => {
  const renderRestaurants = restaurants.map(
      ({pictureId, name, city, rating, description}) => {
        return `<li class="restaurant-item">
        <img
          src="${pictureId}"
          alt="${name}'s Ambiance"
          class="restaurant-item__picture"
        />
        <span class="restaurant-item__city">${city}</span>
        <h3 class="restaurant-item__name">${name}</h3>
        <div class="restaurant-item__rating">
          <i class="material-icons restaurant-item__rating-icon">star</i>
          <span>${rating}/5</span>
        </div>
        <p class="restaurant-item__description">${description}</p>
      </li>`;
      },
  );

  $('.restaurant__list').append(renderRestaurants);
};

export default onRenderRestaurantHandler;
