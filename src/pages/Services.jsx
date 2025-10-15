import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Database, Palette, Server, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks like React, Vue.js, and Angular.',
      features: ['React/Vue.js Development', 'Responsive Design', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and databases to power your web applications.',
      features: ['REST API Development', 'Database Design', 'Authentication Systems', 'Server Deployment']
    },
    {
      icon: Database,
      title: 'Full Stack Development',
      description: 'End-to-end web application development from concept to deployment with modern technologies.',
      features: ['MERN Stack', 'Real-time Applications', 'Cloud Integration', 'DevOps & CI/CD']
    },
    {
      icon: Palette,
      title: 'Web Development',
      description: 'Comprehensive web solutions including e-commerce, CMS, and custom web applications.',
      features: ['E-commerce Solutions', 'CMS Development', 'Progressive Web Apps', 'Technical Consulting']
    },
  ];

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
            MY <span className="text-primary-500">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with 
            modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500 transition-colors duration-300">
                  <service.icon className="text-primary-500 group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to bring your project to life?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to create something amazing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;