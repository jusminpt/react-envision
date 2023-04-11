import React from "react";
import './GetInvolvedTopGrid.scss'
import Button from "../Button/Button";
import housesImg from "../../assets/img/image 8.png";

function TopGrid ({}) {
  return(
    <div className="image-container">
        <div className="title">Empower communities with your donation - help us improve, educate and help those in need!</div>   
        <img className="left-img"  src={ housesImg } alt="Left Image" />
        <img className="right-img" src={ housesImg } alt="Right Image" />
        {/* <button className="btn-container">fasfasfasfasf</button> */}
        <div className="btn-container">        
          <Button
             textInput="Donate"
             styleBtn="secondary"
             urlBtn="/whatwedo"
          />
        </div>
    </div>
  )
}
export default TopGrid













