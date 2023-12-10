import "./Portfolio.css";
import photo from "../../images/photo-portfolio.svg";
import React, { useState, useEffect } from "react";
function Portfolion() {
  const [mobileScreen, setMobileScreen] = useState(false);

  const display = window.innerWidth;

  function displaydd() {
    if (display == 320) {
      setMobileScreen(true);
    }
    if (display > 321) {
      setMobileScreen(false);
    }
  }

  useEffect(() => {
    displaydd();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", displaydd);
  });

  return (
    <div className="portfolio">
      <div className="portfolio__photo">
        <img className="portfolio__photo_img" src={photo} alt="" />
      </div>
      <div className="portfolio__title">
        <p className="portfolio__title_text-cv">CV</p>
        <h1 className="portfolio__title_one">АНТОН СКУГАРОВ</h1>
      </div>
      {!mobileScreen ? (
        <h1 className="portfolio__title_two">
          <span>ДИЗАИНЕР</span> & ПРОЕКТИ
        </h1>
      ) : (
        <h1 className="portfolio__title_two">
          <span>ДИЗАИНЕР</span> & ПРО
        </h1>
      )}

      {!mobileScreen ? (
        <div className="portfolio__title">
          <h1 className="portfolio__title_three">—РОВЩИК</h1>
          <p className="portfolio__title_text-write">НАПИСАТЬ МНЕ</p>
          <p className="portfolio__title_text-blog">БЛОГ</p>
        </div>
      ) : (
        <div className="portfolio__title">
          <h1 className="portfolio__title_three">—ЕКТИРОВЩИК</h1>
          <p className="portfolio__title_text-write">НАПИСАТЬ МНЕ</p>
          <p className="portfolio__title_text-blog">БЛОГ</p>
        </div>
      )}

      <div className="portfolio__title">
        <h1 className="portfolio__title_four">
          NA, EAR<span className="portfolio__spblue">TH</span>
        </h1>
        <div className="portfolio__title_four_text">
          <p>Нравится делать удобно и красиво, зная</p>
          <p>подкапот, цели и прочие продуктовые</p>
          <p>штуки. Команда -</p>
          <p className="portfolio__title_four_text-left">
            важно. Верю, что люди
          </p>
          <p className="portfolio__title_four_text-right">
            умножают идеи друг друга
          </p>
        </div>
      </div>

      <div className="portfolio__title">
        <div className="portfolio__block-red"></div>
        <div className="portfolio__title_five_text">
          <p>Работаю ведущим дизайнером продукта</p>
          <p>в Бланке. Проектирую сложные</p>
          <p>системы:</p>
          <p className="portfolio__title_four_text-left">
            графические, процессы,
          </p>
          <p>интерфейсы, команду</p>
          <p>и самого себя</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolion;
