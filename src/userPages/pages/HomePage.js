import React from "react";

import spinner from "../../shared/Images/hellyerLogo.png";
import "./HomePage.css";


function Home() {
    return (
      <div className="home-content">
        <img
          src={spinner}
          className="spinner-image"
          alt="Hellyer Velodrome Logo"
        />
        </div>
    );
  }

  export default Home;
