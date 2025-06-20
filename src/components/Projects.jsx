// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "College Hub",
    description:
      "College Hub is the backbone of the application, managing notices, records, resources, and assignments efficiently. Built using Node.js, Express, Tailwind CSS, and MongoDB, it ensures secure data handling and smooth API operations.",
    live: "https://collegehubdep.onrender.com/",
    github: "https://github.com/rajashekarpatha07/CollegeHubDep",
    stack: ["Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "MedSwift",
    description:
      "MedSwift is a real-time ambulance tracking and emergency dispatch system that enables users to book emergency rides, track ambulances live, and allows admins to manage dispatch efficiently—all built with scalable and secure backend technologies.",
    live: null,
    github: "https://github.com/rajashekarpatha07/medswift",
    stack: ["Node.js", "Express", "React", "MongoDB", "Socket.IO", "Redis", "Google Maps API", "JWT", "MQTT"],
  },
];

const Projects = () => {
  // Animation variants for heading
  const headingVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for project cards
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, type: "spring" },
    },
  };

  // Animation for tech stack tags
  const tagVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.1, type: "spring" },
    }),
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={headingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 sm:mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              custom={index}
              viewport={{ once: true }}
              className="bg-gray-900/80 p-6 sm:p-8 rounded-xl shadow-lg border border-purple-800/50 hover:shadow-purple-600/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={24} className="text-purple-400" />
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-400">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    variants={tagVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className="text-xs sm:text-sm font-semibold bg-purple-700/20 border border-purple-600/50 px-3 py-1 rounded-full text-purple-300 hover:bg-purple-700/30 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium transition-colors duration-200"
                  >
                  <Github size={18} />
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;