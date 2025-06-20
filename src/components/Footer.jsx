// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  // Animation variants for footer content
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for scroll-to-top button
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2, type: "spring" },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#6B7280",
      transition: { duration: 0.3, type: "spring" },
    },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="bg-gray-950 text-white py-8 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <motion.p
          variants={contentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-300"
        >
          © 2025 Rajashekar. All rights reserved.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          whileTap="tap"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center hover:shadow-purple-600/30 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-blue-400" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;