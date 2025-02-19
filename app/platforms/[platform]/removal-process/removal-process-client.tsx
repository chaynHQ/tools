"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { platforms } from '@/lib/platforms';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ChevronDown, AlertCircle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { analytics } from '@/lib/analytics';

type ReportingStatus = 'standard-completed' | 'escalated-completed' | 'both-completed' | 'none-completed' | null;

export function RemovalProcessClient({
  params
}: {
  params: { platform: string }
}) {
  const router = useRouter();
  const platformId = params.platform;
  const platform = platforms.find(p => p.id === platformId);
  const [standardOpen, setStandardOpen] = useState(false);
  const [escalatedOpen, setEscalatedOpen] = useState(false);
  const [status, setStatus] = useState<ReportingStatus>(null);

  if (!platform) {
    router.push('/platforms');
    return null;
  }

  const handleStatusChange = (newStatus: ReportingStatus) => {
    setStatus(newStatus);
    if (newStatus) {
      analytics.trackReportingStatus(newStatus);
    }
  };

  const handleContinue = () => {
    router.push(`/platforms/${platformId}/letter-generator?status=${status}`);
  };

  const renderProcessSteps = (steps: string[]) => (
    <div className="space-y-0.5">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-3 py-2 pr-4"
        >
          <div className="w-7 h-7 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0 text-sm font-medium text-foreground">
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
          message: "You've taken important steps using the standard process. You can try the escalated process as well, or we can help you create a formal letter now.",
          intent: "suggestion"
        };
      case 'escalated-completed':
        return {
          message: "The escalated process was a good step to take. You might also try the standard process, or we can help you create a formal letter now.",
          intent: "suggestion"
        };
      case 'both-completed':
        return {
          message: "You've been thorough in trying the platform's processes. Let's help you create a formal letter as your next step.",
          intent: "support"
        };
      case 'none-completed':
        return {
          message: "You can try these processes first, or we can help you create a formal letter right away. There's no wrong choice - do what feels right for you.",
          intent: "guidance"
        };
      default:
        return null;
    }
  };

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral rounded-2xl p-8 shadow-sm"
        >
          <div className="space-y-6">
            <Button
              variant="ghost"
              className="pill -ml-2"
              onClick={() => router.push('/platforms')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="flex flex-col items-start">
              <h1 className="text-3xl">Content removal options for {platform.name}</h1>
            </div>
          </div>

          <div className="space-y-6 mt-8">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-medium mb-2">Available reporting processes</h2>
              <p className="text-muted-foreground mb-4">
                Below are the official reporting processes available. You can start with these platform-specific 
                processes, or we can help you create a formal takedown letter. Choose the path that feels most 
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
                        {renderProcessSteps(platform.flows.basic)}
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
                        {renderProcessSteps(platform.flows.escalated)}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>

              <div className="mt-8 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Have you previously completed any of these processes?</h4>
                  <RadioGroup
                    value={status || ''}
                    onValueChange={(value) => handleStatusChange(value as ReportingStatus)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="standard-completed" id="standard-completed" />
                      <Label htmlFor="standard-completed" className="text-base">I completed the standard reporting process</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="escalated-completed" id="escalated-completed" />
                      <Label htmlFor="escalated-completed" className="text-base">I completed the escalated reporting process</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="both-completed" id="both-completed" />
                      <Label htmlFor="both-completed" className="text-base">I completed both processes</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="none-completed" id="none-completed" />
                      <Label htmlFor="none-completed" className="text-base">I haven't completed either process</Label>
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
                      <AlertCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <p>{getStatusMessage()?.message}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
              className="pill bg-primary text-white px-6 py-2.5 hover:opacity-90"
              disabled={!status}
              onClick={handleContinue}
            >
              Continue to letter generator
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}