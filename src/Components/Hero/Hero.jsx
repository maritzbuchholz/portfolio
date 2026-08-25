import './Hero.scss';
import Button from '../Button/Button';

// The double-entry ledger: what came in from a decade in finance on the
// left, what it posts as in engineering on the right. Both columns must
// stay the same length so the book balances.
const BALANCE = [
    {
        debit: 'Institutional Finance', debitNote: 'Over a decade',
        credit: 'Node.js & Express', creditNote: 'APIs & services',
    },
    {
        debit: 'Finance & Math', debitNote: 'Analytical rigor',
        credit: 'JavaScript & React', creditNote: 'Interfaces that ship',
    },
    {
        debit: 'Commercial Mindset', debitNote: 'Built for the business',
        credit: 'MySQL & CI/CD', creditNote: 'Data & delivery',
    },
];

const Hero = () => {
    return (
        <section className="hero" id="top">
            <div className="hero__inner">
                <p className="hero__eyebrow">Backend Engineer</p>

                <h1 className="hero__name">
                    Maritz <span>Buchholz</span>
                </h1>

                <p className="hero__sub">
                    Creative problem solver with over a decade of experience in institutional finance
                </p>

                <div className="hero__actions">
                    <Button variant="solid" isLink={true} to="#contact">Get in Touch</Button>
                    <Button variant="ghost" isLink={true} to="#work">View Projects</Button>
                </div>

                {/* SIGNATURE — double-entry balance */}
                <div className="balance">
                    <div className="rule-ink" />

                    <div className="balance__head">
                        <div className="meta">Finance</div>
                        <div className="meta">Engineering</div>
                    </div>

                    {BALANCE.map((row) => (
                        <div className="balance__row" key={row.debit}>
                            <div>
                                <span className="balance__entry">{row.debit}</span>
                                <span className="balance__note">{row.debitNote}</span>
                            </div>
                            <div>
                                <span className="balance__entry">{row.credit}</span>
                                <span className="balance__note">{row.creditNote}</span>
                            </div>
                        </div>
                    ))}

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
