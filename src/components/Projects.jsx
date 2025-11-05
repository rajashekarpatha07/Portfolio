import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, ExternalLink, Zap, Code2, Database, 
  Radio, Shield, Cloud, Sparkles, ArrowUpRight
} from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'MedSwift',
      subtitle: 'Real-Time Ambulance Dispatch System',
      description: 'Enterprise-grade emergency dispatch system with live tracking, automatic nearest-ambulance dispatch using MongoDB GeoSpatial queries, and tridirectional Socket.IO communication between users, drivers, and admins.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Redis', 'JWT'],
      highlights: [
        { icon: Database, text: '50%+ dispatch efficiency improvement', metric: '50%' },
        { icon: Zap, text: '60% reduction in database calls', metric: '60%' },
        { icon: Shield, text: 'Failover logic for high reliability', metric: '99.9%' }
      ],
      github: 'https://github.com/rajashekarpatha07/medswift',
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      icon: Radio
    },
    {
      title: 'College Hub V2',
      subtitle: 'High-Performance Academic Platform',
      description: 'Re-architected backend from JavaScript/Mongoose to modern TypeScript/Prisma stack with MySQL. Features aggressive Redis caching layer for main dashboard, reducing database load by 95% for repeat requests.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'Prisma', 'MySQL', 'Redis', 'Cloudinary'],
      highlights: [
        { icon: Zap, text: '95% database load reduction', metric: '95%' },
        { icon: Code2, text: '25+ type-safe RESTful APIs', metric: '25+' },
        { icon: Cloud, text: '90% storage reduction with Cloudinary', metric: '90%' }
      ],
      github: 'https://github.com/rajashekarpatha07/CollegeHubV2',
      live: 'https://collegehubdep.onrender.com/',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      icon: Database
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4"
          >
            <Code2 size={16} className="text-pink-400" />
            <span className="text-pink-400 text-sm font-semibold">Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Building solutions that scale and perform
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={hoveredProject === i ? { scale: 1.02 } : { scale: 1 }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden group-hover:border-slate-600/50 transition-all"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                </div>

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                          className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs sm:text-sm font-bold mb-4 shadow-lg`}
                        >
                          <Sparkles size={14} />
                          Featured Project
                        </motion.div>
                        
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 flex items-center gap-3">
                          {project.title}
                          <motion.div
                            animate={{ rotate: hoveredProject === i ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <project.icon className={`w-8 h-8 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                          </motion.div>
                        </h3>
                        
                        <p className={`text-lg sm:text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                          {project.subtitle}
                        </p>
                        
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Performance Highlights */}
                      <div className="grid sm:grid-cols-3 gap-4">
                        {project.highlights.map((highlight, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.4 + j * 0.1 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all group/card"
                          >
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-10 rounded-2xl transition-opacity`}
                            />
                            <div className="relative">
                              <div className="flex items-center gap-2 mb-2">
                                <highlight.icon className={`w-4 h-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                                <span className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                  {highlight.metric}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 leading-tight">
                                {highlight.text}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, j) => (
                            <motion.span
                              key={j}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2 + 0.5 + j * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg text-xs font-medium text-gray-300 hover:border-slate-600/80 hover:text-white transition-all cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold shadow-lg overflow-hidden`}
                          >
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`}
                              style={{ filter: 'brightness(1.2)' }}
                            />
                            <ExternalLink size={18} className="relative z-10" />
                            <span className="relative z-10">Live Demo</span>
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="relative z-10"
                            >
                              <ArrowUpRight size={18} />
                            </motion.div>
                          </motion.a>
                        )}
                        
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white font-semibold hover:border-slate-600/80 transition-all"
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Visual Side - Icon Display */}
                    <div className="lg:w-1/3">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden"
                      >
                        {/* Animated Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                        
                        {/* Animated Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ 
                              rotate: hoveredProject === i ? 360 : 0,
                              scale: hoveredProject === i ? 1.1 : 1
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            <project.icon className={`w-32 h-32 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity`} strokeWidth={1} />
                          </motion.div>
                        </div>

                        {/* Floating Elements */}
                        {[...Array(3)].map((_, j) => (
                          <motion.div
                            key={j}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                            animate={{
                              y: [0, -20, 0],
                              x: [0, 10, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 2 + j,
                              repeat: Infinity,
                              delay: j * 0.5
                            }}
                            style={{
                              left: `${20 + j * 30}%`,
                              top: `${30 + j * 20}%`
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;