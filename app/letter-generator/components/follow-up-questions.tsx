"use client";

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateFollowUpQuestions } from '@/lib/ai';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { clientConfig } from '@/lib/rollbar';
import { FollowUpQuestion } from '@/types/questions';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Rollbar from 'rollbar';
import { VoiceInput } from './voice-input';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

// Common languages that might be used
const SUPPORTED_LANGUAGES = [
  'en-US', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'pt-PT', 'hi-IN', 
  'ar-SA', 'zh-CN', 'ja-JP', 'ko-KR', 'ru-RU'
];

interface FollowUpQuestionsForm {
  [key: string]: string;
}

interface FollowUpQuestionsProps {
  initialData: any;
  savedData?: FollowUpQuestionsForm;
  onSubmit: (data: FollowUpQuestionsForm) => void;
}

export function FollowUpQuestions({ initialData, savedData = {}, onSubmit }: FollowUpQuestionsProps) {
  const startTime = useState(() => Date.now())[0];
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasInitialized, setHasInitialized] = useState<boolean>(false);
  const [followUpQuestions, setFollowUpQuestions] = useState<FollowUpQuestion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, setValue, reset } = useForm<FollowUpQuestionsForm>();
  const { toast } = useToast();
  const { formState, setFollowUpData } = useFormContext();
  const fetchController = useRef<AbortController | null>(null);
  const hasQuestionsInContext = formState.followUpData.questions.length > 0;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Initialize questions from context or fetch new ones
  useEffect(() => {
    if (hasInitialized || !initialData) return;

    const initializeQuestions = async () => {
      // Use cached questions if available
      if (hasQuestionsInContext) {
        setFollowUpQuestions(formState.followUpData.questions);
        setIsLoading(false);
        setHasInitialized(true);
        return;
      }

      // Fetch new questions if none are cached
      const controller = new AbortController();
      fetchController.current = controller;

      try {
        const questions = await generateFollowUpQuestions(initialData);
        
        if (controller.signal.aborted) return;

        if (questions && Array.isArray(questions)) {
          setFollowUpQuestions(questions);
          setFollowUpData(questions, savedData || {});
          analytics.trackAdditionalQuestionsGenerated(questions.length);
          rollbar.info('Follow-up questions generated successfully', {
            questionCount: questions.length
          });
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        
        const message = error instanceof Error 
          ? error.message 
          : 'We encountered a problem analysing your responses.';
        
        rollbar.error('Error fetching follow-up questions', {
          error,
          component: 'FollowUpQuestions',
          initialData
        });
        
        analytics.trackError('follow_up_generation', message, 'FollowUpQuestions');
        setError(message);
        toast({
          title: "Unable to generate follow-up questions",
          description: "You can proceed to the next step.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
        setHasInitialized(true);
      }
    };

    initializeQuestions();

    return () => {
      if (fetchController.current) {
        fetchController.current.abort();
        fetchController.current = null;
      }
    };
  }, [initialData, hasQuestionsInContext, formState.followUpData.questions, setFollowUpData, savedData, toast, hasInitialized]);

  // Reset form with saved data when available
  useEffect(() => {
    if (savedData && Object.keys(savedData).length > 0) {
      reset(savedData);
    }
  }, [savedData, reset]);

  // Update field value when speech transcript changes
  useEffect(() => {
    if (transcript && activeField) {
      setValue(activeField, transcript);
    }
  }, [transcript, activeField, setValue]);

  const handleVoiceInput = (field: string) => {
    try {
      if (listening && activeField === field) {
        SpeechRecognition.stopListening();
        resetTranscript();
        setActiveField(null);
        
        // Track successful voice input completion
        analytics.trackEvent(GA_EVENTS.TDLG_VOICE_INPUT_USED, {
          field,
          success: true,
          component: 'FollowUpQuestions'
        });
      } else {
        setActiveField(field);
        resetTranscript();
        // Try to detect user's browser language, fallback to English
        const browserLang = navigator.language;
        const supportedLang = SUPPORTED_LANGUAGES.find(lang => 
          browserLang.toLowerCase().startsWith(lang.toLowerCase().split('-')[0])
        ) || 'en-US';
        
        SpeechRecognition.startListening({ 
          continuous: true,
          language: supportedLang
        });
        
        
        rollbar.info('Voice input started', {
          field,
          language: supportedLang
        });
      }
    } catch (error) {
      rollbar.error('Error handling voice input', {
        error,
        component: 'FollowUpQuestions',
        field
      });
      
      // Track failed voice input attempt
      analytics.trackEvent('TDLG_VOICE_INPUT_USED', {
        field,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        component: 'FollowUpQuestions'
      });
      
      toast({
        title: "Voice input error",
        description: "There was a problem with the voice input. Please try typing instead.",
        variant: "destructive"
      });
    }
  };

  const handleFormSubmit = (data: FollowUpQuestionsForm) => {
    try {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      analytics.trackAdditionalQuestionsCompleted(timeSpent, followUpQuestions.length);
      setFollowUpData(followUpQuestions, data);
      rollbar.info('Follow-up questions submitted', {
        timeSpent,
        questionCount: followUpQuestions.length,
        answeredFields: Object.keys(data).length
      });
      onSubmit(data);
    } catch (error) {
      rollbar.error('Error submitting follow-up questions', {
        error,
        component: 'FollowUpQuestions',
        data
      });
      toast({
        title: "Error saving responses",
        description: "There was a problem saving your responses. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-accent-light/30 rounded-xl p-6 max-w-xl text-center">
          <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-primary" />
          <h3 className="text-lg font-medium mb-2">Analysing your responses</h3>
          <p className="text-muted-foreground">
            We're using AI to analyse your responses and generate relevant follow-up questions to help strengthen your takedown request.
          </p>
        </div>
      </div>
    );
  }

  if (error && followUpQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-accent-light/50 rounded-xl p-6 max-w-xl text-center">
          <AlertCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-medium mb-2">
            Unable to generate follow-up questions
          </h3>
          <p className="text-muted-foreground mb-6">
            We're having trouble connecting to our AI service. You can proceed with generating your letter.
          </p>
          <Button
            onClick={() => {
              analytics.trackEvent(GA_EVENTS.TDLG_NO_QUESTIONS_CONTINUE_CLICKED);
              onSubmit({});
            }}
            className="pill bg-primary text-white hover:opacity-90"
          >
            Continue to letter creation
          </Button>
        </div>
      </div>
    );
  }

  if (!isLoading && followUpQuestions.length === 0 && !error && hasInitialized) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-accent-light/50 rounded-xl p-6 max-w-xl text-center">
          <h3 className="text-lg font-medium mb-2">No additional questions needed</h3>
          <p className="text-muted-foreground mb-6">
            We have enough information to proceed with creating your letter.
          </p>
          <Button
            onClick={() => {
              analytics.trackEvent(GA_EVENTS.TDLG_NO_QUESTIONS_CONTINUE_CLICKED);
              onSubmit({});
            }}
            className="pill bg-primary text-white hover:opacity-90"
          >
            Continue to letter creation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <h3 className="text-xl font-medium">Additional information</h3>

      <div className="space-y-8">
        <AnimatePresence initial={false}>
          {followUpQuestions.map((question) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-2"
            >
              <div className="space-y-2">
                <Label htmlFor={question.id} className="text-lg font-medium">
                  {question.question}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {question.context}
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                {browserSupportsSpeechRecognition && (
                  <VoiceInput
                    isListening={listening && activeField === question.id}
                    onToggle={() => handleVoiceInput(question.id)}
                    className="mt-2"
                  />
                )}
                <div className="flex-1">
                  <Textarea
                    id={question.id}
                    {...register(question.id)}
                    className="bg-white focus:ring-accent focus:border-accent"
                    rows={4}
                    dir="auto"
                    lang={navigator.language}
                    spellCheck="false"
                  />
                </div>
              </div>
              {listening && activeField === question.id && (
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {transcript || 'Listening to your voice input...'}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="pill bg-primary text-white hover:opacity-90"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}