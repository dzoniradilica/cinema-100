import { session } from '../models/Session';
import { user } from '../models/User';
import { movies } from '../models/Movies';

import { paginationResults } from '../models/Movies';
import { moviesState } from '../models/Movies';

import showAndLogoutView from '../views/homepageViews/showAndLogoutView';
import displayMoviesView from '../views/homepageViews/displayMoviesView';
import paginationView from '../views/homepageViews/paginationView';
import displaySingleMovieView from '../views/homepageViews/displaySingleMovieView';
import searchMovieView from '../views/homepageViews/searchMovieView';
import { ConfigMovie } from '../configs/movie-config';

// If user dosen't have cookie reloaction to login page
if (!session.get(document.cookie.split('=')[0])) {
  window.location.href = '../../../loginPage.html';
}

// Show username in nav
const controlUsername = async function () {
  try {
    // Get user data
    const singleUser = await user.get(session.sessionId);

    // Send user data to showAndLogoutView
    showAndLogoutView.showUsername(singleUser);
  } catch (err) {
    console.log(err);
  }
};

const controlLogout = async function () {
  try {
    // Delete session and reloaction to login page
    await session.delete(document.cookie.split('=')[0]);
    window.location.href = '../../../loginPage.html';
  } catch (err) {
    console.log(err);
  }
};

const controlDisplayMovies = async function () {
  try {
    // Get all movies
    const allMovies = await movies.getAll();

    searchMovieView.allMovies = allMovies;

    // Send pagination movies to displayMoviesView
    displayMoviesView.displayMovies(await paginationResults(1));

    // Send movie data for render pagination btns
    displayMoviesView.showBtnsPagination(moviesState);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = async function (btnId: number) {
  // Send btn id to pagination function
  displayMoviesView.displayMovies(paginationResults(btnId));
};

const controlDisplaySingleMovie = async function () {};

const controlSearch = async function (searchedMovies: ConfigMovie[]) {
  try {
    moviesState.allMovies = searchedMovies;

    // Send pagination movies to displayMoviesView
    displayMoviesView.displayMovies(await paginationResults(1));

    // Send movie data for render pagination btns
    displayMoviesView.showBtnsPagination(moviesState);

    const parentElement = document.querySelector(
      '.movies-wrapper .col-md-10'
    )! as HTMLDivElement;

    // Render error message
    if (searchedMovies.length === 0) {
      parentElement.innerHTML = '<p class="error-message">No movies found</p>';
    }
  } catch (err) {
    console.log(err);
  }
};

const controlGenres = async function (searchedMovies: ConfigMovie[]) {
  try {
    moviesState.allMovies = searchedMovies;

    // Send pagination movies to displayMoviesView
    displayMoviesView.displayMovies(await paginationResults(1));

    // Send movie data for render pagination btns
    displayMoviesView.showBtnsPagination(moviesState);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlUsername();
  controlDisplayMovies();
  showAndLogoutView.addHandlerLogoutUser(controlLogout);
  paginationView.addHandlerPagination(controlPagination);
  displaySingleMovieView.addHandlerDisplayMovie(controlDisplaySingleMovie);
  searchMovieView.addHandlerSearch(controlSearch);
  searchMovieView.addHandlerGenres(controlGenres);
};

init();
