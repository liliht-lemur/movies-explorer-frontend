import './SearchForm.css';
import CheckboxSwitch from '../CheckboxSwitch/CheckboxSwitch';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEARCH_MESSAGE } from '../../utils/constants';
import useFormValidation from '../../hooks/useFormValidation';

function SearchForm({ handleSubmitSearch, handleChangeCheckbox, showError, isLoading }) {
  const { pathname } = useLocation();
  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
  } = useFormValidation();


  function handleSubmit(evt) {
    evt.preventDefault();
    isValid ? handleSubmitSearch(values.keyWord) : showError(SEARCH_MESSAGE.MESSAGE_EMPTY);
  }
  useEffect(() => {
    if (pathname === '/movies') {
      const storageKeyWord = localStorage.getItem('storageKeyWord');
      storageKeyWord && setValues({ keyWord: storageKeyWord });
      setIsValid(true);
    } else {
      setValues({ keyWord: '' });
    }
  }, [pathname]);


  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__form"
          name="search"
          onSubmit={handleSubmit}
        >
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              name='keyWord'
              id='keyWord'
              placeholder="Фильм"
              required
              minLength="1"
              maxLength="30"
              autoComplete="off"
              onChange={handleChange}
              disabled={isLoading}
              value={values.keyWord || ''}
            />
            <button
              className="search__submit-btn button"
              type="submit"
              aria-label="Кнопка поиска фильмов"
              disabled={isLoading}
            >
              Поиск
            </button>
          </div>

        </form>
        <div className='search__checkbox-container'>
          <CheckboxSwitch
            handleCheckbox={handleChangeCheckbox}
          />
        </div>
      </div>
    </section>
  );
}
export default SearchForm;
