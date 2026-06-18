const portfolio = {
  name: "Alex Chen",
  title: "Software Engineer",
  email: "alex.chen@email.com",
  initials: "AC",
  location: "Open to remote or hybrid",
  socials: {
    github: "https://github.com/alexchen-dev",
    linkedin: "https://linkedin.com/in/alexchen-dev",
    twitter: "https://twitter.com/alexchen_dev",
  },
  hero: {
    tagline: "Building thoughtful software that ships.",
    subtitle:
      "Recent CS graduate focused on full-stack development, clean architecture, and products that feel great to use. Open to software engineering roles at startups and growth-stage teams.",
    availability: "Open to full-time roles · Remote or hybrid",
  },
  about: {
    eyebrow: "About",
    title: "Engineer with product instincts",
    subtitle:
      "I build reliable software with attention to detail, performance, and the people who use it.",
    bio: [
      "I'm a software engineer who loves turning ambiguous problems into reliable, user-facing products. I care about readable code, thoughtful UX, and shipping iteratively.",
      "Over the past two years I've built full-stack apps, contributed to open source, and led small teams through hackathons and personal projects. I'm especially interested in developer tools, fintech, and products where performance and polish both matter.",
      "I'm looking for a team where I can learn quickly, own meaningful features end-to-end, and grow into a strong product-minded engineer.",
    ],
    stats: [
      { label: "Projects shipped", value: "8+" },
      { label: "Tech stacks", value: "Full-stack" },
      { label: "Status", value: "Open to roles" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    subtitle:
      "Production-minded projects with measurable impact — each one solving a real problem end to end.",
    items: [
      {
        title: "FlowBoard",
        description:
          "A real-time project management dashboard for remote teams. Built with optimistic UI updates, drag-and-drop kanban boards, and live collaboration via WebSockets.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind"],
        github: "https://github.com/alexchen-dev/flowboard",
        demo: "https://flowboard-demo.vercel.app",
        challenges: [
          "Reduced perceived latency by 40% with optimistic updates and conflict resolution on reconnect.",
          "Designed a normalized data layer that kept kanban state consistent across concurrent edits.",
          "Implemented role-based access control without blocking the real-time sync pipeline.",
        ],
        image: "assets/projects/flowboard.svg",
      },
      {
        title: "DevMetrics",
        description:
          "Developer productivity analytics platform that aggregates GitHub, CI, and issue tracker data into actionable weekly insights for engineering teams.",
        tech: ["React", "Node.js", "GraphQL", "Redis", "Chart.js"],
        github: "https://github.com/alexchen-dev/devmetrics",
        demo: "https://devmetrics-demo.vercel.app",
        challenges: [
          "Built a caching layer that cut API response times from 2.1s to 180ms for dashboard loads.",
          "Designed GraphQL resolvers with batching to avoid N+1 queries across third-party integrations.",
          "Created digest emails summarizing sprint velocity with zero manual configuration.",
        ],
        image: "assets/projects/devmetrics.svg",
      },
      {
        title: "SnapReceipt",
        description:
          "Mobile-first expense tracker that uses OCR to extract receipt data and categorize spending automatically. Includes budget alerts and export to CSV/PDF.",
        tech: ["React Native", "Expo", "Python", "FastAPI", "Tesseract"],
        github: "https://github.com/alexchen-dev/snapreceipt",
        demo: "https://snapreceipt-demo.vercel.app",
        challenges: [
          "Improved OCR accuracy from 72% to 91% with image preprocessing and field validation heuristics.",
          "Offline-first sync queue kept the app usable without connectivity on mobile networks.",
          "Shipped a categorization model trained on 2,000 labeled receipts in under two weeks.",
        ],
        image: "assets/projects/snapreceipt.svg",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've built and learned",
    subtitle:
      "Internship experience and independent work that shaped how I ship software.",
    items: [
      {
        company: "TechStart Labs",
        role: "Software Engineering Intern",
        period: "Jun 2025 – Aug 2025",
        bullets: [
          "Shipped 4 customer-facing features to production used by 1,200+ monthly active users.",
          "Reduced page load time by 35% by migrating critical paths to server components and edge caching.",
          "Collaborated with design and PM to scope MVPs, write RFCs, and iterate from user feedback within two-week sprints.",
        ],
      },
      {
        company: "Independent / Open Source",
        role: "Full-Stack Developer",
        period: "2023 – Present",
        bullets: [
          "Built and maintained 3 production-grade side projects with CI/CD, monitoring, and automated tests.",
          "Contributed 12 merged PRs to open-source libraries including React Query and ESLint plugins.",
          "Mentored 4 hackathon teammates on Git workflows, API design, and deployment to Vercel/Railway.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tools I reach for",
    subtitle:
      "A practical stack for building, shipping, and maintaining modern applications.",
    groups: [
      { key: "languages", label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"] },
      { key: "frameworks", label: "Frameworks", items: ["React", "Next.js", "Node.js", "FastAPI", "React Native"] },
      { key: "tools", label: "Tools", items: ["Git", "Docker", "PostgreSQL", "Redis", "AWS", "Figma"] },
      { key: "soft", label: "Soft Skills", items: ["Communication", "Ownership", "Debugging", "System design basics"] },
    ],
  },
  education: {
    school: "State University",
    degree: "B.S. Computer Science",
    year: "2026",
    highlights: [
      "Dean's List · GPA 3.8",
      "Teaching Assistant — Data Structures & Algorithms",
      "ACM Programming Contest — Top 10 regional finish",
    ],
  },
  resume: {
    eyebrow: "Resume",
    title: "Professional summary",
    subtitle: "Download the full PDF or skim the highlights below.",
    summary:
      "Software engineer with full-stack experience building performant web applications. Strong in TypeScript, React, and backend API design. Seeking a role where I can ship impactful features and grow with a high-caliber team.",
    downloadPath: "assets/resume.pdf",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Let's connect",
    message:
      "I'm actively interviewing for software engineering roles. Whether you're hiring, building something interesting, or just want to chat — I'd love to hear from you.",
    availability: "Available for interviews and quick intro calls.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};
