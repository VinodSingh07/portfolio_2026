import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Building Data-Driven Solutions with Analytics, Visualization & AI
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="Data Analysis"
            description="Cleaning, transforming, and analyzing structured data using SQL, Python, Pandas, and Excel to uncover trends, solve business problems, and support data-driven decisions."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Dashboard & Visualization"
            description="Designing interactive dashboards in Power BI and Tableau that transform complex datasets into clear, meaningful visual stories for stakeholders."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="AI-Powered Analytics"
            description="Leveraging Generative AI, LLMs, Claude, ChatGPT, and AI-assisted workflows to accelerate analysis, automate reporting, generate insights, and improve productivity."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s4.png"
            name="Data Engineering & SQL"
            description="Writing optimized SQL queries, building PostgreSQL/MySQL databases, performing ETL, and preparing reliable datasets for analysis and business reporting."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
