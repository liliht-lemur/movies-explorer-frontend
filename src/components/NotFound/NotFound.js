import './NotFound.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__link" onClick={() => navigate(-1)}>Назад</Link>
    </div>
  );
};

export default NotFound;