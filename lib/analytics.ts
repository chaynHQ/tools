type EventParams = Record<string, string | number | boolean | null | undefined>;

export const ANALYTICS_EVENTS = {
  PROCESS_STARTED: 'process_started',
  PLATFORM_SELECTED: 'platform_selected',
  QUESTIONS_COMPLETED: 'questions_completed',
  REPORTING_STATUS_SELECTED: 'reporting_status_selected',
  FOLLOW_UP_COMPLETED: 'follow_up_completed',
  LETTER_GENERATED: 'letter_generated',
  LETTER_COPIED: 'letter_copied',
  PROCESS_COMPLETED: 'process_completed',
  ERROR_OCCURRED: 'error_occurred',
  RETRY_ATTEMPTED: 'retry_attempted',
} as const;

export const trackEvent = (
  eventName: string,
  params?: EventParams
) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', eventName, params);
  }
};

// Helper functions for common event tracking patterns
export const analytics = {
  trackEvent,

  trackPlatformSelection: (platform: string, isCustom: boolean) => {
    trackEvent(ANALYTICS_EVENTS.PLATFORM_SELECTED, {
      platform,
      is_custom: isCustom,
    });
  },

  trackQuestionsCompleted: (section: string, timeSpent?: number) => {
    trackEvent(ANALYTICS_EVENTS.QUESTIONS_COMPLETED, {
      section,
      time_spent: timeSpent,
    });
  },

  trackReportingStatus: (status: string) => {
    trackEvent(ANALYTICS_EVENTS.REPORTING_STATUS_SELECTED, {
      status,
    });
  },

  trackLetterGeneration: (success: boolean, retryCount?: number) => {
    trackEvent(ANALYTICS_EVENTS.LETTER_GENERATED, {
      success,
      retry_count: retryCount,
    });
  },

  trackError: (errorType: string, errorMessage: string, component: string) => {
    trackEvent(ANALYTICS_EVENTS.ERROR_OCCURRED, {
      error_type: errorType,
      error_message: errorMessage,
      component,
    });
  },

  trackRetry: (action: string, attemptNumber: number) => {
    trackEvent(ANALYTICS_EVENTS.RETRY_ATTEMPTED, {
      action,
      attempt_number: attemptNumber,
    });
  },

  trackProcessCompletion: (totalTime: number, stepsCompleted: string[]) => {
    trackEvent(ANALYTICS_EVENTS.PROCESS_COMPLETED, {
      total_time: totalTime,
      steps_completed: stepsCompleted.join(','),
    });
  },
};