import React from 'react';
import './LandingPage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Stack from '../../Components/Stack/Stack';
import Featured from '../../Components/Featured/Featured';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">  
            <main>
                <NavBar />
                <Hero />
                <About />
                <Stack />
                <Featured />
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

export default LandingPage;