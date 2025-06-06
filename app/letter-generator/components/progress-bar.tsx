'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepNames = [
  'Select the platform',
  'Previous removal attempts',
  'Initial content questions',
  'Reporting details',
  'Supporting questions',
  'Letter generation',
  'Review and send',
];

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[800px] m-auto my-4 mb-6">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 h-1 bg-muted/50" />
        <motion.div
          className="absolute left-0 h-1 bg-accent origin-left"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />

        {stepNames.slice(0, totalSteps).map((name, index) => {
          const stepNumber = index;
          const isCurrent = stepNumber === currentStep - 1;
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
                  w-3 h-3 rounded-full transition-all duration-200
                  ${
                    isCurrent
                      ? 'bg-white ring-4 ring-accent/20 scale-125'
                      : isPast
                        ? 'bg-accent'
                        : 'bg-accent/40'
                  }
                `}
              />

              {hoveredStep === stepNumber && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2"
                >
                  <div
                    className={`
                      text-xs whitespace-nowrap px-2 py-1 rounded-md bg-white shadow-xs
                      ${
                        isCurrent
                          ? 'text-foreground font-medium'
                          : isPast
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                      }
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
