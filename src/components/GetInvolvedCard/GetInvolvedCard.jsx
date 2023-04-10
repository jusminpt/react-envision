import React from "react";
import Button from "../Button/Button";
import "./GetInvolvedCard.scss";
// import img from "../../assets/Trial.jpg";

function GetInvolvedCard({ textInput, textBtn, urlBtn }) {
  return (
    <div className="getInvolvedCard">
      <h3 className="gi-card-title">{textInput}</h3>
      <div className="getInvolvedCard-left">
        <Button textInput={textBtn} styleBtn="secondary" urlBtn={urlBtn} />
      </div>
    </div>
  );
}

export default GetInvolvedCard;
