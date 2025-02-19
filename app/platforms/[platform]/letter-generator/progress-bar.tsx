"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepNames = [
  'Content Information',
  'Reporting Details',
  'Additional Details',
  'Letter Generation',
  'Review and Send'
];

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[800px]">
      <div className="relative flex items-center justify-between">
        {/* Progress bar line */}
        <div className="absolute left-0 right-0 h-1 bg-muted/50" />
        <motion.div
          className="absolute left-0 h-1 bg-accent origin-left"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />

        {/* Step dots */}
        {stepNames.slice(0, totalSteps).map((name, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isPast = stepNumber < currentStep;
          
          return (
            <div 
              key={index}
              className="relative z-10"
              onMouseEnter={() => setHoveredStep(stepNumber)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <motion.div 
                className={`
                  w-3 h-3 rounded-full border-2 transition-all duration-200
                  ${isCurrent 
                    ? 'bg-white border-accent ring-4 ring-accent/20 scale-125' 
                    : isPast
                      ? 'bg-accent border-accent'
                      : 'bg-accent/40 border-accent/40'}
                `}
              />
              
              {/* Step label - only shown on hover */}
              {hoveredStep === stepNumber && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2"
                >
                  <div 
                    className={`
                      text-xs whitespace-nowrap px-2 py-1 rounded-md bg-white shadow-sm border
                      ${isCurrent 
                        ? 'text-foreground font-medium' 
                        : isPast
                          ? 'text-foreground'
                          : 'text-muted-foreground'}
                    `}
                  >
                    {name}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}