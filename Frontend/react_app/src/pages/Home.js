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
                            <a href="#gallery">About</a>
                        </li>
                        <li>
                            <a href="#features">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">login/register</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Home;
