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
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
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
    "summary": "Legal terms governing the use of Facebook and Messenger, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
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
            "description": "Proof of ownership or authorization to use the content",
            "reason": "To establish that the user has intellectual property rights in the content"
          },
          {
            "description": "URL(s) of the infringing content on Facebook",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or trademark rights",
          "Content is shared without permission from the rights holder",
          "No applicable exception or limitation under law applies"
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
            "reason": "To demonstrate that the person posting lacks necessary rights"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content shared without permission"
          }
        ],
        "removalCriteria": [
          "User does not own the content being shared",
          "User lacks necessary rights or permission to share the content"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Facebook's Community Standards, with enforcement including content removal and account restrictions.",
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
            "description": "Report identifying the violating content",
            "reason": "To alert Facebook to potential Community Standards violations"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates Community Standards"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-content-removal-process",
        "reference": "FB-TOS-3.2",
        "summary": "Provides for removal or restriction of access to violating content and suspension or disabling of accounts for policy violations.",
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
            "description": "Report of violating content or conduct",
            "reason": "To notify Facebook of potential violations requiring enforcement action"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's terms and policies",
          "User conduct violates Facebook's provisions"
        ]
      },
      {
        "id": "fb-tos-content-deletion",
        "reference": "FB-TOS-3.3.3",
        "summary": "Allows users to delete individual content and provides for automatic deletion within specified timeframes, with content becoming non-visible during the deletion process.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users.",
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
            "description": "Up to 90 days to delete content after deletion process begins, with automatic trash deletion starting after 30 days"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request or account deletion request",
            "reason": "To initiate the content removal process"
          }
        ],
        "removalCriteria": [
          "User requests deletion of individual content",
          "User deletes their account",
          "Content is sent to trash and 30-day period expires"
        ]
      },
      {
        "id": "fb-tos-reporting-mechanism",
        "reference": "FB-TOS-3.2",
        "summary": "Encourages users to report content or conduct that violates their rights, including intellectual property rights, or Facebook's terms and policies.",
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
            "description": "Report identifying the violating content or conduct",
            "reason": "To notify Facebook of potential violations"
          },
          {
            "description": "Description of how the content violates rights or policies",
            "reason": "To help Facebook assess the violation"
          }
        ],
        "removalCriteria": [
          "Content or conduct violates user's rights",
          "Content or conduct violates Facebook's terms and policies"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Facebook provides options to request review when content is removed for Community Standards violations, unless violations are serious or repeated, or legal restrictions apply. Users can also request review for account suspension or termination decisions.",
      "steps": [
        "Facebook will notify users when content is removed for Community Standards violations",
        "Facebook will explain available options for requesting another review",
        "Users can request review unless they seriously or repeatedly violated Terms",
        "For account actions, users can request review unless doing so may expose Facebook or others to legal liability",
        "Review may not be available where technical limitations exist or legal reasons prohibit it"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across Facebook, Instagram, and Messenger.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to protect users from harm",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We use information we have to verify accounts and activity, find and address violations of our terms or policies, investigate suspicious activity, detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, protect the life, physical or mental health, well-being or integrity of our users or others.",
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
            "description": "Report of harmful content",
            "example": "Content reported through platform reporting mechanisms",
            "reason": "To identify violations that require review and potential removal"
          }
        ],
        "removalCriteria": [
          "Content that violates terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens life, physical or mental health, well-being or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Requires access, preservation, use and sharing of information in response to legal requests and to prevent harm",
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
            "description": "Valid legal request",
            "example": "Search warrant, court order, production order or subpoena",
            "reason": "To comply with legal obligations and law enforcement requirements"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests",
          "Content that threatens safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 4 - Third Party Information Sharing",
        "summary": "Prohibits unauthorized sharing of user information and requires partners and third parties to follow rules about information use and disclosure",
        "quote": "We don't sell any of your information to anyone, and we never will. We also require partners and other third parties to follow rules about how they can and cannot use and disclose the information we provide.",
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
            "description": "Evidence of unauthorized information sharing",
            "example": "Documentation showing violation of information use rules",
            "reason": "To enforce rules about proper information handling by partners and third parties"
          }
        ],
        "removalCriteria": [
          "Unauthorized sale or sharing of user information",
          "Violation of information use and disclosure rules by partners or third parties"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "Section 2 - Account and Activity Verification",
        "summary": "Requires verification of accounts and activity to detect and prevent suspicious behavior and unauthorized access",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We use information we have to verify accounts and activity, investigate suspicious activity, detect, prevent and combat harmful or unlawful behavior.",
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
            "description": "Account verification information",
            "example": "Information to verify legitimate account ownership",
            "reason": "To prevent unauthorized access and detect suspicious activity"
          }
        ],
        "removalCriteria": [
          "Unverified or suspicious accounts",
          "Evidence of unauthorized account access",
          "Accounts engaged in harmful or unlawful behavior"
        ]
      },
      {
        "id": "meta-pp-content-review",
        "reference": "Section 2 - Manual Content Review",
        "summary": "Conducts manual review of user information and content to identify and address policy violations",
        "quote": "For some of these purposes, we use information across our Products and across your devices. The information we use for these purposes is automatically processed by our systems. But in some cases, we also use manual review to access and review your information.",
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
            "description": "Content requiring manual review",
            "example": "Reported content that requires human evaluation",
            "reason": "To accurately identify policy violations that automated systems cannot detect"
          }
        ],
        "removalCriteria": [
          "Content identified as violating policies through manual review",
          "Content requiring human evaluation for policy compliance"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information Preservation",
        "summary": "Preserves information for extended periods when needed to prevent harm, investigate violations, or protect rights and property",
        "quote": "In some instances and for specific reasons, we'll keep information for an extended period of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products.",
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
            "description": "Evidence of need for extended preservation",
            "example": "Documentation of ongoing investigation or safety concern",
            "reason": "To maintain evidence for harm prevention, violation investigation, or legal protection"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for legitimate purposes",
          "Completion of investigation or resolution of safety concerns"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, users may contact their local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
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
      },
      {
        "id": "fb-content-reporting-policy",
        "reference": "FB-HC-REPORTING",
        "summary": "Provides reporting mechanisms for abusive content and spam through Report links near content.",
        "quote": "The best way to report abusive content or spam on Facebook is by using the Report link near the content itself.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "harassment",
          "impersonation",
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Access to the content via Report link",
            "reason": "To enable direct reporting through Facebook's built-in mechanisms"
          },
          {
            "description": "Specific content identification (post, photo, comment, etc.)",
            "example": "URL or direct link to the violating content",
            "reason": "To locate and review the reported content for policy violations"
          }
        ],
        "removalCriteria": [
          "Content constitutes abusive material",
          "Content is identified as spam",
          "Content violates Facebook's community standards"
        ]
      },
      {
        "id": "fb-child-exploitation-policy",
        "reference": "FB-HC-CHILD-ABUSE",
        "summary": "Requires immediate reporting of images showing child physical abuse or sexual exploitation.",
        "quote": "If you see images of a child being physically abused or sexually exploited on Facebook",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through specialized reporting mechanism for child exploitation",
            "reason": "To ensure immediate escalation and proper handling of child safety violations"
          }
        ],
        "removalCriteria": [
          "Images depicting child physical abuse",
          "Images depicting child sexual exploitation"
        ]
      },
      {
        "id": "fb-human-trafficking-policy",
        "reference": "FB-HC-TRAFFICKING",
        "summary": "Provides reporting process for content related to human trafficking.",
        "quote": "What should I do if someone posts something on Facebook related to human trafficking?",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content related to human trafficking activities",
            "reason": "To identify and remove content that facilitates or promotes human trafficking"
          }
        ],
        "removalCriteria": [
          "Content related to human trafficking activities"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758631202434-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive policy and resources for non-consensual intimate imagery (NCII) prevention, reporting, and victim support including StopNCII.org integration.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "NCII Policy",
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII) and takes action when content or behavior exploits people, including sharing or threatening to share someone's intimate images",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report the content using dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate images on Facebook, Instagram, or Messenger",
            "reason": "Platform has specialized teams and processes for handling intimate image abuse cases"
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
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and considers such behavior against Meta policies",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. Sharing—or threatening to share—intimate images without consent is against Meta policies.",
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
            "description": "Report threats and intimate images shared without permission",
            "example": "Report nude or sexual photos or videos of yourself or threats to share these images",
            "reason": "Teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior"
          }
        ],
        "removalCriteria": [
          "Threatening to reveal intimate images to coerce behavior",
          "Using intimate images as leverage to force unwanted actions",
          "Extortion involving intimate imagery"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "Review Process",
        "summary": "Reviews reports of intimate image abuse and threats 24/7 in more than 70 languages and takes action on violating content and behavior",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior.",
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
            "description": "Submit report through platform reporting mechanisms",
            "example": "Use Facebook, Instagram, or Messenger reporting tools",
            "reason": "Enables 24/7 multilingual review process for taking action on violations"
          }
        ],
        "removalCriteria": [
          "Content violates platform policies regarding intimate images",
          "Behavior violates platform policies regarding threats or exploitation"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "Enforcement Technology",
        "summary": "Uses automated systems that detect and remove accounts associated with sextortion behavior at scale, with specialized teams investigating and removing these accounts",
        "quote": "We have identified patterns associated with this behavior, and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Platform uses pattern recognition to identify violating accounts",
            "example": "Automated detection of accounts exhibiting sextortion behavior patterns",
            "reason": "Enables proactive removal of criminal accounts and reporting to authorities"
          }
        ],
        "removalCriteria": [
          "Account exhibits patterns associated with sextortion behavior",
          "Account identified as engaging in criminal exploitation activities"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "Teen Protection Policies",
        "summary": "Restricts adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger, and limits message requests to text-only until accepted",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos, or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "Platform automatically enforces age-based messaging restrictions",
            "example": "System prevents adults from messaging unconnected teens",
            "reason": "Protects teens from unwanted contact and potential sextortion attempts"
          }
        ],
        "removalCriteria": [
          "Adult attempting to privately message unconnected teen",
          "Sending non-text content in message requests before acceptance"
        ]
      },
      {
        "id": "meta-suspicious-adult-detection",
        "reference": "Suspicious Behavior Detection",
        "summary": "Uses technology to identify and prevent potentially suspicious adults from finding, following and interacting with teen accounts, and provides safety notices when suspicious adults interact with teens",
        "quote": "We use technology to identify and prevent potentially suspicious adults from finding, following and interacting with teen accounts, and we don't recommend teen accounts to these adults. We have proactive prompts—or safety notices—that notify young people when an adult who has been exhibiting potentially suspicious behavior is interacting with them in messages.",
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
            "description": "Platform automatically identifies suspicious adult behavior patterns",
            "example": "Adult sending large amounts of friend requests to people under 18",
            "reason": "Enables proactive protection and warning systems for teens"
          }
        ],
        "removalCriteria": [
          "Adult exhibiting potentially suspicious behavior toward teens",
          "Adult attempting to find or interact with teen accounts inappropriately"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758631202434-1",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Detailed copyright and intellectual property policy covering DMCA procedures, reporting mechanisms, and appeal processes for Facebook and Instagram.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement section",
        "summary": "Prohibits posting content that infringes someone else's copyrighted work without permission, including photos, videos, music, and other creative works.",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim including identification of copyrighted work and infringing content",
            "example": "URL to the infringing content and proof of copyright ownership",
            "reason": "Required to establish valid copyright infringement claim under DMCA"
          },
          {
            "description": "Contact information and authorization to act on behalf of copyright owner",
            "example": "Valid business or professional email address",
            "reason": "Platform provides reporter's details to the person who posted the content"
          }
        ],
        "removalCriteria": [
          "Content uses someone else's copyrighted work without permission",
          "Content infringes copyright even if credit was given to the owner",
          "Content infringes copyright even if disclaimer was included",
          "Content infringes copyright even if it was legally purchased",
          "Content infringes copyright even if it was modified or had original material added"
        ]
      },
      {
        "id": "meta-copyright-unauthorized-sharing",
        "reference": "Copyright and posting content section",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights and requires users to only post content they created themselves.",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through official copyright infringement form",
            "example": "Facebook copyright form or Instagram copyright form submission",
            "reason": "Fastest and easiest way to report copyright infringement to designated agent"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content was not created by the person posting it",
          "Content was posted without permission from the copyright owner"
        ]
      },
      {
        "id": "meta-copyright-ownership-photos",
        "reference": "Know if you own the copyright section",
        "summary": "Establishes that taking a photo generally grants copyright ownership to the photographer, but appearing in a photo does not grant copyright ownership to the subject.",
        "quote": "In general, the person who creates an original work owns the copyright. For example, if you create a painting, you likely own the copyright for that painting. Similarly, if you take a photo, you likely own the copyright for that photo. If you appear in a photo or video, that doesn't necessarily mean you have a copyright in that photo or video.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of being the original creator or copyright owner",
            "example": "Evidence of taking the photo or creating the work",
            "reason": "Only copyright owner or authorized representative can file infringement report"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the actual copyright owner",
          "Person reporting is not the copyright owner or authorized representative"
        ]
      },
      {
        "id": "meta-repeat-infringer-policy",
        "reference": "Repeat infringer policy section",
        "summary": "Prohibits repeatedly posting content that infringes intellectual property rights and may result in account disability, page removal, or loss of platform features.",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Pattern of multiple intellectual property violations",
            "example": "Multiple copyright or trademark infringement reports against the same account",
            "reason": "Policy applies to users who repeatedly violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "User repeatedly posts content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies",
          "Pattern of infringing behavior across multiple posts"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals and may file DMCA counter-notifications. Appeals can be submitted following instructions provided in removal notifications. Users can also contact rights owners directly to resolve issues.",
      "steps": [
        "Receive notification from Meta with details about the removed content and rights owner information",
        "Follow appeal instructions provided in the removal notification message",
        "For DMCA cases, file a DMCA counter-notification if eligible",
        "Alternatively, contact the rights owner directly using provided contact information to resolve the issue",
        "Group admins are notified of removals but only the original poster can submit appeals"
      ]
    }
  },
  {
    "id": "facebook-new-1758631202434-2",
    "reference": "META-APPEALS",
    "title": "Meta Appeals Process - Transparency Center",
    "summary": "Comprehensive information about Meta's content appeals process, including eligibility, procedures, and Oversight Board appeals.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T12:40:02.434Z",
    "policies": [
      {
        "id": "meta-appeals-policy-violations",
        "reference": "Appealed Content Process",
        "summary": "Provides appeals process for policy violations on Facebook and Instagram, allowing users to request review of content removal decisions",
        "quote": "For policy violations on Facebook and Instagram, we measure the number of pieces of content (such as posts, photos, videos or comments) that people appeal after we take action on it for going against our policies. Where a decision is eligible for appeal, people are given the option to ask us to take another look after receiving a notification that their content has been removed or covered with a warning.",
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
            "example": "Selecting the option to disagree with content removal notification",
            "reason": "Required to initiate the appeals process for policy violation decisions"
          }
        ],
        "removalCriteria": [
          "Content goes against Meta's Community Standards policies",
          "Content has been reviewed and determined to violate platform policies"
        ]
      },
      {
        "id": "meta-appeals-safety-exclusions",
        "reference": "What Can Be Appealed",
        "summary": "Excludes appeals for violations with extreme safety concerns, including child exploitation imagery",
        "quote": "Today, we offer appeals for the vast majority of violation types on Facebook and Instagram. We don't offer appeals for violations with extreme safety concerns, such as child exploitation imagery.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves extreme safety concerns",
          "Content constitutes child exploitation imagery"
        ]
      },
      {
        "id": "meta-appeals-reporter-appeals",
        "reference": "What Can Be Appealed",
        "summary": "Provides appeals process for content that was reported but not acted upon, in addition to content that was removed",
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
            "description": "User must have reported content that Meta did not take action on",
            "example": "Previously submitted report for policy-violating content that remained on platform",
            "reason": "Allows reporters to appeal when they believe Meta incorrectly decided not to remove reported content"
          }
        ],
        "removalCriteria": [
          "Content was reported but Meta did not initially take action",
          "Reporter believes content violates Community Standards despite no initial action"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides a multi-stage appeals process where users can disagree with content removal decisions. Content is reviewed again by another reviewer, and if the initial decision is disputed, a third reviewer makes the final determination.",
      "steps": [
        "User receives notification that their content has been removed or covered with a warning",
        "User is given option to accept the decision or disagree and request another review",
        "If user chooses to disagree, content is resubmitted for another review",
        "Content remains not visible to other people while under review",
        "If reviewer accepts original decision, content remains off platform",
        "If reviewer disagrees with initial review, content goes to another reviewer for final decision",
        "Final reviewer's decision determines whether content should be on platform or not"
      ]
    }
  }
],
};
