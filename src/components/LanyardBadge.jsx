import { useState, useRef, useEffect } from 'react';
import './LanyardBadge.css';

export default function LanyardBadge() {
  const badgeRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      if (!badgeRef.current) return;
      const rect = badgeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate relative position (-1 to 1)
      const relX = (x / rect.width - 0.5) * 2;
      const relY = (y / rect.height - 0.5) * 2;

      // Limit max tilt angles (degrees)
      targetX = -relY * 18;
      targetY = relX * 22;

      setGlare({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.65,
      });
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      setGlare((prev) => ({ ...prev, opacity: 0 }));
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const el = badgeRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mouseenter', handleMouseEnter);
    }

    // Smooth lerp loop
    const update = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      setRotate({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrame);
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <div className="lanyard-container">
      {/* Lanyard Strap */}
      <div className="lanyard-strap">
        <div className="lanyard-strap__text">
          <span>RAYHAN DANDY</span>
          <span>•</span>
          <span>FRONTEND DEV</span>
          <span>•</span>
          <span>CREATIVE CODER</span>
          <span>•</span>
          <span>RAYHAN DANDY</span>
        </div>
      </div>

      {/* Metal Clasp / Clip */}
      <div className="lanyard-clasp">
        <div className="lanyard-clasp__ring" />
        <div className="lanyard-clasp__metal" />
      </div>

      {/* 3D Badge Card */}
      <div
        ref={badgeRef}
        className={`lanyard-card-wrap ${isHovered ? 'lanyard-card-wrap--hovered' : ''}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        }}
      >
        <div className="lanyard-card">
          {/* Card Top Slot */}
          <div className="lanyard-card__slot" />

          {/* Glare / Specular Reflection */}
          <div
            className="lanyard-card__glare"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)`,
              opacity: glare.opacity,
            }}
          />

          {/* Badge Content */}
          <div className="lanyard-card__inner">
            {/* Header */}
            <div className="badge-header">
              <span className="badge-tag">JUNIOR DEVELOPER</span>
              <div className="badge-logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
            </div>

            {/* Photo / Portrait Mockup */}
            <div className="badge-photo-container">
              <div className="badge-photo-frame">
                <div className="badge-photo-avatar">
                  {/* Stylized Modern Developer Silhouette */}
                  <div className="badge-photo-figure">
                    <div className="figure-head" />
                    <div className="figure-body" />
                  </div>
                  <div className="badge-photo-overlay">
                    <span className="badge-photo-name">RAYHAN DANDY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="badge-info">
              <h3 className="badge-name">RAYHAN DANDY</h3>
              <p className="badge-role">FRONTEND DEVELOPER</p>
              <div className="badge-chips">
                <span className="badge-chip">REACT</span>
                <span className="badge-chip">THREE.JS</span>
                <span className="badge-chip">GSAP</span>
              </div>
            </div>

            {/* Barcode & Footer */}
            <div className="badge-footer">
              <div className="badge-barcode">
                <div className="barcode-bars" />
                <span className="barcode-number">RD-2024-PORTFOLIO-PASS</span>
              </div>
              <p className="badge-quote">"Don't repeat yourself"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
