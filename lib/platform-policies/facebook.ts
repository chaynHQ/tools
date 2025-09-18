import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sexual exploitation of adults.",
        "quote": "We prohibit content that sexually exploits or endangers adults. We remove content that facilitates, encourages or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services and sexual massages. We also remove content that depicts, threatens to share, makes fun of, or requests non-consensual intimate images.",
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
            "description": "Statement that the content depicts, threatens to share, or requests non-consensual intimate images",
            "reason": "To establish the violation of adult sexual exploitation policy"
          },
          {
            "description": "Information to identify the victim in the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts non-consensual intimate images",
          "Content threatens to share intimate images",
          "Content makes fun of non-consensual intimate images",
          "Content requests non-consensual intimate images"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images to degrade or shame individuals.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit sharing intimate images of a person without their consent.",
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
            "description": "Description of how the content constitutes bullying or harassment",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report"
          }
        ],
        "removalCriteria": [
          "Content is intended to degrade, intimidate, or silence someone",
          "Content involves repeated harassing behavior",
          "Content includes sharing intimate images without consent for harassment purposes"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and images without consent, protecting individual privacy rights.",
        "quote": "We remove content that shares private information or images without consent. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates privacy",
            "reason": "To understand the nature of the privacy violation"
          },
          {
            "description": "Evidence that the information or images were private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content shares private information without consent",
          "Content shares private images without consent",
          "The sharing violates reasonable expectation of privacy"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
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
            "description": "URL of the impersonating profile, page, or content",
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
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits coordinated inauthentic behavior and misrepresentation of identity or purpose to deceive users.",
        "quote": "We don't allow people to misrepresent themselves on our services, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
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
            "description": "URL(s) of accounts or content exhibiting inauthentic behavior",
            "reason": "To identify and investigate the inauthentic activity"
          },
          {
            "description": "Description of the deceptive behavior or misrepresentation",
            "reason": "To understand the nature of the inauthentic activity"
          },
          {
            "description": "Evidence of coordination or artificial manipulation",
            "reason": "To establish patterns of inauthentic behavior"
          }
        ],
        "removalCriteria": [
          "Use of fake accounts or false identities",
          "Coordinated efforts to mislead users about identity or purpose",
          "Artificial boosting of content popularity through deceptive means"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
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
          "Content violates copyright or trademark protections"
        ]
      },
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
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
            "description": "Evidence that content was shared without permission",
            "reason": "To demonstrate unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership or necessary rights",
          "Content is posted without permission from the rights holder"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches their terms and will notify users with options for review unless violations are serious or repeated.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove, block or restrict content that you have shared for violation of the Community Standards we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability; harm our community of users; compromise or interfere with the integrity or operation of any of our services, systems or Products; where we are restricted due to technical limitations; or where we are prohibited from doing so for legal reasons.",
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
            "reason": "To alert Meta to potential policy violations"
          },
          {
            "description": "Explanation of how content violates terms or Community Standards",
            "reason": "To help Meta assess the violation"
          }
        ],
        "removalCriteria": [
          "Content breaches Meta's Terms of Service",
          "Content violates Community Standards",
          "Content poses legal liability risks",
          "Content harms the community or compromises platform integrity"
        ]
      },
      {
        "id": "fb-tos-reporting-system",
        "reference": "FB-TOS-3.2",
        "summary": "Users are encouraged to report content or conduct that breaches their rights or Meta's terms and policies through the reporting system.",
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
            "description": "Identification of the content or conduct to be reported",
            "reason": "To specify what is being reported"
          },
          {
            "description": "Explanation of how rights are breached or terms violated",
            "reason": "To provide context for the report"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content or conduct violates Meta's terms and policies"
        ]
      },
      {
        "id": "fb-tos-repeated-ip-violations",
        "reference": "FB-TOS-4.2",
        "summary": "Meta may disable or delete accounts for repeated intellectual property infringement violations.",
        "quote": "We may also disable or delete your account if you repeatedly infringe other people's intellectual property rights or where we are required to do so for legal reasons.",
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
            "reason": "To establish pattern of violations"
          },
          {
            "description": "Evidence of intellectual property rights",
            "reason": "To prove ownership of infringed content"
          }
        ],
        "removalCriteria": [
          "Account repeatedly infringes other people's intellectual property rights",
          "Legal requirements mandate account deletion"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeframes",
        "reference": "FB-TOS-3.3.3",
        "summary": "Content deletion may take up to 90 days after deletion request, with an additional 90 days to remove from backups and disaster recovery systems.",
        "quote": "It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you choose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
          "User requests content deletion",
          "Account deletion process is initiated"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions unless violations are serious/repeated or other restrictions apply. Users can also access a Complaints Handling Process.",
      "steps": [
        "Meta will explain options for requesting review when content is removed",
        "Users can request another review unless violations are serious or repeated",
        "Access Complaints Handling Process for additional dispute resolution"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes content that violates terms or policies, including harmful or unlawful behavior, through automated and manual review processes.",
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
            "example": "Using platform reporting tools to flag violating content",
            "reason": "Required for Meta to review and potentially remove content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is identified through user reports or automated detection"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta accesses, preserves, uses and shares information in response to legal requests from law enforcement and government authorities, and to comply with applicable law.",
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
            "reason": "Legal compliance requirement for information disclosure"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Promotion of safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses face analysis and facial recognition technology for identity verification and protection against impersonation when users select this option.",
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
            "description": "Photo or video selfie when contacting for account support",
            "example": "Selfie verification for account recovery",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Account information and account photos",
            "example": "Profile photos and account details",
            "reason": "For identity verification processes"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Identity misuse or impersonation identified",
          "Account verification required for security"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-CONTROL",
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
            "example": "Adjusting post visibility settings",
            "reason": "To control information sharing preferences"
          }
        ],
        "removalCriteria": [
          "Content shared beyond user's intended audience settings",
          "Unauthorized sharing of user's private content by others"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Erase information",
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
            "example": "Using Facebook or Instagram settings to request data deletion",
            "reason": "Exercise of legal right to erasure under data protection laws"
          }
        ],
        "removalCriteria": [
          "Valid request for data erasure under applicable data protection laws",
          "Information no longer necessary for original processing purpose",
          "User withdraws consent for data processing"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Content moderation decisions can be reviewed by Meta's Oversight Board in some cases, and users have rights to object to processing and make complaints to supervisory authorities.",
      "steps": [
        "Decisions about policy violations may be reviewed by the Oversight Board",
        "Users can object to information processing through Facebook and Instagram settings",
        "Users can make complaints to Meta Platforms Ireland's lead supervisory authority (Irish Data Protection Commission) or local supervisory authority",
        "Users can contact Meta's Data Protection Officer for privacy-related concerns"
      ]
    }
  },
  {
    "id": "facebook-new-1758224487281-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention, including heightened protection for minors and mass harassment provisions.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
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
            "description": "Report of unwanted contact",
            "example": "Screenshots of repeated messages or sexually harassing content",
            "reason": "To verify the contact meets the criteria for removal"
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
            "description": "Evidence of sexualized commentary or manipulated imagery",
            "example": "Screenshots of derogatory sexual terms or photoshopped images",
            "reason": "To identify content that violates sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks individuals using derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
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
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of threats to share personal contact details or medical records",
            "reason": "To verify threats against private information sharing"
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
        "reference": "META-BH-T2-SEXUAL-CLAIMS",
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in criminal allegation contexts.",
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
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify content makes inappropriate sexual claims"
          }
        ],
        "removalCriteria": [
          "Content makes claims about individual's sexual activity",
          "Target is a minor, private adult, or limited scope public figure",
          "Content is not in context of criminal allegations against adults"
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
            "example": "Screenshots of posts that sexualize the individual",
            "reason": "To verify content inappropriately sexualizes the target"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult individual",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to negatively highlight physical characteristics and unwanted manipulated imagery when self-reported by private individuals.",
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
            "description": "Evidence of manipulated imagery targeting physical characteristics",
            "example": "Screenshots of edited photos highlighting or circling body parts",
            "reason": "To verify content has been manipulated to target physical features"
          },
          {
            "description": "Self-report from target for unwanted manipulated imagery",
            "example": "Report from the individual depicted in manipulated content",
            "reason": "To confirm the manipulated imagery is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to negatively highlight physical characteristics",
          "Content contains unwanted manipulated imagery (requires self-report)",
          "Target is covered under appropriate protection tier"
        ]
      },
      {
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta removes certain harassment content when reported by the target or their authorized representative, including unwanted pages, groups, events targeting private individuals.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target. We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "example": "Direct report from the individual being targeted or their legal representative",
            "reason": "To confirm the content is unwanted by the person being targeted"
          },
          {
            "description": "Evidence of targeting through pages, groups, or events",
            "example": "Screenshots of unwanted pages or groups created about the individual",
            "reason": "To verify the targeting behavior exists"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through pages, groups, or events",
          "Target or authorized representative reports the content as unwanted",
          "Content meets harassment policy violations for the individual's protection tier"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEX",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or their authorized representative.",
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
            "description": "Confirmation from public figure or authorized representative",
            "example": "Direct communication from the public figure or their legal team",
            "reason": "To verify the sexualizing content is unwanted by the public figure"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts that sexualize the public figure",
            "reason": "To verify content inappropriately sexualizes the individual"
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
      "summary": "Meta provides appeal options through notifications and Support Inbox, allowing users to request another review if they believe the decision was wrong.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758224487281-1",
    "reference": "META-AIR",
    "title": "Authentic Identity Representation Policy",
    "summary": "Policy covering impersonation, fake accounts, and authentic identity requirements on Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
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
            "description": "Evidence that someone is using your images, name, or likeness",
            "example": "Screenshots of the impersonating profile or content",
            "reason": "To verify impersonation is occurring"
          },
          {
            "description": "Proof of your authentic identity",
            "example": "Government-issued ID or other verification documents",
            "reason": "To confirm you are the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Using another person's image(s), name, or likeness with intent to deceive",
          "Creating profiles or pages that speak in the voice of another person without authorization"
        ]
      },
      {
        "id": "meta-air-unauthorized-representation",
        "reference": "META-AIR-UNAUTHORIZED",
        "summary": "Meta prohibits speaking in the voice of another person or entity for whom the user is not authorized to do so, including by creating unauthorized Pages or Profiles.",
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
            "description": "Evidence of unauthorized representation",
            "example": "Screenshots of fake profiles or pages claiming to represent you",
            "reason": "To verify unauthorized representation is occurring"
          },
          {
            "description": "Proof you have not authorized this representation",
            "example": "Statement confirming lack of authorization",
            "reason": "To establish the representation is unauthorized"
          }
        ],
        "removalCriteria": [
          "Creating profiles or pages that represent another person without authorization",
          "Speaking in the voice of another entity without proper authorization"
        ]
      },
      {
        "id": "meta-air-identity-misrepresentation",
        "reference": "META-AIR-MISREPRESENTATION",
        "summary": "Meta restricts accounts that engage in identity misrepresentation to mislead or deceive others, including through misleading profile information and using stock imagery.",
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
            "example": "Screenshots showing false profile information or stock imagery use",
            "reason": "To verify identity misrepresentation is occurring"
          },
          {
            "description": "Documentation of how the misrepresentation is misleading or deceptive",
            "example": "Explanation of how the false identity is being used to deceive",
            "reason": "To establish the deceptive nature of the misrepresentation"
          }
        ],
        "removalCriteria": [
          "Repeated or significant changes to identity details to mislead others",
          "Using misleading profile information including bio details and location",
          "Using stock imagery to create false identity",
          "Identity misrepresentation used to evade enforcement or violate Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594?ref=tc",
      "summary": "Meta provides a review and appeal process through their Support Inbox system where users can request another review if they disagree with enforcement decisions.",
      "steps": [
        "Submit initial report through the universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Request another review if you disagree with the decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758224487281-2",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy including DMCA procedures, reporting mechanisms, and appeal processes for intellectual property violations.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "META-COPYRIGHT-INFRINGEMENT",
        "summary": "Meta removes content that infringes copyright when reported by rights holders through official forms, including photos and videos posted without permission.",
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
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "Original photo, video, or other copyrighted material",
            "reason": "To establish ownership and infringement"
          },
          {
            "description": "Contact information including valid email address",
            "example": "Business or professional email address",
            "reason": "For communication about the report and potential counter-notifications"
          },
          {
            "description": "Proof of authorization if filing on behalf of rights holder",
            "example": "Written authorization from copyright owner",
            "reason": "Only copyright owners or authorized representatives can file reports"
          }
        ],
        "removalCriteria": [
          "Content posted without permission from copyright owner",
          "Content that facilitates copyright infringement through unauthorized devices or services",
          "Use of copyrighted material that doesn't qualify for fair use or other exceptions"
        ]
      },
      {
        "id": "meta-copyright-reporting",
        "reference": "META-COPYRIGHT-REPORTING",
        "summary": "Copyright infringement can be reported through Meta's online forms for Facebook and Instagram, with reports processed under DMCA procedures.",
        "quote": "If you believe that content on Facebook or Instagram is infringing on your copyright, you can take one or more of the following actions: You can report it to us by filling in this form for Facebook and this form for Instagram. You can contact our designated agent.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete DMCA-compliant copyright claim",
            "example": "Identification of copyrighted work, location of infringing content, contact information",
            "reason": "Required for proper DMCA processing"
          },
          {
            "description": "Good faith belief statement that use is not authorized",
            "example": "Statement that you believe the use is not authorized by copyright owner",
            "reason": "DMCA requirement for valid takedown notice"
          }
        ],
        "removalCriteria": [
          "Valid copyright ownership or authorized representation",
          "Identification of specific infringing content",
          "Good faith belief that use is unauthorized"
        ]
      },
      {
        "id": "meta-repeat-infringer",
        "reference": "META-REPEAT-INFRINGER",
        "summary": "Meta disables accounts or removes pages for users who repeatedly post content that infringes intellectual property rights.",
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
            "description": "Documentation of multiple infringement incidents",
            "example": "Previous takedown notices and violations",
            "reason": "To establish pattern of repeated infringement"
          }
        ],
        "removalCriteria": [
          "Multiple instances of intellectual property infringement",
          "Pattern of posting unauthorized copyrighted content",
          "Failure to respect previous takedown notices"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals through instructions provided in removal notifications, including DMCA counter-notifications for eligible cases.",
      "steps": [
        "Receive notification from Meta with removal details and rights holder information",
        "Follow appeal instructions provided in the notification message",
        "For DMCA cases, file counter-notification if content was removed in error",
        "Contact rights holder directly to resolve the issue if appropriate"
      ]
    }
  },
  {
    "id": "facebook-new-1758224487281-3",
    "reference": "META-APPEALS",
    "title": "Content Appeals Process",
    "summary": "Detailed process for appealing content removal decisions, including Oversight Board procedures and review mechanisms.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-18T19:41:27.281Z",
    "policies": [
      {
        "id": "meta-appeals-content-removal",
        "reference": "META-APPEALS-PROCESS",
        "summary": "Meta provides appeals for the vast majority of content violation types on Facebook and Instagram, allowing users to request another review of removed content.",
        "quote": "Today, we offer appeals for the vast majority of violation types on Facebook and Instagram. We don't offer appeals for violations with extreme safety concerns, such as child exploitation imagery.",
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
            "description": "Disagreement with initial decision and request for review",
            "example": "Selecting 'disagree' option when notified of content removal",
            "reason": "To trigger the appeal review process"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's Community Standards",
          "Content poses extreme safety concerns (not eligible for appeal)"
        ]
      },
      {
        "id": "meta-appeals-reporter-appeals",
        "reference": "META-APPEALS-REPORTER",
        "summary": "Meta provides appeals not just for content that was acted upon, but also for content that was reported but not acted on.",
        "quote": "We also provide appeals not just for content that we took action on, but also for content that was reported but not acted on. These reporter appeals are not included in the Community Standards Enforcement Report.",
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
            "description": "Original report of violating content",
            "example": "Previously submitted report that resulted in no action",
            "reason": "To establish basis for reporter appeal"
          }
        ],
        "removalCriteria": [
          "Content was reported but not initially acted upon",
          "Reporter believes content violates Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta's multi-stage appeal process involves notification of policy violation, option to disagree and request review, resubmission for another review, and escalation to additional reviewers if needed.",
      "steps": [
        "User receives notification that content was removed for policy violation",
        "User is given option to accept decision or disagree and request another review",
        "If user disagrees, content is resubmitted for another review (content remains hidden during review)",
        "If reviewer accepts original decision, content remains removed",
        "If reviewer disagrees with initial decision, content goes to another reviewer for final determination"
      ]
    }
  }
],
};
