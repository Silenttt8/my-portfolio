import { useState, useEffect } from 'react';
import { Menu, X } from '../icons.js';
import './Navbar.css';

const NAV_LINKS = ['home', 'about', 'portfolio', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(Boolean);
      let current = 'home';
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 160) current = sec.id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav-header${scrolled || menuOpen ? ' nav-header--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-wordmark" onClick={(e) => handleClick(e, 'home')}>
          Rayhan Dandy R<span className="nav-wordmark__dot">.</span>
        </a>

        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`nav-link${active === link ? ' nav-link--active' : ''}`}
              onClick={(e) => handleClick(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Hubungi Saya
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
