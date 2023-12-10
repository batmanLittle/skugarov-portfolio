import "./Card.css";
import arrow from "../../images/arrow.svg";

function Card({
  number,
  text1,
  text2,
  text3,
  text4,
  title,
  job,
  style,
  styleJob,
  styleText1,
  styleText2,
  styleText3,
  styleText4,
  styleArrow,
}) {
  return (
    <div className={"card" + " " + style}>
      <div className="card__block-one">
        <div className="card__square"></div>
        <p className="card__number">{number}</p>
      </div>

      <div className="card__block-two">
        <div className="card__subtitle">
          <p className={"card__subtitle_text" + " " + styleText1}>{text1}</p>
          <p className={"card__subtitle_text" + " " + styleText2}>{text2}</p>
          <p className={"card__subtitle_text" + " " + styleText3}>{text3}</p>
          <p className={"card__subtitle_text" + " " + styleText4}>{text4}</p>
        </div>
        <h2 className="card__title">
          {title}
          <img className={"card__title_arrow" + " " + styleArrow} src={arrow} />
        </h2>
      </div>
      <p className={"card__job-title" + " " + styleJob}>{job}</p>
    </div>
  );
}

export default Card;
