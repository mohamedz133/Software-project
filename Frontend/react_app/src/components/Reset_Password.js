import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/css/Reset_Password.css"
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../pages/css/Signup.css"

 function ForgetPasswordPage() {
    return (

        <div className="container2">
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/Login" class="ress-pass">

                <div className="input-field">
                    <FontAwesomeIcon icon={faAt} beat  id="awesome1" style={{ color: "#0740b0" }} />
                    <input type="email" required placeholder="Email"  name="email" />
                </div>

                <div>
                    <button id="sub_btn" type="submit"> Send password</button>
                </div>
            </form>
            <footer>
                <p>First time? <Link class="Link" to="/Register">Create an account</Link></p>
                <p><Link class="Link" to="/">Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
    )
}
export default ForgetPasswordPage;