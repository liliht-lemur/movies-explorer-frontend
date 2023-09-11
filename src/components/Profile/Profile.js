import './Profile.css';
import React from 'react';
import { useState, useContext, useRef } from 'react';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import { VALIDATION, AppMessage } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

const Profile = ({ signOut, setTooltipSettings, setInfoTooltipPopupOpen }) => {
  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.currentUser);

  const initialValues = {
    name: userData.name,
    email: userData.email,
  };

  const [currentError, setCurrentError] = useState('');
  const nameInputRef = useRef(false);

  const {
    values, handleChange, errors, resetForm, isValid,
  } = useFormValidation({});
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  async function handleClickEditProfile(evt) {
    evt.preventDefault();
    await setIsEditProfile(true);
    nameInputRef.current.focus();
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    setCurrentError('');
    setIsLoading(true);
    setUserData({
      name: values.name,
      email: values.email,
    });

    MainApi.changeUserInfo({
      name: values.name,
      email: values.email,
    })
      .then((data) => {
        setCurrentError('');
        setIsEditProfile(false);
        setInfoTooltipPopupOpen(true);
        setTooltipSettings({
          message: AppMessage.UPDATE_SUCCESS,
          isSuccess: true,
        })
        resetForm({
          name: data.name,
          email: data.email,
        })
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message: AppMessage.BAD_REQUEST,
          isSuccess: false,
        })
        setInfoTooltipPopupOpen(true);
        setCurrentError(message);
      })
      .finally(() => setIsLoading(false))
  }

  const isButtonActive = isValid
    && !isLoading
    && (values.name !== initialValues.name || values.email !== initialValues.email);

  return (
    <main className="profile">
      <section className="profile__container">
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <h3 className="profile__title">{`Привет, ${userData.name}!`}</h3>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <div className="profile__value profile__value_type_name">
              <input
                className="profile__value-input"
                id="name"
                name="name"
                type="text"
                ref={nameInputRef}
                minLength="2"
                maxLength="30"
                placeholder="Имя"
                required
                disabled={isLoading || !isEditProfile}
                autoComplete="off"
                value={values.name || " "}
                onChange={handleChange}
                errors={errors.name}
              // pattern={VALIDATION.name.pattern}
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
                required
                disabled={isLoading || !isEditProfile}
                value={values.email || " "}
                onChange={handleChange}
                errors={errors.email}
              // pattern={VALIDATION.email.pattern}
              />
            </div>
            <p className="profile__text">E-mail</p>
          </div>
          {isLoading ? <Preloader /> : ''}
          {isEditProfile ? (
            <div className="profile__button">
              {
                <span className="profile__error">
                  {errors.name || errors.email}
                </span>
              }
              <button
                className="profile__button-save"
                type="submit"
                aria-label="Кнопка сохранить"
                disabled={!isButtonActive}
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
                onClick={signOut}
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