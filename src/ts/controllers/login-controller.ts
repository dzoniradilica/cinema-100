import { user } from '../models/User.js';
import { validator } from '../Validator.js';
import { session } from '../models/Session.js';

import registrationView from '../views/loginPageViews/registrationView.js';

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

const init = function () {
  registrationView.addHandlerSubmit(controlRegistrationUser);
};

init();

const idk = async function () {
  const url = await fetch(
    'https://api.themoviedb.org/3/movie/157336?api_key=8d8020ec49fb41dfe970d8bbe92fdd07'
  );

  const data = await url.json();

  console.log(data);
};

idk();
