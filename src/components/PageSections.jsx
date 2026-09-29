import { resumeData } from "../data/resumeData";
import ProjectCard from "./ProjectCard";

function handleCardKeyDown(event, action) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}

export function PortfolioLinks({ className = "" }) {
  return (
    <div className={`links-grid ${className}`}>
      {resumeData.portfolioSites.map((site) => (
        <a
          key={site.name}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          <span className="icon">{site.icon}</span>
          <span className="name">{site.name}</span>
        </a>
      ))}
    </div>
  );
}

export function SkillsSection({ onOpen }) {
  return (
    <section className="skills">
      <div className="section-head">
        <h2>Technical Skills</h2>
        <button type="button" className="text-link" onClick={onOpen}>
          Open skills page
        </button>
      </div>
      <div className="skills-grid">
        {resumeData.skills.map((skill) => (
          <button
            key={skill}
            type="button"
            className="skill-tag"
            onClick={onOpen}
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection({ onOpen }) {
  return (
    <section className="experience">
      <div className="section-head">
        <h2>Professional Experience</h2>
        <button type="button" className="text-link" onClick={onOpen}>
          View full experience page
        </button>
      </div>
      {resumeData.experience.map((exp) => (
        <div
          key={`${exp.title}-${exp.company}`}
          className="experience-item"
          tabIndex={0}
          role="button"
          onKeyDown={(event) =>
            handleCardKeyDown(event, () =>
              exp.link && window.open(exp.link, "_blank"),
            )
          }
          onClick={() => exp.link && window.open(exp.link, "_blank")}
        >
          <div className="exp-header">
            <h3>{exp.title}</h3>
            <span className="duration">{exp.duration}</span>
          </div>
          <p className="company">{exp.company}</p>
          <p className="description">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="education">
      <h2>Education</h2>
      {resumeData.education.map((edu) => (
        <div
          key={`${edu.degree}-${edu.school}`}
          className="education-item"
          role="button"
          tabIndex={0}
          onKeyDown={(event) =>
            handleCardKeyDown(event, () =>
              window.open("https://www.ytech.edu/", "_blank"),
            )
          }
          onClick={() => window.open("https://www.ytech.edu/", "_blank")}
        >
          <h3>{edu.degree}</h3>
          <p className="school">
            {edu.school} | {edu.year}
          </p>
          <p className="details">{edu.details}</p>
        </div>
      ))}
    </section>
  );
}

export function ProjectGrid({ projects, compact = false }) {
  return (
    <div className={`projects-grid${compact ? " compact" : ""}`}>
      {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
