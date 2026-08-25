import Section from '../Section/Section';
import './Featured.scss';

const PROJECTS = [
    // {
    //     ref: "000",
    //     name: "Stare (WIP)",
    //     description: "A band website with merchant capabilities",
    //     stack: ["Stripe"],
    //     repo: "#",
    //     live: "#"
    // },
    {
        ref: "001",
        name: "Instock",
        description: "Team built inventory management system",
        stack: ["React", "Express.js", "MySQL", "Heroku"],
        repo: "https://github.com/maritzbuchholz/instock-client",
        live: "https://instock-maritz.netlify.app/"
    },
    {
        ref: "002",
        name: "LoveBug",
        description: "Front-end wireframe of relationship app",
        stack: ["React", "JavaScript", "Antigravity"],
        repo: "https://github.com/maritzbuchholz/lovebug-client",
        live: "https://lovebug26.netlify.app/"
    },
    {
        ref: "003",
        name: "Metalnome",
        description: "A metronome for metalheads with mobile functionality",
        stack: ["Tone.js", "Web Audio API"],
        repo: "https://github.com/maritzbuchholz/Metalnome",
        live: "https://met6lnome.netlify.app/"
    },
];

const Featured = () => {
    return (
        <Section
            id="work"
            folio="03"
            label={`Entries — ${String(PROJECTS.length).padStart(2, '0')}`}
            title={<>Featured <em>work</em></>}
        >
            <div className="entries">
                {PROJECTS.map((project) => (
                    <article className="entry" key={project.ref}>
                        <span className="meta entry__ref">Prj&mdash;{project.ref}</span>
                        <div>
                            <div className="entry__top">
                                <h3 className="entry__name">{project.name}</h3>
                                <span className="entry__links">
                                    {project.live && (
                                        <a
                                            className="entry__link"
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${project.name} — live site`}
                                        >
                                            Live
                                        </a>
                                    )}
                                    {project.repo && (
                                        <a
                                            className="entry__link"
                                            href={project.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${project.name} — repository`}
                                        >
                                            Repo
                                        </a>
                                    )}
                                </span>
                            </div>
                            <p className="entry__desc">{project.description}</p>
                            <ul className="entry__stack">
                                {project.stack.map((tag) => <li key={tag}>{tag}</li>)}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
};

export default Featured;
