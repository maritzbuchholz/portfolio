import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">
                    <span className="about__title-first">About</span>
                    <span className="about__title-last">Me</span>
                </h2>
                <div className="about__divider"></div>
                <p className="about__description">
                    I am a full-stack engineer who strives to write robust and efficient code. With a background in finance and math, I approach every project with analytical rigor and a commercial mindset.
                </p>
                <p className="about__description">
                    When I'm not coding, you'll find me playing the drums, watching baseball, or day trading my personal account!
                </p>
            </div>
        </section>
    );
};

export default About;