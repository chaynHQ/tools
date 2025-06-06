'use client';

import { analytics } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleFeedbackClick = () => {
    analytics.trackFeedbackSubmission('typeform');
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-accent-light/40 border border-accent/30 rounded-lg p-4 mb-6 relative shadow-xs"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 p-1 rounded-full hover:bg-accent/20 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4 text-foreground/70" />
      </button>

      <div className="flex items-start gap-3">
        <div className="bg-accent/20 p-1.5 rounded-full shrink-0">
          <AlertCircle className="h-5 w-5 text-accent" />
        </div>
        <div className="text-sm">
          <p className="text-foreground font-medium mb-1">This tool is still in development</p>
          <p className="text-muted-foreground">
            It's safe to use, but if you encounter anything confusing or that doesn't work as
            expected, please{' '}
            <Link
              href={process.env.NEXT_PUBLIC_TYPEFORM_FEEDBACK_URL || '#'}
              target="_blank"
              onClick={handleFeedbackClick}
              className="text-muted-foreground underline underline-offset-2 font-medium"
            >
              share your thoughts with us
            </Link>
            . We're continuously improving based on your experiences.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
