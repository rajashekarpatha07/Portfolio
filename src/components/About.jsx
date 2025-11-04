import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Database, Zap, Shield, Sparkles, 
  Terminal, Server, Cloud, Lock
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const highlights = [
    { 
      icon: Database, 
      label: 'GeoSpatial Queries',
      description: '50% efficiency boost',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      icon: Zap, 
      label: 'Redis Caching',
      description: '60% fewer DB calls',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      icon: Cloud, 
      label: 'Media Optimization',
      description: '90% storage reduction',
      color: 'from-green-400 to-emerald-500'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Summary
            </span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Description */}
            <motion.div
              className="relative p-6 sm:p-8 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl shadow-cyan-500/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 className="w-6 h-6 text-cyan-400/30" />
                </motion.div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                Results-oriented{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                  Backend Developer
                </span>{' '}
                specializing in the Node.js ecosystem. Proven ability to build scalable, high-performance APIs and real-time systems.
              </p>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Strong focus on clean code architecture, security, and performance optimization using tools like{' '}
                <span className="text-purple-400 font-semibold">Redis</span> and{' '}
                <span className="text-pink-400 font-semibold">WebSockets</span>.
              </p>
            </motion.div>

            {/* Tech Stack Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Terminal, text: 'Node.js & Express.js', color: 'text-green-400' },
                { icon: Database, text: 'MongoDB & Redis', color: 'text-cyan-400' },
                { icon: Server, text: 'REST APIs & Socket.IO', color: 'text-purple-400' },
                { icon: Shield, text: 'JWT & RBAC', color: 'text-pink-400' }
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Performance Highlights Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  Performance Highlights
                </h3>

                <div className="space-y-4">
                  {highlights.map((highlight, i) => (
                    <motion.div
                      key={highlight.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="group relative p-5 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`p-3 bg-gradient-to-br ${highlight.color} rounded-xl`}
                          whileHover={{ rotate: 5 }}
                        >
                          <highlight.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">
                            {highlight.label}
                          </h4>
                          <p className={`text-sm font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-semibold">Security & Architecture</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineered secure, multi-tenant backends with role-based access control (JWT) and implemented failover logic for high reliability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;