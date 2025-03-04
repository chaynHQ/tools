"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateFollowUpQuestions } from '@/lib/ai';
import { FollowUpQuestion } from '@/types/questions';
import { motion } from 'framer-motion';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { QuestionSection } from './components/question-section';
import { VoiceInput } from './components/voice-input';
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';

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
  const [isLoading, setIsLoading] = useState(true);
  const [followUpQuestions, setFollowUpQuestions] = useState<FollowUpQuestion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const { register, handleSubmit, setValue, reset } = useForm<FollowUpQuestionsForm>({
    defaultValues: savedData
  });
  const { toast } = useToast();
  const fetchController = useRef<AbortController | null>(null);
  const isMounted = useRef(true);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Set form values from savedData when component mounts
  useEffect(() => {
    if (savedData && Object.keys(savedData).length > 0) {
      reset(savedData);
    }
  }, [savedData, reset]);

  useEffect(() => {
    if (transcript && activeField) {
      setValue(activeField, transcript);
    }
  }, [transcript, activeField, setValue]);

  const fetchQuestions = async () => {
    // Cancel any in-flight request
    if (fetchController.current) {
      fetchController.current.abort();
    }

    // Create new controller for this request
    fetchController.current = new AbortController();
    
    setIsLoading(true);
    setError(null);
    
    try {
      const questions = await generateFollowUpQuestions(initialData);
      if (!isMounted.current) return;
      
      setFollowUpQuestions(questions);
      setRetryCount(0);
    } catch (error) {
      if (!isMounted.current) return;
      
      // Ignore aborted requests
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      
      const message = error instanceof Error 
        ? error.message 
        : 'We encountered a problem analysing your responses.';
      
      analytics.trackError('follow_up_generation', message, 'FollowUpQuestions');
      setError(message);
      toast({
        title: "Unable to generate follow-up questions",
        description: "You can try again or proceed to the next step.",
        variant: "destructive"
      });
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();

    return () => {
      isMounted.current = false;
      if (fetchController.current) {
        fetchController.current.abort();
      }
    };
  }, [initialData, toast]);

  const handleVoiceInput = (field: string) => {
    if (listening && activeField === field) {
      SpeechRecognition.stopListening();
      resetTranscript();
      setActiveField(null);
    } else {
      setActiveField(field);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleFormSubmit = (data: FollowUpQuestionsForm) => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    analytics.trackQuestionsCompleted('follow_up', timeSpent);
    onSubmit(data);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-accent-light/30 rounded-xl p-6 max-w-xl text-center">
          <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-primary" />
          <h3 className="text-lg font-medium mb-2">Creating personalised questions</h3>
          <p className="text-muted-foreground">
            We're tailoring additional questions based on your responses to help create the most effective takedown letter for your situation.
          </p>
        </div>
      </div>
    );
  }

  if (error || followUpQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-accent-light/50 rounded-xl p-6 max-w-xl text-center">
          <AlertCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-medium mb-2">
            {error ? 'Unable to generate follow-up questions' : 'No additional questions needed'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {error
              ? "We're having trouble connecting to our AI service. You can try again or proceed with generating your letter."
              : "We have enough information to proceed with creating your letter."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {error && retryCount < 3 && (
              <Button
                onClick={fetchQuestions}
                variant="outline"
                className="pill"
              >
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Try again
              </Button>
            )}
            <Button
              onClick={() => onSubmit({})}
              className="pill bg-primary text-white hover:opacity-90"
            >
              Continue to letter creation
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <QuestionSection title="Additional Information">
        {followUpQuestions.map((question) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            
            <div className="relative">
              <Textarea
                id={question.id}
                {...register(question.id)}
                className="bg-white focus:ring-accent focus:border-accent pr-12"
                rows={4}
              />
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === question.id}
                  onToggle={() => handleVoiceInput(question.id)}
                  className="absolute right-2 top-2 h-8 w-8 hover:bg-accent-light/50"
                />
              )}
            </div>
            {listening && activeField === question.id && (
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {transcript || 'Listening to your voice input...'}
              </p>
            )}
          </motion.div>
        ))}
      </QuestionSection>

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