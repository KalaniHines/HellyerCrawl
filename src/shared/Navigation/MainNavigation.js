import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import logoImage from "../Images/hellyerLogo.png";
import "./MainNavigation.css";

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onCLick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks closeDrawer={closeDrawerHandler} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <Link to="/home">
          <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
        </Link>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          {drawerIsOpen ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
