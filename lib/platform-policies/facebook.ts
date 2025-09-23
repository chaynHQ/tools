import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger, and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "meta-adult-sexual-exploitation",
        "reference": "Adult Sexual Exploitation",
        "summary": "Prohibits sharing non-consensual intimate images and sexual exploitation of adults.",
        "quote": "Adult Sexual Exploitation",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-bullying-harassment",
        "reference": "Bullying and Harassment",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "Bullying and Harassment",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-privacy-violations",
        "reference": "Privacy Violations",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "Privacy Violations",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-authentic-identity",
        "reference": "Authentic Identity Representation",
        "summary": "Prohibits impersonating others, including individuals and organizations, with an intent to deceive.",
        "quote": "Authentic Identity Representation",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-adult-nudity-sexual-activity",
        "reference": "Adult Nudity and Sexual Activity",
        "summary": "Prohibits sharing adult nudity and sexual activity content without consent.",
        "quote": "Adult Nudity and Sexual Activity",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "fb-intellectual-property-rights",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Proof of intellectual property ownership",
            "reason": "To establish that the content belongs to the complainant and was used without permission"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights",
          "Content violates copyright or trademark protections",
          "No applicable exception or limitation under law"
        ]
      },
      {
        "id": "fb-unauthorized-content-sharing",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that you do not own or do not have the necessary rights to share.",
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
            "reason": "To demonstrate that the person sharing the content lacks authorization"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "User does not own the content being shared",
          "User does not have necessary rights or permission to share the content"
        ]
      },
      {
        "id": "fb-content-removal-enforcement",
        "reference": "Section 3.2",
        "summary": "Platform can remove or restrict access to content that violates terms and can suspend or disable accounts for conduct violations.",
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
            "description": "Evidence of terms violation",
            "reason": "To demonstrate that the content or conduct violates platform policies"
          }
        ],
        "removalCriteria": [
          "Content is in violation of platform terms and provisions",
          "User conduct violates platform terms and provisions"
        ]
      },
      {
        "id": "fb-reporting-mechanism",
        "reference": "Section 3.2",
        "summary": "Encourages users to report content or conduct that violates their rights, including intellectual property rights, or platform terms and policies.",
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
            "description": "Description of how rights were violated",
            "reason": "To assess whether content violates user rights or platform policies"
          },
          {
            "description": "Identification of the violating content or conduct",
            "reason": "To locate and review the reported material"
          }
        ],
        "removalCriteria": [
          "Content or conduct violates user rights",
          "Content or conduct violates platform terms and policies"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review when content is removed for Community Standards violations, unless they seriously or repeatedly violate terms or if doing so may expose the platform or others to legal liability.",
      "steps": [
        "Content removal notification will be provided explaining options for review",
        "Request another review through the provided options",
        "Review will be conducted unless user has seriously or repeatedly violated terms",
        "Review may be denied if it could expose platform or others to legal liability"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "meta-pp-safety-security-integrity",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and removes content reported for violations",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Content reported to Meta for review",
            "example": "Reports of harmful or unlawful behavior",
            "reason": "To enable Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens user safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests-compliance",
        "reference": "Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Responds to legal requests and preserves information to comply with applicable law and prevent harm",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law To promote the safety, security and integrity of Meta Products, users, employees, property and the public. Learn more. We may access or preserve your information for an extended amount of time.",
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
            "example": "Court order requesting specific user information",
            "reason": "To comply with legal obligations and law enforcement requirements"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests",
          "Information required to comply with applicable law",
          "Content that threatens safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Verifies accounts and investigates suspicious activity to maintain platform integrity",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information associated with user accounts for verification",
            "example": "Account activity patterns, device information, user behavior",
            "reason": "To verify legitimate accounts and detect suspicious or fraudulent activity"
          }
        ],
        "removalCriteria": [
          "Accounts that fail verification processes",
          "Suspicious account activity",
          "Accounts involved in policy violations"
        ]
      },
      {
        "id": "meta-pp-user-rights-management",
        "reference": "Section 6 - How can you manage or delete your information and exercise your rights?",
        "summary": "Provides tools for users to view, manage, download and delete their information and exercise privacy rights",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "User account access to manage information through platform settings",
            "example": "Accessing Facebook or Instagram settings, Help Center requests",
            "reason": "To enable users to exercise their privacy rights and control their information"
          }
        ],
        "removalCriteria": [
          "User requests to delete their information or account",
          "User management of their own content and data"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/",
      "summary": "Users can contact Meta through Help Centers or online support for questions about the Privacy Policy and information handling",
      "steps": [
        "Visit Facebook Help Center or Instagram Help Center for privacy-related questions",
        "Contact Meta online through their support system",
        "For policy violations, decisions may be reviewed by the Oversight Board in some cases"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Report Content on Facebook",
    "summary": "Help documentation for reporting violations and content that violates Facebook's Community Standards.",
    "url": "https://www.facebook.com/help/181495968648557/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "fb-hacked-account-policy",
        "reference": "FB-HC-HACKED",
        "summary": "Provides a process to report and recover compromised accounts via facebook.com/hacked.",
        "quote": "We provide a process to report and recover compromised accounts via facebook.com/hacked.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account details (email, phone number)",
            "reason": "To identify and verify ownership of the compromised account"
          },
          {
            "description": "Access to a previously linked email or phone number to receive a recovery code",
            "reason": "To securely restore access to the legitimate account owner"
          },
          {
            "description": "Government ID may be required if other methods fail",
            "example": "Driver's license, passport",
            "reason": "To prove ownership when standard recovery methods are unavailable"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access or activity",
          "The legitimate owner is locked out of the account",
          "The account is posting spam or malicious content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758642689089-0",
    "reference": "META-IP",
    "title": "Intellectual Property across Meta Platforms",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures for reporting intellectual property violations across Meta platforms.",
    "url": "https://www.meta.com/help/policies/3234337743488413/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "meta-ip-copyright-prohibition",
        "reference": "Copyright",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as images",
        "quote": "Meta does not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art). Generally, copyright protects original expression such as words or images.",
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
            "description": "Copyright infringement report through designated platform forms",
            "example": "Report submitted via Facebook Copyright Report Form, Instagram Copyright Report Form, or other platform-specific forms",
            "reason": "Required to initiate copyright infringement review process"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content infringes original works of authorship including images"
        ]
      },
      {
        "id": "meta-ip-repeat-infringer-policy",
        "reference": "Repeat Intellectual Property Infringer Policy",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights, with escalating account restrictions for violations",
        "quote": "Repeatedly posting content that infringes someone else's intellectual property rights can result in additional restrictions. Your account or profile may be disabled, or you may face limitations on your ability to post content or access certain features and functionality.",
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
            "description": "Evidence of repeated intellectual property infringement",
            "example": "Multiple instances of copyright or trademark violations",
            "reason": "Required to establish pattern of repeat infringement for account restrictions"
          }
        ],
        "removalCriteria": [
          "Repeatedly posting content that infringes someone else's intellectual property rights",
          "Pattern of intellectual property violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal by contacting the rights owner directly or submitting an appeal through instructions provided in the removal notification",
      "steps": [
        "Receive notification from Meta about content removal due to intellectual property report",
        "Review notification which may include name and email of rights owner who made the report",
        "Contact the rights owner directly to resolve the issue",
        "Alternatively, submit an appeal following instructions provided in the notification"
      ]
    }
  },
  {
    "id": "facebook-new-1758642689089-1",
    "reference": "META-NCII",
    "title": "Intimate Image Abuse and Sextortion Safety Center",
    "summary": "Dedicated resource for reporting and addressing non-consensual intimate imagery (NCII) and sextortion across Meta platforms.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T15:51:29.089Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "NCII Policy",
        "summary": "Prohibits sharing or threatening to share intimate images without consent",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). Sharing—or threatening to share—intimate images without consent is against Meta policies.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves intimate images shared without consent",
          "Content involves threats to share intimate images without consent"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion and using intimate images as threats to force unwanted actions",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves threats to reveal intimate images to force unwanted actions",
          "Content involves exploitative behavior using intimate images"
        ]
      },
      {
        "id": "meta-private-images-reporting",
        "reference": "Private Images Reporting",
        "summary": "Provides dedicated reporting option for private images shared without permission",
        "quote": "We encourage anyone who sees content they think breaks our rules to report it—and we have a dedicated reporting option to use if someone is sharing private images.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves private images shared without permission"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "Content Review Process",
        "summary": "Reviews reports of intimate image violations 24/7 in over 70 languages and takes action on violating content",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": 24,
            "unit": "hours",
            "description": "Teams review reports 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates platform policies regarding intimate images"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
