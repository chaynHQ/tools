"use client";

import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

interface VoiceInputProps {
  isListening: boolean;
  onToggle: () => void;
  className?: string;
}

export function VoiceInput({ isListening, onToggle, className }: VoiceInputProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={className}
      onClick={onToggle}
    >
      {isListening ? (
        <MicOff className="h-5 w-5 text-primary" />
      ) : (
        <Mic className="h-5 w-5 text-muted-foreground" />
      )}
    </Button>
  );
}