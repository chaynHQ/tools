"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface FormState {
  platformInfo: PlatformInfo | null;
  reportingInfo: ReportingInfo | null;
  initialQuestions: Partial<InitialQuestionsData>;
  reportingDetails: Partial<ReportingDetailsData>;
  followUpQuestions: Record<string, string>;
}

interface FormContextType {
  formState: FormState;
  setPlatformInfo: (info: PlatformInfo) => void;
  setReportingInfo: (info: ReportingInfo) => void;
  setInitialQuestions: (data: Partial<InitialQuestionsData>) => void;
  setReportingDetails: (data: Partial<ReportingDetailsData>) => void;
  setFollowUpQuestions: (data: Record<string, string>) => void;
  resetForm: () => void;
}

// Create initial state
const initialState: FormState = {
  platformInfo: null,
  reportingInfo: null,
  initialQuestions: {},
  reportingDetails: {},
  followUpQuestions: {},
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

  const setFollowUpQuestions = (data: Record<string, string>) => {
    setFormState(prev => ({
      ...prev,
      followUpQuestions: {
        ...prev.followUpQuestions,
        ...data,
      },
    }));
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
        setFollowUpQuestions,
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