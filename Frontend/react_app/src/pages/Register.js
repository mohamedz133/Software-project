import React, { useState } from "react";
import './css/Signup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = "https://example.com/signup";
        const data = { firstName, lastName, email, password };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    // Sign up successful
                    alert("Sign up successful!");
                } else {
                    // Sign up failed
                    alert("Check user inserted data");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred while signing up.");
            });
    };

    return (
        <div className="container">
            <div className="form_sign">
                <h1 id="title">Sign Up</h1>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} beat id="awesome1" style={{ color: "#1d3ee2" }} />
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                name="firstName"
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
                                name="lastName"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faAt} beat id="awesome1" style={{ color: "#0740b0" }} />
                            <input type="email" required placeholder="Email" name="email" />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} beat id="awesome1" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="pass-key"
                                required
                                placeholder="Password"
                                name="password"
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
                <div className="transmit">
                    <Link to="/Login">
                        <button type="submit" id="signupBtn">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
