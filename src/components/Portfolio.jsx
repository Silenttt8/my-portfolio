import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X, ArrowLeft, Code2, Award } from '../icons.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, CERTIFICATES } from '../data/portfolioData';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: 'projects', label: 'Projects', icon: <Code2 size={14} /> },
  { id: 'certificates', label: 'Courses', icon: <Award size={14} /> },
];

function ProjectCard({ project, onClick }) {
  return (
    <article className="pcard" onClick={() => onClick(project)}>
      {/* Visual */}
      <div className="pcard-visual" style={{ background: project.gradient }}>
        {project.image
          ? <img src={project.image} alt={project.title} className="pcard-img" />
          : <span className="pcard-emoji">{project.emoji}</span>
        }
        <div className="pcard-overlay">
          <span className="pcard-cta">Lihat Detail →</span>
        </div>
        {project.featured && <span className="pcard-badge">Featured</span>}
      </div>

      {/* Info */}
      <div className="pcard-info">
        <div className="pcard-category">{project.category}</div>
        <h3 className="pcard-title">{project.title}</h3>
        <p className="pcard-desc">{project.description}</p>
        <div className="pcard-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="ptag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    gsap.fromTo(ref.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-box" ref={ref} onClick={(e) => e.stopPropagation()}>
        <div className="modal-topbar">
          <button className="modal-back" onClick={onClose}><ArrowLeft size={14} /> Back</button>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close"><X size={16} /></button>
        </div>

        <div className="modal-content">
          <div className="modal-info">
            <span className="modal-cat">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-desc">{project.longDescription}</p>

            <div className="modal-tech-section">
              <span className="modal-tech-label">Teknologi</span>
              <div className="modal-tags">
                {project.tags.map((t) => <span key={t} className="ptag">{t}</span>)}
              </div>
            </div>

            <div className="modal-actions">
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ExternalLink size={14} /> Demo Live
                </a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>

          <div className="modal-visual" style={{ background: project.gradient }}>
            {project.image
              ? <img src={project.image} alt={project.title} className="modal-img" />
              : <span className="modal-emoji">{project.emoji}</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, onOpen }) {
  return (
    <div className="cert-card" style={{ '--c': cert.color }} onClick={() => onOpen(cert)}>
      <div className="cert-thumb">
        {cert.image ? (
          <img src={cert.image} alt={cert.name} loading="lazy" />
        ) : (
          <div className="cert-placeholder">
            <Award size={34} color={cert.color} />
            <span>{cert.name}</span>
          </div>
        )}
        <div className="cert-hover">
          <span>Lihat sertifikat <ExternalLink size={14} /></span>
        </div>
      </div>
      <div className="cert-caption">
        <h3 className="cert-name">{cert.name}</h3>
        <span className="cert-meta">{cert.issuer} · {cert.date}</span>
      </div>
    </div>
  );
}

function CertLightbox({ cert, onClose }) {
  if (!cert) return null;
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="cert-lightbox" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn cert-lb-close" onClick={onClose} aria-label="Close"><X size={16} /></button>
        {cert.image
          ? <img src={cert.image} alt={cert.name} />
          : <div className="cert-lb-empty"><Award size={40} color={cert.color} /><p>{cert.name}</p><small>Gambar sertifikat belum ditambahkan</small></div>}
        <p className="cert-lb-title">{cert.name} <small>· {cert.date}</small>{cert.url && cert.url !== '#' && <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-lb-pdf">Buka PDF</a>}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState('projects');
  const [active, setActive] = useState(null);
  const [cert, setCert] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.pcard, .cert-card').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: el, start: 'top 87%', once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [tab]);

  return (
    <section id="portfolio" className="section portfolio" ref={sectionRef}>
      <div className="container">
        <span className="section-eyebrow">Portfolio</span>

        <div className="port-header">
          <h2 className="section-title-large">
            Selected<br />Work<span className="text-gradient">.</span>
          </h2>

          <div className="port-tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`port-tab ${tab === t.id ? 'port-tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {tab === 'projects' && (
          <div className="port-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={setActive} />
            ))}
          </div>
        )}

        {tab === 'certificates' && (
          <div className="cert-grid">
            {CERTIFICATES.map((c) => (
              <CertCard key={c.id} cert={c} onOpen={setCert} />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
      <CertLightbox cert={cert} onClose={() => setCert(null)} />
    </section>
  );
}


