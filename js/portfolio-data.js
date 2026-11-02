const portfolio = {
  name: "Lee Quan Jin",
  title: "Software Engineering Fresh Graduate",
  email: "leedannyqj@gmail.com",
  initials: "QJ",
  location: "Kuala Lumpur, Malaysia",
  socials: {
    github: "https://github.com/leequanjin",
    linkedin: "https://www.linkedin.com/in/lee-quan-jin-647aa72b7/",
  },
  hero: {
    tagline: "Software Development, Java",
    subtitle:
      "Software engineering student at TAR UMT with internship experience in java-based banking systems, plus awarded work in React, Flutter, and blockchain technolgies.",
    availability:
      "Based in Kuala Lumpur · Open to internships and full-time / new-grad roles",
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    subtitle:
      "",
    items: [
      {
        title: "APUBCC DevMatch 2024 — Healthcare Data Sharing",
        description:
          "React frontend for a blockchain-based healthcare data-sharing platform, allowing users to securely manage and share healthcare records. Champion at APUBCC DevMatch 2024.",
        tech: ["React", "JavaScript", "HTML/CSS"],
        challenges: [
          "Built the React frontend so users could manage and share healthcare records on a blockchain-backed platform.",
          "Focused the interface on secure record access rather than exposing raw chain details to end users.",
        ],
        image: "assets/projects/medichain.png",
      },
      {
        title: "ETH KL 2024 — Feeding Danny",
        description:
          "Cross-chain blockchain game built to increase blockchain adoption. Gameplay systems in Unity with NFT game assets integrated across Scroll and Manta Sepolia. 1st Runner-Up at ETH KL 2024.",
        tech: ["Unity", "NFTs", "Scroll", "Manta Sepolia"],
        challenges: [
          "Developed gameplay systems in Unity for a cross-chain game.",
          "Integrated blockchain-based NFT assets across Scroll and Manta Sepolia.",
        ],
        image: "assets/projects/feedingdanny.png",
      },
      {
        title: "TAR UMT TVHackathon 2024 — AI Journaling",
        description:
          "AI-assisted journaling application with Gemini-generated insights, cloud storage, and mood tracking. 1st Runner-Up at TAR UMT TVHackathon 2024.",
        tech: ["Flutter", "Firebase", "Gemini API"],
        challenges: [
          "Built the journaling app in Flutter with Firebase for cloud-based storage.",
          "Integrated the Gemini API for AI-generated journal insights and mood tracking.",
        ],
        image: "assets/projects/moodly.png",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've built and learned",
    subtitle:
      "Internship work on banking product modules, reports, tests, and a Java 21 migration.",
    items: [
      {
        company: "Cardzone Sdn Bhd, Kuala Lumpur",
        role: "Project Development Intern",
        period: "Nov 2025 – Apr 2026",
        bullets: [
          "Troubleshot frontend and JasperReports issues using HTML, CSS, JavaScript and Apache Velocity, resolving problems involving fonts, report layouts, sizing and rendering.",
          "Developed automated unit tests for banking workflows using Java, JUnit and Mockito, mocking dependencies to validate system behavior across BSN, BMMB, HLBVN and VietBank.",
          "Implemented client-specific feature enhancements by customizing existing base product modules to meet new project-specific requirements.",
          "Supported VietBank's Java 21 migration by updating libraries, configurations, source/database utilities and bank-specific dependencies, followed by regression testing.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tools I reach for",
    subtitle:
      "Languages, frameworks, and tools from coursework, internship work, and hackathons.",
    groups: [
      { key: "languages", label: "Languages", items: ["Java", "C++", "JavaScript", "Python", "HTML/CSS"] },
      { key: "frameworks", label: "Frameworks", items: ["React", "JUnit", "Mockito", "Flutter"] },
      { key: "databases", label: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "Firestore"] },
      { key: "tools", label: "Tools", items: ["Git", "JasperReports", "Apache Velocity", "Docker", "Jenkins", "AWS"] },
      { key: "spoken", label: "Spoken Languages", items: ["English", "Chinese", "Malay", "Japanese (JLPT N1)"] },
    ],
  },
  education: {
    school: "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
    degree: "Bachelor of Software Engineering",
    year: "2026",
    highlights: [
      "Jul 2023 – Nov 2026 (Expected)",
      "GPA 3.9 / 4.0",
      "President List 2023, Dean List 2024, Dean List 2025",
      "APUBCC DevMatch 2024 | Champion",
      "ETH KL 2024 | 1st Runner-Up",
      "TAR UMT TVHackathon 2024 | 1st Runner-Up",
    ],
  },
  resume: {
    eyebrow: "Resume",
    title: "Professional summary",
    subtitle: "Download the full PDF or skim the highlights below.",
    summary:
      "Software engineering student (GPA 3.9/4.0) with a Project Development internship at Cardzone working on Java banking systems, JasperReports, and a Java 21 migration. Awarded at APUBCC DevMatch, ETH KL, and TAR UMT TVHackathon. Open to internships and full-time / new-grad software roles.",
    downloadPath: "assets/resume.pdf",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Let's connect",
    message:
      "I'm looking for internships and full-time / new-grad software roles. If you're hiring or want to talk about a project, I'd like to hear from you.",
    availability: "Available for interviews and intro calls.",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};
