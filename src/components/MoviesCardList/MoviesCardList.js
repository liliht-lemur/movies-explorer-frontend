import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import { BREAK_POINT_WIDTH, SHOW_CARD_LIMIT } from '../../utils/constants';
import useResize from '../../hooks/useResize';


const MoviesCardList = ({ movies }) => {
  const { pathname } = useLocation();
  const { savedMovies } = useContext(CurrentUserContext);

  const [movieCardLimit, setMovieCardLimit] = useState(0);
  const [isMoreButton, setIsMoreButton] = useState(false);

  const windowWidth = useResize();
  useEffect(() => {
    if (pathname === '/movies') {
      movies.length > movieCardLimit ? setIsMoreButton(true) : setIsMoreButton(false);
    } else {
      setIsMoreButton(false);
    }
  }, [pathname, movies.length, movieCardLimit]);

  useEffect(() => {
    if (windowWidth <= BREAK_POINT_WIDTH.MOBILE) {
      setMovieCardLimit(SHOW_CARD_LIMIT.MOBILE);
    } else if (windowWidth <= BREAK_POINT_WIDTH.TABLET) {
      setMovieCardLimit(SHOW_CARD_LIMIT.TABLET);
    } else {
      setMovieCardLimit(SHOW_CARD_LIMIT.DESKTOP);
    }
  }, [windowWidth, movies.length]);

  const handleMoreMovieClick = () => {
    setMovieCardLimit((current) => {
      if (windowWidth <= BREAK_POINT_WIDTH.TABLET) {
        return current + 2;
      }
      return current + 3;
    })
  };

  const checkIsSaved = (movie) => {
    const targetMovie = savedMovies.find((film) => film.movieId === movie.movieId);
    return targetMovie
      ? { isSaved: true, id: targetMovie._id }
      : { isSaved: false, id: '' }
  };

  const renderMovieCards = () => {
    if (pathname === '/movies') {
      return movies.length ? movies.slice(0, movieCardLimit).map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          saveStatus={checkIsSaved(movie)}
        />
      )) : '';
    } else {
      return movies.length ? movies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          saveStatus={{ isSaved: true, id: movie._id }}
        />
      )) : '';
    }
  };


  return (
    <section className="cards">
      <ul className="cards__list">
        {renderMovieCards()}
      </ul>
      <div className="cards__list-more">
        {isMoreButton ?
          <button
            className="cards__button"
            type="button" name="more"
            onClick={handleMoreMovieClick}>
            Ещё
          </button> : ''}
      </div>
    </section>
  );
};

export default MoviesCardList;
