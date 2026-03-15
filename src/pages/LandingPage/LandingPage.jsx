import React from 'react';
import './LandingPage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <main>
                <NavBar />
                <Hero />
                <About />
            </main>
        </div>
    );
};

export default LandingPage;