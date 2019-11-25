import React, { Component } from "react";

class SignedIn extends Component {
  state = {
    profilePic: []
  };
  render() {
    return (
      <header>
        <img className="logo" src="images/logo.png" alt=" raba logo" />
        <nav className="container">
          <ul className="navlinks">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Transactions</a>
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
