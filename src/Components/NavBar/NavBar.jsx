import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__logo">
                <span className="nav-bar__logo-first">R</span>
                <span className="nav-bar__logo-last">it</span>
                <span className="nav-bar__logo-first">z</span>
            </div>
            <div className="nav-bar__links">
                <a className='nav-bar__link' href="#">ABOUT</a>
                <a className='nav-bar__link' href="#">SKILLS</a>
                <a className='nav-bar__link' href="#">PROJECTS</a>
                <a className='nav-bar__link' href="#">CONTACT</a>
            </div>
        </nav>
    );
};

export default NavBar;