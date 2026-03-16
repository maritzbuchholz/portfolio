import React from 'react';
import './Contact.scss';
import mailRed from '../../assets/mail-red.svg';
import linkedIn from '../../assets/linked.svg';
import gitBlue from '../../assets/gitblue.svg';

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
            </div>
        </section>
    );
};

export default Contact;