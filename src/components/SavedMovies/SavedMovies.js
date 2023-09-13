import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import savedMovies from '../../utils/savedMovies';
import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import { findTheMovies } from '../../utils/utils';
import { SEARCH_MESSAGE } from '../../utils/constants';

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useState({
    keyWord: '',
    isShort: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const getFoundMovies = (keyWord, isShort) => {
    const filteredMovies = findTheMovies(savedMovies, keyWord, isShort);

    !filteredMovies.length || !savedMovies.length
      ? setErrorMessage(!filteredMovies.length ? SEARCH_MESSAGE.MESSAGE_NOT_FOUND : SEARCH_MESSAGE.MESSAGE_NOT_SAVED)
      : setErrorMessage('');

    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(savedMovies);
    getFoundMovies(searchParams.keyWord, searchParams.isShort);
    !savedMovies.length ? setErrorMessage(SEARCH_MESSAGE.MESSAGE_NOT_SAVED) : setErrorMessage('');
  }, [savedMovies]);

  const handleSubmitSearch = (word) => {
    setSearchParams({ ...searchParams, keyWord: word });
    getFoundMovies(word, searchParams.isShort);
  };

  const handleToggleCheckbox = (isChecked) => {
    setSearchParams({ ...searchParams, isShort: isChecked });
    getFoundMovies(searchParams.keyWord, isChecked);
  };

  const renderMoviesCardList = () => {
    if (errorMessage.length) {
      return <p className='cards__search-message'>{errorMessage}</p>;
    }
    return (
      <MoviesCardList movies={movies} />
    )
  };

  return (
    <main className="saved-movies">
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleToggleCheckbox}
        showError={setErrorMessage}
      />
      {renderMoviesCardList()}
    </main>
  );
};

export default SavedMovies;
