import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function Card({ icon, title, description, delay = 0 }: CardProps) {
  return (
    <motion.div
      className="card"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
