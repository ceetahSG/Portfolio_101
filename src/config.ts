import bazarDorImage from "./assets/bazarDor.png";
import bdnews24Image from "./assets/bdnews24.png";
import unitrackBdImage from "./assets/unitrackBd.png";

export interface ProductionEvent {
  id: string;
  title: string;
  year: string;
  role?: string;
  description: string;
  highlights: string[];
  tags: string[];
  image?: string;
  links?: { label: string; url: string }[];
  accent: "purple" | "gold" | "cyan";
  featured?: boolean;
}

export const config = {
  developer: {
    name: "Jihadul",
    fullName: "Jihadul Islam Sajim",
    handle: "JihadulSajim",
    initials: "JS",
    title: "Computer Science Student & Frontend Developer",
    heroPrefix: "A",
    roles: ["CS Student", "Frontend Developer"],
    photo: "", // add a path like "/images/profile.png" to show a photo on mobile; hidden while empty
    description:
      "Hi, I'm Jihadul Islam Sajim, a Computer Science student at ULAB learning full-stack development. I enjoy building useful web applications and turning ideas into working products with React and Next.js.",
  },
  social: {
    github: "ceetahSG",
    email: "sajim.ceetah@gmail.com",
    location: "Bangladesh",
  },
  about: {
    title: "About Me",
    description:
      "I'm a BCSE student at the University of Liberal Arts Bangladesh (ULAB), learning full-stack development with a current focus on frontend work in React and Next.js. I like turning ideas into working web applications, and I learn best by building real projects. I also enjoy problem-solving and programming contests. Before and alongside coding, my esports broadcasting and production work gave me hands-on experience with technical troubleshooting, coordination and teamwork.",
  },
  experiences: [
    {
      position: "BCSE Student",
      company: "University of Liberal Arts Bangladesh (ULAB)",
      period: "Present",
      location: "Bangladesh",
      description:
        "Studying Computer Science and learning full-stack development, with a current focus on frontend work in React and Next.js.",
      responsibilities: [],
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      position: "Programming Contests",
      company: "ULAB & Phitron XPSC Club",
      period: "Contests",
      location: "Bangladesh",
      description:
        "My team won a ULAB programming contest. I also completed the Phitron CSE Fundamentals XPSC Club program and progressed to the XPSC final contest selection.",
      responsibilities: [],
      technologies: [],
    },
    {
      position: "Chief Broadcaster & Production Manager",
      company: "Zenetic Esports",
      period: "Esports",
      location: "Bangladesh",
      description:
        "Ran live esports broadcast production with OBS and vMix, handled technical troubleshooting and coordinated events.",
      responsibilities: [],
      technologies: ["OBS", "vMix"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Bangla News 24",
      category: "Full-Stack / News Portal",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, DaisyUI, Better Auth, MongoDB",
      image: bdnews24Image,
      description:
        "A modern Bengali news portal with current and categorized stories, popular news, article pages, a scrolling ticker, responsive navigation, and Better Auth email/password sign-in backed by MongoDB.",
      repository: "https://github.com/ceetahSG/BanglaNews24",
      live: "https://bangla-news24-rho.vercel.app",
    },
    {
      id: 2,
      title: "UniTrack BD",
      category: "Team Project / In Progress",
      status: "In Progress",
      technologies: "React, TypeScript, Mobile UI",
      image: unitrackBdImage,
      description:
        "A mobile app UI for UniTrack BD, a university transportation project. The interface was created from the team's Figma design and is set up to run with npm.",
      repository: "https://github.com/ceetahSG/UniTrackBd-Frontend",
      live: "",
    },
    {
      id: 3,
      title: "BazarDor",
      category: "Web App",
      technologies: "Next.js, React, TypeScript, Tailwind CSS, HeroUI, Better Auth, MongoDB",
      image: bazarDorImage,
      description:
        "A deployed Bangla market price tracker that combines live product pricing, category browsing, price movement trends, product details, and email/password or social authentication.",
      repository: "https://github.com/ceetahSG/bazardor",
      live: "https://bazardor-mocha.vercel.app",
    },
  ],
  githubProjects: [
    {
      id: "book-vibe",
      title: "Book Vibe",
      description:
        "A Next.js application bootstrapped with create-next-app and prepared for a responsive book-focused web experience.",
      image: "https://opengraph.githubassets.com/1/ceetahSG/Book-Vibe",
      repository: "https://github.com/ceetahSG/Book-Vibe",
      live: "https://book-vibe-chetah.vercel.app",
    },
    {
      id: "fit-log",
      title: "Fit Log",
      description:
        "A workout library for browsing exercises, viewing equipment and performance details, building a daily plan with a five-lift cap, saving workouts, tracking plan metrics, and sorting by duration, calories, or rating.",
      image: "https://opengraph.githubassets.com/1/ceetahSG/Fit-Log",
      repository: "https://github.com/ceetahSG/Fit-Log",
      live: "https://fit-log-chetah.vercel.app",
    },
    {
      id: "stress-monitor-device",
      title: "Stress Monitor Device",
      description:
        "A project repository for a stress-monitoring device.",
      image:
        "https://opengraph.githubassets.com/1/ceetahSG/Stress-Monitor-Device",
      repository: "https://github.com/ceetahSG/Stress-Monitor-Device",
    },
    {
      id: "dev-stack",
      title: "DevStack",
      description:
        "An interactive React application that helps developers explore technologies by category, build a personalized tech stack, and preview their selected tools in real time.",
      image: "https://opengraph.githubassets.com/1/ceetahSG/devStack",
      repository: "https://github.com/ceetahSG/devStack",
      live: "https://dev-stack-flax.vercel.app",
    },
    {
      id: "bpl-dream",
      title: "BPL Dream",
      description:
        "A Next.js application bootstrapped with create-next-app.",
      image: "https://opengraph.githubassets.com/1/ceetahSG/bpl-dream",
      repository: "https://github.com/ceetahSG/bpl-dream",
      live: "https://bpl-dream-rouge.vercel.app",
    },
    {
      id: "react-mart",
      title: "React Mart",
      description:
        "A React and TypeScript product app that fetches item data from an external API and displays it in a responsive interface, built to practice hooks and dynamic rendering.",
      image: "https://opengraph.githubassets.com/1/ceetahSG/React-Mart",
      repository: "https://github.com/ceetahSG/React-Mart",
      live: "https://react-mart-theta.vercel.app",
    },
    {
      id: "go-on-the-go",
      title: "Go On The Go",
      repository: "https://github.com/ceetahSG/go-onThe-go",
    },
    {
      id: "unitrack-backend",
      title: "UniTrack Backend",
      repository: "https://github.com/ceetahSG/unitrack-backend",
    },
    {
      id: "unitrack-web",
      title: "UniTrack Web",
      repository: "https://github.com/ceetahSG/unitrack-web",
    },
    {
      id: "free-fire",
      title: "Free Fire",
      repository: "https://github.com/ceetahSG/Free-Fire-",
    },
    {
      id: "unitrack-bd",
      title: "UniTrack BD",
      repository: "https://github.com/ceetahSG/UniTrack-BD",
    },
    {
      id: "new-year",
      title: "New Year",
      repository: "https://github.com/ceetahSG/New-Year",
    },
    {
      id: "assignment-1",
      title: "Assignment 1",
      repository: "https://github.com/ceetahSG/Assignment-1",
    },
    {
      id: "b14-portfolio",
      title: "B14 Portfolio",
      repository: "https://github.com/ceetahSG/b14-Portfolio",
    },
    {
      id: "pubg-project",
      title: "PUBG Project",
      repository: "https://github.com/ceetahSG/pubg-project",
    },
    {
      id: "sdt",
      title: "SDT",
      repository: "https://github.com/ceetahSG/SDT",
    },
    {
      id: "lost-and-found-system",
      title: "Lost and Found System",
      repository: "https://github.com/ceetahSG/Lost-and-Found-System",
    },
    {
      id: "automated-ticket-monitor",
      title: "Automated Ticket Monitor",
      repository: "https://github.com/ceetahSG/Automated-Ticket-Monitor-",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      repository: "https://github.com/ceetahSG/Portfolio",
    },
    {
      id: "register",
      title: "Register",
      repository: "https://github.com/ceetahSG/register",
      live: "https://docs.is-a.dev",
    },
    {
      id: "ticket-booking",
      title: "Ticket Booking",
      repository: "https://github.com/ceetahSG/Ticket-Booking",
    },
    {
      id: "digital-blood-donor-management-system",
      title: "Digital Blood Donor Management System",
      repository:
        "https://github.com/ceetahSG/DigitalBloodDonorManagementSystem",
    },
    {
      id: "python",
      title: "Python",
      repository: "https://github.com/ceetahSG/Python",
    },
    {
      id: "penguin-fashion",
      title: "Penguin Fashion",
      repository: "https://github.com/ceetahSG/penguin-fashion",
    },
    {
      id: "hero-portfolio",
      title: "Hero Portfolio",
      repository: "https://github.com/ceetahSG/heroPortfolio",
    },
    {
      id: "goods-panda",
      title: "Goods Panda",
      repository: "https://github.com/ceetahSG/Goods-Panda",
    },
    {
      id: "cv",
      title: "CV",
      repository: "https://github.com/ceetahSG/CV",
    },
    {
      id: "demo",
      title: "Demo",
      repository: "https://github.com/ceetahSG/demo",
    },
    {
      id: "web-programming",
      title: "Web Programming",
      repository: "https://github.com/ceetahSG/Web-Programming",
    },
    {
      id: "contest",
      title: "Contest",
      repository: "https://github.com/ceetahSG/contest",
    },
    {
      id: "data-structure",
      title: "Data Structure",
      repository: "https://github.com/ceetahSG/dataStructure",
    },
    {
      id: "java",
      title: "Java",
      repository: "https://github.com/ceetahSG/Java",
    },
    {
      id: "cplusplus",
      title: "C++",
      repository: "https://github.com/ceetahSG/CPlusPlus",
    },
  ],
  productionEvents: [
    {
      id: "discovery-one-fifa-royale-2023",
      title: "Discovery One FIFA Royale",
      year: "2023",
      role: "Head of Management",
      description:
        "A large-scale FIFA tournament requiring coordinated match operations and event management.",
      highlights: ["BDT 15 lakh reported prize pool", "700+ matches", "4,000+ attendees"],
      tags: ["Tournament Management", "Match Operations"],
      accent: "gold",
      featured: true,
    },
    {
      id: "mlbb-bangladesh-championship-fall-2023",
      title: "MLBB Bangladesh Championship",
      year: "Fall 2023",
      description:
        "A Mobile Legends: Bang Bang championship with a strong competitive broadcast identity.",
      highlights: ["Associated with the first official MLBB API use in Bangladesh"],
      tags: ["Broadcast Production", "Technical Operations"],
      accent: "purple",
      featured: true,
    },
    {
      id: "besl-season-1",
      title: "BESL Season 1",
      year: "Season 1",
      description:
        "A competitive esports event included in my live production portfolio.",
      highlights: [],
      tags: ["Broadcast Production"],
      accent: "cyan",
    },
    {
      id: "mobile-mania-2024",
      title: "Mobile Mania",
      year: "2024",
      description:
        "A mobile esports event delivered as part of my competitive broadcast experience.",
      highlights: [],
      tags: ["Broadcast Production", "Tournament Operations"],
      accent: "purple",
    },
    {
      id: "acer-predator-league-bangladesh-grand-finale",
      title: "Acer Predator League Bangladesh Grand Finale",
      year: "Grand Finale",
      description:
        "A premium gaming event finale hosted at Independent University, Bangladesh (IUB).",
      highlights: ["Independent University, Bangladesh (IUB)"],
      tags: ["Live Production", "Event Operations"],
      accent: "gold",
      featured: true,
    },
    {
      id: "oraimo-challengers-series-2026",
      title: "Oraimo Challengers Series",
      year: "2026",
      description:
        "A competitive esports broadcast event included in my production credits.",
      highlights: [],
      tags: ["Broadcast Production"],
      accent: "purple",
    },
    {
      id: "ffbc-2025",
      title: "FFBC",
      year: "2025",
      role: "IT Infrastructure Lead",
      description:
        "A technically focused esports operation where infrastructure and match-data workflows were central to delivery.",
      highlights: ["10,000+ lines of raw match data per match"],
      tags: ["IT Infrastructure", "Match Data", "Technical Operations"],
      accent: "cyan",
      featured: true,
    },
  ] satisfies ProductionEvent[],
  contact: {
    email: "sajim.ceetah@gmail.com",
    github: "https://github.com/ceetahSG",
    linkedin: "https://www.linkedin.com/in/md-sajim-452195244/",
    discord: "cheetah_010",
    resume: "", // add a path like "/resume.pdf" after putting the file in /public; hidden while empty
  },
  skills: {
    develop: {
      title: "FRONTEND",
      description: "Building responsive interfaces with React and Next.js",
      details:
        "My main focus. I build pages and components with React and Next.js, style them with Tailwind CSS and DaisyUI, and I'm getting more comfortable with TypeScript.",
      tools: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    design: {
      title: "BACKEND & TOOLS",
      description: "Learning the backend side through real projects",
      details:
        "I'm learning MongoDB, authentication and REST API integration by building projects, and I use Git, GitHub, Vercel and VS Code day to day.",
      tools: [
        "MongoDB",
        "Authentication",
        "REST API integration",
        "Git",
        "GitHub",
        "Vercel",
        "VS Code",
      ],
    },
  },
};
