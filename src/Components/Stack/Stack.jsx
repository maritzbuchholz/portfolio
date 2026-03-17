import React from 'react';
import './Stack.scss';

const StackCard = ({ category, accent, items }) => (
    <div className="stack__card">
        <div className={`stack__card-line stack__card-line--${accent}`}></div>
        <h3 className="stack__card-title">{category}</h3>
        <ul className="stack__card-list">
            {items.map((item, index) => (
                <li key={index}>
                    <span className="stack__card-bullet"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Stack = () => {
    const stackData = [
        {
            category: "Languages",
            accent: "red",
            items: ["JavaScript", "Python", "Go", "Rust"]
        },
        {
            category: "Frontend",
            accent: "green",
            items: ["React", "Next.js", "Tailwind", "Vue"]
        },
        {
            category: "Backend",
            accent: "blue",
            items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"]
        },
        {
            category: "DevOps",
            accent: "gold",
            items: ["Docker", "AWS", "CI/CD", "Terraform"]
        }
    ];

    return (
        <section id="skills" className="stack">
            <div className="stack__content">
                <h2 className="stack__title">
                    <span className="stack__title-first">Tech</span>
                    <span className="stack__title-last">Stack</span>
                </h2>
                <div className="stack__divider"></div>
                
                <div className="stack__grid">
                    {stackData.map((data, index) => (
                        <StackCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;