import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ imageChoice, textPosition, headerText, pText }) {
  return (
    <div
      className={`projectCard__container ${textPosition}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageChoice})`,
      }}
    >
      <div className="projectCard__content">
        <h2 className="proj-header">{headerText}</h2>
        <p>{pText}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
