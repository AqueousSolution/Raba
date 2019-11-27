import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: {},
    password: {}
  };
  render() {
    return (
      <div>
        <div className="split left">
          <div className="logoposition">
            <img
              className="whitelogo"
              alt="Logo"
              src="./images/logowhite.png"
            />
          </div>
        </div>

        <div className="split right">
          <nav>
            <a href="">
              <img alt="left" src="./images/arrow-left.png" />
            </a>
            Back
          </nav>

          <h1 className="mainheaders">Create Your Raba Account</h1>
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />
            <label for="tab-1" class="tab">
              Artist Sign Up
              <sup className="superscript">For Independent Artists</sup>
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label for="tab-2" class="tab">
              Enterprise Sign Up
              <sup className="superscript">
                For Record Labels With Multiple Artists
              </sup>
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">
                    Fullname
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="user" class="label">
                    Email
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Confirm Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <span class="icon"></span> By ticking this you hereby agree
                    to the terms and conditions
                  </label>
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign In" />
                </div>
                <div class="hr"></div>
              </div>
              <div class="sign-up-htm">
                <div class="group">
                  <label for="user" class="label">
                    Name of record label
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="user" class="label">
                    Email
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Confirm Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
