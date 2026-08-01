import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/constant/constant";

/* ✅ Project type */
interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  webapp?: string;
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          Featured <span className="text-cyan-300">Projects</span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of data analytics, business intelligence, and AI-powered
          projects showcasing expertise in SQL, Python, Power BI, Tableau,
          Excel, and machine learning.
        </p>

        {/* Project Grid */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
          className="grid gap-12 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white bg-gray-900 rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl relative">
            <div className="flex justify-end p-1">
              <button
                onClick={handleCloseModal}
                className=" cursor-pointer  text-white text-3xl hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={900}
                height={500}
                className="w-full object-contain rounded-xl mb-6"
              />

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs bg-purple-500 hover:bg-purple-800 text-white py-3 rounded-xl text-center font-semibold transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
