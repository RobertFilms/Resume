import ResumeHeader from "../components/ResumeHeader";
import { resumeData } from "../data/resumeData";
import {
  EducationSection,
  ExperienceSection,
  PortfolioLinks,
  ProjectGrid,
  SkillsSection,
} from "../components/PageSections";

export default function HomePage({ onNavigate }) {
  return (
    <>
      <ResumeHeader />
      <section className="highlights">
        <div className="highlights-grid">
          {resumeData.highlights.map((item) => (
            <button
              key={item.id}
              type="button"
              className="highlight-card"
              onClick={() => onNavigate(item.id)}
            >
              <div className="highlight-number">{item.label}</div>
              <div className="highlight-label">{item.value}</div>
              <span className="highlight-action">Open details</span>
            </button>
          ))}
        </div>
      </section>
      <section className="portfolio-links">
        <h2>Portfolio Sites</h2>
        <PortfolioLinks />
      </section>
      <section className="summary">
        <h2>Professional Summary</h2>
        <p>{resumeData.summary}</p>
      </section>
      <SkillsSection onOpen={() => onNavigate("skills")} />
      <ExperienceSection onOpen={() => onNavigate("experience")} />
      <section className="projects">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <p>
            Check out some of the projects I've worked on, there are more
            available on my project page.
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => onNavigate("projects")}
          >
            Explore project page
          </button>
        </div>
        <ProjectGrid projects={resumeData.projects.slice(0, 4)} />
      </section>
      <EducationSection />
    </>
  );
}
