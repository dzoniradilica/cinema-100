import { ConfigMovie } from '../../configs/movie-config';

class DisplaySingleMovieView {
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;
  allMovies: any;

  addHandlerDisplayMovie(handler: Function) {
    let observer = new MutationObserver(mutations => {
      if (mutations.length === 1) {
        const changedParent = mutations[0].target;

        changedParent.addEventListener('click', e => {
          e.preventDefault();

          if ((e.target! as HTMLAnchorElement).classList.contains('seeMore')) {
            e.preventDefault();

            const btn = e.target! as HTMLAnchorElement;

            const allMovies: ConfigMovie[] = this.allMovies;

            const singleMovie = allMovies.find(
              movie => movie.imdbid === btn.href.slice(-9)
            );

            window.location.href = `../../../../../moviePage.html`;

            console.log(singleMovie);
          }
        });
      } else {
        const changedParent = mutations[1].target;

        console.log(changedParent);
      }
    });

    observer.observe(this.parentElement, { childList: true, subtree: true });

    handler();
  }
}

export default new DisplaySingleMovieView();
