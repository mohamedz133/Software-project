import React  from "react";

function Navigation(){
    return(
        <header>
            <a href="#" className="logo">
                World
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Contactus">Contact Us</a>
                    </li>
                    <li>
                        <a href="/Login">login/register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Navigation;
