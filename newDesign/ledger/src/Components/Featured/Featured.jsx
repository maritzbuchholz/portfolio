import Section from '../Section/Section';
import './Featured.scss';

const PROJECTS = [
  {
    ref: '001',
    name: 'Instock',
    desc: 'Team-built inventory management system.',
    stack: ['React', 'Express.js', 'MySQL', 'Heroku'],
    live: '#',
    repo: '#',
  },
  {
    ref: '002',
    name: 'LoveBug',
    desc: 'Front-end wireframe of a relationship app.',
    stack: ['React', 'JavaScript', 'Antigravity'],
    live: '#',
    repo: '#',
  },
  {
    ref: '003',
    name: 'Metalnome',
    desc: 'A metronome for metalheads, with mobile audio support.',
    stack: ['Tone.js', 'Web Audio API'],
    live: '#',
    repo: '#',
  },
];

function Featured() {
  return (
    <Section
      id="work"
      folio="03"
      label={`Entries — ${String(PROJECTS.length).padStart(2, '0')}`}
      title={<>Featured <em>work</em></>}
    >
      <div className="entries">
        {PROJECTS.map((p) => (
          <article className="entry" key={p.ref}>
            <span className="meta entry__ref">Prj—{p.ref}</span>
            <div>
              <div className="entry__top">
                <h3 className="entry__name">{p.name}</h3>
                <span className="entry__links">
                  <a className="entry__link" href={p.live}>Live</a>
                  <a className="entry__link" href={p.repo}>Repo</a>
                </span>
              </div>
              <p className="entry__desc">{p.desc}</p>
              <ul className="entry__stack">
                {p.stack.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Featured;
