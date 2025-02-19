"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SelectableCardProps {
  value: string;
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectableCard({ value, label, description, selected, onClick }: SelectableCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-lg p-3.5 transition-all duration-200",
        "border",
        selected 
          ? "bg-accent-light border-accent shadow-md" 
          : "bg-white border-border/50 hover:border-accent/30 hover:bg-neutral/10"
      )}
    >
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-foreground">{label}</h4>
        {description && (
          <p className="text-sm text-muted-foreground/90 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}