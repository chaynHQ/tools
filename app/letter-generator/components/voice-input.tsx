"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import { useEffect, useState } from 'react';

interface VoiceInputProps {
  isListening: boolean;
  onToggle: () => void;
  className?: string;
}

export function VoiceInput({ isListening, onToggle, className }: VoiceInputProps) {
  const [ripple, setRipple] = useState(false);

  // Create pulsing effect when recording
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setRipple(prev => !prev);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isListening]);

  return (
    <div className={cn("relative flex items-center", className)}>
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: ripple ? 1.2 : 1,
                opacity: ripple ? 0 : 0.15,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-500/20 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "relative h-10 w-10 rounded-full transition-all duration-200",
          isListening 
            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md" 
            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
        )}
        onClick={onToggle}
      >
        <AnimatePresence mode="wait">
          {isListening ? (
            <motion.div
              key="recording"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <MicOff className="h-5 w-5" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Mic className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}