import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import logoImage from "../Images/hellyerLogo.png";
import "./MainNavigation.css";

function MainNavigation(props) {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">
          <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
        </Link>
      </h1>
      <button className="main-navigation__menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>...</nav>
    </MainHeader>
  );
}

export default MainNavigation;
