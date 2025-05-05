"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { analytics } from '@/lib/analytics';
import { GA_EVENTS } from '@/lib/constants/analytics';
import { useFormContext } from '@/lib/context/FormContext';
import { platforms } from '@/lib/platforms';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PlatformSelectionProps {
  onComplete: () => void;
}

const MESSAGING_PLATFORMS = [
  'whatsapp',
  'whats app',
  'imessage',
  'i message',
  'imessenger',
  'i messenger',
  'signal',
  'telegram'
];

export function PlatformSelection({ onComplete }: PlatformSelectionProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [otherPlatform, setOtherPlatform] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMessagingWarning, setShowMessagingWarning] = useState(false);
  const { toast } = useToast();
  const { formState, setPlatformInfo } = useFormContext();

  useEffect(() => {
    if (formState.platformInfo) {
      if (formState.platformInfo.isCustom) {
        setSelectedPlatform('other');
        if (formState.platformInfo.customName) {
          setOtherPlatform(formState.platformInfo.customName);
        }
      } else {
        setSelectedPlatform(formState.platformInfo.platformId);
      }
    }
  }, [formState.platformInfo]);

  const handleOtherPlatformChange = (value: string) => {
    setOtherPlatform(value);
    const isMessagingPlatform = MESSAGING_PLATFORMS.some(platform => 
      value.toLowerCase().includes(platform.toLowerCase())
    );
    setShowMessagingWarning(isMessagingPlatform);
  };

  const handleContinue = async () => {
    analytics.trackEvent(GA_EVENTS.TDLG_PLATFORM_CONTINUE_CLICKED);
    setIsLoading(true);
    
    if (selectedPlatform === 'other') {
      setPlatformInfo({
        platformId: 'other',
        platformName: otherPlatform,
        isCustom: true,
        customName: otherPlatform
      });
    } else {
      const platform = platforms.find(p => p.id === selectedPlatform);
      if (platform) {
        setPlatformInfo({
          platformId: platform.id,
          platformName: platform.name,
          isCustom: false
        });
      }
    }
    
    analytics.trackPlatformSelection(
      selectedPlatform === 'other' ? otherPlatform : selectedPlatform,
      selectedPlatform === 'other'
    );
    
    if (selectedPlatform === 'other') {
      toast({
        title: "Platform selected",
        description: "We'll help you create a general takedown request for this platform.",
      });
    }
    
    setIsLoading(false);
    onComplete();
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {platforms.map((platform) => (
          <motion.div
            key={platform.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              cursor-pointer p-3 rounded-xl transition-colors
              ${selectedPlatform === platform.id ? 'bg-accent-light border border-accent' : 'bg-white'}
            `}
            onClick={() => setSelectedPlatform(platform.id)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 mb-2 relative">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  fill
                  className={`object-contain ${platform.id === 'pornhub' ? 'rounded-sm' : ''}`}
                />
              </div>
              <h3 className="text-sm font-medium">{platform.name}</h3>
            </div>
          </motion.div>
        ))}
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            cursor-pointer p-3 rounded-xl transition-colors
            ${selectedPlatform === 'other' ? 'bg-accent-light border border-accent' : 'bg-white'}
          `}
          onClick={() => setSelectedPlatform('other')}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 mb-2 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-base">+</span>
              </div>
            </div>
            <h3 className="text-sm font-medium">Other platform</h3>
          </div>
        </motion.div>
      </div>

      {selectedPlatform === 'other' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl p-6">
            <Label htmlFor="other-platform" className="text-base font-medium block mb-3">
              Tell us which platform you need help with
            </Label>
            <Input
              id="other-platform"
              type="text"
              placeholder="Enter the platform name"
              value={otherPlatform}
              onChange={(e) => handleOtherPlatformChange(e.target.value)}
              className="bg-white focus:ring-accent focus:border-accent"
            />
          </div>

          <AnimatePresence>
            {showMessagingWarning && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-accent-yellow/30 border border-accent-yellow rounded-xl p-6"
              >
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-accent-yellow mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-medium">Reminder about messaging platforms</h4>
                    <p className="text-muted-foreground text-sm">
                      Remember that for messaging platforms such as WhatsApp, iMessage, Signal and Telegram, 
                      the platform does not have the power to remove content from people's messaging threads 
                      or groups. If you have been sent the content, or are in the group it was shared then 
                      you can report the individual sharing it from within the app.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      You can still go ahead and generate a letter to send to the platform if you think it 
                      will be helpful in your case.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {selectedPlatform && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <Button
            onClick={handleContinue}
            className="pill bg-primary text-white px-6 py-2.5 hover:opacity-90"
            disabled={isLoading || !selectedPlatform || (selectedPlatform === 'other' && !otherPlatform)}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Continue'
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
}