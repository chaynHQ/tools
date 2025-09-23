import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758648710016-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "TikTok's comprehensive community guidelines covering content policies, enforcement, and user safety. Includes sections on safety and civility, sensitive and mature themes, integrity and authenticity, and privacy and security. Updated August 2025 with new provisions for AI content and enhanced policies.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
          "Content harasses or bullies others",
          "Content contains degrading remarks about appearance",
          "Content involves doxing",
          "Content constitutes sexual harassment",
          "Content involves coordinated abuse"
        ]
      },
      {
        "id": "tt-cg-adult-sexual-abuse",
        "reference": "Safety and Civility - Adult Sexual Abuse",
        "summary": "Prohibits content that shows, promotes, or facilitates adult sexual abuse or exploitation",
        "quote": "We don't allow content that shows, promotes, or facilitates adult sexual abuse or exploitation.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows adult sexual abuse or exploitation",
          "Content promotes adult sexual abuse or exploitation",
          "Content facilitates adult sexual abuse or exploitation"
        ]
      },
      {
        "id": "tt-cg-body-exposure-sexualized",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits certain types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
          "Content contains nudity",
          "Content shows sexual activity",
          "Content promotes sexual services",
          "Content involves sexually suggestive behavior involving young people",
          "Content shows significant exposure involving young people"
        ]
      },
      {
        "id": "tt-cg-personal-information",
        "reference": "Privacy and Security - Personal Information",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shares personal information that could lead to identity theft",
          "Content shares personal information that could lead to stalking",
          "Content shares personal information that could lead to fraud",
          "Content shares personal information that could lead to other harm"
        ]
      },
      {
        "id": "tt-cg-edited-media-aigc",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content (AIGC)",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads about matters of public importance or that harms individuals",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "AIGC misleads about matters of public importance",
          "AIGC harms individuals",
          "AI or editing used to realistically depict people without clear labeling"
        ]
      },
      {
        "id": "tt-cg-intellectual-property",
        "reference": "Integrity and Authenticity - Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
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
          "Content violates intellectual property rights",
          "Content reposts copyrighted material without permission",
          "Content reposts trademarked material without permission"
        ]
      },
      {
        "id": "tt-cg-platform-security",
        "reference": "Privacy and Security - Platform Security",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems",
        "quote": "We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves attempts to hack TikTok's systems",
          "Content involves attempts to reverse-engineer TikTok's systems",
          "Content involves attempts to compromise TikTok's systems"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides notice and appeals processes for enforcement actions, with users able to appeal content removal decisions",
      "steps": [
        "Users receive notice of enforcement actions",
        "Users can appeal enforcement decisions",
        "Appeals are reviewed according to TikTok's processes"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "TikTok's terms of service governing the relationship between users and the platform, including user obligations, content rights, and enforcement mechanisms. Incorporates Community Guidelines by reference.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tiktok-tos-harassment-intimidation",
        "reference": "Section 5",
        "summary": "Prohibits intimidating or harassing other users and promoting sexually explicit material",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;",
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
          "Content that intimidates or harasses another user",
          "Content that promotes sexually explicit material"
        ]
      },
      {
        "id": "tiktok-tos-impersonation",
        "reference": "Section 5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting identity or affiliation",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services;",
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
          "Content that impersonates any person or entity",
          "Content that falsely misrepresents identity or affiliation",
          "Content that gives false impression of origin"
        ]
      },
      {
        "id": "tiktok-tos-private-information",
        "reference": "Section 5",
        "summary": "Prohibits uploading private information of third parties including personal details and identifying documents",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers;",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content containing private addresses, phone numbers, or email addresses of third parties",
          "Content containing personal identity document numbers or features",
          "Content containing credit card numbers"
        ]
      },
      {
        "id": "tiktok-tos-defamatory-content",
        "reference": "Section 5",
        "summary": "Prohibits material that is defamatory, obscene, offensive, or hateful",
        "quote": "any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory;",
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
          "Content that is defamatory of any person",
          "Content that is obscene, offensive, or hateful",
          "Content that is inflammatory"
        ]
      },
      {
        "id": "tiktok-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind including threats of physical violence",
        "quote": "any material that contains a threat of any kind, including threats of physical violence;",
        "contentTypes": [
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
          "Content containing threats of any kind",
          "Content containing threats of physical violence"
        ]
      },
      {
        "id": "tiktok-tos-harmful-content",
        "reference": "Section 5",
        "summary": "Prohibits material designed to provoke, harass, harm, hurt, scare, distress, embarrass or upset people",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people;",
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
          "Content deliberately designed to provoke or antagonise people",
          "Content intended for trolling and bullying",
          "Content intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tiktok-tos-copyright-infringement",
        "reference": "Section 5",
        "summary": "Prohibits material that infringes copyright, trademark, intellectual property or privacy rights",
        "quote": "any material which does or may infringe any copyright, trademark or other intellectual property or privacy rights of any other person;",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "Content that infringes copyright of another person",
          "Content that infringes trademark or intellectual property rights",
          "Content that violates privacy rights of another person"
        ]
      },
      {
        "id": "tiktok-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves the right to remove or disable access to content at discretion for violation of terms or harm to services or users",
        "quote": "We reserve the right, at any time and without prior notice, to remove or disable access to content at our discretion for any reason or no reason. Some of the reasons we may remove or disable access to content may include finding the content objectionable, in violation of these Terms or our Community Policy, or otherwise harmful to the Services or our users.",
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
          "Content found objectionable",
          "Content in violation of Terms or Community Policy",
          "Content harmful to the Services or users"
        ]
      },
      {
        "id": "tiktok-tos-identity-disclosure",
        "reference": "Section 7",
        "summary": "Reserves the right to disclose user identity to third parties claiming intellectual property or privacy rights violations",
        "quote": "We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "User Content that violates third party intellectual property rights",
          "User Content that violates third party privacy rights"
        ]
      },
      {
        "id": "tiktok-tos-content-standards-removal",
        "reference": "Section 7",
        "summary": "Reserves the right to remove, disallow, block or delete posts that do not comply with content standards",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at \"Your Access to and Use of Our Services\" above.",
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
          "Posts that do not comply with content standards"
        ]
      },
      {
        "id": "tiktok-tos-user-complaint-removal",
        "reference": "Section 7",
        "summary": "Reserves the right to remove User Content in response to complaints from other users or third parties",
        "quote": "In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
          "User Content that violates Terms",
          "User Content subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tiktok-tos-infringing-material-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
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
          "Infringing material that TikTok becomes aware of",
          "Accounts of users who repeatedly infringe copyrights or intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content and counter-notices may be submitted for copyright claims, with potential restoration of content after ten business days unless legal action is filed",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback to file a complaint about information or materials uploaded by other users",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original complaining party files legal action, removed content may be replaced or access restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "TikTok's privacy policy explaining data collection, use, sharing, and user rights. Last updated August 19, 2024. Covers personal information handling and user control mechanisms.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-pp-user-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Prohibits content that violates Terms of Service and Community Guidelines through scanning and analysis of user content and messages",
        "quote": "To promote the safety and security of the Platform, including by scanning, analyzing, and reviewing User Content, messages and associated metadata for violations of our Terms of Service, Community Guidelines, or other conditions and policies.",
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
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies"
        ]
      },
      {
        "id": "tt-pp-abuse-fraud-detection",
        "reference": "How We Use Your Information",
        "summary": "Prohibits abuse, fraud, and illegal activity on the platform",
        "quote": "To help us detect abuse, fraud, and illegal activity on the Platform.",
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
          "Content constitutes abuse",
          "Content involves fraud",
          "Content involves illegal activity"
        ]
      },
      {
        "id": "tt-pp-identity-verification",
        "reference": "How We Use Your Information",
        "summary": "Requires identity verification for certain platform features and age verification",
        "quote": "To verify your identity in order to use certain features, such as livestream or verified accounts, or when you apply for a Business Account, to ensure that you are old enough to use the Platform (as required by law), or in other instances where verification may be required.",
        "contentTypes": [
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
            "description": "Proof of identity or age verification documents",
            "example": "Government-issued ID or age verification documentation",
            "reason": "Required to verify user identity and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "User fails to provide required identity verification",
          "User does not meet age requirements"
        ]
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Prohibits collection of personal information from children under 13 and requires account termination",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account.",
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
            "description": "Evidence that user is below age of 13",
            "example": "Report identifying underage user",
            "reason": "Required to protect children's privacy and comply with legal requirements"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age"
        ]
      },
      {
        "id": "tt-pp-content-removal-under-18",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows California residents under 18 to request removal of their posted content",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Description of the content to be removed and sufficient information to locate it",
            "example": "Detailed description of posted content and location information",
            "reason": "Required to identify and locate specific content for removal"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "Documentation showing California residence and age verification",
            "reason": "Required to verify eligibility under California law"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate information provided to locate content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial request through the privacy reporting form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "TikTok's comprehensive intellectual property policy covering copyright, trademark, and DMCA procedures. Includes takedown processes, counter-notification procedures, and repeat infringer policies.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits content that infringes copyright, including unauthorized use of copyrighted images, videos, and other content without proper authorization",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification, contact information",
            "reason": "To facilitate evaluation of the copyright infringement report"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes copyright and may restrict access to features for users who commit copyright infringement",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User content infringes another person's copyright"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer-copyright",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "Severe copyright violations"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of trademarks that may cause confusion about source, origin, sponsorship or affiliation",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
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
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark ownership details, specific infringing content identification, contact information",
            "reason": "To facilitate investigation of trademark infringement claims"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and restricts access to features for trademark violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Content promotes or solicits counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer-trademark",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "User repeatedly commits trademark infringement",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact for additional questions about the appeal",
        "Appeal forwarded to original reporter where appropriate",
        "Content may be reinstated at TikTok's discretion based on evaluation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-4",
    "reference": "TIKTOK-NCII-001",
    "title": "Strengthening enforcement of sexually suggestive content",
    "summary": "TikTok's policy announcement on enhanced enforcement against sexually suggestive content, including partnership with StopNCII.org for non-consensual intimate imagery prevention and content levels system for age-appropriate content.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-ncii-001",
        "reference": "Partnering across the industry",
        "summary": "Prohibits non-consensual intimate imagery and automatically prevents identified content from being posted through partnership with StopNCII.org",
        "quote": "We recently partnered with StopNCII.org, joining forces with Meta and Bumble, to bolster efforts to stop the spread of non-consensual intimate imagery. Not only will this collaboration provide better support for victims, it will also help automatically prevent content identified through our partnership with StopNCII from being posted on our platform.",
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
          "Content identified as non-consensual intimate imagery through StopNCII partnership"
        ]
      },
      {
        "id": "tt-sexual-content-001",
        "reference": "Community Guidelines",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains nudity",
          "Content depicts sexual activity",
          "Content is sexually explicit",
          "Content directs to adult websites or apps"
        ]
      },
      {
        "id": "tt-suggestive-content-001",
        "reference": "Content Levels system",
        "summary": "Restricts sexually suggestive content from reaching teen accounts (ages 13-17) and prevents recommendation in For You feeds",
        "quote": "To safeguard For You feeds, TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758648710016-5",
    "reference": "TIKTOK-HARASSMENT-001",
    "title": "Bullying prevention",
    "summary": "TikTok's dedicated policy page on bullying prevention, harassment policies, and user safety measures. Covers reporting mechanisms and support resources for harassment victims.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-bp-harassment-001",
        "reference": "Bullying prevention",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
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
          "Content that harasses individuals",
          "Content that humiliates individuals",
          "Content that threatens individuals",
          "Content that doxxes individuals (publishing personal information with malicious intent)"
        ]
      },
      {
        "id": "tt-bp-bullying-001",
        "reference": "What is bullying?",
        "summary": "Prohibits targeted behavior that intends to cause physical, social and/or psychological harm carried out by individuals or groups who misuse their power",
        "quote": "Bullying typically involves targeted behavior that intends to cause physical, social and/or psychological harm. The behavior can be carried out online or offline by an individual or a group who misuse their power, or perceived power, over another person or group of people who feel unable to stop it from happening. We recognize that bullying can cause severe distress to people, and we do not tolerate it on our platform.",
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
          "Targeted behavior intended to cause physical harm",
          "Targeted behavior intended to cause social harm",
          "Targeted behavior intended to cause psychological harm",
          "Behavior carried out by individuals or groups misusing their power over others"
        ]
      },
      {
        "id": "tt-bp-public-figures-001",
        "reference": "Can I make negative comments about Public Figures?",
        "summary": "Prohibits severe attacks against public figures that may promote physical harm or harassment",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
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
          "Severe attacks against public figures that may promote physical harm",
          "Content that promotes harassment against public figures",
          "Content that poses risk of physical harm to public figures",
          "Content that poses risk of severe psychological harm to public figures"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review",
      "steps": [
        "Report content in-app following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-6",
    "reference": "TIKTOK-REPORT-001",
    "title": "Report copyright infringement",
    "summary": "TikTok's official copyright infringement reporting form and process for submitting DMCA takedown requests.",
    "url": "https://www.tiktok.com/legal/report/Copyright",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-cr-001",
        "reference": "Copyright Infringement Report Form",
        "summary": "Prohibits copyright infringement in user-generated content and provides a reporting mechanism for rights holders",
        "quote": "This form is for infringements in user-generated content. Please do not make false claims. Misuse of the removal request webform, such as submitting false information, may result in the suspension of using the webform or other legal consequences.",
        "contentTypes": [
          "personal",
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
            "description": "Accurate information about the copyright infringement",
            "example": "Details of the copyrighted work and evidence of ownership",
            "reason": "To verify legitimate copyright claims and prevent false reporting"
          }
        ],
        "removalCriteria": [
          "Content must infringe on copyrighted material",
          "Report must contain accurate information and not be a false claim"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758648710016-7",
    "reference": "TIKTOK-IMPERSON-001",
    "title": "Report an impersonation account",
    "summary": "TikTok's policy and procedures for reporting impersonation accounts, including identity verification requirements and appeal processes.",
    "url": "https://support.tiktok.com/en/safety-hc/report-a-problem/report-an-impersonation-account",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-imperson-001",
        "reference": "Report an impersonation account",
        "summary": "Prohibits accounts that impersonate other individuals or entities",
        "quote": "If you believe an account is fake and impersonating you or someone else, you can report it to us",
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
            "description": "Valid identification documentation",
            "example": "Government-issued ID or other accepted identification methods",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "Details about who is being impersonated",
            "example": "Specify if it's yourself or someone else (celebrity)",
            "reason": "To categorize the type of impersonation report"
          },
          {
            "description": "Electronic signature confirmation",
            "example": "Enter your name as electronic signature",
            "reason": "To confirm the authenticity of the report"
          }
        ],
        "removalCriteria": [
          "Account is fake and impersonating another person",
          "Account is pretending to be someone else"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/submit-requests",
      "summary": "Users can appeal impersonation account decisions through online forms with different processes for U.S. and non-U.S. accounts",
      "steps": [
        "Select 'Appeal an Impersonation Account on TikTok' from the dropdown list",
        "Enter your email address and country information",
        "Specify who is being impersonated and provide additional details if prompted",
        "Upload valid identification documentation",
        "Confirm statements by selecting checkboxes",
        "Enter electronic signature",
        "Submit the appeal form"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-8",
    "reference": "TIKTOK-APPEAL-001",
    "title": "Content violations and bans",
    "summary": "TikTok's comprehensive policy on content violations, enforcement actions, and appeal processes. Covers strike systems, account bans, and user appeal rights.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [
      {
        "id": "tt-cg-ncii",
        "reference": "Severe violations - non-consensual content",
        "summary": "Prohibits posting or promoting content that depicts non-consensual intimate acts",
        "quote": "Post or promote content that depicts non-consensual sex acts such as rape or molestation.",
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
          "Content depicts non-consensual intimate acts",
          "Content promotes non-consensual intimate acts"
        ]
      },
      {
        "id": "tt-cg-csam",
        "reference": "Severe violations - youth exploitation",
        "summary": "Prohibits posting, promoting, or facilitating youth exploitation or child sexual abuse material",
        "quote": "Post, promote, or facilitate youth exploitation or child sexual abuse material (CSAM).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves youth exploitation",
          "Content contains child sexual abuse material",
          "Content facilitates youth exploitation or CSAM"
        ]
      },
      {
        "id": "tt-cg-impersonation",
        "reference": "Permanent ban criteria - impersonation",
        "summary": "Prohibits accounts that impersonate another person or entity in a deceptive manner",
        "quote": "The account impersonates another person or entity in a deceptive manner.",
        "contentTypes": [
          "personal",
          "intimate",
          "private",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account impersonates another person in a deceptive manner",
          "Account impersonates an entity in a deceptive manner"
        ]
      },
      {
        "id": "tt-cg-violence-threats",
        "reference": "Severe violations - violence promotion",
        "summary": "Prohibits promoting or threatening violence",
        "quote": "Promote or threaten violence.",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
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
          "Content promotes violence",
          "Content threatens violence"
        ]
      },
      {
        "id": "tt-ip-violations",
        "reference": "Permanent ban criteria - intellectual property",
        "summary": "Prohibits multiple violations of intellectual property policy",
        "quote": "Multiple violations of our Intellectual Property Policy.",
        "contentTypes": [
          "personal",
          "intimate",
          "other"
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
          "Multiple violations of intellectual property policy have occurred"
        ]
      },
      {
        "id": "tt-strike-system",
        "reference": "Account strikes and bans",
        "summary": "Implements a strike system for Community Guidelines violations with progressive enforcement",
        "quote": "Our system counts the number of times your account has violated our Community Guidelines, and for each violation after your first warning, you'll receive a strike on your account. We count strikes by policy area as listed in our Community Guidelines (for example, safety and civility) or by feature (for example, comments or direct messages).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Community Guidelines",
          "Account has reached strike threshold for multiple violations"
        ]
      },
      {
        "id": "tt-strike-expiry",
        "reference": "Strike expiration",
        "summary": "Account strikes expire after 90 days and are no longer considered for permanent bans",
        "quote": "Strikes on your TikTok account will expire after 90 days and will no longer be taken into consideration for a permanent account ban.",
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
            "description": "Strike expiration timeframe"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": []
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety#3",
      "summary": "Users can appeal content removal or account bans through the TikTok app or support system. Appeals are reviewed and if approved, content/accounts are reinstated and strikes are removed.",
      "steps": [
        "Access the removed content or banned account notification",
        "Select the appeal option provided in the notification or through account settings",
        "Submit appeal through the provided process",
        "Wait for review by TikTok's Trust and Safety team",
        "Receive notification of appeal decision",
        "If approved, content/account is reinstated and strike is removed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758648710016-9",
    "reference": "TIKTOK-COUNTER-001",
    "title": "Counter Notification Form",
    "summary": "TikTok's counter-notification process for users who believe their content was wrongfully removed due to copyright claims, following DMCA procedures.",
    "url": "https://www.tiktok.com/legal/report/counternotification?lang=en",
    "accessTimestamp": "2025-09-23T17:31:50.016Z",
    "policies": [],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/counternotification?lang=en",
      "summary": "Counter notification form is only accessible via TikTok mobile application for submitting appeals directly within the app",
      "steps": [
        "Access the TikTok mobile application",
        "Submit appeal directly within the application interface"
      ]
    }
  }
],
};
