import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards outlining what is and isn't allowed on Facebook, Instagram, Messenger and Threads, including policies on safety, privacy, authenticity, dignity, and content enforcement.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "meta-cs-privacy-violations",
        "reference": "META-CS-PRIVACY",
        "summary": "Prohibits sharing private content without consent, including intimate images and personal information that violates privacy expectations.",
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
            "description": "URL(s) of the content violating privacy",
            "reason": "To locate and identify the specific privacy-violating content"
          },
          {
            "description": "Description of how the content violates privacy expectations",
            "reason": "To assess the nature and severity of the privacy violation"
          },
          {
            "description": "Information identifying the affected individual",
            "reason": "To verify the privacy violation claim and process removal"
          }
        ],
        "removalCriteria": [
          "Content shares private information without consent",
          "Content violates reasonable expectation of privacy",
          "Sharing is done without authorization from the depicted individual"
        ]
      },
      {
        "id": "meta-cs-bullying-harassment",
        "reference": "META-CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including targeted abuse and degrading content that silences or intimidates individuals.",
        "quote": "We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.",
        "contentTypes": [
          "intimate",
          "personal",
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
            "description": "URL(s) of the harassing content",
            "reason": "To locate and review the bullying or harassing material"
          },
          {
            "description": "Description of how the content constitutes harassment or bullying",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Information identifying the target of harassment",
            "reason": "To verify the harassment claim and process the report"
          }
        ],
        "removalCriteria": [
          "Content targets an individual for abuse or degradation",
          "Content is intended to intimidate, exclude or silence others",
          "Content threatens people or creates risk of harm"
        ]
      },
      {
        "id": "meta-cs-authentic-identity",
        "reference": "META-CS-AUTHENTICITY",
        "summary": "Prohibits misrepresenting identity or impersonating others, ensuring authentic representation on the platform.",
        "quote": "We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that's why we don't want people using our services to misrepresent who they are or what they're doing.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "URL of the account or content misrepresenting identity",
            "reason": "To identify the inauthentic account or content"
          },
          {
            "description": "Proof of your authentic identity",
            "example": "Government-issued ID or official documentation",
            "reason": "To verify you are the person being impersonated or misrepresented"
          },
          {
            "description": "Description of how the account/content misrepresents identity",
            "reason": "To understand the nature and extent of the misrepresentation"
          }
        ],
        "removalCriteria": [
          "Account or content misrepresents who is behind it",
          "Uses another person's identity without authorization",
          "Intended to deceive or mislead others about identity"
        ]
      },
      {
        "id": "meta-cs-safety-threats",
        "reference": "META-CS-SAFETY",
        "summary": "Prohibits content that threatens people or contributes to risk of physical harm, including intimidating content.",
        "quote": "We're committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people has the potential to intimidate, exclude or silence others and isn't allowed on our services.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
            "description": "URL(s) of the threatening content",
            "reason": "To locate and assess the threatening material"
          },
          {
            "description": "Description of the threat or risk of harm",
            "reason": "To evaluate the severity and nature of the threat"
          },
          {
            "description": "Information about the target of the threat",
            "reason": "To verify the threat and assess risk to physical security"
          }
        ],
        "removalCriteria": [
          "Content threatens physical security of persons",
          "Content contributes to risk of harm",
          "Content is intended to intimidate, exclude or silence others"
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
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
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
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without express permission.",
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
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify the legitimate identity being misrepresented"
          },
          {
            "description": "Evidence showing the account is impersonating without permission",
            "example": "Screenshots of the impersonating account using your photos or information",
            "reason": "To demonstrate unauthorized impersonation"
          }
        ],
        "removalCriteria": [
          "Account is impersonating someone or something they are not",
          "Account was created for someone else without their express permission"
        ]
      },
      {
        "id": "ig-content-removal-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove any content or information shared on the Service if it violates Terms of Use, policies, or Community Standards.",
        "quote": "We can remove any content or information you share on the Service if we believe that it violates these Terms of Use, our policies (including our Community Standards), or we are permitted or required to do so by law.",
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
            "description": "Explanation of how the content violates Instagram's Terms of Use or Community Standards",
            "reason": "To establish grounds for content removal under platform policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for removal"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Terms of Use",
          "Content violates Instagram's Community Standards",
          "Content violates applicable laws"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that create risk, violate terms or policies, or repeatedly infringe intellectual property rights.",
        "quote": "We can refuse to provide or stop providing all or part of the Service to you (including terminating or disabling your access to the Meta Products and Meta Company Products) immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Use or our policies (including our Community Standards), if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law.",
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
            "reason": "To demonstrate pattern of behavior warranting account termination"
          },
          {
            "description": "Evidence of risk or legal exposure created by the account",
            "reason": "To justify immediate termination for community protection"
          }
        ],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or Community Standards",
          "Account repeatedly infringes other people's intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram's Help Center if they believe their account has been terminated in error or want to disable/delete their account.",
      "steps": [
        "Access Instagram's Help Center",
        "Report the issue or request account review",
        "Provide necessary information about the termination error"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms including Instagram.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "meta-pp-content-removal",
        "reference": "META-PP-SAFETY-SECURITY",
        "summary": "Meta removes content that violates terms or policies, including harmful or unlawful behavior, through automated and manual review processes.",
        "quote": "We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies. In some cases, the decisions we make about violations are reviewed by the Oversight Board, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us",
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
            "example": "Reports of policy violations through platform reporting tools",
            "reason": "To identify content that violates terms or policies"
          }
        ],
        "removalCriteria": [
          "Content that violates Meta's terms or policies",
          "Harmful or unlawful behavior",
          "Content identified through user reports",
          "Content detected through automated systems"
        ]
      },
      {
        "id": "meta-pp-legal-requests",
        "reference": "META-PP-LEGAL-COMPLIANCE",
        "summary": "Meta responds to legal requests from law enforcement and other authorities, and may access, preserve, and share user information to comply with applicable law and prevent harm.",
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
            "description": "Valid legal request such as search warrant, court order, production order, or subpoena",
            "example": "Court order from civil litigation or law enforcement search warrant",
            "reason": "To comply with legal obligations and applicable law"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal requests",
          "Content that violates applicable law",
          "Content that threatens safety, security and integrity of platform or users",
          "Content that poses threat to personnel and property"
        ]
      },
      {
        "id": "meta-pp-safety-integrity",
        "reference": "META-PP-SAFETY-MEASURES",
        "summary": "Meta promotes safety, security and integrity by detecting and preventing harmful conduct, spam, and threats to users and the platform through automated and manual review.",
        "quote": "To promote safety, security and integrity We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts, identity and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, Detect and prevent spam and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Information indicating harmful or unlawful behavior",
            "example": "Reports of harassment, threats, or policy violations",
            "reason": "To protect users from harm and maintain platform safety"
          },
          {
            "description": "Evidence of account or identity verification issues",
            "example": "Suspicious account activity or impersonation reports",
            "reason": "To verify accounts and prevent fraudulent activity"
          }
        ],
        "removalCriteria": [
          "Harmful or unlawful behavior",
          "Violations of terms or policies",
          "Suspicious activity",
          "Spam and other bad experiences",
          "Threats to personnel and property",
          "Content that compromises platform integrity"
        ]
      },
      {
        "id": "meta-pp-user-rights",
        "reference": "META-PP-USER-RIGHTS",
        "summary": "Users have rights to access, correct, download, erase their information, withdraw consent, port data, object to processing, and make complaints under GDPR and other data protection laws.",
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
            "description": "User identity verification for rights requests",
            "example": "Account credentials or identity verification",
            "reason": "To ensure requests are made by legitimate account holders"
          }
        ],
        "removalCriteria": [
          "User requests erasure of their information",
          "User withdraws consent for processing",
          "User objects to processing based on legitimate interests"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "META-PP-SHARING-CONTROL",
        "summary": "Meta provides controls for users to manage how their information is shared, including content others share about them and public content visibility.",
        "quote": "On Meta Products Learn more about the different cases when your information can be shared on our Products: People and accounts you share and communicate with, Content others share or reshare about you, Public content",
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
            "description": "Evidence that content was shared without permission",
            "example": "Screenshots showing unauthorized sharing of private content",
            "reason": "To address privacy violations and unauthorized content sharing"
          }
        ],
        "removalCriteria": [
          "Content shared without user permission",
          "Private content made public without consent",
          "Content that violates user privacy settings"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.oversightboard.com/",
      "summary": "Some content removal decisions are reviewed by the independent Oversight Board, which can overturn Meta's decisions on content policy violations.",
      "steps": [
        "Submit case to Oversight Board for review",
        "Oversight Board reviews Meta's content decision",
        "Board issues binding decision on whether content should be restored or removed"
      ]
    }
  },
  {
    "id": "instagram-new-1758225061624-0",
    "reference": "IG-HARASSMENT",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying, harassment, threats, and unwanted malicious contact on Instagram.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "ig-harassment-unwanted-contact",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation.",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
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
            "description": "Evidence of repeated unwanted contact or sexually harassing messages",
            "example": "Screenshots of multiple unwanted messages or sexually explicit communications",
            "reason": "To demonstrate pattern of harassment or sexual nature of contact"
          }
        ],
        "removalCriteria": [
          "Contact is repeated in nature",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without solicitation"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-statements",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes statements of intent to engage in sexual activity or advocating to engage in sexual activity directed at individuals.",
        "quote": "Everyone is protected from: Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of statements expressing intent or advocacy for sexual activity",
            "example": "Screenshots of posts or messages containing sexual propositions",
            "reason": "To verify the sexual nature and intent of the statements"
          }
        ],
        "removalCriteria": [
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates for engaging in sexual activity with the target"
        ]
      },
      {
        "id": "ig-harassment-severe-sexualized-commentary",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes severe sexualized commentary and derogatory sexualized photoshop or drawings targeting individuals.",
        "quote": "Everyone is protected from: Severe sexualized commentary. Derogatory sexualized photoshop or drawings",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of severe sexualized commentary or manipulated sexual imagery",
            "example": "Screenshots of sexually explicit comments or manipulated images",
            "reason": "To demonstrate the severe and sexualized nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content contains severe sexualized commentary",
          "Content includes derogatory sexualized photoshop or drawings"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-attacks",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes attacks through derogatory terms related to sexual activity (e.g., whore, slut) targeting individuals.",
        "quote": "Everyone is protected from: Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
        "contentTypes": [
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
            "description": "Evidence of attacks using derogatory sexual terms",
            "example": "Screenshots of posts or comments using terms like 'whore' or 'slut'",
            "reason": "To verify the use of derogatory sexual terminology in attacks"
          }
        ],
        "removalCriteria": [
          "Content attacks individuals using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-harassment-private-info-threats",
        "reference": "IG-HARASSMENT-TIER1",
        "summary": "Meta removes threats to release an individual's private phone number, residential address, email address or medical records.",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
          "private",
          "personal"
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
            "description": "Evidence of threats to release private contact information or medical records",
            "example": "Screenshots of messages threatening to share phone numbers, addresses, or medical information",
            "reason": "To verify the threatening nature and private information involved"
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
        "id": "ig-harassment-claims-sexual-activity",
        "reference": "IG-HARASSMENT-TIER2",
        "summary": "Meta removes claims about sexual activity targeting minors, private adults, and limited scope public figures, except in criminal allegation contexts.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Claims about sexual activity, except in the context of criminal allegations against adults (non-consensual sexual touching).",
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
            "description": "Evidence of claims about sexual activity and confirmation of target's status as minor, private adult, or limited scope public figure",
            "example": "Screenshots of posts making sexual claims about the individual",
            "reason": "To verify the sexual nature of claims and eligibility for protection"
          }
        ],
        "removalCriteria": [
          "Content makes claims about sexual activity of protected individuals",
          "Target is a minor, private adult, or limited scope public figure",
          "Claims are not in context of criminal allegations against adults"
        ]
      },
      {
        "id": "ig-harassment-adult-sexualization",
        "reference": "IG-HARASSMENT-TIER2",
        "summary": "Meta removes content sexualizing adults when targeting minors, private adults, and limited scope public figures.",
        "quote": "all minors (private individuals and public figures), private adults and limited scope public figures are protected from: Content sexualizing another adult",
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
            "description": "Evidence of sexualizing content and confirmation of target's protected status",
            "example": "Screenshots of sexually objectifying posts or comments",
            "reason": "To verify the sexualizing nature and protected status of target"
          }
        ],
        "removalCriteria": [
          "Content sexualizes an adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-manipulated-imagery",
        "reference": "IG-HARASSMENT-TIER2",
        "summary": "Meta removes content manipulated to highlight or negatively draw attention to specific physical characteristics of protected individuals.",
        "quote": "Content manipulated to highlight, circle, or otherwise negatively draw attention to specific physical characteristics (nose, ear, and so on).",
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
            "description": "Evidence of manipulated imagery highlighting physical characteristics and confirmation of target's protected status",
            "example": "Screenshots of edited photos with circles or arrows pointing to body parts",
            "reason": "To verify image manipulation and protected status of individual"
          }
        ],
        "removalCriteria": [
          "Content is manipulated to highlight specific physical characteristics",
          "Manipulation negatively draws attention to physical features",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-unwanted-pages-groups",
        "reference": "IG-HARASSMENT-REPORTING",
        "summary": "Meta removes content targeting private individuals through unwanted Pages, Groups and Events when reported by the target or authorized representative.",
        "quote": "Post content that targets private individuals through unwanted Pages, Groups and Events. We remove this content when it is reported by the target or an authorized representative of the target.",
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
            "description": "Report from target or authorized representative confirming content is unwanted",
            "example": "Statement from individual or legal representative that the Page/Group is unwanted",
            "reason": "To confirm the content is unwanted by the targeted individual"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, Groups, or Events",
          "Content is reported by target or authorized representative as unwanted"
        ]
      },
      {
        "id": "ig-harassment-public-figure-sexualization",
        "reference": "IG-HARASSMENT-REPORTING",
        "summary": "Meta removes content sexualizing public figures when confirmed as unwanted by the target or authorized representative.",
        "quote": "Post content sexualizing a public figure. We will remove this content when we have confirmation from the target or an authorized representative of the target that the content is unwanted.",
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
            "description": "Confirmation from public figure or authorized representative that sexualizing content is unwanted",
            "example": "Statement from the public figure or their representative requesting removal",
            "reason": "To verify the content is unwanted by the targeted public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualizes a public figure",
          "Target or authorized representative confirms content is unwanted"
        ]
      },
      {
        "id": "ig-harassment-sexual-harassment-contact",
        "reference": "IG-HARASSMENT-REPORTING",
        "summary": "Meta removes sexually harassing contact when confirmed as unwanted by the recipient or authorized representative.",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorized representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or authorized representative that sexually harassing contact is unwanted",
            "example": "Statement from recipient that the sexual contact is unwanted and harassing",
            "reason": "To verify the contact is both sexual in nature and unwanted"
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
      "summary": "Users can appeal content decisions through Meta's standard appeal process, with reviews conducted and final responses provided through the Support Inbox.",
      "steps": [
        "Report the content through Meta's reporting system",
        "Receive notification of review decision via notifications and Support Inbox",
        "If disagreeing with decision, request another review through appeal option",
        "Provide additional context or information during appeal",
        "Receive final response after re-review through Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758225061624-1",
    "reference": "IG-NCII",
    "title": "Non-Consensual Intimate Images Policy",
    "summary": "Policy addressing intimate image abuse and non-consensual sharing of intimate content.",
    "url": "https://about.fb.com/news/2019/03/protecting-intimate-images/",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "meta-ncii-general",
        "reference": "IG-NCII-001",
        "summary": "Meta prohibits non-consensual intimate images (NCII) across Facebook, Messenger, and Instagram, and provides reporting tools for victims and third parties.",
        "quote": "Over the last year, we've conducted our own research and partnered with many international safety organizations to review and improve our response to the sharing of what we call non-consensual intimate images (NCII) anywhere on Facebook, Messenger or Instagram.",
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
            "description": "Report can be made by anyone, not just the victim",
            "example": "Third party reporting on behalf of victim",
            "reason": "To ensure victims have support and don't have to report themselves"
          }
        ],
        "removalCriteria": [
          "Images shared without consent of the person depicted",
          "Content qualifies as intimate imagery"
        ]
      },
      {
        "id": "meta-ncii-proactive-reporting",
        "reference": "IG-NCII-002",
        "summary": "Meta offers a proactive reporting tool allowing potential victims to submit photos before they are shared to prevent distribution across platforms.",
        "quote": "We built a proactive reporting tool in partnership with international safety organizations, survivors, and victim advocates to provide an emergency option for people to provide a photo proactively to Facebook, so it never gets shared on our platforms in the first place.",
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
            "description": "Proactive submission of intimate image by potential victim",
            "example": "User submits photo they fear may be shared without consent",
            "reason": "To create hash and prevent future sharing before it occurs"
          }
        ],
        "removalCriteria": [
          "Image submitted proactively by person depicted",
          "Image qualifies as intimate content that could be shared non-consensually"
        ]
      },
      {
        "id": "meta-ncii-reporting-improvements",
        "reference": "IG-NCII-003",
        "summary": "Meta is improving reporting tools to be more accessible, empathetic, and provide faster personalized responses to NCII victims.",
        "quote": "Based on this research, we are re-evaluating our reporting tools and processes to ensure they are straightforward, clear and empathetic. Anyone, not just the victim, can report NCII and we are working to better educate people who use Facebook on how to do that.",
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
            "description": "NCII report through improved reporting interface",
            "example": "Using streamlined reporting process",
            "reason": "To reduce barriers and trauma for victims during reporting"
          }
        ],
        "removalCriteria": [
          "Content reported as non-consensual intimate imagery",
          "Content meets NCII policy definitions"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758225061624-2",
    "reference": "IG-REPORT-HARASSMENT",
    "title": "Reporting Harassment or Bullying",
    "summary": "Help center guidance on reporting harassment and bullying content on Instagram.",
    "url": "https://help.instagram.com/547601325292351",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "ig-harassment-photo-reporting",
        "reference": "IG-REPORT-HARASSMENT-001",
        "summary": "Instagram prohibits photos intended to bully or harass someone and provides reporting mechanisms for such content.",
        "quote": "If an account is established with the intent of bullying or harassing another person or if a photo or comment is intended to bully or harass someone, please report it.",
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
            "description": "Report through Instagram's reporting system",
            "example": "Use the report function on the specific photo or account",
            "reason": "To initiate Instagram's review process for harassment content"
          }
        ],
        "removalCriteria": [
          "Photo is intended to bully or harass someone",
          "Account is established with intent of bullying or harassing another person"
        ]
      },
      {
        "id": "ig-impersonation-reporting",
        "reference": "IG-REPORT-HARASSMENT-002",
        "summary": "Instagram provides reporting mechanisms for accounts pretending to be someone else, which may involve unauthorized use of personal images.",
        "quote": "You can also learn what to do if you think someone is pretending to be you or someone else on Instagram.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through Instagram's impersonation reporting process",
            "example": "Follow the specific reporting flow for impersonation cases",
            "reason": "To verify identity and establish unauthorized use of personal information or images"
          }
        ],
        "removalCriteria": [
          "Account is pretending to be you or someone else"
        ]
      },
      {
        "id": "ig-community-standards-violation",
        "reference": "IG-REPORT-HARASSMENT-003",
        "summary": "Instagram enforces Community Standards and provides reporting for accounts or posts that violate these standards.",
        "quote": "Learn how to report other accounts or posts that don't follow our Community Standards.",
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
            "description": "Report through Instagram's general reporting system",
            "example": "Use the report function to flag Community Standards violations",
            "reason": "To initiate review against Instagram's comprehensive content policies"
          }
        ],
        "removalCriteria": [
          "Content violates Instagram's Community Standards"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758225061624-3",
    "reference": "IG-IMPERSONATION",
    "title": "Impersonation Account Reporting",
    "summary": "Guidelines for reporting accounts that impersonate individuals or entities.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": "IG-IMPERSONATION-001",
        "summary": "Instagram allows users to report accounts that are impersonating them, requiring government-issued ID verification and only accepting reports from the impersonated person or their representative.",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us. Make sure to provide all the requested info, including a photo of your government-issued ID. We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent).",
        "contentTypes": [
          "personal",
          "private",
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
          "Proper identification documentation is provided"
        ]
      },
      {
        "id": "ig-impersonation-reporting-eligibility",
        "reference": "IG-IMPERSONATION-002",
        "summary": "Instagram only accepts impersonation reports from the actual person being impersonated or their authorized representative, and reports are kept anonymous except for intellectual property cases.",
        "quote": "We only respond to reports sent to us from the person who's being impersonated or a representative of the person who's being impersonated (example: a parent). If someone you know is being impersonated, please encourage that person to report it. Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement.",
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
            "description": "Proof of authorization if reporting on behalf of someone else",
            "example": "Parent reporting for minor child",
            "reason": "To ensure only authorized individuals can report impersonation on behalf of others"
          }
        ],
        "removalCriteria": [
          "Reporter is the person being impersonated",
          "Reporter is an authorized representative of the person being impersonated",
          "Third-party reports are not accepted unless from authorized representatives"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758225061624-4",
    "reference": "IG-APPEAL-PROCESS",
    "title": "Content Removal Appeals",
    "summary": "Process for appealing content removal decisions and accessing the Oversight Board.",
    "url": "https://help.instagram.com/675885993348720",
    "accessTimestamp": "2025-09-18T19:51:01.624Z",
    "policies": [
      {
        "id": "ig-appeal-content-removal",
        "reference": "IG-APPEAL-PROCESS",
        "summary": "Users can appeal Instagram's content removal decisions through a two-step process: first requesting a review, then appealing to the Oversight Board if still unsatisfied.",
        "quote": "If you don't think that your content should have been taken down and you want to appeal to the Oversight Board, you must first go through the request a review process. Before you can appeal Instagram's content decision to the Oversight Board, you must first request a review of your content or the content you reported twice and you still disagree with our decision, you may be eligible to appeal that decision to the Oversight Board.",
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
            "description": "Must first complete the request a review process",
            "example": "Submit initial review request through Instagram's standard process",
            "reason": "Required prerequisite before Oversight Board appeal"
          },
          {
            "description": "Reference number from appeal submission",
            "example": "Appeal reference number provided after submission",
            "reason": "To track appeal status on Oversight Board website"
          }
        ],
        "removalCriteria": [
          "Content must have been reviewed twice by Instagram",
          "User must still disagree with Instagram's decision after two reviews",
          "Appeal must be submitted within 15 days of the decision",
          "Content and decision must be eligible for Oversight Board review"
        ]
      },
      {
        "id": "ig-appeal-reported-content",
        "reference": "IG-APPEAL-PROCESS",
        "summary": "Users can appeal Instagram's decision not to remove content they reported by first requesting a review, then appealing to the Oversight Board if the content remains up.",
        "quote": "If you reported content from others that wasn't taken down and you want to appeal to the Oversight Board to have the content removed, you must first go through the request a review process. If we've reviewed your content or the content you reported twice and you still disagree with our decision, you may be eligible to appeal that decision to the Oversight Board.",
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
            "description": "Must have originally reported the content through Instagram's reporting system",
            "example": "Initial report submitted about harmful content",
            "reason": "Required to establish standing for appeal"
          },
          {
            "description": "Must complete request a review process first",
            "example": "Submit review request for Instagram's decision not to remove content",
            "reason": "Required prerequisite before Oversight Board appeal"
          }
        ],
        "removalCriteria": [
          "Content must have been reported and reviewed twice by Instagram",
          "Instagram must have decided not to remove the content",
          "User must still disagree with Instagram's decision after two reviews",
          "Appeal must be submitted within 15 days of the decision"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Two-tier appeal process: first request review through Instagram, then appeal to independent Oversight Board if unsatisfied. Appeals must be submitted within 15 days and Oversight Board selects only certain cases for review.",
      "steps": [
        "First go through Instagram's request a review process for your content or content you reported",
        "If still unsatisfied after Instagram reviews twice, submit appeal to Oversight Board",
        "Oversight Board decides whether to review the appeal (only selects certain eligible appeals)",
        "Check appeal status on Oversight Board website using reference number",
        "Must submit appeal within 15 days of Instagram's decision"
      ]
    }
  }
],
};
