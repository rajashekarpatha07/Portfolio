// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  // Animation variants for text content
  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for image
  const imageVariants = {
    initial: { opacity: 0, scale: 0.9, rotate: -5 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  // Animation for cursor dot
  const cursorVariants = {
    animate: {
      y: [0, -8, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  // Animation for buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, type: "spring" } },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center relative overflow-hidden"
    >
      {/* Background Particles Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 top-1/2 right-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 border border-purple-600/50 rounded-full bg-purple-600/10 text-purple-300 font-mono text-sm sm:text-base">
            <Code size={18} />
            <span>Backend Developer</span>
            <Sparkles size={18} className="text-yellow-300" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Rajashekar
            </span>
            <motion.span
              variants={cursorVariants}
              animate="animate"
              className="text-blue-400 ml-2 inline-block"
            >
              .
            </motion.span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-lg">
            Crafting <span className="text-purple-400">efficient</span>,{" "}
            <span className="text-blue-400">scalable</span>, and{" "}
            <span className="text-purple-400">secure</span> backend solutions that
            power modern applications. Turning complex problems into elegant code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (location.href = "#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-semibold"
            >
              Hire Me <ArrowRight size={18} />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => (location.href = "#projects")}
              className="border border-gray-400/50 text-gray-100 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300 text-sm sm:text-base font-semibold"
            >
              View My Work
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="relative flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md w-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform-gpu">
              <img
                src="https://images.unsplash.com/photo-1625838144804-300f3907c110?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Developer Setup"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;