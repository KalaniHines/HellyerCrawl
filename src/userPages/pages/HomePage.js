import React from "react";

import spinner from "../../shared/Images/hellyerLogo.png";
import "./HomePage.css";


function Home() {
    return (
      <body className="home-content">
        <img
          src={spinner}
          className="spinner-image"
          alt="Hellyer Velodrome Logo"
        />
        </body>
    );
  }

  export default Home;
