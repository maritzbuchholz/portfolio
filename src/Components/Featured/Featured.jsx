import React from 'react';
import git from '../../assets/git.svg';
import site from '../../assets/site.svg';
import './Featured.scss';


const FeaturedCard = ({ title, description, tags, accent, githubLink, externalLink }) => (
    <div className={`featured__card featured__card--${accent}`}>
        <div className="featured__card-header">
            <h3 className="featured__card-title">{title}</h3>
            <div className="featured__card-links">
                {externalLink && <a href={externalLink} target="_blank" rel="noreferrer"><img src={site} alt="site icon" className="featured__card-icon" /></a>}
                {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><img src={git} alt="git icon" className="featured__card-icon" /></a>}
            </div>
        </div>
        <p className="featured__card-description">{description}</p>
        <div className="featured__card-tags">
            {tags.map((tag, index) => (
                <span key={index} className="featured__card-tag">{tag}</span>
            ))}
        </div>
    </div>
);

const Featured = () => {
    const projectsTop = [
        {
            title: "Stare (WIP)",
            accent: "red",
            description: "A band website with merchant capabilities",
            tags: ["Stripe"],
            githubLink: "#",
            externalLink: "#"
        },
        {
            title: "Instock",
            accent: "blue",
            description: "Team built inventory management system",
            tags: ["React", "Express.js", "MySQL", "Heroku"],
            githubLink: "https://github.com/maritzbuchholz/instock-client",
            externalLink: "https://instock-maritz.netlify.app/"
        },

    ];

const projectsBottom = [
        {
            title: "Metalnome",
            accent: "green",
            description: "A metronome for metalheads with mobile functionality",
            tags: ["Tone.js", "Web Audio API"],
            githubLink: "https://github.com/maritzbuchholz/Metalnome",
            externalLink: "https://met6lnome.netlify.app/"
        },
        {
            title: "LoveBug",
            accent: "gold",
            description: "Front-end wireframe of relationship app",
            tags: ["React", "Javacript", "Antigravity"],
            githubLink: "https://github.com/maritzbuchholz/lovebug-client",
            externalLink: "https://lovebug26.netlify.app/"
        }
    ];

    return (
        <section id="featured" className="featured">
            <div className="featured__content">
                <h2 className="featured__title">
                    <span className="featured__title-first">Featured</span>
                    <span className="featured__title-last">Work</span>
                </h2>
                <div className="featured__divider"></div>
                
                <div className="featured__grid">
                    <div className="featured__top">
                        {projectsTop.map((project, index) => (
                            <FeaturedCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="featured__bottom">
                        {projectsBottom.map((project, index) => (
                            <FeaturedCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;