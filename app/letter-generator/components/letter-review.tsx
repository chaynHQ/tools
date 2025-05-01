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
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { platforms } from '@/lib/platforms';
import { clientConfig } from '@/lib/rollbar';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Copy, MessageSquare, RefreshCw, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Rollbar from 'rollbar';
import { QuestionSection } from './question-section';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

interface LetterReviewProps {
  letter: GeneratedLetter;
  redactedLetter: GeneratedLetter;
  platformId: string;
  onRegenerateRequest: () => void;
  onComplete: () => void;
}

export function LetterReview({
  letter,
  redactedLetter,
  platformId,
  onRegenerateRequest,
  onComplete
}: LetterReviewProps) {
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const [consentToShare, setConsentToShare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { resetForm } = useFormContext();

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
      rollbar.error('Failed to copy letter to clipboard', {
        error: err,
        component: 'LetterReview',
        platformId
      });
      analytics.trackError('clipboard', 'Failed to copy to clipboard', 'LetterReview');
      toast({
        title: "Unable to copy",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      });
    }
  };

  const handleComplete = () => {
    try {
      analytics.trackProcessCompletion(
        Math.floor(Date.now() / 1000),
        ['platform_selection', 'initial_questions', 'follow_up', 'letter_generation']
      );
      resetForm();
      onComplete();
    } catch (error) {
      rollbar.error('Error completing letter process', {
        error,
        component: 'LetterReview',
        platformId
      });
      toast({
        title: "Error finishing process",
        description: "There was a problem completing the process. Please try again.",
        variant: "destructive"
      });
    }
  };

  const submitFeedback = async (isUseful: boolean) => {
    try {
      setIsSubmitting(true);
      setFeedbackError(null);

      if (!process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL) {
        throw new Error('Unable to submit feedback at this time');
      }

      const payload = {
        date: new Date().toISOString(),
        feedbackRating: isUseful ? 'positive' : 'negative',
        ...(consentToShare && {
          redactedLetter: {
            subject: redactedLetter.subject.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]')
              .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[IP]')
              .replace(/\b\d{10,}\b/g, '[NUMBER]'),
            body: redactedLetter.body.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]')
              .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[IP]')
              .replace(/\b\d{10,}\b/g, '[NUMBER]')
          }
        })
      };

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setFeedbackSubmitted(true);
      analytics.trackEvent('letter_feedback_submitted', {
        rating: isUseful ? 'positive' : 'negative',
        letterShared: consentToShare
      });
    } catch (error) {
      rollbar.error('Error submitting feedback', {
        error,
        component: 'LetterReview'
      });
      setFeedbackError('Unable to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <QuestionSection title="Your personalised letter">
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
              <h4 className="text-lg font-medium mb-2">Subject line</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 select-none">
                {letter.subject}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Message content</h4>
              <div className="p-4 bg-white rounded-lg border border-border/50 whitespace-pre-wrap select-none">
                {letter.body}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-border/50">
                <div className="flex flex-col gap-4">
                  {!feedbackSubmitted ? (
                    <>
                      <div>
                        <h4 className="text-base mb-1">Is this useful?</h4>
                        <p className="text-sm text-muted-foreground">
                          Did this tool produce a letter that you think could be useful for your case?
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={consentToShare}
                          onCheckedChange={(checked) => setConsentToShare(checked as boolean)}
                          disabled={isSubmitting}
                        />
                        <Label
                          htmlFor="consent"
                          className="text-sm text-muted-foreground leading-normal"
                        >
                          I consent to sharing this letter with Chayn to help improve our Survivor AI
                        </Label>
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-white hover:bg-accent-light/20"
                          onClick={() => submitFeedback(true)}
                          disabled={isSubmitting || !!feedbackError}
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Yes
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 bg-white hover:bg-accent-light/20"
                          onClick={() => submitFeedback(false)}
                          disabled={isSubmitting || !!feedbackError}
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          No
                        </Button>
                      </div>
                      {feedbackError && (
                        <div className="flex items-start gap-2 text-destructive">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{feedbackError}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-base font-medium">Your feedback has been submitted</h4>
                      <p className="text-sm text-muted-foreground">
                        Thank you for your feedback. This tool is new and learning! By sharing your experience, you help us make this tool more supportive for others in similar situations.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg border border-border/50">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-base mb-1">Not quite right?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sometimes our AI doesn't get it quite right. You can try regenerating a different letter using the same information to see if you prefer it.
                    </p>
                    <Button
                      variant="outline"
                      className="pill bg-white mt-4 hover:bg-accent-light/20"
                      onClick={onRegenerateRequest}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent-light rounded-lg">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-base mb-1">Copy your letter</h4>
                    <p className="text-sm text-muted-foreground">
                      Copy your letter, then paste it into an email. Don't forget to add your name at the end and include the subject line.
                    </p>
                  </div>
                  <Button
                    className="pill whitespace-nowrap bg-primary text-white hover:opacity-90 min-w-[120px] ml-6"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy letter
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </QuestionSection>

      <QuestionSection title="Next steps">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="space-y-2">
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
      </QuestionSection>

      <QuestionSection title="For more support">
        <p className="text-muted-foreground">
          When intimate images are shared without our consent—what we often call image-based abuse—it can impact our wellbeing and sense of self. Chayn offers a{' '}
          <Link 
            href="https://bloom.chayn.co/courses/image-based-abuse-and-rebuilding-ourselves?utm_source=tools.chayn.co&utm_medium=referral&utm_campaign=tools.chayn.co-iba-referral"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary/90"
          >
            free, online course about recovering from image-based abuse on our healing platform Bloom
          </Link>
          . It explores the emotional impacts and tools for rebuilding ourselves.
        </p>
      </QuestionSection>

      <div className="bg-accent-light/40 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
        <div className="bg-accent/20 p-1.5 rounded-full flex-shrink-0">
          <MessageSquare className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-foreground font-medium mb-1">Help us improve our Survivor AI</p>
          <p className="text-muted-foreground text-sm">
            This tool is new and learning! By sharing your experience, you help us make this tool more supportive for others in similar situations.{' '}
            <Link 
              href={process.env.NEXT_PUBLIC_TYPEFORM_FEEDBACK_URL || '#'} 
              target="_blank"
              onClick={() => analytics.trackFeedbackSubmission('typeform')}
              className="underline underline-offset-2 font-medium hover:text-primary/90"
            >
              Share your feedback
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <Button
          className="pill bg-primary text-white hover:opacity-90"
          onClick={() => setShowCompleteDialog(true)}
        >
          Finish and exit
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
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
              Go back
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