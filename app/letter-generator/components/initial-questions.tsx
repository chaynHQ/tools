"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import { QuestionSection } from './question-section';
import { SelectableCard } from './selectable-card';
import { VoiceInput } from './voice-input';

interface InitialQuestionsForm {
  imageIdentification: string;
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

export function InitialQuestions({ onComplete }: InitialQuestionsProps) {
  const startTime = useState(() => Date.now())[0];
  const [activeField, setActiveField] = useState<keyof InitialQuestionsForm | null>(null);
  const { control, register, handleSubmit, setValue, reset, formState: { errors } } = useForm<InitialQuestionsForm>();
  const { formState, setInitialQuestions } = useFormContext();

  useEffect(() => {
    if (formState.initialQuestions && Object.keys(formState.initialQuestions).length > 0) {
      reset(formState.initialQuestions as InitialQuestionsForm);
    }
  }, [formState.initialQuestions, reset]);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

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
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleFormSubmit = (data: InitialQuestionsForm) => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    analytics.trackQuestionsCompleted('initial', timeSpent);
    setInitialQuestions(data);
    onComplete();
  };

  const inputClasses = "bg-white focus:ring-accent focus:border-accent";
  const micButtonClasses = "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-accent-light/50";

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

          <div className="space-y-2">
            <Label htmlFor="imageIdentification" className="text-lg font-medium">
              Where can the content be found?*
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              Please provide specific information that will help locate the content, such as URLs or post details.
            </p>
            <div className="relative">
              <Textarea
                id="imageIdentification"
                {...register('imageIdentification', { required: true })}
                placeholder="For example: 'The content appears at [URL] posted on [date]'"
                className={`${inputClasses} pr-12`}
                rows={4}
              />
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === 'imageIdentification'}
                  onToggle={() => handleVoiceInput('imageIdentification')}
                  className={micButtonClasses}
                />
              )}
            </div>
            {errors.imageIdentification && (
              <p className="text-sm text-destructive">
                Having specific details about where to find the content ensures the platform can quickly locate and review the material.
              </p>
            )}
          </div>
        </div>
      </QuestionSection>

      <QuestionSection title="Timeline">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="imageUploadDate" className="text-lg font-medium">
              When was the content uploaded?
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              If known, when did you first discover the content online?
            </p>
            <div className="relative">
              <Input
                id="imageUploadDate"
                type="text"
                {...register('imageUploadDate')}
                placeholder="For example: 'Two weeks ago' or '15 January 2024'"
                className={`${inputClasses} pr-12`}
              />
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === 'imageUploadDate'}
                  onToggle={() => handleVoiceInput('imageUploadDate')}
                  className={micButtonClasses}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageTakenDate" className="text-lg font-medium">
              When was the content created?
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              This helps establish a timeline and verify ownership.
            </p>
            <div className="relative">
              <Input
                id="imageTakenDate"
                type="text"
                {...register('imageTakenDate')}
                placeholder="For example: 'June 2023' or 'Around summer last year'"
                className={`${inputClasses} pr-12`}
              />
              {browserSupportsSpeechRecognition && (
                <VoiceInput
                  isListening={listening && activeField === 'imageTakenDate'}
                  onToggle={() => handleVoiceInput('imageTakenDate')}
                  className={micButtonClasses}
                />
              )}
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
          <div className="relative">
            <Textarea
              id="ownershipEvidence"
              {...register('ownershipEvidence')}
              placeholder="For example: 'I can be identified by specific features' or 'I have the original files'"
              className={`${inputClasses} pr-12`}
              rows={4}
            />
            {browserSupportsSpeechRecognition && (
              <VoiceInput
                isListening={listening && activeField === 'ownershipEvidence'}
                onToggle={() => handleVoiceInput('ownershipEvidence')}
                className={micButtonClasses}
              />
            )}
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
          <div className="relative">
            <Textarea
              id="impactStatement"
              {...register('impactStatement')}
              placeholder="For example: 'This has affected my personal and professional life by...'"
              className={`${inputClasses} pr-12`}
              rows={4}
            />
            {browserSupportsSpeechRecognition && (
              <VoiceInput
                isListening={listening && activeField === 'impactStatement'}
                onToggle={() => handleVoiceInput('impactStatement')}
                className={micButtonClasses}
              />
            )}
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