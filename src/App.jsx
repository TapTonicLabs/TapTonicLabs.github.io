import { useEffect, useRef, useState } from "react";
import logoSrc from "./assets/Logo.png";
import BrandTrans from "./assets/Brand-transparent.png";
import GRIcon from "./assets/GRIcon.png";
import "./App.css";

const APPS = [
  // {
  //   name: "PrayerFlow",
  //   category: "Faith & Spirituality",
  //   description:
  //     "A daily prayer companion that keeps you grounded — AI-assisted prayers, scripture rotation, streak tracking, and a personal journal.",
  //   status: "In Development",
  //   accent: "#7C5CBF",
  //   gradient: "linear-gradient(135deg, #6A0DAD 0%, #00C8FF 100%)",
  //   icon: logoSrc,
  // },
  {
    name: "Project Halo",
    category: "Coming Soon",
    description: "Coming Soon",
    status: "In Development",
    accent: "#7C5CBF",
    gradient: "linear-gradient(135deg, #6A0DAD 0%, #00C8FF 100%)",
    icon: logoSrc,
    link: null,
  },
  {
    name: "GlobalRates",
    category: "Finance & Travel",
    description:
      "A fast, reliable currency converter built for travelers and global users. Get real-time exchange rates, multiple themes, and a simple experience designed to make conversions effortless.",
    status: "Live on App Store",
    accent: "#F5A623",
    gradient: "linear-gradient(90deg, #F5D000, #39D353)",
    icon: GRIcon,
    link: "/apps/GlobalRates/",
  },
];

const PILLARS = [
  {
    label: "Crafted with intent",
    body: "Every screen, every transition, every edge case. Thoughtful design and reliable engineering guide every product we ship.",
    icon: "⚡",
  },
  {
    label: "Built for real people",
    body: "Technology should feel effortless. We create experiences that are intuitive, accessible, and built around how people live.", icon: "◎",
  },
  {
    label: "From idea to impact",
    body: "We turn concepts into shipped products — continuously improving through real user feedback.",
    icon: "🚀",
  },
];

function CableArc({ id, gradient, startX, startY, endX, endY, delay = 0, count = 3 }) {
  const lines = Array.from({ length: count });
  return (
    <g className="cable-group">
      {lines.map((_, i) => {
        const offset = (i - (count - 1) / 2) * 14;
        const cx = (startX + endX) / 2 + offset * 0.5;
        const cy = (startY + endY) / 2 - 90 + offset * 0.3;
        const opacity = 1 - i * 0.18;
        return (
          <path
            key={i}
            d={`M${startX + offset * 0.3},${startY} Q${cx},${cy} ${endX + offset * 0.5},${endY}`}
            stroke={`url(#${id}-grad-${i})`}
            strokeWidth={i === 0 ? 3.5 : i === 1 ? 2.5 : 1.8}
            fill="none"
            opacity={opacity}
            className="cable-path"
            style={{ animationDelay: `${delay + i * 0.15}s` }}
          />
        );
      })}
      <defs>
        {lines.map((_, i) => (
          <linearGradient key={i} id={`${id}-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient[0]} />
            <stop offset="100%" stopColor={gradient[1]} />
          </linearGradient>
        ))}
      </defs>
    </g>
  );
}

function HeroCables() {
  return (
    <div className="hero-cables" aria-hidden="true">
      <img className='brand-transparent' src={BrandTrans} alt=""></img>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          <img src={logoSrc} alt="TapTonic Labs" className="nav-logo-img" />
          <span className="nav-logo-text">TapTonic <span className="nav-logo-sub">Labs</span></span>
        </a>
        <div className="nav-links">
          <a href="#apps">Apps</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-eyebrow">Independent App Studio · Since 2026</div>
          <h1 className="hero-headline">
            Crafting Apps<br />
            That{' '}
            <span className="hero-headline-gradient">Matter</span>
          </h1>
          <p className="hero-sub">
            Thoughtfully designed. Carefully engineered. Continuously refined. We create mobile experiences that people love to discover and keep coming back to.
          </p>
          <div className="hero-actions">
            <a href="#apps" className="btn btn-primary">See our work</a>
            <a href="#contact" className="btn btn-ghost">Work with us ↗</a>
          </div>
        </div>
        <HeroCables />
      </section>

      {/* DIVIDER */}
      <div className="section-divider" aria-hidden="true">
        <div className="divider-line divider-line--purple" />
        <div className="divider-line divider-line--orange" />
        <div className="divider-line divider-line--green" />
      </div>

      {/* APPS */}
      <section className="section" id="apps">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">What we've built</h2>
          </div>
          <div className="apps-grid">
  {APPS.map((app) => {
    const content = (
      <>
        <div className="app-card-top">
          <img className="app-icon" src={app.icon} alt={`${app.name} icon`} />
          <span className={`app-status ${app.status === "Live on App Store" ? "app-status--live" : "app-status--dev"}`}>
            {app.status}
          </span>
        </div>

        <div className="app-gradient-bar" style={{ background: app.gradient }} />
        <h3 className="app-name">{app.name}</h3>
        <span className="app-category">{app.category}</span>
        <p className="app-desc">{app.description}</p>
      </>
    );

    return app.link ? (
      <a
        key={app.name}
        href={app.link}
        target="_blank"
        rel="noopener noreferrer"
        className="app-card"
        style={{ "--card-accent": app.accent }}
      >
        {content}
      </a>
    ) : (
      <div
        key={app.name}
        className="app-card"
        style={{ "--card-accent": app.accent }}
      >
        {content}
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* ABOUT / PILLARS */}
      <section className="section section--dark" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Philosophy</span>
            <h2 className="section-title">How we operate</h2>
          </div>
          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.label}>
                <span className="pillar-icon">{p.icon}</span>
                <h3 className="pillar-label">{p.label}</h3>
                <p className="pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
          {/* <div className="stack-tags">
            {["React Native", "Expo", "EAS", "Supabase", "RevenueCat", "AdMob", "TypeScript", "Node.js"].map((t) => (
              <span className="stack-tag" key={t}>{t}</span>
            ))}
          </div> */}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--contact" id="contact">
        <div className="container container--narrow">
          <h2 className="contact-headline">
            Great apps start<br />
            <span className="contact-headline-accent">with great ideas.</span>
          </h2>
          <p className="contact-sub">
            Have an idea, a question, or want to follow our journey? We'd love to hear from you.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=teamtaptonic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Get in touch
          </a>
        </div>
        {/* <div className="contact-cables" aria-hidden="true">
          <svg viewBox="0 0 400 120" fill="none">
            <defs>
              <linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6A0DAD" />
                <stop offset="100%" stopColor="#00C8FF" />
              </linearGradient>
              <linearGradient id="c2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF3300" />
                <stop offset="100%" stopColor="#F5A623" />
              </linearGradient>
              <linearGradient id="c3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5D000" />
                <stop offset="100%" stopColor="#39D353" />
              </linearGradient>
            </defs>
            <path d="M0,30 Q200,0 400,60" stroke="url(#c1)" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M0,50 Q200,20 400,80" stroke="url(#c2)" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M0,70 Q200,40 400,100" stroke="url(#c3)" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
        </div> */}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            <img src={logoSrc} alt="" className="footer-logo-img" />
            <span>TapTonic Labs</span>
          </div>
          <p className="footer-copy">© 2026 TapTonic Labs. Built and shipped independently.</p>
          <div className="footer-links">
            {/* <a href="https://github.com/TapTonicLabs" target="_blank" rel="noreferrer">GitHub</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}