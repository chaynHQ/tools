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
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
        "summary": "Prohibits adult sexual exploitation including non-consensual intimate imagery and sextortion.",
        "quote": "We remove content that facilitates, encourages, or coordinates sexual encounters between adults. We also remove content that displays, advocates for, or coordinates sexual acts with non-consenting parties to avoid facilitating non-consensual sexual acts.",
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
            "description": "Statement that the content is non-consensual",
            "reason": "To establish that consent was not given for sharing"
          },
          {
            "description": "Information to identify the victim",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Image/video shared without the consent of the depicted individual",
          "Content facilitates non-consensual sexual acts"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We define bullying as repeated behavior that's intended to harass, intimidate, or use embarrassing information to target someone. We define harassment as malicious targeting of specific individuals with content intended to degrade or shame, including sexual imagery of a person posted without permission.",
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
            "description": "URL(s) of the content",
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
          "Content includes degrading or shaming material, such as non-consensual intimate imagery",
          "The behavior is unwanted and causes severe emotional distress"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "Privacy and the protection of personal information are fundamentally important values for Facebook, Instagram, Messenger and Threads. We work hard to safeguard your personal identity and information and we do not allow people to post personal or confidential information about yourself or of others.",
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
            "description": "URL(s) of the content",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of how the content violates the victim's privacy",
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
          "Content contains personally identifiable information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AID",
        "summary": "Prohibits impersonating others, including individuals and organizations, with intent to deceive.",
        "quote": "Authenticity is the cornerstone of our community. We believe that people are more accountable for their statements and actions when they use their authentic identities. That's why we require people to connect on Facebook, Instagram, Messenger and Threads using the name they go by in everyday life.",
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
            "description": "URL of the impersonating profile or page",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Proof of identity",
            "example": "Government ID for a person, business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of the impersonation",
            "reason": "To understand how the account is misrepresenting your identity"
          }
        ],
        "removalCriteria": [
          "Account uses name, photos, or other identifying information without authorization",
          "The profile or page is intended to mislead or deceive others",
          "The account is not clearly marked as a parody or fan account"
        ]
      },
      {
        "id": "meta-cs-adult-nudity-sexual-activity",
        "reference": "CS-ANSA",
        "summary": "Restricts adult nudity and sexual activity, with exceptions for educational, humorous, satirical, artistic, and medical contexts.",
        "quote": "We restrict the display of nudity or sexual activity because some people in our community may be sensitive to this type of content. Additionally, we default to removing sexual imagery to prevent the sharing of non-consensual or underage content.",
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
            "description": "URL(s) of the content",
            "reason": "To locate and review the content"
          },
          {
            "description": "Explanation of why the content violates policy",
            "reason": "To understand the specific violation"
          }
        ],
        "removalCriteria": [
          "Content shows nudity or sexual activity",
          "Content does not fall under allowed exceptions (educational, artistic, etc.)",
          "Content may be non-consensual"
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
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
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
            "description": "Proof of ownership or authorized use of the copyrighted content",
            "reason": "To establish intellectual property rights violation"
          },
          {
            "description": "Identification of the specific infringing content",
            "reason": "To locate and assess the alleged copyright infringement"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights",
          "User does not own or have necessary rights to share the content"
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
            "description": "Evidence of ownership or authorization to share the content",
            "reason": "To verify the user has proper rights to the shared content"
          },
          {
            "description": "Identification of the unauthorized content",
            "reason": "To locate the content shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership or necessary rights",
          "User cannot demonstrate authorization to share the content"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove, block or restrict content that breaches Terms of Service or Community Standards.",
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
            "description": "Report identifying the violating content",
            "reason": "To enable Meta to locate and review the reported content"
          },
          {
            "description": "Explanation of how the content violates Terms or Community Standards",
            "reason": "To assess the validity of the removal request"
          }
        ],
        "removalCriteria": [
          "Content breaches Terms of Service provisions",
          "Content violates Community Standards",
          "Content involves harmful conduct towards others"
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
            "description": "Identification of the content or conduct being reported",
            "reason": "To locate and review the reported violation"
          },
          {
            "description": "Explanation of how rights were breached or policies violated",
            "reason": "To assess the validity and nature of the report"
          }
        ],
        "removalCriteria": [
          "Content breaches user's rights including intellectual property rights",
          "Content or conduct violates Meta's terms and policies"
        ]
      },
      {
        "id": "fb-tos-account-termination",
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
            "description": "Documentation of repeated violations or serious breaches",
            "reason": "To demonstrate pattern of policy violations warranting account action"
          },
          {
            "description": "Evidence of intellectual property infringement if applicable",
            "reason": "To support claims of repeated IP rights violations"
          }
        ],
        "removalCriteria": [
          "Clear, serious or repeated breaches of Terms or Policies",
          "Repeated infringement of other people's intellectual property rights",
          "Legal requirements mandate account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal or account actions, unless doing so may expose Meta or others to legal liability, harm the community, compromise system integrity, face technical limitations, or be prohibited for legal reasons.",
      "steps": [
        "Meta will explain options available to request another review when content is removed",
        "Users can request review of account suspension or termination decisions",
        "Advanced notification and opportunity to remedy may be provided unless breach requires immediate action",
        "Review options may not be available in cases involving legal liability, community harm, or legal prohibitions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
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
            "description": "Content reported to Meta through their reporting mechanisms",
            "example": "Using platform reporting tools",
            "reason": "To identify violations of terms or policies"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta accesses, preserves and shares information in response to legal requests from law enforcement and government authorities, and to comply with applicable law.",
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
            "reason": "Legal compliance requirement"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Promotion of safety, security and integrity"
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
            "example": "User report of harassment or threatening content",
            "reason": "To identify and address harmful content"
          }
        ],
        "removalCriteria": [
          "Harmful or unlawful behavior",
          "Spam and other bad experiences",
          "Threats to personnel and property",
          "Content that compromises platform integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies accounts and identity using face analysis and facial recognition technology when users select this option to protect against impersonation and identity misuse.",
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
            "description": "Account information, account photos, or photo/video selfie if user chooses to provide it",
            "example": "Selfie verification for account recovery",
            "reason": "To verify identity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity indicating impersonation",
          "Identity misuse",
          "Unverified accounts engaging in harmful behavior"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have rights to access, correct, download, erase information, withdraw consent, port data, object to processing, and make complaints about their data.",
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
            "description": "User identity verification through platform settings or help center contact",
            "example": "Accessing Facebook or Instagram settings to manage data",
            "reason": "To verify user identity before processing data requests"
          }
        ],
        "removalCriteria": [
          "User request to erase personal information",
          "User objection to data processing",
          "Withdrawal of consent for data processing"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content removal decisions are reviewed by the independent Oversight Board, and users can contact Meta through various help centers and settings.",
      "steps": [
        "Contact Meta through Facebook Help Center or Instagram Help Center",
        "Use platform settings to manage data and privacy preferences",
        "Submit complaints to Meta Platforms Ireland Limited or local supervisory authority",
        "Some cases may be reviewed by the independent Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758220799425-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment protections, including heightened protections for minors and content removal guidelines for degrading or shaming content.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
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
            "reason": "To establish pattern of harassment or unwanted nature of contact"
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
            "description": "Evidence of sexualized harassment content",
            "example": "Screenshots of derogatory sexual comments or manipulated images",
            "reason": "To verify the sexual nature and severity of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings",
          "Content attacks through derogatory sexual terms"
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
            "reason": "To verify the threatening nature and identify the private information at risk"
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
        "summary": "Meta removes claims about sexual activity for minors, private adults and limited scope public figures, except in the context of criminal allegations against adults.",
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
            "description": "Evidence of false sexual activity claims",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify the nature of the claims and confirm they are not legitimate criminal allegations"
          },
          {
            "description": "Confirmation of user status (minor, private adult, or limited scope public figure)",
            "example": "Profile information or other evidence of user category",
            "reason": "To determine applicable protection level under the policy"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of legitimate criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-unwanted-manipulated-imagery",
        "reference": "META-BH-T3-MANIPULATED",
        "summary": "Meta removes unwanted manipulated imagery when self-reported by private minors, private adults, and minor involuntary public figures.",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report from the targeted individual or authorized representative",
            "example": "Report submitted by the person depicted in the manipulated content",
            "reason": "Policy requires self-reporting for this protection level"
          },
          {
            "description": "Evidence of image manipulation",
            "example": "Comparison showing original vs manipulated image",
            "reason": "To verify the content has been altered without consent"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target is private minor, private adult, or minor involuntary public figure",
          "Content is self-reported as unwanted",
          "Imagery was manipulated without consent"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups-events",
        "reference": "META-BH-PAGES-GROUPS",
        "summary": "Meta removes content that targets private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
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
            "example": "Takedown request from the individual being targeted",
            "reason": "Policy requires confirmation from target that content is unwanted"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted pages or groups created about the individual",
            "reason": "To verify the targeting behavior and platform used"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals",
          "Targeting occurs through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is confirmed as unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing a public figure when confirmed unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Written statement from public figure or their representative",
            "reason": "Policy requires explicit confirmation that sexualizing content is unwanted"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots of posts sexualizing the public figure",
            "reason": "To verify the sexual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted",
          "Confirmation is provided to Meta"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeal options through Support Inbox notifications with request for additional review if users disagree with enforcement decisions.",
      "steps": [
        "User receives notification of enforcement action",
        "Detailed explanation provided in Support Inbox",
        "User can request another review if they disagree",
        "User can provide additional information during appeal",
        "Meta sends final response after re-review to Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758220799425-1",
    "reference": "META-IB",
    "title": "Inauthentic Behavior Policy",
    "summary": "Policy addressing fake accounts, impersonation, and coordinated inauthentic behavior including specific guidelines on misrepresentation and fake profiles.",
    "url": "https://transparency.meta.com/policies/community-standards/inauthentic-behavior/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
    "policies": [
      {
        "id": "meta-ib-fake-accounts",
        "reference": "META-IB-ACCOUNTS",
        "summary": "Meta prohibits the creation or use of fake accounts to deceive users about identity, purpose, or origin, or to evade enforcement.",
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
            "example": "Documentation showing real identity differs from account representation",
            "reason": "To verify authenticity violations"
          }
        ],
        "removalCriteria": [
          "Account deceives about identity, purpose, or origin",
          "Account is used to evade Community Standards enforcement",
          "Account misuses reporting systems to harass others"
        ]
      },
      {
        "id": "meta-ib-inauthentic-distribution",
        "reference": "META-IB-DISTRIBUTION",
        "summary": "Meta prohibits using networks of fake accounts to artificially boost content distribution and mislead users about content popularity.",
        "quote": "Inauthentic Distribution: Using a connected network of inauthentic Meta assets to increase the distribution of content, in order to mislead Meta or its users about the popularity of the content in question.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of coordinated inauthentic network boosting content",
            "example": "Pattern of fake accounts sharing or engaging with specific content",
            "reason": "To identify artificial amplification networks"
          }
        ],
        "removalCriteria": [
          "Connected network of inauthentic assets used to boost content distribution",
          "Intent to mislead about content popularity"
        ]
      },
      {
        "id": "meta-ib-foreign-behavior",
        "reference": "META-IB-FOREIGN",
        "summary": "Meta prohibits foreign entities using fake accounts to falsely represent domestic voices and deceive audiences about their true origin.",
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
            "description": "Evidence that foreign entity is posing as domestic voice",
            "example": "Technical indicators or content analysis showing foreign origin",
            "reason": "To verify foreign interference in local discourse"
          }
        ],
        "removalCriteria": [
          "Foreign entity using inauthentic assets to pose as domestic voice",
          "Intent to deceive audience about true origin or identity"
        ]
      },
      {
        "id": "meta-ib-coordinated-behavior",
        "reference": "META-IB-COORDINATED",
        "summary": "Meta prohibits sophisticated coordinated inauthentic behavior where fake accounts are central to operations designed to manipulate public debate.",
        "quote": "Coordinated Inauthentic Behavior, defined as particularly sophisticated forms of Inauthentic Behavior where inauthentic accounts are central to the operation and operators: Use adversarial methods to evade detection or appear authentic; and Use a variety of adversarial and inauthentic techniques to achieve overarching strategic objectives; and Primarily seek to manipulate public debate.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sophisticated coordinated network with fake accounts",
            "example": "Pattern analysis showing coordinated behavior across multiple accounts",
            "reason": "To identify complex manipulation operations"
          },
          {
            "description": "Evidence of adversarial evasion techniques",
            "example": "Technical indicators of attempts to avoid detection",
            "reason": "To verify sophisticated deception methods"
          }
        ],
        "removalCriteria": [
          "Inauthentic accounts are central to the operation",
          "Use of adversarial methods to evade detection",
          "Variety of inauthentic techniques for strategic objectives",
          "Primary intent to manipulate public debate"
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
            "description": "Evidence of systematic misuse of reporting features",
            "example": "Pattern of false reports targeting specific users",
            "reason": "To identify harassment through platform mechanisms"
          }
        ],
        "removalCriteria": [
          "Systematic misuse of reporting systems",
          "Intent to harass, intimidate, or silence others"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review through Support Inbox if they disagree with enforcement decisions, with final response provided after re-review.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Request another review if disagreeing with decision",
        "Provide additional information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758220799425-2",
    "reference": "META-ENFORCEMENT",
    "title": "Taking Down Violating Content",
    "summary": "Detailed enforcement procedures explaining how Meta removes content, notification processes, and strike systems for policy violations.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
    "policies": [
      {
        "id": "meta-enforcement-general-removal",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanation of the violation and strike system consequences.",
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
            "example": "Any content that goes against Meta's Community Standards policies",
            "reason": "Required basis for content removal under Meta's enforcement system"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Strike system may result in account restrictions or disabling based on violation history"
        ]
      },
      {
        "id": "meta-enforcement-notification-process",
        "reference": "META-ENFORCEMENT-NOTIFICATION",
        "summary": "Meta provides detailed notifications when content is removed, including policy explanations and references to specific Community Standards violations.",
        "quote": "We'll let you know when something you posted goes against our Community Standards. Usually, this notice appears in your Feed when you log into Facebook or in your feed on Instagram. You can also find it in your Support Inbox on Facebook or Support Requests on Instagram. We'll do our best to reference which part of our policies you didn't follow, and give a brief description of why we don't allow the content.",
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
            "description": "Notification will reference specific policy violation",
            "example": "Reference to which Community Standards section was violated",
            "reason": "To help users understand the violation and avoid future policy breaches"
          }
        ],
        "removalCriteria": [
          "Content violates specific Community Standards policies",
          "Notification includes policy reference and violation description"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request a review if they believe Meta made a mistake in removing their content, with an option to provide additional information during the appeal process.",
      "steps": [
        "Receive notification of content removal with policy explanation",
        "If you disagree with the decision, click to request another review",
        "Provide additional information to support your appeal",
        "Submit review request and receive expectations about the review process",
        "Receive final decision on the appeal"
      ]
    }
  },
  {
    "id": "facebook-new-1758220799425-3",
    "reference": "META-COPYRIGHT",
    "title": "Copyright and Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA procedures, and intellectual property rights protection on Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-18T18:39:59.425Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "META-COPYRIGHT-INFRINGEMENT",
        "summary": "Meta removes content that infringes copyright when reported by rights holders through their online forms or designated agent contact.",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use and our Community Standards, you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms, such as Facebook and Instagram, doesn't violate copyright law is to only post content that you've created yourself.",
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
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "Original photo, video, or other creative work you created",
            "reason": "To establish ownership and infringement"
          },
          {
            "description": "Contact information including valid email address",
            "example": "Business or professional email address",
            "reason": "Meta provides your contact details to the person who posted the content"
          },
          {
            "description": "Proof of authorization if filing on behalf of someone else",
            "example": "Written authorization from copyright owner",
            "reason": "Only copyright owner or authorized representative can file reports"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from rights holder",
          "Content facilitates copyright infringement through unauthorized devices or services",
          "Report submitted by copyright owner or authorized representative",
          "Content doesn't qualify for fair use or other copyright exceptions"
        ]
      },
      {
        "id": "meta-copyright-unauthorized-use",
        "reference": "META-COPYRIGHT-UNAUTHORIZED",
        "summary": "Meta considers various forms of unauthorized content use as potential copyright infringement, even with credit given or disclaimers added.",
        "quote": "It's possible to infringe someone else's copyright when you post their content on Meta platforms, or facilitate copyright infringement, even if you: Recorded the content onto your own recording device, Gave credit to the copyright owner, Included a disclaimer that you didn't intend to infringe copyright, Didn't intend to profit from it, Modified the work or added your own original material to it, Found the content available on the Internet, Saw that others posted the same content as well",
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
            "description": "Proof of original creation or ownership",
            "example": "Original files, timestamps, or creation records",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "Identification of infringing content",
            "example": "URLs or screenshots of unauthorized posts",
            "reason": "To locate and assess the infringing material"
          }
        ],
        "removalCriteria": [
          "Content posted without permission regardless of credit given",
          "Content posted without permission regardless of disclaimers",
          "Content posted without permission regardless of modification",
          "Content posted without permission regardless of non-commercial intent",
          "Content recorded from original source without authorization"
        ]
      },
      {
        "id": "meta-copyright-repeat-infringer",
        "reference": "META-COPYRIGHT-REPEAT",
        "summary": "Meta may disable accounts or remove pages for users who repeatedly post content that infringes intellectual property rights.",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
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
            "description": "Documentation of multiple copyright infringement reports",
            "example": "Previous takedown notices and responses",
            "reason": "To establish pattern of repeated infringement"
          },
          {
            "description": "Evidence of continued unauthorized use after previous removals",
            "example": "Screenshots showing re-posting of removed content",
            "reason": "To demonstrate ongoing infringement behavior"
          }
        ],
        "removalCriteria": [
          "Multiple instances of copyright infringement by same user",
          "Continued posting of infringing content after previous removals",
          "Pattern of intellectual property violations across posts"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals and may file DMCA counter-notifications. Instructions are provided in removal notifications. Users can also contact rights holders directly to resolve issues.",
      "steps": [
        "Receive notification from Meta with rights holder contact information",
        "Follow appeal instructions provided in the removal notification",
        "For DMCA cases, file counter-notification following provided instructions",
        "Alternatively, contact rights holder directly to resolve the issue",
        "If content is restored due to successful appeal, it won't count against repeat infringer policy"
      ]
    }
  }
],
};
