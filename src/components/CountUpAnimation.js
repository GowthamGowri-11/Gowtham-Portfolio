import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CountUpAnimation = ({ value, duration = 2.5, inView = true }) => {
  const hasAnimated = React.useRef(false);
  const count = useMotionValue(0);

  // Parse the value to find prefix, number, and suffix
  // e.g., "Top 15", "Div 3", "1000+", "8.92"
  const match = value.toString().match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
  
  const prefix = match ? match[1] : '';
  const endValue = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const isFloat = match && match[2].includes('.');
  const decimals = isFloat ? match[2].split('.')[1].length : 0;

  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (inView && !hasAnimated.current && match) {
      hasAnimated.current = true;
      const animation = animate(count, endValue, {
        duration: duration,
        ease: 'easeOut',
      });
      return animation.stop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, endValue, duration, inView, value]);

  if (!match) {
    return <span>{value}</span>;
  }

  return (
    <motion.span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default CountUpAnimation;
