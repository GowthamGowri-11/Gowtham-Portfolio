import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUpAnimation from './CountUpAnimation';
import './Accomplishments.css';

const Accomplishments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      title: '5th Place in India',
      description: 'PaperBuddy Hackathon among 240+ projects',
      metric: '5th'
    },
    {
      title: 'Patent Approved',
      description: 'Data Guardian 2.0 — Vidhya Incubation Center',
      metric: 'Patent'
    },
    {
      title: 'Top 10 Rank',
      description: '24-Hour Coding Hackathon at college',
      metric: 'Top 10'
    },
    {
      title: 'Coding Competition Prize',
      description: 'Ramakrishna College Coding Competition',
      metric: 'Prize'
    },
    {
      title: '1779 Max Rating',
      description: 'LeetCode — Top 9.5% globally · 750+ solved',
      metric: '1779'
    },
    {
      title: '2 Star · 1471 Rating',
      description: 'CodeChef — 720+ problems solved',
      metric: '2★'
    },
    {
      title: '1400+ Problems Solved',
      description: 'Global platform performance across DSA sites',
      metric: '1400+'
    },
    {
      title: '120+ Contests Attended',
      description: 'Competitive programming contests in DSA',
      metric: '120+'
    }
  ];

  const certifications = [
    { name: 'Artificial Intelligence Essentials', issuer: 'Coursera · 2025' },
    { name: 'Python Essential', issuer: 'Cisco · 2025' },
    { name: 'C Programming Language', issuer: 'NPTEL · 2025' },
    { name: 'Java Programming Language (Elite + Gold)', issuer: 'NPTEL · 2026' },
    { name: 'DBMS', issuer: 'NPTEL · 2026' }
  ];

  return (
    <section className="accomplishments" id="accomplishments">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Accomplishments</h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="achievement-metric">
                  <CountUpAnimation value={achievement.metric} inView={inView} />
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="certifications-header">
              <h3>Certifications</h3>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;
