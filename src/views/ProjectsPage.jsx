import PageHero from "../components/PageHero";
import { pageCopy, resumeData } from "../data/resumeData";
import { ProjectGrid } from "../components/PageSections";

export default function ProjectsPage({ onBack }) {
  return (
    <>
      <PageHero copy={pageCopy.projects} onBack={onBack} />
      <h2>Featured Work</h2>
      <ProjectGrid projects={resumeData.projects} compact />
    </>
  );
}
