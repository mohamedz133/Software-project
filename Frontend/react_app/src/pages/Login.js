import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import './css/Signup.css';
import {Link} from "react-router-dom";

function LoginForm() {


    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (event) => {

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const url = "http://localhost:3000/api/auth/login";
        const data = {  email, password };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

    };



    return (


        <div className="container">
            <div className="form_sign">
                <h1 id="title">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faAt} beat  id="awesome1" style={{ color: "#0740b0" }} />
                            <input type="email" required placeholder="Email"  name="email" />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} beat id="awesome1" />
                            <input
                                type={passwordVisible ? 'text' : 'password'}
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
                        <a href="/Home">
                            <button type="submit" id="signinBtn">
                                Login
                            </button>
                        </a>
                    </div>
                    <div>
                        <b className="reset">
                            forget password{' '}
                            <Link to="#" rel="noopener noreferrer">
                                click here
                            </Link>
                        </b>
                    </div>
                </form>
                <div className="transmit">
                    <Link to="/Register">
                        <button type="submit" id="signupBtn">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;