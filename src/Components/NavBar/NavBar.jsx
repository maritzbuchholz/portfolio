import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="nav-bar__links">
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;