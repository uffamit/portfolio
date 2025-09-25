
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Smartphone, Dribbble, Twitter } from 'lucide-react';

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
  title: "B.Sc. Computer Science Student",
  bio: "My name is Amit Divekar, and I'm a passionate B.Sc. Computer Science student at Savitribai Phule Pune University, driven by a curiosity for technology and a commitment to creating impactful digital solutions. With a strong foundation in software and web development, I thrive in collaborative environments, leveraging my skills in Python, JavaScript, React.js, and more to build innovative applications. My virtual experiences at Electronic Arts and Accenture UK have honed my ability to tackle complex problems, optimize code, and communicate effectively with stakeholders. I’m eager to join a dynamic team where I can contribute to customer success, drive business growth, and deliver exceptional value through creativity and technical expertise.",
  contactLink: "#contact"
};

export const aboutData = {
  bio: "My name is Amit Divekar, and I'm a passionate B.Sc. Computer Science student at Savitribai Phule Pune University, driven by a curiosity for technology and a commitment to creating impactful digital solutions.",
  education: {
    institution: "K.P.G. Arts, Commerce, and Science College",
    degree: "B.Sc. in Computer Science",
    duration: "2021 - 2024",
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
    title: "Eatinformed",
    description: "An AI-driven platform for instant nutrition analysis from food label images, built with Next.js, Genkit, and Google Gemini, featuring a modern UI with Tailwind CSS.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Genkit", "Gemini"],
    githubLink: "https://github.com/uffamit/Eatinformed",
    liveLink: "https://eatinformed-eosin.vercel.app"
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
    githubLink: "https://github.com/uffamit/Cloud-File-Uploader"
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
    title: "Software Engineering",
    issuer: "Electronic Arts (EA)",
    skills: ["Game Engine Technology", "Data Structures", "Future Design", "Object Oriented Design"]
  },
  {
    title: "Developer and Technology",
    issuer: "Accenture UK",
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
  }
];

export const skillsData = {
  technical: [
    "Python", "JavaScript", "HTML", "CSS", "React.js", "Flask",
    "Node.js", "SQL", "API Integration", "Frontend & Backend Development",
    "TypeScript", "Next.js", "MongoDB", "Express.js", "Tailwind CSS",
    "Framer Motion", "Git", "C", "Pandas", "NumPy", "AWS",
    "Cybersecurity Fundamentals", "Agile Methodologies", "Data Structures",
    "Database Management", "UI/UX Design", "DBMS"
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
  email: "Amitdivekar289@gmail.com"
};
