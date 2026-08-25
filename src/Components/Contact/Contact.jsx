import Section from '../Section/Section';
import Button from '../Button/Button';
import './Contact.scss';

const CHANNELS = [
    {
        label: 'Email',
        value: 'maritzbuchholz@gmail.com',
        href: 'mailto:maritzbuchholz@gmail.com',
        external: false
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/maritzbuchholz/',
        href: 'https://www.linkedin.com/in/maritzbuchholz/',
        external: true
    },
    {
        label: 'GitHub',
        value: 'github.com/maritzbuchholz/',
        href: 'https://github.com/maritzbuchholz/',
        external: true
    },
];

const Contact = () => {
    return (
        <Section
            id="contact"
            folio="04"
            label="Contact"
            title={<>Let's <em>talk</em></>}
        >
            <div className="contact">
                <p className="contact__lead">
                    Please feel free to reach out with any interesting challenges or new opportunities
                </p>

                <div className="contact__table">
                    {CHANNELS.map((channel) => (
                        <a
                            className="contact__row"
                            key={channel.label}
                            href={channel.href}
                            {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                            <span className="meta">{channel.label}</span>
                            <span className="contact__val">{channel.value}</span>
                        </a>
                    ))}
                </div>

                <div className="contact__cta">
                    <Button variant="solid" isLink={true} to="mailto:maritzbuchholz@gmail.com">
                        Send an Email
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
