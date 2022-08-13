/* eslint-disable new-cap */
import API_ENDPOINT from '../global/api-endpoint';

class DicodingRestaurantSource {
  static async exploreRestaurants() {
    const response = await fetch(API_ENDPOINT.EXPLORE);
    const {restaurants} = await response.json();
    return restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const {restaurant} = await response.json();
    return restaurant;
  }

  static async addReview(formValue) {
    const rawResponse = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    });
    const response = await rawResponse.json();
    console.log(response.message);
  }
}

export default DicodingRestaurantSource;
