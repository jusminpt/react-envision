import React from "react";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/arrow-right.svg";
import "./Button.scss";

function Button({ textInput, styleBtn, urlBtn }) {
  const navigation = useNavigate();
  const btnHandler = () => {
    if (urlBtn.includes("https")) {
      window.open(`${urlBtn}`, "_blank");
    } else {
      navigation(urlBtn);
    }
  };

  return (
    <button className={`btn ${styleBtn}`} onClick={btnHandler}>
      {textInput}
      {!urlBtn.includes("https") ? (
        <img src={arrowRight} alt="arrow-right" />
      ) : null}
    </button>
  );
}

export default Button;
