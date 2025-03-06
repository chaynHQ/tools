"use client";

import { clientConfig } from '@/lib/rollbar';
import { ErrorBoundary, Provider as RollbarProvider } from '@rollbar/react';
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