import React from "react";

//import logoImage from "../Images/hellyerLogo.png";
//import MainNavigation from "./MainNavigation";
import "./MainHeader.css";

function MainHeader(props) {
    // console.log("Props in header: ", props.children);
  return (
    <header className="main-header">
      {/* <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" /> */}
      {props.children}

    </header>
  );
}

export default MainHeader;
