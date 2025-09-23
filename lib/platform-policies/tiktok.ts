import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including safety and civility, integrity and authenticity, and content policies. Updated in August 2025 with new sections on AI content, LIVE creator rules, and enhanced enforcement policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
    "policies": [
      {
        "id": "tt-ncii-policy",
        "reference": "TT-CG-NCSII",
        "summary": "Strictly prohibits adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.",
        "quote": "We strictly prohibit adult nudity, sexual exploitation, and the sharing of non-consensual intimate imagery (NCII), including deepfakes.",
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
            "description": "Mandated removal under TAKE IT DOWN Act"
          }
        },
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
        "summary": "Prohibits using AI to create non-consensual intimate imagery and requires labeling for other realistic AI content.",
        "quote": "We prohibit using AI to create non-consensual intimate imagery. Requires labeling for other realistic AI content.",
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
          "Other realistic manipulated media is not clearly disclosed using a label like 'AI-generated'"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
        "summary": "Prohibits bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.",
        "quote": "We prohibit bullying, harassment, and abusive behavior, including posting content to mock, humiliate, or harass someone.",
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
        "summary": "Prohibits sharing personally identifiable information (PII) without consent, a practice known as doxing.",
        "quote": "We prohibit sharing personally identifiable information (PII) without consent, a practice known as doxing.",
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
            "description": "Link to the content containing PII",
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
        "summary": "Prohibits impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated.",
        "quote": "We prohibit impersonating individuals or organizations in a deceptive manner. Parody or fan accounts must be clearly stated in the account name or bio.",
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
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
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
            "example": "DMCA takedown notice or similar copyright claim",
            "reason": "Legal requirement for copyright infringement claims"
          },
          {
            "description": "Proof of original ownership of the content",
            "example": "Original files, metadata, or creation documentation",
            "reason": "To establish copyright ownership"
          },
          {
            "description": "URL(s) of the infringing content",
            "example": "Direct links to the unauthorized content on TikTok",
            "reason": "To identify the specific content that infringes copyright"
          }
        ],
        "removalCriteria": [
          "Content is an original work (photo, video) posted without the copyright owner's permission"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-TOS-HARASSMENT",
        "summary": "Prohibits intimidation, harassment, and content that promotes sexually explicit material or discrimination.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age",
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
            "description": "Report through TikTok's feedback form",
            "example": "Use https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of harassing content"
          },
          {
            "description": "URL(s) of the harassing content",
            "example": "Direct links to the content that violates the policy",
            "reason": "To identify the specific content for review"
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
        "reference": "TT-TOS-IMPERSONATION",
        "summary": "Prohibits impersonating any person or entity or falsely representing affiliation with others.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
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
            "description": "Report through TikTok's feedback form",
            "example": "Use https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of impersonation"
          },
          {
            "description": "Evidence of impersonation",
            "example": "Screenshots showing false identity claims or unauthorized use of personal information",
            "reason": "To demonstrate that someone is falsely representing themselves as you"
          }
        ],
        "removalCriteria": [
          "User is impersonating another person or entity",
          "User is falsely representing their affiliation with another person",
          "Content gives false impression of emanating from official sources"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-PRIVATE-INFO",
        "summary": "Prohibits uploading or sharing private information of third parties without authorization.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers",
        "contentTypes": [
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
            "description": "Report through TikTok's feedback form",
            "example": "Use https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of privacy violation"
          },
          {
            "description": "Identification of the private information being shared",
            "example": "Description of what personal data is being shared without permission",
            "reason": "To identify the specific privacy violation"
          }
        ],
        "removalCriteria": [
          "Content contains private addresses, phone numbers, or email addresses of third parties",
          "Content contains personal identity document information",
          "Content contains financial information like credit card numbers"
        ]
      },
      {
        "id": "tt-bullying-policy",
        "reference": "TT-TOS-BULLYING",
        "summary": "Prohibits content designed to provoke, harass, harm, or embarrass people, including trolling and bullying.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Report through TikTok's feedback form",
            "example": "Use https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of bullying content"
          },
          {
            "description": "URL(s) of the bullying content",
            "example": "Direct links to content that harasses or embarrasses",
            "reason": "To identify the specific content for review"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to provoke or antagonize people",
          "Content constitutes trolling or bullying behavior",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-unauthorized-account-use-policy",
        "reference": "TT-TOS-UNAUTHORIZED-ACCESS",
        "summary": "Prohibits using or attempting to use another person's account without authorization.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
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
            "description": "Report unauthorized account access immediately",
            "example": "Contact https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of account compromise"
          },
          {
            "description": "Evidence of unauthorized access",
            "example": "Screenshots of unauthorized posts or account changes",
            "reason": "To demonstrate that the account has been compromised"
          }
        ],
        "removalCriteria": [
          "Someone is using another person's account without authorization",
          "User has created a false identity on the platform"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-ACCOUNT-SECURITY",
        "summary": "Requires users to keep account passwords confidential and report suspected unauthorized access immediately.",
        "quote": "It is important that you keep your account password confidential and that you do not disclose it to any third party. If you know or suspect that any third party knows your password or has accessed your account, you must notify us immediately at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Immediate notification of suspected account compromise",
            "example": "Report through https://www.tiktok.com/legal/report/feedback",
            "reason": "To enable TikTok to secure the compromised account"
          },
          {
            "description": "Details of suspected unauthorized access",
            "example": "Information about when and how the account may have been compromised",
            "reason": "To help TikTok investigate and secure the account"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user's account",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-CONTENT-REMOVAL",
        "summary": "Reserves the right to remove or disable access to content at any time for violations of Terms or Community Guidelines.",
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
            "description": "Report violating content through feedback form",
            "example": "Use https://www.tiktok.com/legal/report/feedback",
            "reason": "To notify TikTok of content that violates policies"
          }
        ],
        "removalCriteria": [
          "Content is objectionable or harmful to the platform or users",
          "Content violates Terms of Service or Community Guidelines"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-COUNTER-NOTICE",
        "summary": "Provides a counter-notice process for content removal with potential restoration in ten business days.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": 10,
            "unit": "days",
            "description": "Content may be restored in ten business days or more after counter-notice receipt"
          }
        },
        "evidenceRequirements": [
          {
            "description": "File a counter-notice with TikTok's Copyright Agent",
            "example": "Formal counter-notice disputing the original takedown claim",
            "reason": "To challenge wrongful content removal"
          }
        ],
        "removalCriteria": [
          "Original complaining party does not file court action within specified timeframe"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can appeal content removal decisions and report policy violations through TikTok's feedback form. Counter-notices are available for copyright claims with potential content restoration.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content removal or policy violation",
        "For copyright claims, file a counter-notice with TikTok's Copyright Agent if removal was improper",
        "Wait for TikTok's review and response to the appeal or counter-notice"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced transparency and data protection measures.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under-18",
        "reference": "TT-PP-OTHER-RIGHTS",
        "summary": "Provides content removal rights for users under 18 years of age in California and Connecticut, allowing removal of User Content they posted",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content. We do not accept California Removal Requests via postal mail, telephone, or facsimile. We may not be able to respond if you do not provide adequate information. Please note that your request does not ensure complete or comprehensive removal of the material. For example, User Content that you have posted may be republished or reposted by another user. Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
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
            "description": "Description of the User Content to be removed",
            "example": "Detailed description of the specific content posted",
            "reason": "To identify and locate the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "URL, username, date posted, or other identifying information",
            "reason": "To enable platform to locate the specific content among all user-generated content"
          }
        ],
        "removalCriteria": [
          "User must be a California or Connecticut resident under 18 years of age",
          "Content must be User Content that the minor posted themselves",
          "Request must include adequate description and location information"
        ]
      },
      {
        "id": "tt-pp-data-rights-access",
        "reference": "TT-PP-YOUR-RIGHTS",
        "summary": "Provides users with rights to know, access, correct, or delete information collected about them, with appeal process for denied requests",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You may appeal any decision we have made about your request by following the instructions in the communication you receive from us notifying you of our decision. You may also exercise your rights to know, access, correct, delete, or appeal by sending your request to the physical address provided in the \"Contact Us\" section below. You can also update your account information directly through your in-app settings, as well as request a copy of your TikTok data or request to deactivate by following the instructions here or delete your account by following the instructions here.",
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
            "description": "Request sent from email address associated with account or information to verify account",
            "example": "Email from registered account email or account verification details",
            "reason": "To verify identity and prevent unauthorized access to personal information"
          }
        ],
        "removalCriteria": [
          "User must properly verify their identity",
          "Request must be submitted through designated channels",
          "Request must comply with applicable law verification requirements"
        ]
      },
      {
        "id": "tt-pp-child-data-deletion",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "Requires deletion of personal information and account termination when platform becomes aware that data was collected from a child under 13",
        "quote": "The Platform otherwise is not directed at Children. If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report of user believed to be under age 13",
            "example": "Information indicating user is below minimum age requirement",
            "reason": "To identify accounts that violate age requirements for child protection"
          }
        ],
        "removalCriteria": [
          "Platform becomes aware personal information was collected from a child under 13",
          "User is determined to be below the minimum age of 13"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "Allows parents and guardians to request deletion of underage child's account or download account data, with state-specific rights for child and teen accounts",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy. We will address these requests in accordance with applicable law.",
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
            "description": "Verification of parental or guardian status",
            "example": "Documentation proving legal guardianship or parental relationship",
            "reason": "To verify authority to make requests on behalf of minor"
          }
        ],
        "removalCriteria": [
          "Requester must be verified parent or legal guardian",
          "Account must belong to underage child or teen",
          "Request must comply with applicable state law requirements"
        ]
      },
      {
        "id": "tt-pp-legal-disclosure",
        "reference": "TT-PP-HOW-WE-SHARE",
        "summary": "Permits disclosure of collected information to respond to legal process, protect platform safety and security, and enforce terms of service",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Valid legal process or law enforcement request",
            "example": "Subpoena, court order, or official government inquiry",
            "reason": "To comply with legal obligations and protect platform and user safety"
          }
        ],
        "removalCriteria": [
          "Valid legal process requires disclosure",
          "Information needed to protect platform, affiliate, user, or public safety and security",
          "Disclosure necessary to enforce platform terms or defend legal claims"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their data rights requests by following instructions provided in the decision communication",
      "steps": [
        "Submit initial request for data rights (know, access, correct, delete) at https://www.tiktok.com/legal/report/privacy",
        "Receive communication from TikTok with decision on request",
        "Follow instructions in the decision communication to submit appeal",
        "Alternatively, send appeal request to physical address provided in Contact Us section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758635918612-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA takedown procedures for content removal and appeals.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
    "policies": [
      {
        "id": "tt-copyright-infringement-removal",
        "reference": "TT-IP-COPYRIGHT-REMOVAL",
        "summary": "Prohibits content that infringes copyright and removes any user content that infringes another person's copyright",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies. Any user content that infringes another person's copyright may be removed.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, description of infringed work, location of infringing content",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name, email address, phone number",
            "reason": "TikTok may contact the reporter with questions about the report"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
        ]
      },
      {
        "id": "tt-copyright-repeat-infringer-ban",
        "reference": "TT-IP-COPYRIGHT-BAN",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts in cases of severe copyright violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
            "description": "Evidence of repeated copyright infringement by the same user",
            "example": "Multiple copyright infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement for account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "Severe copyright violations warranting immediate action"
        ]
      },
      {
        "id": "tt-copyright-live-restriction",
        "reference": "TT-IP-COPYRIGHT-LIVE",
        "summary": "Temporarily restricts access to LIVE feature for users who infringe copyright while using the LIVE feature",
        "quote": "If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
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
            "description": "Evidence that copyright infringement occurred during use of LIVE feature",
            "example": "Copyright infringement report specifically related to live streaming content",
            "reason": "To establish that the violation occurred during live streaming to justify feature restriction"
          }
        ],
        "removalCriteria": [
          "User infringes copyright by using the LIVE feature"
        ]
      },
      {
        "id": "tt-trademark-infringement-removal",
        "reference": "TT-IP-TRADEMARK-REMOVAL",
        "summary": "Removes content that violates trademark rights and prohibits counterfeiting, including purchase, sale, trade, promotion, or solicitation of counterfeit goods",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, description of trademark rights, location of infringing content",
            "reason": "To facilitate investigation of trademark infringement claims"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name, email address, phone number",
            "reason": "TikTok may contact the reporter with additional questions about the report"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-trademark-repeat-infringer-ban",
        "reference": "TT-IP-TRADEMARK-BAN",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts in cases of severe trademark violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of repeated trademark infringement by the same user",
            "example": "Multiple trademark infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement for account termination"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits trademark infringement",
          "Severe trademark violations warranting immediate action"
        ]
      },
      {
        "id": "tt-trademark-live-restriction",
        "reference": "TT-IP-TRADEMARK-LIVE",
        "summary": "Temporarily restricts access to LIVE feature for users who commit trademark violations while using the LIVE feature",
        "quote": "In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence that trademark violation occurred during use of LIVE feature",
            "example": "Trademark infringement report specifically related to live streaming content",
            "reason": "To establish that the violation occurred during live streaming to justify feature restriction"
          }
        ],
        "removalCriteria": [
          "Trademark violations in connection with the use of the LIVE feature"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications for both copyright and trademark infringement. Appeals must include contact information and supporting evidence. For copyright appeals outside the EU, TikTok may forward the entire appeal to the original reporter and may reinstate content if no court action is filed.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app accessed from the notification",
        "Provide all required information including contact information and supporting evidence",
        "TikTok may contact you with additional questions about your appeal",
        "For copyright appeals outside EU: TikTok forwards entire appeal to original reporter",
        "For copyright appeals outside EU: Content may be reinstated if no court action is filed by claimant",
        "Users can also contact the rights holder directly to request a retraction"
      ]
    }
  },
  {
    "id": "tiktok-new-1758635918612-1",
    "reference": "TT-BP",
    "title": "Bullying Prevention",
    "summary": "Dedicated policy on preventing and addressing bullying, harassment, and related harmful behaviors on the platform.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
    "policies": [
      {
        "id": "tt-bp-harassment-bullying",
        "reference": "TT-BP-HARASSMENT",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens, or doxxes anyone on the platform.",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report of the harassing content through TikTok's reporting system",
            "example": "Use the in-app reporting feature to flag harassing comments, videos, or messages",
            "reason": "Required for TikTok's moderation team to review and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes other users by publishing personal information with malicious intent"
        ]
      },
      {
        "id": "tt-bp-community-guidelines-violation",
        "reference": "TT-BP-COMMUNITY",
        "summary": "Requires reporting of bullying content that violates TikTok's Community Guidelines for moderation review and appropriate action.",
        "quote": "If you are experiencing bullying on TikTok, please report it so our moderation team can review and take appropriate action if it violates TikTok's Community Guidelines.",
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
            "description": "Report through TikTok's official reporting system",
            "example": "Submit report via the steps outlined in TikTok's Help Center reporting process",
            "reason": "Enables moderation team to review content against Community Guidelines and take appropriate enforcement action"
          }
        ],
        "removalCriteria": [
          "Content that constitutes bullying behavior",
          "Content that violates TikTok's Community Guidelines"
        ]
      },
      {
        "id": "tt-bp-public-figure-attacks",
        "reference": "TT-BP-PUBLIC-FIGURES",
        "summary": "Prohibits severe attacks against public figures that may promote physical harm or harassment.",
        "quote": "We do not allow public figures to be targeted with severe attacks that may promote physical harm or promotion of harassment against them. We consider the risk of physical or severe psychological harm resulting from these attacks to be greater than the benefit of their expression and remove such content.",
        "contentTypes": [
          "personal",
          "other"
        ],
        "contentContexts": [
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
            "description": "Evidence of severe attacks targeting public figures",
            "example": "Content that promotes physical harm or harassment against public figures",
            "reason": "To assess whether attacks pose risk of physical or severe psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks against public figures that may promote physical harm",
          "Content that promotes harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report bullying and harassment through TikTok's in-app reporting system for moderation review",
      "steps": [
        "Access TikTok's reporting system through the provided Help Center link",
        "Submit report of bullying or harassment content",
        "Moderation team reviews reported content against Community Guidelines",
        "Appropriate action taken if content violates guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758635918612-2",
    "reference": "TT-PS",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific guidelines on privacy protection and security measures, including policies on personal information sharing.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T13:58:38.612Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "TT-PS-1.1",
        "summary": "Prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, account login information, sensitive payment information, and identity numbers.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided reporting link to submit privacy violation claims",
            "reason": "Required to initiate TikTok's review process for personal information violations"
          }
        ],
        "removalCriteria": [
          "Content contains home addresses",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Content could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-ps-personal-info-moderate-risk",
        "reference": "TT-PS-1.2",
        "summary": "Removes moderate-risk personal information shared without consent when it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications on sensitive subjects.",
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
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating risk of psychological harm",
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "Required to assess moderate-risk personal information for removal eligibility"
          },
          {
            "description": "Proof that content was shared without consent",
            "example": "Documentation showing lack of permission to share the personal information",
            "reason": "Necessary to establish violation of consent requirements"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Content puts someone at risk of psychological harm",
          "Content may cause emotional distress or reputational damage"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "TT-PS-2.1",
        "summary": "Prohibits sharing login information, unauthorized access attempts, malware distribution, phishing, account hacking, and reverse-engineering of TikTok's systems.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems.",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": {
          "response": null,
          "removal": null
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized access or security violation",
            "example": "Documentation of account compromise, phishing attempts, or malware distribution",
            "reason": "Required to verify platform security violations and protect user accounts"
          }
        ],
        "removalCriteria": [
          "Giving someone else login information or letting them break TikTok's rules on your account",
          "Using unauthorized ways to access TikTok or creating fake versions of the platform",
          "Sharing files or messages that carry malware or other harmful software",
          "Trying to steal personal information, hack accounts, or access data using phishing or automated tools",
          "Attempting to reverse-engineer TikTok's code, systems, or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's dedicated privacy reporting system",
      "steps": [
        "Access the privacy violation reporting form at the provided URL",
        "Submit details about the privacy violation",
        "Provide additional context if reporting moderate-risk personal information"
      ]
    }
  }
],
};
