import './SearchForm.css';
import CheckboxSwitch from '../CheckboxSwitch/CheckboxSwitch';

function SearchForm() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search">
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              name="search-movies"
              placeholder="Фильм"
              required
              autoComplete="off"
            />
            <button
              className="search__submit-btn button"
              type="submit"
              aria-label="Кнопка поиска фильмов"
              onClick={handleSubmit}
            >
              Поиск
            </button>
          </div>

        </form>
        <div className='search__checkbox-container'>
          <CheckboxSwitch />
        </div>
      </div>
    </section>
  );
}
export default SearchForm;