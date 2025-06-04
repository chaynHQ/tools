"use client";

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { platforms } from '@/lib/platforms';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type ReportingStatus = 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null;

interface RemovalProcessProps {
  onComplete: () => void;
}

export function RemovalProcess({ onComplete }: RemovalProcessProps) {
  const [standardOpen, setStandardOpen] = useState(false);
  const [escalatedOpen, setEscalatedOpen] = useState(false);
  const { formState, setReportingInfo } = useFormContext();

  // Initialize status from form context
  const [status, setStatus] = useState<ReportingStatus>(
    formState.reportingInfo?.status || null
  );

  const platform = formState.platformInfo?.isCustom 
    ? null 
    : platforms.find(p => p.id === formState.platformInfo?.platformId);

  const handleStatusChange = (newStatus: ReportingStatus) => {
    setStatus(newStatus);
    if (newStatus) {
      setReportingInfo({ status: newStatus });
      analytics.trackReportingStatus(newStatus);
    }
  };

  const renderProcessSteps = (steps: string[]) => (
    <div className="space-y-0.5">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-3 py-2 pr-4"
        >
          <div className="w-7 h-7 rounded-full bg-accent-light flex items-center justify-center shrink-0 text-sm font-medium text-foreground">
            {index + 1}
          </div>
          <p className="text-sm text-muted-foreground pt-1">{step}</p>
        </div>
      ))}
    </div>
  );

  const getStatusMessage = () => {
    switch (status) {
      case 'standard-completed':
        return {
          message: "You've already taken important steps using the standard process. You might want to try the escalated process as well, or we can help you create a formal letter now.",
          intent: "suggestion"
        };
      case 'escalated-completed':
        return {
          message: "Using the escalated process was a good step. You might also try the standard process, or we can help you create a formal letter now to strengthen your request.",
          intent: "suggestion"
        };
      case 'both-completed':
        return {
          message: "Sorry to hear that following the processes hasn't worked so far. Our Survivor AI can help you generate a formal letter to escalate this issue further.",
          intent: "support"
        };
      case 'none-completed':
        return {
          message: "You can try these platform processes first, or we can help you create a formal letter right away. Choose whatever approach feels right for your situation.",
          intent: "guidance"
        };
      default:
        return null;
    }
  };

  const platformName = platform?.name || formState.platformInfo?.customName || 'this platform';

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-xl font-medium mb-2">Available reporting processes</h2>
        <p className="text-muted-foreground mb-4">
          Below are the official reporting processes available. You can start with these platform-specific 
          processes, or we can help you create a formal takedown letter. Choose the approach that feels most 
          comfortable for you.
        </p>
        
        <div className="grid gap-4">
          <Collapsible open={standardOpen} onOpenChange={setStandardOpen}>
            <div className="border rounded-lg">
              <CollapsibleTrigger className="w-full text-left px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Standard reporting process</h3>
                    <p className="text-sm text-muted-foreground">The platform's built-in reporting system for content removal</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${standardOpen ? 'transform rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4">
                  {platform && renderProcessSteps(platform.flows.basic)}
                  {!platform && (
                    <p className="text-sm text-muted-foreground py-2">
                      Standard reporting processes vary by platform. Check the platform's help centre or support pages for specific instructions.
                    </p>
                  )}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Collapsible open={escalatedOpen} onOpenChange={setEscalatedOpen}>
            <div className="border rounded-lg">
              <CollapsibleTrigger className="w-full text-left px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Escalated reporting process</h3>
                    <p className="text-sm text-muted-foreground">Additional support channels for sensitive content removal requests</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${escalatedOpen ? 'transform rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4">
                  {platform && renderProcessSteps(platform.flows.escalated)}
                  {!platform && (
                    <p className="text-sm text-muted-foreground py-2">
                      Escalated reporting processes vary by platform. Look for options like "Report a privacy violation" or "Contact support" on the platform's help pages.
                    </p>
                  )}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Have you previously tried any of these processes?</h4>
            <RadioGroup
              value={status || ''}
              onValueChange={(value) => handleStatusChange(value as ReportingStatus)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="standard-completed" id="standard-completed" />
                <Label htmlFor="standard-completed" className="text-base">I've tried the standard reporting process</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="escalated-completed" id="escalated-completed" />
                <Label htmlFor="escalated-completed" className="text-base">I've tried the escalated reporting process</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="both-completed" id="both-completed" />
                <Label htmlFor="both-completed" className="text-base">I've tried both processes</Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="none-completed" id="none-completed" />
                <Label htmlFor="none-completed" className="text-base">I haven't tried either process yet</Label>
              </div>
            </RadioGroup>
          </div>

          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent-light/50 rounded-xl p-4"
            >
              <div className="flex items-start gap-3 text-muted-foreground">
                <AlertCircle className="w-5 h-5 mt-1 shrink-0" />
                <p>{getStatusMessage()?.message}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          className="pill bg-primary text-white px-6 py-2.5 hover:opacity-90"
          disabled={!status}
          onClick={() => {
            analytics.trackEvent(GA_EVENTS.TDLG_REMOVAL_PROCESS_CONTINUE_CLICKED);
            onComplete();
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}