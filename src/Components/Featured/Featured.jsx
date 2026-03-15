import React from 'react';
import './Featured.scss';

const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const FeaturedCard = ({ title, description, tags, accent, githubLink, externalLink }) => (
    <div className={`featured__card featured__card--${accent}`}>
        <div className="featured__card-header">
            <h3 className="featured__card-title">{title}</h3>
            <div className="featured__card-links">
                {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><GithubIcon /></a>}
                {externalLink && <a href={externalLink} target="_blank" rel="noreferrer"><ExternalLinkIcon /></a>}
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