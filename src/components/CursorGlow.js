import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use a spring to make it follow smoothly
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 150); // 150 is half the width/height to center it
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(15, 76, 117, 0.15) 0%, rgba(15, 76, 117, 0) 70%)',
        pointerEvents: 'none',
        zIndex: -1,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default CursorGlow;
