import React from "react";
import Button from "../Button/Button";
import img from "../../assets/Trial.jpg";
import "./ResourceCard.scss";

function ResourceCard({ textInput }) {
  return (
    // TODO: Style, rename, add info
    <div className="resourceCard" style={{ backgroundImage: `url(${img})` }}>
      <h3>{textInput}</h3>
      <div className="resourceCard-left">
        <Button textInput="Learn more" />
      </div>
    </div>
  );
}

export default ResourceCard;
