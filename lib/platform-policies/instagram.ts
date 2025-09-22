import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Meta Community Standards",
    "summary": "Unified community guidelines covering prohibited content and behavior across Meta platforms including Instagram, with specific sections on NCII, harassment, bullying, privacy violations, and impersonation.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
    "policies": [
      {
        "id": "meta-cs-adult-sexual-exploitation",
        "reference": "META-CS-ASE",
        "summary": "Prohibits adult sexual exploitation including non-consensual sharing of intimate images and sextortion.",
        "quote": "We prohibit content that sexually exploits or endangers adults. We remove content that facilitates, encourages or coordinates sexual encounters or commercial sexual services between adults such as prostitution or escort services. We also remove content that depicts, threatens to share, or shares intimate images without the consent of the person pictured.",
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
            "description": "URL(s) of the content depicting or threatening to share intimate images",
            "reason": "To locate and identify the specific violating content"
          },
          {
            "description": "Statement that the intimate images were shared without consent",
            "reason": "To establish the non-consensual nature of the sharing"
          },
          {
            "description": "Information to identify the victim in the content",
            "reason": "To verify the complaint and process removal"
          }
        ],
        "removalCriteria": [
          "Content depicts, threatens to share, or shares intimate images without consent",
          "Content facilitates or coordinates sexual exploitation of adults",
          "Content involves sextortion or threats to share intimate media"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "META-CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a form of harassment.",
        "quote": "We define bullying and harassment as repeated behavior that's intended to degrade, intimidate, or silence someone. We also prohibit content that's shared to 'shame' someone, including, for example, claims about someone's sexual activity.",
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
            "description": "Description of how the content constitutes bullying or harassment",
            "reason": "To assess the nature and severity of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the victim and process the report"
          }
        ],
        "removalCriteria": [
          "Content is intended to degrade, intimidate, or silence someone",
          "Content is shared to shame someone, including claims about sexual activity",
          "Content represents repeated harassing behavior"
        ]
      },
      {
        "id": "meta-cs-privacy-violations",
        "reference": "META-CS-PRIVACY",
        "summary": "Prohibits sharing private information without consent, including intimate images and personal identifying information.",
        "quote": "We remove content that shares, offers or asks for personally identifiable information or other private information that could be used to conduct identity theft, fraud or other privacy violations. We also provide people ways to report imagery that may have been shared without their permission.",
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
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of what private information was shared without permission",
            "reason": "To understand the scope of the privacy violation"
          },
          {
            "description": "Statement that the information was shared without consent",
            "reason": "To establish the unauthorized nature of the sharing"
          }
        ],
        "removalCriteria": [
          "Content shares personally identifiable information without consent",
          "Content contains private information that could enable identity theft or fraud",
          "Imagery is shared without the depicted person's permission"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "META-CS-IDENTITY",
        "summary": "Prohibits impersonating others by using their name, photos, or other identifying information without authorization.",
        "quote": "We require people to use the name they go by in everyday life so that you always know who you're connecting with. We remove accounts that impersonate others by using someone else's name and photos.",
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
            "description": "URL of the impersonating account or content",
            "reason": "To identify the impersonating profile or post"
          },
          {
            "description": "Proof of your identity",
            "example": "Government-issued ID or other official documentation",
            "reason": "To verify you are the person being impersonated"
          },
          {
            "description": "Description of how the account is impersonating you",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses someone else's name and photos without authorization",
          "Profile is intended to mislead others about the account holder's identity",
          "Content misrepresents someone's identity for deceptive purposes"
        ]
      },
      {
        "id": "meta-cs-violent-graphic-content",
        "reference": "META-CS-VIOLENCE",
        "summary": "Restricts violent and graphic content while allowing some content with warnings for awareness and condemnation purposes.",
        "quote": "We remove content that glorifies violence or celebrates the suffering or humiliation of others because it may create an environment that discourages participation. We allow graphic content (with some limitations) to help people raise awareness about issues.",
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
            "description": "URL(s) of the violent or graphic content",
            "reason": "To locate and review the reported material"
          },
          {
            "description": "Description of why the content violates the policy",
            "reason": "To assess whether content glorifies violence or celebrates suffering"
          }
        ],
        "removalCriteria": [
          "Content glorifies violence or celebrates suffering or humiliation",
          "Content may discourage participation or create hostile environment",
          "Graphic content lacks awareness or educational purpose"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "ig-terms-of-use",
    "reference": "IG-TOU",
    "title": "Instagram Terms of Use",
    "summary": "Legal terms governing the use of Instagram, including content ownership and intellectual property rights. Updated January 1, 2025 with significant changes to content licensing, data usage, and arbitration clauses.",
    "url": "https://help.instagram.com/581066165581870",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
    "policies": [
      {
        "id": "ig-intellectual-property-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits posting someone else's private or confidential information without permission and violations of intellectual property rights including copyright infringement.",
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
            "description": "Documentation showing ownership or authorization to the content",
            "reason": "To establish rights to the content being shared without permission"
          },
          {
            "description": "URL(s) of the infringing content on Instagram",
            "reason": "To identify the specific content that violates intellectual property rights"
          }
        ],
        "removalCriteria": [
          "Content contains someone else's private or confidential information posted without permission",
          "Content violates intellectual property rights including copyright infringement"
        ]
      },
      {
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, and creating accounts for someone else without express permission.",
        "quote": "You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
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
            "description": "Evidence showing you are the person being impersonated",
            "reason": "To verify identity and establish that impersonation is occurring"
          },
          {
            "description": "URL of the impersonating account or specific posts",
            "reason": "To identify the account or content engaging in impersonation"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates someone without their permission",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove or restrict content that violates Terms of Use, policies including Community Standards, or as required by law.",
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
            "description": "Deletion process begins no more than 30 days after request, may take up to 90 days to complete"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Explanation of how the content violates Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal under platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that needs to be removed"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Content removal is required by law"
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
            "description": "Documentation of repeated violations or policy breaches",
            "reason": "To establish pattern of behavior warranting account termination"
          },
          {
            "description": "Evidence of intellectual property infringement if applicable",
            "reason": "To support claims of repeated IP violations"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account repeatedly violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights",
          "Account termination is required by law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Instagram provides notification of content removal and account termination with options to request review, unless doing so may expose Instagram or others to legal liability or harm the community.",
      "steps": [
        "Instagram will notify you of content removal or account action",
        "Instagram will explain any options available to request another review",
        "Consult Instagram's Help Center if you believe your account was terminated in error",
        "Use available review options unless restricted due to legal, technical, or safety reasons"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms. Updated with enhanced transparency about data collection practices and user controls.",
    "url": "https://www.facebook.com/privacy/policy",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
    "policies": [
      {
        "id": "meta-pp-harmful-content",
        "reference": "META-PP-SAFETY-INTEGRITY",
        "summary": "Meta removes harmful or unlawful content and takes action against violations of terms or policies through automated and manual review processes.",
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
            "description": "Content reported to Meta through their reporting systems",
            "example": "Using platform reporting tools to flag violating content",
            "reason": "Required for Meta to review and potentially remove harmful content"
          }
        ],
        "removalCriteria": [
          "Content violates Meta's terms or policies",
          "Content constitutes harmful or unlawful behavior",
          "Content is reported through proper channels and verified through review"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and civil litigants, and shares information to comply with applicable law and prevent harm.",
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
            "example": "Court order requesting removal of specific content",
            "reason": "Required to establish legal authority for content removal or information sharing"
          }
        ],
        "removalCriteria": [
          "Valid legal request from authorized parties",
          "Compliance with applicable law requirements",
          "Promotion of safety, security and integrity of platform and users"
        ]
      },
      {
        "id": "meta-pp-content-sharing-control",
        "reference": "META-PP-SHARING-CONTROL",
        "summary": "Users can control how their information is shared on Meta Products, including managing content others share about them and public content visibility.",
        "quote": "On Meta Products Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
        "contentTypes": [
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
            "description": "Access to platform privacy and sharing controls",
            "example": "Using Facebook/Instagram privacy settings to control content sharing",
            "reason": "Allows users to manage how their content is shared and viewed by others"
          }
        ],
        "removalCriteria": [
          "User has control over their own shared content",
          "Content sharing violates user's privacy settings",
          "Content is reshared without appropriate permissions"
        ]
      },
      {
        "id": "meta-pp-account-verification",
        "reference": "META-PP-IDENTITY-VERIFICATION",
        "summary": "Meta verifies accounts and identity to prevent impersonation and identity misuse, including through facial recognition technology when selected by users.",
        "quote": "Verifying your identity or account, or helping to protect against suspicious activity including impersonation and identity misuse, using face analysis which may include facial recognition technology if you select it.",
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
            "description": "Account information, account photos, or photo/video selfie if user chooses to provide it",
            "example": "Providing a selfie for identity verification to combat impersonation",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Account is determined to be impersonating another person",
          "Suspicious activity indicating identity misuse",
          "Failure to verify legitimate account ownership when requested"
        ]
      },
      {
        "id": "meta-pp-data-erasure",
        "reference": "META-PP-USER-RIGHTS",
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
            "description": "Valid request for data erasure under applicable data protection laws",
            "example": "GDPR erasure request for personal information",
            "reason": "Legal right to have personal data removed under data protection regulations"
          }
        ],
        "removalCriteria": [
          "Request meets legal requirements for data erasure",
          "Information qualifies for erasure under applicable data protection laws",
          "No overriding legitimate grounds for continued processing exist"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Meta has an Oversight Board that reviews certain content moderation decisions, and users can contact Meta with questions or complaints about their information.",
      "steps": [
        "Content moderation decisions may be reviewed by the Oversight Board in some cases",
        "Users can contact Meta online or by mail with questions, complaints or requests regarding their information",
        "Users can contact the Data Protection Officer for Meta Platforms Ireland Limited",
        "Users have the right to lodge a complaint with supervisory authorities"
      ]
    }
  },
  {
    "id": "instagram-new-1758553751988-0",
    "reference": "META-BH",
    "title": "Bullying and Harassment Policy",
    "summary": "Detailed policy covering bullying and harassment prevention, reporting mechanisms, and enforcement actions. Includes heightened protections for minors and specific provisions for harassment-based content removal.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
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
            "description": "Report showing pattern of unwanted contact",
            "example": "Multiple messages or contact attempts",
            "reason": "To establish repeated or harassing nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "meta-bh-sexual-statements",
        "reference": "META-BH-T1-SEXUAL",
        "summary": "Meta prohibits statements of intent to engage in sexual activity and severe sexualized commentary targeting individuals.",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity. Severe sexualized commentary.",
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
            "description": "Evidence of sexual statements or commentary",
            "example": "Screenshots of posts or messages containing sexual content",
            "reason": "To verify violation of sexual harassment policies"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content contains severe sexualized commentary",
          "Content advocates for engaging in sexual activity with specific person"
        ]
      },
      {
        "id": "meta-bh-derogatory-sexual",
        "reference": "META-BH-T1-DEROGATORY",
        "summary": "Meta removes derogatory sexualized content including photoshop/drawings and attacks through derogatory terms related to sexual activity.",
        "quote": "Derogatory sexualized photoshop or drawings. Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
            "description": "Evidence of derogatory sexualized content",
            "example": "Manipulated images or posts with sexual slurs",
            "reason": "To identify content that degrades individuals through sexual terms or imagery"
          }
        ],
        "removalCriteria": [
          "Content contains derogatory sexualized photoshop or drawings",
          "Content attacks individuals through derogatory sexual terms"
        ]
      },
      {
        "id": "meta-bh-private-info-threats",
        "reference": "META-BH-T1-PRIVACY",
        "summary": "Meta prohibits threats to release private information including phone numbers, addresses, email addresses, or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
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
            "description": "Evidence of threats to release private information",
            "example": "Posts or messages threatening to share personal details",
            "reason": "To verify threats against individual privacy"
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
            "description": "Evidence of claims about sexual activity",
            "example": "Posts making sexual claims about protected individuals",
            "reason": "To protect privacy and dignity of vulnerable individuals"
          },
          {
            "description": "Confirmation of individual's protected status",
            "example": "Evidence person is minor, private adult, or limited scope public figure",
            "reason": "To determine level of protection applicable"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "meta-bh-adult-sexualization",
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
            "example": "Posts or images that sexualize the targeted individual",
            "reason": "To identify content that inappropriately sexualizes protected individuals"
          }
        ],
        "removalCriteria": [
          "Content sexualizes protected adults",
          "Target is minor, private adult, or limited scope public figure"
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
            "description": "Evidence of manipulated imagery",
            "example": "Images altered to highlight or mock physical features",
            "reason": "To identify content that degrades individuals through image manipulation"
          },
          {
            "description": "Self-report from target for unwanted manipulated imagery",
            "example": "Report from person depicted in manipulated content",
            "reason": "To confirm content is unwanted by the target"
          }
        ],
        "removalCriteria": [
          "Content manipulates images to negatively highlight physical characteristics",
          "Manipulated imagery is reported as unwanted by the target",
          "Target is in protected category (private individuals, minors, limited scope public figures)"
        ]
      },
      {
        "id": "meta-bh-romantic-claims",
        "reference": "META-BH-T3-ROMANTIC",
        "summary": "Meta removes claims about romantic involvement, sexual orientation, or gender identity targeting private individuals and minor involuntary public figures.",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
        "contentTypes": [
          "personal",
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
            "description": "Evidence of claims about romantic involvement or identity",
            "example": "Posts making claims about relationships or sexual/gender identity",
            "reason": "To protect privacy regarding personal relationships and identity"
          },
          {
            "description": "Self-report from private adults",
            "example": "Report from targeted private adult",
            "reason": "Private adults must self-report for this protection"
          }
        ],
        "removalCriteria": [
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation or gender identity",
          "Target is private minor, private adult (self-reported), or minor involuntary public figure"
        ]
      },
      {
        "id": "meta-bh-unwanted-pages-groups",
        "reference": "META-BH-PAGES-GROUPS",
        "summary": "Meta removes unwanted Pages, Groups, and Events targeting private individuals when reported by the target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
        "contentTypes": [
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
            "example": "Complaint from person being targeted or their legal representative",
            "reason": "To confirm content is unwanted by the targeted individual"
          },
          {
            "description": "Evidence of targeting through Pages, Groups, or Events",
            "example": "Screenshots of unwanted Pages/Groups created about the individual",
            "reason": "To verify the targeting behavior"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported as unwanted by target or authorized representative",
          "Target is a private individual"
        ]
      },
      {
        "id": "meta-bh-public-figure-sexualization",
        "reference": "META-BH-PUBLIC-SEXUAL",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from target or authorized representative",
            "example": "Statement from public figure or their representative that content is unwanted",
            "reason": "To verify public figure objects to the sexualizing content"
          },
          {
            "description": "Evidence of sexualizing content",
            "example": "Posts or images that sexualize the public figure",
            "reason": "To identify content that inappropriately sexualizes the individual"
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
      "summary": "Meta provides appeal options through Support Inbox notifications with request for review functionality, and mentions Oversight Board appeals for certain decisions.",
      "steps": [
        "Receive notification of enforcement action",
        "Access detailed decision information in Support Inbox",
        "Submit appeal request if disagreeing with decision",
        "Provide additional context or information for review",
        "Receive final response after re-review in Support Inbox",
        "For eligible cases, may appeal to Oversight Board"
      ]
    }
  },
  {
    "id": "instagram-new-1758553751988-1",
    "reference": "META-NCII",
    "title": "Meta Safety Center - Intimate Image Abuse and Sextortion",
    "summary": "Comprehensive resource covering non-consensual intimate imagery (NCII) policies, prevention tools like StopNCII.org integration, and reporting mechanisms for intimate image abuse.",
    "url": "https://about.meta.com/actions/safety/topics/bullying-harassment/ncii/",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
    "policies": [
      {
        "id": "meta-ncii-sharing-prohibition",
        "reference": "META-NCII-POLICY",
        "summary": "Meta strictly prohibits the sharing of non-consensual intimate images (NCII) and considers sharing or threatening to share intimate images without consent as against Meta policies.",
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
            "description": "Report the content through dedicated reporting option for private images",
            "example": "Use specific reporting flow for intimate image abuse",
            "reason": "To identify and categorize the violation properly"
          }
        ],
        "removalCriteria": [
          "Content involves non-consensual intimate images",
          "Content involves threats to share intimate images without consent"
        ]
      },
      {
        "id": "meta-ncii-sextortion-prohibition",
        "reference": "META-NCII-SEXTORTION",
        "summary": "Meta prohibits sextortion, defined as the threat to reveal intimate images to force someone to do something they don't want to do, and takes action when becoming aware of such behavior.",
        "quote": "Sextortion is the threat to reveal intimate images to force you to do something that you don't want to do. Nobody should ever have to experience sextortion. We work to prevent this type of behaviour, and when we become aware, we work to take action.",
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
            "description": "Report threats or extortion attempts through platform reporting systems",
            "example": "Screenshots of threatening messages or demands",
            "reason": "To document the extortion attempt and threatening behavior"
          }
        ],
        "removalCriteria": [
          "Content involves threats to reveal intimate images",
          "Content is used to force unwanted actions (money, additional images, sexual contact)",
          "Content exhibits sextortion behavior patterns"
        ]
      },
      {
        "id": "meta-ncii-automated-detection",
        "reference": "META-NCII-ENFORCEMENT",
        "summary": "Meta uses automated systems to detect and remove accounts engaged in intimate image abuse at scale, with specialized teams investigating and removing violating accounts.",
        "quote": "We have identified patterns associated with this behaviour and built automated systems that detect and remove these accounts at scale. We also have dedicated teams that investigate and remove these criminals and report them to authorities, including law enforcement and the National Center for Missing and Exploited Children (NCMEC), when appropriate.",
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
            "description": "Content may be detected automatically through pattern recognition",
            "example": "System-identified suspicious account behavior",
            "reason": "To proactively identify and remove violating content before it spreads"
          }
        ],
        "removalCriteria": [
          "Account exhibits patterns associated with intimate image abuse",
          "Account shows behavior consistent with sextortion activities",
          "Content matches known intimate image abuse indicators"
        ]
      },
      {
        "id": "meta-ncii-message-restrictions",
        "reference": "META-NCII-PREVENTION",
        "summary": "Meta limits message requests to text-only until recipients accept chat requests, preventing images, videos or voice notes from being sent in unsolicited messages.",
        "quote": "We limit the message requests that people can send to someone who doesn't follow or isn't already connected to them to text-only messages. People can't send images, videos or voice notes in message requests until the recipient accepts the request to chat.",
        "contentTypes": [
          "intimate",
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
            "description": "Violation occurs when non-text content is sent in message requests",
            "example": "Images or videos sent before chat acceptance",
            "reason": "To prevent unwanted intimate or private content sharing"
          }
        ],
        "removalCriteria": [
          "Images, videos, or voice notes sent in message requests before acceptance",
          "Unsolicited media content sent to unconnected users"
        ]
      },
      {
        "id": "meta-ncii-teen-protection",
        "reference": "META-NCII-TEEN-SAFETY",
        "summary": "Meta restricts adults over 18 from starting private chats with teens they're not connected to and implements stricter message settings for teens under 16/18 in certain countries.",
        "quote": "We restrict adults over 18 from starting private chats with teens they're not connected to on Instagram and Messenger. We also introduced stricter default message settings for teens under 16 (and under 18 in certain countries). This means that teens can't be messaged or added to group chats by anyone they don't follow or aren't connected to on Instagram and Messenger.",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of adult attempting to contact unconnected teen",
            "example": "Message attempts from adults to teens without existing connection",
            "reason": "To protect minors from potential predatory behavior"
          }
        ],
        "removalCriteria": [
          "Adult over 18 attempting to privately message unconnected teen",
          "Attempts to add teens to group chats without connection",
          "Violation of teen-specific messaging restrictions"
        ]
      },
      {
        "id": "meta-ncii-24-7-review",
        "reference": "META-NCII-REPORTING",
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
            "description": "Report through platform-specific reporting mechanisms",
            "example": "Use Facebook, Instagram, or Messenger reporting tools",
            "reason": "To ensure reports are properly categorized and reviewed by appropriate teams"
          }
        ],
        "removalCriteria": [
          "Content violates intimate image policies",
          "Behavior violates platform safety standards",
          "Content reported through official channels"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758553751988-3",
    "reference": "IG-IMPERSONATION-REPORT",
    "title": "Instagram Impersonation Account Reporting",
    "summary": "Specific reporting form and process for impersonation accounts on Instagram, covering both personal and business impersonation cases.",
    "url": "https://help.instagram.com/contact/636276399721841",
    "accessTimestamp": "2025-09-22T15:09:11.988Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION-REPORT",
        "summary": "Instagram removes impersonation accounts where someone creates an account pretending to be another person, requiring identity verification from the impersonated person or their authorized representative.",
        "quote": "If someone created an Instagram or Threads account that's pretending to be you or someone you know, please use this form to file a report. We can only act on reports from the person who's being impersonated or their authorized representative (ex: parent, legal guardian).",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Photo ID of the person being impersonated",
            "example": "Government-issued ID, driver's license, passport",
            "reason": "To confirm identity and verify the impersonation claim"
          },
          {
            "description": "Photo of yourself holding your ID or the person you represent holding their ID",
            "example": "JPEG file showing clear view of both person and ID document",
            "reason": "To verify that the reporter is authorized to make the claim"
          },
          {
            "description": "Full name of the person being impersonated",
            "example": "Legal name matching the ID document",
            "reason": "To identify the victim of impersonation"
          },
          {
            "description": "Username of the impersonating account on Instagram or Threads",
            "example": "@fake_account_name",
            "reason": "To identify the specific account to be removed"
          },
          {
            "description": "Your relationship to the person being impersonated",
            "example": "yourself, authorized representative, your child",
            "reason": "To establish authority to report on behalf of the impersonated person"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be another real person",
          "Report is filed by the impersonated person or their authorized representative",
          "Identity verification is provided through acceptable ID documentation",
          "Account uses another person's name, photos, or other identifying information without permission"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
