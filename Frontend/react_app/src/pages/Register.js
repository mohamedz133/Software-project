import React, { useState } from "react";
import './css/Signup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <div className="form_sign">
                <h1 id="title">Sign Up</h1>
                <form>
                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} beat id="awesome1" style={{ color: "#1d3ee2" }} />
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} beat id="awesome1" style={{ color: "#1d3ee2" }} />
                            <input
                                type="text"
                                required
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faAt} beat id="awesome1" style={{ color: "#0740b0" }} />
                            <input type="email" required placeholder="Email" />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} beat id="awesome1" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="pass-key"
                                required
                                placeholder="Password"
                            />
                            <span className="show" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'hide' : 'show'}</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <a href="/Login">
                            <button type="submit" id="signupBtn">
                                Sign Up
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
