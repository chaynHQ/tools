"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { clientConfig } from '@/lib/rollbar';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import Rollbar from 'rollbar';
import { QuestionSection } from './question-section';
import { SelectableCard } from './selectable-card';
import { VoiceInput } from './voice-input';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

interface InitialQuestionsForm {
  contentLocationType: 'url' | 'description';
  contentUrl?: string;
  contentDescription?: string;
  contentType: 'intimate' | 'personal' | 'private' | 'other';
  contentContext: 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
  imageUploadDate: string;
  imageTakenDate: string;
  ownershipEvidence: string;
  impactStatement: string;
}

interface InitialQuestionsProps {
  onComplete: () => void;
}

const contentTypes = [
  { 
    value: 'intimate', 
    label: 'Intimate images',
    description: 'Photos or videos of a private nature'
  },
  { 
    value: 'personal', 
    label: 'Personal content',
    description: 'Non-intimate photos or videos shared without permission'
  },
  { 
    value: 'private', 
    label: 'Private information',
    description: 'Personal documents or identifying details'
  },
  { 
    value: 'other', 
    label: 'Other content',
    description: 'Content that violates your privacy in other ways'
  }
];

const contentContexts = [
  { 
    value: 'hacked', 
    label: 'Account was compromised',
    description: 'Content was accessed without authorisation'
  },
  { 
    value: 'impersonation', 
    label: 'Someone is impersonating me',
    description: 'Content posted by someone pretending to be you'
  },
  { 
    value: 'relationship', 
    label: 'Posted by someone I know',
    description: 'Content shared by a known person'
  },
  { 
    value: 'unknown', 
    label: 'Source unknown',
    description: 'Not sure who shared the content'
  },
  { 
    value: 'other', 
    label: 'Other situation',
    description: 'Different from the options above'
  }
];

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

export function InitialQuestions({ onComplete }: InitialQuestionsProps) {
  const startTime = useState(() => Date.now())[0];
  const [activeField, setActiveField] = useState<keyof InitialQuestionsForm | null>(null);
  const { control, register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<InitialQuestionsForm>({
    defaultValues: {
      contentLocationType: 'url'
    }
  });
  const { formState, setInitialQuestions } = useFormContext();
  const contentLocationType = watch('contentLocationType');
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (formState.initialQuestions && Object.keys(formState.initialQuestions).length > 0) {
      const savedData = formState.initialQuestions;
      const isUrl = savedData.imageIdentification?.startsWith('http');
      
      reset({
        ...savedData,
        contentLocationType: isUrl ? 'url' : 'description',
        contentUrl: isUrl ? savedData.imageIdentification : undefined,
        contentDescription: !isUrl ? savedData.imageIdentification : undefined
      });
    }
  }, [formState.initialQuestions, reset]);

  useEffect(() => {
    if (transcript && activeField) {
      setValue(activeField, transcript);
    }
  }, [transcript, activeField, setValue]);

  const handleVoiceInput = (field: keyof InitialQuestionsForm) => {
    if (listening && activeField === field) {
      SpeechRecognition.stopListening();
      resetTranscript();
      setActiveField(null);
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
  };

  const handleFormSubmit = (data: InitialQuestionsForm) => {
    try {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      analytics.trackInitialQuestionsCompleted(timeSpent);

      setInitialQuestions(data);
      onComplete();
    } catch (error) {
      rollbar.error('Error submitting initial questions', {
        error,
        component: 'InitialQuestions'
      });
      toast({
        title: "Error saving responses",
        description: "There was a problem saving your responses. Please try again.",
        variant: "destructive"
      });
    }
  };

  const inputClasses = "bg-white focus:ring-accent focus:border-accent w-full min-h-[80px] text-base px-4 py-3";
  const textareaClasses = "bg-white focus:ring-accent focus:border-accent w-full min-h-[120px] text-base";

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-12">
      <QuestionSection title="Content information">
        <p className="text-muted-foreground mb-8">
          The first three questions help us understand your situation and create an effective takedown request. 
          Your answers will be used to identify specific policy violations and strengthen your case.
        </p>
        
        <div className="space-y-8">
          <div className="space-y-3">
            <Label className="text-lg font-medium">
              What type of content was shared?*
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <Controller
                name="contentType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    {contentTypes.map((type) => (
                      <SelectableCard
                        key={type.value}
                        value={type.value}
                        label={type.label}
                        description={type.description}
                        selected={field.value === type.value}
                        onClick={() => field.onChange(type.value)}
                      />
                    ))}
                  </>
                )}
              />
            </div>
            {errors.contentType && (
              <p className="text-sm text-destructive">
                Knowing the type of content helps us identify which platform policies have been violated and how to best support your request.
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-medium">
              How was the content shared?*
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <Controller
                name="contentContext"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    {contentContexts.map((context) => (
                      <SelectableCard
                        key={context.value}
                        value={context.value}
                        label={context.label}
                        description={context.description}
                        selected={field.value === context.value}
                        onClick={() => field.onChange(context.value)}
                      />
                    ))}
                  </>
                )}
              />
            </div>
            {errors.contentContext && (
              <p className="text-sm text-destructive">
                Understanding how the content was shared helps us address specific privacy violations in your takedown request.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">
              Where can the content be found?*
            </Label>
            <div className="space-y-4">
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    {...register('contentLocationType')}
                    value="url"
                    className="mr-2"
                  />
                  I have the URL
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    {...register('contentLocationType')}
                    value="description"
                    className="mr-2"
                  />
                  I need to describe the location
                </label>
              </div>

              {contentLocationType === 'url' ? (
                <div className="space-y-2">
                  <Input
                    type="url"
                    {...register('contentUrl', {
                      required: 'Please provide the URL where the content can be found',
                      pattern: {
                        value: /^https?:\/\/.+/i,
                        message: 'Please enter a valid URL starting with http:// or https://'
                      }
                    })}
                    placeholder="https://example.com/content"
                    className="bg-white focus:ring-accent focus:border-accent"
                  />
                  {errors.contentUrl && (
                    <p className="text-sm text-destructive">{errors.contentUrl.message}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    {browserSupportsSpeechRecognition && (
                      <VoiceInput
                        isListening={listening && activeField === 'contentDescription'}
                        onToggle={() => handleVoiceInput('contentDescription')}
                        className="mt-2"
                      />
                    )}
                    <div className="flex-1">
                      <Textarea
                        {...register('contentDescription', {
                          required: 'Please describe where the content can be found'
                        })}
                        placeholder="For example: 'The content appears in posts by the user @username' or 'The content is in an album titled...'"
                        className={textareaClasses}
                        rows={4}
                        dir="auto"
                        lang={navigator.language}
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  {errors.contentDescription && (
                    <p className="text-sm text-destructive">{errors.contentDescription.message}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </QuestionSection>

      <QuestionSection title="Timeline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="imageUploadDate" className="text-lg font-medium">
              When was the content uploaded?
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              If known, when did you first discover the content online?
            </p>
            <div className="flex items-start gap-3">
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === 'imageUploadDate'}
                  onToggle={() => handleVoiceInput('imageUploadDate')}
                />
              )}
              <div className="flex-1">
                <Textarea
                  id="imageUploadDate"
                  {...register('imageUploadDate')}
                  placeholder="For example: 'Two weeks ago' or '15 January 2024'"
                  className={textareaClasses}
                  rows={2}
                  dir="auto"
                  lang={navigator.language}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageTakenDate" className="text-lg font-medium">
              When was the content created?
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              This helps establish a timeline and verify ownership.
            </p>
            <div className="flex items-start gap-3">
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === 'imageTakenDate'}
                  onToggle={() => handleVoiceInput('imageTakenDate')}
                />
              )}
              <div className="flex-1">
                <Textarea
                  id="imageTakenDate"
                  {...register('imageTakenDate')}
                  placeholder="For example: 'June 2023' or 'Around summer last year'"
                  className={textareaClasses}
                  rows={2}
                  dir="auto"
                  lang={navigator.language}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
      </QuestionSection>

      <QuestionSection title="Verification">
        <div className="space-y-2">
          <Label htmlFor="ownershipEvidence" className="text-lg font-medium">
            How can you verify this content is of you?
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Describe any evidence that proves your connection to the content.
          </p>
          <div className="flex items-start gap-3">
            {browserSupportsSpeechRecognition && (
              <VoiceInput
                isListening={listening && activeField === 'ownershipEvidence'}
                onToggle={() => handleVoiceInput('ownershipEvidence')}
                className="mt-2"
              />
            )}
            <div className="flex-1">
              <Textarea
                id="ownershipEvidence"
                {...register('ownershipEvidence')}
                placeholder="For example: 'I can be identified by specific features' or 'I have the original files'"
                className={textareaClasses}
                rows={4}
                dir="auto"
                lang={navigator.language}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </QuestionSection>

      <QuestionSection title="Impact">
        <div className="space-y-2">
          <Label htmlFor="impactStatement" className="text-lg font-medium">
            How is this affecting you?
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Explaining the impact helps convey the urgency of removal. Share only what you're comfortable with.
          </p>
          <div className="flex items-start gap-3">
            {browserSupportsSpeechRecognition && (
              <VoiceInput
                isListening={listening && activeField === 'impactStatement'}
                onToggle={() => handleVoiceInput('impactStatement')}
                className="mt-2"
              />
            )}
            <div className="flex-1">
              <Textarea
                id="impactStatement"
                {...register('impactStatement')}
                placeholder="For example: 'This has affected my personal and professional life by...'"
                className={textareaClasses}
                rows={4}
                dir="auto"
                lang={navigator.language}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
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