'use client';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Globe,
  Lock,
  MessageCircle,
  MessageSquare,
  PenTool,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export function ProcessExplanation({ onComplete }: { onComplete: () => void }) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleContinue = () => {
    analytics.trackEvent(GA_EVENTS.TDLG_PROCESS_STARTED);
    onComplete();
  };

  const steps = [
    {
      icon: Globe,
      title: 'Select the platform',
      description:
        "Choose where the content is hosted. We'll use their specific processes and policies to create the letter.",
    },
    {
      icon: FileText,
      title: 'Initial questions',
      description:
        'Share details about the content and any past reporting attempts. Share only what you feel comfortable with.',
    },
    {
      icon: MessageCircle,
      title: 'Supporting questions',
      description:
        'To strengthen your request, we may ask some additional questions based on your answers.',
    },
    {
      icon: PenTool,
      title: 'Your letter is created',
      description:
        "Our AI helps create a professional letter, tailored to the platform's guidelines and your situation.",
    },
    {
      icon: Send,
      title: 'Review and send',
      description: 'Review your letter and make any changes before sending it to the platform.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-accent-light/20 rounded-full transition-transform group-hover:scale-110" />

            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-light/50 flex items-center justify-center">
                  {React.createElement(step.icon, { className: 'w-5 h-5 text-accent' })}
                </div>
                <h3 className="font-medium">{step.title}</h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Collapsible
        open={isPrivacyOpen}
        onOpenChange={setIsPrivacyOpen}
        className="bg-white rounded-xl"
      >
        <CollapsibleTrigger className="w-full p-6 flex items-start gap-4 hover:bg-accent-light/10 transition-colors rounded-xl">
          <div className="bg-accent-light/50 p-2 rounded-lg">
            <Lock className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-base font-medium">Your privacy and data protection</h3>
            <p className="text-sm text-muted-foreground">
              Learn how we protect your information and use AI responsibly
            </p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform ${
              isPrivacyOpen ? 'transform rotate-180' : ''
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                We use{' '}
                <Link
                  href="https://www.anthropic.com/legal/privacy"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-primary/90"
                >
                  Anthropic's privacy-first AI
                </Link>{' '}
                to help create your letter. Your data is:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Anonymised where possible before being sent to AI prompts</li>
                <li>
                  Never used to train AI models (
                  <Link
                    href="https://www.anthropic.com/legal/model-training-notice"
                    target="_blank"
                    className="underline underline-offset-2 hover:text-primary/90"
                  >
                    learn more
                  </Link>
                  )
                </li>
                <li>Only stored by Anthropic for 30 days</li>
                <li>Only stored by Chayn if you choose to share your letter for feedback</li>
                <li>Your choice. Only share what you are comfortable with sharing</li>
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="bg-accent-light/40 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
        <div className="bg-accent/20 p-1.5 rounded-full shrink-0">
          <MessageSquare className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-foreground font-medium mb-1">Need support?</p>
          <p className="text-muted-foreground text-sm">
            If you need emotional support or guidance, visit{' '}
            <a
              href="https://www.chayn.co/global-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium hover:text-primary/90"
            >
              Chayn's Global Support Directory
            </a>{' '}
            to find services in your area.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleContinue} className="pill bg-primary text-white hover:opacity-90">
          Start your request
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
