import React from 'react';

const Person = ({ name, role, bio, image }) => {
    return (
        <div className="person">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h3>{role}</h3>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default Person;
