import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758651926831-0",
    "reference": "TIKTOK-CG-001",
    "title": "Community Guidelines",
    "summary": "TikTok's comprehensive community guidelines covering content policies, enforcement standards, and rules for user behavior including safety, civility, harassment, bullying, and content restrictions",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
        "contentTypes": [
          "intimate",
          "personal",
          "private"
        ],
        "contentContexts": [
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
        "id": "tt-cg-personal-information",
        "reference": "Privacy and Security - Personal Information",
        "summary": "Prohibits sharing personal information that could lead to harm, such as identity theft, stalking, or fraud",
        "quote": "We don't allow sharing personal information that could lead to harm, such as identity theft, stalking, or fraud.",
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
          "Sharing personal information that could lead to identity theft",
          "Sharing personal information that could lead to stalking",
          "Sharing personal information that could lead to fraud"
        ]
      },
      {
        "id": "tt-cg-body-exposure-sexualized",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits certain types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
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
          "Nudity",
          "Sexual activity",
          "Sexual services",
          "Sexually suggestive behavior involving young people",
          "Significant exposure involving young people"
        ]
      },
      {
        "id": "tt-cg-aigc-edited-media",
        "reference": "Integrity and Authenticity - Edited Media and AI-Generated Content (AIGC)",
        "summary": "Requires clear labeling when AI or editing is used to realistically depict people or scenes and prohibits AIGC that misleads about matters of public importance or that harms individuals",
        "quote": "We require clear labeling when AI or editing is used to realistically depict people or scenes. We don't allow AIGC that misleads about matters of public importance or that harms individuals.",
        "contentTypes": [
          "intimate",
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
          "AIGC that misleads about matters of public importance",
          "AIGC that harms individuals",
          "Unlabeled AI or editing used to realistically depict people or scenes"
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
      "summary": "TikTok provides notice and appeals processes for enforcement actions, with details available in the enforcement section",
      "steps": [
        "Users receive notice of enforcement actions",
        "Appeals process is available for enforcement decisions"
      ]
    }
  },
  {
    "id": "tiktok-new-1758651926831-1",
    "reference": "TIKTOK-TOS-001",
    "title": "Terms of Service",
    "summary": "TikTok's terms of service governing the relationship between users and the platform, including user obligations, content policies, and account management",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-tos-harassment-intimidation",
        "reference": "Section 5",
        "summary": "Prohibits intimidating or harassing other users and promoting sexually explicit material",
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
          "Content that intimidates or harasses another user",
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
        "summary": "Prohibits uploading or sharing private information of third parties without authorization",
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
          "Content containing private addresses, phone numbers, or email addresses of third parties",
          "Content containing personal identity document information",
          "Content containing credit card numbers of third parties"
        ]
      },
      {
        "id": "tt-tos-copyright-infringement",
        "reference": "Section 5",
        "summary": "Prohibits material that infringes copyright, trademark, or other intellectual property rights",
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
          "Material that infringes trademark rights",
          "Material that infringes other intellectual property rights",
          "Material that violates privacy rights of another person"
        ]
      },
      {
        "id": "tt-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind, including threats of physical violence",
        "quote": "any material that contains a threat of any kind, including threats of physical violence;",
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
          "Material containing threats of any kind",
          "Material containing threats of physical violence"
        ]
      },
      {
        "id": "tt-tos-harassment-bullying",
        "reference": "Section 5",
        "summary": "Prohibits material designed to provoke, harass, harm, hurt, scare, distress, embarrass or upset people, including trolling and bullying",
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
        "id": "tt-tos-unauthorized-account-use",
        "reference": "Section 5",
        "summary": "Prohibits using or attempting to use another's account or system without authorization",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services;",
        "contentTypes": [
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Using another person's account without authorization",
          "Attempting to use another's system without authorization",
          "Creating a false identity on the Services"
        ]
      },
      {
        "id": "tt-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves the right to remove or disable access to content at discretion for any reason, including content found objectionable or in violation of Terms",
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
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "At any time and without prior notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content found objectionable",
          "Content in violation of Terms or Community Policy",
          "Content otherwise harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-user-content-removal",
        "reference": "Section 7",
        "summary": "Reserves the right to remove, disallow, block or delete any User Content that violates Terms or in response to complaints from other users or third parties",
        "quote": "In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "With or without notice"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "User Content that violates these Terms",
          "User Content subject to complaints from other users or third parties"
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
          "User Content that allegedly violates intellectual property rights",
          "User Content that allegedly violates privacy rights"
        ]
      },
      {
        "id": "tt-tos-infringing-material-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material and may disable or terminate accounts of repeat infringers",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of. It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
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
        "timeframes": {
          "response": null,
          "removal": {
            "value": null,
            "unit": "immediate",
            "description": "Expeditiously remove infringing material"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Infringing material that TikTok becomes aware of",
          "Repeated infringement of copyrights or intellectual property rights"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about information or materials uploaded by other users and request removal of content through TikTok's feedback system. California residents under 18 have specific removal request procedures.",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback to file a complaint about content",
        "For California residents under 18: Label request as 'California Removal Request' in email subject line",
        "Provide description of User Content to be removed",
        "Provide information reasonably sufficient to permit TikTok to locate the content"
      ]
    }
  },
  {
    "id": "tiktok-new-1758651926831-2",
    "reference": "TIKTOK-PP-001",
    "title": "Privacy Policy",
    "summary": "TikTok's privacy policy explaining data collection, use, sharing, and user rights regarding personal information",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tiktok-pp-user-content-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows users under 18 in California to request removal of their posted content",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
        "contentTypes": [
          "intimate",
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
            "description": "Description of the User Content you want removed",
            "example": "Detailed description of the specific content posted",
            "reason": "To help the platform identify and locate the content for removal"
          },
          {
            "description": "Information reasonably sufficient to permit location of content",
            "example": "URL, username, date posted, or other identifying information",
            "reason": "To enable the platform to find the specific content among all posted material"
          }
        ],
        "removalCriteria": [
          "User must be a California resident",
          "User must be under 18 years of age",
          "Content must have been posted by the requesting user themselves"
        ]
      },
      {
        "id": "tiktok-pp-connecticut-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows Connecticut users under 18 and parents of users under 16 to request account unpublishing or deletion",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User must be a Connecticut resident under 18 years of age, or parent/guardian of Connecticut resident under 16",
          "Request must follow provided instructions for account deletion/unpublishing"
        ]
      },
      {
        "id": "tiktok-pp-parent-guardian-rights",
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
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Requester must be parent or guardian of underage child",
          "Child must be underage (under 18)"
        ]
      },
      {
        "id": "tiktok-pp-user-rights-deletion",
        "reference": "Your Rights",
        "summary": "Provides users the right to request deletion of information collected about them",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Verification of account ownership",
            "example": "Request sent from email address associated with account or account verification information",
            "reason": "To verify the request is from the legitimate account holder"
          }
        ],
        "removalCriteria": [
          "User must be able to verify their identity and account ownership"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through the same contact system",
      "steps": [
        "Submit initial request through the privacy contact form",
        "Receive decision notification from TikTok",
        "Follow instructions in the decision communication to submit an appeal",
        "Provide any additional information requested for the appeal"
      ]
    }
  },
  {
    "id": "tiktok-new-1758651926831-3",
    "reference": "TIKTOK-IP-001",
    "title": "Intellectual Property Policy",
    "summary": "TikTok's comprehensive intellectual property policy covering copyright infringement, DMCA procedures, repeat infringer policies, and counter-notification processes",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright, including unauthorized use of copyrighted content without proper authorization",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
        "contentTypes": [
          "personal",
          "intimate",
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
            "example": "Details about the copyrighted work and evidence of infringement",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Information about the copyright owner",
            "example": "Name and contact details of the copyright holder",
            "reason": "Required for statutory compliance with DMCA and similar laws"
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
        "summary": "Removes user content that infringes copyright and may restrict access to LIVE features for copyright violations",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
        "contentTypes": [
          "personal",
          "intimate",
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
        "id": "tt-ip-repeat-infringer-copyright",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
        "contentTypes": [
          "personal",
          "intimate",
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
          "Severe copyright violations"
        ]
      },
      {
        "id": "tt-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of trademarks that may cause confusion about source, origin, sponsorship or affiliation",
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
            "description": "Information about the trademark owner",
            "example": "Name of the trademark owner",
            "reason": "Required for proper investigation of trademark claims"
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
        "summary": "Prohibits the promotion, sale, trade or solicitation of counterfeit goods",
        "quote": "we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and may restrict access to LIVE features for trademark violations",
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
          "Content involves counterfeit goods"
        ]
      },
      {
        "id": "tt-ip-repeat-infringer-trademark",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe violations",
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
          "Severe trademark violations"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark removals, with different processes for EU and non-EU users",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal for review by TikTok",
        "Appeal may be forwarded to original reporter including contact information",
        "Content may be reinstated at TikTok's discretion or if no court action is filed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758651926831-4",
    "reference": "TIKTOK-NCII-001",
    "title": "Privacy and Security Guidelines - Personal Information Protection",
    "summary": "TikTok's specific guidelines on privacy and security including protection against sharing personal information that could lead to harm, stalking, or identity theft",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-ps-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content containing personal information that could lead to stalking, identity theft, fraud, or other harm",
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
            "description": "Additional context demonstrating psychological harm risk",
            "example": "Evidence showing how the shared information puts the individual at risk",
            "reason": "Platform requires additional context to assess moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Moderate risk personal information shared without consent",
          "Information puts someone at risk of psychological harm"
        ]
      },
      {
        "id": "tt-ps-image-audio-likeness",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits sharing of image or audio likeness without consent when it may cause harm",
        "quote": "Image/audio likeness",
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
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence showing how the shared likeness may cause emotional distress or reputational damage",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Image or audio likeness shared without consent",
          "Content may cause emotional distress, reputational damage, or unwanted contact"
        ]
      },
      {
        "id": "tt-ps-private-communications",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Prohibits sharing private communications on sensitive subjects disclosed by individuals who were not part of the exchange",
        "quote": "Private communications on sensitive subjects, disclosed by individuals who were not part of the exchange",
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
        "evidenceRequirements": [
          {
            "description": "Additional context demonstrating potential harm",
            "example": "Evidence showing the communications were private and disclosed by non-participants",
            "reason": "Platform requires additional context to remove moderate risk personal information"
          }
        ],
        "removalCriteria": [
          "Private communications on sensitive subjects",
          "Disclosed by individuals who were not part of the original exchange"
        ]
      },
      {
        "id": "tt-ps-account-security",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or letting them break platform rules on user accounts",
        "quote": "Giving someone else your login information or letting them break TikTok's rules on your account",
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
          "User gave login information to someone else",
          "User allowed others to break platform rules on their account"
        ]
      },
      {
        "id": "tt-ps-unauthorized-access",
        "reference": "Platform Security",
        "summary": "Prohibits using unauthorized ways to access the platform or creating fake versions",
        "quote": "Using unauthorized ways to access TikTok or creating fake versions of the platform",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Unauthorized access to the platform",
          "Creating fake versions of the platform"
        ]
      },
      {
        "id": "tt-ps-phishing-hacking",
        "reference": "Platform Security",
        "summary": "Prohibits attempts to steal personal information, hack accounts, or access data using deceptive methods",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "private",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempting to steal personal information",
          "Attempting to hack accounts",
          "Using phishing, smishing, or automated tools to access data"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "Users can report privacy violations through TikTok's privacy reporting system",
      "steps": [
        "Access the privacy violation reporting form",
        "Submit details about the privacy violation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758651926831-5",
    "reference": "TIKTOK-HARASSMENT-001",
    "title": "Safety and Civility Guidelines - Harassment and Bullying",
    "summary": "TikTok's specific policies on harassment, bullying, and harmful behavior including protections against doxxing, threats, and degrading content",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-cg-ncii-001",
        "reference": "Adult Sexual Abuse - Image-Based Sexual Abuse",
        "summary": "Prohibits having, sharing, or creating intimate images of someone without their consent, especially for sexual purposes",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows or promotes image-based sexual abuse",
          "Intimate images shared without consent",
          "Content created without consent for sexual purposes"
        ]
      },
      {
        "id": "tt-cg-sextortion-001",
        "reference": "Adult Sexual Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate content without permission to demand money, sexual content, or other demands",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content shows, promotes, or engages in sextortion",
          "Threats to share intimate content without permission"
        ]
      },
      {
        "id": "tt-cg-youth-sextortion-001",
        "reference": "Youth Sexual and Physical Abuse - Sextortion",
        "summary": "Prohibits threatening to share intimate content of young people without permission to make demands",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Sextortion involving young people",
          "Threats to share intimate content of minors"
        ]
      },
      {
        "id": "tt-cg-csam-001",
        "reference": "Youth Sexual and Physical Abuse - CSAM",
        "summary": "Prohibits any content involving the sexual exploitation of young people, including self-generated and AI-generated material",
        "quote": "Child Sexual Abuse Material (CSAM): Sexual content involving a young person, including anything that shows or suggests abuse or sexual activity. This covers content created by others or the young person themselves, and includes digital or AI-generated images. It also includes anything that sexualizes or fetishizes a young person's body.",
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
          "Any screenshot or clip from CSAM material",
          "Content that sexualizes or fetishizes young people",
          "AI-generated sexual content involving minors",
          "Self-generated sexual content by minors"
        ]
      },
      {
        "id": "tt-cg-harassment-sexual-001",
        "reference": "Harassment and Bullying - Sexual Harassment",
        "summary": "Prohibits unwanted sexual comments or behaviors, including remarks about intimate body parts or sexual performance",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
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
          "Making unwanted sexual comments or engaging in unwanted sexual behavior towards someone",
          "Mimicking sexual acts using Duet or stickers",
          "Making remarks about someone's intimate body parts or sexual performance"
        ]
      },
      {
        "id": "tt-cg-harassment-doxing-001",
        "reference": "Harassment and Bullying - Doxing",
        "summary": "Prohibits publishing or threatening to publish personal information about someone online with malicious intent",
        "quote": "Doxing: Publishing or threatening to publish personal information about someone online with malicious intent. We recognize intent can be subjective, so we use objective indicators to help us understand it, such as captions and hashtags.",
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
          "Doxing or encouraging others to do so",
          "Publishing personal information with malicious intent",
          "Threatening to publish personal information"
        ]
      },
      {
        "id": "tt-cg-harassment-coordinated-001",
        "reference": "Harassment and Bullying - Coordinated Abuse",
        "summary": "Prohibits inciting harassment or promoting coordinated abuse against individuals",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Inciting harassment or promoting coordinated abuse",
          "Encouraging others to leave abusive comments",
          "Encouraging false reporting of accounts"
        ]
      },
      {
        "id": "tt-cg-harassment-physical-001",
        "reference": "Harassment and Bullying - Physical Attributes",
        "summary": "Prohibits insulting someone's physical attributes including weight, facial features, or body parts",
        "quote": "Insulting someone's physical attributes, such as weight, facial features, or body parts",
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
          "Insulting someone's physical attributes",
          "Comments targeting weight, facial features, or body parts"
        ]
      },
      {
        "id": "tt-cg-harassment-harm-wishes-001",
        "reference": "Harassment and Bullying - Wishing Harm",
        "summary": "Prohibits wishing serious harm on someone, including death or serious illness",
        "quote": "Wishing serious harm on someone, such as expressing a desire for them to die or contract a serious illness",
        "contentTypes": [
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
          "Wishing serious harm on someone",
          "Expressing desire for someone to die or contract serious illness"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document mentions that TikTok has notice and appeals processes, but specific details are not provided in this section",
      "steps": []
    }
  },
  {
    "id": "tiktok-new-1758651926831-6",
    "reference": "TIKTOK-SENSITIVE-001",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "TikTok's policies on sensitive content including sexually explicit material, intimate imagery, and age-restricted content",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-23T18:25:26.831Z",
    "policies": [
      {
        "id": "tt-cg-nudity-sexual-activity",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits nudity or sexual activity including digital or illustrated images",
        "quote": "Showing: Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images, like manga; Physical sexual arousal or stimulation; Fetish or kink behavior, such as BDSM or sexual behavior involving a focus on specific body parts; Nudity of adults or young people—including digital or illustrated images, like manga",
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
          "Content shows penetrative sex, non-penetrative sex, or oral sex",
          "Content depicts physical sexual arousal or stimulation",
          "Content shows fetish or kink behavior",
          "Content displays nudity of adults or young people",
          "Content includes digital or illustrated intimate images"
        ]
      },
      {
        "id": "tt-cg-sexual-services",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits facilitating access to sexual services including sexual acts, chats or imagery",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
        "contentTypes": [
          "intimate",
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
          "Content offers or asks for sexual acts",
          "Content facilitates sexual chats or imagery",
          "Content provides access to pornography"
        ]
      },
      {
        "id": "tt-cg-youth-sexualized-content",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED",
        "summary": "Prohibits sexually suggestive acts, significant body exposure, intimate kissing, sexualized framing, or sexually explicit language involving young people",
        "quote": "Significant body exposure of young people, such as wearing only underwear or lingerie; Showing young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing; Sexually explicit language involving or directed at young people",
        "contentTypes": [
          "intimate",
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
          "Content shows significant body exposure of young people",
          "Content depicts young people in intimate kissing",
          "Content shows young people in sexually suggestive acts",
          "Content involves sexualized framing of young people",
          "Content contains sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-cg-adult-significant-exposure",
        "reference": "Body Exposure and Sexualized Behaviors - FYF INELIGIBLE & AGE-RESTRICTED",
        "summary": "Age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive behavior",
        "quote": "Showing: Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks; In some regions, moderate adult body exposure—such as the side breast or partial exposure of the buttocks that would be typically covered based on cultural norms; Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
        "contentTypes": [
          "intimate",
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
          "Content shows significant adult body exposure",
          "Content depicts moderate adult body exposure that violates cultural norms",
          "Content shows adults engaging in intimate kissing",
          "Content depicts adults in sexually suggestive acts",
          "Content involves sexualized framing of adults"
        ]
      },
      {
        "id": "tt-cg-sexually-explicit-language",
        "reference": "Body Exposure and Sexualized Behaviors - NOT ALLOWED/AGE-RESTRICTED",
        "summary": "Prohibits or age-restricts sexually explicit language and promotion of sexual products in some regions",
        "quote": "In some regions, adults using sexually explicit language or showing or promoting sex products",
        "contentTypes": [
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
          "Content contains sexually explicit language by adults",
          "Content shows or promotes sex products"
        ]
      },
      {
        "id": "tt-cg-youth-revealing-clothing",
        "reference": "Body Exposure and Sexualized Behaviors - FYF INELIGIBLE",
        "summary": "Removes from For You feed content showing young people in clothing that reveals intimate body parts",
        "quote": "Showing young people in clothing that reveals cleavage or outlines intimate body parts",
        "contentTypes": [
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
          "Content shows young people in clothing that reveals cleavage",
          "Content shows young people in clothing that outlines intimate body parts"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "The document references a Notice and Appeals section but does not provide specific appeal process details in this section",
      "steps": []
    }
  }
],
};
