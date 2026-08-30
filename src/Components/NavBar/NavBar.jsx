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

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER);

        onScroll();   // a reload can restore a scrolled position
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
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
                        <a className="nav__link" key={link.href} href={link.href}>{link.label}</a>
                    ))}
                </nav>

            </div>
        </header>
    );
};

export default NavBar;
