import { ConfigMovie } from '../../configs/movie-config';

class DisplayMovieView {
  movieHeader = document.querySelector('.movie-header')! as HTMLDivElement;
  movieBody = document.querySelector('.movie-body')! as HTMLDivElement;
  movieInfo = document.querySelector('.movie-info-wrapper')! as HTMLDivElement;

  renderMovie(allMovies: ConfigMovie[]) {
    const href = window.location.href.slice(-9);

    const singleMovie = allMovies.find(movie => movie.imdbid === href)!;

    this.renderMovieHeader(singleMovie);
    this.renderMovieBody(singleMovie);
    this.renderMovieInfo(singleMovie);
  }

  private renderMovieHeader(movie: ConfigMovie) {
    const html = `
    <div class="col-md-8">
      <div class="movie-info">
        <h3 class="movie-name">${movie.title}</h3>
        <p class="year">(${movie.year})</p>
      </div>
    </div>

    <div class="col-md-4">
      <div class="imdb-info">
        <div class="rating">
          <h3>Imdb rating</h3>
          <span style="color: yellow">&starf;</span>
          <span class="imdb-rating">${movie.rating}</span>
          <span>/10</span>
    </div>

    <div class="rank">
          <h3>Rank</h3>
          <span class="imdb-rank">${movie.rank}</span>
          <span>/100</span>
        </div>
      </div>
    </div>
    `;

    this.movieHeader.insertAdjacentHTML('afterbegin', html);
  }

  private renderMovieBody(movie: ConfigMovie) {
    const html = `
    <div class="col-md-4">
      <div class="image-wrapper">
        <img src="${movie.image}" alt="movie-image" />
      </div>
    </div>

    <div class="col-md-8">
      <div class="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="${movie.trailer}"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    `;

    this.movieBody.insertAdjacentHTML('afterbegin', html);
  }

  private renderMovieInfo(movie: ConfigMovie) {
    const html = `
    <p class="description">
      ${movie.description}
    </p>

    <hr />

    <div class="director-wrapper">
      <h4>Director</h4>
      <p class="director">${[...movie.director]}</p>
    </div>

    <hr />

    <h4>Writters</h4>
    <div class="writers-wrapper">
      <span>
        ${[...movie.writers]}
      </span>
    </div>

    <hr />
  `;

    this.movieInfo.insertAdjacentHTML('afterbegin', html);
  }
}

export default new DisplayMovieView();
