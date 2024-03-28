class PaginationView {
  rightArrow = document.querySelector('.right-arrow')! as HTMLButtonElement;
  leftArrow = document.querySelector('.left-arrow')! as HTMLButtonElement;
  parentElement = document.querySelector(
    '.movies-wrapper .col-md-10'
  )! as HTMLDivElement;
  btnsWrapper = document.querySelector('.btns-numbers')! as HTMLDivElement;

  addHandlerPagination(handler: Function) {
    this.rightArrow.addEventListener('click', e => {
      this.parentElement.innerHTML = '';

      let btnId = +(e.target! as HTMLButtonElement).dataset.currentBtn!;

      btnId++;

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

      this.leftArrow.setAttribute('data-current-btn', String(btnId));

      const changeBtn = Array.from(paginationBtns).find(
        btn => +btn.dataset.currentBtn! === +btnId
      )!;

      paginationBtns.forEach(btn => {
        btn.classList.remove('--active');
      });

      changeBtn.classList.add('--active');

      handler(+btnId);
    });

    this.leftArrow.addEventListener('click', e => {
      this.parentElement.innerHTML = '';

      let btnId = +(e.target! as HTMLButtonElement).dataset.currentBtn!;

      const paginationBtns = (
        (e.target! as HTMLButtonElement).nextElementSibling as HTMLDivElement
      ).querySelectorAll('.pagination-btn') as NodeListOf<HTMLButtonElement>;

      if (btnId === 1) {
        (e.target! as HTMLButtonElement).setAttribute(
          'data-current-btn',
          String(paginationBtns.length + 1)
        );

        btnId = paginationBtns.length + 1;
      }

      btnId--;

      (e.target! as HTMLButtonElement).setAttribute(
        'data-current-btn',
        String(btnId)
      );

      this.rightArrow.setAttribute('data-current-btn', String(btnId));
      const changeBtn = Array.from(paginationBtns).find(
        btn => +btn.dataset.currentBtn! === +btnId
      )!;

      paginationBtns.forEach(btn => {
        btn.classList.remove('--active');
      });

      changeBtn.classList.add('--active');

      handler(+btnId);
    });

    this.btnsWrapper.addEventListener('click', e => {
      if (
        (e.target! as HTMLButtonElement).classList.contains('pagination-btn')
      ) {
        this.parentElement.innerHTML = '';

        const btn = e.target! as HTMLButtonElement;
        const btnId = btn.dataset.currentBtn!;
        const allBtns = (
          btn.closest('.btns-numbers')! as HTMLDivElement
        ).querySelectorAll('.pagination-btn')! as NodeListOf<HTMLButtonElement>;

        allBtns.forEach(btn => {
          btn.classList.remove('--active');
        });

        btn.classList.add('--active');

        this.rightArrow.setAttribute('data-current-btn', String(btnId));
        this.leftArrow.setAttribute('data-current-btn', String(btnId));

        handler(+btnId);
      }
    });
  }
}

export default new PaginationView();
