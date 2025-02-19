"use client";

import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';

interface QuestionSectionProps {
  title: string;
  children: React.ReactNode;
}

export function QuestionSection({ title, children }: QuestionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h3 className="text-xl font-medium mb-6">{title}</h3>
      <div className="space-y-8">
        {children}
      </div>
    </motion.div>
  );
}