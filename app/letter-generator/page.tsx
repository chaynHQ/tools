'use client';
import 'regenerator-runtime/runtime'; // Ensure this import goes first otherwise you will get a runtime error

import { Button } from '@/components/ui/button';
import { generateLetter } from '@/lib/ai/generate-letter';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { PlatformInfo, useFormContext } from '@/lib/context/FormContext';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FollowUpQuestions } from './components/follow-up-questions';
import { InitialQuestions } from './components/initial-questions';
import { LetterReview } from './components/letter-review';
import { PlatformSelection } from './components/platform-selection';
import { ProgressBar } from './components/progress-bar';
import { RemovalProcess } from './components/removal-process';
import { ReportingDetails } from './components/reporting-details';

type Step =
  | 'platform-selection'
  | 'removal-process'
  | 'initial-questions'
  | 'reporting-details'
  | 'follow-up'
  | 'generation'
  | 'review';

const stepTitles: Record<Step, string> = {
  'platform-selection': 'Select a platform',
  'removal-process': 'Review removal process',
  'initial-questions': 'Tell us about the content',
  'reporting-details': 'Previous reporting details',
  'follow-up': 'Additional details',
  generation: 'Creating your letter',
  review: 'Review and send',
};

const stepDescriptions: Record<Step, string> = {
  'platform-selection': 'Select the platform where the content is hosted',
  'removal-process': 'Review available reporting processes',
  'initial-questions': 'Please share key details about the content',
  'reporting-details': 'Tell us about your previous attempts to report this content',
  'follow-up': 'Provide any additional details to strengthen your request',
  generation: 'Creating a professionally-written letter based on your responses',
  review: 'Review your letter and prepare to send it',
};

export default function LetterGenerator() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('platform-selection');
  const [isLoading, setIsLoading] = useState(false);
  const { formState, updateCompleteFormData } = useFormContext();
  const [hasGeneratedLetter, setHasGeneratedLetter] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState<GeneratedLetter | null>(null);
  const [redactedLetter, setRedactedLetter] = useState<GeneratedLetter | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);

  // Scroll to top of main content when step changes
  useEffect(() => {
    const mainContent = document.querySelector('.letter-generator-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  // Memoize letter generation function
  const generateLetterContent = useCallback(async () => {
    if (!formState.completeFormData) return;

    try {
      setIsLoading(true);
      const letters = await generateLetter(formState.completeFormData);
      setGeneratedLetter(letters.finalLetter);
      setRedactedLetter(letters.originalLetter);
      setHasGeneratedLetter(true);

      analytics.trackEvent(GA_EVENTS.TDLG_LETTER_GENERATED, {
        platform: formState.platformInfo?.platformName,
        isRegeneration: isRegenerating,
      });

      // Only change step if not regenerating
      if (!isRegenerating) {
        setCurrentStep('review');
      }
      setIsRegenerating(false);
    } catch (error) {
      console.error('Error generating letter:', error);
      analytics.trackError(
        'letter_generation',
        error instanceof Error ? error.message : 'Unknown error',
        'LetterGenerator',
      );
    } finally {
      setIsLoading(false);
    }
  }, [formState.completeFormData, isRegenerating]);

  const getStepOrder = (): Step[] => {
    // Skip removal process for custom platforms
    if (formState.platformInfo?.isCustom) {
      return ['platform-selection', 'initial-questions', 'follow-up', 'generation', 'review'];
    }

    return formState.reportingInfo?.status === 'none-completed'
      ? [
          'platform-selection',
          'removal-process',
          'initial-questions',
          'follow-up',
          'generation',
          'review',
        ]
      : [
          'platform-selection',
          'removal-process',
          'initial-questions',
          'reporting-details',
          'follow-up',
          'generation',
          'review',
        ];
  };

  const getCurrentStepNumber = () => {
    const stepOrder = getStepOrder();
    return stepOrder.indexOf(currentStep);
  };

  const getTotalSteps = () => {
    if (formState.platformInfo?.isCustom) {
      return 5; // Skip removal process for custom platforms
    }
    return formState.reportingInfo?.status === 'none-completed' ? 6 : 7;
  };

  const handleBack = () => {
    if (currentStep === 'platform-selection') {
      router.push('/');
    } else {
      const stepOrder = getStepOrder();
      const currentIndex = stepOrder.indexOf(currentStep);
      if (currentIndex > 0) {
        // If going back from review or generation, go back to follow-up
        if ((currentStep === 'review' || currentStep === 'generation') && hasGeneratedLetter) {
          setCurrentStep('follow-up');
        } else {
          setCurrentStep(stepOrder[currentIndex - 1]);
        }
      }
    }
  };

  const handleNext = (nextStep: Step, platformInfo?: PlatformInfo) => {
    // For custom platforms, skip removal process
    if (nextStep === 'removal-process' && platformInfo?.isCustom) {
      console.warn('Skipping removal process for custom platform');
      nextStep = 'initial-questions';
    }

    if (
      nextStep === 'reporting-details' &&
      (formState.reportingInfo?.status === 'none-completed' ||
        !formState.reportingInfo ||
        Object.keys(formState.reportingInfo).length === 0)
    ) {
      console.warn('Skipping reporting details step');
      nextStep = 'follow-up';
    }

    // Update complete form data before moving to follow-up or generation steps
    if (nextStep === 'follow-up' || nextStep === 'generation') {
      updateCompleteFormData();
    }

    // If moving to generation step and we already have a letter, skip to review
    if (nextStep === 'generation' && hasGeneratedLetter && generatedLetter && !isRegenerating) {
      setCurrentStep('review');
      return;
    }

    setCurrentStep(nextStep);
  };

  // Handle letter generation when entering the generation step
  useEffect(() => {
    if (currentStep === 'generation' && !isRegenerating) {
      generateLetterContent();
    }
  }, [currentStep, generateLetterContent, isRegenerating]);

  const platformName = formState.platformInfo?.isCustom
    ? formState.platformInfo.customName
    : formState.platformInfo?.platformName;

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral rounded-2xl p-6 sm:p-8 letter-generator-content"
        >
          <div className="space-y-6 sm:space-y-8">
            {currentStep !== 'platform-selection' && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Button variant="ghost" className="pill -ml-2 self-start" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                <div className="hidden sm:block flex-1">
                  <ProgressBar currentStep={getCurrentStepNumber()} totalSteps={getTotalSteps()} />
                </div>
              </div>
            )}

            {currentStep === 'platform-selection' && (
              <Button variant="ghost" className="pill -ml-2" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            <div className="flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl mb-2">{stepTitles[currentStep]}</h1>
              <p className="text-muted-foreground">
                {stepDescriptions[currentStep]}{' '}
                {platformName && currentStep !== 'platform-selection' ? `for ${platformName}` : ''}
              </p>
            </div>

            {currentStep === 'platform-selection' && (
              <PlatformSelection
                onComplete={(platformInfo) => handleNext('removal-process', platformInfo)}
              />
            )}

            {currentStep === 'removal-process' && !formState.platformInfo?.isCustom && (
              <RemovalProcess onComplete={() => handleNext('initial-questions')} />
            )}

            {currentStep === 'initial-questions' && (
              <InitialQuestions
                onComplete={() =>
                  handleNext(
                    formState.reportingInfo?.status === 'none-completed'
                      ? 'follow-up'
                      : 'reporting-details',
                  )
                }
              />
            )}

            {currentStep === 'reporting-details' && (
              <ReportingDetails onComplete={() => handleNext('follow-up')} />
            )}

            {currentStep === 'follow-up' && (
              <FollowUpQuestions
                initialData={formState.completeFormData}
                savedData={formState.followUpData.answers}
                onSubmit={() => handleNext('generation')}
              />
            )}

            {(currentStep === 'generation' || isRegenerating) && !generatedLetter && (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                <div className="bg-accent-light/30 rounded-xl p-6 max-w-xl text-center">
                  <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-primary" />
                  <h3 className="text-lg font-medium mb-2">
                    {isRegenerating
                      ? 'Regenerating your letter'
                      : 'Creating your personalised letter'}
                  </h3>
                  <p className="text-muted-foreground">
                    We're using AI to craft a professionally-written takedown request based on your
                    responses, ensuring it aligns with {platformName}'s content policies and removal
                    processes.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 'review' &&
              formState.completeFormData &&
              generatedLetter &&
              redactedLetter && (
                <LetterReview
                  letter={generatedLetter}
                  redactedLetter={redactedLetter}
                  platformId={formState.platformInfo?.platformId || ''}
                  onRegenerateRequest={async () => {
                    setIsRegenerating(true);
                    setGeneratedLetter(null);
                    setRedactedLetter(null);
                    await generateLetterContent();
                  }}
                  onComplete={() => {
                    analytics.trackProcessCompletion(Math.floor(Date.now() / 1000), [
                      'platform_selection',
                      'initial_questions',
                      'follow_up',
                      'letter_generation',
                    ]);
                    router.push('/');
                  }}
                />
              )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
