import ExploreRestaurants from '../view/pages/explore-restaurants';
import RestaurantDetail from '../view/pages/restaurant-detail';
import FavoriteRestaurants from '../view/pages/favorite-restaurants';

const routes = {
  '/': ExploreRestaurants, // default page
  '/home': ExploreRestaurants,
  '/detail/:id': RestaurantDetail,
  '/favorite': FavoriteRestaurants,
};

export default routes;
