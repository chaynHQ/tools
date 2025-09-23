import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758653610027-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering content policies including safety and civility, harassment and bullying, hate speech, violent and criminal behavior, non-consensual intimate imagery, and content removal enforcement. Updated August 14, 2025.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
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
    "id": "tiktok-new-1758653610027-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "Legal agreement between TikTok and users governing platform use, account management, content rights, and enforcement procedures. Incorporates Community Guidelines and Privacy Policy by reference.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
    "policies": [
      {
        "id": "tt-tos-harassment-intimidation",
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
        "summary": "Prohibits uploading private information of any third party without authorization",
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
        "summary": "Prohibits material that infringes copyright, trademark or other intellectual property rights",
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
        "id": "tt-tos-harassment-bullying",
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
        "id": "tt-tos-threats",
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
        "id": "tt-tos-content-removal-discretion",
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
          "Content in violation of Terms or Community Policy",
          "Content otherwise harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-expeditious-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material upon becoming aware of it",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of.",
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
            "value": null,
            "unit": "immediate",
            "description": "Expeditiously upon becoming aware"
          },
          "response": null
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Material that infringes intellectual property or other rights"
        ]
      },
      {
        "id": "tt-tos-repeat-infringer-policy",
        "reference": "Section 7",
        "summary": "Policy to disable or terminate accounts of users who repeatedly infringe copyrights or intellectual property rights",
        "quote": "It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
          "Repeated infringement of copyrights",
          "Repeated infringement of intellectual property rights of others"
        ]
      },
      {
        "id": "tt-tos-identity-disclosure",
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
          "impersonation",
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
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Counter-notice process available for copyright claims, with potential restoration of content after ten business days unless legal action is filed",
      "steps": [
        "File a counter-notice with TikTok's Copyright Agent",
        "TikTok may send a copy of the counter-notice to the original complaining party",
        "Unless the original complaining party files legal action, removed content may be replaced or access restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653610027-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "Comprehensive privacy policy detailing data collection, use, sharing, and user rights. Last updated August 19, 2024. Covers personal information handling relevant to privacy-based takedown requests.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
    "policies": [
      {
        "id": "tt-pp-content-moderation",
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
        "id": "tt-pp-abuse-detection",
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
        "summary": "Requires identity verification for certain platform features and account types",
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
            "example": "Government-issued ID or age verification documents",
            "reason": "Required to verify legitimate account ownership and prevent impersonation"
          }
        ],
        "removalCriteria": [
          "Failure to provide required identity verification",
          "Use of platform features without proper verification"
        ]
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Prohibits accounts for users under 13 and requires immediate deletion of child accounts and data",
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
            "description": "Immediate deletion of child accounts and data upon discovery"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Report of underage user",
            "example": "Information identifying a user believed to be under 13",
            "reason": "Required to identify and remove accounts of users below minimum age"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age"
        ]
      },
      {
        "id": "tt-pp-content-removal-teens",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows users under 18 to request removal of their posted content",
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
            "description": "Description of content to be removed and sufficient identifying information",
            "example": "URL or description of the specific content and information to locate it",
            "reason": "Required to identify and locate the specific content for removal"
          }
        ],
        "removalCriteria": [
          "User is under 18 years of age",
          "User is a California resident",
          "Content was posted by the requesting user"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial request through privacy reporting form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653610027-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "Detailed copyright and intellectual property policy including DMCA takedown procedures, repeat infringer policy, and counter-notification processes. Covers copyright infringement reporting and appeals.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
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
            "example": "Information about the copyrighted work and evidence of infringement",
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
            "example": "Details about the trademark and evidence of infringement",
            "reason": "To facilitate evaluation of the trademark infringement report"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of the trademark rights holder",
            "reason": "Platform may need to contact the reporter and will provide this information to the user"
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
      "summary": "Users can submit appeals within the TikTok app through in-app notifications. Appeals are forwarded to original reporters and content may be reinstated if it doesn't infringe rights or no court action is filed.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact details and supporting evidence",
        "Platform may contact user for additional questions about the appeal",
        "Platform forwards complete appeal to original reporter including contact information",
        "Content may be reinstated if it doesn't infringe rights or no court order is received"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653610027-4",
    "reference": "TIKTOK-NCII-001",
    "title": "Strengthening Enforcement of Sexually Suggestive Content",
    "summary": "TikTok's policy announcement on non-consensual intimate imagery (NCII) enforcement, including partnership with StopNCII.org and content level systems to protect users from harmful sexual content.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
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
        "summary": "Strictly prohibits nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
        "contentTypes": [
          "intimate"
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
          "Content depicts sexual activity",
          "Content is sexually explicit",
          "Content directs to adult websites or apps"
        ]
      },
      {
        "id": "tt-suggestive-001",
        "reference": "Content Levels system",
        "summary": "Restricts sexually suggestive content from reaching teen accounts (ages 13-17) and prevents recommendation in For You feeds",
        "quote": "To safeguard For You feeds, TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13",
          "Content is sexually suggestive"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758653610027-5",
    "reference": "TIKTOK-HARASSMENT-001",
    "title": "Bullying Prevention",
    "summary": "Comprehensive policy on bullying and harassment prevention, including definitions of harassment, reporting mechanisms, and safety resources. Covers verbal, physical, and sexual harassment policies.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
    "policies": [
      {
        "id": "tt-bp-harassment-001",
        "reference": "Bullying Prevention - Platform Behavior",
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
        "reference": "Bullying Prevention - General Policy",
        "summary": "Prohibits bullying behavior that causes physical, social and/or psychological harm through misuse of power",
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
          "Behavior involving misuse of power over another person or group"
        ]
      },
      {
        "id": "tt-bp-public-figures-001",
        "reference": "Public Figures Policy",
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
    "id": "tiktok-new-1758653610027-6",
    "reference": "TIKTOK-APPEALS-001",
    "title": "Content Violations and Bans",
    "summary": "Detailed explanation of TikTok's content moderation enforcement, strike system, appeal processes, and account restrictions. Covers how violations are detected, processed, and appealed.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-23T18:53:30.027Z",
    "policies": [
      {
        "id": "tt-cg-ncii-001",
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
        "id": "tt-cg-csam-001",
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
          "Content promotes or facilitates youth exploitation or CSAM"
        ]
      },
      {
        "id": "tt-cg-impersonation-001",
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
          "Impersonation is conducted in a deceptive manner"
        ]
      },
      {
        "id": "tt-cg-violence-threats-001",
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
          "Content contains threats of violence"
        ]
      },
      {
        "id": "tt-cg-strikes-001",
        "reference": "Account Strikes and Bans",
        "summary": "Issues strikes for Community Guidelines violations with strikes expiring after 90 days",
        "quote": "Our system counts the number of times your account has violated our Community Guidelines, and for each violation after your first warning, you'll receive a strike on your account. Strikes on your TikTok account will expire after 90 days and will no longer be taken into consideration for a permanent account ban.",
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
          "Multiple violations result in account strikes",
          "Severe violations may result in immediate permanent ban"
        ]
      },
      {
        "id": "tt-ip-violations-001",
        "reference": "Permanent Ban Criteria - Intellectual Property",
        "summary": "Permanently bans accounts for multiple violations of Intellectual Property Policy",
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
          "Multiple violations of Intellectual Property Policy"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety#3",
      "summary": "Users can appeal content removal or account bans through the TikTok app or support system, with successful appeals resulting in content reinstatement and strike removal",
      "steps": [
        "If you believe your content or account has been removed by mistake, you can appeal this decision",
        "For content ineligible for For You feed: Go to the post, tap 'More insights' or 'More options', tap 'Analytics', tap the notification for the ineligible post, tap 'Appeal' at the top",
        "For removed content: You'll receive a notification explaining why content was removed and how to submit an appeal",
        "If appeal is approved: Your content or account will be reinstated (unless already deleted) and the strike will be removed from your account",
        "Appeals can be submitted through the TikTok app interface or support system"
      ]
    }
  }
],
};
