import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className='about-project__wrapper'>
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__descr">
            <h3 className="about-project__descr-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__descr-text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__descr">
            <h3 className="about-project__descr-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__descr-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__content">
          <div className="about-project__table">
            <h4 className="about-project__table-title">1 неделя</h4>
            <p className="about-project__table-text">Back-end</p>
          </div>
          <div className="about-project__table">
            <h4 className="about-project__table-title about-project__table-title_type_dark">4 недели</h4>
            <p className="about-project__table-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;






