import React from 'react';
import './LandingPage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <main>
                <NavBar />
                <Hero />
            </main>
        </div>
    );
};

export default LandingPage;