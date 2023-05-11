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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
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
