import DicodingRestaurantSource from '../../data/source';

const RestaurantDetail = {
  async render() {
    return `
      <h2>Restaurant Detail</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default RestaurantDetail;
