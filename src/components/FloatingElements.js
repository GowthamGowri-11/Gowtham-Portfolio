import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  const circles = [
    { size: 350, duration: 22, delay: 0, x: '8%', y: '18%' },
    { size: 280, duration: 20, delay: 2, x: '78%', y: '58%' },
    { size: 250, duration: 18, delay: 4, x: '68%', y: '8%' },
    { size: 300, duration: 21, delay: 1, x: '18%', y: '68%' },
    { size: 260, duration: 19, delay: 3, x: '48%', y: '38%' }
  ];

  const lines = [
    { width: '2px', height: '220px', x: '15%', duration: 14, delay: 0 },
    { width: '2px', height: '180px', x: '42%', duration: 16, delay: 2 },
    { width: '2px', height: '200px', x: '68%', duration: 18, delay: 4 },
    { width: '2px', height: '160px', x: '82%', duration: 15, delay: 1 }
  ];

  return (
    <div className="floating-background">
      {/* Floating circles */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="floating-circle"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 25, 0],
            scale: [1, 1.12, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay
          }}
        />
      ))}
      
      {/* Floating vertical lines */}
      {lines.map((line, index) => (
        <motion.div
          key={`line-${index}`}
          className="floating-line"
          style={{
            width: line.width,
            height: line.height,
            left: line.x,
            top: '100vh'
          }}
          animate={{
            y: [0, -1200],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "linear",
            delay: line.delay
          }}
        />
      ))}
      
      {/* Floating dots */}
      {[...Array(18)].map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          className="floating-dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -55, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 9 + Math.random() * 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
      
      {/* Additional floating shapes */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className="floating-shape"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 22 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
