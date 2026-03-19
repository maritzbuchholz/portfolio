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
                    Creative problem solver with a background in finance and a passion for building.
                </p>
                <div className="hero__buttons">
                    <Button icon="envelope" variant="primary" isLink={true} to="#contact">Get in Touch</Button>
                    <Button iconRight="arrow-down" variant="secondary" isLink={true} to="#featured">View Projects</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;