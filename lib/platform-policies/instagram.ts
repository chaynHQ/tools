import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Comprehensive community standards covering safety, privacy, dignity, authenticity, and expression across Meta platforms including Instagram, with specific policies on bullying, harassment, NCII, and content enforcement.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "META-CS-ASE",
        "summary": "Prohibits adult sexual exploitation, including non-consensual intimate imagery, sextortion, and threats to share intimate content.",
        "quote": "We prohibit adult sexual exploitation, including non-consensual intimate imagery (NCII), sextortion, and threats to share intimate content.",
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
        "reference": "META-CS-BH",
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
        "reference": "META-CS-PV",
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
        "reference": "META-CS-AI",
        "summary": "Prohibits impersonating others with intent to deceive or mislead, including using another person's images or identifying information without authorization.",
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
        "id": "meta-cs-inauthentic-behavior",
        "reference": "META-CS-IB",
        "summary": "Prohibits inauthentic behavior, including creating fake accounts or misrepresenting identity to deceive others.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL of the inauthentic account or content",
            "reason": "To identify the inauthentic behavior"
          },
          {
            "description": "Description of the inauthentic behavior",
            "reason": "To understand how the account or content is misleading others"
          }
        ],
        "removalCriteria": [
          "Account or content misrepresents identity or purpose",
          "Behavior is designed to deceive or mislead other users",
          "Account violates authentic identity requirements"
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
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
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
            "description": "A formal DMCA takedown notice submitted through Instagram's copyright form",
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
        "id": "ig-private-information-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods).",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Evidence that the information is private or confidential",
            "reason": "To establish that the content violates privacy expectations"
          },
          {
            "description": "Proof that the content was posted without permission",
            "reason": "To demonstrate lack of consent for sharing"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates privacy"
          }
        ],
        "removalCriteria": [
          "Content contains private or confidential information posted without the subject's permission"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information about identity.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that the account is impersonating another person",
            "reason": "To establish that impersonation is occurring"
          },
          {
            "description": "Proof of the authentic identity being impersonated",
            "reason": "To verify the legitimate identity"
          },
          {
            "description": "URL of the impersonating account or content",
            "reason": "To identify the specific account or content engaging in impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person without permission",
          "Account provides inaccurate information about the user's identity"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows removal of content that violates Terms of Use, Community Standards, or applicable law.",
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
          "response": null,
          "removal": {
            "value": 30,
            "unit": "days",
            "description": "Deletion process begins no more than 30 days after request, with up to 90 days to complete deletion"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that content violates Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Content removal is required by applicable law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Allows termination or disabling of accounts that violate Terms of Use, Community Standards, or repeatedly infringe intellectual property rights.",
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
            "description": "Evidence of Terms of Use or Community Standards violations",
            "reason": "To establish grounds for account termination"
          },
          {
            "description": "Documentation of repeated intellectual property infringement",
            "reason": "To demonstrate pattern of violations warranting termination"
          }
        ],
        "removalCriteria": [
          "Account repeatedly violates Terms of Use or Community Standards",
          "Account repeatedly infringes intellectual property rights",
          "Account creates risk or legal exposure for Instagram"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account actions with options to request review, except where legal liability or community harm may result.",
      "steps": [
        "Instagram will notify users when content is removed or accounts are restricted",
        "Users can request another review through the provided options",
        "Appeals are processed through Instagram's Complaints Handling Process",
        "Users can consult the Help Center if they believe their account was terminated in error"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Safety, Security and Integrity",
        "summary": "Prohibits harmful or unlawful behavior and requires removal of content reported for violations to promote safety, security and integrity",
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
            "description": "Report of harmful or unlawful behavior",
            "example": "Content that violates terms or policies",
            "reason": "To enable Meta to review and potentially remove violating content"
          }
        ],
        "removalCriteria": [
          "Content that constitutes harmful or unlawful behavior",
          "Content that violates Meta's terms or policies",
          "Content reported by users for violations"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "Section 10 - Legal Requests and Harm Prevention",
        "summary": "Requires access, preservation, use and sharing of information in response to legal requests and to prevent harm and promote safety",
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
            "example": "Court order from civil litigation or law enforcement request",
            "reason": "Required by law to comply with valid legal process"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests from third parties",
          "Content that threatens safety, security and integrity of users or the public",
          "Content that violates applicable law"
        ]
      },
      {
        "id": "meta-pp-identity-verification",
        "reference": "Legal Basis - Consent - Identity Verification",
        "summary": "Prohibits identity misuse and impersonation through face analysis and facial recognition technology for account verification",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation",
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Photo or video selfie for identity verification",
            "example": "Selfie photo when contacting support for account verification",
            "reason": "To verify identity and prevent impersonation or identity misuse"
          }
        ],
        "removalCriteria": [
          "Accounts engaged in impersonation",
          "Accounts involved in identity misuse",
          "Suspicious account activity"
        ]
      },
      {
        "id": "meta-pp-vital-interests",
        "reference": "Legal Basis - Vital Interests Protection",
        "summary": "Requires processing and sharing of information with law enforcement and others in emergencies to protect vital interests including life, health and wellbeing",
        "quote": "Protecting the vital interests of you and/or those of another person: We apply automated processing techniques, conduct manual (human) review and share information, including with law enforcement and others, in circumstances where someone's vital interests require protection, such as in the case of emergencies. These vital interests include protection of your life, physical or mental health, wellbeing or integrity or that of others, and detecting, removing, and reporting illegal content.",
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
            "description": "Evidence of emergency situation threatening vital interests",
            "example": "Content indicating threat to life, physical or mental health",
            "reason": "To protect vital interests including life, health, wellbeing or integrity"
          }
        ],
        "removalCriteria": [
          "Content threatening someone's vital interests in emergency situations",
          "Illegal content that threatens life, health or wellbeing",
          "Content requiring immediate removal to protect physical or mental health"
        ]
      },
      {
        "id": "meta-pp-public-interest-safety",
        "reference": "Legal Basis - Public Interest - Safety Promotion",
        "summary": "Requires sharing information with regulators and law enforcement to combat unlawful or harmful behavior in the public interest",
        "quote": "To promote safety, integrity and security: In limited fact specific circumstances, we will access, preserve and share your information with regulators, law enforcement or others where necessary to perform a task in the public interest. For example, we might share information with others for the purposes of combatting unlawful or harmful behaviour where it is in the public interest to do so and where the public interest is laid down in Union law or Member State law or other applicable law to which we are subject.",
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
            "description": "Evidence of unlawful or harmful behavior requiring public interest intervention",
            "example": "Content involving illegal activity or significant harm",
            "reason": "To combat unlawful or harmful behavior in the public interest"
          }
        ],
        "removalCriteria": [
          "Content involving unlawful or harmful behavior",
          "Content requiring intervention in the public interest",
          "Content subject to regulatory or law enforcement action"
        ]
      },
      {
        "id": "meta-pp-data-rights",
        "reference": "Section 7 - User Rights",
        "summary": "Provides users rights to access, correct, port, download, erase information and object to processing under data protection laws",
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
            "description": "Valid request to exercise data protection rights",
            "example": "Request to erase personal information or object to processing",
            "reason": "To comply with GDPR and data protection law requirements"
          }
        ],
        "removalCriteria": [
          "Information subject to valid erasure requests",
          "Processing subject to valid objection requests",
          "Information requested for download or portability"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can make complaints to supervisory authorities and contact Meta's Data Protection Officer for privacy-related issues",
      "steps": [
        "Contact Meta Platforms Ireland Limited online or by mail for privacy operations",
        "Contact the Data Protection Officer for Meta Platforms Ireland Limited",
        "Lodge a complaint with the Irish Data Protection Commission or local supervisory authority"
      ]
    }
  },
  {
    "id": "instagram-new-1758628971987-0",
    "reference": "IG-COPYRIGHT",
    "title": "Instagram Copyright Policy",
    "summary": "Comprehensive policy covering DMCA takedown procedures, copyright infringement reporting, and counter-notification processes for Instagram content.",
    "url": "https://help.instagram.com/454951664593304",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits copyright infringement and provides mechanisms for reporting unauthorized use of copyrighted content including images and videos",
        "quote": "Report copyright infringement on Instagram or Threads",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Information required to include in a copyright report to Instagram or Threads",
            "example": "URL link to the infringing photo or video on Instagram or Threads",
            "reason": "To identify and locate the specific content that allegedly infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content reported for intellectual property infringement",
          "Valid copyright infringement claim submitted through DMCA process"
        ]
      },
      {
        "id": "ig-dmca-process",
        "reference": "IG-COPYRIGHT-DMCA",
        "summary": "Processes Digital Millennium Copyright Act (DMCA) reports and counter-notifications for content removal and restoration",
        "quote": "How Instagram and Threads process United States Digital Millennium Copyright Act (DMCA) counter-notifications",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "DMCA-compliant copyright infringement notice",
            "example": "Formal DMCA takedown notice submitted to designated agent",
            "reason": "To comply with United States copyright law requirements for content removal"
          }
        ],
        "removalCriteria": [
          "Valid DMCA takedown notice received",
          "Content identified as infringing copyrighted material"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "DMCA counter-notification process available for users whose content was removed due to copyright claims",
      "steps": [
        "Submit DMCA counter-notification if you believe content was removed in error",
        "Instagram processes counter-notifications according to DMCA procedures"
      ]
    }
  },
  {
    "id": "instagram-new-1758628971987-1",
    "reference": "IG-HARASSMENT",
    "title": "Instagram Bullying and Harassment Reporting",
    "summary": "Policy and procedures for reporting harassment, bullying, and abusive behavior on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "ig-harassment-bullying-reporting",
        "reference": null,
        "summary": "Prohibits accounts established with intent to bully or harass another person and photos or comments intended to bully or harass someone",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
            "description": "Report the harassing account, photo, or comment through Instagram's reporting system",
            "example": "Use Instagram's built-in reporting feature to flag the content",
            "reason": "Required to initiate Instagram's review process for harassment and bullying violations"
          }
        ],
        "removalCriteria": [
          "Account is established with the intent of bullying or harassing another person",
          "Photo or comment is intended to bully or harass someone"
        ]
      },
      {
        "id": "ig-impersonation-reporting",
        "reference": null,
        "summary": "Addresses impersonation where someone is pretending to be you or someone else on Instagram",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
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
            "description": "Report the impersonating account through Instagram's impersonation reporting process",
            "example": "Use Instagram's specific impersonation reporting feature",
            "reason": "Required to verify identity and establish that unauthorized impersonation is occurring"
          }
        ],
        "removalCriteria": [
          "Someone is pretending to be you or someone else on Instagram"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "Community Standards",
        "summary": "Requires removal of accounts or posts that don't follow Instagram's Community Standards",
        "quote": "Learn how to report other accounts or posts that don't follow our Community Standards.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report accounts or posts that violate Community Standards through Instagram's reporting system",
            "example": "Use Instagram's reporting feature to flag content that violates community guidelines",
            "reason": "Required to initiate review process for Community Standards violations"
          }
        ],
        "removalCriteria": [
          "Account or post doesn't follow Instagram's Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758628971987-2",
    "reference": "META-NCII",
    "title": "Meta Non-Consensual Intimate Images Policy",
    "summary": "Comprehensive policy addressing non-consensual intimate imagery (NCII) abuse, including prevention tools and reporting mechanisms.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "meta-ncii-sharing-prohibition",
        "reference": "NCII Policy",
        "summary": "Strictly prohibits the sharing of non-consensual intimate images (NCII) and considers sharing or threatening to share intimate images without consent as against Meta policies.",
        "quote": "Sharing – or threatening to share – intimate images without consent is against Meta policies.",
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
            "example": "Use the specific reporting flow for intimate image abuse on Facebook, Instagram, or Messenger",
            "reason": "To enable Meta's specialized teams to review and take action on violating content"
          }
        ],
        "removalCriteria": [
          "Content involves sharing intimate images without consent",
          "Content involves threatening to share intimate images without consent"
        ]
      },
      {
        "id": "meta-sextortion-prohibition",
        "reference": "Sextortion Policy",
        "summary": "Prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and considers this behavior as content or behavior that exploits people.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. We have strict rules against content or behaviour that exploits people, including sharing or threatening to share someone's intimate images.",
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
            "description": "Report the threatening behavior or content",
            "example": "Report accounts attempting sextortion through the dedicated reporting systems",
            "reason": "To enable automated systems and specialized teams to detect, investigate and remove these criminal accounts"
          }
        ],
        "removalCriteria": [
          "Content involves threats to reveal intimate images to coerce behavior",
          "Behavior involves attempting to force someone to send money, additional images, or have sexual contact using intimate image threats"
        ]
      },
      {
        "id": "meta-automated-detection-enforcement",
        "reference": "Enforcement Systems",
        "summary": "Operates automated systems that detect and remove accounts associated with sextortion patterns at scale, with specialized teams investigating and removing criminal accounts.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Pattern recognition through automated systems",
            "example": "Behavioral patterns associated with sextortion activities",
            "reason": "To proactively identify and remove criminal accounts before they cause harm"
          }
        ],
        "removalCriteria": [
          "Account exhibits patterns associated with sextortion behavior",
          "Account is identified through automated detection systems as engaging in exploitative behavior"
        ]
      },
      {
        "id": "meta-teen-protection-messaging",
        "reference": "Teen Protection Policies",
        "summary": "Restricts adults over 18 from starting private chats with teens they're not connected to and limits message requests to text-only until the recipient accepts the chat request.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
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
            "description": "Age verification and connection status",
            "example": "System verification that adult is not connected to teen user",
            "reason": "To prevent unwanted contact and potential sextortion attempts targeting minors"
          }
        ],
        "removalCriteria": [
          "Adult over 18 attempting to initiate private chat with unconnected teen",
          "Message request contains images, videos, or voice notes before chat acceptance"
        ]
      },
      {
        "id": "meta-24-7-review-process",
        "reference": "Review Process",
        "summary": "Reviews reports 24/7 in more than 70 languages and takes action on violating content and behavior related to intimate image abuse and threats.",
        "quote": "Our teams review reports 24/7 in more than 70 languages and will take action on violating content and behaviour.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": {
          "response": {
            "value": null,
            "unit": null,
            "description": "Teams review reports 24/7 in more than 70 languages"
          },
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report submitted through official reporting channels",
            "example": "Report filed through Facebook, Instagram, or Messenger reporting systems",
            "reason": "To enable multilingual review teams to assess and take action on violating content"
          }
        ],
        "removalCriteria": [
          "Content violates policies against intimate image sharing",
          "Behavior violates policies against threats or exploitation"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758628971987-3",
    "reference": "IG-IMPERSONATION",
    "title": "Instagram Impersonation Reporting Policy",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals or entities on Instagram.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T12:02:51.988Z",
    "policies": [
      {
        "id": "ig-impersonation-reporting",
        "reference": "IG-IMPERSONATION",
        "summary": "Prohibits impersonation accounts and provides reporting mechanism for users whose identity is being impersonated on the platform",
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
            "description": "Government-issued photo identification",
            "example": "Driver's license, passport, or state ID card",
            "reason": "Required to verify the identity of the person being impersonated and confirm legitimacy of the report"
          },
          {
            "description": "Complete report information as requested in the form",
            "example": "Details about the impersonating account and how it violates policy",
            "reason": "Provides Instagram with necessary information to investigate and take action on the impersonation"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another person",
          "Report is submitted by the person being impersonated or their authorized representative",
          "Required identification and information is provided"
        ]
      },
      {
        "id": "ig-impersonation-reporter-restrictions",
        "reference": "IG-IMPERSONATION",
        "summary": "Restricts impersonation reporting to the affected individual or their authorized representative, ensuring reports come from legitimate sources",
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
            "description": "Verification that reporter is the impersonated person or authorized representative",
            "example": "Parent reporting on behalf of minor child",
            "reason": "Ensures only legitimate parties can request removal of impersonation accounts"
          }
        ],
        "removalCriteria": [
          "Report must be submitted by the person being impersonated",
          "Report must be submitted by an authorized representative of the impersonated person"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
