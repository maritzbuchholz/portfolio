import Section from '../Section/Section';
import Button from '../Button/Button';
import resume from '../../assets/Maritz Buchholz - Resume.pdf';
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
            number="04"
            label="Contact"
            title={<>Contact <em>Me</em></>}
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
                        Email
                    </Button>
                    {/* download names the saved file, since Vite fingerprints the asset. */}
                    <Button variant="ghost" isLink={true} to={resume} download="Maritz Buchholz - Resume.pdf">
                        Resume
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
