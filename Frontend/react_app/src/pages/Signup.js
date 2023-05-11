
import React, { useState } from "react";
import './css/Signup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
    };

    return (
        <div className="container">
            <div className="form_sign">
                <h1 id="title">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field" id="nameField">
                            <FontAwesomeIcon icon={faUser} beat id="awesome1" style={{ color: "#1d3ee2" }} />
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="input-field" id="nameField">
                            <FontAwesomeIcon icon={faUser} beat id="awesome1" style={{ color: "#000000" }} />
                            <input
                                type="text"
                                required
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faAt} beat  id="awesome1" style={{ color: "#0740b0" }} />
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} beat id="awesome1" />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="pass-key"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="show" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "hide" : "show"}
              </span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="submit" id="signupBtn">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="transmit">
                    <a href="login.html">
                        <button type="button" id="signinBtn">
                            Sign in
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
