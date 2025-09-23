import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758649731218-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "TikTok's comprehensive community guidelines covering safety, civility, harassment, bullying, hate speech, violent organizations, youth safety, regulated goods, privacy, security, and platform integrity. Updated August 2025 with new policies on AI content, LIVE creators, and commercial disclosure.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
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
          "Sharing personal information that could lead to fraud",
          "Sharing personal information that could lead to other harm"
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
      },
      {
        "id": "tt-cg-deceptive-behaviors",
        "reference": "Integrity and Authenticity - Deceptive Behaviors and Fake Engagement",
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
        "id": "tt-cg-ip-rights",
        "reference": "Integrity and Authenticity - Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
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
          "Content that violates intellectual property rights",
          "Reposts of copyrighted material without permission",
          "Reposts of trademarked material without permission"
        ]
      },
      {
        "id": "tt-cg-aigc-harmful",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-generated content that misleads about matters of public importance or that harms individuals",
        "quote": "We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
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
          "AI-generated content that misleads about matters of public importance",
          "AI-generated content that harms individuals"
        ]
      },
      {
        "id": "tt-cg-body-exposure-youth",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits any sexually suggestive behavior or significant exposure involving young people",
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
          "Sexually suggestive behavior involving young people",
          "Significant exposure involving young people"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok provides notice and appeals processes for enforcement actions, though specific details are not provided in this overview document",
      "steps": [
        "Users can appeal enforcement decisions",
        "Appeals process details are available in the full enforcement section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "Legal agreement between TikTok and users governing platform access and use, including user obligations, account management, content rights, and enforcement mechanisms. Incorporates Community Guidelines and Privacy Policy by reference.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
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
          "Content containing private addresses, phone numbers, or email addresses",
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
          "Material that violates privacy rights"
        ]
      },
      {
        "id": "tt-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits content containing threats of any kind, including threats of physical violence",
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
        "summary": "Prohibits material designed to provoke, harass, harm, hurt, scare, distress, embarrass or upset people, including trolling and bullying",
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
        "id": "tt-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves the right to remove or disable access to content at discretion for any reason, including content found objectionable or harmful",
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
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Content may be removed at any time without prior notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content found objectionable",
          "Content in violation of Terms or Community Policy",
          "Content harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-ip-disclosure",
        "reference": "Section 7",
        "summary": "Reserves the right to disclose user identity to third parties claiming intellectual property violations or privacy rights violations",
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
        "id": "tt-tos-content-standards-enforcement",
        "reference": "Section 7",
        "summary": "Reserves the right to remove, disallow, block or delete any posting that does not comply with content standards",
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
        "id": "tt-tos-user-complaint-removal",
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
        "id": "tt-tos-copyright-repeat-infringer",
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
          "Repeated copyright infringement",
          "Repeated intellectual property rights infringement"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users and request account deletion through the feedback system. Counter-notices may be filed for copyright claims, with potential content restoration after ten business days unless legal action is taken.",
      "steps": [
        "Contact TikTok through the feedback system at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original complaining party files legal action, removed content may be restored in ten business days or more after receipt of counter-notice",
        "For California residents under 18, label requests as 'California Removal Request' and provide description and location information for the content"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "Comprehensive privacy policy detailing data collection, use, sharing, and user rights. Last updated August 19, 2024. Covers personal information protection and user control mechanisms.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tiktok-pp-content-moderation",
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
        "id": "tiktok-pp-user-content-responsibility",
        "reference": "How We Share Your Information",
        "summary": "Users are responsible for information they choose to share publicly and platform is not responsible for how other users use or share messages",
        "quote": "Please be aware that messages you choose to send to other users of the Platform will be accessible by those users and that we are not responsible for the manner in which those users use or share the messages. If you choose to engage in public activities on the Platform, you should be aware that any information you share may be read, collected, or used by other users. You should use caution in disclosing personal information while using the Platform. We are not responsible for the information you choose to submit.",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "tiktok-pp-legal-disclosure",
        "reference": "For Legal Reasons",
        "summary": "Allows disclosure of user information to respond to legal process and protect platform safety and security",
        "quote": "We may disclose any of the Information We Collect to respond to subpoenas, court orders, legal process, law enforcement requests, legal claims, or government inquiries, and to protect and defend the rights, interests, safety, and security of the Platform, our affiliates, users, or the public.",
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
          "Legal process requires disclosure",
          "Platform safety and security requires disclosure",
          "User or public safety requires disclosure"
        ]
      },
      {
        "id": "tiktok-pp-underage-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal process for users under 18 years of age in California",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "example": "Detailed description of the specific user content",
            "reason": "To identify and locate the content for removal"
          },
          {
            "description": "Information sufficient to locate the content",
            "example": "URL, timestamp, or other identifying information",
            "reason": "To enable platform to find and remove the specific content"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user"
        ]
      },
      {
        "id": "tiktok-pp-child-account-termination",
        "reference": "Children and Teens",
        "summary": "Prohibits accounts for children under 13 and provides for immediate account termination and information deletion",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Account termination and information deletion upon discovery"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is under 13 years of age",
          "Personal information has been collected from a child"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial request through privacy portal",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "Policy covering copyright and trademark infringement, DMCA compliance, takedown procedures, counter-notifications, and repeat infringer enforcement. Includes specific processes for reporting and appealing IP violations.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
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
            "example": "Details about the copyrighted work, evidence of ownership, and location of infringing content",
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
        "summary": "Removes content that infringes copyright and may restrict account access for repeat violations",
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
        "summary": "Prohibits unauthorized use of trademarks that may cause confusion about source or affiliation",
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
            "example": "Details about the trademark, evidence of ownership, and location of infringing content",
            "reason": "To investigate trademark infringement claims"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans (Trademark)",
        "summary": "Removes content that violates trademark rights and restricts accounts for repeat violations",
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
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals are forwarded to original reporters and may result in content reinstatement.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact details and supporting evidence",
        "TikTok may contact you for additional questions about your appeal",
        "Appeal is forwarded to the original reporter including contact information",
        "Content may be reinstated at TikTok's discretion if it doesn't infringe rights or no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-4",
    "reference": "TIKTOK-NCII-001",
    "title": "StopNCII Partnership Policy",
    "summary": "TikTok's partnership with StopNCII.org to combat non-consensual intimate imagery through hash-based detection and removal systems. Part of broader safety enforcement against sexually suggestive content.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tt-ncii-001",
        "reference": "StopNCII Partnership",
        "summary": "Prohibits non-consensual intimate imagery and automatically prevents identified content from being posted through partnership with StopNCII",
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
          "Content identified as non-consensual intimate imagery",
          "Content flagged through StopNCII partnership system"
        ]
      },
      {
        "id": "tt-nudity-001",
        "reference": "Community Guidelines",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
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
          "Content depicts sexual activity",
          "Content is sexually explicit",
          "Content directs to adult websites or apps"
        ]
      },
      {
        "id": "tt-suggestive-001",
        "reference": "Content Recommendation Policies",
        "summary": "Restricts sexually suggestive content from recommendation feeds and prevents teen accounts from viewing such content",
        "quote": "TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
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
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13"
        ]
      },
      {
        "id": "tt-mature-content-001",
        "reference": "Content Levels System",
        "summary": "Prevents mature content including sexually suggestive material from reaching teen accounts aged 13-17",
        "quote": "our Content Levels system, which is designed to prevent certain content with more mature or complex themes (such as content containing profanity, adult innuendo, or sexually suggestive content) from reaching audiences between ages 13-17 (teen accounts).",
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
          "Content contains adult innuendo",
          "Content is sexually suggestive",
          "Content has mature or complex themes inappropriate for teen accounts"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758649731218-5",
    "reference": "TIKTOK-HARASSMENT-001",
    "title": "Bullying Prevention Policy",
    "summary": "Dedicated policy addressing bullying, harassment, and cyberbullying prevention. Covers reporting mechanisms, enforcement actions, and support resources for affected users.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tt-bp-harassment-001",
        "reference": "Bullying Prevention Policy",
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
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits bullying behavior that intends to cause physical, social and/or psychological harm",
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
          "Targeted behavior that intends to cause physical harm",
          "Targeted behavior that intends to cause social harm",
          "Targeted behavior that intends to cause psychological harm",
          "Behavior by individuals or groups who misuse their power over others"
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
        "Report content in-app by following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-6",
    "reference": "TIKTOK-IMPERSONATION-001",
    "title": "Impersonation Reporting Policy",
    "summary": "Policy and procedures for reporting impersonation accounts, including verification requirements, appeal processes, and enforcement actions against deceptive account behavior.",
    "url": "https://support.tiktok.com/en/safety-hc/report-a-problem/report-an-impersonation-account",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tt-impersonation-001",
        "reference": "Impersonation Account Policy",
        "summary": "Prohibits fake accounts that impersonate other individuals or entities",
        "quote": "If you believe an account is fake and impersonating you or someone else, you can report it to us",
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
            "description": "Valid identification documentation",
            "example": "Government-issued ID or other accepted identification methods",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "Details about who is being impersonated",
            "example": "Selection from dropdown list indicating if it's yourself, a celebrity, or other person",
            "reason": "To categorize the type of impersonation for appropriate handling"
          },
          {
            "description": "Electronic signature confirmation",
            "example": "Name entered as electronic signature with checkbox confirmations",
            "reason": "To legally confirm the authenticity of the report"
          }
        ],
        "removalCriteria": [
          "Account is fake and impersonating another person",
          "Account is pretending to be someone else (individual or celebrity)"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/submit-requests",
      "summary": "Users can appeal impersonation account decisions through online forms with different processes for U.S. and non-U.S. accounts",
      "steps": [
        "Select 'Appeal an Impersonation Account on TikTok' from the dropdown list",
        "Enter email address and country information",
        "Provide details about who is being impersonated",
        "Upload valid identification documentation",
        "Confirm statements with checkboxes",
        "Enter electronic signature",
        "Submit the appeal form"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-7",
    "reference": "TIKTOK-APPEAL-001",
    "title": "Content Violations and Appeals Process",
    "summary": "Comprehensive policy covering content violation enforcement, strike system, account bans, and appeal procedures. Includes timelines, requirements, and counter-notification processes.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tt-cg-ncii",
        "reference": "Severe Violations - Non-consensual Sex Acts",
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
        "reference": "Severe Violations - Youth Exploitation",
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
          "Content promotes or facilitates CSAM"
        ]
      },
      {
        "id": "tt-cg-impersonation",
        "reference": "Permanent Ban Criteria - Impersonation",
        "summary": "Prohibits accounts that impersonate another person or entity in a deceptive manner",
        "quote": "The account impersonates another person or entity in a deceptive manner.",
        "contentTypes": [
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
          "Account impersonates another person",
          "Account impersonates an entity",
          "Impersonation is done in a deceptive manner"
        ]
      },
      {
        "id": "tt-cg-violence-threats",
        "reference": "Severe Violations - Violence Promotion",
        "summary": "Prohibits promoting or threatening violence",
        "quote": "Promote or threaten violence.",
        "contentTypes": [
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
          "Content promotes violence",
          "Content threatens violence"
        ]
      },
      {
        "id": "tt-cg-human-trafficking",
        "reference": "Severe Violations - Human Trafficking",
        "summary": "Prohibits content that facilitates human trafficking",
        "quote": "Post content that facilitates human trafficking.",
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
          "Content facilitates human trafficking"
        ]
      },
      {
        "id": "tt-cg-torture",
        "reference": "Severe Violations - Real-world Torture",
        "summary": "Prohibits content that depicts real-world torture",
        "quote": "Post content that depicts real-world torture.",
        "contentTypes": [
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
          "Content depicts real-world torture"
        ]
      },
      {
        "id": "tt-cg-ban-evasion",
        "reference": "Ban Evasion Policy",
        "summary": "Prohibits creating or using accounts to intentionally avoid restrictions or permanent bans",
        "quote": "Create or use another TikTok account to intentionally avoid restrictions or a permanent ban imposed on another account.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Account created to avoid restrictions",
          "Account used to avoid permanent ban",
          "Intentional circumvention of account restrictions"
        ]
      },
      {
        "id": "tt-cg-ip-violations",
        "reference": "Intellectual Property Violations",
        "summary": "Prohibits multiple violations of intellectual property policy",
        "quote": "Multiple violations of our Intellectual Property Policy.",
        "contentTypes": [
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
          "Multiple intellectual property violations",
          "Repeated copyright infringement"
        ]
      },
      {
        "id": "tt-strikes-expiry",
        "reference": "Strike Expiration Policy",
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
            "description": "Strikes expire after 90 days"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": []
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety#3",
      "summary": "Users can appeal content removal or account bans through the TikTok app or support system. If approved, content/accounts are reinstated and strikes are removed.",
      "steps": [
        "For ineligible For You feed content: Go to the post, tap 'More insights' or 'More options', tap 'Analytics', tap the notification, then tap 'Appeal'",
        "For removed content or banned accounts: Access the appeal option through the violation notification or account status",
        "Submit appeal with explanation of why the decision should be reversed",
        "Wait for review by TikTok's Trust and Safety team",
        "If approved: content/account reinstated and strike removed from account"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-8",
    "reference": "TIKTOK-PRIVACY-SEC-001",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific community guidelines section addressing privacy violations, personal information sharing, platform security, and protection against stalking, identity theft, and fraud.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
    "policies": [
      {
        "id": "tt-privacy-personal-info-high-risk",
        "reference": "Personal Information - High Risk Personal Information",
        "summary": "Prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
          "Content contains personal information that could lead to stalking, identity theft, fraud, or other harm",
          "Applies even if content was posted by the person themselves or with their consent"
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "Platform requires additional context to assess moderate risk personal information removal requests"
          }
        ],
        "removalCriteria": [
          "Information shared without consent",
          "Information puts someone at risk of psychological harm",
          "Additional context provided to demonstrate harm"
        ]
      },
      {
        "id": "tt-privacy-image-audio-likeness",
        "reference": "Personal Information - Moderate Risk Personal Information",
        "summary": "Prohibits sharing image or audio likeness without consent when it may cause harm such as emotional distress or reputational damage",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence of emotional distress, reputational damage, or unwanted contact resulting from the shared content",
            "reason": "Platform requires additional context to remove moderate risk personal information including image/audio likeness"
          }
        ],
        "removalCriteria": [
          "Image or audio likeness shared without consent",
          "Content may cause emotional distress, reputational damage, or unwanted contact",
          "Additional context provided to demonstrate harm risk"
        ]
      },
      {
        "id": "tt-privacy-private-communications",
        "reference": "Personal Information - Moderate Risk Personal Information",
        "summary": "Prohibits sharing private communications on sensitive subjects disclosed by individuals who were not part of the original exchange",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating harm risk from disclosed private communications",
            "example": "Evidence showing emotional distress or reputational damage from sharing private sensitive communications",
            "reason": "Platform requires additional context to assess removal of moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Private communications on sensitive subjects",
          "Disclosed by individuals who were not part of the original exchange",
          "May cause emotional distress, reputational damage, or unwanted contact"
        ]
      },
      {
        "id": "tt-security-account-access",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or allowing unauthorized access to accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
          "Login information shared with unauthorized parties",
          "Allowing others to break platform rules using your account"
        ]
      },
      {
        "id": "tt-security-unauthorized-access",
        "reference": "Platform Security",
        "summary": "Prohibits using unauthorized methods to access accounts or steal personal information through hacking or phishing",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempts to steal personal information",
          "Hacking accounts or accessing data without authorization",
          "Use of phishing, smishing, or automated tools for unauthorized access"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's privacy reporting system",
      "steps": [
        "Access the privacy violation reporting form",
        "Submit details of the privacy violation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758649731218-9",
    "reference": "TIKTOK-INTEGRITY-001",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Community guidelines section covering impersonation, misinformation, spam, fake engagement, and deceptive account behavior. Includes enforcement mechanisms and account restrictions.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-23T17:48:51.218Z",
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
        "id": "tt-ia-aigc-youth-sexualized",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits accounts focused on AI images of youth in inappropriate clothing or poses",
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
          "Content shows youth in clothing suited for adults",
          "Content shows youth in sexualized poses or facial expressions"
        ]
      },
      {
        "id": "tt-ia-aigc-public-figures-harassment",
        "reference": "Edited Media and AI-Generated Content (AIGC)",
        "summary": "Prohibits AI-generated or edited content showing public figures being degraded, harassed, or linked to criminal behavior",
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
          "Content shows a public figure being degraded",
          "Content shows a public figure being harassed",
          "Content links a public figure to criminal behavior",
          "Content is AI-generated or significantly edited"
        ]
      },
      {
        "id": "tt-ia-ip-violations",
        "reference": "Unoriginal Content and Intellectual Property Rights",
        "summary": "Prohibits content that violates someone else's intellectual property rights",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights.",
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
        "id": "tt-ia-impersonation",
        "reference": "Deceptive Behaviors and Fake Engagement",
        "summary": "Prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
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
        "quote": "Hacked materials distribution, when this poses a significant risk of harm. Note that we may allow limited discussion or distribution of hacked materials if there's a clear public interest and the content follows journalistic best practices",
        "contentTypes": [
          "private",
          "personal",
          "intimate"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves hacked materials",
          "Distribution poses a significant risk of harm"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright/?lang=en",
      "summary": "Users can submit copyright or trademark reports through in-app tools if they believe their rights have been violated",
      "steps": [
        "Submit a copyright report through the in-app tools if copyright rights have been violated",
        "Submit a trademark report through the in-app tools if trademark rights have been violated"
      ]
    }
  }
],
};
