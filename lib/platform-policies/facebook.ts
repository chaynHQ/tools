import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger, and Threads. As of November 12, 2024, unified standards apply to all Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images, including deepfakes and AI-generated content, as part of adult sexual exploitation policy.",
        "quote": "We remove content that facilitates, encourages or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services and sexual massages. We also remove content that attempts to coordinate or recruit for activities that involve the non-consensual sharing of non-consensual intimate images.",
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
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim in the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content involves non-consensual sharing of intimate images",
          "Content facilitates or coordinates sexual exploitation",
          "Content is used to threaten, intimidate, or harass individuals"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of targeted harassment.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to harm people who are unable to defend themselves. We also include certain instances of non-consensual intimate image sharing.",
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
          "Content targets a private individual for abuse or harassment",
          "Content includes degrading or shaming material",
          "The behavior is repeated or part of a coordinated effort",
          "Content involves non-consensual intimate image sharing"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits privacy violations including sharing intimate media or personal information without consent.",
        "quote": "We remove content that shares, offers or asks for personally identifiable information or other private information that could be used to harm people. We also provide people ways to report imagery that may have been shared without their permission.",
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
          "Content contains personally identifiable information used maliciously",
          "Content includes private communications shared without permission"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "We require people to use the name they go by in everyday life so that you always know who you're connecting with. We remove accounts that impersonate others by using their images, name, or other identifying information.",
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
            "description": "Description of how the account or content misrepresents your identity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "The profile, page, or content is intended to mislead or deceive others",
          "The impersonation is not clearly marked as parody, fan account, or commentary"
        ]
      },
      {
        "id": "meta-cs-adult-nudity",
        "reference": "CS-AN",
        "summary": "Restricts adult nudity and sexual activity, with exceptions for certain contexts, but removes non-consensual intimate imagery.",
        "quote": "We restrict the display of nudity or sexual activity because some people in our community may be sensitive to this type of content. We remove photographs or videos of sexual intercourse and genitals. We also remove content involving non-consensual intimate imagery.",
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
            "description": "URL(s) of the non-consensual intimate content",
            "reason": "To locate the specific content for review and removal"
          },
          {
            "description": "Statement that consent was not given for sharing",
            "reason": "To establish the non-consensual nature of the sharing"
          },
          {
            "description": "Information to verify the identity of the person in the content",
            "reason": "To confirm the reporter's connection to the content"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity shared without consent",
          "Content shows intimate imagery of identifiable individuals without permission",
          "Content violates the subject's reasonable expectation of privacy"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits using fake accounts or misrepresenting identity to deceive others or evade enforcement.",
        "quote": "We don't allow people to misrepresent themselves on our services, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL(s) of the fake accounts or inauthentic content",
            "reason": "To identify the inauthentic accounts or behavior"
          },
          {
            "description": "Evidence of coordinated inauthentic behavior",
            "reason": "To understand the scope and nature of the deceptive activity"
          },
          {
            "description": "Description of how the behavior violates authenticity standards",
            "reason": "To assess the violation and appropriate enforcement action"
          }
        ],
        "removalCriteria": [
          "Accounts use fake identities or misrepresent their purpose",
          "Behavior is designed to deceive users about identity or intent",
          "Activity involves coordinated efforts to manipulate platform features",
          "Content or accounts are used to evade previous enforcement actions"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025 with clarified language around platform misuse and data scraping.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "fb-tos-copyright",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright.",
        "quote": "That infringes or breaches someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "reason": "To establish copyright ownership of the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches someone else's intellectual property rights",
          "Content is shared without proper authorization from the rights holder"
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
            "description": "Proof of ownership or authorization to share the content",
            "reason": "To establish that the person sharing lacks necessary rights"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without authorization"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2",
        "summary": "Prohibits content that breaches Community Standards, with removal, blocking, or restriction of violating content.",
        "quote": "That breaches or attempts to circumvent these Terms, the Community Standards, and other terms and policies that apply to your use of our Products.",
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
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates Community Standards"
          },
          {
            "description": "Description of how the content violates Community Standards",
            "reason": "To establish the specific policy violation"
          }
        ],
        "removalCriteria": [
          "Content breaches Community Standards",
          "Content attempts to circumvent platform terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Platform can remove, block or restrict content that breaches terms and may suspend or disable accounts for violating conduct.",
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
            "description": "Evidence of terms violation",
            "reason": "To demonstrate that content breaches platform provisions"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal action"
          }
        ],
        "removalCriteria": [
          "Content is in breach of Terms of Service provisions",
          "Conduct violates platform policies"
        ]
      },
      {
        "id": "fb-tos-ip-reporting",
        "reference": "FB-TOS-3.2",
        "summary": "Platform encourages reporting of content that breaches intellectual property rights through available reporting features.",
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
            "description": "Evidence that content breaches your intellectual property rights",
            "reason": "To establish the rights violation"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content for review"
          }
        ],
        "removalCriteria": [
          "Content breaches intellectual property rights",
          "Content violates platform terms and policies"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Platform provides options to request review of content removal decisions, except in cases of serious violations, legal liability, or technical limitations.",
      "steps": [
        "Platform will notify users of content removal and explain review options",
        "Users can request another review unless they seriously or repeatedly violate terms",
        "Review may not be available if it would expose platform or others to legal liability",
        "Complaints Handling Process provides additional information on internal appeals system"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes content that violates terms or policies, including harmful or unlawful behavior, through automated and manual review processes.",
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
            "description": "Report the content through Meta's reporting system",
            "example": "Use the report button on the specific content",
            "reason": "Required for Meta to investigate and review potential violations"
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
            "description": "Valid legal request such as court order or subpoena",
            "example": "Search warrant, court order, production order, or subpoena",
            "reason": "Required to compel Meta to preserve or share user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Prevention of death or imminent bodily harm"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses facial recognition technology for identity verification and protection against impersonation when users select this option.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
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
            "description": "Photo or video selfie for account verification",
            "example": "Account photos or selfie verification when contacting support",
            "reason": "To verify identity and prevent impersonation or identity misuse"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Potential impersonation or identity misuse identified",
          "User requests identity verification protection"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-AUDIENCES",
        "summary": "Users can control how their information is shared on Meta Products through privacy settings and audience controls.",
        "quote": "Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Access to privacy settings and audience controls",
            "example": "Manage sharing settings through Facebook and Instagram privacy controls",
            "reason": "To control who can see and share your content"
          }
        ],
        "removalCriteria": [
          "Content shared beyond user's intended audience settings",
          "Unauthorized resharing of private content",
          "Violation of user's privacy preferences"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
        "quote": "Erase information: You have the right to request that we delete your information in certain circumstances, such as when it's no longer needed for the purposes for which it was collected.",
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
            "description": "Request through official Meta channels for data erasure",
            "example": "Submit erasure request through Facebook or Instagram settings",
            "reason": "To exercise legal right to data deletion under applicable privacy laws"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for original collection purpose",
          "User withdraws consent for data processing",
          "Information processed unlawfully",
          "Erasure required for legal compliance"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal processes through the Oversight Board for content moderation decisions and through privacy settings for data processing objections.",
      "steps": [
        "Decisions about content violations may be reviewed by the Oversight Board",
        "Users can object to data processing through Facebook and Instagram settings",
        "Contact Meta through official channels for privacy-related complaints",
        "Lodge complaints with supervisory authorities like the Irish Data Protection Commission"
      ]
    }
  },
  {
    "id": "facebook-new-1758222672403-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy addressing bullying, harassment, and intimidation across Meta platforms with heightened protections for minors and involuntary public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "META-BH-TIER1",
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
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-TIER1",
        "summary": "Meta removes severe sexualized commentary and derogatory sexualized photoshop or drawings targeting any individual.",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
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
            "description": "Evidence of severe sexualized commentary or manipulated sexual imagery",
            "example": "Screenshots of sexualized comments or manipulated photos",
            "reason": "To verify the sexual and derogatory nature of the content"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "META-BH-TIER1",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity (e.g., whore, slut) for all users.",
        "quote": "Everyone is protected from: Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of derogatory sexual terms being used to attack the individual",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at the person",
            "reason": "To confirm the use of prohibited derogatory sexual language"
          }
        ],
        "removalCriteria": [
          "Content uses derogatory terms related to sexual activity to attack individuals"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-TIER1",
        "summary": "Meta removes threats to release an individual's private phone number, residential address, email address or medical records.",
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
            "description": "Evidence of threats to release private contact information or medical records",
            "example": "Screenshots of messages threatening to share phone number, address, email, or medical information",
            "reason": "To verify the threatening nature and private information at risk"
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
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-TIER2",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in criminal allegation contexts.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of claims about sexual activity and confirmation of protected status",
            "example": "Screenshots of sexual activity claims and verification that target is minor, private adult, or limited scope public figure",
            "reason": "To verify prohibited sexual claims and confirm enhanced protection eligibility"
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
        "reference": "META-BH-TIER2",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
            "description": "Evidence of sexualizing content and confirmation of protected status",
            "example": "Screenshots of sexualizing content and verification that target is minor, private adult, or limited scope public figure",
            "reason": "To verify sexualizing nature and confirm enhanced protection eligibility"
          }
        ],
        "removalCriteria": [
          "Target is a minor, private adult, or limited scope public figure",
          "Content sexualizes the individual"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-TIER2",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics for protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
            "description": "Evidence of manipulated imagery highlighting physical characteristics and confirmation of protected status",
            "example": "Screenshots of images with circles, arrows, or other modifications highlighting body parts",
            "reason": "To verify image manipulation and confirm protection eligibility"
          }
        ],
        "removalCriteria": [
          "Target is minor, private adult, or limited scope public figure",
          "Content manipulates images to highlight physical characteristics",
          "Manipulation negatively draws attention to specific body parts"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-REPORTING",
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
            "example": "Direct report from the individual being targeted or their legal representative",
            "reason": "To confirm the content is unwanted by the person being targeted"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Target or authorized representative reports content as unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-sexualizing-public",
        "reference": "META-BH-REPORTING",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative that sexualizing content is unwanted",
            "example": "Direct communication from public figure or their representative stating content is unwanted",
            "reason": "To verify the public figure does not consent to the sexualizing content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-sexual-harassment",
        "reference": "META-BH-REPORTING",
        "summary": "Meta removes sexually harassing contact when confirmed as unwanted by the recipient or authorized representative.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or authorized representative that sexual contact is unwanted",
            "example": "Statement from recipient or their representative confirming the sexual contact is unwanted",
            "reason": "To verify the recipient does not consent to the sexual contact"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing in nature",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through their Support Inbox system where users can request another review if they believe a decision was wrong.",
      "steps": [
        "Report content through Meta's reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758222672403-1",
    "reference": "META-AID",
    "title": "Meta Authentic Identity Representation Policy",
    "summary": "Policy governing authentic identity requirements and impersonation prevention on Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "meta-aid-impersonation-images",
        "reference": "META-AID-IMPERSONATION",
        "summary": "Meta prohibits impersonating another person or entity by using their image(s), name, or likeness with the aim to deceive others.",
        "quote": "Impersonate another person or entity by: Using their image(s), name, or likeness with the aim to deceive others",
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
            "description": "Evidence that someone is using your images, name, or likeness to deceive others",
            "example": "Screenshots of the impersonating profile or content",
            "reason": "To verify impersonation and identity misrepresentation"
          }
        ],
        "removalCriteria": [
          "Using another person's image(s), name, or likeness with the aim to deceive others",
          "Speaking in the voice of another person or entity without authorization"
        ]
      },
      {
        "id": "meta-aid-identity-misrepresentation",
        "reference": "META-AID-MISREPRESENTATION",
        "summary": "Meta restricts accounts that engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate Community Standards.",
        "quote": "Engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate our Community Standards. We consider a number of factors when assessing misleading identity misrepresentation, such as: Repeated or significant changes to identity details, such as name or age; Misleading profile information, such as bio details and profile location; Using stock imagery",
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
            "description": "Evidence of misleading identity misrepresentation including repeated changes to identity details or misleading profile information",
            "example": "Documentation showing false identity details or use of stock imagery",
            "reason": "To assess whether the account is engaging in deceptive identity practices"
          }
        ],
        "removalCriteria": [
          "Repeated or significant changes to identity details, such as name or age",
          "Misleading profile information, such as bio details and profile location",
          "Using stock imagery to misrepresent identity",
          "Identity misrepresentation to mislead or deceive others"
        ]
      },
      {
        "id": "meta-aid-unauthorized-representation",
        "reference": "META-AID-UNAUTHORIZED",
        "summary": "Meta prohibits speaking in the voice of another person or entity for whom the user is not authorized to do so, including creating unauthorized Pages or Profiles.",
        "quote": "Speaking in the voice of another person or entity for whom the user is not authorized to do so (e.g. by creating a Page or Profile)",
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
            "description": "Evidence that someone is creating profiles or pages speaking in your voice without authorization",
            "example": "Screenshots of unauthorized profiles or pages representing you",
            "reason": "To verify unauthorized representation and protect authentic identity"
          }
        ],
        "removalCriteria": [
          "Creating a Page or Profile to speak in the voice of another person without authorization",
          "Representing another entity without proper authorization"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeal process where users can request another review if they disagree with enforcement decisions, with final responses provided through the Support Inbox.",
      "steps": [
        "If people think Meta got the decision wrong, they can request another review",
        "Meta will send a final response after re-reviewing the content to the Support Inbox",
        "Users can provide additional information during the appeal process"
      ]
    }
  },
  {
    "id": "facebook-new-1758222672403-2",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Content Enforcement and Takedown Process",
    "summary": "Documentation of Meta's three-part approach to content enforcement: remove, reduce and inform, including strike system and account restrictions.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T19:11:12.403Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
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
            "example": "Any content that goes against Meta's Community Standards policies",
            "reason": "Required to demonstrate policy violation for removal"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards"
        ]
      },
      {
        "id": "meta-enforcement-strike-system",
        "reference": "META-ENFORCEMENT-STRIKES",
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
            "reason": "Used to determine appropriate enforcement action beyond content removal"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards policies",
          "User has previous history of violations",
          "User has accumulated strikes on their account"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, and Meta will take another look at the decision.",
      "steps": [
        "Receive notification of content removal in Feed or Support Inbox/Support Requests",
        "Review the policy explanation and reason for removal",
        "Submit appeal request if you believe a mistake was made",
        "Provide additional information during the review process",
        "Receive final decision after review is completed"
      ]
    }
  }
],
};
