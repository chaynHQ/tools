"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface ReportingDetailsForm {
  standardProcessDetails?: string;
  escalatedProcessDetails?: string;
  responseReceived?: string;
  additionalStepsTaken?: string;
}

interface ReportingDetailsProps {
  onSubmit: (data: ReportingDetailsForm) => void;
  reportingStatus: 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed';
}

export function ReportingDetails({ onSubmit, reportingStatus }: ReportingDetailsProps) {
  const { register, handleSubmit } = useForm<ReportingDetailsForm>();
  
  const showStandardQuestions = ['standard-completed', 'both-completed'].includes(reportingStatus);
  const showEscalatedQuestions = ['escalated-completed', 'both-completed'].includes(reportingStatus);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                  Please describe the actions you took and any responses received.
                </p>
                <Textarea
                  id="standardProcessDetails"
                  {...register('standardProcessDetails')}
                  placeholder="e.g., 'I reported the content through the platform's reporting tool on [date]...'"
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
                  placeholder="e.g., 'I submitted a detailed report through the platform's support form...'"
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
                  Include any communication or decisions received from the platform.
                </p>
                <Textarea
                  id="responseReceived"
                  {...register('responseReceived')}
                  placeholder="e.g., 'The platform responded on [date] stating...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalStepsTaken" className="text-lg font-medium">
                  What additional steps have you taken since then?
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Describe any follow-up actions or attempts to resolve the issue.
                </p>
                <Textarea
                  id="additionalStepsTaken"
                  {...register('additionalStepsTaken')}
                  placeholder="e.g., 'After receiving their response, I...'"
                  className="bg-white focus:ring-accent focus:border-accent"
                  rows={4}
                />
              </div>
            </div>
          </motion.div>
        )}

        {!showStandardQuestions && !showEscalatedQuestions && (
          <div className="bg-accent-light/50 rounded-xl p-4">
            <div className="flex items-start gap-3 text-muted-foreground">
              <AlertCircle className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>
                Since you haven't completed any reporting processes yet, we'll proceed with creating
                your takedown letter. You can always try the platform's reporting processes later.
              </p>
            </div>
          </div>
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