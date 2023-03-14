import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";
import { useLocation } from "react-router-dom";

function MenuItems({ items }) {
  const pathname = useLocation().pathname;
  console.log(pathname.includes("resources"));
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   setClick(!click);
  //   if (window.innerWidth < 960) {
  //     setDropdown(!dropdown);
  //   }
  // };
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="app__navbar-menu-items"
      // onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.sublink ? (
        <>
          <Link
            // TODO : What is the flow of mobile version?
            to={items.url}
            onClick={closeMobileMenu}
            className={
              pathname.includes(items.title.toLowerCase().replace(/\s/g, ""))
                ? "app__navbar-menu-items-link activePage"
                : "app__navbar-menu-items-link"
            }
          >
            {items.title}{" "}
          </Link>
          {dropdown && <Dropdown sublinks={items.sublink} />}
        </>
      ) : (
        <Link
          to={items.url}
          className={
            pathname === items.url
              ? "app__navbar-menu-items-link activePage"
              : "app__navbar-menu-items-link"
          }
        >
          {items.title}
        </Link>
      )}
    </li>
  );
}

export default MenuItems;
