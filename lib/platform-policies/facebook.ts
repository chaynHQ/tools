import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including NCII, harassment, bullying, and impersonation policies.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sexual exploitation of adults, including AI-generated content.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services, sexual massages, and filmed sexual activity. We also remove content that attempts to coordinate or recruit for activities that involve the non-consensual sharing of non-consensual intimate images.",
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
          "Content depicts nudity or sexual activity",
          "Image/video shared without the consent of the depicted individual",
          "Content facilitates non-consensual sharing of intimate images",
          "Subject is identifiable in the content"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
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
          "Content targets a private individual for abuse",
          "Content includes degrading or shaming material",
          "The behavior is repeated and intended to harm",
          "Content includes non-consensual intimate imagery"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We remove content that shares, offers, or asks for non-consensual intimate images of adults.",
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
            "description": "Evidence that the media was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains personally identifiable information used maliciously",
          "Content includes non-consensual intimate images"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AI",
        "summary": "Prohibits impersonating others, including using someone's images or identity to deceive.",
        "quote": "We require people to use the name they go by in everyday life so that you always know who you're connecting with.",
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
            "description": "Description of how your identity is being misused",
            "reason": "To understand how the account or content misrepresents your identity"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or other identifying information without authorization",
          "The profile, page, or content is intended to mislead or deceive others",
          "The account is not clearly marked as a parody, fan account, or commentary"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits coordinated inauthentic behavior and misrepresentation of identity or purpose.",
        "quote": "We don't allow people to misrepresent themselves on Facebook, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
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
            "description": "Description of the coordinated or inauthentic activity",
            "reason": "To understand the nature and scope of the violation"
          },
          {
            "description": "Evidence of misrepresentation or coordination",
            "reason": "To establish the inauthentic nature of the behavior"
          }
        ],
        "removalCriteria": [
          "Use of fake accounts or false identities",
          "Coordinated activity to mislead others about identity or purpose",
          "Artificial amplification of content or engagement",
          "Misrepresentation designed to enable other policy violations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook and Meta products, including content ownership, intellectual property rights, and updated provisions effective January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
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
            "description": "Proof of ownership or rights to the content",
            "reason": "To demonstrate that the person posting lacks necessary rights"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared without necessary rights or permissions"
        ]
      },
      {
        "id": "fb-tos-content-removal-process",
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
            "description": "Report through Facebook's reporting system",
            "reason": "To notify Facebook of potential violations"
          },
          {
            "description": "Description of how content violates Terms or Community Standards",
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
        "id": "fb-tos-reporting-system",
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
            "description": "Use of Facebook's reporting feature",
            "reason": "Primary mechanism for notifying Facebook of violations"
          },
          {
            "description": "Description of rights violation or policy breach",
            "reason": "To help Facebook understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Facebook's terms and policies",
          "Conduct violates Facebook's terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion",
        "reference": "FB-TOS-3.3.3",
        "summary": "Users can delete their own content at any time, with deletion taking up to 90 days to complete from Facebook's systems.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account.",
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
            "description": "Maximum time to delete content from Facebook's systems"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Access to the account that posted the content",
            "reason": "To delete content directly from the posting account"
          }
        ],
        "removalCriteria": [
          "User has access to the account that posted the content",
          "Content was posted to user's personal account"
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
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data, effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
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
            "example": "Reported harmful content",
            "reason": "To identify policy violations requiring removal"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users as violating community standards"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and may access, preserve and share user information to comply with applicable law and prevent harm.",
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
            "example": "Court order for content removal",
            "reason": "Legal compliance requirement"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or government authorities",
          "Court order requiring content removal",
          "Compliance with applicable law requirements"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-PROMOTION",
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
            "description": "Evidence of threats to safety, security or platform integrity",
            "example": "Suspicious account activity or harmful content",
            "reason": "To protect users and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Content threatens user safety or security",
          "Suspicious or fraudulent account activity",
          "Content undermines platform integrity",
          "Harmful behavior that violates community standards"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-DATA-RIGHTS",
        "summary": "Users have rights to access, correct, port, download, erase information and object to processing under GDPR and other data protection laws.",
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
            "description": "User identity verification for account holder",
            "example": "Account credentials or identity documents",
            "reason": "To verify legitimate account ownership for data rights requests"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their personal information",
          "User withdraws consent for data processing",
          "User objects to processing based on legitimate interests"
        ]
      },
      {
        "id": "meta-pp-facial-recognition",
        "reference": "META-PP-FACE-ANALYSIS",
        "summary": "Meta uses face analysis and facial recognition technology for identity verification and protection against impersonation when users select this feature.",
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
            "description": "Photo or video selfie for identity verification",
            "example": "Selfie provided when contacting support",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity indicating impersonation",
          "Identity misuse detected through face analysis",
          "Account verification failure"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content removal decisions are reviewed by the independent Oversight Board, which can overturn Meta's decisions on content moderation.",
      "steps": [
        "Content removal decision is made by Meta",
        "Cases may be selected for Oversight Board review",
        "Independent Oversight Board reviews the decision",
        "Board issues binding decision on whether content should be restored"
      ]
    }
  },
  {
    "id": "facebook-new-1758233331377-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention, including heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
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
        "id": "meta-bh-sexual-activity-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity targeting specific individuals.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of sexual statements directed at target",
            "example": "Screenshots of posts or messages containing sexual intent statements",
            "reason": "To verify sexual nature and targeting of statements"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity with specific person"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEXUALIZED",
        "summary": "Meta prohibits severe sexualized commentary and derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualized commentary or manipulated imagery",
            "example": "Screenshots of sexualized comments or manipulated photos",
            "reason": "To verify severity and derogatory nature of sexual content"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary about individual",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-terms",
        "reference": "META-BH-T1-TERMS",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity such as 'whore' or 'slut'.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
            "description": "Evidence of derogatory sexual terms being used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at individual",
            "reason": "To verify use of prohibited derogatory sexual terminology"
          }
        ],
        "removalCriteria": [
          "Content uses derogatory terms related to sexual activity as attacks",
          "Terms are specifically directed at targeting individual"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta prohibits threats to release an individual's private phone number, residential address, email address or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of messages threatening to share personal contact details or medical records",
            "reason": "To verify existence of threats against private information"
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
        "reference": "META-BH-T2-CLAIMS",
        "summary": "Meta protects minors, private adults and limited scope public figures from claims about sexual activity, except in context of criminal allegations against adults.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexual activity claims targeting protected individuals",
            "example": "Screenshots of posts making claims about someone's sexual behavior",
            "reason": "To verify claims are about sexual activity and target protected categories"
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
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-ADULT-SEX",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots of posts sexualizing the targeted person",
            "reason": "To verify sexualizing nature and protected status of target"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any status)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-IMAGERY",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report submitted by the person depicted or their legal representative",
            "reason": "Policy requires self-reporting for this protection tier"
          },
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing manipulated photos or images",
            "reason": "To verify imagery has been manipulated without consent"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery of private minors",
          "Content contains manipulated imagery of private adults (self-reported)",
          "Content contains manipulated imagery of minor involuntary public figures",
          "Target or authorized representative has reported the content as unwanted"
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
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative",
            "example": "Takedown request from the targeted individual or their legal representative",
            "reason": "Policy requires target or authorized representative to report unwanted targeting"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots showing targeting content on Facebook Pages, Groups, or Events",
            "reason": "To verify targeting is occurring through these specific surfaces"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative as unwanted",
          "Target is confirmed to be a private individual"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEX",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written statement from public figure or their representative requesting removal",
            "reason": "Policy requires confirmation that sexualizing content is unwanted by the public figure"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts sexualizing the public figure",
            "reason": "To verify content sexualizes the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted",
          "Confirmation is received from legitimate source"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeal process through their Support Inbox where users can request another review if they believe a decision was incorrect, with final responses provided after re-review.",
      "steps": [
        "Report content through Meta's reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through the appeal option",
        "Provide additional context or information during appeal",
        "Receive final response in Support Inbox after re-review"
      ]
    }
  },
  {
    "id": "facebook-new-1758233331377-1",
    "reference": "META-AIR",
    "title": "Meta Authentic Identity Representation Policy",
    "summary": "Policy covering impersonation, fake accounts, and authentic identity requirements on Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
    "policies": [
      {
        "id": "meta-air-impersonation-images",
        "reference": "META-AIR-IMPERSONATION",
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
            "description": "Evidence that someone is using your image(s), name, or likeness",
            "example": "Screenshots of the impersonating profile or content",
            "reason": "To verify impersonation is occurring"
          },
          {
            "description": "Proof that the use is intended to deceive others",
            "example": "Evidence showing deceptive behavior or false claims",
            "reason": "To establish intent to deceive as required by policy"
          }
        ],
        "removalCriteria": [
          "Using another person's image(s), name, or likeness",
          "Intent to deceive others through the impersonation"
        ]
      },
      {
        "id": "meta-air-unauthorized-representation",
        "reference": "META-AIR-UNAUTHORIZED",
        "summary": "Meta prohibits speaking in the voice of another person or entity for whom the user is not authorized to do so, including by creating Pages or Profiles.",
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
            "description": "Evidence that someone is speaking in your voice without authorization",
            "example": "Screenshots of unauthorized Pages or Profiles representing you",
            "reason": "To verify unauthorized representation is occurring"
          },
          {
            "description": "Proof of lack of authorization",
            "example": "Statement that you did not authorize the representation",
            "reason": "To establish that the representation is unauthorized"
          }
        ],
        "removalCriteria": [
          "Speaking in the voice of another person or entity",
          "Lack of authorization from the represented person or entity",
          "Creating Pages or Profiles to represent others without permission"
        ]
      },
      {
        "id": "meta-air-identity-misrepresentation",
        "reference": "META-AIR-MISREPRESENTATION",
        "summary": "Meta prohibits identity misrepresentation to mislead or deceive others, evade enforcement, or violate Community Standards, including through misleading profile information and using stock imagery.",
        "quote": "Engage in identity misrepresentation to mislead or deceive others, evade enforcement, or violate our Community Standards. We consider a number of factors when assessing misleading identity misrepresentation, such as: Repeated or significant changes to identity details, such as name or age; Misleading profile information, such as bio details and profile location; Using stock imagery",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of misleading identity misrepresentation",
            "example": "Screenshots showing repeated identity changes, misleading profile information, or stock imagery use",
            "reason": "To verify identity misrepresentation is occurring"
          },
          {
            "description": "Documentation of how the misrepresentation misleads or deceives",
            "example": "Explanation of how the false identity information is being used deceptively",
            "reason": "To establish intent to mislead or deceive others"
          }
        ],
        "removalCriteria": [
          "Identity misrepresentation intended to mislead or deceive others",
          "Identity misrepresentation to evade enforcement",
          "Identity misrepresentation that violates Community Standards",
          "Repeated or significant changes to identity details",
          "Misleading profile information including bio details and location",
          "Using stock imagery to misrepresent identity"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeal process through their Support Inbox where users can request another review if they believe a decision was incorrect, with final responses provided after re-review.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758233331377-2",
    "reference": "META-NCII",
    "title": "Meta NCII Prevention Initiative",
    "summary": "Information about Meta's non-consensual intimate imagery prevention tools and StopNCII.org partnership.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms and provides proactive detection and removal tools.",
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
            "description": "Intimate images that may be shared without consent",
            "example": "Photos or videos of a person which feature nudity or are sexual in nature",
            "reason": "To create hash fingerprints for proactive detection and removal"
          }
        ],
        "removalCriteria": [
          "Images are intimate in nature (featuring nudity or sexual content)",
          "Images are shared without the subject's consent",
          "Content violates Meta's community standards against NCII"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses hash-generating technology to proactively detect and prevent sharing of intimate images through StopNCII.org partnership.",
        "quote": "When someone is concerned their intimate images have been posted or might be posted to online platforms like Facebook or Instagram, they can create a case through StopNCII.org to proactively detect them. The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint.",
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
            "description": "Original intimate images to generate hash fingerprints",
            "example": "Images that may be shared without consent on Facebook or Instagram",
            "reason": "To create secure digital fingerprints for proactive detection across platforms"
          }
        ],
        "removalCriteria": [
          "Hash matches detected content on Meta platforms",
          "Content identified as intimate imagery",
          "Images shared without consent of the subject"
        ]
      },
      {
        "id": "meta-ncii-existing-removal",
        "reference": "META-NCII-003",
        "summary": "Meta removes intimate images shared without consent using photo and video-matching technology and encourages reporting of such behavior.",
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
            "description": "Report of intimate images shared without consent",
            "example": "Content reported through Meta's reporting mechanisms",
            "reason": "To identify and remove non-consensual intimate imagery"
          }
        ],
        "removalCriteria": [
          "Images match known intimate content through photo/video matching technology",
          "Content shared without subject's consent",
          "Content reported as violating community standards"
        ]
      },
      {
        "id": "meta-ncii-age-restriction",
        "reference": "META-NCII-004",
        "summary": "StopNCII.org services are restricted to adults over 18, with separate resources available for minors through specialized organizations.",
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
            "description": "Verification that user is over 18 years old",
            "example": "Age confirmation for StopNCII.org access",
            "reason": "To ensure appropriate handling of adult vs. minor intimate imagery cases"
          }
        ],
        "removalCriteria": [
          "User is over 18 years old for StopNCII.org services",
          "Content involves intimate imagery of adults",
          "Alternative resources provided for users under 18"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758233331377-3",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Content Enforcement Process",
    "summary": "Details on how Meta takes down violating content, strike system, and enforcement procedures.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T22:08:51.378Z",
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
            "description": "Content must violate Community Standards",
            "example": "Specific policy violation under Community Standards",
            "reason": "Meta only removes content that goes against established Community Standards"
          }
        ],
        "removalCriteria": [
          "Content violates Meta Community Standards",
          "Content is identified through detection systems or user reports"
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
            "example": "Multiple Community Standards violations",
            "reason": "Strike system tracks repeat violations to determine account restrictions"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "User has history of previous violations",
          "Strike count reaches threshold for account action"
        ]
      },
      {
        "id": "meta-enforcement-notification-process",
        "reference": "META-ENFORCEMENT-NOTIFICATION",
        "summary": "Meta provides detailed notifications when content is removed, including policy explanation and prevention guidance.",
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
            "reason": "Users need to understand which policy was violated to avoid future violations"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policy",
          "Violation can be clearly identified and explained to user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, with additional context provision option.",
      "steps": [
        "Submit appeal request through provided link",
        "Provide additional information or context about the content",
        "Wait for review team to conduct second review",
        "Receive final decision notification"
      ]
    }
  }
],
};
