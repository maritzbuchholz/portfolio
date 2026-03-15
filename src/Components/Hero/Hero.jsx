import React from 'react';
import './Hero.scss';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h5 className="hero__subtitle">Full-Stack Developer</h5>
                <h1 className="hero__title">
                    <span className="hero__title-first">Maritz</span><br/>
                    <span className="hero__title-last">Buchholz</span>
                </h1>
                <div className="hero__divider"></div>
                <p className="hero__description">
                    Building robust, scalable software with precision and craft.<br/>
                    Specializing in full-stack development, system design, and clean architecture.
                </p>
                <div className="hero__buttons">
                    <Button icon="envelope" variant="primary">Get in Touch</Button>
                    <Button iconRight="arrow-down" variant="secondary">View Projects</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;