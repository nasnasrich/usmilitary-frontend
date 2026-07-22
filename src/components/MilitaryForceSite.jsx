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
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedinIn,
// } from "react-icons/fa";

const HERO_IMAGES = [
  "/herooneimg.jpg",
  "/herotwoimg.jpg",
  "/herothieeimg.jpg",
  "/herofourimg.jpg",
];

const CORE_VALUES = [
  {
    num: "01",
    title: "Integrity",
    text: "We uphold honesty, accountability, and professionalism in every service we provide.",
  },
  {
    num: "02",
    title: "Commitment",
    text: "We are dedicated to supporting service members with timely and dependable assistance.",
  },
  {
    num: "03",
    title: "Respect",
    text: "Every request is treated with dignity, compassion, and the confidentiality it deserves.",
  },
];

// const NAV_LINKS = [
//   { label: "HOME" },
//   { label: "ABOUT" },
//   {
//     label: "INFORMATION",
//     dropdown: ["LOREM IPSUM DOLOR", "ETIAM ET LOREM SED", "AENEAN AC FELIS"],
//   },
//   { label: "BLOG" },
//   { label: "GALLERY" },
//   { label: "CONTACTS" },
// ];



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

const GALLERY_CARDS = [
  {
    title: "ENTER MEMBER ID",
    text: "Enter the service member's ID to securely access their verified profile.",
    image: "/entermemberid.jpg",
  },
  {
    title: "VERIFY PROFILE",
    text: "Review the member's information to confirm all details are correct.",
    image: "/verifyprofile.jpg",
  },
  {
    title: "SELECT SERVICE",
    text: "Choose the military support service that matches your request.",
    image: "/selectservice.jpg",
  },
];

// const FOOTER_LINKS = [
//   "HOME",
//   "ABOUT",
//   "INFORMATION",
//   "BLOG",
//   "GALLERY",
//   "CONTACTS",
// ];

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

export default function MilitaryForceSite() {
  const [galleryIndex, setGalleryIndex] = useState(1);

  const [heroIndex, setHeroIndex] = useState(0);

  return (
    <div className="mf-root">
      <style>{CSS}</style>

      {/* ===== HEADER ===== */}
      

      {/* ===== HERO ===== */}
            <section
        className="mf-hero"
        style={{
            backgroundImage: `
            linear-gradient(
                100deg,
                rgba(20,22,14,.75),
                rgba(20,22,14,.35),
                rgba(60,58,40,.15)
            ),
            url(${HERO_IMAGES[heroIndex]})
            `,
            // backgroundSize: "cover",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <button
            className="mf-hero-arrow mf-hero-arrow--left"
            onClick={() =>
                setHeroIndex(
                (heroIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
                )
            }
            >
            <ChevronLeft size={20} />
            </button>

        <button
            className="mf-hero-arrow mf-hero-arrow--right"
            onClick={() =>
                setHeroIndex(
                (heroIndex + 1) % HERO_IMAGES.length
                )
            }
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
          <Link to="/EmergencyLeave">
            <button className="mf-btn mf-btn--primary">APPLY NOW!!</button>
          </Link>
        </div>

        <div className="mf-hero-dots">
            {HERO_IMAGES.map((_, index) => (
                <span
                key={index}
                className={heroIndex === index ? "active" : ""}
                onClick={() => setHeroIndex(index)}
                />
            ))}
            </div>
        </section>

      {/* ===== TWO COLUMN INTRO ===== */}
      <section className="mf-intro">
        <div className="mf-intro-col">
          <h3>HOW TO REQUEST MILITARY LEAVE</h3>
          <p>
            Our streamlined process provides fast, secure, and dependable leave
            assistance for eligible service members.
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
            We provide fast and reliable emergency leave assistance, travel
            coordination, and family support for active-duty military personnel.
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
            We provide secure, reliable, and timely assistance, ensuring every
            request is handled with care and professionalism.
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
            {GALLERY_CARDS.map((card, i) => (
              <div
                className={
                  "mf-gallery-card" +
                  (i === galleryIndex ? " mf-gallery-card--active" : "")
                }
                key={card.title}
              >
            <div className="mf-gallery-img" style={{
            backgroundImage: `url(${card.image})`,}}/>                
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
            The U.S. Military Leave Department is a dedicated administrative
            body established to streamline and manage the leave process for
            active-duty service members across all branches...
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



/* ===== HERO ===== */
.mf-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center; 

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
//    width:85%;
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
.mf-gallery-img {
  height: 255px;
  background-size: cover;
  background-position: cover;
  background-repeat: repeat;
}
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

  background-image: url("/servingwithhonor.jpg"); /* Your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px; /* Optional */
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
