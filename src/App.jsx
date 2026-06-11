import React, { useState } from 'react'

const resumeData = {
    fullName: 'Robert Ambartsumyan',
    title: 'Software Developer',
    email: 'robertamggt3@gmail.com',
    phone: '(717) 893-6346',
    location: 'Red Lion, PA',
    profileImage: '/profile.jpg',
    summary: 'Full-stack developer experienced in React, Node.js, Express, and REST API development. Built educational platforms, scheduling systems, and business tools with a focus on usability, performance, and maintainable code.',
    highlights: [
        { id: 'experience', label: '3+', value: 'Years Experience' },
        { id: 'projects', label: '5+', value: 'Projects Completed' },
        { id: 'certificates', label: '4', value: 'Certifications Earned' }
    ],
    skills: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Python',
        'HTML/CSS',
        'SQL/NoSQL',
        'React',
        'Git',
        'REST APIs'
    ],
    experience: [
        {
            title: 'Client Support Associate',
            company: 'Stoic Management Group',
            duration: 'Jun 2026 - Present',
            description: 'Provide technical support and troubleshooting for clients using the company’s software products, ensuring timely resolution of issues and maintaining high customer satisfaction through clear communication and effective problem-solving.'
        },
        {
            title: 'Starbucks Barista & Checkout Associate',
            company: 'Giant Food Stores',
            duration: 'Aug 2025 - Jun 2026',
            description: 'Worked in a fast-paced environment, providing excellent customer service, managing transactions, and collaborating with team members to ensure smooth operations during peak hours.'
        },
        {
            title: 'Software Developer',
            company: 'FormPix',
            duration: 'Jan 2026 - May 2026',
            description: 'Built a Node.js/Express backend and client interface to control LED pixel displays through REST APIs, including authentication and real-time state updates.'
        }
    ],
    projects: [
        {
            name: 'FormPix',
            technologies: ['Node.js', 'Express', 'REST API', 'JavaScript'],
            description: 'Web application for controlling programmable LED displays with secure user authentication and real-time command updates.',
            link: 'https://github.com/csmith1188/formPix'
        },
        {
            name: 'QuizBank',
            technologies: ['Node.js', 'Express', 'NoSQL', 'JavaScript'],
            description: 'Education platform that enables teachers to create quizzes, monitor student progress, and generate reports for school management workflows.',
            link: 'https://github.com/csmith1188/quizbank'
        },
        {
            name: 'JukeBar',
            technologies: ['JavaScript', 'Spotify API', 'HTML', 'CSS'],
            description: 'Web-based jukebox that manages playlists and queues music playback through the Spotify Web API.',
            link: 'https://github.com/csmith1188/jukebar'
        },
        {
            name: 'Works For Me',
            technologies: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
            description: 'A web application that helps businesses and individuals schedule, manage, and organize meetings and appointments through an easy-to-use online platform accessible from desktop and mobile devices.',
            link: 'https://github.com/csmith1188/worksforme'
        }
    ],
    certificates: [
        {
            name: 'CompTIA IT Fundamentals (ITF+)',
            issuer: 'CompTIA',
            year: '2023',
            image: { src: '/certs/itf.jpg', srcSet: '/certs/itf@2x.jpg 2x' },
            link: 'https://www.comptia.org/certifications/it-fundamentals'
        },
        {
            name: 'OSHA 10-Hour',
            issuer: 'OSHA',
            year: '2024',
            image: { src: '/certs/osha.jpg', srcSet: '/certs/osha@2x.jpg 2x' },
            link: 'https://www.osha.gov/training/outreach'
        },
        {
            name: 'CIW JavaScript Specialist',
            issuer: 'CIW',
            year: '2025',
            image: { src: '/certs/ciw.jpg', srcSet: '/certs/ciw@2x.jpg 2x' },
            link: 'https://ciwcertified.com/courses/ciw-javascript-specialist/'
        },
        {
            name: 'NOCTI — Computer Programming',
            issuer: 'NOCTI',
            year: '2026',
            image: { src: '/certs/nocti.jpg', srcSet: '/certs/nocti@2x.jpg 2x' },
            link: 'https://www.nocti.org/'
        }
    ],
    portfolioSites: [
        { name: 'GitHub', url: 'https://github.com/RobertFilms', icon: '🐙' },
        { name: 'CodePen', url: 'https://codepen.io/RobertFilms', icon: '✏️' },
        // { name: 'Portfolio', url: 'https://robert-apps.com', icon: '🌐' }, DONT HAVE ONE YET
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/robert-ambartsumyan-171594338/', icon: '💼' }
    ],
    education: [
        {
            degree: 'High School Diploma',
            school: 'York County School of Technology',
            year: '2022-2026',
            details: 'GPA: 3.7 | Relevant coursework: Computer Programming, Web Development, Data Structures, and Algorithms'
        }
    ]
}

const pageCopy = {
    experience: {
        eyebrow: 'Experience',
        title: 'Professional Experience',
        description: 'A concise view of hands-on development work, technical responsibilities, and outcomes achieved in real-world roles.'
    },
    projects: {
        eyebrow: 'Portfolio',
        title: 'Selected Projects',
        description: 'A focused portfolio of practical projects with direct links to source code and implementation details.'
    },
    skills: {
        eyebrow: 'Skills',
        title: 'Technical Skills',
        description: 'Core technologies and development tools used to deliver production-ready web applications.'
    },
    contact: {
        eyebrow: 'Connect',
        title: 'Contact & Links',
        description: 'Direct contact details and professional profiles for recruiters, hiring managers, and collaborators.'
    }
    ,
    certificates: {
        eyebrow: 'Credentials',
        title: 'Certifications',
        description: 'Verified certificates and professional credentials demonstrating training and competency.'
    }
}

function App() {
    const [activePage, setActivePage] = useState('home')
    const [enlargedCert, setEnlargedCert] = useState(null)

    const goHome = () => setActivePage('home')

    const renderCertModal = () => {
        if (!enlargedCert) return null
        const imgSrc = enlargedCert.image && typeof enlargedCert.image === 'string' ? enlargedCert.image : enlargedCert.image?.src
        const isPdf = imgSrc && imgSrc.toLowerCase().endsWith('.pdf')

        return (
            <div className="cert-modal-overlay" onClick={() => setEnlargedCert(null)}>
                <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="cert-modal-close" onClick={() => setEnlargedCert(null)}>×</button>
                    <div className="cert-modal-image-wrap">
                        {isPdf ? (
                            enlargedCert.thumbnail ? (
                                <img src={enlargedCert.thumbnail} alt={enlargedCert.name} className="cert-modal-image" />
                            ) : (
                                <div className="certificate-placeholder">PDF</div>
                            )
                        ) : (
                            <img src={imgSrc} alt={enlargedCert.name} className="cert-modal-image" />
                        )}
                    </div>
                    <h3>{enlargedCert.name}</h3>
                    <p>{enlargedCert.issuer} • {enlargedCert.year}</p>

                    {enlargedCert.link && (
                        <a
                            href={enlargedCert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-modal-link"
                        >
                            View Certificate
                        </a>
                    )}
                </div>
            </div>
        )
    }

    const renderHeader = () => (
        <header className="resume-header">
            <div className="header-content">
                <img
                    src={resumeData.profileImage}
                    alt={resumeData.fullName}
                    className="profile-image"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/certs/placeholder.jpg' }}
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
    )

    const renderHome = () => (
        <>
            {renderHeader()}

            <section className="highlights">
                <div className="highlights-grid">
                    {resumeData.highlights.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className="highlight-card"
                            onClick={() => setActivePage(item.id)}
                        >
                            <div className="highlight-number">{item.label}</div>
                            <div className="highlight-label">{item.value}</div>
                            <span className="highlight-action">Open details</span>
                        </button>
                    ))}
                </div>
            </section>

            {/*
            <section className="page-preview-grid">
                <button type="button" className="preview-card" onClick={() => setActivePage('experience')}>
                    <span className="preview-kicker">Experience</span>
                    <h2>Work history and impact</h2>
                    <p>See your roles, responsibilities, and career story in one focused page.</p>
                </button>

                <button type="button" className="preview-card" onClick={() => setActivePage('projects')}>
                    <span className="preview-kicker">Projects</span>
                    <h2>Built work and live links</h2>
                    <p>Showcase the apps and sites that prove what you can build.</p>
                </button>

                <button type="button" className="preview-card" onClick={() => setActivePage('skills')}>
                    <span className="preview-kicker">Skills</span>
                    <h2>Tools employers care about</h2>
                    <p>Highlight your strongest languages, frameworks, and technical strengths.</p>
                </button>
            </section>
            */}

            <section className="portfolio-links">
                <h2>Portfolio Sites</h2>
                <div className="links-grid">
                    {resumeData.portfolioSites.map((site) => (
                        <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                            <span className="icon">{site.icon}</span>
                            <span className="name">{site.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="summary">
                <h2>Professional Summary</h2>
                <p>{resumeData.summary}</p>
            </section>

            <section className="skills">
                <div className="section-head">
                    <h2>Technical Skills</h2>
                    <button type="button" className="text-link" onClick={() => setActivePage('skills')}>
                        Open skills page
                    </button>
                </div>
                <div className="skills-grid">
                    {resumeData.skills.map((skill) => (
                        <button key={skill} type="button" className="skill-tag" onClick={() => setActivePage('skills')}>
                            {skill}
                        </button>
                    ))}
                </div>
            </section>

            <section className="experience">
                <div className="section-head">
                    <h2>Professional Experience</h2>
                    <button type="button" className="text-link" onClick={() => setActivePage('experience')}>
                        View full experience page
                    </button>
                </div>
                {resumeData.experience.map((exp) => (
                    <div key={`${exp.title}-${exp.company}`} className="experience-item">
                        <div className="exp-header">
                            <h3>{exp.title}</h3>
                            <span className="duration">{exp.duration}</span>
                        </div>
                        <p className="company">{exp.company}</p>
                        <p className="description">{exp.description}</p>
                    </div>
                ))}
            </section>

            <section className="projects">
                <div className="section-head">
                    <h2>Featured Projects</h2>
                    <p>Check out some of the projects I've worked on, there are more available on my project page.</p>
                    <button
                        type="button"
                        className="text-link"
                        onClick={() => setActivePage('projects')}
                    >
                        Explore project page
                    </button>
                </div>

                <div className="projects-grid">
                    {resumeData.projects.slice(0, 4).map((project) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies?.map((tech) => (
                                    <span key={tech} className="project-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <span className="view-link">View Project</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="education">
                <h2>Education</h2>
                {resumeData.education.map((edu) => (
                    <div key={`${edu.degree}-${edu.school}`} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p className="school">
                            {edu.school} | {edu.year}
                        </p>
                        <p className="details">{edu.details}</p>
                    </div>
                ))}
            </section>
        </>
    )

    const renderExperiencePage = () => (
        <>
            <div className="page-hero">
                <div>
                    <p className="eyebrow">{pageCopy.experience.eyebrow}</p>
                    <h1>{pageCopy.experience.title}</h1>
                    <p>{pageCopy.experience.description}</p>
                </div>
                <button type="button" className="back-btn" onClick={goHome}>
                    ← Back to resume
                </button>
            </div>

            <section className="detail-panel">
                <h2>Why 3+ Years Matters</h2>
                <p>
                    Most of my programming experience has been gained through hands-on work in real-world roles (most of which were projects and contracts completed through my instructor and industry partnerships), where I’ve built and maintained production applications, collaborated with teams, and solved practical problems. This experience has given me a deep understanding of the software development lifecycle.
                </p>
                <div className="timeline-grid">
                    {resumeData.experience.map((exp) => (
                        <article key={`${exp.title}-${exp.duration}`} className="timeline-card">
                            <div className="timeline-top">
                                <h3>{exp.title}</h3>
                                <span>{exp.duration}</span>
                            </div>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )

    const renderProjectsPage = () => (
        <>
            <div className="page-hero">
                <div>
                    <p className="eyebrow">{pageCopy.projects.eyebrow}</p>
                    <h1>{pageCopy.projects.title}</h1>
                    <p>{pageCopy.projects.description}</p>
                </div>
                <button type="button" className="back-btn" onClick={goHome}>
                    ← Back to resume
                </button>
            </div>

                <h2>Featured Work</h2>
                <div className="projects-grid compact">
                    {resumeData.projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies?.map((tech) => (
                                    <span key={tech} className="project-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <span className="view-link">Open link</span>
                        </a>
                    ))}
                </div>
        </>
    )

    const renderSkillsPage = () => (
        <>
            <div className="page-hero">
                <div>
                    <p className="eyebrow">{pageCopy.skills.eyebrow}</p>
                    <h1>{pageCopy.skills.title}</h1>
                    <p>{pageCopy.skills.description}</p>
                </div>
                <button type="button" className="back-btn" onClick={goHome}>
                    ← Back to resume
                </button>
            </div>

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
    )

    const renderCertificatesPage = () => (
        <>
            <div className="page-hero">
                <div>
                    <p className="eyebrow">{pageCopy.certificates.eyebrow}</p>
                    <h1>{pageCopy.certificates.title}</h1>
                    <p>{pageCopy.certificates.description}</p>
                </div>
                <button type="button" className="back-btn" onClick={goHome}>
                    ← Back to resume
                </button>
            </div>

            <section className="detail-panel">
                <h2>Certifications & Credentials</h2>
                <div className="certificates-grid">
                    {resumeData.certificates.map((cert) => {
                        const imgSrc = cert.image && typeof cert.image === 'string' ? cert.image : cert.image?.src
                        const imgSrcSet = cert.image && typeof cert.image === 'object' ? cert.image.srcSet : undefined
                        const isPdf = imgSrc && imgSrc.toLowerCase().endsWith('.pdf')
                        const href = cert.link || imgSrc || '#'

                        return (
                            <div
                                key={cert.name}
                                className="certificate-card"
                                onClick={() => setEnlargedCert(cert)}
                            >
                                <div className="certificate-image-wrap">
                                    {isPdf ? (
                                        cert.thumbnail ? (
                                            <img src={cert.thumbnail} alt={`${cert.name} thumbnail`} className="certificate-image" />
                                        ) : (
                                            <div className="certificate-placeholder">PDF</div>
                                        )
                                    ) : (
                                        <img
                                            src={imgSrc}
                                            srcSet={imgSrcSet}
                                            alt={cert.name}
                                            className="certificate-image"
                                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/certs/placeholder.jpg' }}
                                        />
                                    )}
                                </div>
                                <div className="certificate-meta">
                                    <h3>{cert.name}</h3>
                                    <p className="issuer">{cert.issuer} • {cert.year}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )

    const renderContactPage = () => (
        <>
            <div className="page-hero">
                <div>
                    <p className="eyebrow">{pageCopy.contact.eyebrow}</p>
                    <h1>{pageCopy.contact.title}</h1>
                    <p>{pageCopy.contact.description}</p>
                </div>
                <button type="button" className="back-btn" onClick={goHome}>
                    ← Back to resume
                </button>
            </div>

            <section className="detail-panel contact-panel">
                <h2>Reach Out</h2>
                <div className="contact-grid">
                    <div className="contact-callout">
                        <span>Email</span>
                        <strong>{resumeData.email}</strong>
                    </div>
                    <div className="contact-callout">
                        <span>Phone</span>
                        <strong>{resumeData.phone}</strong>
                    </div>
                    <div className="contact-callout">
                        <span>Location</span>
                        <strong>{resumeData.location}</strong>
                    </div>
                </div>
                <div className="links-grid contact-links">
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
            </section>
        </>
    )

    return (
        <div className="resume-shell">
            <nav className="top-nav">
                <button type="button" className={activePage === 'home' ? 'nav-item active' : 'nav-item'} onClick={goHome}>
                    Resume
                </button>
                <button type="button" className={activePage === 'experience' ? 'nav-item active' : 'nav-item'} onClick={() => setActivePage('experience')}>
                    Experience
                </button>
                <button type="button" className={activePage === 'projects' ? 'nav-item active' : 'nav-item'} onClick={() => setActivePage('projects')}>
                    Projects
                </button>
                <button type="button" className={activePage === 'skills' ? 'nav-item active' : 'nav-item'} onClick={() => setActivePage('skills')}>
                    Skills
                </button>
                <button type="button" className={activePage === 'contact' ? 'nav-item active' : 'nav-item'} onClick={() => setActivePage('contact')}>
                    Contact
                </button>
                <button type="button" className={activePage === 'certificates' ? 'nav-item active' : 'nav-item'} onClick={() => setActivePage('certificates')}>
                    Certificates
                </button>
                <button type="button" className="nav-item print-nav" onClick={() => window.print()}>
                    Print
                </button>
            </nav>

            <main className="resume-container">
                {activePage === 'home' && renderHome()}
                {activePage === 'experience' && renderExperiencePage()}
                {activePage === 'projects' && renderProjectsPage()}
                {activePage === 'skills' && renderSkillsPage()}
                {activePage === 'certificates' && renderCertificatesPage()}
                {activePage === 'contact' && renderContactPage()}
            </main>
            {renderCertModal()}
        </div>
    )
}

export default App
