import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across all Meta platforms (Facebook, Instagram, Messenger, and Threads) as of November 12, 2024.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
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
    "summary": "Updated legal terms effective January 1, 2025, governing the use of Facebook, Messenger, and other Meta products with clarified language around platform misuse and data usage.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
    "policies": [
      {
        "id": "fb-tos-unauthorized-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share, including unauthorized use of others' photos, videos, and personal content.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share.",
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
            "description": "Proof that you own or have rights to the content",
            "reason": "To establish ownership or authorization to share the content"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To identify the specific content that was shared without permission"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership or necessary rights",
          "User cannot demonstrate authorization to share the content"
        ]
      },
      {
        "id": "fb-tos-ip-infringement",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights, including copyright infringement of photos and videos.",
        "quote": "You may not use our Products to do or share anything: That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "reason": "To establish rights to the copyrighted content"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes intellectual property rights"
          },
          {
            "description": "Evidence that no exception or limitation applies under applicable law",
            "reason": "To confirm the infringement is not protected by fair use or other legal exceptions"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or trademark rights",
          "No applicable legal exception or limitation exists",
          "Content is distributed without permission from rights holder"
        ]
      },
      {
        "id": "fb-tos-community-standards",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Community Standards, which include policies against harassment, privacy violations, and non-consensual sharing.",
        "quote": "You may not use our Products to do or share anything: That violates these Terms, the Community Standards, or other terms and policies that apply to your use of our Products.",
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
            "description": "Identification of specific Community Standards violation",
            "reason": "To determine which policy has been violated"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate and review the content that violates Community Standards"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook Community Standards",
          "Content violates other applicable terms and policies"
        ]
      },
      {
        "id": "fb-tos-unlawful-content",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits unlawful, misleading, discriminatory or fraudulent content, including content that violates laws against non-consensual sharing and harassment.",
        "quote": "You may not use our Products to do or share anything: That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way).",
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
            "description": "Evidence that the content violates applicable laws",
            "reason": "To establish the unlawful nature of the content"
          },
          {
            "description": "URL(s) of the unlawful content",
            "reason": "To identify the specific content that violates the law"
          }
        ],
        "removalCriteria": [
          "Content is unlawful under applicable law",
          "Content is misleading, discriminatory, or fraudulent",
          "Content assists others in unlawful activity"
        ]
      },
      {
        "id": "fb-tos-account-security",
        "reference": "FB-TOS-3.2.4",
        "summary": "Prohibits misappropriating access tokens and accessing accounts without permission, addressing unauthorized account access and content sharing.",
        "quote": "You may not proxy, request, or collect Product usernames or passwords, or misappropriate access tokens.",
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
            "description": "Evidence of unauthorized access to account credentials or tokens",
            "reason": "To demonstrate that account security was compromised"
          },
          {
            "description": "Documentation of unauthorized account activity",
            "reason": "To show that the account was used without permission"
          }
        ],
        "removalCriteria": [
          "Account credentials or access tokens were obtained without authorization",
          "Account was accessed or used without the owner's permission"
        ]
      },
      {
        "id": "fb-tos-unauthorized-data-access",
        "reference": "FB-TOS-3.2.3",
        "summary": "Prohibits accessing or collecting data without permission, including personal content and private information obtained through unauthorized means.",
        "quote": "You may not access or collect data from our Products using automated means (without our prior permission) or attempt to access data you do not have permission to access, regardless of whether such automated access or collection is undertaken while logged-in to a Facebook account.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized data access or collection",
            "reason": "To demonstrate that data was accessed without permission"
          },
          {
            "description": "Documentation showing lack of permission to access the data",
            "reason": "To establish that the access was unauthorized"
          }
        ],
        "removalCriteria": [
          "Data was accessed without permission",
          "Automated means were used to collect data without authorization",
          "User attempted to access data they do not have permission to access"
        ]
      },
      {
        "id": "fb-tos-content-removal-authority",
        "reference": "FB-TOS-3.2",
        "summary": "Provides Meta with authority to remove or restrict access to content that violates Terms of Service, including privacy violations and unauthorized sharing.",
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
            "description": "Evidence that content violates Terms of Service provisions",
            "reason": "To justify content removal or account action"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify specific content for removal or restriction"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service provisions",
          "Content removal is necessary to protect users or platform integrity"
        ]
      },
      {
        "id": "fb-tos-ip-deletion-timeframe",
        "reference": "FB-TOS-3.3.3",
        "summary": "Establishes content deletion timeframes of up to 90 days for removal, with additional 90 days for backup systems, applicable to unauthorized content removal.",
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
            "description": "Up to 90 days to delete content, with additional 90 days for backup systems"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the content removal process"
          },
          {
            "description": "URL(s) of content to be deleted",
            "reason": "To identify specific content for deletion"
          }
        ],
        "removalCriteria": [
          "Content deletion request has been submitted",
          "Content is no longer visible to users during deletion process",
          "Complete removal from all systems may take up to 180 days total"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review of content removal decisions unless doing so would expose Meta or others to legal liability, harm the community, compromise system integrity, face technical limitations, or be prohibited for legal reasons.",
      "steps": [
        "Submit a request for review of the content removal decision",
        "Meta will evaluate the request unless exceptions apply (legal liability, community harm, system integrity, technical limitations, or legal prohibitions)",
        "Users will be notified of the review outcome and any available options"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires content removal when reported, including protection against harassment, threats, and privacy violations.",
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
            "description": "Report of harmful or unlawful content",
            "example": "Content that violates terms or policies",
            "reason": "To enable Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content that threatens the life, physical or mental health, well-being or integrity of users"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Law Compliance",
        "summary": "Requires disclosure of user information and content in response to legal requests including search warrants, court orders, and subpoenas from law enforcement and civil litigants.",
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
            "reason": "Legal compliance requirement under applicable law"
          }
        ],
        "removalCriteria": [
          "Valid legal request from law enforcement or government authorities",
          "Court orders requiring information disclosure",
          "Subpoenas from civil litigants",
          "Requirements under applicable law"
        ]
      },
      {
        "id": "meta-pp-account-security",
        "reference": "Section 2 - Account Verification and Security",
        "summary": "Requires verification of accounts and activity to detect and prevent unauthorized access, compromised accounts, and security threats.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property.",
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
            "description": "Evidence of suspicious account activity or security threats",
            "example": "Unusual login patterns or unauthorized access attempts",
            "reason": "To verify legitimate account ownership and prevent security breaches"
          }
        ],
        "removalCriteria": [
          "Suspicious or unauthorized account activity",
          "Evidence of compromised accounts",
          "Security threats to users or the platform",
          "Spam or other malicious activities"
        ]
      },
      {
        "id": "meta-pp-information-preservation",
        "reference": "Section 8 - Information Preservation",
        "summary": "Preserves user information for extended periods when necessary to prevent harm, investigate policy violations, promote safety and security, or protect legal rights and property.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of harm, policy violations, or security threats",
            "example": "Content or activity that violates terms of service",
            "reason": "To investigate violations and protect user safety and platform integrity"
          }
        ],
        "removalCriteria": [
          "Evidence of harm to users or others",
          "Possible violations of terms or policies",
          "Threats to safety, security and integrity",
          "Protection of Meta's rights, property or products"
        ]
      },
      {
        "id": "meta-pp-privacy-controls",
        "reference": "Section 6 - Privacy Management and Deletion",
        "summary": "Provides users with tools to view, manage, download and delete their information, including the ability to delete accounts and specific content.",
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
            "description": "User account verification for privacy rights requests",
            "example": "Account login credentials or verification through platform settings",
            "reason": "To verify account ownership before processing privacy requests"
          }
        ],
        "removalCriteria": [
          "User request to delete personal information",
          "User request to delete account",
          "Exercise of privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail for privacy-related questions, complaints or requests regarding their information",
      "steps": [
        "Contact Meta online through the help center support system",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Users may also contact their local Data Protection Authority (DPA) depending on jurisdiction"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
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
        "id": "fb-general-reporting-policy",
        "reference": "FB-HC-REPORTING",
        "summary": "Provides a comprehensive reporting system for abusive content and spam using Report links near content.",
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
            "description": "Access to the content or URL of the content to be reported",
            "reason": "To identify and locate the specific content that violates policies"
          },
          {
            "description": "Use of the Report link feature near the content",
            "reason": "To initiate the platform's review process for policy violations"
          }
        ],
        "removalCriteria": [
          "Content qualifies as abusive under Facebook's policies",
          "Content is identified as spam",
          "Content violates community standards"
        ]
      },
      {
        "id": "fb-blocked-user-reporting-policy",
        "reference": "FB-HC-BLOCKED-REPORTING",
        "summary": "Provides alternative reporting mechanisms for users who cannot access content directly due to being blocked or lacking an account.",
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
            "description": "URL or description of the content location",
            "reason": "To locate content that cannot be directly accessed by the reporter"
          },
          {
            "description": "Explanation of why direct reporting is not possible",
            "example": "Being blocked by the user or not having an account",
            "reason": "To verify the need for alternative reporting methods"
          }
        ],
        "removalCriteria": [
          "Content violates Facebook policies despite reporter's inability to access it directly",
          "Alternative verification methods confirm policy violations"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758636710747-0",
    "reference": "META-AI-TOS",
    "title": "Meta AI Terms of Service",
    "summary": "Specific terms governing the use of Meta's AI products and features, including acceptable uses and content policies.",
    "url": "https://www.facebook.com/legal/ai-terms",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
    "policies": [
      {
        "id": "meta-ai-tos-adult-content",
        "reference": "Section 1.B",
        "summary": "Prohibits generating, promoting, disseminating, or facilitating adult content including erotic chat, pornography, and content meant to arouse sexual excitement",
        "quote": "Generate, promote, disseminate, or otherwise use or facilitate adult content, such as erotic chat, pornography, and content meant to arouse sexual excitement",
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
            "description": "Evidence that Meta AI was used to generate, promote, or disseminate adult content",
            "example": "Screenshots of AI-generated adult content or conversations",
            "reason": "To verify violation of acceptable use policies regarding adult content"
          }
        ],
        "removalCriteria": [
          "Content constitutes adult content such as erotic chat, pornography, or content meant to arouse sexual excitement",
          "AI was used to generate, promote, disseminate, or facilitate such content"
        ]
      },
      {
        "id": "meta-ai-tos-harmful-content",
        "reference": "Section 1.B",
        "summary": "Prohibits generating content that may harm individuals, including encouraging self-harm, discrimination, bullying, humiliation, and other emotional harms",
        "quote": "Generate, promote, disseminate, or otherwise use or facilitate content that may harm other individuals, including to encourage self-harm, discrimination, bullying, humiliation, and/or other emotional harms",
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
            "description": "Evidence that Meta AI was used to generate harmful content targeting individuals",
            "example": "Screenshots of AI-generated content encouraging self-harm, discrimination, bullying, or humiliation",
            "reason": "To demonstrate violation of policies against harmful content generation"
          }
        ],
        "removalCriteria": [
          "Content may harm other individuals",
          "Content encourages self-harm, discrimination, bullying, humiliation, or other emotional harms",
          "AI was used to generate, promote, disseminate, or facilitate such harmful content"
        ]
      },
      {
        "id": "meta-ai-tos-deceptive-content",
        "reference": "Section 1.B",
        "summary": "Prohibits using AI to deceive or mislead others, including activity related to scams, phishing, malware, and furtherance of misinformation or disinformation",
        "quote": "Deceive or mislead others, including but not limited to activity related to plagiarism, scams, phishing or malware, and furtherance of misinformation or disinformation",
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
            "description": "Evidence that Meta AI was used to create deceptive or misleading content",
            "example": "Screenshots of AI-generated misinformation, phishing attempts, or impersonation content",
            "reason": "To verify violation of policies against deceptive use of AI technology"
          }
        ],
        "removalCriteria": [
          "Content is designed to deceive or mislead others",
          "Activity relates to plagiarism, scams, phishing, malware, misinformation, or disinformation",
          "AI was used to facilitate deceptive practices"
        ]
      },
      {
        "id": "meta-ai-tos-rights-violation",
        "reference": "Section 1.B",
        "summary": "Prohibits generating content that may violate or infringe upon the rights of others, including intellectual property rights and privacy rights",
        "quote": "Generate, promote, disseminate, or otherwise use or facilitate content that may violate or infringe upon the rights of others (including but not limited to intellectual property rights and privacy rights)",
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
            "description": "Evidence that Meta AI was used to generate content violating intellectual property or privacy rights",
            "example": "Screenshots of AI-generated content using copyrighted material or private information without permission",
            "reason": "To demonstrate violation of rights protection policies"
          }
        ],
        "removalCriteria": [
          "Content violates or infringes upon intellectual property rights",
          "Content violates privacy rights of individuals",
          "AI was used to generate, promote, disseminate, or facilitate rights-violating content"
        ]
      },
      {
        "id": "meta-ai-tos-prompt-restrictions",
        "reference": "Section 2.A",
        "summary": "Prohibits providing prompts that infringe or violate someone else's rights, including intellectual property rights",
        "quote": "You may not provide prompts or use AIs in any way that infringes or violates someone else's rights, including intellectual property rights",
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
            "description": "Evidence that prompts were used to infringe on someone's rights",
            "example": "Screenshots of prompts requesting generation of content using someone's likeness or copyrighted material without permission",
            "reason": "To verify that AI prompts violated rights protection policies"
          }
        ],
        "removalCriteria": [
          "Prompts infringe or violate someone else's rights",
          "Prompts violate intellectual property rights",
          "Use of AI infringes on protected rights of individuals"
        ]
      },
      {
        "id": "meta-ai-tos-content-removal",
        "reference": "Section 3.A",
        "summary": "Authorizes Meta to remove unsafe, discriminatory, or other content that violates Terms, Community Standards, or applicable policies",
        "quote": "To remove unsafe, discriminatory, or other Content that violates these Terms, Meta's Community Standards, or any other applicable policies and terms",
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
            "description": "Evidence that content violates Meta AI Terms, Community Standards, or applicable policies",
            "example": "Screenshots or documentation showing content that is unsafe, discriminatory, or otherwise violates policies",
            "reason": "To enable Meta to assess content for policy violations and take appropriate removal action"
          }
        ],
        "removalCriteria": [
          "Content is unsafe or discriminatory",
          "Content violates Meta AI Terms of Service",
          "Content violates Meta's Community Standards",
          "Content violates other applicable policies and terms"
        ]
      },
      {
        "id": "meta-ai-tos-account-suspension",
        "reference": "Section 3.B",
        "summary": "Authorizes Meta to suspend or permanently disable access to AI services or delete accounts for Terms violations",
        "quote": "If we determine that you have breached these Terms or other applicable terms and policies, we may suspend or permanently disable your access to AIs or other Meta services or features, and we may permanently disable or delete your account including where we are required to do so for legal reasons",
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
            "description": "Evidence of Terms violations or policy breaches",
            "example": "Documentation of repeated violations or serious breaches of acceptable use policies",
            "reason": "To justify account suspension or termination for policy violations"
          }
        ],
        "removalCriteria": [
          "User has breached Meta AI Terms of Service",
          "User has violated other applicable terms and policies",
          "Legal requirements mandate account action",
          "Violations warrant suspension or permanent account action"
        ]
      },
      {
        "id": "meta-ai-tos-image-consent",
        "reference": "Section 4",
        "summary": "Prohibits uploading images containing individuals from Illinois or Texas without being their legally authorized representative and obtaining consent",
        "quote": "You further agree that you will not upload images to Meta AI that you know to contain individuals that reside in Illinois or Texas, unless you are their legally authorized representative and consent on their behalf",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that images were uploaded containing Illinois or Texas residents without proper authorization",
            "example": "Screenshots of uploaded images and evidence of lack of consent or legal authorization",
            "reason": "To verify violation of state-specific consent requirements for image processing"
          }
        ],
        "removalCriteria": [
          "Images contain individuals residing in Illinois or Texas",
          "Uploader is not the legally authorized representative of depicted individuals",
          "Proper consent was not obtained on behalf of depicted individuals"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Appeals are handled through the disputes resolution clause in the Meta Terms of Service",
      "steps": [
        "Refer to the disputes resolution clause in the Meta Terms of Service",
        "Follow the dispute resolution process outlined in the main Meta Terms"
      ]
    }
  },
  {
    "id": "facebook-new-1758636710747-1",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, reporting mechanisms, and intellectual property protection across Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
    "policies": [
      {
        "id": "meta-copyright-infringement-prohibition",
        "reference": "Terms of Use and Community Standards",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights, including copyrighted works",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights.",
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
            "description": "Complete copyright claim including identification of copyrighted work",
            "example": "Description of the copyrighted work and location of infringing content",
            "reason": "Required to establish ownership and identify specific infringement"
          },
          {
            "description": "Proof of copyright ownership or authorization to act on behalf of rights holder",
            "example": "Documentation showing you created the work or have rights to it",
            "reason": "Only copyright owners or authorized representatives may file reports"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-copyright-original-content-only",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Requires users to only post content they have created themselves to avoid copyright infringement",
        "quote": "The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
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
            "description": "Evidence that you created the original content",
            "example": "Documentation showing you are the original creator",
            "reason": "To establish copyright ownership and right to request removal"
          }
        ],
        "removalCriteria": [
          "Content was not created by the person posting it",
          "Content was posted without permission from the copyright owner"
        ]
      },
      {
        "id": "meta-copyright-no-permission-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits using someone else's copyrighted work without permission, even with credit or disclaimers",
        "quote": "It's possible to infringe someone else's copyright when you post their content on Meta platforms, or facilitate copyright infringement, even if you: Gave credit to the copyright owner, Included a disclaimer that you didn't intend to infringe copyright, Didn't intend to profit from it, Modified the work or added your own original material to it, Found the content available on the internet, Saw that others posted the same content as well",
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
            "description": "Identification of the copyrighted work being infringed",
            "example": "URL or description of your original content being used without permission",
            "reason": "To establish what specific work is being infringed"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission",
          "Content includes copyrighted material even with credit or disclaimers",
          "Content contains modified copyrighted work without authorization"
        ]
      },
      {
        "id": "meta-copyright-repeat-infringer-policy",
        "reference": "Repeat infringer policy",
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
            "description": "Documentation of repeated copyright infringement",
            "example": "Multiple instances of the same user posting copyrighted content without permission",
            "reason": "To establish pattern of repeated infringement for account action"
          }
        ],
        "removalCriteria": [
          "User has repeatedly posted content that infringes intellectual property rights",
          "Multiple copyright violations by the same account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals and may file DMCA counter-notifications. Instructions are provided in removal notifications. Users can also contact rights owners directly to resolve issues.",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow instructions provided in the removal notification to submit an appeal",
        "For DMCA cases, file a DMCA counter-notification following provided instructions",
        "Alternatively, contact the rights owner directly using information provided in the notification"
      ]
    }
  },
  {
    "id": "facebook-new-1758636710747-2",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Policy",
    "summary": "Policy addressing the sharing of intimate images without consent, including proactive detection and removal procedures.",
    "url": "https://transparency.meta.com/policies/community-standards/adult-nudity-sexual-activity/",
    "accessTimestamp": "2025-09-23T14:11:50.747Z",
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
            "description": "Report the specific content that violates the nudity policy",
            "example": "URL or location of the violating image or video",
            "reason": "To identify and review the specific content for policy violations"
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
            "description": "Report the voyeuristic video content",
            "example": "URL or location of the video that was recorded without awareness",
            "reason": "To verify the content was recorded without the subject's knowledge or consent"
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
        "summary": "Prohibits photorealistic and digital imagery of adult sexual activity, including explicit and implicit sexual intercourse, oral sex, stimulation, and other sexual activities.",
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
            "example": "URL or location of the violating sexual imagery",
            "reason": "To identify and review the explicit or implicit sexual content for policy violations"
          }
        ],
        "removalCriteria": [
          "Content depicts explicit sexual intercourse or oral sex with visible genitals or anus",
          "Content shows explicit stimulation of genitals or anus with direct visibility",
          "Content displays implicit sexual activity or stimulation",
          "Content shows impending sexual activity or erections",
          "Content depicts presence of by-products of sexual activity"
        ]
      },
      {
        "id": "meta-ncii-ai-generated",
        "reference": "Policy Rationale",
        "summary": "Prohibits AI-generated and computer-generated images of nudity and sexual activity, including digital imagery regardless of whether it looks photorealistic.",
        "quote": "Under this policy, we remove real photographs and videos of nudity and sexual activity, AI- or computer-generated images of nudity and sexual activity, and digital imagery, regardless of whether it looks 'photorealistic' (as in, it looks like a real person).",
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
            "description": "Report the AI-generated or computer-generated intimate content",
            "example": "URL or location of the synthetic intimate imagery",
            "reason": "To identify and remove AI-generated intimate content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content is AI-generated or computer-generated nudity or sexual activity",
          "Content is digital imagery of nudity or sexual activity regardless of photorealistic appearance"
        ]
      },
      {
        "id": "meta-ncii-age-restricted-nudity",
        "reference": "Adult Nudity - Age Restricted",
        "summary": "Restricts access to users 18 and older for certain nudity content including real world art depicting genitalia, anuses, buttocks or nipples, and nudity shared in contexts of famine, genocide, war crimes, or crimes against humanity.",
        "quote": "Real world art of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair only), visible anuses, close-ups of visible buttocks or visible female nipples, where the nudity is the focus of the image and not in a medical or health context; Photorealistic/ digital imagery of visible genitalia (including genitalia covered by digital overlay or obscurement and genitalia obscured by pubic hair), close-ups of visible buttocks, visible anuses or visible female nipples, when shared in the context of famine, genocide, war crimes, or crimes against humanity",
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
            "description": "Report the age-inappropriate nudity content",
            "example": "URL or location of the nudity content accessible to minors",
            "reason": "To apply age restrictions and protect minors from inappropriate content"
          }
        ],
        "removalCriteria": [
          "Content shows visible genitalia, anuses, buttocks or nipples as the focus outside medical context",
          "Content depicts nudity in contexts of famine, genocide, war crimes, or crimes against humanity",
          "Content is accessible to users under 18 years old"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.facebook.com/help/263149623790594",
      "summary": "Users can appeal content removal decisions through Meta's Support Inbox and request another review if they believe the decision was incorrect.",
      "steps": [
        "After content is removed, users receive a notification explaining the violation",
        "Users can access more detailed information in the Support Inbox",
        "If users disagree with the decision, they can request another review and provide additional context",
        "Meta provides a final response after re-reviewing the content in the Support Inbox"
      ]
    }
  }
],
};
