import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community guidelines covering prohibited content including bullying, harassment, NCII, and other violations across Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate imagery and sextortion across Meta platforms.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults, and non-consensual intimate imagery.",
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
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the specific content for removal"
          },
          {
            "description": "Description of how the content violates the policy",
            "reason": "To understand the nature of the violation and apply appropriate enforcement"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate imagery shared without consent",
          "Content facilitates sextortion or threats involving intimate imagery",
          "Content coordinates sexual encounters in exploitative contexts"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including image-based abuse and targeted harassment using personal content.",
        "quote": "We remove content that appears to purposefully target private individuals with the intention of degrading or shaming them.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "reason": "To identify and review the specific harassment"
          },
          {
            "description": "Explanation of how the content targets and degrades the individual",
            "reason": "To assess whether the content meets the threshold for harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report appropriately"
          }
        ],
        "removalCriteria": [
          "Content purposefully targets private individuals for degradation or shaming",
          "Content includes unwanted sexualized commentary or imagery",
          "Content constitutes coordinated harassment against an individual"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private content without consent, including intimate imagery and personal information.",
        "quote": "We remove content that shares private residential information, private contact information, or intimate imagery without consent.",
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
            "description": "URL(s) of the content violating privacy",
            "reason": "To locate the privacy-violating material for removal"
          },
          {
            "description": "Explanation of how the content violates privacy expectations",
            "reason": "To determine if the content was shared without appropriate consent"
          },
          {
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish that consent was not given for public sharing"
          }
        ],
        "removalCriteria": [
          "Content shares intimate imagery without the subject's consent",
          "Content includes private residential or contact information shared maliciously",
          "Content violates reasonable expectations of privacy"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AI",
        "summary": "Prohibits impersonation and misrepresentation of identity, including unauthorized use of someone's images or information.",
        "quote": "We require people to use the name they go by in everyday life and prohibit impersonation.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL of the impersonating account or content",
            "reason": "To identify the account or content engaging in impersonation"
          },
          {
            "description": "Proof of your identity",
            "example": "Government-issued ID or official documentation",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how your identity is being misrepresented",
            "reason": "To understand the scope and nature of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses someone's name, photos, or information without authorization",
          "The impersonation is intended to deceive or mislead others",
          "Content misrepresents someone's identity for harmful purposes"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "CS-IP",
        "summary": "Prohibits infringement of third-party intellectual property rights, including unauthorized use of copyrighted images.",
        "quote": "We remove content reported to us by a rights holder as infringing their intellectual property rights.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate the specific content claimed to be infringing"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify you have the right to request removal of the content"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify the specific intellectual property being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark or other intellectual property rights",
          "Valid takedown notice submitted by verified rights holder"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits coordinated inauthentic behavior and the use of fake accounts to deceive or manipulate others.",
        "quote": "We remove accounts and content that engage in coordinated inauthentic behavior.",
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
            "description": "URL(s) of accounts or content engaging in inauthentic behavior",
            "reason": "To identify the specific accounts or content for investigation"
          },
          {
            "description": "Description of the coordinated or deceptive behavior",
            "reason": "To understand the pattern of inauthentic activity"
          }
        ],
        "removalCriteria": [
          "Accounts coordinate to mislead people about their identity or purpose",
          "Content is part of a coordinated effort to manipulate public discourse",
          "Fake accounts are used to amplify or distribute deceptive content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Updated legal terms effective January 1, 2025, governing use of Facebook, Messenger, and other Meta products, including content ownership, data usage, and platform misuse policies.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "fb-tos-intellectual-property",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "URL(s) of the infringing content on Facebook",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright owned by the complainant",
          "Content violates trademark rights",
          "Content involves distribution of counterfeit or pirated goods"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "That you do not own or have the necessary rights to share.",
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
            "description": "Evidence of ownership or creation of the content",
            "reason": "To demonstrate you have rights to the shared content"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To locate the content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content was shared without permission from the owner",
          "User does not have necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tos-content-removal-authority",
        "reference": "FB-TOS-3.2",
        "summary": "Facebook can remove or restrict access to content that violates their Terms of Service and Community Standards.",
        "quote": "We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2.",
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
            "description": "Report identifying the violating content",
            "reason": "To alert Facebook to content that violates their terms"
          },
          {
            "description": "Explanation of how the content violates Terms or Community Standards",
            "reason": "To help Facebook assess the violation"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook Terms of Service",
          "Content violates Community Standards",
          "Content violates other applicable Facebook policies"
        ]
      },
      {
        "id": "fb-tos-reporting-mechanism",
        "reference": "FB-TOS-3.2",
        "summary": "Facebook encourages users to report content or conduct that violates their rights or Facebook's terms and policies.",
        "quote": "To help support our community, we encourage you to report content or conduct that you believe violates your rights (including intellectual property rights) or our terms and policies, if this feature exists in your jurisdiction.",
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
            "description": "Description of how the content violates your rights",
            "reason": "To help Facebook understand the nature of the violation"
          },
          {
            "description": "Identification of the specific content or conduct",
            "reason": "To locate and review the reported material"
          }
        ],
        "removalCriteria": [
          "Content violates user's legal rights",
          "Content violates Facebook's terms and policies",
          "Conduct violates community guidelines"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeframe",
        "reference": "FB-TOS-3.3.3",
        "summary": "Content deletion may take up to 90 days after deletion request, with an additional 90 days to remove from backups and disaster recovery systems.",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
        "timeframes": {
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Maximum time to delete content after deletion request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the deletion process"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "Account deletion is requested",
          "Content is sent to trash"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review when content is removed for Community Standards violations, unless violations are serious/repeated or legal restrictions apply.",
      "steps": [
        "Facebook will notify users when content is removed for Community Standards violations",
        "Facebook will explain available options for requesting another review",
        "Users can request review unless they seriously or repeatedly violated Terms",
        "Review may not be available if it would expose Facebook or others to legal liability"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SAFETY-SECURITY",
        "summary": "Meta removes content that violates terms or policies through automated and manual review processes to detect, prevent and combat harmful or unlawful behavior.",
        "quote": "Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, investigate suspicious activity, detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "description": "Content that violates Meta's terms or policies",
            "example": "Posts, comments, audio, images, videos",
            "reason": "To identify policy violations requiring removal"
          },
          {
            "description": "Report of harmful content through Meta's reporting system",
            "example": "User reports of policy violations",
            "reason": "To trigger review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported and confirmed to violate community standards"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities.",
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
            "example": "Court-issued subpoena for specific user content",
            "reason": "Legal compliance requirement for content disclosure or removal"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or government authorities",
          "Court order requiring content removal",
          "Legal compliance with applicable law requirements"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-MEASURES",
        "summary": "Meta promotes safety, security and integrity by verifying accounts, investigating suspicious activity, and maintaining platform integrity through automated and manual review.",
        "quote": "To promote the safety, security and integrity of Meta Products, users, employees, property and the public. We may access or preserve your information for an extended amount of time.",
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
            "description": "Evidence of account impersonation or identity misuse",
            "example": "Fake profiles using someone else's photos",
            "reason": "To verify accounts and prevent identity misuse"
          },
          {
            "description": "Reports of suspicious or harmful activity",
            "example": "Harassment, threats, or malicious behavior",
            "reason": "To investigate and address safety concerns"
          }
        ],
        "removalCriteria": [
          "Account impersonation or identity misuse",
          "Suspicious activity that threatens user safety",
          "Content that violates platform integrity standards",
          "Harmful behavior that threatens users or the public"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-DATA-RIGHTS",
        "summary": "Users have rights to access, correct, erase, and object to processing of their information, including the ability to download and port their data.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Access and correct information, Withdraw consent, Port your information, Download your information, Erase information, Object",
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
            "description": "User identity verification",
            "example": "Account credentials or identity confirmation",
            "reason": "To ensure data rights requests are made by legitimate account holders"
          },
          {
            "description": "Specific identification of content to be removed or corrected",
            "example": "URLs or descriptions of specific posts or images",
            "reason": "To locate and process the correct information"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their personal information",
          "User withdraws consent for data processing",
          "User objects to processing based on legitimate interests",
          "Legal obligation to remove or correct information"
        ]
      },
      {
        "id": "meta-pp-facial-recognition",
        "reference": "META-PP-FACE-ANALYSIS",
        "summary": "Meta uses face analysis technology for identity verification and protection against impersonation, but only with user consent.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "User consent for facial recognition technology",
            "example": "Opt-in selection for face analysis features",
            "reason": "Required for processing biometric data under privacy laws"
          },
          {
            "description": "Photo or video selfie for identity verification",
            "example": "Selfie provided during account support contact",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for facial recognition processing",
          "Facial recognition data used without proper consent",
          "Impersonation detected through face analysis technology"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content removal decisions are reviewed by the independent Oversight Board, and users can contact Meta through various help centers and settings.",
      "steps": [
        "Contact Meta through Facebook Help Center or Instagram Help Center",
        "Use Facebook settings or Instagram settings to manage information",
        "Submit appeals through official Meta contact forms",
        "Some cases may be escalated to the Oversight Board for independent review"
      ]
    }
  },
  {
    "id": "facebook-new-1758232083055-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment protections, including heightened protections for minors and mass harassment prevention.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta removes unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
            "description": "Evidence of repeated unwanted contact or sexually harassing messages",
            "example": "Screenshots of multiple unwanted messages or sexually explicit communications",
            "reason": "To demonstrate pattern of harassment or sexual nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without prior solicitation"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes severe sexualized commentary, derogatory sexualized photoshop or drawings, and attacks through derogatory terms related to sexual activity.",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of severe sexualized commentary or derogatory sexual content",
            "example": "Screenshots of sexualized comments or manipulated sexual imagery",
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
        "summary": "Meta protects minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "All minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of false claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify targeting of protected individuals with sexual claims"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors",
          "Content makes claims about sexual activity of private adults",
          "Content makes claims about sexual activity of limited scope public figures",
          "Exception: Criminal allegations of non-consensual sexual touching against adults"
        ]
      },
      {
        "id": "meta-bh-content-sexualizing-adults",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, or limited scope public figures.",
        "quote": "All minors (private individuals and public figures), private adults and limited scope public figures are protected from: Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "description": "Evidence of content sexualizing protected individuals",
            "example": "Screenshots of sexualized content targeting minors or private adults",
            "reason": "To verify sexualization of protected categories of individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (private individuals and public figures)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T3-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report from target or authorized representative confirming imagery is unwanted and manipulated",
            "example": "Report from individual stating the manipulated image was created without consent",
            "reason": "To confirm the imagery is both manipulated and unwanted by the depicted person"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery of private minors",
          "Content contains manipulated imagery of private adults",
          "Content contains manipulated imagery of minor involuntary public figures",
          "Target or authorized representative has self-reported the content as unwanted"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta removes threats to release private phone numbers, residential addresses, email addresses, or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
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
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of messages threatening to share personal contact information or medical records",
            "reason": "To verify the threatening nature and private information involved"
          }
        ],
        "removalCriteria": [
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-PAGES-GROUPS",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
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
            "description": "Report from target or authorized representative confirming content is unwanted",
            "example": "Statement from individual or legal representative that the targeting content is unwanted",
            "reason": "To confirm the targeted individual does not want the content on the platform"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by the target or authorized representative as unwanted"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-SEXUALIZATION-PUBLIC",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from public figure or authorized representative that sexualized content is unwanted",
            "example": "Statement from public figure or their legal representative requesting removal of sexualized content",
            "reason": "To verify the public figure does not consent to the sexualized content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through Support Inbox notifications and allows users to request another review if they disagree with enforcement decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758232083055-1",
    "reference": "META-CR",
    "title": "Copyright Policy and DMCA Procedures",
    "summary": "Comprehensive copyright infringement reporting procedures and DMCA takedown processes for intellectual property violations.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-cr-copyright-infringement",
        "reference": "META-CR-COPYRIGHT",
        "summary": "Meta removes content that infringes copyright when reported by rights holders through their online forms or designated agent contact.",
        "quote": "If you believe that content on Facebook or Instagram is infringing on your copyright, you can take one or more of the following actions: You can report it to us by filling in this form for Facebook and this form for Instagram. You can contact our designated agent. If you contact our designated agent, please make sure that you include a complete copyright claim in your report.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim when contacting designated agent",
            "example": "DMCA-compliant notice with all required elements",
            "reason": "Required by law for proper DMCA takedown requests"
          },
          {
            "description": "Proof of copyright ownership or authorization",
            "example": "Documentation showing you own or represent the copyright holder",
            "reason": "Only copyright owners or authorized representatives can file reports"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright of the reporting party",
          "Reporter is the copyright owner or authorized representative",
          "Use does not fall under fair use or other copyright exceptions"
        ]
      },
      {
        "id": "meta-cr-unauthorized-content-posting",
        "reference": "META-CR-POSTING",
        "summary": "Users can only post content that doesn't violate someone else's intellectual property rights, with the safest approach being to only post self-created content.",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use and our Community Standards, you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms, such as Facebook and Instagram, doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content was posted without permission",
            "example": "Screenshots of unauthorized posting of copyrighted material",
            "reason": "To establish that content violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was posted without proper authorization or license",
          "Use doesn't qualify for fair use or copyright exceptions"
        ]
      },
      {
        "id": "meta-cr-repeat-infringer-policy",
        "reference": "META-CR-REPEAT",
        "summary": "Accounts that repeatedly post content infringing intellectual property rights may be disabled or lose functionality under Meta's repeat infringer policy.",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of multiple copyright infringement violations",
            "example": "Records of previous takedown notices and violations",
            "reason": "To establish pattern of repeated infringement"
          }
        ],
        "removalCriteria": [
          "User has repeatedly posted content that infringes intellectual property rights",
          "Multiple valid takedown requests have been filed against the account",
          "Pattern of infringement behavior has been established"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright-related content removal by following instructions provided in Meta's notification message, including DMCA counter-notification options.",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow appeal instructions provided in the notification message",
        "For DMCA cases, file a DMCA counter-notification if applicable",
        "Alternatively, contact the rights owner directly to resolve the issue"
      ]
    }
  },
  {
    "id": "facebook-new-1758232083055-2",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Images (NCII) Support",
    "summary": "Information about Meta's support for StopNCII.org initiative and proactive detection of non-consensual intimate imagery.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms including Facebook and Instagram.",
        "quote": "The non-consensual sharing of intimate images (NCII) — sometimes unfortunately referred to as \"revenge porn\" — can have a devastating impact on a person's life. We do not allow this content on our apps",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through StopNCII.org platform for proactive detection",
            "example": "Create a case through StopNCII.org to generate secure hash of intimate images",
            "reason": "Enables proactive detection across participating platforms while maintaining privacy"
          },
          {
            "description": "Report directly to platform using existing reporting mechanisms",
            "example": "Use Facebook/Instagram reporting tools for NCII content",
            "reason": "Direct platform reporting for immediate content review"
          }
        ],
        "removalCriteria": [
          "Images or videos featuring nudity or sexual content shared without consent",
          "Content identified through hash-matching technology from StopNCII.org submissions",
          "Intimate images reported through platform reporting mechanisms"
        ]
      },
      {
        "id": "meta-ncii-hash-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of intimate images reported through StopNCII.org.",
        "quote": "Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms. While participating companies use the hash they receive from StopNCII.org to identify images that someone has shared or is trying to share on their platforms, the original image never leaves the person's device.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Submit images through StopNCII.org to generate secure hash",
            "example": "Upload intimate images to StopNCII.org platform which creates hash without sharing actual images",
            "reason": "Creates digital fingerprint for detection while maintaining privacy and security"
          }
        ],
        "removalCriteria": [
          "Content matching hash values submitted through StopNCII.org",
          "Images detected through hash-matching technology before or during upload attempts"
        ]
      },
      {
        "id": "meta-ncii-resources",
        "reference": "META-NCII-003",
        "summary": "Meta provides resources and support for victims of non-consensual intimate image sharing.",
        "quote": "For years, we've been using photo- and video-matching technology to remove intimate images shared without consent, encouraging people who use our services to report this type of behavior or content, and offering resources to better support victims.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the specific content or behavior through platform reporting tools",
            "example": "Use Facebook/Instagram reporting mechanisms to flag NCII content",
            "reason": "Enables platform review and removal of violating content"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent of the person depicted",
          "Content identified through photo and video matching technology",
          "Reported NCII behavior or content"
        ]
      },
      {
        "id": "meta-ncii-age-restriction",
        "reference": "META-NCII-004",
        "summary": "StopNCII.org services are restricted to adults over 18, with separate resources available for minors.",
        "quote": "StopNCII.org is for adults over 18 years old who think an intimate image of them may be shared, or has already been shared, without their consent. For people who are under 18, there are other resources and organizations that can offer support, including the National Center for Missing & Exploited Children (NCMEC).",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Verification that user is over 18 years old for StopNCII.org access",
            "example": "Age verification required to use StopNCII.org platform",
            "reason": "Platform restriction to adult users only"
          },
          {
            "description": "For minors, contact specialized organizations like NCMEC",
            "example": "Users under 18 should contact National Center for Missing & Exploited Children",
            "reason": "Specialized support and resources for minors"
          }
        ],
        "removalCriteria": [
          "Adult users (18+) can use StopNCII.org for intimate image protection",
          "Minor users directed to specialized support organizations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758232083055-3",
    "reference": "META-ENF",
    "title": "Content Enforcement and Takedown Procedures",
    "summary": "Details on how Meta enforces Community Standards, removes violating content, and notifies users of policy violations.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T21:48:03.055Z",
    "policies": [
      {
        "id": "meta-enf-content-removal",
        "reference": "META-ENF-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of policy violation.",
        "quote": "If your content goes against the Community Standards, Meta will remove it. We'll also notify you so you can understand why we removed the content and how to avoid posting violating content in the future.",
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
            "description": "Content that violates Community Standards",
            "example": "Posts, images, or other content that goes against established policies",
            "reason": "To determine if content violates platform rules"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards",
          "Content violates established platform policies"
        ]
      },
      {
        "id": "meta-enf-strike-system",
        "reference": "META-ENF-STRIKES",
        "summary": "Meta uses a strike system to count violations and may restrict or disable accounts based on violation history and strike count.",
        "quote": "We use a strike system to count violations and hold you accountable for the content you post. Depending on which policy your content goes against, your previous history of violations and the number of strikes you have, your account may also be restricted or disabled.",
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
            "description": "Pattern of policy violations",
            "example": "Multiple instances of content that violates Community Standards",
            "reason": "To track repeat violations and determine appropriate account actions"
          }
        ],
        "removalCriteria": [
          "Multiple policy violations resulting in strikes",
          "Previous history of violations",
          "Severity of policy violation"
        ]
      },
      {
        "id": "meta-enf-notification-process",
        "reference": "META-ENF-NOTIFY",
        "summary": "Meta provides detailed notifications explaining policy violations, including which policy was violated and why the content was removed.",
        "quote": "We'll do our best to reference which part of our policies you didn't follow, and give a brief description of why we don't allow the content, so you can avoid having other content removed in the future.",
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
            "description": "Specific policy violation identification",
            "example": "Reference to specific Community Standards section",
            "reason": "To educate users about policy violations and prevent future violations"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policy",
          "Content requires educational notification to prevent future violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request a review if they believe Meta made a mistake in removing their content, and Meta will take another look at the decision.",
      "steps": [
        "Receive notification that content was removed",
        "Click option to request review if you disagree with the decision",
        "Provide additional information to support your appeal",
        "Submit review request",
        "Wait for final decision from Meta review team"
      ]
    }
  }
],
};
