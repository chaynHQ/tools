"use client";

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { analytics, ANALYTICS_EVENTS } from '@/lib/analytics';
import { platforms } from '@/lib/platforms';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, ClipboardList, Copy, FileText, Loader2, MessageSquareMore } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import { FollowUpQuestions } from './follow-up-questions';
import { InitialQuestions } from './initial-questions';
import { LetterReview } from './letter-review';
import { ProgressBar } from './progress-bar';
import { ReportingDetails } from './reporting-details';
import { useFormContext } from '@/lib/context/FormContext';

type Step = 'overview' | 'initial-questions' | 'reporting-details' | 'follow-up' | 'generation' | 'review';

const stepTitles: Record<Step, string> = {
  'overview': 'Letter generator overview',
  'initial-questions': 'Content Information',
  'reporting-details': 'Previous Reporting Details',
  'follow-up': 'Additional Details',
  'generation': 'Creating your letter',
  'review': 'Review and send'
};

const stepDescriptions: Record<Step, string> = {
  'overview': "We'll guide you through creating a professional takedown request letter",
  'initial-questions': 'Please share key details about the content to help us create an effective takedown request',
  'reporting-details': 'Tell us about your previous attempts to report this content',
  'follow-up': 'Provide any additional details to strengthen your request',
  'generation': 'Creating a professionally-written letter based on your responses',
  'review': 'Review your letter and prepare to send it'
};

export function LetterGeneratorClient({
  params
}: {
  params: { platform: string }
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const platformId = params.platform;
  const platform = platforms.find(p => p.id === platformId);
  const [currentStep, setCurrentStep] = useState<Step>('overview');
  const [formData, setFormData] = useState<any>({});
  const [initialFormData, setInitialFormData] = useState<any>({});
  const [reportingFormData, setReportingFormData] = useState<any>({});
  const [followUpFormData, setFollowUpFormData] = useState<any>({});
  const [generatedLetter, setGeneratedLetter] = useState<GeneratedLetter | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [reportingStatus, setReportingStatus] = useState<'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null>(null);
  const [otherPlatform, setOtherPlatform] = useState<string | null>(null);
  const { toast } = useToast();
  const { formState, setInitialQuestions, setReportingDetails, setFollowUpQuestions, resetForm } = useFormContext();

  // Load data from URL params and context
  useEffect(() => {
    // Get reporting status from URL or context
    const statusFromUrl = searchParams.get('status') as 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null;
    if (statusFromUrl) {
      setReportingStatus(statusFromUrl);
    } else if (formState.reportingInfo && formState.reportingInfo.status) {
      setReportingStatus(formState.reportingInfo.status);
    } else {
      setReportingStatus('none-completed');
    }

    // Get other platform from URL or context
    const otherFromUrl = searchParams.get('other');
    if (otherFromUrl) {
      setOtherPlatform(otherFromUrl);
    } else if (formState.platformInfo && formState.platformInfo.isCustom) {
      setOtherPlatform(formState.platformInfo.customName || null);
    }

    // Load saved form data from context
    if (formState.initialQuestions && Object.keys(formState.initialQuestions).length > 0) {
      setInitialFormData(formState.initialQuestions);
    }

    if (formState.reportingDetails && Object.keys(formState.reportingDetails).length > 0) {
      setReportingFormData(formState.reportingDetails);
    }

    if (formState.followUpQuestions && Object.keys(formState.followUpQuestions).length > 0) {
      setFollowUpFormData(formState.followUpQuestions);
    }

    // Initialize form data with platform info
    setFormData({
      platformInfo: {
        name: otherFromUrl || (formState.platformInfo?.isCustom ? formState.platformInfo.customName : platform?.name),
        isCustom: otherFromUrl ? true : (formState.platformInfo?.isCustom || false)
      }
    });
  }, [searchParams, platform, platformId, formState]);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  if (!platform && !otherPlatform) {
    router.push('/platforms');
    return null;
  }

  const steps = [
    {
      title: "Content Information",
      description: "Share details about your situation to help us understand the context and create a personalised letter.",
      icon: ClipboardList,
      color: "#FFBFA3",
    },
    {
      title: "Additional Details",
      description: "Provide specific information that will strengthen your takedown request and increase its effectiveness.",
      icon: MessageSquareMore,
      color: "#D5E3D2",
    },
    {
      title: "Letter Creation",
      description: "We'll generate a professionally-written takedown request letter tailored to your specific situation.",
      icon: FileText,
      color: "#B5BFE8",
    },
    {
      title: "Review and Send",
      description: "Review your personalised letter, make any final adjustments, and prepare to send it to the platform.",
      icon: Copy,
      color: "#D7CD97",
    },
  ];

  const handleStartProcess = () => {
    analytics.trackEvent(ANALYTICS_EVENTS.PROCESS_STARTED, {
      platform: platformId,
      reporting_status: reportingStatus
    });
    setCurrentStep('initial-questions');
  };

  const getPreviousStep = (currentStep: Step): Step => {
    const stepOrder: Step[] = reportingStatus === 'none-completed'
      ? ['overview', 'initial-questions', 'follow-up', 'generation', 'review']
      : ['overview', 'initial-questions', 'reporting-details', 'follow-up', 'generation', 'review'];
    
    const currentIndex = stepOrder.indexOf(currentStep);
    return currentIndex > 0 ? stepOrder[currentIndex - 1] : 'overview';
  };

  const handleBack = () => {
    if (currentStep === 'overview') {
      router.back();
    } else {
      setCurrentStep(getPreviousStep(currentStep));
    }
  };

  const getNextStep = (currentStep: Step): Step => {
    switch (currentStep) {
      case 'initial-questions':
        return reportingStatus === 'none-completed' ? 'follow-up' : 'reporting-details';
      case 'reporting-details':
        return 'follow-up';
      case 'follow-up':
        return 'generation';
      case 'generation':
        return 'review';
      default:
        return 'initial-questions';
    }
  };

  const getCurrentStepNumber = () => {
    const stepOrder: Step[] = reportingStatus === 'none-completed'
      ? ['overview', 'initial-questions', 'follow-up', 'generation', 'review']
      : ['overview', 'initial-questions', 'reporting-details', 'follow-up', 'generation', 'review'];
    return stepOrder.indexOf(currentStep);
  };

  const getTotalSteps = () => {
    return reportingStatus === 'none-completed' ? 4 : 5;
  };

  const generateLetter = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate letter');
      }

      const letter = await response.json();
      analytics.trackLetterGeneration(true, retryCount);
      setGeneratedLetter(letter);
      setCurrentStep('review');
      setRetryCount(0);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      analytics.trackError('letter_generation', errorMessage, 'LetterGenerator');
      setError(errorMessage);
      toast({
        title: "Error creating letter",
        description: "There was a problem creating your letter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleComplete = () => {
    // Reset form data when process is complete
    resetForm();
    router.push('/');
  };

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral rounded-2xl p-8 shadow-sm"
        >
          <div className="space-y-8">
            {currentStep !== 'overview' && (
              <div className="flex items-center gap-8">
                <Button
                  variant="ghost"
                  className="pill -ml-2 flex-shrink-0"
                  onClick={handleBack}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                <ProgressBar
                  currentStep={getCurrentStepNumber()}
                  totalSteps={getTotalSteps()}
                />
              </div>
            )}

            {currentStep === 'overview' && (
              <Button
                variant="ghost"
                className="pill -ml-2"
                onClick={handleBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            <div className="flex flex-col items-start">
              <h1 className="text-3xl mb-2">{stepTitles[currentStep]}</h1>
              <p className="text-muted-foreground">
                {stepDescriptions[currentStep]} {platform && currentStep !== 'overview' ? `for ${platform.name}` : ''}
                {otherPlatform && currentStep !== 'overview' ? `for ${otherPlatform}` : ''}
              </p>
            </div>

            {currentStep === 'overview' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 relative overflow-hidden"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <step.icon 
                            className="w-9 h-9"
                            style={{ color: step.color }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 
                            className="text-lg font-medium mb-2 pb-2 border-b-2"
                            style={{ borderColor: step.color }}
                          >
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button 
                    className="pill bg-primary text-white hover:opacity-90"
                    onClick={handleStartProcess}
                  >
                    Begin process
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </div>
              </>
            ) : currentStep === 'initial-questions' ? (
              <InitialQuestions
                initialData={initialFormData}
                onSubmit={(data) => {
                  setInitialFormData(data);
                  
                  // Save to context
                  setInitialQuestions(data);
                  
                  setFormData({
                    ...formData,
                    initialQuestions: data,
                    platformInfo: {
                      name: otherPlatform || platform?.name,
                      isCustom: !!otherPlatform
                    }
                  });
                  setCurrentStep(getNextStep('initial-questions'));
                }}
                reportingStatus={reportingStatus || 'none-completed'}
              />
            ) : currentStep === 'reporting-details' ? (
              <ReportingDetails
                initialData={reportingFormData}
                onSubmit={(data) => {
                  setReportingFormData(data);
                  
                  // Save to context
                  setReportingDetails(data);
                  
                  setFormData({ ...formData, reportingDetails: data });
                  setCurrentStep(getNextStep('reporting-details'));
                }}
                reportingStatus={reportingStatus || 'none-completed'}
              />
            ) : currentStep === 'follow-up' ? (
              <FollowUpQuestions
                initialData={formData}
                savedData={followUpFormData}
                onSubmit={(data) => {
                  setFollowUpFormData(data);
                  
                  // Save to context
                  setFollowUpQuestions(data);
                  
                  setFormData({ ...formData, followUp: data });
                  generateLetter();
                  setCurrentStep(getNextStep('follow-up'));
                }}
              />
            ) : currentStep === 'generation' ? (
              error ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-accent-light/50 rounded-xl p-6 max-w-xl text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">Unable to generate letter</h3>
                    <p className="text-muted-foreground mb-6">
                      We're having trouble connecting to our AI service. You can try again or return to the previous step.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      {retryCount < 3 && (
                        <Button
                          onClick={() => {
                            setRetryCount(prev => prev + 1);
                            generateLetter();
                          }}
                          variant="outline"
                          className="pill"
                        >
                          Try again
                        </Button>
                      )}
                      <Button
                        onClick={() => setCurrentStep(getPreviousStep(currentStep))}
                        className="pill bg-primary text-white hover:opacity-90"
                      >
                        Go back
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-accent-light/30 rounded-xl p-6 max-w-xl text-center">
                    <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-primary" />
                    <h3 className="text-lg font-medium mb-3">Creating your personalised letter</h3>
                    <p className="text-muted-foreground mb-4">
                      We're crafting a professionally-written takedown request based on the information you've shared.
                    </p>
                    <div className="bg-white/50 rounded-lg p-4 mt-2">
                      <p className="text-muted-foreground text-sm">
                        You've done great work getting to this point. We understand sharing these details can be difficult, 
                        especially if you've had to do it multiple times before. We're here to support you through this process.
                      </p>
                    </div>
                  </div>
                </div>
              )
            ) : currentStep === 'review' && generatedLetter ? (
              <LetterReview
                letter={generatedLetter}
                platformId={platformId}
                onRegenerateRequest={() => {
                  generateLetter();
                  setCurrentStep('generation');
                }}
                onComplete={handleComplete}
              />
            ) : null}
          </div>
        </motion.div>
      </div>
    </main>
  );
}