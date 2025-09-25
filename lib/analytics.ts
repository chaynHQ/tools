import { GA_CATEGORIES, GA_EVENTS } from './constants/analytics';
import { IS_PRODUCTION } from './constants/env';
import { rollbar } from './rollbar';

type EventParams = Record<string, string | number | boolean | null | undefined>;

// Define feedback submission methods
type FeedbackMethod = 'typeform' | 'email' | 'form';

// Helper function to validate and clean event parameters
function cleanEventParams(params: EventParams): EventParams {
  return Object.entries(params).reduce((acc, [key, value]) => {
    // Remove null/undefined values
    if (value == null) return acc;

    // Convert booleans to strings
    if (typeof value === 'boolean') {
      acc[key] = value.toString();
    } else {
      acc[key] = value;
    }

    return acc;
  }, {} as EventParams);
}

export const trackEvent = (eventName: string, params?: EventParams, category?: string) => {
  try {
    if (!IS_PRODUCTION) {
      console.log('[Analytics]', { eventName, params, category });
      return;
    }

    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      const cleanedParams = cleanEventParams({
        ...params,
        event_category: category,
        timestamp: new Date().toISOString(),
      });

      gtag('event', eventName, cleanedParams);
    }
  } catch (error) {
    rollbar.error('Error tracking analytics event', { error, eventName, params, category });
  }
};

// Helper functions for common event tracking patterns
export const analytics = {
  trackEvent,

  trackPlatformSelection: (platform: string, isCustom: boolean) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_PLATFORM_SELECTED,
        {
          platform,
          is_custom: isCustom,
        },
        GA_CATEGORIES.ONBOARDING,
      );
    } catch (error) {
      rollbar.error('Error tracking platform selection', { error, platform, isCustom });
    }
  },

  trackInitialQuestionsCompleted: (timeSpent: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_INITIAL_QUESTIONS_COMPLETED,
        {
          time_spent: timeSpent,
        },
        GA_CATEGORIES.QUESTIONS,
      );
    } catch (error) {
      rollbar.error('Error tracking initial questions completion', { error, timeSpent });
    }
  },

  trackReportingQuestionsCompleted: (timeSpent: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_REPORTING_QUESTIONS_COMPLETED,
        {
          time_spent: timeSpent,
        },
        GA_CATEGORIES.QUESTIONS,
      );
    } catch (error) {
      rollbar.error('Error tracking reporting questions completion', { error, timeSpent });
    }
  },

  trackAdditionalQuestionsCompleted: (timeSpent: number, questionCount: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_ADDITIONAL_QUESTIONS_COMPLETED,
        {
          time_spent: timeSpent,
          question_count: questionCount,
        },
        GA_CATEGORIES.QUESTIONS,
      );
    } catch (error) {
      rollbar.error('Error tracking additional questions completion', {
        error,
        timeSpent,
        questionCount,
      });
    }
  },

  trackAdditionalQuestionsGenerated: (questionCount: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_ADDITIONAL_QUESTIONS_GENERATED,
        {
          question_count: questionCount,
        },
        GA_CATEGORIES.QUESTIONS,
      );
    } catch (error) {
      rollbar.error('Error tracking additional questions generation', { error, questionCount });
    }
  },

  trackReportingStatus: (status: string) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_REPORTING_STATUS_SELECTED,
        {
          status,
        },
        GA_CATEGORIES.QUESTIONS,
      );
    } catch (error) {
      rollbar.error('Error tracking reporting status', { error, status });
    }
  },

  trackLetterGeneration: (
    success: boolean,
    retryCount?: number,
    isRegeneration: boolean = false,
  ) => {
    try {
      trackEvent(
        isRegeneration ? GA_EVENTS.TDLG_LETTER_REGENERATED : GA_EVENTS.TDLG_LETTER_GENERATED,
        {
          success,
          retry_count: retryCount,
        },
        GA_CATEGORIES.LETTER,
      );
    } catch (error) {
      rollbar.error('Error tracking letter generation', {
        error,
        success,
        retryCount,
        isRegeneration,
      });
    }
  },

  trackError: (errorType: string, errorMessage: string, component: string) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_ERROR_OCCURRED,
        {
          error_type: errorType,
          error_message: errorMessage,
          component,
        },
        GA_CATEGORIES.ERROR,
      );
      rollbar.error(errorMessage, { errorType, component });
    } catch (error) {
      rollbar.error('Error tracking error event', { error, errorType, errorMessage, component });
    }
  },

  trackRetry: (action: string, attemptNumber: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_RETRY_ATTEMPTED,
        {
          action,
          attempt_number: attemptNumber,
        },
        GA_CATEGORIES.ERROR,
      );
    } catch (error) {
      rollbar.error('Error tracking retry attempt', { error, action, attemptNumber });
    }
  },

  trackProcessCompletion: (totalTime: number, stepsCompleted: string[]) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_PROCESS_COMPLETED,
        {
          total_time: totalTime,
          steps_completed: stepsCompleted.join(','),
        },
        GA_CATEGORIES.LETTER,
      );
    } catch (error) {
      rollbar.error('Error tracking process completion', { error, totalTime, stepsCompleted });
    }
  },

  trackFeedbackOpened: (source: string) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_FEEDBACK_OPENED,
        {
          source,
        },
        GA_CATEGORIES.FEEDBACK,
      );
    } catch (error) {
      rollbar.error('Error tracking feedback opened', { error, source });
    }
  },

  trackFeedbackSubmission: (method: FeedbackMethod, length?: number) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_FEEDBACK_SUBMITTED,
        {
          method,
          feedback_length: length,
        },
        GA_CATEGORIES.FEEDBACK,
      );
    } catch (error) {
      rollbar.error('Error tracking feedback submission', { error, method, length });
    }
  },

  trackVoiceInput: (field: string, success: boolean) => {
    try {
      trackEvent(
        GA_EVENTS.TDLG_VOICE_INPUT_USED,
        {
          field,
          success,
        },
        GA_CATEGORIES.ENGAGEMENT,
      );
    } catch (error) {
      rollbar.error('Error tracking voice input', { error, field, success });
    }
  },

  trackExternalLink: (url: string, type: string) => {
    try {
      trackEvent(
        GA_EVENTS.EXTERNAL_LINK_CLICKED,
        {
          url,
          type,
        },
        GA_CATEGORIES.ENGAGEMENT,
      );
    } catch (error) {
      rollbar.error('Error tracking external link click', { error, url, type });
    }
  },

  trackSocialLink: (platform: string) => {
    try {
      trackEvent(
        GA_EVENTS.SOCIAL_LINK_CLICKED,
        {
          platform,
        },
        GA_CATEGORIES.ENGAGEMENT,
      );
    } catch (error) {
      rollbar.error('Error tracking social link click', { error, platform });
    }
  },

  trackCookieConsent: (accepted: boolean) => {
    try {
      trackEvent(
        accepted ? GA_EVENTS.COOKIE_CONSENT_ACCEPTED : GA_EVENTS.COOKIE_CONSENT_DECLINED,
        {},
        GA_CATEGORIES.ENGAGEMENT,
      );
    } catch (error) {
      rollbar.error('Error tracking cookie consent', { error, accepted });
    }
  },

  trackCookiePolicyView: () => {
    try {
      trackEvent(GA_EVENTS.COOKIE_POLICY_VIEWED, {}, GA_CATEGORIES.ENGAGEMENT);
    } catch (error) {
      rollbar.error('Error tracking cookie policy view', { error });
    }
  },
};
