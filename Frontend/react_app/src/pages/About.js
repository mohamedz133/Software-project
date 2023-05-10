import React from 'react';
import Person from './Person';

const people = [
    {
        name: 'John Doe',
        role: 'CEO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Jane Doe',
        role: 'CTO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Bob Smith',
        role: 'CFO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Alice Johnson',
        role: 'CMO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Tom Lee',
        role: 'COO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Sarah Brown',
        role: 'CIO',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/150'
    }
];

const About = () => {
    return (
        <div>
            <h1>Our Team</h1>
            <div className="people">
                {people.map(person => (
                    <Person key={person.name} {...person} />
                ))}
            </div>
        </div>
    );
};

export default About;
