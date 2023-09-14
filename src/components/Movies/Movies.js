// import cards from '../../utils/Movies.js';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesApi from '../../utils/MoviesApi';
import { SEARCH_MESSAGE } from '../../utils/constants';
import { findTheMovies, buildMovieCard } from '../../utils/utils';

function Movies() {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [keyWord, setKeyWord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [searchedMovies, setSearchedMovies] = useState([]);
  const vaultAllMovies = JSON.parse(localStorage.getItem('vaultAllMovies')) || [];

  useEffect(() => {
    const vaultSearchResult = JSON.parse(localStorage.getItem('vaultSearchResult')) || [];
    const vaultIsShort = JSON.parse(localStorage.getItem('vaultIsShort')) || false;
    const vaultKeyWord = localStorage.getItem('vaultKeyWord') || '';

    vaultSearchResult && setSearchedMovies(vaultSearchResult);
    vaultIsShort && setIsShortMovies(vaultIsShort);
    vaultKeyWord && setKeyWord(vaultKeyWord);

  }, []);

  const getFoundMovies = (keyWord, isShortMovies) => {
    if (!vaultAllMovies.length) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((allMovies) => {
          const builtMoviesPack = buildMovieCard(allMovies);
          const filteredMovies = keyWord
            ? findTheMovies(builtMoviesPack, keyWord, isShortMovies)
            : [];

          localStorage.setItem('vaultAllMovies', JSON.stringify(builtMoviesPack));
          handleSearchResult(filteredMovies);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(SEARCH_MESSAGE.MESSAGE_SEARCH_ERROR);
        })
        .finally(() => setIsLoading(false));
    } else {
      const pickedMovies = keyWord
        ? findTheMovies(vaultAllMovies, keyWord, isShortMovies)
        : [];

      handleSearchResult(pickedMovies);
    }
  };

  const handleSubmitSearch = (keyWord) => {
    setKeyWord(keyWord);
    localStorage.setItem('vaultKeyWord', keyWord);

    getFoundMovies(keyWord, isShortMovies);
  };

  const handleSearchResult = (movies) => {
    setSearchedMovies(movies);
    localStorage.setItem('vaultSearchResult', JSON.stringify(movies));

    !movies.length
      ? setErrorMessage(SEARCH_MESSAGE.MESSAGE_NOT_FOUND)
      : setErrorMessage('');
  }

  const handleToggleCheckbox = (isChecked) => {
    setIsShortMovies(isChecked);
    localStorage.setItem('vaultIsShort', isChecked);

    getFoundMovies(keyWord, isChecked);
  };

  const renderMoviesCardList = () => {
    if (errorMessage.length) {
      return <p className='cards__search-message'>{errorMessage}</p>;
    }
    return (
      <MoviesCardList movies={searchedMovies} />
    )
  };


  return (
    <main className="movies">
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleToggleCheckbox}
        showError={setErrorMessage}
        isLoading={isLoading}
      />
      {isLoading ? <Preloader /> : renderMoviesCardList()}
    </main>
  );
}

export default Movies;
