import React from "react";

import SocialMedia from "./SocialMedia/SocialMedia.js";
import StreetAddress from "./Address/StreetAddress.js";
import MailingAddress from "./Address/MailingAddress.js";
import FooterImg from "./Logo/FooterImg.js";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer text-light py-3 footer-background text-align">
      <div className="container footer text-light py-3 footer-background text-align">
        <div className="row">
          <div className="col-md-3 d-flex flex-column margin-bottom">
            <p style={{ fontSize: "25px" }}>Follow the Track!</p>
            <SocialMedia />
          </div>
          <div className="col-md-3 d-flex flex-column margin-bottom">
            <p style={{ fontSize: "25px" }}>Street Address</p>
            <StreetAddress />
          </div>
          <div className="col-md-3 d-flex flex-column margin-bottom">
            <p style={{ fontSize: "25px" }}>Mailing Address</p>
            <MailingAddress />
          </div>
          <div className="col-md-3">
            <FooterImg />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
