import './Hero.scss';
import Button from '../Button/Button';

// The double-entry ledger: what it posts as in engineering on the left,
// what came in from a decade in finance on the right. Both columns must
// stay the same length so the book balances.
const ENGINEERING = [
    { entry: 'Node.js & Express', note: 'APIs & services' },
    { entry: 'JavaScript & React', note: 'Interfaces that ship' },
    { entry: 'MySQL & CI/CD', note: 'Data & delivery' },
];

const FINANCE = [
    { entry: 'Institutional Finance', note: 'Over a decade' },
    { entry: 'Finance & Math', note: 'Analytical rigor' },
    { entry: 'Commercial Mindset', note: 'Built for the business' },
];

// One side of the balance. The two sides sit on a shared grid on wide
// screens; on narrow ones each column stacks as its own ruled block.
const BalanceColumn = ({ side, label, entries }) => (
    <div className={`balance__col balance__col--${side}`}>
        <div className="balance__head">{label}</div>
        {entries.map((row) => (
            <div className="balance__cell" key={row.entry}>
                <span className="balance__entry">{row.entry}</span>
                <span className="balance__note">{row.note}</span>
            </div>
        ))}
    </div>
);

const Hero = () => {
    return (
        <section className="hero" id="top">
            <div className="hero__inner">
                <p className="hero__eyebrow">Backend Engineer</p>

                <h1 className="hero__name">
                    Maritz <span>Buchholz</span>
                </h1>

                <p className="hero__sub">
                    Combining +10 years of Vice President-level financial systems authority with modern backend development
                </p>

                <div className="hero__actions">
                    <Button variant="solid" isLink={true} to="#contact">Contact</Button>
                    <Button variant="ghost" isLink={true} to="#work">Projects</Button>
                </div>

                {/* SIGNATURE — double-entry balance */}
                <div className="balance">
                    <div className="rule-ink" />

                    <div className="balance__cols">
                        <BalanceColumn side="eng" label="Engineering" entries={ENGINEERING} />
                        <BalanceColumn side="fin" label="Finance" entries={FINANCE} />
                    </div>

                    <div className="balance__foot">
                        <span className="meta">Balance c/f</span>
                        <span className="meta">A decade, carried forward</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
