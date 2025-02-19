"use client";

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { platforms } from '@/lib/platforms';
import { GeneratedLetter } from '@/types/letter';
import { motion } from 'framer-motion';
import { ArrowLeft, ClipboardList, Copy, FileText, Loader2, MessageSquareMore } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import 'regenerator-runtime/runtime';
import { FollowUpQuestions } from './follow-up-questions';
import { InitialQuestions } from './initial-questions';
import { LetterReview } from './letter-review';
import { ProgressBar } from './progress-bar';
import { ReportingDetails } from './reporting-details';

type Step = 'overview' | 'initial-questions' | 'reporting-details' | 'follow-up' | 'generation' | 'review';

const stepTitles: Record<Step, string> = {
  'overview': 'Letter generator overview',
  'initial-questions': 'Essential information',
  'reporting-details': 'Previous reporting details',
  'follow-up': 'Additional information',
  'generation': 'Generating your letter',
  'review': 'Review and send'
};

const stepDescriptions: Record<Step, string> = {
  'overview': "We'll guide you through creating a professional takedown request letter",
  'initial-questions': 'Please provide key details about the content to help us create an effective takedown request',
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
  const [generatedLetter, setGeneratedLetter] = useState<GeneratedLetter | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const reportingStatus = searchParams.get('status') as 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null;
  const otherPlatform = searchParams.get('other');
  const { toast } = useToast();

  if (!platform && !otherPlatform) {
    router.push('/platforms');
    return null;
  }

  const steps = [
    {
      title: "Initial questions",
      description: "Answer a few key questions about your situation to help us understand the context.",
      icon: ClipboardList,
      color: "#FFBFA3",
    },
    {
      title: "Follow-up details",
      description: "Provide additional information to make your takedown request more specific and effective.",
      icon: MessageSquareMore,
      color: "#D5E3D2",
    },
    {
      title: "Letter generation",
      description: "Our AI generates a professionally-written takedown request letter based on your responses.",
      icon: FileText,
      color: "#B5BFE8",
    },
    {
      title: "Copy and send",
      description: "Review your letter, make any final adjustments, and copy it to send to the platform.",
      icon: Copy,
      color: "#D7CD97",
    },
  ];

  const handleStartProcess = () => {
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
    try {
      const response = await fetch('/api/generate-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate letter');
      }

      const letter = await response.json();
      setGeneratedLetter(letter);
      setCurrentStep('review');
    } catch (error) {
      toast({
        title: "Error generating letter",
        description: "There was a problem creating your letter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleComplete = () => {
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
                    Start process
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </div>
              </>
            ) : currentStep === 'initial-questions' ? (
              <InitialQuestions
                onSubmit={(data) => {
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
                onSubmit={(data) => {
                  setFormData({ ...formData, reportingDetails: data });
                  setCurrentStep(getNextStep('reporting-details'));
                }}
                reportingStatus={reportingStatus || 'none-completed'}
              />
            ) : currentStep === 'follow-up' ? (
              <FollowUpQuestions
                initialData={formData}
                onSubmit={(data) => {
                  setFormData({ ...formData, followUp: data });
                  generateLetter();
                  setCurrentStep(getNextStep('follow-up'));
                }}
              />
            ) : currentStep === 'generation' ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">
                  Generating your takedown request letter...
                </p>
              </div>
            ) : currentStep === 'review' && generatedLetter ? (
              <LetterReview
                letter={generatedLetter}
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