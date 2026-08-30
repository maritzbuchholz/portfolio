import './NavBar.scss';

const LINKS = [
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
];

const NavBar = () => {
    return (
        <header className="nav">
            <div className="nav__inner">
                <a className="nav__brand" href="#top">
                    Maritz<em>&nbsp;/&nbsp;</em>Buchholz
                </a>

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
