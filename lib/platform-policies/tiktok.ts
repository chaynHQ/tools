import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including updated sections on sexually suggestive content, harassment, and content levels. Recently updated in August 2025 with new enforcement approaches and clearer language.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
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
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
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
          "hacked",
          "impersonation",
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the content through the feedback form",
            "reason": "To notify TikTok of the harassment or bullying content"
          },
          {
            "description": "Provide details of how the content harasses, embarrasses, or distresses",
            "reason": "To establish violation of harassment policies"
          }
        ],
        "removalCriteria": [
          "Content is designed to intimidate or harass another person",
          "Content is deliberately designed to provoke, antagonize, or embarrass people",
          "Content constitutes trolling or bullying behavior",
          "Content is intended to harm, hurt, scare, distress, or upset people"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or creating false identities on the platform.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services; use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
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
            "description": "Evidence showing the account is falsely representing your identity",
            "reason": "To establish that impersonation is occurring"
          }
        ],
        "removalCriteria": [
          "Account impersonates any person or entity",
          "Account falsely states or misrepresents affiliation with any person or entity",
          "Account creates a false identity on the Services"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits uploading or sharing any private information of third parties, including personal details and identification numbers.",
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
            "description": "Identification of the specific private information being shared",
            "reason": "To establish what private information has been disclosed"
          }
        ],
        "removalCriteria": [
          "Content contains private addresses, phone numbers, or email addresses of third parties",
          "Content contains personal identity document numbers or features",
          "Content contains credit card numbers or other financial information"
        ]
      },
      {
        "id": "tt-unauthorized-account-access-policy",
        "reference": "TT-TOS-4",
        "summary": "Requires users to report suspected unauthorized account access and provides account recovery processes.",
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
            "reason": "To alert TikTok of potential unauthorized access"
          },
          {
            "description": "Details of suspected unauthorized access or password compromise",
            "reason": "To help TikTok investigate and secure the account"
          }
        ],
        "removalCriteria": [
          "Evidence that a third party knows the account password",
          "Evidence that unauthorized access to the account has occurred"
        ]
      },
      {
        "id": "tt-content-removal-discretion-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at any time for violation of Terms or Community Guidelines.",
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
            "description": "Report content through the feedback form",
            "reason": "To notify TikTok of potentially violating content"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates the Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-removal-policy",
        "reference": "TT-TOS-7",
        "summary": "Reserves the right to remove, block, or delete any User Content that violates content standards or in response to complaints.",
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
            "description": "File a complaint about content through the feedback form",
            "reason": "To report content that violates Terms or harms users"
          }
        ],
        "removalCriteria": [
          "User Content does not comply with content standards",
          "User Content violates the Terms of Service",
          "User Content is subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tt-copyright-expedited-removal-policy",
        "reference": "TT-TOS-7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers.",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
            "description": "Copyright infringement notice through proper channels",
            "reason": "To notify TikTok of copyrighted material being used without permission"
          }
        ],
        "removalCriteria": [
          "Material infringes copyright or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights of others"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process for content removal disputes with potential restoration after ten business days.",
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
            "reason": "To dispute the removal of content and request restoration"
          }
        ],
        "removalCriteria": [
          "Original complaining party does not file court action within the specified timeframe"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or report issues through TikTok's feedback form, with counter-notice process available for copyright disputes",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide details about the content or issue being reported",
        "For copyright disputes, submit a counter-notice to TikTok's Copyright Agent",
        "Wait for TikTok's review and response to the complaint or counter-notice"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced transparency and data protection measures.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
    "policies": [
      {
        "id": "tt-pp-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Scans, analyzes, and reviews User Content, messages and associated metadata for violations of Terms of Service, Community Guidelines, and other policies to promote platform safety and security.",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content constitutes abuse",
          "Content involves fraud",
          "Content involves illegal activity"
        ]
      },
      {
        "id": "tt-pp-legal-disclosure",
        "reference": "For Legal Reasons",
        "summary": "Discloses collected information to respond to legal process, law enforcement requests, legal claims, and government inquiries, and to protect platform and user safety and security.",
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
            "description": "Legal documentation such as subpoenas, court orders, or official law enforcement requests",
            "example": "Court-issued subpoena or official law enforcement request",
            "reason": "Required to comply with legal obligations and protect platform and user safety"
          }
        ],
        "removalCriteria": [
          "Content subject to valid legal process",
          "Content threatens safety and security of platform, affiliates, users, or public",
          "Content involves legal claims requiring disclosure"
        ]
      },
      {
        "id": "tt-pp-user-content-responsibility",
        "reference": "With Your Consent",
        "summary": "States that TikTok is not responsible for how users use or share messages sent to other users, and users should use caution when disclosing personal information on the Platform.",
        "quote": "Please be aware that messages you choose to send to other users of the Platform will be accessible by those users and that we are not responsible for the manner in which those users use or share the messages. If you choose to engage in public activities on the Platform, you should be aware that any information you share may be read, collected, or used by other users. You should use caution in disclosing personal information while using the Platform. We are not responsible for the information you choose to submit.",
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
        "evidenceRequirements": [],
        "removalCriteria": []
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Deletes personal information and terminates accounts of children under 13, and provides mechanisms for parents and guardians to request deletion of underage accounts.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback. As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Report identifying user believed to be under 13",
            "example": "Information about suspected underage user account",
            "reason": "Required to identify and remove accounts of children under 13"
          },
          {
            "description": "Parent or guardian verification for account deletion requests",
            "example": "Verification of parental/guardian status",
            "reason": "Required to verify authority to request deletion of minor's account"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Parent or guardian requests deletion of underage child's account"
        ]
      },
      {
        "id": "tt-pp-content-removal-under-18",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal process for California residents under 18 years of age who want to remove User Content they posted, and account deletion for Connecticut residents under 18.",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content. Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16).",
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
            "description": "Description of the User Content to be removed",
            "example": "Detailed description of the specific content posted",
            "reason": "Required to identify the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to locate the User Content",
            "example": "URL, timestamp, or other identifying information",
            "reason": "Required to locate the specific content on the platform"
          },
          {
            "description": "Verification of California or Connecticut residency and age",
            "example": "Proof of state residency and age verification",
            "reason": "Required to confirm eligibility under state-specific laws"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age requesting removal of their own User Content",
          "User is a Connecticut resident under 18 years of age requesting account deletion",
          "Parent or guardian of Connecticut resident under 16 years of age requesting account deletion"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users may appeal decisions made about their privacy requests by following instructions in communications received from TikTok",
      "steps": [
        "Submit initial request through https://www.tiktok.com/legal/report/privacy or physical address",
        "Receive decision communication from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Provide verification through email address associated with account or other account verification information"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631168766-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and counterfeiting violations with DMCA takedown procedures and appeal processes.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright and may remove content without proper authorization or legally valid reason",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
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
        "summary": "Removes user content that infringes another person's copyright and may temporarily restrict LIVE feature access for copyright violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User content infringes another person's copyright",
          "Copyright infringement through LIVE feature usage"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe copyright violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
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
        "summary": "Prohibits unauthorized use of identical or similar trademarks in connection with goods or services that causes confusion about source, origin, sponsorship or affiliation",
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
            "example": "Trademark ownership details, evidence of infringement",
            "reason": "To investigate trademark infringement claims"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tt-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits purchase, sale, trade, promotion, or solicitation of counterfeit goods and removes such content",
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
        "summary": "Removes content that violates trademark rights and may temporarily restrict LIVE feature access for trademark violations",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Trademark violations through LIVE feature usage"
        ]
      },
      {
        "id": "tt-ip-trademark-repeat-infringer",
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
          "Severe trademark violations occur"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can submit appeals within the TikTok app accessed from in-app notifications for both copyright and trademark removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact information and supporting evidence",
        "Submit appeal through TikTok app",
        "TikTok may contact user for additional questions",
        "Appeal forwarded to original reporter where appropriate",
        "Content may be reinstated at TikTok's sole discretion (for copyright) or based on evaluation (for trademark)"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631168766-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed guidelines on harassment, bullying, hate speech, and violent content with specific enforcement measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
    "policies": [
      {
        "id": "tt-sc-adult-sexual-abuse",
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
            "example": "Use the specific privacy violation reporting link provided by TikTok",
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
        "id": "tt-sc-image-based-sexual-abuse",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images (real or edited) of someone without their consent, including content that appears consensually taken but is distributed without permission.",
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
            "description": "Report intimate privacy violations through dedicated reporting form",
            "example": "Use TikTok's privacy violation reporting system",
            "reason": "Specialized reporting process for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Having intimate images without consent",
          "Sharing intimate images without consent",
          "Creating intimate images (real or edited) without consent",
          "Distributing content taken with consent but shared without permission"
        ]
      },
      {
        "id": "tt-sc-sextortion",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share nude or sexual content without permission, typically to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
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
            "reason": "To establish the threatening nature and extortive intent"
          }
        ],
        "removalCriteria": [
          "Threatening to share nude or sexual content without permission",
          "Demanding money in exchange for not sharing intimate content",
          "Demanding sexual acts in exchange for not sharing intimate content",
          "Demanding additional explicit content in exchange for not sharing existing content"
        ]
      },
      {
        "id": "tt-sc-harassment-bullying",
        "reference": "Harassment and Bullying",
        "summary": "Prohibits harassment or bullying, including sexual harassment, doxing, coordinated abuse, and degrading behavior targeting individuals.",
        "quote": "We don't allow harassment or bullying, including when it's done in retaliation.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of harassing or bullying behavior",
            "example": "Screenshots of abusive comments, coordinated attacks, or doxing attempts",
            "reason": "To demonstrate pattern of harassment or specific bullying incidents"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments or engaging in unwanted sexual behavior",
          "Insulting someone's physical attributes",
          "Degrading or revictimizing people who have experienced tragedy",
          "Wishing serious harm on someone",
          "Doxing or encouraging others to dox",
          "Inciting harassment or promoting coordinated abuse"
        ]
      },
      {
        "id": "tt-sc-sexual-harassment",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of sexual harassment behavior",
            "example": "Screenshots of sexual comments, unwanted sexual advances, or degrading sexual content",
            "reason": "To establish the sexual nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments towards someone",
          "Engaging in unwanted sexual behavior towards someone",
          "Mimicking sexual acts using platform features",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-sc-doxing",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of personal information being published or threatened to be published",
            "example": "Screenshots showing private addresses, phone numbers, or other personal details being shared",
            "reason": "To establish that private information was disclosed with malicious intent"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Threatening to publish personal information about someone",
          "Encouraging others to dox someone"
        ]
      },
      {
        "id": "tt-sc-youth-sexual-abuse",
        "reference": "Youth Sexual and Physical Abuse",
        "summary": "Prohibits sharing, showing, promoting, or engaging in abuse or exploitation of youth, including CSAM, grooming, sextortion, and sexual solicitation.",
        "quote": "We don't allow sharing, showing, promoting, or engaging in abuse or exploitation of youth. This includes: Child Sexual Abuse Material (CSAM), Grooming, Sextortion, Sexual Solicitation, Pedophilia, Physical or Psychological Harm to young people",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
          "other",
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM immediately through in-app reporting",
            "example": "Use TikTok's reporting system without downloading or sharing the content",
            "reason": "Platform reports to NCMEC and law enforcement for youth safety"
          }
        ],
        "removalCriteria": [
          "Child Sexual Abuse Material (CSAM) including screenshots or clips",
          "Romantic relationships between adults and young people",
          "Grooming behavior",
          "Sextortion targeting youth",
          "Sexual solicitation of young people",
          "Sexualizing or fetishizing young people",
          "Content that could identify a young person who has experienced abuse"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions appeals processes in their enforcement section but specific details are not provided in this document section",
      "steps": [
        "Report content through TikTok's in-app reporting system",
        "For intimate privacy violations, use dedicated privacy reporting form",
        "Contact emergency services if someone is in immediate danger",
        "Reach out to helplines or local support services for abuse situations"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631168766-2",
    "reference": "TT-SENSITIVE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Specific policies on adult content, nudity, sexually explicit material, and non-consensual intimate imagery.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
    "policies": [
      {
        "id": "tt-sensitive-nudity-sexual",
        "reference": "Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits nudity, sexual activity, sexual services, and sexually suggestive acts or significant body exposure involving youth.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing prohibited nudity, sexual activity, or sexual services",
            "example": "URLs to content showing nudity, sexual acts, or offers of sexual services",
            "reason": "To verify violation of body exposure and sexualized behavior policies"
          }
        ],
        "removalCriteria": [
          "Content showing nudity or sexual activity",
          "Content facilitating access to sexual services",
          "Content showing sexually suggestive acts involving youth",
          "Content showing significant body exposure involving youth"
        ]
      },
      {
        "id": "tt-sensitive-adult-nudity",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits showing penetrative sex, non-penetrative sex, oral sex, physical sexual arousal, fetish behavior, and nudity of adults or young people, including digital or illustrated images.",
        "quote": "Showing: Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images, like manga; Physical sexual arousal or stimulation; Fetish or kink behavior, such as BDSM or sexual behavior involving a focus on specific body parts; Nudity of adults or young people—including digital or illustrated images, like manga",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing explicit sexual acts or nudity",
            "example": "URLs to content showing sexual acts, arousal, fetish behavior, or nudity",
            "reason": "To verify violation of explicit sexual content policies"
          }
        ],
        "removalCriteria": [
          "Content showing penetrative or non-penetrative sex",
          "Content showing oral sex including illustrated versions",
          "Content showing physical sexual arousal or stimulation",
          "Content showing fetish or kink behavior",
          "Content showing nudity of any person including digital illustrations"
        ]
      },
      {
        "id": "tt-sensitive-youth-sexual",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits young people engaging in intimate kissing, sexually suggestive acts, sexualized framing, and sexually explicit language involving or directed at young people.",
        "quote": "Showing young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing; Sexually explicit language involving or directed at young people",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing youth in sexual or suggestive situations",
            "example": "URLs to content showing minors in intimate kissing, suggestive acts, or with sexual language",
            "reason": "To verify violation of youth protection policies"
          }
        ],
        "removalCriteria": [
          "Content showing young people engaging in intimate kissing",
          "Content showing young people in sexually suggestive acts",
          "Content showing young people in sexualized framing",
          "Content with sexually explicit language involving young people",
          "Content with sexually explicit language directed at young people"
        ]
      },
      {
        "id": "tt-sensitive-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits facilitating access to sexual services, including offering or asking for sexual acts, sexual chats or imagery, or pornography.",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content offering or requesting sexual services",
            "example": "URLs to content offering sexual acts, sexual chats, imagery, or pornography",
            "reason": "To verify violation of sexual services prohibition"
          }
        ],
        "removalCriteria": [
          "Content offering sexual acts for compensation",
          "Content asking for sexual acts",
          "Content offering sexual chats or imagery",
          "Content offering or linking to pornography"
        ]
      },
      {
        "id": "tt-sensitive-graphic-violence",
        "reference": "Shocking and Graphic Content - NOT ALLOWED",
        "summary": "Prohibits graphic incidents and violence, dead bodies, and graphic injury including dismembered, mutilated, charred, or burned bodies.",
        "quote": "Depictions of real-world: Graphic incidents and violence, such as torture, the moment of someone's death, or the shooting of an individual; Dead bodies; Graphic injury, such as dismembered, mutilated, charred, or burned bodies",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing graphic violence or injury",
            "example": "URLs to content showing torture, death, shooting, dead bodies, or graphic injuries",
            "reason": "To verify violation of graphic content policies"
          }
        ],
        "removalCriteria": [
          "Content showing graphic incidents and violence including torture",
          "Content showing the moment of someone's death",
          "Content showing shooting of individuals",
          "Content showing dead bodies",
          "Content showing dismembered, mutilated, charred, or burned bodies"
        ]
      },
      {
        "id": "tt-sensitive-animal-abuse",
        "reference": "Animal Abuse - NOT ALLOWED",
        "summary": "Prohibits showing or promoting inhumane slaughter, mutilation, abuse, mistreatment, neglect of animals, poaching, and bestiality.",
        "quote": "Showing or promoting inhumane slaughter, mutilation, or abuse of animals, including staged animal fights; Showing or promoting mistreatment or neglect of animals, such as malnourishment; Showing dismembered, mutilated, charred, burned, or severely injured animals; Poaching; Bestiality",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content showing animal abuse, cruelty, or exploitation",
            "example": "URLs to content showing animal fights, abuse, neglect, poaching, or bestiality",
            "reason": "To verify violation of animal welfare policies"
          }
        ],
        "removalCriteria": [
          "Content showing inhumane slaughter, mutilation, or abuse of animals",
          "Content showing staged animal fights",
          "Content showing mistreatment or neglect of animals",
          "Content showing dismembered, mutilated, charred, burned, or severely injured animals",
          "Content showing poaching activities",
          "Content showing bestiality"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758631168766-3",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Guidelines on personal information protection, doxxing prevention, and platform security measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T12:39:28.766Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content with personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, account login information, sensitive payment information, and identity numbers",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
        "contentTypes": [
          "personal",
          "private"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the privacy reporting link provided in the guidelines",
            "reason": "To enable TikTok to assess and remove privacy-violating content"
          }
        ],
        "removalCriteria": [
          "Content contains high risk personal information (home address, login information, payment information, identity numbers)",
          "Content could lead to stalking, identity theft, fraud, or other harm",
          "Applies regardless of whether content was posted by the individual themselves or with their consent"
        ]
      },
      {
        "id": "tt-ps-personal-info-moderate-risk",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Removes moderate risk personal information shared without consent when it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
            "description": "Additional context demonstrating risk of psychological harm",
            "example": "Evidence showing how the shared information could cause emotional distress or reputational damage",
            "reason": "TikTok requires additional context to assess moderate risk personal information for removal"
          },
          {
            "description": "Proof that information was shared without consent",
            "example": "Documentation showing the individual did not authorize sharing of their personal information",
            "reason": "To establish that the sharing was non-consensual"
          }
        ],
        "removalCriteria": [
          "Content contains moderate risk personal information (contact details, date of birth, medical information, image/audio likeness, private communications)",
          "Information was shared without consent",
          "Content puts someone at risk of psychological harm",
          "Additional context is provided to demonstrate harm potential"
        ]
      },
      {
        "id": "tt-ps-private-communications",
        "reference": "Personal Information - Private Communications",
        "summary": "Prohibits sharing private communications on sensitive subjects disclosed by individuals who were not part of the original exchange",
        "quote": "Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that communications were private and on sensitive subjects",
            "example": "Documentation showing the private nature of the communications and their sensitive content",
            "reason": "To establish that private communications were inappropriately disclosed"
          },
          {
            "description": "Proof that the person sharing was not part of the original exchange",
            "example": "Evidence showing the individual disclosing the communications was not a participant in the original conversation",
            "reason": "To confirm unauthorized disclosure by a third party"
          }
        ],
        "removalCriteria": [
          "Content contains private communications on sensitive subjects",
          "Communications were disclosed by someone who was not part of the original exchange",
          "Content falls under moderate risk personal information guidelines"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "Platform Security - Account Access",
        "summary": "Prohibits giving login information to others, letting others break TikTok's rules on user accounts, and unauthorized access to TikTok accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized account access or login sharing",
            "example": "Documentation showing someone else accessed or used the account without permission",
            "reason": "To establish violation of account security policies"
          }
        ],
        "removalCriteria": [
          "User gave login information to someone else",
          "User allowed others to break TikTok's rules using their account",
          "Unauthorized access to user accounts occurred"
        ]
      },
      {
        "id": "tt-ps-unauthorized-access",
        "reference": "Platform Security - Unauthorized Platform Access",
        "summary": "Prohibits using unauthorized ways to access TikTok, creating fake versions of the platform, and attempting to steal personal information or hack accounts through phishing and automated tools",
        "quote": "Using unauthorized ways to access TikTok or creating fake versions of the platform",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unauthorized access methods or fake platform creation",
            "example": "Documentation of attempts to bypass TikTok's security or create fraudulent versions of the platform",
            "reason": "To identify and prevent platform security violations"
          }
        ],
        "removalCriteria": [
          "Use of unauthorized methods to access TikTok",
          "Creation of fake versions of the TikTok platform",
          "Attempts to circumvent platform security measures"
        ]
      },
      {
        "id": "tt-ps-malware-phishing",
        "reference": "Platform Security - Malicious Activities",
        "summary": "Prohibits sharing files or messages containing malware, attempting to steal personal information through phishing or smishing, and using automated tools to access data",
        "quote": "Sharing files or messages that carry malware or other harmful software, such as viruses or worms",
        "contentTypes": [
          "private"
        ],
        "contentContexts": [
          "hacked"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of malware distribution or phishing attempts",
            "example": "Documentation of malicious files, phishing messages, or automated data collection attempts",
            "reason": "To identify and prevent malicious activities that compromise user security"
          }
        ],
        "removalCriteria": [
          "Content contains malware, viruses, worms, or other harmful software",
          "Attempts to steal personal information through phishing, smishing, or automated tools",
          "Use of deceptive methods to access user data or accounts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's dedicated privacy reporting system",
      "steps": [
        "Access the privacy violation reporting link",
        "Submit report with relevant details about the privacy violation",
        "Provide additional context as required for moderate risk personal information cases"
      ]
    }
  }
],
};
