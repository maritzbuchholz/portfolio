import { useEffect, useState } from 'react';
import up from '../../assets/up.svg';
import './NavBar.scss';

const LINKS = [
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
];

// How far down the page the back-to-top control appears.
const SHOW_AFTER = 240;

// A section counts as current once its top passes this line, which sits
// just below the sticky header.
const PROBE = 100;

// The last section whose top has scrolled above the probe. Returns '' while
// the hero still fills that band, so no link is marked at the top of the page.
const currentSection = () => {
    let current = '';

    for (const { href } of LINKS) {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= PROBE) current = href;
    }

    // The closing section can be too short to ever reach the probe, so at the
    // bottom of the page it is the one being read regardless.
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = LINKS[LINKS.length - 1].href;

    return current;
};

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        let frame = 0;

        const measure = () => {
            frame = 0;
            setScrolled(window.scrollY > SHOW_AFTER);
            setActive(currentSection());
        };

        // Scroll fires far faster than the screen repaints, and each pass
        // reads layout, so coalesce them onto the frame.
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(measure);
        };

        measure();   // a reload can restore a scrolled position
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <header className="nav">
            <div className="nav__inner">
                <div className="nav__id">
                    <a className="nav__brand" href="#top">
                        Maritz<em>&nbsp;/&nbsp;</em>Buchholz
                    </a>

                    <a
                        className={`nav__top${scrolled ? ' nav__top--shown' : ''}`}
                        href="#top"
                        aria-label="Back to top"
                        aria-hidden={!scrolled}
                        tabIndex={scrolled ? undefined : -1}
                    >
                        <img className="nav__top-icon" src={up} alt="" />
                    </a>
                </div>

                <nav className="nav__links">
                    {LINKS.map((link) => (
                        <a
                            className={`nav__link${active === link.href ? ' nav__link--active' : ''}`}
                            key={link.href}
                            href={link.href}
                            aria-current={active === link.href ? 'true' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

            </div>
        </header>
    );
};

export default NavBar;
