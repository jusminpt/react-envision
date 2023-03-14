import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
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
  // const closeMobileMenu = () => setClick(false);

  //close nav mobile when page chage
  const { pathname } = useLocation();
  useEffect(() => {
    setClick(false);
  }, [pathname]);

  // TODO: Check if finalized, then updata the linkData.js and styling for both desktop and mobile version
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/">
            <img src={images.navLogo} className="" alt="logo" />
          </Link>
          <p>Envision Health Access Initiative</p>
        </div>
        <div className="app__navbar-icon" onClick={handleClick}>
          {click ? <VscClose /> : <RxHamburgerMenu />}
        </div>
        <ul className={click ? "app__navbar-menu active" : "app__navbar-menu"}>
          {linksData.map((menu, index) => {
            return (
              <MenuItems
                items={menu}
                key={index}
                // closeMobileMenu={closeMobileMenu}
              />
            );
          })}
          <Button
            textInput="Donate"
            styleBtn="primary"
            urlBtn="https://www.paypal.com/donate/?hosted_button_id=RYT8VQHJQY8FQ"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
