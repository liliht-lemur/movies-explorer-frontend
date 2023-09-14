import Form from '../Form/Form';
import useFormValidation from '../../hooks/useFormValidation';

function Register({ handleRegister, isLoading }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(
      values.name,
      values.email,
      values.password,
    );
  };

  return (
    <main>
      <Form
        formTitle="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText="Войти"
        path="signin"
        onSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
      >
        <label className="form__item">Имя
          <input
            className="form__item-input"
            type="text"
            name="name"
            id="name"
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            required
            value={values.name || ""}
            onChange={handleChange}
            autoComplete="off"
            disabled={isLoading}
          />
          <span className={`form__error ${errors.name ? "form__error_active" : ''}`} id="username-error">{errors.name}</span>
          {/* <span className="form__error" id="username-error">{errors.name}</span> */}
        </label>

        <label className="form__item">E-mail
          <input
            className="form__item-input"
            type="email"
            name="email"
            id="email"
            minLength="5"
            maxLength="32"
            placeholder="E-mail"
            required
            value={values.email || ""}
            onChange={handleChange}
            autoComplete="off"
            disabled={isLoading}
          />
          <span className={`form__error ${errors.email ? 'form__error_active' : ''}`} id="email-error">{errors.email}</span>
          {/* <span className="form__error" id="email-error">{errors.email}</span> */}
        </label>

        <label className="form__item">Пароль
          <input
            className="form__item-input form__item-input_error"
            type="password"
            name="password"
            id="password"
            minLength="8"
            maxLength="32"
            placeholder="Пароль"
            required
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className={`form__error ${errors.password ? 'form__error_active' : ''}`} id="password-error">{errors.password}</span>
        </label>
      </Form>
    </main>
  );
}

export default Register;