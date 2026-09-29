import { resumeData } from "../data/resumeData";

export default function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="header-content">
        <img
          src={resumeData.profileImage}
          alt={resumeData.fullName}
          className="profile-image"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/certs/placeholder.jpg";
          }}
        />
        <div className="header-text">
          <p className="eyebrow">Portfolio Resume</p>
          <h1>{resumeData.fullName}</h1>
          <p className="title">{resumeData.title}</p>
          <div className="contact-info">
            <span>📧 {resumeData.email}</span>
            <span>📱 {resumeData.phone}</span>
            <span>📍 {resumeData.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
