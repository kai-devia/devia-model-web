import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <motion.span
        className="section-label"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
