import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.scss";
import { images } from "../../constants";
import Button from "../Button/Button";
import MenuItems from "./MenuItems";
import linksData from "../../data/linksData";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/">
            <img src={images.navLogo} className="" alt="logo" />
          </Link>
          <p>Envision Health access initiative</p>
        </div>
        <div className="app__navbar-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        {/* TODO: Add active state if possible */}
        <ul className={click ? "app__navbar-menu active" : "app__navbar-menu"}>
          {linksData.map((menu, index) => {
            return (
              <MenuItems
                items={menu}
                key={index}
                closeMobileMenu={closeMobileMenu}
              />
            );
          })}
        </ul>
        <Button textInput="Donate" styleBtn="primary" />
      </nav>
    </header>
  );
}

export default Navbar;
