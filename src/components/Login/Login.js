import Form from '../Form/Form';

function Login() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Form
      formTitle="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      path="signup"
      onSubmit={handleSubmit}
    >
      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className="form__item-input"
          type="email"
          name="email"
          id="email"
          defaultValue="pochta@yandex.ru"
          required
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input
          className="form__item-input form__item-input_error"
          type="password"
          name="password"
          id="password"
          required
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Login;


