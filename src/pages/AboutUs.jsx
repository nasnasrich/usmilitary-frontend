import { Link } from "react-router-dom";
import "./AboutUs.css";
import {
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Scale,
  Award,
  ArrowRight,
} from "lucide-react";

const VALUES = [
  {
    icon: Scale,
    title: "INTEGRITY",
    text: "Every request is handled with honesty, discretion, and respect for the service member behind it.",
  },
  {
    icon: ClipboardCheck,
    title: "EFFICIENCY",
    text: "Emergencies don't wait for paperwork. Our process is built to move as fast as your situation demands.",
  },
  {
    icon: ShieldCheck,
    title: "ACCOUNTABILITY",
    text: "Every application is logged, tracked, and routed directly to the right unit and leave office.",
  },
];

const STATS = [
  { num: "24/7", label: "Request Processing" },
  { num: "All", label: "Branches Supported" },
  { num: "100%", label: "Digital Submission" },
  { num: "1", label: "Step to Submit" },
];

export default function AboutUs() {
  return (
    <div className="au-page">
      {/* ===== HERO ===== */}
      <section className="au-hero">
        <div className="au-hero-inner">
          <span className="au-hero-badge">
            <Building2 size={22} />
          </span>
          <p className="au-hero-eyebrow">About the Department</p>
          <h1>Serving With Honor</h1>
          <p className="au-hero-text">
            We manage emergency leave processing for active-duty service members across all branches-fast, transparent, and without delay.
          </p>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="au-intro">
        <div className="au-intro-col">
          <span className="au-intro-tag">Mission</span>
          <h3>Fast, Reliable Leave</h3>
          <p>
            To provide every service member a fast, transparent path to emergency
            leave-working directly with unit commanders and leave offices for
            timely review.
          </p>
        </div>
        <div className="au-intro-col">
          <span className="au-intro-tag">Vision</span>
          <h3>A Digital-First Standard</h3>
          <p>
            A fully digital, accountable leave process that every branch can
            rely on, at every base.
          </p>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="au-values">
        <div className="au-values-heading">
          <span className="au-eyebrow">What Guides Us</span>
          <h2>Our Core Values</h2>
          <p className="au-values-sub">
            These principles guide every request we process and every
            decision we make on behalf of the service members who depend on
            us.
          </p>
        </div>

        <div className="au-values-grid">
          {VALUES.map((v) => (
            <div className="au-value-card" key={v.title}>
              <span className="au-value-icon">
                <v.icon size={20} />
              </span>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="au-stats">
        <div className="au-stats-grid">
          {STATS.map((s) => (
            <div className="au-stat" key={s.label}>
              <span className="au-stat-num">{s.num}</span>
              <span className="au-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="au-cta">
        <div className="au-cta-inner">
          <Award size={24} className="au-cta-icon" />
          <h3>Need to Submit an Emergency Leave Request?</h3>
          <p>
            Start your application now and our team will route it directly
            to your unit and leave office for review.
          </p>
          <div className="au-cta-actions">
            <Link to="/auth" className="au-btn au-btn--primary">
              Submit a Request <ArrowRight size={15} />
            </Link>
            <Link to="/" className="au-btn au-btn--ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}