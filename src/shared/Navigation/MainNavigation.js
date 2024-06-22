import React from "react";
import { Link } from "react-router-dom";

//import MainHeader from "./MainHeader";
import logoImage from "../Images/hellyerLogo.png";
import "./MainNavigation.css";

function MainNavigation(props) {
  return (
    <>
      {/* <h1 className="main-navigation__title">
      Test
      </h1> */}
      <Link to="/home">
        <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
      </Link>
      <button className="main-navigation__menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>...</nav>
    </>
  );
}

export default MainNavigation;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Hamburger, Menu } from "react-burger-menu";

// import MainHeader from "./MainHeader";
// import logoImage from "../Images/hellyerLogo.png";
// import "./MainNavigation.css";

// function MainNavigation(props) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuClick = (state) => {
//     setMenuOpen(state.isOpen);
//   };

//   return (
//     <MainHeader>
//       <h1 className="main-navigation__title">
//         <Link to="/">
//           <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
//         </Link>
//       </h1>
//       <Hamburger isOpen={menuOpen} onOpen={handleMenuClick} />
//       <Menu right isOpen={menuOpen} onOpen={handleMenuClick}>
//         {/* Your navigation links here */}
//       </Menu>

//       <nav>...</nav>
//     </MainHeader>
//   );
// }

// export default MainNavigation;
