import React from "react";
import Button from "../Button/Button";
import "./ReportCard.scss";

function ReportCard({ textInput, textBtn, urlBtn }) {
  return (
    // TODO: Style, rename, add info
    // <div className="reportCard" style={{ backgroundImage: `url(${img})` }}>
    <div className="reportCard">
      <h3>{textInput}</h3>
      <div className="reportCard-left">
        <Button textInput={textBtn} styleBtn="secondary" urlBtn={urlBtn} />
      </div>
    </div>
  );
}

export default ReportCard;
