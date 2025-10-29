'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { rollbar } from '@/lib/rollbar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MessageSquare,
  Send
} from 'lucide-react';
import { useState } from 'react';

interface ResponseFeedbackProps {
  className?: string;
}

export function ResponseFeedback({ className = '' }: ResponseFeedbackProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    platform: '',
    responseType: '',
    timeframe: '',
    details: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const responseTypes = [
    {
      value: 'automated_response',
      label: 'Automated response',
      description: 'Received an automated acknowledgment or confirmation'
    },
    {
      value: 'information_requested',
      label: 'Requested information',
      description: 'Platform asked for additional details or proof'
    },

    {
      value: 'content_removed',
      label: 'Content removed',
      description: 'The platform removed the reported content'
    },
        {
      value: 'request_denied',
      label: 'Request denied',
      description: 'Platform declined to remove the content'
    },
    {
      value: 'no_response',
      label: 'No response',
      description: 'Have not received any response yet'
    },

    {
      value: 'other',
      label: 'Other',
      description: 'Different type of response not listed above'
    },
  ];

  const timeframes = [
    'Within 24 hours',
    '2-7 days',
    '1-2 weeks',
    '2-4 weeks',
    'Over a month',
    'No response yet',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.platform.trim()) {
      newErrors.platform = 'Platform name is required';
    }
    if (!formData.responseType) {
      newErrors.responseType = 'Response type is required';
    }
    if (!formData.timeframe) {
      newErrors.timeframe = 'Timeframe is required';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'homepage_response_tracker',
      };

      const response = await fetch('/api/response-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit response feedback');
      }

      setIsSubmitted(true);
      analytics.trackEvent('response_tracker_submitted', {
        platform: formData.platform,
        responseType: formData.responseType,
        timeframe: formData.timeframe,
        hasDetails: !!formData.details,
        hasEmail: !!formData.email,
      });

      toast({
        title: 'Thank you for sharing!',
        description: 'Your experience helps us improve our tool and better support other survivors.',
      });

    } catch (error) {
      rollbar.error('Error submitting response tracker feedback', {
        error,
        formData: { ...formData, details: '[REDACTED]' },
      });

      toast({
        title: 'Unable to submit feedback',
        description: 'Please try again later or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn('space-y-6', className)}
      >
        <div className="bg-white rounded-xl p-6 relative overflow-hidden group shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-accent-green/20 rounded-full" />
          
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-green/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-accent-green" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-3">
                Your experience has been shared
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Thank you for taking the time to share your platform response experience. 
                  This valuable information helps us:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                    <span>Improve our tool for future survivors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                    <span>Better understand how platforms handle requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                    <span>Provide better guidance to others in similar situations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('space-y-6', className)}
    >
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-accent-blue/20 p-2 rounded-full shrink-0">
            <MessageSquare className="h-6 w-6 text-accent-blue" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-medium text-foreground mb-2">
              How did the platform respond to your request?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-end ">
              <p className="text-muted-foreground mb-4">
                If you feel comfortable sharing, your experience helps us improve this tool for future survivors. 
                If you didn't receive a satisfactory response, we may be able to provide additional guidance.
              </p>
              
              {!isExpanded && (
                <Button
                  onClick={() => setIsExpanded(true)}
                  className="pill bg-primary text-white hover:opacity-90 ml-auto flex"
                >
                <Send className="w-4 h-4 mr-2" />
                  Share feedback
                </Button>
              )}
            </div>

          </div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-8 pt-6 border-t border-neutral/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="platform" className="text-lg font-medium">
                  Which platform? *
                </Label>
                <Input
                  id="platform"
                  value={formData.platform}
                  className="mt-2 bg-white focus:ring-accent focus:border-accent border border-input"
                  onChange={(e) => handleInputChange('platform', e.target.value)}
                  placeholder="Facebook, Tiktok, other..."
                />
                {errors.platform && (
                  <p className="text-destructive text-sm">{errors.platform}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe" className="text-lg font-medium">
                  How quickly did they respond? *
                </Label>
                <select
                  id="timeframe"
                  value={formData.timeframe}
                  onChange={(e) => handleInputChange('timeframe', e.target.value)}
                  className="w-full px-3 py-2 mt-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-white"
                >
                  <option value="">Select timeframe</option>
                  {timeframes.map((timeframe) => (
                    <option key={timeframe} value={timeframe}>
                      {timeframe}
                    </option>
                  ))}
                </select>
                {errors.timeframe && (
                  <p className="text-destructive text-sm">{errors.timeframe}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-medium">
                What type of response did you receive? *
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {responseTypes.map((type) => (
                  <motion.div
                    key={type.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange('responseType', type.value)}
                    className={cn(
                      'relative cursor-pointer rounded-lg p-3.5 transition-all duration-200 border',
                      formData.responseType === type.value
                        ? 'bg-accent-light border-accent shadow-md'
                        : 'bg-white hover:bg-neutral/10 border-input'
                    )}
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-foreground">{type.label}</h4>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">{type.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {errors.responseType && (
                <p className="text-destructive text-sm">{errors.responseType}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="details" className="text-lg font-medium">
                Additional details (optional)
              </Label>
              <Textarea
                id="details"
                value={formData.details}
                className="mt-2 bg-white focus:ring-accent focus:border-accent w-full border border-input"
                onChange={(e) => handleInputChange('details', e.target.value)}
                placeholder="How helpful was their response? Did they ask for specific information? Any other details about the process..."
                rows={4}
              />
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6'>
              <div className="space-y-2 flex-1 max-w-full lg:max-w-[580px]">
                <Label htmlFor="email" className="text-lg font-medium">
                  Your email (optional)
                </Label>
                <p className="text-sm text-muted-foreground py-1">
                  If you'd like us to follow up about your experience or if you need additional support with your request, we will reach out to you.
                </p>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  className="mt-2 bg-white focus:ring-accent focus:border-accent border border-input"
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>


              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsExpanded(false)}
                  className="pill bg-white hover:bg-secondary/50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill bg-primary text-white hover:opacity-90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Share feedback
                    </>
                  )}
                </Button>
              </div>
            </div>


            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}