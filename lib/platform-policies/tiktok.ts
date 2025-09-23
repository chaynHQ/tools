import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including safety and civility, integrity and authenticity, and content policies. Updated August 2025 with new Content Levels system and enhanced policies on AI-generated content.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
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
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
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
        "reference": "TT-TOS-5",
        "summary": "Prohibits intimidation, harassment, and content that promotes sexually explicit material or is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people.",
        "quote": "intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age; use the Services to upload, transmit, distribute, store or otherwise make available in any way: any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people;",
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
            "reason": "To notify TikTok of harassment violations"
          },
          {
            "description": "URL(s) of the harassing content",
            "reason": "To identify the specific content that violates the policy"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Content promotes sexually explicit material",
          "Content constitutes intimidation or harassment"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity, or falsely misrepresenting affiliation with any person or entity.",
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
            "reason": "To notify TikTok of impersonation violations"
          },
          {
            "description": "Evidence showing the account is impersonating you",
            "reason": "To establish that impersonation is occurring"
          }
        ],
        "removalCriteria": [
          "Account is impersonating another person or entity",
          "Account falsely represents affiliation with another person or entity"
        ]
      },
      {
        "id": "tt-unauthorized-access-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits using or attempting to use another's account without authorization from TikTok, or creating false identities on the Services.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
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
            "description": "Report unauthorized account access through the feedback form",
            "reason": "To notify TikTok of unauthorized access violations"
          },
          {
            "description": "Evidence of unauthorized use of your account",
            "reason": "To establish that unauthorized access has occurred"
          }
        ],
        "removalCriteria": [
          "Account is being used without authorization from the legitimate owner",
          "False identity has been created on the Services"
        ]
      },
      {
        "id": "tt-private-information-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits uploading or sharing any private information of any third party, including addresses, phone numbers, email addresses, and personal identity document numbers.",
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
            "reason": "To notify TikTok of privacy violations"
          },
          {
            "description": "URL(s) of content containing your private information",
            "reason": "To identify the specific content that violates privacy"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without consent",
          "Content includes addresses, phone numbers, email addresses, or personal identity document numbers"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-5",
        "summary": "Reserves the right to remove or disable access to content at their discretion for any reason, including content found objectionable, in violation of Terms or Community Guidelines, or otherwise harmful.",
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
            "description": "Report the violating content through the feedback form",
            "reason": "To notify TikTok of content that violates Terms or Community Guidelines"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-4",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if any third party knows the password or has accessed the account.",
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
            "description": "Immediate notification through the feedback form if account is compromised",
            "reason": "To secure the account and prevent further unauthorized access"
          },
          {
            "description": "Details about suspected unauthorized access",
            "reason": "To help TikTok investigate and secure the account"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process for content removal, with potential restoration of removed content within ten business days unless legal action is filed.",
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
            "description": "Content may be restored in ten business days or more after counter-notice receipt"
          }
        },
        "evidenceRequirements": [
          {
            "description": "File a counter-notice with TikTok's Copyright Agent",
            "reason": "To dispute the original removal request"
          }
        ],
        "removalCriteria": [
          "Original complaining party must file court action to prevent content restoration",
          "Counter-notice process allows for content restoration after ten business days"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or request account assistance through TikTok's feedback form. Counter-notices can be filed for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "Provide description of the issue and information to locate the content",
        "For copyright counter-notices, file with TikTok's Copyright Agent",
        "TikTok will review and may restore content within ten business days unless legal action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced data protection measures and clearer user rights information.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
    "policies": [
      {
        "id": "tt-pp-privacy-violations",
        "reference": "Privacy Policy - Information You Provide",
        "summary": "Prohibits sharing of personal information including messages, contact information, and private content without consent",
        "quote": "Please be aware that messages you choose to send to other users of the Platform will be accessible by those users and that we are not responsible for the manner in which those users use or share the messages.",
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
            "description": "Report of privacy violation through official channels",
            "example": "Contact form submission at https://www.tiktok.com/legal/report/privacy",
            "reason": "To initiate investigation of privacy violations and unauthorized sharing"
          }
        ],
        "removalCriteria": [
          "Content that violates user privacy expectations",
          "Unauthorized sharing of private messages or personal information"
        ]
      },
      {
        "id": "tt-pp-content-moderation",
        "reference": "How We Use Your Information",
        "summary": "Requires scanning and review of user content and messages for violations of Terms of Service and Community Guidelines",
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
            "example": "User-generated content, messages, or metadata showing policy violations",
            "reason": "To identify and remove harmful content that threatens platform safety and security"
          }
        ],
        "removalCriteria": [
          "Content that violates Terms of Service",
          "Content that violates Community Guidelines",
          "Content that violates other platform conditions and policies"
        ]
      },
      {
        "id": "tt-pp-identity-verification",
        "reference": "How We Use Your Information",
        "summary": "Requires identity verification for certain features and accounts to prevent impersonation and unauthorized access",
        "quote": "To verify your identity in order to use certain features, such as livestream or verified accounts, or when you apply for a Business Account, to ensure that you are old enough to use the Platform (as required by law), or in other instances where verification may be required.",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of identity or age verification documents",
            "example": "Information to verify account ownership and prevent impersonation",
            "reason": "To ensure authentic identity for verified accounts and prevent fraudulent use"
          }
        ],
        "removalCriteria": [
          "Accounts that cannot provide adequate identity verification",
          "Accounts suspected of impersonation or fraudulent identity claims"
        ]
      },
      {
        "id": "tt-pp-child-protection",
        "reference": "Children and Teens",
        "summary": "Prohibits collection of personal information from children under 13 and requires immediate account termination and data deletion upon discovery",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Report of underage user through feedback system",
            "example": "Contact form at https://www.tiktok.com/legal/report/feedback",
            "reason": "To comply with child protection laws and remove accounts of users under 13"
          }
        ],
        "removalCriteria": [
          "Accounts belonging to users under 13 years of age",
          "Personal information collected from children under 13"
        ]
      },
      {
        "id": "tt-pp-content-removal-minors",
        "reference": "Content Removal for Users Under 18",
        "summary": "Provides content removal rights for California residents under 18 and Connecticut residents under 18, with parental rights for users under 16",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account.",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Request for content removal with adequate information to locate content",
            "example": "Description of User Content and information to permit location of that content",
            "reason": "To provide minors with content removal rights under state privacy laws"
          }
        ],
        "removalCriteria": [
          "User Content posted by California residents under 18 years of age",
          "Accounts of Connecticut residents under 18 years of age upon request",
          "Accounts of Connecticut residents under 16 upon parental request"
        ]
      },
      {
        "id": "tt-pp-data-rights",
        "reference": "Your Rights",
        "summary": "Provides users rights to know, access, correct, delete, and appeal decisions regarding their personal information",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You may appeal any decision we have made about your request by following the instructions in the communication you receive from us notifying you of our decision.",
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
            "description": "Verified request through official privacy portal or email verification",
            "example": "Request sent from email address associated with account or information to verify account ownership",
            "reason": "To verify identity and prevent unauthorized access to personal information"
          }
        ],
        "removalCriteria": [
          "Personal information subject to valid deletion requests",
          "Information that users have the right to correct or remove under applicable law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions regarding their privacy rights requests by following instructions provided in decision communications",
      "steps": [
        "Submit initial request through privacy portal at https://www.tiktok.com/legal/report/privacy",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Alternative: Send written request to physical address at TikTok Inc., Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 100, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631423719-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA procedures including takedown and counter-notification processes.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
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
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Information about the copyrighted work and alleged infringement",
            "reason": "To facilitate evaluation of the copyright infringement report"
          }
        ],
        "removalCriteria": [
          "Content that infringes another person's copyright"
        ]
      },
      {
        "id": "tt-ip-copyright-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes another person's copyright and may ban accounts of repeat infringers or in cases of severe violations",
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
            "description": "Copyright Infringement Report via online form or in-app",
            "example": "Report filed through official TikTok reporting channels",
            "reason": "To request removal of alleged infringing content"
          }
        ],
        "removalCriteria": [
          "User content that infringes another person's copyright",
          "Repeated copyright infringement by the same user",
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
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Information about the trademark and alleged infringement",
            "reason": "To investigate trademark infringement claims"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark causing confusion about source or affiliation"
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
            "description": "Trademark Infringement Report identifying counterfeit goods",
            "example": "Evidence of counterfeit goods being sold or promoted",
            "reason": "To identify and remove counterfeit content"
          }
        ],
        "removalCriteria": [
          "Content promoting purchase, sale, trade, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Trademark - Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may ban accounts of repeat infringers or in cases of severe violations",
        "quote": "Any content that violates another's trademark rights may be taken down. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Trademark Infringement Report via online form or in-app",
            "example": "Report filed through official TikTok reporting channels",
            "reason": "To request removal of alleged trademark infringing content"
          }
        ],
        "removalCriteria": [
          "Content that violates another's trademark rights",
          "Repeated trademark infringement by the same user",
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users receive in-app notifications when content is removed and can submit appeals within the TikTok app. Appeals require contact information and supporting evidence. For copyright appeals, TikTok may forward appeals to original reporters and may reinstate content if no court action is filed.",
      "steps": [
        "Receive in-app notification of content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact information and supporting evidence",
        "Submit appeal within the TikTok app",
        "TikTok may contact you for additional questions about your appeal",
        "For copyright appeals: TikTok forwards appeal to original reporter including contact information",
        "For copyright appeals: Content may be reinstated if no court action is filed by copyright claimant"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631423719-1",
    "reference": "TT-NCII",
    "title": "Non-Consensual Intimate Imagery Partnership",
    "summary": "TikTok's partnership with StopNCII.org to prevent the spread of non-consensual intimate imagery through hash-based detection and removal.",
    "url": "https://newsroom.tiktok.com/en-us/strengthening-enforcement-of-sexually-suggestive-content",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
    "policies": [
      {
        "id": "tt-ncii-nudity-sexual",
        "reference": "TT-NCII",
        "summary": "Prohibits nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps",
        "quote": "We've always had strict policies prohibiting nudity, sexual activity, and sexually explicit content, including content that directs to adult websites or apps.",
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
            "description": "Content that contains nudity, sexual activity, or sexually explicit material",
            "example": "Videos or images showing nudity or sexual acts",
            "reason": "To identify violations of TikTok's strict content policies"
          }
        ],
        "removalCriteria": [
          "Content contains nudity",
          "Content shows sexual activity",
          "Content is sexually explicit",
          "Content directs users to adult websites or apps"
        ]
      },
      {
        "id": "tt-ncii-suggestive-content",
        "reference": "TT-NCII",
        "summary": "Restricts sexually suggestive content from recommendation feeds and prevents access by teen accounts, including implied nudity and sensual content",
        "quote": "TikTok has policies around content categories that are not eligible for recommendation, including implied nudity, sensual content, and other content that is not suitable for all audiences over age 13.",
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
            "description": "Content showing implied nudity or sensual material",
            "example": "Videos with suggestive poses or implied sexual content",
            "reason": "To prevent inappropriate content from reaching younger audiences and being recommended"
          }
        ],
        "removalCriteria": [
          "Content contains implied nudity",
          "Content is sensual in nature",
          "Content is not suitable for audiences over age 13",
          "Content is sexually suggestive"
        ]
      },
      {
        "id": "tt-ncii-stopncii-partnership",
        "reference": "TT-NCII",
        "summary": "Prevents non-consensual intimate imagery from being posted through partnership with StopNCII.org and automatically blocks identified content",
        "quote": "We recently partnered with StopNCII.org, joining forces with Meta and Bumble, to bolster efforts to stop the spread of non-consensual intimate imagery. Not only will this collaboration provide better support for victims, it will also help automatically prevent content identified through our partnership with StopNCII from being posted on our platform.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Content identified through StopNCII.org partnership as non-consensual intimate imagery",
            "example": "Intimate images or videos shared without consent",
            "reason": "To automatically prevent known non-consensual intimate content from being uploaded and provide victim support"
          }
        ],
        "removalCriteria": [
          "Content is identified as non-consensual intimate imagery",
          "Content matches hash database from StopNCII partnership",
          "Content was shared without consent of the person depicted"
        ]
      },
      {
        "id": "tt-ncii-teen-protection",
        "reference": "TT-NCII",
        "summary": "Prevents teen accounts (ages 13-17) from viewing sexually suggestive content through Content Levels system and blocks over 1 million videos monthly",
        "quote": "As we've identified content as sexually suggestive or explicit, we've prevented teen accounts from viewing over 1 million overtly sexually suggestive videos in the last 30 days alone.",
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
            "description": "Content identified as sexually suggestive or explicit that could reach teen accounts",
            "example": "Videos with adult innuendo or sexually suggestive themes",
            "reason": "To protect minors from viewing inappropriate content through age-appropriate content filtering"
          }
        ],
        "removalCriteria": [
          "Content is sexually suggestive or explicit",
          "Content contains adult innuendo",
          "Content has mature or complex themes inappropriate for ages 13-17"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758631423719-2",
    "reference": "TT-HARASSMENT",
    "title": "Bullying Prevention and Harassment Policy",
    "summary": "Detailed policy on harassment, bullying, and safety measures including reporting mechanisms and enforcement procedures.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
    "policies": [
      {
        "id": "tt-harassment-bullying",
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform",
        "quote": "We do not tolerate language or behavior that harasses, humiliates, threatens or doxxes (publishing personal information about someone online with a malicious intent) anyone on the platform.",
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
        "id": "tt-harassment-public-figures",
        "reference": "Public Figures Policy",
        "summary": "Prohibits targeting public figures with severe attacks that may promote physical harm or harassment against them",
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
            "reason": "Platform removes content where risk of physical or severe psychological harm outweighs expression benefits"
          }
        ],
        "removalCriteria": [
          "Severe attacks targeting public figures that may promote physical harm",
          "Content promoting harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefits"
        ]
      },
      {
        "id": "tt-harassment-community-guidelines",
        "reference": "Community Guidelines Violation",
        "summary": "Requires removal of content that violates TikTok's Community Guidelines through moderation team review",
        "quote": "If you are experiencing bullying on TikTok, please report it so our moderation team can review and take appropriate action if it violates TikTok's Community Guidelines.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other",
          "unknown"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Submit report through TikTok's reporting system",
            "example": "Use in-app reporting feature to flag violating content",
            "reason": "Enables moderation team to review content against Community Guidelines and take appropriate action"
          }
        ],
        "removalCriteria": [
          "Content that violates TikTok's Community Guidelines",
          "Bullying content identified through user reports"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content violations through TikTok's in-app reporting system for moderation team review",
      "steps": [
        "Access the reporting feature in the TikTok app",
        "Submit report identifying the violating content",
        "Moderation team reviews the report against Community Guidelines",
        "Appropriate action is taken if violations are confirmed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758631423719-3",
    "reference": "TT-IMPERSONATION",
    "title": "Impersonation Reporting Policy",
    "summary": "Policy and procedures for reporting accounts that impersonate individuals or entities, including verification requirements and appeal processes.",
    "url": "https://support.tiktok.com/en/safety-hc/report-a-problem/report-an-impersonation-account",
    "accessTimestamp": "2025-09-23T12:43:43.719Z",
    "policies": [
      {
        "id": "tt-impersonation-general",
        "reference": "Impersonation Reporting Policy",
        "summary": "Prohibits fake accounts that impersonate other individuals or entities",
        "quote": "If you believe an account is fake and impersonating you or someone else, you can report it to us using the following forms",
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
            "reason": "To verify the identity of the person reporting the impersonation"
          },
          {
            "description": "Information about who is being impersonated",
            "example": "Selection from dropdown list indicating self or celebrity impersonation",
            "reason": "To categorize the type of impersonation being reported"
          },
          {
            "description": "Electronic signature and confirmation statements",
            "example": "Name entered as electronic signature with checkbox confirmations",
            "reason": "To legally validate the report submission"
          }
        ],
        "removalCriteria": [
          "Account is fake and impersonating another person",
          "Account is pretending to be someone else (individual or celebrity)",
          "Account meets the platform's definition of impersonation"
        ]
      },
      {
        "id": "tt-impersonation-self",
        "reference": "Report Account - Pretending to Be Someone",
        "summary": "Prohibits accounts that impersonate the reporting user specifically",
        "quote": "Select Me if the account is impersonating you",
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
            "description": "Selection confirming self-impersonation",
            "example": "Choosing 'Me' option when reporting the account",
            "reason": "To identify that the reporter is the victim of impersonation"
          }
        ],
        "removalCriteria": [
          "Account is impersonating the person making the report",
          "Account is pretending to be the reporter"
        ]
      },
      {
        "id": "tt-impersonation-celebrity",
        "reference": "Report Account - Celebrity Impersonation",
        "summary": "Prohibits accounts that impersonate celebrities or public figures",
        "quote": "Celebrity if it's impersonating someone else. For celebrity impersonation, search the username of the person being impersonated and select the account",
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
            "description": "Identification of the celebrity being impersonated",
            "example": "Search and selection of the legitimate account of the person being impersonated",
            "reason": "To verify the identity of the public figure being impersonated"
          }
        ],
        "removalCriteria": [
          "Account is impersonating a celebrity or public figure",
          "Account is pretending to be someone other than the reporter"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/submit-requests",
      "summary": "Users can appeal impersonation account decisions through online forms with different processes for U.S. and international users",
      "steps": [
        "Select 'Appeal an Impersonation Account on TikTok' from the dropdown list",
        "Enter email address and country information",
        "Provide details about who is being impersonated",
        "Upload valid identification documentation",
        "Confirm statements with checkboxes",
        "Enter name as electronic signature",
        "Submit the appeal form"
      ]
    }
  }
],
};
