
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Server, Database, Cpu, Code2, Zap, 
  ArrowRight, Sparkles, Cloud, Lock, Layers,
  Github, Linkedin, Mail, ExternalLink
} from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['Scalable', 'Secure', 'High-Performance', 'Real-time'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 sm:pt-28"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating Particles */}
      <FloatingParticles mousePosition={mousePosition} />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="inline-block mb-6 sm:mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} className="text-cyan-400" />
            </motion.div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-xs sm:text-sm font-bold tracking-wider">
              BACKEND DEVELOPER
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={18} className="text-yellow-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Name with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-2 relative">
            <motion.span 
              className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Raja Shekar
            </motion.span>
          </h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Patha
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle with Word Rotation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-3 sm:mb-4"
        >
          <div className="text-xl sm:text-2xl lg:text-4xl text-gray-300 font-bold mb-2">
            Building{' '}
            <span className="inline-block min-w-[200px] sm:min-w-[280px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 20, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -20, opacity: 0, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl text-gray-300 font-bold">
            Backend Systems
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Architecting enterprise-grade APIs and real-time systems with{' '}
          <TechBadge text="TypeScript" color="from-blue-400 to-cyan-400" />{' '}
          <TechBadge text="Node.js" color="from-green-400 to-emerald-400" />{' '}
          <TechBadge text="Redis" color="from-red-400 to-pink-400" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          <MagneticButton href="#projects" primary>
            <span>View Projects</span>
            <ArrowRight size={20} />
          </MagneticButton>
          
          <MagneticButton href="#contact">
            <span>Get in Touch</span>
            <Mail size={20} />
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' }
          ].map(({ Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
            >
              <Icon size={20} className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating Tech Stack Icons */}
        <FloatingTechStack />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Tech Badge Component
const TechBadge = ({ text, color }) => (
  <motion.span
    whileHover={{ scale: 1.1, y: -2 }}
    className={`inline-block px-2 sm:px-3 py-1 rounded-lg bg-gradient-to-r ${color} bg-clip-text text-transparent font-bold cursor-pointer`}
  >
    {text}
  </motion.span>
);

// Magnetic Button Component
const MagneticButton = ({ children, href, primary }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white flex items-center gap-2 sm:gap-3 overflow-hidden transition-all text-sm sm:text-base ${
        primary 
          ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500' 
          : 'bg-slate-800/80 backdrop-blur-sm border border-slate-700/50'
      }`}
    >
      {primary && (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-opacity duration-500"
          />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2 sm:gap-3">
        {children}
      </span>
    </motion.a>
  );
};

// Floating Tech Stack Icons
const FloatingTechStack = () => {
  const icons = [
    { Icon: Terminal, delay: 0, duration: 3 },
    { Icon: Server, delay: 0.5, duration: 3.5 },
    { Icon: Database, delay: 1, duration: 4 },
    { Icon: Cpu, delay: 1.5, duration: 3.2 },
    { Icon: Cloud, delay: 2, duration: 3.8 },
    { Icon: Lock, delay: 2.5, duration: 3.3 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-2xl mx-auto"
    >
      {icons.map(({ Icon, delay, duration }, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            y: [0, -15, 0]
          }}
          transition={{ 
            scale: { delay: 1.4 + delay * 0.1, type: "spring" },
            rotate: { delay: 1.4 + delay * 0.1, type: "spring" },
            y: { 
              duration: duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay * 0.2
            }
          }}
          whileHover={{ 
            scale: 1.3, 
            rotate: 10,
            transition: { duration: 0.2 }
          }}
          className="relative group cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <div className="relative p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 group-hover:border-cyan-500/50 transition-colors">
            <Icon size={24} className="sm:w-7 sm:h-7 text-gray-500 group-hover:text-cyan-400 transition-colors" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Floating Particles
const FloatingParticles = ({ mousePosition }) => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
          }}
          animate={{
            x: mousePosition.x + (Math.random() - 0.5) * 200,
            y: mousePosition.y + (Math.random() - 0.5) * 200,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;