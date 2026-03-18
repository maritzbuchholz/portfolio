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
    const stackDataTop = [
        {
            category: "Frontend",
            accent: "red",
            items: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM", "Responsive Design"]
        },
        {
            category: "Backend",
            accent: "green",
            items: ["Node.js", "Express.js", "RESTful Services", "MySQL"]
        }
    ];

    const stackDataBottom = [
        {
            category: "DevOps & CI/CD",
            accent: "blue",
            items: ["Git", "GitHub", "GitHub Actions", "Heroku", "Netlify"]
        },
        {
            category: "Tools & Platforms",
            accent: "gold",
            items: ["Agile/Scrum", "Jira", "npm", "pip", "Vite"]
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
                    <div className="stack__top">
                        {stackDataTop.map((data, index) => (
                            <StackCard key={index} {...data} />
                        ))}
                    </div>
                    <div className="stack__bottom">
                        {stackDataBottom.map((data, index) => (
                            <StackCard key={index} {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;