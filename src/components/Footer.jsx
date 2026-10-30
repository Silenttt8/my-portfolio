import { Github, Linkedin, Instagram } from '../icons.js';
import { PROFILE } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {PROFILE.name}<span className="footer-brand-dot">.</span>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="f-social" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="f-social" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="f-social" aria-label="Instagram">
            <Instagram size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
