import React, { Component } from "react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <img src="../images/logo.png" alt="logo" />
        </div>
        <SignedIn />
        <SignedOut />
      </div>
    );
  }
}

export default Nav;
