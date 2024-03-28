import { fetchData, API_URL_MOVIES } from '../helpers/helpers';

class Movies {
  async getAll() {
    const res = await fetchData('api', API_URL_MOVIES);
    const data = await res.json();

    return data;
  }
}

export const movies = new Movies();
