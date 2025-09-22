import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards covering bullying, harassment, privacy violations, adult nudity, non-consensual intimate images, and content enforcement across Facebook, Instagram, Messenger and Threads.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "meta-cs-ncii",
        "reference": "META-CS-ADULT-SEXUAL-EXPLOITATION",
        "summary": "Prohibits sharing non-consensual intimate images (NCII), including AI-generated or deepfake content, and threatening to share them (sextortion).",
        "quote": "We prohibit sharing non-consensual intimate images (NCII), including AI-generated or 'deepfake' content, and threatening to share them (sextortion).",
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
            "description": "URL(s) of the infringing content or threatening messages",
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
          "Image/video is shared without the consent of the depicted individual",
          "The content is an authentic or AI-generated intimate depiction",
          "A threat to share intimate media exists"
        ]
      },
      {
        "id": "meta-cs-bullying",
        "reference": "META-CS-BULLYING-HARASSMENT",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
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
          "Content targets a private individual for abuse or degradation",
          "Content includes shaming material, such as non-consensual intimate imagery"
        ]
      },
      {
        "id": "meta-cs-privacy",
        "reference": "META-CS-PRIVACY-VIOLATIONS",
        "summary": "Prohibits violations of privacy, including sharing private intimate media or personal information without consent.",
        "quote": "We're committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.",
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
            "description": "Identification of the specific personal information that was shared",
            "reason": "To assess the severity and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains personal information used maliciously",
          "Information is shared without consent and is intended to harass or incite harassment"
        ]
      },
      {
        "id": "meta-cs-impersonation",
        "reference": "META-CS-AUTHENTIC-IDENTITY",
        "summary": "Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
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
            "example": "Government-issued ID for a person or business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account or content is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content uses another's name, photos, or other identifying information without authorization",
          "The profile or content is intended to mislead or deceive others about who is behind it",
          "The account is not clearly marked as a parody or fan account"
        ]
      },
      {
        "id": "meta-cs-intellectual-property",
        "reference": "META-CS-IP-INFRINGEMENT",
        "summary": "Prohibits third-party intellectual property infringement, including unauthorized use of copyrighted images and content.",
        "quote": "Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.",
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
            "reason": "To locate the content that allegedly infringes intellectual property rights"
          },
          {
            "description": "Proof of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify the legitimacy of the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To identify the specific intellectual property being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission from the rights holder",
          "Content infringes on trademark rights",
          "Content violates other intellectual property rights"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ig-terms-of-use",
    "reference": "IG-TOU",
    "title": "Instagram Terms of Use",
    "summary": "Legal terms governing the use of Instagram, including content ownership and intellectual property rights.",
    "url": "https://help.instagram.com/581066165581870",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "ig-intellectual-property-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violating intellectual property rights including copyright infringement.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "Report through Instagram's intellectual property reporting system",
            "reason": "To formally notify Instagram of the rights violation"
          },
          {
            "description": "Proof of ownership or authorization for the content",
            "reason": "To establish legal rights to the content being misused"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates rights"
          }
        ],
        "removalCriteria": [
          "Content posted without permission of the rights holder",
          "Content violates intellectual property rights including copyright",
          "Private or confidential information shared without consent"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without permission.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
            "description": "Evidence that the account is impersonating you or someone else",
            "reason": "To verify the impersonation claim"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To confirm legitimate identity and standing to report"
          },
          {
            "description": "URL of the impersonating account or content",
            "reason": "To identify the specific account or content violating the policy"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Account created for someone else without their express permission",
          "Inaccurate information provided with intent to deceive"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove or restrict content that violates Terms of Use, Community Standards, or is required by law, with notification and review options provided.",
        "quote": "We can remove or restrict any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are required to do so by law.",
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
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report through Instagram's reporting system explaining the violation",
            "reason": "To notify Instagram of the policy violation"
          },
          {
            "description": "Specific identification of which Terms of Use or Community Standards are violated",
            "reason": "To help Instagram assess the violation accurately"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram Terms of Use",
          "Content violates Community Standards",
          "Content removal required by law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, or repeatedly infringe intellectual property rights.",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are required to do so by law.",
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
            "description": "Documentation of repeated violations or serious breach",
            "reason": "To demonstrate pattern of abuse or severity warranting account action"
          },
          {
            "description": "Evidence of risk to community or legal exposure",
            "reason": "To justify protective measures for the platform and users"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Repeated violations of Terms of Use or Community Standards",
          "Repeated infringement of intellectual property rights",
          "Account termination required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, unless doing so would create legal liability or harm the community.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain options for requesting another review",
        "Submit appeal through Instagram Help Center",
        "Instagram will review the appeal unless restricted by legal or safety concerns"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy - How Meta collects and uses user data",
    "summary": "Updated privacy policy effective June 16, 2025, explaining how Meta collects, uses, shares, retains and transfers information across Facebook, Instagram, Messenger and other Meta products.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SECTION-2",
        "summary": "Meta removes content that violates their terms or policies through automated and manual review processes to promote safety, security and integrity.",
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
            "example": "Using the report feature on posts, images, or profiles",
            "reason": "Required for Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content involves harmful or unlawful behavior",
          "Content is reported by users and confirmed to violate policies"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-SECTION-10",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
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
            "example": "Court order from civil litigation or law enforcement warrant",
            "reason": "Required to compel Meta to preserve, access or share user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Necessary to promote safety, security and integrity"
        ]
      },
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SECTION-2",
        "summary": "Meta detects, prevents and combats harmful or unlawful behavior including reviewing and removing reported content.",
        "quote": "Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Detect and prevent spam and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products",
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
            "description": "Report of harmful or unlawful content through Meta's reporting systems",
            "example": "Reporting non-consensual intimate images or harassment",
            "reason": "Enables Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content constitutes harmful or unlawful behavior",
          "Content threatens Meta personnel or property",
          "Content compromises platform integrity",
          "Content creates spam or bad user experiences"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-SECTION-2",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, including through facial recognition technology with user consent.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it",
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
            "description": "Account information, account photos, or photo/video selfie if user chooses to provide it",
            "example": "Government ID or selfie video for identity verification",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Account involves impersonation or identity misuse",
          "Suspicious activity detected on account",
          "Account fails identity verification process"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-SECTION-7",
        "summary": "Users have the right to request erasure of their information under GDPR and other data protection laws.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Erase information",
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
            "description": "Request for data erasure through Meta's privacy settings or help center",
            "example": "Using Facebook or Instagram settings to request data deletion",
            "reason": "Required to exercise GDPR data protection rights"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their personal information",
          "Legal basis for processing no longer exists",
          "Information was unlawfully processed"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Content removal decisions may be reviewed by the Oversight Board in some cases, and users can contact Meta through their help centers for privacy-related issues.",
      "steps": [
        "Decisions about policy violations may be reviewed by the Oversight Board",
        "Contact Meta through Facebook Help Center or Instagram Help Center",
        "Contact Meta Platforms Ireland Limited for privacy operations",
        "Lodge complaint with Irish Data Protection Commission or local supervisory authority"
      ]
    }
  },
  {
    "id": "instagram-new-1758540835830-0",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Dedicated policy page covering non-consensual intimate images (NCII), sextortion prevention, and related safety measures.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "meta-ncii-prohibition",
        "reference": "META-NCII-001",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and sextortion across all platforms.",
        "quote": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII). Sharing – or threatening to share – intimate images without consent is against Meta policies.",
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
            "description": "Report content that breaks the rules using dedicated reporting option for private images",
            "example": "Use the specific reporting flow for intimate image abuse",
            "reason": "To enable specialized team review and enforcement"
          }
        ],
        "removalCriteria": [
          "Content or behaviour that exploits people",
          "Sharing intimate images without consent",
          "Threatening to share intimate images without consent"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "META-NCII-002",
        "summary": "Meta prohibits sextortion, defined as threatening to reveal intimate images to force someone to do something against their will.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. Sharing – or threatening to share – intimate images without consent is against Meta policies.",
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
            "description": "Report threats to share intimate images or coercive behavior",
            "example": "Report when someone threatens to share intimate images unless you send money or additional images",
            "reason": "To identify and remove criminal sextortion behavior"
          }
        ],
        "removalCriteria": [
          "Threatening to reveal intimate images to coerce behavior",
          "Using intimate images as leverage for money, additional images, or sexual contact",
          "Criminal sextortion behavior patterns"
        ]
      },
      {
        "id": "meta-automated-detection",
        "reference": "META-NCII-003",
        "summary": "Meta uses automated systems and specialized teams to detect, investigate and remove accounts engaged in intimate image abuse at scale.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities.",
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
            "description": "No specific evidence required for automated detection",
            "example": "System automatically identifies suspicious behavior patterns",
            "reason": "Proactive enforcement using pattern recognition technology"
          }
        ],
        "removalCriteria": [
          "Accounts matching identified patterns of intimate image abuse",
          "Behavior consistent with sextortion criminals",
          "Accounts flagged by automated detection systems"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "META-NCII-004",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until accepted.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages.",
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
            "description": "Age verification for teen accounts",
            "example": "Account settings showing user is under 18",
            "reason": "To apply appropriate protection measures for minors"
          }
        ],
        "removalCriteria": [
          "Adults attempting to send non-text content to unconnected teens",
          "Adults attempting private chats with unconnected teens",
          "Violation of teen protection messaging restrictions"
        ]
      },
      {
        "id": "meta-teen-account-privacy",
        "reference": "META-NCII-005",
        "summary": "Meta automatically sets teen accounts under 16 (18 in certain countries) to private and prevents unknown adults from tagging, mentioning, or including them in content.",
        "quote": "We automatically set teens' accounts under 16 (and under 18 in certain countries) to private when they join Instagram. We also don't allow people who teens don't follow to tag or mention them, or to include their content in Reels Remixes or Guides by default.",
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
            "description": "Teen account age verification",
            "example": "Account creation date and age information",
            "reason": "To enforce automatic privacy protections for minors"
          }
        ],
        "removalCriteria": [
          "Unauthorized tagging of teens by unknown users",
          "Unauthorized mentions of teens by unknown users",
          "Inclusion of teen content in Reels Remixes or Guides without permission"
        ]
      },
      {
        "id": "meta-stopncii-integration",
        "reference": "META-NCII-006",
        "summary": "Meta integrates with StopNCII.org to prevent sharing of intimate images of adults (18+) using hash-generating technology.",
        "quote": "If you have an intimate image or video that was taken when you were over 18 and are concerned that it will be shared or reshared online, you can take steps to help prevent further circulation through StopNCII.org. Tech companies participating in StopNCII.org receive the hash and can use that hash to detect if someone has shared or is trying to share those images on their platforms.",
        "contentTypes": [
          "intimate"
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
            "description": "Hash value generated through StopNCII.org platform",
            "example": "Unique digital fingerprint created without sharing actual image",
            "reason": "To enable proactive detection without exposing intimate content"
          }
        ],
        "removalCriteria": [
          "Images matching hash values from StopNCII.org database",
          "Intimate images of adults flagged through prevention system",
          "Content identified through hash-matching technology"
        ]
      },
      {
        "id": "meta-takeitdown-integration",
        "reference": "META-NCII-007",
        "summary": "Meta integrates with Take It Down by NCMEC to prevent sharing of intimate images of minors (under 18) and AI-generated content.",
        "quote": "Instagram and Facebook are founding members of Take It Down – a platform by NCMEC to proactively prevent young people's intimate images, including AI-generated content, from spreading online. Once you submit the hash value to NCMEC, companies like ours can use those hashes to prevent the content from being posted on our apps in the future.",
        "contentTypes": [
          "intimate"
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
            "description": "Hash value generated through Take It Down platform for content involving minors",
            "example": "Digital fingerprint created for images taken when person was under 18",
            "reason": "To prevent child sexual abuse material from spreading online"
          }
        ],
        "removalCriteria": [
          "Images matching hash values from Take It Down database",
          "Intimate images of minors flagged through NCMEC system",
          "AI-generated intimate content of minors",
          "Content involving anyone under 18 in intimate images"
        ]
      },
      {
        "id": "meta-24-7-review",
        "reference": "META-NCII-008",
        "summary": "Meta's teams review reports of intimate image abuse 24/7 in more than 70 languages and take action on violating content and behavior.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
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
          "response": {
            "value": 24,
            "unit": "hours",
            "description": "Continuous review process operates 24/7"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report submitted through platform reporting mechanisms",
            "example": "Use dedicated reporting options for intimate image abuse",
            "reason": "To enable multilingual review team assessment"
          }
        ],
        "removalCriteria": [
          "Content determined to violate intimate image policies",
          "Behavior that violates non-consensual sharing rules",
          "Content flagged through reporting system review"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions reporting mechanisms but does not specify a dedicated appeal process for intimate image abuse cases.",
      "steps": [
        "Report content using dedicated reporting option for private images",
        "Content reviewed by specialized teams 24/7 in 70+ languages",
        "Action taken on violating content and behavior"
      ]
    }
  },
  {
    "id": "instagram-new-1758540835830-1",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy covering bullying and harassment across Meta platforms with specific protections for minors and enforcement guidelines.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
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
            "description": "Evidence that contact is unwanted and falls into prohibited categories",
            "example": "Screenshots showing repeated messages or sexually harassing content",
            "reason": "To establish pattern of unwanted contact"
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
        "summary": "Meta prohibits statements of intent to engage in sexual activity or advocating sexual activity, severe sexualized commentary, and derogatory sexualized content.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary. Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of sexual statements, severe sexualized commentary, or derogatory sexualized content",
            "example": "Screenshots of posts containing sexual threats or derogatory sexual terms",
            "reason": "To verify violation of sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity",
          "Content includes severe sexualized commentary",
          "Content contains derogatory sexualized photoshop or drawings",
          "Content attacks through derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta removes threats to release an individual's private phone number, residential address, email address, or medical records.",
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
            "example": "Screenshots showing threats to share phone numbers, addresses, emails, or medical records",
            "reason": "To verify threats against private information"
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
        "summary": "Meta protects minors, private adults, and limited scope public figures from claims about sexual activity, except in criminal allegation contexts.",
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
            "description": "Evidence of false claims about sexual activity targeting protected individuals",
            "example": "Screenshots of posts making sexual claims about minors or private adults",
            "reason": "To verify sexual claims against protected individuals"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of minors",
          "Content makes claims about sexual activity of private adults",
          "Content makes claims about sexual activity of limited scope public figures",
          "Claims are not in context of criminal allegations"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
        "reference": "META-BH-T2-SEXUALIZATION",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, or limited scope public figures.",
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
            "description": "Evidence of sexualizing content targeting protected individuals",
            "example": "Screenshots of posts sexualizing private adults or limited scope public figures",
            "reason": "To verify sexualization of protected individuals"
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
        "summary": "Meta removes content manipulated to negatively highlight physical characteristics and unwanted manipulated imagery when self-reported.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on). Unwanted manipulated imagery.",
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
            "description": "Evidence of manipulated imagery targeting physical characteristics",
            "example": "Screenshots showing edited photos that highlight or circle physical features",
            "reason": "To verify manipulated content targeting appearance"
          },
          {
            "description": "Self-report from target for unwanted manipulated imagery",
            "example": "Report from the person depicted in manipulated content",
            "reason": "To confirm content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content manipulated to negatively highlight physical characteristics",
          "Content circles or draws attention to specific physical features",
          "Manipulated imagery is reported as unwanted by target"
        ]
      },
      {
        "id": "meta-bh-self-report-required",
        "reference": "META-BH-SELF-REPORT",
        "summary": "Meta requires self-reporting or authorized representative confirmation for certain harassment content targeting private individuals.",
        "quote": "We remove this content when it is reported by the target or an authorized representative of the target. We will remove this content if we have confirmation from the target or an authorized representative of the target (alive or deceased) that the content is unwanted.",
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
            "description": "Report from target or authorized representative",
            "example": "Direct report from person depicted or their legal representative",
            "reason": "To confirm content is unwanted by the target"
          },
          {
            "description": "Confirmation that content is unwanted",
            "example": "Statement that the content was shared without permission",
            "reason": "To establish lack of consent for content sharing"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through unwanted Pages, Groups, or Events",
          "Target or authorized representative reports content as unwanted",
          "Content indicates poster is directly targeting the individual"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or their representative.",
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
            "example": "Statement from public figure or their representative requesting removal",
            "reason": "To verify public figure does not consent to sexualized content"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain cases.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed information in Support Inbox",
        "Request another review if disagreeing with decision",
        "Receive final response after re-review",
        "Option to appeal to Oversight Board for eligible cases"
      ]
    }
  },
  {
    "id": "instagram-new-1758540835830-2",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive copyright policy covering DMCA procedures, intellectual property rights, and content removal processes.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT-REPORT",
        "summary": "Instagram removes content that infringes copyright when reported through their copyright infringement reporting form.",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form",
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
            "description": "Information required for copyright report as specified in their reporting form",
            "example": "Copyright ownership documentation, identification of infringing content",
            "reason": "To verify legitimate copyright ownership and identify specific infringing material"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from copyright owner",
          "Valid copyright infringement report is submitted through official form"
        ]
      },
      {
        "id": "ig-copyright-dmca",
        "reference": "IG-COPYRIGHT-DMCA",
        "summary": "Instagram processes DMCA takedown notices and counter-notifications for copyright infringement claims in accordance with US Digital Millennium Copyright Act.",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications",
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
            "description": "DMCA-compliant takedown notice with required legal elements",
            "example": "Sworn statement of copyright ownership, good faith belief statement, contact information",
            "reason": "Legal requirement under DMCA for valid takedown notices"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice is received",
          "Content identified in notice infringes copyright",
          "Notice includes all required DMCA elements"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT-REPEAT",
        "summary": "Instagram takes action against accounts that repeatedly post content violating intellectual property rights.",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
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
            "description": "Multiple valid intellectual property infringement reports against the same account",
            "example": "Pattern of copyright violations across multiple posts",
            "reason": "To identify accounts that systematically violate intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Account has repeatedly posted content that violates intellectual property rights",
          "Multiple valid infringement reports have been submitted against the account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram provides a counter-notification process for DMCA claims and allows users to retract intellectual property reports they have submitted.",
      "steps": [
        "Submit DMCA counter-notification if you believe content was wrongly removed",
        "Contact Instagram's DMCA designated agent for copyright-related appeals",
        "Retract intellectual property report if you submitted it in error"
      ]
    }
  },
  {
    "id": "instagram-new-1758540835830-3",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Reporting",
    "summary": "Policy and procedures for reporting impersonation accounts and fake profiles on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION",
        "summary": "Instagram allows users to report accounts that are impersonating them, requiring government-issued ID verification and only accepting reports from the impersonated person or their representative.",
        "quote": "If someone created an Instagram account pretending to be you, you can report it to us. Make sure to provide all the requested info, including a photo of your government-issued ID. We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent).",
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
            "description": "Photo of government-issued ID",
            "example": "Driver's license, passport, or state ID",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "All requested information in the report form",
            "example": "Details about the impersonating account and evidence of impersonation",
            "reason": "To provide complete information for Instagram to investigate the impersonation claim"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the person being impersonated or their authorized representative",
          "Required identification documentation is provided"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758540835830-4",
    "reference": "META-TOS-2025",
    "title": "Meta Terms of Service (Effective January 1, 2025)",
    "summary": "Updated terms of service for Meta platforms including Instagram, with new provisions for content licensing and AI training.",
    "url": "https://www.facebook.com/terms/",
    "accessTimestamp": "2025-09-22T11:33:55.830Z",
    "policies": [
      {
        "id": "meta-tos-content-ownership",
        "reference": "META-TOS-2025-3.2.1",
        "summary": "Users cannot share content they do not own or lack necessary rights to share, including content that infringes intellectual property rights.",
        "quote": "You may not use our Products to do or share anything: That you do not own or have the necessary rights to share. That infringes or breaches someone else's rights, including their intellectual property rights (such as by infringing another's copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or limitation applies under applicable law.",
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
            "example": "Copyright registration, original files, or licensing agreements",
            "reason": "To establish legitimate claim to the content"
          }
        ],
        "removalCriteria": [
          "Content shared without ownership or necessary rights",
          "Content that infringes intellectual property rights",
          "Content that breaches someone else's rights"
        ]
      },
      {
        "id": "meta-tos-content-removal",
        "reference": "META-TOS-2025-3.2",
        "summary": "Meta can remove, block or restrict content that breaches their provisions and will notify users with options for review unless violations are serious or repeated.",
        "quote": "We can remove, block or restrict content that is in breach of these provisions. We can also suspend or disable your account for conduct that violates these provisions, as provided in Section 4.2. If we remove, block or restrict content that you have shared for violation of the Community Standards we'll let you know and explain any options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal liability; harm our community of users; compromise or interfere with the integrity or operation of any of our services, systems or Products; where we are restricted due to technical limitations; or where we are prohibited from doing so for legal reasons.",
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
            "description": "Report of content that breaches Meta's terms or Community Standards",
            "example": "Link to violating content and explanation of violation",
            "reason": "To identify and assess policy violations"
          }
        ],
        "removalCriteria": [
          "Content that breaches Meta's Terms of Service",
          "Content that violates Community Standards",
          "Content that poses legal liability risks",
          "Content that harms the community or compromises system integrity"
        ]
      },
      {
        "id": "meta-tos-reporting-system",
        "reference": "META-TOS-2025-3.2",
        "summary": "Meta encourages users to report content or conduct that breaches their rights, including intellectual property rights, or violates terms and policies.",
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
            "description": "Identification of content that breaches rights or policies",
            "example": "URL of violating content and description of how rights are breached",
            "reason": "To enable Meta to investigate and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that breaches user rights",
          "Content that violates intellectual property rights",
          "Content that violates Meta's terms and policies"
        ]
      },
      {
        "id": "meta-tos-content-deletion",
        "reference": "META-TOS-2025-3.3.3",
        "summary": "Users can delete individual content at any time, with deletion taking up to 90 days to complete from systems and backups, with exceptions for legal and safety reasons.",
        "quote": "You can delete individual content you share, post, and upload at any time. In addition, all content posted to your personal account will be deleted if you delete your account. It may take up to 90 days to delete content after we begin the account deletion process or receive a content deletion request. If you send content to trash, the deletion process will automatically begin in 30 days unless you choose to delete the content sooner. While the deletion process for such content is being undertaken, the content is no longer visible to other users.",
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
            "description": "User account access to delete own content",
            "example": "Logged-in account ownership",
            "reason": "To verify user has authority to delete the content"
          }
        ],
        "removalCriteria": [
          "User request to delete their own content",
          "Account deletion request",
          "Content sent to trash folder"
        ]
      },
      {
        "id": "meta-tos-account-termination",
        "reference": "META-TOS-2025-4.2",
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
            "description": "Documentation of repeated policy violations or intellectual property infringement",
            "example": "Multiple reports of violations or IP infringement notices",
            "reason": "To establish pattern of serious violations warranting account action"
          }
        ],
        "removalCriteria": [
          "Clear, serious or repeated breaches of Terms or Policies",
          "Repeated intellectual property rights infringement",
          "Legal requirements for account termination",
          "Violations of Community Standards"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta provides options to request review of content removal decisions unless violations are serious/repeated or legal restrictions apply. The Oversight Board may review some decisions.",
      "steps": [
        "Meta will notify users when content is removed for Community Standards violations",
        "Users are provided options to request another review of the decision",
        "Review options are not available for serious or repeated violations",
        "Some decisions may be reviewed by the independent Oversight Board",
        "Appeals may not be available due to legal liability, community harm, or technical limitations"
      ]
    }
  }
],
};
