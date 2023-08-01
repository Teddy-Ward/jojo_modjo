import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header ${sticky}`;

  const pages = ["About", "Gallery", "PbPS", "Spooo", "MSLA", "Socials"];
  return (
    <>
      <header className={classes}>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          {pages.map((page) => (
            <li>
              <NavLink
                to={page}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "" : "",
                    textDecorationLine: isActive ? "underline" : "",
                  };
                }}
              >
                {page}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="" target="_blank">
              Shop
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
