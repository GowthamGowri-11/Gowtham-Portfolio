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
      title: 'Data Guarding',
      description: 'Modern agricultural data management platform that digitizes manual record-keeping processes. Enhances data integrity, automates workflows, and improves operational efficiency for agricultural stakeholders.',
      tech: ['Next.js', 'React', 'TypeScript'],
      category: 'Web Application',
      github: 'https://github.com/GowthamGowri-11'
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
                <div className="project-number">0{index + 1}</div>
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
