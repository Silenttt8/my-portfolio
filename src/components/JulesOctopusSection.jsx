import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './JulesOctopusSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function JulesOctopusSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jules-pixel-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'steps(8)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });

      gsap.from('.octopus-svg-wrap', {
        scale: 0.88,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="jules-octopus-section" ref={sectionRef}>
      <div className="container">
        <div className="jules-stage">
          {/* ── LEFT COLUMN CARDS ── */}
          <div className="jules-side-col jules-side-col--left">
            {/* Cyan pixel glitch block top-left */}
            <div className="pixel-cluster pixel-cluster--cyan pixel-cluster--tl" aria-hidden="true">
              <span /><span /><span />
            </div>

            {/* Card 1: Top Left */}
            <div className="jules-pixel-card">
              <div className="jules-card-icon jules-card-icon--pink">
                {/* GitHub Pixel-Style Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <h3 className="jules-card-title">Web Development</h3>
              <p className="jules-card-desc">
                Membangun website dengan HTML, CSS, JavaScript, dan PHP, termasuk Online Futsal Field Booking.
              </p>
            </div>

            {/* Card 2: Bottom Left */}
            <div className="jules-pixel-card">
              <div className="jules-card-icon jules-card-icon--yellow">
                <span>&gt;_</span>
              </div>
              <h3 className="jules-card-title">Programming &amp; Database</h3>
              <p className="jules-card-desc">
                Terbiasa dengan Python, PHP, Java, serta Database &amp; SQL untuk pengembangan aplikasi.
              </p>
            </div>
          </div>

          {/* ── CENTER: SPLIT CYBER-OCTOPUS ILLUSTRATION ── */}
          <div className="octopus-center">
            {/* Purple pixel block top-left of octopus */}
            <div className="pixel-cluster pixel-cluster--purple pixel-cluster--octo-top" aria-hidden="true">
              <span /><span />
            </div>

            <div className="octopus-svg-wrap">
              <svg
                viewBox="0 0 500 520"
                className="octopus-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Right-side interior clip path */}
                  <clipPath id="rightOctoClip">
                    <path d="M 250 32 C 325 32, 355 88, 355 168 L 355 315 C 355 340, 388 355, 405 335 C 415 322, 405 292, 424 292 C 444 292, 452 325, 438 358 C 422 392, 378 398, 345 375 C 362 415, 385 438, 398 462 C 408 480, 390 502, 368 492 C 342 480, 315 442, 298 398 C 305 442, 322 475, 312 496 C 302 514, 275 508, 264 484 C 254 462, 250 422, 250 385 Z" />
                  </clipPath>
                </defs>

                {/* ==========================================
                    LEFT HALF: SOLID PURPLE OCTOPUS SILHOUETTE
                   ========================================== */}
                <g className="octo-left-half">
                  <path
                    d="M 250 32
                       C 175 32, 145 88, 145 168
                       L 145 312
                       C 145 338, 114 348, 102 326
                       C 94 312, 104 282, 82 280
                       C 58 278, 46 312, 60 350
                       C 76 388, 122 396, 158 372
                       C 140 412, 108 432, 86 446
                       C 68 458, 74 486, 98 484
                       C 132 480, 172 444, 196 396
                       C 186 438, 168 468, 162 488
                       C 156 508, 184 516, 204 498
                       C 226 476, 244 432, 250 385
                       Z"
                    fill="#6e2cf2"
                  />

                  {/* Pixelated stepped shadow/edge details */}
                  <rect x="139" y="140" width="6" height="170" fill="#6e2cf2" />
                  <rect x="54" y="305" width="8" height="36" fill="#6e2cf2" />

                  {/* Dark Eye on Left Half */}
                  <circle cx="212" cy="238" r="16" fill="#180330" />
                  <rect x="202" y="222" width="20" height="32" rx="8" fill="#180330" />

                  {/* Tiny cyan pixel highlight inside left tentacle curl */}
                  <rect x="128" y="320" width="6" height="12" fill="#38f8ff" className="pixel-blink" />
                  <rect x="134" y="326" width="6" height="6" fill="#38f8ff" className="pixel-blink" />
                </g>

                {/* ==========================================
                    RIGHT HALF: CYBERNETIC BRAIN & CIRCUITS
                   ========================================== */}
                <g className="octo-right-half">
                  {/* Dark interior background + thick purple pixel-stepped border */}
                  <path
                    d="M 250 32
                       C 325 32, 355 88, 355 168
                       L 355 315
                       C 355 340, 388 355, 405 335
                       C 415 322, 405 292, 424 292
                       C 444 292, 452 325, 438 358
                       C 422 392, 378 398, 345 375
                       C 362 415, 385 438, 398 462
                       C 408 480, 390 502, 368 492
                       C 342 480, 315 442, 298 398
                       C 305 442, 322 475, 312 496
                       C 302 514, 275 508, 264 484
                       C 254 462, 250 422, 250 385
                       Z"
                    fill="#120224"
                    stroke="#6e2cf2"
                    strokeWidth="10"
                    strokeLinejoin="round"
                  />

                  {/* Internal Cybernetic Elements Clipped to Right Half */}
                  <g clipPath="url(#rightOctoClip)">
                    {/* 1. PINK PIXEL BRAIN (Top Right) */}
                    <g className="octo-brain" transform="translate(256, 48)">
                      <path
                        d="M 4 12 H 28 V 6 H 52 V 14 H 72 V 28 H 84 V 54 H 90 V 88 H 78 V 104 H 48 V 112 H 18 V 104 H 4 Z"
                        fill="#e935a8"
                      />
                      {/* Brain gyri / dark folds */}
                      <path
                        d="M 14 26 H 38 V 38 H 24 V 52 H 48 V 36 H 66 V 58 H 54 V 74 H 76 V 86 H 42 V 96 H 20 V 78 H 34 V 64 H 12 Z"
                        fill="#180330"
                      />
                      <rect x="20" y="16" width="22" height="8" fill="#ff5ec4" />
                      <rect x="52" y="24" width="16" height="8" fill="#ff5ec4" />
                      <rect x="12" y="46" width="18" height="8" fill="#e935a8" />
                      <rect x="44" y="54" width="24" height="10" fill="#e935a8" />
                      <rect x="24" y="82" width="28" height="10" fill="#e935a8" />
                      {/* Brain pulse glow */}
                      <rect x="64" y="42" width="8" height="8" fill="#ffc61a" className="pixel-blink" />
                    </g>

                    {/* 2. CIRCUIT TRACES (Middle) */}
                    <g className="octo-circuits">
                      {/* Cyan vertical & stepped traces */}
                      <path d="M 262 172 V 212 H 278 V 230" stroke="#2bf0ff" strokeWidth="5" fill="none" />
                      <rect x="258" y="168" width="9" height="9" fill="#2bf0ff" />
                      <path d="M 294 176 H 308 V 202 H 294" stroke="#2bf0ff" strokeWidth="5" fill="none" />
                      <rect x="318" y="170" width="8" height="26" fill="#7c3aed" />
                      <rect x="332" y="178" width="8" height="14" fill="#e935a8" />

                      {/* Yellow circuit lines */}
                      <path d="M 260 222 L 284 202 H 312" stroke="#ffc61a" strokeWidth="5" fill="none" />
                      <rect x="336" y="198" width="10" height="22" fill="#ffc61a" />
                      <rect x="322" y="206" width="8" height="8" fill="#2bf0ff" className="pixel-blink" />
                    </g>

                    {/* 3. BIG PINK ROTATING GEAR */}
                    <g className="octo-gear-wrap" transform="translate(308, 258)">
                      <g className="octo-gear-spin">
                        {/* Gear teeth */}
                        <rect x="-8" y="-38" width="16" height="76" fill="#e935a8" />
                        <rect x="-38" y="-8" width="76" height="16" fill="#e935a8" />
                        <rect x="-28" y="-28" width="56" height="56" fill="#e935a8" />
                        {/* Gear body */}
                        <circle cx="0" cy="0" r="28" fill="#e935a8" />
                        {/* Gear inner cutout */}
                        <circle cx="0" cy="0" r="14" fill="#180330" />
                        {/* Yellow sparks inside gear */}
                        <rect x="-6" y="-5" width="5" height="5" fill="#ffc61a" />
                        <rect x="2" y="1" width="5" height="5" fill="#ffc61a" />
                      </g>
                    </g>

                    {/* 4. CYAN SEMI-RING ON CENTER DIVIDER */}
                    <path
                      d="M 250 256 A 26 26 0 0 1 250 308"
                      fill="none"
                      stroke="#2bf0ff"
                      strokeWidth="12"
                    />
                    <rect x="256" y="242" width="8" height="8" fill="#ffc61a" className="pixel-blink" />

                    {/* 5. YELLOW SINE WAVE / SNAKE IN LOWER BODY */}
                    <path
                      d="M 262 325 H 286 V 344 H 262 V 364 H 290 V 384 H 266"
                      fill="none"
                      stroke="#ffc61a"
                      strokeWidth="8"
                      strokeLinecap="square"
                    />

                    {/* 6. RIGHT TENTACLE CIRCUITS & SMALL CYAN GEAR */}
                    <rect x="304" y="304" width="6" height="28" fill="#2bf0ff" />
                    <rect x="318" y="310" width="16" height="6" fill="#2bf0ff" />
                    <rect x="336" y="298" width="8" height="22" fill="#2bf0ff" />
                    <rect x="328" y="330" width="10" height="10" fill="#ffc61a" className="pixel-blink" />
                    <rect x="310" y="344" width="8" height="18" fill="#e935a8" />

                    {/* Far-right curled tentacle pixels */}
                    <rect x="352" y="352" width="16" height="8" fill="#2bf0ff" />
                    <rect x="372" y="362" width="22" height="8" fill="#ffc61a" />
                    <rect x="406" y="348" width="12" height="12" fill="#e935a8" />
                    <rect x="422" y="312" width="10" height="24" fill="#2bf0ff" className="pixel-blink" />
                    <rect x="416" y="364" width="14" height="8" fill="#ffc61a" />

                    {/* Small Cyan Gear in Right Tentacle */}
                    <g transform="translate(362, 405)">
                      <g className="octo-gear-spin-reverse">
                        <rect x="-4" y="-16" width="8" height="32" fill="#2bf0ff" />
                        <rect x="-16" y="-4" width="32" height="8" fill="#2bf0ff" />
                        <circle cx="0" cy="0" r="12" fill="#2bf0ff" />
                        <circle cx="0" cy="0" r="5" fill="#180330" />
                      </g>
                    </g>

                    {/* Lower Tentacle Pixel Particles */}
                    <rect x="274" y="408" width="10" height="10" fill="#2bf0ff" className="pixel-blink" />
                    <rect x="288" y="424" width="8" height="16" fill="#e935a8" />
                    <rect x="268" y="442" width="14" height="8" fill="#ffc61a" />
                    <rect x="282" y="464" width="10" height="10" fill="#2bf0ff" />
                    <rect x="294" y="480" width="8" height="8" fill="#ffc61a" className="pixel-blink" />

                    <rect x="332" y="428" width="18" height="8" fill="#ffc61a" />
                    <rect x="354" y="444" width="10" height="14" fill="#2bf0ff" />
                    <rect x="370" y="464" width="14" height="10" fill="#e935a8" className="pixel-blink" />
                    <rect x="348" y="472" width="12" height="8" fill="#ffc61a" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Cyan pixel glitch block bottom-left of octopus */}
            <div className="pixel-cluster pixel-cluster--cyan pixel-cluster--octo-bot" aria-hidden="true">
              <span /><span /><span />
            </div>
          </div>

          {/* ── RIGHT COLUMN CARDS ── */}
          <div className="jules-side-col jules-side-col--right">
            {/* Cyan pixel glitch block middle-right */}
            <div className="pixel-cluster pixel-cluster--cyan pixel-cluster--mr" aria-hidden="true">
              <span /><span /><span />
            </div>

            {/* Card 3: Top Right */}
            <div className="jules-pixel-card">
              <div className="jules-card-icon jules-card-icon--cyan">
                {/* Shield Check Pixel-Style Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                </svg>
              </div>
              <h3 className="jules-card-title">Data &amp; Business Intelligence</h3>
              <p className="jules-card-desc">
                Memahami Business Intelligence, Data Preparation, dan Computer Vision untuk analisis data.
              </p>
            </div>

            {/* Card 4: Bottom Right */}
            <div className="jules-pixel-card">
              <div className="jules-card-icon jules-card-icon--purple-text">
                <span>&gt;_</span>
              </div>
              <h3 className="jules-card-title">Networking</h3>
              <p className="jules-card-desc">
                Dasar jaringan komputer, LAN/WAN dengan Cisco Router, dan instalasi Wireless LAN. Lihat{' '}
                <a href="#portfolio" className="jules-inline-link">Portfolio</a> atau hubungi lewat{' '}
                <a href="#contact" className="jules-inline-link">Contact</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

