import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_rkyxeqr', // Replace with your EmailJS service ID
        'template_awz1zqw', // Replace with your EmailJS template ID
        form.current,
        'rMGAut1PTwr5mJFPA' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            I'm always open to discussing new opportunities, creative projects, 
            or potential collaborations. Feel free to reach out—I'd love to hear from you!
          </p>
          
          {/* Get In Touch Button */}
          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/30"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto" id="contact-form">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                >
                  ❌ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-500/25"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    text: 'sanjhdevsarker@gmail.com', 
                    href: 'mailto:sanjhdevsarker@gmail.com',
                    description: 'Send me an email anytime'
                  },
                  { 
                    icon: Phone, 
                    text: '+91 6291539167', 
                    href: 'tel:+916291539167',
                    description: 'Call or WhatsApp me'
                  },
                  { 
                    icon: MapPin, 
                    text: 'Kolkata, West Bengal', 
                    href: '#',
                    description: 'Based in Kolkata, India'
                  },
                ].map((item, index) => (
                  <motion.a
                    key={item.text}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 text-gray-400 hover:text-primary-500 transition-all duration-300 group p-4 rounded-lg hover:bg-dark-700/50 border border-transparent hover:border-dark-600"
                  >
                    <div className="p-3 bg-dark-900 rounded-lg group-hover:bg-primary-500/20 transition-colors flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block font-medium text-white truncate">{item.text}</span>
                      <span className="text-sm text-gray-500">{item.description}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
              <h4 className="text-xl font-semibold text-white mb-6">Connect with me</h4>
              <div className="flex gap-4 justify-center sm:justify-start">
                {[
                  { 
                    icon: Github, 
                    href: 'https://github.com/SanjhDeySarker', 
                    label: 'GitHub',
                    color: 'hover:bg-gray-800 hover:text-white'
                  },
                  { 
                    icon: Linkedin, 
                    href: 'https://linkedin.com/in/sanjhdevsarker', 
                    label: 'LinkedIn',
                    color: 'hover:bg-blue-600 hover:text-white'
                  },
                  { 
                    icon: Mail, 
                    href: 'mailto:sanjhdevsarker@gmail.com', 
                    label: 'Email',
                    color: 'hover:bg-red-600 hover:text-white'
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`p-4 bg-dark-900 rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 border border-dark-600 hover:border-transparent shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-6 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-primary-400 font-medium">
                  💫 <strong>Quick Response:</strong> I typically reply within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 pt-8 border-t border-dark-700"
        >
          <p className="text-gray-500">
            Let's create something amazing together! 💻✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;