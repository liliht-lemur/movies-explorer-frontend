import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { APP_MESSAGE } from '../../utils/constants';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';


const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: '',
    isSuccess: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (loggedIn && jwt) {
      MainApi.setToken();
      Promise
        .all([
          MainApi.getUserInfo(jwt),
          MainApi.getSavedMovies()
        ])
        .then(([me, apiSavedMovies]) => {
          setCurrentUser(me);
          setSavedMovies(apiSavedMovies.filter((film) => film.owner === me._id));
        })
        .catch(async (err) => {
          const { message } = await err.json();

          setTooltipSettings({
            message,
            isSuccess: false,
          });
          setInfoTooltipPopupOpen(true);
        })
        .finally(() => {
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt && !Object.keys(currentUser).length) {
      MainApi.getUserInfo(jwt)
        .then((response) => {
          setLoggedIn(true);
          setCurrentUser({
            email: response.email,
            name: response.name
          });
        })
        .catch(err => {
          console.log(err)

          handleSignOut();
        })
    }
  }, [navigate, currentUser]);

  const closeAllPopups = () => {
    setInfoTooltipPopupOpen(false);
    setIsMenuOpen(false);
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  const handleSingIn = (email, password) => {
    setIsLoading(true);
    MainApi
      .singIn(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setTooltipSettings({
          message: APP_MESSAGE.MESSAGE_SUCCESS,
          isSuccess: true,
        });
        setInfoTooltipPopupOpen(true);
      })
      .catch(async (err) => {
        const { message } = await err.json();

        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleSignUp = async (name, email, password) => {
    setIsLoading(true);
    await MainApi
      .signUp(name, email, password)
      .then(() => {
        handleSingIn(email, password);
      })
      .catch(async (err) => {
        const { message } = await err.json();

        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoading(false);
    closeAllPopups();
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}>
      <div className='app'>
        <Routes>
          <Route
            path='/signin'
            element={
              loggedIn ?
                <Navigate to='/movies' />
                :
                <Login handleLogin={handleSingIn} isLoading={isLoading} />
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ?
                <Navigate to='/movies' />
                :
                <Register handleRegister={handleSignUp} isLoading={isLoading} />}
          />
          <Route
            exact path='/'
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  handleOverlayClick={handleOverlayClick}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            exact path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    handleOverlayClick={handleOverlayClick}
                  />
                  <Movies />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    handleOverlayClick={handleOverlayClick}
                  />
                  <SavedMovies />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    handleOverlayClick={handleOverlayClick}
                  />
                  <Profile
                    signOut={handleSignOut}
                    setTooltipSettings={setTooltipSettings}
                    setInfoTooltipPopupOpen={setInfoTooltipPopupOpen}
                  />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          tooltipSettings={tooltipSettings}
          onOverlayClick={handleOverlayClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
