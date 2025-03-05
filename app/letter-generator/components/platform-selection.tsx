"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { platforms } from '@/lib/platforms';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useFormContext } from '@/lib/context/FormContext';

interface PlatformSelectionProps {
  onComplete: () => void;
}

export function PlatformSelection({ onComplete }: PlatformSelectionProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [otherPlatform, setOtherPlatform] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { formState, setPlatformInfo } = useFormContext();

  // Load saved platform selection from context on component mount
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

  const handleContinue = async () => {
    setIsLoading(true);
    
    // Save platform selection to context
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
                  className="object-contain"
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
          className="bg-white rounded-xl p-6"
        >
          <Label htmlFor="other-platform" className="text-base font-medium block mb-3">
            Tell us which platform you need help with
          </Label>
          <Input
            id="other-platform"
            type="text"
            placeholder="Enter the platform name"
            value={otherPlatform}
            onChange={(e) => setOtherPlatform(e.target.value)}
            className="bg-white focus:ring-accent focus:border-accent"
          />
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