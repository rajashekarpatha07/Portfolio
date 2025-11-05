import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, Github, Linkedin, ArrowRight, Sparkles, 
  Send, MapPin, Phone, ArrowUpRight
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [hoveredContact, setHoveredContact] = useState(null);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajashekarpatha07@gmail.com',
      link: 'mailto:rajashekarpatha07@gmail.com',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Drop me a message'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@rajashekarpatha07',
      link: 'https://github.com/rajashekarpatha07',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Raja Shekar Patha',
      link: 'https://www.linkedin.com/in/raja-shekar-patha-4519a6340/',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Let\'s connect'
    },
    
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Send size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Ready to build something amazing together? Let's start a conversation.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredContact(i)}
              onHoverEnd={() => setHoveredContact(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                animate={hoveredContact === i ? { scale: 1.05 } : { scale: 1 }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 sm:p-8 overflow-hidden group-hover:border-slate-600/50 transition-all"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-br ${contact.gradient} rounded-2xl shadow-lg mb-4`}
                  >
                    <contact.icon size={28} className="text-white" />
                  </motion.div>

                  {/* Label */}
                  <div className="mb-2">
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                      {contact.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <span className="text-white text-lg sm:text-xl font-bold block">
                      {contact.value}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {contact.description}
                    </span>
                    <motion.div
                      animate={{ x: hoveredContact === i ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className={`w-5 h-5 bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`} />
                    </motion.div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <motion.div
                  className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${contact.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full"
              >
                <MapPin size={32} className="text-white" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Based in Hyderabad, India
                </h3>
                <p className="text-gray-400">
                  Available for remote opportunities and collaborations worldwide
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg cursor-pointer"
              >
                <a href="#home" className="flex items-center gap-2">
                  <span>Back to Top</span>
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight size={18} className="rotate-45" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <p className="text-gray-300 text-sm sm:text-base">
              Open to exciting backend development opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;