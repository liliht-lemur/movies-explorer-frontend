import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({ cards }) => {
  const { pathname } = useLocation();
  const handleMoreMovieClick = () => { };

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
      <div className="cards__list-more">
        {pathname === '/movies' && (
          <button
            className="cards__button"
            type="button" name="more"
            onClick={handleMoreMovieClick}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;