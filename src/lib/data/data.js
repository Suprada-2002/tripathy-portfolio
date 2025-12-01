import {BotMessageSquare, Fingerprint, PlugZap, BatteryCharging, ShieldHalf, GlobeLock} from '@lucide/svelte';

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#aboutus" },
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
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
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