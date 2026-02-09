// Project Section Logo's
import videoConfApp from "../public/images/Project_images/p1.png";
import AiYoutubeThumb from "../public/images/Project_images/p2.png";
import AiInterview from "../public/images/Project_images/p3.png";

// Experience Section Logo's

import dxcLogo from "../public/images/company_logo/Dxc.png";
import codingNinjaLogo from "../public/images/company_logo/codingNinjas.png";
import neighbourlyLogo from "../public/images/company_logo/Neighbourly.png";

// Education Section Logo's
import lpuLogo from '../public/images/education_logo/Lpu.jpeg';
import codingNinjasLogo from '../public/images/education_logo/codingNinjas.png';
import amuLogo from '../public/images/education_logo/amu.jpeg';
import apsLogo from '../public/images/education_logo/APS.jpeg';




export const NavLinks = [
  { id: "about", label: "About", url: "#about" },
  { id: "skills", label: "Skills", url: "#skills" },
  { id: "experience", label: "Experience", url: "#experience" },
  { id: "work", label: "Work", url: "#work" },
  { id: "education", label: "Education", url: "#education" },
  { id: "contact", label: "Contact", url: "#contact" },
];


 export const experiences = [
    {
      id: 0,
      img: dxcLogo,
      role: "Software Analyst",
      company: "DXC Technology",
      date: "Sept 2022 - Sept 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: codingNinjaLogo,
      role: "Fullstack Engineer",
      company: "Coding Ninjas",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: neighbourlyLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Lovely Professional University",
      date: "Nov 2025 - Present",
      grade: "N/A",
      desc: "I'm doing my Master's degree (MCA) in Computer Applications from LPU, Jalandhar. During my time at LPU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
     {
      id: 1,
      img: codingNinjaLogo,
      school: "Coding Ninjas",
      date: "March 2023 - March 2025",
      grade: "87.5%",
      desc: "I completed Coding Ninja's 9 months full-stack development with Gen AI bootcamp. Where i learned frontend and backend technologies specifically MERN stack and DSA in java, CS concepts and System Desing",
      degree: "Full-Stack Development Bootcamp",
    },
    {
      id: 2,
      img: amuLogo,
      school: "Aligarh Muslim University, Aligarh",
      date: "July 2018 - Aug 2021",
      grade: "63.2%",
      desc: "I completed my Bachelor's degree in Commerce (B.COM(Honrs.)) from AMU, Aligarh. ",
      degree: "Bachelor of Commerce - BCOM(Honours)",
    },
    {
      id: 3,
      img: apsLogo,
      school: "Army Public School Almora, Uttrakhand",
      date: "Apr 2017 - March 2018",
      grade: "67%",
      desc: "I completed my class 12 education from Army Public School, Almora, under the CBSE board, where I studied Accountancy, Business Studies, Economics and Information Practices.",
      degree: "CBSE(XII) - Commerce",
    },
  ];
  


 export const projects = [
    {
      id: 0,
      title: "Full-Stack Video Conferencing Application",
      description:
        " Developed a Zoom-like (Let’s Talk) platform with real-time video/audio, screen sharing, recording, and participant management for 1000+ users. Integrated with functionalities such as scheduling interviews and providing interview results and analytics",
      image: videoConfApp,
      tags: [ "React JS",  "Next.js", "TypeScript", "TailwindCSS", "Clerk Authentication",
            "Stream API"],
      github: "https://github.com/VinodSingh07/LetsTalk",
      webapp: "https://lets-talk-opal.vercel.app/",
    },
    {
      id: 1,
      title: "AI YouTube Thumbnail Generator",
      description:
        "Developed a full-stack AI-powered thumbnail generator using MongoDB, Express.js, React.js, and Node.js. Integrated Google Gemini API to generate YouTube thumbnails based on title, prompt, style, colors, and aspect ratio",
      image: AiYoutubeThumb,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Google Gemini API", "Cloudinary", "Vercel" ],
      github: "https://github.com/VinodSingh07/AI_Youtube_Thumbnail_Generator",
      webapp: "https://thumbnailgo.com/",
    },
    
    {
      id: 2,
      title: "AI Mock Interview Preparation Platform",
      description:
        "Built an AI-driven interview preparation platform that simulates real interview scenarios using Google Gen AI",
      image: AiInterview,
      tags: ["React JS", "Next.js", "VAPI", "Google Gen Ai"],  
      github: "https://github.com/VinodSingh07/AI-Mock-Interview-Prep",
      webapp: "https://ai-mock-interview-prep-cuci.vercel.app/",
    },
    {
      id: 3,
       title: "AI Mock Interview Preparation Platform",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: AiInterview,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/VinodSingh07/AI-Mock-Interview-Prep",
      webapp: "https://ai-mock-interview-prep-cuci.vercel.app/",
    },
  
  ];  