import PageHero from "../components/PageHero";
import { pageCopy, resumeData } from "../data/resumeData";
import { PortfolioLinks } from "../components/PageSections";

export default function ContactPage({ onBack }) {
  return (
    <>
      <PageHero copy={pageCopy.contact} onBack={onBack} />
      <section className="detail-panel contact-panel">
        <h2>Reach Out</h2>
        <div className="contact-grid">
          <div className="contact-callout">
            <span>Email</span>
            <strong>{resumeData.email}</strong>
          </div>
          <div className="contact-callout">
            <span>Phone</span>
            <strong>{resumeData.phone}</strong>
          </div>
          <div className="contact-callout">
            <span>Location</span>
            <strong>{resumeData.location}</strong>
          </div>
        </div>
        <PortfolioLinks className="contact-links" />
      </section>
    </>
  );
}
