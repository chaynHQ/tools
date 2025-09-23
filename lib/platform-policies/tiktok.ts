import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tiktok-new-1758653323941-0",
    "reference": "TIKTOK-CG",
    "title": "Community Guidelines",
    "summary": "TikTok's comprehensive community guidelines covering content policies, safety standards, harassment and bullying prevention, hate speech, violent content, intellectual property, privacy and security, and platform integrity. Updated August 2025 with new sections on AI content and enhanced enforcement.",
    "url": "https://www.tiktok.com/community-guidelines/en",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tt-cg-harassment-bullying",
        "reference": "Safety and Civility - Harassment and Bullying",
        "summary": "Prohibits content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse",
        "quote": "We don't allow content that harasses or bullies others, including degrading remarks about appearance, doxing, sexual harassment, or coordinated abuse.",
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
          "impersonation",
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
          "Sharing personal information that could lead to harm",
          "Information that could lead to identity theft",
          "Information that could lead to stalking",
          "Information that could lead to fraud"
        ]
      },
      {
        "id": "tt-cg-body-exposure-sexualized",
        "reference": "Sensitive and Mature Themes - Body Exposure and Sexualized Behaviors",
        "summary": "Prohibits certain types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people",
        "quote": "We don't allow some types of body exposure or sexual behavior, including nudity, sexual activity, sexual services, or any sexually suggestive behavior or significant exposure involving young people.",
        "contentTypes": [
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
          "hacked",
          "impersonation",
          "relationship",
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
          "hacked",
          "impersonation",
          "relationship",
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
      "summary": "TikTok provides notice and appeals processes for enforcement actions, though specific details are not provided in this overview document",
      "steps": [
        "Appeals process is available for enforcement actions",
        "Specific appeal procedures are referenced but detailed in separate enforcement documentation"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-1",
    "reference": "TIKTOK-TOS",
    "title": "Terms of Service",
    "summary": "TikTok's terms of service governing the relationship between users and the platform, including user obligations, content policies, account management, and legal agreements. Incorporates Community Guidelines by reference.",
    "url": "https://www.tiktok.com/legal/page/us/terms-of-service/en",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tiktok-tos-harassment-intimidation",
        "reference": "Section 5",
        "summary": "Prohibits intimidating or harassing others and promoting sexually explicit material",
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
          "Content that intimidates or harasses another person",
          "Content that promotes sexually explicit material"
        ]
      },
      {
        "id": "tiktok-tos-impersonation",
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
          "Content that gives false impression of source"
        ]
      },
      {
        "id": "tiktok-tos-private-information",
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
          "Content containing private addresses, phone numbers, or email addresses",
          "Content containing personal identity document information",
          "Content containing credit card numbers"
        ]
      },
      {
        "id": "tiktok-tos-copyright-infringement",
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
          "Material that infringes privacy rights of another person",
          "Material that infringes trademark or other intellectual property rights"
        ]
      },
      {
        "id": "tiktok-tos-defamatory-content",
        "reference": "Section 5",
        "summary": "Prohibits defamatory, obscene, offensive, or inflammatory material",
        "quote": "any material which is defamatory of any person, obscene, offensive, pornographic, hateful or inflammatory;",
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
          "Material that is defamatory of any person",
          "Material that is obscene, offensive, or inflammatory",
          "Material that is inappropriate in nature"
        ]
      },
      {
        "id": "tiktok-tos-threatening-content",
        "reference": "Section 5",
        "summary": "Prohibits material containing threats of any kind, including threats of physical violence",
        "quote": "any material that contains a threat of any kind, including threats of physical violence;",
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
          "Material containing threats of any kind",
          "Material containing threats of physical violence"
        ]
      },
      {
        "id": "tiktok-tos-harassment-bullying",
        "reference": "Section 5",
        "summary": "Prohibits material designed to provoke, harass, harm, hurt, scare, distress, embarrass or upset people",
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
        "id": "tiktok-tos-content-removal-authority",
        "reference": "Section 5",
        "summary": "Reserves the right to remove or disable access to content at discretion for any reason, including objectionable content or Terms violations",
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
          "Content found objectionable",
          "Content in violation of Terms of Service",
          "Content in violation of Community Policy",
          "Content harmful to the Services or users"
        ]
      },
      {
        "id": "tiktok-tos-ip-disclosure",
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
          "relationship",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User Content that violates intellectual property rights",
          "User Content that violates right to privacy"
        ]
      },
      {
        "id": "tiktok-tos-content-standards-removal",
        "reference": "Section 7",
        "summary": "Reserves the right to remove, disallow, block or delete posts that do not comply with content standards",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at \"Your Access to and Use of Our Services\" above.",
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
          "Posts that do not comply with content standards"
        ]
      },
      {
        "id": "tiktok-tos-user-content-removal",
        "reference": "Section 7",
        "summary": "Reserves the right to remove User Content that violates Terms or in response to complaints, without liability",
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
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "User Content that violates Terms",
          "User Content subject to complaints from other users or third parties"
        ]
      },
      {
        "id": "tiktok-tos-expeditious-removal",
        "reference": "Section 7",
        "summary": "Takes reasonable measures to expeditiously remove infringing material upon becoming aware of it",
        "quote": "TikTok takes reasonable measures to expeditiously remove from our Services any infringing material that we become aware of.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
            "unit": null,
            "description": "Expeditiously upon becoming aware"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": [
          "Infringing material that TikTok becomes aware of"
        ]
      },
      {
        "id": "tiktok-tos-repeat-infringer-policy",
        "reference": "Section 7",
        "summary": "Policy to disable or terminate accounts of users who repeatedly infringe copyrights or intellectual property rights",
        "quote": "It is TikTok's policy, in appropriate circumstances and at its discretion, to disable or terminate the accounts of users of the Services who repeatedly infringe copyrights or intellectual property rights of others.",
        "contentTypes": [
          "intimate",
          "personal",
          "private",
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
          "Repeated infringement of copyrights",
          "Repeated infringement of intellectual property rights of others"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about content uploaded by other users and request account deletion through the feedback system. Counter-notices may be filed for copyright claims, which may result in content restoration after ten business days unless legal action is taken.",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback to file a complaint",
        "For copyright counter-notices, TikTok may send a copy to the original complaining party",
        "Unless the original party files legal action, removed content may be restored in ten business days or more after counter-notice receipt"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-2",
    "reference": "TIKTOK-PRIVACY",
    "title": "Privacy Policy",
    "summary": "TikTok's privacy policy detailing data collection, use, sharing practices, and user rights. Last updated August 2024. Covers personal information protection and user privacy controls.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tt-privacy-user-content-removal",
        "reference": "Your Rights",
        "summary": "Provides users the right to request deletion of information collected about them, including user-generated content",
        "quote": "You may submit a request to know, access, correct or delete the information we have collected from or about you at https://www.tiktok.com/legal/report/privacy. You may appeal any decision we have made about your request by following the instructions in the communication you receive from us notifying you of our decision.",
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
            "description": "Verification of account ownership or identity",
            "example": "Request sent from email address associated with account or information necessary to verify account",
            "reason": "To verify the request is legitimate and from the account holder"
          }
        ],
        "removalCriteria": [
          "User submits valid deletion request for information collected about them",
          "Proper verification of account ownership is provided"
        ]
      },
      {
        "id": "tt-privacy-content-removal-under-18",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows users under 18 in California to request removal of user content they posted",
        "quote": "Users of the Platform who are California residents and are under 18 years of age may request and obtain removal of User Content they posted by contacting us at: https://www.tiktok.com/legal/report/privacy. All requests must provide a description of the User Content you want removed and information reasonably sufficient to permit us to locate that User Content.",
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
            "description": "Description of the user content to be removed",
            "example": "Detailed description of the specific content posted",
            "reason": "To locate the specific content for removal"
          },
          {
            "description": "Information sufficient to locate the content",
            "example": "URL, timestamp, or other identifying information",
            "reason": "To ensure the correct content is identified and removed"
          }
        ],
        "removalCriteria": [
          "User is a California resident under 18 years of age",
          "Content was posted by the requesting user themselves",
          "Adequate description and location information is provided"
        ]
      },
      {
        "id": "tt-privacy-connecticut-removal",
        "reference": "Content Removal for Users Under 18",
        "summary": "Allows Connecticut users under 18 and parents of users under 16 to request account deletion or unpublishing",
        "quote": "Users of the Platform who are Connecticut residents and are under 18 years of age, and parents and guardians of users of the Platform who are Connecticut residents under 16 years of age, may request that we unpublish or delete their own account (for users aged 13 through 17) or their child's account (for parents and guardians with teen users under 16) by following the instructions here.",
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
            "description": "Verification of Connecticut residency and age",
            "example": "Documentation showing Connecticut residence and proof of age",
            "reason": "To verify eligibility under Connecticut law"
          },
          {
            "description": "For parents: proof of guardianship",
            "example": "Documentation showing parental or guardian relationship",
            "reason": "To verify authority to request deletion of minor's account"
          }
        ],
        "removalCriteria": [
          "User is Connecticut resident under 18 years of age, or parent/guardian of user under 16",
          "Request follows specified instructions for account deletion/unpublishing"
        ]
      },
      {
        "id": "tt-privacy-parental-rights",
        "reference": "Children and Teens",
        "summary": "Allows parents and guardians to request deletion of their underage child's account or download account data",
        "quote": "As a parent or guardian, you can also request the deletion of the account of your underage child or download the account data of your underage child by contacting us at https://www.tiktok.com/legal/report/privacy. If you are a parent or guardian, depending on your state of residence, you may have the ability to exercise certain rights over your child's or teen's account. For example, you may request the deletion of their accounts, download account data, or exercise other rights in connection with your child or teen by contacting us at https://www.tiktok.com/legal/report/privacy.",
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
            "description": "Proof of parental or guardian relationship",
            "example": "Documentation showing legal guardianship or parental relationship",
            "reason": "To verify authority to make requests on behalf of minor"
          },
          {
            "description": "Verification that child is underage",
            "example": "Documentation showing child's age",
            "reason": "To confirm eligibility for parental rights provisions"
          }
        ],
        "removalCriteria": [
          "Requestor is verified parent or guardian of account holder",
          "Account holder is under 18 years of age",
          "Request is made through proper channels"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests by following instructions provided in TikTok's response communication",
      "steps": [
        "Submit initial request for content removal or account deletion",
        "Receive decision communication from TikTok",
        "Follow appeal instructions provided in the decision communication",
        "Submit appeal through the process outlined in TikTok's response"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-3",
    "reference": "TIKTOK-IP",
    "title": "Intellectual Property Policy",
    "summary": "TikTok's comprehensive intellectual property policy covering copyright infringement, DMCA procedures, trademark violations, and repeat infringer policies. Includes detailed takedown and counter-notification processes.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tiktok-ip-copyright-infringement",
        "reference": "Copyright Infringement",
        "summary": "Prohibits any content that infringes copyright, including unauthorized use of copyrighted content without proper authorization or legally valid reason",
        "quote": "We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of TikTok's policies.",
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
        "evidenceRequirements": [
          {
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details of the rights holder",
            "reason": "Platform may need to contact reporter with questions and may share this information with the user"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization",
          "Use of copyrighted content without legally valid reason"
        ]
      },
      {
        "id": "tiktok-ip-copyright-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes user content that infringes another person's copyright and may restrict access to LIVE features for copyright infringement",
        "quote": "Any user content that infringes another person's copyright may be removed. If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature.",
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
          "User content infringes another person's copyright"
        ]
      },
      {
        "id": "tiktok-ip-repeat-infringer-policy",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit copyright infringement and may immediately ban accounts for severe copyright violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits copyright infringement. We may exercise our discretion to immediately ban any account in cases of severe copyright violations.",
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
          "User repeatedly commits copyright infringement",
          "Severe copyright violations occur"
        ]
      },
      {
        "id": "tiktok-ip-trademark-infringement",
        "reference": "Trademark Infringement",
        "summary": "Prohibits unauthorized use of identical or similar trademarks in connection with goods or services that may cause confusion about source, origin, sponsorship or affiliation",
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
            "example": "Trademark ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the trademark infringement report"
          },
          {
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details of the trademark rights holder",
            "reason": "Platform may need to contact reporter with questions and may share this information with the user"
          }
        ],
        "removalCriteria": [
          "Unauthorized use of identical or similar trademark",
          "Use likely to cause confusion, deception or mistake about source, origin, sponsorship or affiliation"
        ]
      },
      {
        "id": "tiktok-ip-counterfeiting",
        "reference": "Counterfeiting",
        "summary": "Prohibits illegal manufacturing, importing, exporting, distributing, selling, facilitating trade of, or dealing in goods under trademarks without permission",
        "quote": "Counterfeiting is the illegal manufacturing, importing and exporting, distributing, selling, facilitating the trade of, or otherwise dealing in goods under a trademark that is identical to or substantially similar to a registered trademark, without the trademark owner's permission, thereby infringing the rights of the trademark owner.",
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
          "Illegal manufacturing, importing, exporting, distributing, selling, or facilitating trade of goods under trademark without permission",
          "Use of trademark identical or substantially similar to registered trademark without owner's permission"
        ]
      },
      {
        "id": "tiktok-ip-trademark-removal",
        "reference": "Removal of Content; Account Bans",
        "summary": "Removes content that violates trademark rights and prohibits purchase, sale, trade, promotion, or solicitation of counterfeit goods",
        "quote": "Any content that violates another's trademark rights may be taken down and we do not permit the purchase, sale, trade, promotion, or solicitation of counterfeit goods on TikTok, and will remove such content.",
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
          "Content violates another's trademark rights",
          "Content involves purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tiktok-ip-trademark-repeat-infringer",
        "reference": "Removal of Content; Account Bans",
        "summary": "Bans accounts of users who repeatedly commit trademark infringement and may immediately ban accounts for severe trademark violations",
        "quote": "We have adopted and reasonably implemented an intellectual property repeat infringer policy under which we, in appropriate circumstances, ban the account of a user who repeatedly commits trademark infringement. We may exercise our discretion to immediately ban any account in cases of severe trademark violations.",
        "contentTypes": [
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
          "Severe trademark violations occur"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/Copyright",
      "summary": "Users can submit appeals through in-app notifications for both copyright and trademark infringement removals. Appeals require contact information and supporting evidence. For users outside EU, appeals may be forwarded to original reporters and content may be reinstated if no court action is filed. EU users have specific exceptions for quotation, criticism, review, caricature, parody and pastiche.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "Platform may contact you for additional questions",
        "For non-EU users: Appeal may be forwarded to original reporter including contact information",
        "For non-EU users: Content may be reinstated if no court action is filed by copyright claimant",
        "For EU users: Appeal based on exceptions for quotation, criticism, review, caricature, parody or pastiche"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-4",
    "reference": "TIKTOK-BULLYING",
    "title": "Bullying Prevention Policy",
    "summary": "TikTok's dedicated bullying prevention policy outlining prohibited harassment behaviors, reporting mechanisms, and support resources. Covers verbal, physical, and sexual harassment prevention.",
    "url": "https://www.tiktok.com/safety/en/bullying-prevention",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tt-bullying-harassment-prohibition",
        "reference": "Bullying Prevention Policy",
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
          "Content that harasses users",
          "Content that humiliates users",
          "Content that threatens users",
          "Content that doxxes users (publishing personal information with malicious intent)"
        ]
      },
      {
        "id": "tt-bullying-no-tolerance",
        "reference": "Bullying Prevention Policy",
        "summary": "Prohibits bullying behavior that causes physical, social and/or psychological harm through misuse of power",
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
          "Behavior involving misuse of power over another person or group"
        ]
      },
      {
        "id": "tt-public-figure-attacks",
        "reference": "Bullying Prevention Policy",
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
          "Content that poses risk of physical or severe psychological harm to public figures"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/report-a-problem",
      "summary": "Users can report content that violates TikTok's Community Guidelines through the in-app reporting system for moderation team review",
      "steps": [
        "Report content in-app by following the provided steps",
        "Moderation team reviews the report",
        "Appropriate action is taken if content violates Community Guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-5",
    "reference": "TIKTOK-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "TikTok's privacy and security section within Community Guidelines specifically addressing personal information sharing, platform security, and protection against identity theft and fraud.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tt-privacy-personal-info-high-risk",
        "reference": "Personal Information - High Risk",
        "summary": "Prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm",
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
          "Content contains home address",
          "Content contains account login information",
          "Content contains sensitive payment information",
          "Content contains identity numbers",
          "Information could lead to stalking, identity theft, fraud, or other harm"
        ]
      },
      {
        "id": "tt-privacy-personal-info-moderate-risk",
        "reference": "Personal Information - Moderate Risk",
        "summary": "Removes moderate risk personal information shared without consent if it puts someone at risk of psychological harm",
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
            "example": "Evidence showing how the shared information causes emotional distress or reputational damage",
            "reason": "Platform requires additional context to assess moderate risk personal information removal requests"
          }
        ],
        "removalCriteria": [
          "Information shared without consent",
          "Information puts someone at risk of psychological harm",
          "Content contains contact details or date of birth",
          "Content contains medical information",
          "Content contains image/audio likeness",
          "Content contains private communications on sensitive subjects disclosed by non-participants"
        ]
      },
      {
        "id": "tt-security-account-sharing",
        "reference": "Platform Security",
        "summary": "Prohibits giving login information to others or allowing them to break platform rules on user accounts",
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
          "User shared login information with another person",
          "Another person used the account to break platform rules"
        ]
      },
      {
        "id": "tt-security-unauthorized-access",
        "reference": "Platform Security",
        "summary": "Prohibits unauthorized access to the platform or creation of fake versions",
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
          "Unauthorized access methods used",
          "Fake versions of the platform created"
        ]
      },
      {
        "id": "tt-security-malware",
        "reference": "Platform Security",
        "summary": "Prohibits sharing files or messages containing malware or harmful software",
        "quote": "Sharing files or messages that carry malware or other harmful software, such as viruses or worms",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content contains malware",
          "Content contains viruses or worms",
          "Content contains other harmful software"
        ]
      },
      {
        "id": "tt-security-data-theft",
        "reference": "Platform Security",
        "summary": "Prohibits attempts to steal personal information, hack accounts, or access data through deceptive methods",
        "quote": "Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools",
        "contentTypes": [
          "private",
          "personal",
          "other"
        ],
        "contentContexts": [
          "hacked",
          "unknown",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [],
        "removalCriteria": [
          "Attempts to steal personal information",
          "Attempts to hack accounts",
          "Use of phishing techniques",
          "Use of smishing techniques",
          "Use of automated tools for unauthorized access"
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
    "id": "tiktok-new-1758653323941-6",
    "reference": "TIKTOK-IMPERSONATION",
    "title": "Impersonation Reporting Policy",
    "summary": "TikTok's policy and procedures for reporting impersonation accounts, including both in-app reporting and formal complaint processes for individuals and celebrities being impersonated.",
    "url": "https://support.tiktok.com/en/safety-hc/report-a-problem/report-an-impersonation-account",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tiktok-impersonation-prohibition",
        "reference": "Impersonation Reporting Policy",
        "summary": "Prohibits accounts that impersonate other individuals or entities",
        "quote": "If you believe an account is fake and impersonating you or someone else, you can report it to us",
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
            "description": "Valid identification documentation",
            "example": "Government-issued ID or other accepted identification methods",
            "reason": "To verify the identity of the person being impersonated"
          },
          {
            "description": "Details about who is being impersonated",
            "example": "Selection from dropdown list indicating if it's yourself or a celebrity/public figure",
            "reason": "To categorize the type of impersonation for appropriate handling"
          },
          {
            "description": "Electronic signature confirmation",
            "example": "Name entered as electronic signature with checkbox confirmations",
            "reason": "To legally confirm the authenticity of the report"
          }
        ],
        "removalCriteria": [
          "Account is fake and impersonating another person",
          "Account is pretending to be someone else"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/submit-requests",
      "summary": "Users can appeal impersonation account decisions through online forms with different processes for U.S. and non-U.S. accounts",
      "steps": [
        "Select 'Appeal an Impersonation Account on TikTok' from the dropdown list",
        "Enter email address and country information",
        "Provide details about who is being impersonated",
        "Upload valid identification documentation",
        "Confirm statements with checkboxes",
        "Enter electronic signature",
        "Submit the appeal form"
      ]
    }
  },
  {
    "id": "tiktok-new-1758653323941-7",
    "reference": "TIKTOK-APPEALS",
    "title": "Content Violations and Appeals Process",
    "summary": "TikTok's comprehensive policy on content violations, enforcement actions, strike systems, account bans, and the appeals process for users who believe content was incorrectly removed.",
    "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/content-violations-and-bans",
    "accessTimestamp": "2025-09-23T18:48:43.941Z",
    "policies": [
      {
        "id": "tt-cg-ncii",
        "reference": "Severe Violations - Non-consensual Content",
        "summary": "Prohibits posting or promoting content that depicts non-consensual intimate acts",
        "quote": "Post or promote content that depicts non-consensual sex acts such as rape or molestation.",
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
          "Content depicts non-consensual intimate acts",
          "Content promotes non-consensual intimate acts"
        ]
      },
      {
        "id": "tt-cg-csam",
        "reference": "Severe Violations - Youth Exploitation",
        "summary": "Prohibits posting, promoting, or facilitating youth exploitation or child sexual abuse material",
        "quote": "Post, promote, or facilitate youth exploitation or child sexual abuse material (CSAM).",
        "contentTypes": [
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content involves youth exploitation",
          "Content contains child sexual abuse material",
          "Content promotes or facilitates CSAM"
        ]
      },
      {
        "id": "tt-cg-impersonation",
        "reference": "Permanent Ban Criteria - Impersonation",
        "summary": "Prohibits impersonating another person or entity in a deceptive manner",
        "quote": "The account impersonates another person or entity in a deceptive manner.",
        "contentTypes": [
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
          "Account impersonates another person",
          "Account impersonates an entity",
          "Impersonation is conducted in a deceptive manner"
        ]
      },
      {
        "id": "tt-cg-violence-threats",
        "reference": "Severe Violations - Violence",
        "summary": "Prohibits promoting or threatening violence",
        "quote": "Promote or threaten violence.",
        "contentTypes": [
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
          "Content promotes violence",
          "Content contains threats of violence"
        ]
      },
      {
        "id": "tt-cg-human-trafficking",
        "reference": "Severe Violations - Human Trafficking",
        "summary": "Prohibits content that facilitates human trafficking",
        "quote": "Post content that facilitates human trafficking.",
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
          "Content facilitates human trafficking"
        ]
      },
      {
        "id": "tt-cg-torture",
        "reference": "Severe Violations - Torture",
        "summary": "Prohibits content that depicts real-world torture",
        "quote": "Post content that depicts real-world torture.",
        "contentTypes": [
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
          "Content depicts real-world torture"
        ]
      },
      {
        "id": "tt-ip-violations",
        "reference": "Permanent Ban Criteria - Intellectual Property",
        "summary": "Prohibits multiple violations of intellectual property policy",
        "quote": "Multiple violations of our Intellectual Property Policy.",
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
          "Multiple violations of intellectual property policy"
        ]
      },
      {
        "id": "tt-strike-system",
        "reference": "Account Strikes and Bans",
        "summary": "Implements a strike system for Community Guidelines violations with escalating consequences",
        "quote": "Our system counts the number of times your account has violated our Community Guidelines, and for each violation after your first warning, you'll receive a strike on your account. We count strikes by policy area as listed in our Community Guidelines (for example, safety and civility) or by feature (for example, comments or direct messages).",
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
        "evidenceRequirements": [],
        "removalCriteria": [
          "Content violates Community Guidelines",
          "Account has reached strike threshold for multiple violations"
        ]
      },
      {
        "id": "tt-strike-expiry",
        "reference": "Strike Expiration",
        "summary": "Account strikes expire after 90 days and are no longer considered for permanent bans",
        "quote": "Strikes on your TikTok account will expire after 90 days and will no longer be taken into consideration for a permanent account ban.",
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
            "value": 90,
            "unit": "days",
            "description": "Strikes expire after 90 days"
          }
        },
        "evidenceRequirements": [],
        "removalCriteria": []
      }
    ],
    "appealProcess": {
      "url": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety#3",
      "summary": "Users can appeal content removal or account bans through the TikTok app. If approved, content/account is reinstated and strikes are removed.",
      "steps": [
        "Go to the removed content or banned account in the TikTok app",
        "Tap 'Appeal' or follow the appeal link in notifications",
        "Submit appeal with explanation",
        "Wait for review by TikTok's Trust and Safety team",
        "Receive notification of appeal decision",
        "If approved: content/account reinstated and strike removed"
      ]
    }
  }
],
};
