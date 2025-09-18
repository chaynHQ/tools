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
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "CS-ADULT-SEXUAL-EXPLOITATION",
        "summary": "Prohibits sharing non-consensual intimate images and threatening to share intimate images for purposes of extortion or coercion.",
        "quote": "We remove content that threatens or advocates for sexual violence, sexual assault, or sexual exploitation, including the non-consensual sharing of intimate images and sextortion.",
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
            "description": "Information to identify the victim and locate the content",
            "reason": "To verify the request and process removal effectively"
          }
        ],
        "removalCriteria": [
          "Content depicts nudity or sexual activity",
          "Image/video shared without the consent of the depicted individual",
          "Content is used for extortion or coercion (sextortion)",
          "Content threatens sexual violence or exploitation"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "CS-BULLYING-HARASSMENT",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit sharing intimate images of someone without their consent.",
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
          "The behavior is repeated and intended to intimidate or silence",
          "Content includes non-consensual intimate imagery used for harassment"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "CS-PRIVACY-VIOLATIONS",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We prohibit content that violates someone's privacy, including sharing intimate images of a person without their consent and sharing personal information to harass or abuse someone.",
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
          "Content contains personal information used maliciously or for harassment",
          "Content includes intimate images shared without the subject's consent"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "CS-AUTHENTIC-IDENTITY-REPRESENTATION",
        "summary": "Prohibits impersonating others, including using someone's images or identity to mislead or deceive.",
        "quote": "We require people to use the name they go by in everyday life and prohibit impersonation. We don't allow people to maintain accounts that pose as someone else in a misleading or deceptive manner.",
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
            "example": "Government ID for a person, business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account or content misrepresents identity",
            "reason": "To understand how the account is misrepresenting your identity"
          }
        ],
        "removalCriteria": [
          "Account or content uses name, photos, or other identifying information without authorization",
          "The profile, page, or content is intended to mislead or deceive others",
          "The account is not clearly marked as a parody, fan account, or commentary",
          "Content uses someone's likeness in a deceptive manner"
        ]
      },
      {
        "id": "meta-cs-adult-nudity-sexual-activity",
        "reference": "CS-ADULT-NUDITY-SEXUAL-ACTIVITY",
        "summary": "Restricts adult nudity and sexual activity, with specific protections against non-consensual sharing.",
        "quote": "We restrict the display of nudity or sexual activity because some people in our community may be sensitive to this type of content. We also prohibit some images of female nipples, but we allow other images, including those depicting acts of protest, women actively engaged in breast-feeding, and photos of post-mastectomy scarring.",
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
            "description": "URL(s) of the content containing nudity or sexual activity",
            "reason": "To locate and review the specific content"
          },
          {
            "description": "Statement that the content was shared without consent",
            "reason": "To establish non-consensual nature of sharing"
          },
          {
            "description": "Information to verify the identity of the person depicted",
            "reason": "To confirm the person making the report is the subject of the content"
          }
        ],
        "removalCriteria": [
          "Content shows nudity or sexual activity",
          "Content was shared without the consent of the depicted person",
          "Content does not fall under allowed exceptions (art, education, medical contexts)",
          "Content violates community standards on adult nudity"
        ]
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
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
    "policies": [
      {
        "id": "fb-tos-ip-infringement",
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
            "description": "Identification of the infringing content",
            "reason": "To locate and assess the violation"
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
            "description": "URL or identification of the unauthorized content",
            "reason": "To locate the content shared without permission"
          }
        ],
        "removalCriteria": [
          "User does not own the shared content",
          "User lacks necessary rights or permissions to share the content"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove or restrict access to content that violates their Terms of Service and Community Standards.",
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
            "description": "Explanation of how the content violates Terms or Community Standards",
            "reason": "To assess the validity of the removal request"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's Terms of Service",
          "Content violates Community Standards",
          "Content involves conduct that violates platform provisions"
        ]
      },
      {
        "id": "fb-tos-reporting-system",
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
            "description": "Identification of the violating content or conduct",
            "reason": "To enable Meta to investigate the reported violation"
          },
          {
            "description": "Explanation of how your rights were violated",
            "reason": "To assess the validity and nature of the rights violation"
          }
        ],
        "removalCriteria": [
          "Content violates user's legal rights",
          "Content violates Meta's terms and policies",
          "Conduct violates platform community standards"
        ]
      },
      {
        "id": "fb-tos-misuse-prevention",
        "reference": "FB-TOS-3.2",
        "summary": "Meta can remove content or restrict access to avoid misuse of services or adverse legal impacts.",
        "quote": "We also can remove or restrict access to content, features, services, or information if we determine that doing so is reasonably necessary to avoid or mitigate misuse of our services or adverse legal or regulatory impacts to Meta.",
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
            "description": "Evidence of service misuse or potential legal issues",
            "reason": "To demonstrate the need for content removal or access restriction"
          }
        ],
        "removalCriteria": [
          "Content contributes to misuse of Meta's services",
          "Content creates adverse legal or regulatory impacts for Meta",
          "Removal is reasonably necessary to mitigate identified risks"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions, except in cases involving serious violations, legal liability, or technical limitations.",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users can request another review of the removal decision",
        "Review options may not be available for serious or repeated violations",
        "Review may be restricted due to legal liability, technical limitations, or legal prohibitions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
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
            "description": "Report content that violates terms or policies",
            "example": "Content reported through platform reporting mechanisms",
            "reason": "To identify violations for review and potential removal"
          }
        ],
        "removalCriteria": [
          "Violations of Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content reported by users that violates community standards"
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
            "description": "Valid legal request such as search warrant, court order, production order, or subpoena",
            "example": "Court order requesting specific user information",
            "reason": "Legal compliance requirement for information disclosure"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Court orders or legal mandates requiring content removal"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-PROMOTION",
        "summary": "Meta promotes safety, security and integrity by detecting and preventing harmful behavior, spam, and threats to users and the platform.",
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
            "description": "Evidence of harmful behavior, spam, or security threats",
            "example": "Reports of harassment, impersonation, or malicious activity",
            "reason": "To maintain platform safety and user protection"
          }
        ],
        "removalCriteria": [
          "Harmful or unlawful behavior",
          "Spam and other bad experiences",
          "Threats to personnel and property",
          "Violations that compromise platform integrity"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, including through facial recognition technology with user consent.",
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
            "description": "Account information, account photos, or photo/video selfie if provided",
            "example": "Government ID or selfie verification",
            "reason": "To verify identity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity indicating impersonation",
          "Identity misuse or fraudulent accounts",
          "Failure to verify legitimate account ownership"
        ]
      },
      {
        "id": "meta-pp-data-rights",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have rights to access, correct, port, download, and erase their information, as well as object to processing and make complaints.",
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
            "description": "Identity verification to exercise data rights",
            "example": "Account credentials or identity verification",
            "reason": "To ensure only authorized users can access or modify their data"
          }
        ],
        "removalCriteria": [
          "Valid user request to erase information",
          "Withdrawal of consent for data processing",
          "Objection to processing that cannot be overridden by legitimate interests"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Content removal decisions may be reviewed by the Oversight Board, and users can contact Meta through various channels including online contact forms and help centers.",
      "steps": [
        "Contact Meta online through provided contact forms",
        "Submit appeals through Facebook Help Center or Instagram Help Center",
        "Some content decisions may be escalated to the Oversight Board for review",
        "Contact Data Protection Officer for privacy-related concerns"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
    "policies": [
      {
        "id": "fb-hc-content-reporting",
        "reference": "FB-HC-Reporting",
        "summary": "Facebook provides reporting mechanisms for abusive content or spam through Report links near content and various content-specific reporting options.",
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
            "description": "Access to the content or its location on Facebook",
            "reason": "To identify and review the specific content being reported"
          },
          {
            "description": "Use of the Report link near the content",
            "reason": "Facebook's preferred reporting mechanism for efficient processing"
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
        "summary": "Facebook provides alternative reporting options for users who cannot access content directly, such as when blocked by the content poster.",
        "quote": "If you don't have an account or can't see the content you'd like to report (example: someone blocked you), learn what you can do",
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
            "description": "Information about the content location or user posting it",
            "reason": "To help Facebook locate content that cannot be directly accessed by the reporter"
          },
          {
            "description": "Explanation of why the content cannot be accessed directly",
            "example": "Being blocked by the user, not having an account",
            "reason": "To determine the appropriate reporting pathway"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies",
          "Reporter has legitimate reason for being unable to access content directly"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758232627838-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment across Meta platforms, including heightened protections for minors and public figures.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
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
            "description": "Evidence of sexualized content or derogatory terms",
            "example": "Screenshots of the offending content or manipulated images",
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
            "example": "Screenshots showing threats to doxx or release personal information",
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
        "summary": "Meta removes claims about sexual activity for minors, private adults, and limited scope public figures, except in the context of criminal allegations against adults.",
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
            "description": "Evidence of false claims about sexual activity",
            "example": "Screenshots of posts making sexual claims",
            "reason": "To verify the nature of the claims and confirm they are not related to legitimate criminal allegations"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence that target is a minor, private adult, or limited scope public figure",
            "reason": "To determine applicable protection level under the policy"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-sexualizing-adults",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
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
            "example": "Screenshots or links to content that sexualizes the individual",
            "reason": "To verify the sexual nature of the content"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence that target is a minor, private adult, or limited scope public figure",
            "reason": "To determine if enhanced protections apply"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
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
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of manipulated imagery",
            "example": "Screenshots showing manipulated photos with highlighted or circled features",
            "reason": "To verify the content has been manipulated to target physical characteristics"
          },
          {
            "description": "Confirmation of protected status",
            "example": "Evidence that target qualifies for Tier 2 or higher protections",
            "reason": "To determine if policy protections apply"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific body parts or features",
          "Target qualifies for enhanced protections under the policy"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-REPORTING-REQUIRED",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report from target or authorized representative",
            "example": "Confirmation that the content is unwanted by the targeted individual",
            "reason": "Policy requires self-reporting or authorized representative reporting"
          },
          {
            "description": "Evidence of targeting through Pages/Groups/Events",
            "example": "Screenshots showing unwanted content on Pages, Groups, or Events",
            "reason": "To verify the targeting mechanism and unwanted nature"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative",
          "Content is confirmed as unwanted by the target"
        ]
      },
      {
        "id": "meta-bh-sexualizing-public-figures",
        "reference": "META-BH-PUBLIC-FIGURE-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative",
            "example": "Statement that the sexualizing content is unwanted",
            "reason": "Policy requires confirmation that content is unwanted"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots or links to content that sexualizes the public figure",
            "reason": "To verify the sexual nature of the content"
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
    "id": "facebook-new-1758232627838-1",
    "reference": "META-AI",
    "title": "Meta Account Integrity and Authentic Identity Policy",
    "summary": "Policy covering impersonation, fake accounts, and authentic identity requirements across Meta platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/account-integrity-and-authentic-identity/",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
    "policies": [
      {
        "id": "meta-ai-account-restriction",
        "reference": "META-AI-ACCOUNT-INTEGRITY",
        "summary": "Meta may restrict or disable accounts that violate Community Standards involving egregious harms or demonstrate activity indicative of clear violating purpose.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that: Violate our Community Standards involving egregious harms, including those we refer to law enforcement due to the risk of imminent harm to individual or public safety",
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
            "description": "Evidence of Community Standards violation",
            "example": "Screenshots or links to violating content",
            "reason": "To demonstrate policy violation occurred"
          }
        ],
        "removalCriteria": [
          "Violate Community Standards involving egregious harms",
          "Violate Community Standards involving any harms that warrant referral to law enforcement due to risk of imminent harm",
          "Persistently violate Community Standards by posting violating content",
          "Demonstrate activity or behavior indicative of a clear violating purpose"
        ]
      },
      {
        "id": "meta-ai-evasion-prevention",
        "reference": "META-AI-EVASION",
        "summary": "Meta restricts accounts created to evade previous removals, contact blocked users, or otherwise circumvent enforcement actions.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that are: Created or repurposed to evade a previous account or entity removal, including those assessed to have common ownership and content as previously removed accounts or entities - Created to contact a user that has blocked an account - Otherwise used to evade our enforcement actions or review processes",
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
            "description": "Evidence of connection to previously removed account",
            "example": "Similar profile information, content, or behavior patterns",
            "reason": "To establish evasion attempt"
          },
          {
            "description": "Evidence of attempts to contact after blocking",
            "example": "Screenshots of unwanted contact attempts",
            "reason": "To demonstrate harassment through new accounts"
          }
        ],
        "removalCriteria": [
          "Created or repurposed to evade previous account removal",
          "Created to contact a user that has blocked an account",
          "Used to evade enforcement actions or review processes"
        ]
      },
      {
        "id": "meta-ai-network-coordination",
        "reference": "META-AI-NETWORK",
        "summary": "Meta takes action against accounts that demonstrate coordination within networks that persistently or egregiously violate policies.",
        "quote": "We may restrict or disable accounts, other entities (Pages, groups, events) or business assets (Business Managers, ad accounts) that demonstrate: Close linkage with a network of accounts or other entities that violate or evade our policies - Coordination within a network of accounts or other entities that persistently or egregiously violate our policies - Activity or behavior indicative of a clear violating purpose through a network of accounts",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of coordination between multiple accounts",
            "example": "Similar posting patterns, shared content, or coordinated harassment",
            "reason": "To establish network behavior"
          }
        ],
        "removalCriteria": [
          "Close linkage with a network of accounts that violate or evade policies",
          "Coordination within a network that persistently or egregiously violates policies",
          "Activity indicative of clear violating purpose through network of accounts"
        ]
      },
      {
        "id": "meta-ai-offplatform-harm",
        "reference": "META-AI-OFFPLATFORM",
        "summary": "Meta restricts accounts owned by convicted sex offenders or those engaging in off-platform activity that can lead to harm on the platform.",
        "quote": "We will work to restrict or disable accounts or other entities (Pages, groups, events), or business assets (Business Managers, ad accounts) that engage in off-platform activity that can lead to harm on our platform, including those: Owned by a convicted sex offender, convicted of offences related to the sexual abuse of children or adults",
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
            "description": "Evidence of conviction for sexual offenses",
            "example": "Court records or legal documentation",
            "reason": "To verify criminal history related to sexual abuse"
          },
          {
            "description": "Evidence of off-platform harmful activity",
            "example": "Documentation of harmful behavior outside Meta platforms",
            "reason": "To establish risk of on-platform harm"
          }
        ],
        "removalCriteria": [
          "Owned by a convicted sex offender",
          "Owned by someone convicted of offences related to sexual abuse of children or adults",
          "Engage in off-platform activity that can lead to harm on the platform"
        ]
      },
      {
        "id": "meta-ai-compromised-accounts",
        "reference": "META-AI-COMPROMISED",
        "summary": "Meta may request additional information to verify ownership of compromised accounts or accounts created through automated means.",
        "quote": "In the following scenarios, we may request additional information about an account to ascertain ownership and/or permissible activity: Compromised accounts - Creating or using an account or other entity through automated means, such as scripting (unless the scripting activity occurs through authorized routes and does not otherwise violate our policies)",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of account compromise",
            "example": "Unauthorized access logs or suspicious activity",
            "reason": "To verify legitimate ownership"
          },
          {
            "description": "Identity verification information",
            "example": "Government-issued ID or account recovery information",
            "reason": "To confirm account ownership"
          }
        ],
        "removalCriteria": [
          "Account has been compromised",
          "Account created or used through unauthorized automated means"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides notification when content is removed and offers opportunity for review if people disagree with enforcement decisions.",
      "steps": [
        "Receive notification about enforcement action with explanation",
        "Review policy explanation and context for the decision",
        "Submit request for another review if disagreeing with decision",
        "Provide additional information to support appeal",
        "Receive final decision after re-review"
      ]
    }
  },
  {
    "id": "facebook-new-1758232627838-2",
    "reference": "META-ENFORCEMENT",
    "title": "Meta Content Enforcement - Taking Down Violating Content",
    "summary": "Detailed explanation of Meta's content enforcement process, including how violations are detected, reviewed, and removed.",
    "url": "https://transparency.meta.com/enforcement/taking-action/taking-down-violating-content/",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
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
          "Strike count reaches threshold for account action"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/2090856331203011?helpref=faq_content",
      "summary": "Users can request review if they believe Meta made a mistake in removing their content, and Meta will take another look.",
      "steps": [
        "Receive notification of content removal in Feed or Support Inbox/Support Requests",
        "Review the policy explanation and reason for removal",
        "If you believe Meta made a mistake, use the 'let us know' option to request review",
        "Provide additional information if disagreeing with the decision",
        "Submit request for another review",
        "Wait for final decision on the review"
      ]
    }
  },
  {
    "id": "facebook-new-1758232627838-3",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Support",
    "summary": "Information about Meta's support for StopNCII.org initiative and policies regarding non-consensual intimate image sharing.",
    "url": "https://about.fb.com/news/2021/12/strengthening-efforts-against-spread-of-non-consensual-intimate-images/",
    "accessTimestamp": "2025-09-18T21:57:07.839Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) on all platforms including Facebook and Instagram.",
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
            "example": "Create case at StopNCII.org to generate hash of intimate images",
            "reason": "Enables proactive detection across participating platforms while keeping images secure"
          },
          {
            "description": "Direct reporting through platform reporting mechanisms",
            "example": "Use Facebook/Instagram reporting tools for NCII content",
            "reason": "Standard reporting pathway for content already shared"
          }
        ],
        "removalCriteria": [
          "Images or videos of intimate nature shared without consent",
          "Content featuring nudity or sexual nature shared non-consensually",
          "Hash matches from StopNCII.org database indicating non-consensual sharing"
        ]
      },
      {
        "id": "meta-ncii-proactive-detection",
        "reference": "META-NCII-002",
        "summary": "Meta uses hash-matching technology to proactively detect and prevent sharing of intimate images through StopNCII.org partnership.",
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
            "description": "Create case through StopNCII.org platform",
            "example": "Upload images to generate secure hash on user's device",
            "reason": "Enables proactive detection while maintaining privacy - images never leave user's device"
          },
          {
            "description": "Must be 18 years or older to use StopNCII.org",
            "example": "Age verification for platform access",
            "reason": "Platform designed for adult users only"
          }
        ],
        "removalCriteria": [
          "Hash match detected from StopNCII.org database",
          "Proactive prevention of sharing attempts based on hash matching",
          "Detection of existing content matching submitted hashes"
        ]
      },
      {
        "id": "meta-ncii-privacy-protection",
        "reference": "META-NCII-003",
        "summary": "Meta's NCII detection system protects user privacy by using hash technology that never requires sharing actual intimate images.",
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
            "description": "Hash generation on user's device through StopNCII.org",
            "example": "Secure digital fingerprint created locally",
            "reason": "Maintains complete privacy while enabling detection"
          }
        ],
        "removalCriteria": [
          "Hash-based detection of non-consensual intimate content",
          "Prevention of sharing based on secure digital fingerprints"
        ]
      },
      {
        "id": "meta-ncii-victim-resources",
        "reference": "META-NCII-004",
        "summary": "Meta provides resources and support for NCII victims including removal tools and educational materials.",
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
            "description": "Report content through platform reporting mechanisms",
            "example": "Use Facebook/Instagram reporting tools",
            "reason": "Standard pathway for content removal requests"
          },
          {
            "description": "Access victim support resources",
            "example": "Visit facebook.com/safety/notwithoutmyconsent/resources",
            "reason": "Provides additional support and guidance for victims"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent",
          "Photo and video matching technology detection",
          "User reports of non-consensual sharing"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
