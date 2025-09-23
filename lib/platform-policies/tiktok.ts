import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including updated policies on AI content, LIVE streaming, and content levels. Updated August 2025 with new sections on content moderation enforcement and clearer language around policy violations.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
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
          "Content shows significant body exposure involving young people",
          "Content promotes or facilitates sexual services"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads about matters of public importance or harms individuals.",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
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
          "AI-generated content is used to create misleading depictions that harm individuals",
          "Realistic AI or edited content lacks clear labeling",
          "AIGC misleads about matters of public importance"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits harassment and bullying, including degrading remarks about appearance, doxing, sexual harassment, and coordinated abuse.",
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
          "Content contains degrading remarks about appearance",
          "Content involves doxing or sharing personal information",
          "Content constitutes sexual harassment",
          "Content involves coordinated abuse against an individual"
        ]
      },
      {
        "id": "tt-privacy-policy",
        "reference": "TT-CG-PRIVACY",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
        "contentTypes": [
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
            "description": "Description of the personal information exposed",
            "reason": "To understand the nature and scope of the privacy violation"
          },
          {
            "description": "Confirmation that the information was shared without consent",
            "reason": "To establish that consent was not given for sharing"
          }
        ],
        "removalCriteria": [
          "Content reveals personal information that could lead to identity theft",
          "Content shares information that could enable stalking",
          "Content exposes personal information that could facilitate fraud",
          "Information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits deceptive behaviors and fake engagement, including accounts that mislead or try to manipulate the platform.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Link to the impersonating or deceptive account",
            "reason": "To identify the account engaging in deceptive behavior"
          },
          {
            "description": "Evidence of your authentic identity",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is misleading or manipulating",
            "reason": "To understand the nature and extent of the deceptive behavior"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform's systems",
          "Account engages in fake engagement or artificial boosting",
          "Account tricks the recommendation system"
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
            "description": "Evidence of hacking attempts or system compromise",
            "reason": "To identify and investigate security violations"
          },
          {
            "description": "Description of the security breach or attempted breach",
            "reason": "To understand the nature and scope of the security threat"
          }
        ],
        "removalCriteria": [
          "Content shows or promotes hacking attempts",
          "Content involves reverse-engineering platform systems",
          "Content demonstrates methods to compromise platform security"
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
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Link to the infringing content",
            "reason": "To identify the content that violates intellectual property rights"
          },
          {
            "description": "Evidence of ownership or authorization",
            "reason": "To verify rights to the intellectual property"
          },
          {
            "description": "Description of the intellectual property violation",
            "reason": "To understand the nature of the infringement"
          }
        ],
        "removalCriteria": [
          "Content violates copyright without permission",
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
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
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
        "summary": "Prohibits intimidation, harassment, and content designed to provoke, antagonize, or embarrass users.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people;",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "impersonation",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the harassing content through the feedback form",
            "reason": "To notify TikTok of the violation"
          },
          {
            "description": "URL(s) of the harassing content",
            "reason": "To identify the specific content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content is designed to intimidate or harass another person",
          "Content is deliberately designed to provoke, antagonize, or embarrass users",
          "Content constitutes trolling or bullying behavior"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits sharing private information of third parties, including addresses, phone numbers, email addresses, and personal identity document numbers.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers;",
        "contentTypes": [
          "personal",
          "private"
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
            "description": "Report the content containing private information through the feedback form",
            "reason": "To notify TikTok of the privacy violation"
          },
          {
            "description": "URL(s) of the content containing private information",
            "reason": "To identify the specific content that violates privacy"
          }
        ],
        "removalCriteria": [
          "Content contains private information of a third party without authorization",
          "Content includes addresses, phone numbers, email addresses, or personal identity document numbers"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation with any person or entity.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services;",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the impersonating account through the feedback form",
            "reason": "To notify TikTok of the impersonation"
          },
          {
            "description": "Evidence of the impersonation (e.g., profile information, content)",
            "reason": "To verify the false representation of identity"
          }
        ],
        "removalCriteria": [
          "Account impersonates another person or entity",
          "Account falsely represents affiliation with a person or entity",
          "Content gives false impression of emanating from official sources"
        ]
      },
      {
        "id": "tt-unauthorized-account-access-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another person's account without authorization from TikTok.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report unauthorized account access through the feedback form",
            "reason": "To notify TikTok of the security breach"
          },
          {
            "description": "Evidence of unauthorized access to the account",
            "reason": "To verify the unauthorized use"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "Evidence of unauthorized access or use of another person's account"
        ]
      },
      {
        "id": "tt-hacked-account-policy",
        "reference": "TT-TOS-4",
        "summary": "Provides a process for users to recover a compromised account and requires immediate notification of suspected unauthorized access.",
        "quote": "If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback. You agree that you are solely responsible (to us and to others) for the activity that occurs under your account.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Immediate notification through the feedback form if account is compromised",
            "reason": "To alert TikTok of the security breach and begin recovery process"
          },
          {
            "description": "Evidence of unauthorized access (e.g., password changes, unfamiliar activity)",
            "reason": "To verify the compromise and restore legitimate access"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized access to the account",
          "Third party has gained access to account credentials",
          "Account is posting content the owner did not create"
        ]
      },
      {
        "id": "tt-content-removal-discretion-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at TikTok's discretion for any reason, including content found objectionable or harmful to users.",
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
            "description": "Report objectionable content through the feedback form",
            "reason": "To notify TikTok of potentially harmful content"
          }
        ],
        "removalCriteria": [
          "Content is found objectionable by TikTok",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-removal-policy",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to remove, disallow, block or delete any User Content that violates Terms or in response to complaints from other users.",
        "quote": "We, or authorised third parties, reserve the right to cut, crop, edit or refuse to publish, your content at our or their sole discretion. We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at 'Your Access to and Use of Our Services' above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "File a complaint about content through the feedback form",
            "reason": "To report content that violates Terms or harms users"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for review and potential removal"
          }
        ],
        "removalCriteria": [
          "User Content violates the Terms of Service",
          "Content does not comply with established content standards",
          "Content is subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process for content removal, with potential restoration of content within ten business days if no legal action is filed.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
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
            "value": 10,
            "unit": "days",
            "description": "Content may be restored in ten business days or more after receipt of counter-notice"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Submit a counter-notice to TikTok's Copyright Agent",
            "reason": "To challenge the removal and request content restoration"
          },
          {
            "description": "Valid legal basis for counter-notice",
            "reason": "To demonstrate the removal was improper or unauthorized"
          }
        ],
        "removalCriteria": [
          "Original complaining party must file legal action to prevent content restoration",
          "Counter-notice must be properly submitted to Copyright Agent"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or appeal decisions through TikTok's feedback form, with a counter-notice process available for copyright-related removals.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright counter-notices, submit to TikTok's Copyright Agent",
        "Provide detailed information about the complaint or appeal",
        "For counter-notices, content may be restored in 10+ business days unless legal action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024, with enhanced transparency about data collection and sharing practices.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
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
        "id": "tt-pp-abuse-detection",
        "reference": "How We Use Your Information",
        "summary": "Detects abuse, fraud, and illegal activity on the Platform through automated systems and content analysis.",
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
            "description": "Evidence of abusive, fraudulent, or illegal activity",
            "example": "Content or behavior patterns indicating platform abuse",
            "reason": "To maintain platform safety and comply with legal requirements"
          }
        ],
        "removalCriteria": [
          "Content constitutes abuse",
          "Content involves fraudulent activity",
          "Content involves illegal activity"
        ]
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Deletes personal information collected from children under 13 and terminates their accounts when discovered, with reporting mechanisms for underage users.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report of user believed to be under age 13",
            "example": "Information indicating a user is below the minimum age requirement",
            "reason": "To comply with children's privacy laws and protect minors"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Personal information was collected from a child under 13"
        ]
      },
      {
        "id": "tt-pp-underage-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal process for California residents under 18 to request removal of their posted User Content, though complete removal cannot be guaranteed if content has been republished by others.",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Description of User Content to be removed and sufficient information to locate it",
            "example": "Detailed description of the posted content and its location on the platform",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "Information demonstrating user is a California resident under 18 years old",
            "reason": "To verify eligibility for this specific removal right"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user",
          "Adequate information provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "Children and Teens",
        "summary": "Allows parents and guardians to request deletion of underage children's accounts, download account data, or exercise other rights over their child's or teen's account in accordance with applicable law.",
        "quote": "If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of parental or guardian relationship to the minor user",
            "example": "Documentation establishing legal guardianship or parental rights",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Identification of the child's or teen's account",
            "example": "Account information or username of the minor's account",
            "reason": "To locate and take action on the correct account"
          }
        ],
        "removalCriteria": [
          "Requester is verified parent or legal guardian",
          "Request is made in accordance with applicable state law",
          "Account belongs to requester's minor child or teen"
        ]
      },
      {
        "id": "tt-pp-legal-disclosure",
        "reference": "For Legal Reasons",
        "summary": "Discloses collected information to respond to legal process, law enforcement requests, and to protect platform safety and security, including enforcement of terms and defense of legal claims.",
        "quote": "We may disclose any of the Information We Collect to respond to subpoenas, court orders, legal process, law enforcement requests, legal claims, or government inquiries, and to protect and defend the rights, interests, safety, and security of the Platform, our affiliates, users, or the public. We may also share any of the Information We Collect to enforce any terms applicable to the Platform, to exercise or defend any legal claims, and comply with any applicable law.",
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
            "example": "Subpoena, court order, or official government inquiry",
            "reason": "To comply with legal obligations and protect platform security"
          }
        ],
        "removalCriteria": [
          "Valid subpoena or court order received",
          "Legitimate law enforcement request",
          "Necessary to protect platform or user safety and security",
          "Required to enforce platform terms or defend legal claims"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may appeal decisions made about their privacy requests through instructions provided in decision communications",
      "steps": [
        "Submit initial privacy request through the provided contact form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Alternative: Send appeal request to physical address provided in Contact Us section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758628932109-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA takedown procedures, including counter-notification processes.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
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
            "example": "Information about the copyrighted work and alleged infringement",
            "reason": "To facilitate the evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information and evidence to support counter-notification claims",
            "example": "Evidence showing authorization to use the content",
            "reason": "Required for appeal evaluation under DMCA or similar laws"
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
        "summary": "Removes user content that infringes copyright and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any user content that infringes another person's copyright may be removed. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
            "example": "Unauthorized use of copyrighted material",
            "reason": "To determine if content violates copyright policies"
          }
        ],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Repeated copyright infringement by user account",
          "Severe copyright violations"
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
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Information about the trademark and alleged infringement",
            "reason": "To investigate trademark infringement claims"
          },
          {
            "description": "Contact information and evidence to support appeal claims",
            "example": "Evidence showing authorization to use the trademark",
            "reason": "Required for appeal evaluation of trademark removal"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation",
          "Use in connection with goods or services that may deceive consumers"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits the purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
        "quote": "Counterfeiting is the illegal manufacturing, importing and exporting, distributing, selling, facilitating the trade of, or otherwise dealing in goods under a trademark that is identical to or substantially similar to a registered trademark, without the trademark owner's permission, thereby infringing the rights of the trademark owner. We do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of counterfeit goods being sold, traded, or promoted",
            "example": "Content showing illegal manufacturing, distribution, or sale of trademark-infringing goods",
            "reason": "To identify and remove counterfeit goods from the platform"
          }
        ],
        "removalCriteria": [
          "Purchase, sale, trade, promotion, or solicitation of counterfeit goods",
          "Illegal manufacturing, importing, exporting, or distributing of goods under infringing trademarks",
          "Dealing in goods identical or substantially similar to registered trademarks without permission"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
            "description": "Evidence of trademark rights violation",
            "example": "Unauthorized use of trademark causing consumer confusion",
            "reason": "To determine if content violates trademark policies"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Repeated trademark infringement by user account",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details",
        "Submit evidence to support your claim",
        "TikTok may contact you for additional questions",
        "For copyright appeals outside EU: TikTok forwards appeal to original reporter",
        "Content may be reinstated at TikTok's discretion if no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758628932109-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent content, including specific protections for minors and public figures.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
    "policies": [
      {
        "id": "tt-safety-adult-sexual-abuse",
        "reference": "Adult Sexual Abuse",
        "summary": "Prohibits content that shows or promotes sexual abuse or exploitation of adults, including non-consensual sexual acts, image-based sexual abuse, and sextortion.",
        "quote": "We don't allow content that shows or promotes the sexual abuse or exploitation of adults. This includes: Non-Consensual Sexual Acts, Image-Based Sexual Abuse, Sextortion",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report intimate privacy violations through dedicated reporting form",
            "example": "Use the specific reporting link for intimate privacy violations",
            "reason": "Platform has specialized process for handling intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Content showing or promoting non-consensual sexual acts",
          "Content showing or promoting image-based sexual abuse",
          "Content showing or promoting sextortion",
          "Explicit imagery of adult sexual abuse in fiction or art"
        ]
      },
      {
        "id": "tt-safety-image-based-sexual-abuse",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, including content that appears consensually taken but is distributed without permission.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through intimate privacy violation form",
            "example": "Submit report at https://www.tiktok.com/legal/report/privacy",
            "reason": "Specialized reporting process for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent",
          "Intimate images created without consent",
          "Content taken with consent but distributed without permission"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share nude or sexual content without permission, typically to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to share intimate content",
            "example": "Screenshots of threatening messages or demands",
            "reason": "To establish the coercive nature of the content"
          }
        ],
        "removalCriteria": [
          "Threats to share nude or sexual content without permission",
          "Demands for money, sex, or explicit content in exchange for not sharing intimate images"
        ]
      },
      {
        "id": "tt-safety-harassment-bullying",
        "reference": "Harassment and Bullying",
        "summary": "Prohibits harassment and bullying, including sexual harassment, doxing, coordinated abuse, and degrading behavior targeting individuals.",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
        "contentTypes": [
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
            "description": "Evidence of harassing or bullying behavior",
            "example": "Screenshots of abusive comments, coordinated harassment, or doxing attempts",
            "reason": "To demonstrate pattern of harassment or specific harmful behavior"
          }
        ],
        "removalCriteria": [
          "Sexual harassment including sexualization or sexual degradation",
          "Doxing or threatening to publish personal information with malicious intent",
          "Inciting harassment or promoting coordinated abuse",
          "Insulting physical attributes",
          "Degrading or revictimizing tragedy victims",
          "Wishing serious harm on someone"
        ]
      },
      {
        "id": "tt-safety-doxing",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of personal information being published or threatened to be published",
            "example": "Screenshots showing personal details, addresses, phone numbers being shared maliciously",
            "reason": "To establish malicious intent through objective indicators like captions and hashtags"
          }
        ],
        "removalCriteria": [
          "Publishing personal information with malicious intent",
          "Threatening to publish personal information with malicious intent",
          "Encouraging others to engage in doxing"
        ]
      },
      {
        "id": "tt-safety-sexual-harassment",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted sexual comments or behavior",
            "example": "Screenshots of sexual comments about body parts, mimicking sexual acts using platform features",
            "reason": "To demonstrate sexual harassment through language or behavior"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments toward someone",
          "Engaging in unwanted sexual behavior toward someone",
          "Mimicking sexual acts using platform features like Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-safety-youth-sexual-abuse",
        "reference": "Youth Sexual and Physical Abuse",
        "summary": "Prohibits sharing, showing, promoting, or engaging in abuse or exploitation of youth, including CSAM, grooming, sextortion, and sexual solicitation.",
        "quote": "We don't allow sharing, showing, promoting, or engaging in abuse or exploitation of youth. This includes: Child Sexual Abuse Material (CSAM), Grooming, Sextortion, Sexual Solicitation, Pedophilia, Physical or Psychological Harm to young people",
        "contentTypes": [
          "intimate",
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM immediately without downloading or sharing",
            "example": "Use in-app reporting or website reporting feature",
            "reason": "Platform reports to NCMEC and law enforcement for youth safety"
          }
        ],
        "removalCriteria": [
          "Child Sexual Abuse Material including screenshots or clips",
          "Grooming behavior",
          "Sextortion involving youth",
          "Sexual solicitation of youth",
          "Sexualizing or fetishizing young people",
          "Content identifying youth abuse victims"
        ]
      },
      {
        "id": "tt-safety-violent-criminal-behavior",
        "reference": "Violent and Criminal Behavior",
        "summary": "Prohibits threats, glorifying violence, or promoting crimes that could harm people, animals, or property.",
        "quote": "We don't allow threats, glorifying violence, or promoting crimes that could harm people, animals, or property.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats or promotion of violence",
            "example": "Screenshots of threatening messages or content glorifying violence",
            "reason": "Platform reports credible threats to law enforcement"
          }
        ],
        "removalCriteria": [
          "Threatening or expressing desire to physically harm people",
          "Promoting or glorifying violence",
          "Promoting theft or destruction of property",
          "Sharing instructions on how to commit harmful crimes"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document references appeal processes but directs users to other sections for specific details about notice and appeals procedures.",
      "steps": [
        "Users can appeal content removal decisions",
        "Specific appeal procedures are detailed in the Enforcement section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758628932109-2",
    "reference": "TT-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Policies covering sexual content, nudity, non-consensual intimate imagery, and age-restricted content with detailed enforcement standards.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-23T12:02:12.109Z",
    "policies": [
      {
        "id": "tt-mature-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits nudity, sexual activity, sexual services, and sexually suggestive acts or significant body exposure involving youth.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing prohibited nudity, sexual activity, or sexual services",
            "example": "Videos or images depicting penetrative sex, non-penetrative sex, oral sex, or nudity",
            "reason": "To verify violation of body exposure and sexualized behavior policies"
          }
        ],
        "removalCriteria": [
          "Content showing penetrative sex, non-penetrative sex, or oral sex",
          "Content showing physical sexual arousal or stimulation",
          "Content showing fetish or kink behavior",
          "Content showing nudity of adults or young people",
          "Content facilitating access to sexual services",
          "Content showing young people engaging in sexually suggestive acts"
        ]
      },
      {
        "id": "tt-mature-youth-sexual-content",
        "reference": "Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits significant body exposure of young people, intimate kissing, sexually suggestive acts, sexualized framing, and sexually explicit language involving or directed at young people.",
        "quote": "Showing young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing; Sexually explicit language involving or directed at young people; Significant body exposure of young people, such as wearing only underwear or lingerie",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing young people in prohibited sexual or suggestive contexts",
            "example": "Images or videos of minors in underwear, engaging in sexually suggestive behavior, or being subjected to sexually explicit language",
            "reason": "To protect youth from sexual exploitation and inappropriate content"
          }
        ],
        "removalCriteria": [
          "Young people shown in significant body exposure such as underwear or lingerie",
          "Young people engaging in intimate kissing",
          "Young people engaging in sexually suggestive acts",
          "Young people shown through sexualized framing",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-mature-graphic-violence",
        "reference": "Shocking and Graphic Content",
        "summary": "Prohibits extremely gory, disturbing, or violent content that could cause psychological harm, including graphic incidents, dead bodies, and graphic injury.",
        "quote": "we don't allow anything extremely gory, disturbing, or violent, especially when it could cause psychological harm. Depictions of real-world: Graphic incidents and violence, such as torture, the moment of someone's death, or the shooting of an individual; Dead bodies; Graphic injury, such as dismembered, mutilated, charred, or burned bodies",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing graphic violence, dead bodies, or severe injury",
            "example": "Videos depicting torture, moment of death, dismembered bodies, or graphic violence",
            "reason": "To prevent psychological harm and maintain platform safety standards"
          }
        ],
        "removalCriteria": [
          "Content showing graphic incidents and violence such as torture or shooting",
          "Content showing the moment of someone's death",
          "Content showing dead bodies",
          "Content showing graphic injury including dismembered, mutilated, charred, or burned bodies"
        ]
      },
      {
        "id": "tt-mature-animal-abuse",
        "reference": "Animal Abuse",
        "summary": "Prohibits animal abuse, cruelty, neglect, exploitation, inhumane slaughter, staged animal fights, poaching, and bestiality.",
        "quote": "We don't allow animal abuse, cruelty, neglect, or any other form of animal exploitation. Showing or promoting inhumane slaughter, mutilation, or abuse of animals, including staged animal fights; Showing or promoting mistreatment or neglect of animals, such as malnourishment; Showing dismembered, mutilated, charred, burned, or severely injured animals; Poaching; Bestiality",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing animal abuse, cruelty, neglect, or exploitation",
            "example": "Videos of animal fighting, inhumane slaughter, animal mutilation, or bestiality",
            "reason": "To protect animals from abuse and prevent promotion of animal cruelty"
          }
        ],
        "removalCriteria": [
          "Content showing or promoting inhumane slaughter, mutilation, or abuse of animals",
          "Content showing staged animal fights",
          "Content showing mistreatment or neglect of animals",
          "Content showing dismembered, mutilated, charred, burned, or severely injured animals",
          "Content showing poaching",
          "Content showing bestiality"
        ]
      },
      {
        "id": "tt-mature-age-restricted-adult-content",
        "reference": "Body Exposure and Sexualized Behaviors",
        "summary": "Age-restricts and makes ineligible for For You feed content showing significant adult body exposure, intimate kissing, sexually suggestive acts, sexualized framing, and sexually explicit language by adults.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF. Showing: Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks; Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing; In some regions, adults using sexually explicit language or showing or promoting sex products",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing adults in significant body exposure or sexually suggestive behavior",
            "example": "Videos of adults in minimal clothing, engaging in sexually suggestive acts, or using sexually explicit language",
            "reason": "To apply age restrictions and content filtering for mature content"
          }
        ],
        "removalCriteria": [
          "Content showing significant adult body exposure such as wearing only nipple covers or minimal underwear",
          "Content showing adults engaging in intimate kissing",
          "Content showing adults engaging in sexually suggestive acts or sexualized framing",
          "Content showing adults using sexually explicit language or promoting sex products in certain regions"
        ]
      }
    ],
    "appealProcess": null
  }
],
};
