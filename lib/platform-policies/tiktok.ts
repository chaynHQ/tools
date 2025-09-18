import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, impersonation, and content removal policies. Updated September 13, 2025 with enhanced policies on AI content, LIVE creators, and commercial content disclosure.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
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
          "Content shows body exposure or sexual behavior",
          "Content involves sexual services or sexually suggestive behavior"
        ]
      },
      {
        "id": "tt-ai-policy",
        "reference": "TT-CG-AI",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads or harms individuals.",
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
          "AI-generated content is used to create misleading depictions of people or scenes without proper labeling",
          "AIGC misleads about matters of public importance",
          "AIGC harms individuals"
        ]
      },
      {
        "id": "tt-harassment-policy",
        "reference": "TT-CG-HARASSMENT",
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
          "Content constitutes targeted harassment or bullying",
          "Content contains degrading remarks about appearance",
          "Content involves doxing (sharing personal information)",
          "Content constitutes sexual harassment",
          "Content involves coordinated abuse"
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
          "Content reveals personal information that could lead to stalking",
          "Content reveals personal information that could lead to fraud",
          "Information is shared without the subject's consent"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform through deceptive behavior.",
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
            "description": "Description of how the account is misleading or impersonating",
            "reason": "To understand the nature and extent of the deceptive behavior"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behaviors"
        ]
      },
      {
        "id": "tt-copyright-policy",
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
            "description": "Evidence of ownership or authorization to represent the rights holder",
            "reason": "To verify the legitimacy of the copyright claim"
          },
          {
            "description": "Description of the copyrighted work being infringed",
            "reason": "To understand what intellectual property is being violated"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content reposts copyrighted material without permission",
          "Content reposts trademarked material without permission"
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
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-tos-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement with reference to separate Copyright Policy for detailed procedures.",
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
            "description": "Compliance with Copyright Policy terms",
            "reason": "Required condition for using TikTok services"
          }
        ],
        "removalCriteria": [
          "Content infringes intellectual property rights",
          "Content violates Copyright Policy terms"
        ]
      },
      {
        "id": "tt-tos-prohibited-content",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits uploading private information of third parties, defamatory content, and material designed to harass or embarrass people.",
        "quote": "use the Services to upload, transmit, distribute, store or otherwise make available in any way: any private information of any third party, including addresses, phone numbers, email addresses, number and feature in the personal identity document (e.g., National Insurance numbers, passport numbers) or credit card numbers; any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory; any material that is deliberately designed to provoke or antagonise people, especially trolling and bullying, or is intended to harass, harm, hurt, scare, distress, embarrass or upset people",
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
            "description": "Report through TikTok's feedback system",
            "reason": "To notify TikTok of prohibited content violations"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties",
          "Content is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is designed to harass, harm, hurt, scare, distress, embarrass or upset people",
          "Content constitutes trolling and bullying"
        ]
      },
      {
        "id": "tt-tos-impersonation-policy",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits impersonating any person or entity or falsely representing affiliation, including giving impression content emanates from TikTok services.",
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
            "description": "Evidence of impersonation or false representation",
            "reason": "To demonstrate violation of impersonation policy"
          }
        ],
        "removalCriteria": [
          "Account or content impersonates another person or entity",
          "Content falsely represents user's affiliation with person or entity",
          "Content gives false impression it emanates from TikTok services"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-ACCOUNT",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if account is compromised.",
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
            "description": "Report compromised account through feedback system",
            "reason": "To notify TikTok of potential unauthorized access"
          },
          {
            "description": "Evidence that third party knows password or accessed account",
            "reason": "To establish account compromise"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised",
          "Unauthorized activity occurs on user account"
        ]
      },
      {
        "id": "tt-tos-content-removal",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok reserves right to remove or disable access to content for any reason, including content that violates Terms or Community Guidelines.",
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
            "description": "Content violates Terms of Service or Community Guidelines",
            "reason": "To justify content removal under platform policies"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service",
          "Content violates Community Guidelines",
          "Content is harmful to Services or users"
        ]
      },
      {
        "id": "tt-tos-user-complaints",
        "reference": "TT-TOS-CONTENT",
        "summary": "Provides process for filing complaints about content uploaded by other users through feedback system.",
        "quote": "If you wish to file a complaint about information or materials uploaded by other users, contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Submit complaint through TikTok feedback system",
            "reason": "Official channel for reporting problematic user content"
          },
          {
            "description": "Details about the problematic information or materials",
            "reason": "To identify and evaluate the content in question"
          }
        ],
        "removalCriteria": [
          "Content uploaded by other users violates platform policies",
          "Content is inappropriate or harmful"
        ]
      },
      {
        "id": "tt-tos-identity-disclosure",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok reserves right to disclose user identity to third parties claiming intellectual property or privacy rights violations.",
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
            "description": "Third party claim of intellectual property rights violation",
            "reason": "To establish basis for identity disclosure"
          },
          {
            "description": "Third party claim of privacy rights violation",
            "reason": "To establish basis for identity disclosure"
          }
        ],
        "removalCriteria": [
          "User content violates third party intellectual property rights",
          "User content violates third party privacy rights"
        ]
      },
      {
        "id": "tt-tos-california-minor-removal",
        "reference": "TT-TOS-CA",
        "summary": "California residents under 18 may request removal of their posted content through specific process.",
        "quote": "Users of the Services who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/feedback. All requests must be labeled 'California Removal Request' on the email subject line. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Must be California resident under 18 years of age",
            "reason": "Legal requirement for this specific removal process"
          },
          {
            "description": "Email labeled 'California Removal Request' in subject line",
            "reason": "To properly categorize and process the request"
          },
          {
            "description": "Description of User Content to be removed",
            "reason": "To identify the specific content for removal"
          },
          {
            "description": "Information sufficient to locate the User Content",
            "reason": "To enable TikTok to find and remove the content"
          }
        ],
        "removalCriteria": [
          "Content was posted by California resident under 18 years of age",
          "Proper request format and labeling is followed"
        ]
      },
      {
        "id": "tt-tos-counter-notice-process",
        "reference": "TT-TOS-COUNTER",
        "summary": "Provides counter-notice process for copyright claims with 10 business day restoration period unless legal action is filed.",
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
            "unit": "business days",
            "description": "Content restoration timeframe unless legal action is filed"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Valid counter-notice to TikTok's Copyright Agent",
            "reason": "To initiate the counter-notice process for wrongfully removed content"
          }
        ],
        "removalCriteria": [
          "Original complaining party files court action seeking order against user",
          "Counter-notice is determined to be false or made in bad faith"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users and report policy violations through TikTok's feedback system. Counter-notice process available for copyright claims.",
      "steps": [
        "Contact TikTok through the feedback system at https://www.tiktok.com/legal/report/feedback",
        "Provide description of the problematic content or policy violation",
        "For copyright counter-notices, submit to TikTok's Copyright Agent",
        "For California minors, label requests as 'California Removal Request' in email subject line"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data. Last updated August 19, 2024 with enhanced data protection measures and user rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under18",
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
            "example": "Specific details about the content posted",
            "reason": "To identify the content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "URL, timestamp, or other identifying information",
            "reason": "To locate the specific content on the platform"
          }
        ],
        "removalCriteria": [
          "User must be a California resident under 18 years of age",
          "Content must have been posted by the requesting user themselves"
        ]
      },
      {
        "id": "tt-pp-privacy-request",
        "reference": "TT-PP-YOUR-RIGHTS",
        "summary": "Users can submit requests to know, access, correct or delete information collected about them, including through an authorized agent.",
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
            "description": "Request sent from email address associated with account",
            "example": "Email from registered account email",
            "reason": "To verify account ownership"
          },
          {
            "description": "Information necessary to verify your account",
            "example": "Account details or identifying information",
            "reason": "To confirm identity and prevent unauthorized access"
          }
        ],
        "removalCriteria": [
          "User must verify their identity through account email or other verification methods",
          "Request must be consistent with applicable law"
        ]
      },
      {
        "id": "tt-pp-child-account-deletion",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "Parents or guardians can request deletion of their underage child's account or download account data.",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Proof of parent or guardian status",
            "example": "Documentation showing parental relationship",
            "reason": "To verify authority to make requests on behalf of minor"
          }
        ],
        "removalCriteria": [
          "Requester must be parent or guardian of underage child",
          "Child must be under applicable age threshold",
          "Request processed in accordance with applicable law"
        ]
      },
      {
        "id": "tt-pp-under13-deletion",
        "reference": "TT-PP-CHILDREN-TEENS",
        "summary": "TikTok will delete accounts and personal information if they become aware a user is under 13 years old.",
        "quote": "If we become aware that personal information has been collected on the Platform from a Child, we will delete this information and terminate the Child's account. If you believe there is a user who is below the age of 13, please contact us at: https://www.tiktok.com/legal/report/feedback.",
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
            "description": "Information indicating user is below age 13",
            "example": "Evidence of user's actual age",
            "reason": "To verify age violation and protect children's privacy"
          }
        ],
        "removalCriteria": [
          "User is determined to be under 13 years of age",
          "Platform becomes aware of underage user through any means"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions by following instructions in the communication received from TikTok",
      "steps": [
        "Submit initial request through privacy reporting form",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication"
      ]
    }
  },
  {
    "id": "tiktok-new-1758212905100-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, trademark violations, and repeat infringer policies.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "TT-IP-COPYRIGHT",
        "summary": "TikTok removes content that infringes copyright and may ban accounts for repeated violations.",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies. Any user content that infringes another person's copyright may be removed.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Complete copyright infringement report form with all requested information",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright claim"
          },
          {
            "description": "Contact information for follow-up questions",
            "example": "Email address or phone number",
            "reason": "Platform may need to contact reporter for clarification"
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
            "description": "Complete trademark infringement report form with all requested information",
            "example": "Trademark registration details, evidence of infringement",
            "reason": "To investigate trademark violation claims"
          },
          {
            "description": "Contact information for follow-up questions",
            "example": "Email address for correspondence",
            "reason": "Platform may need additional information about the report"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark likely to cause confusion",
          "Content promotes or facilitates trade of counterfeit goods",
          "Use of trademark in connection with goods/services that may deceive about source or affiliation"
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
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Documentation of repeated infringement violations",
            "example": "Multiple takedown notices for the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright or trademark infringement",
          "Severe intellectual property violations warrant immediate account ban",
          "Account was previously used for improper IP-related activities"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal copyright and trademark removals through in-app notifications, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Platform may contact for additional questions",
        "For copyright appeals outside EU: entire appeal forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's sole discretion based on evaluation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758212905100-1",
    "reference": "TT-SAFETY-CIVILITY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and violent behavior with specific enforcement mechanisms.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-CIVILITY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including sharing intimate images without consent, and removes such content while supporting survivors.",
        "quote": "Image-Based Sexual Abuse: Having, sharing, or creating intimate images (real or edited) of someone without their consent, especially for sexual purposes. This includes content that seems to have been taken with consent, but is distributed without it.",
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
        "evidenceRequirements": [
          {
            "description": "Report through TikTok's intimate privacy violation form",
            "example": "Use the dedicated reporting link for privacy violations",
            "reason": "Specialized handling for sensitive intimate content violations"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent of the person depicted",
          "Content created or edited to appear intimate without consent",
          "Distribution of previously consensual content without current consent"
        ]
      },
      {
        "id": "tt-safety-sextortion",
        "reference": "TT-SAFETY-CIVILITY-5",
        "summary": "TikTok prohibits sextortion, defined as threatening to share nude or sexual content without permission to demand money, sex, or more explicit content.",
        "quote": "Sextortion: The act of threatening to share nude or sexual content without permission—usually to demand money, sex, or more explicit content.",
        "contentTypes": [
          "intimate"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of threats to share intimate content",
            "example": "Screenshots of threatening messages or demands",
            "reason": "To establish the coercive nature of the sextortion attempt"
          }
        ],
        "removalCriteria": [
          "Threats to share nude or sexual content without permission",
          "Demands for money, sex, or additional explicit content",
          "Coercive behavior involving intimate imagery"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits sexual harassment including sexualization or sexual degradation of individuals through language or behaviors relating to sexual activities and intimate body parts.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted sexual comments or behavior",
            "example": "Screenshots of sexual comments about intimate body parts or sexual performance",
            "reason": "To demonstrate the sexual harassment nature of the content"
          }
        ],
        "removalCriteria": [
          "Making unwanted sexual comments towards someone",
          "Engaging in unwanted sexual behavior towards someone",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-safety-doxing",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits doxing, which includes publishing or threatening to publish personal information about someone online with malicious intent.",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
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
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Screenshots showing private information with threatening captions or hashtags",
            "reason": "To establish both the sharing of private information and malicious intent"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone with malicious intent",
          "Threatening to publish personal information about someone",
          "Content with objective indicators of malicious intent such as threatening captions or hashtags"
        ]
      },
      {
        "id": "tt-safety-coordinated-harassment",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
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
        "evidenceRequirements": [
          {
            "description": "Evidence of content encouraging coordinated harassment",
            "example": "Posts encouraging others to target, comment on, or report specific accounts",
            "reason": "To demonstrate the coordinated nature of the harassment campaign"
          }
        ],
        "removalCriteria": [
          "Content encouraging others to leave abusive comments on someone's account",
          "Content encouraging others to falsely report an account",
          "Any form of inciting harassment or promoting coordinated abuse"
        ]
      },
      {
        "id": "tt-safety-physical-degradation",
        "reference": "TT-SAFETY-CIVILITY-7",
        "summary": "TikTok prohibits insulting someone's physical attributes including weight, facial features, or body parts as a form of harassment.",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts",
        "contentTypes": [
          "personal"
        ],
        "contentContexts": [
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of content insulting physical attributes",
            "example": "Posts or comments making derogatory remarks about appearance, weight, or body parts",
            "reason": "To establish the degrading nature of the content targeting physical attributes"
          }
        ],
        "removalCriteria": [
          "Content insulting someone's weight",
          "Content insulting someone's facial features",
          "Content insulting someone's body parts",
          "Any degrading comments about physical attributes"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758212905100-2",
    "reference": "TT-PRIVACY-SECURITY",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific policies on personal information sharing, stalking prevention, identity theft protection, and platform security.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
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
            "example": "Use the provided privacy violation report link",
            "reason": "Required channel for privacy violation reports"
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "Required to assess moderate-risk personal information removal requests"
          },
          {
            "description": "Proof that information was shared without consent",
            "example": "Documentation showing lack of permission to share the information",
            "reason": "Consent is a key factor in moderate-risk personal information policy"
          }
        ],
        "removalCriteria": [
          "Content contains contact details or date of birth shared without consent",
          "Content contains medical information shared without consent",
          "Content contains image/audio likeness shared without consent",
          "Content contains private communications on sensitive subjects disclosed by non-participants",
          "Information is likely to cause psychological harm or emotional distress",
          "Information may cause reputational damage or unwanted contact"
        ]
      },
      {
        "id": "tt-privacy-image-audio-likeness",
        "reference": "TT-PRIVACY-SECURITY-1",
        "summary": "TikTok considers image/audio likeness as moderate-risk personal information that may be removed when shared without consent and likely to cause psychological harm.",
        "quote": "Moderate Risk Personal Information: Information that isn't inherently risky, but may still cause harm—like emotional distress, reputational damage, or unwanted contact—especially when combined with other data. Examples include: Contact details or date of birth, Medical information, Image/audio likeness, Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
        "contentTypes": [
          "personal",
          "intimate",
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
            "description": "Evidence that image/audio likeness was shared without consent",
            "example": "Documentation showing lack of permission to use the person's image or audio",
            "reason": "Consent is required for sharing image/audio likeness"
          },
          {
            "description": "Context showing potential for psychological harm",
            "example": "Information demonstrating emotional distress, reputational damage, or unwanted contact",
            "reason": "Additional context required for moderate-risk personal information removal"
          }
        ],
        "removalCriteria": [
          "Content contains someone's image/audio likeness without consent",
          "Sharing is likely to cause psychological harm or emotional distress",
          "Content may cause reputational damage or unwanted contact"
        ]
      },
      {
        "id": "tt-security-account-hacking",
        "reference": "TT-PRIVACY-SECURITY-2",
        "summary": "TikTok prohibits unauthorized access to accounts and using compromised accounts to break platform rules.",
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
            "description": "Evidence of unauthorized account access",
            "example": "Documentation showing account was compromised or accessed without permission",
            "reason": "Required to demonstrate account security violation"
          }
        ],
        "removalCriteria": [
          "Account was accessed without authorization",
          "Compromised account was used to violate TikTok's rules",
          "Login information was shared with unauthorized parties"
        ]
      },
      {
        "id": "tt-security-phishing-data-theft",
        "reference": "TT-PRIVACY-SECURITY-2",
        "summary": "TikTok prohibits attempts to steal personal information, hack accounts, or access data through deceptive methods like phishing and automated tools.",
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
            "reason": "Required to demonstrate security violation and data theft attempts"
          }
        ],
        "removalCriteria": [
          "Content attempts to steal personal information through deceptive means",
          "Content involves phishing or smishing tactics",
          "Content uses automated tools to access private data",
          "Content attempts to hack accounts or access unauthorized data"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users to report privacy violations",
      "steps": [
        "Access the privacy violation report link",
        "Submit report through TikTok's privacy violation reporting system"
      ]
    }
  },
  {
    "id": "tiktok-new-1758212905100-3",
    "reference": "TT-INTEGRITY-AUTH",
    "title": "Integrity and Authenticity Guidelines",
    "summary": "Policies covering impersonation, deceptive account behavior, misinformation, and platform manipulation.",
    "url": "https://www.tiktok.com/community-guidelines/en/integrity-authenticity/",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-ia-aigc-private-likeness",
        "reference": "TT-INTEGRITY-AUTH-AIGC-1",
        "summary": "TikTok prohibits using the likeness of private figures without consent in AI-generated or significantly edited content.",
        "quote": "Using the likeness of private figures without consent",
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
            "description": "Proof that you are the private figure depicted without consent",
            "example": "Government-issued ID matching the person in the content",
            "reason": "To verify identity and establish lack of consent"
          }
        ],
        "removalCriteria": [
          "Content uses AI or significant editing to show a private figure's likeness",
          "No consent was given by the private figure",
          "Content shows realistic-appearing scenes or people"
        ]
      },
      {
        "id": "tt-ia-aigc-sexualized",
        "reference": "TT-INTEGRITY-AUTH-AIGC-2",
        "summary": "TikTok removes AI-generated or edited content that creates sexualized, fetishized, or victimizing depictions of individuals.",
        "quote": "Sexualized, fetishized, or victimizing depictions",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Identification of the sexualized, fetishized, or victimizing nature of the content",
            "example": "Description of how the AI-generated content sexualizes or victimizes the depicted person",
            "reason": "To establish violation of policy against harmful AI-generated depictions"
          }
        ],
        "removalCriteria": [
          "Content contains sexualized depictions created through AI or significant editing",
          "Content contains fetishized depictions of individuals",
          "Content creates victimizing depictions of people"
        ]
      },
      {
        "id": "tt-ia-aigc-harassment",
        "reference": "TT-INTEGRITY-AUTH-AIGC-3",
        "summary": "TikTok prohibits AI-created likenesses made to bully or harass individuals.",
        "quote": "AI-created likenesses made to bully or harass",
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
            "description": "Evidence that AI-generated content is being used for bullying or harassment",
            "example": "Screenshots showing the harassing context or repeated targeting",
            "reason": "To demonstrate the bullying or harassing intent behind the AI-generated likeness"
          }
        ],
        "removalCriteria": [
          "Content uses AI to create someone's likeness",
          "The AI-generated likeness is used for bullying purposes",
          "The AI-generated likeness is used for harassment"
        ]
      },
      {
        "id": "tt-ia-deceptive-impersonation",
        "reference": "TT-INTEGRITY-AUTH-DECEPTIVE-1",
        "summary": "TikTok removes accounts that impersonate others by pretending to be someone else without clearly stating the account is fan or parody content.",
        "quote": "Impersonation by pretending to be someone else without clearly stating that the account is a fan or parody account in the display name",
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
            "description": "Proof of your identity and evidence of impersonation",
            "example": "Government-issued ID and screenshots of the impersonating account",
            "reason": "To verify you are the person being impersonated and establish the impersonation"
          }
        ],
        "removalCriteria": [
          "Account pretends to be another person",
          "Account does not clearly state it is a fan or parody account in the display name",
          "Account is misleading others about the account holder's identity"
        ]
      },
      {
        "id": "tt-ia-copyright-violation",
        "reference": "TT-INTEGRITY-AUTH-IP-1",
        "summary": "TikTok removes content that violates someone else's intellectual property rights including copyrights and trademarks.",
        "quote": "Content that violates someone else's copyrights, trademarks, or other IP rights",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Proof of ownership of the intellectual property being infringed",
            "example": "Copyright registration, trademark registration, or other documentation of IP ownership",
            "reason": "To establish legal rights to the intellectual property"
          },
          {
            "description": "Identification of the specific infringing content",
            "example": "URLs or screenshots of the content that violates your IP rights",
            "reason": "To locate and assess the allegedly infringing material"
          }
        ],
        "removalCriteria": [
          "Content violates copyright protections",
          "Content violates trademark rights",
          "Content violates other intellectual property rights"
        ]
      },
      {
        "id": "tt-ia-hacked-materials",
        "reference": "TT-INTEGRITY-AUTH-DECEPTIVE-2",
        "summary": "TikTok prohibits distribution of hacked materials when this poses a significant risk of harm.",
        "quote": "Hacked materials distribution, when this poses a significant risk of harm",
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
            "description": "Evidence that materials were obtained through hacking",
            "example": "Documentation showing unauthorized access or breach of security",
            "reason": "To establish that content was obtained through hacking"
          },
          {
            "description": "Demonstration of significant risk of harm",
            "example": "Explanation of potential harm from distribution of the hacked materials",
            "reason": "To meet the policy requirement of significant harm risk"
          }
        ],
        "removalCriteria": [
          "Materials were obtained through hacking or unauthorized access",
          "Distribution poses a significant risk of harm",
          "Content does not qualify for public interest exception with journalistic best practices"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758212905100-4",
    "reference": "TT-SENSITIVE-MATURE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Detailed policies on adult nudity, sexual content, sexually suggestive content, and age-restricted material.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-sensitive-nudity-sexual",
        "reference": "TT-SENSITIVE-MATURE-BODY-EXPOSURE",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving youth, with limited exceptions for educational or artistic content.",
        "quote": "we don't allow certain types of body exposure or sexualized behavior, including: Nudity or sexual activity, Sexual Services, Sexually suggestive acts or significant body exposure involving youth",
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
            "description": "Report content that violates body exposure and sexualized behavior policies",
            "example": "Content showing nudity, sexual activity, or sexually suggestive acts involving minors",
            "reason": "To identify violations of community guidelines on sensitive content"
          }
        ],
        "removalCriteria": [
          "Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images",
          "Physical sexual arousal or stimulation",
          "Fetish or kink behavior, such as BDSM or sexual behavior involving a focus on specific body parts",
          "Nudity of adults or young people—including digital or illustrated images",
          "Significant body exposure of young people, such as wearing only underwear or lingerie",
          "Young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-sensitive-age-restricted",
        "reference": "TT-SENSITIVE-MATURE-AGE-RESTRICTED",
        "summary": "TikTok age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior involving adults.",
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
            "description": "Report content showing significant adult body exposure or sexually suggestive behavior",
            "example": "Content showing adults wearing only nipple covers or underwear that doesn't cover most of the buttocks",
            "reason": "To apply age restrictions and remove from For You feed"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks",
          "Moderate adult body exposure in some regions—such as the side breast or partial exposure of the buttocks",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Adults using sexually explicit language or showing or promoting sex products in some regions"
        ]
      },
      {
        "id": "tt-sensitive-graphic-content",
        "reference": "TT-SENSITIVE-MATURE-GRAPHIC",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, with some exceptions for public interest content that may be age-restricted.",
        "quote": "we don't allow anything extremely gory, disturbing, or violent, especially when it could cause psychological harm",
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
            "description": "Report extremely graphic, gory, or violent content",
            "example": "Content showing graphic incidents, dead bodies, or graphic injury",
            "reason": "To prevent psychological harm and maintain platform safety"
          }
        ],
        "removalCriteria": [
          "Graphic incidents and violence, such as torture, the moment of someone's death, or the shooting of an individual",
          "Dead bodies",
          "Graphic injury, such as dismembered, mutilated, charred, or burned bodies"
        ]
      },
      {
        "id": "tt-sensitive-animal-abuse",
        "reference": "TT-SENSITIVE-MATURE-ANIMAL",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, and exploitation in all forms.",
        "quote": "We don't allow animal abuse, cruelty, neglect, or any other form of animal exploitation",
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
            "description": "Report content showing animal abuse, cruelty, or exploitation",
            "example": "Content showing inhumane slaughter, mutilation, abuse, or mistreatment of animals",
            "reason": "To protect animal welfare and prevent promotion of animal cruelty"
          }
        ],
        "removalCriteria": [
          "Showing or promoting inhumane slaughter, mutilation, or abuse of animals, including staged animal fights",
          "Showing or promoting mistreatment or neglect of animals, such as malnourishment",
          "Showing dismembered, mutilated, charred, burned, or severely injured animals",
          "Poaching",
          "Bestiality"
        ]
      }
    ],
    "appealProcess": null
  },
  {
    "id": "tiktok-new-1758220144447-0",
    "reference": "TT-BULLYING-PREVENTION",
    "title": "Bullying Prevention Resource Page",
    "summary": "Dedicated resource page providing information about bullying prevention, reporting mechanisms, and support resources for users experiencing harassment.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-18T18:29:04.448Z",
    "policies": [
      {
        "id": "tt-bullying-harassment",
        "reference": "TT-BULLYING-PREVENTION-HARASSMENT",
        "summary": "TikTok prohibits language or behavior that harasses, humiliates, threatens or doxxes anyone on the platform, including bullying and harassment content.",
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
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Report the bullying content through TikTok's reporting system",
            "example": "Use in-app reporting feature or support.tiktok.com/en/safety-hc/report-a-problem",
            "reason": "Required for moderation team review and action"
          }
        ],
        "removalCriteria": [
          "Content that harasses other users",
          "Content that humiliates other users",
          "Content that threatens other users",
          "Content that doxxes users (publishing personal information with malicious intent)",
          "Content that violates TikTok's Community Guidelines"
        ]
      },
      {
        "id": "tt-bullying-doxxing",
        "reference": "TT-BULLYING-PREVENTION-DOXXING",
        "summary": "TikTok specifically prohibits doxxing, defined as publishing personal information about someone online with malicious intent.",
        "quote": "doxxes (publishing personal information about someone online with a malicious intent)",
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
            "description": "Report the doxxing content showing personal information published with malicious intent",
            "example": "Content containing private addresses, phone numbers, or other personal details shared to harm",
            "reason": "To identify malicious sharing of personal information"
          }
        ],
        "removalCriteria": [
          "Content publishing personal information about someone with malicious intent",
          "Content that could cause physical, social or psychological harm through information disclosure"
        ]
      },
      {
        "id": "tt-bullying-public-figures",
        "reference": "TT-BULLYING-PREVENTION-PUBLIC-FIGURES",
        "summary": "TikTok does not allow public figures to be targeted with severe attacks that may promote physical harm or harassment against them.",
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
            "description": "Report content showing severe attacks against public figures that promote physical harm or harassment",
            "example": "Content targeting public figures with threats or harassment campaigns",
            "reason": "To prevent physical or severe psychological harm"
          }
        ],
        "removalCriteria": [
          "Severe attacks against public figures that may promote physical harm",
          "Content promoting harassment against public figures",
          "Content where risk of physical or severe psychological harm outweighs expression benefit"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review and appropriate action.",
      "steps": [
        "Report the content through TikTok's in-app reporting feature",
        "Moderation team reviews the reported content",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  }
],
};
