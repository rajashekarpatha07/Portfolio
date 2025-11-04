// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Mail, Github, Linkedin, ExternalLink, 
  Code2, Database, Server, Zap, Terminal, Sparkles,
  ArrowRight, ArrowUp, Cpu, Lock, Layers, Cloud
} from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: 'MedSwift',
      subtitle: 'Real-Time Ambulance Dispatch System',
      description: 'Enterprise-grade emergency dispatch system with live tracking, automatic nearest-ambulance dispatch using MongoDB GeoSpatial queries, and tridirectional Socket.IO communication.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Redis', 'JWT'],
      highlights: [
        'Cut database calls by 60% with Redis caching',
        'Improved dispatch efficiency by 50%+',
        'Implemented failover logic for high reliability'
      ],
      github: 'https://github.com/rajashekarpatha07/medswift',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'College Hub V2',
      subtitle: 'High-Performance Academic Platform',
      description: 'Re-architected academic platform with TypeScript/Prisma stack, featuring aggressive Redis caching that reduced database load by 95% for repeat requests.',
      tech: ['TypeScript', 'Node.js', 'Prisma', 'MySQL', 'Redis', 'Cloudinary'],
      highlights: [
        '95% reduction in database load',
        '25+ type-safe RESTful APIs',
        '90% reduction in storage load'
      ],
      github: 'https://github.com/rajashekarpatha07/CollegeHubDep',
      live: 'https://collegehubdep.onrender.com/',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Building solutions that scale</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 group hover:border-purple-500/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-semibold mb-4`}>
                    Featured
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-lg mb-4">{project.subtitle}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Zap size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/30"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold hover:border-purple-500/50 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/3">
                  <div className={`h-full min-h-[300px] bg-gradient-to-br ${project.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                    <Code2 size={80} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;