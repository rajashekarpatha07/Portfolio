// src/components/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Mail, Github, Linkedin, ExternalLink, 
  Code2, Database, Server, Zap, Terminal, Sparkles,
  ArrowRight, ArrowUp, Cpu, Lock, Layers, Cloud
} from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajashekarpatha07@gmail.com',
      link: 'mailto:rajashekarpatha07@gmail.com',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/raja-shekar-patha-4519a6340/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View My Repositories',
      link: 'https://github.com/rajashekarpatha07',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Ready to build something amazing together?</p>
        </motion.div>

        <div className="grid gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-6 p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl group hover:border-purple-500/50 transition-all"
            >
              <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl`}>
                <contact.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-gray-400 text-sm mb-1">{contact.label}</div>
                <div className="text-white font-semibold text-lg">{contact.value}</div>
              </div>
              <ArrowRight size={24} className="text-gray-600 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;