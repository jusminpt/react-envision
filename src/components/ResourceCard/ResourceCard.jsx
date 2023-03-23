import React from "react";
import Button from "../Button/Button";
import "./ResourceCard.scss";

function ResourceCard({ resourcesData: { title, description }, img, urlBtn }) {
  return (
    // TODO: Style, rename, add info
    <div
      className="resourceCard"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
      }}
    >
      <div className="resourceCard__left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="resourceCard__right">
        <Button textInput="Learn More" styleBtn="secondary" urlBtn={urlBtn} />
      </div>
    </div>
  );
}

export default ResourceCard;
