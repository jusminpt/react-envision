import React from "react";
import "./PageHero.scss";

function PageHero({ headingText, img }) {
  return (
    <div
      className="pagehero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
      }}
    >
      <h1>{headingText}</h1>
    </div>
  );
}

export default PageHero;
