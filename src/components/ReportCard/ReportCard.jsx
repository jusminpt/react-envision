import React from "react";
import Button from "../Button/Button";
import "./ReportCard.scss";
import img from "../../assets/Trial.jpg";

function ReportCard({ textInput }) {
  return (
    // TODO: Style, rename, add info
    <div className="reportCard" style={{ backgroundImage: `url(${img})` }}>
      <h3>{textInput}</h3>
      <div className="reportCard-left">
        <Button textInput="Learn more" />
      </div>
    </div>
  );
}

export default ReportCard;
