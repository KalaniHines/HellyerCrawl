import React from "react";

import NCVAHellyerLogo from "../../Images/NCVAHellyerLogo.png";
import "./FooterImg.css";

function FooterImg() {
  return (
    <div className="footer-container">
      <img
        src={NCVAHellyerLogo}
        alt="Northern California Velodrome Association Logo"
        className="footer-logo"
      />
      <p className="copyright">
        ©{new Date().getFullYear()} Northern California Velodrome Association,
        501c(3) operates the Hellyer Velodrome in partnership with Santa Clara
        County Parks.
      </p>
    </div>
  );
}

export default FooterImg;
