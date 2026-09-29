import PageHero from "../components/PageHero";
import { pageCopy, resumeData } from "../data/resumeData";

export default function SkillsPage({ onBack }) {
  return (
    <>
      <PageHero copy={pageCopy.skills} onBack={onBack} />
      <section className="detail-panel">
        <h2>Technical Stack</h2>
        <div className="skills-grid">
          {resumeData.skills.map((skill) => (
            <div key={skill} className="skill-tag static">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
