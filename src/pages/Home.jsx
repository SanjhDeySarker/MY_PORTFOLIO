import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code, Brain, Server, Database } from 'lucide-react';

const Home = () => {
  const skills = [
    { icon: Code, name: 'Frontend', tech: 'React, JavaScript, TypeScript' },
    { icon: Server, name: 'Backend', tech: 'Node.js, Python, Flask, Express' },
    { icon: Brain, name: 'AI/ML', tech: 'TensorFlow, PyTorch, OpenCV, spaCy' },
    { icon: Database, name: 'Database', tech: 'MongoDB, MySQL, Redis' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-heading font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent">
                  Sanjh Dey Sarker
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-300 font-light"
              >
                Passionate Full Stack Developer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Fresh Computer Science graduate passionate about building innovative web solutions. 
                I specialize in modern technologies like React, Node.js, and Python, with hands-on 
                experience in AI/ML integration and full-stack development. Ready to bring fresh 
                perspectives and strong technical skills to your team.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link
                  to="/projects"
                  className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  View My Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-6 pt-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/SanjhDeySarker', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/sanjhdevsarker', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:sanjhdeysarker@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/assets/images/profile-photo.jpeg"
                  alt="Sanjh Dey Sarker"
                  className="relative w-full h-full rounded-full object-cover border-4 border-dark-700 shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              >
                🚀 Open to Work
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              >
                💻 Code Enthusiast
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="py-16 bg-dark-800/30"
      >
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical <span className="text-primary-500">Skills</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                className="bg-dark-800/50 p-6 rounded-2xl border border-dark-700 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500 transition-colors duration-300">
                    <skill.icon className="text-primary-500 group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                    <p className="text-gray-400 text-sm mt-1">{skill.tech}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="py-16 bg-dark-800/50"
      >
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Projects Completed' },
              { number: '1', label: 'AI Internship' },
              { number: '10+', label: 'Technologies' },
              { number: '1', label: 'NPM Package' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + index * 0.1 }}
                className="p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-3xl p-12 border border-primary-500/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Our Journey Together?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              As an enthusiastic fresher with strong technical skills and a passion for innovation, 
              I'm excited to contribute to meaningful projects and grow with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </Link>
              <Link
                to="/projects"
                className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;