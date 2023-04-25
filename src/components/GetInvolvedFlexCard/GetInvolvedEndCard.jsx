import React from "react";
import Button from "../Button/Button";
import "./GetInvolvedFlexCard.scss";

function GetInvolvedFlexCard({ textInputOne, textInputTwo, pInput, textBtn, urlBtn }) {
  return (
    <div className="gi-flexCard">
        <div className="gi-content">
            <div className="one content-item">
                <h3>{textInputOne}</h3>
                <h3>{textInputTwo}</h3>
            </div>
            <div className="two content-item">

                <p className="line-flexCard-vertical"></p>
                <p className="line-flexCard-horizontal"></p>

            </div>
            <div className="three content-item">
                <p>{pInput}</p>
            </div>
            <div className="four content-item">
                <Button textInput={textBtn} styleBtn="primary" urlBtn={urlBtn} />
            </div>
        </div>
    </div>
  );
}

export default GetInvolvedFlexCard;
