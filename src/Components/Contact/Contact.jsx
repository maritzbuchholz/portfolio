import React from 'react';
import './Contact.scss';
import mailRed from '../../assets/mail-red.svg';
import linkedIn from '../../assets/linked.svg';
import gitBlue from '../../assets/gitblue.svg';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__content">
                <h2 className="contact__title">
                    <span className="contact__title-first">Let's</span>
                    <span className="contact__title-last">Talk</span>
                </h2>
                <div className="contact__divider"></div>
                
                <p className="contact__description">
                    Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and interesting challenges.
                </p>
                
                <div className="contact__info">
                    <a href="mailto:maritzbuchholz@gmail.com" target="_blank" rel="noreferrer" className="contact__info-item">
                        <img src={mailRed} alt="mail icon" className="contact__icon" />
                        <span>maritzbuchholz@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/maritzbuchholz/" target="_blank" rel="noreferrer" className="contact__info-item">
                        <img src={linkedIn} alt="linkedin icon" className="contact__icon" />
                        <span>linkedin.com/in/maritzbuchholz/</span>
                    </a>
                    <a href="https://github.com/maritzbuchholz/" target="_blank" rel="noreferrer" className="contact__info-item">
                        <img src={gitBlue} alt="github icon" className="contact__icon" />
                        <span>github.com/maritzbuchholz/</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;