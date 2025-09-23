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
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
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
    "summary": "Legal terms governing the use of Facebook, Messenger, and other Meta products, including content ownership and intellectual property rights. Updated January 1, 2025.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
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
            "description": "Proof of ownership or necessary rights to the content",
            "reason": "To establish that the user has intellectual property rights in the content"
          },
          {
            "description": "URL(s) of the infringing content on Facebook",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or trademark rights",
          "Content is shared without necessary rights or permissions",
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
            "description": "Evidence of ownership or authorization to share the content",
            "reason": "To verify the user has proper rights to the content being shared"
          },
          {
            "description": "URL(s) of the unauthorized content",
            "reason": "To locate and assess the specific content in question"
          }
        ],
        "removalCriteria": [
          "Content is shared without ownership rights",
          "Content is shared without necessary permissions from the rights holder"
        ]
      },
      {
        "id": "fb-tos-community-standards-violation",
        "reference": "FB-TOS-3.2.1",
        "summary": "Prohibits content that violates Community Standards and other applicable terms and policies.",
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
            "reason": "To categorize and assess the policy violation"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To locate the content that violates Community Standards"
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
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or sharing",
            "reason": "To verify that account security has been compromised"
          },
          {
            "description": "Documentation of unauthorized activities on the account",
            "reason": "To assess the extent of the security breach"
          }
        ],
        "removalCriteria": [
          "Password sharing or unauthorized account access has occurred",
          "Account has been transferred without Meta's permission"
        ]
      },
      {
        "id": "fb-tos-content-deletion-process",
        "reference": "FB-TOS-3.3.3",
        "summary": "Provides process for content deletion with up to 90-day removal timeframe from systems and backups.",
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
            "description": "Up to 90 days to delete content, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Content deletion request",
            "reason": "To initiate the content removal process"
          },
          {
            "description": "Identification of specific content to be deleted",
            "reason": "To ensure the correct content is removed"
          }
        ],
        "removalCriteria": [
          "User requests content deletion",
          "Account deletion process is initiated",
          "Content is sent to trash"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review of content removal decisions unless they seriously or repeatedly violate terms, with some exceptions for legal liability, community safety, technical limitations, or legal restrictions.",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users can request another review of the removal decision",
        "Review may not be available for serious or repeated violations",
        "Review may be restricted due to legal liability, community safety, technical limitations, or legal prohibitions"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms. Effective June 16, 2025.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section: To promote safety, security and integrity",
        "summary": "Requires information processing to protect users from harm, investigate violations, detect harmful behavior, and maintain platform integrity through automated and manual review",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products.",
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
            "description": "Content that violates terms or policies",
            "example": "Reported harmful content, suspicious activity indicators",
            "reason": "To investigate and address violations of platform policies"
          }
        ],
        "removalCriteria": [
          "Content that harasses or harms users",
          "Violations of platform terms or policies",
          "Harmful or unlawful behavior",
          "Threats to user safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-safety-detailed",
        "reference": "Section: Promoting safety, integrity and security",
        "summary": "Processes user information through automated and manual review to verify accounts, find policy violations, investigate suspicious activity, detect harmful behavior, protect user well-being, prevent spam and security threats, and maintain platform integrity",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "User reports of harmful content or policy violations",
            "example": "Content reported through platform reporting mechanisms",
            "reason": "To review and potentially remove content that violates policies"
          },
          {
            "description": "Evidence of suspicious or harmful activity",
            "example": "Account behavior patterns, content metadata, device information",
            "reason": "To investigate and prevent harmful or unlawful behavior"
          }
        ],
        "removalCriteria": [
          "Violations of platform terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens user safety or well-being",
          "Spam or security threats",
          "Content reported by users for policy violations"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section: How do we respond to legal requests, comply with applicable law and prevent harm?",
        "summary": "Accesses, preserves, uses and shares user information in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of Meta Products and users",
        "quote": "We access, preserve, use and share your information: In response to legal requests, like search warrants, court orders, production orders or subpoenas. These requests come from third parties such as civil litigants, law enforcement and other government authorities. Learn more about when we respond to legal requests. In accordance with applicable law To promote the safety, security and integrity of Meta Products, users, employees, property and the public. Learn more.",
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
            "description": "Valid legal requests from authorized parties",
            "example": "Search warrants, court orders, production orders, subpoenas",
            "reason": "To comply with legal obligations and law enforcement requirements"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests",
          "Information required for legal compliance",
          "Content that threatens safety, security or integrity of platform or users"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section: Sharing information with others, including law enforcement",
        "summary": "Shares information with law enforcement and others in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of Meta Companies, Products, users, employees, property and the public",
        "quote": "Sharing information with others, including law enforcement and to respond to legal requests. See the \"How do we respond to legal requests, prevent harm and promote safety and integrity?\" section of the Meta Privacy Policy for more for information on when we share information with law enforcement and others. The categories of information we access, preserve, use and share depend on the specific circumstances. For example, responses to legal requests where not compelled by law will typically include limited information (such as contact details and login information). However, the information we process will depend on the purposes, which could include the following: In response to legal requests from third parties such as civil litigants, law enforcement and other government authorities To comply with applicable law or legitimate legal purposes To promote the safety, security and integrity of Meta Companies, Meta Products, users, employees, property and the public",
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
            "description": "Legal requests from authorized third parties",
            "example": "Requests from civil litigants, law enforcement, government authorities",
            "reason": "To comply with legal obligations and protect safety and security"
          }
        ],
        "removalCriteria": [
          "Information subject to legal requests from authorized parties",
          "Content that threatens safety, security and integrity",
          "Information required for legal compliance purposes"
        ]
      },
      {
        "id": "meta-pp-mandatory-legal-processing",
        "reference": "Section: For processing information when the law requires it",
        "summary": "Processes and discloses user information when legally required, including in response to valid legal requests such as search warrants, with information categories depending on specific legal obligations",
        "quote": "For processing information when the law requires it: Where we are under an obligation to disclose information such as, for example, if we receive a valid legal request for certain information such as a search warrant, we will access, preserve and/or share your information with regulators, law enforcement or others. The way in which the information will be processed depends on the specific circumstances.",
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
            "description": "Valid legal requests requiring disclosure",
            "example": "Search warrants and other legally binding requests",
            "reason": "To comply with mandatory legal obligations"
          }
        ],
        "removalCriteria": [
          "Information subject to mandatory legal disclosure requirements",
          "Content covered by valid legal requests",
          "Information necessary to comply with legal obligations"
        ]
      },
      {
        "id": "meta-pp-user-control",
        "reference": "Section: How can you manage or delete your information and exercise your rights?",
        "summary": "Provides users with tools to view, manage, download and delete their information through platform settings and Help Centers, with additional privacy rights available under applicable laws",
        "quote": "We offer you a variety of tools to view, manage, download and delete your information below. You can also manage your information by visiting the settings of the Products you use. You may also have other privacy rights under applicable laws. To exercise your rights, visit our Help Centers, your settings for Facebook and Instagram and your device-based settings.",
        "contentTypes": [
          "intimate",
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
            "description": "User account access for information management",
            "example": "Login credentials to access account settings",
            "reason": "To verify user identity for information management requests"
          }
        ],
        "removalCriteria": [
          "User-requested information deletion",
          "Account deletion requests",
          "Information management through user settings"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can contact Meta online or by mail for questions about the Privacy Policy, with some decisions reviewed by the Oversight Board",
      "steps": [
        "Contact Meta online through the provided support link",
        "Alternatively, contact by mail at Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "For policy violation decisions, some cases may be reviewed by the Oversight Board",
        "In some countries, users may contact the Data Protection Officer or local Data Protection Authority"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
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
        "summary": "Provides mechanisms to report abusive content or spam using the Report link near content.",
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Access to the content via Report link",
            "reason": "To identify and review the specific abusive content"
          }
        ],
        "removalCriteria": [
          "Content constitutes abusive material",
          "Content is identified as spam"
        ]
      },
      {
        "id": "fb-child-exploitation-policy",
        "reference": "FB-HC-CHILD-ABUSE",
        "summary": "Prohibits images of children being physically abused or sexually exploited and provides reporting mechanisms.",
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
            "description": "Report of the specific content showing child exploitation",
            "reason": "To identify and remove illegal content involving minors"
          }
        ],
        "removalCriteria": [
          "Images show a child being physically abused",
          "Images show a child being sexually exploited"
        ]
      },
      {
        "id": "fb-underage-reporting-policy",
        "reference": "FB-HC-UNDERAGE",
        "summary": "Provides process to report children under the age of 13 on Facebook.",
        "quote": "How do I report a child under the age of 13 on Facebook",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that the user is under 13 years of age",
            "reason": "To enforce minimum age requirements for platform use"
          }
        ],
        "removalCriteria": [
          "User is verified to be under 13 years of age"
        ]
      },
      {
        "id": "fb-sex-offender-policy",
        "reference": "FB-HC-SEX-OFFENDER",
        "summary": "Provides mechanism to report convicted sex offenders on Facebook.",
        "quote": "Report convicted sex offenders on Facebook",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sex offender conviction",
            "reason": "To verify criminal history and enforce platform safety policies"
          }
        ],
        "removalCriteria": [
          "User is a convicted sex offender"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758631439400-0",
    "reference": "META-BH",
    "title": "Meta Bullying and Harassment Policy",
    "summary": "Detailed policy on bullying and harassment across Meta platforms, including heightened protections for minors and specific enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "meta-bh-unwanted-contact",
        "reference": "Tier 1",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
        "quote": "Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
            "description": "Evidence of unwanted contact pattern",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To demonstrate the contact meets the criteria of being repeated, sexually harassing, or mass-directed"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at a large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-statements",
        "reference": "Tier 1",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
            "description": "Evidence of statements expressing intent or advocacy for sexual activity",
            "example": "Screenshots of posts or messages containing sexual propositions",
            "reason": "To verify the content contains explicit statements about sexual activity"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates for engaging in sexual activity"
        ]
      },
      {
        "id": "meta-bh-severe-sexualized-commentary",
        "reference": "Tier 1",
        "summary": "Prohibits severe sexualized commentary and derogatory sexualized photoshop or drawings",
        "quote": "Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of severe sexualized commentary or manipulated imagery",
            "example": "Screenshots of sexualized comments or manipulated photos",
            "reason": "To demonstrate the content is severely sexualized or contains derogatory sexual manipulation"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of derogatory sexual terms being used as attacks",
            "example": "Screenshots showing use of terms like 'whore' or 'slut' directed at individuals",
            "reason": "To verify the content uses derogatory sexual terminology as a form of attack"
          }
        ],
        "removalCriteria": [
          "Content attacks individuals using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "Tier 1",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private information",
            "example": "Screenshots of messages threatening to share phone numbers, addresses, or medical records",
            "reason": "To demonstrate credible threats to release private personal information"
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
        "id": "meta-bh-bodily-function-degradation",
        "reference": "Tier 1",
        "summary": "Prohibits content that degrades or expresses disgust toward individuals depicted in the process of menstruating, urinating, vomiting, or defecating",
        "quote": "Content that degrades or expresses disgust toward individuals who are depicted in the process of, or right after, menstruating, urinating, vomiting, or defecating",
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
            "description": "Evidence of degrading content related to bodily functions",
            "example": "Screenshots showing content that mocks or degrades individuals during private bodily functions",
            "reason": "To verify the content degrades individuals in vulnerable private moments"
          }
        ],
        "removalCriteria": [
          "Content degrades individuals depicted menstruating, urinating, vomiting, or defecating",
          "Content expresses disgust toward individuals in these vulnerable states"
        ]
      },
      {
        "id": "meta-bh-sexual-activity-claims",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify inappropriate sexual claims are being made about protected individuals"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity involving minors",
          "Content makes claims about sexual activity involving private adults",
          "Content makes claims about sexual activity involving limited scope public figures",
          "Exception: Criminal allegations of non-consensual sexual touching against adults are permitted"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "Tier 2",
        "summary": "Prohibits content sexualizing adults when targeting minors, private adults and limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots showing sexualized content about adults in protected categories",
            "reason": "To demonstrate inappropriate sexualization of individuals in protected categories"
          }
        ],
        "removalCriteria": [
          "Content sexualizes adults when targeting minors, private adults, or limited scope public figures"
        ]
      },
      {
        "id": "meta-bh-manipulated-imagery",
        "reference": "Tier 2",
        "summary": "Prohibits content manipulated to highlight or negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
            "description": "Evidence of manipulated imagery highlighting physical features",
            "example": "Screenshots showing images with circles, arrows, or other modifications drawing attention to body parts",
            "reason": "To verify images have been manipulated to negatively highlight physical characteristics"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to highlight specific physical characteristics",
          "Content circles or draws attention to physical features in a negative manner"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "Additional Requirements",
        "summary": "Prohibits content targeting private individuals through unwanted Pages, Groups and Events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report from the target or authorized representative",
            "example": "Direct report from the individual being targeted or their legal representative",
            "reason": "Platform requires confirmation from the target that the content is unwanted"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots showing unwanted content on dedicated pages or groups",
            "reason": "To demonstrate the targeting is occurring through these specific platform features"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Target or authorized representative reports the content as unwanted"
        ]
      },
      {
        "id": "meta-bh-unwanted-sexualization-public",
        "reference": "Additional Requirements",
        "summary": "Prohibits content sexualizing public figures when confirmed as unwanted by the target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that content is unwanted",
            "example": "Direct communication from public figure or their representative requesting removal",
            "reason": "Platform requires explicit confirmation that sexualizing content is unwanted"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Screenshots showing sexual commentary or imagery about the public figure",
            "reason": "To verify the content is indeed sexualizing in nature"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms the content is unwanted"
        ]
      },
      {
        "id": "meta-bh-sexual-harassment-contact",
        "reference": "Additional Requirements",
        "summary": "Prohibits initiating sexually harassing contact when confirmed as unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient that contact is unwanted",
            "example": "Direct report from the recipient or their representative stating the contact is unwanted",
            "reason": "Platform requires explicit confirmation that the sexual contact is unwanted"
          },
          {
            "description": "Evidence of sexually harassing contact",
            "example": "Screenshots of sexually explicit or harassing messages",
            "reason": "To demonstrate the contact is sexually harassing in nature"
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
      "summary": "Users can request another review if they disagree with enforcement decisions, with notifications sent via Support Inbox and appeal options provided in takedown communications",
      "steps": [
        "Report content through universal reporting option on posts, comments, stories, messages, or profiles",
        "Receive notification of review decision via platform notifications",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with the decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "facebook-new-1758631439400-1",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Policy",
    "summary": "Comprehensive policy and resources for addressing non-consensual intimate imagery (NCII), including prevention tools and victim support.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "NCII Policy",
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII) and takes reports on bullying and harassment seriously.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). If you've been victimized by someone sharing your personal images—or someone is threatening to do so—this page explains how to take immediate action.",
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
            "description": "Report content that breaks the rules using dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate image abuse on Facebook, Instagram, or Messenger",
            "reason": "To enable specialized teams to review and take action on violating content"
          }
        ],
        "removalCriteria": [
          "Content or behavior that exploits people",
          "Sharing or threatening to share someone's intimate images",
          "Non-consensual intimate images"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and considers sharing or threatening to share intimate images without consent as against Meta policies.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something you don't want to do. Sharing—or threatening to share—intimate images without consent is against Meta policies.",
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
            "description": "Report threats and intimate images shared without permission",
            "example": "Report nude or sexual photos or videos of yourself or threats to share these images",
            "reason": "To prevent resharing and enable teams to review reports 24/7 in more than 70 languages"
          }
        ],
        "removalCriteria": [
          "Threats to reveal intimate images to force unwanted actions",
          "Sharing intimate images without consent",
          "Threatening to share intimate images without consent"
        ]
      },
      {
        "id": "meta-exploitation-prohibition",
        "reference": "Content Exploitation Policy",
        "summary": "Maintains strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
        "quote": "We have strict rules against content or behavior that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report content that breaks the rules using dedicated reporting option",
            "example": "Use dedicated reporting option for private images being shared",
            "reason": "To enable review and action by specialized teams"
          }
        ],
        "removalCriteria": [
          "Content that exploits people",
          "Behavior that exploits people",
          "Sharing someone's intimate images",
          "Threatening to share someone's intimate images"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "Review Process",
        "summary": "Reviews reports 24/7 in more than 70 languages and takes action on violating content and behavior related to intimate image abuse.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behavior.",
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
        "timeframes": {
          "response": {
            "value": null,
            "unit": "hours",
            "description": "Teams review reports 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Submit reports through official reporting channels",
            "example": "Report through Facebook, Instagram, or Messenger reporting systems",
            "reason": "To enable 24/7 review by specialized teams in multiple languages"
          }
        ],
        "removalCriteria": [
          "Violating content",
          "Violating behavior"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "Enforcement Systems",
        "summary": "Uses automated systems that detect and remove accounts associated with sextortion at scale, with specialized teams investigating and removing criminals.",
        "quote": "We have identified patterns associated with this behavior, and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "System automatically detects patterns associated with sextortion behavior",
            "example": "Automated detection of accounts exhibiting sextortion patterns",
            "reason": "To proactively identify and remove criminal accounts at scale"
          }
        ],
        "removalCriteria": [
          "Accounts exhibiting sextortion patterns",
          "Behavior associated with intimate image abuse",
          "Criminal behavior related to image exploitation"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758631439400-2",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright and Intellectual Property Policy",
    "summary": "Detailed copyright policy including DMCA procedures, reporting mechanisms, and appeal processes for intellectual property violations.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "meta-copyright-1",
        "reference": "Copyright and posting content on Meta platforms",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights and requires users to only post content they have created themselves or have permission to use",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright claim when contacting designated agent",
            "example": "Full DMCA notice with all required elements",
            "reason": "Required by law for proper copyright infringement reporting"
          },
          {
            "description": "Proof of copyright ownership or authorized representation",
            "example": "Documentation showing you own the copyright or represent the rights holder",
            "reason": "Only copyright owners or authorized representatives may file reports"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content facilitates copyright infringement through unauthorized devices or services",
          "Content infringes copyright even if credit was given to owner",
          "Content infringes copyright even if disclaimer was included",
          "Content infringes copyright even if no profit was intended"
        ]
      },
      {
        "id": "meta-copyright-2",
        "reference": "Copyright infringement",
        "summary": "Prohibits use of copyrighted content without permission, even when users give credit, include disclaimers, claim fair use, or legally purchased the content",
        "quote": "It's possible to infringe someone else's copyright, even if you don't intend to do so. In most cases, you shouldn't use someone else's copyrighted work if you don't have permission. Keep in mind that your use of someone else's content may infringe their copyright, even if you: Gave credit to the copyright owner, Included a disclaimer that you don't intend to infringe copyright, Think that the use is a fair use, Didn't intend to profit from it, Legally bought or downloaded the content, Modified the work or added your own original material to it, Found the content available on the internet, Recorded the content onto your own recording device, Saw that others have posted the same content as well",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through online form for Facebook or Instagram",
            "example": "Completed online copyright infringement report form",
            "reason": "Fastest and easiest way to report copyright infringement"
          }
        ],
        "removalCriteria": [
          "Use of copyrighted content without permission",
          "Copyright infringement regardless of giving credit",
          "Copyright infringement regardless of disclaimers",
          "Copyright infringement regardless of fair use claims",
          "Copyright infringement regardless of non-commercial intent",
          "Copyright infringement regardless of legal purchase",
          "Copyright infringement regardless of modifications made"
        ]
      },
      {
        "id": "meta-copyright-3",
        "reference": "Reporting copyright infringement",
        "summary": "Provides process for copyright owners to report infringement through online forms or designated agent contact, with information sharing between parties",
        "quote": "If you believe content on Facebook or Instagram is infringing on your copyright, you can take one or more of the following actions: You can report it to us by filling out this form for Facebook and this form for Instagram. You can contact our designated agent. Please be sure to include a complete copyright claim in your report. You may be able to resolve the issue without contacting Meta, by sending a message to the person who posted the content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Only copyright owner or authorized representative may file report",
            "example": "Documentation proving copyright ownership or authorization",
            "reason": "Legal requirement that only rights holders can file copyright claims"
          },
          {
            "description": "Valid generic business or professional email address",
            "example": "legal@company.com or professional email address",
            "reason": "Contact information is shared with the person who posted the content"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright as reported by rights owner",
          "Complete copyright claim submitted through proper channels"
        ]
      },
      {
        "id": "meta-copyright-4",
        "reference": "Repeat infringer policy",
        "summary": "Restricts or disables accounts of users who repeatedly post content that infringes intellectual property rights, with potential loss of features and functionality",
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
            "description": "Pattern of repeated intellectual property infringement",
            "example": "Multiple copyright or trademark violation reports against the same account",
            "reason": "Policy applies to repeat offenders to deter ongoing infringement"
          }
        ],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple copyright infringement violations",
          "Multiple trademark infringement violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright removals and file DMCA counter-notifications, with instructions provided in removal notifications. Appeals can only be submitted by the person who posted the content.",
      "steps": [
        "Receive notification from Meta about content removal with details of the report",
        "Follow appeal instructions provided in the removal notification message",
        "Submit appeal if you believe content was wrongly removed",
        "For DMCA cases, file counter-notification following DMCA procedures",
        "Contact rights owner directly to try to resolve the issue",
        "Note that restorations due to successful appeals are considered under repeat infringer policy"
      ]
    }
  },
  {
    "id": "facebook-new-1758631439400-3",
    "reference": "META-APPEALS",
    "title": "Meta Content Appeals Process",
    "summary": "Comprehensive information about appealing content decisions, including DMCA counter-notifications and community standards appeals.",
    "url": "https://transparency.meta.com/policies/improving/appealed-content-metric/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "meta-appeals-policy-violations",
        "reference": "Appeals Process Overview",
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
            "example": "Selecting the disagree option when notified of content removal",
            "reason": "To initiate the appeals review process"
          }
        ],
        "removalCriteria": [
          "Content goes against Meta's Community Standards policies",
          "Content has been reviewed and determined to violate platform policies"
        ]
      },
      {
        "id": "meta-appeals-extreme-safety",
        "reference": "What can be appealed",
        "summary": "Restricts appeals for violations with extreme safety concerns, including child exploitation imagery",
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
        "id": "meta-appeals-review-process",
        "reference": "How the Meta appeals process works",
        "summary": "Establishes multi-stage review process where appealed content undergoes additional human review before final determination",
        "quote": "If they choose to disagree with the decision, the content is resubmitted for another review. The content is not visible to other people on Facebook while we review it again. If the reviewer accepts the original decision, the content remains off Facebook. However, if the reviewer disagrees with the initial review and decides it should not have been removed, the content will go to another reviewer. This reviewer's decision will determine whether the content should be on Facebook or not.",
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
            "description": "User must submit disagreement with initial removal decision",
            "example": "Requesting review through the appeals interface",
            "reason": "To trigger the multi-stage review process"
          }
        ],
        "removalCriteria": [
          "Content determined to violate policies after multi-stage review",
          "Final reviewer confirms content should not be on platform"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides appeals process for most policy violations on Facebook and Instagram. Users can disagree with removal decisions and request additional review. Content remains hidden during review. Multi-stage review process with human reviewers makes final determination.",
      "steps": [
        "Receive notification that content has been removed or covered with warning",
        "Choose to disagree with the decision and request another review",
        "Content is resubmitted for review and remains not visible to others",
        "If first reviewer accepts original decision, content remains removed",
        "If first reviewer disagrees with removal, content goes to second reviewer",
        "Second reviewer makes final determination on whether content should remain on platform"
      ]
    }
  },
  {
    "id": "facebook-new-1758631439400-4",
    "reference": "STOPNCII-TOOL",
    "title": "StopNCII.org Platform",
    "summary": "Meta-supported global platform for proactively preventing the spread of non-consensual intimate images using hash technology.",
    "url": "https://stopncii.org/",
    "accessTimestamp": "2025-09-23T12:43:59.400Z",
    "policies": [
      {
        "id": "stopncii-ncii-prevention",
        "reference": "StopNCII Tool Service",
        "summary": "Provides a free tool to prevent non-consensual intimate image abuse by generating digital fingerprints (hashes) of intimate images and sharing them with participating companies for detection and removal",
        "quote": "StopNCII.org is a free tool designed to support victims of Non-Consensual Intimate Image (NCII) abuse. The tool works by generating a hash from your intimate image(s)/video(s). StopNCII.org then shares the hash with participating companies so they can help detect and remove the images from being shared online.",
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
            "description": "User must be the person in the image",
            "example": "Self-identification as the subject of the intimate content",
            "reason": "To ensure only the actual subject can create prevention cases for their own images"
          },
          {
            "description": "User must be 18 or older at time image was taken and currently over 18",
            "example": "Age verification for legal compliance",
            "reason": "Legal requirement to prevent processing of minor content"
          },
          {
            "description": "User must still possess the original image or video",
            "example": "Access to the actual intimate content file",
            "reason": "Required to generate the digital hash/fingerprint for detection"
          },
          {
            "description": "Image must show user nude, semi-nude, or engaging in sexual acts",
            "example": "Intimate imagery showing private body parts or sexual activity",
            "reason": "Defines the scope of non-consensual intimate image abuse covered by the service"
          }
        ],
        "removalCriteria": [
          "Content matches hash fingerprint of registered intimate image",
          "Image was registered by the person depicted in the content",
          "Content shows nudity, semi-nudity, or sexual acts"
        ]
      },
      {
        "id": "stopncii-privacy-protection",
        "reference": "Privacy Protection Process",
        "summary": "Protects user privacy by creating hashes directly on user devices without downloading images, collecting only minimum data necessary to operate the service",
        "quote": "The tool works by creating hashes (digital fingerprints) of your selected images directly on your device. This hash (fingerprint) is the only file which is shared with StopNCII.org and participating companies. To protect your privacy, StopNCII.org does not download the images from your device and collects the minimum amount of data to run the service.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "User provides intimate images for hash generation on their own device",
            "example": "Upload of intimate content to local hashing tool",
            "reason": "Required to create digital fingerprint while maintaining privacy"
          }
        ],
        "removalCriteria": [
          "Hash fingerprint is generated locally on user device",
          "Only hash data is shared, not actual images",
          "Minimum data collection principles are followed"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
