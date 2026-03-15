import React from 'react';
import './LandingPage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Stack from '../../Components/Stack/Stack';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <main>
                <NavBar />
                <Hero />
                <About />
                <Stack />
            </main>
        </div>
    );
};

export default LandingPage;