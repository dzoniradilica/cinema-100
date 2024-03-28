import { user } from '../models/User.js';
import { validator } from '../Validator.js';
import { session } from '../models/Session.js';

import registrationView from '../views/loginPageViews/registrationView.js';
import loginView from '../views/loginPageViews/loginView.js';

if (session.get(document.cookie.split('=')[0])) {
  window.location.href = '../../../homepage.html';
}

const controlRegistrationUser = async function (userData: string[]) {
  try {
    const [username, email, password] = userData;

    if (
      validator.validationPassed() &&
      username !== '' &&
      email !== '' &&
      password !== ''
    ) {
      const data = await user.create(email, username, password);

      session.create(data.id);

      window.location.href = '../../../homepage.html';
    } else {
      alert('Invalid registration!!!');
    }
  } catch (err) {
    console.log(err);
  }
};

const controlLoginUser = async function (userData: string[]) {
  const [email, password] = userData;

  await user.login(email, password);
};

const init = function () {
  registrationView.addHandlerRegistration(controlRegistrationUser);
  loginView.addHandlerLogin(controlLoginUser);
};

init();
