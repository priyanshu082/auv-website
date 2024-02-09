'use client'
// components/BlinkingCursor.jsx
import { motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      animate={{ opacity: 0 }}
      transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
      className="text-[9vw] gradient-text font-poppins"
    >
      .
    </motion.span>
  );
};

export default BlinkingCursor;