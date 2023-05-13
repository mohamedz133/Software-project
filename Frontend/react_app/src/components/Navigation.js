import React  from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <header>
            <Link to="#" className="logo">
                World
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login">login/Register</Link>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>

                    </li>
                    <li>
                        <Link to="/Contactus">Contact Us</Link>
                    </li>
                           </ul>
            </nav>
        </header>
    );

}

export default Navigation;
