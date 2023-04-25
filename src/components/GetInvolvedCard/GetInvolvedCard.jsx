import React from "react";
import "./GetInvolvedCard.scss";
import Button from "../Button/Button";
// import housesImg from "../../assets/img/image 8.png";

function TopGrid({ textInput, img, bgImg, position, textBtn, urlBtn }) {
  return (
    <>
      <div className="getInvolvedCard__container">
        <div
          className="getInvolvedCard__detail"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
        <div className={`getInvolvedCard__detail-decs ${position}`}>
          <div className="getInvolvedCard__detail-decs-title">{textInput}</div>
          <Button textInput={textBtn} styleBtn="secondary" urlBtn={urlBtn} />
        </div>
        <div className={`getInvolvedCard__floatImg ${position}`}>
          <img src={img} alt={img} />
        </div>
      </div>
    </>
  );
}
export default TopGrid;
