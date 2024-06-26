import React from "react";
// import React, { forwardRef } from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

function SideDrawer(props) {
  const drawerRef = React.useRef(null);

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside ref={drawerRef} className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
      {/* <aside ref={drawerRef} className="side-drawer" onClick={(event) => event.stopPropagation()}>
        {props.children}
      </aside> */}
    </CSSTransition>
  );
  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
