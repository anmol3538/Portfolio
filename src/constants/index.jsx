import project1 from "../assets/Solvio.png";
import project2 from "../assets/backend.jpg";
import IIITU from "../assets/IIIT-UNA.jpg";
import SNSPS from "../assets/images.jpg";
import AlgoUniversity from "../assets/algouniversity.png"
import { SiLeetcode, SiCodechef, SiFlipkart } from "react-icons/si";
import INFINITO from "../assets/infinitocomic_logo.jpg"

export const HERO_CONTENT = `Final year Computer Science Engineering student at IIIT Una | Full-Stack Developer | Web Development | Competitive Programming | Problem Solving | Tech Explorer`;


export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong interest in creating efficient and user-friendly applications. 
My journey began with curiosity about how the web works, and it has grown into a passion for designing and developing modern solutions. 
I have worked with technologies like React, Node.js, and MySQL, and I constantly seek opportunities to learn and adapt to emerging tools. 
Collaboration and problem-solving drive my approach, and I take pride in delivering high-quality, practical outcomes. 
Outside of coding, I enjoy exploring new tech trends, contributing to open-source, and enhancing my skills through competitive programming.`;


export const educationData = [
    {
      id: 1,
      year: "2022-2026",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indian Institute of Information Technology, Una, Himachal Pradesh",
      cgpa: "7.98/10.0",
      image: IIITU,
      imagesize: "large"
    },
    {
      id: 2,
      year: "2021-2022",
      degree: "Senior Secondary Education - XII",
      institution: "Sant Nischal Singh Public School, Yamuna Nagar, Haryana",
      percentage: "90.6%",
      image: SNSPS,
      imagesize: "small"
    },
    {
      id: 3,
      year: "2019-2020",
      degree: "Secondary Education - X",
      institution: "Sant Nischal Singh Public School, Yamuna Nagar, Haryana",
      percentage: "95.8%",
      image: SNSPS,
      imagesize: "small"
    }
  ];


export const experiences = [
    {
      year: "May 2025 - August 2025",
      role: "Full Stack Developer Intern",
      company: "InfinitoComics",
      description: `Developed and maintained web applications using React.js, Node.js, and MongoDB. Built REST APIs, integrated DB, and collaborated with stakeholders to define project scope.`,
      technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
      img: INFINITO,
      location: "Remote",
    },
  ];

export const PROJECTS = [
  {
    title: "Solvio",
    image: project1,
    description:
      "ProConnect is a platform that allows users to post jobs, apply to jobs, and connect with opportunities.",
    points: [
      "Employers can post jobs with detailed descriptions.",
      "Job seekers can browse and apply for jobs directly.",
      "Includes authentication for secure user access.",
      "Interactive UI for smooth navigation."
    ],
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Airline Backend System",
    image: project2,
    description:
      "A Microservices backend system to manage airline operations such as booking, scheduling, and user management.",
    points: [
      "Handles flight scheduling and passenger bookings.",
      "Provides APIs for airline data management.",
      "Implements role-based authentication for admins and users.",
      "Optimized database structure for fast queries.",
      "Uses RabbitMq for easy communication between different services."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "RabbitMQ"],
  },
];


const AlgoUniversityIcon = () => (
  <img src={AlgoUniversity} alt="AlgoUniversity" className="w-full h-8" />
);


export  const achievements = [
    {
      title: "First Position in Run Code Run",
      description: "Secured First Position in Run Code Run during Meraki, an Inter-College level coding event.",
      year: "2025",
    },
    {
      title: "800+ DSA Problems",
      description: "Solved over 800+ Data Structures and Algorithms problems on platforms like LeetCode and CodeChef.",
      year: "2025",
      icon: <SiLeetcode className="text-orange-500" />,
    },
    {
      title: "2-Star on CodeChef",
      description: "Achieved 2-star rating on CodeChef with a peak rating of 1466.",
      year: "2025",
      icon: <SiCodechef className="text-brown-500" />,
      highlight: false,
    },
    {
      title: "First Position in AlgoQuiz",
      description: "Secured First Position in AlgoQuiz conducted by AlgoUniversity at the college level.",
      year: "2023",
      icon: <AlgoUniversityIcon />,
      highlight: true,
    },
    {
      title: "Top 20 in CODE-RUSH",
      description: "Ranked among the Top 20 in CODE-RUSH, hosted by AlgoUniversity.",
      year: "2024",
      icon: <AlgoUniversityIcon />,
      highlight: false,
    },
    {
      title: "Semi-Finalist in Flipkart GRiD 7.0",
      description: "Selected as a Semi-Finalist in Flipkart GRiD 7.0, a national-level hackathon.",
      year: "2025",
      icon: <SiFlipkart className="text-blue-500" />,
      highlight: true,
    },
  ];

export const CONTACT = {
  address: "Indian Institute of Information Technology, Una",
  phoneNo: "+91 9992588763 ",
  email: "anmolaggarwal0579@gmail.com",
  socials: {
    github: "https://github.com/anmol3538",
    linkedin: "https://linkedin.com/in/anmol3538",
  }
};
