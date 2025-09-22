import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, and content removal policies. Updated August 2025 with enhanced policies on AI content, LIVE creators, and content levels.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
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
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
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
        "id": "tt-prohibited-content-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits posting private information of third parties, defamatory content, and material designed to harass, harm, or embarrass people.",
        "quote": "any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers; any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "reason": "To notify TikTok of prohibited content violations"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content that violates policies"
          },
          {
            "description": "Description of how the content violates the policy",
            "reason": "To help TikTok understand the nature of the violation"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without consent",
          "Content is defamatory, obscene, offensive, or pornographic",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Content constitutes trolling and bullying"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-TOS-5",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including giving the impression that uploaded content emanates from the Services.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
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
            "description": "Report through TikTok's feedback form",
            "reason": "To notify TikTok of impersonation violations"
          },
          {
            "description": "URL(s) of the impersonating account or content",
            "reason": "To identify the specific account or content engaging in impersonation"
          },
          {
            "description": "Evidence of your identity being impersonated",
            "reason": "To establish that impersonation is occurring"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Account falsely represents affiliation with another person or entity",
          "Content gives false impression of emanating from official TikTok Services"
        ]
      },
      {
        "id": "tt-account-security-policy",
        "reference": "TT-TOS-4",
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
            "description": "Report suspected unauthorized access through TikTok's feedback form",
            "reason": "To notify TikTok of potential account compromise"
          },
          {
            "description": "Details of suspicious account activity",
            "reason": "To help TikTok investigate the potential compromise"
          },
          {
            "description": "Information about when unauthorized access may have occurred",
            "reason": "To help TikTok determine the scope of the compromise"
          }
        ],
        "removalCriteria": [
          "Evidence of unauthorized third party access to account",
          "Account password has been compromised",
          "Suspicious activity indicating account has been hacked"
        ]
      },
      {
        "id": "tt-content-removal-policy",
        "reference": "TT-TOS-5-7",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion for violations of Terms or Community Guidelines.",
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
            "description": "Report content through TikTok's feedback form",
            "reason": "To notify TikTok of content that violates policies"
          },
          {
            "description": "URL(s) of the violating content",
            "reason": "To identify the specific content for review"
          },
          {
            "description": "Explanation of how content violates Terms or Community Guidelines",
            "reason": "To help TikTok assess the violation"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-user-content-disclosure-policy",
        "reference": "TT-TOS-7",
        "summary": "TikTok reserves the right to disclose user identity to third parties claiming intellectual property or privacy rights violations.",
        "quote": "We also have the right to disclose your identity to any third party who is claiming that any User Content posted or uploaded by you to our Services constitutes a violation of their intellectual property rights, or of their right to privacy.",
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
            "description": "Formal claim of intellectual property rights violation",
            "reason": "To establish legal basis for disclosure request"
          },
          {
            "description": "Formal claim of privacy rights violation",
            "reason": "To establish legal basis for disclosure request"
          },
          {
            "description": "Identification of specific User Content that violates rights",
            "reason": "To identify the content in question"
          }
        ],
        "removalCriteria": [
          "User Content violates third party intellectual property rights",
          "User Content violates third party privacy rights"
        ]
      },
      {
        "id": "tt-counter-notice-policy",
        "reference": "TT-TOS-11",
        "summary": "Provides a counter-notice process for users whose content has been removed, with potential restoration after 10 business days.",
        "quote": "If a counter-notice is received by TikTok's Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it. Unless the original complaining party files an action seeking a court order against the Content Provider, member or user, the removed content may be replaced, or access to it restored, in ten business days or more after receipt of the counter-notice, at TikTok's sole discretion.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": 10,
            "unit": "business days",
            "description": "Content may be restored after this period if no court action is filed"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Formal counter-notice to TikTok's Copyright Agent",
            "reason": "To initiate the counter-notice process"
          },
          {
            "description": "Good faith belief that content was removed due to mistake or misidentification",
            "reason": "Legal requirement for counter-notice"
          }
        ],
        "removalCriteria": [
          "Original complaining party must file court action to prevent content restoration",
          "Counter-notice must be received by TikTok's Copyright Agent"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or submit counter-notices through TikTok's feedback form, with a counter-notice process available for copyright claims.",
      "steps": [
        "Submit complaint or counter-notice through TikTok's feedback form",
        "For counter-notices, TikTok may notify the original complaining party",
        "Content may be restored in 10+ business days unless court action is filed",
        "Be aware that false allegations may have legal consequences"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted by providing adequate description and location information.",
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
            "description": "Description of the User Content you want removed",
            "example": "Detailed description of the video, image, or post",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit us to locate that User Content",
            "example": "URL, username, date posted, or other identifying information",
            "reason": "To locate the content in TikTok's system"
          }
        ],
        "removalCriteria": [
          "User must be a California resident",
          "User must be under 18 years of age",
          "Content must have been posted by the requesting user",
          "Adequate information must be provided to locate the content"
        ]
      },
      {
        "id": "tt-pp-connecticut-minor-removal",
        "reference": "TT-PP-CONNECTICUT-REMOVAL",
        "summary": "Connecticut residents under 18 and parents/guardians of users under 16 can request account unpublishing or deletion through specific instructions.",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
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
            "description": "Proof of Connecticut residency",
            "example": "State identification or other residency verification",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "Age verification or parental relationship proof",
            "example": "Birth certificate, ID showing age, or documentation of parental relationship",
            "reason": "To confirm user is under 18 or parent/guardian relationship for users under 16"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, OR parent/guardian of Connecticut resident under 16",
          "Must follow specific instructions provided by TikTok",
          "For parents/guardians: child must be under 16 years of age"
        ]
      },
      {
        "id": "tt-pp-parent-guardian-rights",
        "reference": "TT-PP-PARENT-RIGHTS",
        "summary": "Parents and guardians can request deletion of underage child's account or download account data, and may exercise certain rights depending on state of residence.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Proof of parental or guardian relationship",
            "example": "Birth certificate, legal guardianship documents, or other official documentation",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof that child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To confirm the child qualifies for parental oversight"
          }
        ],
        "removalCriteria": [
          "Requester must be parent or legal guardian",
          "Child must be underage (specific age may vary by state)",
          "Must provide adequate verification of relationship and child's age"
        ]
      },
      {
        "id": "tt-pp-child-under13-removal",
        "reference": "TT-PP-CHILD-REMOVAL",
        "summary": "TikTok will delete personal information and terminate accounts of children under 13, and users can report suspected underage accounts.",
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
            "description": "Information indicating user is below age 13",
            "example": "Username, profile information, or other evidence suggesting underage use",
            "reason": "To identify accounts that may belong to children under 13"
          }
        ],
        "removalCriteria": [
          "User must be under 13 years of age",
          "TikTok becomes aware through reports or other means",
          "Account termination and data deletion is automatic upon confirmation"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests by following instructions in the communication received from TikTok notifying them of the decision.",
      "steps": [
        "Submit initial request through TikTok's privacy request form",
        "Receive communication from TikTok about the decision",
        "Follow the instructions provided in that communication to appeal the decision"
      ]
    }
  },
  {
    "id": "tiktok-new-1758553717696-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright, trademark, and DMCA takedown procedures for content removal and IP protection.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban repeat infringers or restrict LIVE feature access.",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement.",
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
            "reason": "To facilitate evaluation of the copyright infringement claim"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of rights holder",
            "reason": "Required for DMCA compliance and potential follow-up communication"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason",
          "Content does not fall under fair use, fair dealing, or other copyright exceptions"
        ]
      },
      {
        "id": "tiktok-ip-trademark-infringement",
        "reference": "TT-IP-TRADEMARK",
        "summary": "TikTok removes content that violates trademark rights and prohibits counterfeit goods, with potential account bans for repeat infringers.",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content. We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Trademark Infringement Report form",
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark infringement claims effectively"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of trademark holder",
            "reason": "Required for communication and verification purposes"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark likely to cause confusion about source or affiliation",
          "Content promotes or facilitates trade in counterfeit goods",
          "Use does not fall under permitted acts like lawful commentary, criticism, parody, or review"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal form from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal for TikTok review",
        "TikTok may forward appeal to original reporter (where legally authorized)",
        "Content may be reinstated at TikTok's discretion if no infringement found or no court action filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758553717696-1",
    "reference": "TT-SAFETY-CIVILITY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent behavior with specific enforcement procedures.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-CIVILITY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's intimate privacy violation form",
            "example": "Use the dedicated reporting link provided",
            "reason": "Specialized handling for intimate privacy violations"
          }
        ],
        "removalCriteria": [
          "Content shows intimate images shared without consent",
          "Content involves real or edited intimate images distributed without permission",
          "Content was created for sexual purposes without subject's consent"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "TT-SAFETY-CIVILITY-4-5",
        "summary": "TikTok prohibits sextortion, defined as threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
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
          "Content involves threats to share nude or sexual material",
          "Content demands money, sex, or additional explicit content",
          "Content constitutes coercive behavior using intimate imagery"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits sexual harassment, including the sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities and intimate body parts.",
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
            "example": "Content making remarks about intimate body parts or sexual performance",
            "reason": "To establish the sexual harassment nature of the content"
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
        "id": "tt-safety-doxing",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits doxing, defined as publishing or threatening to publish personal information about someone online with malicious intent.",
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
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Captions and hashtags indicating malicious purpose",
            "reason": "Platform uses objective indicators to determine malicious intent"
          }
        ],
        "removalCriteria": [
          "Content publishes personal information with malicious intent",
          "Content threatens to publish personal information",
          "Objective indicators show malicious intent through captions or hashtags"
        ]
      },
      {
        "id": "tt-safety-harassment-coordinated",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of content encouraging coordinated harassment",
            "example": "Posts encouraging others to abuse or falsely report someone",
            "reason": "To establish the coordinated nature of the harassment campaign"
          }
        ],
        "removalCriteria": [
          "Content encourages others to leave abusive comments",
          "Content promotes falsely reporting an account",
          "Content incites coordinated harassment campaigns"
        ]
      },
      {
        "id": "tt-safety-physical-degradation",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits insulting someone's physical attributes, including weight, facial features, or body parts.",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of content insulting physical attributes",
            "example": "Comments or content targeting weight, facial features, or body parts",
            "reason": "To establish the degrading nature of the content"
          }
        ],
        "removalCriteria": [
          "Content insults someone's weight",
          "Content insults someone's facial features",
          "Content insults someone's body parts"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "TikTok provides a specialized reporting form for intimate privacy violations and general support reporting system",
      "steps": [
        "Report suspected violations immediately in the app or on the website",
        "Use the dedicated intimate privacy violation form for relevant cases",
        "Contact support through the general reporting system for other violations"
      ]
    }
  },
  {
    "id": "tiktok-new-1758553717696-2",
    "reference": "TT-INTEGRITY-AUTH",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Policies covering impersonation, deceptive behavior, misinformation, and account authenticity requirements.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tt-integrity-aigc-private-likeness",
        "reference": "TT-INTEGRITY-AUTH-AIGC",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
        "evidenceRequirements": [
          {
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and establish lack of consent for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses AI or significant editing to show a private figure's likeness without their consent",
          "Private figures include all people under 18 and adults who aren't public figures"
        ]
      },
      {
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AUTH-AIGC",
        "summary": "TikTok prohibits sexualized, fetishized, or victimizing depictions created through AI or significant editing.",
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
        "evidenceRequirements": [
          {
            "description": "Identification of the sexualized, fetishized, or victimizing AI-generated content",
            "example": "URL or screenshot of the violating content",
            "reason": "To locate and assess the content for removal"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions created through AI or significant editing",
          "Content contains fetishized depictions created through AI or significant editing",
          "Content contains victimizing depictions created through AI or significant editing"
        ]
      },
      {
        "id": "tt-integrity-aigc-youth-inappropriate",
        "reference": "TT-INTEGRITY-AUTH-AIGC",
        "summary": "TikTok prohibits accounts focused on AI images of youth in adult clothing or sexualized poses/expressions.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of account pattern showing AI-generated images of minors in inappropriate contexts",
            "example": "Multiple examples of violating content from the same account",
            "reason": "To establish the account's focus on prohibited content involving minors"
          }
        ],
        "removalCriteria": [
          "Account is focused on AI images of youth in clothing suited for adults",
          "Account is focused on AI images of youth in sexualized poses or facial expressions"
        ]
      },
      {
        "id": "tt-integrity-aigc-harassment",
        "reference": "TT-INTEGRITY-AUTH-AIGC",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
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
        "evidenceRequirements": [
          {
            "description": "Evidence showing AI-generated content using someone's likeness for bullying or harassment",
            "example": "Screenshots of the harassing AI content and context showing bullying intent",
            "reason": "To verify the content uses AI-generated likeness for harassment purposes"
          }
        ],
        "removalCriteria": [
          "Content uses AI to create someone's likeness for the purpose of bullying",
          "Content uses AI to create someone's likeness for the purpose of harassment"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-AUTH-DECEPTIVE",
        "summary": "TikTok prohibits impersonation by pretending to be someone else without clearly stating the account is fan or parody.",
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
        "evidenceRequirements": [
          {
            "description": "Proof of identity and evidence of impersonation account",
            "example": "Government-issued ID and link to impersonating account",
            "reason": "To verify your identity and confirm unauthorized impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretends to be someone else without clear fan or parody designation in display name",
          "Account misleads others about the account holder's true identity"
        ]
      },
      {
        "id": "tt-integrity-copyright",
        "reference": "TT-INTEGRITY-AUTH-IP",
        "summary": "TikTok prohibits content that violates someone else's intellectual property rights including copyrights and trademarks.",
        "quote": "We don't allow content that violates someone else's intellectual property (IP) rights",
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
            "description": "Proof of ownership of the intellectual property being infringed",
            "example": "Copyright registration, trademark documentation, or other proof of IP ownership",
            "reason": "To establish legal rights to the intellectual property"
          },
          {
            "description": "Identification of the infringing content",
            "example": "URL or specific location of content that violates your IP rights",
            "reason": "To locate the specific content that infringes your rights"
          }
        ],
        "removalCriteria": [
          "Content violates someone else's copyright",
          "Content violates someone else's trademark",
          "Content violates other intellectual property rights",
          "User posts content they did not create or lack rights to share"
        ]
      },
      {
        "id": "tt-integrity-hacked-materials",
        "reference": "TT-INTEGRITY-AUTH-DECEPTIVE",
        "summary": "TikTok prohibits distribution of hacked materials when this poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that materials were obtained through hacking",
            "example": "Documentation showing unauthorized access or breach",
            "reason": "To verify the materials were obtained through illegal hacking"
          },
          {
            "description": "Demonstration of significant risk of harm",
            "example": "Explanation of how the hacked materials distribution causes harm",
            "reason": "To assess whether distribution meets the harm threshold for removal"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution of the hacked materials poses a significant risk of harm"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok has a notice and appeals process mentioned in their enforcement section, but specific details are not provided in this document.",
      "steps": [
        "Submit copyright report through in-app tools for copyright violations",
        "Submit trademark report through in-app tools for trademark violations",
        "General appeals process referenced but not detailed in this document section"
      ]
    }
  },
  {
    "id": "tiktok-new-1758553717696-3",
    "reference": "TT-SENSITIVE-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Policies on adult content, nudity, sexual content, and age-restricted material including NCII provisions.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tt-sensitive-nudity-sexual",
        "reference": "TT-SENSITIVE-MATURE-1",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving youth, with removal for non-consensual intimate content.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
        "contentTypes": [
          "intimate",
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
            "description": "Report content showing prohibited nudity or sexual activity",
            "example": "Content showing nudity, sexual activity, or sexually suggestive behavior",
            "reason": "To identify violations of body exposure and sexualized behavior policies"
          }
        ],
        "removalCriteria": [
          "Nudity or sexual activity including digital or illustrated images",
          "Physical sexual arousal or stimulation",
          "Fetish or kink behavior such as BDSM",
          "Significant body exposure of young people",
          "Young people engaging in sexually suggestive acts or sexualized framing",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-sensitive-adult-content",
        "reference": "TT-SENSITIVE-MATURE-2",
        "summary": "Adult sexually suggestive content and significant body exposure is age-restricted and removed from For You feed, with some content allowed in educational contexts.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report adult content showing significant body exposure or sexually suggestive behavior",
            "example": "Content showing adults in underwear, intimate kissing, or sexually suggestive acts",
            "reason": "To apply age restrictions and FYF ineligibility"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure such as wearing only nipple covers or minimal underwear",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Moderate adult body exposure in some regions",
          "Adults using sexually explicit language or showing sex products in some regions"
        ]
      },
      {
        "id": "tt-sensitive-context-intent",
        "reference": "TT-SENSITIVE-MATURE-3",
        "summary": "Content removal decisions consider creator intent and context, with exceptions for educational, documentary, artistic, and cultural content.",
        "quote": "We don't remove content just because someone finds it sexually arousing. The creator's intent matters, which we infer by looking at context: bios, hashtags, captions, and sounds.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Context showing creator intent through bios, hashtags, captions, and sounds",
            "example": "Educational hashtags, documentary context, artistic framing",
            "reason": "To determine if content qualifies for exceptions based on intent and context"
          }
        ],
        "removalCriteria": [
          "Content lacks educational, documentary, medical, fictional, or artistic context",
          "Content shows intent to sexually arouse rather than educate or inform",
          "Context does not support cultural, traditional, or health education purposes"
        ]
      },
      {
        "id": "tt-sensitive-graphic-content",
        "reference": "TT-SENSITIVE-MATURE-4",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, with age restrictions for less graphic content.",
        "quote": "we don't allow anything extremely gory, disturbing, or violent, especially when it could cause psychological harm",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report content showing graphic violence, injury, or disturbing imagery",
            "example": "Graphic incidents, dead bodies, dismembered or mutilated bodies",
            "reason": "To identify content that violates graphic content policies"
          }
        ],
        "removalCriteria": [
          "Graphic incidents and violence such as torture or moment of death",
          "Dead bodies",
          "Graphic injury such as dismembered, mutilated, charred, or burned bodies"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758553717696-4",
    "reference": "TT-PRIVACY-SECURITY",
    "title": "Privacy and Security Guidelines",
    "summary": "Policies on personal information sharing, doxxing, identity theft prevention, and platform security.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-22T15:08:37.696Z",
    "policies": [
      {
        "id": "tt-privacy-personal-info-high-risk",
        "reference": "TT-PRIVACY-SECURITY-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including when posted by the person themselves or with their consent.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided reporting link for privacy violations",
            "reason": "To initiate TikTok's review process for personal information removal"
          }
        ],
        "removalCriteria": [
          "Content contains home address",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Information could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-privacy-personal-info-moderate-risk",
        "reference": "TT-PRIVACY-SECURITY-1",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, requiring additional context for removal decisions.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Additional context explaining the psychological harm risk",
            "example": "Explanation of how the shared information causes emotional distress or reputational damage",
            "reason": "TikTok requires context to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Evidence that information was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "To establish that the sharing was non-consensual"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Information puts someone at risk of psychological harm",
          "Information is likely to cause emotional distress for an individual"
        ]
      },
      {
        "id": "tt-privacy-image-likeness",
        "reference": "TT-PRIVACY-SECURITY-1",
        "summary": "TikTok considers image/audio likeness as moderate-risk personal information that may be removed when shared without consent and likely to cause psychological harm.",
        "quote": "Image/audio likeness",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Evidence that image/audio likeness was shared without consent",
            "example": "Documentation showing lack of permission to use the person's likeness",
            "reason": "To establish non-consensual sharing of personal likeness"
          },
          {
            "description": "Additional context showing psychological harm risk",
            "example": "Explanation of emotional distress or reputational damage caused",
            "reason": "Required for moderate-risk personal information removal assessment"
          }
        ],
        "removalCriteria": [
          "Content uses someone's image or audio likeness without consent",
          "Sharing is likely to cause psychological harm or emotional distress"
        ]
      },
      {
        "id": "tt-security-account-compromise",
        "reference": "TT-PRIVACY-SECURITY-2",
        "summary": "TikTok prohibits giving login information to others or allowing them to break TikTok's rules on user accounts, as part of platform security measures.",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
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
            "description": "Evidence of unauthorized account access or rule violations by others",
            "example": "Documentation showing someone else accessed and misused the account",
            "reason": "To establish account compromise and unauthorized activity"
          }
        ],
        "removalCriteria": [
          "Account login information was shared with unauthorized parties",
          "Someone else used the account to break TikTok's rules",
          "Unauthorized access to user accounts occurred"
        ]
      },
      {
        "id": "tt-security-data-theft",
        "reference": "TT-PRIVACY-SECURITY-2",
        "summary": "TikTok prohibits attempts to steal personal information, hack accounts, or access data using deceptive methods like phishing, smishing, or automated tools.",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of phishing, smishing, or automated data collection attempts",
            "example": "Screenshots or documentation of deceptive attempts to steal information",
            "reason": "To identify and prevent unauthorized data access attempts"
          }
        ],
        "removalCriteria": [
          "Content involves attempts to steal personal information",
          "Content facilitates account hacking",
          "Content uses phishing or smishing techniques",
          "Content involves unauthorized automated data collection tools"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's dedicated privacy reporting system",
      "steps": [
        "Access the privacy violation reporting link",
        "Submit report with relevant information about the privacy violation",
        "Provide additional context if reporting moderate-risk personal information"
      ]
    }
  }
],
};
