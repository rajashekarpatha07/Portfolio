// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for desktop links
  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Animation for mobile menu items
  const mobileLinkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              variants={linkVariants}
              whileHover="hover"
              className="relative text-gray-700 dark:text-gray-200 text-base font-semibold uppercase tracking-wide transition-colors duration-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  variants={mobileLinkVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-200 text-lg font-semibold uppercase tracking-wide hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </motion.a>
              ))}
              {/* Dark Mode Toggle (Optional) */}
              <motion.div
                variants={mobileLinkVariants}
                initial="initial"
                animate="animate"
                custom={links.length}
                className="mt-4"
              >
                <button
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400"
                  onClick={() => {
                    document.documentElement.classList.toggle("dark");
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Toggle Theme
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;