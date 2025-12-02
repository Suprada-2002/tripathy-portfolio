import {BotMessageSquare, Fingerprint, PlugZap, BatteryCharging, ShieldHalf, GlobeLock} from '@lucide/svelte';

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#aboutus" },
  { label: "TRIPATHY", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export const features = [
  
  {
    icon: BotMessageSquare,
    text: "Website Development",
    description:
      "We build fast, responsive, and visually appealing websites tailored to your brand.",
  },
  {
    icon: Fingerprint,
    text: "Portfolio Design",
    description:
      "Clean and modern portfolio designs that highlight your skills, projects, and achievements.",
  },
  {
    icon: ShieldHalf,
    text: "Company Website",
    description:
      "Professional company websites that enhance credibility and support business growth.",
  },
  {
    icon: BatteryCharging,
    text: "Logo & Branding",
    description:
      "Custom logo designs and brand identity creation that help you stand out.",
  },
  {
    icon: PlugZap,
    text: "Figma UI/UX Design",
    description:
      "High-quality UI/UX designs in Figma with attention to detail, usability, and aesthetics.",
  },
  {
    icon: GlobeLock,
    text: "Full-Stack Applications",
    description:
      "Complete end-to-end application development with modern frontend and backend technologies.",
  }
];

export const aboutUsData = [
  {
    title: "Ayushman Tripathy",
    designation: "Full Stack Developer",
    features: [
      "Skilled in Full Stack Developement",
      "5+ Years of Experince",
      "",
      "Private Mode",
    ],
    portfolio: '/developers/ayushman',
  },
  {
    title: "Suprada Tripathy",
    designation: "Full Stack Developer",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
    portfolio: '/developers/suprada',
  },
];

export const ayushmanData = {
  name: 'Ayushman Tripathy',
  desc: 'Full Stack Developer specializing in modern UI/UX, web applications, and backend engineering.',
  about:'I am a passionate developer with experience in building responsive websites, full-stack apps, and designing clean UI/UX layouts. I focus on writing clean, optimized, and scalable code.',

  skills: [
    "JavaScript",
    "Svelte / React",
    "Tailwind CSS",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Figma",
    "REST APIs"
  ],

  timeline: [
    {
      date: "Dec 2023 – Present",
      title: "Capgemini – Analyst / Software Engineer",
      description:
        "Full Stack Java Developer working with Spring Boot, Microservices, and React."
    },
    {
      date: "Jun 2022 – May 2023",
      title: "Highradius – Product Intern",
      description:
        "Developed dashboards, automation workflows, and contributed to internal product tools."
    },
    {
      date: "2019 – 2023",
      title: "B.Tech – GIET University",
      description:
        "Graduated with strong fundamentals in programming, web development, and systems."
    }
  ],

  projects: [
    { title: "E-Commerce Platform", desc: "Full stack app with payments." },
    { title: "Social Media Dashboard", desc: "Microservices + Charts." },
    { title: "Library Management System", desc: "Spring Boot + MySQL." }
  ],

  services: [
    "Website Development",
    "Portfolio Design",
    "Figma UI/UX Design",
    "Full-Stack Applications",
    "Logo & Branding",
    "Company Websites"
  ],

  socials: [
    { name: "GitHub", icon: '/github.png', link: "https://github.com/AyushmanTripathy" },
    { name: "LinkedIn", icon: '/linkdin.png', link: "https://linkedin.com/in/yourprofile" }
  ]
};


export const supradaData = {
  name: 'Suprada Tripathy',
  desc: 'Full Stack Developer specializing in modern UI/UX, web applications, and backend engineering.',
  about:'I am a passionate developer with experience in building responsive websites, full-stack apps, and designing clean UI/UX layouts. I focus on writing clean, optimized, and scalable code.',

  skills: [
    "JavaScript",
    "Svelte / React",
    "Tailwind CSS",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "Figma",
    "REST APIs"
  ],

  timeline: [
    {
      date: "Dec 2023 – Present",
      title: "Capgemini – Analyst / Software Engineer",
      description:
        "Full Stack Java Developer working with Spring Boot, Microservices, and React."
    },
    {
      date: "Jun 2022 – May 2023",
      title: "Highradius – Product Intern",
      description:
        "Developed dashboards, automation workflows, and contributed to internal product tools."
    },
    {
      date: "2019 – 2023",
      title: "B.Tech – GIET University",
      description:
        "Graduated with strong fundamentals in programming, web development, and systems."
    }
  ],

  projects: [
    { title: "E-Commerce Platform", desc: "Full stack app with payments." },
    { title: "Social Media Dashboard", desc: "Microservices + Charts." },
    { title: "Library Management System", desc: "Spring Boot + MySQL." }
  ],

  services: [
    "Website Development",
    "Portfolio Design",
    "Figma UI/UX Design",
    "Full-Stack Applications",
    "Logo & Branding",
    "Company Websites"
  ],

  socials: [
    { name: "GitHub", icon: '/github.png', link: "https://github.com/AyushmanTripathy" },
    { name: "LinkedIn", icon: '/linkdin.png', link: "https://linkedin.com/in/yourprofile" }
  ]
};


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];