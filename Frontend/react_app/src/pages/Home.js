import React from "react";
import "./css/all.min.css";
import "./css/world.css";
import "./css/normalize.css";

function Home() {
    return (
        <div className="App">
            <header>
                <a href="#" className="logo">
                    World
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#articles">articles</a>
                        </li>
                        <li>
                            <a href="#gallery">gallery</a>
                        </li>
                        <li>
                            <a href="#features">features</a>
                        </li>
                        <li>
                            <a href="#">other links</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="landing">
                <div className="container">
                    <div className="text">
                        <h1>Welcome, To My World</h1>
                        <p>
                            Here Iam gonna share everything about my life. Books Iam reading,
                            Games Iam Playing, Stories and Events.
                        </p>
                    </div>
                    <div className="image">
                        <img src="./imgs/landing.png" alt="Image Not Found" />
                    </div>
                </div>
                <a href="#articles" className="go-down">
                    <i className="fas fa-angle-double-down fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Home;
