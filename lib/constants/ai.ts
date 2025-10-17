export const MAX_RETRIES = 1;
export const RETRY_DELAY = 1000; // 1 second delay between retries

// Static next steps that will be used for all letters
export const STATIC_NEXT_STEPS = [
  'They might respond asking for the evidence you listed, so make sure you have the things referenced in this letter to hand.',
  "In 48 hours, check if your content has been removed. Sometimes the platforms don't send a response but they do remove the content",
  'If the content is still available, you could try sending a follow up asking them to respond',
];

// Define placeholder types
export const PLACEHOLDER_TYPES = {
  CONTENT_LOCATION: '[CONTENT_LOCATION]',
  EMAIL: '[EMAIL]',
  PHONE: '[PHONE]',
  REFERENCE: '[REFERENCE]',
  DATE: '[DATE]',
  IP: '[IP]',
  ID: '[ID]',
  USERNAME: '[USERNAME]',
  URL: '[URL]',
  PLATFORM: '[PLATFORM]',
  CASE_NUMBER: '[CASE_NUMBER]',
  ACCOUNT: '[ACCOUNT]',
  LOCATION: '[LOCATION]',
  NAME: '[NAME]',
  PROMPT_INJECTION: '', // New placeholder for potential prompt injection attempts
} as const;

// Define sensitive terms and their replacements
export const SENSITIVE_TERMS = [
  { term: 'revenge porn', replacement: 'non-consensual intimate content' },
  { term: 'function normally', replacement: 'specific impact description' },
  { term: 'criminal justice', replacement: 'legal system or legal justice' },
  { term: 'suffering', replacement: 'specific impact description' },
  { term: 'suffer', replacement: 'specific impact description' },
  { term: 'victims', replacement: 'survivors' },
  { term: 'prostitution', replacement: 'sex work' },
  { term: 'child pornography', replacement: 'child sexual abuse material' },
  { term: 'honour-based crimes', replacement: 'so called honour-based crimes' },
  { term: 'mental health', replacement: 'wellbeing' },
  { term: 'trauma', replacement: 'impact' },
  { term: 'depression', replacement: 'emotional impact' },
  { term: 'anxiety', replacement: 'distress' },
  { term: 'suicide', replacement: 'severe emotional distress' },
  { term: 'self-harm', replacement: 'personal harm' },
];

export const QUALITY_CHECK_CRITERIA = {
  MAJOR: {
    SENSITIVE_TERMS,
    HALLUCINATION_TERMS: [
      'as I mentioned earlier',
      'as stated in my previous correspondence',
      'as per our conversation',
      'you have requested',
      'you have asked me to',
      'as you know',
      'as we discussed',
      'in your email',
      'in your message',
      'as indicated in your report',
      'you have',
      'as I mentioned',
      'per our discussion',
      'as previously noted',
      'as explained before',
      'in my previous email',
      'as requested',
      'your previous message',
    ],
    EVIDENCE_TERMS: [
      'government(-|\\s)issued id',
      'passport\\b',
      "driver('s|\\s)licen[sc]e",
      'national id',
      'identity card',
      'state(-|\\s)issued',
      'official id',
      'id verification process',
      'identity verification document',
      'verify.*identity.*document',
      'proof of residence',
      'proof of address',
      'utility bill',
      'notari[sz]ed',
      'apostille',
      'certified document',
      'legal document',
      'official documentation',
      'government document',
      'identification document',
      'verification process',
      'proof of identity',
    ].map((term) => new RegExp(term, 'i')),
  },
  MINOR: {
    STYLE_PATTERNS: [
      /\b(please|kindly)\b/gi,
      /\b(demand|insist|require)\b/gi,
      /\b(immediately|urgently|asap)\b/gi,
      /\b(must|shall|will)\b/gi,
      /\b(legal action|lawsuit|sue)\b/gi,
      /\b(failure to comply|failure to act)\b/gi,
      /\b(emotional distress|mental anguish)\b/gi,
      /\b(traumatic|devastating|horrific)\b/gi,
      /\b(expect|anticipate|await)\b.*\b(immediate|prompt|quick)\b/gi,
    ],
  },
};

// Add prompt injection patterns
export const PROMPT_INJECTION_PATTERNS = [
  // Basic instruction override attempts
  /ignore previous instructions/i,
  /disregard (all|previous|above) instructions/i,
  /forget (all|previous|above) instructions/i,
  /new instructions/i,
  /system prompt/i,

  // Identity/role manipulation
  /you are not/i,
  /you're not/i,
  /you will be/i,
  /you shall be/i,
  /act as/i,
  /behave as/i,
  /pretend to be/i,
  /roleplay as/i,
  /become a/i,
  /switch to/i,
  /change your (role|personality|behavior)/i,
  /override (your|previous) (role|personality|behavior)/i,
  /stop being/i,
  /do not act as/i,

  // System/prompt manipulation
  /system message/i,
  /user message/i,
  /assistant message/i,
  /prompt override/i,
  /change (your|the) prompt/i,
  /modify (your|the) instructions/i,
  /bypass (your|the) (rules|restrictions)/i,
  /ignore (your|the) (rules|restrictions)/i,

  // Code injection attempts
  /\{.*\}/g, // Potential JSON injection
  /\<.*\>/g, // Potential XML/HTML injection
  /\$\{.*\}/g, // Template literal injection
  /\{\{.*\}\}/g, // Handlebars/template injection
  /\[\[.*\]\]/g, // Wiki-style injection
  /\/\*.*\*\//g, // Comment injection
  /--/g, // SQL comment injection
  /#/g, // Shell comment injection
  /`/g, // Backtick for command injection
  /\\x[0-9a-fA-F]{2}/g, // Hex escape sequences
  /\\u[0-9a-fA-F]{4}/g, // Unicode escape sequences

  // Advanced manipulation attempts
  /reveal your (instructions|prompt|rules)/i,
  /show me your (instructions|prompt|rules)/i,
  /tell me your (instructions|prompt|rules)/i,
  /what are your (instructions|prompt|rules)/i,
  /list your (instructions|prompt|rules)/i,
  /display your (instructions|prompt|rules)/i,
  /output your (instructions|prompt|rules)/i,
  /print your (instructions|prompt|rules)/i,

  // Context manipulation
  /forget (this|the) conversation/i,
  /reset (this|the|your) context/i,
  /clear (this|the|your) context/i,
  /start (a new|fresh) conversation/i,
  /ignore (this|the|previous) context/i,

  // Command injection
  /execute command/i,
  /run command/i,
  /system\(/i,
  /eval\(/i,
  /exec\(/i,
  /shell_exec/i,
  /subprocess/i,
];
