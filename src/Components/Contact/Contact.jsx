import React from 'react';
import './Contact.scss';

import Button from '../Button/Button';

import mailRed from '../../assets/mail-red.svg';
import linkedIn from '../../assets/linked.svg';
import gitBlue from '../../assets/gitblue.svg';

const SendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const Contact = () => {
    return (
        <section className="contact">
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
                    <div className="contact__info-item">
                        <img src={mailRed} alt="mail icon" className="contact__icon" />
                        <span>john@example.com</span>
                    </div>
                    <div className="contact__info-item">
                        <img src={linkedIn} alt="linkedin icon" className="contact__icon" />
                        <span>San Francisco, CA</span>
                    </div>
                    <div className="contact__info-item">
                        <img src={gitBlue} alt="github icon" className="contact__icon" />
                        <span>github.com/placeholder</span>
                    </div>
                </div>

                <div className="contact__action">
                    <Button variant="primary" icon={<SendIcon />}>Send a Message</Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;