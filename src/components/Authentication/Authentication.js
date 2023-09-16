import './Authentication.css';
import { Link } from 'react-router-dom';

function Authentication() {
  return (
    <nav className="authentication">
      <ul className="authentication__list">
        <li className="authentication__list-item">
          <Link to="/signup" className="authentication__link authentication__link_type_signup">Регистрация</Link>
        </li>
        <li className="authentication__list-item">
          <Link to="/signin" className="authentication__link authentication__link_type_signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Authentication;