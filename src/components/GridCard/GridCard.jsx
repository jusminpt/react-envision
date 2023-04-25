import React from "react";
import Grid1 from "../../assets/img/grid1.png";
import Grid2 from "../../assets/img/grid2.png";
import Grid3 from "../../assets/img/grid3.png";
import Grid4 from "../../assets/img/grid4.png";
import "./GridCard.scss";

function GridCard() {
  return (
    <div className="grid__container">
      <div
        className="grid__item item1"
        style={{ backgroundImage: `url(${Grid1})` }}
      ></div>
      <div
        className="grid__item item2"
        style={{ backgroundImage: `url(${Grid2})` }}
      ></div>
      <div
        className="grid__item item3"
        style={{ backgroundImage: `url(${Grid3})` }}
      ></div>
      <div
        className="grid__item item4"
        style={{ backgroundImage: `url(${Grid4})` }}
      ></div>
    </div>
  );
}

export default GridCard;
