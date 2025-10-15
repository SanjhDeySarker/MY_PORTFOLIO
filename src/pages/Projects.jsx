import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Brain, Download, Package, Stethoscope, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Orchestrator-AI',
      description: 'AI-powered collaborative platform with real-time chat, research assistance, and content creation features. Integrated GPT-4o model and live web search capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'WebSocket', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://github.com/SanjhDeySarker/orchestrator-ai.git',
      githubUrl: 'https://github.com/SanjhDeySarker/orchestrator-ai.git',
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: 'PyEJS - Python Template Engine',
      description: 'Lightweight EJS-style template engine for rendering dynamic HTML in Python. Supports variable interpolation and logic blocks with efficient buffer-based rendering.',
      image: 'https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      technologies: ['Python', 'FastAPI', 'PyPI', 'Template Engine', 'StringIO'],
      category: 'tools',
      liveUrl: 'https://pypi.org/project/pyejs/',
      githubUrl: 'https://github.com/SanjhDeySarker/pyejs.git',
      featured: true,
      icon: Code
    },
    {
      id: 3,
      title: 'LinkedIn Video Downloader',
      description: 'Web-based tool for downloading LinkedIn videos by pasting post URLs. Features responsive design and efficient video extraction backend.',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlua2VkaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      technologies: ['Python', 'Flask', 'yt-dlp', 'JavaScript', 'HTML5', 'CSS3'],
      category: 'fullstack',
      liveUrl: 'https://linkedin.apexdata.site/',
      githubUrl: 'https://github.com/SanjhDeySarker/linkedin-video-downloader.git',
      featured: false,
      icon: Download
    },
    {
      id: 4,
      title: 'DebForge - .deb Package Generator',
      description: 'C++ CLI tool for converting binaries into Debian packages. Features automatic architecture detection and CI/CD compatibility.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['C++', 'CMake', 'Linux', 'Bash', 'CI/CD'],
      category: 'tools',
      liveUrl: 'https://github.com/SanjhDeySarker/debforge.git',
      githubUrl: 'https://github.com/SanjhDeySarker/debforge.git',
      featured: false,
      icon: Package
    },
    {
      id: 5,
      title: 'Sanjh Currency Converter',
      description: 'Open-source NPM package for seamless currency conversion with real-time exchange rates. Lightweight and easy to integrate.',
      image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['JavaScript', 'Node.js', 'NPM', 'API Integration'],
      category: 'tools',
      liveUrl: 'https://www.npmjs.com/package/sanjh-currency-converter',
      githubUrl: 'https://github.com/SanjhDeySarker/sanjh-currency-converter.git',
      featured: false,
      icon: Package
    },
    {
      id: 6,
      title: 'AI Medical Assistant Chatbot',
      description: 'Intelligent chatbot predicting diseases from symptoms using machine learning. Features NLP processing and health tracking.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      technologies: ['Python', 'Flask', 'scikit-learn', 'spaCy', 'MySQL'],
      category: 'ai-ml',
      liveUrl: 'https://github.com/SanjhDeySarker/Medical_Recommendation_system.git',
      githubUrl: 'https://github.com/SanjhDeySarker/Medical_Recommendation_system.git',
      featured: true,
      icon: Stethoscope
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai-ml', label: 'AI/ML' },
    { key: 'tools', label: 'Tools & Packages' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            My <span className="text-primary-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my projects that showcase my passion for building innovative solutions 
            using modern technologies. As a fresher, I focus on creating practical applications that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-dark-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg backdrop-blur-sm">
                      <project.icon className="text-primary-500" size={20} />
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark-900 p-2 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark-900 p-2 rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                      aria-label="Source Code"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      {project.title.includes('PyEJS') ? 'View on PyPI' : 
                       project.title.includes('Currency') ? 'View on NPM' : 
                       project.title.includes('LinkedIn') ? 'Live Demo' : 'View Project'}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 hover:border-primary-500 text-gray-400 hover:text-primary-500 py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold mb-4">Interested in my work?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              As a passionate fresher developer, I'm always looking for new challenges and opportunities to learn and grow. 
              Let's discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/Sanjh_Dey_Sarker_Resume.pdf"
                download
                className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;