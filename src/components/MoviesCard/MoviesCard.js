import './MoviesCard.css';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { convertDuration } from '../../utils/utils';
import CurrentUserContext from '../../context/CurrentUserContext';
import MainApi from '../../utils/MainApi';

const MoviesCard = ({ movie, saveStatus }) => {

  const { pathname } = useLocation();
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { nameRU, trailerLink, thumbnail, duration } = movie;

  // function handleSavedToggle(evt) {
  //   evt.target.classList.toggle('card__button_active');
  //   setIsSavedMovie(!isSavedMovie);
  // }

  useEffect(() => {
    setIsSaved(saveStatus.isSaved);
    setMainApiId(saveStatus.id);
  }, [saveStatus]);

  const handleSaveMovie = (evt) => {
    setIsLoading(true);
    MainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setIsSaved(true);
        evt.target.classList.toggle('card__button_active');
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteMovie = () => {
    setIsLoading(true);
    MainApi.deleteMovie(mainApiId)
      .then(() => {
        setSavedMovies(savedMovies.filter((data) => {
          return !(data._id === mainApiId);
        }));
        setIsSaved(false);

      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  function handleRemoveMovie(evt) {
    handleDeleteMovie(isSaved._id);
    evt.target.classList.toggle('card__button_active');
  }


  return (
    <li className="card">
      <div className="card__element">
        <p className="card__title">{nameRU}</p>
        <p className="card__duration">{convertDuration(duration)}</p>
      </div>
      <a className="card__image-container" href={trailerLink} target="blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={nameRU} className="card__image"></img>
      </a>
      <div className="card__buttons">
        {
          pathname === '/saved-movies' && (
            <button
              type="button"
              className="card__button card__button_delete"
              aria-label="Удалить"
              onClick={handleDeleteMovie}
              disabled={isLoading}
            />
          )
        }
        {
          pathname !== '/saved-movies'
          && (isSaved ? (
            <button
              className={`card__button card__button_save ${isSaved && savedMovies ? 'card__button_active' : ''}`}
              type="button"
              aria-label="Сохранён"
              onClick={handleRemoveMovie}
              disabled={isLoading}
            ></button>
          ) : (
            <button
              className="card__button card__button_save"
              type="button"
              aria-label="Сохранить"
              onClick={handleSaveMovie}
              disabled={isLoading}
            >
              Сохранить
            </button>
          ))
        }
      </div>
    </li>
  );
};

export default MoviesCard;
