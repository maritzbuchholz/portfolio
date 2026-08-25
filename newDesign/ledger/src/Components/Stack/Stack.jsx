import Section from '../Section/Section';
import './Stack.scss';

const ACCOUNTS = [
  { no: '01', name: 'Languages',       items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'] },
  { no: '02', name: 'Backend',         items: ['Node.js', 'Express.js', 'RESTful APIs', 'MySQL'] },
  { no: '03', name: 'DevOps & CI/CD',  items: ['Git', 'GitHub', 'GitHub Actions', 'Netlify', 'Heroku'] },
  { no: '04', name: 'Tools & Platforms', items: ['Vite', 'npm', 'Jira', 'Agile / Scrum', 'Antigravity', 'Claude Code'] },
];

function Stack() {
  return (
    <Section
      id="stack"
      folio="02"
      label={`Accounts — ${String(ACCOUNTS.length).padStart(2, '0')}`}
      title={<>Tech <em>stack</em></>}
    >
      <div className="accounts">
        <div className="accounts__head">
          <span className="meta">No.</span>
          <span className="meta">Account</span>
          <span className="meta">Entries</span>
        </div>

        {ACCOUNTS.map((acc) => (
          <div className="account" key={acc.no}>
            <span className="meta account__no">{acc.no}</span>
            <span className="account__name">{acc.name}</span>
            <span className="account__items">
              {acc.items.map((item) => <span key={item}>{item}</span>)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Stack;
