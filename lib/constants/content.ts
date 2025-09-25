// Define content types - the type of content that was shared
export const contentTypes = [
  {
    value: 'intimate',
    label: 'Intimate images',
    description: 'Photos or videos of a private nature',
  },
  {
    value: 'personal',
    label: 'Personal content',
    description: 'Non-intimate photos or videos shared without permission',
  },
  {
    value: 'private',
    label: 'Private information',
    description: 'Personal documents or identifying details',
  },
  {
    value: 'other',
    label: 'Other content',
    description: 'Content that violates your privacy in other ways',
  },
];

// Define content contexts - the context in which the content was shared
export const contentContexts = [
  {
    value: 'hacked',
    label: 'Account was compromised',
    description: 'Content was accessed without authorisation',
  },
  {
    value: 'impersonation',
    label: 'Someone is impersonating me',
    description: 'Content posted by someone pretending to be you',
  },
  {
    value: 'relationship',
    label: 'Posted by someone I know',
    description: 'Content shared by a known person',
  },
  {
    value: 'unknown',
    label: 'Source unknown',
    description: 'Not sure who shared the content',
  },
  {
    value: 'other',
    label: 'Other situation',
    description: 'Different from the options above',
  },
];
