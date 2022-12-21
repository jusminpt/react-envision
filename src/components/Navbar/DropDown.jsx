import React, { useState } from "react";
import { Link } from "react-router-dom";

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
              <Link
                to={sublink.url}
                className={
                  click
                    ? "app__navbar-dropdown-links clicked"
                    : "app__navbar-dropdown-links"
                }
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
