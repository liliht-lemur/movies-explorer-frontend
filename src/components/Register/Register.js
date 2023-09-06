import Form from '../Form/Form';

function Register() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Form
      formTitle="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      path="signin"
      onSubmit={handleSubmit}
    >
      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input
          className="form__item-input"
          type="text"
          name="name"
          id="name"
          required
          defaultValue="Анастасия"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className="form__item-input"
          type="email"
          name="email"
          id="email"
          required
          defaultValue="pochta@yandex.ru"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input
          type="password"
          name="password"
          id="password"
          className="form__item-input form__item-input_error"
          required
          defaultValue="••••••••••••••"
        />
        <span className="form__error form__error_active">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Register;