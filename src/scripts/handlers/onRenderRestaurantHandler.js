const onRenderRestaurantHandler = (restaurants) => {
  const renderRestaurants = restaurants.map((restaurant) => {
    return `<li class="restaurant-item">
      <img
        src="${restaurant.pictureId}"
        alt="${restaurant.name}"
        class="restaurant-item__picture"
      />
      <span class="restaurant-item__city">${restaurant.city}</span>
      <h3 class="restaurant-item__name">${restaurant.name}</h3>
      <div class="restaurant-item__rating">Rating: ${restaurant.rating}</div>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </li>`;
  });

  $('.restaurant-list').append(renderRestaurants);
};

export default onRenderRestaurantHandler;
