"use client";

import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { clientConfig } from '@/lib/rollbar';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <RollbarProvider config={clientConfig}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </RollbarProvider>
  );
}