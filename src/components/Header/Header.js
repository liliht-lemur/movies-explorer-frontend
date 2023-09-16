import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Authentication from '../Authentication/Authentication';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? 'header_type_auth' : ''}`}>
      <div className='header__wrapper'>
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="Логотип проекта"></img>
        </Link>
        {!loggedIn && <Authentication />}
        {loggedIn && <Navigation />}
      </div>
    </header>
  );
};

export default Header;