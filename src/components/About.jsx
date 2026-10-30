import { useEffect, useRef, useState } from 'react';
import { Send, Download, MapPin } from '../icons.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE } from '../data/portfolioData';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

import { SKILL_CATEGORIES, SKILLS_BY_TAB } from './skillsData.jsx';

export default function About() {
  const sectionRef = useRef(null);
  const [skillTab, setSkillTab] = useState('technical');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        {/* Section label */}
        <div className="reveal">
          <span className="section-eyebrow">About</span>
        </div>

        {/* Main two-column grid */}
        <div className="about-grid">
          {/* Left: text */}
          <div className="about-left">
            <h2 className="section-title-large reveal">
              Crafting Digital
              <br />
              Experiences<span className="text-gradient">.</span>
            </h2>

            <div className="about-meta reveal">
              <div className="about-meta-item">
                <MapPin size={14} />
                <span>{PROFILE.location}</span>
              </div>
              <div className="about-status reveal">
                <span className="status-pulse" />
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="about-bio reveal">
              <p>
                Halo, saya <strong>{PROFILE.name}</strong> — lulusan{' '}
                <strong>Sistem Informasi Universitas Gunadarma</strong> (2026) dengan IPK{' '}
                <strong>3.66</strong>, asal Bekasi.
              </p>
              <p>
                Saya terbiasa bekerja efektif dan efisien, punya inisiatif tinggi, serta bisa
                bekerja mandiri maupun dalam tim. Selama kuliah saya mendapat pengalaman lewat
                riset akademik dan membangun website Online Futsal Field Booking sebagai bagian
                dari penelitian.
              </p>
              <p>
                Saya antusias mengembangkan skill, mencari pengalaman baru, dan terus belajar —
                mulai dari web development, database &amp; SQL, business intelligence, hingga
                jaringan komputer.
              </p>
            </div>

            <div className="about-actions reveal">
              <button className="btn-primary" onClick={() => scrollTo('#contact')}>
                <Send size={14} />
                Hubungi Saya
              </button>
              <a
                href={PROFILE.cvUrl}
                download="CV-Rayhan-Dandy-Ramadiansyah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download size={14} />
                Unduh CV
              </a>
            </div>
          </div>

          {/* Right: Education + Spotify */}
          <div className="about-right">
            <div className="about-edu-card reveal">
              <h3 className="about-edu-heading">Pendidikan</h3>
              <div className="about-edu-list">
                <div className="about-edu-item">
                  <div className="about-edu-top">
                    <span className="about-edu-Title">Universitas Gunadarma</span>
                    <span className="about-edu-year">2022 – 2026</span>
                  </div>
                  <p className="about-edu-sub">S1 Sistem Informasi · IPK 3.66 / 4.00</p>
                </div>
                <div className="about-edu-item">
                  <div className="about-edu-top">
                    <span className="about-edu-Title">SMKN 3 Bekasi</span>
                    <span className="about-edu-year">2019 – 2022</span>
                  </div>
                  <p className="about-edu-sub">Teknik Komputer dan Jaringan (TKJ)</p>
                </div>
              </div>
            </div>

            {/* Spotify embed */}
            <div className="about-spotify reveal">
              <div className="spotify-label">
                <span className="spotify-dot">♪</span>
                <span>Playlist yang sering menemani coding</span>
              </div>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${PROFILE.spotifyPlaylistId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px', display: 'block' }}
                title="Spotify Widget"
              />
            </div>
          </div>
        </div>

        {/* â”€â”€ KEAHLIAN SECTION (Like Reference Screenshot) â”€â”€ */}
        <div className="keahlian-block reveal">
          <h2 className="keahlian-title">Keahlian</h2>

          <div className="keahlian-tabs">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`keahlian-tab ${skillTab === cat.id ? 'keahlian-tab--active' : ''}`}
                onClick={() => setSkillTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="keahlian-cards-grid">
            {SKILLS_BY_TAB[skillTab].map((item) => (
              <div key={item.name} className="keahlian-card" style={{ '--c': item.color }}>
                <div className="keahlian-icon-box">
                  {item.svg}
                </div>
                <span className="keahlian-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

