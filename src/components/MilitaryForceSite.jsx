import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Printer,
  Mail,
  ArrowUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "HOME" },
  { label: "ABOUT" },
  {
    label: "INFORMATION",
    dropdown: ["LOREM IPSUM DOLOR", "ETIAM ET LOREM SED", "AENEAN AC FELIS"],
  },
  { label: "BLOG" },
  { label: "GALLERY" },
  { label: "CONTACTS" },
];

const GALLERY_CARDS = [
  {
    title: "ENTER MEMBER ID",
    text: "Enter the service member's ID to securely access their verified profile.",
  },
  {
    title: "VERIFY PROFILE",
    text: "Review the member's information to confirm all details are correct.",
    active: true,
  },
  {
    title: "SELECT SERVICE",
    text: "Choose the military support service that matches your request.",
  },
];

const NEWS_ITEMS = [
  {
    title: "EMERGENCY LEAVE APPLICATIONS NOW AVAILABLE",
    date: "15 July, 2026",
  },
  {
    title: "TRAVEL ASSISTANCE SERVICES EXPANDED",
    date: "10 July, 2026",
    active: true,
  },
  {
    title: "NEW FAMILY SUPPORT RESOURCES RELEASED",
    date: "05 July, 2026",
  },
];

const CORE_VALUES = [
  {
    num: "1",
    title: "INTEGRITY",
    text: "Protecting every request with confidentiality.",
  },
  {
    num: "2",
    title: "EFFICIENCY",
    text: "Processing leave requests without delay.",
  },
  {
    num: "3",
    title: "RELIABILITY",
    text: "Providing dependable support every time.",
  },
  {
    num: "4",
    title: "COMPASSION",
    text: "Supporting service members and families.",
  },
];

const FOOTER_LINKS = [
  "HOME",
  "ABOUT",
  "INFORMATION",
  "BLOG",
  "GALLERY",
  "CONTACTS",
];


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function MilitaryForceSite() {
  const [galleryIndex, setGalleryIndex] = useState(1);
  

  return (
    <div className="mf-root">
      <style>{CSS}</style>

      {/* ===== HEADER ===== */}
      <header className="mf-header">
        <div className="mf-header-inner">
          <div className="mf-logo">
            <span className="mf-logo-badge">
              <Star size={16} strokeWidth={2} fill="#c0392b" color="#c0392b" />
            </span>
            <div className="mf-logo-text">
              <span className="mf-logo-title">MILITARY FORCE</span>
              <span className="mf-logo-sub">SAVING THE PEACE</span>
            </div>
          </div>
          <nav className="mf-nav">
            {NAV_LINKS.map((link) => (
              <div className="mf-nav-item" key={link.label}>
                <button
                  className={
                    "mf-nav-link" +
                    (link.dropdown ? " mf-nav-link--has-drop" : "")
                  }
                >
                  {link.label}
                </button>
                {link.dropdown && (
                  <div className="mf-dropdown">
                    {link.dropdown.map((item) => (
                      <a href="#!" className="mf-dropdown-item" key={item}>
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="mf-hero">
        <button
          className="mf-hero-arrow mf-hero-arrow--left"
          aria-label="previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="mf-hero-arrow mf-hero-arrow--right"
          aria-label="next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="mf-hero-content">
          <h1>
            U.S. MILITARY <span>Leave Department</span>
            {/* FAMILY SUPPORT
           <span> SERVICES</span> */}
          </h1>
          <p>
            We proudly support active-duty military personnel by providing
            reliable emergency leave assistance, travel coordination,
            communication services, and family support. Our commitment is to
            deliver secure, efficient, and compassionate service whenever duty
            calls.
          </p>
            <Link to="/auth">
          <button className="mf-btn mf-btn--primary">APPLY NOW!!</button>
          </Link>
        </div>

        <div className="mf-hero-dots">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* ===== TWO COLUMN INTRO ===== */}
      <section className="mf-intro">
        <div className="mf-intro-col">
          <h3>HOW TO REQUEST MILITARY LEAVE</h3>
          <p>
            Submit your leave request with confidence. Our streamlined process
            ensures fast, secure, and reliable assistance for eligible service
            members.
          </p>
        </div>
        <div className="mf-intro-divider">
          <span className="mf-intro-line" />
          <span className="mf-intro-star">
            <Star size={18} color="#3d3b1f" fill="#3d3b1f" />
          </span>
          <span className="mf-intro-line" />
        </div>
        <div className="mf-intro-col mf-intro-col--right">
          <h3>EMERGENCY LEAVE ASSISTANCE</h3>
          <p>
            We provide fast and reliable emergency leave support, helping
            military personnel with leave processing, travel coordination, and
            family assistance when it matters most.
          </p>
        </div>
      </section>

      {/* ===== CREATING LEADERS ===== */}
      <section className="mf-leaders">
        <div className="mf-leaders-heading">
          <span className="mf-heading-rule" />
          <h2>Support Request Process</h2>
          <span className="mf-heading-rule" />
        </div>

        <div className="mf-leaders-sub">
          <p>
            We are steadfast in our dedication to providing a secure, reliable,
            and compassionate service. Every request is handled with the urgency
            and respect our military families deserve.
          </p>
        </div>

        <div className="mf-gallery">
          <button
            className="mf-gallery-arrow mf-gallery-arrow--left"
            aria-label="previous"
            onClick={() =>
              setGalleryIndex(
                (i) => (i - 1 + GALLERY_CARDS.length) % GALLERY_CARDS.length,
              )
            }
          >
            <ChevronLeft size={18} />
          </button>

          <div className="mf-gallery-track">
            { GALLERY_CARDS.map((card, i) => (
              <div
                className={
                  "mf-gallery-card" +
                  (i === galleryIndex ? " mf-gallery-card--active" : "")
                }
                key={card.title}
              >
                <div className="mf-gallery-img" data-variant={i} />
                <div className="mf-gallery-caption">
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="mf-gallery-arrow mf-gallery-arrow--right"
            aria-label="next"
            onClick={() =>
              setGalleryIndex((i) => (i + 1) % GALLERY_CARDS.length)
            }
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ===== BOTTOM THREE COLUMN ===== */}
      <section className="mf-bottom">
        <div className="mf-bottom-col mf-welcome">
          <h3>SERVING WITH HONOR</h3>
          <div className="mf-welcome-img" />
          <p>
            The U.S. Military Leave Department is a dedicated administrative body established to streamline and manage the leave process for active-duty service members across all branches...
          </p>
          <button className="mf-btn mf-btn--dark">more</button>
        </div>

        <div className="mf-bottom-col mf-news">
          <h3>NEWS &amp; EVENTS</h3>
          <ul>
            {NEWS_ITEMS.map((item) => (
              <li key={item.title} className={item.active ? "active" : ""}>
                <p>{item.title}</p>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
          <a href="#!" className="mf-news-archive">
            NEWS ARCHIVE <span>&raquo;</span>
          </a>
        </div>

        <div className="mf-bottom-col mf-why">
          <h3>CORE VALUES</h3>
          <ul>
            {CORE_VALUES.map((item) => (
              <li key={item.num}>
                <span className="mf-why-num">{item.num}</span>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mf-footer">
        <div className="mf-footer-top">
          <div className="mf-footer-logo">
            <span className="mf-logo-badge">
              <Star size={16} strokeWidth={2} fill="#c0392b" color="#c0392b" />
            </span>
            <div className="mf-logo-text">
              <span className="mf-logo-title">MILITARY FORCE</span>
              <span className="mf-logo-sub">SAVING THE PEACE</span>
            </div>
          </div>
          <button className="mf-back-top" onClick={scrollToTop}>
          <ArrowUp size={16} /> BACK TO TOP
        </button>
        </div>

        <div className="mf-footer-grid">
          <div className="mf-footer-nav">
            {FOOTER_LINKS.map((l) => (
              <a href="#!" key={l}>
                {l}
              </a>
            ))}
          </div>

          <div className="mf-footer-block">
            <h5>LOCATION</h5>
            <p>
              <MapPin size={13} /> 8901 Marmora Road,
              <br />
              Glasgow, D04 89GR
            </p>
            <a href="#!" className="mf-map-link">
              Map
            </a>
          </div>

          <div className="mf-footer-block">
            <h5>CONTACTS</h5>
            <p>
              <Phone size={13} /> Telephone: +1 800 123 1234
            </p>
            <p>
              <Printer size={13} /> Fax: +1 800 123 1234
            </p>
            <p>
              <Mail size={13} /> mail@demosite.com
            </p>
          </div>

          <div className="mf-footer-block">
            <h5>FOLLOW US</h5>

            <div className="mf-socials">
            <a href="#" aria-label="Facebook">
                <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
                <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
                <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
                <FaYoutube />
            </a>

            <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
            </a>
            </div>
          </div>
        </div>

        <div className="mf-footer-bottom">
          Copyright &copy; 2015, Military Force. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const CSS = `
:root {
  --mf-red: #c0392b;
  --mf-red-dark: #a53224;
  --mf-olive: #6b6a34;
  --mf-olive-dark: #4c4a26;
  --mf-camo-dark: #3f4127;
  --mf-cream: #ece3d0;
  --mf-cream-dark: #e0d5bd;
  --mf-near-black: #201f19;
  --mf-text-dark: #22202b;
}

* { box-sizing: border-box; }

.mf-root {
  font-family: 'Oswald', 'Arial Narrow', Arial, sans-serif;
  color: var(--mf-text-dark);
  background: #fff;
  width: 100%;
  overflow-x: hidden;
}

.mf-root h1, .mf-root h2, .mf-root h3, .mf-root h4, .mf-root h5 {
  font-family: 'Oswald', 'Arial Narrow', Arial, sans-serif;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.mf-root p { margin: 0; line-height: 1.7; }
.mf-root a { text-decoration: none; color: inherit; }
.mf-root ul { list-style: none; margin: 0; padding: 0; }
.mf-root button { font-family: inherit; cursor: pointer; border: none; background: none; }

/* ===== HEADER ===== */
.mf-header {
  background: var(--mf-near-black);
  border-bottom: 3px solid var(--mf-red);
  position: relative;
  z-index: 30;
}
.mf-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}
.mf-logo { display: flex; align-items: center; gap: 10px; }
.mf-logo-badge {
  width: 32px; height: 32px;
  border: 2px solid var(--mf-red);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.mf-logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.mf-logo-title { color: #fff; font-size: 19px; font-weight: 700; letter-spacing: 1px; }
.mf-logo-sub { color: var(--mf-red); font-size: 10px; letter-spacing: 2px; }

.mf-nav { display: flex; gap: 6px; }
.mf-nav-item { position: relative; }
.mf-nav-link {
  color: #cfcdbf;
  font-size: 13px;
  letter-spacing: 1px;
  padding: 22px 14px;
  display: block;
  transition: background 0.15s, color 0.15s;
}
.mf-nav-link:hover, .mf-nav-link--has-drop {
  background: var(--mf-red);
  color: #fff;
}
.mf-dropdown {
  position: absolute;
  top: 100%; left: 0;
  min-width: 190px;
  background: var(--mf-red);
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: all 0.15s;
}
.mf-nav-item:hover .mf-dropdown {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.mf-dropdown-item {
  display: block;
  padding: 9px 18px;
  font-size: 11px;
  letter-spacing: 1px;
  color: #f4d9d5;
}
.mf-dropdown-item:hover { color: #fff; background: rgba(0,0,0,0.15); }

/* ===== HERO ===== */
.mf-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(100deg, rgba(20,22,14,0.75) 0%, rgba(20,22,14,0.35) 45%, rgba(60,58,40,0.15) 100%),
    repeating-linear-gradient(120deg, #5b5a3f 0 40px, #4a4930 40px 80px, #6e6c47 80px 120px),
    #4a4930;
}
.mf-hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
  width: 100%;
  text-align: right;
  color: #fff;
}
.mf-hero-content h1 {
  font-size: 34px;
  line-height: 1.25;
  font-weight: 700;
  color: #e9e6d8;
}
.mf-hero-content h1 span { color: var(--mf-red); }
.mf-hero-content p {
  margin-top: 18px;
  margin-left: auto;
  max-width: 460px;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #d8d5c4;
}
.mf-btn {
  display: inline-block;
  margin-top: 26px;
  padding: 13px 30px;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 600;
}
.mf-btn--primary { background: var(--mf-red); color: #fff; }
.mf-btn--primary:hover { background: var(--mf-red-dark); }
.mf-btn--dark { background: var(--mf-near-black); color: #fff; padding: 10px 24px; }

.mf-hero-arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 40px; height: 40px;
  background: rgba(0,0,0,0.35);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  z-index: 5;
}
.mf-hero-arrow--left { left: 20px; }
.mf-hero-arrow--right { right: 20px; background: var(--mf-red); }
.mf-hero-arrow:hover { background: var(--mf-red-dark); }

.mf-hero-dots {
  position: absolute;
  bottom: 20px; right: 24px;
  display: flex; gap: 6px;
}
.mf-hero-dots span {
  width: 7px; height: 7px; border-radius: 50%;
  background: rgba(255,255,255,0.4);
}
.mf-hero-dots span.active { background: var(--mf-red); }

/* ===== INTRO TWO-COLUMN ===== */
.mf-intro {
  background: var(--mf-olive);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  padding: 46px 24px;
//   max-width: 1200px;
  margin: 0 auto;
  color: #e9e6d3;
}

.mf-intro-col {
   width:85%;
}
.mf-intro-col h3 {
  font-size: 17px;
  margin-bottom: 14px;
  color: #fff;
  text-align:center;
}

.mf-intro-col p { font-size: 12.5px; color: #d9d6c2; text-align: center; }
.mf-intro-col--right { text-align: right; }
.mf-intro-divider {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.mf-intro-line { width: 1px; flex: 1; background: rgba(255,255,255,0.25); }
.mf-intro-star {
  width: 34px; height: 34px; border-radius: 50%;
  background: #e9e6d3;
  display: flex; align-items: center; justify-content: center;
}
  

/* ===== CREATING LEADERS ===== */
.mf-leaders {
  background:
    linear-gradient(rgba(30,32,18,0.9), rgba(30,32,18,0.94)),
    repeating-linear-gradient(135deg, #4b4c2e 0 30px, #3b3c22 30px 60px, #545536 60px 90px);
  padding: 56px 24px 64px;
  text-align: center;
  color: #fff;
}
.mf-leaders-heading {
  display: flex; align-items: center; justify-content: center; gap: 18px;
  margin-bottom: 18px;
}
.mf-leaders-heading h2 {
  font-size: 26px; letter-spacing: 1px; white-space: nowrap;
}
.mf-heading-rule { width: 60px; height: 1px; background: rgba(255,255,255,0.3); }
.mf-leaders-sub {
  max-width: 720px; margin: 0 auto 40px;
  font-size: 12.5px; color: #cfcdb9;
}

.mf-leaders p .mf-leaders-sub {text-align:center;}

.mf-gallery {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 14px;
}
.mf-gallery-arrow {
  width: 34px; height: 34px; flex-shrink: 0;
  background: rgba(255,255,255,0.08);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
}
.mf-gallery-arrow:hover { background: var(--mf-red); }
.mf-gallery-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  flex: 1;
}
.mf-gallery-card { background: #2f3020; text-align: left; }
.mf-gallery-img {
  height: 170px;
  background: repeating-linear-gradient(60deg, #7a7a56 0 14px, #61613f 14px 28px);
}
.mf-gallery-img[data-variant="0"] { background: repeating-linear-gradient(60deg, #8a8560 0 14px, #6b6746 14px 28px); }
.mf-gallery-img[data-variant="1"] { background: repeating-linear-gradient(60deg, #6f6a49 0 14px, #55503a 14px 28px); }
.mf-gallery-img[data-variant="2"] { background: repeating-linear-gradient(60deg, #9c9873 0 14px, #7d7959 14px 28px); }
.mf-gallery-caption { padding: 18px 16px; }
.mf-gallery-caption h4 { font-size: 13.5px; letter-spacing: 0.5px; margin-bottom: 10px; }
.mf-gallery-caption p { font-size: 11.5px; color: #b9b7a2; }
.mf-gallery-card--active .mf-gallery-caption { background: var(--mf-red); }
.mf-gallery-card--active .mf-gallery-caption p { color: #f6d9d4; }

/* ===== BOTTOM THREE COLUMN ===== */
.mf-bottom {
  background: var(--mf-cream);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding: 54px 24px;
//   max-width: 1200px;
  margin: 0 auto;
}
.mf-bottom-col h3 {
  font-size: 15px; letter-spacing: 1px; margin-bottom: 20px;
  color: var(--mf-text-dark);
}

.mf-welcome-img {
  height: 120px; width: 160px;
  background: linear-gradient(135deg, #3a3a2e, #55523f);
  margin-bottom: 16px;
}
.mf-welcome p { font-size: 12.5px; color: #55523f; margin-bottom: 16px; }

.mf-news li { padding: 12px 0; border-bottom: 1px dashed #cfc4a6; }
.mf-news li p { font-size: 12px; font-weight: 600; color: #40402a; }
.mf-news li.active p { color: var(--mf-red); }
.mf-news li span { font-size: 10.5px; color: #8a8367; }
.mf-news-archive {
  display: inline-flex; gap: 6px; margin-top: 14px;
  font-size: 11px; letter-spacing: 1px; color: var(--mf-red); font-weight: 600;
}

.mf-why ul { display: flex; flex-direction: column; gap: 18px; }
.mf-why li { display: flex; gap: 14px; align-items: flex-start; }
.mf-why-num {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--mf-red); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; flex-shrink: 0;
}
.mf-why h5 { font-size: 12.5px; letter-spacing: 0.5px; margin-bottom: 4px; }
.mf-why p { font-size: 11.5px; color: #7c765c; }

/* ===== FOOTER ===== */
.mf-footer { background: var(--mf-camo-dark); color: #cfcdb9; }
.mf-footer-top {
//   max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: rgba(0, 0, 0, 0.45);

}
.mf-footer-logo { display: flex; align-items: center; gap: 10px; }
.mf-back-top {
  display: flex; align-items: center; gap: 8px;
  background: var(--mf-red); color: #fff;
  padding: 10px 18px; font-size: 11px; letter-spacing: 1px; font-weight: 600;
}
.mf-back-top:hover { background: var(--mf-red-dark); }

.mf-footer-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr 0.8fr;
  gap: 24px;
  padding: 34px 24px;
}
.mf-footer-nav { display: flex; flex-direction: column; gap: 10px; }
.mf-footer-nav a { font-size: 12px; letter-spacing: 1px; color: #cfcdb9; }
.mf-footer-nav a:hover { color: var(--mf-red); }
.mf-footer-block h5 {
  font-size: 12px; letter-spacing: 1px; color: #fff; margin-bottom: 14px;
}
.mf-footer-block p {
  font-size: 11.5px; margin-bottom: 8px; display: flex; gap: 8px; align-items: flex-start;
  color: #b7b59f;
}
.mf-map-link { font-size: 11px; color: var(--mf-red); font-weight: 600; }
.mf-socials { display: flex; gap: 8px; flex-wrap: wrap; }
.mf-socials a {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  color: #cfcdb9;
}
.mf-socials a:hover { background: var(--mf-red); color: #fff; }


.mf-footer-bottom {
  text-align: center;
  font-size: 11px;
  padding: 16px;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #8f8d78;
    background: rgba(219, 207, 207, 0.08);

}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .mf-nav { display: none; }
  .mf-intro { grid-template-columns: 1fr; text-align: left; }
  .mf-intro-col--right { text-align: left; }
  .mf-intro-divider { flex-direction: row; }
  .mf-gallery-track { grid-template-columns: 1fr; }
  .mf-bottom { grid-template-columns: 1fr; }
  .mf-footer-grid { grid-template-columns: 1fr 1fr; }
  .mf-hero-content { text-align: left; }
  .mf-hero-content p { margin-left: 0; }
}
@media (max-width: 520px) {
  .mf-footer-grid { grid-template-columns: 1fr; }
  .mf-hero-content h1 { font-size: 26px; }
}
`;
