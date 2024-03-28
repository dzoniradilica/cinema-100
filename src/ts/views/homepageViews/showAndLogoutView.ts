import { ConfigUser } from '../../configs/user-config';

class showAndLogoutView {
  username = document.querySelector('#username')! as HTMLSpanElement;
  logoutBtn = document.querySelector('#logout')! as HTMLImageElement;

  showUsername(singleUser: ConfigUser) {
    this.username.innerHTML = singleUser.username;
  }

  addHandlerLogoutUser(handler: Function) {
    this.logoutBtn.addEventListener('click', () => {
      handler();
    });
  }
}

export default new showAndLogoutView();
