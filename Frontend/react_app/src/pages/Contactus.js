import React, { useState } from 'react';
import './css/Contactus.css';

function ContactPage() {
    const serverUrl = 'http://localhost:3000/Contactus';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const messageData = {
            name: name,
            email: email,
            message: message,
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageData),
        };

        fetch(serverUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                // Handle the server's response here
                console.log('Server response:', data);
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
    };

    return (
        <div className="contactus" id="contactus">
            <div className="form">
                <div className="content">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            className="input"
                            placeholder="Tell Us About Your Needs"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
