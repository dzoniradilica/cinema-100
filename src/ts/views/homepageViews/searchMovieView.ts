import { ConfigMovie } from '../../configs/movie-config';

class SearchMovieView {
  searchInput = document.querySelector('.form-control')! as HTMLInputElement;
  bntsPagination = document.querySelector('.btns-numbers')! as HTMLDivElement;
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;
  allMovies: any;

  addHandlerSearch(handler: Function) {
    this.searchInput.addEventListener('keyup', () => {
      const value = this.searchInput.value;
      const movies: ConfigMovie[] = this.allMovies;

      const searchedMovies = movies.filter(movie => {
        if (movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
          return movie;
      });

      this.bntsPagination.innerHTML = '';

      if (searchedMovies.length === 0) {
        this.parentElement.innerHTML =
          '<p class="error-message">No movies found</p>';
      }

      handler(searchedMovies);
    });
  }
}

export default new SearchMovieView();
