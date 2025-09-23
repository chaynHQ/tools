import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758654329382-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "Comprehensive policy document covering all content rules including non-consensual intimate imagery, harassment, bullying, hate speech, and content removal standards. Updated August 14, 2025.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
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
          "impersonation",
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
        "id": "tt-cg-body-exposure-sexualized",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
          "Nudity",
          "Sexual activity",
          "Sexual services",
          "Sexually suggestive behavior involving young people",
          "Significant exposure involving young people"
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
          "Sharing personal information that could lead to identity theft",
          "Sharing personal information that could lead to stalking",
          "Sharing personal information that could lead to fraud"
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "AIGC that misleads about matters of public importance",
          "AIGC that harms individuals",
          "Failure to clearly label AI or editing used to realistically depict people or scenes"
        ]
      },
      {
        "id": "tt-cg-intellectual-property",
        "reference": "Integrity and Authenticity - Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
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
          "Content that violates intellectual property rights",
          "Reposts of copyrighted material without permission",
          "Reposts of trademarked material without permission"
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
          "Attempts to otherwise compromise TikTok's systems"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions that TikTok has notice and appeals processes under the Enforcement section, but specific details are not provided in this overview document",
      "steps": []
    }
  },
  {
    "id": "tiktok-new-1758654329382-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "Legal agreement between TikTok and users governing platform use, account management, and enforcement procedures. References Community Guidelines as binding policy.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
    "policies": [
      {
        "id": "tiktok-tos-harassment-intimidation",
        "reference": "Section 5",
        "summary": "Prohibits intimidating or harassing others and promoting sexually explicit material",
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
          "Content that intimidates or harasses another person",
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
          "Content that gives false impression of source"
        ]
      },
      {
        "id": "tiktok-tos-private-information",
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
          "Content containing private addresses, phone numbers, or email addresses",
          "Content containing personal identity document information",
          "Content containing credit card numbers"
        ]
      },
      {
        "id": "tiktok-tos-copyright-infringement",
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
          "Material that infringes privacy rights of another person",
          "Material that infringes trademark or other intellectual property rights"
        ]
      },
      {
        "id": "tiktok-tos-defamatory-content",
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
        "id": "tiktok-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind, including threats of physical violence",
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
          "Material containing threats of any kind",
          "Material containing threats of physical violence"
        ]
      },
      {
        "id": "tiktok-tos-harassment-bullying",
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
          "Material deliberately designed to provoke or antagonize people",
          "Material intended for trolling and bullying",
          "Material intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tiktok-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves the right to remove or disable access to content for any reason without prior notice",
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
            "description": "At any time without prior notice"
          },
          "removal": null
        },
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
        "summary": "Reserves the right to disclose user identity to third parties claiming intellectual property or privacy violations",
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
          "User Content that violates intellectual property rights",
          "User Content that violates right to privacy"
        ]
      },
      {
        "id": "tiktok-tos-repeat-infringer-policy",
        "reference": "Section 7",
        "summary": "Policy to disable or terminate accounts of users who repeatedly infringe copyrights or intellectual property rights",
        "quote": "It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
          "Repeated infringement of copyrights",
          "Repeated infringement of intellectual property rights of others"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users and request removal through TikTok's feedback system. Counter-notices may be filed for copyright claims, which can lead to content restoration unless legal action is taken.",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback to file a complaint",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original complaining party files legal action, removed content may be restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tiktok-new-1758654329382-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "Comprehensive privacy policy detailing data collection, use, and sharing practices. Last updated August 19, 2024.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
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
        "summary": "Allows content removal based on complaints, appeals, requests or feedback submitted about users",
        "quote": "We may receive information about you from others, including where you are included or mentioned in User Content, direct messages, in a complaint, appeal, request or feedback submitted to us, or if your contact information is provided to us.",
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
          "User is mentioned in reported content",
          "Complaint submitted about user or content",
          "Request for removal submitted"
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
            "reason": "To permit platform to locate the User Content"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate information provided to locate content"
        ]
      },
      {
        "id": "tt-pp-child-account-deletion",
        "reference": "Children and Teens",
        "summary": "Prohibits accounts for users under 13 with immediate deletion and account termination upon discovery",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Information deleted and account terminated upon discovery"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is under 13 years of age",
          "Personal information collected from child",
          "Platform becomes aware of underage user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests by following instructions in the communication received from TikTok",
      "steps": [
        "Submit initial request through privacy portal or contact form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758654329382-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "Detailed policy covering copyright infringement, DMCA procedures, trademark violations, and counter-notification processes. Includes repeat infringer policy and appeal mechanisms.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright, including unauthorized use of copyrighted content without proper authorization or legally valid reason",
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
            "example": "Details about the copyrighted work, evidence of ownership, location of infringing content",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Information about the copyright owner",
            "example": "Name and contact details of the copyright holder",
            "reason": "Required for statutory compliance with DMCA and similar laws"
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
        "summary": "Removes user content that infringes another person's copyright and may restrict access to LIVE features for copyright infringement",
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
        "id": "tt-ip-copyright-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe copyright violations",
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
          "Severe copyright violations occur"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of identical or similar trademarks in connection with goods or services that may cause confusion about source, origin, sponsorship or affiliation",
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
            "example": "Details about the trademark, evidence of ownership, location of infringing content",
            "reason": "To facilitate investigation of trademark infringement claims"
          },
          {
            "description": "Information about the trademark owner",
            "example": "Name and contact details of the trademark holder",
            "reason": "Required for proper evaluation of trademark infringement reports"
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
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and restricts access to LIVE features for trademark violations",
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
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe trademark violations",
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
          "Severe trademark violations occur"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark infringement removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal within the TikTok app",
        "TikTok may contact you for additional questions about your appeal",
        "For copyright appeals outside EU: Appeal forwarded to original reporter who may file lawsuit",
        "For copyright appeals in EU: Appeal processed under EU copyright exceptions for quotation, criticism, review, caricature, parody or pastiche",
        "Content may be reinstated at TikTok's sole discretion based on evaluation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758654329382-4",
    "reference": "TIKTOK-NCII-001",
    "title": "Strengthening enforcement of sexually suggestive content",
    "summary": "Official newsroom announcement detailing TikTok's partnership with StopNCII.org and enhanced policies against non-consensual intimate imagery and sexually explicit content.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
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
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content identified as non-consensual intimate imagery",
          "Content flagged through StopNCII partnership"
        ]
      },
      {
        "id": "tt-nudity-001",
        "reference": "General policies",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
        "contentTypes": [
          "intimate",
          "other"
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
          "Content contains nudity",
          "Content shows sexual activity",
          "Content is sexually explicit",
          "Content directs to adult websites or apps"
        ]
      },
      {
        "id": "tt-suggestive-001",
        "reference": "Content recommendation policies",
        "summary": "Prohibits implied nudity, sensual content, and other content not suitable for all audiences from being recommended in For You feeds",
        "quote": "TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
        "contentTypes": [
          "intimate",
          "other"
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
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13"
        ]
      },
      {
        "id": "tt-mature-content-001",
        "reference": "Content Levels system",
        "summary": "Restricts content with mature themes including sexually suggestive content from reaching teen accounts (ages 13-17)",
        "quote": "our Content Levels system, which is designed to prevent certain content with more mature or complex themes (such as content containing profanity, adult innuendo, or sexually suggestive content) from reaching audiences between ages 13-17 (teen accounts).",
        "contentTypes": [
          "intimate",
          "other"
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
          "Content contains mature or complex themes",
          "Content contains adult innuendo",
          "Content is sexually suggestive"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758654329382-5",
    "reference": "TIKTOK-HARASSMENT-001",
    "title": "Safety and Civility Guidelines",
    "summary": "Specific section of Community Guidelines addressing harassment, bullying, doxxing, and harmful behavior. Updated August 14, 2025.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
    "policies": [
      {
        "id": "tt-cg-ncii-001",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows or promotes image-based sexual abuse",
          "Intimate images shared without consent",
          "Content created for sexual purposes without consent"
        ]
      },
      {
        "id": "tt-cg-sextortion-001",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate content without permission to demand money, sexual content, or other demands",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows, promotes, or engages in sextortion",
          "Threats to share intimate content without permission"
        ]
      },
      {
        "id": "tt-cg-youth-sextortion-001",
        "reference": "Youth Sexual and Physical Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate content of young people without permission to make demands",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Sextortion involving young people",
          "Threats to share intimate content of minors"
        ]
      },
      {
        "id": "tt-cg-csam-001",
        "reference": "Youth Sexual and Physical Abuse - CSAM",
        "summary": "Prohibits any content involving the sexual exploitation of young people, including digital or AI-generated images",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Any screenshot or clip from CSAM material",
          "Content that sexualizes or fetishizes young people",
          "Digital or AI-generated sexual content involving minors"
        ]
      },
      {
        "id": "tt-cg-harassment-doxing-001",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Publishing personal information with malicious intent",
          "Threatening to publish personal information",
          "Encouraging others to engage in doxing"
        ]
      },
      {
        "id": "tt-cg-harassment-sexual-001",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits the sexualization or sexual degradation of individuals through language or behaviors",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
          "Making unwanted sexual comments or engaging in unwanted sexual behavior",
          "Mimicking sexual acts using platform features",
          "Making remarks about someone's intimate body parts"
        ]
      },
      {
        "id": "tt-cg-harassment-coordinated-001",
        "reference": "Harassment and Bullying - Coordinated Abuse",
        "summary": "Prohibits inciting harassment or promoting coordinated abuse against individuals",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
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
          "Content that incites harassment",
          "Promoting coordinated abuse",
          "Encouraging others to leave abusive comments"
        ]
      },
      {
        "id": "tt-cg-harassment-physical-001",
        "reference": "Harassment and Bullying - Physical Attributes",
        "summary": "Prohibits insulting someone's physical attributes including weight, facial features, or body parts",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts",
        "contentTypes": [
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
          "Content that insults physical attributes",
          "Degrading comments about appearance"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions appeals processes but does not provide specific details about the appeals procedure for content removal decisions",
      "steps": []
    }
  },
  {
    "id": "tiktok-new-1758654329382-6",
    "reference": "TIKTOK-PRIVACY-SEC-001",
    "title": "Privacy and Security Guidelines",
    "summary": "Community Guidelines section specifically addressing personal information sharing, identity theft prevention, and platform security measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
    "policies": [
      {
        "id": "tt-privacy-personal-info-high-risk",
        "reference": "Personal Information - High Risk Personal Information",
        "summary": "Prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm",
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
        "id": "tt-privacy-personal-info-moderate-risk",
        "reference": "Personal Information - Moderate Risk Personal Information",
        "summary": "Prohibits moderate risk personal information shared without consent when it puts someone at risk of psychological harm",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
        "contentTypes": [
          "private",
          "personal",
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
        "id": "tt-privacy-image-audio-likeness",
        "reference": "Personal Information - Moderate Risk Personal Information",
        "summary": "Prohibits sharing of image/audio likeness without consent when it may cause harm such as emotional distress or reputational damage",
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
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence of emotional distress, reputational damage, or unwanted contact",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Image/audio likeness shared without consent",
          "Content may cause emotional distress",
          "Content may cause reputational damage",
          "Content may lead to unwanted contact"
        ]
      },
      {
        "id": "tt-privacy-private-communications",
        "reference": "Personal Information - Moderate Risk Personal Information",
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
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence showing the communications were private and on sensitive subjects",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Private communications on sensitive subjects",
          "Disclosed by individuals who were not part of the exchange"
        ]
      },
      {
        "id": "tt-security-account-access",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or allowing unauthorized access to accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
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
          "Giving login information to someone else",
          "Allowing others to break platform rules on your account"
        ]
      },
      {
        "id": "tt-security-unauthorized-access",
        "reference": "Platform Security",
        "summary": "Prohibits using unauthorized methods to access the platform or creating fake versions",
        "quote": "Using unauthorized ways to access TikTok or creating fake versions of the platform",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using unauthorized ways to access the platform",
          "Creating fake versions of the platform"
        ]
      },
      {
        "id": "tt-security-phishing-hacking",
        "reference": "Platform Security",
        "summary": "Prohibits attempts to steal personal information, hack accounts, or access data through deceptive methods",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
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
          "Attempting to steal personal information",
          "Attempting to hack accounts",
          "Attempting to access data using phishing",
          "Attempting to access data using smishing",
          "Attempting to access data using automated tools"
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
    "id": "tiktok-new-1758654329382-7",
    "reference": "TIKTOK-APPEAL-001",
    "title": "Content violations and bans",
    "summary": "Support documentation explaining TikTok's enforcement procedures, strike system, appeal processes, and how users can contest content removal decisions.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-23T19:05:29.382Z",
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
          "impersonation",
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
        "summary": "Implements a strike system for Community Guidelines violations with strikes expiring after 90 days",
        "quote": "Our system counts the number of times your account has violated our Community Guidelines, and for each violation after your first warning, you'll receive a strike on your account... Strikes on your TikTok account will expire after 90 days and will no longer be taken into consideration for a permanent account ban.",
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
            "description": "Strikes expire after 90 days"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Community Guidelines",
          "Account reaches strike threshold for permanent ban"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal decisions and account bans through the TikTok app notification system or account analytics",
      "steps": [
        "Receive notification of content removal or account action",
        "Access the appeal option through system notifications in Inbox > Account updates or through post analytics",
        "Submit appeal explaining why the decision should be reversed",
        "Wait for review by TikTok's Trust and Safety team",
        "If appeal is approved, content/account is reinstated and strike is removed"
      ]
    }
  }
],
};
