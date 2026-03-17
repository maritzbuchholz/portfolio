import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__logo">
                <a className='nav-bar__logo-link' href="#">
                    <span className="nav-bar__logo-first">R</span>
                    <span className="nav-bar__logo-last">it</span>
                    <span className="nav-bar__logo-first">z</span>
                </a>
            </div>
            <div className="nav-bar__links">
                <a className='nav-bar__link' href="#about">ABOUT</a>
                <a className='nav-bar__link' href="#skills">SKILLS</a>
                <a className='nav-bar__link' href="#featured">PROJECTS</a>
                <a className='nav-bar__link' href="#contact">CONTACT</a>
            </div>
        </nav>
    );
};

export default NavBar;