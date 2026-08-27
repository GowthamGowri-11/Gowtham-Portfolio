import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'Paper Buddy',
      description: 'AI-powered college fee and operations platform with a DAG-based multi-agent workflow, parallel execution, confidence gating, rollbacks, and SSE-based real-time tracking. Converts natural-language admin commands into role-scoped operations with human confirmation and RBAC.',
      tech: ['MERN Stack', 'Llama 3.3', 'JWT', 'SSE', 'PhonePe', 'Custom Functional AI'],
      category: 'Full Stack · AI',
      github: 'https://github.com/GowthamGowri-11/PB-hackathon'
    },
    {
      title: 'Data Guardian',
      description: 'Secure document-sharing platform with encrypted file exchange, OTP-based time-bound access, and real-time permission control. Includes anti-data-leakage mechanisms with session controls, access revocation, audit tracking, and download restrictions.',
      tech: ['Next.js', 'PostgreSQL', 'MongoDB', 'Redis', 'AES-256-GCM'],
      category: 'Security · Web Application',
      github: 'https://github.com/GowthamGowri-11/Data-Guardian-2'
    },
    {
      title: 'AI-Based Intrusion Detection System',
      description: 'Real-time threat detection system that identifies and prevents DDoS and MITM attacks using XGBoost and Scapy for automated traffic analysis. Features an explainable security framework with risk insights and automated response for effective threat mitigation.',
      tech: ['React', 'Python', 'MongoDB', 'XGBoost', 'Scikit-learn', 'Scapy', 'Groq'],
      category: 'AI · Cybersecurity',
      github: 'https://github.com/GowthamGowri-11/AI-IDS'
    },
    {
      title: 'Udhayam — College Fest Management Portal',
      description: 'Scalable event management system handling 5,000+ participants with registration, team management, QR-based entry verification, and payment processing. Includes role-based portals, analytics dashboards, push notifications, and real-time attendance tracking.',
      tech: ['Next.js', 'PostgreSQL', 'Google OAuth', 'Easebuzz', 'Cloudinary'],
      category: 'Full Stack Development',
      github: 'https://github.com/GowthamGowri-11/udhayam-Gowtham'
    },
    {
      title: 'Atlyx',
      description: 'SaaS-level Learning Management System (LMS) portal built as a full training platform. Supports course delivery, role-based access, and scalable operations for learners and administrators.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
      category: 'SaaS · LMS',
      github: 'https://github.com/GowthamGowri-11/lms-portal'
    },
    {
      title: 'Atlyx Compiler',
      description: 'Custom-built compiler designed and developed from scratch for the Atlyx ecosystem, enabling code compilation and execution workflows within the training platform.',
      tech: ['Compiler Design', 'TypeScript', 'Next.js'],
      category: 'Systems · Compiler',
      github: 'https://github.com/GowthamGowri-11/ATLYX-COMPILER'
    },
    {
      title: 'Direct Property',
      description: 'A comprehensive property management system designed to streamline listings, ownership tracking, and transaction management. Features efficient backend architecture for seamless data operations and automated workflow processes.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Full Stack Development',
      github: 'https://github.com/GowthamGowri-11/fsdproject.git'
    },
    {
      title: 'Student Performance Tracker',
      description: 'Machine learning application that analyzes and predicts student academic performance. Includes comprehensive data preprocessing, interactive visualizations, and predictive model training capabilities.',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
      category: 'Machine Learning',
      github: 'https://github.com/GowthamGowri-11/ml-project.git'
    },
    {
      title: 'Data Securer',
      description: 'Enterprise-grade security system for sensitive data storage and protection. Implements blockchain technology for data integrity verification and advanced encryption techniques for secure data handling.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Blockchain'],
      category: 'Security & Blockchain',
      github: 'https://github.com/GowthamGowri-11/DATA-SECURER.git'
    },
    {
      title: 'Recipe Bot',
      description: 'Intelligent recipe recommendation system with ingredient-based search functionality. Provides personalized culinary suggestions through efficient dataset processing and user-friendly interface design.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
      category: 'Web Application',
      github: 'https://github.com/GowthamGowri-11/recipe-bot.git'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and technical implementations</p>

          <div className="projects-container">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="project-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-footer">
                    <div className="project-tech-list">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
