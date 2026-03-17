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
                    I'm a software engineer who believes in writing code that lasts. With deep experience in distributed systems, web platforms, and developer tooling, I bring both technical rigor and creative problem-solving to every project.
                </p>
                <p className="about__description">
                    When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring the intersection of design and engineering.
                </p>
            </div>
        </section>
    );
};

export default About;