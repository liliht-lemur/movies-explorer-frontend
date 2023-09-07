import './Profile.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
// import { VALIDATION } from '../../utils/constants';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const {
    values, handleChange, errors, isValid,
  } = useFormValidation({});
  const userName = 'Анастасия';

  function handleClickEditProfile(evt) {
    evt.preventDefault();
    setIsEditProfile(true);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    setIsEditProfile(false);
  }

  return (
    <main className="profile">
      <section className="profile__container">
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <h3 className="profile__title">{`Привет, ${userName}!`}</h3>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <div className="profile__value profile__value_type_name">
              <input
                className="profile__value-input"
                id="name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                placeholder="Имя"
                // defaultValue="Анастасия"
                required
                disabled={!isEditProfile && true}
                autoComplete="off"
                value={values.name || "Анастасия"}
                onChange={handleChange}
                errors={errors.name}
              // pattern={VALIDATION.username.pattern}
              />
            </div>
            <div className="profile__value profile__value_type_email">
              <input
                className="profile__value-input"
                id="email"
                name="email"
                type="email"
                minLength="8"
                maxLength="32"
                placeholder="E-mail"
                // defaultValue="pochta@pochta.ru"
                required
                disabled={!isEditProfile && true}
                value={values.email || "pochta@pochta.ru"}
                onChange={handleChange}
                errors={errors.email}
              // pattern={VALIDATION.email.pattern}
              />
            </div>
            <p className="profile__text">E-mail</p>
          </div>
          {isEditProfile ? (
            <div className="profile__button">
              {
                <span className="profile__error">
                  При обновлении профиля произошла ошибка.
                </span>
              }
              <button
                className="profile__button-save"
                type="submit"
                aria-label="Кнопка сохранить"
                disabled={!isValid}
              >
                Сохранить
              </button>
            </div>
          ) : (
            <div className="profile__button">
              <button
                type="button"
                className="profile__button-edit"
                onClick={handleClickEditProfile}
                aria-label="Редактировать профиль"
              >
                Редактировать
              </button>
              <Link
                to="/"
                className="profile__link"
              >
                Выйти из аккаунта
              </Link>
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Profile;