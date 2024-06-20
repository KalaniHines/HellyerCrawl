import React from "react";

// import logoImage from "../Images/hellyerLogo.png";
import "./MainHeader.css";

function MainHeader(props) {
  return (
    <header className="main-header">
      {/* <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" /> */}
      {props.children}
    </header>
  );
}

export default MainHeader;
