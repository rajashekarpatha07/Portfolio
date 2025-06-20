// src/components/Contact.jsx
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <Mail className="w-6 h-6" />,
    text: "rajashekarpatha07@gmail.com",
    link: "mailto:rajashekarpatha07@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    text: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/raja-shekar-patha-4519a6340/",
  },
  {
    icon: <Github className="w-6 h-6" />,
    text: "GitHub Profile",
    link: "https://github.com/rajashekarpatha07",
  },
];

const Contact = () => {
  // Animation variants for heading
  const headingVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for contact items
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "spring" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={headingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 sm:mb-16"
        >
          Get in Touch
        </motion.h2>
        <div className="grid gap-6 md:gap-8 text-base sm:text-lg max-w-2xl mx-auto">
          {contacts.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              custom={idx}
              className="group flex justify-center items-center gap-4 bg-gray-900/50 py-4 px-6 rounded-lg border border-purple-800/50 text-gray-200 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;