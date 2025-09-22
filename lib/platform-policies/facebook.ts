import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits sharing non-consensual intimate images and sextortion across Meta platforms.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults, and non-consensual intimate images.",
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
            "reason": "To understand the nature of the violation and assess appropriately"
          },
          {
            "description": "Information identifying the victim (if reporting on behalf of someone else)",
            "reason": "To verify the legitimacy of the report and process removal"
          }
        ],
        "removalCriteria": [
          "Content depicts intimate imagery shared without consent",
          "Content facilitates sextortion or threats involving intimate images",
          "Content exploits adults through non-consensual sharing"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing private content to degrade or shame individuals.",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
            "reason": "To identify and review the specific harassing material"
          },
          {
            "description": "Explanation of how the content constitutes harassment or bullying",
            "reason": "To assess the nature and severity of the harassment"
          },
          {
            "description": "Information about the target of harassment",
            "reason": "To verify the victim and understand the impact"
          }
        ],
        "removalCriteria": [
          "Content targets individuals for degradation or shaming",
          "Content includes private information used to harass",
          "Content is part of coordinated harassment campaign"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private content without consent, protecting personal privacy and information.",
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
            "reason": "To locate the content that violates privacy"
          },
          {
            "description": "Evidence that the content is private and shared without permission",
            "reason": "To establish lack of consent for sharing"
          },
          {
            "description": "Description of the privacy violation",
            "reason": "To understand how the content violates privacy expectations"
          }
        ],
        "removalCriteria": [
          "Content consists of private material shared without consent",
          "Content violates reasonable expectation of privacy",
          "Content includes personal information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others or misrepresenting identity, including using someone's images without authorization.",
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
            "description": "URL of the impersonating account or content",
            "reason": "To identify the impersonating profile or content"
          },
          {
            "description": "Proof of identity",
            "example": "Government-issued ID or other official documentation",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how your identity is being misrepresented",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "Profile or content is intended to mislead or deceive others about identity",
          "Content is not clearly marked as parody, fan account, or commentary"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "CS-IP",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images.",
        "quote": "Meta respects the intellectual property rights of others and expects people using our services to do the same.",
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
            "description": "URL(s) of the infringing content",
            "reason": "To locate the content that allegedly infringes intellectual property"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of rights holder",
            "reason": "To verify you have rights to request removal of the content"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission",
          "Content infringes on trademark rights",
          "Use is not covered by fair use or other legal exceptions"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "fb-tos-intellectual-property",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or breaches someone else's intellectual property rights, including copyright and trademark violations.",
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
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes or breaches someone else's intellectual property rights",
          "Content includes copyright or trademark violations",
          "Content involves distributing or selling counterfeit or pirated goods"
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
            "reason": "To demonstrate you have legal authority over the shared content"
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
            "description": "Report of content that breaches terms or policies",
            "reason": "To initiate content review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content breaches Meta's Terms of Service",
          "Content violates Community Standards",
          "Content poses legal liability risks",
          "Content harms the community of users",
          "Content compromises system integrity or operation"
        ]
      },
      {
        "id": "fb-tos-reporting-mechanism",
        "reference": "FB-TOS-3.2",
        "summary": "Users are encouraged to report content or conduct that breaches their rights, including intellectual property rights, or Meta's terms and policies.",
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
            "reason": "To help Meta understand the nature of the violation"
          },
          {
            "description": "URL(s) of the problematic content",
            "reason": "To identify the specific content that needs review"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content violates Meta's terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-deletion-timeframes",
        "reference": "FB-TOS-3.3.3",
        "summary": "Content deletion may take up to 90 days after the deletion process begins, with an additional 90 days to remove from backups and disaster recovery systems.",
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
            "description": "Maximum time to delete content after deletion process begins"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the content deletion process"
          }
        ],
        "removalCriteria": [
          "User requests content deletion",
          "Account deletion process is initiated"
        ]
      },
      {
        "id": "fb-tos-account-termination",
        "reference": "FB-TOS-4.2",
        "summary": "Meta may suspend or permanently disable accounts for clear, serious, or repeated breaches of terms, including repeated intellectual property infringement.",
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
            "description": "Evidence of repeated intellectual property infringement",
            "reason": "To demonstrate pattern of violations warranting account termination"
          }
        ],
        "removalCriteria": [
          "Clear, serious, or repeated breaches of Terms or Policies",
          "Repeated infringement of other people's intellectual property rights",
          "Legal requirements mandate account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions unless violations are serious/repeated or doing so would expose Meta to legal liability or harm the community.",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users are provided options to request another review of the removal decision",
        "Review options may not be available for serious or repeated violations",
        "Review may be denied if it would expose Meta to legal liability or harm the community"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SECTION-10",
        "summary": "Meta removes content that violates terms or policies through automated processing and manual review, and shares information with law enforcement when necessary to promote safety and prevent harm.",
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
            "example": "Reported content showing policy violations",
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
        "reference": "META-PP-SECTION-10",
        "summary": "Meta responds to legal requests from law enforcement and government authorities, and may preserve and share user information to comply with applicable law and prevent harm.",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. In accordance with applicable law. To promote the safety, security and integrity of Meta Products, users, employees, property and the public.",
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
            "reason": "To comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SECTION-2",
        "summary": "Meta uses automated and manual review to detect, prevent and combat harmful or unlawful behavior, including removing reported content and maintaining platform integrity.",
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
            "description": "Evidence of harmful or unlawful behavior",
            "example": "Content reported for harassment, threats, or policy violations",
            "reason": "To identify and address harmful content that threatens user safety"
          }
        ],
        "removalCriteria": [
          "Content involves harmful or unlawful behavior",
          "Content is reported by users for safety violations",
          "Content threatens platform integrity or user safety",
          "Content constitutes spam or other bad experiences"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-SECTION-2",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, using face analysis and facial recognition technology when users select it.",
        "quote": "Verify accounts, identity and activity, Find and address violations of our terms or policies. Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
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
            "description": "Account information, account photos, or photo/video selfie",
            "example": "Government-issued ID or selfie video for identity verification",
            "reason": "To verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Account is impersonating another person",
          "Suspicious activity indicating identity misuse",
          "Account fails identity verification process"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-SECTION-7",
        "summary": "Users have rights to access, correct, download, erase their information, withdraw consent, port data, and object to processing under GDPR and data protection laws.",
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
            "description": "User identity verification for data rights requests",
            "example": "Account credentials or identity verification",
            "reason": "To ensure only authorized users can exercise data rights"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their personal information",
          "User withdraws consent for data processing",
          "User objects to processing based on legitimate interests"
        ]
      },
      {
        "id": "meta-pp-data-sharing-control",
        "reference": "META-PP-SECTION-3",
        "summary": "Users can control how their information is shared on Meta Products and with integrated partners, including managing public content visibility and third-party app permissions.",
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
            "description": "User consent for sharing with integrated partners",
            "example": "Explicit permission to share profile information with third-party apps",
            "reason": "To ensure users control their data sharing preferences"
          }
        ],
        "removalCriteria": [
          "User revokes consent for data sharing",
          "Integrated partner misuses shared information",
          "User changes privacy settings to restrict sharing"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Some content removal decisions are reviewed by the Oversight Board, and users can contact Meta through various channels including online forms and help centers.",
      "steps": [
        "Contact Meta through online form or help center",
        "Submit complaint to Data Protection Officer if applicable",
        "Lodge complaint with local supervisory authority",
        "Some cases may be reviewed by the Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758542310133-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention, with heightened protections for minors and reporting mechanisms.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
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
            "reason": "To demonstrate the contact meets the criteria for removal"
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
            "description": "Evidence of sexualized content or attacks",
            "example": "Screenshots of derogatory sexual commentary or manipulated images",
            "reason": "To verify the content violates sexual harassment policies"
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
            "example": "Screenshots showing threats to doxx or release personal information",
            "reason": "To verify threats are being made against private information"
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
        "summary": "Meta protects minors, private adults and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence showing claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify the target falls under protected categories and content violates policy"
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots showing sexualized content about minors, private adults, or limited scope public figures",
            "reason": "To verify the content sexualizes protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any public status)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
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
            "description": "Evidence of manipulated imagery targeting the individual",
            "example": "Screenshots of edited photos highlighting physical features or unwanted manipulated content",
            "reason": "To verify the imagery has been manipulated to target the individual"
          },
          {
            "description": "Self-report from target or authorized representative",
            "example": "Report from the targeted individual or their legal representative",
            "reason": "Policy requires self-reporting for certain manipulated imagery violations"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight physical characteristics negatively",
          "Content contains unwanted manipulated imagery (self-report required)",
          "Target must be a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta requires self-reporting or authorized representative confirmation for certain harassment content targeting private individuals.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Direct report from the targeted individual or their legal representative",
            "reason": "Policy requires confirmation that the content is unwanted by the target"
          },
          {
            "description": "Evidence of targeting or direct contact",
            "example": "Screenshots showing the target is tagged or directly contacted",
            "reason": "To verify the content directly targets the individual"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages, Groups, or Events",
          "Content indicates direct targeting (e.g., target is tagged)",
          "Content calls for bullying/harassment behavior",
          "Content sexualizes public figures (when unwanted)",
          "Confirmation required from target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-mass-harassment",
        "reference": "META-BH-MASS-HARASSMENT",
        "summary": "Meta removes directed mass harassment targeting individuals at heightened risk or via personal surfaces, and disables accounts engaged in coordinated harassment.",
        "quote": "Remove directed mass harassment, when: Targeting, via any surface, 'individuals at heightened risk of offline harm', defined as: Human rights defenders, Minors, Victims of violent events/tragedies, Opposition figures in at-risk countries during election periods, Election officials, Government dissidents who have been targeted based on their dissident status, Ethnic and religious minorities in conflict zones, Member of a designated and recognizable at-risk group",
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
            "description": "Evidence of coordinated harassment campaign",
            "example": "Documentation showing multiple accounts targeting the same individual",
            "reason": "To identify mass harassment patterns and coordinated attacks"
          },
          {
            "description": "Evidence target is at heightened risk",
            "example": "Documentation showing target is a human rights defender, minor, or other protected category",
            "reason": "To verify the target qualifies for heightened protection"
          }
        ],
        "removalCriteria": [
          "Mass harassment targeting individuals at heightened risk of offline harm",
          "Harassment via personal surfaces (inbox, profiles) targeting any individual",
          "Content violates bullying policies for private individuals",
          "Content targets individuals based on protected characteristics",
          "Coordinated harassment by state/state-affiliated networks",
          "Coordinated harassment by adversarial networks"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and users can also appeal to the independent Oversight Board for certain decisions.",
      "steps": [
        "Receive notification of enforcement action via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, can appeal to independent Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758542310133-1",
    "reference": "META-IB",
    "title": "Inauthentic Behavior Policy",
    "summary": "Policy covering fake accounts, impersonation, and coordinated inauthentic behavior including specific guidelines for account verification.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "meta-ib-fake-accounts",
        "reference": "META-IB-FAKE-ACCOUNTS",
        "summary": "Meta prohibits the creation and use of fake accounts to deceive users about identity, purpose, or origin, or to evade enforcement.",
        "quote": "The creation, use, or claimed use of Inauthentic Meta Assets (Accounts, Pages, Groups, etc.) in order to: Deceive Meta or our users about: The identity, purpose, or origin of an audience or the entity that they represent; or the popularity of content or assets on our services; or a Meta asset's ownership or control network. To Evade enforcement under the Community Standards. Misuse Meta reporting systems to harass, intimidate or silence others.",
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
            "example": "Documentation showing the account is using false information or impersonating someone",
            "reason": "To verify the account violates authenticity standards"
          }
        ],
        "removalCriteria": [
          "Account is created with false identity information",
          "Account is being used to deceive users about the identity or purpose of the entity",
          "Account is being used to evade Community Standards enforcement",
          "Account is misusing reporting systems to harass others"
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
            "description": "Evidence that a foreign entity is using fake accounts to impersonate local voices",
            "example": "Documentation showing the account operators are not located where they claim to be",
            "reason": "To verify foreign interference in local discourse"
          }
        ],
        "removalCriteria": [
          "Foreign entities using fake accounts to represent domestic voices",
          "Accounts designed to deceive audience about true identity or origin",
          "Systematic effort to misrepresent geographic or cultural identity"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "META-IB-COORDINATED",
        "summary": "Meta prohibits sophisticated coordinated inauthentic behavior where fake accounts are central to operations designed to manipulate public debate.",
        "quote": "Entities to engage in, or claim to engage in Coordinated Inauthentic Behavior, defined as particularly sophisticated forms of Inauthentic Behavior where inauthentic accounts are central to the operation and operators: Use adversarial methods to evade detection or appear authentic; and Use a variety of adversarial and inauthentic techniques to achieve overarching strategic objectives; and Primarily seek to manipulate public debate.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of coordinated network of fake accounts working together",
            "example": "Documentation showing multiple fake accounts operating in coordination with sophisticated evasion techniques",
            "reason": "To identify networks designed to manipulate public discourse"
          }
        ],
        "removalCriteria": [
          "Network of fake accounts central to the operation",
          "Use of adversarial methods to evade detection",
          "Sophisticated techniques to achieve strategic objectives",
          "Primary purpose is to manipulate public debate"
        ]
      },
      {
        "id": "meta-ib-reporting-abuse",
        "reference": "META-IB-REPORTING",
        "summary": "Meta prohibits misusing reporting systems to harass, intimidate, or silence other users.",
        "quote": "Misuse Meta reporting systems to harass, intimidate or silence others.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that reporting systems are being misused for harassment",
            "example": "Documentation showing coordinated false reports or systematic abuse of reporting features",
            "reason": "To prevent weaponization of safety tools"
          }
        ],
        "removalCriteria": [
          "Systematic misuse of reporting features",
          "Using reports to harass or intimidate users",
          "Coordinated efforts to silence legitimate voices through false reports"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review through the Support Inbox if they believe Meta made an incorrect decision, with options for appeal and re-review.",
      "steps": [
        "Report content or account through universal reporting system",
        "Receive notification of review decision via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758542310133-2",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Images Safety Center",
    "summary": "Dedicated resource for NCII reporting and prevention, including information about StopNCII.org integration and sextortion prevention.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and takes action when content violates these rules.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). We have strict rules against content or behaviour that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate image abuse",
            "reason": "Meta has specialized reporting mechanisms for NCII content"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images",
          "Content exploits people through intimate imagery"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Meta prohibits sextortion, defined as threatening to reveal intimate images to force someone to do something against their will.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. Sharing – or threatening to share – intimate images without consent is against Meta policies.",
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
            "description": "Report threats or actual sharing of intimate images",
            "example": "Screenshots of threatening messages or shared intimate content",
            "reason": "Evidence needed to demonstrate sextortion behavior"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to coerce behavior",
          "Actual sharing of intimate images as part of coercion",
          "Using intimate images to force unwanted actions"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems and specialized teams to detect, remove, and report accounts engaged in intimate image abuse at scale.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Content may be detected automatically through pattern recognition",
            "example": "System-identified suspicious account behavior",
            "reason": "Automated detection helps identify violating content and accounts"
          }
        ],
        "removalCriteria": [
          "Accounts showing patterns associated with intimate image abuse",
          "Content identified through automated detection systems",
          "Behavior matching known sextortion patterns"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until accepted.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of adults attempting to contact teens inappropriately",
            "example": "Unwanted message requests from unknown adults to teen accounts",
            "reason": "Protects teens from potential predatory behavior"
          }
        ],
        "removalCriteria": [
          "Adults over 18 attempting to privately message unconnected teens",
          "Sending non-text content in message requests before acceptance",
          "Circumventing teen protection messaging restrictions"
        ]
      },
      {
        "id": "meta-teen-account-defaults",
        "reference": "META-NCII-005",
        "summary": "Meta automatically sets teen accounts under 16 (18 in some countries) to private and implements stricter default message settings to prevent unwanted contact.",
        "quote": "We automatically set teens' accounts under 16 (and under 18 in certain countries) to private when they join Instagram. We also introduced stricter default message settings for teens under 16 (and under 18 in certain countries). This means that teens can't be messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of circumventing teen account protection settings",
            "example": "Attempts to contact teens despite private account settings",
            "reason": "Ensures teen protection measures are being followed"
          }
        ],
        "removalCriteria": [
          "Attempts to bypass teen account privacy settings",
          "Messaging teens who haven't accepted connection requests",
          "Adding teens to group chats without proper connection"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-006",
        "summary": "Meta integrates with StopNCII.org to help adults prevent the sharing of their intimate images using hash-generating technology.",
        "quote": "We've made both Take It Down and StopNCII easily accessible on our apps when people are reporting potentially violating content. The tool uses hash-generating technology that assigns a unique hash value (a numeric code) to an image, creating a secure digital fingerprint. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
        "contentTypes": [
          "intimate"
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
            "description": "Create hash of intimate image through StopNCII.org for adults over 18",
            "example": "Digital fingerprint generated without sharing actual image",
            "reason": "Allows proactive prevention of image sharing without exposing content"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through StopNCII.org",
          "Attempts to share content with known intimate image hashes",
          "Content identified through hash-matching technology"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-007",
        "summary": "Meta integrates with Take It Down by NCMEC to help prevent sharing of intimate images of people under 18, including AI-generated content.",
        "quote": "Instagram and Facebook are founding members of Take It Down – a platform by NCMEC to proactively prevent young people's intimate images, including AI-generated content, from spreading online. Similar to StopNCII.org, Take It Down assigns a unique hash value (a numerical code) to your image or video privately and without the image or video ever leaving your device or anyone viewing it.",
        "contentTypes": [
          "intimate"
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
            "description": "Create hash of intimate image through Take It Down for content involving people under 18",
            "example": "Hash generated for images taken when person was under 18, including AI-generated content",
            "reason": "Protects minors from intimate image abuse through proactive prevention"
          }
        ],
        "removalCriteria": [
          "Images matching hashes submitted through Take It Down",
          "Content involving people under 18 in intimate situations",
          "AI-generated intimate content of minors",
          "Attempts to share content with known minor intimate image hashes"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-008",
        "summary": "Meta reviews reports 24/7 in more than 70 languages and takes action on violating content and behavior.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
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
          "response": {
            "value": 24,
            "unit": "hours",
            "description": "Continuous review process operates 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Submit report through platform reporting mechanisms",
            "example": "Use dedicated reporting flows for different types of violations",
            "reason": "Enables 24/7 multilingual review process"
          }
        ],
        "removalCriteria": [
          "Content determined to violate Meta policies after review",
          "Behavior that exploits or harms users",
          "Content reported through official channels that breaks community standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758542310133-3",
    "reference": "META-ENFORCEMENT",
    "title": "Taking Down Violating Content",
    "summary": "Detailed explanation of Meta's content enforcement process, strike system, and notification procedures for policy violations.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-22T11:58:30.133Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of the violation.",
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
            "reason": "Meta only removes content that goes against their established policies"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
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
            "reason": "Strike system considers violation history and severity"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "User has previous violation history",
          "Strike count reaches threshold for account action"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request a review if they believe Meta made a mistake in removing their content, and Meta will take another look.",
      "steps": [
        "Receive notification of content removal with policy explanation",
        "Click option to request review if you disagree with the decision",
        "Provide additional information to support your appeal",
        "Submit review request and wait for final decision",
        "Receive notification of review outcome"
      ]
    }
  }
],
};
