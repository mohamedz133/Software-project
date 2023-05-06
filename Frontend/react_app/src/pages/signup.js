import React from 'react';
import './Signup.css';

function SignupForm() {
  return (
    <div className="container">
      <div className="form_sign">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <input type="text" required placeholder="First Name" />
            </div>
            <div className="input-field" id="nameField">
              <input type="text" required placeholder="Last Name" />
            </div>
            <div className="input-field">
              <input type="Email" required placeholder="Email" />
            </div>
            <div className="input-field">
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
              />
              <span className="show">show</span>
            </div>
          </div>
          <div className="buttons">
            <a href="Login.html">
            <button type="submit" id="signupBtn">
              Sign Up
            </button>
              </a>
          </div>
        </form>
        <div className="transmit">
          <a href="Login.js">
            <button type="submit" id="signinBtn">
              Sign in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
