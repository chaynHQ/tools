import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, updated August 2025 with enhanced policies on AI content, harassment, and safety measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
    "policies": [
      {
        "id": "tt-ncii-policy",
        "reference": "TT-CG-NCSII",
        "summary": "Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.",
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
        "evidenceRequirements": [
          {
            "description": "Link to the video, content, or user profile",
            "reason": "To locate and identify the specific content for removal"
          },
          {
            "description": "Description of the violation",
            "reason": "To understand the nature of the policy violation"
          }
        ],
        "removalCriteria": [
          "Content depicts adult nudity, sexual activity, or is sexually suggestive",
          "Content is an intimate image or video (authentic or AI-generated) shared without the consent of the depicted individual",
          "Content threatens to share intimate imagery (sextortion)"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads about matters of public importance or that harms individuals.",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Link to the video",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Description of how the content is a deepfake or violates policy",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is used to create a deepfake for NCII",
          "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'",
          "AIGC misleads about matters of public importance",
          "AIGC harms individuals"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse. We allow commentary about political figures which may be critical, but remove content that crosses into severe harm.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
            "description": "Link to the harassing content or user profile",
            "reason": "To identify and review the harassing material"
          },
          {
            "description": "Description of the harassment and its targeted nature",
            "reason": "To assess the nature and impact of the harassment"
          },
          {
            "description": "Screenshots of comments or messages if applicable",
            "reason": "To provide evidence of the harassing behavior"
          }
        ],
        "removalCriteria": [
          "Content constitutes targeted harassment or bullying",
          "Content contains abusive statements about a private individual",
          "Unwanted sexualization or advances",
          "Content targets a private individual for abuse by exposing their private information",
          "Content includes degrading remarks about appearance",
          "Content involves coordinated abuse"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
            "description": "Link to the content containing personal information",
            "reason": "To identify the privacy-violating material"
          },
          {
            "description": "Description of the private information exposed",
            "reason": "To understand the nature and scope of the privacy violation"
          },
          {
            "description": "Confirmation that the information was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content reveals private, personal, or identifying information (e.g., phone number, home address, non-public email)",
          "Information is shared without the subject's consent",
          "Content shows private media of an individual without their permission",
          "Content reveals private, personal, or identifying information to enable harassment",
          "Information could lead to identity theft, stalking, or fraud"
        ]
      },
      {
        "id": "tt-deceptive-behavior-policy",
        "reference": "TT-CG-DECEPTIVE",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
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
            "description": "Link to the deceptive profile or content",
            "reason": "To identify the misleading account or behavior"
          },
          {
            "description": "Evidence of your authentic identity",
            "example": "Photo of your government-issued ID",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is misleading or manipulative",
            "reason": "To understand the nature and extent of the deceptive behavior"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, bio, or profile picture to mislead others",
          "The account's intent is to deceive users about its identity",
          "Account engages in manipulation of the platform's systems",
          "Account trades services that artificially boost engagement"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tt-terms-of-service",
    "reference": "TT-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of TikTok, including content ownership and intellectual property rights.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
    "policies": [
      {
        "id": "tt-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement, including unauthorized posting of intimate images owned by the victim or photographer.",
        "quote": "We respect intellectual property rights and ask you to do the same. As a condition of your access to and use of the Services, you agree to the terms of the Copyright Policy.",
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
            "description": "A formal copyright infringement report",
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
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-Section5",
        "summary": "Prohibits intimidation, harassment, and content intended to harass, harm, hurt, scare, distress, embarrass or upset people.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people;",
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
          "Content is designed to intimidate or harass another person",
          "Content is deliberately designed to provoke or antagonise people",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-Section5",
        "summary": "Prohibits uploading or sharing any private information of third parties, including addresses, phone numbers, email addresses, and personal identity documents.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers;",
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
          "Content contains private information of any third party without authorization"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-Section5",
        "summary": "Prohibits impersonating any person or entity, or falsely misrepresenting affiliation with any person or entity.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services;",
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
          "User is impersonating another person or entity",
          "User is falsely misrepresenting their affiliation with any person or entity",
          "Content gives the false impression of emanating from the Services"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-Section5",
        "summary": "Prohibits using or attempting to use another person's account, service or system without authorization.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is using another person's account without authorization",
          "User has created a false identity on the Services"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-Section4",
        "summary": "Requires users to keep account passwords confidential and report suspected unauthorized access immediately.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected unauthorized access through the feedback form",
            "reason": "To alert TikTok of potential account compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to user account",
          "Third party has accessed account without permission"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-Section5",
        "summary": "Reserves the right to remove or disable access to content at their discretion for any reason, including content found objectionable or harmful.",
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
          "Content is found objectionable",
          "Content violates Terms of Service or Community Policy",
          "Content is otherwise harmful to the Services or users"
        ]
      },
      {
        "id": "tt-ip-disclosure-policy",
        "reference": "TT-TOS-Section7",
        "summary": "Reserves the right to disclose user identity to third parties claiming intellectual property rights violations or privacy rights violations.",
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
          "Third party claims User Content violates their intellectual property rights",
          "Third party claims User Content violates their right to privacy"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users through TikTok's feedback system. Counter-notices may be filed for copyright claims, with potential restoration of content after ten business days unless legal action is taken.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original complaining party files legal action, removed content may be restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, last updated August 19, 2024.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
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
          "Content violates other conditions and policies"
        ]
      },
      {
        "id": "tt-pp-abuse-fraud-detection",
        "reference": "How We Use Your Information",
        "summary": "Prohibits abusive, fraudulent, and illegal activity on the platform",
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
          "Content constitutes fraud",
          "Content constitutes illegal activity"
        ]
      },
      {
        "id": "tt-pp-child-content-removal",
        "reference": "Children and Teens",
        "summary": "Prohibits collection of personal information from children under 13 and requires immediate account termination and content deletion",
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
            "description": "Immediate deletion and account termination"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that the user is below age 13",
            "example": "Report identifying underage user",
            "reason": "To comply with children's privacy protection requirements"
          }
        ],
        "removalCriteria": [
          "Personal information collected from a child under 13"
        ]
      },
      {
        "id": "tt-pp-underage-content-removal-ca",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows California residents under 18 to request removal of content they posted",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Description of the content to be removed",
            "example": "Detailed description of the posted content",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information to locate the content",
            "example": "URL, username, or other identifying information",
            "reason": "To reasonably permit location of the content"
          }
        ],
        "removalCriteria": [
          "User is a California resident",
          "User is under 18 years of age",
          "Content was posted by the requesting user"
        ]
      },
      {
        "id": "tt-pp-underage-account-deletion-ct",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows Connecticut residents under 18 and parents of users under 16 to request account deletion or unpublishing",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16).",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User is a Connecticut resident under 18 years of age",
          "Parent or guardian of Connecticut resident under 16 years of age"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "Children and Teens",
        "summary": "Allows parents and guardians to request deletion of underage child's account or download account data",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parental or guardian relationship",
            "example": "Documentation showing parental authority",
            "reason": "To verify authority to make requests on behalf of the minor"
          }
        ],
        "removalCriteria": [
          "Requester is parent or guardian of underage user",
          "Account belongs to underage child"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial request through the privacy reporting form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758643763929-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures for content removal and counter-notifications.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits content that infringes copyright, including unauthorized use of copyrighted content without proper authorization or legally valid reason",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, identification of infringing content, contact information",
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
        "summary": "Removes user content that infringes another person's copyright and may restrict access to LIVE features for copyright infringement",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
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
          "User content that infringes another person's copyright"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer-copyright",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe copyright violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
          "User repeatedly commits copyright infringement",
          "Severe copyright violations"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of identical or similar trademarks in connection with goods or services that may cause confusion about source, origin, sponsorship or affiliation",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark ownership details, identification of infringing content, contact information",
            "reason": "To facilitate investigation of trademark infringement claims"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits the purchase, sale, trade, promotion, or solicitation of counterfeit goods",
        "quote": "we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may temporarily restrict access to LIVE features for trademark violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
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
          "Content that violates another's trademark rights",
          "Purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer-trademark",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe trademark violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
          "User repeatedly commits trademark infringement",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark infringement removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact information and supporting evidence",
        "Submit appeal for review",
        "TikTok may contact for additional questions",
        "Appeal forwarded to original reporter where appropriate",
        "Content may be reinstated at TikTok's discretion based on evaluation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758643763929-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy page addressing harassment, bullying, and safety measures with reporting mechanisms.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "Bullying Prevention",
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
        "id": "tt-bp-bullying-general",
        "reference": "Bullying Prevention",
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
          "Behavior carried out by individuals or groups who misuse their power over others"
        ]
      },
      {
        "id": "tt-bp-public-figures",
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
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines for moderation team review and appropriate action",
      "steps": [
        "Report the content in-app following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758643763929-2",
    "reference": "TT-PS",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific community guidelines section covering personal information protection and platform security measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T16:09:23.929Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content containing personal information that could lead to stalking, identity theft, fraud, or other harm",
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
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Platform requires additional context to assess moderate risk personal information cases"
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
            "description": "Additional context demonstrating potential for harm",
            "example": "Evidence of emotional distress, reputational damage, or unwanted contact risk",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Image or audio likeness shared without consent",
          "Content may cause emotional distress",
          "Content may cause reputational damage",
          "Content may lead to unwanted contact"
        ]
      },
      {
        "id": "tt-ps-private-communications",
        "reference": "Personal Information - Private Communications",
        "summary": "Prohibits disclosure of private communications on sensitive subjects by individuals who were not part of the exchange",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
            "description": "Additional context demonstrating potential for harm",
            "example": "Evidence showing the communications are private and on sensitive subjects",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Private communications on sensitive subjects disclosed without consent",
          "Communications disclosed by individuals who were not part of the exchange",
          "Content may cause emotional distress, reputational damage, or unwanted contact"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Privacy violation reporting process available for users who believe their privacy has been violated",
      "steps": [
        "Access the privacy reporting form",
        "Submit details of the privacy violation"
      ]
    }
  }
],
};
