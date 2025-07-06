import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
} from '../assets';

import glancia from '../assets/glancia.png';
import stackshow from '../assets/stackshow.png';
import devspark from '../assets/devspark.png';
import polishcv from '../assets/polishcv.png';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "UI/UX Designer", icon: creator },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript }, 
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "SQL", icon: mysql },
  { name: "NoSQL", icon: mongodb },
  { name: "AWS", icon: aws },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Figma", icon: figma },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Founder & CEO",
    company_name: "Glancia AI",
    iconBg: "#0A192F",
    date: "Jan 2024 – Present",
    points: [
      "Built a smart styling app providing personalized hairstyle, beard, and makeup recommendations using AI.",
      "Led frontend development using React Native and backend using Firebase.",
      "Integrated salon booking and virtual try-on features for real-time customization.",
      "Pitched at startup events, secured early funding, and managed tech/product strategy.",
    ],
  },
];

const projects = [
  {
    name: "Glancia AI",
    description:
      "AI-powered styling app offering personalized hairstyle, beard, and makeup suggestions along with a virtual try-on feature and salon booking system.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
    ],
    image: glancia,
  },
  {
    name: "StackShow",
    description:
      "A document-sharing and showcasing platform made with Node.js and React. It allows users to upload, view, and manage documents securely.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: stackshow,
  },
  {
    name: "DevSpark",
    description:
      "A plastic packaging impact analyzer that evaluates environmental footprints to help businesses make eco-conscious packaging decisions.",
    tags: [
      { name: "python", color: "yellow-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "data-visualization", color: "green-text-gradient" },
    ],
    image: devspark, // Replace with actual image variable
  },
  {
    name: "PolishCv AI",
    description:
      "A free, open-source AI-powered resume generator that helps users create polished, professional resumes in seconds — no signups, no subscriptions, just results.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: polishcv, // Replace with actual image variable
  },
];


export { services, technologies, experiences, projects };
