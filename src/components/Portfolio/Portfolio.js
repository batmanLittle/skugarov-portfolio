import "./Portfolio.css";
import photo from "../../images/photo-portfolio.svg";

function Portfolion() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title-name">АНТОН СКУГАРОВ</h1>
      <h1></h1>
      <h1></h1>
      <div className="portfolio__photo">
        <img src={photo} />
      </div>

      <h1> </h1>
    </div>
  );
}

export default Portfolion;
