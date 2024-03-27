class LoginView {
  loginForm = document.querySelector('#loginForm')! as HTMLFormElement;

  addHandlerLogin(handler: Function) {
    this.loginForm.addEventListener('submit', e => {
      e.preventDefault();

      const email = document.querySelector('#loginEmail')! as HTMLInputElement;
      const password = document.querySelector(
        '#loginPassword'
      )! as HTMLInputElement;

      handler([email.value, password.value]);
    });
  }
}

export default new LoginView();
