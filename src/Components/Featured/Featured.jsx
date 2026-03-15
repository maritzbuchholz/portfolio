import React from 'react';
import git from '../../assets/git.svg';
import site from '../../assets/site.svg';
import './Featured.scss';


const FeaturedCard = ({ title, description, tags, accent, githubLink, externalLink }) => (
    <div className={`featured__card featured__card--${accent}`}>
        <div className="featured__card-header">
            <h3 className="featured__card-title">{title}</h3>
            <div className="featured__card-links">
                {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><img src={site} alt="site icon" className="featured__card-icon" /></a>}
                {externalLink && <a href={externalLink} target="_blank" rel="noreferrer"><img src={git} alt="git icon" className="featured__card-icon" /></a>}
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
    const projects = [
        {
            title: "DataForge",
            accent: "red",
            description: "High-performance data pipeline framework processing 10M+ events/day with real-time analytics.",
            tags: ["Go", "Kafka", "PostgreSQL"],
            githubLink: "#",
            externalLink: "#"
        },
        {
            title: "CloudDeploy",
            accent: "green",
            description: "Zero-downtime deployment platform with automated rollbacks and canary releases.",
            tags: ["TypeScript", "Docker", "AWS"],
            githubLink: "#",
            externalLink: "#"
        },
        {
            title: "DevMetrics",
            accent: "blue",
            description: "Engineering productivity dashboard tracking code quality, velocity, and team health metrics.",
            tags: ["React", "Python", "D3.js"],
            githubLink: "#",
            externalLink: "#"
        },
        {
            title: "AuthKit",
            accent: "gold",
            description: "Open-source authentication library with OAuth2, SAML, and passwordless login support.",
            tags: ["Rust", "Node.js", "Redis"],
            githubLink: "#",
            externalLink: "#"
        }
    ];

    return (
        <section className="featured">
            <div className="featured__content">
                <h2 className="featured__title">
                    <span className="featured__title-first">Featured</span>
                    <span className="featured__title-last">Work</span>
                </h2>
                <div className="featured__divider"></div>
                
                <div className="featured__grid">
                    {projects.map((project, index) => (
                        <FeaturedCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;