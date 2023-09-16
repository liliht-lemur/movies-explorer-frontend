import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import akk from '../../images/akk.svg';
import useClose from '../../hooks/useClose';

const Navigation = ({ onOverlayClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useClose(isMenuOpen, () => { setIsMenuOpen(false) });

  return (
    <nav className="navigation" onClick={onOverlayClick}>
      <button className="navigation__btn-menu" type="button" onClick={handleToggleMenu}></button>
      <div className={`navigation__wrapper ${isMenuOpen ? 'navigation__wrapper_visible' : ''}`}>
        <nav className="navigation__container">
          <div className="navigation__list-wrapper">
            <button className="navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item_type_main">
                <Link
                  to="/"
                  className="navigation__link"
                  onClick={() => { setIsMenuOpen(false) }}>
                  Главная
                </Link>
              </li>
              <li className="navigation__list-item">
                <NavLink
                  to="/movies"
                  className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''
                    }`
                  }
                  onClick={() => { setIsMenuOpen(false) }}>
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''
                    }`
                  }
                  onClick={() => { setIsMenuOpen(false) }}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/profile"
            className="navigation__link navigation__link_type_profile"
            onClick={() => { setIsMenuOpen(false) }}>
            Аккаунт
            <div className="navigation__account">
              <img
                className="navigation__account-img"
                src={akk}
                alt="Ссылка на профиль"
              ></img>
            </div>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;

