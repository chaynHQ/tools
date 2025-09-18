import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads. Updated with merged standards effective November 12, 2024.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T22:18:47.587Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sextortion across Meta platforms.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services, sexual massages, and filmed sexual activity. We also restrict sexually explicit language that may lead to solicitation because some audiences within our global community may be sensitive to this type of content, and it may impede the ability for people to connect and share in a respectful manner.",
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
            "description": "Statement that the content was shared without consent",
            "reason": "To establish non-consensual sharing"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Content shared without consent of depicted individual",
          "Content used for sextortion or threats"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
            "description": "Description of how the content constitutes harassment",
            "reason": "To assess the nature and impact of the harassment"
          }
        ],
        "removalCriteria": [
          "Content targets a private individual for abuse",
          "Content includes degrading or shaming material",
          "The behavior is unwanted and causes harm"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing violates a reasonable expectation of privacy",
          "Content contains personal information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AI",
        "summary": "Prohibits impersonating others, including using someone's images or identity to deceive.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of the impersonation",
            "reason": "To understand how the account misrepresents your identity"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "The profile or content is intended to mislead or deceive others",
          "The account is not clearly marked as parody or fan content"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits inauthentic behavior including coordinated use of fake accounts and misrepresentation.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
            "description": "URL(s) of inauthentic accounts or content",
            "reason": "To identify the inauthentic behavior"
          },
          {
            "description": "Evidence of coordinated inauthentic behavior",
            "reason": "To establish patterns of misrepresentation"
          }
        ],
        "removalCriteria": [
          "Use of fake accounts to mislead others",
          "Coordinated inauthentic behavior",
          "Misrepresentation of identity or purpose"
        ]
      },
      {
        "id": "meta-cs-ai-generated-content",
        "reference": "CS-AI-GEN",
        "summary": "Community Standards apply to all content including AI-generated content such as deepfakes.",
        "quote": "Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.",
        "contentTypes": [
          "intimate",
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
            "description": "URL(s) of the AI-generated content",
            "reason": "To locate and identify the specific content"
          },
          {
            "description": "Evidence that content is AI-generated and violates policies",
            "reason": "To establish the artificial nature and policy violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content that violates any Community Standards policy",
          "Deepfake content used to deceive or harm",
          "Synthetic media that violates privacy or dignity"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products. Updated effective January 1, 2025 with stronger language around platform misuse and data scraping prevention.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T22:18:47.587Z",
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
            "reason": "To establish rights to the content being infringed"
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
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions from the owner"
        ]
      },
      {
        "id": "fb-tos-content-removal-process",
        "reference": "FB-TOS-3.2",
        "summary": "Facebook can remove or restrict access to content that violates their terms and will notify users unless serious violations occur or legal restrictions apply.",
        "quote": "We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove content that you have shared in violation of the Community Standards, we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability; harm our community of users; compromise or interfere with the integrity or operation of any of our services, systems or Products; where we are restricted due to technical limitations; or where we are prohibited from doing so for legal reasons.",
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
            "description": "Report through Facebook's reporting system",
            "reason": "To initiate the content review process"
          },
          {
            "description": "Specific identification of policy violations",
            "reason": "To help Facebook assess the content against their standards"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's Terms of Service",
          "Content violates Community Standards",
          "Content poses legal liability risks",
          "Content harms the user community"
        ]
      },
      {
        "id": "fb-tos-reporting-encouragement",
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
            "description": "Description of how your rights were violated",
            "reason": "To help Facebook understand the nature of the violation"
          },
          {
            "description": "Evidence of the rights violation",
            "reason": "To support the claim that your rights have been violated"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Facebook's terms and policies",
          "Conduct violates community standards"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeline",
        "reference": "FB-TOS-3.3.3",
        "summary": "Content deletion may take up to 90 days after the deletion process begins, with an additional 90 days to remove from backups and disaster recovery systems.",
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
          "response": null,
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Maximum time to delete content, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request through proper channels",
            "reason": "To initiate the formal deletion process"
          }
        ],
        "removalCriteria": [
          "User requests content deletion",
          "Account deletion is requested",
          "Content is sent to trash by user"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal decisions, unless serious violations occur or legal restrictions apply.",
      "steps": [
        "Facebook will notify you when content is removed for Community Standards violations",
        "Facebook will explain options available to request another review",
        "Review options may not be available for serious or repeated violations, legal liability issues, or technical limitations"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook and other Meta platforms.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T22:18:47.587Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SAFETY-SECURITY",
        "summary": "Meta removes content that violates terms or policies through automated and manual review processes to detect, prevent and combat harmful or unlawful behavior.",
        "quote": "Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "example": "Reported content showing harmful or unlawful behavior",
            "reason": "To identify violations requiring removal"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content involves harmful or unlawful behavior",
          "Content is reported by users for policy violations"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta accesses, preserves and shares information in response to legal requests from law enforcement, civil litigants, and government authorities, and to comply with applicable law.",
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
            "example": "Court-issued subpoena for specific user information",
            "reason": "Legal compliance requirement for information disclosure"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Court orders or law enforcement requests"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-PROMOTION",
        "summary": "Meta promotes safety, security and integrity by verifying accounts, investigating suspicious activity, and detecting threats to prevent harm to users and maintain platform integrity.",
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
            "description": "Evidence of threats to safety, security or platform integrity",
            "example": "Suspicious account activity or harmful content",
            "reason": "To protect users and maintain platform security"
          }
        ],
        "removalCriteria": [
          "Content threatens user safety or security",
          "Suspicious or fraudulent account activity",
          "Violations that compromise platform integrity",
          "Content that poses threats to personnel or property"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have rights to access, correct, download, erase their information, withdraw consent, object to processing, and make complaints about data handling.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Access and correct information, Withdraw consent, Port your information, Download your information, Erase information, Object, Make a complaint",
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
            "description": "User identity verification for account access",
            "example": "Account credentials or identity verification",
            "reason": "To ensure legitimate account owner is making the request"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their personal information",
          "User withdraws consent for data processing",
          "User objects to data processing under legitimate grounds"
        ]
      },
      {
        "id": "meta-pp-facial-recognition",
        "reference": "META-PP-FACIAL-RECOGNITION",
        "summary": "Meta uses face analysis including facial recognition technology for identity verification and protection against suspicious activity, but only with user consent.",
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
            "description": "User consent for facial recognition technology use",
            "example": "Explicit user selection of facial recognition features",
            "reason": "Required for identity verification and impersonation protection"
          },
          {
            "description": "Photo or video selfie for account support",
            "example": "Selfie provided when contacting support for account issues",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Impersonation detected through facial recognition",
          "Identity misuse identified via face analysis",
          "Suspicious activity involving user identity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content removal decisions are reviewed by the independent Oversight Board, which can overturn Meta's decisions on content violations.",
      "steps": [
        "Content removal decision is made by Meta",
        "Cases may be selected for Oversight Board review",
        "Independent Oversight Board reviews the decision",
        "Board can overturn or uphold Meta's original decision"
      ]
    }
  },
  {
    "id": "facebook-new-1758233927587-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying, harassment, and intimidation across Meta platforms with heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T22:18:47.587Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-T1-CONTACT",
        "summary": "Meta prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
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
            "reason": "To demonstrate the contact meets the criteria for violation"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating sexual activity, severe sexualized commentary, and derogatory sexualized content.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of sexual statements or derogatory sexualized content",
            "example": "Screenshots of posts containing sexual threats or derogatory sexual terms",
            "reason": "To verify the content violates sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Statements of intent to engage in sexual activity",
          "Severe sexualized commentary targeting individuals",
          "Derogatory sexualized photoshop or drawings",
          "Attacks using derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta prohibits threats to release an individual's private phone number, residential address, email address, or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
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
            "description": "Evidence of threats to release private information",
            "example": "Screenshots showing threats to share personal contact details or medical information",
            "reason": "To demonstrate credible threats against private information"
          }
        ],
        "removalCriteria": [
          "Threats to release private phone numbers",
          "Threats to release residential addresses",
          "Threats to release email addresses",
          "Threats to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta protects minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
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
            "description": "Evidence of false or unwanted sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify claims are being made about sexual activity"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing the target is a minor, private adult, or limited scope public figure",
            "reason": "To determine applicable protection level"
          }
        ],
        "removalCriteria": [
          "Claims about sexual activity targeting protected individuals",
          "Content does not involve criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, or limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing sexualized comments, images, or posts about the individual",
            "reason": "To demonstrate the content sexualizes the target"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence showing the target is a minor, private adult, or limited scope public figure",
            "reason": "To determine if enhanced protections apply"
          }
        ],
        "removalCriteria": [
          "Content sexualizes protected individuals",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to negatively highlight physical characteristics and unwanted manipulated imagery when self-reported by protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on). Unwanted manipulated imagery.",
        "contentTypes": [
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
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing altered photos that highlight or negatively emphasize physical features",
            "reason": "To verify the content has been manipulated for harassment purposes"
          },
          {
            "description": "Self-report confirmation for unwanted manipulated imagery",
            "example": "Report from the target individual or authorized representative",
            "reason": "Policy requires self-reporting for certain manipulated imagery violations"
          }
        ],
        "removalCriteria": [
          "Content manipulated to negatively highlight physical characteristics",
          "Unwanted manipulated imagery reported by target or representative"
        ]
      },
      {
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta requires self-reporting or authorized representative confirmation for certain harassment content including unwanted pages, targeted content, and sexually harassing contact.",
        "quote": "We remove this content when it is reported by the target or an authorized representative of the target. We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Report from target individual",
            "example": "Direct report from the person being targeted",
            "reason": "Policy requires confirmation from target for certain violations"
          },
          {
            "description": "Report from authorized representative",
            "example": "Report from legal representative, family member, or other authorized party",
            "reason": "Alternative when target cannot report directly"
          },
          {
            "description": "Evidence of unwanted nature",
            "example": "Documentation showing the content or contact is unwanted",
            "reason": "To establish that the content violates the unwanted contact policy"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted pages, groups, or events",
          "Content indicates direct targeting of individual",
          "Sexually harassing contact confirmed as unwanted",
          "Content sexualizing public figures confirmed as unwanted"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-MASS-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting at-risk individuals and disables accounts engaged in coordinated harassment campaigns.",
        "quote": "Remove directed mass harassment, when: Targeting, via any surface, 'individuals at heightened risk of offline harm', defined as: Human rights defenders, Minors, Victims of violent events/tragedies, Opposition figures in at-risk countries during election periods, Election officials, Government dissidents who have been targeted based on their dissident status, Ethnic and religious minorities in conflict zones, Member of a designated and recognizable at-risk group",
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
            "description": "Evidence of coordinated harassment campaign",
            "example": "Documentation showing multiple accounts targeting the same individual",
            "reason": "To demonstrate mass harassment is occurring"
          },
          {
            "description": "Evidence of at-risk status",
            "example": "Documentation showing the target is a human rights defender, minor, victim, election official, etc.",
            "reason": "To confirm the individual qualifies for heightened protection"
          },
          {
            "description": "Evidence of harassment content",
            "example": "Screenshots of harassing messages, posts, or comments across multiple accounts",
            "reason": "To verify the content violates harassment policies"
          }
        ],
        "removalCriteria": [
          "Coordinated targeting of individuals at heightened risk",
          "Mass harassment via personal surfaces like inbox or profiles",
          "Content violates bullying and harassment policies for private individuals",
          "Harassment based on protected characteristics",
          "State or adversarial network involvement in harassment campaigns"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through notifications and Support Inbox, allowing users to request another review if they believe enforcement decisions were incorrect.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758233927587-1",
    "reference": "META-TAKEDOWN",
    "title": "Meta Content Takedown and Enforcement",
    "summary": "Detailed explanation of Meta's content removal process, strike system, and enforcement actions for policy violations.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T22:18:47.587Z",
    "policies": [
      {
        "id": "meta-takedown-general",
        "reference": "META-TAKEDOWN-GENERAL",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanations and strike system enforcement.",
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
            "description": "Content must violate Community Standards",
            "example": "Specific policy violation under Community Standards",
            "reason": "Meta only removes content that goes against their established Community Standards"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Content is identified through detection systems or user reports"
        ]
      },
      {
        "id": "meta-takedown-notification",
        "reference": "META-TAKEDOWN-NOTIFICATION",
        "summary": "Meta provides detailed notifications when content is removed, including policy explanations and context about the violation.",
        "quote": "We'll let you know when something you posted goes against our Community Standards. Usually, this notice appears in your Feed when you log into Facebook or in your feed on Instagram. You can also find it in your Support Inbox on Facebook or Support Requests on Instagram.",
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
            "description": "Automated detection or user report of policy violation",
            "example": "System detection of violating content or user flag",
            "reason": "Meta needs to identify content that violates Community Standards before removal"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policy",
          "Violation is detected through automated systems or reported by users"
        ]
      },
      {
        "id": "meta-takedown-strikes",
        "reference": "META-TAKEDOWN-STRIKES",
        "summary": "Meta uses a strike system to track violations and may restrict or disable accounts based on violation history and severity.",
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
            "description": "Pattern of policy violations or severe single violation",
            "example": "Multiple Community Standards violations or serious single offense",
            "reason": "Strike system requires tracking violation history to determine appropriate enforcement action"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "User has history of previous violations",
          "Severity of policy violation warrants account action"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, with additional context and review options provided.",
      "steps": [
        "Receive notification of content removal with policy explanation",
        "Review the policy explanation and context provided",
        "Submit request for review if you believe a mistake was made",
        "Provide additional information during the review process",
        "Receive final decision after review is completed"
      ]
    }
  }
],
};
