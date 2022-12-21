import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

function DropDown({ sublinks }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? "app__navbar-dropdown clicked" : "app__navbar-dropdown"
        }
      >
        {sublinks.map((sublink, index) => {
          return (
            <li key={index}>
              {/* TODO: Close the dropdown when click */}
              <Link
                to={sublink.url}
                className="app__navbar-dropdown-links"
                onClick={() => setClick(false)}
              >
                {sublink.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDown;
