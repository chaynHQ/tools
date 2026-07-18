'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useMicrophonePermission } from '@/hooks/use-microphone-permission';
import { useSpeechRecognitionError } from '@/hooks/use-speech-recognition-error';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { contentContexts, contentTypes } from '@/lib/constants/content';
import { useFormContext } from '@/lib/context/FormContext';
import { rollbar } from '@/lib/rollbar';
import { isValidUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import { QuestionSection } from './question-section';
import { SelectableCard } from './selectable-card';
import { VoiceInput } from './voice-input';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

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
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<InitialQuestionsForm>({
    defaultValues: {
      contentLocationType: 'url',
    },
  });
  const { formState, setInitialQuestions } = useFormContext();
  const contentLocationType = watch('contentLocationType');

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const { permissionState, requestPermission } = useMicrophonePermission();

  // Handle speech recognition errors (e.g., permission denied)
  useSpeechRecognitionError({
    browserSupported: browserSupportsSpeechRecognition,
    onError: () => {
      toast({
        title: 'Microphone access denied',
        description:
          'Please allow microphone access in your browser settings to use voice input.',
        variant: 'destructive',
      });
      setActiveField(null);
      SpeechRecognition.stopListening();
      resetTranscript();
    },
  });

  useEffect(() => {
    if (formState.initialQuestions && Object.keys(formState.initialQuestions).length > 0) {
      const savedData = formState.initialQuestions;
      const isUrl = savedData.imageIdentification?.startsWith('http');

      reset({
        ...savedData,
        contentLocationType: isUrl ? 'url' : 'description',
        contentUrl: isUrl ? savedData.imageIdentification : undefined,
        contentDescription: !isUrl ? savedData.imageIdentification : undefined,
      });
    }
  }, [formState.initialQuestions, reset]);

  useEffect(() => {
    if (transcript && activeField) {
      setValue(activeField, transcript);
    }
  }, [transcript, activeField, setValue]);

  const handleVoiceInput = async (field: keyof InitialQuestionsForm) => {
    try {
      if (listening && activeField === field) {
        SpeechRecognition.stopListening();
        resetTranscript();
        setActiveField(null);

        analytics.trackEvent(GA_EVENTS.TDLG_VOICE_INPUT_USED, {
          field,
          success: true,
          component: 'InitialQuestions',
        });
      } else {
        // Check if we need to request permission
        if (permissionState === 'denied') {
          toast({
            title: 'Microphone access blocked',
            description:
              'Microphone access is blocked. Please enable it in your browser settings to use voice input.',
            variant: 'destructive',
          });
          return;
        }

        // If permission is prompt, try to request it
        if (permissionState === 'prompt') {
          const granted = await requestPermission();
          if (!granted) {
            toast({
              title: 'Microphone access denied',
              description:
                'Please allow microphone access in your browser settings to use voice input.',
              variant: 'destructive',
            });
            return;
          }
        }

        setActiveField(field);
        resetTranscript();
        const browserLang = navigator.language;
        const supportedLang =
          SUPPORTED_LANGUAGES.find((lang) =>
            browserLang.toLowerCase().startsWith(lang.toLowerCase().split('-')[0]),
          ) || 'en-US';

        try {
          await SpeechRecognition.startListening({
            continuous: true,
            language: supportedLang,
          });
        } catch (listenError) {
          // Speech recognition failed to start (likely permission issue)
          setActiveField(null);
          toast({
            title: 'Microphone access denied',
            description:
              'Could not start voice input. Please allow microphone access in your browser.',
            variant: 'destructive',
          });
          throw listenError;
        }
      }
    } catch (error) {
      rollbar.error('Error handling voice input', {
        error,
        component: 'InitialQuestions',
        field,
      });

      analytics.trackEvent(GA_EVENTS.TDLG_VOICE_INPUT_USED, {
        field,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        component: 'InitialQuestions',
      });

      toast({
        title: 'Voice input error',
        description: 'There was a problem with the voice input. Please try typing instead.',
        variant: 'destructive',
      });
    }
  };

  const handleFormSubmit = (data: InitialQuestionsForm) => {
    try {
      analytics.trackEvent(GA_EVENTS.TDLG_INITIAL_QUESTIONS_CONTINUE_CLICKED);

      const imageIdentification =
        data.contentLocationType === 'url' ? data.contentUrl : data.contentDescription;

      const cleanData = {
        contentLocationType: data.contentLocationType,
        contentUrl: data.contentUrl,
        contentDescription: data.contentDescription,
        contentType: data.contentType,
        contentContext: data.contentContext,
        imageIdentification,
        imageUploadDate: data.imageUploadDate,
        imageTakenDate: data.imageTakenDate,
        ownershipEvidence: data.ownershipEvidence,
        impactStatement: data.impactStatement,
      };

      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      analytics.trackInitialQuestionsCompleted(timeSpent);

      setInitialQuestions(cleanData);
      onComplete();
    } catch (error) {
      rollbar.error('Error submitting initial questions', {
        error,
        component: 'InitialQuestions',
      });
      toast({
        title: 'Error saving responses',
        description: 'There was a problem saving your responses. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const textareaClasses =
    'bg-white focus:ring-accent focus:border-accent w-full min-h-[120px] text-base';

  const platformDomain = formState.platformInfo?.isCustom
    ? formState.platformInfo?.customName?.toLowerCase().replaceAll(' ', '')
    : formState.platformInfo?.platformId;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-12">
      <QuestionSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <p id="content-type-label" className="text-lg font-medium">
                What type of content was shared?*
              </p>
              <Controller
                name="contentType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroupPrimitive.Root
                    value={field.value || ''}
                    onValueChange={field.onChange}
                    aria-labelledby="content-type-label"
                    className="grid grid-cols-2 gap-3 mt-4"
                  >
                    {contentTypes.map((type) => (
                      <SelectableCard
                        key={type.value}
                        value={type.value}
                        label={type.label}
                        description={type.description}
                      />
                    ))}
                  </RadioGroupPrimitive.Root>
                )}
              />
              {errors.contentType && (
                <p className="text-sm text-destructive">
                  Knowing the type of content helps us identify which platform policies have been
                  violated and how to best support your request.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p id="content-context-label" className="text-lg font-medium">
                How was the content shared?*
              </p>
              <Controller
                name="contentContext"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroupPrimitive.Root
                    value={field.value || ''}
                    onValueChange={field.onChange}
                    aria-labelledby="content-context-label"
                    className="grid grid-cols-2 gap-3 mt-4"
                  >
                    {contentContexts.map((context) => (
                      <SelectableCard
                        key={context.value}
                        value={context.value}
                        label={context.label}
                        description={context.description}
                      />
                    ))}
                  </RadioGroupPrimitive.Root>
                )}
              />
              {errors.contentContext && (
                <p className="text-sm text-destructive">
                  Understanding how the content was shared helps us address specific privacy
                  violations in your takedown request.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <p id="content-location-label" className="text-lg font-medium">
                Where can the content be found?*
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex gap-4" role="radiogroup" aria-labelledby="content-location-label">
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
                      id="contentUrl"
                      type="text"
                      aria-label="URL where the content can be found"
                      {...register('contentUrl', {
                        required: 'Please provide the URL where the content can be found',
                        validate: {
                          isValidUrl: (value) =>
                            isValidUrl(value || '') || 'Please enter a valid URL',
                        },
                      })}
                      placeholder={`${platformDomain}.com/content or https://www.${platformDomain}.com/content`}
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
                          id="contentDescription"
                          aria-label="Describe where the content can be found"
                          {...register('contentDescription', {
                            required: 'Please describe where the content can be found',
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
                      <p className="text-sm text-destructive">
                        {errors.contentDescription.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </QuestionSection>

      <QuestionSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
                  placeholder="For example: 'June 2023' or 'Summer last year'"
                  className={textareaClasses}
                  rows={2}
                  dir="auto"
                  lang={navigator.language}
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </QuestionSection>

      <QuestionSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
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
        </motion.div>
      </QuestionSection>

      <QuestionSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="impactStatement" className="text-lg font-medium">
            How is this affecting you?
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Explaining the impact helps convey the urgency of removal. To protect your privacy, we
            may help summarise this for the final letter.
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
        </motion.div>
      </QuestionSection>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-end"
      >
        <Button type="submit" className="pill bg-primary text-white hover:opacity-90">
          Continue
        </Button>
      </motion.div>
    </form>
  );
}
