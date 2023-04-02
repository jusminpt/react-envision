import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "./Button.scss";

function Button({ textInput, styleBtn, urlBtn }) {
  console.log(urlBtn);
  const navigation = useNavigate();
  const btnHandler = () => {
    if (urlBtn.includes("https")) {
      window.open(`${urlBtn}`, "_blank", "noreferrer");
    } else {
      navigation(urlBtn);
    }
  };

  return (
    <button className={`btn ${styleBtn}`} onClick={btnHandler}>
      {textInput}
      {!textInput.includes("Donate") ? (
        <HiOutlineArrowLongRight size={25} />
      ) : null}
    </button>
  );
}

export default Button;
