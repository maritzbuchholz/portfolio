import Section from '../Section/Section';
import './Contact.scss';
import '../Button/Button.scss';

const CHANNELS = [
  { label: 'Email',    value: 'maritzbuchholz@gmail.com',   href: 'mailto:maritzbuchholz@gmail.com' },
  { label: 'LinkedIn', value: 'in/maritzbuchholz',          href: 'https://linkedin.com/in/maritzbuchholz/' },
  { label: 'GitHub',   value: 'maritzbuchholz',             href: 'https://github.com/maritzbuchholz/' },
];

function Contact() {
  return (
    <Section
      id="contact"
      folio="04"
      label="Contact"
      title={<>Let's <em>talk</em></>}
    >
      <div className="contact">
        <p className="contact__lead">
          Please feel free to reach out with any interesting challenges or new
          opportunities.
        </p>

        <div className="contact__table">
          {CHANNELS.map((c) => (
            <a className="contact__row" key={c.label} href={c.href}>
              <span className="meta">{c.label}</span>
              <span className="contact__val">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="contact__cta">
          <a className="btn btn--solid" href="/resume.pdf">Download résumé (PDF)</a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
