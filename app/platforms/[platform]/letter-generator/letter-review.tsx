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
import { useToast } from '@/hooks/use-toast';
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
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      const fullText = `Subject: ${letter.subject}\n\n${letter.body}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The letter has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-3 p-4 bg-accent-light/30 rounded-lg text-muted-foreground">
        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-foreground font-medium">Review your takedown request letter</p>
          <p className="text-sm">
            We've generated a letter based on the information you provided. Some details may have been
            excluded or summarized for clarity and impact. You can modify the letter before sending
            or generate a new version if needed.
          </p>
        </div>
      </div>

      <QuestionSection title="Letter Content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Subject Line</h4>
              <div className="p-4 bg-neutral rounded-lg border border-border/50">
                {letter.subject}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Message Content</h4>
              <div className="p-4 bg-neutral rounded-lg border border-border/50 whitespace-pre-wrap">
                {letter.body}
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
        <div className="space-x-4">
          <Button
            variant="outline"
            className="pill"
            onClick={() => setShowRegenerateDialog(true)}
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Generate Another
          </Button>
          <Button
            variant="outline"
            className="pill"
            onClick={handleCopy}
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 mr-2" />
            ) : (
              <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? 'Copied!' : 'Copy Letter'}
          </Button>
        </div>

        <Button
          className="pill bg-primary text-white hover:opacity-90"
          onClick={() => setShowCompleteDialog(true)}
        >
          I'm Done
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
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
            <AlertDialogAction
              onClick={() => {
                setShowCompleteDialog(false);
                onComplete();
              }}
            >
              Finish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}