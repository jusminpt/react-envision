import React from "react";
import "./Button.scss";

function Button({ textInput, styleBtn, urlBtn }) {
  const donateBtnHandler = () => {
    window.open(`${urlBtn}`, "_blank");
  };

  return (
    <button className={`btn ${styleBtn}`} onClick={donateBtnHandler}>
      {textInput}
    </button>
  );
}

export default Button;
