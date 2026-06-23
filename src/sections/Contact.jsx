// src/sections/Contact.jsx
import React, { useState } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const styles = `
  .contact-section {
    padding: 72px 0;
    background: #0d1b2e;
    color: #e8e8f0;
  }

  .section-wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .contact-head {
    text-align: center;
    margin-bottom: 48px;
  }

  .contact-head h2 {
    font-size: clamp(26px, 4vw, 40px);
    font-weight: 700;
    color: #3b9eff;
    margin: 0 0 8px;
    line-height: 1.2;
    font-family: 'Courier New', Courier, monospace;
  }

  .contact-head p {
    color: #4a5a70;
    font-size: 14px;
    margin: 0;
  }

  /* Grid */
  .contact-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 16px;
    align-items: start;
  }

  @media (max-width: 768px) {
    .contact-grid { grid-template-columns: 1fr; }
  }

  /* Left aside */
  .contact-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .contact-card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 18px;
    background: #091627;
    border: 1px solid rgba(59,158,255,0.15);
    border-radius: 12px;
    transition: border-color 0.2s;
  }

  .contact-card:hover {
    border-color: rgba(59,158,255,0.4);
  }

  .card-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(59,158,255,0.1);
    border: 1px solid rgba(59,158,255,0.18);
    border-radius: 10px;
    color: #3b9eff;
    flex-shrink: 0;
  }

  .card-body h4 {
    font-size: 11px;
    font-weight: 600;
    color: #4a5a70;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 3px;
  }

  .card-body p {
    font-size: 13px;
    color: #b0c8e0;
    margin: 0;
    word-break: break-all;
  }

  .connect-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4a5a70;
    margin: 4px 0 2px;
    padding-left: 2px;
  }

  .social-icons {
    display: flex;
    gap: 10px;
  }

  .social-icons a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #091627;
    border: 1px solid rgba(59,158,255,0.15);
    border-radius: 10px;
    color: #4a5a70;
    transition: all 0.2s;
    text-decoration: none;
  }

  .social-icons a:hover {
    border-color: rgba(59,158,255,0.5);
    color: #3b9eff;
    background: rgba(59,158,255,0.08);
  }

  /* Right — form card */
  .contact-form-card {
    background: #091627;
    border: 1px solid rgba(59,158,255,0.15);
    border-radius: 12px;
    padding: 28px 28px 24px;
  }

  @media (max-width: 480px) {
    .contact-form-card { padding: 20px 16px; }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  @media (max-width: 540px) {
    .form-row { grid-template-columns: 1fr; }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  .form-group label {
    font-size: 11px;
    font-weight: 600;
    color: #4a5a70;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .form-group input,
  .form-group textarea {
    background: #0b1e33;
    border: 1px solid rgba(59,158,255,0.15);
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 14px;
    color: #c8d8ea;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    font-family: inherit;
    resize: none;
    width: 100%;
    box-sizing: border-box;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #2e4155;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: rgba(59,158,255,0.5);
    background: rgba(59,158,255,0.05);
  }

  .form-msg {
    font-size: 13px;
    padding: 10px 14px;
    border-radius: 8px;
    margin-bottom: 14px;
  }

  .form-msg.success {
    background: rgba(52,211,153,0.08);
    border: 1px solid rgba(52,211,153,0.25);
    color: #34d399;
  }

  .form-msg.error {
    background: rgba(248,113,113,0.08);
    border: 1px solid rgba(248,113,113,0.25);
    color: #f87171;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
  }

  .btn-send {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 26px;
    background: #2563eb;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: 0.02em;
  }

  .btn-send:hover:not(:disabled) {
    background: #1d4ed8;
  }

  .btn-send:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.from_name || !form.from_email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section id="contact" className="contact-section">
        <div className="section-wrapper">

          {/* Header */}
          <div className="contact-head">
            <h2>Contact</h2>
            <p>Get in touch — let's work together</p>
          </div>

          <div className="contact-grid">

            {/* Left info cards */}
            <aside className="contact-left">
              <div className="contact-card">
                <div className="card-icon"><Mail size={17} /></div>
                <div className="card-body">
                  <h4>Email</h4>
                  <p>gaytrikolhe2001@gmail.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon"><Phone size={17} /></div>
                <div className="card-body">
                  <h4>Phone</h4>
                  <p>+91 72197 86270</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="card-icon"><MapPin size={17} /></div>
                <div className="card-body">
                  <h4>Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>

              <h5 className="connect-title">Connect With Me</h5>
              <div className="social-icons">
                <a href="https://github.com/Gaytrik" target="_blank" rel="noreferrer"><Github size={16} /></a>
                <a href="https://linkedin.com/in/gaytrikolhe-4467921b9" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
                <a href="mailto:gaytrikolhe2001@gmail.com"><Mail size={16} /></a>
              </div>
            </aside>

            {/* Right form */}
            <div className="contact-right">
              <div className="contact-form-card">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input name="from_name" value={form.from_name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input name="from_email" value={form.from_email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can I help you?" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows={7} value={form.message} onChange={handleChange} placeholder="Your message here..." />
                </div>

                {status === "success" && (
                  <p className="form-msg success">✅ Message sent! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="form-msg error">❌ Please fill all required fields and try again.</p>
                )}

                <div className="form-actions">
                  <button className="btn-send" onClick={handleSubmit} disabled={status === "sending"}>
                    <Send size={15} />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}