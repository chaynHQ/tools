"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { useFormContext } from '@/lib/context/FormContext';

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
  const { register, handleSubmit, reset } = useForm<ReportingDetailsForm>();
  const { formState, setReportingDetails } = useFormContext();
  
  // Set form values from context when component mounts
  useEffect(() => {
    if (formState.reportingDetails && Object.keys(formState.reportingDetails).length > 0) {
      reset(formState.reportingDetails as ReportingDetailsForm);
    }
  }, [formState.reportingDetails, reset]);
  
  const showStandardQuestions = ['standard-completed', 'both-completed'].includes(formState.reportingInfo?.status || '');
  const showEscalatedQuestions = ['escalated-completed', 'both-completed'].includes(formState.reportingInfo?.status || '');

  // If no processes were completed, don't render anything
  if (formState.reportingInfo?.status === 'none-completed') {
    return null;
  }

  const handleFormSubmit = (data: ReportingDetailsForm) => {
    setReportingDetails(data);
    onComplete();
  };

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
                <Textarea
                  id="standardProcessDetails"
                  {...register('standardProcessDetails')}
                  placeholder="For example: 'I reported the content through the platform's reporting tool on [date]...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
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
                <Textarea
                  id="escalatedProcessDetails"
                  {...register('escalatedProcessDetails')}
                  placeholder="For example: 'I submitted a detailed report through the platform's support form...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
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
                <Textarea
                  id="responseReceived"
                  {...register('responseReceived')}
                  placeholder="For example: 'The platform responded on [date] stating...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalStepsTaken" className="text-lg font-medium">
                  Have you taken any other actions since then?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Share any follow-up actions or attempts that could be relevant to your letter.
                </p>
                <Textarea
                  id="additionalStepsTaken"
                  {...register('additionalStepsTaken')}
                  placeholder="For example: 'After receiving their response, I...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
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