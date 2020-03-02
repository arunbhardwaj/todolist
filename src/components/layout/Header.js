import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
            <Link style={{ color: 'white'}} to="/">Home</Link> | <Link to="/about" style={{ color: 'white'}}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
}