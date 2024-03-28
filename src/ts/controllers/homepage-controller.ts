import { session } from '../models/Session';
import { user } from '../models/User';

import showAndLogoutView from '../views/homepageViews/showAndLogoutView';

if (!session.get(document.cookie.split('=')[0])) {
  window.location.href = '../../../loginPage.html';
}

const controlUsername = async function () {
  try {
    const singleUser = await user.get(session.sessionId);

    showAndLogoutView.showUsername(singleUser);
  } catch (err) {
    console.log(err);
  }
};

const controlLogout = async function () {
  try {
    await session.delete(document.cookie.split('=')[0]);
    window.location.href = '../../../loginPage.html';
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlUsername();
  showAndLogoutView.addHandlerLogoutUser(controlLogout);
};

init();

// const idk = async function () {
//   const res = await fetch(`https://65fb1a4614650eb210095a6f.mockapi.io/movies`);
//   const data = await res.json();

//   console.log(data);
// };

// idk();
