class DisplaySingleMovieView {
  // seeMoreBtn = document.querySelector('.#seeMore')
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;

  addHandlerDisplayMovie(handler: Function) {
    let observer = new MutationObserver(mutations => {
      if (mutations.length === 1) {
        const changedParent = mutations[0].target;

        changedParent.addEventListener('click', e => {
          e.preventDefault();

          if ((e.target! as HTMLAnchorElement).classList.contains('seeMore')) {
            e.preventDefault();

            const btn = e.target! as HTMLAnchorElement;
            window.location.href = `${btn.href}`;
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
