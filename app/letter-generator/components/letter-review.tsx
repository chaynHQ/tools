'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { IS_DEVELOPMENT, IS_PREVIEW } from '@/lib/constants/env';
import { PlatformId } from '@/lib/constants/platforms';
import { useFormContext } from '@/lib/context/FormContext';
import { generateSessionId, sendDevDataToZapier } from '@/lib/dev/data-collection';
import { getDefaultPlatformEmail, getPlatformById } from '@/lib/platforms';
import { rollbar } from '@/lib/rollbar';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Copy,
  MessageSquare,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { QuestionSection } from './question-section';

interface LetterReviewProps {
  letter: GeneratedLetter;
  redactedLetter: GeneratedLetter;
  platformId: PlatformId;
  onRegenerateRequest: () => void;
  onComplete: () => void;
}

export function LetterReview({
  letter,
  redactedLetter,
  platformId,
  onRegenerateRequest,
  onComplete,
}: LetterReviewProps) {
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const [consentToShare, setConsentToShare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [devDataSent, setDevDataSent] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [processStartTime] = useState(() => Date.now());
  const { toast } = useToast();
  const { resetForm, formState } = useFormContext();

  const platform = getPlatformById(platformId);
  const platformEmail = getDefaultPlatformEmail(platformId);
  // Get content location from form state
  const contentLocation =
    formState.initialQuestions.imageIdentification ||
    (formState.initialQuestions.contentLocationType === 'url'
      ? formState.initialQuestions.contentUrl
      : formState.initialQuestions.contentDescription);

  // Create display version with replaced content location
  const displayLetter = {
    subject: letter.subject,
    body: letter.body.replace(/\[Content Location\]/g, contentLocation || ''),
    nextSteps: letter.nextSteps,
  };

  // Send development data to Zapier when letter is first displayed
  useEffect(() => {
    if (!devDataSent && letter && formState.completeFormData) {
      const sendData = async () => {
        try {
          const completionTime = Math.floor((Date.now() - processStartTime) / 1000);
          const generatedSessionId = generateSessionId();

          const success = await sendDevDataToZapier({
            formData: {
              platformInfo: formState.platformInfo,
              reportingInfo: formState.reportingInfo,
              initialQuestions: formState.initialQuestions,
              reportingDetails: formState.reportingDetails,
              followUpData: formState.followUpData,
              completeFormData: formState.completeFormData,
            },
            generatedLetter: letter,
            sessionId: generatedSessionId,
            completionTimeSeconds: completionTime,
          });

          if (success) {
            setDevDataSent(true);
            setSessionId(generatedSessionId);
            console.log(
              'Development data collection: Data sent successfully with session ID:',
              generatedSessionId,
            );
          }
        } catch (error) {
          console.error('Development data collection: Failed to send data', error);
        }
      };

      sendData();
    }
  }, [letter, formState, devDataSent, processStartTime]);

  const handleCopy = async () => {
    try {
      const fullText = `Subject: ${displayLetter.subject}\n\n${displayLetter.body}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      analytics.trackEvent(GA_EVENTS.TDLG_LETTER_COPIED, {
        has_placeholders: false,
        length: fullText.length,
      });
      toast({
        title: 'Copied to clipboard',
        description: 'Your letter has been copied and is ready to paste into an email.',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      rollbar.error('Failed to copy letter to clipboard', {
        error: err,
        component: 'LetterReview',
        platformId,
      });
      analytics.trackError('clipboard', 'Failed to copy to clipboard', 'LetterReview');
      toast({
        title: 'Unable to copy',
        description: 'Please try selecting and copying the text manually.',
        variant: 'destructive',
      });
    }
  };

  const handleRegenerate = () => {
    try {
      analytics.trackEvent(GA_EVENTS.TDLG_LETTER_REGENERATED, {
        platform: platform?.name || 'unknown',
      });
      onRegenerateRequest();
    } catch (error) {
      rollbar.error('Error handling letter regeneration', {
        error,
        component: 'LetterReview',
        platformId,
      });
    }
  };

  const handleComplete = () => {
    try {
      analytics.trackProcessCompletion(Math.floor(Date.now() / 1000), [
        'platform_selection',
        'initial_questions',
        'follow_up',
        'letter_generation',
      ]);
      resetForm();
      onComplete();
    } catch (error) {
      rollbar.error('Error completing letter process', {
        error,
        component: 'LetterReview',
        platformId,
      });
      toast({
        title: 'Error finishing process',
        description: 'There was a problem completing the process. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const submitFeedback = async (isUseful: boolean) => {
    try {
      setIsSubmitting(true);
      setFeedbackError(null);

      const payload = {
        date: new Date().toISOString(),
        feedbackRating: isUseful ? 'positive' : 'negative',
        ...(consentToShare && {
          redactedLetter: {
            subject: redactedLetter.subject
              .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]')
              .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[IP]')
              .replace(/\b\d{10,}\b/g, '[NUMBER]'),
            body: redactedLetter.body
              .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]')
              .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[IP]')
              .replace(/\b\d{10,}\b/g, '[NUMBER]'),
          },
        }),
      };

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setFeedbackSubmitted(true);
      analytics.trackEvent(GA_EVENTS.TDLG_LETTER_FEEDBACK_SUBMITTED, {
        rating: isUseful ? 'positive' : 'negative',
        letterShared: consentToShare,
      });
    } catch (error) {
      rollbar.error('Error submitting feedback', {
        error,
        component: 'LetterReview',
      });
      setFeedbackError('Unable to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copySessionId = async () => {
    try {
      await navigator.clipboard.writeText(sessionId);
      toast({
        title: 'Session ID copied',
        description: 'The session ID has been copied to your clipboard.',
      });
    } catch (err) {
      toast({
        title: 'Unable to copy',
        description: 'Please select and copy the session ID manually.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-8">
      <QuestionSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Development data collection indicator */}
          {(IS_DEVELOPMENT || IS_PREVIEW) && (
            <div className="flex items-start gap-3 p-4 bg-accent-light/60 rounded-lg text-muted-foreground mb-4">
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <p className="text-foreground font-medium">Testing mode</p>
                <p className="text-sm">Copy this ID to quote it when giving us feedback</p>
                {sessionId && (
                  <div className="mt-3 flex items-center gap-3">
                    <code className="text-lg font-mono bg-white px-4 py-2 rounded border text-foreground font-bold tracking-widest">
                      {sessionId}
                    </code>
                    <Button variant="outline" size="sm" onClick={copySessionId} className="text-xs">
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                )}
                {!sessionId && devDataSent && (
                  <p className="text-muted-foreground text-sm mt-2">
                    Session ID will appear shortly.
                  </p>
                )}
                {!devDataSent && (
                  <p className="text-muted-foreground text-sm mt-2">Generating session ID...</p>
                )}
              </div>
            </div>
          )}

          <div className="flex items-start gap-3 p-4 bg-accent-light/60 rounded-lg text-muted-foreground mb-4">
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <p className="text-foreground font-medium">Before sending</p>
              <p className="text-sm">
                Remember to add your full name at the end of the letter. For your privacy and
                security, we don't collect personal details.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Send email to</h4>
              <div className="p-4 bg-white rounded-lg">{platformEmail}</div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Subject line</h4>
              <div className="p-4 bg-white rounded-lg select-none">{displayLetter.subject}</div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Message content</h4>
              <div className="p-4 bg-white rounded-lg whitespace-pre-wrap select-none">
                {displayLetter.body}
              </div>
            </div>
          </div>

          <div className="p-6 bg-accent-light rounded-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-base mb-1">Copy your letter</h4>
                  <p className="text-sm text-muted-foreground">
                    Copy and paste your letter into an email. Before sending, add your name at the
                    end of the letter and ensure the subject line is included.
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

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg">
                <div className="flex flex-col gap-4">
                  {!feedbackSubmitted ? (
                    <>
                      <div>
                        <h4 className="text-base mb-1">Is this useful?</h4>
                        <p className="text-sm text-muted-foreground">
                          Did this tool produce a letter that you think could be useful for your
                          case?
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
                          I consent to sharing this letter with Chayn to help improve our Survivor
                          AI
                        </Label>
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-white hover:bg-secondary/50"
                          onClick={() => submitFeedback(true)}
                          disabled={isSubmitting || !!feedbackError}
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Yes
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 bg-white hover:bg-secondary/50"
                          onClick={() => submitFeedback(false)}
                          disabled={isSubmitting || !!feedbackError}
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          No
                        </Button>
                      </div>
                      {feedbackError && (
                        <div className="flex items-start gap-2 text-destructive">
                          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                          <p className="text-sm">{feedbackError}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-base font-medium">Your feedback has been submitted</h4>
                      <p className="text-sm text-muted-foreground">
                        Thank you for your feedback. This tool is new and learning! By sharing your
                        experience, you help us make this tool more supportive for others in similar
                        situations. If you would like to provide more detailed feedback, please{' '}
                        <Link
                          href={process.env.TYPEFORM_FEEDBACK_URL || '#'}
                          target="_blank"
                          onClick={() => analytics.trackFeedbackSubmission('typeform')}
                          className="underline underline-offset-2 font-medium hover:text-primary/90"
                        >
                          share your thoughts with us.
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-base mb-1">Not quite right?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sometimes our AI doesn't get it quite right. You can try regenerating a
                      different letter using the same information to see if you prefer it.
                    </p>
                    <Button
                      variant="outline"
                      className="pill bg-white mt-4 hover:bg-secondary/50"
                      onClick={handleRegenerate}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </QuestionSection>

      <QuestionSection title="Next steps">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ul className="space-y-2">
            {letter.nextSteps?.map((step, index) => (
              <li key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center shrink-0 text-sm font-medium">
                  {index + 1}
                </span>
                <p className="text-muted-foreground">{step}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </QuestionSection>

      <QuestionSection title="For more support">
        <p className="text-muted-foreground">
          When intimate images are shared without our consent—what we often call image-based
          abuse—it can impact our wellbeing and sense of self. Chayn offers a{' '}
          <Link
            onClick={() => {
              analytics.trackEvent(GA_EVENTS.TDLG_BLOOM_IBA_COURSE_LINK_CLICKED, {
                source: 'letter_review',
                platform: platform?.name || 'unknown',
              });
            }}
            href="https://bloom.chayn.co/courses/image-based-abuse-and-rebuilding-ourselves?utm_source=tools.chayn.co&utm_medium=referral&utm_campaign=tools.chayn.co-iba-referral"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary/80"
          >
            free, online course about recovering from image-based abuse on our healing platform
            Bloom
          </Link>
          . It explores the emotional impacts and tools for rebuilding ourselves.
        </p>
      </QuestionSection>

      <div className="bg-accent-light/40 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
        <div className="bg-accent/20 p-1.5 rounded-full shrink-0">
          <MessageSquare className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-foreground font-medium mb-1">Help us improve our Survivor AI</p>
          <p className="text-muted-foreground text-sm">
            This tool is new and learning! By sharing your experience, you help us make this tool
            more supportive for others in similar situations.{' '}
            <Link
              href={process.env.TYPEFORM_FEEDBACK_URL || '#'}
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
              For your privacy and security, all information you've provided will be cleared when
              you leave this page. Make sure you've copied your letter if you need it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowCompleteDialog(false)}>
              Go back
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleComplete}>Finish</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
