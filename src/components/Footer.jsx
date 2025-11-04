// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Mail, Github, Linkedin, ExternalLink, 
  Code2, Database, Server, Zap, Terminal, Sparkles,
  ArrowRight, ArrowUp, Cpu, Lock, Layers, Cloud
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © 2025 Raja Shekar Patha. Crafted with passion and precision.
          </motion.p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: Github, link: 'https://github.com/rajashekarpatha07' },
              { icon: Linkedin, link: 'https://www.linkedin.com/in/raja-shekar-patha-4519a6340/' },
              { icon: Mail, link: 'mailto:rajashekarpatha07@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-purple-400 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/30"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;