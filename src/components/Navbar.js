import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar_main">
            <Link to="/">Home</Link>
            <Link to="/details">MovieDetail</Link>
        </div>
    )
}

export default Navbar
