import './MoviesCard.css';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  function handleSavedToggle(evt) {
    evt.target.classList.toggle('card__button_active');
    setIsSavedMovie(!isSavedMovie);
  }
  const { pathname } = useLocation();

  return (
    <li className="card">
      <div className="card__element">
        <p className="card__title">{card.title}</p>
        <p className="card__duration">{card.duration}</p>
      </div>
      <img src={card.image} alt={card.title} className="card__image"></img>
      <div className="card__buttons">
        {
          pathname === '/saved-movies' && (
            <button
              type="button"
              className="card__button card__button_delete"
              aria-label="Удалить"
            />
          )
        }
        {
          pathname !== '/saved-movies'
          && (isSavedMovie ? (
            <button
              className="card__button card__button_save"
              type="button"
              aria-label="Сохранён"
              onClick={handleSavedToggle}
            ></button>
          ) : (
            <button
              className="card__button card__button_save"
              type="button"
              aria-label="Сохранить"
              onClick={handleSavedToggle}
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
