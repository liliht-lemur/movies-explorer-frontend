import './AboutMe.css';
import kotik from '../../images/kotik.jpeg';
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__wrapper'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__description'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Анастасия</h3>
            <p className='about-me__job'>Фронтенд-разработчик</p>
            <p className="about-me__text">
              Существует огромное количество причин, почему стоит научиться программировать. Программирование помогает существенно упростить жизнь и возложить выполнение рутинных действий на плечи машинного разума. Изучение программирования — это вечный процесс. IT-сектор развивается настолько стремительно, что очень трудно поспеть за всё новыми, набирающими популярность трендами. Появляются новые инструменты, добавляются различные фичи, одни фреймворки сменяются другими, что-то «умирает», а что-то, наоборот, получает второе дыхание... и так бесконечно. Программирование — это непрерывный процесс обучения, с помощью которого мы всегда познаём что-то новое и интересное.
            </p>
            <a href='https://github.com/liliht-lemur/' className='about-me__link' target='_blank' rel="noreferrer">Github</a>
          </div>
          <img src={kotik} alt='Анастасия' className='about-me__photo' />
        </div>
        <Portfolio />
      </div>
    </section>
  )
};

export default AboutMe;