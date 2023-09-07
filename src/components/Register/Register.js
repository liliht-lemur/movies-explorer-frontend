import Form from '../Form/Form';
import useFormValidation from '../../hooks/useFormValidation';
// import { VALIDATION } from '../../utils/constants';

function Register() {
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
        formTitle="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText="Войти"
        path="signin"
        onSubmit={handleSubmit}
        isValid={isValid}
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
            // defaultValue="Анастасия"
            value={values.username || "Анастасия"}
            // pattern={VALIDATION.username.pattern}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>

        <label className="form__item">E-mail
          <input
            className="form__item-input"
            type="email"
            name="email"
            id="email"
            minLength="8"
            maxLength="32"
            placeholder="E-mail"
            required
            // defaultValue="pochta@yandex.ru"
            value={values.email || "pochta@yandex.ru"}
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
            minLength="8"
            maxLength="32"
            placeholder="Пароль"
            required
            value={values.password || ''}
            onChange={handleChange}
          // defaultValue="••••••••••••••"
          />
          <span className="form__error form__error_active">Что-то пошло не так...</span>
        </label>
      </Form>
    </main>
  );
}

export default Register;