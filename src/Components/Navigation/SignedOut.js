import React from "react";

const SignedOut = () => {
  return (
    <header className="signedOut">
      <img className="logo" src="images/logowhite.png" alt=" raba logo" />
      <nav className="container">
        <ul className="navlinks">
          <li className="signedOutLinks">
            <a href="#">DISTRIBUTION</a>
          </li>
          <li className="signedOutLinks">
            <a href="#">PRICING</a>
          </li>
          <li className="signedOutLinks">
            <a href="#">BLOG</a>
          </li>
        </ul>
      </nav>
      <button className="noColor">
        <h3 className="profilename">LOG IN</h3>
      </button>
      <button className="color">
        <h3 className="profilename">SIGN UP</h3>
      </button>
    </header>
  );
};

export default SignedOut;
