import Rollbar from 'rollbar';
import { IS_PRODUCTION } from './constants/common';
import { clientConfig } from './rollbar';

// Initialize Rollbar for client-side
const rollbar = new Rollbar(clientConfig);

// Define event categories for better organization
export const GA_CATEGORIES = {
  ONBOARDING: 'onboarding',
  QUESTIONS: 'questions',
  LETTER: 'letter',
  FEEDBACK: 'feedback',
  ERROR: 'error',
  ENGAGEMENT: 'engagement'
} as const;

// Define all possible event names
export const ANALYTICS_EVENTS = {
  // Onboarding events
  PROCESS_STARTED: 'process_started',
  PLATFORM_SELECTED: 'platform_selected',
  
  // Question events
  INITIAL_QUESTIONS_COMPLETED: 'initial_questions_completed',
  REPORTING_QUESTIONS_COMPLETED: 'reporting_questions_completed',
  ADDITIONAL_QUESTIONS_COMPLETED: 'additional_questions_completed',
  REPORTING_STATUS_SELECTED: 'reporting_status_selected',
  ADDITIONAL_QUESTIONS_GENERATED: 'additional_questions_generated',
  
  // Letter events
  LETTER_GENERATED: 'letter_generated',
  LETTER_REGENERATED: 'letter_regenerated',
  LETTER_COPIED: 'letter_copied',
  PROCESS_COMPLETED: 'process_completed',
  
  // Error events
  ERROR_OCCURRED: 'error_occurred',
  RETRY_ATTEMPTED: 'retry_attempted',
  
  // Feedback events
  FEEDBACK_OPENED: 'feedback_opened',
  FEEDBACK_SUBMITTED: 'feedback_submitted',
  
  // Engagement events
  VOICE_INPUT_USED: 'voice_input_used',
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',
  SOCIAL_LINK_CLICKED: 'social_link_clicked'
} as const;

type EventParams = Record<string, string | number | boolean | null | undefined>;

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

export const trackEvent = (
  eventName: string,
  params?: EventParams,
  category?: string
) => {
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
        timestamp: new Date().toISOString()
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
      trackEvent(ANALYTICS_EVENTS.PLATFORM_SELECTED, {
        platform,
        is_custom: isCustom,
      }, GA_CATEGORIES.ONBOARDING);
    } catch (error) {
      rollbar.error('Error tracking platform selection', { error, platform, isCustom });
    }
  },

  trackInitialQuestionsCompleted: (timeSpent: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.INITIAL_QUESTIONS_COMPLETED, {
        time_spent: timeSpent,
      }, GA_CATEGORIES.QUESTIONS);
    } catch (error) {
      rollbar.error('Error tracking initial questions completion', { error, timeSpent });
    }
  },

  trackReportingQuestionsCompleted: (timeSpent: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.REPORTING_QUESTIONS_COMPLETED, {
        time_spent: timeSpent,
      }, GA_CATEGORIES.QUESTIONS);
    } catch (error) {
      rollbar.error('Error tracking reporting questions completion', { error, timeSpent });
    }
  },

  trackAdditionalQuestionsCompleted: (timeSpent: number, questionCount: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.ADDITIONAL_QUESTIONS_COMPLETED, {
        time_spent: timeSpent,
        question_count: questionCount,
      }, GA_CATEGORIES.QUESTIONS);
    } catch (error) {
      rollbar.error('Error tracking additional questions completion', { error, timeSpent, questionCount });
    }
  },

  trackAdditionalQuestionsGenerated: (questionCount: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.ADDITIONAL_QUESTIONS_GENERATED, {
        question_count: questionCount,
      }, GA_CATEGORIES.QUESTIONS);
    } catch (error) {
      rollbar.error('Error tracking additional questions generation', { error, questionCount });
    }
  },

  trackReportingStatus: (status: string) => {
    try {
      trackEvent(ANALYTICS_EVENTS.REPORTING_STATUS_SELECTED, {
        status,
      }, GA_CATEGORIES.QUESTIONS);
    } catch (error) {
      rollbar.error('Error tracking reporting status', { error, status });
    }
  },

  trackLetterGeneration: (success: boolean, retryCount?: number, isRegeneration: boolean = false) => {
    try {
      trackEvent(
        isRegeneration ? ANALYTICS_EVENTS.LETTER_REGENERATED : ANALYTICS_EVENTS.LETTER_GENERATED,
        {
          success,
          retry_count: retryCount,
        },
        GA_CATEGORIES.LETTER
      );
    } catch (error) {
      rollbar.error('Error tracking letter generation', { error, success, retryCount, isRegeneration });
    }
  },

  trackError: (errorType: string, errorMessage: string, component: string) => {
    try {
      trackEvent(ANALYTICS_EVENTS.ERROR_OCCURRED, {
        error_type: errorType,
        error_message: errorMessage,
        component,
      }, GA_CATEGORIES.ERROR);
      rollbar.error(errorMessage, { errorType, component });
    } catch (error) {
      rollbar.error('Error tracking error event', { error, errorType, errorMessage, component });
    }
  },

  trackRetry: (action: string, attemptNumber: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.RETRY_ATTEMPTED, {
        action,
        attempt_number: attemptNumber,
      }, GA_CATEGORIES.ERROR);
    } catch (error) {
      rollbar.error('Error tracking retry attempt', { error, action, attemptNumber });
    }
  },

  trackProcessCompletion: (totalTime: number, stepsCompleted: string[]) => {
    try {
      trackEvent(ANALYTICS_EVENTS.PROCESS_COMPLETED, {
        total_time: totalTime,
        steps_completed: stepsCompleted.join(','),
      }, GA_CATEGORIES.LETTER);
    } catch (error) {
      rollbar.error('Error tracking process completion', { error, totalTime, stepsCompleted });
    }
  },

  trackFeedbackOpened: (source: string) => {
    try {
      trackEvent(ANALYTICS_EVENTS.FEEDBACK_OPENED, {
        source,
      }, GA_CATEGORIES.FEEDBACK);
    } catch (error) {
      rollbar.error('Error tracking feedback opened', { error, source });
    }
  },

  trackFeedbackSubmitted: (method: string, length?: number) => {
    try {
      trackEvent(ANALYTICS_EVENTS.FEEDBACK_SUBMITTED, {
        method,
        feedback_length: length,
      }, GA_CATEGORIES.FEEDBACK);
    } catch (error) {
      rollbar.error('Error tracking feedback submission', { error, method, length });
    }
  },

  trackVoiceInput: (field: string, success: boolean) => {
    try {
      trackEvent(ANALYTICS_EVENTS.VOICE_INPUT_USED, {
        field,
        success,
      }, GA_CATEGORIES.ENGAGEMENT);
    } catch (error) {
      rollbar.error('Error tracking voice input', { error, field, success });
    }
  },

  trackExternalLink: (url: string, type: string) => {
    try {
      trackEvent(ANALYTICS_EVENTS.EXTERNAL_LINK_CLICKED, {
        url,
        type,
      }, GA_CATEGORIES.ENGAGEMENT);
    } catch (error) {
      rollbar.error('Error tracking external link click', { error, url, type });
    }
  },

  trackSocialLink: (platform: string) => {
    try {
      trackEvent(ANALYTICS_EVENTS.SOCIAL_LINK_CLICKED, {
        platform,
      }, GA_CATEGORIES.ENGAGEMENT);
    } catch (error) {
      rollbar.error('Error tracking social link click', { error, platform });
    }
  }
};