import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';

interface BlueBannerProps {
  children: React.ReactNode;
  delay?: number;
  centered?: boolean;
}

export function BlueBanner({ children, delay = 0, centered = false }: BlueBannerProps) {
  return (
    <motion.div
      className="blue-banner"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
      style={centered ? { textAlign: 'center' } : undefined}
    >
      <p>{children}</p>
    </motion.div>
  );
}
