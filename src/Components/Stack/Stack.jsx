import Section from '../Section/Section';
import './Stack.scss';

const ACCOUNTS = [
    { no: '01', name: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Python', 'C++'] },
    { no: '02', name: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Stripe Checkout', 'MySQL'] },
    { no: '03', name: 'DevOps & CI/CD', items: ['Git', 'GitHub', 'Railway', 'Heroku', 'Netlify', 'GitHub Actions'] },
    { no: '04', name: 'Tools & Platforms', items: ['Agile / Scrum', 'Jira', 'Vite', 'npm', 'Claude Code', 'Antigravity'] },
];

const Stack = () => {
    return (
        <Section
            id="stack"
            number="02"
            label={`STACK`}
            title={<>Tech <em>stack</em></>}
        >
            <div className="accounts">
                <div className="accounts__head">
                    <span className="meta">No.</span>
                    <span className="meta">Account</span>
                    <span className="meta">Entries</span>
                </div>

                {ACCOUNTS.map((account) => (
                    <div className="account" key={account.no}>
                        <span className="meta account__no">{account.no}</span>
                        <span className="account__name">{account.name}</span>
                        <span className="account__items">
                            {account.items.map((item) => <span key={item}>{item}</span>)}
                        </span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Stack;
