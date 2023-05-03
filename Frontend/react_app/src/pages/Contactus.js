import React, { useState } from 'react';
import "./Contactus.css";

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;
