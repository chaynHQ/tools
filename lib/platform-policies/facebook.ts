import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior across Meta platforms including Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "fb-ncii-policy",
        "reference": "CS-NCSII",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content.",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content.",
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
        "timeframes": {
          "response": {
            "value": 48,
            "unit": "hours",
            "description": "Priority review for severe harms like NCII"
          },
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
        "evidenceRequirements": [
          {
            "description": "URL(s) of the infringing content",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Statement made in good faith that the content is non-consensual",
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
          "The content is an authentic or AI-generated intimate depiction",
          "Subject is identifiable"
        ]
      },
      {
        "id": "fb-sextortion-policy",
        "reference": "CS-SEXTORTION",
        "summary": "Prohibits threatening to share intimate images for purposes of extortion or coercion (sextortion).",
        "quote": "We prohibit threatening to share intimate images for purposes of extortion or coercion (sextortion).",
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
            "description": "URL(s) of threatening content or messages",
            "reason": "To identify and review the threatening behavior"
          },
          {
            "description": "Description of threats or demands made",
            "reason": "To understand the nature and severity of the extortion"
          },
          {
            "description": "Evidence of the intimate content being used for the threat",
            "reason": "To establish the connection between the threat and the intimate material"
          }
        ],
        "removalCriteria": [
          "Evidence of threats to share intimate content",
          "Content is being used for extortion or harassment",
          "Subject identifies themselves as the victim"
        ]
      },
      {
        "id": "fb-bullying-policy",
        "reference": "CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images without consent is considered a severe form of bullying.",
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
        "id": "fb-privacy-policy",
        "reference": "CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing intimate media of a person without their consent is a severe privacy violation.",
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
          "Content contains PII used maliciously or for harassment"
        ]
      },
      {
        "id": "fb-impersonation-policy",
        "reference": "CS-IMPERSONATION",
        "summary": "Prohibits impersonating others, including individuals and organizations, with an intent to deceive.",
        "quote": "We prohibit impersonating others, including individuals and organizations, with an intent to deceive.",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "fb-terms-of-service",
    "reference": "FB-TOS",
    "title": "Meta Terms of Service",
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, with significant updates effective January 1, 2025 including clarified content licensing and AI usage terms.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "fb-tos-ip-rights",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright infringement of photos and videos.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "description": "Proof of ownership of intellectual property rights in the content",
            "reason": "To establish that the complainant owns the copyright or other IP rights being infringed"
          },
          {
            "description": "URL(s) of the infringing content on Facebook",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights, including copyright",
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
            "description": "Evidence that you are the rightful owner of the content",
            "reason": "To establish ownership rights over the shared content"
          },
          {
            "description": "Proof that you did not give permission for the content to be shared",
            "reason": "To demonstrate lack of authorization for sharing"
          }
        ],
        "removalCriteria": [
          "User does not own the content being shared",
          "User does not have necessary rights or permission to share the content"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Community Standards, which include policies against harassment, privacy violations, and non-consensual sharing.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report identifying the specific Community Standards violation",
            "reason": "To categorize the type of policy violation for appropriate enforcement action"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the content that violates Community Standards"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-account-security",
        "reference": "FB-TOS-3.1",
        "summary": "Prohibits sharing passwords, giving account access to others, or transferring accounts without permission.",
        "quote": "Not share your password, give access to your Facebook account to others, or transfer your account to anyone else (without our permission).",
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
            "description": "Evidence that your account was accessed without authorization",
            "reason": "To establish that account security was compromised"
          },
          {
            "description": "Documentation of unauthorized content posted from your account",
            "reason": "To identify content shared without your permission due to compromised access"
          }
        ],
        "removalCriteria": [
          "Account password was shared without authorization",
          "Account access was given to unauthorized persons",
          "Account was transferred without Meta's permission"
        ]
      },
      {
        "id": "fb-tos-content-removal",
        "reference": "FB-TOS-3.2",
        "summary": "Authorizes removal or restriction of access to content that violates platform policies and provides for account suspension or termination for violations.",
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
            "description": "Report or complaint identifying the policy violation",
            "reason": "To assess whether content violates platform terms and policies"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's Terms of Service",
          "Content violates Community Standards or other applicable policies",
          "User conduct violates platform provisions"
        ]
      },
      {
        "id": "fb-tos-content-deletion",
        "reference": "FB-TOS-3.3.3",
        "summary": "Provides users the right to delete individual content and explains the deletion process and timeframes.",
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
            "description": "Up to 90 days to delete content after deletion process begins"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Access to the account from which content should be deleted",
            "reason": "To authenticate the deletion request and process content removal"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User deletes their account (removes all personal content)",
          "Content deletion is requested through proper channels"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review of content removal decisions and account actions, unless violations are serious or repeated, or where legal restrictions apply.",
      "steps": [
        "If content is removed for Community Standards violations, Facebook will notify you and explain review options",
        "Request another review through the provided options (specific process not detailed in Terms)",
        "Note that review options may not be available for serious or repeated violations",
        "For account suspension or termination, contact Facebook if you believe the action was taken by mistake"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across all Meta products, with updates effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Processes information to promote safety, security and integrity, including detecting and preventing harmful or unlawful behavior, investigating suspicious activity, and reviewing and removing reported content.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Accesses, preserves, uses and shares user information in response to legal requests from third parties such as law enforcement, court orders, and subpoenas, and to promote safety and prevent harm.",
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
            "example": "Court-issued subpoena for user information",
            "reason": "Required by law for Meta to disclose user information"
          }
        ],
        "removalCriteria": [
          "Valid legal requests from authorized parties",
          "Requirements under applicable law",
          "Threats to safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-account-management",
        "reference": "Section 6 - Managing and Deleting Information",
        "summary": "Provides users with tools to view, manage, download and delete their information, including the ability to delete content or entire accounts.",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
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
            "description": "User account access or identity verification",
            "example": "Login credentials or account verification",
            "reason": "To ensure only authorized users can manage or delete account information"
          }
        ],
        "removalCriteria": [
          "User request to delete information or account",
          "User exercise of privacy rights under applicable laws"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information Retention",
        "summary": "Preserves information for extended periods when needed for legitimate purposes such as preventing harm, investigating policy violations, promoting safety and security, or protecting Meta's rights and property.",
        "quote": "In some instances and for specific reasons, we'll keep information for an extended period of time. We may preserve your information for an extended amount of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products.",
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
            "description": "Evidence of harm, policy violations, or threats to safety",
            "example": "Reports of harassment, abuse, or security threats",
            "reason": "To investigate violations and protect users and Meta's interests"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for legitimate purposes",
          "Completion of investigation or legal proceedings",
          "Resolution of safety or security concerns"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters.",
      "steps": [
        "Contact Meta online through the help center support system",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) directly depending on jurisdiction"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "fb-hacked-account-policy",
        "reference": "FB-HC-HACKED",
        "summary": "Provides a process to report and recover compromised accounts via facebook.com/hacked.",
        "quote": "If you're having other issues, such as trouble logging into your account or if you think you've been hacked, learn more about what steps you can take.",
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
      },
      {
        "id": "fb-content-reporting-policy",
        "reference": "FB-HC-REPORTING",
        "summary": "Provides a reporting mechanism for abusive content and spam through Report links near content.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself.",
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
            "description": "Access to the content or its URL",
            "reason": "To identify and locate the specific content that violates policies"
          },
          {
            "description": "Use of the Report link near the content",
            "reason": "To initiate the platform's review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Content is identified as abusive",
          "Content is identified as spam",
          "Content violates Facebook's community standards"
        ]
      },
      {
        "id": "fb-blocked-user-reporting-policy",
        "reference": "FB-HC-BLOCKED",
        "summary": "Provides alternative reporting options for users who cannot access content due to being blocked or lacking an account.",
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
            "description": "Information about the content location or user profile",
            "reason": "To identify content that cannot be directly accessed due to blocking or account restrictions"
          },
          {
            "description": "Alternative reporting method through specialized forms",
            "reason": "To enable reporting when standard Report links are not accessible"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies",
          "User is blocked from accessing the content",
          "Reporter does not have a Facebook account"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758634447431-0",
    "reference": "META-NCII",
    "title": "Non-Consensual Intimate Images Policy",
    "summary": "Specific policy addressing non-consensual intimate imagery (NCII) prevention and removal, including StopNCII.org integration.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "meta-ncii-adult-nudity",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity, including visible genitalia, anuses, close-ups of buttocks, and visible female nipples except in breastfeeding or protest contexts.",
        "quote": "Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context",
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
            "description": "Report the specific content that violates the policy",
            "example": "URL or location of the violating imagery",
            "reason": "To identify and review the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts visible genitalia including when obscured by pubic hair or digital overlays",
          "Content shows visible anuses and/or close-ups of visible buttocks",
          "Content displays visible female nipples except in breastfeeding or protest contexts"
        ]
      },
      {
        "id": "meta-ncii-voyeuristic-content",
        "reference": "Adult Nudity",
        "summary": "Prohibits photorealistic and digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person depicted.",
        "quote": "Photorealistic/ digital videos that focus on crotch, female breasts, or buttocks recorded without the awareness of the person(s) depicted in them",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the specific video content",
            "example": "URL or location of the voyeuristic video",
            "reason": "To identify and review content recorded without subject's awareness"
          }
        ],
        "removalCriteria": [
          "Video focuses on crotch, female breasts, or buttocks",
          "Content was recorded without the awareness of the person depicted"
        ]
      },
      {
        "id": "meta-ncii-sexual-activity",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery of adult sexual activity, including explicit and implicit sexual activity, stimulation, and other sexual conduct.",
        "quote": "Photorealistic/ digital imagery of adult sexual activity, including: Explicit sexual activity or stimulation: Explicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, or genitals placed upon or inserted into a sex toy, when at least one person's genitals or anus is visible; Explicit stimulation of a person's genitals or anus, as indicated by stimulation, or the insertion of sex toys into the person's genitals or anus, when the contact with the genitals or anus is directly visible",
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
            "description": "Report the specific sexual content that violates the policy",
            "example": "URL or location of the sexual imagery",
            "reason": "To identify and review the specific sexual content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts explicit sexual intercourse or oral sex with visible genitals or anus",
          "Content shows explicit stimulation of genitals or anus with direct visibility",
          "Content displays implicit sexual activity or stimulation",
          "Content shows impending sexual activity or erections",
          "Content depicts presence of by-products of sexual activity",
          "Content shows stimulation of visible human nipples",
          "Content displays squeezing of female breasts outside breastfeeding contexts"
        ]
      },
      {
        "id": "meta-ncii-fetish-content",
        "reference": "Adult Sexual Activity",
        "summary": "Prohibits photorealistic and digital imagery depicting fetish content involving acts likely to lead to death, dismemberment, cannibalism, bodily fluids, bestiality, incest, or BDSM with sexual indicators.",
        "quote": "Photorealistic/ digital imagery or real world art depicting fetish that involves the following: Acts that are likely to lead to the death of a person or animal, Dismemberment, Cannibalism, Feces, urine, spit, snot, menstruation or vomit, Bestiality, Incest, BDSM (bondage and discipline, domination and submission, sadism and masochism), only when sexual indicators are also present",
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
            "description": "Report the specific fetish content that violates the policy",
            "example": "URL or location of the violating fetish imagery",
            "reason": "To identify and review the specific fetish content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts acts likely to lead to death of a person or animal",
          "Content shows dismemberment or cannibalism",
          "Content involves bodily fluids including feces, urine, spit, snot, menstruation or vomit",
          "Content depicts bestiality or incest",
          "Content shows BDSM activities with sexual indicators present"
        ]
      },
      {
        "id": "meta-ncii-age-restricted-nudity",
        "reference": "Adult Nudity - Age Restricted",
        "summary": "Restricts access to users 18 and older for digital imagery and real world art of explicit sexual activity in medical contexts, visible genitalia in gender confirmation surgery contexts, and nudity shared in contexts of famine, genocide, war crimes, or crimes against humanity.",
        "quote": "For the following content, we limit the ability to view the content to users, ages 18 and older and include a label so that people are aware the content may be sensitive: Digital imagery and real world art of explicit sexual activity or stimulation in a medical or health context, Photorealistic/ digital imagery and real world art of implicit or other sexual activity or stimulation in a medical or health context, Photorealistic/digital imagery and real-world art of visible genitalia, visible anuses, close-ups of visible buttocks or visible female nipples in the context of gender confirmation surgery, Real world art of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair only), visible anuses, close-ups of visible buttocks or visible female nipples, where the nudity is the focus of the image and not in a medical or health context, Photorealistic/ digital imagery of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair), close-ups of visible buttocks, visible anuses or visible female nipples, when shared in the context of famine, genocide, war crimes, or crimes against humanity",
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
            "description": "Report the specific content and confirm it lacks appropriate medical, health, or humanitarian context",
            "example": "URL of content that should be age-restricted",
            "reason": "To verify content requires age restriction and appropriate labeling"
          }
        ],
        "removalCriteria": [
          "Content shows explicit sexual activity in medical context without proper restrictions",
          "Content displays visible genitalia in gender confirmation surgery context without age restrictions",
          "Content depicts nudity in contexts of famine, genocide, war crimes, or crimes against humanity without proper labeling",
          "Real world art focuses on nudity outside medical/health context without age restrictions"
        ]
      },
      {
        "id": "meta-ncii-near-nudity-restriction",
        "reference": "Adult Content - Age Restricted",
        "summary": "Restricts access to users 18 and older for photorealistic imagery depicting near nudity, content where intimate body parts are the focus, sexual activity where only body shapes are visible, and recognized fictional sexual imagery.",
        "quote": "For the following content, we limit the ability to view the content to adults, ages 18 and older: Photorealistic/digital imagery depicting near nudity such as nudity covered only by digital overlay or an opaque object and certain instances of nudity obscured by see-through clothing, Photorealistic/digital imagery of persons where crotch, buttock or female breast(s) are the focus of the image, Photorealistic/ digital imagery and real world art of explicit, implicit or other sexual activity or stimulation when only body shapes or contours are visible, Recognized fictional photorealistic imagery depicting implicit or other sexual activity or stimulation",
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
            "description": "Report the specific content that should be age-restricted",
            "example": "URL of near-nudity or sexually suggestive content accessible to minors",
            "reason": "To verify content requires age restriction for users under 18"
          }
        ],
        "removalCriteria": [
          "Content depicts near nudity covered only by digital overlay or opaque objects without age restrictions",
          "Content focuses on crotch, buttocks, or female breasts without age restrictions",
          "Content shows sexual activity with only body shapes visible without age restrictions",
          "Fictional photorealistic sexual imagery is accessible to users under 18"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they believe the decision was incorrect.",
      "steps": [
        "Receive notification of content action via notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758634447431-1",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, reporting mechanisms, and appeal processes.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement section",
        "summary": "Prohibits posting content that infringes someone else's copyright without permission, including photos, videos, music, and other copyrighted works",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission.",
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
            "description": "Complete copyright claim including identification of copyrighted work and infringing content",
            "example": "URL to infringing content, description of copyrighted work being infringed",
            "reason": "Required to process DMCA takedown requests and verify copyright ownership"
          },
          {
            "description": "Proof of copyright ownership or authorization to act on behalf of copyright owner",
            "example": "Copyright registration, license agreement, or authorization letter",
            "reason": "Only copyright owners or authorized representatives can file infringement reports"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from copyright owner",
          "Content infringes copyright even if user gave credit to copyright owner",
          "Content infringes copyright even if user included disclaimer about not intending to infringe",
          "Content infringes copyright even if user modified the work or added original material",
          "Content infringes copyright even if user legally purchased the content elsewhere"
        ]
      },
      {
        "id": "meta-copyright-terms-violation",
        "reference": "Copyright and posting content on Meta platforms section",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights under Facebook and Instagram Terms of Use and Community Standards",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
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
            "description": "Report through official Meta copyright infringement forms",
            "example": "Facebook copyright form or Instagram copyright form submission",
            "reason": "Required reporting mechanism for intellectual property violations on Meta platforms"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was not created by the person posting it",
          "Content was posted without permission from copyright owner"
        ]
      },
      {
        "id": "meta-copyright-facilitation",
        "reference": "Copyright and posting content on Meta platforms section",
        "summary": "Prohibits posting content that facilitates copyright infringement through unauthorized devices or services",
        "quote": "Posting content that facilitates copyright infringement through unauthorized devices or services is also not allowed on Meta platforms.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content facilitates copyright infringement through unauthorized means",
            "example": "Content promoting jailbroken devices, loaded streaming services, or unauthorized distribution methods",
            "reason": "To identify and remove content that enables copyright infringement"
          }
        ],
        "removalCriteria": [
          "Content facilitates copyright infringement through unauthorized devices",
          "Content facilitates copyright infringement through unauthorized services",
          "Content promotes use of jailbroken or loaded apps/services for accessing copyrighted material"
        ]
      },
      {
        "id": "meta-repeat-infringer-policy",
        "reference": "Repeat infringer policy section",
        "summary": "Disables accounts or removes pages for users who repeatedly post content that infringes intellectual property rights",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy.",
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
            "description": "Multiple verified reports of intellectual property infringement",
            "example": "Pattern of copyright or trademark violations across multiple posts",
            "reason": "To identify accounts that systematically violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "User repeatedly posts content that infringes copyrights",
          "User repeatedly posts content that infringes trademarks",
          "Account shows pattern of intellectual property violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals and submit DMCA counter-notifications. Instructions are provided in removal notifications. Users can also contact rights owners directly to resolve issues.",
      "steps": [
        "Receive notification from Meta about content removal with details of copyright report",
        "Follow appeal instructions provided in the removal notification message",
        "For DMCA cases, file a DMCA counter-notification following provided instructions",
        "Alternatively, contact the rights owner directly using information provided in notification",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  },
  {
    "id": "facebook-new-1758634447431-2",
    "reference": "META-APPEALS",
    "title": "Content Appeals Process",
    "summary": "Detailed process for appealing content removal decisions and counter-notifications.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T13:34:07.431Z",
    "policies": [
      {
        "id": "meta-appeals-content-review",
        "reference": "Appeals Process",
        "summary": "Provides an appeals process for content removal decisions, allowing users to request another review when they believe content was incorrectly removed for policy violations",
        "quote": "Where a decision is eligible for appeal, people are given the option to ask us to take another look after receiving a notification that their content has been removed or covered with a warning. When someone appeals a decision, Meta reviews the post again and determines whether or not it follows our Community Standards.",
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
            "description": "User must disagree with the initial decision and request another review",
            "example": "Selecting the option to disagree when notified of content removal",
            "reason": "Required to initiate the appeals process for content review"
          }
        ],
        "removalCriteria": [
          "Content must have been initially removed or covered with a warning for policy violations",
          "Decision must be eligible for appeal (excludes extreme safety concerns like child exploitation imagery)"
        ]
      },
      {
        "id": "meta-appeals-exclusions",
        "reference": "What can be appealed",
        "summary": "Excludes appeals for violations with extreme safety concerns, such as child exploitation imagery, while offering appeals for the vast majority of other violation types",
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
            "description": "Content must not involve extreme safety concerns",
            "example": "Content that doesn't include child exploitation imagery",
            "reason": "Extreme safety violations are excluded from the appeals process"
          }
        ],
        "removalCriteria": [
          "Content involves extreme safety concerns such as child exploitation imagery",
          "Content falls under violation types that are not eligible for appeal"
        ]
      },
      {
        "id": "meta-appeals-reporter-appeals",
        "reference": "What can be appealed",
        "summary": "Provides appeals not only for content that was acted upon, but also for content that was reported but not acted on, through reporter appeals",
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
            "description": "User must have reported content that was not acted upon",
            "example": "Content that was reported for policy violations but remained on the platform",
            "reason": "Allows reporters to appeal when they believe content should have been removed but wasn't"
          }
        ],
        "removalCriteria": [
          "Content was reported but no action was taken",
          "Reporter believes the content should have been removed for policy violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides a multi-step appeals process where users can request review of content removal decisions. Appeals are processed through human review and technology, with a secondary review process if the initial appeal is denied.",
      "steps": [
        "Receive notification that content has been removed or covered with a warning",
        "Choose to disagree with the decision and request another review",
        "Content is resubmitted for review while remaining invisible to other users",
        "If reviewer accepts original decision, content remains removed",
        "If reviewer disagrees with initial decision, content goes to another reviewer for final determination",
        "Final reviewer's decision determines whether content should be restored or remain removed"
      ]
    }
  }
],
};
