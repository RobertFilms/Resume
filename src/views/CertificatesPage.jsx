import PageHero from "../components/PageHero";
import { pageCopy, resumeData } from "../data/resumeData";

function handleCardKeyDown(event, onSelect) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onSelect();
  }
}

export default function CertificatesPage({ onBack, onSelect }) {
  return (
    <>
      <PageHero copy={pageCopy.certificates} onBack={onBack} />
      <section className="detail-panel">
        <h2>Certifications & Credentials</h2>
        <div className="certificates-grid">
          {resumeData.certificates.map((cert) => {
            const imgSrc =
              typeof cert.image === "string" ? cert.image : cert.image?.src;
            const imgSrcSet =
              typeof cert.image === "object" ? cert.image.srcSet : undefined;
            const isPdf = imgSrc?.toLowerCase().endsWith(".pdf");
            return (
              <div
                key={cert.name}
                className="certificate-card"
                role="button"
                tabIndex={0}
                onKeyDown={(event) =>
                  handleCardKeyDown(event, () => onSelect(cert))
                }
                onClick={() => onSelect(cert)}
              >
                <div className="certificate-image-wrap">
                  {isPdf ? (
                    cert.thumbnail ? (
                      <img
                        src={cert.thumbnail}
                        alt={`${cert.name} thumbnail`}
                        className="certificate-image"
                      />
                    ) : (
                      <div className="certificate-placeholder">PDF</div>
                    )
                  ) : (
                    <img
                      src={imgSrc}
                      srcSet={imgSrcSet}
                      alt={cert.name}
                      className="certificate-image"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/certs/placeholder.jpg";
                      }}
                    />
                  )}
                </div>
                <div className="certificate-meta">
                  <h3>{cert.name}</h3>
                  <p className="issuer">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
