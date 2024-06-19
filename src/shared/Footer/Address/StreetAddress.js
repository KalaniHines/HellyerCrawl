import React from "react";

import "./Address.css";

function StreetAddress() {
  return (
    <div className="address-container">
      <a
        href="https://maps.google.com/?q=985+Hellyer+Ave,+San+Jose,+CA"
        target="_blank"
        rel="noreferrer"
        className="address-link street-address-link"
      >
        985 Hellyer Ave
        <br />
        San Jose, CA
      </a>
    </div>
  );
}

export default StreetAddress;
