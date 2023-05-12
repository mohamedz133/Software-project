import React, {useState} from 'react';
import './css/Contactus.css';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="contactus" id="contactus">
            <div className="form">
                <div className="content">
                    <h2>Contact Us</h2>
                    <form action="">
                        <input
                            className="input"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                        />

                        <textarea
                            className="input"
                            placeholder="Tell Us About Your Needs"
                            name="message"
                        ></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>

    );
}


export default ContactPage;
