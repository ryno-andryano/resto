import DicodingRestaurantSource from '../../data/source';
import UrlParser from '../../routes/url-parser';
import {createRestaurantDetailTemplate} from '../templates/template';

const RestaurantDetail = {
  async render() {
    return `
      <detail-component></detail-component>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    console.log(createRestaurantDetailTemplate(restaurant));
    $('.detail').html(createRestaurantDetailTemplate(restaurant));
    window.scrollTo(0, 0);
  },
};

export default RestaurantDetail;
