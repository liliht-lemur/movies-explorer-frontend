import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2020</p>
        <nav className="footer__navigation">
          <ul className="footer__navigation-list">
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="https://github.com/liliht-lemur/" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;