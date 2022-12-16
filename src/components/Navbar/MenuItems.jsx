import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <li
      className="app__navbar-menu-items"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.sublink ? (
        <>
          <Link
            onClick={closeMobileMenu}
            className="app__navbar-menu-items-link"
          >
            {items.title}{" "}
          </Link>
          {dropdown && <Dropdown sublinks={items.sublink} />}
        </>
      ) : (
        <Link to={items.url} className="app__navbar-menu-items-link">
          {items.title}
        </Link>
      )}
    </li>
  );
}

export default MenuItems;
