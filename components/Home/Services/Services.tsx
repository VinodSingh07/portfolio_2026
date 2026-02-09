import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Working across Web Development, <br /> AI Agents, System Design, <br />
        and scalable software solutions.
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="System Design"
            description="Designing scalable, reliable, and high-performance systems by defining architecture, data flow, and infrastructure that can grow with real-world demands."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Building responsive, user-focused web and mobile applications using modern frameworks, optimized for performance, accessibility, and real-world usage."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="AI Agents"
            description="Creating intelligent AI agents that automate tasks, analyze data, and interact naturally using modern LLMs, APIs, and workflow orchestration."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Developing clean, maintainable, and production-ready software with a strong focus on performance, security, and best engineering practices."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
