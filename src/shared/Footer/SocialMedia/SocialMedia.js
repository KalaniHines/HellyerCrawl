import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import socialMediaData from "./SocialMediaData.json";
import "./SocialMedia.css";

function SocialMediaLinks() {
  return (
    <ul className="social-links">
      {Object.entries(socialMediaData).map(([platform, link]) => (
        <li key={platform}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="social-icon-box"
          >
            {platform === "facebook" && (
              <FaFacebookF className="social-icon social-icon-color" />
            )}
            {platform === "twitter" && (
              <FaXTwitter className="social-icon social-icon-color" />
            )}
            {platform === "instagram" && (
              <FaInstagram className="social-icon social-icon-color" />
            )}
            {platform === "youtube" && (
              <FaYoutube className="social-icon social-icon-color" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaLinks;
