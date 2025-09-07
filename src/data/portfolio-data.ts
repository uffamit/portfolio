import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Smartphone, Dribbble, Twitter } from 'lucide-react';

export const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  name: "Amit Divekar",
  title: "B.Sc. Computer Science Student",
  bio: "A dedicated and passionate B.Sc. Computer Science student at Savitribai Phule Pune University (SPPU), with a strong foundation in software development and a keen interest in creating innovative solutions. Eager to apply my skills in a challenging and dynamic work environment.",
  contactLink: "#contact"
};

export const aboutData = {
  education: {
    institution: "K.P.G. College",
    degree: "B.Sc. in Computer Science",
    duration: "2021 - 2024",
    cgpa: "CGPA: 8.5/10",
    courses: [
      "Data Structures & Algorithms", "Object-Oriented Programming",
      "Database Management Systems", "Web Development", "Software Engineering"
    ]
  },
  hobbies: [
    "Coding & Problem Solving",
    "Exploring new technologies",
    "Reading tech blogs",
    "Open-source contribution"
  ]
};

export const experienceData = [
  {
    company: "Electronic Arts (EA)",
    role: "Virtual Experience",
    duration: "Jun 2023 - Jul 2023",
    description: "Completed a virtual experience program focusing on game development principles and software engineering practices within the gaming industry. Contributed to a simulated project involving gameplay mechanics and bug fixing."
  },
  {
    company: "Accenture UK",
    role: "Virtual Experience",
    duration: "May 2023 - Jun 2023",
    description: "Participated in a virtual program simulating a real-world software development lifecycle. Gained insights into Agile methodologies, requirements gathering, and delivering solutions for enterprise-level clients."
  }
];

export const projectsData = [
  {
    title: "Password Strength Checker",
    description: "A web-based tool to assess the strength of passwords based on various criteria like length, character types, and common patterns.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Amit-Divekar/Password-Strength-Checker",
    liveLink: "https://password-strength-checker-nine-mu.vercel.app/"
  },
  {
    title: "2FA Password Protector",
    description: "A security-focused application that implements two-factor authentication to protect user credentials.",
    technologies: ["Python", "Flask", "Twilio API"],
    githubLink: "https://github.com/Amit-Divekar/2FA-Password-Protector"
  },
  {
    title: "Cloud File Uploader",
    description: "A service that allows users to securely upload and manage files in a cloud storage environment.",
    technologies: ["Node.js", "Express", "AWS S3"],
    githubLink: "https://github.com/Amit-Divekar/Cloud-File-Uploader"
  },
  {
    title: "Anime Viewing Platform",
    description: "A full-stack platform for streaming and discovering anime, featuring user accounts and watchlists.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Amit-Divekar/Anime-Viewing-Platform"
  },
  {
    title: "Eatinformed",
    description: "A mobile-friendly web app providing nutritional information and allergen alerts for food products.",
    technologies: ["Vue.js", "Firebase", "Edamam API"],
    githubLink: "https://github.com/Amit-Divekar/Eatinformed"
  }
];

export const certificationsData = [
    {
    title: "Software Engineering",
    issuer: "Electronic Arts (EA)",
    skills: ["Game Engine Technology", "Data Structures", "Future Design", "Object Oriented Design"]
  },
  {
    title: "Developer and Technology",
    issuer: "Accenture UK & Ireland",
    skills: ["Agile & Waterfall Methodologies"]
  },
    {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft and LinkedIn",
    skills: ["Threat & Vulnerability Management", "Cybersecurity", "Information Security Awareness"]
  },
    {
    title: "Google Analytics Certification",
    issuer: "Google",
    skills: ["Analytical Skills", "Google Analytics"]
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    skills: ["Cybersecurity Fundamentals", "Threat Analysis"]
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis"]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    skills: ["Cloud Concepts", "AWS Services", "Security", "Billing"]
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid"]
  }
];

export const skillsData = {
  technical: [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "Java", "HTML5 & CSS3", "SQL", "MongoDB", "Git & GitHub", "REST APIs", "Docker"
  ],
  soft: [
    "Problem Solving", "Team Collaboration", "Communication",
    "Agile Methodologies", "Time Management", "Adaptability"
  ]
};

export const socialLinks = {
  github: "https://github.com/uffamit",
  linkedin: "https://www.linkedin.com/in/divekar-amit",
  email: "amitdivekar@example.com"
};
