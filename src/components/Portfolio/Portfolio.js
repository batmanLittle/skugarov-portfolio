import "./Portfolio.css";
import photo from "../../images/photo-portfolio.svg";

function Portfolion() {
  return (
    <div className="portfolio">
      <div className="portfolio__photo">
        <img src={photo} alt="" />
      </div>
      <div className="portfolio__title">
        <p className="portfolio__title_text-cv">CV</p>
        <h1 className="portfolio__title_right portfolio__title-right">
          АНТОН СКУГАРОВ
        </h1>
      </div>
      <div className="portfolio__title">
        <h1 className="portfolio__title-profession">
          <span>ДИЗАИНЕР</span> & ПРОЕКТИ
        </h1>
      </div>

      <h1>—РОВЩИК</h1>
      <h1>
        NA, EAR<span className="portfolio__spblue">TH</span>
      </h1>
      <div className="portfolio__block-red"></div>
      <h1>ЧТО СЕИЧАС ДЕЛАЮ,</h1>
      <h1 className="portfolio__title_right">ГДЕ РАБОТАЮ ———</h1>
      <h1 className="portfolio__title_right">
        <span>ЧЕМ ЗАНИМАЮСЬ</span>
      </h1>
      <h1 className="portfolio__title_right">
        <span>ВНЕ РАБОТЫ</span>
      </h1>

      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Portfolion;
