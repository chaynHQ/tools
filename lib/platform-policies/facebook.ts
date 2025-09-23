import { PlatformPolicies } from '../../types/policies';

export const facebookPolicy: PlatformPolicies = {
  platform: 'Facebook',
  policyDocuments: [
  {
    "id": "fb-community-standards",
    "reference": "META-CS",
    "title": "Community Standards",
    "summary": "Unified community standards for Facebook, Instagram, Messenger and Threads covering prohibited content and behavior, with enforcement philosophy and policy rationale for each section.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
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
    "summary": "Updated terms of service effective January 1, 2025, governing use of Facebook, Messenger, and other Meta products with enhanced language around platform misuse, data usage, and content rights.",
    "url": "https://www.facebook.com/terms.php",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [
      {
        "id": "fb-copyright-policy",
        "reference": "FB-TOS-IP",
        "summary": "Prohibits copyright infringement, including unauthorized use of intimate images owned by others.",
        "quote": "We prohibit copyright infringement. If the intimate image was created and owned by someone else, its unauthorized use is a copyright violation.",
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
            "description": "A formal DMCA takedown notice",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "fb-unauthorized-content-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits sharing content that you do not own or have the necessary rights to share.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is shared without owning it or having necessary rights to share it"
        ]
      },
      {
        "id": "fb-ip-infringement-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that infringes or violates someone else's intellectual property rights.",
        "quote": "That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content infringes someone else's intellectual property rights including copyright"
        ]
      },
      {
        "id": "fb-community-standards-policy",
        "reference": "Section 3.2.1",
        "summary": "Prohibits content that violates Community Standards, which include policies against non-consensual intimate imagery and harassment.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Community Standards policies"
        ]
      },
      {
        "id": "fb-content-deletion-timeframe",
        "reference": "Section 3.3.3",
        "summary": "Content deletion process takes up to 90 days to complete, with an additional 90 days for removal from backups.",
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
            "description": "Content deletion process takes up to 90 days, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content deletion request is submitted",
          "Account deletion process is initiated"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request review of content removal decisions, except in cases of serious or repeated violations, legal liability concerns, or technical limitations.",
      "steps": [
        "Submit a request for review of the content removal decision",
        "Meta will review the decision unless it involves serious violations, legal concerns, or technical limitations",
        "Users will be notified of the outcome and any available options"
      ]
    }
  },
  {
    "id": "fb-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy effective June 16, 2025, explaining how Meta collects, uses, shares, retains and transfers information across all Meta products with enhanced transparency and user control options.",
    "url": "https://www.facebook.com/privacy/policy/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and allows for content removal when reported",
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
            "description": "Content must be reported to Meta",
            "example": "Report the specific content through Meta's reporting mechanisms",
            "reason": "Required for Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content threatens user safety, security or well-being"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Law Compliance",
        "summary": "Allows access, preservation and sharing of user information in response to legal requests and to prevent harm",
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
            "example": "Court order requesting specific user information",
            "reason": "Required by law for Meta to disclose user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request received from authorized parties",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-data-management",
        "reference": "Section 6 - Managing and Deleting Information",
        "summary": "Provides users with tools to view, manage, download and delete their information",
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
            "description": "User must access their account settings or Help Centers",
            "example": "Navigate to Facebook or Instagram settings to manage data",
            "reason": "Required to exercise data management rights"
          }
        ],
        "removalCriteria": [
          "User requests deletion of their information",
          "User exercises privacy rights under applicable laws"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information, and may also contact Data Protection Authorities in some jurisdictions",
      "steps": [
        "Contact Meta online through the support portal",
        "Alternatively, send written correspondence to Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, contact local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "fb-help-center",
    "reference": "FB-HC-Reporting",
    "title": "Facebook Help Center - Reporting & Account Recovery",
    "summary": "Help documentation for reporting violations and recovering compromised accounts.",
    "url": "https://www.facebook.com/help/181495968648557",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
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
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758646516871-0",
    "reference": "META-COPYRIGHT",
    "title": "Meta Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA takedown procedures, appeals process, and intellectual property protection across Meta platforms.",
    "url": "https://www.meta.com/help/policies/2202628709913826/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [
      {
        "id": "meta-copyright-infringement",
        "reference": "Copyright infringement",
        "summary": "Prohibits posting content that infringes someone else's copyright without permission",
        "quote": "Under Facebook's Terms of Use and Instagram's Terms of Use, and our Community Standards you can only post content to these platforms that doesn't violate someone else's intellectual property rights. The best way to help make sure that what you post to Meta platforms like Facebook and Instagram doesn't violate copyright law is to only post content that you've created yourself.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Copyright ownership or authorized representative status",
            "example": "Only the copyright owner or their authorized representative may file a report",
            "reason": "To verify legal standing to make copyright claims"
          },
          {
            "description": "Complete copyright claim information",
            "example": "Must include a complete copyright claim in your report when contacting designated agent",
            "reason": "Required for proper DMCA compliance"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's intellectual property rights",
          "Content posted without permission from copyright owner",
          "Content facilitates copyright infringement through unauthorized devices or services"
        ]
      },
      {
        "id": "meta-copyright-reporting",
        "reference": "Reporting copyright infringement",
        "summary": "Provides process for copyright owners to report infringing content through online forms",
        "quote": "If you believe content on Facebook or Instagram is infringing on your copyright, you can take one or more of the following actions: You can report it to us by filling out this form for Facebook and this form for Instagram. You can contact our designated agent. Please be sure to include a complete copyright claim in your report.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "Valid business or professional email address",
            "example": "You may wish to provide a valid generic business or professional email",
            "reason": "Contact information is shared with the person who posted the content"
          },
          {
            "description": "Complete copyright claim documentation",
            "example": "Must include a complete copyright claim when contacting designated agent",
            "reason": "Required for proper processing of copyright infringement reports"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright of the reporting party",
          "Reporter is copyright owner or authorized representative"
        ]
      },
      {
        "id": "meta-repeat-infringer",
        "reference": "Repeat infringer policy",
        "summary": "Prohibits repeated posting of content that infringes intellectual property rights and may result in account restrictions",
        "quote": "If you repeatedly post content that infringes someone else's intellectual property rights, such as copyrights or trademarks, your account may be disabled or your Page removed under Instagram's repeat infringer policy. Under this policy, your ability to post photos or videos may be limited, and you could also lose access to certain features or functionality on Instagram.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Repeated posting of content that infringes intellectual property rights",
          "Multiple violations of copyright or trademark policies"
        ]
      },
      {
        "id": "meta-copyright-ownership",
        "reference": "Know if you own the copyright to something",
        "summary": "Establishes that appearing in content does not grant copyright ownership",
        "quote": "There may be situations where you might think you have a copyright in a creative work, but you may not. For example: If you appear in a photo or video, that doesn't necessarily mean you have a copyright in that photo or video.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Actual copyright ownership must be established",
          "Mere appearance in content does not establish copyright ownership"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal by following instructions provided in removal notifications, including DMCA counter-notifications for copyright claims",
      "steps": [
        "Receive notification from Meta with details about removed content and rights owner information",
        "Follow appeal instructions provided in the removal notification message",
        "For copyright removals, may file DMCA counter-notification if applicable",
        "Group admins are notified of removals but only the original poster can submit appeals",
        "Restorations due to successful appeals are considered under repeat infringer policy"
      ]
    }
  },
  {
    "id": "facebook-new-1758646516871-1",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Dedicated policy and resources for non-consensual intimate imagery (NCII) prevention, reporting, and victim support including StopNCII.org integration.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [],
    "appealProcess": {
      "url": "https://oversightboard.com",
      "summary": "Users can appeal Meta's content decisions to the independent Oversight Board after exhausting Meta's internal appeals process. The board reviews select cases and can overturn Meta's decisions.",
      "steps": [
        "Obtain an Oversight Board reference number by completing Meta's appeals process and receiving a final content decision",
        "Visit oversightboard.com and navigate to Start an Appeal, then log in with Facebook, Instagram, or Threads",
        "Enter the reference number to verify eligibility and link the case to the board's system",
        "Provide consent for Terms of Service, data processing permissions, and choose whether to allow identifying details in public decisions",
        "Provide context explaining why you posted the content, why you're appealing, and how you think Meta got the decision wrong",
        "Review all information and submit the case, after which you can check status and withdraw consents if desired"
      ]
    }
  },
  {
    "id": "facebook-new-1758646516871-2",
    "reference": "META-APPEALS",
    "title": "Meta Appeals Process and Oversight Board",
    "summary": "Comprehensive appeals process for content decisions including internal Meta appeals and independent Oversight Board review procedures.",
    "url": "https://transparency.meta.com/oversight/appealing-to-oversight-board/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [
      {
        "id": "us-take-it-down-ncii-criminalization",
        "reference": "Section 1 - Criminalizes NCII and Threats to Publish",
        "summary": "Prohibits the knowing sharing or threatening to share non-consensual intimate images, including AI-generated images that depict real people",
        "quote": "Makes it a federal crime to knowingly share or threaten to share NCII, including AI-generated images that depict real people",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes non-consensual intimate imagery",
          "Content includes AI-generated images depicting real people",
          "Content was knowingly shared without consent",
          "Content involves threats to publish intimate imagery"
        ]
      },
      {
        "id": "us-take-it-down-consent-clarification",
        "reference": "Section 1 - Criminalizes NCII and Threats to Publish",
        "summary": "Clarifies that consent to create an image does not constitute consent to share it",
        "quote": "Clarifies that consent to create an image does not mean consent to share it",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content was shared without explicit consent for distribution",
          "Original consent was limited to creation, not sharing"
        ]
      },
      {
        "id": "us-take-it-down-platform-removal",
        "reference": "Section 2 - Mandates Swift Removal from Platforms",
        "summary": "Requires websites and online platforms to remove non-consensual intimate imagery within 48 hours of a survivor's verified request",
        "quote": "Requires websites and online platforms to remove NCII within 48 hours of a survivor's verified request",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Platforms must remove NCII within 48 hours of verified request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Verified request from survivor",
            "example": "Authenticated takedown request identifying the content",
            "reason": "Required to establish legitimacy of removal request"
          }
        ],
        "removalCriteria": [
          "Content constitutes non-consensual intimate imagery",
          "Request is verified and submitted by affected individual",
          "Content is accessible on the platform"
        ]
      },
      {
        "id": "us-take-it-down-duplicate-removal",
        "reference": "Section 2 - Mandates Swift Removal from Platforms",
        "summary": "Requires platforms to make reasonable efforts to remove duplicates or reposts of non-consensual intimate imagery",
        "quote": "Platforms must also make reasonable efforts to remove duplicates or reposts",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is a duplicate or repost of previously identified NCII",
          "Platform can reasonably identify the content as duplicate material"
        ]
      },
      {
        "id": "us-take-it-down-good-faith-protection",
        "reference": "Section 3 - Protects Those Acting in Good Faith",
        "summary": "Provides legal protection for medical professionals, law enforcement, and others who disclose non-consensual intimate imagery responsibly and ethically",
        "quote": "Shields medical professionals, law enforcement, and others who disclose NCII responsibly and ethically",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Disclosure is made by qualified professionals",
          "Disclosure is conducted responsibly and ethically",
          "Disclosure serves legitimate professional or legal purposes"
        ]
      },
      {
        "id": "us-take-it-down-free-speech-protection",
        "reference": "Section 4 - Preserves Free Speech",
        "summary": "Protects journalistic, artistic, and lawful speech under the First Amendment while targeting only the knowing publication of non-consensual intimate imagery",
        "quote": "Targets only the knowing publication of NCII. Includes protections for journalistic, artistic, and lawful speech under the First Amendment",
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
          "Content constitutes knowing publication of NCII",
          "Content does not qualify for journalistic protection",
          "Content does not qualify for artistic expression protection",
          "Content is not otherwise protected lawful speech"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "facebook-new-1758646516871-3",
    "reference": "US-TAKE-IT-DOWN",
    "title": "TAKE IT DOWN Act (2025)",
    "summary": "Federal legislation criminalizing non-consensual intimate imagery and requiring 48-hour takedown procedures for covered platforms.",
    "url": "https://rainn.org/federal-legislation/take-it-down-act/",
    "accessTimestamp": "2025-09-23T16:55:16.871Z",
    "policies": [
      {
        "id": "meta-us-privacy-personal-info-collection",
        "reference": "Categories of Personal Information",
        "summary": "Collects photos and videos which may include face imagery as personal information",
        "quote": "Photos and videos, which may include face imagery",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-us-privacy-audio-visual-collection",
        "reference": "Categories of Personal Information",
        "summary": "Collects audio or visual information including photos, videos, and voice recordings",
        "quote": "Audio or visual information, including photos, videos, and voice recordings",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-us-privacy-face-imagery-sensitive",
        "reference": "Sensitive Personal Information",
        "summary": "Treats face imagery or voice recordings which may be used to identify you as sensitive personal information",
        "quote": "Face imagery or voice recordings which may be used to identify you when you use relevant features",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-us-privacy-content-from-others",
        "reference": "Sources of Personal Information - Other people",
        "summary": "Receives and analyzes content and information about you that other people provide when they use products",
        "quote": "We may also receive and analyze content, communications, and information about you that other people provide when they use our products, such as when others share or comment on a photo of you, send a message to you, or upload, sync, or import your contact information",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "meta-us-privacy-deletion-right",
        "reference": "Right to Request Deletion",
        "summary": "Provides the right to request deletion of personal information collected from or about you",
        "quote": "Right to Request Deletion: The right to request that we delete your Personal Information that we have collected from or about you",
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
            "reason": "To protect your information and the integrity of our products"
          }
        ],
        "removalCriteria": [
          "Personal information was collected from or about you"
        ]
      },
      {
        "id": "meta-us-privacy-correction-right",
        "reference": "Right to Request Correction",
        "summary": "Provides the right to request correction of inaccurate personal information",
        "quote": "Right to Request Correction: The right to request that we correct inaccurate Personal Information that we maintain about you",
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
            "reason": "To protect your information and the integrity of our products"
          }
        ],
        "removalCriteria": [
          "Personal information maintained is inaccurate"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can submit requests to exercise privacy rights and appeal consumer rights actions through a webform, with identity verification required",
      "steps": [
        "Visit the webform at help.meta.com/support/privacy",
        "Submit request to exercise rights or appeal a consumer rights action",
        "Provide identity verification if required (such as government issued ID)",
        "Request will be processed, potentially through automated tools in password-protected account"
      ]
    }
  }
],
};
