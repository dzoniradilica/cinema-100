import { ConfigMovie } from '../../configs/movie-config';

class DisplayMoviesView {
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;

  displayMovies(allMovies: ConfigMovie[]) {
    const html = allMovies
      .map(movie => {
        return `
        <div class="col-md-3">
            <div class="movie-card">
                 <a id="seeMore" href="${movie.imdbid}">See more</a>
                <div class="image-wrapper">
                <img
                    class="movie-img"
                    src="${movie.image}"
                    alt="movie-image"
                />
                </div>

                <h4 class="movie-name">${movie.title}</h4>
                <div class="movie-info">
                <span class="year">${movie.year}</span>

                <div class="rating">
                    <span>${movie.rating}</span>
                </div>

                <span class="genre">${[...movie.genre]}</span>
                </div>
            </div>
        </div>
        `;
      })
      .join('');

    this.parentElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new DisplayMoviesView();
