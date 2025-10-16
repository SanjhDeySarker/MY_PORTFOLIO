import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Calendar, MapPin, Award, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Code, 
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      level: 85
    },
    { 
      name: 'Backend Development', 
      icon: Server, 
      technologies: ['Node.js', 'Python', 'Flask', 'Express.js', 'REST APIs', 'WebSocket'],
      level: 80
    },
    { 
      name: 'AI/ML & Data Science', 
      icon: Palette, 
      technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV', 'spaCy', 'pandas'],
      level: 75
    },
    { 
      name: 'Database & Tools', 
      icon: Database, 
      technologies: ['MongoDB', 'MySQL', 'Redis', 'Docker', 'Git', 'AWS', 'CI/CD'],
      level: 70
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

  const experience = [
    {
      role: 'AI Intern',
      company: 'Outlier AI',
      period: 'Current',
      location: 'Remote',
      description: 'Working on dataset preparation, AI model evaluation, and exploring cutting-edge AI frameworks and tools.',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="text-primary-500">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate Computer Science student and aspiring Full Stack Developer 
            with a strong interest in AI/ML technologies and innovative web solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/images/about-image.jpeg"
              alt="Sanjh Dey Sarker"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello! I'm Sanjh Dey Sarker</h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Computer Science student currently pursuing my BTech at 
              Techno India University, expected to graduate in 2025. With a strong 
              foundation in both theoretical concepts and practical applications, I've 
              developed a keen interest in full-stack development and artificial intelligence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in technology began with curiosity about how software works, 
              which evolved into building practical applications. I recently completed 
              an AI internship at Outlier AI, where I gained hands-on experience with 
              dataset preparation and machine learning model evaluation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              What excites me most is the intersection of web development and AI. I enjoy 
              creating applications that not only look great but also incorporate intelligent 
              features to solve real-world problems.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-primary-500/20 rounded-lg">
                  <MapPin size={18} className="text-primary-500" />
                </div>
                <span>Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-primary-500/20 rounded-lg">
                  <Calendar size={18} className="text-primary-500" />
                </div>
                <span>Available for Internships</span>
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-6"
            >
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Download size={18} />
                View Full Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <skill.icon className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                        className="bg-primary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-xl">
                      <edu.icon className="text-primary-500" size={20} />
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
                      <p className="text-gray-300 font-semibold">{edu.score}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-dark-800 p-6 rounded-2xl shadow-lg border border-dark-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-xl">
                      <exp.icon className="text-primary-500" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-primary-500 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;