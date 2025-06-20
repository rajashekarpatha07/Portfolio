// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  ],
  Frameworks: [
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Socket.IO", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
  ],
  ToolsAndOther: [
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  ],
};

const Skills = () => {
  // Animation variants for heading
  const headingVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for skill cards
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, type: "spring" },
    },
  };

  // Animation for skill items
  const itemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.1, type: "spring" },
    }),
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="skills"
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
          Skills & Tech Stack
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              custom={index}
              viewport={{ once: true }}
              className="bg-gray-900/80 p-6 rounded-xl shadow-lg hover:shadow-purple-700/30 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center tracking-wide">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
                {items.map(({ name, img }, i) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    custom={i}
                    className="flex flex-col items-center text-center text-gray-200 group"
                  >
                    <div className="relative">
                      <img
                        src={img}
                        alt={name}
                        className="h-12 w-12 object-contain mb-3 transition-transform duration-300 group-hover:brightness-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />
                    </div>
                    <span className="text-sm sm:text-base font-medium break-words">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;