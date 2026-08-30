import './Hero.scss';
import '../Button/Button.scss';

// Placeholder rows — swap for real content later.
// Left and right must stay the same length so the ledger balances.
const BALANCE = [
  { debit: 'Loan Operations',      debitNote: 'Placeholder entry', credit: 'Node.js & Express',   creditNote: 'Placeholder entry' },
  { debit: 'Capital Markets',      debitNote: 'Placeholder entry', credit: 'React & TypeScript',  creditNote: 'Placeholder entry' },
  { debit: 'Portfolio Management', debitNote: 'Placeholder entry', credit: 'MySQL & CI/CD',       creditNote: 'Placeholder entry' },
];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__eyebrow">Backend Engineer</p>

        <h1 className="hero__name">
          Maritz <span>Buchholz</span>
        </h1>

        <p className="hero__sub">
          Creative problem solver with over a decade of experience in
          institutional finance.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#contact">Get in touch</a>
          <a className="btn btn--ghost" href="#work">View work</a>
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
            <span className="meta">Ten years, carried forward</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
