import { ConfigMovie } from '../../configs/movie-config';
import { ConfigPagination } from '../../configs/pagination-config';

class DisplayMoviesView {
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;
  paginationBtnsWrapper = document.querySelector(
    '.btns-numbers'
  )! as HTMLDivElement;

  displayMovies(allMovies: ConfigMovie[]) {
    this.parentElement.innerHTML = '';
    const html = allMovies
      .map(movie => {
        return `
        <div class="col-md-3">
            <div class="movie-card">
                 <a class="seeMore" href="homepage/${movie.imdbid}">See more</a>
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
                    <span style="font-size:14px;color:yellow;">&starf;</span>
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

  showBtnsPagination(data: ConfigPagination) {
    const numPages = Math.ceil(data.allMovies.length / data.resultsPerPage);

    for (let i = 0; i < numPages; i++) {
      this.paginationBtnsWrapper.innerHTML += `<button class="pagination-btn" data-current-btn="${
        i + 1
      }">${i + 1}</button>`;
    }

    this.paginationBtnsWrapper
      .querySelector('.pagination-btn')
      ?.classList.add('--active');
  }
}

export default new DisplayMoviesView();
