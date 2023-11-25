import "./LowerSection.css";
import barcode from "../../images/barcode.svg";

function LowerSection() {
  return (
    <div className="lower-section">
      <div className="lower-section__block">
        <div className="lower-section__cards">
          <div className="lower-section__card lower-section__card-yellow"></div>
          <div className="lower-section__card lower-section__card-blue"></div>
        </div>
        <div className="lower-section__separate-card "></div>
        <div className="lower-section__cards">
          <div className="lower-section__card lower-section__card-red"></div>
          <div className="lower-section__card lower-section__card-green"></div>
        </div>
      </div>

      <div className="lower-section__footer">
        <div className="lower-section__text">
          <p className="lower-section__subtitle">2012</p>
          <p className="lower-section__subtitle">
            Anton Skugarov / skugarov.com
          </p>
          <p className="lower-section__subtitle">2024</p>
        </div>
        <img className="lower-section__barcode" src={barcode} />
      </div>
    </div>
  );
}

export default LowerSection;
