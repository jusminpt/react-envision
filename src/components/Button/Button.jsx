import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as arrowRight } from "../../assets/arrow-right.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "./Button.scss";

function Button({ textInput, styleBtn, urlBtn }) {
  console.log(urlBtn);
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
      {!urlBtn.includes("https") ? <HiOutlineArrowLongRight size={25} /> : null}
    </button>
  );
}

export default Button;
