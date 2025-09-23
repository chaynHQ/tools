import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758653008375-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "Comprehensive policy document covering content rules, enforcement, and safety standards including non-consensual intimate imagery, harassment, bullying, and content removal policies",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
        "removalCriteria": [
          "Content that harasses or bullies others",
          "Degrading remarks about appearance",
          "Doxing",
          "Sexual harassment",
          "Coordinated abuse"
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that shows adult sexual abuse or exploitation",
          "Content that promotes adult sexual abuse or exploitation",
          "Content that facilitates adult sexual abuse or exploitation"
        ]
      },
      {
        "id": "tt-cg-personal-information",
        "reference": "Privacy and Security - Personal Information",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
          "Sharing personal information that could lead to harm",
          "Information that could enable identity theft",
          "Information that could enable stalking",
          "Information that could enable fraud"
        ]
      },
      {
        "id": "tt-cg-body-exposure-sexualized",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits certain types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior involving significant exposure",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
          "Nudity",
          "Sexual activity",
          "Sexual services",
          "Sexually suggestive behavior with significant exposure"
        ]
      },
      {
        "id": "tt-cg-aigc-harmful",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content",
        "summary": "Prohibits AI-generated content that misleads about matters of public importance or that harms individuals",
        "quote": "We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "AI-generated content that misleads about matters of public importance",
          "AI-generated content that harms individuals"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content that violates intellectual property rights",
          "Reposts of copyrighted material without permission",
          "Reposts of trademarked material without permission"
        ]
      },
      {
        "id": "tt-cg-deceptive-behaviors",
        "reference": "Integrity and Authenticity - Deceptive Behavior & Fake Engagement",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, or the trade of services that artificially boost engagement or trick the recommendation system",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Accounts that mislead users",
          "Accounts that try to manipulate the platform",
          "Trade of services that artificially boost engagement",
          "Services that trick the recommendation system"
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
          "Attempts to hack TikTok's systems",
          "Attempts to reverse-engineer TikTok's systems",
          "Attempts to compromise TikTok's systems"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides notice and appeals processes for enforcement actions, though specific details are not provided in this overview document",
      "steps": [
        "Users receive notice of enforcement actions",
        "Appeals process is available for enforcement decisions"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653008375-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "Legal agreement between TikTok and users governing platform use, account management, and user obligations including content policies and enforcement mechanisms",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-tos-harassment-intimidation",
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
        "id": "tt-tos-impersonation",
        "reference": "Section 5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting user identity or affiliation",
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
          "Content that falsely misrepresents user identity or affiliation",
          "Content that gives false impression of emanating from the Services"
        ]
      },
      {
        "id": "tt-tos-private-information",
        "reference": "Section 5",
        "summary": "Prohibits uploading or sharing private information of third parties without authorization",
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
          "Content containing addresses of third parties",
          "Content containing phone numbers of third parties",
          "Content containing email addresses of third parties",
          "Content containing personal identity document information",
          "Content containing credit card numbers"
        ]
      },
      {
        "id": "tt-tos-copyright-infringement",
        "reference": "Section 5",
        "summary": "Prohibits material that infringes copyright, trademark, or other intellectual property rights",
        "quote": "any material which does or may infringe any copyright, trademark or other intellectual property or privacy rights of any other person;",
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
          "Material that infringes copyright of another person",
          "Material that infringes trademark rights",
          "Material that infringes other intellectual property rights",
          "Material that violates privacy rights of another person"
        ]
      },
      {
        "id": "tt-tos-defamatory-content",
        "reference": "Section 5",
        "summary": "Prohibits defamatory, obscene, offensive, or inflammatory material",
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
          "Material that is defamatory of any person",
          "Material that is obscene, offensive, or inflammatory",
          "Material that is inappropriate in nature"
        ]
      },
      {
        "id": "tt-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind including physical violence",
        "quote": "any material that contains a threat of any kind, including threats of physical violence;",
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
          "Material containing threats of any kind",
          "Material containing threats of physical violence"
        ]
      },
      {
        "id": "tt-tos-harassment-bullying",
        "reference": "Section 5",
        "summary": "Prohibits material designed to provoke, harass, harm, or embarrass people including trolling and bullying",
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
          "Material deliberately designed to provoke or antagonise people",
          "Material intended for trolling and bullying",
          "Material intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves right to remove or disable access to content for policy violations or harm to services and users",
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
        "timeframes": {
          "response": {
            "value": null,
            "unit": "immediate",
            "description": "At any time and without prior notice"
          },
          "removal": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content found objectionable",
          "Content in violation of Terms of Service",
          "Content in violation of Community Policy",
          "Content harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-identity-disclosure",
        "reference": "Section 7",
        "summary": "Reserves right to disclose user identity to third parties claiming intellectual property or privacy violations",
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
          "User Content that violates intellectual property rights of third parties",
          "User Content that violates privacy rights of third parties"
        ]
      },
      {
        "id": "tt-tos-expeditious-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Expeditiously remove infringing material"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Infringing material that platform becomes aware of",
          "Repeated infringement of copyrights or intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users and request removal of their own content if under 18 in California",
      "steps": [
        "Contact TikTok at the provided feedback URL",
        "For California users under 18: Label request as 'California Removal Request' in email subject line",
        "Provide description of User Content to be removed",
        "Provide information reasonably sufficient to locate the content"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653008375-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "Policy detailing how TikTok collects, uses, and protects user personal information, including data handling for content moderation and user rights",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-pp-user-content-removal",
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
        "id": "tt-pp-content-reporting",
        "reference": "Information From Other Sources",
        "summary": "Allows content removal based on complaints submitted by users or third parties",
        "quote": "We may receive information about you from others, including where you are included or mentioned in User Content, direct messages, in a complaint, appeal, request or feedback submitted to us",
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
          "User is included or mentioned in content without consent",
          "Complaint submitted regarding unauthorized content"
        ]
      },
      {
        "id": "tt-pp-account-termination",
        "reference": "Data Security and Retention",
        "summary": "Prohibits violations of Terms of Service and Community Guidelines with immediate profile removal for violations",
        "quote": "If you violate our Terms of Service, Community Guidelines, or other conditions or policies, we may remove your profile immediately, but may keep other information about you to process the violation.",
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
            "value": null,
            "unit": "immediate",
            "description": "Profile may be removed immediately upon violation"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Violation of Terms of Service",
          "Violation of Community Guidelines",
          "Violation of other platform conditions or policies"
        ]
      },
      {
        "id": "tt-pp-underage-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows users under 18 in California to request removal of their posted content",
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
            "description": "Description of the content to be removed",
            "example": "Detailed description of the User Content you want removed",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information to locate the content",
            "example": "URL, username, or other identifying information",
            "reason": "To reasonably permit platform to locate the content"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate information provided to locate content"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial request through privacy reporting form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with required information"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653008375-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures including takedown notices, counter-notifications, and repeat infringer policies",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits content that infringes copyright, including unauthorized use of copyrighted personal images and videos",
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
            "example": "Details about the copyrighted work and evidence of infringement",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of the rights holder",
            "reason": "Platform may need to contact the reporter and will provide this information to the user"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization",
          "Use of copyrighted content without legally valid reason"
        ]
      },
      {
        "id": "tt-ip-copyright-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that infringes copyright and may restrict account access, with repeat infringer policy leading to account bans",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement.",
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
          "User content infringes another person's copyright",
          "Repeated copyright infringement by the same user",
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
            "example": "Details about the trademark and evidence of infringement",
            "reason": "To facilitate evaluation of the trademark infringement report"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of the trademark holder",
            "reason": "Platform may need to contact the reporter and will provide this information to the user"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation",
          "Use in connection with goods or services"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans (Trademark)",
        "summary": "Removes content that violates trademark rights and implements repeat infringer policy with potential account bans",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement.",
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
          "Content promotes or solicits counterfeit goods",
          "Repeated trademark infringement by the same user",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence, and may be forwarded to original reporters.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "Platform may contact user for additional questions",
        "For non-EU users: Appeal forwarded to original reporter who may file lawsuit",
        "For EU users: Appeal processed under EU copyright exceptions framework",
        "Content may be reinstated at TikTok's discretion based on evaluation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653008375-4",
    "reference": "TIKTOK-SMT-001",
    "title": "Sensitive and Mature Themes Policy",
    "summary": "Specific community guidelines section addressing sexually explicit content, non-consensual intimate imagery, and age-restricted content policies",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-smt-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors - Not Allowed",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content including digital or illustrated images",
        "quote": "Showing: Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images, like manga; Physical sexual arousal or stimulation; Fetish or kink behavior, such as BDSM or sexual behavior involving a focus on specific body parts; Nudity of adults or young people—including digital or illustrated images, like manga",
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
          "Content shows penetrative sex, non-penetrative sex, or oral sex",
          "Content depicts physical sexual arousal or stimulation",
          "Content shows fetish or kink behavior",
          "Content displays nudity of adults or young people",
          "Content includes digital or illustrated intimate images"
        ]
      },
      {
        "id": "tt-smt-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - Not Allowed",
        "summary": "Prohibits facilitating access to sexual services including offering or requesting sexual content or imagery",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
        "contentTypes": [
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
          "Content facilitates access to sexual services",
          "Content offers or asks for sexual acts",
          "Content involves sexual chats or imagery",
          "Content promotes or distributes adult content"
        ]
      },
      {
        "id": "tt-smt-youth-sexualized-content",
        "reference": "Body Exposure and Sexualized Behaviors - Not Allowed",
        "summary": "Prohibits young people engaging in intimate behaviors, sexually suggestive acts, or being subject to sexually explicit language",
        "quote": "Showing young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing; Sexually explicit language involving or directed at young people; Significant body exposure of young people, such as wearing only underwear or lingerie",
        "contentTypes": [
          "intimate",
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
          "Content shows young people in intimate situations",
          "Content depicts young people in sexually suggestive acts",
          "Content involves sexually explicit language directed at young people",
          "Content shows significant body exposure of young people"
        ]
      },
      {
        "id": "tt-smt-adult-sexualized-restricted",
        "reference": "Body Exposure and Sexualized Behaviors - FYF Ineligible & Age-Restricted",
        "summary": "Age-restricts and removes from recommendations content showing significant adult body exposure or sexually suggestive behavior",
        "quote": "Showing: Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks; In some regions, moderate adult body exposure—such as the side breast or partial exposure of the buttocks that would be typically covered based on cultural norms; Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
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
          "Content shows significant adult body exposure",
          "Content depicts moderate adult body exposure in certain regions",
          "Content shows adults engaging in intimate behaviors",
          "Content involves sexually suggestive acts or framing"
        ]
      },
      {
        "id": "tt-smt-youth-revealing-clothing",
        "reference": "Body Exposure and Sexualized Behaviors - FYF Ineligible",
        "summary": "Removes from recommendations content showing young people in revealing clothing that outlines intimate body parts",
        "quote": "Showing young people in clothing that reveals cleavage or outlines intimate body parts",
        "contentTypes": [
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
          "Content shows young people in clothing that reveals cleavage",
          "Content depicts young people in clothing that outlines intimate body parts"
        ]
      },
      {
        "id": "tt-smt-graphic-violence-prohibited",
        "reference": "Shocking and Graphic Content - Not Allowed",
        "summary": "Prohibits extremely gory, disturbing, or violent content that could cause psychological harm",
        "quote": "Depictions of real-world: Graphic incidents and violence, such as torture, the moment of someone's death, or the shooting of an individual; Dead bodies; Graphic injury, such as dismembered, mutilated, charred, or burned bodies",
        "contentTypes": [
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
          "Content depicts graphic incidents and violence",
          "Content shows dead bodies",
          "Content displays graphic injury or mutilation",
          "Content could cause psychological harm"
        ]
      },
      {
        "id": "tt-smt-graphic-violence-restricted",
        "reference": "Shocking and Graphic Content - FYF Ineligible & Age-Restricted",
        "summary": "Age-restricts and removes from recommendations content with significant bleeding, fighting, or graphic incidents in public interest contexts",
        "quote": "Depictions of real-world: Bleeding that is significant or the focus of content; Fighting between individuals that may cause physical injury; Graphic incidents, violence, or injury in public-interest contexts, such as during war or natural disasters",
        "contentTypes": [
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
          "Content shows significant bleeding as the focus",
          "Content depicts fighting that may cause physical injury",
          "Content shows graphic incidents in public-interest contexts"
        ]
      },
      {
        "id": "tt-smt-animal-abuse-prohibited",
        "reference": "Animal Abuse - Not Allowed",
        "summary": "Prohibits animal abuse, cruelty, neglect, and exploitation including inhumane treatment and inappropriate sexual content",
        "quote": "Showing or promoting inhumane slaughter, mutilation, or abuse of animals, including staged animal fights; Showing or promoting mistreatment or neglect of animals, such as malnourishment; Showing dismembered, mutilated, charred, burned, or severely injured animals; Poaching; Bestiality",
        "contentTypes": [
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
          "Content shows or promotes inhumane treatment of animals",
          "Content depicts animal mistreatment or neglect",
          "Content shows severely injured or mutilated animals",
          "Content involves illegal wildlife hunting",
          "Content depicts inappropriate sexual activity involving animals"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758653008375-5",
    "reference": "TIKTOK-SC-001",
    "title": "Safety and Civility Guidelines",
    "summary": "Community guidelines section covering harassment, bullying, hate speech, and violent content policies with enforcement procedures",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-sc-adult-sexual-abuse",
        "reference": "Adult Sexual Abuse",
        "summary": "Prohibits content that shows or promotes sexual abuse or exploitation of adults, including non-consensual sexual acts, image-based sexual abuse, and sextortion",
        "quote": "We are committed to providing a space that embraces gender equity, supports healthy relationships, and respects intimate privacy. We don't allow content that shows or promotes the sexual abuse or exploitation of adults. This includes: Non-Consensual Sexual Acts, Image-Based Sexual Abuse, Sextortion",
        "contentTypes": [
          "intimate",
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
          "Content showing or promoting non-consensual sexual acts or image-based sexual abuse",
          "Content showing or promoting sextortion",
          "Explicit imagery of adult sexual abuse in fiction or art"
        ]
      },
      {
        "id": "tt-sc-image-based-sexual-abuse",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes, including content that seems consensually taken but is distributed without consent",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
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
          "Having, sharing, or creating intimate images without consent",
          "Distribution of intimate content taken with consent but shared without permission"
        ]
      },
      {
        "id": "tt-sc-sextortion",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate or sexual content without permission, usually to demand money, sexual acts, or more explicit content",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Threatening to share intimate or sexual content without permission",
          "Demanding money, sexual acts, or more explicit content through threats"
        ]
      },
      {
        "id": "tt-sc-harassment-bullying",
        "reference": "Harassment and Bullying",
        "summary": "Prohibits harassment or bullying, including sexual harassment, doxing, and coordinated abuse campaigns",
        "quote": "We welcome respectful discussion and believe everyone should feel safe sharing their voice. We don't allow harassment or bullying, including when it's done in retaliation.",
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
          "Making unwanted sexual comments or engaging in unwanted sexual behavior towards someone",
          "Insulting someone's physical attributes",
          "Doxing or encouraging others to do so",
          "Inciting harassment or promoting coordinated abuse"
        ]
      },
      {
        "id": "tt-sc-sexual-harassment",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits the sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
          "Sexualization or sexual degradation through language or behaviors",
          "Making unwanted sexual comments about intimate body parts",
          "Mimicking sexual acts using platform features"
        ]
      },
      {
        "id": "tt-sc-doxing",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
        "contentTypes": [
          "private",
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
          "Publishing personal information with malicious intent",
          "Threatening to publish personal information",
          "Content with captions or hashtags indicating malicious intent"
        ]
      },
      {
        "id": "tt-sc-youth-sexual-abuse",
        "reference": "Youth Sexual and Physical Abuse",
        "summary": "Prohibits sharing, showing, promoting, or engaging in abuse or exploitation of youth, including grooming, sextortion, and sexual solicitation",
        "quote": "We're committed to making TikTok a safe and supportive space for young people. We don't allow sharing, showing, promoting, or engaging in abuse or exploitation of youth. This includes: Child Sexual Abuse Material (CSAM), Grooming, Sextortion, Sexual Solicitation, Pedophilia, Physical or Psychological Harm to young people",
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
          "Content showing, promoting, or engaging in youth sexual abuse or exploitation",
          "Grooming behavior targeting young people",
          "Sexual solicitation of minors",
          "Sexualizing or fetishizing a young person"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions that TikTok has notice and appeals processes but does not provide specific details about the appeals process in this section",
      "steps": []
    }
  },
  {
    "id": "tiktok-new-1758653008375-6",
    "reference": "TIKTOK-PS-001",
    "title": "Privacy and Security Guidelines",
    "summary": "Community guidelines section addressing personal information sharing, doxxing, and platform security violations",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content containing personal information that could lead to stalking, identity theft, fraud, or other harm",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains personal information that could lead to stalking",
          "Content contains personal information that could lead to identity theft",
          "Content contains personal information that could lead to fraud",
          "Content contains personal information that could lead to other harm"
        ]
      },
      {
        "id": "tt-ps-personal-info-moderate-risk",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits moderate risk personal information shared without consent when it puts someone at risk of psychological harm",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Platform requires additional context to assess moderate risk personal information removal requests"
          }
        ],
        "removalCriteria": [
          "Moderate risk personal information shared without consent",
          "Information puts someone at risk of psychological harm"
        ]
      },
      {
        "id": "tt-ps-image-audio-likeness",
        "reference": "Personal Information - Image/Audio Likeness",
        "summary": "Prohibits sharing of image or audio likeness as moderate risk personal information that may cause harm",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
        "removalCriteria": [
          "Content may cause emotional distress",
          "Content may cause reputational damage",
          "Content may lead to unwanted contact",
          "Image or audio likeness shared without consent"
        ]
      },
      {
        "id": "tt-ps-private-communications",
        "reference": "Personal Information - Private Communications",
        "summary": "Prohibits disclosure of private communications on sensitive subjects by individuals who were not part of the exchange",
        "quote": "Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Private communications on sensitive subjects disclosed",
          "Communications disclosed by individuals who were not part of the exchange"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "Platform Security - Account Access",
        "summary": "Prohibits unauthorized access to accounts and data theft through hacking or phishing",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "private",
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempts to steal personal information",
          "Attempts to hack accounts",
          "Attempts to access data using phishing",
          "Attempts to access data using automated tools"
        ]
      },
      {
        "id": "tt-ps-login-sharing",
        "reference": "Platform Security - Login Information",
        "summary": "Prohibits sharing login information or allowing others to break platform rules on user accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Sharing login information with others",
          "Allowing others to break platform rules on user account"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's privacy reporting system",
      "steps": [
        "Access the privacy violation reporting form",
        "Submit details about the privacy violation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653008375-7",
    "reference": "TIKTOK-IA-001",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Community guidelines section covering impersonation, misinformation, and deceptive account behavior policies",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-23T18:43:28.375Z",
    "policies": [
      {
        "id": "tt-ia-aigc-private-figures",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits using the likeness of private figures without consent in AI-generated or significantly edited content",
        "quote": "Using the likeness of private figures without consent",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content uses the likeness of private figures without consent",
          "Content is AI-generated or significantly edited"
        ]
      },
      {
        "id": "tt-ia-aigc-sexualized",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits sexualized, fetishized, or victimizing depictions in AI-generated or edited content",
        "quote": "Sexualized, fetishized, or victimizing depictions",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains sexualized depictions",
          "Content contains fetishized depictions",
          "Content contains victimizing depictions"
        ]
      },
      {
        "id": "tt-ia-aigc-harassment",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-created likenesses made to bully or harass individuals",
        "quote": "AI-created likenesses made to bully or harass",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content uses AI-created likenesses",
          "Content is made to bully or harass"
        ]
      },
      {
        "id": "tt-ia-aigc-youth-inappropriate",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits accounts focused on AI images of youth in adult clothing or inappropriate poses",
        "quote": "Accounts focused on AI images of youth in clothing suited for adults, or sexualized poses or facial expressions",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account focuses on AI images of youth",
          "Images show youth in clothing suited for adults",
          "Images show youth in sexualized poses or facial expressions"
        ]
      },
      {
        "id": "tt-ia-aigc-public-figure-degradation",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-generated or edited content that misleadingly shows public figures being degraded, harassed, or linked to criminal behavior",
        "quote": "A public figure being degraded, harassed, or linked to criminal behavior",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows public figure being degraded",
          "Content shows public figure being harassed",
          "Content links public figure to criminal behavior",
          "Content is misleading about matters of public importance"
        ]
      },
      {
        "id": "tt-ia-deceptive-impersonation",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account pretends to be someone else",
          "Account does not clearly state it is a fan or parody account in the display name"
        ]
      },
      {
        "id": "tt-ia-fake-person-organization",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits pretending to be a fake person or organization with the goal of misleading people",
        "quote": "Pretending to be a fake person or organization with the goal of misleading people",
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
          "Account pretends to be a fake person or organization",
          "Goal is to mislead people"
        ]
      },
      {
        "id": "tt-ia-hacked-materials",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits distribution of hacked materials when this poses a significant risk of harm",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves hacked materials",
          "Distribution poses a significant risk of harm"
        ]
      },
      {
        "id": "tt-ia-ip-violation",
        "reference": "Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates someone else's intellectual property rights",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates someone else's copyrights",
          "Content violates someone else's trademarks",
          "Content violates someone else's other IP rights"
        ]
      },
      {
        "id": "tt-ia-circumvention",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits circumvention of policies including using different accounts to continue violating policies after being banned",
        "quote": "Circumvention of our policies, which includes: Spreading violative content across multiple accounts, Using a different account to continue violating policies after being banned, Returning to TikTok after being permanently banned for severe violations, Using another account to avoid restrictions",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Spreading violative content across multiple accounts",
          "Using a different account to continue violating policies after being banned",
          "Returning to TikTok after being permanently banned for severe violations",
          "Using another account to avoid restrictions"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
