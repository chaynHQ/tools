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
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits non-consensual sharing of intimate images, including threats to share such content and sextortion.",
        "quote": "We remove content that threatens or advocates for sexual violence or sexual exploitation. We also remove content that displays, advocates for, or coordinates sexual acts with non-consenting parties or commercial sexual services.",
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
          "Content depicts intimate imagery shared without consent",
          "Content threatens to share intimate images",
          "Content is used for sexual exploitation or coercion",
          "Content involves commercial sexual services without consent"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images or private information to degrade or shame individuals.",
        "quote": "We don't allow bullying and harassment on our platform. We define bullying and harassment as repeated negative targeting of another person that may cause emotional distress and has no legitimate purpose.",
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
            "description": "Description of how the content constitutes harassment",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report"
          }
        ],
        "removalCriteria": [
          "Content repeatedly targets an individual with negative behavior",
          "Content is intended to degrade, shame, or humiliate",
          "Content includes private information shared maliciously",
          "Content causes or is likely to cause emotional distress"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits sharing private information and intimate imagery without consent, protecting individuals' privacy rights.",
        "quote": "Privacy and the protection of personal information are fundamentally important values for Facebook, Instagram, Messenger and Threads. We work hard to safeguard your personal identity and information and we don't allow people to post certain types of personal and confidential information about yourself or of others.",
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
            "description": "Evidence that the content was private and shared without permission",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content consists of private information shared without consent",
          "Content includes intimate imagery shared without permission",
          "The sharing violates a reasonable expectation of privacy",
          "Content contains personal information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "Authenticity is the cornerstone of our community. We believe that people are more accountable for their statements and actions when they use their authentic identities. That's why we require people to connect on our services using the name they go by in everyday life.",
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
            "description": "Proof of identity",
            "example": "Government ID for individuals, business documents for organizations",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how your identity is being misused",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or identifying information without authorization",
          "The profile or content is intended to mislead or deceive others",
          "The impersonation is not clearly marked as parody or fan content",
          "Content misrepresents identity for harmful purposes"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits using fake accounts or misrepresenting identity to deceive others or manipulate public discourse.",
        "quote": "In line with our commitment to authenticity, we don't allow people to misrepresent themselves on our services, use fake accounts, artificially boost the popularity of content, or engage in behaviors designed to enable other violations under our Community Standards.",
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
            "description": "Evidence of coordinated inauthentic behavior",
            "reason": "To establish patterns of deceptive activity"
          },
          {
            "description": "Description of how the behavior is misleading",
            "reason": "To understand the deceptive nature of the activity"
          }
        ],
        "removalCriteria": [
          "Accounts use false information to misrepresent identity",
          "Behavior is designed to deceive other users",
          "Content artificially manipulates engagement or reach",
          "Activity coordinates to mislead about identity or purpose"
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
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
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
            "description": "Proof of ownership of intellectual property rights",
            "reason": "To establish legal standing to request removal"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and assess the allegedly infringing material"
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
            "description": "Proof that content was shared without permission",
            "reason": "To establish unauthorized use"
          }
        ],
        "removalCriteria": [
          "User does not own the content being shared",
          "User lacks necessary rights or permissions to share the content"
        ]
      },
      {
        "id": "fb-tos-content-removal-enforcement",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove or restrict access to content that violates their terms and may suspend or disable accounts for violations.",
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
            "reason": "To enable Meta to locate and review the content"
          },
          {
            "description": "Explanation of how content violates terms",
            "reason": "To assist in violation assessment"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's Terms of Service",
          "Content violates Community Standards",
          "Content violates other applicable Meta policies"
        ]
      },
      {
        "id": "fb-tos-reporting-mechanism",
        "reference": "FB-TOS-3.2",
        "summary": "Users are encouraged to report content or conduct that violates their rights or Meta's terms and policies.",
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
            "description": "Identification of the specific content or conduct",
            "reason": "To enable Meta to locate and review the reported material"
          },
          {
            "description": "Explanation of rights violation or policy breach",
            "reason": "To assist Meta in determining appropriate action"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Meta's terms and policies",
          "Conduct violates community standards"
        ]
      },
      {
        "id": "fb-tos-content-deletion-process",
        "reference": "FB-TOS-3.3.3",
        "summary": "Content deletion process may take up to 90 days, with additional time for removal from backups and disaster recovery systems.",
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
            "description": "Maximum time for content deletion process, with up to additional 90 days for backup removal"
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
      "summary": "Meta provides options to request review when content is removed for Community Standards violations, unless violations are serious/repeated or legal restrictions apply.",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Meta will explain available options to request another review",
        "Review options may not be available for serious or repeated violations",
        "Review may be restricted due to legal liability, technical limitations, or legal prohibitions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, and other Meta products. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content including non-consensual intimate imagery and harassment through automated and manual review processes.",
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
            "description": "Report the content through Meta's reporting systems",
            "example": "Use in-product reporting tools or contact forms",
            "reason": "Required to initiate content review process"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported by users and confirmed to violate policies"
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
            "description": "Valid legal request such as court order or subpoena",
            "example": "Search warrant, court order, production order, or subpoena",
            "reason": "Required to compel disclosure under legal authority"
          },
          {
            "description": "Demonstration of applicable law requirement",
            "example": "Citation to specific legal statute or regulation",
            "reason": "To establish legal basis for information sharing"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized party",
          "Compliance with applicable law requirements",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-CONTROL",
        "summary": "Users can control how their information is shared on Meta Products through privacy settings and audience controls.",
        "quote": "Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content. You can choose to connect with integrated partners who use our Products. If you do, these integrated partners receive information about you and your activity.",
        "contentTypes": [
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
            "description": "Access to account privacy settings",
            "example": "Facebook settings and Instagram settings",
            "reason": "To control information sharing and audience"
          }
        ],
        "removalCriteria": [
          "User modifies privacy settings to restrict sharing",
          "User removes consent for integrated partner access",
          "User controls audience for specific content"
        ]
      },
      {
        "id": "meta-pp-facial-recognition",
        "reference": "META-PP-FACE-ANALYSIS",
        "summary": "Meta uses face analysis including facial recognition technology for identity verification and protection against impersonation, but only with user consent.",
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
            "description": "User consent for facial recognition technology",
            "example": "Explicit opt-in selection for face analysis features",
            "reason": "Required under consent-based processing"
          },
          {
            "description": "Photo or video selfie for account verification",
            "example": "Selfie provided when contacting support for account issues",
            "reason": "To verify identity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "User withdraws consent for facial recognition",
          "Suspicious activity or impersonation detected",
          "Identity verification completed"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
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
            "description": "Request through official channels",
            "example": "Facebook settings, Instagram settings, or Help Centers",
            "reason": "To exercise data protection rights"
          },
          {
            "description": "Identity verification",
            "example": "Account authentication or identity confirmation",
            "reason": "To prevent unauthorized data access requests"
          }
        ],
        "removalCriteria": [
          "Valid erasure request under data protection law",
          "User withdraws consent for data processing",
          "Data no longer necessary for original purpose",
          "User successfully objects to processing"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal mechanisms through the Oversight Board for content moderation decisions and through Help Centers for data protection rights.",
      "steps": [
        "Submit initial request through appropriate channel (reporting tools, settings, or Help Center)",
        "Receive initial decision from Meta's automated or manual review",
        "If unsatisfied, escalate to Oversight Board for content decisions or data protection authorities for privacy rights",
        "Oversight Board or authorities review and make binding or advisory decisions"
      ]
    }
  },
  {
    "id": "facebook-new-1758220164771-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms, including heightened protections for minors and mass harassment prevention.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
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
        "id": "meta-bh-sexual-activity-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity targeting individuals.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
            "description": "Evidence of sexual statements directed at target",
            "example": "Screenshots of posts or messages containing sexual intent statements",
            "reason": "To verify the content violates sexual harassment policies"
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
            "description": "Evidence of severe sexualized commentary or manipulated imagery",
            "example": "Screenshots of derogatory sexualized content or manipulated images",
            "reason": "To demonstrate the content constitutes severe sexualized harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "META-BH-T1-SEXUAL-ATTACKS",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity (e.g., whore, slut) targeting individuals.",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of attacks using sexual derogatory terms",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at target",
            "reason": "To verify the content contains prohibited sexual derogatory language"
          }
        ],
        "removalCriteria": [
          "Content attacks individual using derogatory sexual terms",
          "Content includes language like 'whore', 'slut' or similar terms"
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
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of threats to share phone numbers, addresses, emails, or medical records",
            "reason": "To demonstrate the threat violates privacy protection policies"
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
        "summary": "Meta removes claims about sexual activity targeting minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
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
            "description": "Evidence of sexual activity claims targeting protected individuals",
            "example": "Screenshots of posts making claims about target's sexual behavior",
            "reason": "To verify the content makes prohibited sexual claims about protected individuals"
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
            "description": "Evidence of sexualizing content targeting protected adults",
            "example": "Screenshots of posts sexualizing the target individual",
            "reason": "To demonstrate the content inappropriately sexualizes protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes minors (any status)",
          "Content sexualizes private adults",
          "Content sexualizes limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics of protected individuals.",
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
            "description": "Evidence of manipulated imagery highlighting physical features",
            "example": "Screenshots showing circled, highlighted, or edited images focusing on body parts",
            "reason": "To verify the content has been manipulated to negatively highlight physical characteristics"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight physical characteristics",
          "Content circles or draws attention to specific body parts",
          "Content negatively emphasizes physical features through editing"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-SELF-REPORT-PAGES",
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
            "description": "Report from target or authorized representative",
            "example": "Confirmation that the Pages, Groups, or Events are unwanted",
            "reason": "Self-reporting requirement to establish unwanted nature of targeting"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Target or authorized representative reports content as unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-targeted-content",
        "reference": "META-BH-SELF-REPORT-TARGETED",
        "summary": "Meta removes targeted content when the poster directly targets the individual and the target confirms the content is unwanted.",
        "quote": "Post content described above that would otherwise require the target to report the content or where the content an indicates that the poster is directly targeting the target (for example: the target is tagged in the post or comment). We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Statement from target that they do not want the content posted",
            "reason": "To establish that the directly targeted content is unwanted by the subject"
          }
        ],
        "removalCriteria": [
          "Content directly targets individual (e.g., through tagging)",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-SELF-REPORT-PUBLIC",
        "summary": "Meta removes content sexualizing public figures when the target or authorized representative confirms the content is unwanted.",
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
            "description": "Confirmation from public figure or authorized representative that sexualizing content is unwanted",
            "example": "Statement from target requesting removal of sexualizing content",
            "reason": "To establish that the public figure does not consent to the sexualizing content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-sexual-contact",
        "reference": "META-BH-SELF-REPORT-SEXUAL",
        "summary": "Meta removes sexually harassing contact when the recipient or authorized representative confirms the contact is unwanted.",
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
            "example": "Statement from recipient that the sexual contact is unwanted",
            "reason": "To establish that the sexually harassing contact is unwanted by the recipient"
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
      "summary": "Meta provides appeal options through their Support Inbox system where users can request another review if they believe a decision was incorrect.",
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
    "id": "facebook-new-1758220164771-1",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Policy",
    "summary": "Policy addressing non-consensual intimate image sharing, including support for StopNCII.org initiative and proactive detection measures.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms and uses hash-matching technology to proactively detect and remove such content.",
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
            "reason": "Enables proactive detection across participating platforms without sharing actual images"
          },
          {
            "description": "Direct reporting through Facebook/Instagram reporting mechanisms",
            "example": "Use platform-specific reporting tools for NCII content",
            "reason": "Allows for direct content removal and enforcement action"
          }
        ],
        "removalCriteria": [
          "Images or videos of a person which feature nudity or are sexual in nature shared without consent",
          "Content matches hash fingerprint from StopNCII.org database",
          "Content reported as non-consensual intimate imagery through platform reporting tools"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses photo and video-matching technology with hash fingerprints to proactively detect and prevent sharing of intimate images before they spread.",
        "quote": "we've been using photo- and video-matching technology to remove intimate images shared without consent, encouraging people who use our services to report this type of behavior or content",
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
            "description": "Hash fingerprint of intimate images through StopNCII.org",
            "example": "Secure digital fingerprint created by hashing technology on user's device",
            "reason": "Enables detection without requiring sharing of actual intimate images"
          }
        ],
        "removalCriteria": [
          "Content matches known hash fingerprint of non-consensual intimate images",
          "Proactive detection through photo and video-matching technology identifies NCII content",
          "Content flagged through StopNCII.org hash database"
        ]
      },
      {
        "id": "meta-ncii-stopncii-integration",
        "reference": "META-NCII-003",
        "summary": "Meta participates in StopNCII.org platform allowing users to create secure hash fingerprints of intimate images to prevent non-consensual sharing across participating tech platforms.",
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
            "description": "Access to intimate images on personal device to generate hash",
            "example": "Images or videos stored on user's device that they want to protect",
            "reason": "Hash generation requires access to original content but images never leave user's device"
          },
          {
            "description": "Age verification (18+ years old)",
            "example": "Confirmation that user is adult over 18 years of age",
            "reason": "StopNCII.org is specifically designed for adults; minors directed to other resources like NCMEC"
          }
        ],
        "removalCriteria": [
          "Content matches hash fingerprint submitted through StopNCII.org",
          "Images identified as intimate content (featuring nudity or sexual nature)",
          "Content shared without consent of person depicted"
        ]
      },
      {
        "id": "meta-ncii-privacy-protection",
        "reference": "META-NCII-004",
        "summary": "Meta's NCII detection system protects user privacy by only processing hash fingerprints, never requiring users to share actual intimate images with the platform.",
        "quote": "While participating companies use the hash they receive from StopNCII.org to identify images that someone has shared or is trying to share on their platforms, the original image never leaves the person's device. Only hashes, not the images themselves, are shared with StopNCII.org and participating tech platforms.",
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
            "description": "Hash fingerprint generated on user's device",
            "example": "Numerical code created by hashing technology without sharing actual images",
            "reason": "Protects privacy while enabling detection across platforms"
          }
        ],
        "removalCriteria": [
          "Content matches secure hash fingerprint",
          "Hash indicates intimate imagery shared without consent",
          "Detection occurs through privacy-preserving technology"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758220164771-2",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Content Enforcement and Takedown Process",
    "summary": "Detailed explanation of Meta's content enforcement approach including removal processes, strike system, and notification procedures.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
    "policies": [
      {
        "id": "meta-enforcement-general-takedown",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of the violation and strike system consequences.",
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
            "reason": "Required basis for content removal under Meta's enforcement system"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards",
          "Content is identified through detection systems or user reports"
        ]
      },
      {
        "id": "meta-enforcement-strike-system",
        "reference": "META-ENFORCEMENT-STRIKES",
        "summary": "Meta uses a strike system to count violations and may restrict or disable accounts based on violation history and number of strikes.",
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
            "reason": "Strike system tracks repeat violations for escalating enforcement actions"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards policies",
          "User has previous history of violations",
          "Number of strikes accumulated on account"
        ]
      },
      {
        "id": "meta-enforcement-notification-process",
        "reference": "META-ENFORCEMENT-NOTIFICATION",
        "summary": "Meta provides detailed notifications explaining policy violations, including which specific policy was violated and educational context to prevent future violations.",
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
            "description": "Clear policy violation identification",
            "example": "Specific Community Standards section violated",
            "reason": "Users need to understand which policy was violated to avoid future violations"
          }
        ],
        "removalCriteria": [
          "Content clearly violates identifiable Community Standards policy",
          "Violation can be explained with educational context"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request a review if they believe Meta made a mistake in removing their content, with a multi-step process including additional context and final decision.",
      "steps": [
        "Receive immediate notification of content removal with policy explanation",
        "Review additional context and explanation of why the decision was made",
        "Submit request for review if you disagree with the decision",
        "Provide additional information to support your appeal",
        "Receive final decision after review has been completed"
      ]
    }
  },
  {
    "id": "facebook-new-1758220164771-3",
    "reference": "META-REPORTING",
    "title": "Facebook Content Reporting System",
    "summary": "Help center documentation for reporting violations including privacy violations, abuse, and other policy violations.",
    "url": "https://www.facebook.com/help/1380418588640631",
    "accessTimestamp": "2025-09-18T18:29:24.771Z",
    "policies": [
      {
        "id": "fb-reporting-general-content",
        "reference": "META-REPORTING-GENERAL",
        "summary": "Facebook provides reporting mechanisms for abusive content and spam through Report links near content, covering posts, photos, videos, messages, and other content types.",
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
            "description": "Access to the content through Facebook's platform",
            "example": "Being able to view the reported content",
            "reason": "Required to use the Report link functionality"
          }
        ],
        "removalCriteria": [
          "Content classified as abusive",
          "Content classified as spam"
        ]
      },
      {
        "id": "fb-reporting-photos-videos",
        "reference": "META-REPORTING-MEDIA",
        "summary": "Facebook allows reporting of photos and videos through their content reporting system for policy violations.",
        "quote": "Photos and Videos",
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
            "description": "Direct access to the photo or video content on Facebook",
            "example": "Being able to view the specific media content",
            "reason": "Needed to access the Report link associated with the content"
          }
        ],
        "removalCriteria": [
          "Photos or videos that violate Facebook's community standards",
          "Media content reported as abusive or inappropriate"
        ]
      },
      {
        "id": "fb-reporting-no-account",
        "reference": "META-REPORTING-EXTERNAL",
        "summary": "Facebook provides alternative reporting options for users who don't have accounts or cannot access content they want to report, such as when blocked by another user.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do",
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
            "description": "Alternative identification of the content to be reported",
            "example": "URL or description of inaccessible content",
            "reason": "Required when standard reporting mechanisms are unavailable"
          }
        ],
        "removalCriteria": [
          "Content that violates policies but is inaccessible to the reporter",
          "Content from users who have blocked the reporter"
        ]
      },
      {
        "id": "fb-reporting-privacy-violation",
        "reference": "META-REPORTING-PRIVACY",
        "summary": "Facebook has a specific reporting mechanism for privacy violations, accessible through their dedicated privacy violation reporting system.",
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
            "description": "Evidence of privacy violation",
            "example": "Documentation showing content was shared without permission",
            "reason": "Required to substantiate privacy violation claims"
          }
        ],
        "removalCriteria": [
          "Content that violates user privacy expectations",
          "Unauthorized sharing of private information or content"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
