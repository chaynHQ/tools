import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, impersonation, and content removal policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tt-body-exposure-policy",
        "reference": "TT-CG-BODY-EXPOSURE",
        "summary": "Prohibits nudity, sexual activity, sexual services, and sexually suggestive behavior or significant exposure involving young people.",
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
          "Content depicts nudity or sexual activity",
          "Content shows sexual services",
          "Content contains sexually suggestive behavior involving young people",
          "Content shows significant body exposure involving young people"
        ]
      },
      {
        "id": "tt-harassment-bullying-policy",
        "reference": "TT-CG-HARASSMENT-BULLYING",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
          }
        ],
        "removalCriteria": [
          "Content constitutes harassment or bullying of others",
          "Content contains degrading remarks about appearance",
          "Content involves doxing (sharing personal information)",
          "Content constitutes sexual harassment",
          "Content is part of coordinated abuse against an individual"
        ]
      },
      {
        "id": "tt-personal-information-policy",
        "reference": "TT-CG-PERSONAL-INFO",
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
          "Content reveals personal information that could lead to stalking",
          "Content reveals personal information that could lead to fraud",
          "Information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-aigc-policy",
        "reference": "TT-CG-AIGC",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes, and prohibits AIGC that misleads about matters of public importance or harms individuals.",
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
            "description": "Link to the AI-generated content",
            "reason": "To identify the AI-generated material"
          },
          {
            "description": "Description of how the content is AI-generated or violates policy",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content realistically depicts people without clear labeling",
          "AI-generated content misleads about matters of public importance",
          "AI-generated content harms individuals",
          "Edited media realistically depicts scenes without clear labeling"
        ]
      },
      {
        "id": "tt-deceptive-behavior-policy",
        "reference": "TT-CG-DECEPTIVE-BEHAVIOR",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform, and the trade of services that artificially boost engagement or trick the recommendation system.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
        "contentTypes": [
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
            "description": "Link to the deceptive account or content",
            "reason": "To identify the misleading material"
          },
          {
            "description": "Evidence of your authentic identity",
            "example": "Photo of government-issued ID",
            "reason": "To verify you are the person or entity being impersonated"
          },
          {
            "description": "Description of how the account is misleading or deceptive",
            "reason": "To understand the nature and extent of the deception"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform",
          "Account trades services that artificially boost engagement",
          "Account uses methods to trick the recommendation system"
        ]
      },
      {
        "id": "tt-platform-security-policy",
        "reference": "TT-CG-PLATFORM-SECURITY",
        "summary": "Prohibits attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "quote": "We don't allow attempts to hack, reverse-engineer, or otherwise compromise TikTok's systems.",
        "contentTypes": [
          "private",
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
            "description": "Link to content showing or promoting hacking attempts",
            "reason": "To identify the security-violating material"
          },
          {
            "description": "Description of the security compromise or attempt",
            "reason": "To understand the nature of the security violation"
          }
        ],
        "removalCriteria": [
          "Content shows attempts to hack TikTok's systems",
          "Content promotes reverse-engineering of TikTok",
          "Content facilitates compromising TikTok's platform security",
          "Content provides tools or instructions for system compromise"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tt-terms-of-service",
    "reference": "TT-TOS",
    "title": "Terms of Service",
    "summary": "Legal terms governing the use of TikTok, including content ownership, intellectual property rights, and user obligations.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tt-tos-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires compliance with TikTok's Copyright Policy for access to services.",
        "quote": "We respect intellectual property rights and ask you to do the same. As a condition of your access to and use of the Services, you agree to the terms of the Copyright Policy.",
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
            "description": "Compliance with TikTok's Copyright Policy terms",
            "reason": "Required condition for service access and copyright infringement claims"
          }
        ],
        "removalCriteria": [
          "Content infringes copyright or intellectual property rights",
          "Material violates TikTok's Copyright Policy"
        ]
      },
      {
        "id": "tt-tos-unauthorized-content",
        "reference": "TT-TOS-PROHIBITED",
        "summary": "Prohibits uploading private information of third parties and material that infringes privacy rights.",
        "quote": "use the Services to upload, transmit, distribute, store or otherwise make available in any way: any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers; any material which does or may infringe any copyright, trademark or other intellectual property or privacy rights of any other person",
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
            "description": "Evidence that private information of third parties was shared without consent",
            "reason": "To establish violation of privacy rights"
          },
          {
            "description": "Evidence that material infringes intellectual property or privacy rights",
            "reason": "To establish rights violation"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties shared without consent",
          "Material infringes copyright, trademark or other intellectual property rights",
          "Content violates privacy rights of another person"
        ]
      },
      {
        "id": "tt-tos-harassment-content",
        "reference": "TT-TOS-PROHIBITED",
        "summary": "Prohibits content designed to harass, harm, hurt, scare, distress, embarrass or upset people, including trolling and bullying.",
        "quote": "any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Evidence that content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset",
            "reason": "To establish intent to cause harm or distress"
          }
        ],
        "removalCriteria": [
          "Content is deliberately designed to provoke or antagonize people",
          "Material constitutes trolling and bullying behavior",
          "Content is intended to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-impersonation",
        "reference": "TT-TOS-PROHIBITED",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting identity or affiliation.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of impersonation or false representation of identity",
            "reason": "To establish that someone is falsely representing themselves as another person or entity"
          },
          {
            "description": "Evidence that content falsely appears to emanate from the victim",
            "reason": "To show misrepresentation of content origin"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "User falsely states or misrepresents their identity or affiliation",
          "Content gives false impression of emanating from another source"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-ACCOUNT",
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
            "description": "Report through TikTok's feedback form at https://www.tiktok.com/legal/report/feedback",
            "reason": "Official channel for reporting account security issues"
          },
          {
            "description": "Evidence of suspected unauthorized access to account",
            "reason": "To establish that account security has been compromised"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised",
          "Unauthorized activity detected on user account"
        ]
      },
      {
        "id": "tt-tos-content-removal",
        "reference": "TT-TOS-REMOVAL",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion, including content that violates Terms or Community Guidelines.",
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
            "description": "Evidence that content violates Terms of Service or Community Guidelines",
            "reason": "To establish grounds for content removal"
          },
          {
            "description": "Evidence that content is harmful to the Services or users",
            "reason": "To show content poses harm to platform or community"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Policy",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-expedited-removal",
        "reference": "TT-TOS-EXPEDITED",
        "summary": "TikTok takes reasonable measures to expeditiously remove infringing material and may disable accounts of repeat infringers.",
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
          "removal": {
            "value": null,
            "unit": null,
            "description": "Expeditious removal of infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright or intellectual property infringement",
            "reason": "To establish that material infringes protected rights"
          }
        ],
        "removalCriteria": [
          "Material infringes copyrights or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights of others"
        ]
      },
      {
        "id": "tt-tos-counter-notice",
        "reference": "TT-TOS-COUNTER",
        "summary": "Provides counter-notice process for users to dispute content removal, with potential restoration after 10 business days.",
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
          "removal": {
            "value": 10,
            "unit": "business days",
            "description": "Minimum time before content may be restored after counter-notice"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid counter-notice to TikTok's Copyright Agent",
            "reason": "To dispute the original takedown request"
          }
        ],
        "removalCriteria": [
          "Original complaining party fails to file court action within specified timeframe",
          "Counter-notice demonstrates content was wrongfully removed"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content or contact TikTok for assistance through their feedback form. Counter-notice process available for copyright disputes.",
      "steps": [
        "Contact TikTok through the feedback form at https://www.tiktok.com/legal/report/feedback",
        "For copyright disputes, file a counter-notice with TikTok's Copyright Agent",
        "TikTok may send copy of counter-notice to original complaining party",
        "Content may be restored in 10+ business days unless court action is filed"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including personal information handling and user rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tiktok-pp-content-removal-under18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted, and Connecticut residents under 18 (or their parents/guardians if under 16) can request account deletion.",
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
            "example": "Detailed description of the specific video, image, or post",
            "reason": "To help TikTok locate the specific content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "URL, username, timestamp, or other identifying information",
            "reason": "To ensure the correct content is identified and removed"
          },
          {
            "description": "Proof of California residency and age under 18",
            "example": "State identification or other age verification",
            "reason": "To verify eligibility under California law"
          }
        ],
        "removalCriteria": [
          "User must be a California resident under 18 years of age",
          "Content must have been posted by the requesting user themselves",
          "Request must provide adequate information to locate the content"
        ]
      },
      {
        "id": "tiktok-pp-privacy-violations",
        "reference": "TT-PP-PRIVACY-RIGHTS",
        "summary": "Users can request deletion of information collected about them, including when they appear in other users' content without consent.",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. We may receive information about you from others, including where you are included or mentioned in User Content, direct messages, in a complaint, appeal, request or feedback submitted to us.",
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
            "description": "Verification of identity",
            "example": "Request sent from email address associated with account or information necessary to verify account",
            "reason": "To verify the identity of the person making the request"
          },
          {
            "description": "Specific information about what data to delete",
            "example": "Description of content where you appear or are mentioned",
            "reason": "To identify the specific information for deletion"
          }
        ],
        "removalCriteria": [
          "Information was collected from or about the requesting user",
          "User can be properly verified as the subject of the information",
          "Request complies with applicable law requirements"
        ]
      },
      {
        "id": "tiktok-pp-content-moderation",
        "reference": "TT-PP-CONTENT-SCANNING",
        "summary": "TikTok scans and analyzes User Content and messages for violations of Terms of Service and Community Guidelines, which can result in content removal.",
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
            "description": "Report of Terms of Service or Community Guidelines violation",
            "example": "Specific description of how content violates platform policies",
            "reason": "To enable review and enforcement of platform policies"
          }
        ],
        "removalCriteria": [
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content violates other platform conditions and policies"
        ]
      },
      {
        "id": "tiktok-pp-biometric-data",
        "reference": "TT-PP-BIOMETRIC-COLLECTION",
        "summary": "TikTok collects biometric identifiers and information from User Content, with required permissions where mandated by law.",
        "quote": "We may collect biometric identifiers and biometric information as defined under U.S. laws, such as faceprints and voiceprints, from your User Content. Where required by law, we will seek any required permissions from you prior to any such collection.",
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
            "description": "Evidence of biometric data collection without consent",
            "example": "Documentation showing biometric processing occurred without required permissions",
            "reason": "To verify unauthorized biometric data processing"
          },
          {
            "description": "Proof of jurisdiction requiring consent",
            "example": "Evidence of residency in state with biometric privacy laws",
            "reason": "To determine applicable legal requirements"
          }
        ],
        "removalCriteria": [
          "Biometric data was collected without required legal permissions",
          "Collection violates applicable biometric privacy laws",
          "User requests deletion of biometric identifiers under applicable law"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions about their privacy requests through the same contact mechanism used for initial requests.",
      "steps": [
        "Submit initial privacy request through the privacy reporting form",
        "Receive decision notification from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Alternatively, send appeal to physical address: TikTok Inc., Attn: Privacy Policy Inquiry, 5800 Bristol Parkway, Suite 100, Culver City, CA 90230"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540811773-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright and trademark infringement, DMCA takedown procedures, and repeat infringer policies essential for content removal requests.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts of repeat infringers.",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies. Any user content that infringes another person's copyright may be removed.",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement claim"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of rights holder",
            "reason": "Required for DMCA compliance and potential follow-up"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason",
          "Content does not fall under fair use or other copyright exceptions"
        ]
      },
      {
        "id": "tiktok-ip-trademark-infringement",
        "reference": "TT-IP-TRADEMARK",
        "summary": "TikTok removes content that violates trademark rights and prohibits counterfeit goods promotion.",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark infringement claims"
          },
          {
            "description": "Name of the trademark owner",
            "example": "Legal name of trademark rights holder",
            "reason": "Required for proper identification and notification"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Unauthorized use likely to cause confusion about source or affiliation",
          "Content promotes or solicits counterfeit goods",
          "Use does not fall under permitted commentary or criticism exceptions"
        ]
      },
      {
        "id": "tiktok-ip-repeat-infringer-policy",
        "reference": "TT-IP-REPEAT",
        "summary": "TikTok bans accounts of users who repeatedly commit intellectual property infringement and may immediately ban accounts for severe violations.",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
            "description": "Evidence of repeated infringement violations",
            "example": "Multiple valid takedown notices against the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright or trademark infringement",
          "Severe intellectual property violations occur",
          "Account was previously used for improper IP-related activities"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications and submit counter-notifications under DMCA or similar laws. EU users have specific exceptions for quotation, criticism, review, parody, and pastiche.",
      "steps": [
        "Receive in-app notification about content removal",
        "Submit appeal within the TikTok app via the notification",
        "Provide all required information including contact details and supporting evidence",
        "For non-EU users: Appeal may be forwarded to original reporter under DMCA process",
        "For EU users: Can claim exceptions for quotation, criticism, review, caricature, parody or pastiche",
        "TikTok may reinstate content at their sole discretion if no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540811773-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and safety violations with specific enforcement procedures and reporting mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including sharing intimate images without consent, even if originally taken with consent but distributed without permission.",
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
          "Content involves creating intimate images without consent",
          "Content distributed without permission even if originally consensual"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "TT-SAFETY-4-5",
        "summary": "TikTok prohibits sextortion, defined as threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
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
            "example": "Screenshots of threatening messages",
            "reason": "To establish the coercive nature of the behavior"
          }
        ],
        "removalCriteria": [
          "Content involves threats to share intimate images without consent",
          "Content demands money, sexual acts, or additional explicit content",
          "Content constitutes sexual coercion or blackmail"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits sexual harassment including unwanted sexual comments, behavior, and sexualization or sexual degradation of individuals.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted sexual comments or behavior",
            "example": "Screenshots of sexual comments or mimicking sexual acts using platform features",
            "reason": "To demonstrate the harassing nature of the content"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments or engaging in unwanted sexual behavior",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-safety-doxing",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits doxing, which includes publishing or threatening to publish personal information about someone online with malicious intent.",
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
            "description": "Evidence of published or threatened publication of personal information",
            "example": "Screenshots showing personal information being shared with malicious intent indicators",
            "reason": "To establish malicious intent through objective indicators like captions and hashtags"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Threatening to publish personal information with malicious intent",
          "Content includes objective indicators of malicious intent such as harmful captions or hashtags"
        ]
      },
      {
        "id": "tt-safety-harassment-coordinated",
        "reference": "TT-SAFETY-7",
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
            "example": "Posts encouraging others to target someone with abuse or false reports",
            "reason": "To demonstrate the coordinated nature of the harassment campaign"
          }
        ],
        "removalCriteria": [
          "Content encourages others to leave abusive comments on someone's account",
          "Content promotes falsely reporting someone's account",
          "Content organizes or incites coordinated harassment campaigns"
        ]
      },
      {
        "id": "tt-safety-harassment-degrading",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits various forms of harassment including insulting physical attributes, degrading tragedy victims, and wishing serious harm on someone.",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts; Degrading or revictimizing people who have experienced a tragedy, including claiming they deserved it or dismissing their experience; Wishing serious harm on someone, such as expressing a desire for them to die or contract a serious illness",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of insulting, degrading, or harmful content targeting an individual",
            "example": "Screenshots of content insulting physical attributes or wishing harm",
            "reason": "To demonstrate the harassing and harmful nature of the content"
          }
        ],
        "removalCriteria": [
          "Content insults someone's physical attributes like weight or facial features",
          "Content degrades or revictimizes people who experienced tragedy",
          "Content wishes serious harm, death, or illness on someone"
        ]
      },
      {
        "id": "tt-safety-csam",
        "reference": "TT-SAFETY-4",
        "summary": "TikTok strictly prohibits Child Sexual Abuse Material (CSAM), including any sexual content involving minors, AI-generated images, and content that sexualizes young people.",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report suspected CSAM immediately without downloading or sharing",
            "example": "Use in-app reporting or website reporting feature",
            "reason": "CSAM requires immediate reporting to NCMEC and law enforcement"
          }
        ],
        "removalCriteria": [
          "Any sexual content involving a young person",
          "Content that shows or suggests abuse or sexual activity involving minors",
          "Digital or AI-generated sexual images of young people",
          "Content that sexualizes or fetishizes a young person's body",
          "Any screenshot or clip from CSAM, even without nudity or sexual activity"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "TikTok provides reporting mechanisms for policy violations with specialized forms for intimate privacy violations.",
      "steps": [
        "Report content immediately through the app or website",
        "Use specialized intimate privacy violation form for relevant cases",
        "For CSAM, report immediately without downloading or sharing the content"
      ]
    }
  },
  {
    "id": "tiktok-new-1758540811773-2",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific policies addressing personal information sharing, doxxing, and privacy violations including NCII-related content removal procedures.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tt-privacy-sec-personal-info-high-risk",
        "reference": "TT-PRIVACY-SEC-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, login credentials, payment information, and identity numbers.",
        "quote": "we don't allow content with personal information that could lead to stalking, identity theft, fraud, or other harm. This includes content that someone has posted themselves or that they consented to being shared by others. High Risk Personal Information: Information that is characterized by a heightened potential to cause physical, financial, or psychological harm to the individual. It includes: Home Address, Account Login Information, Sensitive Payment Information, Identity Numbers",
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
            "description": "Report through TikTok's privacy violation reporting system",
            "example": "Use the provided privacy violation report link",
            "reason": "To initiate the privacy violation review process"
          }
        ],
        "removalCriteria": [
          "Content contains home addresses",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Information could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-privacy-sec-personal-info-moderate-risk",
        "reference": "TT-PRIVACY-SEC-2",
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications.",
        "quote": "We may also remove moderate risk personal information shared without consent if it puts someone at risk of psychological harm. We generally require additional context to remove these types of personal information. Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Additional context explaining the risk of psychological harm",
            "example": "Explanation of how the shared information could cause emotional distress or reputational damage",
            "reason": "TikTok requires additional context to assess moderate-risk personal information"
          },
          {
            "description": "Evidence that information was shared without consent",
            "example": "Documentation showing lack of permission to share the content",
            "reason": "To establish that the sharing was non-consensual"
          }
        ],
        "removalCriteria": [
          "Information shared without consent",
          "Content puts someone at risk of psychological harm",
          "Content contains contact details or date of birth",
          "Content contains medical information",
          "Content contains image/audio likeness without consent",
          "Content contains private communications on sensitive subjects from non-participants",
          "Information could cause emotional distress, reputational damage, or unwanted contact"
        ]
      },
      {
        "id": "tt-privacy-sec-platform-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits attempts to break into the platform, steal information, abuse systems, or engage in activities like phishing, hacking, or sharing malware.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems. NOT ALLOWED: Giving someone else your login information or letting them break TikTok's rules on your account, Using unauthorized ways to access TikTok or creating fake versions of the platform, Sharing files or messages that carry malware or other harmful software, such as viruses or worms, Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
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
            "description": "Evidence of unauthorized access or security breach",
            "example": "Documentation showing account compromise or unauthorized activity",
            "reason": "To verify platform security violations"
          }
        ],
        "removalCriteria": [
          "Content involves giving login information to others",
          "Content promotes unauthorized access to TikTok",
          "Content contains malware or harmful software",
          "Content involves phishing, smishing, or automated data collection tools",
          "Content attempts to steal personal information or hack accounts",
          "Content involves reverse-engineering TikTok's systems or algorithms"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758540811773-3",
    "reference": "TT-INTEGRITY",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Policies covering impersonation, fake accounts, deceptive behavior, and account authenticity requirements with enforcement procedures.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity",
    "accessTimestamp": "2025-09-22T11:33:31.773Z",
    "policies": [
      {
        "id": "tt-integrity-aigc-private-likeness",
        "reference": "TT-INTEGRITY-AIGC-1",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
        "evidenceRequirements": [
          {
            "description": "Proof that you are the private figure depicted or authorized to act on their behalf",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and standing to request removal"
          },
          {
            "description": "Evidence that consent was not provided for the use of likeness",
            "example": "Statement that permission was never granted",
            "reason": "To establish lack of authorization for likeness use"
          }
        ],
        "removalCriteria": [
          "Content uses AI or significant editing to create realistic-appearing likeness of private figure",
          "No consent was provided by the private figure for use of their likeness",
          "Content shows recognizable image, video, or audio representation including face, body, voice, and gestures"
        ]
      },
      {
        "id": "tt-integrity-aigc-sexualized",
        "reference": "TT-INTEGRITY-AIGC-2",
        "summary": "TikTok does not allow sexualized, fetishized, or victimizing depictions in AI-generated or edited content.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
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
            "description": "Identification of the sexualized, fetishized, or victimizing nature of the content",
            "example": "Description of how the content depicts the person in a sexual or victimizing manner",
            "reason": "To establish violation of policy against sexualized AI content"
          },
          {
            "description": "Evidence of your identity if you are depicted in the content",
            "example": "Government-issued ID or other verification",
            "reason": "To verify standing to request removal of content depicting you"
          }
        ],
        "removalCriteria": [
          "Content contains AI-generated or edited material showing sexualized depictions",
          "Content contains fetishized representations of individuals",
          "Content shows victimizing depictions of people"
        ]
      },
      {
        "id": "tt-integrity-aigc-harassment",
        "reference": "TT-INTEGRITY-AIGC-3",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
        "quote": "AI-created likenesses made to bully or harass",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Evidence that the AI-created content depicts your likeness",
            "example": "Comparison showing similarity between AI content and your actual appearance",
            "reason": "To establish that you are the target of the AI-generated harassment"
          },
          {
            "description": "Documentation of the bullying or harassing nature of the content",
            "example": "Description of how the content is intended to bully, mock, or harass",
            "reason": "To demonstrate violation of anti-harassment policy"
          }
        ],
        "removalCriteria": [
          "Content uses AI to create recognizable likeness of an individual",
          "Content is created with intent to bully or harass the depicted person",
          "Content could reasonably be perceived as harassment or bullying"
        ]
      },
      {
        "id": "tt-integrity-impersonation",
        "reference": "TT-INTEGRITY-DECEPTIVE-1",
        "summary": "TikTok does not allow impersonation by pretending to be someone else without clearly stating the account is fan or parody.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
        "evidenceRequirements": [
          {
            "description": "Proof of your identity as the person being impersonated",
            "example": "Government-issued ID, official verification, or other identity documentation",
            "reason": "To verify you are the legitimate person being impersonated"
          },
          {
            "description": "Evidence that the account is impersonating you without proper disclosure",
            "example": "Screenshots showing account uses your name, photos, or likeness without indicating it's fan/parody content",
            "reason": "To demonstrate deceptive impersonation rather than legitimate fan or parody account"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person without authorization",
          "Account does not clearly indicate in display name that it is fan or parody content",
          "Account could mislead others about the true identity of the account holder"
        ]
      },
      {
        "id": "tt-integrity-fake-person",
        "reference": "TT-INTEGRITY-DECEPTIVE-2",
        "summary": "TikTok prohibits pretending to be a fake person or organization with the goal of misleading people.",
        "quote": "Pretending to be a fake person or organization with the goal of misleading people",
        "contentTypes": [
          "personal",
          "private",
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
            "description": "Evidence that the account uses your identity or likeness to create a fake persona",
            "example": "Screenshots showing use of your photos, name, or personal information",
            "reason": "To demonstrate unauthorized use of your identity for deceptive purposes"
          },
          {
            "description": "Documentation of the misleading intent or impact",
            "example": "Evidence showing how the fake account is deceiving others about identity",
            "reason": "To establish the deceptive nature and potential harm"
          }
        ],
        "removalCriteria": [
          "Account creates false identity using another person's information or likeness",
          "Account is designed to mislead others about the true identity",
          "Account serves deceptive purposes rather than legitimate expression"
        ]
      },
      {
        "id": "tt-integrity-hacked-materials",
        "reference": "TT-INTEGRITY-DECEPTIVE-3",
        "summary": "TikTok does not allow distribution of hacked materials when this poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence that the materials were obtained through hacking or unauthorized access",
            "example": "Documentation showing materials were accessed without permission",
            "reason": "To establish that content was obtained through unauthorized means"
          },
          {
            "description": "Demonstration of significant risk of harm from distribution",
            "example": "Explanation of privacy violations, safety risks, or other potential harms",
            "reason": "To meet the threshold for removal under this policy"
          },
          {
            "description": "Proof of your connection to the hacked materials",
            "example": "Evidence that the materials belong to you or your organization",
            "reason": "To verify standing to request removal"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution poses significant risk of harm to individuals or organizations",
          "Content does not serve clear public interest with journalistic best practices"
        ]
      },
      {
        "id": "tt-integrity-ip-violation",
        "reference": "TT-INTEGRITY-IP-1",
        "summary": "TikTok does not allow content that violates someone else's intellectual property rights including copyrights and trademarks.",
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
            "description": "Proof of ownership of the intellectual property rights",
            "example": "Copyright registration, trademark registration, or other evidence of ownership",
            "reason": "To establish legal standing to request removal"
          },
          {
            "description": "Identification of the specific copyrighted or trademarked material being used",
            "example": "Description of the protected work and how it appears in the infringing content",
            "reason": "To clearly identify what intellectual property is being violated"
          },
          {
            "description": "Evidence that use is unauthorized",
            "example": "Statement that no permission or license was granted for the use",
            "reason": "To demonstrate lack of authorization for the use"
          }
        ],
        "removalCriteria": [
          "Content uses copyrighted material without authorization from rights holder",
          "Content uses trademarked material in way that violates trademark rights",
          "Use does not fall under fair use or other legal exceptions"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "TikTok mentions that content may be removed, restricted, or labeled, and references in-app tools for copyright and trademark reports, but does not provide specific appeal process details in this document.",
      "steps": [
        "Submit copyright report through in-app tools if copyright violated",
        "Submit trademark report through in-app tools if trademark violated",
        "Content may be reviewed and potentially restored if removal was in error"
      ]
    }
  }
],
};
