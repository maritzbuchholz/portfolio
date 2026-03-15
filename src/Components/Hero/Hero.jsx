import React from 'react';
import './Hero.scss';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h5 className="hero__title">Full-Stack Developer</h5>
                <h1 className="hero__subtitle">Maritz Buchholz</h1>
                <p className="hero__description">I am a full-stack developer with a passion for building web applications.</p>
                <Button icon="envelope" variant="secondary">Contact Me</Button>
            </div>
        </section>
    );
};

export default Hero;