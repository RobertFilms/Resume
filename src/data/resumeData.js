export const pageVersion = "v1.2.1";

export const resumeData = {
  fullName: "Robert Ambartsumyan",
  title: "Junior Full-Stack Developer",
  email: "robertamggt3@gmail.com",
  phone: "(717) 893-6346",
  location: "Red Lion, PA",
  profileImage: "/profile.jpg",
  summary:
    "Full-stack developer experienced in React, Node.js, Express, and REST API development. Built educational platforms, scheduling systems, and business tools with a focus on usability, performance, and maintainable code.",
  highlights: [
    { id: "experience", label: "3+", value: "years of programming education and project experience" },
    { id: "projects", label: "5+", value: "Projects Completed" },
    { id: "certificates", label: "4", value: "Certifications Earned" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "HTML/CSS",
    "SQL/NoSQL",
    "React",
    "Git",
    "REST APIs",
  ],
  experience: [
    {
      title: "Mezzanine Generalist",
      company: "ES3 LLC",
      duration: "Aug 2026 - Present",
      link: "https://www.es3.com/",
      description:
        "Full-time warehouse role at ES3, LLC supporting automated operations by monitoring systems for faults, recovering errors, and helping keep workflow efficient.",
    },
    {
      title: "Starbucks Barista & Checkout Associate",
      company: "Giant Food Stores",
      duration: "Aug 2025 - Aug 2026",
      link: "https://giantfoodstores.com/pages/our-story?tab=our-purpose",
      description:
        "Worked in a fast-paced environment, providing excellent customer service, managing transactions, and collaborating with team members to ensure smooth operations during peak hours.",
    },
    {
      title: "Client Support Associate",
      company: "Stoic Management Group",
      duration: "Jun 2026 - July 2026",
      link: "https://stoicmgmtgroup.com/",
      description:
        "Provide technical support and troubleshooting for clients using the company’s software products, ensuring timely resolution of issues and maintaining high customer satisfaction through clear communication and effective problem-solving.",
    },
  ],

  projects: [
    {
      name: "FormPix",
      technologies: ["Node.js", "Express", "REST API", "JavaScript"],
      description:
        "Web application for controlling programmable LED displays with secure user authentication and real-time command updates through REST APIs on a Raspberry Pi.",
      link: "https://github.com/csmith1188/formPix",
    },
    {
      name: "QuizBank",
      technologies: ["Node.js", "Express", "NoSQL", "JavaScript"],
      description:
        "Educational platform that enables teachers to create quizzes, monitor student progress, and generate reports for school management workflows.",
      link: "https://github.com/csmith1188/quizbank",
    },
    {
      name: "JukeBar",
      technologies: ["JavaScript", "Spotify API", "HTML", "CSS"],
      description:
        "Web-based jukebox that manages playlists and queues music playback through the Spotify Web API.",
      link: "https://github.com/csmith1188/jukebar",
    },
    {
      name: "Works For Me",
      technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      description:
        "A web application that helps businesses and individuals schedule, manage, and organize meetings and appointments through an easy-to-use online platform accessible from desktop and mobile devices.",
      link: "https://github.com/csmith1188/worksforme",
    },
    {
      name: "Run-n-Jump",
      technologies: ["JavaScript", "HTML", "CSS", "Canvas"],
      description:
        "A simple web-based game where players control a dinosaur to run and jump over obstacles. This game provided an introduction to HTML Canvas and reactive development.",
      link: "https://github.com/RobertFilms/Run-n-Jump",
    },
    {
      name: "Zombie Shooter",
      technologies: ["JavaScript", "HTML", "CSS", "Canvas", "Socket.io"],
      description:
        "A simple web-based game where players control a character to shoot zombies. This game provided practice with real-time communication and multiplayer functionality using Socket.IO.",
      link: "https://github.com/RobertFilms/zombie-shooter",
    },
    {
      name: "ForumBoard",
      technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
      description:
        "A simple web-based forum application where users can create posts, reply to threads, and interact with other members.",
      link: "https://github.com/RobertFilms/ForumBoard/tree/main",
    },
  ],
  certificates: [
    {
      name: "CIW JavaScript Specialist",
      issuer: "CIW",
      year: "2025",
      image: { src: "/certs/ciw.jpg", srcSet: "/certs/ciw@2x.jpg 2x" },
      link: "https://ciwcertified.com/courses/ciw-javascript-specialist/",
    },
    {
      name: "NOCTI — Computer Programming",
      issuer: "NOCTI",
      year: "2026",
      image: { src: "/certs/nocti.jpg", srcSet: "/certs/nocti@2x.jpg 2x" },
      link: "https://www.nocti.org/",
    },
    {
      name: "CompTIA IT Fundamentals (ITF+)",
      issuer: "CompTIA",
      year: "2023",
      image: { src: "/certs/itf.jpg", srcSet: "/certs/itf@2x.jpg 2x" },
      link: "https://www.comptia.org/certifications/it-fundamentals",
    },
    {
      name: "OSHA 10-Hour",
      issuer: "OSHA",
      year: "2024",
      image: { src: "/certs/osha.jpg", srcSet: "/certs/osha@2x.jpg 2x" },
      link: "https://www.osha.gov/training/outreach",
    },
  ],
  portfolioSites: [
    { name: "GitHub", url: "https://github.com/RobertFilms", icon: "🐙" },
    { name: "CodePen", url: "https://codepen.io/RobertFilms", icon: "✏️" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/robert-ambartsumyan-171594338/",
      icon: "💼",
    },
  ],
  education: [
    {
      degree: "High School Diploma",
      school: "York County School of Technology",
      year: "2022-2026",
      details:
        "GPA: 3.7 | Relevant coursework: Computer Programming, Web Development, Data Structures, and Algorithms",
    },
  ],
};

export const pageCopy = {
  experience: {
    eyebrow: "Experience",
    title: "Professional Experience",
    description:
      "A concise view of hands-on development work, technical responsibilities, and outcomes achieved in real-world roles.",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Selected Projects",
    description:
      "A focused portfolio of practical projects with direct links to source code and implementation details.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical Skills",
    description:
      "Core technologies and development tools used to deliver production-ready web applications.",
  },
  contact: {
    eyebrow: "Connect",
    title: "Contact & Links",
    description:
      "Direct contact details and professional profiles for recruiters, hiring managers, and collaborators.",
  },
  certificates: {
    eyebrow: "Credentials",
    title: "Certifications",
    description:
      "Verified certificates and professional credentials demonstrating training and competency.",
  },
};
