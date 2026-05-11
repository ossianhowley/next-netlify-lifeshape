import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">

      {/* LOGO */}
      <header>
        <div className="logo">
          <span className="dark">life</span>
          <span className="coral">sh</span>
          <span className="teal">ape</span>
          <sup>®</sup>
        </div>
      </header>

      {/* HERO */}
      <div className="hero">

        {/* Left: puzzle-person */}
        <div className="hero-left">
          <svg className="illustration" viewBox="0 0 260 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="10" width="54" height="54" rx="4" fill="#3A9E8F"/>
            <rect x="134" y="10" width="54" height="54" rx="4" fill="#E8735A"/>
            <circle cx="107" cy="64" r="8" fill="#3A9E8F"/>
            <circle cx="161" cy="64" r="8" fill="#E8735A"/>
            <rect x="52" y="70" width="54" height="54" rx="4" fill="#E8735A" opacity="0.8"/>
            <rect x="106" y="70" width="54" height="54" rx="4" fill="#A8C5BB"/>
            <rect x="160" y="70" width="54" height="54" rx="4" fill="#3A9E8F"/>
            <circle cx="79" cy="70" r="8" fill="#E8735A" opacity="0.8"/>
            <rect x="24" y="130" width="54" height="54" rx="4" fill="#1A1A1A"/>
            <rect x="78" y="130" width="54" height="54" rx="4" fill="#3A9E8F" opacity="0.6"/>
            <rect x="132" y="130" width="54" height="54" rx="4" fill="#E8735A" opacity="0.5"/>
            <rect x="186" y="130" width="54" height="54" rx="4" fill="#D4A82A" opacity="0.7"/>
            <rect x="52" y="190" width="54" height="54" rx="4" fill="#3A9E8F"/>
            <rect x="106" y="190" width="54" height="54" rx="4" fill="#1A1A1A" opacity="0.7"/>
            <rect x="160" y="190" width="54" height="54" rx="4" fill="#A8C5BB"/>
            <rect x="52" y="250" width="54" height="40" rx="4" fill="#3A9E8F" opacity="0.5"/>
            <rect x="160" y="250" width="54" height="40" rx="4" fill="#E8735A" opacity="0.4"/>
            <line x1="120" y1="80" x2="200" y2="10" stroke="#D4A82A" strokeWidth="6" strokeLinecap="round"/>
            <polygon points="200,10 180,18 192,30" fill="#D4A82A"/>
            <polyline points="90,50 110,70 155,20" stroke="#3A9E8F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="30" y1="45" x2="70" y2="45" stroke="#D4A82A" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
            <line x1="20" y1="58" x2="52" y2="58" stroke="#D4A82A" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            <line x1="28" y1="71" x2="60" y2="71" stroke="#D4A82A" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
          </svg>
        </div>

        {/* Right: headline + floating icons */}
        <div className="hero-right">
          <div className="headline">Build your shape.<br />Shape your life.</div>

          {/* Laptop */}
          <svg className="float float-laptop" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="5" width="100" height="65" rx="6" fill="#2D2D2D"/>
            <rect x="16" y="11" width="88" height="53" rx="3" fill="#F2EDE6"/>
            <path d="M60 52 Q60 35 50 28" stroke="#3A9E8F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="26" rx="9" ry="6" fill="#3A9E8F" transform="rotate(-20 50 26)"/>
            <path d="M60 52 Q60 38 70 30" stroke="#3A9E8F" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="71" cy="28" rx="8" ry="5" fill="#3A9E8F" opacity="0.7" transform="rotate(15 71 28)"/>
            <rect x="55" y="52" width="10" height="8" rx="2" fill="#D4A82A"/>
            <path d="M0 72 Q60 80 120 72" stroke="#2D2D2D" strokeWidth="3" fill="none"/>
          </svg>

          {/* Paper plane */}
          <svg className="float float-plane" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,30 80,0 60,60" fill="#E8E0D4" stroke="#999" strokeWidth="1"/>
            <line x1="0" y1="30" x2="60" y2="30" stroke="#ccc" strokeWidth="1"/>
            <path d="M60,30 L60,60" stroke="#bbb" strokeWidth="0.8"/>
            <path d="M0,30 Q-30,20 -50,10" stroke="#3A9E8F" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.5"/>
          </svg>

          {/* Compass */}
          <svg className="float float-compass" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" stroke="#888" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
            <line x1="35" y1="5" x2="35" y2="65" stroke="#888" strokeWidth="1"/>
            <line x1="5" y1="35" x2="65" y2="35" stroke="#888" strokeWidth="1"/>
            <polygon points="35,15 31,35 35,38 39,35" fill="#E8735A"/>
            <polygon points="35,55 31,35 35,32 39,35" fill="#888"/>
            <circle cx="35" cy="35" r="4" fill="#fff" stroke="#888" strokeWidth="1"/>
          </svg>

          {/* Decorative dots */}
          <div className="dot" style={{width:'12px',height:'12px',background:'var(--coral)',top:'22%',left:'8%',opacity:0.6}}></div>
          <div className="dot" style={{width:'8px',height:'8px',background:'var(--teal)',top:'62%',left:'4%',opacity:0.7}}></div>
          <div className="dot" style={{width:'7px',height:'7px',background:'var(--gold)',top:'42%',right:'18%',opacity:0.5}}></div>
          <svg style={{position:'absolute',top:'50%',left:'16%',zIndex:2,opacity:0.5}} width="14" height="14" viewBox="0 0 14 14">
            <polygon points="7,0 14,14 0,14" fill="#3A9E8F"/>
          </svg>
        </div>

      </div>{/* end .hero */}

      {/* BOTTOM BAR */}
      <div className="bottom-bar">
        <p className="tagline">For young minds &amp; career deciders&nbsp;</p>
        <Link href="/about"><button className="cta-btn">A Better Path →</button></Link>
      </div>

    </div>
  )
}