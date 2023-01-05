import React from "react";
import "./PageHero.scss";
import img from "../../assets/Trial.jpg";

function PageHero({ headingText }) {
  return (
    <div className="pagehero" style={{ backgroundImage: `url(${img})` }}>
      <h1>{headingText}</h1>
    </div>
  );
}

export default PageHero;
