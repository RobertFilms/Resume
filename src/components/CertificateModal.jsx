import { useEffect, useRef } from "react";

export default function CertificateModal({ certificate, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!certificate) return undefined;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  const imgSrc =
    typeof certificate.image === "string"
      ? certificate.image
      : certificate.image?.src;
  const isPdf = imgSrc?.toLowerCase().endsWith(".pdf");

  return (
    <div
      className="cert-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onClick={onClose}
    >
      <div
        className="cert-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="cert-modal-close"
          aria-label="Close certificate dialog"
          onClick={onClose}
        >
          ×
        </button>
        <div className="cert-modal-image-wrap">
          {isPdf ? (
            certificate.thumbnail ? (
              <img
                src={certificate.thumbnail}
                alt={certificate.name}
                className="cert-modal-image"
              />
            ) : (
              <div className="certificate-placeholder">PDF</div>
            )
          ) : (
            <img
              src={imgSrc}
              alt={certificate.name}
              className="cert-modal-image"
            />
          )}
        </div>
        <h3 id="certificate-modal-title">{certificate.name}</h3>
        <p>
          {certificate.issuer} • {certificate.year}
        </p>
        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-modal-link"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
}
