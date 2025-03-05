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
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { platforms } from '@/lib/platforms';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Copy, MessageSquare, RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { QuestionSection } from './question-section';

interface LetterReviewProps {
  letter: GeneratedLetter;
  platformId: string;
  onRegenerateRequest: () => void;
  onComplete: () => void;
}

export function LetterReview({
  letter,
  platformId,
  onRegenerateRequest,
  onComplete
}: LetterReviewProps) {
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { resetForm } = useFormContext();

  // Get platform email from platforms data
  const platform = platforms.find(p => p.id === platformId);
  const platformEmail = platform?.contactEmail || 'Please check the platform\'s help centre for the appropriate contact email';

  const handleCopy = async () => {
    try {
      const fullText = `Subject: ${letter.subject}\n\n${letter.body}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      analytics.trackEvent('letter_copied', {
        has_placeholders: false,
        length: fullText.length
      });
      toast({
        title: "Copied to clipboard",
        description: "Your letter has been copied and is ready to paste into an email.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      analytics.trackError('clipboard', 'Failed to copy to clipboard', 'LetterReview');
      toast({
        title: "Unable to copy",
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
    resetForm();
    onComplete();
  };

  return (
    <div className="space-y-8">
      <QuestionSection title="Your Personalised Letter">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            className="pill"
            onClick={onRegenerateRequest}
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Regenerate Letter
          </Button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3 p-4 bg-accent-light rounded-lg text-muted-foreground mb-4">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">Before sending</p>
              <p className="text-sm">
                Remember to add your full name and contact information at the end of the letter. 
                For your privacy and security, we don't collect or store these personal details.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Send email to</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50">
                {platformEmail}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Subject Line</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 select-none">
                {letter.subject}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Message Content</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 whitespace-pre-wrap select-none">
                {letter.body}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-accent-light rounded-lg">
            <div className="text-sm">
              Copy your letter, then paste it into an email. Don't forget to add your name at the end and the subject line.
            </div>
            <Button
              className="pill whitespace-nowrap bg-primary text-white hover:opacity-90"
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
                <p className="text-muted-foreground pt-0.5">
                  {step}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
        
      <div className="flex justify-end items-center">
        <Button
          className="pill bg-primary text-white hover:opacity-90"
          onClick={() => setShowCompleteDialog(true)}
        >
          Finish & Exit
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      </QuestionSection>

      <QuestionSection title="Additional Support">
      <p className="text-muted-foreground">
            We understand that image-based abuse can have a profound impact on your wellbeing and sense of self. Chayn offers a free, online video course about image-based abuse on our healing platform Bloom. It explores the emotional impacts and provides guidance on rebuilding after this type of abuse.
          </p>
      </QuestionSection>

      <div className="bg-white rounded-xl p-4 flex items-start gap-3">
        <MessageSquare className="w-5 h-5 mt-0.5 text-accent-foreground flex-shrink-0" />
        <div>
          <p className="text-sm font-medium mb-1">Was this letter helpful?</p>
          <p className="text-sm text-muted-foreground">
            Your feedback helps us improve this tool for everyone.{' '}
            <Link 
              href={process.env.NEXT_PUBLIC_TYPEFORM_FEEDBACK_URL || '#'} 
              target="_blank"
              onClick={() => analytics.trackFeedbackSubmission('typeform')}
              className="text-primary underline underline-offset-2"
            >
              Share your thoughts
            </Link>
          </p>
        </div>
      </div>

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