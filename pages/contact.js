import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">

      {/* NAV */}
      <nav className="about-nav">
        <Link href="/" className="about-logo">
          <span className="dark">life</span><span className="coral">sh</span><span className="teal">ape</span><sup>®</sup>
        </Link>
        <Link href="/" className="back-link">← Back to home</Link>
      </nav>

      {/* Hidden form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="number" name="age" />
        <select name="interest">
          <option>Learning about upcoming features</option>
          <option>Being involved in testing</option>
          <option>Career guidance for myself</option>
          <option>Helping someone else (parent / teacher / coach)</option>
          <option>Partnering or collaborating with lifeshape</option>
        </select>
        <textarea name="message"></textarea>
      </form>

      <div className="contact-wrapper">

        {/* LEFT — intro */}
        <div className="contact-left">
          <div className="about-tag">Get in touch</div>
          <h1 className="contact-h1">Let's shape<br />something great.</h1>
          <p className="contact-lead">
            We're in the early stages and every conversation helps us build something better.
            Whether you want to follow along, get involved in testing, or just say hi — we'd love to hear from you.
          </p>

          <div className="contact-reasons">
            {[
              { emoji: '🔔', text: 'Stay in the loop as we build' },
              { emoji: '🧪', text: 'Help us test features early' },
              { emoji: '🧭', text: 'Get career guidance for yourself' },
              { emoji: '🤝', text: 'Explore a partnership' },
            ].map((r) => (
              <div key={r.text} className="contact-reason">
                <span className="reason-emoji">{r.emoji}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="contact-right">
          {status === 'success' ? (
            <div className="contact-success">
              <div className="success-icon">✓</div>
              <h2 className="success-heading">You're in!</h2>
              <p className="success-body">
                Thanks for reaching out. We'll be in touch as lifeshape takes shape.
              </p>
              <Link href="/" className="cta-btn" style={{display:'inline-block',marginTop:'24px',textDecoration:'none'}}>
                Back to home
              </Link>
            </div>
          ) : (
            <form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    placeholder="e.g. 28"
                    min="10"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">I'm interested in... <span className="required">*</span></label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Learning about upcoming features">Learning about upcoming features</option>
                  <option value="Being involved in testing">Being involved in testing</option>
                  <option value="Career guidance for myself">Career guidance for myself</option>
                  <option value="Helping someone else (parent / teacher / coach)">Helping someone else (parent / teacher / coach)</option>
                  <option value="Partnering or collaborating with lifeshape">Partnering or collaborating with lifeshape</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a bit about yourself or what you'd like to know..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="form-error">Something went wrong — please try again.</p>
              )}

              <button
                type="submit"
                className="cta-btn"
                disabled={status === 'submitting'}
                style={{width:'100%',marginTop:'8px'}}
              >
                {status === 'submitting' ? 'Sending...' : 'Send message →'}
              </button>
            </form>
          )}
        </div>

      </div>

      <style>{`
        .contact-page {
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding-bottom: 60px;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 40px;
          align-items: start;
        }

        /* LEFT */
        .contact-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          line-height: 1.1;
          color: var(--dark);
          margin: 20px 0;
          letter-spacing: -1px;
        }

        .contact-lead {
          font-size: clamp(15px, 1.6vw, 17px);
          color: var(--dark);
          opacity: 0.75;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .contact-reasons {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-reason {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--dark);
          opacity: 0.8;
        }

        .reason-emoji {
          font-size: 20px;
          width: 32px;
          text-align: center;
        }

        /* RIGHT — form card */
        .contact-right {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--dark);
          opacity: 0.75;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .required { color: var(--coral); }

        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--dark);
          background: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(26,26,26,0.12);
          border-radius: 10px;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          appearance: none;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(58,158,143,0.12);
        }

        .form-group textarea { resize: vertical; min-height: 100px; }

        .form-error {
          color: var(--coral);
          font-size: 14px;
        }

        .cta-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* SUCCESS */
        .contact-success {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(58,158,143,0.12);
          color: var(--teal);
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .success-heading {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 900;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .success-body {
          font-size: 16px;
          color: var(--dark);
          opacity: 0.7;
          line-height: 1.6;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .contact-wrapper { padding: 32px 24px; gap: 40px; }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            padding: 24px 16px;
            gap: 32px;
          }
          .form-row { grid-template-columns: 1fr; }
          .contact-right { padding: 24px 20px; }
        }
      `}</style>

    </div>
  )
}