"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgVercel } from "react-icons/cg";
import { BsBarChartFill } from "react-icons/bs";
import {
  SiClaude,
  SiFirebase,
  SiGit,
  SiGooglegemini,
  SiGooglesheets,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiTableau,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "Python",
    icon: <SiPython />,
    percentage: 90,
  },
  {
    name: "Advanced Excel",
    icon: <SiGooglesheets />,
    percentage: 90,
  },
  {
    name: "Power BI",
    icon: <BsBarChartFill />,
    percentage: 90,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    percentage: 90,
  },
  {
    name: "Mysql",
    icon: <SiMysql />,
    percentage: 90,
  },

  {
    name: "Tableau",
    icon: <SiTableau />,
    percentage: 90,
  },
  {
    name: "Claude",
    icon: <SiClaude />,
    percentage: 90,
  },
  {
    name: "Gemini",
    icon: <SiGooglegemini />,
    percentage: 90,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
    percentage: 90,
  },
  {
    name: "Git",
    icon: <SiGit />,
    percentage: 95,
  },
  {
    name: "GitHub",
    icon: <BsGithub />,
    percentage: 88,
  },
  {
    name: "Vercel",
    icon: <CgVercel />,
    percentage: 95,
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          My <span className="text-cyan-300">Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {skills.map((skill, i) => {
            return (
              <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                <div
                  data-aos="flip-right"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={i * 100}
                  className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
                >
                  <div className="text-5xl mb-4 text-gray-300">
                    {skill.icon}
                  </div>
                  <p className="text-2xl font-semibold">{skill.percentage}%</p>
                  <p className="text-purple-400 mt-1">{skill.name}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
