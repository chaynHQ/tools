import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads. Effective as of November 12, 2024 with merged standards.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including deepfakes and AI-generated content, as part of adult sexual exploitation policy.",
        "quote": "We remove content that facilitates, encourages or coordinates sexual encounters or commercial sexual services between adults such as prostitution, escort services, sexual massages, and filmed sexual activity. We also remove content that attempts to coordinate or recruit for activities that involve the non-consensual sharing of intimate images.",
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
            "description": "URL(s) of the content violating the policy",
            "reason": "To locate and review the specific content for removal"
          },
          {
            "description": "Description of how the content involves non-consensual sharing",
            "reason": "To establish that consent was not given for sharing intimate content"
          },
          {
            "description": "Information to identify the victim in the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content involves non-consensual sharing of intimate images",
          "Content facilitates or coordinates sexual exploitation",
          "Content includes deepfakes or AI-generated intimate imagery without consent"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including image-based harassment and sharing of private content to humiliate or degrade individuals.",
        "quote": "We remove content that appears to purposefully target private individuals with the intention of degrading or shaming them. We recognize that bullying and harassment can happen in many ways and we will remove this content when we become aware of it.",
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
            "reason": "To locate and review the harassing material"
          },
          {
            "description": "Description of how the content targets and degrades the individual",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the victim of harassment",
            "reason": "To verify the target of harassment and process the report"
          }
        ],
        "removalCriteria": [
          "Content purposefully targets private individuals for degradation or shaming",
          "Content includes unwanted intimate or private imagery used for harassment",
          "Content causes severe emotional distress through targeted abuse"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and intimate media without consent, protecting individuals' privacy and personal information.",
        "quote": "We remove content that shares, offers or asks for personally identifiable information or other private information that could be used to conduct identity theft, fraud, or other privacy violations. We also remove intimate images shared without the consent of the person(s) pictured.",
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
            "reason": "To identify and locate the specific privacy violation"
          },
          {
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Description of how the content violates privacy expectations",
            "reason": "To understand the nature and severity of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of intimate images shared without consent of the person pictured",
          "Content includes personally identifiable information used maliciously",
          "Content violates reasonable expectations of privacy"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonation and misrepresentation of identity, including using someone else's images or information to deceive others.",
        "quote": "We require people to use the name they go by in everyday life so that you and others know who you're connecting with. We remove accounts that impersonate others by using their images, name, or other identifying information in misleading ways.",
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
            "description": "URL of the impersonating profile or content",
            "reason": "To identify the impersonating account or content"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "example": "Government-issued ID or other official documentation",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how the account or content misrepresents identity",
            "reason": "To understand how the impersonation is misleading others"
          }
        ],
        "removalCriteria": [
          "Account or content uses someone's name, photos, or identifying information without authorization",
          "The impersonation is intended to mislead or deceive others",
          "The account is not clearly marked as parody, fan account, or commentary"
        ]
      },
      {
        "id": "meta-cs-child-safety",
        "reference": "CS-CSEN",
        "summary": "Prohibits child sexual exploitation, abuse, and nudity, with zero tolerance for content that sexualizes, grooms, or otherwise harms children.",
        "quote": "We remove content that facilitates or coordinates the sexual exploitation of children. We also remove content that otherwise sexualizes children. We report apparent child sexual abuse material (CSAM) to the National Center for Missing & Exploited Children (NCMEC).",
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
            "description": "URL(s) of the content involving minors",
            "reason": "To locate and immediately remove harmful content involving children"
          },
          {
            "description": "Description of how the content exploits or sexualizes children",
            "reason": "To assess the nature of the violation and take appropriate action"
          },
          {
            "description": "Any information that can help identify and protect the child victim",
            "reason": "To ensure child safety and coordinate with appropriate authorities"
          }
        ],
        "removalCriteria": [
          "Content depicts, facilitates, or coordinates sexual exploitation of children",
          "Content sexualizes children in any way",
          "Content constitutes child sexual abuse material (CSAM)"
        ]
      },
      {
        "id": "meta-cs-violent-graphic-content",
        "reference": "CS-VGC",
        "summary": "Restricts violent and graphic content while allowing some content for awareness, but removes content that glorifies violence or could cause harm.",
        "quote": "We remove content that glorifies violence or celebrates the suffering or humiliation of others because it may create an environment that discourages participation. We allow graphic content (with some limitations) to help people raise awareness about issues.",
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
            "description": "URL(s) of the violent or graphic content",
            "reason": "To locate and review the specific content"
          },
          {
            "description": "Description of how the content glorifies violence or causes harm",
            "reason": "To assess whether the content violates policy guidelines"
          },
          {
            "description": "Context about why the content should be removed",
            "reason": "To understand the impact and appropriateness of the content"
          }
        ],
        "removalCriteria": [
          "Content glorifies violence or celebrates suffering of others",
          "Content could discourage participation or create hostile environment",
          "Content shows graphic violence without legitimate awareness purpose"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Updated legal terms governing the use of Facebook, Messenger, and other Meta products. Effective January 1, 2025 with clarified language around platform misuse, data scraping, and user agreements.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
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
          },
          {
            "description": "Description of how the content infringes your rights",
            "reason": "To explain the nature of the intellectual property violation"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright owned by the complainant",
          "Content violates trademark rights",
          "Content involves distribution or selling of counterfeit or pirated goods"
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
            "description": "Proof of ownership or creation of the content",
            "reason": "To establish that you have rights to the content being shared without permission"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          },
          {
            "description": "Evidence that you did not give permission for sharing",
            "reason": "To demonstrate the content was shared without authorization"
          }
        ],
        "removalCriteria": [
          "Content is owned by the complainant and was shared without permission",
          "User does not have necessary rights to share the content"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Facebook's Community Standards, with content removal and account enforcement for violations.",
        "quote": "That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products.",
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
            "description": "Maximum time for content deletion process completion"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates Community Standards"
          },
          {
            "description": "Description of which Community Standard is violated",
            "reason": "To specify the nature of the policy violation"
          },
          {
            "description": "Explanation of how the content violates the standard",
            "reason": "To provide context for the violation claim"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook Community Standards",
          "Content violates other applicable Meta terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-removal-enforcement",
        "reference": "FB-TOS-3.2",
        "summary": "Facebook can remove or restrict access to violating content and suspend or disable accounts for policy violations.",
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
            "reason": "To initiate Facebook's review process for policy violations"
          },
          {
            "description": "Evidence of the policy violation",
            "reason": "To support the claim that content violates Facebook's terms"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's Terms of Service",
          "Content violates Community Standards",
          "User conduct violates platform policies"
        ]
      },
      {
        "id": "fb-tos-reporting-system",
        "reference": "FB-TOS-3.2",
        "summary": "Facebook encourages users to report content or conduct that violates their rights or platform policies through the reporting feature.",
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
            "description": "Use of Facebook's built-in reporting feature",
            "reason": "Primary method for reporting policy violations to Facebook"
          },
          {
            "description": "Description of rights violation or policy breach",
            "reason": "To explain the nature of the violation being reported"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Facebook's terms and policies",
          "Conduct violates platform rules"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal decisions, except in cases of serious violations, legal liability, or technical limitations.",
      "steps": [
        "Facebook will notify users when content is removed for Community Standards violations",
        "Users can request another review of the removal decision",
        "Review options may not be available for serious or repeated violations",
        "Review may be restricted due to legal, technical, or safety considerations"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy - How Meta collects and uses user data",
    "summary": "Updated privacy policy explaining how Meta collects, uses, and shares user data across Facebook, Instagram, Messenger and other Meta products. Effective June 16, 2025 with enhanced user controls and transparency.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "meta-pp-safety-harmful-content",
        "reference": "META-PP-SAFETY",
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
            "description": "Content that violates Meta's terms or policies",
            "example": "Reported content showing harmful or unlawful behavior",
            "reason": "To identify violations requiring removal"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported and verified as violating community standards"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL",
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
            "example": "Court order requesting specific user information",
            "reason": "To comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or government authorities",
          "Court order requiring content removal or information disclosure",
          "Compliance with applicable law requirements",
          "Content poses safety, security or integrity risks"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-VERIFICATION",
        "summary": "Meta uses facial recognition technology for identity verification and protection against impersonation when users select this option.",
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
            "description": "Photo or video selfie for identity verification",
            "example": "User-provided selfie for account verification",
            "reason": "To verify identity and prevent impersonation"
          },
          {
            "description": "Account information and photos for verification",
            "example": "Profile photos and account details",
            "reason": "To confirm legitimate account ownership"
          }
        ],
        "removalCriteria": [
          "Account is determined to be impersonating another person",
          "Identity verification fails or shows misuse",
          "Suspicious activity indicates unauthorized account use"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING",
        "summary": "Meta provides controls for users to manage how their information is shared, including with integrated partners and through privacy settings.",
        "quote": "You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity. These integrated partners can always access information that's public on our Products.",
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
            "description": "Evidence of unauthorized sharing or privacy setting violations",
            "example": "Screenshots showing content shared without permission",
            "reason": "To verify unauthorized information sharing"
          }
        ],
        "removalCriteria": [
          "Content shared without user consent",
          "Privacy settings violated by unauthorized access",
          "Information shared beyond user's intended audience"
        ]
      },
      {
        "id": "meta-pp-user-rights-erasure",
        "reference": "META-PP-RIGHTS",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
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
            "description": "Valid request for information erasure under data protection laws",
            "example": "GDPR erasure request with user identification",
            "reason": "To comply with data protection rights"
          }
        ],
        "removalCriteria": [
          "User has valid right to erasure under applicable data protection law",
          "Information no longer necessary for original processing purpose",
          "User withdraws consent for processing",
          "Information was unlawfully processed"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta mentions that decisions about violations are reviewed by the Oversight Board in some cases, and users can make complaints under data protection laws.",
      "steps": [
        "Submit complaint through appropriate data protection channels",
        "Contact Meta's Data Protection Officer for privacy-related issues",
        "Lodge complaint with supervisory authority (Irish Data Protection Commission or local authority)"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "fb-hc-content-reporting",
        "reference": "FB-HC-Reporting",
        "summary": "Facebook provides reporting mechanisms for abusive content or spam through Report links near content and specialized reporting processes for different content types.",
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
            "description": "Access to the specific content to be reported",
            "reason": "To use the Report link functionality near the content"
          },
          {
            "description": "Facebook account to access reporting features",
            "reason": "Standard reporting requires account access to submit reports"
          }
        ],
        "removalCriteria": [
          "Content qualifies as abusive content",
          "Content qualifies as spam",
          "Content violates Facebook's community standards"
        ]
      },
      {
        "id": "fb-hc-blocked-user-reporting",
        "reference": "FB-HC-Reporting",
        "summary": "Facebook provides alternative reporting options for users who cannot access content directly, such as when blocked by the content poster or when lacking an account.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do.",
        "contentTypes": [
          "intimate",
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
            "description": "Alternative identification of the content to be reported",
            "reason": "To report content when direct access is not available due to blocking or lack of account"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies",
          "User is unable to access standard reporting due to being blocked",
          "User lacks a Facebook account but needs to report violating content"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758232238286-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention, reporting, and enforcement across Meta platforms with heightened protections for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
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
            "description": "Report showing pattern of unwanted contact",
            "example": "Screenshots of repeated messages or sexually harassing content",
            "reason": "To establish that contact meets criteria for repeated or sexually harassing behavior"
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
            "reason": "To verify content violates sexual harassment policies"
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
            "example": "Screenshots of messages threatening to share personal contact details",
            "reason": "To verify threats involve private information as defined in policy"
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
        "summary": "Meta provides additional protection for minors, private adults and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence showing claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify content makes inappropriate sexual claims about protected categories"
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
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, or limited scope public figures.",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots of sexualized posts about private adults or minors",
            "reason": "To verify content inappropriately sexualizes protected categories"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any public status)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: First-person voice bullying. Unwanted manipulated imagery.",
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
            "description": "Self-report from target or authorized representative showing manipulated imagery",
            "example": "Report indicating images have been altered or manipulated without consent",
            "reason": "Policy requires self-reporting for this protection tier"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery of private minors",
          "Content contains manipulated imagery of private adults (self-reported)",
          "Content contains manipulated imagery of minor involuntary public figures",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-CONTEXT-SEXUAL-PUBLIC",
        "summary": "Meta removes content sexualizing public figures when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
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
            "description": "Confirmation from target or authorized representative that sexualizing content is unwanted",
            "example": "Statement from public figure or their representative requesting removal",
            "reason": "Policy requires confirmation from target for public figure protections"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-CONTEXT-TARGETING",
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
            "description": "Report from target or authorized representative showing unwanted targeting",
            "example": "Evidence of Pages, Groups or Events created to target specific private individuals",
            "reason": "Policy requires target reporting to establish unwanted nature"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Target or authorized representative reports the content as unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides multiple appeal options including requesting another review through notifications and the Support Inbox, with final responses provided after re-review.",
      "steps": [
        "Report content through universal reporting option on posts, comments, stories, messages, or profiles",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758232238286-1",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Images (NCII) Resources",
    "summary": "Meta's approach to combating non-consensual intimate image sharing, including StopNCII.org partnership and proactive detection tools.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms and provides proactive detection tools to prevent sharing.",
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
          "Images or videos featuring nudity or sexual content shared without the subject's consent",
          "Content that matches hash fingerprints of reported NCII"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of intimate images before they are posted.",
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
            "description": "Hash values of intimate images generated through StopNCII.org",
            "example": "Unique numerical code fingerprint of the image",
            "reason": "To enable detection without requiring the actual image to be shared"
          }
        ],
        "removalCriteria": [
          "Content that matches hash fingerprints from StopNCII.org database",
          "Images detected during upload process before posting"
        ]
      },
      {
        "id": "meta-ncii-victim-resources",
        "reference": "META-NCII-003",
        "summary": "Meta provides resources and reporting mechanisms for NCII victims, with specialized support for minors through partner organizations.",
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
            "description": "Age verification for appropriate resource routing",
            "example": "Confirmation that user is over 18 for StopNCII.org or under 18 for NCMEC referral",
            "reason": "To direct users to appropriate support channels based on age"
          },
          {
            "description": "Evidence of non-consensual sharing concern",
            "example": "Information about where content may be or has been shared",
            "reason": "To provide appropriate support and prevention measures"
          }
        ],
        "removalCriteria": [
          "Intimate images of minors (referred to NCMEC)",
          "Adult intimate content shared without consent (processed through StopNCII.org)"
        ]
      },
      {
        "id": "meta-ncii-privacy-protection",
        "reference": "META-NCII-004",
        "summary": "Meta's NCII prevention system protects victim privacy by using hash technology that never requires sharing the actual intimate images.",
        "quote": "The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint... Only hashes, not the images themselves, are shared with StopNCII.org and participating tech platforms. This feature prevents further circulation of that NCII content and keeps those images securely in the possession of the owner.",
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
            "description": "Device-generated hash of intimate images",
            "example": "Numerical fingerprint created locally on user's device",
            "reason": "To enable detection while maintaining complete privacy of the actual images"
          }
        ],
        "removalCriteria": [
          "Content matching hash fingerprints without requiring victim to share actual images",
          "Proactive blocking of uploads matching known NCII hashes"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758232238286-2",
    "reference": "META-ENFORCEMENT",
    "title": "Content Enforcement and Takedown Process",
    "summary": "Detailed explanation of Meta's three-part approach to content enforcement: remove, reduce, and inform, including violation notification processes.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanations and policy references.",
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
            "reason": "Required to demonstrate policy violation for removal"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards",
          "Content violates established Meta policies"
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
          "Strike count threshold reached for account restrictions"
        ]
      },
      {
        "id": "meta-enforcement-notification-process",
        "reference": "META-ENFORCEMENT-NOTIFICATION",
        "summary": "Meta provides detailed notifications when content is removed, including policy explanations and context to help users understand violations.",
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
            "description": "Violating content posted by user",
            "example": "Content that goes against Community Standards",
            "reason": "Triggers notification and educational process"
          }
        ],
        "removalCriteria": [
          "Content posted goes against Community Standards",
          "Content requires user education about policy violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, with additional context and review options provided.",
      "steps": [
        "User receives notification of content removal with policy explanation",
        "User can disagree with the decision and request another review",
        "User can provide additional information during the review request",
        "Meta reviews the request and provides a final decision",
        "User receives notification about the outcome of their review request"
      ]
    }
  },
  {
    "id": "facebook-new-1758232238286-3",
    "reference": "FB-REPORT-CONTENT",
    "title": "Report Content on Facebook",
    "summary": "Official reporting mechanisms and processes for users to report policy violations and request content removal.",
    "url": "https://www.facebook.com/help/1380418588640631",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "fb-report-photos-videos",
        "reference": "FB-REPORT-CONTENT-PHOTOS",
        "summary": "Facebook provides reporting mechanisms for photos and videos through Report links near the content.",
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
            "description": "Access to the specific content through Facebook platform",
            "example": "Being able to view the reported photo or video",
            "reason": "Required to use the Report link feature near the content"
          }
        ],
        "removalCriteria": [
          "Content classified as abusive",
          "Content classified as spam"
        ]
      },
      {
        "id": "fb-report-without-account",
        "reference": "FB-REPORT-CONTENT-NO-ACCESS",
        "summary": "Facebook provides alternative reporting options for users who don't have accounts or cannot access content they want to report.",
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
            "description": "Alternative identification of content when direct access is unavailable",
            "example": "When blocked by the user or without a Facebook account",
            "reason": "To enable reporting when standard Report link is not accessible"
          }
        ],
        "removalCriteria": [
          "Content meets Facebook's abuse standards",
          "Content violates Facebook policies regardless of reporter's account status"
        ]
      },
      {
        "id": "fb-report-profile-content",
        "reference": "FB-REPORT-CONTENT-PROFILES",
        "summary": "Facebook allows reporting of profiles, which may include cases of impersonation using someone's images.",
        "quote": "Report a profile",
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
            "description": "Access to the profile being reported",
            "example": "Profile URL or direct access to the profile page",
            "reason": "Required to initiate profile reporting process"
          }
        ],
        "removalCriteria": [
          "Profile violates Facebook community standards",
          "Profile represents impersonation or fake identity"
        ]
      },
      {
        "id": "fb-report-messages",
        "reference": "FB-REPORT-CONTENT-MESSAGES",
        "summary": "Facebook provides reporting mechanisms for messages, which may include non-consensual sharing of private content.",
        "quote": "Messages",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "Access to the message thread containing violating content",
            "example": "Direct message conversation with inappropriate content",
            "reason": "Required to report specific message content"
          }
        ],
        "removalCriteria": [
          "Messages containing abusive content",
          "Messages violating Facebook messaging policies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758232238286-4",
    "reference": "FB-PRIVACY-VIOLATIONS",
    "title": "Report a Privacy Violation",
    "summary": "Specific reporting mechanism for privacy-related violations including unauthorized image sharing and personal information misuse.",
    "url": "https://www.facebook.com/help/contact/144059062408922",
    "accessTimestamp": "2025-09-18T21:50:38.286Z",
    "policies": [
      {
        "id": "fb-privacy-image-video",
        "reference": "FB-PRIVACY-VIOLATIONS",
        "summary": "Facebook allows reporting of privacy violations concerning unauthorized sharing of your image or video on the platform.",
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
            "description": "Full name of the reporting person",
            "example": "John Smith",
            "reason": "Identity verification for privacy violation claims"
          },
          {
            "description": "Country of residence",
            "example": "United States",
            "reason": "Jurisdictional requirements for processing requests"
          },
          {
            "description": "Email address for correspondence",
            "example": "user@email.com",
            "reason": "Communication channel for case updates"
          },
          {
            "description": "Specific URL link to the reported image or video",
            "example": "https://facebook.com/photo/12345",
            "reason": "Exact identification of content violating privacy"
          }
        ],
        "removalCriteria": [
          "Content contains your image or video posted without consent",
          "You are the person appearing in the content or their authorized representative",
          "For minors under 13, parent/legal guardian must report",
          "For minors 13+, the minor must self-report unless unable to do so"
        ]
      },
      {
        "id": "fb-privacy-minor-protection",
        "reference": "FB-PRIVACY-VIOLATIONS",
        "summary": "Facebook has specific protections for minors' privacy violations, requiring parental consent for children under 13 and allowing self-reporting for teens 13+.",
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
            "description": "Proof of legal guardian or parent status for minors under 13",
            "example": "Birth certificate or legal guardianship documents",
            "reason": "Verification of authority to act on minor's behalf"
          },
          {
            "description": "Documentation establishing authorized representative status if applicable",
            "example": "Power of attorney or legal representation agreement",
            "reason": "Verification of legal authority to represent the affected person"
          }
        ],
        "removalCriteria": [
          "For children under 13: Parent or legal guardian must submit the request",
          "For minors 13+: The minor must submit the request themselves unless unable to do so",
          "Content violates the minor's privacy rights",
          "Requester can provide documentation of their legal status if requested"
        ]
      },
      {
        "id": "fb-privacy-authorized-representative",
        "reference": "FB-PRIVACY-VIOLATIONS",
        "summary": "Facebook accepts privacy violation reports from authorized agents or representatives of affected individuals, with documentation requirements.",
        "quote": "For privacy reasons, we can only support requests from either: - The person who appears in the content - An authorized agent or representative of the person who appears in the content",
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
            "description": "Documentation establishing authorized agent or representative status",
            "example": "Power of attorney, legal representation agreement, or court order",
            "reason": "Verification of legal authority to act on behalf of the affected person"
          }
        ],
        "removalCriteria": [
          "Requester is either the person in the content or their authorized representative",
          "Proper documentation of representative status can be provided if requested",
          "Content violates privacy of the represented individual"
        ]
      },
      {
        "id": "fb-privacy-non-consensual-threats",
        "reference": "FB-PRIVACY-VIOLATIONS",
        "summary": "Facebook provides specific support for users facing threats to share private content, directing them to specialized resources.",
        "quote": "If you need help because someone is threatening to share something you want to keep private, follow the steps outlined here.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Evidence of threats to share private content",
            "example": "Screenshots of threatening messages",
            "reason": "Documentation of non-consensual sharing threats"
          }
        ],
        "removalCriteria": [
          "Someone is threatening to share private content without consent",
          "Content falls under Facebook's privacy violation policies"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
