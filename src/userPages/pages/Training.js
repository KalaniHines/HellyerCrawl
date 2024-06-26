import React from "react";

import "./Training.css";

function Training() {
  return (
    <div className="training-content">
      <div className="well-lg bg-success">
        <p className="container center-block">
          You must have an annual online waiver on file to attend. <br />
          Session/Race pre-requisites: <br />
          Beginner Sessions: Open to all. <br />
          Intermediate Sessions: Must have four beginner sessions or equivalent.{" "}
          <br />
          Advanced Sessions: Must have four beginner sessions and Track Cat 3,
          or supervisor approval. <br />
          Coached/Structured Sessions: Check session description. <br />
          Races: Three beginner sessions or equivalent. Online registration is
          required, pre-registration is highly recommended. <br />
          Wet track or unhealthy air quality cancels. <br />
          Contact treasurer@hellyervelodrome.com for transfers or refunds.{" "}
          <br />
          You must have an annual online waiver on file to attend.
        </p>
      </div>
    </div>
  );
}

export default Training;

//Training blurb. With sat and sun info. possibly a modal with links to reg, etc.
