class RegistrationView {
  showReg = document.querySelector('#showRegistration')! as HTMLSpanElement;
  regWrapper = document.querySelector(
    '.registration-wrapper'
  )! as HTMLDivElement;
  regForm = document.querySelector('#registrationForm')! as HTMLFormElement;
  loginWrapper = document.querySelector('.login-wrapper')! as HTMLDivElement;

  constructor() {
    this.showRegistration();
  }

  addHandlerSubmit(handler: Function) {
    this.regForm.addEventListener('submit', e => {
      e.preventDefault();

      const username = document.querySelector(
        '#registrationUsername'
      )! as HTMLInputElement;
      const email = document.querySelector(
        '#registrationEmail'
      )! as HTMLInputElement;
      const password = document.querySelector(
        '#registrationPassword'
      )! as HTMLInputElement;

      handler([username.value, email.value, password.value]);
    });
  }

  private showRegistration() {
    this.showReg.addEventListener('click', () => {
      this.loginWrapper.style.opacity = '0';
      this.loginWrapper.style.display = 'none';

      this.regWrapper.style.opacity = '100';
      this.regWrapper.style.transform = '1s ease';
      this.regWrapper.style.display = 'block';
    });
  }
}

export default new RegistrationView();
