"use client";

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { PopupButton } from '@typeform/embed-react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FeedbackPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleTypeformSubmit = () => {
    analytics.trackFeedbackSubmission('typeform');
    setIsSubmitted(true);
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback! It helps us improve Advokit.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Button
          variant="ghost"
          className="pill -ml-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="bg-neutral rounded-2xl p-8 shadow-sm mb-8">
        <h1 className="text-3xl mb-4">Share Your Feedback</h1>
        <p className="text-muted-foreground mb-6">
          Your feedback helps us improve Advokit and better support survivors. We appreciate your thoughts on how we can make this tool more helpful.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-accent-light/30 rounded-xl p-6 text-center"
          >
            <ThumbsUp className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Thank you for your feedback!</h3>
            <p className="text-muted-foreground mb-6">
              Your insights help us improve Advokit and better support survivors.
            </p>
            <Link href="/">
              <Button className="pill bg-primary text-white hover:opacity-90">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <MessageSquare className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="text-lg font-medium mb-1">We'd love to hear from you</h3>
                <p className="text-sm text-muted-foreground">
                  Please share your thoughts on how you found using our tool, anything that looks wrong, and ideas for how to improve it. Your feedback will help us help more survivors 🧡
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <PopupButton 
                id="advokit-feedback"
                className="pill bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
                onSubmit={handleTypeformSubmit}
              >
                Open Feedback Survey
              </PopupButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}