import React from "react";
import Button from "../Button/Button";
import img from "../../assets/Trial.jpg";
import "./LongCard.scss";

function LongCard({ textInput }) {
  return (
    // TODO: Style, rename, add info
    <div className="longCard" style={{ backgroundImage: `url(${img})` }}>
      <h3>{textInput}</h3>
      <div className="longCard-left">
        <Button textInput="Visit Page" />
      </div>
    </div>
  );
}

export default LongCard;
