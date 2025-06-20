// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Code, Database } from "lucide-react";

const About = () => {
  // Animation variants for text content
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Animation for feature cards
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, type: "spring" },
    },
  };

  // Animation for heading
  const headingVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-600/20 dark:to-purple-600/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 sm:mb-16"
        >
          About Me
        </motion.h2>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a <span className="text-blue-500 dark:text-blue-400 font-semibold">backend developer</span> passionate about crafting <span className="text-purple-500 dark:text-purple-400 font-semibold">scalable</span>, secure, and efficient server-side applications. Leveraging JavaScript and modern frameworks, I build robust solutions that drive business success in the digital landscape.
          </p>
          <p className="mb-8 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Drawing inspiration from <span className="text-purple-500 dark:text-purple-400 font-semibold">MS Dhoni's</span> leadership and composure, I approach development with discipline and strategic thinking. Just as he led India to victory, I deliver high-quality, reliable code to solve complex challenges with elegance and precision.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {[
              { icon: Target, title: "Disciplined", color: "text-blue-500" },
              { icon: Code, title: "Efficient", color: "text-purple-500" },
              { icon: Database, title: "Quality-Focused", color: "text-blue-500" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                custom={i}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <item.icon size={32} className={`mx-auto mb-4 ${item.color}`} />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg sm:text-xl">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;