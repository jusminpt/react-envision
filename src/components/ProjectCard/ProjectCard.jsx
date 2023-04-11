import React, { useState, useEffect } from "react";
import "./ProjectCard.scss";

function ProjectCard({ imageChoice, textPosition, headerText, pText }) {
  const [paddingStyle, setPaddingStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setPaddingStyle({});
      } else {
        setPaddingStyle(
          textPosition === "left" ? { paddingLeft: "30%" } : { paddingRight: "30%" }
        );
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [textPosition]);

  return (
    <div className="main">
      <div className="card-container" style={{ backgroundImage: `url(${imageChoice})`, ...paddingStyle }}>
        {/* WhatWeDo Content */}
        <div className="wwd-content" style={paddingStyle}>
          <h2 className="proj-header">{headerText}</h2>
          <p className="proj-p cutoff-text">{pText}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;