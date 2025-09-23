import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
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
        "id": "meta-cs-bullying-harassment",
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
        "id": "meta-cs-privacy-violations",
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
            "description": "Identification of the specific PII that was shared",
            "reason": "To assess the severity and scope of the privacy violation"
          }
        ],
        "removalCriteria": [
          "Content consists of private media shared without consent",
          "The sharing of the content violates a reasonable expectation of privacy",
          "Content contains PII used maliciously",
          "Information is shared without consent and is intended to harass or incite harassment"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "META-CS-AUTHENTIC-IDENTITY-REPRESENTATION",
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
            "description": "URL of the impersonating profile",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Proof of identity",
            "example": "Government-issued ID for a person or business documents for an organization",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, photos, or other identifying information without authorization",
          "The profile is intended to mislead or deceive others about who is behind it",
          "The account is not clearly marked as a parody or fan account"
        ]
      },
      {
        "id": "meta-cs-safety-commitment",
        "reference": "META-CS-SAFETY",
        "summary": "Prohibits content that could contribute to a risk of harm to physical security and content that threatens, intimidates, excludes or silences others.",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
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
            "description": "URL(s) of the threatening content",
            "reason": "To locate and assess the threatening material"
          },
          {
            "description": "Description of the threat and potential harm",
            "reason": "To evaluate the severity and credibility of the threat"
          },
          {
            "description": "Information identifying the target of the threat",
            "reason": "To verify the threat and assess risk to physical security"
          }
        ],
        "removalCriteria": [
          "Content could contribute to a risk of harm to physical security",
          "Content threatens people with potential to intimidate, exclude or silence",
          "Content creates safety risks for individuals or communities"
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
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-copyright-policy",
        "reference": "IG-TOU-IP",
        "summary": "Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "Proof of ownership or necessary rights to the content",
            "reason": "To establish copyright ownership and unauthorized use"
          },
          {
            "description": "URL(s) of the infringing content",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights including copyright infringement",
          "Content is posted without permission from the rights holder"
        ]
      },
      {
        "id": "ig-private-information-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
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
            "description": "Evidence that the information is private or confidential",
            "reason": "To establish the private nature of the shared information"
          },
          {
            "description": "Proof that permission was not granted",
            "reason": "To demonstrate unauthorized sharing"
          },
          {
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the specific content violating privacy"
          }
        ],
        "removalCriteria": [
          "Content contains someone else's private or confidential information",
          "Content was posted without permission from the affected person"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information about identity.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of impersonation or false identity claims",
            "reason": "To establish that the account is impersonating another person"
          },
          {
            "description": "Proof of your actual identity if you are the person being impersonated",
            "reason": "To verify you are the legitimate person being impersonated"
          }
        ],
        "removalCriteria": [
          "Account impersonates someone or something they are not",
          "Account was created for someone else without their express permission",
          "Account provides inaccurate information about identity"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of content that violates Terms of Use, policies, or applicable law.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Terms of Use or policies",
            "reason": "To establish grounds for content removal"
          },
          {
            "description": "Specific policy violations with supporting documentation",
            "reason": "To identify which terms or policies have been violated"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's policies including Community Standards",
          "Content removal is required by applicable law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows termination or disabling of accounts that violate terms, create risk, or repeatedly infringe intellectual property rights.",
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
            "description": "Documentation of repeated violations or policy breaches",
            "reason": "To establish pattern of violations warranting account termination"
          },
          {
            "description": "Evidence of intellectual property infringement if applicable",
            "reason": "To support claims of repeated IP violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Account termination is required by law"
        ]
      },
      {
        "id": "ig-deletion-timeline-policy",
        "reference": "IG-TOU-6",
        "summary": "Provides specific timeframes for content and account deletion processes.",
        "quote": "When you request to delete content or your account, the deletion process will automatically begin no more than 30 days after your request. It may take up to 90 days to delete content after the deletion process begins. While the deletion process for such content is being undertaken, the content is no longer visible to other users, but remains subject to these Terms of Use and our Privacy Policy. After the content is deleted, it may take us up to another 90 days to remove it from backups and disaster recovery systems.",
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
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request"
          },
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Up to 90 days to delete content after deletion process begins, plus up to another 90 days to remove from backups"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Request for content or account deletion",
            "reason": "To initiate the deletion process"
          }
        ],
        "removalCriteria": [
          "User requests content deletion",
          "User requests account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides options to request review of content removal and account termination decisions, with notification of available review options unless legal restrictions apply.",
      "steps": [
        "Instagram will notify users when content is removed or accounts are terminated",
        "Users will be provided with options to request another review unless doing so may expose Instagram or others to legal liability",
        "Users can access Instagram's Help Center for guidance on appeals and account recovery",
        "Users who believe their account was terminated in error can consult the Help Center for restoration options"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Processes information to promote safety, security and integrity, including detecting and preventing harmful or unlawful behavior, investigating suspicious activity, and removing content reported by users.",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts, identity and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Detect and prevent spam and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
          "Violations of Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content that threatens safety, security or integrity"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Accesses, preserves, uses and shares user information in response to legal requests, to comply with applicable law, and to promote safety, security and integrity of Meta Products and users.",
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
            "example": "Court order from civil litigation or law enforcement warrant",
            "reason": "Required by law for Meta to disclose user information"
          }
        ],
        "removalCriteria": [
          "Valid legal request requiring disclosure or removal",
          "Applicable law requirements",
          "Threats to safety, security and integrity of users or the public"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "Legal Basis - Consent",
        "summary": "Verifies user identity or account and helps protect against suspicious activity including impersonation and identity misuse using face analysis, which may include facial recognition technology if selected by the user.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Account information, account photos, or photo/video selfie if chosen to provide",
            "example": "Profile photo or selfie for identity verification",
            "reason": "To verify account authenticity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Suspicious activity detected",
          "Impersonation attempts",
          "Identity misuse"
        ]
      },
      {
        "id": "meta-pp-data-retention",
        "reference": "Section 8 - Information Retention",
        "summary": "Retains information as long as needed to provide products, comply with legal obligations, or protect interests, and may preserve information for extended periods for specific legitimate purposes including preventing harm and investigating violations.",
        "quote": "We keep information as long as we need it to provide our Products, comply with legal obligations or protect our or other's interests. We decide how long we need information on a case-by-case basis. In some instances and for specific reasons, we'll keep information for an extended period of time.",
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
            "description": "Legitimate purpose for extended retention",
            "example": "Legal obligation, safety concern, or policy violation investigation",
            "reason": "To comply with legal requirements or protect user safety"
          }
        ],
        "removalCriteria": [
          "Information no longer needed for product provision",
          "Legal retention period expired",
          "User requests deletion where legally permissible"
        ]
      },
      {
        "id": "meta-pp-user-rights-access",
        "reference": "Section 7 - User Rights - Access and Correct",
        "summary": "Provides users the right to access and correct their information stored by Meta under GDPR and other data protection laws.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Access and correct information",
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
            "description": "User identity verification for account access",
            "example": "Account credentials or identity verification",
            "reason": "To ensure information is provided only to the rightful account owner"
          }
        ],
        "removalCriteria": [
          "User requests access to their stored information",
          "User requests correction of inaccurate information"
        ]
      },
      {
        "id": "meta-pp-user-rights-erase",
        "reference": "Section 7 - User Rights - Erase Information",
        "summary": "Provides users the right to request erasure of their information under GDPR and other data protection laws.",
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
            "description": "Valid erasure request under applicable data protection law",
            "example": "GDPR Article 17 right to erasure request",
            "reason": "To comply with user's data protection rights"
          }
        ],
        "removalCriteria": [
          "User exercises right to erasure under data protection law",
          "Information no longer necessary for original processing purpose",
          "User withdraws consent where processing was based on consent"
        ]
      },
      {
        "id": "meta-pp-user-rights-object",
        "reference": "Section 7 - User Rights - Object",
        "summary": "Provides users the right to object to processing of their information under GDPR and other data protection laws.",
        "quote": "You have the following rights under GDPR and other relevant data protection laws: Object",
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
            "description": "Valid objection to processing under applicable data protection law",
            "example": "Objection to processing based on legitimate interests",
            "reason": "To respect user's data protection rights and assess objection validity"
          }
        ],
        "removalCriteria": [
          "User objects to processing and no compelling legitimate grounds exist",
          "Processing not needed for legal reasons",
          "User's interests or fundamental rights outweigh processing grounds"
        ]
      },
      {
        "id": "meta-pp-information-sharing-third-parties",
        "reference": "Section 4 - Information Sharing with Third Parties",
        "summary": "Prohibits selling user information to anyone and requires partners and third parties to follow rules about how they can use and disclose information provided by Meta.",
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
            "description": "Evidence of unauthorized information sale or misuse by partners",
            "example": "Documentation showing violation of data use agreements",
            "reason": "To enforce data protection commitments and partner agreements"
          }
        ],
        "removalCriteria": [
          "Partners violate rules about information use and disclosure",
          "Unauthorized sale or transfer of user information",
          "Misuse of shared information by third parties"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can make complaints to data protection authorities and have certain decisions reviewed by the Oversight Board, with rights to object to processing and seek restriction of processing under data protection laws.",
      "steps": [
        "Contact Meta through provided channels for privacy-related concerns",
        "Submit objection or restriction request through Facebook or Instagram settings",
        "Lodge complaint with Meta's lead supervisory authority (Irish Data Protection Commission) or local supervisory authority",
        "For content decisions, some cases may be reviewed by the Oversight Board"
      ]
    }
  },
  {
    "id": "instagram-new-1758628922493-0",
    "reference": "IG-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy addressing bullying, harassment, and intimidation on Instagram with heightened protection for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-bh-unwanted-contact",
        "reference": "Tier 1",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at a large number of individuals with no prior solicitation",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated contact or sexually harassing messages",
            "example": "Screenshots of multiple unwanted messages or sexually explicit communications",
            "reason": "To demonstrate pattern of unwanted contact or sexual harassment"
          }
        ],
        "removalCriteria": [
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at large number of individuals with no prior solicitation"
        ]
      },
      {
        "id": "ig-bh-severe-sexualized-commentary",
        "reference": "Tier 1",
        "summary": "Prohibits severe sexualized commentary and derogatory sexualized photoshop or drawings",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content containing severe sexualized commentary or derogatory sexualized manipulated images",
            "example": "Screenshots of posts with explicit sexual commentary or manipulated sexual images",
            "reason": "To identify content that degrades individuals through sexual commentary or imagery"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content contains derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "ig-bh-sexual-activity-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content using derogatory sexual terms to attack individuals",
            "example": "Posts or comments calling someone derogatory sexual names",
            "reason": "To identify harassment based on sexual activity-related slurs"
          }
        ],
        "removalCriteria": [
          "Content attacks individuals using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-bh-private-info-threats",
        "reference": "Tier 1",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to release private contact information or medical records",
            "example": "Screenshots of messages threatening to share someone's address, phone number, or medical information",
            "reason": "To identify doxing threats and privacy violations"
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
        "id": "ig-bh-sexual-activity-claims",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures, except in context of criminal allegations against adults",
        "quote": "In addition to the universal protections for everyone, all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content making claims about someone's sexual activity",
            "example": "Posts claiming someone engaged in specific sexual acts or behaviors",
            "reason": "To protect privacy and prevent sexual harassment through false or unwanted claims"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "ig-bh-adult-sexualization",
        "reference": "Tier 2",
        "summary": "Prohibits content sexualizing adults when targeting minors, private adults and limited scope public figures",
        "quote": "Content sexualizing another adult (sexualization of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content that sexualizes an adult individual",
            "example": "Posts focusing on someone's body parts in a sexual manner or making sexual commentary about their appearance",
            "reason": "To prevent sexual objectification and harassment"
          }
        ],
        "removalCriteria": [
          "Content sexualizes another adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-bh-unwanted-manipulated-imagery",
        "reference": "Tier 3",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private individuals",
        "quote": "When self-reported, private minors, private adults, and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from target and evidence of manipulated imagery",
            "example": "Report from the person depicted and screenshots of manipulated photos or videos",
            "reason": "To verify the content is unwanted and has been digitally altered"
          }
        ],
        "removalCriteria": [
          "Content contains manipulated imagery",
          "Target has self-reported the content as unwanted",
          "Target is private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "ig-bh-romantic-involvement-claims",
        "reference": "Tier 3",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private individuals",
        "quote": "In addition to all the protections listed above, all private minors, private adults (who must self-report), and minor involuntary public figures are protected from: Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Self-report from target and evidence of unwanted claims about personal relationships or identity",
            "example": "Report from affected person and screenshots of posts making claims about their romantic life or identity",
            "reason": "To protect privacy regarding personal relationships and identity"
          }
        ],
        "removalCriteria": [
          "Content makes claims about romantic involvement, sexual orientation or gender identity",
          "Target is private individual who has self-reported",
          "Target is minor involuntary public figure"
        ]
      },
      {
        "id": "ig-bh-unwanted-pages-groups",
        "reference": "Additional Requirements",
        "summary": "Prohibits content targeting private individuals through unwanted Pages, Groups and Events when reported by target",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report from target or authorized representative and evidence of targeting through Pages, Groups or Events",
            "example": "Report from affected person and links to Pages, Groups or Events created to target them",
            "reason": "To verify the targeting is unwanted and remove harassment infrastructure"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups or Events",
          "Content is reported by target or authorized representative"
        ]
      },
      {
        "id": "ig-bh-public-figure-sexualization",
        "reference": "Additional Requirements",
        "summary": "Prohibits content sexualizing public figures when confirmed unwanted by target",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from target or authorized representative that sexualizing content is unwanted",
            "example": "Statement from public figure or their representative requesting removal of sexualized content",
            "reason": "To verify the public figure considers the sexualized content unwanted"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "ig-bh-sexually-harassing-contact",
        "reference": "Additional Requirements",
        "summary": "Prohibits sexually harassing contact when confirmed unwanted by recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Confirmation from recipient that sexually harassing contact is unwanted",
            "example": "Statement from recipient or authorized representative confirming the sexual contact is unwanted",
            "reason": "To verify the recipient considers the sexual contact harassment"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Recipient or authorized representative confirms contact is unwanted"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content decisions through the Support Inbox and request another review if they believe the decision was incorrect",
      "steps": [
        "Report content through universal reporting option",
        "Receive notification of review decision",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request for another review if disagreeing with decision",
        "Receive final response after re-review in Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758628922493-1",
    "reference": "IG-CR",
    "title": "Copyright Policy and DMCA Procedures",
    "summary": "Comprehensive copyright infringement reporting procedures including DMCA takedown and counter-notification processes.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-cr-copyright-infringement",
        "reference": "Copyright Policy",
        "summary": "Prohibits posting content that violates someone else's intellectual property rights and processes DMCA takedown requests for copyrighted material used without permission",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form. What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights. How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete the copyright infringement reporting form",
            "example": "Use the provided online form to submit your copyright claim",
            "reason": "Required to initiate DMCA takedown process and provide necessary legal information"
          },
          {
            "description": "Information required in copyright report as specified by platform",
            "example": "Details about the copyrighted work and infringing content location",
            "reason": "Needed to process DMCA takedown request according to legal requirements"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid DMCA takedown notice is submitted through proper channels",
          "Content violates someone else's intellectual property rights"
        ]
      },
      {
        "id": "ig-cr-repeat-infringement",
        "reference": "Copyright Policy",
        "summary": "Takes action against accounts that repeatedly post content violating intellectual property rights, including potential account restrictions or termination",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Pattern of multiple intellectual property violations",
            "example": "Multiple valid DMCA takedown notices against the same account",
            "reason": "Demonstrates repeat infringement behavior warranting escalated enforcement action"
          }
        ],
        "removalCriteria": [
          "Account has repeatedly posted content that violates intellectual property rights",
          "Multiple valid copyright infringement reports have been filed against the account"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Instagram processes DMCA counter-notifications for users who believe their content was wrongly removed due to copyright claims",
      "steps": [
        "Submit a DMCA counter-notification if you believe content was wrongly removed",
        "Instagram will process the counter-notification according to DMCA procedures",
        "Users can retract intellectual property reports they have submitted"
      ]
    }
  },
  {
    "id": "instagram-new-1758628922493-2",
    "reference": "IG-IP",
    "title": "Intellectual Property Policy",
    "summary": "General intellectual property protection guidelines covering copyright, trademark, and other IP rights.",
    "url": "https://help.instagram.com/535503073130320",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-ip-copyright",
        "reference": "Copyright Section",
        "summary": "Prohibits posting content that violates someone else's copyright, including original works of authorship such as books, music, film, and art",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. Copyright is a legal right that seeks to protect original works of authorship (example: books, music, film, art).",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright ownership or authorization",
            "example": "Original creation documentation, registration certificates, or proof of authorized use",
            "reason": "To establish legitimate copyright ownership and violation of protected works"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content uses original works of authorship without permission"
        ]
      },
      {
        "id": "ig-ip-trademark",
        "reference": "Trademark Section",
        "summary": "Prohibits content that violates trademark rights, including unauthorized use of words, slogans, symbols or designs that distinguish products or services",
        "quote": "The Instagram Terms of Use do not allow posting content that violates someone else's intellectual property rights, including copyright and trademark. A trademark is a word, slogan, symbol or design (example: brand name, logo) that distinguishes the products or services offered by one person, group or company from another.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of trademark ownership or registration",
            "example": "Trademark registration documents, proof of commercial use, or brand ownership documentation",
            "reason": "To establish legitimate trademark rights and prevent consumer confusion"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's trademark rights",
          "Content causes confusion about who provides or is affiliated with a product or service"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758628922493-3",
    "reference": "IG-IMP",
    "title": "Impersonation Policy",
    "summary": "Policy addressing fake accounts and impersonation, including reporting procedures for unauthorized use of identity.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-imp-impersonation-report",
        "reference": "IG-IMP",
        "summary": "Prohibits impersonation accounts and provides reporting mechanism for users whose identity is being impersonated",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us. Make sure to provide all the requested info, including a photo of your government-issued ID.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Photo of government-issued ID",
            "example": "Driver's license, passport, or other official identification document",
            "reason": "Required to verify the identity of the person being impersonated"
          },
          {
            "description": "All requested information in the report form",
            "example": "Details about the impersonating account and evidence of impersonation",
            "reason": "Needed to process the impersonation report effectively"
          }
        ],
        "removalCriteria": [
          "Account created pretending to be another person",
          "Report submitted by the person being impersonated or their authorized representative"
        ]
      },
      {
        "id": "ig-imp-authorized-reporter",
        "reference": "IG-IMP",
        "summary": "Restricts impersonation reports to the impersonated person or their authorized representative only",
        "quote": "We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent). If someone you know is being impersonated, please encourage that person to report it.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report must be submitted by the impersonated person or their authorized representative",
            "example": "Parent reporting on behalf of their child",
            "reason": "Ensures only legitimate parties can request removal of impersonation accounts"
          }
        ],
        "removalCriteria": [
          "Report submitted by the person being impersonated",
          "Report submitted by an authorized representative of the impersonated person"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758628922493-4",
    "reference": "IG-NCII",
    "title": "Non-Consensual Intimate Images Support",
    "summary": "Support resources and reporting procedures for non-consensual intimate image sharing.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T12:02:02.493Z",
    "policies": [
      {
        "id": "ig-ncii-reporting",
        "reference": "Report the post",
        "summary": "Prohibits intimate photos shared without consent and provides anonymous reporting mechanism for content that violates Community Standards",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Screenshot or record of the post",
            "example": "Screenshot of the intimate image post for reporting purposes",
            "reason": "Needed as evidence for reporting and potential legal action"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Intimate photos shared without consent",
          "Threats to share private content"
        ]
      },
      {
        "id": "ig-ncii-removal-process",
        "reference": "Report the post",
        "summary": "Removes reported intimate images that violate Community Standards and uses photo-matching technology to prevent future sharing across Instagram, Facebook and Messenger",
        "quote": "After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards. We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report submitted through built-in reporting system",
            "example": "Anonymous report of intimate image post",
            "reason": "Required to initiate review by Community Operations team"
          }
        ],
        "removalCriteria": [
          "Image violates Community Standards",
          "Content identified as non-consensual intimate imagery"
        ]
      },
      {
        "id": "ig-ncii-sextortion",
        "reference": "Report the post",
        "summary": "Prohibits threatening to share private content, demanding money, or coercing users into uncomfortable actions",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report of threatening behavior through built-in reporting",
            "example": "Report of user threatening to share private photos unless money is paid",
            "reason": "Required to investigate sextortion and coercive behavior"
          }
        ],
        "removalCriteria": [
          "Threats to share private content",
          "Demands for money in exchange for not sharing content",
          "Coercing users into uncomfortable actions"
        ]
      },
      {
        "id": "ig-ncii-third-party-reporting",
        "reference": "Report the post",
        "summary": "Allows reporting of violating content through a friend's account for users without Instagram accounts",
        "quote": "If you don't have an Instagram account, you can report things with the help of a friend.",
        "contentTypes": [
          "intimate",
          "private",
          "personal"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Third-party report submitted through friend's account",
            "example": "Friend reporting intimate image on behalf of victim without Instagram account",
            "reason": "Enables reporting for users who don't have platform accounts"
          }
        ],
        "removalCriteria": [
          "Content violates Community Standards",
          "Valid third-party report submitted"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
