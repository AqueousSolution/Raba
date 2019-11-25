import React, { Component } from "react";

class Login extends Component {
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

          <div className="centered">
            <h1 className="mainheader">Log-In To Your Account</h1>
            <h1 className="header">Log In </h1>
            <div className="loginbox">
              <form onSubmit={this.handleSubmit}>
                <p>Login</p>
                <input
                  type="text"
                  name="text"
                  placeholder="Email"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />

                <input
                  type="text"
                  name="text"
                  placeholder="Password"
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
                <a className="forgotten" href="#">
                  Forgotten Password?
                </a>

                <br />
                <br />
                <button>LOG IN</button>
              </form>
            </div>

            <button className="google">
              <img src="./images/google-logo.png" alt="google" />
              <span> Sign In With Google</span>
            </button>
            <button className="facebook">
              <img src="./images/facebook-logo.png" alt="facebook" />
              <span>Sign In With Facebook</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
