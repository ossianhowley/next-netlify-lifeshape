import Link from 'next/link'

export default function About() {
  return (
    <div className="about-page">

      {/* NAV */}
      <nav className="about-nav">
        <Link href="/" className="back-link">← Back to home</Link>
      </nav>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-h1">A better way to<br />explore careers.</h1>
          <p className="about-lead">
            We're a small team based in Auckland, working on something we believe really matters.
          </p>
        </div>
        <div className="about-hero-graphic">
          <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* large compass rose */}
            <circle cx="160" cy="140" r="110" stroke="#3A9E8F" strokeWidth="1" strokeDasharray="6,5" opacity="0.3"/>
            <circle cx="160" cy="140" r="75" stroke="#E8735A" strokeWidth="1" strokeDasharray="4,4" opacity="0.25"/>
            <circle cx="160" cy="140" r="40" fill="rgba(58,158,143,0.08)" stroke="#3A9E8F" strokeWidth="1.5" opacity="0.5"/>
            {/* compass lines */}
            <line x1="160" y1="30" x2="160" y2="250" stroke="#888" strokeWidth="0.8" opacity="0.3"/>
            <line x1="50" y1="140" x2="270" y2="140" stroke="#888" strokeWidth="0.8" opacity="0.3"/>
            <line x1="82" y1="62" x2="238" y2="218" stroke="#888" strokeWidth="0.5" opacity="0.2"/>
            <line x1="238" y1="62" x2="82" y2="218" stroke="#888" strokeWidth="0.5" opacity="0.2"/>
            {/* needle */}
            <polygon points="160,50 155,140 160,148 165,140" fill="#E8735A" opacity="0.9"/>
            <polygon points="160,230 155,140 160,132 165,140" fill="#3A9E8F" opacity="0.7"/>
            <circle cx="160" cy="140" r="8" fill="#fff" stroke="#888" strokeWidth="1.5"/>
            <circle cx="160" cy="140" r="3" fill="#1A1A1A"/>
            {/* direction labels */}
            <text x="155" y="26" fill="#1A1A1A" fontSize="11" fontWeight="700" opacity="0.6">N</text>
            <text x="155" y="258" fill="#1A1A1A" fontSize="11" fontWeight="700" opacity="0.4">S</text>
            <text x="36" y="145" fill="#1A1A1A" fontSize="11" fontWeight="700" opacity="0.4">W</text>
            <text x="274" y="145" fill="#1A1A1A" fontSize="11" fontWeight="700" opacity="0.4">E</text>
            {/* dots */}
            <circle cx="90" cy="80" r="4" fill="#D4A82A" opacity="0.6"/>
            <circle cx="240" cy="90" r="3" fill="#E8735A" opacity="0.5"/>
            <circle cx="75" cy="195" r="3" fill="#3A9E8F" opacity="0.5"/>
            <circle cx="250" cy="200" r="5" fill="#D4A82A" opacity="0.4"/>
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="about-section about-problem">
        <div className="about-section-inner">
          <p className="about-body">
            Choosing a career or even knowing where to start, can feel overwhelming.
            We've seen it firsthand. Friends, family, and young people trying to figure out
            what's next, often without clear guidance, practical tools, or confidence in
            their direction.
          </p>
          <div className="about-callout">We think there's a better way.</div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="about-section">
        <div className="about-section-inner about-two-col">
          <div className="about-col-left">
            <h2 className="about-h2">What we're trying to do</h2>
            <p className="about-body">
              We're building a simple, practical platform to help people make more
              confident decisions about what comes next. Not theory. Not overwhelming
              content. Just useful, real-world guidance that actually helps.
            </p>
          </div>
          <div className="about-col-right">
            <div className="about-pillar">
              <div className="pillar-icon" style={{background:'rgba(58,158,143,0.12)',color:'#3A9E8F'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="pillar-title">Explore career paths</div>
                <div className="pillar-desc">with clarity and confidence</div>
              </div>
            </div>
            <div className="about-pillar">
              <div className="pillar-icon" style={{background:'rgba(232,115,90,0.12)',color:'#E8735A'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div className="pillar-title">Understand yourself</div>
                <div className="pillar-desc">strengths, motivations, and options</div>
              </div>
            </div>
            <div className="about-pillar">
              <div className="pillar-icon" style={{background:'rgba(212,168,42,0.12)',color:'#D4A82A'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="pillar-title">Make better decisions</div>
                <div className="pillar-desc">about what comes next</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE'RE AT */}
      <section className="about-section about-timeline-section">
        <div className="about-section-inner">
          <h2 className="about-h2">Where we're at</h2>
          <div className="about-timeline">
            <div className="timeline-item timeline-active">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2026</div>
                <div className="timeline-label">Testing ideas, features, and concepts</div>
                <div className="timeline-desc">Learning what works, and what doesn't.</div>
              </div>
            </div>
            <div className="timeline-track"></div>
            <div className="timeline-item">
              <div className="timeline-dot timeline-dot-future"></div>
              <div className="timeline-content">
                <div className="timeline-year">2027</div>
                <div className="timeline-label">Public platform launch</div>
                <div className="timeline-desc">A power set of tools for youth and those choosing their careers.</div>
              </div>
            </div>
          </div>
          <p className="about-body" style={{marginTop:'32px'}}>
            We're in the early stages, and that's intentional. We'd rather build
            something genuinely useful slowly than rush something mediocre out the door.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="about-section about-why">
        <div className="about-section-inner">
          <h2 className="about-h2">Why this matters</h2>
          <p className="about-body">
            Careers shape a huge part of life,  time, energy, purpose, and wellbeing.
            But too many people feel unsure, stuck, or like they're guessing.
            We're building lifeshape to change that.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <h2 className="about-cta-heading">Want to be part of it?</h2>
          <p className="about-cta-sub">We'd love your help shaping what this becomes.</p>
          <Link href="/contact" className="cta-btn">Join the Adventure →</Link>
        </div>
      </section>

      <style>{`
        .about-page {
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* NAV */
        .about-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 40px 0;
          position: relative;
          z-index: 10;
        }

        .about-logo {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          letter-spacing: -1px;
          text-decoration: none;
          line-height: 1;
        }

        .back-link {
          color: var(--dark);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .back-link:hover { opacity: 1; }

        /* HERO */
        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 48px 40px 32px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-hero-inner { max-width: 520px; }

        .about-tag {
          display: inline-block;
          background: rgba(58,158,143,0.12);
          color: var(--teal);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .about-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .about-lead {
          font-size: clamp(16px, 1.8vw, 20px);
          color: var(--dark);
          opacity: 0.75;
          line-height: 1.6;
        }

        .about-hero-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: spin-slow 30s linear infinite;
        }

        .about-hero-graphic svg { width: 100%; max-width: 320px; }

        /* SECTIONS */
        .about-section {
          padding: 48px 40px;
          position: relative;
          z-index: 1;
        }

        .about-section-inner { max-width: 900px; margin: 0 auto; }

        .about-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 3.5vw, 42px);
          font-weight: 900;
          color: var(--dark);
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .about-body {
          font-size: clamp(15px, 1.6vw, 18px);
          color: var(--dark);
          opacity: 0.8;
          line-height: 1.75;
          max-width: 640px;
        }

        /* PROBLEM CALLOUT */
        .about-problem { border-top: 1px solid rgba(26,26,26,0.08); }

        .about-callout {
          font-family: 'Fraunces', serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 900;
          color: var(--coral);
          margin-top: 28px;
          line-height: 1.2;
        }

        /* TWO COL */
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          border-top: 1px solid rgba(26,26,26,0.08);
        }

        /* PILLARS */
        .about-pillar {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .pillar-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-weight: 600;
          font-size: 16px;
          color: var(--dark);
          margin-bottom: 2px;
        }

        .pillar-desc {
          font-size: 14px;
          color: var(--dark);
          opacity: 0.6;
        }

        /* TIMELINE */
        .about-timeline-section { border-top: 1px solid rgba(26,26,26,0.08); }

        .about-timeline {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 32px 0 0;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--coral);
          box-shadow: 0 0 0 4px rgba(232,115,90,0.2);
          flex-shrink: 0;
        }

        .timeline-dot-future {
          background: rgba(26,26,26,0.2);
          box-shadow: none;
          border: 2px dashed rgba(26,26,26,0.3);
        }

        .timeline-track {
          height: 2px;
          flex: 1;
          background: linear-gradient(90deg, var(--coral), rgba(26,26,26,0.15));
          margin-bottom: 60px;
        }

        .timeline-content { text-align: center; }

        .timeline-year {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 900;
          color: var(--dark);
          margin-bottom: 4px;
        }

        .timeline-label {
          font-weight: 600;
          font-size: 15px;
          color: var(--dark);
          margin-bottom: 4px;
        }

        .timeline-desc {
          font-size: 13px;
          color: var(--dark);
          opacity: 0.55;
        }

        /* WHY */
        .about-why { border-top: 1px solid rgba(26,26,26,0.08); }

        /* CTA */
        .about-cta-section {
          margin: 16px 40px 60px;
          background: rgba(26,26,26,0.82);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 56px 48px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .about-cta-heading {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .about-cta-sub {
          font-size: clamp(15px, 1.5vw, 18px);
          color: rgba(255,255,255,0.65);
          margin-bottom: 32px;
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .about-nav    { padding: 24px 24px 0; }
          .about-hero   { padding: 32px 24px 24px; gap: 24px; }
          .about-section { padding: 36px 24px; }
          .about-cta-section { margin: 16px 24px 48px; padding: 40px 28px; }
          .about-two-col { grid-template-columns: 1fr; gap: 32px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .about-nav    { padding: 20px 16px 0; }
          .about-hero   { grid-template-columns: 1fr; padding: 24px 16px; }
          .about-hero-graphic { display: none; }
          .about-section { padding: 28px 16px; }
          .about-cta-section { margin: 16px 16px 40px; padding: 32px 20px; }
          .about-timeline { flex-direction: column; gap: 24px; }
          .timeline-track { width: 2px; height: 40px; background: linear-gradient(180deg, var(--coral), rgba(26,26,26,0.15)); margin-bottom: 0; margin-right: 0; }
        }

        /* entrance */
        .about-hero-inner { animation: fadeUp 0.6s ease both; }
        .about-hero-graphic { animation: fadeUp 0.7s ease 0.15s both; }
      `}</style>

    </div>
  )
}