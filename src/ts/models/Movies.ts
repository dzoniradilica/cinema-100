import { fetchData, API_URL_MOVIES } from '../helpers/helpers';
import { ConfigMovie } from '../configs/movie-config';
import { ConfigPagination } from '../configs/pagination-config';

export const moviesState: ConfigPagination = {
  allMovies: [],
  page: 1,
  resultsPerPage: 12,
};

class Movies {
  async getAll() {
    const res = await fetchData('api', API_URL_MOVIES);
    const data: ConfigMovie[] = await res.json();

    data.forEach(movie => {
      moviesState.allMovies.push(movie);
    });

    return data;
  }
}

export const movies = new Movies();

export const paginationResults = async function (
  page: number = moviesState.page
) {
  moviesState.page = page;

  await movies.getAll();

  const start = (page - 1) * moviesState.resultsPerPage;
  const end = page * moviesState.resultsPerPage;

  return moviesState.allMovies.slice(start, end);
};
