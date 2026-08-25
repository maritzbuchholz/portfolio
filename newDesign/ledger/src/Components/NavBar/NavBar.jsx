import './NavBar.scss';

const LINKS = [
  { href: '#about',   label: 'About' },
  { href: '#stack',   label: 'Stack' },
  { href: '#work',    label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          Maritz<em>&nbsp;/&nbsp;</em>Buchholz
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a className="nav__link" key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <span className="meta">NY · 2026</span>
      </div>
    </header>
  );
}

export default NavBar;
