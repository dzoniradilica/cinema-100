import { ConfigMovie } from '../../configs/movie-config';

class DisplayMovieView {
  movieCard = document.querySelector('.movie-card')! as HTMLDivElement;
  videoCard = document.querySelector('.video-card')! as HTMLDivElement;
  movieInfo = document.querySelector('.movie-info-wrapper')! as HTMLDivElement;

  renderMovie(allMovies: ConfigMovie[]) {
    const href = window.location.href.slice(-9);

    const singleMovie = allMovies.find(movie => movie.imdbid === href)!;

    this.renderMovieCard(singleMovie);
    this.renderVideoCard(singleMovie);
    this.renderMovieInfo(singleMovie);
  }

  private renderMovieCard(movie: ConfigMovie) {
    const html = `
    <div class="card-header">
      <h3 class="movie-name">${movie.title}</h3>
      <p class="year">(${movie.year})</p>
    </div>

    <div class="card-body">
      <div class="image-wrapper">
        <img src="${movie.image}" alt="movie-image" />
      </div>
    </div>

    <div class="card-footer">
      <p class="genre">${[...movie.genre]}</p>
    </div> 
    `;

    this.movieCard.insertAdjacentHTML('afterbegin', html);
  }

  private renderVideoCard(movie: ConfigMovie) {
    const html = `
    <div class="card-header">
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

    <div class="card-body">
      <iframe
        width="100%"
        height="473.26"
        src="${movie.trailer}"
        frameborder="0"
      ></iframe>
    </div>
  `;

    this.videoCard.insertAdjacentHTML('afterbegin', html);
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
