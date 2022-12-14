import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import Button from "../Button/Button";
import linksData from "../../data/linksData";

function Navbar() {
  console.log(linksData);
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href="/" rel="noopener noreferrer">
            <img src={images.navLogo} className="" alt="logo" />
          </a>
          <p>Envision Health access initiative</p>
        </div>
        <ul className="app__navbar-links">
          {linksData.map((item, index) => (
            <li key={`link-${index}`}>
              <div />
              <a href={`#${item.url}`}>{item.title}</a>
            </li>
          ))}
          <Button textInput="Donate" styleBtn="primary" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
