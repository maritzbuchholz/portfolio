import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <section className="featured">
            <div className="featured__content">
                <h2 className="featured__title">Featured Projects</h2>
                <p className="featured__description">I am a full-stack developer with a passion for building web applications.</p>
            </div>
        </section>
    );
};

export default Featured;