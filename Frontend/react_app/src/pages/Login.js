import React, { useState } from 'react';

import './Signup.css';

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
                            <input type="email" required placeholder="Email" />
                        </div>
                        <div className="input-field">
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
                        <a href="login.html">
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
                    <a href="signup.html">
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
