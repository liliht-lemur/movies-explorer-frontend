import Form from '../Form/Form';
import useFormValidation from '../../hooks/useFormValidation';
// import { VALIDATION } from '../../utils/constants';

function Login() {
  const {
    values,
    handleChange,
    isValid,
  } = useFormValidation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <main>
      <Form
        formTitle="Рады видеть!"
        buttonText="Войти"
        question="Ещё не зарегистрированы?"
        linkText="Регистрация"
        path="signup"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className="form__item">E-mail
          <input
            className="form__item-input"
            type="email"
            name="email"
            id="email"
            required
            minLength="8"
            maxLength="32"
            placeholder="E-mail"
            value={values.email || 'pochta@yandex.ru'}
            // pattern={VALIDATION.email.pattern}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>

        <label className="form__item">Пароль
          <input
            className="form__item-input form__item-input_error"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
            minLength="8"
            maxLength="32"
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;


