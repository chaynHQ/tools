import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger, and Threads. As of November 12, 2024, these standards are unified across all Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including threats to share such content and sextortion.",
        "quote": "We remove content that facilitates, encourages or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services and sexual massages. We also remove content that attempts to coordinate or recruit for activities that involve the non-consensual sharing of intimate images.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement that the content involves non-consensual sharing",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim and locate the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content facilitates non-consensual sharing of intimate images",
          "Content attempts to coordinate activities involving intimate image sharing without consent",
          "Content involves threats to share intimate images"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit other behavior that targets private individuals, including sharing intimate images of adults without consent.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the harassing content",
            "reason": "To locate and review the harassing material"
          },
          {
            "description": "Description of how the content constitutes targeted harassment",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the victim",
            "reason": "To verify the target of harassment and process the report"
          }
        ],
        "removalCriteria": [
          "Content targets a private individual for degradation or intimidation",
          "Content includes intimate images shared without consent",
          "The behavior is repeated or part of a coordinated effort",
          "Content is intended to silence or intimidate the target"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and intimate images without consent, protecting individuals' privacy rights.",
        "quote": "Privacy and the protection of personal information are fundamentally important values for Facebook. We work hard to safeguard your personal identity and information and we do not allow people to post personal or confidential information about yourself or of others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the privacy-violating content",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the information was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private information shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains personal information used maliciously or for harassment",
          "Content includes intimate images shared without the subject's consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AI",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "Authenticity is the cornerstone of our community. We believe that people are more accountable for their statements and actions when they use their authentic identities. That's why we require people to connect on Facebook using the name they go by in everyday life.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL of the impersonating profile or content",
            "reason": "To identify the impersonating account or content"
          },
          {
            "description": "Proof of identity",
            "example": "Government ID for individuals, business documents for organizations",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how your identity is being misrepresented",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or other identifying information without authorization",
          "The profile, page, or content is intended to mislead or deceive others about identity",
          "The impersonation is not clearly marked as parody, fan account, or commentary"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits coordinated inauthentic behavior and misrepresentation of identity or purpose to deceive users.",
        "quote": "In line with our commitment to authenticity, we don't allow people to misrepresent themselves on Facebook, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the inauthentic accounts or content",
            "reason": "To identify the inauthentic behavior"
          },
          {
            "description": "Evidence of coordinated or deceptive behavior",
            "reason": "To establish the inauthentic nature of the activity"
          },
          {
            "description": "Description of how the behavior violates authenticity standards",
            "reason": "To understand the specific violation and its impact"
          }
        ],
        "removalCriteria": [
          "Content or accounts engage in coordinated inauthentic behavior",
          "Accounts misrepresent identity or purpose to deceive users",
          "Behavior is designed to artificially amplify or suppress information",
          "Activity violates the principle of authentic identity representation"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025 with clarified wording around platform misuse and data scraping.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "fb-tos-intellectual-property",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "You may not use our Products to do or share anything: That infringes or breaches someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of intellectual property ownership",
            "reason": "To establish rights to the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches someone else's intellectual property rights",
          "Content violates copyright or trademark protections",
          "Content involves distribution or selling of counterfeit or pirated goods"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or do not have the necessary rights to share.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of ownership or rights to the content",
            "reason": "To establish that the reporter has rights to the shared content"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions from the owner"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches their terms and may suspend or disable accounts for violations.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report of content that violates terms",
            "reason": "To identify content that breaches platform provisions"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the specific content in question"
          }
        ],
        "removalCriteria": [
          "Content is in breach of Meta's Terms of Service",
          "Content violates Community Standards or other applicable policies",
          "Conduct violates platform provisions"
        ]
      },
      {
        "id": "fb-tos-reporting-process",
        "reference": "FB-TOS-3.2",
        "summary": "Users are encouraged to report content or conduct that breaches their rights or Meta's terms and policies.",
        "quote": "To help support our community, we encourage you to report content or conduct that you believe breaches your rights (including intellectual property rights) or our terms and policies if this feature exists in your jurisdiction.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Description of how the content breaches your rights",
            "reason": "To understand the nature of the rights violation"
          },
          {
            "description": "Identification of which terms or policies are violated",
            "reason": "To categorize and process the report appropriately"
          },
          {
            "description": "URL(s) of the problematic content",
            "reason": "To locate and review the reported content"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content or conduct violates Meta's terms and policies"
        ]
      },
      {
        "id": "fb-tos-repeated-violations",
        "reference": "FB-TOS-4.2",
        "summary": "Meta may suspend or permanently disable accounts for clear, serious or repeated breaches of Terms or Policies, including repeated intellectual property infringement.",
        "quote": "If we determine that you have clearly, seriously or repeatedly breached our Terms or Policies as listed in Section 5, including in particular the Community Standards which set out in detail the content that is not allowed on Meta Company Products, we may suspend or permanently disable your access to Meta Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To establish a pattern of violations warranting account action"
          },
          {
            "description": "Evidence of clear, serious or repeated policy breaches",
            "reason": "To justify account suspension or termination"
          }
        ],
        "removalCriteria": [
          "Clear, serious or repeated breaches of Terms or Policies",
          "Repeated infringement of other people's intellectual property rights",
          "Legal requirements mandate account action"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal or account actions, unless doing so may expose Meta or others to legal liability, harm the community, compromise system integrity, face technical limitations, or be prohibited for legal reasons.",
      "steps": [
        "Meta will explain options available to request another review when content is removed",
        "Users can request review of account suspension or termination decisions",
        "Review options may not be available for serious violations or legal restrictions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook and other Meta platforms.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SAFETY-SECURITY",
        "summary": "Meta removes content that violates terms or policies through automated and manual review processes to promote safety, security and integrity.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts, identity and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content reported to Meta through their reporting systems",
            "example": "Using in-platform reporting tools",
            "reason": "Required for Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content involves harmful or unlawful behavior",
          "Content is reported and reviewed by automated or manual systems"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law To promote the safety, security and integrity of Meta Products, users, employees, property and the public.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Valid legal request such as search warrant, court order, production order or subpoena",
            "example": "Court-issued subpoena for specific user information",
            "reason": "Required for Meta to legally comply with law enforcement and civil litigation requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or government authorities",
          "Court order requiring content removal or information disclosure",
          "Applicable law requires removal or information sharing",
          "Content poses threat to safety, security and integrity of users or public"
        ]
      },
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta detects, prevents and combats harmful or unlawful behavior including reviewing and removing reported content to maintain platform integrity.",
        "quote": "Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Detect and prevent spam and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report of harmful or unlawful behavior through Meta's reporting systems",
            "example": "Reporting non-consensual intimate imagery or harassment",
            "reason": "Enables Meta to investigate and take appropriate action against policy violations"
          }
        ],
        "removalCriteria": [
          "Content involves harmful or unlawful behavior",
          "Content is reported to Meta for review",
          "Content threatens platform integrity or user safety",
          "Content constitutes spam or other bad experiences"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses facial recognition technology with user consent to verify identity and protect against impersonation and identity misuse.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Photo or video selfie provided voluntarily for identity verification",
            "example": "Selfie uploaded when contacting support for account verification",
            "reason": "Used to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Potential impersonation or identity misuse identified",
          "Account verification required for security purposes"
        ]
      },
      {
        "id": "meta-pp-vital-interests",
        "reference": "META-PP-VITAL-INTERESTS",
        "summary": "Meta processes and shares information including with law enforcement when vital interests require protection, such as in emergencies involving life, health or safety.",
        "quote": "We apply automated processing techniques, conduct manual (human) review and share information, including with law enforcement and others, in circumstances where someone's vital interests require protection, such as in the case of emergencies. These vital interests include protection of your life, physical or mental health, wellbeing or integrity or that of others, and detecting, removing, and reporting illegal content.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of emergency situation threatening vital interests",
            "example": "Reports of self-harm, threats of violence, or other emergency situations",
            "reason": "Required to assess and respond to situations threatening life, health, or safety"
          }
        ],
        "removalCriteria": [
          "Content threatens someone's life, physical or mental health",
          "Emergency situation requiring immediate intervention",
          "Illegal content that poses risk to vital interests",
          "Content involves threats to wellbeing or integrity of individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta's content decisions can be reviewed by the Oversight Board in some cases, and users have rights to access, correct, and erase information under GDPR.",
      "steps": [
        "Content removal decisions may be reviewed by Meta's Oversight Board",
        "Users can exercise GDPR rights including access, correction, and erasure of information",
        "Users can object to processing and seek restriction of processing",
        "Users can make complaints to supervisory authorities"
      ]
    }
  },
  {
    "id": "facebook-new-1758221778122-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment protections, including heightened protections for minors and detailed enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta removes unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted contact pattern",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To establish pattern of harassment or sexual nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes severe sexualized commentary, derogatory sexualized photoshop or drawings, and attacks through derogatory terms related to sexual activity.",
        "quote": "Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualized content or derogatory sexual terms",
            "example": "Screenshots of manipulated images or sexually derogatory comments",
            "reason": "To verify the sexual and derogatory nature of the content"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks through derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of claims about sexual activity",
            "example": "Screenshots of posts making sexual claims",
            "reason": "To verify sexual nature of claims and target's protected status"
          },
          {
            "description": "Proof of protected status (minor, private adult, or limited scope public figure)",
            "example": "Age verification or evidence of non-public figure status",
            "reason": "To confirm eligibility for protection under this policy"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content makes claims about sexual activity",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-ADULT-SEX",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of sexually objectifying posts or comments",
            "reason": "To verify the sexualizing nature of the content"
          },
          {
            "description": "Proof target is minor, private adult, or limited scope public figure",
            "example": "Age verification or evidence of protected status",
            "reason": "To confirm eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T3-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery targeting private minors, private adults, and minor involuntary public figures when self-reported.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report submitted by the person depicted or their legal representative",
            "reason": "Policy requires self-reporting for this protection"
          },
          {
            "description": "Evidence of image manipulation",
            "example": "Comparison showing original vs manipulated image",
            "reason": "To verify the image has been altered"
          }
        ],
        "removalCriteria": [
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content contains manipulated imagery",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-physical-appearance-manipulation",
        "reference": "META-BH-T2-APPEARANCE",
        "summary": "Meta removes content manipulated to negatively highlight specific physical characteristics for protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of manipulated content highlighting physical features",
            "example": "Screenshots showing circled or highlighted body parts",
            "reason": "To verify negative manipulation of physical characteristics"
          },
          {
            "description": "Proof of protected status",
            "example": "Evidence target is minor, private adult, or limited scope public figure",
            "reason": "To confirm eligibility for this protection"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Manipulation is done to negatively draw attention",
          "Target is minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-SELF-REPORT-SEX",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from public figure or their legal representative",
            "reason": "Policy requires confirmation that sexualizing content is unwanted"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of sexually objectifying posts",
            "reason": "To verify the sexual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-PAGES-GROUPS",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative",
            "example": "Takedown request from targeted individual or their legal representative",
            "reason": "Policy requires reporting by the targeted person"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted content on these platforms",
            "reason": "To verify targeting occurs through these specific Meta features"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Targeting occurs through Pages, Groups, or Events",
          "Content is reported by target or authorized representative"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, may appeal to Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758221778122-1",
    "reference": "META-IB",
    "title": "Inauthentic Behavior Policy",
    "summary": "Policy covering fake accounts, impersonation, and coordinated inauthentic behavior across Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "meta-ib-fake-accounts",
        "reference": "META-IB-FAKE-ACCOUNTS",
        "summary": "Meta prohibits the creation and use of fake accounts to deceive users about identity, purpose, or origin, or to evade enforcement.",
        "quote": "We do not allow: The creation, use, or claimed use of Inauthentic Meta Assets (Accounts, Pages, Groups, etc.) in order to: Deceive Meta or our users about: The identity, purpose, or origin of an audience or the entity that they represent; or the popularity of content or assets on our services; or a Meta asset's ownership or control network. To Evade enforcement under the Community Standards. Misuse Meta reporting systems to harass, intimidate or silence others.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that the account is fake or misrepresenting identity",
            "example": "Documentation showing the account is using false information",
            "reason": "To verify the account violates authenticity standards"
          }
        ],
        "removalCriteria": [
          "Account is created with false identity information",
          "Account is used to deceive users about the entity it represents",
          "Account is used to evade Community Standards enforcement",
          "Account misuses reporting systems to harass others"
        ]
      },
      {
        "id": "meta-ib-impersonation",
        "reference": "META-IB-IMPERSONATION",
        "summary": "Meta prohibits using fake accounts to misrepresent identity or falsely represent domestic/local voices, particularly by foreign entities.",
        "quote": "Foreign Inauthentic Behavior: Foreign entities using Inauthentic Meta assets to falsely represent a domestic or local voice, in order to deceive an audience about the identity, purpose or origin of the entity they represent.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence showing foreign entity falsely representing local identity",
            "example": "Documentation of actual location versus claimed location",
            "reason": "To verify foreign inauthentic behavior violation"
          }
        ],
        "removalCriteria": [
          "Foreign entity using fake assets to represent domestic voice",
          "Deception about identity, purpose or origin of entity"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "META-IB-CIB",
        "summary": "Meta prohibits sophisticated coordinated inauthentic behavior using fake accounts to manipulate public debate with adversarial methods.",
        "quote": "We do not allow: Entities to engage in, or claim to engage in Coordinated Inauthentic Behavior, defined as particularly sophisticated forms of Inauthentic Behavior where inauthentic accounts are central to the operation and operators: Use adversarial methods to evade detection or appear authentic; and Use a variety of adversarial and inauthentic techniques to achieve overarching strategic objectives; and Primarily seek to manipulate public debate.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of coordinated network of fake accounts",
            "example": "Documentation showing connected inauthentic assets working together",
            "reason": "To verify coordinated inauthentic behavior"
          },
          {
            "description": "Evidence of adversarial methods to evade detection",
            "example": "Technical evidence of sophisticated deception techniques",
            "reason": "To establish the sophisticated nature of the operation"
          }
        ],
        "removalCriteria": [
          "Network uses fake accounts as central to operation",
          "Operators use adversarial methods to evade detection",
          "Network uses multiple inauthentic techniques for strategic objectives",
          "Primary purpose is to manipulate public debate"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Users can appeal enforcement decisions through Meta's Support Inbox system with option for additional review if they disagree with the initial decision.",
      "steps": [
        "Report submitted and reviewed by Meta",
        "User receives notification of decision via notifications and Support Inbox",
        "If user disagrees, they can request another review through appeal option",
        "Meta conducts re-review and sends final response to Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758221778122-2",
    "reference": "META-CR",
    "title": "Content Removal and Enforcement",
    "summary": "Detailed explanation of Meta's content removal process, strike system, and enforcement procedures.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "meta-cr-general-removal",
        "reference": "META-CR-GENERAL",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanations and strike system consequences.",
        "quote": "If your content goes against the Community Standards, Meta will remove it. We'll also notify you so you can understand why we removed the content and how to avoid posting violating content in the future. We use a strike system to count violations and hold you accountable for the content you post.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content must violate Community Standards",
            "example": "Any content that goes against established policies",
            "reason": "Required basis for content removal under Meta's enforcement system"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Content is subject to strike system enforcement"
        ]
      },
      {
        "id": "meta-cr-notification-process",
        "reference": "META-CR-NOTIFICATION",
        "summary": "Meta provides detailed notifications when content is removed, including policy explanations and educational context to prevent future violations.",
        "quote": "We'll let you know when something you posted goes against our Community Standards. Usually, this notice appears in your Feed when you log into Facebook or in your feed on Instagram. You can also find it in your Support Inbox on Facebook or Support Requests on Instagram. We'll do our best to reference which part of our policies you didn't follow, and give a brief description of why we don't allow the content, so you can avoid having other content removed in the future.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Automatic notification system based on policy violation detection",
            "example": "System-generated notices in Feed or Support Inbox",
            "reason": "To inform users of violations and prevent future policy breaches"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policies",
          "Violation is detected through automated or manual review processes"
        ]
      },
      {
        "id": "meta-cr-account-restrictions",
        "reference": "META-CR-RESTRICTIONS",
        "summary": "Meta may restrict or disable accounts based on content violations, strike history, and severity of policy breaches beyond just removing individual content.",
        "quote": "Depending on which policy your content goes against, your previous history of violations and the number of strikes you have, your account may also be restricted or disabled.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Pattern of policy violations and strike accumulation",
            "example": "Multiple Community Standards violations over time",
            "reason": "To determine appropriate account-level enforcement actions"
          }
        ],
        "removalCriteria": [
          "Specific policy type violated",
          "User's previous violation history",
          "Number of accumulated strikes",
          "Severity of the policy breach"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, with a structured appeal process including additional context and final decision communication.",
      "steps": [
        "User receives immediate notification of content removal with policy explanation",
        "User can disagree with decision and request another review",
        "User provides additional information or context during appeal",
        "Meta conducts review and communicates final decision",
        "User receives expectations about post-review outcomes"
      ]
    }
  },
  {
    "id": "facebook-new-1758221778122-3",
    "reference": "FB-CR-FORM",
    "title": "Facebook Copyright Report Form",
    "summary": "Direct reporting mechanism for copyright infringement claims under DMCA procedures.",
    "url": "https://www.facebook.com/help/contact/copyrightform",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "fb-cr-copyright",
        "reference": "FB-CR-FORM",
        "summary": "Facebook removes content that infringes copyright when reported by rights owners or their authorized representatives through the copyright report form.",
        "quote": "Copyright is a legal right that protects original works of authorship, such as film, music, books and art. This form is to be used only for reporting alleged infringements of your copyright.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of relationship to rights owner",
            "example": "I am the rights owner / I am reporting on behalf of my organization or client",
            "reason": "To establish authority to make the copyright claim"
          },
          {
            "description": "Contact information including full name, mailing address, and valid email",
            "example": "Professional or business email address",
            "reason": "For communication about the report and potential resolution"
          },
          {
            "description": "Description of copyrighted work and links to original content",
            "example": "URLs to examples on your website, Facebook Page or elsewhere on the web",
            "reason": "To identify the original copyrighted material being infringed"
          },
          {
            "description": "Direct URLs to the infringing content on Facebook",
            "example": "Links leading directly to the specific content you are reporting",
            "reason": "To locate the specific infringing content for removal"
          },
          {
            "description": "Electronic signature matching your full name",
            "example": "Your electronic signature should match your full name",
            "reason": "To authenticate the report under penalty of perjury"
          }
        ],
        "removalCriteria": [
          "Content copies copyrighted work without authorization",
          "Reporter is the rights owner or authorized representative",
          "Good faith belief that use is not authorized by rights owner, agent, or law",
          "Information in notice is accurate",
          "Reporter is authorized to act on behalf of rights owner"
        ]
      },
      {
        "id": "fb-cr-privacy-appearance",
        "reference": "FB-CR-FORM",
        "summary": "Facebook acknowledges that appearing in content may raise privacy concerns and directs users to privacy violation reporting for photos or videos that may violate privacy.",
        "quote": "Note that appearing in content does not necessarily mean you own the copyright to that content. If you think a photo or video on Facebook might violate your privacy, you can learn more by visiting the Help Center.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identification that you appear in the content",
            "example": "Selection of 'I appear in this content' option",
            "reason": "To establish your presence in the reported content"
          }
        ],
        "removalCriteria": [
          "Content contains your image or likeness",
          "Content violates your privacy rights (separate from copyright)"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758221778122-4",
    "reference": "FB-REPORT",
    "title": "Report Content on Facebook",
    "summary": "General content reporting mechanisms and procedures for various policy violations.",
    "url": "https://www.facebook.com/help/1380418588640631",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "fb-report-photos-videos",
        "reference": "FB-REPORT-PHOTOS-VIDEOS",
        "summary": "Facebook provides reporting mechanisms for photos and videos through the Report link near the content itself.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself. Below are some examples of how you can report content to us.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Access to the content or ability to locate it on the platform",
            "example": "Direct link to the photo or video post",
            "reason": "Required to use the Report link feature near the content"
          }
        ],
        "removalCriteria": [
          "Content must be classified as abusive content or spam",
          "Content must be accessible through Facebook's platform"
        ]
      },
      {
        "id": "fb-report-posts",
        "reference": "FB-REPORT-POSTS",
        "summary": "Facebook allows reporting of posts including those on user timelines through their standard reporting system.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself. Below are some examples of how you can report content to us.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Ability to access the post content",
            "example": "Post visible on timeline or in feed",
            "reason": "Needed to access the Report link functionality"
          }
        ],
        "removalCriteria": [
          "Post contains abusive content or spam",
          "Post violates Facebook's community standards"
        ]
      },
      {
        "id": "fb-report-blocked-content",
        "reference": "FB-REPORT-BLOCKED",
        "summary": "Facebook provides alternative reporting methods for users who cannot access content directly, such as when blocked by the poster.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Alternative identification of the content when direct access is not available",
            "example": "Screenshots, URLs, or other identifying information",
            "reason": "Required when the standard Report link cannot be accessed due to blocking or lack of account"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies",
          "Reporter has legitimate reason for being unable to access content directly"
        ]
      },
      {
        "id": "fb-report-privacy-violation",
        "reference": "FB-REPORT-PRIVACY",
        "summary": "Facebook has specific reporting mechanisms for privacy violations, which would include unauthorized sharing of private content.",
        "quote": "Reporting a Privacy Violation",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content was shared without permission",
            "example": "Proof of private nature of content or lack of consent",
            "reason": "Needed to establish privacy violation occurred"
          }
        ],
        "removalCriteria": [
          "Content was shared without the subject's consent",
          "Content violates privacy expectations",
          "Sharing constitutes a privacy violation under Facebook's policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758221778122-5",
    "reference": "FB-PRIVACY-REPORT",
    "title": "Report a Privacy Violation",
    "summary": "Specific reporting form for privacy-related violations including unauthorized image sharing.",
    "url": "https://www.facebook.com/help/contact/144059062408922",
    "accessTimestamp": "2025-09-18T18:56:18.123Z",
    "policies": [
      {
        "id": "fb-privacy-image-video",
        "reference": "FB-PRIVACY-REPORT-MAIN",
        "summary": "Facebook removes images and videos that violate privacy when reported by the person depicted or their authorized representative.",
        "quote": "Please note that this channel is reserved for people reporting potential violations of their privacy concerning their image or video on Facebook.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Specific URL link to the reported image or video",
            "example": "Direct link to Facebook post, photo, or video",
            "reason": "Required to locate and review the specific content for removal"
          },
          {
            "description": "Identity verification if reporting on behalf of another person",
            "example": "Documentation establishing legal guardian or authorized representative status",
            "reason": "To verify authority to request removal on someone else's behalf"
          }
        ],
        "removalCriteria": [
          "Content contains image or video of the reporting person without consent",
          "Request is made by the person depicted in the content",
          "Request is made by authorized legal guardian (for minors)",
          "Request is made by authorized legal representative"
        ]
      },
      {
        "id": "fb-privacy-minor-protection",
        "reference": "FB-PRIVACY-REPORT-MINOR",
        "summary": "Facebook requires parental or legal guardian consent for privacy violation reports involving minors, with special protections for children under 13.",
        "quote": "We are unable to remove content based on the request of someone who is not the legal guardian or parent of the minor. The right to request removal of an image/video of a minor lies solely with the minor's legal guardian or parent.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Legal guardian or parent status documentation",
            "example": "Documentation establishing legal guardian or parent relationship",
            "reason": "To verify authority to make privacy requests on behalf of minors"
          },
          {
            "description": "Self-reporting requirement for minors 13 and older",
            "example": "Minor must submit their own report through the form",
            "reason": "Privacy protection requiring direct consent from capable minors"
          }
        ],
        "removalCriteria": [
          "Content depicts a minor without parental/guardian consent",
          "Request is made by verified legal guardian or parent",
          "For minors 13+, they must self-report unless unable to do so",
          "Special handling for children under 13"
        ]
      },
      {
        "id": "fb-privacy-authorized-representative",
        "reference": "FB-PRIVACY-REPORT-AUTH",
        "summary": "Facebook only accepts privacy violation reports from the depicted person or their documented authorized representative, not from third parties.",
        "quote": "For privacy reasons, we can only support requests from either: - The person who appears in the content - An authorized agent or representative of the person who appears in the content",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation establishing authorized agent or representative status",
            "example": "Legal documentation proving authorization to act on behalf of the depicted person",
            "reason": "To prevent unauthorized removal requests and protect privacy rights"
          }
        ],
        "removalCriteria": [
          "Request is made by the person depicted in the content",
          "Request is made by documented authorized agent or representative",
          "Third-party requests without authorization are rejected"
        ]
      },
      {
        "id": "fb-privacy-sextortion-threats",
        "reference": "FB-PRIVACY-REPORT-THREATS",
        "summary": "Facebook provides specific support for users facing threats to share private content through a dedicated help process.",
        "quote": "If you need help because someone is threatening to share something you want to keep private, follow the steps outlined here.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Follow specialized reporting process for threats",
            "example": "Use dedicated threat reporting channel referenced in the form",
            "reason": "Threats to share private content require specialized handling beyond standard privacy violations"
          }
        ],
        "removalCriteria": [
          "Someone is threatening to share private content",
          "Proactive protection before content is shared"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
