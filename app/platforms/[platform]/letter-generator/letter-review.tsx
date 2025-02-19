"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { extractPlaceholders } from '@/lib/ai';
import { analytics } from '@/lib/analytics';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Copy, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
import { QuestionSection } from './components/question-section';

interface LetterReviewProps {
  letter: GeneratedLetter;
  onRegenerateRequest: () => void;
  onComplete: () => void;
}

export function LetterReview({
  letter,
  onRegenerateRequest,
  onComplete
}: LetterReviewProps) {
  const [showRegenerateDialog, setShowRegenerateDialog] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [placeholders, setPlaceholders] = useState<Record<string, string>>(() => {
    const extracted = [
      ...extractPlaceholders(letter.subject),
      ...extractPlaceholders(letter.body)
    ];
    return Object.fromEntries(extracted.map(p => [p, '']));
  });
  const { toast } = useToast();

  const hasUnfilledPlaceholders = Object.values(placeholders).some(value => !value.trim());

  const replacePlaceholders = (text: string) => {
    return text.replace(/\[([^\]]+)\]/g, (_, placeholder) => 
      placeholders[placeholder] || `[${placeholder}]`
    );
  };

  const handleCopy = async () => {
    if (hasUnfilledPlaceholders) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before copying the letter.",
        variant: "destructive",
      });
      return;
    }

    try {
      const fullText = `Subject: ${replacePlaceholders(letter.subject)}\n\n${replacePlaceholders(letter.body)}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      analytics.trackEvent('letter_copied', {
        has_placeholders: false,
        length: fullText.length
      });
      toast({
        title: "Copied to clipboard",
        description: "The letter has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      analytics.trackError('clipboard', 'Failed to copy to clipboard', 'LetterReview');
      toast({
        title: "Failed to copy",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  const handleComplete = () => {
    analytics.trackProcessCompletion(
      Math.floor(Date.now() / 1000),
      ['platform_selection', 'initial_questions', 'follow_up', 'letter_generation']
    );
    onComplete();
  };

  return (
    <div className="space-y-8">
      {Object.keys(placeholders).length > 0 && (
        <QuestionSection title="Required Information">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3 p-4 bg-accent-light/30 rounded-lg text-muted-foreground">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium">Required Fields</p>
                <p className="text-sm">
                  Please fill in all required fields below to complete your letter.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(placeholders).map(([placeholder, value]) => (
                <div key={placeholder} className="space-y-2">
                  <Label htmlFor={placeholder} className="text-base font-medium capitalize">
                    {placeholder}
                  </Label>
                  <Input
                    id={placeholder}
                    value={value}
                    onChange={(e) => setPlaceholders(prev => ({
                      ...prev,
                      [placeholder]: e.target.value
                    }))}
                    className="bg-white"
                  />
                </div>
              ))}
            </div>
            {!hasUnfilledPlaceholders && (
              <div className="flex justify-end">
                <Button
                  onClick={handleCopy}
                  className="pill bg-primary text-white hover:opacity-90"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Completed Letter
                </Button>
              </div>
            )}
          </motion.div>
        </QuestionSection>
      )}

      <QuestionSection title="Letter Content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Subject Line</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 select-none">
                {replacePlaceholders(letter.subject)}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Message Content</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 whitespace-pre-wrap select-none">
                {replacePlaceholders(letter.body)}
              </div>
            </div>
          </div>
        </motion.div>
      </QuestionSection>

      <QuestionSection title="Next Steps">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="space-y-3">
            {letter.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border/50">
                <span className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  {index + 1}
                </span>
                <p className="text-muted-foreground pt-0.5">{step}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </QuestionSection>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="pill"
          onClick={() => setShowRegenerateDialog(true)}
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Generate Another
        </Button>

        <div className="space-x-4">
          <Button
            variant="outline"
            className={`pill ${hasUnfilledPlaceholders ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleCopy}
            disabled={hasUnfilledPlaceholders}
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 mr-2" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? 'Copied!' : hasUnfilledPlaceholders ? 'Fill Required Fields' : 'Copy Letter'}
          </Button>

          <Button
            className="pill bg-primary text-white hover:opacity-90"
            onClick={() => setShowCompleteDialog(true)}
          >
            Finish & Exit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <AlertDialog open={showRegenerateDialog} onOpenChange={setShowRegenerateDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Generate a new letter?</AlertDialogTitle>
            <AlertDialogDescription>
              Your current letter will be discarded. This data is not saved and will be cleared
              when you leave the page. Are you sure you want to generate a new letter?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowRegenerateDialog(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setShowRegenerateDialog(false);
                onRegenerateRequest();
              }}
            >
              Generate New Letter
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showCompleteDialog} onOpenChange={setShowCompleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Finish and exit?</AlertDialogTitle>
            <AlertDialogDescription>
              For your privacy and security, all information you've provided will be cleared
              when you leave this page. Make sure you've copied your letter if you need it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowCompleteDialog(false)}>
              Go Back
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleComplete}>
              Finish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}