import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from '../icons.js';
import gsap from 'gsap';
import { PROFILE } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);
  const btnRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    gsap.to(btnRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="contact-header">
          <div>
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title-large">
              Let's Work<br />Together<span className="text-gradient">.</span>
            </h2>
          </div>
          <p className="contact-subline">
            Tertarik untuk berkolaborasi atau punya proyek yang ingin dikerjakan bersama? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info">
            <a href={`mailto:${PROFILE.email}`} className="cinfo-item">
              <span className="cinfo-icon"><Mail size={18} /></span>
              <div>
                <div className="cinfo-label">Email</div>
                <span className="cinfo-value">{PROFILE.email}</span>
              </div>
            </a>

            <a href={`https://wa.me/${PROFILE.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="cinfo-item">
              <span className="cinfo-icon"><Phone size={18} /></span>
              <div>
                <div className="cinfo-label">WhatsApp</div>
                <span className="cinfo-value">{PROFILE.whatsapp}</span>
              </div>
            </a>

            <div className="cinfo-item">
              <span className="cinfo-icon"><MapPin size={18} /></span>
              <div>
                <div className="cinfo-label">Lokasi</div>
                <span className="cinfo-value">{PROFILE.location}</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="csocial-btn">
                <Github size={14} /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="csocial-btn">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="csocial-btn">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-box">
            {sent ? (
              <div className="contact-success">
                <span className="success-icon">✓</span>
                <h3>Pesan Terkirim!</h3>
                <p>Terima kasih sudah menghubungi. Saya akan segera membalas pesan Anda.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit}>
                <h3 className="form-title">Kirim Pesan</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-name">Nama</label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      placeholder="Nama lengkap"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Email</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={form.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-msg">Pesan</label>
                  <textarea
                    id="c-msg"
                    name="message"
                    rows="5"
                    placeholder="Tulis pesan Anda di sini..."
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                <button ref={btnRef} type="submit" className="form-submit" disabled={sending}>
                  {sending ? (
                    <span className="form-spinner" />
                  ) : (
                    <>
                      <Send size={14} /> Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
