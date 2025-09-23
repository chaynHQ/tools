import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across all Meta platforms (Facebook, Instagram, Messenger, Threads).",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
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
    "summary": "Legal terms governing the use of Facebook and other Meta products, including content ownership, intellectual property rights, and updated language around data usage and platform misuse.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
    "policies": [
      {
        "id": "fb-intellectual-property-policy",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that infringes or violates someone else's intellectual property rights, including copyright and trademark violations, unless an exception applies under applicable law.",
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
            "description": "Proof of intellectual property ownership",
            "example": "Copyright registration or evidence of original creation",
            "reason": "To establish legal rights to the content"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to posts containing the unauthorized content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights",
          "Content violates copyright or trademark protections",
          "No applicable exception or limitation under law exists"
        ]
      },
      {
        "id": "fb-unauthorized-content-policy",
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
            "description": "Proof of ownership or rights to the content",
            "example": "Evidence that you created or own the content being shared without permission",
            "reason": "To establish that the person sharing lacks necessary rights"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "example": "Direct links to posts containing content shared without permission",
            "reason": "To identify the specific content shared without authorization"
          }
        ],
        "removalCriteria": [
          "Content is shared by someone who does not own it",
          "Content is shared by someone who lacks necessary rights to share it"
        ]
      },
      {
        "id": "fb-account-security-policy",
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
            "description": "Evidence of unauthorized account access",
            "example": "Login records, suspicious activity notifications, or content posted without authorization",
            "reason": "To demonstrate that account security was compromised"
          }
        ],
        "removalCriteria": [
          "Account password was shared without authorization",
          "Account access was given to unauthorized persons",
          "Account was transferred without Meta's permission"
        ]
      },
      {
        "id": "fb-content-deletion-process",
        "reference": "FB-TOS-3.3.3",
        "summary": "Provides users the right to delete individual content and accounts, with content removal beginning within 30 days and completing within 90 days under normal circumstances.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you chose to delete the content sooner.",
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
            "description": "Content deletion completed within 90 days after deletion process begins"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Account ownership verification",
            "example": "Access to the account or proof of identity",
            "reason": "To confirm authority to request content deletion"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own content",
          "User deletes their account"
        ]
      },
      {
        "id": "fb-community-standards-violations",
        "reference": "FB-TOS-3.2",
        "summary": "Prohibits content that violates Community Standards and provides for content removal and account restrictions for violations.",
        "quote": "You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products. We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that violates these provisions.",
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
            "example": "Screenshots or URLs showing content that violates specific Community Standards policies",
            "reason": "To demonstrate that content violates Meta's community guidelines"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Content violates other applicable Meta terms and policies"
        ]
      },
      {
        "id": "fb-reporting-mechanism",
        "reference": "FB-TOS-3.2",
        "summary": "Encourages users to report content or conduct that violates their rights, including intellectual property rights, or Meta's terms and policies.",
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
            "description": "Description of rights violation",
            "example": "Explanation of how the content violates your rights or Meta's policies",
            "reason": "To help Meta understand the nature of the violation"
          },
          {
            "description": "URL or location of violating content",
            "example": "Direct link to the post, profile, or content in question",
            "reason": "To identify the specific content that needs review"
          }
        ],
        "removalCriteria": [
          "Content violates user's rights",
          "Content violates Meta's terms and policies"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions, except in cases of serious or repeated violations, legal liability concerns, or technical/legal restrictions.",
      "steps": [
        "If content is removed for Community Standards violations, Meta will notify you and explain review options",
        "Review options are available unless there are serious/repeated violations, legal liability concerns, or technical limitations",
        "Users can request another review through the notification provided after content removal"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms, with enhanced focus on user consent and data transparency.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
    "policies": [
      {
        "id": "meta-safety-security-integrity",
        "reference": "META-PP-SAFETY",
        "summary": "Prohibits harmful or unlawful behavior and requires content removal to protect users from harm and maintain platform integrity",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Content reported to Meta for review",
            "example": "URL or identification of the harmful content",
            "reason": "Required for Meta to review and potentially remove content that violates policies"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content that threatens the life, physical or mental health, well-being or integrity of users",
          "Spam or other security threats"
        ]
      },
      {
        "id": "meta-legal-requests-compliance",
        "reference": "META-PP-LEGAL",
        "summary": "Requires access, preservation, use and sharing of user information in response to legal requests and to comply with applicable law and prevent harm",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Valid legal request such as search warrant, court order, production order or subpoena",
            "example": "Court-issued subpoena requesting specific user information",
            "reason": "Required by law for Meta to comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests from civil litigants, law enforcement or government authorities",
          "Content that must be removed to comply with applicable law",
          "Content that threatens safety, security and integrity of Meta Products, users, employees, property and the public"
        ]
      },
      {
        "id": "meta-information-preservation",
        "reference": "META-PP-PRESERVATION",
        "summary": "Allows preservation of user information for extended periods when necessary for legal compliance, safety, or legitimate business purposes",
        "quote": "We may access or preserve your information for an extended amount of time. In some instances and for specific reasons, we'll keep information for an extended period of time. If we need it for other legitimate purposes, such as to prevent harm; investigate possible violations of our terms or policies; promote safety, security and integrity; or protect ourselves, including our rights, property or products.",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Legitimate purpose requiring extended information preservation",
            "example": "Evidence of policy violations or safety threats requiring investigation",
            "reason": "Necessary to prevent harm, investigate violations, or protect Meta's rights and property"
          }
        ],
        "removalCriteria": [
          "Information may be preserved rather than removed when needed to prevent harm",
          "Information may be preserved to investigate possible violations of terms or policies",
          "Information may be preserved to promote safety, security and integrity",
          "Information may be preserved to protect Meta's rights, property or products"
        ]
      },
      {
        "id": "meta-account-deletion",
        "reference": "META-PP-DELETION",
        "summary": "Provides users the ability to delete their information or account through available tools and settings",
        "quote": "You can learn more about how privacy works on Facebook and on Instagram, and in the Facebook Help Center. Delete your information or account. You can port your information, download your information, delete your information or account.",
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
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "User account verification for deletion request",
            "example": "Account login credentials or identity verification",
            "reason": "Required to verify account ownership before allowing deletion of user information"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their own information or account",
          "User utilizes available privacy tools and settings to remove content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail regarding privacy policy questions, complaints or requests regarding their information",
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
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
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
        "summary": "Provides a process to report abusive content or spam on Facebook using the Report link near the content.",
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
            "description": "Access to the content via Report link",
            "reason": "To identify and review the specific content being reported"
          }
        ],
        "removalCriteria": [
          "Content is identified as abusive",
          "Content is identified as spam"
        ]
      },
      {
        "id": "fb-blocked-user-reporting-policy",
        "reference": "FB-HC-BLOCKED",
        "summary": "Provides alternative reporting options for users who cannot access content they want to report due to being blocked or not having an account.",
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
            "description": "Description of the content that cannot be accessed",
            "reason": "To help Facebook locate and review the reported content"
          },
          {
            "description": "Information about why the content cannot be accessed (blocked, no account)",
            "reason": "To determine the appropriate reporting pathway"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook's policies",
          "Content is reported through alternative channels when direct reporting is not possible"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758635930183-0",
    "reference": "META-IP",
    "title": "Meta Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures across Meta platforms.",
    "url": "https://www.meta.com/help/policies/3234337743488413/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
    "policies": [
      {
        "id": "meta-ip-copyright-prohibition",
        "reference": "META-IP-COPYRIGHT",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as books, music, film, and art.",
        "quote": "Meta does not allow posting content that violates someone else's intellectual property rights, including copyright and trademark.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Copyright report through designated platform forms",
            "example": "Copyright Report Form for Facebook, Instagram, WhatsApp, Quest, or Meta AI",
            "reason": "Required to initiate copyright infringement review process"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content infringes original works of authorship without permission"
        ]
      },
      {
        "id": "meta-ip-trademark-prohibition",
        "reference": "META-IP-TRADEMARK",
        "summary": "Prohibits content that infringes trademark rights, including unauthorized use of words, slogans, symbols or designs that distinguish products or services.",
        "quote": "Meta does not allow posting content that violates someone else's intellectual property rights, including copyright and trademark.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Trademark report through designated platform forms",
            "example": "Trademark Report Form for Facebook, Instagram, WhatsApp, Quest, or Meta AI",
            "reason": "Required to initiate trademark infringement review process"
          }
        ],
        "removalCriteria": [
          "Content infringes trademark rights",
          "Content causes confusion about product or service affiliation"
        ]
      },
      {
        "id": "meta-ip-repeat-infringer-policy",
        "reference": "META-IP-REPEAT",
        "summary": "Restricts accounts that repeatedly post content infringing intellectual property rights, including account disabling and content posting limitations.",
        "quote": "Repeatedly posting content that infringes someone else's intellectual property rights can result in additional restrictions. Your account or profile may be disabled, or you may face limitations on your ability to post content or access certain features and functionality.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Pattern of repeated intellectual property violations",
            "example": "Multiple copyright or trademark infringement reports against the same account",
            "reason": "To identify accounts that systematically violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Pattern of intellectual property violations by the same account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users receive notifications when content is removed due to intellectual property reports, including contact information of the rights owner. Users can contact the rights owner directly or submit an appeal if available, with instructions provided in the notification.",
      "steps": [
        "Receive notification from Meta about content removal",
        "Review notification details including rights owner contact information",
        "Contact the rights owner directly to resolve the issue",
        "Alternatively, submit an appeal if the option is available",
        "Follow instructions provided in the removal notification"
      ]
    }
  },
  {
    "id": "facebook-new-1758635930183-1",
    "reference": "META-NCII",
    "title": "Adult Nudity and Sexual Activity Policy",
    "summary": "Detailed policy covering non-consensual intimate imagery (NCII), adult nudity, and sexual content restrictions.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
    "policies": [
      {
        "id": "meta-adult-nudity-removal",
        "reference": "META-NCII-001",
        "summary": "Prohibits photorealistic and digital imagery of adult nudity including visible genitalia, anuses, buttocks, and female nipples except in specific contexts like breastfeeding or protest.",
        "quote": "We do not allow the following content for all users: Adult Nudity - Photorealistic/digital imagery of adult nudity, if it depicts: Visible genitalia (including when obscured by pubic hair or digital overlays), Visible anuses and/or close-ups of visible buttocks, Visible female nipples, except in a breastfeeding, or act of protest context",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying the specific content that violates the policy",
            "example": "URL or location of the content showing adult nudity",
            "reason": "To identify and review the specific violating content for removal"
          }
        ],
        "removalCriteria": [
          "Content depicts visible genitalia including when obscured by pubic hair or digital overlays",
          "Content shows visible anuses and/or close-ups of visible buttocks",
          "Content displays visible female nipples except in breastfeeding or protest contexts"
        ]
      },
      {
        "id": "meta-voyeuristic-content",
        "reference": "META-NCII-002",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that the video was recorded without the subject's awareness",
            "example": "Context showing the person was unaware they were being filmed",
            "reason": "To establish that the content was captured without consent"
          }
        ],
        "removalCriteria": [
          "Video focuses on crotch, female breasts, or buttocks",
          "Content was recorded without the awareness of the person depicted"
        ]
      },
      {
        "id": "meta-sexual-activity-explicit",
        "reference": "META-NCII-003",
        "summary": "Prohibits photorealistic and digital imagery of explicit sexual activity including sexual intercourse, oral sex, and explicit stimulation when genitals or contact is visible.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying the specific sexual content",
            "example": "URL or location of content showing explicit sexual activity",
            "reason": "To identify and review the violating sexual content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows explicit sexual intercourse or oral sex with visible genitals or contact",
          "Content depicts explicit stimulation of genitals or anus with direct visibility",
          "Content shows genitals placed upon or inserted into sex toys with visibility"
        ]
      },
      {
        "id": "meta-sexual-activity-implicit",
        "reference": "META-NCII-004",
        "summary": "Prohibits photorealistic and digital imagery of implicit sexual activity including sexual acts where contact or genitals are not directly visible and impending sexual activity.",
        "quote": "Implicit sexual activity or stimulation: Implicit sexual intercourse or oral sex, as indicated by a person's mouth or genitals entering or in contact with another person's genitals or anus, when the genitals or anus and/or the entry or contact is not directly visible; Implicit stimulation of a person's genitals or anus, as indicated by stimulation, or the placement of sex toys above or insertion of sex toys into the person's genitals or anus, or genitals placed upon or inserted into a sex toy, when the genitals or anus, stimulation, placement, and/or insertion is not directly visible; Impending sexual activity, as indicated by positions which suggest contact is about to be initiated between a person's hand, mouth or genitals with another person's genitals or anus",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying the implicit sexual content",
            "example": "URL or location of content showing implicit sexual activity",
            "reason": "To identify and review the violating content for removal"
          }
        ],
        "removalCriteria": [
          "Content shows implicit sexual intercourse or oral sex without direct visibility",
          "Content depicts implicit stimulation without direct visibility of contact",
          "Content shows impending sexual activity with suggestive positioning"
        ]
      },
      {
        "id": "meta-other-sexual-activity",
        "reference": "META-NCII-005",
        "summary": "Prohibits other sexual activity including erections, sexual by-products, sex toys in mouth, nipple stimulation, breast squeezing, and fetish content involving dangerous or degrading acts.",
        "quote": "Other sexual activity or stimulation: Erections, Presence of by-products of sexual activity, Sex toys placed upon or inserted into mouth, Stimulation of visible human nipples, Squeezing female breasts, defined as a grabbing motion with curved fingers that shows both marks and clear shape change of the breasts. We allow squeezing in breastfeeding contexts. Photorealistic/ digital imagery or real world art depicting fetish that involves the following: Acts that are likely to lead to the death of a person or animal, Dismemberment, Cannibalism, Feces, urine, spit, snot, menstruation or vomit, Bestiality, Incest, BDSM (bondage and discipline, domination and submission, sadism and masochism), only when sexual indicators are also present",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying the specific sexual content type",
            "example": "URL or location of content showing prohibited sexual activity",
            "reason": "To identify and review the specific type of violating sexual content"
          }
        ],
        "removalCriteria": [
          "Content shows erections or by-products of sexual activity",
          "Content depicts sex toys placed in mouth or nipple stimulation",
          "Content shows breast squeezing outside of breastfeeding context",
          "Content depicts dangerous fetish acts, dismemberment, or degrading sexual content"
        ]
      },
      {
        "id": "meta-extended-sexual-audio",
        "reference": "META-NCII-006",
        "summary": "Prohibits extended audio of sexual activity.",
        "quote": "Extended audio of sexual activity",
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
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying the audio content containing sexual activity",
            "example": "URL or location of audio content with extended sexual activity",
            "reason": "To identify and review the violating audio content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains extended audio of sexual activity"
        ]
      },
      {
        "id": "meta-age-restricted-nudity-art",
        "reference": "META-NCII-007",
        "summary": "Restricts access to users 18 and older for real world art depicting visible genitalia, anuses, buttocks or female nipples where nudity is the focus and not in medical context, with sensitive content labeling.",
        "quote": "For the following content, we limit the ability to view the content to users, ages 18 and older and include a label so that people are aware the content may be sensitive: Real world art of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair only), visible anuses, close-ups of visible buttocks or visible female nipples, where the nudity is the focus of the image and not in a medical or health context",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying real world art with nudity as primary focus",
            "example": "URL showing artistic nudity content that should be age-restricted",
            "reason": "To apply appropriate age restrictions and content labeling"
          }
        ],
        "removalCriteria": [
          "Content is real world art depicting visible genitalia, anuses, buttocks or nipples",
          "Nudity is the primary focus of the artistic image",
          "Content is not in a medical or health context"
        ]
      },
      {
        "id": "meta-age-restricted-near-nudity",
        "reference": "META-NCII-008",
        "summary": "Restricts access to users 18 and older for photorealistic and digital imagery depicting near nudity covered only by digital overlay or opaque objects, and content where intimate body parts are the focus.",
        "quote": "For the following content, we limit the ability to view the content to adults, ages 18 and older: Photorealistic/digital imagery depicting near nudity such as nudity covered only by digital overlay or an opaque object and certain instances of nudity obscured by see-through clothing; Photorealistic/digital imagery of persons where crotch, buttock or female breast(s) are the focus of the image",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report identifying near nudity or intimate body part focused content",
            "example": "URL of content showing near nudity or intimate body parts as focus",
            "reason": "To apply appropriate age restrictions to sexually suggestive content"
          }
        ],
        "removalCriteria": [
          "Content depicts near nudity covered only by digital overlay or opaque objects",
          "Content shows nudity obscured by see-through clothing",
          "Content focuses primarily on crotch, buttocks, or female breasts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content decisions through Facebook's Support Inbox system with multiple review opportunities including potential Oversight Board review.",
      "steps": [
        "Report content through universal reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "Request another review if disagreeing with initial decision",
        "Provide additional context or information during appeal",
        "Receive final response after re-review in Support Inbox",
        "Option to appeal to Oversight Board for eligible cases"
      ]
    }
  },
  {
    "id": "facebook-new-1758635930183-2",
    "reference": "META-APPEALS",
    "title": "Meta Content Appeals Process",
    "summary": "Official documentation of the appeals process for content removal decisions and enforcement actions.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T13:58:50.183Z",
    "policies": [
      {
        "id": "meta-appeals-content-review",
        "reference": "META-APPEALS-PROCESS",
        "summary": "Provides an appeals process for content that has been removed or covered with warnings for policy violations, allowing users to request another review of enforcement decisions.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Appeal submission through notification system",
            "example": "User receives notification of content removal and selects option to disagree and request review",
            "reason": "To initiate the appeals review process for potentially incorrectly removed content"
          }
        ],
        "removalCriteria": [
          "Content must have been previously actioned for going against Community Standards",
          "Decision must be eligible for appeal (excludes extreme safety concerns like child exploitation imagery)"
        ]
      },
      {
        "id": "meta-appeals-exclusions",
        "reference": "META-APPEALS-EXCLUSIONS",
        "summary": "Excludes certain violation types from the appeals process, specifically content with extreme safety concerns such as child exploitation imagery.",
        "quote": "We don't offer appeals for violations with extreme safety concerns, such as child exploitation imagery.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves extreme safety concerns",
          "Content constitutes child exploitation imagery"
        ]
      },
      {
        "id": "meta-appeals-reporter-appeals",
        "reference": "META-APPEALS-REPORTER",
        "summary": "Provides appeals process for users who reported content that was not acted upon, allowing reporters to request review of non-action decisions.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Previous report submission that resulted in no action",
            "example": "User previously reported content that was determined not to violate policies",
            "reason": "To allow reporters to challenge decisions where reported content was not removed"
          }
        ],
        "removalCriteria": [
          "Content was previously reported but no action was taken",
          "Reporter disagrees with the decision not to remove content"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides a multi-stage appeals process where users can request review of content enforcement decisions. Appeals go through human review and technology processing, with a secondary review process for disputed decisions.",
      "steps": [
        "Receive notification that content has been removed or covered with warning",
        "Select option to disagree with decision and request another review",
        "Content is resubmitted for review (content remains hidden during review)",
        "If initial appeal is rejected, content goes to another reviewer for final decision",
        "Final reviewer determines whether content should remain on or be restored to the platform"
      ]
    }
  }
],
};
