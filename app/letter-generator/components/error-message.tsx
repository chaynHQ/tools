import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12">
      <div className="bg-destructive/10 rounded-xl p-6 max-w-xl text-center">
        <AlertCircle className="w-8 h-8 mx-auto mb-4 text-destructive" />
        <h3 className="text-lg font-medium mb-2">Letter Generation Failed</h3>
        <p className="text-muted-foreground mb-6">{message}</p>
        <Button 
          onClick={onRetry}
          className="pill bg-primary text-white hover:opacity-90"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}