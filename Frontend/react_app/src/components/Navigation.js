import React  from "react";
import {Link,NavLink} from "react-router-dom";

function Navigation(){
    return(
        <header>
            <Link to="#" className="logo">
                World
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>

                    </li>
                    <li>
                        <Link to="/Contactus">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/Login">login/register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Navigation;
