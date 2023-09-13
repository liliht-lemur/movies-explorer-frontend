import Form from '../Form/Form';
import useFormValidation from '../../hooks/useFormValidation';

function Login({ handleLogin, isLoading }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(
      values.email,
      values.password,
    );
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
            value={values.email || ''}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className={`form__error ${errors.email ? 'form__error_active' : ''}`} id="email-error">{errors.email}</span>
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
          <span className={`form__error ${errors.password ? 'form__error_active' : ''}`} id="password-error">{errors.password}</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;


