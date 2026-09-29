export default function PageHero({ copy, onBack }) {
  return (
    <div className="page-hero">
      <div>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>
      <button type="button" className="back-btn" onClick={onBack}>
        ← Back to resume
      </button>
    </div>
  );
}
