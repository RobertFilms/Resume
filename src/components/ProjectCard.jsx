export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.technologies?.map((tech) => (
          <span key={tech} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-actions">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-link"
        >
          View Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="view-link demo-link"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
