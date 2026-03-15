import React from 'react';
import './Contact.scss';

import Button from '../Button/Button';

const EnvelopeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__icon contact__icon--red">
        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
        <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__icon contact__icon--green">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

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
                        <EnvelopeIcon />
                        <span>john@example.com</span>
                    </div>
                    <div className="contact__info-item">
                        <MapPinIcon />
                        <span>San Francisco, CA</span>
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