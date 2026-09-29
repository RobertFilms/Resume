import { useEffect, useState } from "react";
import CertificateModal from "./components/CertificateModal";
import { pageVersion } from "./data/resumeData";
import CertificatesPage from "./views/CertificatesPage";
import ContactPage from "./views/ContactPage";
import ExperiencePage from "./views/ExperiencePage";
import HomePage from "./views/HomePage";
import ProjectsPage from "./views/ProjectsPage";
import SkillsPage from "./views/SkillsPage";

const navigationItems = [
  { id: "home", label: "Resume" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "certificates", label: "Certificates" },
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [enlargedCert, setEnlargedCert] = useState(null);
  const [hasFooterRoom, setHasFooterRoom] = useState(
    () => window.innerHeight >= 500,
  );

  useEffect(() => {
    const updateFooterVisibility = () =>
      setHasFooterRoom(window.innerHeight >= 500);
    window.addEventListener("resize", updateFooterVisibility);
    return () => window.removeEventListener("resize", updateFooterVisibility);
  }, []);

  const renderPage = () => {
    const pageProps = { onBack: () => setActivePage("home") };
    if (activePage === "home") return <HomePage onNavigate={setActivePage} />;
    if (activePage === "experience") return <ExperiencePage {...pageProps} />;
    if (activePage === "projects") return <ProjectsPage {...pageProps} />;
    if (activePage === "skills") return <SkillsPage {...pageProps} />;
    if (activePage === "certificates")
      return <CertificatesPage {...pageProps} onSelect={setEnlargedCert} />;
    return <ContactPage {...pageProps} />;
  };

  return (
    <div className="resume-shell">
      <nav className="top-nav">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activePage === item.id ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className="nav-item print-nav"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Print PDF resume
        </button>
      </nav>
      <main className="resume-container">{renderPage()}</main>
      <CertificateModal
        certificate={enlargedCert}
        onClose={() => setEnlargedCert(null)}
      />
      {hasFooterRoom && <footer className="page-version">{pageVersion}</footer>}
    </div>
  );
}

export default App;
