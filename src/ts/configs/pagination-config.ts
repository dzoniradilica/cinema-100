import { ConfigMovie } from './movie-config';

export interface ConfigPagination {
  allMovies: ConfigMovie[];
  page: number;
  resultsPerPage: number;
}
