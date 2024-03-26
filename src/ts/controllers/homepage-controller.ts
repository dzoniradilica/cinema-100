import { session } from '../models/Session';

if (!session.get(document.cookie.split('=')[0])) {
  window.location.href = '../../../loginPage.html';
}
