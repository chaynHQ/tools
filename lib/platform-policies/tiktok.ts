import { PlatformPolicies } from '../../types/policies';

export const tiktokPolicy: PlatformPolicies = {
  platform: 'TikTok',
  policyDocuments: [
  {
    "id": "tt-community-guidelines",
    "reference": "TT-CG",
    "title": "Community Guidelines",
    "summary": "Comprehensive community guidelines covering prohibited content and behavior on TikTok, including harassment, bullying, NCII, privacy violations, and content removal policies.",
    "url": "https://www.tiktok.com/community-guidelines/en/",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
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
          "Content involves sexually suggestive behavior or significant exposure involving young people"
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
            "description": "Link to the video",
            "reason": "To identify the AI-generated content"
          },
          {
            "description": "Description of how the content is AI-generated and violates policy",
            "reason": "To understand the nature of the AI violation"
          }
        ],
        "removalCriteria": [
          "AI-generated content is used to realistically depict people without clear labeling",
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
          "Content involves doxing",
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
            "description": "Explanation of potential harm from the information sharing",
            "reason": "To establish the risk of identity theft, stalking, or fraud"
          }
        ],
        "removalCriteria": [
          "Content shares personal information that could lead to identity theft",
          "Content shares personal information that could enable stalking",
          "Content shares personal information that could facilitate fraud",
          "Content reveals private information without consent"
        ]
      },
      {
        "id": "tt-impersonation-policy",
        "reference": "TT-CG-IMPERSONATION",
        "summary": "Prohibits accounts that mislead or try to manipulate the platform through deceptive behavior.",
        "quote": "We don't allow accounts that mislead or try to manipulate our platform, or the trade of services that artificially boost engagement or trick the recommendation system.",
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
            "description": "Link to the misleading or impersonating account",
            "reason": "To identify the deceptive account"
          },
          {
            "description": "Description of how the account is misleading or impersonating",
            "reason": "To understand the nature and extent of the deception"
          },
          {
            "description": "Evidence of authentic identity if being impersonated",
            "reason": "To verify the legitimate identity being misrepresented"
          }
        ],
        "removalCriteria": [
          "Account misleads users about its identity or purpose",
          "Account attempts to manipulate the platform",
          "Account engages in deceptive behavior",
          "Account impersonates another individual or entity"
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
            "description": "Evidence of ownership or authorization to use the copyrighted material",
            "reason": "To establish legitimate rights to the intellectual property"
          },
          {
            "description": "Description of how the content violates intellectual property rights",
            "reason": "To understand the nature of the infringement"
          }
        ],
        "removalCriteria": [
          "Content violates intellectual property rights",
          "Content reposts copyrighted material without permission",
          "Content reposts trademarked material without permission",
          "Content uses protected intellectual property without authorization"
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
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
    "policies": [
      {
        "id": "tt-tos-copyright-policy",
        "reference": "TT-TOS-IP",
        "summary": "Prohibits copyright infringement and requires users to respect intellectual property rights, with reference to a separate Copyright Policy.",
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
            "description": "Compliance with the terms of TikTok's Copyright Policy",
            "reason": "Required as a condition of service access and use"
          }
        ],
        "removalCriteria": [
          "Content that infringes intellectual property rights",
          "Content that violates TikTok's Copyright Policy terms"
        ]
      },
      {
        "id": "tt-tos-prohibited-content",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits uploading private information of third parties, defamatory content, and material designed to harass, harm, hurt, scare, distress, embarrass or upset people.",
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
            "description": "Evidence that content contains private information of third parties",
            "reason": "To establish violation of privacy protection rules"
          },
          {
            "description": "Evidence that content is defamatory, harassing, or designed to distress/embarrass",
            "reason": "To establish violation of harassment and harmful content policies"
          }
        ],
        "removalCriteria": [
          "Content contains private information of third parties without authorization",
          "Content is defamatory, obscene, offensive, pornographic, hateful or inflammatory",
          "Content is deliberately designed to harass, harm, hurt, scare, distress, embarrass or upset people"
        ]
      },
      {
        "id": "tt-tos-impersonation-policy",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits impersonating any person or entity or falsely misrepresenting affiliation, including giving the impression that uploaded content emanates from the Services.",
        "quote": "impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Services",
        "contentTypes": [
          "intimate",
          "personal",
          "other"
        ],
        "contentContexts": [
          "impersonation"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence that the account or content falsely represents another person or entity",
            "reason": "To establish impersonation violation"
          },
          {
            "description": "Proof of identity of the person being impersonated",
            "reason": "To verify legitimate claim of impersonation"
          }
        ],
        "removalCriteria": [
          "Account impersonates another person or entity",
          "Content falsely misrepresents user's identity or affiliation",
          "Content gives false impression of emanating from TikTok Services"
        ]
      },
      {
        "id": "tt-tos-unauthorized-account-use",
        "reference": "TT-TOS-USE",
        "summary": "Prohibits using or attempting to use another person's account, service or system without authorization from TikTok, or creating false identities.",
        "quote": "use or attempt to use another's account, service or system without authorisation from TikTok, or create a false identity on the Services",
        "contentTypes": [
          "intimate",
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
            "description": "Evidence of unauthorized access to another user's account",
            "reason": "To establish unauthorized account use violation"
          },
          {
            "description": "Evidence of false identity creation",
            "reason": "To establish false identity violation"
          }
        ],
        "removalCriteria": [
          "Use of another person's account without TikTok authorization",
          "Creation of false identity on the Services"
        ]
      },
      {
        "id": "tt-tos-account-security",
        "reference": "TT-TOS-ACCOUNT",
        "summary": "Requires users to keep account passwords confidential and immediately notify TikTok if account is compromised by third parties.",
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
            "reason": "Official channel for reporting compromised accounts"
          },
          {
            "description": "Evidence that third party knows password or has accessed account",
            "reason": "To establish account compromise"
          }
        ],
        "removalCriteria": [
          "Third party has gained unauthorized access to user account",
          "Account password has been compromised"
        ]
      },
      {
        "id": "tt-tos-content-removal-authority",
        "reference": "TT-TOS-USE",
        "summary": "TikTok reserves the right to remove or disable access to content at their discretion for any reason, including content that is objectionable, violates Terms, or is harmful to Services or users.",
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
            "reason": "Basis for content removal authority"
          },
          {
            "description": "Content that is objectionable or harmful to Services or users",
            "reason": "Discretionary removal criteria"
          }
        ],
        "removalCriteria": [
          "Content is objectionable in TikTok's discretion",
          "Content violates Terms of Service or Community Guidelines",
          "Content is harmful to the Services or users"
        ]
      },
      {
        "id": "tt-tos-user-content-removal",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok has the right to remove, disallow, block or delete any user posting that doesn't comply with content standards, and to remove User Content in response to complaints.",
        "quote": "We have the right to remove, disallow, block or delete any posting you make on our Services if, in our opinion, your post does not comply with the content standards set out at 'Your Access to and Use of Our Services' above. In addition, we have the right – but not the obligation – in our sole discretion to remove, disallow, block or delete any User Content (i) that we consider to violate these Terms, or (ii) in response to complaints from other users or third parties, with or without notice and without any liability to you.",
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
            "description": "Complaints from other users or third parties",
            "reason": "Basis for content removal consideration"
          },
          {
            "description": "Evidence that content violates Terms of Service",
            "reason": "To establish Terms violation"
          }
        ],
        "removalCriteria": [
          "User Content does not comply with content standards",
          "User Content violates Terms of Service",
          "Complaints received from other users or third parties about the content"
        ]
      },
      {
        "id": "tt-tos-ip-disclosure",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok reserves the right to disclose user identity to third parties claiming intellectual property rights violations or privacy rights violations from uploaded content.",
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
        "evidenceRequirements": [
          {
            "description": "Third party claim of intellectual property rights violation",
            "reason": "Basis for identity disclosure"
          },
          {
            "description": "Third party claim of privacy rights violation",
            "reason": "Basis for identity disclosure"
          }
        ],
        "removalCriteria": [
          "User Content violates third party intellectual property rights",
          "User Content violates third party privacy rights"
        ]
      },
      {
        "id": "tt-tos-copyright-takedown",
        "reference": "TT-TOS-CONTENT",
        "summary": "TikTok takes reasonable measures to expeditiously remove infringing material and may disable or terminate accounts of users who repeatedly infringe copyrights.",
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
            "unit": "expeditious",
            "description": "Reasonable measures to expeditiously remove infringing material"
          }
        },
        "evidenceRequirements": [
          {
            "description": "Evidence of copyright or intellectual property infringement",
            "reason": "To establish infringement for removal"
          }
        ],
        "removalCriteria": [
          "Material infringes copyright or intellectual property rights",
          "User repeatedly infringes copyrights or intellectual property rights (account termination)"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/feedback",
      "summary": "Users can file complaints about information or materials uploaded by other users through TikTok's feedback system. Counter-notices may be filed for copyright claims, with potential restoration after 10+ business days if no legal action is taken.",
      "steps": [
        "Contact TikTok at https://www.tiktok.com/legal/report/feedback to file complaints about content",
        "For copyright counter-notices, TikTok may send copy to original complainant",
        "Unless original complainant files court action, removed content may be restored in 10+ business days",
        "California residents under 18 can request content removal by labeling requests 'California Removal Request'"
      ]
    }
  },
  {
    "id": "tt-privacy-policy",
    "reference": "TT-PP",
    "title": "Privacy Policy",
    "summary": "Privacy policy explaining how TikTok collects, uses, and protects user data, including personal information handling and data rights.",
    "url": "https://www.tiktok.com/legal/page/us/privacy-policy/en",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
    "policies": [
      {
        "id": "tt-pp-content-removal-under-18",
        "reference": "TT-PP-CONTENT-REMOVAL",
        "summary": "California residents under 18 can request removal of User Content they posted by providing description and location information.",
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
        "id": "tt-pp-connecticut-minor-account-removal",
        "reference": "TT-PP-CONNECTICUT-REMOVAL",
        "summary": "Connecticut residents under 18 and parents/guardians of users under 16 can request account unpublishing or deletion.",
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
            "description": "Proof of age (under 18 for users, under 16 for children of parents/guardians)",
            "example": "Birth certificate or other age verification",
            "reason": "To verify eligibility under age requirements"
          },
          {
            "description": "For parents/guardians: proof of relationship to the minor",
            "example": "Birth certificate, custody documents, or other legal documentation",
            "reason": "To verify parental/guardian authority"
          }
        ],
        "removalCriteria": [
          "User must be a Connecticut resident under 18, or parent/guardian of Connecticut resident under 16",
          "Account must belong to the requesting user or their minor child",
          "Proper verification of residency, age, and relationship (if applicable) must be provided"
        ]
      },
      {
        "id": "tt-pp-parental-rights",
        "reference": "TT-PP-PARENTAL-RIGHTS",
        "summary": "Parents and guardians can request deletion of their underage child's account or download account data, and may exercise other rights depending on state of residence.",
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
            "example": "Birth certificate, custody documents, or other legal documentation",
            "reason": "To verify authority to make requests on behalf of the minor"
          },
          {
            "description": "Proof that the child is underage",
            "example": "Birth certificate or other age verification",
            "reason": "To verify the child meets age requirements for parental control"
          },
          {
            "description": "Account identification information",
            "example": "Username, email associated with account, or other identifying information",
            "reason": "To locate the specific account in question"
          }
        ],
        "removalCriteria": [
          "Requester must be verified parent or legal guardian",
          "Account must belong to an underage child of the requester",
          "Request must comply with applicable state laws",
          "Proper verification documentation must be provided"
        ]
      },
      {
        "id": "tt-pp-child-account-termination",
        "reference": "TT-PP-CHILD-TERMINATION",
        "summary": "TikTok will delete personal information and terminate accounts of users under 13 when discovered.",
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
            "description": "Information indicating the user is below age 13",
            "example": "Account information, content, or other evidence suggesting underage use",
            "reason": "To identify accounts that violate minimum age requirements"
          },
          {
            "description": "Account identification information",
            "example": "Username, profile link, or other identifying information",
            "reason": "To locate the specific account for review and potential termination"
          }
        ],
        "removalCriteria": [
          "User must be determined to be under 13 years of age",
          "Account must be active on the Platform",
          "Sufficient evidence of underage use must be provided"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "Users can appeal decisions made about their privacy requests through the instructions provided in TikTok's response communication.",
      "steps": [
        "Submit initial request through TikTok's privacy request form",
        "Receive decision communication from TikTok",
        "Follow the appeal instructions provided in the decision communication",
        "Submit appeal with additional information if needed"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233332722-0",
    "reference": "TT-IP",
    "title": "Intellectual Property Policy",
    "summary": "Comprehensive policy covering copyright infringement, DMCA takedown procedures, repeat infringer policies, and appeal processes for intellectual property violations.",
    "url": "https://www.tiktok.com/legal/page/global/copyright-policy/en",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
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
            "description": "All information requested in the online Copyright Infringement Report form",
            "example": "Copyright ownership details, specific infringing content identification",
            "reason": "To facilitate evaluation of the copyright infringement report"
          },
          {
            "description": "Contact information of the copyright owner",
            "example": "Name and contact details",
            "reason": "Platform may need to contact reporter with questions and may share this with the user"
          }
        ],
        "removalCriteria": [
          "Content infringes another person's copyright",
          "Use of copyrighted content without proper authorization or legally valid reason"
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
            "description": "Contact information of the trademark owner",
            "example": "Name and contact details",
            "reason": "Platform may need to contact reporter and may share this information with the user"
          }
        ],
        "removalCriteria": [
          "Content violates another's trademark rights",
          "Unauthorized use of identical or similar trademark likely to cause confusion about source or affiliation",
          "Purchase, sale, trade, promotion, or solicitation of counterfeit goods"
        ]
      },
      {
        "id": "tiktok-ip-repeat-infringer-ban",
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
            "description": "Evidence of repeated intellectual property infringement",
            "example": "Multiple valid infringement reports against the same account",
            "reason": "To establish pattern of repeat infringement"
          }
        ],
        "removalCriteria": [
          "User repeatedly commits copyright infringement",
          "User repeatedly commits trademark infringement",
          "Severe intellectual property violations warranting immediate action"
        ]
      },
      {
        "id": "tiktok-ip-live-feature-restriction",
        "reference": "TT-IP-LIVE",
        "summary": "TikTok may temporarily restrict access to LIVE feature for users who commit intellectual property infringement during live streaming.",
        "quote": "If a user infringes copyright by using the LIVE feature, we may also temporarily restrict their access to LIVE feature. In some cases, for trademark violations in connection with the use of the LIVE feature, we may also temporarily restrict access to the LIVE feature of the violating user.",
        "contentTypes": [
          "other"
        ],
        "contentContexts": [
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of intellectual property infringement during LIVE streaming",
            "example": "Copyright or trademark infringement occurring in live broadcast",
            "reason": "To justify temporary restriction of LIVE feature access"
          }
        ],
        "removalCriteria": [
          "Copyright infringement using the LIVE feature",
          "Trademark violations in connection with the LIVE feature"
        ]
      }
    ],
    "appealProcess": {
      "url": null,
      "summary": "Users can appeal content removal through in-app notifications, with different processes for EU and non-EU users. Appeals require contact information and supporting evidence.",
      "steps": [
        "Receive in-app notification about content removal",
        "Access appeal option from the in-app notification",
        "Provide all required information including contact details and supporting evidence",
        "Submit appeal through TikTok app",
        "Platform may contact user for additional questions",
        "For non-EU users: Appeal may be forwarded to original reporter including contact information",
        "Platform makes discretionary decision on content reinstatement"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233332722-1",
    "reference": "TT-SAFETY",
    "title": "Safety and Civility Guidelines",
    "summary": "Detailed policies on harassment, bullying, hate speech, and safety measures including specific provisions for protecting users from harmful content and behavior.",
    "url": "https://www.tiktok.com/community-guidelines/en/safety-civility",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
    "policies": [
      {
        "id": "tt-safety-ncii",
        "reference": "TT-SAFETY-5",
        "summary": "TikTok prohibits image-based sexual abuse, including sharing intimate images without consent, and removes such content while providing reporting mechanisms for victims.",
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
            "example": "Use the dedicated reporting link for privacy violations",
            "reason": "Specialized reporting channel for sensitive content"
          }
        ],
        "removalCriteria": [
          "Intimate images shared without consent of the person depicted",
          "Content created or edited to appear intimate without consent",
          "Distribution of previously consensual content without ongoing consent"
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
          "hacked",
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
          "Demands for money, sex, or additional explicit content",
          "Content used as leverage for extortion purposes"
        ]
      },
      {
        "id": "tt-safety-harassment-sexual",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits sexual harassment including unwanted sexual comments, behaviors, and sexualization or sexual degradation of individuals.",
        "quote": "Sexual Harassment: The sexualization or sexual degradation of an individual through language or behaviors relating to sexual activities, intimate body parts, and sexual health information.",
        "contentTypes": [
          "intimate",
          "personal"
        ],
        "contentContexts": [
          "impersonation",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of unwanted sexual content or behavior",
            "example": "Screenshots of sexual comments or degrading content",
            "reason": "To demonstrate the harassing nature of the content"
          }
        ],
        "removalCriteria": [
          "Unwanted sexual comments or behaviors towards someone",
          "Mimicking sexual acts using platform features",
          "Remarks about someone's intimate body parts or sexual performance",
          "Sexualization or sexual degradation through language or behaviors"
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
          "hacked",
          "impersonation",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Evidence of personal information being shared with malicious intent",
            "example": "Screenshots showing personal details with threatening captions or hashtags",
            "reason": "To establish both the sharing of private information and malicious intent"
          }
        ],
        "removalCriteria": [
          "Publishing personal information about someone without consent",
          "Threatening to publish personal information",
          "Objective indicators of malicious intent such as threatening captions or hashtags"
        ]
      },
      {
        "id": "tt-safety-harassment-coordinated",
        "reference": "TT-SAFETY-7",
        "summary": "TikTok prohibits inciting harassment or promoting coordinated abuse, including encouraging others to leave abusive comments or falsely report accounts.",
        "quote": "Inciting harassment or promoting coordinated abuse, such as encouraging others to leave abusive comments or falsely report an account",
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
            "description": "Evidence of content encouraging coordinated harassment",
            "example": "Posts calling for mass reporting or coordinated abuse campaigns",
            "reason": "To demonstrate the organized nature of the harassment"
          }
        ],
        "removalCriteria": [
          "Content encouraging others to leave abusive comments",
          "Promoting false reporting of accounts",
          "Organizing or inciting coordinated harassment campaigns"
        ]
      },
      {
        "id": "tt-safety-personal-info",
        "reference": "TT-SAFETY-PRIVACY",
        "summary": "TikTok has policies protecting personal information and provides mechanisms for reporting privacy violations through dedicated channels.",
        "quote": "If you think your intimate privacy has been violated on TikTok, report it to us here",
        "contentTypes": [
          "personal",
          "private",
          "intimate"
        ],
        "contentContexts": [
          "hacked",
          "impersonation",
          "relationship",
          "other"
        ],
        "timeframes": null,
        "evidenceRequirements": [
          {
            "description": "Use TikTok's privacy violation reporting form",
            "example": "Submit report through the dedicated privacy violation link",
            "reason": "Specialized reporting channel for privacy-related violations"
          }
        ],
        "removalCriteria": [
          "Violation of intimate privacy",
          "Unauthorized sharing of personal information",
          "Content that compromises individual privacy"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy",
      "summary": "TikTok provides a dedicated reporting mechanism for privacy violations including intimate privacy violations, with general appeals processes mentioned in enforcement guidelines.",
      "steps": [
        "Report privacy violations through the dedicated privacy reporting form",
        "For intimate privacy violations, use the specialized reporting channel",
        "Appeals processes are available as referenced in enforcement guidelines"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233332722-2",
    "reference": "TT-PRIVACY-SEC",
    "title": "Privacy and Security Guidelines",
    "summary": "Specific guidelines on personal information protection, preventing doxxing, identity theft, and other privacy violations including non-consensual sharing of personal data.",
    "url": "https://www.tiktok.com/community-guidelines/en/privacy-security",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
    "policies": [
      {
        "id": "tt-privacy-sec-personal-info-high-risk",
        "reference": "TT-PRIVACY-SEC-1",
        "summary": "TikTok prohibits content containing high-risk personal information that could lead to stalking, identity theft, fraud, or other harm, including home addresses, account login information, sensitive payment information, and identity numbers.",
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
            "reason": "To initiate the removal process for personal information violations"
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
        "summary": "TikTok may remove moderate-risk personal information shared without consent if it puts someone at risk of psychological harm, including contact details, medical information, image/audio likeness, and private communications on sensitive subjects.",
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
            "description": "Additional context demonstrating risk of psychological harm",
            "example": "Evidence showing potential for emotional distress or reputational damage",
            "reason": "Platform requires additional context to assess moderate-risk personal information"
          },
          {
            "description": "Proof that information was shared without consent",
            "example": "Documentation showing lack of permission to share the content",
            "reason": "To establish that sharing was non-consensual"
          }
        ],
        "removalCriteria": [
          "Moderate-risk personal information shared without consent",
          "Information puts someone at risk of psychological harm",
          "Content likely to cause emotional distress, reputational damage, or unwanted contact",
          "Content includes contact details or date of birth shared without consent",
          "Content includes medical information shared without consent",
          "Content includes image/audio likeness shared without consent",
          "Content includes private communications on sensitive subjects disclosed by non-participants"
        ]
      },
      {
        "id": "tt-privacy-sec-platform-security",
        "reference": "TT-PRIVACY-SEC-3",
        "summary": "TikTok prohibits attempts to break into the platform, steal information, abuse systems, share malware, engage in phishing/hacking, or reverse-engineer platform code and algorithms.",
        "quote": "We work hard to keep TikTok safe, secure, and running smoothly. That includes stopping any attempts to break into the platform, steal information, or abuse our systems. NOT ALLOWED: Giving someone else your login information or letting them break TikTok's rules on your account, Using unauthorized ways to access TikTok or creating fake versions of the platform, Sharing files or messages that carry malware or other harmful software, such as viruses or worms, Trying to steal personal information, hack accounts, or access data using tricks like phishing, smishing, or automated tools, Trying to reverse-engineer TikTok's code, systems, or algorithms—or create your own versions based on them",
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
            "description": "Evidence of unauthorized access attempts or security violations",
            "example": "Documentation of phishing attempts, malware distribution, or account compromise",
            "reason": "To demonstrate platform security violations"
          }
        ],
        "removalCriteria": [
          "Sharing login information or allowing rule violations on accounts",
          "Using unauthorized ways to access TikTok",
          "Creating fake versions of the platform",
          "Sharing files or messages with malware, viruses, or worms",
          "Attempting to steal personal information through phishing, smishing, or automated tools",
          "Attempting to hack accounts or access data without authorization",
          "Attempting to reverse-engineer TikTok's code, systems, or algorithms"
        ]
      }
    ],
    "appealProcess": {
      "url": "https://www.tiktok.com/legal/report/privacy?lang=en",
      "summary": "TikTok provides a privacy violation reporting system for users who believe their privacy has been violated",
      "steps": [
        "Access the privacy violation report form through the provided link",
        "Submit report detailing the privacy violation",
        "Provide required evidence and context as specified in the reporting form"
      ]
    }
  },
  {
    "id": "tiktok-new-1758233332722-3",
    "reference": "TT-SENSITIVE",
    "title": "Sensitive and Mature Themes Guidelines",
    "summary": "Policies covering sexually explicit content, non-consensual intimate imagery, and other sensitive content including enforcement and age-restriction measures.",
    "url": "https://www.tiktok.com/community-guidelines/en/sensitive-mature-themes",
    "accessTimestamp": "2025-09-18T22:08:52.722Z",
    "policies": [
      {
        "id": "tt-sensitive-nudity-sexual",
        "reference": "TT-SENSITIVE-BODY-EXPOSURE",
        "summary": "TikTok prohibits nudity, sexual activity, and sexually suggestive content involving minors, with removal for non-consensual intimate content.",
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
            "description": "Report content showing nudity or sexual activity",
            "example": "Content showing penetrative sex, non-penetrative sex, or oral sex",
            "reason": "Violates community guidelines on body exposure and sexualized behaviors"
          },
          {
            "description": "Report content showing significant body exposure of minors",
            "example": "Young people wearing only underwear or lingerie",
            "reason": "Protects youth from exploitation"
          }
        ],
        "removalCriteria": [
          "Penetrative sex, non-penetrative sex, or oral sex—including digital or illustrated images",
          "Physical sexual arousal or stimulation",
          "Nudity of adults or young people—including digital or illustrated images",
          "Significant body exposure of young people, such as wearing only underwear or lingerie",
          "Young people engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "Sexually explicit language involving or directed at young people"
        ]
      },
      {
        "id": "tt-sensitive-sexual-services",
        "reference": "TT-SENSITIVE-SEXUAL-SERVICES",
        "summary": "TikTok prohibits content facilitating access to sexual services including offers for sexual acts, chats, or imagery.",
        "quote": "Facilitating access to sexual services, such as offering or asking for sexual acts, sexual chats or imagery, or pornography",
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
            "description": "Report content offering or requesting sexual services",
            "example": "Posts offering sexual acts, sexual chats, or pornographic imagery",
            "reason": "Violates policy against sexual services facilitation"
          }
        ],
        "removalCriteria": [
          "Offering or asking for sexual acts",
          "Offering or asking for sexual chats or imagery",
          "Offering or asking for pornography"
        ]
      },
      {
        "id": "tt-sensitive-age-restricted",
        "reference": "TT-SENSITIVE-AGE-RESTRICTED",
        "summary": "TikTok age-restricts and removes from For You feed content showing significant adult body exposure or sexually suggestive adult behavior.",
        "quote": "Some content, like significant adult body exposure or sexually suggestive behavior involving adults, is age-restricted and ineligible for the FYF.",
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
            "description": "Report content showing significant adult body exposure",
            "example": "Adults wearing only nipple covers or underwear that doesn't cover most of the buttocks",
            "reason": "Content is age-restricted and ineligible for For You feed"
          },
          {
            "description": "Report adults engaging in sexually suggestive behavior",
            "example": "Intimate kissing, sexually suggestive acts, or sexualized framing involving adults",
            "reason": "Content requires age restriction"
          }
        ],
        "removalCriteria": [
          "Significant adult body exposure, such as wearing only nipple covers or underwear that doesn't cover most of the buttocks",
          "Adults engaging in intimate kissing, sexually suggestive acts, or sexualized framing",
          "In some regions, adults using sexually explicit language or showing or promoting sex products"
        ]
      },
      {
        "id": "tt-sensitive-graphic-content",
        "reference": "TT-SENSITIVE-GRAPHIC",
        "summary": "TikTok prohibits extremely gory, disturbing, or violent content that could cause psychological harm, including graphic violence and dead bodies.",
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
            "description": "Report graphic violent content or imagery of dead bodies",
            "example": "Content showing torture, moment of death, or dismembered bodies",
            "reason": "Violates policy against shocking and graphic content"
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
        "reference": "TT-SENSITIVE-ANIMAL",
        "summary": "TikTok prohibits animal abuse, cruelty, neglect, and exploitation including staged fights and bestiality.",
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
            "description": "Report content showing animal abuse or cruelty",
            "example": "Inhumane slaughter, mutilation, staged animal fights, or bestiality",
            "reason": "Violates animal welfare policies"
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
  }
],
};
