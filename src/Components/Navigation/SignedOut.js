import React from "react";

const SignedOut = () => {
  return (
    <nav className="container">
      <ul className="leftnav">
        <li>DISTRIBUTION</li>
        <li>PRICING</li>
        <li>BLOG</li>
      </ul>
      <ul className="rightnav">
        <li>Log In</li>
        <li>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default SignedOut;
