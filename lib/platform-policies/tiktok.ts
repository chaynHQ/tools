import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, hate speech, violent content, and privacy violations. Recently updated in August 2025 with enhanced policies on AI content, LIVE creators, and commercial disclosure requirements.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
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
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AI-generated content that misleads about matters of public importance or harms individuals.",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate"
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
          "Content targets a private individual for abuse by exposing their private information"
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
          "Content reveals private, personal, or identifying information to enable harassment"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform through deceptive behaviors.",
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
            "description": "Link to the impersonating profile",
            "reason": "To identify the impersonating account"
          },
          {
            "description": "Evidence of your authentic identity",
            "example": "Photo of your government-issued ID",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is impersonating you or your entity",
            "reason": "To understand the nature and extent of the impersonation"
          }
        ],
        "removalCriteria": [
          "Account uses another's name, bio, or profile picture to mislead others",
          "The account's intent is to deceive users about its identity",
          "The account is not clearly marked as a parody or fan page"
        ]
      },
      {
        "id": "tt-platform-security-policy",
        "reference": "TT-CG-SECURITY",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "quote": "We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized access attempts",
            "reason": "To identify security violations"
          },
          {
            "description": "Description of the security compromise",
            "reason": "To understand the nature of the security threat"
          }
        ],
        "removalCriteria": [
          "Content shows or promotes hacking attempts",
          "Content provides instructions for compromising platform security",
          "Account is involved in unauthorized access to TikTok systems"
        ]
      },
      {
        "id": "tt-ip-policy",
        "reference": "TT-CG-IP",
        "summary": "Prohibits content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "quote": "We don't allow content that violates intellectual property rights, including reposts of copyrighted or trademarked material without permission.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Link to the infringing content",
            "reason": "To identify the content that violates intellectual property rights"
          },
          {
            "description": "Evidence of ownership or authorization to act on behalf of the rights holder",
            "reason": "To verify the legitimacy of the intellectual property claim"
          },
          {
            "description": "Description of the copyrighted or trademarked material being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without permission",
          "Content uses trademarked material without authorization",
          "Content is a repost of protected intellectual property"
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
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
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
        "id": "tt-harassment-bullying-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidation, harassment, and promotion of sexually explicit material or discrimination.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age",
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
        "evidenceRequirements": [
          {
            "description": "Report through the feedback form with details of harassment",
            "reason": "To document and investigate harassment claims"
          },
          {
            "description": "URL(s) of the harassing content",
            "reason": "To identify specific content that violates harassment policies"
          }
        ],
        "removalCriteria": [
          "Content intimidates or harasses another user",
          "Content promotes sexually explicit material",
          "Content promotes discrimination based on protected characteristics"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting identity or affiliation.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
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
            "description": "Report through the feedback form with details of impersonation",
            "reason": "To document and investigate impersonation claims"
          },
          {
            "description": "Evidence showing the account is impersonating you or another person",
            "reason": "To verify the impersonation claim"
          },
          {
            "description": "URL of the impersonating account or content",
            "reason": "To identify the specific account or content engaging in impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonates another person or entity",
          "Content falsely represents identity or affiliation",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits uploading or sharing any private information of third parties, including personal details and identification documents.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through the feedback form identifying the private information shared",
            "reason": "To document privacy violations"
          },
          {
            "description": "URL(s) of content containing private information",
            "reason": "To locate and remove the privacy-violating content"
          },
          {
            "description": "Explanation of how the information is private and unauthorized",
            "reason": "To verify the privacy violation claim"
          }
        ],
        "removalCriteria": [
          "Content contains addresses, phone numbers, or email addresses of third parties",
          "Content contains personal identity document numbers or features",
          "Content contains credit card numbers or other financial information"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another person's account without authorization or creating false identities.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report unauthorized account access through the feedback form",
            "reason": "To document unauthorized access claims"
          },
          {
            "description": "Evidence of unauthorized use of your account",
            "reason": "To verify the unauthorized access claim"
          },
          {
            "description": "Details of false identity creation if applicable",
            "reason": "To identify and remove false accounts"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "Account represents a false identity on the Services"
        ]
      },
      {
        "id": "tt-malicious-content-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits content designed to provoke, harass, harm, or upset people, including trolling and bullying.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Report through the feedback form with details of the harmful content",
            "reason": "To document and investigate harmful content claims"
          },
          {
            "description": "URL(s) of the content designed to harass or harm",
            "reason": "To identify specific content that violates the policy"
          },
          {
            "description": "Explanation of how the content is intended to harm or distress",
            "reason": "To assess the intent and impact of the content"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to provoke or antagonize people",
          "Content constitutes trolling or bullying behavior",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-4",
        "summary": "Requires users to keep account passwords confidential and report unauthorized access immediately.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "private",
          "personal"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Immediate notification through the feedback form if account is compromised",
            "reason": "To secure the account and prevent further unauthorized access"
          },
          {
            "description": "Details of suspected unauthorized access or password compromise",
            "reason": "To investigate and respond to security breaches"
          }
        ],
        "removalCriteria": [
          "Evidence that a third party knows the account password",
          "Evidence that unauthorized access to the account has occurred"
        ]
      },
      {
        "id": "tt-content-removal-authority",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at any time for any reason, including objectionable content or Terms violations.",
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
        "evidenceRequirements": [
          {
            "description": "Content that violates Terms of Service or Community Guidelines",
            "reason": "To maintain platform safety and compliance"
          },
          {
            "description": "Content deemed objectionable or harmful to users",
            "reason": "To protect user safety and platform integrity"
          }
        ],
        "removalCriteria": [
          "Content is objectionable",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-removal-authority",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to remove, disallow, block or delete User Content that violates Terms or in response to complaints.",
        "quote": "We, or authorised third parties, reserve the right to cut, crop, edit or refuse to publish, your content at our or their sole discretion. We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at \"Your Access to and Use of Our Services\" above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "User Content that violates Terms of Service",
            "reason": "To maintain platform compliance and safety"
          },
          {
            "description": "Complaints from other users or third parties about content",
            "reason": "To respond to community reports of harmful content"
          }
        ],
        "removalCriteria": [
          "User Content does not comply with content standards",
          "User Content violates the Terms of Service",
          "User Content is subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tt-copyright-infringement-removal",
        "reference": "TT-TOS-7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers.",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
            "unit": null,
            "description": "Expeditious removal of infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright infringement",
            "reason": "To identify infringing material for removal"
          },
          {
            "description": "Proper copyright infringement notice",
            "reason": "To comply with copyright law requirements"
          }
        ],
        "removalCriteria": [
          "Material infringes copyright or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content through the feedback form and may receive counter-notice procedures for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original complaining party files court action, removed content may be restored in ten business days or more after receipt of counter-notice"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024, with enhanced transparency about data collection practices and user rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
    "policies": [
      {
        "id": "tt-pp-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Scans, analyzes, and reviews User Content, messages and associated metadata for violations of Terms of Service, Community Guidelines, or other conditions and policies to promote platform safety and security.",
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
        "evidenceRequirements": [
          {
            "description": "Content that violates Terms of Service or Community Guidelines",
            "example": "User Content, messages, or metadata showing policy violations",
            "reason": "To identify and address safety and security violations on the platform"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies"
        ]
      },
      {
        "id": "tt-pp-abuse-fraud-detection",
        "reference": "How We Use Your Information",
        "summary": "Detects abuse, fraud, and illegal activity on the Platform using collected user information.",
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
        "evidenceRequirements": [
          {
            "description": "Information indicating abusive, fraudulent, or illegal activity",
            "example": "User behavior patterns, content, or account activity suggesting violations",
            "reason": "To identify and prevent harmful activities on the platform"
          }
        ],
        "removalCriteria": [
          "Content involves abusive activity",
          "Content involves fraudulent activity",
          "Content involves illegal activity"
        ]
      },
      {
        "id": "tt-pp-legal-disclosure",
        "reference": "For Legal Reasons",
        "summary": "Discloses collected information to respond to legal process, law enforcement requests, legal claims, or government inquiries, and to protect platform and user safety and security.",
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
        "evidenceRequirements": [
          {
            "description": "Valid legal process or law enforcement request",
            "example": "Subpoenas, court orders, or official government inquiries",
            "reason": "To comply with legal obligations and protect platform and user safety"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal process",
          "Content poses threat to platform or user safety and security",
          "Content subject to law enforcement investigation"
        ]
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Deletes personal information collected from children under 13 and terminates their accounts when discovered, with mechanisms for parents to request account deletion.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
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
            "description": "Information indicating user is under 13 years old",
            "example": "Report of underage user through feedback form",
            "reason": "To comply with children's privacy protection requirements"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Personal information was collected from a child under 13"
        ]
      },
      {
        "id": "tt-pp-content-removal-minors",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal mechanisms for California residents under 18 and Connecticut residents under 18, allowing them or their parents to request removal of posted User Content.",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16).",
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
            "description": "Proof of California or Connecticut residency and age under 18",
            "example": "Description of User Content to be removed and information to locate it",
            "reason": "To comply with state laws protecting minors' privacy rights"
          }
        ],
        "removalCriteria": [
          "User is California resident under 18 years of age",
          "User is Connecticut resident under 18 years of age",
          "Parent or guardian requests removal for Connecticut resident under 16"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may appeal decisions about their privacy requests by following instructions in communications from TikTok, and can exercise various rights including access, correction, and deletion of their information.",
      "steps": [
        "Submit initial request through https://www.tiktok.com/legal/report/privacy",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Alternatively, send written request to physical address: TikTok Inc., Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 100, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758629197552-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and counterfeiting. Includes detailed appeal and counter-notification processes.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright and requires proper authorization for use of copyrighted content",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of the rightsholder",
            "reason": "Required for DMCA compliance and potential follow-up communication"
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
        "summary": "Removes user content that infringes copyright and may restrict LIVE feature access for copyright violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright infringement",
            "example": "Demonstration that content uses copyrighted material without authorization",
            "reason": "To establish that the content violates copyright policies"
          }
        ],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Copyright infringement through LIVE feature usage"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright or trademark infringement and may immediately ban accounts for severe violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated intellectual property infringement",
            "example": "Multiple instances of copyright or trademark violations",
            "reason": "To establish pattern of infringement behavior warranting account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "Severe copyright violations occur",
          "Account used for improper intellectual property activities"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of trademarks that causes confusion about source, origin, sponsorship or affiliation of goods and services",
        "quote": "Trademark laws prohibit trademark infringement, which is generally the unauthorized use of an identical or a similar trademark or service mark in connection with goods or services in a way that is likely to cause confusion, deception or mistake about the source, origin, sponsorship or affiliation of the associated goods and/or services.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, evidence of unauthorized use",
            "reason": "To investigate trademark infringement claims effectively"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of the trademark rightsholder",
            "reason": "Required for proper trademark infringement reporting and follow-up"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation",
          "Trademark use in connection with goods or services without authorization"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "We do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of counterfeit goods being promoted or sold",
            "example": "Content showing fake branded merchandise being offered for sale",
            "reason": "To identify and remove illegal counterfeit goods trading"
          }
        ],
        "removalCriteria": [
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, must provide required information and contact details, with appeals potentially forwarded to original reporters",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact information and supporting evidence",
        "Submit appeal for review by TikTok",
        "Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's sole discretion if no infringement found"
      ]
    }
  },
  {
    "id": "tiktok-new-1758629197552-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy addressing harassment, bullying, doxxing, and threats. Covers different forms of bullying and provides guidance on reporting mechanisms.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "Bullying Prevention",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens, or doxxes anyone on the platform",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
        "contentTypes": [
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
            "description": "Report the bullying content through TikTok's reporting system",
            "example": "Use the in-app reporting feature to flag harassing content",
            "reason": "Allows moderation team to review and take appropriate action if it violates Community Guidelines"
          }
        ],
        "removalCriteria": [
          "Content that harasses others",
          "Content that humiliates others",
          "Content that threatens others",
          "Content that doxxes others by publishing personal information with malicious intent"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "Bullying Prevention - Public Figures",
        "summary": "Prohibits targeting public figures with severe attacks that may promote physical harm or harassment",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content targeting public figures through TikTok's reporting system",
            "example": "Flag content that contains severe attacks against public figures",
            "reason": "Platform considers risk of physical or severe psychological harm greater than benefit of expression"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures that may promote physical harm",
          "Content promoting harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      },
      {
        "id": "tt-bp-community-guidelines-violation",
        "reference": "Bullying Prevention - Reporting",
        "summary": "Requires removal of content that violates TikTok's Community Guidelines when reported",
        "quote": "If you see content that violates TikTok's Community Guidelines, you can report it in-app by following these steps.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content through in-app reporting system",
            "example": "Use TikTok's in-app reporting feature to flag violating content",
            "reason": "Enables moderation team to review content against Community Guidelines"
          }
        ],
        "removalCriteria": [
          "Content that violates TikTok's Community Guidelines"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758629197552-2",
    "reference": "TT-PS",
    "title": "Privacy and Security Guidelines",
    "summary": "Policy section specifically addressing personal information sharing, stalking prevention, identity theft protection, and platform security measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T12:06:37.552Z",
    "policies": [
      {
        "id": "tt-ps-personal-info",
        "reference": "Personal Information",
        "summary": "Prohibits content with personal information that could lead to stalking, identity theft, fraud, or other harm, including content posted by the individual themselves or with their consent.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided privacy reporting link",
            "reason": "To initiate TikTok's review process for privacy violations"
          }
        ],
        "removalCriteria": [
          "Content contains personal information that could lead to stalking",
          "Content contains personal information that could lead to identity theft",
          "Content contains personal information that could lead to fraud",
          "Content contains personal information that could lead to other harm"
        ]
      },
      {
        "id": "tt-ps-moderate-risk-info",
        "reference": "Personal Information",
        "summary": "Removes moderate risk personal information shared without consent if it puts someone at risk of psychological harm, generally requiring additional context for removal.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Required for TikTok to assess moderate risk personal information cases"
          },
          {
            "description": "Proof that information was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "To establish that the sharing was unauthorized"
          }
        ],
        "removalCriteria": [
          "Moderate risk personal information shared without consent",
          "Information puts someone at risk of psychological harm",
          "Additional context provided to support removal request"
        ]
      },
      {
        "id": "tt-ps-high-risk-info",
        "reference": "Personal Information",
        "summary": "Prohibits sharing high risk personal information characterized by heightened potential to cause physical, financial, or psychological harm, including home addresses, account login information, sensitive payment information, and identity numbers.",
        "quote": "High Risk Personal Information: Information that is characterized by a heightened potential to cause physical, financial, or psychological harm to the individual. It includes: Home Address, Account Login Information, Sensitive Payment Information, Identity Numbers",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided privacy reporting link to report high risk information sharing",
            "reason": "To initiate immediate review of high risk personal information violations"
          }
        ],
        "removalCriteria": [
          "Content contains home address information",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers"
        ]
      },
      {
        "id": "tt-ps-moderate-risk-details",
        "reference": "Personal Information",
        "summary": "Prohibits sharing moderate risk personal information that may cause emotional distress, reputational damage, or unwanted contact, including contact details, medical information, image/audio likeness, and private communications on sensitive subjects.",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of potential harm from information sharing",
            "example": "Documentation showing risk of emotional distress, reputational damage, or unwanted contact",
            "reason": "To demonstrate the harmful impact of sharing moderate risk information"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth",
          "Content contains medical information",
          "Content contains image/audio likeness without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or allowing them to break TikTok's rules on user accounts, and prohibits unauthorized access methods or creating fake versions of the platform.",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account, Using unauthorized ways to access TikTok or creating fake versions of the platform",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or fake platform creation",
            "example": "Documentation showing someone else accessed your account or created fake TikTok versions",
            "reason": "To verify platform security violations and unauthorized access"
          }
        ],
        "removalCriteria": [
          "User shared login information with others",
          "Others used account to break TikTok's rules",
          "Unauthorized methods used to access TikTok",
          "Fake versions of the platform created"
        ]
      },
      {
        "id": "tt-ps-malware-phishing",
        "reference": "Platform Security",
        "summary": "Prohibits sharing files or messages containing malware or harmful software, and prohibits attempts to steal personal information, hack accounts, or access data using phishing, smishing, or automated tools.",
        "quote": "Sharing files or messages that carry malware or other harmful software, such as viruses or worms, Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of malware distribution or phishing attempts",
            "example": "Documentation of harmful files, phishing messages, or account hacking attempts",
            "reason": "To identify and prevent security threats to users and the platform"
          }
        ],
        "removalCriteria": [
          "Content contains malware or harmful software",
          "Content includes viruses or worms",
          "Attempts to steal personal information through phishing",
          "Attempts to hack accounts using automated tools",
          "Use of smishing or other deceptive data access methods"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
