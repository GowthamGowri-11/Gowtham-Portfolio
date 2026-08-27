import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUpAnimation from './CountUpAnimation';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { value: '1400+', label: 'Problems Solved' },
    { value: '120+', label: 'Contests Attended' },
    { value: '8.99', label: 'Current CGPA' },
    { value: '10+', label: 'Projects Completed' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-wrapper">
            <div className="about-main">
              <div className="about-intro">
                <h3>AI & Data Science Engineer</h3>
                <p className="lead">
                  I'm a Third Year B.Tech student in Artificial Intelligence and Data Science 
                  from KIT - Kalaignarkarunanidhi Institute of Technology, Coimbatore.
                </p>
                
                <p>
                  With proficiency in data structures, C, C++, and Python, I specialize in 
                  full-stack development, AI systems, and competitive programming. My expertise spans 
                  across cloud engineering, machine learning, and secure application design.
                </p>

                <p>
                  I'm passionate about creating efficient solutions and continuously learning 
                  new technologies. My experience includes AWS internship work and freelance 
                  full-stack development on production client projects.
                </p>

                <div className="stats-container">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="stat-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <h3><CountUpAnimation value={stat.value} inView={inView} /></h3>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="education-section">
              <div className="education-header">
                <h3>Education</h3>
              </div>
              <div className="education-content">
                <h4>B.Tech – Artificial Intelligence and Data Science</h4>
                <p className="institution">KIT - Kalaignarkarunanidhi Institute of Technology</p>
                <p className="location">Coimbatore, Tamil Nadu, India</p>
                <div className="education-details">
                  <span className="detail-item">
                    <strong>CGPA:</strong> 8.99/10.0
                  </span>
                  <span className="detail-item">
                    <strong>Year:</strong> Third Year · 2024 – 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
