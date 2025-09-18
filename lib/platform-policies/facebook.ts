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
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ASE",
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
          "Subject is identifiable"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BH",
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
          "Content includes degrading or shaming material",
          "The behavior is unwanted and causes distress"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PV",
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
          "Content contains personal information used maliciously"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AIR",
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
        "id": "meta-cs-intellectual-property",
        "reference": "CS-IP",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images.",
        "quote": "Third-Party Intellectual Property Infringement",
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
            "reason": "To locate the specific content that infringes intellectual property"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify you have the right to request removal"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission",
          "The use does not qualify as fair use or fair dealing",
          "Rights holder has not authorized the use"
        ]
      },
      {
        "id": "meta-cs-inauthentic-behavior",
        "reference": "CS-IB",
        "summary": "Prohibits inauthentic behavior including coordinated efforts to deceive or manipulate using fake accounts or content.",
        "quote": "Inauthentic Behavior",
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
            "reason": "To identify the specific inauthentic activity"
          },
          {
            "description": "Description of the deceptive behavior",
            "reason": "To understand how the behavior violates authenticity standards"
          },
          {
            "description": "Evidence of coordination or manipulation",
            "reason": "To establish patterns of inauthentic activity"
          }
        ],
        "removalCriteria": [
          "Account or content is designed to deceive users about identity or purpose",
          "Behavior involves coordinated inauthentic activity",
          "Content or account misrepresents its origin or intent"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, including content ownership and intellectual property rights. Updated January 1, 2025 with new AI and content licensing provisions.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
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
            "description": "Proof of ownership or rights to the content",
            "reason": "To demonstrate you have legal authority over the shared content"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To locate the specific content shared without permission"
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
        "summary": "Meta can remove or restrict access to content that violates their Terms of Service and Community Standards, with notification and review options provided.",
        "quote": "We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove content that you have shared in violation of the Community Standards, we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability.",
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
            "description": "Explanation of how content violates Terms or Community Standards",
            "reason": "To help reviewers understand the violation"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook Terms of Service",
          "Content violates Community Standards",
          "Content poses legal liability risks"
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
            "description": "Use of Facebook's reporting feature",
            "reason": "Primary mechanism for reporting violations"
          },
          {
            "description": "Description of rights violation or policy breach",
            "reason": "To explain the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Facebook's terms and policies",
          "Conduct violates platform guidelines"
        ]
      },
      {
        "id": "fb-tos-content-deletion",
        "reference": "FB-TOS-3.3.3",
        "summary": "Users can delete their own content at any time, with deletion taking up to 90 days to complete from systems and backups.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request.",
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
            "description": "Maximum time to delete content from all systems including backups"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Account access to delete own content",
            "reason": "Users can only delete content they have posted themselves"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User deletes their account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal decisions, unless violations are serious/repeated or would expose the platform to legal liability.",
      "steps": [
        "Facebook notifies users when content is removed for Community Standards violations",
        "Facebook explains available options for requesting another review",
        "Users can request review unless they seriously or repeatedly violate Terms",
        "Review may not be available if it would expose Facebook or others to legal liability"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data. Effective June 16, 2025 with enhanced regional privacy notices.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SAFETY-SECURITY",
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
            "description": "Report the content through Meta's reporting systems",
            "example": "Use the report button on the content",
            "reason": "To initiate review process for policy violations"
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
        "summary": "Meta responds to legal requests from law enforcement and courts, and may remove content to comply with applicable law and prevent harm.",
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
            "description": "Valid legal request such as court order or search warrant",
            "example": "Court order, subpoena, or law enforcement request",
            "reason": "Required for legal compliance and content removal"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Content removal required by applicable law",
          "Content poses safety or security risks to users or public"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta uses face analysis and facial recognition technology for identity verification and to protect against impersonation when users select this option.",
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
            "example": "Account photos or selfie verification",
            "reason": "To verify account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected on account",
          "Identity misuse or impersonation reported",
          "Account verification required for security purposes"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
        "quote": "Erase information: You have the right to erase information under GDPR and other relevant data protection laws",
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
            "description": "Request through Meta's privacy settings or help center",
            "example": "Submit erasure request via Facebook or Instagram settings",
            "reason": "To exercise data protection rights under applicable law"
          }
        ],
        "removalCriteria": [
          "User requests erasure of personal information",
          "Legal basis for processing no longer exists",
          "Information no longer necessary for original purpose"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "META-PP-THIRD-PARTY-SHARING",
        "summary": "Meta shares information with third parties only under specific circumstances including legal compliance, user consent, and safety protection.",
        "quote": "We don't sell any of your information to anyone, and we never will. We also require partners and other third parties to follow rules about how they can and cannot use and disclose the information we provide.",
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
            "description": "Evidence of unauthorized information sharing",
            "example": "Documentation showing third-party misuse of personal information",
            "reason": "To investigate and prevent unauthorized data sharing"
          }
        ],
        "removalCriteria": [
          "Third party violates data use agreements",
          "Unauthorized sharing of user information",
          "Information shared without proper legal basis"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides user rights including the ability to object to processing, withdraw consent, and make complaints to supervisory authorities. Some content decisions are reviewed by the Oversight Board.",
      "steps": [
        "Access Facebook or Instagram settings to manage privacy preferences",
        "Contact Meta through help centers for privacy-related concerns",
        "Submit complaints to supervisory authorities like the Irish Data Protection Commission",
        "Some content decisions may be reviewed by the independent Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758233543009-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy addressing bullying and harassment with enhanced protections for minors and involuntary public figures, directly relevant for harassment-based takedown requests.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
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
            "example": "Screenshots showing multiple unwanted messages or sexually explicit communications",
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
        "id": "meta-bh-sexual-activity-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity against individuals.",
        "quote": "Everyone is protected from: Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
            "description": "Evidence of statements expressing intent or advocacy for sexual activity",
            "example": "Screenshots of posts or messages containing sexual threats or propositions",
            "reason": "To verify the threatening or harassing nature of sexual statements"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity with target",
          "Content advocates for engaging in sexual activity with target"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "META-BH-T1-SEXCOMMENT",
        "summary": "Meta removes severe sexualized commentary and derogatory sexualized photoshop or drawings targeting individuals.",
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
            "example": "Screenshots of sexualized comments or manipulated images of sexual nature",
            "reason": "To demonstrate the severe and derogatory sexual nature of the content"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary about individual",
          "Content includes derogatory sexualized photoshop or drawings of individual"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "META-BH-T1-SEXATTACKS",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity (e.g., whore, slut) targeting individuals.",
        "quote": "Everyone is protected from: Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
            "description": "Evidence of attacks using derogatory sexual terms",
            "example": "Screenshots showing use of terms like 'whore', 'slut' or similar derogatory sexual language",
            "reason": "To verify the use of derogatory sexual terminology in attacks"
          }
        ],
        "removalCriteria": [
          "Content attacks individual using derogatory terms related to sexual activity"
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
            "example": "Screenshots of messages threatening to share phone number, address, email, or medical records",
            "reason": "To verify the threatening nature and identify what private information is at risk"
          }
        ],
        "removalCriteria": [
          "Content threatens to release private phone number",
          "Content threatens to release residential address",
          "Content threatens to release email address",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "META-BH-T2-SEXCLAIMS",
        "summary": "Meta removes claims about sexual activity targeting minors, private adults, and limited scope public figures, except in context of criminal allegations against adults.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of claims about sexual activity and confirmation of target's status",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify sexual nature of claims and determine if target qualifies for protection"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minor",
          "Content makes claims about sexual activity of private adult",
          "Content makes claims about sexual activity of limited scope public figure",
          "Exception: Criminal allegations of non-consensual sexual touching against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-ADULTSEX",
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
            "description": "Evidence of sexualizing content and confirmation of target's protected status",
            "example": "Screenshots of sexualizing posts or images targeting the individual",
            "reason": "To verify sexualizing nature of content and confirm target qualifies for protection"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a minor",
          "Content sexualizes a private adult",
          "Content sexualizes a limited scope public figure"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "META-BH-T2-MANIPULATED",
        "summary": "Meta removes content manipulated to negatively highlight specific physical characteristics when self-reported by protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
        "contentTypes": [
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
            "description": "Self-report from target and evidence of manipulated imagery",
            "example": "Report from the targeted individual with screenshots showing manipulated images highlighting physical features",
            "reason": "Self-reporting required for this tier of protection to confirm unwanted nature"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight physical characteristics negatively",
          "Content circles or draws attention to specific body parts",
          "Target must self-report for certain protection tiers"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-SELFREPORT-PAGES",
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
            "description": "Report from target or authorized representative showing unwanted targeting",
            "example": "Report from the individual or their representative identifying unwanted Pages, Groups, or Events targeting them",
            "reason": "Self-reporting or authorized representative reporting required to confirm unwanted nature"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported as unwanted by target or authorized representative"
        ]
      },
      {
        "id": "meta-bh-unwanted-content-confirmation",
        "reference": "META-BH-SELFREPORT-CONFIRM",
        "summary": "Meta removes bullying content when there is confirmation from the target or authorized representative that the content is unwanted.",
        "quote": "We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "example": "Statement from the individual or their representative confirming the content is unwanted",
            "reason": "Confirmation required to establish that the content is genuinely unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content would qualify as bullying/harassment under policies",
          "Target or authorized representative confirms content is unwanted",
          "Applies to living or deceased individuals"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-SELFREPORT-PUBFIG",
        "summary": "Meta removes content sexualizing public figures when there is confirmation from the target or authorized representative that the content is unwanted.",
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
            "description": "Confirmation from public figure or authorized representative that sexualizing content is unwanted",
            "example": "Statement from the public figure or their representative requesting removal of sexualizing content",
            "reason": "Even public figures can request removal of unwanted sexualizing content with proper confirmation"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Public figure or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexual-harassment-contact",
        "reference": "META-BH-SELFREPORT-SEXHARASS",
        "summary": "Meta removes sexually harassing contact when there is confirmation from the recipient or authorized representative that contact is unwanted.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or authorized representative that sexually harassing contact is unwanted",
            "example": "Statement from the recipient or their representative confirming the sexual harassment is unwanted",
            "reason": "Confirmation required to establish unwanted nature of sexually harassing contact"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain cases.",
      "steps": [
        "Receive notification of enforcement action",
        "Check Support Inbox for detailed review decision",
        "Request another review if disagreeing with decision",
        "Provide additional information during appeal",
        "Receive final response after re-review in Support Inbox",
        "For certain cases, may appeal to Oversight Board"
      ]
    }
  },
  {
    "id": "facebook-new-1758233543009-1",
    "reference": "META-AID",
    "title": "Meta Authentic Identity Representation Policy",
    "summary": "Policy governing impersonation and fake accounts, crucial for identity-based violation takedown requests.",
    "url": "https://transparency.meta.com/policies/community-standards/authentic-identity-representation",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-aid-impersonation-images",
        "reference": "META-AID",
        "summary": "Meta prohibits impersonation by using another person's images, name, or likeness with the aim to deceive others.",
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
            "example": "Government ID or other verification documents",
            "reason": "To confirm you are the person being impersonated"
          }
        ],
        "removalCriteria": [
          "Using another person's image(s), name, or likeness with the aim to deceive others",
          "Speaking in the voice of another person or entity for whom the user is not authorized to do so"
        ]
      },
      {
        "id": "meta-aid-identity-misrepresentation",
        "reference": "META-AID",
        "summary": "Meta restricts accounts that engage in identity misrepresentation to mislead or deceive others, including using stock imagery or misleading profile information.",
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
            "description": "Evidence of misleading identity misrepresentation",
            "example": "Screenshots showing false profile information or stock imagery being used",
            "reason": "To demonstrate deceptive practices"
          },
          {
            "description": "Documentation of how the misrepresentation affects you",
            "example": "Evidence of confusion or harm caused by the fake profile",
            "reason": "To establish impact of the misrepresentation"
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
        "reference": "META-AID",
        "summary": "Meta prohibits creating pages or profiles that speak in the voice of another person or entity without authorization.",
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
            "example": "Screenshots of the page or profile claiming to represent you or your organization",
            "reason": "To verify unauthorized representation is occurring"
          },
          {
            "description": "Proof of your authority or ownership",
            "example": "Business registration, trademark documentation, or other proof of legitimate authority",
            "reason": "To confirm you have the right to control representation"
          }
        ],
        "removalCriteria": [
          "Creating a Page or Profile to speak for another person without authorization",
          "Representing an entity without proper authorization"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides an appeal process through their Support Inbox where users can request another review if they disagree with enforcement decisions.",
      "steps": [
        "Report the violating content through Meta's reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through the appeal option",
        "Provide additional information to support your appeal",
        "Receive final response in Support Inbox after re-review"
      ]
    }
  },
  {
    "id": "facebook-new-1758233543009-2",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Content Enforcement and Takedown Policy",
    "summary": "Detailed explanation of Meta's three-part enforcement approach: remove, reduce, and inform, including strike system and account restrictions.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-enforcement-general-takedown",
        "reference": "META-ENFORCEMENT-TAKEDOWN",
        "summary": "Meta removes content that violates Community Standards and notifies users with explanations and strike system consequences.",
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
            "example": "Any content that goes against Meta's policies",
            "reason": "Required to demonstrate policy violation"
          }
        ],
        "removalCriteria": [
          "Content goes against the Community Standards",
          "Content violates Meta's policies as determined by review"
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
            "reason": "Used to determine appropriate account-level enforcement action"
          }
        ],
        "removalCriteria": [
          "Multiple policy violations accumulating strikes",
          "Previous history of violations",
          "Severity of policy violation"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review if they believe content was mistakenly removed, with additional context provided during the appeal process.",
      "steps": [
        "Receive immediate notification when content is removed",
        "Review additional context and policy explanation provided by Meta",
        "Submit request for review if you disagree with the decision",
        "Provide additional information to support your appeal",
        "Receive final decision after review is completed"
      ]
    }
  },
  {
    "id": "facebook-new-1758233543009-3",
    "reference": "META-NCII-PILOT",
    "title": "Facebook NCII Prevention Initiative",
    "summary": "Meta's proactive approach to preventing non-consensual intimate image sharing through StopNCII.org partnership and hash-based detection technology.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-PILOT",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms and provides proactive detection and removal services.",
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
            "description": "Access to intimate images that may be shared without consent",
            "example": "Photos or videos of a person which feature nudity or are sexual in nature",
            "reason": "To generate secure hash fingerprints for proactive detection"
          }
        ],
        "removalCriteria": [
          "Images or videos featuring nudity or sexual content shared without the subject's consent",
          "Content matches hash fingerprints submitted through StopNCII.org platform"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-PILOT",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of intimate images before they are posted.",
        "quote": "When someone is concerned their intimate images have been posted or might be posted to online platforms like Facebook or Instagram, they can create a case through StopNCII.org to proactively detect them. The tool features hash-generating technology that assigns a unique hash value (a numerical code) to an image, creating a secure digital fingerprint.",
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
            "description": "Original intimate images to generate hash fingerprints",
            "example": "Photos or videos stored on user's device",
            "reason": "To create secure digital fingerprints for detection across platforms"
          }
        ],
        "removalCriteria": [
          "Content matches hash fingerprints generated from original images",
          "Images are intimate in nature (featuring nudity or sexual content)",
          "Sharing occurs without consent of the person depicted"
        ]
      },
      {
        "id": "meta-ncii-privacy-protection",
        "reference": "META-NCII-PILOT",
        "summary": "Meta's NCII prevention system protects user privacy by processing hash fingerprints only, never requiring users to share actual intimate images.",
        "quote": "While participating companies use the hash they receive from StopNCII.org to identify images that someone has shared or is trying to share on their platforms, the original image never leaves the person's device. Only hashes, not the images themselves, are shared with StopNCII.org and participating tech platforms.",
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
            "description": "Hash fingerprints generated from intimate images",
            "example": "Numerical codes created by StopNCII.org platform",
            "reason": "To identify matching content without exposing the original images"
          }
        ],
        "removalCriteria": [
          "Content hash matches fingerprints in Meta's detection system",
          "Images were processed through StopNCII.org platform",
          "Content is intimate imagery shared without consent"
        ]
      },
      {
        "id": "meta-ncii-age-restriction",
        "reference": "META-NCII-PILOT",
        "summary": "Meta's StopNCII.org service is restricted to adults over 18, with separate resources available for minors.",
        "quote": "StopNCII.org is for adults over 18 years old who think an intimate image of them may be shared, or has already been shared, without their consent. For people who are under 18, there are other resources and organizations that can offer support, including the National Center for Missing & Exploited Children (NCMEC).",
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
            "description": "Verification that user is over 18 years old",
            "example": "Age confirmation during StopNCII.org registration",
            "reason": "Service is designed specifically for adult intimate imagery cases"
          }
        ],
        "removalCriteria": [
          "User must be over 18 years old to use StopNCII.org service",
          "Content involves intimate images of adults shared without consent",
          "Cases involving minors are referred to specialized organizations like NCMEC"
        ]
      },
      {
        "id": "meta-ncii-existing-removal",
        "reference": "META-NCII-PILOT",
        "summary": "Meta has existing systems for removing intimate images shared without consent and provides resources for victims.",
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
            "example": "User reports through Meta's existing reporting systems",
            "reason": "To identify and remove non-consensual intimate content"
          }
        ],
        "removalCriteria": [
          "Images are intimate in nature (nudity or sexual content)",
          "Content was shared without the subject's consent",
          "Content is reported through Meta's reporting mechanisms"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758233543009-4",
    "reference": "META-US-PRIVACY",
    "title": "Meta United States Regional Privacy Notice",
    "summary": "US-specific privacy rights and data handling procedures, including state-specific privacy law compliance.",
    "url": "https://www.facebook.com/privacy/policies/uso/",
    "accessTimestamp": "2025-09-18T22:12:23.009Z",
    "policies": [
      {
        "id": "meta-us-privacy-deletion",
        "reference": "META-US-PRIVACY-DELETION",
        "summary": "Users have the right to request deletion of personal information collected by Meta, including photos, videos, and other content.",
        "quote": "Right to Request Deletion: The right to request that we delete your Personal Information that we have collected from or about you.",
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
            "description": "Identity verification may be required",
            "example": "Government issued ID",
            "reason": "To protect information and integrity of products"
          }
        ],
        "removalCriteria": [
          "Personal information was collected from or about the requesting user",
          "Request meets applicable legal requirements under U.S. privacy laws"
        ]
      },
      {
        "id": "meta-us-privacy-correction",
        "reference": "META-US-PRIVACY-CORRECTION",
        "summary": "Users can request correction of inaccurate personal information maintained by Meta.",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you.",
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
            "description": "Identity verification may be required",
            "example": "Government issued ID",
            "reason": "To protect information and integrity of products"
          },
          {
            "description": "Evidence of inaccuracy",
            "example": "Correct information to replace inaccurate data",
            "reason": "To verify the correction request is valid"
          }
        ],
        "removalCriteria": [
          "Personal information maintained by Meta is demonstrably inaccurate",
          "User can provide correct information"
        ]
      },
      {
        "id": "meta-us-privacy-photos-videos",
        "reference": "META-US-PRIVACY-VISUAL-CONTENT",
        "summary": "Meta collects and processes photos, videos, face imagery, and voice recordings as personal information subject to user privacy rights.",
        "quote": "Photos and videos, which may include face imagery; Audio or visual information, including photos, videos, and voice recordings; Face imagery or voice recordings which may be used to identify you when you use relevant features.",
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
            "description": "Identity verification",
            "example": "Government issued ID",
            "reason": "To protect information and verify ownership of content"
          }
        ],
        "removalCriteria": [
          "Content contains user's personal information including photos, videos, or biometric data",
          "User has valid privacy rights under applicable U.S. laws"
        ]
      },
      {
        "id": "meta-us-privacy-sensitive-content",
        "reference": "META-US-PRIVACY-SENSITIVE",
        "summary": "Meta processes sensitive personal information including message content, health information, and identifying imagery with specific consent or legal permission requirements.",
        "quote": "We may also collect sensitive personal information (as defined by applicable U.S. privacy laws), which may include: The content of messages you send and receive, which are considered sensitive personal information under CCPA; Information about your health; Face imagery or voice recordings which may be used to identify you when you use relevant features.",
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
            "description": "Identity verification required",
            "example": "Government issued ID",
            "reason": "Enhanced protection for sensitive personal information"
          }
        ],
        "removalCriteria": [
          "Content contains sensitive personal information as defined by U.S. privacy laws",
          "Processing lacks required specific consent or legal permission",
          "User exercises valid privacy rights under applicable law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can appeal consumer rights actions through Meta's privacy support webform and may need to provide additional verification.",
      "steps": [
        "Submit appeal request through the privacy support webform",
        "Provide identity verification if requested (such as government issued ID)",
        "Allow Meta to process the appeal request",
        "Receive response regarding the appeal decision"
      ]
    }
  }
],
};
