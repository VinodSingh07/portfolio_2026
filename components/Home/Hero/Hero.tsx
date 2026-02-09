"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowDown } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <div
      id="about"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <Tilt>
          <div
            className="w-[200px] h-[200px] rounded-full overflow-hidden border-8 border-[#0c0c48aa]"
            data-aos="fade-up"
          >
            <Image
              src="/images/profile.png"
              alt="heroimage"
              width={200}
              height={200}
              className="w-full h-full object-cover object-[50%_25%]"
              priority
            />
          </div>
        </Tilt>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Clean <span className="text-cyan-200 ">Code. </span>
          Real <span className="text-cyan-200 ">products. </span>
          Great <span className="text-cyan-200 ">experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I'm Vinod - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className=" w-[40%] text-center font-bold tracking-wide text-base sm:text-lg md:text-lg text-gray-200 mb-10 mt-8 leading-relaxed"
        >
          I am a full-stack developer with over 2+ years of experience in
          building scalable web applications. Skilled in both front-end and
          back-end development, I specialize in the MERN/PERN stack and other
          modern technologies to create seamless user experiences and efficient
          solutions.
        </p>
        <button
          onClick={() => {
            const workSection = document.getElementById("work");
            workSection?.scrollIntoView({ behavior: "smooth" });
          }}
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          <span>See my work</span>
          <BsArrowDown className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
