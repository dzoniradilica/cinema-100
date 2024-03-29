import { ConfigMovie } from '../../configs/movie-config';

class SearchMovieView {
  searchInput = document.querySelector('.form-control')! as HTMLInputElement;
  bntsPagination = document.querySelector('.btns-numbers')! as HTMLDivElement;
  selectGenres = document.querySelector('#genres')! as HTMLSelectElement;
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

      handler(searchedMovies);
    });
  }

  addHandlerGenres(handler: Function) {
    this.selectGenres.addEventListener('change', e => {
      const genre = (e.target! as HTMLSelectElement).value;
      const movies: ConfigMovie[] = this.allMovies;

      const genreMovies = movies.filter(movie => movie.genre.includes(genre));

      this.bntsPagination.innerHTML = '';

      if (genre === 'All') handler(movies);
      else handler(genreMovies);
    });
  }
}

export default new SearchMovieView();
