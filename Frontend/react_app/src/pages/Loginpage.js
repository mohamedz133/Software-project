import React, { useState } from 'react';
import './Loginstyle.css';
import '../img/logo.jpg';
function Login() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className="container">
            <div className="form_sign">
                <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form>
                    {isSignUp && (
                        <div className="input-field" id="nameField">
                            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                        </div>
                    )}
                    <div className="input-field">
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <p>Lost password <a href="#">click here</a></p>
                    <div className="buttons">
                        <button type="button" id="signupBtn" onClick={handleSignUpClick} className={isSignUp ? '' : 'disable'}>
                            Sign Up
                        </button>
                        <button type="button" id="signinBtn" onClick={handleSignInClick} className={!isSignUp ? '' : 'disable'}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

