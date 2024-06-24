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
//     <>
//       <MainHeader>
//         <h1 className="main-navigation__title">
//           <Link to="/home">
//             <img
//               src={logoImage}
//               alt="Hellyer Velodrome Logo"
//               className="logo"
//             />
//           </Link>
//         </h1>
//         <Hamburger isOpen={menuOpen} onOpen={handleMenuClick} />
//         <Menu right isOpen={menuOpen} onOpen={handleMenuClick}>
//           {/* Your navigation links here */}
//         </Menu>

//         <nav>...</nav>
//       </MainHeader>
//     </>
//   );
// }

// export default MainNavigation;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import MainHeader from "./MainHeader";
// import NavLinks from "./NavLinks";
// import logoImage from "../Images/hellyerLogo.png";
// import "./MainNavigation.css";

// function MainNavigation(props) {
//   return (
//     <MainHeader>
//       <div className="logo-container">
//         <Link to="/home">
//           <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
//         </Link>
//       </div>
//       <button className="main-navigation__menu-button">
//         <span />
//         <span />
//         <span />
//       </button>
//       {/* this line had the <h1> with the title and link home</h1> */}
//       {/* <nav className="main-navigation__header-nav">
//         <NavLinks />
//       </nav> */}
//       <nav><NavLinks /></nav>
//     </MainHeader>
//   );
// }

// export default MainNavigation;
import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import logoImage from "../Images/hellyerLogo.png";
import "./MainNavigation.css";

function MainNavigation(props) {
  return (
    <>
    <SideDrawer>
      <nav className="main-navigation__drawer-nav">
      <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
      <Link to="/">
        <img src={logoImage} alt="Hellyer Velodrome Logo" className="logo" />
      </Link>
      <div className="main-navigation__header-nav">
        <NavLinks />
      </div>
      {/* <NavLinks /> */}
      <button className="main-navigation__menu-button">
        <span />
        <span />
        <span />
      </button>
    </MainHeader>
    </>
  );
}

export default MainNavigation;
