import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>

      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://liliht-lemur.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className='portfolio__name'>Статичный сайт</p>
            <img className='portfolio__img' src={arrow} alt='Указательная стрелка'></img>
          </a>

        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href=" https://liliht-lemur.github.io/emi/" target="_blank" rel="noreferrer">
            <p className='portfolio__name'>Адаптивный сайт</p>
            <img className='portfolio__img' src={arrow} alt='Указательная стрелка'></img>
          </a>

        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href=" https://github.com/liliht-lemur/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            <p className='portfolio__name'>Одностраничное приложение</p>
            <img className='portfolio__img' src={arrow} alt='Указательная стрелка'></img>
          </a>

        </li>
      </ul>
    </section>
  );
};

export default Portfolio;