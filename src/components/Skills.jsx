import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Server, Database, Cloud, Lock, Terminal, Code2,
  Sparkles, Zap, Shield, Layers
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets (Socket.io)', 'JWT'],
      gradient: 'from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400',
      bgGradient: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      title: 'Databases & Caching',
      icon: Database,
      skills: ['MongoDB', 'Mongoose', 'MySQL', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'Python'],
      gradient: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      title: 'Developer Tools',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'Postman', 'Swagger', 'Linux', 'VS Code'],
      gradient: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-400',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <Zap size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold">Tech Stack</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Modern tools for building scalable, high-performance solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredCategory(i)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                animate={hoveredCategory === i ? { scale: 1.05 } : { scale: 1 }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 sm:p-8 overflow-hidden group-hover:border-slate-600/50 transition-all"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg`}
                    >
                      <category.icon size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill, j) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="relative group/skill"
                      >
                        <motion.div
                          className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-xl opacity-0 group-hover/skill:opacity-50 blur transition-opacity`}
                        />
                        <span className="relative block px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl text-sm text-gray-300 font-medium group-hover/skill:border-slate-600/80 group-hover/skill:text-white transition-all cursor-pointer">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner Decoration */}
                <motion.div
                  className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <p className="text-gray-300 text-sm sm:text-base">
              Continuously learning and adapting to new technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;