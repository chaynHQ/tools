import { PlatformPolicies } from '../../types/policies';

export const instagramPolicy: PlatformPolicies = {
  platform: 'Instagram',
  policyDocuments: [
  {
    "id": "ig-community-standards",
    "reference": "META-CS",
    "title": "Community Standards | Transparency Center",
    "summary": "Comprehensive community standards covering safety, privacy, dignity, and authenticity across Facebook, Instagram, Messenger and Threads platforms.",
    "url": "https://transparency.meta.com/policies/community-standards/",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "meta-cs-ncii-policy",
        "reference": "META-CS-NCSII",
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
        "id": "meta-cs-bullying-policy",
        "reference": "META-CS-BULLYING",
        "summary": "Prohibits bullying and harassment, including sharing intimate images without consent as a severe form of bullying.",
        "quote": "We prohibit bullying and harassment. Sharing intimate images of someone without their consent is considered a severe form of bullying.",
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
        "id": "meta-cs-privacy-policy",
        "reference": "META-CS-PRIVACY",
        "summary": "Prohibits violations of privacy, including sharing private intimate media or personal information without consent.",
        "quote": "We prohibit violations of privacy. Sharing someone's private, intimate media without their consent is a fundamental breach of privacy.",
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
        "id": "meta-cs-impersonation-policy",
        "reference": "META-CS-IMPERSONATION",
        "summary": "Prohibits impersonating others (individuals, organizations) with an intent to deceive or mislead.",
        "quote": "We prohibit impersonating others (individuals, organizations) with an intent to deceive or mislead.",
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
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "ig-copyright-policy",
        "reference": "IG-TOU-IP",
        "summary": "Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.",
        "quote": "You can't post someone else's private or confidential information without permission or do anything that violates someone else's rights, including intellectual property rights (e.g., copyright infringement, trademark infringement, counterfeit, or pirated goods). You may use someone else's works under exceptions or limitations to copyright and related rights under applicable law. You represent you own or have obtained all necessary rights to the content you post or share.",
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
        "id": "ig-impersonation-policy",
        "reference": "IG-TOU-4.2",
        "summary": "Prohibits impersonating others or providing inaccurate information, including creating accounts for someone else without permission.",
        "quote": "You can't impersonate others or provide inaccurate information. You don't have to disclose your identity on Instagram, but you must provide us with accurate and up to date information (including registration information), which may include providing personal data. Also, you may not impersonate someone or something you aren't, and you can't create an account for someone else unless you have their express permission.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account is impersonating someone else",
          "Account was created for someone else without their express permission",
          "Inaccurate information is being provided"
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains someone else's private or confidential information posted without permission"
        ]
      },
      {
        "id": "ig-content-removal-authority",
        "reference": "IG-TOU-6",
        "summary": "Instagram can remove any content that violates Terms of Use, policies, or Community Standards.",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Terms of Use",
          "Content violates Instagram policies including Community Standards",
          "Removal is permitted or required by law"
        ]
      },
      {
        "id": "ig-account-termination-policy",
        "reference": "IG-TOU-6",
        "summary": "Instagram can terminate or disable accounts that violate Terms of Use, policies, or repeatedly infringe intellectual property rights.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account creates risk or legal exposure for Instagram",
          "Account violates Terms of Use or policies including Community Standards",
          "Account repeatedly infringes other people's intellectual property rights"
        ]
      },
      {
        "id": "ig-content-deletion-timeframe",
        "reference": "IG-TOU-6",
        "summary": "Content deletion process begins within 30 days of request and may take up to 90 days to complete, with additional time for backup removal.",
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
            "description": "Deletion process begins within 30 days of request"
          },
          "removal": {
            "value": 90,
            "unit": "days",
            "description": "Content deletion may take up to 90 days, with additional 90 days for backup removal"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User requests content deletion",
          "User requests account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.instagram.com/",
      "summary": "Users can consult Instagram's Help Center if they believe their account has been terminated in error or want to disable or permanently delete their account.",
      "steps": [
        "Visit Instagram Help Center",
        "Report the issue if account was terminated in error",
        "Follow provided instructions for account recovery or deletion"
      ]
    }
  },
  {
    "id": "ig-privacy-policy",
    "reference": "META-PP",
    "title": "Meta Privacy Policy",
    "summary": "Privacy policy explaining how Meta collects, uses, and protects user data across its platforms.",
    "url": "https://privacycenter.instagram.com/policy",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "meta-pp-safety-security",
        "reference": "Section 2 - Promoting safety, security and integrity",
        "summary": "Prohibits harmful or unlawful behavior and allows content removal to protect users",
        "quote": "We use information we collect to help protect people from harm and provide safe, secure Products. We process information we have associated with you and apply automated processing techniques and, in some instances, conduct manual (human) review to: Verify accounts and activity, Find and address violations of our terms or policies, Investigate suspicious activity, Detect, prevent and combat harmful or unlawful behavior, such as to review and, in some cases, remove content reported to us, Identify and combat disparities and racial bias against historically marginalized communities, Protect the life, physical or mental health, well-being or integrity of our users or others, Detect and prevent spam, other security matters and other bad experiences, Detect and stop threats to our personnel and property, and Maintain the integrity of our Products.",
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
            "description": "Content must be reported to Meta for review",
            "example": "Report the specific content through Meta's reporting mechanisms",
            "reason": "Required for Meta to investigate and take action on policy violations"
          }
        ],
        "removalCriteria": [
          "Content constitutes harmful or unlawful behavior",
          "Content violates Meta's terms or policies",
          "Content threatens the life, physical or mental health, well-being or integrity of users or others",
          "Content represents suspicious activity that could harm users"
        ]
      },
      {
        "id": "meta-pp-legal-compliance",
        "reference": "Section 10 - How do we respond to legal requests, comply with applicable law and prevent harm?",
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
            "example": "Court order requesting specific user information or content removal",
            "reason": "Required to comply with legal obligations and law enforcement requests"
          }
        ],
        "removalCriteria": [
          "Valid legal request from civil litigants, law enforcement or government authorities",
          "Required by applicable law",
          "Necessary to promote safety, security and integrity of Meta Products and users"
        ]
      },
      {
        "id": "meta-pp-information-sharing",
        "reference": "Section 4 - How do we share information with third parties?",
        "summary": "Prohibits selling user information and requires partners to follow rules about information use and disclosure",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Information cannot be sold to third parties",
          "Partners and third parties must follow Meta's rules about information use and disclosure"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://help.meta.com/support/privacy",
      "summary": "Users can contact Meta online or by mail with questions, complaints or requests regarding their information and privacy policy matters",
      "steps": [
        "Contact Meta online at help.meta.com/support/privacy",
        "Alternatively, contact by mail at: Meta Platforms, Inc., ATTN: Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025",
        "In some countries, users may also contact the Data Protection Officer for Meta Platforms, Inc.",
        "Depending on jurisdiction, users may contact their local Data Protection Authority (DPA) directly"
      ]
    }
  },
  {
    "id": "instagram-new-1758646536045-0",
    "reference": "IG-HARASSMENT",
    "title": "Bullying and Harassment Policy",
    "summary": "Specific policy covering bullying and harassment prevention on Instagram with heightened protection for minors.",
    "url": "https://transparency.meta.com/policies/community-standards/bullying-harassment/",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "ig-harassment-unwanted-contact",
        "reference": "Tier 1",
        "summary": "Prohibits unwanted contact that is repeated, sexually harassing, or directed at large numbers of individuals without prior solicitation",
        "quote": "Everyone is protected from: Unwanted contact that is: Repeated, OR Sexually harassing, OR Is directed at a large number of individuals with no prior solicitation.",
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
          "Contact is repeated",
          "Contact is sexually harassing",
          "Contact is directed at large numbers without prior solicitation"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-statements",
        "reference": "Tier 1",
        "summary": "Prohibits statements of intent to engage in sexual activity or advocating to engage in sexual activity",
        "quote": "Statements of intent to engage in a sexual activity or advocating to engage in a sexual activity.",
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
          "Content contains statements of intent to engage in sexual activity",
          "Content advocates engaging in sexual activity"
        ]
      },
      {
        "id": "ig-harassment-severe-sexualised-commentary",
        "reference": "Tier 1",
        "summary": "Prohibits severe sexualised commentary",
        "quote": "Severe sexualised commentary.",
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
          "Content contains severe sexualised commentary"
        ]
      },
      {
        "id": "ig-harassment-derogatory-sexualised-photoshop",
        "reference": "Tier 1",
        "summary": "Prohibits derogatory sexualised photoshop or drawings",
        "quote": "Derogatory sexualised photoshop or drawings",
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
          "Content contains derogatory sexualised photoshop",
          "Content contains derogatory sexualised drawings"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-attacks",
        "reference": "Tier 1",
        "summary": "Prohibits attacks through derogatory terms related to sexual activity",
        "quote": "Attacks through derogatory terms related to sexual activity (for example: whore, slut).",
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
          "Content contains attacks using derogatory terms related to sexual activity"
        ]
      },
      {
        "id": "ig-harassment-private-info-threats",
        "reference": "Tier 1",
        "summary": "Prohibits threats to release an individual's private phone number, residential address, email address or medical records",
        "quote": "Threats to release an individual's private phone number, residential address, email address or medical records (as defined in the Privacy Violations policy).",
        "contentTypes": [
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
          "Content threatens to release private phone numbers",
          "Content threatens to release residential addresses",
          "Content threatens to release email addresses",
          "Content threatens to release medical records"
        ]
      },
      {
        "id": "ig-harassment-bullying-calls",
        "reference": "Tier 1",
        "summary": "Prohibits calls for, or statements of intent to engage in, bullying and/or harassment",
        "quote": "Calls for, or statements of intent to engage in, bullying and/or harassment.",
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
          "Content calls for bullying or harassment",
          "Content states intent to engage in bullying or harassment"
        ]
      },
      {
        "id": "ig-harassment-sexual-activity-claims",
        "reference": "Tier 2",
        "summary": "Prohibits claims about sexual activity for minors, private adults and limited scope public figures",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content makes claims about sexual activity",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-adult-sexualisation",
        "reference": "Tier 2",
        "summary": "Prohibits content sexualising another adult for minors, private adults and limited scope public figures",
        "quote": "Content sexualising another adult (sexualisation of minors is covered in the Child Sexual Exploitation, Abuse and Nudity policy).",
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
          "Content sexualises another adult",
          "Target is a minor, private adult, or limited scope public figure"
        ]
      },
      {
        "id": "ig-harassment-manipulated-imagery",
        "reference": "Tier 2",
        "summary": "Prohibits content manipulated to highlight, circle or otherwise negatively draw attention to specific physical characteristics",
        "quote": "Content manipulated to highlight, circle or otherwise negatively draw attention to specific physical characteristics (nose, ear and so on).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content is manipulated to highlight physical characteristics",
          "Content negatively draws attention to specific physical features"
        ]
      },
      {
        "id": "ig-harassment-unwanted-manipulated-imagery-self-report",
        "reference": "Tier 3",
        "summary": "Prohibits unwanted manipulated imagery when self-reported by private minors, private adults and minor involuntary public figures",
        "quote": "When self-reported, private minors, private adults and minor involuntary public figures are protected from the following: Unwanted manipulated imagery.",
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
            "description": "Self-report by the target or authorised representative",
            "example": "Report submitted by the person depicted in the manipulated imagery",
            "reason": "Required to confirm the imagery is unwanted"
          }
        ],
        "removalCriteria": [
          "Content contains unwanted manipulated imagery",
          "Target is a private minor, private adult, or minor involuntary public figure",
          "Content is self-reported by target or authorised representative"
        ]
      },
      {
        "id": "ig-harassment-romantic-involvement-claims",
        "reference": "Tier 3",
        "summary": "Prohibits claims about romantic involvement, sexual orientation or gender identity for private minors, private adults and minor involuntary public figures",
        "quote": "Claims about romantic involvement, sexual orientation or gender identity.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content makes claims about romantic involvement",
          "Content makes claims about sexual orientation",
          "Content makes claims about gender identity",
          "Target is a private minor, private adult, or minor involuntary public figure"
        ]
      },
      {
        "id": "ig-harassment-unwanted-pages-groups-events",
        "reference": "Additional Requirements",
        "summary": "Prohibits content that targets private individuals through unwanted Pages, groups and events when reported by the target",
        "quote": "Post content that targets private individuals through unwanted Pages, groups and events. We remove this content when it is reported by the target or an authorised representative of the target.",
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
            "description": "Report by the target or authorised representative",
            "example": "Report submitted by the targeted individual or their legal representative",
            "reason": "Required to confirm the content is unwanted and targets the individual"
          }
        ],
        "removalCriteria": [
          "Content targets private individuals through Pages, groups or events",
          "Content is unwanted by the target",
          "Content is reported by target or authorised representative"
        ]
      },
      {
        "id": "ig-harassment-public-figure-sexualisation",
        "reference": "Additional Requirements",
        "summary": "Prohibits content sexualising a public figure when reported by the target",
        "quote": "Post content sexualising a public figure. We will remove this content when we have confirmation from the target or an authorised representative of the target that the content is unwanted.",
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
            "description": "Confirmation from the target or authorised representative that content is unwanted",
            "example": "Statement from the public figure or their representative confirming the content is unwanted",
            "reason": "Required to confirm the sexualising content is unwanted by the public figure"
          }
        ],
        "removalCriteria": [
          "Content sexualises a public figure",
          "Target confirms content is unwanted",
          "Confirmation provided by target or authorised representative"
        ]
      },
      {
        "id": "ig-harassment-sexually-harassing-contact",
        "reference": "Additional Requirements",
        "summary": "Prohibits initiation of sexually harassing contact when confirmed as unwanted by the recipient",
        "quote": "Initiate contact that is sexually harassing the recipient. We will remove any content shared in an unwanted context when we have a confirmation from the recipient, or an authorised representative of the recipient that contact is unwanted.",
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
            "description": "Confirmation from recipient or authorised representative that contact is unwanted",
            "example": "Statement from the recipient confirming the sexually harassing contact is unwanted",
            "reason": "Required to confirm the contact is unwanted and sexually harassing"
          }
        ],
        "removalCriteria": [
          "Contact is sexually harassing",
          "Contact is unwanted by recipient",
          "Confirmation provided by recipient or authorised representative"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can request another review if they disagree with enforcement decisions. Appeals are submitted through the Support Inbox with options to provide additional context.",
      "steps": [
        "User receives notification of enforcement action",
        "User can request another review through the Support Inbox",
        "User can provide additional information or context",
        "Meta conducts re-review of the content",
        "Final decision is communicated to user through Support Inbox"
      ]
    }
  },
  {
    "id": "instagram-new-1758646536045-1",
    "reference": "IG-COPYRIGHT",
    "title": "Copyright and DMCA Policy",
    "summary": "Comprehensive policy covering copyright infringement reporting, DMCA procedures, and counter-notification processes.",
    "url": "https://help.instagram.com/126382350847838",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "ig-copyright-infringement",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits posting content that infringes on someone else's copyrighted work without permission",
        "quote": "If you believe someone is using your copyrighted work without your permission, you can report it to us by filling out this form.",
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
            "description": "Complete the copyright infringement reporting form",
            "example": "Fill out the form at https://www.instagram.com/help/ipreporting/report/copyright/",
            "reason": "Required to initiate copyright infringement claim process"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted work without permission from the copyright owner",
          "Valid copyright infringement report is submitted"
        ]
      },
      {
        "id": "ig-copyright-repeat-violations",
        "reference": "IG-COPYRIGHT",
        "summary": "Prohibits repeatedly posting content that violates someone else's intellectual property rights",
        "quote": "What happens if you repeatedly post content on Instagram or Threads that violates someone else's intellectual property rights",
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
            "description": "Documentation of multiple copyright violations",
            "example": "Multiple valid copyright infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "Multiple instances of posting content that violates intellectual property rights",
          "Pattern of repeated copyright infringement"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit DMCA counter-notifications and retract intellectual property reports they have submitted",
      "steps": [
        "Submit a DMCA counter-notification if you believe content was wrongly removed",
        "Contact Instagram's DMCA designated agent",
        "Retract an intellectual property report you previously submitted"
      ]
    }
  },
  {
    "id": "instagram-new-1758646536045-2",
    "reference": "IG-IMPERSONATION",
    "title": "Impersonation Policy",
    "summary": "Policy addressing fake accounts and impersonation with specific reporting procedures for victims.",
    "url": "https://help.instagram.com/370054663112398",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "ig-impersonation-report",
        "reference": null,
        "summary": "Prohibits creating Instagram accounts pretending to be another person and provides reporting mechanisms for impersonation",
        "quote": "Instagram takes safety seriously. If someone created an Instagram account pretending to be you, you can report it to us.",
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
            "description": "Report must be submitted through Instagram app or designated forms",
            "example": "Use in-app reporting feature or fill out the impersonation form for non-users",
            "reason": "Required to initiate the impersonation investigation process"
          }
        ],
        "removalCriteria": [
          "Account was created pretending to be another person",
          "Account is impersonating someone without authorization"
        ]
      },
      {
        "id": "ig-impersonation-anonymous",
        "reference": null,
        "summary": "Ensures anonymous reporting for impersonation cases except for intellectual property infringement",
        "quote": "Keep in mind that your report is anonymous, except if you're reporting an intellectual property infringement. The account you reported won't see who reported them.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Report is submitted for impersonation (maintains anonymity)",
          "Report is not related to intellectual property infringement"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758646536045-3",
    "reference": "IG-NCII-SUPPORT",
    "title": "Non-Consensual Intimate Image Support",
    "summary": "Guidance and support resources for victims of non-consensual intimate image sharing.",
    "url": "https://help.instagram.com/1769410010008691",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "ig-ncii-community-standards",
        "reference": "Community Standards",
        "summary": "Prohibits intimate photos that violate Community Standards and enables removal through reporting",
        "quote": "You can anonymously report photos that go against Instagram's Community Standards. After reporting a post, specially trained representatives from our Community Operations team will then review the image and remove it if it goes against our Community Standards.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through Instagram's built-in reporting system",
            "example": "Use the anonymous reporting feature for photos",
            "reason": "Required for Community Operations team to review and potentially remove content"
          }
        ],
        "removalCriteria": [
          "Content goes against Instagram's Community Standards",
          "Content is reviewed by specially trained Community Operations representatives"
        ]
      },
      {
        "id": "ig-ncii-photo-matching",
        "reference": "Photo-matching technology",
        "summary": "Uses photo-matching technology to prevent future sharing of removed intimate images across Instagram, Facebook and Messenger",
        "quote": "We then use photo-matching technology to help stop future attempts to share the image on Instagram, Facebook and Messenger.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Initial successful removal of content through Community Standards violation",
            "example": "Content must first be removed for violating Community Standards",
            "reason": "Photo-matching technology is applied after content removal to prevent re-sharing"
          }
        ],
        "removalCriteria": [
          "Image has been previously removed for violating Community Standards",
          "Technology detects attempts to re-share the same image"
        ]
      },
      {
        "id": "ig-ncii-threats-extortion",
        "reference": "Threatening to share private content",
        "summary": "Prohibits threatening to share private content, requesting money, or asking users to do uncomfortable things",
        "quote": "If someone is threatening to share things you want to keep private (example: messages, photos, videos), asking you to send money or asking you to do something else you're uncomfortable with, please report their profile to us using the built-in reporting options.",
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
            "description": "Report the threatening profile through built-in reporting options",
            "example": "Report profiles making threats to share private messages, photos, or videos",
            "reason": "Required for Instagram to investigate and take action against threatening behavior"
          }
        ],
        "removalCriteria": [
          "User is threatening to share private content",
          "User is requesting money in connection with threats",
          "User is asking the victim to do something they're uncomfortable with"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "instagram-new-1758646536045-4",
    "reference": "TAKE-IT-DOWN-ACT",
    "title": "TAKE IT DOWN Act (Federal Law)",
    "summary": "Federal legislation requiring platforms to remove non-consensual intimate imagery within 48 hours of victim notification.",
    "url": "https://www.congress.gov/bill/119th-congress/senate-bill/146/text",
    "accessTimestamp": "2025-09-23T16:55:36.045Z",
    "policies": [
      {
        "id": "take-it-down-act-authentic-adults",
        "reference": "Section 2(h)(2)(A)",
        "summary": "Prohibits knowingly publishing intimate visual depictions of adults obtained without consent or reasonable expectation of privacy, when intended to cause harm or actually causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is not a minor if— (i) the intimate visual depiction was obtained or created under circumstances in which the person knew or reasonably should have known the identifiable individual had a reasonable expectation of privacy; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the intimate visual depiction— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intimate visual depiction was obtained or created under circumstances where individual had reasonable expectation of privacy",
          "Content was not voluntarily exposed in public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-act-authentic-minors",
        "reference": "Section 2(h)(2)(B)",
        "summary": "Prohibits knowingly publishing intimate visual depictions of minors with intent to abuse, humiliate, harass, degrade, or for sexual gratification",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish an intimate visual depiction of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content depicts an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-act-deepfake-adults",
        "reference": "Section 2(h)(3)(A)",
        "summary": "Prohibits knowingly publishing digitally created intimate imagery of adults without consent when intended to cause harm or actually causing harm",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is not a minor if— (i) the digital forgery was published without the consent of the identifiable individual; (ii) what is depicted was not voluntarily exposed by the identifiable individual in a public or commercial setting; (iii) what is depicted is not a matter of public concern; and (iv) publication of the digital forgery— (I) is intended to cause harm; or (II) causes harm, including psychological, financial, or reputational harm, to the identifiable individual.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Digital forgery was published without consent of the identifiable individual",
          "Content was not voluntarily exposed in public or commercial setting",
          "Content is not a matter of public concern",
          "Publication is intended to cause harm or causes psychological, financial, or reputational harm"
        ]
      },
      {
        "id": "take-it-down-act-deepfake-minors",
        "reference": "Section 2(h)(3)(B)",
        "summary": "Prohibits knowingly publishing digitally created intimate imagery of minors with intent to abuse, humiliate, harass, degrade, or for sexual gratification",
        "quote": "it shall be unlawful for any person, in interstate or foreign commerce, to use an interactive computer service to knowingly publish a digital forgery of an identifiable individual who is a minor with intent to— (i) abuse, humiliate, harass, or degrade the minor; or (ii) arouse or gratify the sexual desire of any person.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Digital forgery depicts an identifiable minor",
          "Publication is intended to abuse, humiliate, harass, or degrade the minor",
          "Publication is intended to arouse or gratify sexual desire"
        ]
      },
      {
        "id": "take-it-down-act-threats-authentic",
        "reference": "Section 2(h)(6)(A)",
        "summary": "Prohibits threatening to publish intimate visual depictions for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (2) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be punished as provided in paragraph (4).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to publish intimate visual depictions",
          "Threat made for purpose of intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-act-threats-deepfake",
        "reference": "Section 2(h)(6)(B)",
        "summary": "Prohibits threatening to publish digitally created intimate imagery for intimidation, coercion, extortion, or to create mental distress",
        "quote": "Any person who intentionally threatens to commit an offense under paragraph (3)(A) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 18 months, or both. Any person who intentionally threatens to commit an offense under paragraph (3)(B) for the purpose of intimidation, coercion, extortion, or to create mental distress shall be fined under title 18, United States Code, imprisoned not more than 30 months, or both.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Intentional threat to publish digital forgery",
          "Threat made for purpose of intimidation, coercion, extortion, or to create mental distress"
        ]
      },
      {
        "id": "take-it-down-act-platform-removal",
        "reference": "Section 3(a)(1)",
        "summary": "Requires covered platforms to establish a process for individuals to request removal of intimate visual depictions published without consent",
        "quote": "Not later than 1 year after the date of enactment of this Act, a covered platform shall establish a process whereby an identifiable individual (or an authorized person acting on behalf of such individual) may— (i) notify the covered platform of an intimate visual depiction published on the covered platform that— (I) includes a depiction of the identifiable individual; and (II) was published without the consent of the identifiable individual; and (ii) submit a request for the covered platform to remove such intimate visual depiction.",
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
            "description": "Physical or electronic signature of the identifiable individual or authorized person",
            "example": "Digital signature or scanned signature",
            "reason": "To verify identity and authorization for the removal request"
          },
          {
            "description": "Identification and location information for the intimate visual depiction",
            "example": "URL or specific location of the content on the platform",
            "reason": "To enable the platform to locate the specific content for removal"
          },
          {
            "description": "Statement of good faith belief that content is non-consensual",
            "example": "Brief explanation of why the content was published without consent",
            "reason": "To establish that the content violates the non-consensual publication prohibition"
          },
          {
            "description": "Contact information for the requesting individual",
            "example": "Email address or phone number",
            "reason": "To enable platform communication regarding the removal request"
          }
        ],
        "removalCriteria": [
          "Content includes depiction of the identifiable individual",
          "Content was published without consent of the identifiable individual",
          "Valid removal request submitted through established process"
        ]
      },
      {
        "id": "take-it-down-act-platform-timeframe",
        "reference": "Section 3(a)(3)",
        "summary": "Requires covered platforms to remove reported intimate visual depictions within 48 hours and make reasonable efforts to remove identical copies",
        "quote": "Upon receiving a valid removal request from an identifiable individual (or an authorized person acting on behalf of such individual) using the process described in paragraph (1)(A)(ii), a covered platform shall, as soon as possible, but not later than 48 hours after receiving such request— (A) remove the intimate visual depiction; and (B) make reasonable efforts to identify and remove any known identical copies of such depiction.",
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
          "removal": {
            "value": 48,
            "unit": "hours",
            "description": "Maximum time for platform to remove content after receiving valid removal request"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Valid removal request received through established process",
          "Request relates to intimate visual depiction published without consent"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
