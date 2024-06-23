// import React from "react";
// import { NavLink } from "react-router-dom";

// import "./NavLinks.css";

// function NavLinks(props) {
//     return (
//         <ul className="nav-links">
//             <li>
//                 <NavLink to="/home">Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/racing">Racing</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/training">Training</NavLink>
//             </li>
//         </ul>
//     );
// }

// export default NavLinks;
import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/racing">Racing</NavLink>
      </li>
      <li>
        <NavLink to="/training">Training</NavLink>
      </li>
      <li>
        <NavLink to="/information">Information</NavLink>
      </li>
      <li>
        <NavLink to="/calendar">Calendar</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
