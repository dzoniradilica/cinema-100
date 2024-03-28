class PaginationView {
  rightArrow = document.querySelector('.right-arrow')! as HTMLButtonElement;
  leftArrow = document.querySelector('.left-arrow')! as HTMLButtonElement;
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;
  //   paginationBtns = document.querySelectorAll(
  //     '.pagination-btn'
  //   )! as NodeListOf<HTMLButtonElement>;

  addHandlerPagination(handler: Function) {
    this.rightArrow.addEventListener('click', e => {
      this.parentElement.innerHTML = '';

      let btnId = +(e.target! as HTMLButtonElement).dataset.currentBtn!;

      btnId++;
      console.log(btnId);

      (e.target! as HTMLButtonElement).setAttribute(
        'data-current-btn',
        String(btnId)
      );

      const paginationBtns = (
        (e.target! as HTMLButtonElement)
          .previousElementSibling as HTMLDivElement
      ).querySelectorAll('.pagination-btn') as NodeListOf<HTMLButtonElement>;

      if (btnId > paginationBtns.length) {
        (e.target! as HTMLButtonElement).setAttribute(
          'data-current-btn',
          String(1)
        );

        btnId = 1;
      }

      handler(+btnId);
    });

    handler();
  }
}

export default new PaginationView();
