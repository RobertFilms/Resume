import PageHero from "../components/PageHero";
import { pageCopy, resumeData } from "../data/resumeData";

export default function ExperiencePage({ onBack }) {
  return (
    <>
      <PageHero copy={pageCopy.experience} onBack={onBack} />
      <section className="detail-panel">
        <h2>Why 3+ Years Matters</h2>
        <p>
          Most of my programming experience has been gained through hands-on
          work in real-world roles (most of which were projects and contracts
          completed through my instructor and industry partnerships), where I’ve
          built and maintained production applications, collaborated with teams,
          and solved practical problems. This experience has given me a deep
          understanding of the software development lifecycle.
        </p>
        <div className="timeline-grid">
          {resumeData.experience.map((exp) => (
            <article
              key={`${exp.title}-${exp.duration}`}
              className="timeline-card"
            >
              <div className="timeline-top">
                <h3>{exp.title}</h3>
                <span>{exp.duration}</span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
