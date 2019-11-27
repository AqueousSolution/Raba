import React, { Component } from "react";

class SignedIn extends Component {
  state = {
    profilePic: []
  };
  render() {
    return (
      <header className="signedIn">
        <img className="logo" src="images/logo.png" alt=" raba logo" />
        <nav className="container">
          <ul className="navlinks">
            <li className="signedInLinks">
              <a className="signedInLinks" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="signedInLinks" href="#">
                Analytics
              </a>
            </li>
            <li>
              <a className="signedInLinks" href="#">
                Catalog
              </a>
            </li>
            <li>
              <a className="signedInLinks" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="signedInLinks" href="#">
                Transactions
              </a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          <button className="blackbutton">Upload Content</button>
        </a>
        <button className="profileinfo">
          <h3 className="profilename">John. D</h3>
          <img className="profilepic" src="images/Ellipse.png" />
        </button>
      </header>
    );
  }
}

export default SignedIn;
