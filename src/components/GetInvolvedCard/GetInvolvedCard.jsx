import React from "react";
import Button from "../Button/Button";
import "./GetInvolvedCard.scss";
// import img from "../../assets/Trial.jpg";

function GetInvolvedCard({ textInput, textBtn, urlBtn }) {
  return (
    // TODO: Style, rename, add info
    // <div className="reportCard" style={{ backgroundImage: `url(${img})` }}>
    <div className="getInvolvedCard">
      <h3>{textInput}</h3>
      <div className="getInvolvedCard-left">
        <Button textInput={textBtn} styleBtn="secondary" urlBtn={urlBtn} />
      </div>
    </div>
  );
}

export default GetInvolvedCard;
