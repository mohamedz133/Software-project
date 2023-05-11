import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import './css/Signup.css';

function LoginForm() {


    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (


        <div className="container">
            <div className="form_sign">
                <h1 id="title">Sign In</h1>
                <form>
                    <div className="input-group">
                        <div className="input-field">
                            <FontAwesomeIcon icon={faAt} beat  id="awesome1" style={{ color: "#0740b0" }} />
                            <input type="email" required placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} beat id="awesome1" />
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className="pass-key"
                                required
                                placeholder="Password"
                            />
                            <span className="show" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'hide' : 'show'}</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="/Home">
                            <button type="submit" id="signinBtn">
                                Sign in
                            </button>
                        </a>
                    </div>
                    <div>
                        <b className="reset">
                            forget password{' '}
                            <a href="#" rel="noopener noreferrer">
                                click here
                            </a>
                        </b>
                    </div>
                </form>
                <div className="transmit">
                    <a href="/Signup">
                        <button type="submit" id="signupBtn">
                            Sign up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
