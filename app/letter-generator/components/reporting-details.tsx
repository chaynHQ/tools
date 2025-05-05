"use client";

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { clientConfig } from '@/lib/rollbar';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Rollbar from 'rollbar';
import { VoiceInput } from './voice-input';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

// Common languages that might be used
const SUPPORTED_LANGUAGES = [
  'en-US', // English
  'es-ES', // Spanish
  'fr-FR', // French
  'de-DE', // German
  'it-IT', // Italian
  'pt-PT', // Portuguese
  'hi-IN', // Hindi
  'ar-SA', // Arabic
  'zh-CN', // Chinese (Simplified)
  'ja-JP', // Japanese
  'ko-KR', // Korean
  'ru-RU', // Russian
];

interface ReportingDetailsForm {
  standardProcessDetails?: string;
  escalatedProcessDetails?: string;
  responseReceived?: string;
  additionalStepsTaken?: string;
}

interface ReportingDetailsProps {
  onComplete: () => void;
}

export function ReportingDetails({ onComplete }: ReportingDetailsProps) {
  const startTime = useState(() => Date.now())[0];
  const [activeField, setActiveField] = useState<keyof ReportingDetailsForm | null>(null);
  const { register, handleSubmit, setValue, reset } = useForm<ReportingDetailsForm>();
  const { formState, setReportingDetails } = useFormContext();
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Set form values from context when component mounts
  useEffect(() => {
    if (formState.reportingDetails && Object.keys(formState.reportingDetails).length > 0) {
      reset(formState.reportingDetails as ReportingDetailsForm);
    }
  }, [formState.reportingDetails, reset]);

  useEffect(() => {
    if (transcript && activeField) {
      setValue(activeField, transcript);
    }
  }, [transcript, activeField, setValue]);

  const handleVoiceInput = (field: keyof ReportingDetailsForm) => {
    try {
      if (listening && activeField === field) {
        SpeechRecognition.stopListening();
        resetTranscript();
        setActiveField(null);
        
        // Track successful voice input completion
        analytics.trackEvent('TDLG_VOICE_INPUT_USED', {
          field,
          success: true,
          component: 'ReportingDetails'
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
      }
    } catch (error) {
      rollbar.error('Error handling voice input', {
        error,
        component: 'ReportingDetails',
        field
      });
      
      // Track failed voice input attempt
      analytics.trackEvent('TDLG_VOICE_INPUT_USED', {
        field,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        component: 'ReportingDetails'
      });
      
      toast({
        title: "Voice input error",
        description: "There was a problem with the voice input. Please try typing instead.",
        variant: "destructive"
      });
    }
  };
  
  // If no processes were completed, don't render anything
  if (formState.reportingInfo?.status === 'none-completed') {
    return null;
  }

  const handleFormSubmit = (data: ReportingDetailsForm) => {
    try {
      analytics.trackEvent(GA_EVENTS.TDLG_REPORTING_DETAILS_CONTINUE_CLICKED);
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      analytics.trackReportingQuestionsCompleted(timeSpent);
      setReportingDetails(data);
      onComplete();
    } catch (error) {
      rollbar.error('Error submitting reporting details', {
        error,
        component: 'ReportingDetails'
      });
      toast({
        title: "Error saving responses",
        description: "There was a problem saving your responses. Please try again.",
        variant: "destructive"
      });
    }
  };

  const showStandardQuestions = ['standard-completed', 'both-completed'].includes(formState.reportingInfo?.status || '');
  const showEscalatedQuestions = ['escalated-completed', 'both-completed'].includes(formState.reportingInfo?.status || '');

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="space-y-12">
        {showStandardQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-medium mb-6">Standard Reporting Process Details</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="standardProcessDetails" className="text-lg font-medium">
                  What steps did you take using the standard reporting process?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Please describe the actions you took and any responses you received.
                </p>
                <div className="flex items-start gap-3">
                  {browserSupportsSpeechRecognition && (
                    <VoiceInput
                      isListening={listening && activeField === 'standardProcessDetails'}
                      onToggle={() => handleVoiceInput('standardProcessDetails')}
                      className="mt-2"
                    />
                  )}
                  <div className="flex-1">
                    <Textarea
                      id="standardProcessDetails"
                      {...register('standardProcessDetails')}
                      placeholder="For example: 'I reported the content through the platform's reporting tool on [date]...'"
                      className="bg-white focus:ring-accent focus:border-accent"
                      rows={4}
                      dir="auto"
                      lang={navigator.language}
                      spellCheck="false"
                    />
                  </div>
                </div>
                {listening && activeField === 'standardProcessDetails' && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    {transcript || 'Listening to your voice input...'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {showEscalatedQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-medium mb-6">Escalated Support Process Details</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="escalatedProcessDetails" className="text-lg font-medium">
                  What steps did you take using the escalated support process?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Please describe the additional steps you took through the escalated support channels.
                </p>
                <div className="flex items-start gap-3">
                  {browserSupportsSpeechRecognition && (
                    <VoiceInput
                      isListening={listening && activeField === 'escalatedProcessDetails'}
                      onToggle={() => handleVoiceInput('escalatedProcessDetails')}
                       className="mt-2"
                    />
                  )}
                  <div className="flex-1">
                    <Textarea
                      id="escalatedProcessDetails"
                      {...register('escalatedProcessDetails')}
                      placeholder="For example: 'I submitted a detailed report through the platform's support form...'"
                      className="bg-white focus:ring-accent focus:border-accent"
                      rows={4}
                      dir="auto"
                      lang={navigator.language}
                      spellCheck="false"
                    />
                  </div>
                </div>
                {listening && activeField === 'escalatedProcessDetails' && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    {transcript || 'Listening to your voice input...'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {(showStandardQuestions || showEscalatedQuestions) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-medium mb-6">Platform Response</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="responseReceived" className="text-lg font-medium">
                  What response did you receive from the platform?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Include any communication or decisions you received from the platform.
                </p>
                <div className="flex items-start gap-3">
                  {browserSupportsSpeechRecognition && (
                    <VoiceInput
                      isListening={listening && activeField === 'responseReceived'}
                      onToggle={() => handleVoiceInput('responseReceived')}
                      className="mt-2"
                    />
                  )}
                  <div className="flex-1">
                    <Textarea
                      id="responseReceived"
                      {...register('responseReceived')}
                      placeholder="For example: 'The platform responded on [date] stating...'"
                      className="bg-white focus:ring-accent focus:border-accent"
                      rows={4}
                      dir="auto"
                      lang={navigator.language}
                      spellCheck="false"
                    />
                  </div>
                </div>
                {listening && activeField === 'responseReceived' && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    {transcript || 'Listening to your voice input...'}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalStepsTaken" className="text-lg font-medium">
                  Have you taken any other actions since then?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Share any follow-up actions or attempts that could be relevant to your letter.
                </p>
                <div className="flex items-start gap-3">
                  {browserSupportsSpeechRecognition && (
                    <VoiceInput
                      isListening={listening && activeField === 'additionalStepsTaken'}
                      onToggle={() => handleVoiceInput('additionalStepsTaken')}
                      className="mt-2"
                    />
                  )}
                  <div className="flex-1">
                    <Textarea
                      id="additionalStepsTaken"
                      {...register('additionalStepsTaken')}
                      placeholder="For example: 'After receiving their response, I...'"
                      className="bg-white focus:ring-accent focus:border-accent"
                      rows={4}
                      dir="auto"
                      lang={navigator.language}
                      spellCheck="false"
                    />
                  </div>
                </div>
                {listening && activeField === 'additionalStepsTaken' && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    {transcript || 'Listening to your voice input...'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="pill bg-primary text-white hover:opacity-90">
          Continue
        </Button>
      </div>
    </form>
  );
}