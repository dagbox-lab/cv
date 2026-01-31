import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = "", noPadding = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={`bg-surface border border-border rounded-3xl overflow-hidden hover:border-zinc-600 transition-colors duration-300 relative group flex flex-col ${className}`}
    >
      <div className={`h-full w-full ${noPadding ? '' : 'p-6'}`}>
        {children}
      </div>
      
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-white/5 to-transparent" />
    </motion.div>
  );
};