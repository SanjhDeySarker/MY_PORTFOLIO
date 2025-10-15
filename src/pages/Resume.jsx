import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award, Brain, Code, Database, Server, Package } from 'lucide-react';

const Resume = () => {
  const skills = [
    { 
      category: 'Programming Languages',
      technologies: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++'],
      icon: Code
    },
    { 
      category: 'Frameworks & Libraries',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Flask', 'Django', 'FastAPI'],
      icon: Server
    },
    { 
      category: 'AI/ML Frameworks',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'pandas', 'NumPy', 'OpenCV', 'spaCy'],
      icon: Brain
    },
    { 
      category: 'Database & Tools',
      technologies: ['MongoDB', 'MySQL', 'Redis', 'Git', 'Docker', 'AWS', 'Nginx', 'RabbitMQ'],
      icon: Database
    },
  ];

  const experiences = [
    {
      title: 'AI Intern',
      company: 'Outlier AI',
      period: 'Current',
      location: 'Remote',
      description: [
        'Collect, clean, preprocess, and analyze datasets to prepare them for AI/ML models',
        'Explore recent AI techniques, frameworks, and tools, contributing to innovative solutions',
        'Assist in designing, training, and evaluating machine learning or deep learning models',
        'Summarize findings, insights, and model outcomes in reports or presentations'
      ],
      icon: Brain
    },
  ];

  const education = [
    {
      degree: 'BTech in Computer Science Engineering & Business System',
      school: 'Techno India University',
      period: 'NOV 2021 – July 2025',
      location: 'Kolkata, West Bengal',
      score: 'CGPA: 8.48/10',
      icon: Award
    },
    {
      degree: 'Class XII (PCMC)',
      school: 'Kamala Girls School',
      period: '2020-2021',
      location: 'Kolkata, West Bengal',
      score: 'Percentage: 80.6%',
      icon: Award
    },
    {
      degree: 'Class X',
      school: 'Kamala Girls School',
      period: '2019',
      location: 'Kolkata, West Bengal',
      score: 'Percentage: 88.71%',
      icon: Award
    },
  ];

  const projects = [
    {
      name: 'PyEJS - Python Template Engine',
      description: 'Lightweight EJS-style template engine for Python. Published on PyPI with support for variable interpolation and logic blocks.',
      technologies: ['Python', 'FastAPI', 'PyPI', 'Template Engine'],
      icon: Package,
      link: 'https://pypi.org/project/pyejs/'
    },
    {
      name: 'Orchestrator-AI',
      description: 'AI-powered collaborative platform with real-time chat and GPT-4o integration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI'],
      icon: Brain,
      link: '#'
    },
    {
      name: 'LinkedIn Video Downloader',
      description: 'Web tool for downloading LinkedIn videos with responsive design.',
      technologies: ['Python', 'Flask', 'yt-dlp', 'JavaScript'],
      icon: Download,
      link: '#'
    }
  ];

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Sanjh_Dey_Sarker_Resume.pdf';
    link.download = 'Sanjh_Dey_Sarker_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            My <span className="text-primary-500">Resume</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate Computer Science student with strong foundation in full-stack development and AI/ML technologies. 
            Seeking opportunities to apply my skills and grow professionally.
          </p>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300"
          >
            <Download size={20} />
            Download My Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <skill.icon className="text-primary-500" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-primary-500/20 text-primary-500 rounded-lg text-sm border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Architecture & Patterns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-500">Architecture & Design Patterns</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
                  Microservices Architecture
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30">
                  Serverless Architecture
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30">
                  RESTful APIs
                </span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg border border-yellow-500/30">
                  WebSocket
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience & Education */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-500/20 rounded-xl">
                        <exp.icon className="text-primary-500" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-primary-500 font-medium mb-3">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary-500 mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-500/20 rounded-xl">
                        <edu.icon className="text-primary-500" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-primary-500 font-medium mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>
                        <p className="text-gray-300 font-semibold bg-primary-500/10 inline-block px-3 py-1 rounded-lg">
                          {edu.score}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <project.icon className="text-primary-500" size={20} />
                  </div>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary-500 hover:text-primary-400 text-sm font-medium transition-colors"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              As a motivated Computer Science student with hands-on experience in AI and full-stack development, 
              I'm eager to contribute to innovative projects and continue learning from experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownload}
                className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;