import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Smartphone, Dribbble, Twitter } from 'lucide-react';

// Navigation and portfolio content configuration
export const navigationLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience'},
  { href: '/#projects', label: 'Projects' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#skills', label: 'Skills' },
  { href: '/notes', label: 'Notes' },
  { href: '/#contact', label: 'Contact' },
];

export const heroData = {
  name: "Amit Divekar",
  title: "Next.js Developer | Growing Skills in AI, DevOps, CI/CD & Cloud Infrastructure",
  bio: "I build, break, and fix things for fun!!",
  contactLink: "#contact"
};

export const aboutData = {
  bio: "Next.js Developer | Growing Skills in AI, DevOps, CI/CD & Cloud Infrastructure",
  education: {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2024 - 2027",
    cgpa: "CGPA: 8.36/10.0",
    courses: [
      "Programming Fundamentals", "Data Structures and Algorithms", 
      "Database Management Systems", "Computer Networks", "Operating Systems"
    ]
  },
  hobbies: [
    "Web and software development",
    "Solving puzzles and logic games like Chess",
    "Digital art, illustration, and concept design",
    "UI/UX and animation design",
    "Exploring new digital tools for productivity"
  ]
};

export const experienceData = [
  {
    company: "Electronic Arts (EA)",
    role: "Software Engineering Virtual Experience",
    duration: "Completed: Feb 2024",
    description: "Crafted a feature proposal, designed a C class diagram, and fixed a significant bug in the EA Sports College Football codebase, enhancing performance by integrating a more efficient data structure."
  },
  {
    company: "Accenture UK",
    role: "Developer and Technology Virtual Experience",
    duration: "Completed: Dec 2023",
    description: "Gained a thorough understanding of the SDLC, researched emerging tech trends like DevOps, compared Waterfall vs. Agile, and designed/optimized a Python program to improve functionality."
  }
];

export const projectsData = [
  {
    title: "Professor Profiler",
    description: "An advanced multi-agent system that reverse-engineers exam papers to decode professor psychology and generate optimized study strategies.",
    technologies: ["Python", "Software Development", "DevOps", "Git + GitHub", "Multi-agent AI", "Hub-and-Spoke architecture"],
    githubLink: "https://github.com/uffamit/Professor_Profiler",
    docLink: "https://deepwiki.com/uffamit/Professor_Profiler"
  },
  {
    title: "Eatinformed",
    description: "An AI-driven platform for instant nutrition analysis from food label images, built with Next.js, Genkit, and Google Gemini, featuring a modern UI with Tailwind CSS.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Genkit", "Gemini"],
    githubLink: "https://github.com/uffamit/Eatinformed",
    liveLink: "https://eatinformed.amitdevx.tech/"
  },
  {
    title: "2FA Password Protector",
    description: "A Flask-based authentication system with three layers of security: login, PIN, and Two-Factor Authentication (2FA), using SQLite and cryptography for secure data handling.",
    technologies: ["Python", "Flask", "SQLite", "Cryptography"],
    githubLink: "https://github.com/uffamit/2FA-Password-Protector"
  },
  {
    title: "Cloud File Uploader",
    description: "A secure file storage system similar to Google Drive, developed with Node.js and SQLite, allowing users to store and manage files efficiently in a cloud-based environment.",
    technologies: ["Node.js", "SQLite"],
    githubLink: "https://github.com/uffamit/FileFlow"
  },
    {
    title: "Anime Viewing Platform",
    description: "A responsive Flask-based website for streaming copyright-free anime, ensuring a smooth user experience with dynamic content loading and an intuitive UI.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/uffamit/Anime-Viewing-Platform"
  },
  {
    title: "Password Strength Checker",
    description: "A web-based tool to assess the strength of passwords based on various criteria like length, character types, and common patterns.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/uffamit/Password-Strength-Checker",
    liveLink: "https://password-strength-checker-nine-mu.vercel.app/"
  }
];

export const certificationsData = [
  {
    title: "IP Addressing and Subnetting",
    issuer: "GeeksforGeeks",
    skills: ["IP Addressing", "Subnetting", "Internet Protocol Suite (TCP/IP)", "Internet Protocol (IP)"],
    link: "https://media.geeksforgeeks.org/courses/certificates/9f02af57d75cc46e928c771bfbcdfe62.pdf",
    companyLogo: "https://www.svgrepo.com/show/330494/geeksforgeeks.svg"
  },
  {
    title: "Trust and Security with Google Cloud",
    issuer: "Google",
    skills: [],
    link: "https://www.cloudskillsboost.google/public_profiles/40d340d4-c84b-4413-b630-69f4ba00ce20/badges/17592342",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  {
    title: "Software Engineering",
    issuer: "Electronic Arts (EA)",
    skills: ["game engine technology", "Data Structures", "future design", "Object Oriented Design"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_iqBjeEZPS8ycoo8nH_1739022094480_completion_certificate.pdf",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg"
  },
  {
    title: "Developer and Technology",
    issuer: "Accenture UK & Ireland",
    skills: ["Agile & Waterfall Methodologies"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_iqBjeEZPS8ycoo8nH_1735299487533_completion_certificate.pdf",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
  },
  {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft and LinkedIn",
    skills: ["Threat & Vulnerability Management", "Cybersecurity", "Information Security Awareness"],
    link: "https://www.linkedin.com/learning/certificates/16c6ab131a12d6d3a28080405cb38e3101483950290ad29c6b5650840398a147",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    skills: ["Analytical Skills"],
    link: "#",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  {
    title: "HackFest-Cert",
    issuer: "GDG New Delhi",
    skills: [],
    link: "https://www.creadefy.com/verify/CERT-3635E29E-3AD6-49F4",
    companyLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  }
];

export const skillsData = {
  technical: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "API Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Frontend & Backend Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Cybersecurity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Agile Methodologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Database Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "UI/UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "DBMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  ],
  soft: [
    "Teamwork", "Time Management", "Presentations",
    "Documentation", "Cross-Team Collaboration", "Problem Solving",
    "Adaptability", "Critical Thinking", "Creativity",
    "Attention to Detail", "Leadership", "Research Skills"
  ]
};

export const socialLinks = {
  github: "https://github.com/uffamit",
  linkedin: "https://www.linkedin.com/in/divekar-amit",
  email: "Amitdivekar289@gmail.com",
  x: "https://x.com/amitdevx_",
  instagram: "https://instagram.com/amitdevx"
};


    
    

    
