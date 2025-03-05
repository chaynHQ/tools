"use client";

import { FollowUpQuestion } from '@/types/questions';
import { createContext, ReactNode, useContext, useState } from 'react';

// Define types for our form data
interface PlatformInfo {
  platformId: string;
  platformName: string;
  isCustom: boolean;
  customName?: string;
}

interface ReportingInfo {
  status: 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null;
}

interface InitialQuestionsData {
  imageIdentification: string;
  contentType: 'intimate' | 'personal' | 'private' | 'other';
  contentContext: 'hacked' | 'impersonation' | 'relationship' | 'unknown' | 'other';
  imageUploadDate: string;
  imageTakenDate: string;
  ownershipEvidence: string;
  impactStatement: string;
}

interface ReportingDetailsData {
  standardProcessDetails?: string;
  escalatedProcessDetails?: string;
  responseReceived?: string;
  additionalStepsTaken?: string;
}

interface FollowUpData {
  questions: FollowUpQuestion[];
  answers: Record<string, string>;
}

interface FormState {
  platformInfo: PlatformInfo | null;
  reportingInfo: ReportingInfo | null;
  initialQuestions: Partial<InitialQuestionsData>;
  reportingDetails: Partial<ReportingDetailsData>;
  followUpData: FollowUpData;
  completeFormData: any; // Store the complete form data for API calls
}

interface FormContextType {
  formState: FormState;
  setPlatformInfo: (info: PlatformInfo) => void;
  setReportingInfo: (info: ReportingInfo) => void;
  setInitialQuestions: (data: Partial<InitialQuestionsData>) => void;
  setReportingDetails: (data: Partial<ReportingDetailsData>) => void;
  setFollowUpData: (questions: FollowUpQuestion[], answers: Record<string, string>) => void;
  updateCompleteFormData: () => void;
  resetForm: () => void;
}

// Create initial state
const initialState: FormState = {
  platformInfo: null,
  reportingInfo: null,
  initialQuestions: {},
  reportingDetails: {},
  followUpData: {
    questions: [],
    answers: {}
  },
  completeFormData: null
};

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create provider component
export function FormProvider({ children }: { children: ReactNode }) {
  const [formState, setFormState] = useState<FormState>(initialState);

  const setPlatformInfo = (info: PlatformInfo) => {
    setFormState(prev => ({
      ...prev,
      platformInfo: info,
    }));
  };

  const setReportingInfo = (info: ReportingInfo) => {
    setFormState(prev => ({
      ...prev,
      reportingInfo: info,
    }));
  };

  const setInitialQuestions = (data: Partial<InitialQuestionsData>) => {
    setFormState(prev => ({
      ...prev,
      initialQuestions: {
        ...prev.initialQuestions,
        ...data,
      },
    }));
  };

  const setReportingDetails = (data: Partial<ReportingDetailsData>) => {
    setFormState(prev => ({
      ...prev,
      reportingDetails: {
        ...prev.reportingDetails,
        ...data,
      },
    }));
  };

  const setFollowUpData = (questions: FollowUpQuestion[], answers: Record<string, string>) => {
    setFormState(prev => ({
      ...prev,
      followUpData: {
        questions,
        answers
      },
    }));
  };

  const updateCompleteFormData = () => {
    setFormState(prev => {
      const completeData = {
        initialQuestions: prev.initialQuestions,
        platformInfo: {
          name: prev.platformInfo?.isCustom 
            ? prev.platformInfo.customName 
            : prev.platformInfo?.platformName,
          isCustom: prev.platformInfo?.isCustom || false
        },
        reportingDetails: Object.keys(prev.reportingDetails).length > 0 
          ? prev.reportingDetails 
          : undefined,
        followUp: prev.followUpData.answers
      };
      
      return {
        ...prev,
        completeFormData: completeData
      };
    });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setPlatformInfo,
        setReportingInfo,
        setInitialQuestions,
        setReportingDetails,
        setFollowUpData,
        updateCompleteFormData,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

// Create hook for using the context
export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}