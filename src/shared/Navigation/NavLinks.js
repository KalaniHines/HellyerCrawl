import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks({ closeDrawer }) {
  const handleClick = () => {
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home" onClick={() => handleClick()}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/racing" onClick={() => handleClick()}>
          Racing
        </NavLink>
      </li>
      <li>
        <NavLink to="/training" onClick={() => handleClick()}>
          Training
        </NavLink>
      </li>
      <li>
        <NavLink to="/information" onClick={() => handleClick()}>
          Information
        </NavLink>
      </li>
      <li>
        <NavLink to="/calendar" onClick={() => handleClick()}>
          Calendar
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
