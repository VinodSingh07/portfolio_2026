"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./Resume/Education";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Skills />
      <Resume />
      <Project />
      <Education />
      {/* add testimonial later here */}
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

export default Home;
