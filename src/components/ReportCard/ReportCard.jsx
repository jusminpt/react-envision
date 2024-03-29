import React from "react";
import Button from "../Button/Button";
import "./ReportCard.scss";

function ReportCard({ textInput, textBtn, urlBtn }) {
  return (
    <div className="reportCard">
      <h3>{textInput}</h3>
      <div className="reportCard__left">
        <Button textInput={textBtn} styleBtn="secondary" urlBtn={urlBtn} />
      </div>
    </div>
  );
}

export default ReportCard;
