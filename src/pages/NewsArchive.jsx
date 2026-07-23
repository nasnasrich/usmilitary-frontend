import { Link } from "react-router-dom";
import "./NewsArchive.css";
import { Newspaper, ArrowLeft, Calendar } from "lucide-react";

const NEWS_ITEMS = [
  {
    title: "Emergency Leave Applications Now Available",
    date: "15 July, 2026",
    excerpt:
      "Service members can now submit emergency leave requests directly online, with automatic routing to unit and leave offices.",
  },
  {
    title: "Travel Assistance Services Expanded",
    date: "10 July, 2026",
    excerpt:
      "Additional travel coordination support is now available for service members approved for emergency leave.",
  },
  {
    title: "New Family Support Resources Released",
    date: "05 July, 2026",
    excerpt:
      "A new set of resources is now available to help families navigate emergency situations while a service member is deployed.",
  },
  {
    title: "Leave Processing Times Reduced by 40%",
    date: "28 June, 2026",
    excerpt:
      "Recent process improvements have significantly cut average review times for emergency leave applications.",
  },
  {
    title: "New Mobile Submission Portal Launched",
    date: "15 June, 2026",
    excerpt:
      "Service members can now submit and track leave requests from any mobile device.",
  },
  {
    title: "Annual Family Readiness Briefing Scheduled",
    date: "02 June, 2026",
    excerpt:
      "Unit family readiness groups will host briefings covering emergency leave procedures and support resources.",
  },
];

export default function NewsArchive() {
  return (
    <div className="na-page">
      {/* ===== HERO ===== */}
      <section className="na-hero">
        <div className="na-hero-inner">
          <span className="na-hero-badge">
            <Newspaper size={22} />
          </span>
          <p className="na-hero-eyebrow">Department Updates</p>
          <h1>News &amp; Archive</h1>
          <p className="na-hero-text">
            The latest announcements, policy updates, and service
            improvements from the U.S. Military Leave Department.
          </p>
        </div>
      </section>

      {/* ===== NEWS LIST ===== */}
      <section className="na-list">
        {NEWS_ITEMS.map((item) => (
          <article className="na-item" key={item.title}>
            <div className="na-item-date">
              <Calendar size={14} />
              <span>{item.date}</span>
            </div>
            <div className="na-item-body">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ===== BACK LINK ===== */}
      <section className="na-back">
        <Link to="/" className="na-btn">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </section>
    </div>
  );
}