import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Terminal, Sparkles, Check, Code2 } from '../icons.js';
import gsap from 'gsap';
import { PROFILE } from '../data/portfolioData';
import './Hero.css';

const ROLES = ['Frontend Developer', 'Creative Coder', 'UI Craftsman'];

const WORKFLOW_STEPS = [
  { id: '01', label: 'UI Architecture & Design System', status: 'done', time: '0.4s' },
  { id: '02', label: 'Interactive React & Three.js', status: 'done', time: '0.8s' },
  { id: '03', label: 'GSAP Motion & Scroll Physics', status: 'active', time: 'live' },
  { id: '04', label: 'Production-Ready Deployment', status: 'queued', time: 'ready' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [activeStep, setActiveStep] = useState(2);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-anim]', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.11,
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="container">
        <div className="hero-layout">
          {/* ── Text Column ── */}
          <div className="hero-text-col">
            <div className="hero-eyebrow" data-hero-anim>
              <span className="eyebrow-dot" />
              <span>@Dandyy · available for projects</span>
            </div>

            <h1 className="hero-heading" data-hero-anim>
              <span className="hero-name-text">{PROFILE.name}</span>
              <br />
              <span className="heading-roles">
                {ROLES.map((role, i) => (
                  <span
                    key={role}
                    className="heading-role"
                    style={{ animationDelay: `${i * 3}s` }}
                  >
                    {role}
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-sub" data-hero-anim>
              Membangun antarmuka web yang tidak sekadar berfungsi, tapi juga
              menyenangkan untuk digunakan — dengan presisi kode dan estetika modern.
            </p>

            <div className="hero-btns" data-hero-anim>
              <button className="btn-primary" onClick={() => scrollTo('portfolio')}>
                <Sparkles size={15} />
                Lihat Portfolio
              </button>
              <button className="btn-ghost" onClick={() => scrollTo('contact')}>
                Hubungi Saya
              </button>
            </div>

            <div className="hero-socials" data-hero-anim>
              <span className="socials-label">Temukan saya di</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Github"
              >
                <Github size={16} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Linkedin"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* ── Jules-Style Photo & Interactive Console Card ── */}
          <div className="hero-photo-col" data-hero-anim>
            <div
              className="jules-card-wrap"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="photo-glow" />

              <div className="jules-window">
                {/* Window Topbar */}
                <div className="jules-window__bar">
                  <div className="jules-dots">
                    <span className="jules-dot jules-dot--red" />
                    <span className="jules-dot jules-dot--yellow" />
                    <span className="jules-dot jules-dot--green" />
                  </div>
                  <div className="jules-window__title">
                    <Terminal size={12} />
                    <span>Rayhan Dandy R — profile.tsx</span>
                  </div>
                  <span className="jules-window__badge">v2.5</span>
                </div>

                {/* Clean Circular Profile Card inside Jules Console */}
                <div className="jules-profile-card">
                  <div className="jules-avatar-ring">
                    {!imgError ? (
                      <img
                        src="profile.jpg?v=2"
                        alt={PROFILE.name}
                        className="jules-avatar-circle-img"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="jules-avatar-fallback">RDR</div>
                    )}
                    <span className="jules-avatar-online" title="Available for projects" />
                  </div>

                  <div className="jules-profile-meta">
                    <h3 className="jules-identity__name">{PROFILE.name}</h3>
                    <p className="jules-identity__role">{PROFILE.title}</p>
                    <div className="jules-profile-Badges">
                      <span className="jules-mini-pill">React.js</span>
                      <span className="jules-mini-pill">UI/UX</span>
                      <span className="jules-mini-pill">GSAP</span>
                    </div>
                  </div>
                </div>

                {/* Jules Live Pipeline */}
                <div className="jules-pipeline">
                  <div className="jules-pipeline__header">
                    <span>WORKFLOW PIPELINE</span>
                    <span className="jules-pipeline__status">● Autonomous</span>
                  </div>
                  {WORKFLOW_STEPS.map((step, idx) => {
                    const isCurrent = idx === activeStep;
                    const isDone = idx < activeStep;
                    return (
                      <div
                        key={step.id}
                        className={`jules-step ${isCurrent ? 'jules-step--active' : ''} ${isDone ? 'jules-step--done' : ''}`}
                      >
                        <span className="jules-step__num">
                          {isDone ? <Check size={11} /> : step.id}
                        </span>
                        <span className="jules-step__label">{step.label}</span>
                        <span className="jules-step__time">
                          {isCurrent ? 'running...' : step.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Tags */}
              <div className="photo-tag photo-tag--tl">
                <span className="tag-dot" />
                Open to Work
              </div>

              <div className="photo-tag photo-tag--br">
                <Code2 size={13} />
                <span>{PROFILE.stats.projects}+ Projects Crafted</span>
              </div>
            </div>

            <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll down">
              <span className="scroll-cue__line" />
              <span className="scroll-cue__text">Scroll</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
