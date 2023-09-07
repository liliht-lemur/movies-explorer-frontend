import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form(props) {
  const { children, formTitle, buttonText, question, path, linkText, onSubmit, isValid, } = props;

  return (
    <section className="form">
      <div className="form__wrapper">
        <Link to="/" className="form__link">
          <img className="form__logo" src={logo} alt="Логотип проекта"></img>
        </Link>
        <h2 className="form__title">{formTitle}</h2>
        <form
          className="form__inputs"
          // action=''
          // method=''
          onSubmit={onSubmit}
        >
          <div className="form__items"> {children} </div>
          <button
            type="submit"
            className="form__button"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
        <p className="form__text">
          {question}
          <Link
            to={`/${path}`}
            className="form__link"
          >
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Form;