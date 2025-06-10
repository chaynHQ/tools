'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { analytics } from '@/lib/analytics';
import { IS_DEVELOPMENT, IS_PREVIEW } from '@/lib/constants/common';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DevelopmentWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Only show in development environment
    if (!IS_DEVELOPMENT && !IS_PREVIEW) return;

    // Check if user has already seen the warning
    const hasSeenWarning = localStorage.getItem('dev-warning-acknowledged');
    if (!hasSeenWarning) {
      setShowWarning(true);
    }
  }, []);

  const handleAcknowledge = () => {
    // Store acknowledgment in localStorage
    localStorage.setItem('dev-warning-acknowledged', 'true');
    setShowWarning(false);

    // Track analytics event
    analytics.trackEvent('development_warning_acknowledged', {
      timestamp: new Date().toISOString(),
    });
  };

  const handleGoToProduction = () => {
    // Track analytics event
    analytics.trackEvent('development_warning_production_redirect', {
      timestamp: new Date().toISOString(),
    });

    // Redirect to production site
    window.open('https://tools.chayn.co', '_blank');
  };

  if ((!IS_DEVELOPMENT && !IS_PREVIEW) || !showWarning) {
    return null;
  }

  return (
    <Dialog open={showWarning} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-lg" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-amber-100 p-2 rounded-full">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <DialogTitle className="text-lg">Testing mode - remember we save data</DialogTitle>
          </div>
          <div className="text-left space-y-4 text-sm">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-medium text-amber-800 mb-2">What this means:</p>
              <ul className="text-amber-700 space-y-1 text-xs">
                <li>• All form inputs you provide are collected and stored</li>
                <li>• AI-generated follow-up questions are saved</li>
                <li>• Your final takedown letter is stored for analysis</li>
                <li>• This data helps us improve the tool for future users</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-medium text-green-800 mb-1">Want complete privacy?</p>
              <p className="text-green-700 text-xs">
                Use our user-facing site at tools.chayn.co where no data is stored.
              </p>
              <p className="text-green-700 text-xs mt-2">
                By continuing, you consent to data collection for development purposes only.
              </p>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleGoToProduction}
            className="w-full sm:w-auto border-green-300 text-green-700 hover:bg-green-50"
          >
            <ExternalLink className="w-4 h-4 mr-2" />I prefer privacy
          </Button>
          <Button
            onClick={handleAcknowledge}
            className="w-full sm:w-auto bg-primary text-white hover:opacity-90"
          >
            Happy to help
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
